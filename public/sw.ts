import { importScripts } from "../next.config";

// If the loader is already loaded, just stop.
if (!(self as ServiceWorkerGlobalScope).define) {
  let registry = {};

  // Used for `eval` and `importScripts` where we can't get script URL by other means.
  // In both cases, it's safe to use a global var because those functions are synchronous.
  let nextDefineUri: string;

  const singleRequire = (uri: string, parentUri: string) => {
    uri = new URL(uri + ".js", parentUri).href;
    return (
      registry[uri] ||
      new Promise((resolve) => {
        if ("document" in self) {
          const script = document.createElement("script");
          script.src = uri;
          script.onload = resolve;
          document.head.appendChild(script);
        } else {
          nextDefineUri = uri;
          importScripts(uri);
          resolve();
        }
      }).then(() => {
        let promise = registry[uri];
        if (!promise) {
          throw new Error(`Module ${uri} didn’t register its module`);
        }
        return promise;
      })
    );
  };

  (self as ServiceWorkerGlobalScope).define = (depsNames: string[], factory: Function) => {
    const uri = nextDefineUri ||
        ("document" in self ? (document.currentScript as HTMLScriptElement).src : "") ||
        location.href;
    if (registry[uri]) {
        // Module is already loading or loaded.
        return;
    }
    let exports = {};
    const require = (depUri: string) => singleRequire(depUri, uri);
    const specialDeps = {
        module: { uri },
        exports,
        require,
    };
    registry[uri] = Promise.all(depsNames.map((depName: string) => specialDeps[depName] || require(depName))).then((deps) => {
        factory(...deps);
        return exports;
    });
};
}
define(["./workbox-327c579b"], function (workbox: any) {
    "use strict";
    importScripts();
    (self as ServiceWorkerGlobalScope).skipWaiting();
    workbox.clientsClaim();
    workbox.registerRoute("/", new workbox.NetworkFirst({
        cacheName: "start-url",
        plugins: [
            {
                cacheWillUpdate: async ({ request, response, event, state }: any) => {
                    if (response && response.type === "opaqueredirect") {
                        return new Response(response.body, {
                            status: 200,
                            statusText: "OK",
                            headers: response.headers,
                        });
                    }
                    return response;
                },
            },
        ],
    }), "GET");
    workbox.registerRoute(/.*/i, new workbox.NetworkOnly({
        cacheName: "dev",
        plugins: [],
    }), "GET");
});
//# sourceMappingURL=sw.js.map
