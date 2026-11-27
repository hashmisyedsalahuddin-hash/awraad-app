#!/usr/bin/env bash
set -euo pipefail

mkdir -p /tmp/play-signing

if [ -n "${PLAY_KEYSTORE_BASE64:-}" ] && [ -n "${PLAY_STORE_PASSWORD:-}" ] && [ -n "${PLAY_KEY_ALIAS:-}" ] && [ -n "${PLAY_KEY_PASSWORD:-}" ]; then
  printf '%s' "$PLAY_KEYSTORE_BASE64" | tr -d '[:space:]' | base64 -d > /tmp/play-signing/play-release.jks
  cat << 'EOF_GRADLE' > /tmp/play-signing/signing.gradle
android {
    signingConfigs {
        playRelease {
            storeFile file('/tmp/play-signing/play-release.jks')
            storePassword System.getenv('PLAY_STORE_PASSWORD') ?: ''
            keyAlias System.getenv('PLAY_KEY_ALIAS') ?: ''
            keyPassword System.getenv('PLAY_KEY_PASSWORD') ?: ''
        }
    }
    buildTypes {
        release {
            signingConfig signingConfigs.playRelease
            minifyEnabled false
            shrinkResources false
        }
    }
}
EOF_GRADLE
  if ! grep -q "apply from: '/tmp/play-signing/signing.gradle'" android/app/build.gradle; then
    printf "\napply from: '/tmp/play-signing/signing.gradle'\n" >> android/app/build.gradle
  fi
else
  echo "WARNING: PLAY_* secrets not set; building unsigned bundleRelease"
fi

(cd android && ./gradlew bundleRelease --no-daemon)
AAB_SRC="$(find android/app/build/outputs/bundle -name '*.aab' | head -n1)"
[ -n "$AAB_SRC" ] && [ -f "$AAB_SRC" ]
cp -f "$AAB_SRC" /tmp/play-signing/Awraad-e-Alaviya-Nooriya-release.aab
ls -lh /tmp/play-signing/Awraad-e-Alaviya-Nooriya-release.aab
