// 以前このURLで動いていたアプリの「オフライン保存」を解除するためのファイルです。
// 古いアプリを開いたことがある端末は、このファイルに置きかわったときに保存データを消して、自動で解除されます。
self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", e => {
  e.waitUntil((async () => {
    for (const k of await caches.keys()) await caches.delete(k);
    await self.registration.unregister();
    for (const c of await self.clients.matchAll({ type: "window" })) c.navigate(c.url);
  })());
});
