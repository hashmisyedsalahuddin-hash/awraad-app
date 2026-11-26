if ('serviceWorker' in navigator && window.location.protocol === 'https:') {
  const hadController = Boolean(navigator.serviceWorker.controller);
  let refreshing = false;
  navigator.serviceWorker.addEventListener('controllerchange', () => {
    if (hadController && !refreshing) {
      refreshing = true;
      window.location.reload();
    }
  });
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./sw.js', { updateViaCache: 'none' }).then((reg) => {
      reg.update();
      setInterval(() => { reg.update().catch(() => {}); }, 25000);
    }).catch(() => {});
  });
}
