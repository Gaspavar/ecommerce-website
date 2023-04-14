// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"jC2qd":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "890e741a975ef6c8";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets, assetsToDispose, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets); // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                } // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
             // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle, id) {
    // Execute the module.
    bundle(id); // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            }); // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"8lqZg":[function(require,module,exports) {
var _apiJs = require("./api.js");
const title = document.querySelector(".title");
const description = document.querySelector(".description");
const imageURL = document.querySelector(".main-image");
// const firstVariantImage = document.querySelector(".first-variant-image")
// const secondVariantImage = document.querySelector(".second-variant-image")
// const thirdVariantImage = document.querySelector(".third-variant-image")
const firstVariantTitle = document.querySelector(".first-variant-title");
const secondVariantTitle = document.querySelector(".second-variant-title");
const thirdVariantTitle = document.querySelector(".third-variant-title");
const variantSelection = document.querySelector("#variant-selection");
(0, _apiJs.getProductData)().then((product)=>{
    title.textContent = product.title;
    description.textContent = product.description;
    imageURL.attributes["src"].textContent = product.image;
    firstVariantTitle.textContent = product.firstVariant.title;
    secondVariantTitle.textContent = product.secondVariant.title;
    thirdVariantTitle.textContent = product.thirdVariant.title;
    // Writing a function to change image displayed depending on the variant selected
    const changeImageURL = (variant)=>{
        if (variant.target.value === "green") imageURL.attributes["src"].textContent = product.firstVariant.image;
        else if (variant.target.value === "olive") imageURL.attributes["src"].textContent = product.secondVariant.image;
        else if (variant.target.value === "ocean") imageURL.attributes["src"].textContent = product.thirdVariant.image;
    };
    variantSelection.addEventListener("change", changeImageURL);
});

},{"./api.js":"8Zgej"}],"8Zgej":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getProductData", ()=>getProductData);
var _esm = require("graphql-request/build/esm");
const getProductData = async ()=>{
    const query = (0, _esm.gql)`
  {
    product(id: "gid://shopify/Product/7982905098262") {
      id
      title
      description
      featuredImage {
        id
        url
      }
      variants(first: 3) {
        edges {
          cursor
          node {
            id
            title
            image {
              url
            }
            price {
              amount
              currencyCode
            }
          }
        }
      }
    }
  }
`;
    const response = await (0, _esm.request)("https://mock.shop/api", query);
    const productInfo = {
        title: response.product.title,
        description: response.product.description,
        image: response.product.featuredImage.url,
        firstVariant: {
            title: response.product.variants.edges[0].node.title,
            image: response.product.variants.edges[0].node.image.url,
            price: response.product.variants.edges[0].node.price.amount,
            currency: response.product.variants.edges[0].node.price.currencyCode
        },
        secondVariant: {
            title: response.product.variants.edges[1].node.title,
            image: response.product.variants.edges[1].node.image.url,
            price: response.product.variants.edges[1].node.price.amount,
            currency: response.product.variants.edges[1].node.price.currencyCode
        },
        thirdVariant: {
            title: response.product.variants.edges[2].node.title,
            image: response.product.variants.edges[2].node.image.url,
            price: response.product.variants.edges[2].node.price.amount,
            currency: response.product.variants.edges[2].node.price.currencyCode
        }
    };
    return productInfo;
};

},{"graphql-request/build/esm":"3PBrD","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3PBrD":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "GraphQLWebSocketClient", ()=>(0, _graphqlWsJs.GraphQLWebSocketClient));
parcelHelpers.export(exports, "resolveRequestDocument", ()=>(0, _resolveRequestDocumentJs.resolveRequestDocument));
parcelHelpers.export(exports, "ClientError", ()=>(0, _typesJs.ClientError));
/**
 * GraphQL Client.
 */ parcelHelpers.export(exports, "GraphQLClient", ()=>GraphQLClient);
parcelHelpers.export(exports, "rawRequest", ()=>rawRequest);
parcelHelpers.export(exports, "request", ()=>request);
parcelHelpers.export(exports, "batchRequests", ()=>batchRequests);
parcelHelpers.export(exports, "gql", ()=>gql);
var _createRequestBodyJs = require("./createRequestBody.js");
var _createRequestBodyJsDefault = parcelHelpers.interopDefault(_createRequestBodyJs);
var _defaultJsonSerializerJs = require("./defaultJsonSerializer.js");
var _helpersJs = require("./helpers.js");
var _parseArgsJs = require("./parseArgs.js");
var _resolveRequestDocumentJs = require("./resolveRequestDocument.js");
var _typesJs = require("./types.js");
var _crossFetch = require("cross-fetch");
var _crossFetchDefault = parcelHelpers.interopDefault(_crossFetch);
var _graphqlWsJs = require("./graphql-ws.js");
/**
 * Convert the given headers configuration into a plain object.
 */ const resolveHeaders = (headers)=>{
    let oHeaders = {};
    if (headers) {
        if (typeof Headers !== `undefined` && headers instanceof Headers || _crossFetch && _crossFetch.Headers && headers instanceof _crossFetch.Headers) oHeaders = (0, _helpersJs.HeadersInstanceToPlainObject)(headers);
        else if (Array.isArray(headers)) headers.forEach(([name, value])=>{
            if (name && value !== undefined) oHeaders[name] = value;
        });
        else oHeaders = headers;
    }
    return oHeaders;
};
/**
 * Clean a GraphQL document to send it via a GET query
 */ const cleanQuery = (str)=>str.replace(/([\s,]|#[^\n\r]+)+/g, ` `).trim();
/**
 * Create query string for GraphQL request
 */ const buildRequestConfig = (params)=>{
    if (!Array.isArray(params.query)) {
        const params_ = params;
        const search = [
            `query=${encodeURIComponent(cleanQuery(params_.query))}`
        ];
        if (params.variables) search.push(`variables=${encodeURIComponent(params_.jsonSerializer.stringify(params_.variables))}`);
        if (params_.operationName) search.push(`operationName=${encodeURIComponent(params_.operationName)}`);
        return search.join(`&`);
    }
    if (typeof params.variables !== `undefined` && !Array.isArray(params.variables)) throw new Error(`Cannot create query with given variable type, array expected`);
    // Batch support
    const params_ = params;
    const payload = params.query.reduce((acc, currentQuery, index)=>{
        acc.push({
            query: cleanQuery(currentQuery),
            variables: params_.variables ? params_.jsonSerializer.stringify(params_.variables[index]) : undefined
        });
        return acc;
    }, []);
    return `query=${encodeURIComponent(params_.jsonSerializer.stringify(payload))}`;
};
const createHttpMethodFetcher = (method)=>async (params)=>{
        const { url , query , variables , operationName , fetch , fetchOptions , middleware  } = params;
        const headers = {
            ...params.headers
        };
        let queryParams = ``;
        let body = undefined;
        if (method === `POST`) {
            body = (0, _createRequestBodyJsDefault.default)(query, variables, operationName, fetchOptions.jsonSerializer);
            if (typeof body === `string`) // @ts-expect-error todo
            headers[`Content-Type`] = `application/json`;
        } else // @ts-expect-error todo needs ADT for TS to understand the different states
        queryParams = buildRequestConfig({
            query,
            variables,
            operationName,
            jsonSerializer: fetchOptions.jsonSerializer ?? (0, _defaultJsonSerializerJs.defaultJsonSerializer)
        });
        const init = {
            method,
            headers,
            body,
            ...fetchOptions
        };
        let urlResolved = url;
        let initResolved = init;
        if (middleware) {
            const result = await Promise.resolve(middleware({
                ...init,
                url,
                operationName,
                variables
            }));
            const { url: urlNew , ...initNew } = result;
            urlResolved = urlNew;
            initResolved = initNew;
        }
        if (queryParams) urlResolved = `${urlResolved}?${queryParams}`;
        return await fetch(urlResolved, initResolved);
    };
class GraphQLClient {
    constructor(url, requestConfig = {}){
        this.url = url;
        this.requestConfig = requestConfig;
        /**
         * Send a GraphQL query to the server.
         */ this.rawRequest = async (...args)=>{
            const [queryOrOptions, variables, requestHeaders] = args;
            const rawRequestOptions = (0, _parseArgsJs.parseRawRequestArgs)(queryOrOptions, variables, requestHeaders);
            const { headers , fetch =(0, _crossFetchDefault.default) , method =`POST` , requestMiddleware , responseMiddleware , ...fetchOptions } = this.requestConfig;
            const { url  } = this;
            if (rawRequestOptions.signal !== undefined) fetchOptions.signal = rawRequestOptions.signal;
            const { operationName  } = (0, _resolveRequestDocumentJs.resolveRequestDocument)(rawRequestOptions.query);
            return makeRequest({
                url,
                query: rawRequestOptions.query,
                variables: rawRequestOptions.variables,
                headers: {
                    ...resolveHeaders(callOrIdentity(headers)),
                    ...resolveHeaders(rawRequestOptions.requestHeaders)
                },
                operationName,
                fetch,
                method,
                fetchOptions,
                middleware: requestMiddleware
            }).then((response)=>{
                if (responseMiddleware) responseMiddleware(response);
                return response;
            }).catch((error)=>{
                if (responseMiddleware) responseMiddleware(error);
                throw error;
            });
        };
    }
    async request(documentOrOptions, ...variablesAndRequestHeaders) {
        const [variables, requestHeaders] = variablesAndRequestHeaders;
        const requestOptions = (0, _parseArgsJs.parseRequestArgs)(documentOrOptions, variables, requestHeaders);
        const { headers , fetch =(0, _crossFetchDefault.default) , method =`POST` , requestMiddleware , responseMiddleware , ...fetchOptions } = this.requestConfig;
        const { url  } = this;
        if (requestOptions.signal !== undefined) fetchOptions.signal = requestOptions.signal;
        const { query , operationName  } = (0, _resolveRequestDocumentJs.resolveRequestDocument)(requestOptions.document);
        return makeRequest({
            url,
            query,
            variables: requestOptions.variables,
            headers: {
                ...resolveHeaders(callOrIdentity(headers)),
                ...resolveHeaders(requestOptions.requestHeaders)
            },
            operationName,
            fetch,
            method,
            fetchOptions,
            middleware: requestMiddleware
        }).then((response)=>{
            if (responseMiddleware) responseMiddleware(response);
            return response.data;
        }).catch((error)=>{
            if (responseMiddleware) responseMiddleware(error);
            throw error;
        });
    }
    // prettier-ignore
    batchRequests(documentsOrOptions, requestHeaders) {
        const batchRequestOptions = (0, _parseArgsJs.parseBatchRequestArgs)(documentsOrOptions, requestHeaders);
        const { headers , ...fetchOptions } = this.requestConfig;
        if (batchRequestOptions.signal !== undefined) fetchOptions.signal = batchRequestOptions.signal;
        const queries = batchRequestOptions.documents.map(({ document  })=>(0, _resolveRequestDocumentJs.resolveRequestDocument)(document).query);
        const variables = batchRequestOptions.documents.map(({ variables  })=>variables);
        return makeRequest({
            url: this.url,
            query: queries,
            // @ts-expect-error TODO reconcile batch variables into system.
            variables,
            headers: {
                ...resolveHeaders(callOrIdentity(headers)),
                ...resolveHeaders(batchRequestOptions.requestHeaders)
            },
            operationName: undefined,
            fetch: this.requestConfig.fetch ?? (0, _crossFetchDefault.default),
            method: this.requestConfig.method || `POST`,
            fetchOptions,
            middleware: this.requestConfig.requestMiddleware
        }).then((response)=>{
            if (this.requestConfig.responseMiddleware) this.requestConfig.responseMiddleware(response);
            return response.data;
        }).catch((error)=>{
            if (this.requestConfig.responseMiddleware) this.requestConfig.responseMiddleware(error);
            throw error;
        });
    }
    setHeaders(headers) {
        this.requestConfig.headers = headers;
        return this;
    }
    /**
     * Attach a header to the client. All subsequent requests will have this header.
     */ setHeader(key, value) {
        const { headers  } = this.requestConfig;
        if (headers) // todo what if headers is in nested array form... ?
        //@ts-ignore
        headers[key] = value;
        else this.requestConfig.headers = {
            [key]: value
        };
        return this;
    }
    /**
     * Change the client endpoint. All subsequent requests will send to this endpoint.
     */ setEndpoint(value) {
        this.url = value;
        return this;
    }
}
const makeRequest = async (params)=>{
    const { query , variables , fetchOptions  } = params;
    const fetcher = createHttpMethodFetcher((0, _helpersJs.uppercase)(params.method ?? `post`));
    const isBatchingQuery = Array.isArray(params.query);
    const response = await fetcher(params);
    const result = await getResult(response, fetchOptions.jsonSerializer ?? (0, _defaultJsonSerializerJs.defaultJsonSerializer));
    const successfullyReceivedData = Array.isArray(result) ? !result.some(({ data  })=>!data) : Boolean(result.data);
    const successfullyPassedErrorPolicy = Array.isArray(result) || !result.errors || Array.isArray(result.errors) && !result.errors.length || fetchOptions.errorPolicy === `all` || fetchOptions.errorPolicy === `ignore`;
    if (response.ok && successfullyPassedErrorPolicy && successfullyReceivedData) {
        // @ts-expect-error TODO fixme
        const { errors , ...rest } = Array.isArray(result) ? result : result;
        const data = fetchOptions.errorPolicy === `ignore` ? rest : result;
        const dataEnvelope = isBatchingQuery ? {
            data
        } : data;
        // @ts-expect-error TODO
        return {
            ...dataEnvelope,
            headers: response.headers,
            status: response.status
        };
    } else {
        const errorResult = typeof result === `string` ? {
            error: result
        } : result;
        throw new (0, _typesJs.ClientError)(// @ts-expect-error TODO
        {
            ...errorResult,
            status: response.status,
            headers: response.headers
        }, {
            query,
            variables
        });
    }
};
const rawRequest = async (...args)=>{
    const [urlOrOptions, query, ...variablesAndRequestHeaders] = args;
    const requestOptions = (0, _parseArgsJs.parseRawRequestExtendedArgs)(urlOrOptions, query, ...variablesAndRequestHeaders);
    const client = new GraphQLClient(requestOptions.url);
    return client.rawRequest({
        ...requestOptions
    });
};
async function request(urlOrOptions, // @ts-ignore
document, ...variablesAndRequestHeaders) {
    // @ts-ignore
    const requestOptions = (0, _parseArgsJs.parseRequestExtendedArgs)(urlOrOptions, document, ...variablesAndRequestHeaders);
    const client = new GraphQLClient(requestOptions.url);
    return client.request({
        ...requestOptions
    });
}
const batchRequests = async (...args)=>{
    const params = parseBatchRequestsArgsExtended(args);
    const client = new GraphQLClient(params.url);
    return client.batchRequests(params);
};
const parseBatchRequestsArgsExtended = (args)=>{
    if (args.length === 1) return args[0];
    else return {
        url: args[0],
        documents: args[1],
        requestHeaders: args[2],
        signal: undefined
    };
};
exports.default = request;
const getResult = async (response, jsonSerializer)=>{
    let contentType;
    response.headers.forEach((value, key)=>{
        if (key.toLowerCase() === `content-type`) contentType = value;
    });
    if (contentType && (contentType.toLowerCase().startsWith(`application/json`) || contentType.toLowerCase().startsWith(`application/graphql+json`) || contentType.toLowerCase().startsWith(`application/graphql-response+json`))) return jsonSerializer.parse(await response.text());
    else return response.text();
};
const callOrIdentity = (value)=>{
    return typeof value === `function` ? value() : value;
};
const gql = (chunks, ...variables)=>{
    return chunks.reduce((accumulator, chunk, index)=>`${accumulator}${chunk}${index in variables ? variables[index] : ``}`, ``);
};

},{"./createRequestBody.js":"47FA1","./defaultJsonSerializer.js":"6O7JF","./helpers.js":"eJxK5","./parseArgs.js":"i7DQY","./resolveRequestDocument.js":"2vwbW","./types.js":"74jlq","cross-fetch":"j4ah4","./graphql-ws.js":"duqQG","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"47FA1":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultJsonSerializerJs = require("./defaultJsonSerializer.js");
var _extractFiles = require("extract-files");
var _formData = require("form-data");
var _formDataDefault = parcelHelpers.interopDefault(_formData);
/**
 * Duck type if NodeJS stream
 * https://github.com/sindresorhus/is-stream/blob/3750505b0727f6df54324784fe369365ef78841e/index.js#L3
 */ const isExtractableFileEnhanced = (value)=>(0, _extractFiles.isExtractableFile)(value) || value !== null && typeof value === `object` && typeof value.pipe === `function`;
/**
 * Returns Multipart Form if body contains files
 * (https://github.com/jaydenseric/graphql-multipart-request-spec)
 * Otherwise returns JSON
 */ const createRequestBody = (query, variables, operationName, jsonSerializer = (0, _defaultJsonSerializerJs.defaultJsonSerializer))=>{
    const { clone , files  } = (0, _extractFiles.extractFiles)({
        query,
        variables,
        operationName
    }, ``, isExtractableFileEnhanced);
    if (files.size === 0) {
        if (!Array.isArray(query)) return jsonSerializer.stringify(clone);
        if (typeof variables !== `undefined` && !Array.isArray(variables)) throw new Error(`Cannot create request body with given variable type, array expected`);
        // Batch support
        const payload = query.reduce((accu, currentQuery, index)=>{
            accu.push({
                query: currentQuery,
                variables: variables ? variables[index] : undefined
            });
            return accu;
        }, []);
        return jsonSerializer.stringify(payload);
    }
    const Form = typeof FormData === `undefined` ? (0, _formDataDefault.default) : FormData;
    const form = new Form();
    form.append(`operations`, jsonSerializer.stringify(clone));
    const map = {};
    let i = 0;
    files.forEach((paths)=>{
        map[++i] = paths;
    });
    form.append(`map`, jsonSerializer.stringify(map));
    i = 0;
    files.forEach((paths, file)=>{
        form.append(`${++i}`, file);
    });
    return form;
};
exports.default = createRequestBody;

},{"./defaultJsonSerializer.js":"6O7JF","extract-files":"hKzvT","form-data":"2TZrR","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6O7JF":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "defaultJsonSerializer", ()=>defaultJsonSerializer);
const defaultJsonSerializer = {
    parse: JSON.parse,
    stringify: JSON.stringify
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"hKzvT":[function(require,module,exports) {
"use strict";
exports.ReactNativeFile = require("27c91f3ca67e932a");
exports.extractFiles = require("c88f63ff58d8de9");
exports.isExtractableFile = require("5fc8d200e82ae19d");

},{"27c91f3ca67e932a":"iC9PE","c88f63ff58d8de9":"cYQU7","5fc8d200e82ae19d":"7dAZ4"}],"iC9PE":[function(require,module,exports) {
"use strict";
module.exports = function ReactNativeFile(_ref) {
    var uri = _ref.uri, name = _ref.name, type = _ref.type;
    this.uri = uri;
    this.name = name;
    this.type = type;
};

},{}],"cYQU7":[function(require,module,exports) {
"use strict";
var defaultIsExtractableFile = require("ff38282b0ebd5d06");
module.exports = function extractFiles(value, path, isExtractableFile) {
    if (path === void 0) path = "";
    if (isExtractableFile === void 0) isExtractableFile = defaultIsExtractableFile;
    var clone;
    var files = new Map();
    function addFile(paths, file) {
        var storedPaths = files.get(file);
        if (storedPaths) storedPaths.push.apply(storedPaths, paths);
        else files.set(file, paths);
    }
    if (isExtractableFile(value)) {
        clone = null;
        addFile([
            path
        ], value);
    } else {
        var prefix = path ? path + "." : "";
        if (typeof FileList !== "undefined" && value instanceof FileList) clone = Array.prototype.map.call(value, function(file, i) {
            addFile([
                "" + prefix + i
            ], file);
            return null;
        });
        else if (Array.isArray(value)) clone = value.map(function(child, i) {
            var result = extractFiles(child, "" + prefix + i, isExtractableFile);
            result.files.forEach(addFile);
            return result.clone;
        });
        else if (value && value.constructor === Object) {
            clone = {};
            for(var i in value){
                var result = extractFiles(value[i], "" + prefix + i, isExtractableFile);
                result.files.forEach(addFile);
                clone[i] = result.clone;
            }
        } else clone = value;
    }
    return {
        clone: clone,
        files: files
    };
};

},{"ff38282b0ebd5d06":"7dAZ4"}],"7dAZ4":[function(require,module,exports) {
"use strict";
var ReactNativeFile = require("76af65cdc9aac895");
module.exports = function isExtractableFile(value) {
    return typeof File !== "undefined" && value instanceof File || typeof Blob !== "undefined" && value instanceof Blob || value instanceof ReactNativeFile;
};

},{"76af65cdc9aac895":"iC9PE"}],"2TZrR":[function(require,module,exports) {
/* eslint-env browser */ module.exports = typeof self == "object" ? self.FormData : window.FormData;

},{}],"eJxK5":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "uppercase", ()=>uppercase);
parcelHelpers.export(exports, "HeadersInstanceToPlainObject", ()=>HeadersInstanceToPlainObject);
const uppercase = (str)=>str.toUpperCase();
const HeadersInstanceToPlainObject = (headers)=>{
    const o = {};
    headers.forEach((v, k)=>{
        o[k] = v;
    });
    return o;
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"i7DQY":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "parseRequestArgs", ()=>parseRequestArgs);
parcelHelpers.export(exports, "parseRawRequestArgs", ()=>parseRawRequestArgs);
parcelHelpers.export(exports, "parseBatchRequestArgs", ()=>parseBatchRequestArgs);
parcelHelpers.export(exports, "parseRequestExtendedArgs", ()=>parseRequestExtendedArgs);
parcelHelpers.export(exports, "parseRawRequestExtendedArgs", ()=>parseRawRequestExtendedArgs);
const parseRequestArgs = (documentOrOptions, variables, requestHeaders)=>{
    return documentOrOptions.document ? documentOrOptions : {
        document: documentOrOptions,
        variables: variables,
        requestHeaders: requestHeaders,
        signal: undefined
    };
};
const parseRawRequestArgs = (queryOrOptions, variables, requestHeaders)=>{
    return queryOrOptions.query ? queryOrOptions : {
        query: queryOrOptions,
        variables: variables,
        requestHeaders: requestHeaders,
        signal: undefined
    };
};
const parseBatchRequestArgs = (documentsOrOptions, requestHeaders)=>{
    return documentsOrOptions.documents ? documentsOrOptions : {
        documents: documentsOrOptions,
        requestHeaders: requestHeaders,
        signal: undefined
    };
};
const parseRequestExtendedArgs = (urlOrOptions, document, ...variablesAndRequestHeaders)=>{
    const [variables, requestHeaders] = variablesAndRequestHeaders;
    return urlOrOptions.document ? urlOrOptions : {
        url: urlOrOptions,
        document: document,
        variables,
        requestHeaders,
        signal: undefined
    };
};
const parseRawRequestExtendedArgs = (urlOrOptions, query, ...variablesAndRequestHeaders)=>{
    const [variables, requestHeaders] = variablesAndRequestHeaders;
    return urlOrOptions.query ? urlOrOptions : {
        url: urlOrOptions,
        query: query,
        variables,
        requestHeaders,
        signal: undefined
    };
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2vwbW":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "resolveRequestDocument", ()=>resolveRequestDocument);
var _graphql = require("graphql");
/**
 * helpers
 */ const extractOperationName = (document)=>{
    let operationName = undefined;
    const operationDefinitions = document.definitions.filter((definition)=>definition.kind === `OperationDefinition`);
    if (operationDefinitions.length === 1) operationName = operationDefinitions[0]?.name?.value;
    return operationName;
};
const resolveRequestDocument = (document)=>{
    if (typeof document === `string`) {
        let operationName = undefined;
        try {
            const parsedDocument = (0, _graphql.parse)(document);
            operationName = extractOperationName(parsedDocument);
        } catch (err) {
        // Failed parsing the document, the operationName will be undefined
        }
        return {
            query: document,
            operationName
        };
    }
    const operationName = extractOperationName(document);
    return {
        query: (0, _graphql.print)(document),
        operationName
    };
};

},{"graphql":"dwHFG","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dwHFG":[function(require,module,exports) {
/**
 * GraphQL.js provides a reference implementation for the GraphQL specification
 * but is also a useful utility for operating on GraphQL files and building
 * sophisticated tools.
 *
 * This primary module exports a general purpose function for fulfilling all
 * steps of the GraphQL specification in a single operation, but also includes
 * utilities for every part of the GraphQL specification:
 *
 *   - Parsing the GraphQL language.
 *   - Building a GraphQL type schema.
 *   - Validating a GraphQL request against a type schema.
 *   - Executing a GraphQL request against a type schema.
 *
 * This also includes utility functions for operating on GraphQL types and
 * GraphQL documents to facilitate building tools.
 *
 * You may also import from each sub-directory directly. For example, the
 * following two import statements are equivalent:
 *
 * ```ts
 * import { parse } from 'graphql';
 * import { parse } from 'graphql/language';
 * ```
 *
 * @packageDocumentation
 */ // The GraphQL.js version info.
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "version", ()=>(0, _versionMjs.version)) // The primary entry point into fulfilling a GraphQL request.
;
parcelHelpers.export(exports, "versionInfo", ()=>(0, _versionMjs.versionInfo));
parcelHelpers.export(exports, "graphql", ()=>(0, _graphqlMjs.graphql)) // Create and operate on GraphQL type definitions and schema.
;
parcelHelpers.export(exports, "graphqlSync", ()=>(0, _graphqlMjs.graphqlSync));
parcelHelpers.export(exports, "resolveObjMapThunk", ()=>(0, _indexMjs.resolveObjMapThunk));
parcelHelpers.export(exports, "resolveReadonlyArrayThunk", ()=>(0, _indexMjs.resolveReadonlyArrayThunk));
parcelHelpers.export(exports, "GraphQLSchema", ()=>(0, _indexMjs.GraphQLSchema));
parcelHelpers.export(exports, "GraphQLDirective", ()=>(0, _indexMjs.GraphQLDirective));
parcelHelpers.export(exports, "GraphQLScalarType", ()=>(0, _indexMjs.GraphQLScalarType));
parcelHelpers.export(exports, "GraphQLObjectType", ()=>(0, _indexMjs.GraphQLObjectType));
parcelHelpers.export(exports, "GraphQLInterfaceType", ()=>(0, _indexMjs.GraphQLInterfaceType));
parcelHelpers.export(exports, "GraphQLUnionType", ()=>(0, _indexMjs.GraphQLUnionType));
parcelHelpers.export(exports, "GraphQLEnumType", ()=>(0, _indexMjs.GraphQLEnumType));
parcelHelpers.export(exports, "GraphQLInputObjectType", ()=>(0, _indexMjs.GraphQLInputObjectType));
parcelHelpers.export(exports, "GraphQLList", ()=>(0, _indexMjs.GraphQLList));
parcelHelpers.export(exports, "GraphQLNonNull", ()=>(0, _indexMjs.GraphQLNonNull));
parcelHelpers.export(exports, "specifiedScalarTypes", ()=>(0, _indexMjs.specifiedScalarTypes));
parcelHelpers.export(exports, "GraphQLInt", ()=>(0, _indexMjs.GraphQLInt));
parcelHelpers.export(exports, "GraphQLFloat", ()=>(0, _indexMjs.GraphQLFloat));
parcelHelpers.export(exports, "GraphQLString", ()=>(0, _indexMjs.GraphQLString));
parcelHelpers.export(exports, "GraphQLBoolean", ()=>(0, _indexMjs.GraphQLBoolean));
parcelHelpers.export(exports, "GraphQLID", ()=>(0, _indexMjs.GraphQLID));
parcelHelpers.export(exports, "GRAPHQL_MAX_INT", ()=>(0, _indexMjs.GRAPHQL_MAX_INT));
parcelHelpers.export(exports, "GRAPHQL_MIN_INT", ()=>(0, _indexMjs.GRAPHQL_MIN_INT));
parcelHelpers.export(exports, "specifiedDirectives", ()=>(0, _indexMjs.specifiedDirectives));
parcelHelpers.export(exports, "GraphQLIncludeDirective", ()=>(0, _indexMjs.GraphQLIncludeDirective));
parcelHelpers.export(exports, "GraphQLSkipDirective", ()=>(0, _indexMjs.GraphQLSkipDirective));
parcelHelpers.export(exports, "GraphQLDeprecatedDirective", ()=>(0, _indexMjs.GraphQLDeprecatedDirective));
parcelHelpers.export(exports, "GraphQLSpecifiedByDirective", ()=>(0, _indexMjs.GraphQLSpecifiedByDirective));
parcelHelpers.export(exports, "TypeKind", ()=>(0, _indexMjs.TypeKind));
parcelHelpers.export(exports, "DEFAULT_DEPRECATION_REASON", ()=>(0, _indexMjs.DEFAULT_DEPRECATION_REASON));
parcelHelpers.export(exports, "introspectionTypes", ()=>(0, _indexMjs.introspectionTypes));
parcelHelpers.export(exports, "__Schema", ()=>(0, _indexMjs.__Schema));
parcelHelpers.export(exports, "__Directive", ()=>(0, _indexMjs.__Directive));
parcelHelpers.export(exports, "__DirectiveLocation", ()=>(0, _indexMjs.__DirectiveLocation));
parcelHelpers.export(exports, "__Type", ()=>(0, _indexMjs.__Type));
parcelHelpers.export(exports, "__Field", ()=>(0, _indexMjs.__Field));
parcelHelpers.export(exports, "__InputValue", ()=>(0, _indexMjs.__InputValue));
parcelHelpers.export(exports, "__EnumValue", ()=>(0, _indexMjs.__EnumValue));
parcelHelpers.export(exports, "__TypeKind", ()=>(0, _indexMjs.__TypeKind));
parcelHelpers.export(exports, "SchemaMetaFieldDef", ()=>(0, _indexMjs.SchemaMetaFieldDef));
parcelHelpers.export(exports, "TypeMetaFieldDef", ()=>(0, _indexMjs.TypeMetaFieldDef));
parcelHelpers.export(exports, "TypeNameMetaFieldDef", ()=>(0, _indexMjs.TypeNameMetaFieldDef));
parcelHelpers.export(exports, "isSchema", ()=>(0, _indexMjs.isSchema));
parcelHelpers.export(exports, "isDirective", ()=>(0, _indexMjs.isDirective));
parcelHelpers.export(exports, "isType", ()=>(0, _indexMjs.isType));
parcelHelpers.export(exports, "isScalarType", ()=>(0, _indexMjs.isScalarType));
parcelHelpers.export(exports, "isObjectType", ()=>(0, _indexMjs.isObjectType));
parcelHelpers.export(exports, "isInterfaceType", ()=>(0, _indexMjs.isInterfaceType));
parcelHelpers.export(exports, "isUnionType", ()=>(0, _indexMjs.isUnionType));
parcelHelpers.export(exports, "isEnumType", ()=>(0, _indexMjs.isEnumType));
parcelHelpers.export(exports, "isInputObjectType", ()=>(0, _indexMjs.isInputObjectType));
parcelHelpers.export(exports, "isListType", ()=>(0, _indexMjs.isListType));
parcelHelpers.export(exports, "isNonNullType", ()=>(0, _indexMjs.isNonNullType));
parcelHelpers.export(exports, "isInputType", ()=>(0, _indexMjs.isInputType));
parcelHelpers.export(exports, "isOutputType", ()=>(0, _indexMjs.isOutputType));
parcelHelpers.export(exports, "isLeafType", ()=>(0, _indexMjs.isLeafType));
parcelHelpers.export(exports, "isCompositeType", ()=>(0, _indexMjs.isCompositeType));
parcelHelpers.export(exports, "isAbstractType", ()=>(0, _indexMjs.isAbstractType));
parcelHelpers.export(exports, "isWrappingType", ()=>(0, _indexMjs.isWrappingType));
parcelHelpers.export(exports, "isNullableType", ()=>(0, _indexMjs.isNullableType));
parcelHelpers.export(exports, "isNamedType", ()=>(0, _indexMjs.isNamedType));
parcelHelpers.export(exports, "isRequiredArgument", ()=>(0, _indexMjs.isRequiredArgument));
parcelHelpers.export(exports, "isRequiredInputField", ()=>(0, _indexMjs.isRequiredInputField));
parcelHelpers.export(exports, "isSpecifiedScalarType", ()=>(0, _indexMjs.isSpecifiedScalarType));
parcelHelpers.export(exports, "isIntrospectionType", ()=>(0, _indexMjs.isIntrospectionType));
parcelHelpers.export(exports, "isSpecifiedDirective", ()=>(0, _indexMjs.isSpecifiedDirective));
parcelHelpers.export(exports, "assertSchema", ()=>(0, _indexMjs.assertSchema));
parcelHelpers.export(exports, "assertDirective", ()=>(0, _indexMjs.assertDirective));
parcelHelpers.export(exports, "assertType", ()=>(0, _indexMjs.assertType));
parcelHelpers.export(exports, "assertScalarType", ()=>(0, _indexMjs.assertScalarType));
parcelHelpers.export(exports, "assertObjectType", ()=>(0, _indexMjs.assertObjectType));
parcelHelpers.export(exports, "assertInterfaceType", ()=>(0, _indexMjs.assertInterfaceType));
parcelHelpers.export(exports, "assertUnionType", ()=>(0, _indexMjs.assertUnionType));
parcelHelpers.export(exports, "assertEnumType", ()=>(0, _indexMjs.assertEnumType));
parcelHelpers.export(exports, "assertInputObjectType", ()=>(0, _indexMjs.assertInputObjectType));
parcelHelpers.export(exports, "assertListType", ()=>(0, _indexMjs.assertListType));
parcelHelpers.export(exports, "assertNonNullType", ()=>(0, _indexMjs.assertNonNullType));
parcelHelpers.export(exports, "assertInputType", ()=>(0, _indexMjs.assertInputType));
parcelHelpers.export(exports, "assertOutputType", ()=>(0, _indexMjs.assertOutputType));
parcelHelpers.export(exports, "assertLeafType", ()=>(0, _indexMjs.assertLeafType));
parcelHelpers.export(exports, "assertCompositeType", ()=>(0, _indexMjs.assertCompositeType));
parcelHelpers.export(exports, "assertAbstractType", ()=>(0, _indexMjs.assertAbstractType));
parcelHelpers.export(exports, "assertWrappingType", ()=>(0, _indexMjs.assertWrappingType));
parcelHelpers.export(exports, "assertNullableType", ()=>(0, _indexMjs.assertNullableType));
parcelHelpers.export(exports, "assertNamedType", ()=>(0, _indexMjs.assertNamedType));
parcelHelpers.export(exports, "getNullableType", ()=>(0, _indexMjs.getNullableType));
parcelHelpers.export(exports, "getNamedType", ()=>(0, _indexMjs.getNamedType));
parcelHelpers.export(exports, "validateSchema", ()=>(0, _indexMjs.validateSchema));
parcelHelpers.export(exports, "assertValidSchema", ()=>(0, _indexMjs.assertValidSchema));
parcelHelpers.export(exports, "assertName", ()=>(0, _indexMjs.assertName));
parcelHelpers.export(exports, "assertEnumValueName", ()=>(0, _indexMjs.assertEnumValueName));
// Parse and operate on GraphQL language source files.
parcelHelpers.export(exports, "Token", ()=>(0, _indexMjs1.Token));
parcelHelpers.export(exports, "Source", ()=>(0, _indexMjs1.Source));
parcelHelpers.export(exports, "Location", ()=>(0, _indexMjs1.Location));
parcelHelpers.export(exports, "OperationTypeNode", ()=>(0, _indexMjs1.OperationTypeNode));
parcelHelpers.export(exports, "getLocation", ()=>(0, _indexMjs1.getLocation));
parcelHelpers.export(exports, "printLocation", ()=>(0, _indexMjs1.printLocation));
parcelHelpers.export(exports, "printSourceLocation", ()=>(0, _indexMjs1.printSourceLocation));
parcelHelpers.export(exports, "Lexer", ()=>(0, _indexMjs1.Lexer));
parcelHelpers.export(exports, "TokenKind", ()=>(0, _indexMjs1.TokenKind));
parcelHelpers.export(exports, "parse", ()=>(0, _indexMjs1.parse));
parcelHelpers.export(exports, "parseValue", ()=>(0, _indexMjs1.parseValue));
parcelHelpers.export(exports, "parseConstValue", ()=>(0, _indexMjs1.parseConstValue));
parcelHelpers.export(exports, "parseType", ()=>(0, _indexMjs1.parseType));
parcelHelpers.export(exports, "print", ()=>(0, _indexMjs1.print));
parcelHelpers.export(exports, "visit", ()=>(0, _indexMjs1.visit));
parcelHelpers.export(exports, "visitInParallel", ()=>(0, _indexMjs1.visitInParallel));
parcelHelpers.export(exports, "getVisitFn", ()=>(0, _indexMjs1.getVisitFn));
parcelHelpers.export(exports, "getEnterLeaveForKind", ()=>(0, _indexMjs1.getEnterLeaveForKind));
parcelHelpers.export(exports, "BREAK", ()=>(0, _indexMjs1.BREAK));
parcelHelpers.export(exports, "Kind", ()=>(0, _indexMjs1.Kind));
parcelHelpers.export(exports, "DirectiveLocation", ()=>(0, _indexMjs1.DirectiveLocation));
parcelHelpers.export(exports, "isDefinitionNode", ()=>(0, _indexMjs1.isDefinitionNode));
parcelHelpers.export(exports, "isExecutableDefinitionNode", ()=>(0, _indexMjs1.isExecutableDefinitionNode));
parcelHelpers.export(exports, "isSelectionNode", ()=>(0, _indexMjs1.isSelectionNode));
parcelHelpers.export(exports, "isValueNode", ()=>(0, _indexMjs1.isValueNode));
parcelHelpers.export(exports, "isConstValueNode", ()=>(0, _indexMjs1.isConstValueNode));
parcelHelpers.export(exports, "isTypeNode", ()=>(0, _indexMjs1.isTypeNode));
parcelHelpers.export(exports, "isTypeSystemDefinitionNode", ()=>(0, _indexMjs1.isTypeSystemDefinitionNode));
parcelHelpers.export(exports, "isTypeDefinitionNode", ()=>(0, _indexMjs1.isTypeDefinitionNode));
parcelHelpers.export(exports, "isTypeSystemExtensionNode", ()=>(0, _indexMjs1.isTypeSystemExtensionNode));
parcelHelpers.export(exports, "isTypeExtensionNode", ()=>(0, _indexMjs1.isTypeExtensionNode));
// Execute GraphQL queries.
parcelHelpers.export(exports, "execute", ()=>(0, _indexMjs2.execute));
parcelHelpers.export(exports, "executeSync", ()=>(0, _indexMjs2.executeSync));
parcelHelpers.export(exports, "defaultFieldResolver", ()=>(0, _indexMjs2.defaultFieldResolver));
parcelHelpers.export(exports, "defaultTypeResolver", ()=>(0, _indexMjs2.defaultTypeResolver));
parcelHelpers.export(exports, "responsePathAsArray", ()=>(0, _indexMjs2.responsePathAsArray));
parcelHelpers.export(exports, "getArgumentValues", ()=>(0, _indexMjs2.getArgumentValues));
parcelHelpers.export(exports, "getVariableValues", ()=>(0, _indexMjs2.getVariableValues));
parcelHelpers.export(exports, "getDirectiveValues", ()=>(0, _indexMjs2.getDirectiveValues));
parcelHelpers.export(exports, "subscribe", ()=>(0, _indexMjs2.subscribe));
parcelHelpers.export(exports, "createSourceEventStream", ()=>(0, _indexMjs2.createSourceEventStream));
// Validate GraphQL documents.
parcelHelpers.export(exports, "validate", ()=>(0, _indexMjs3.validate));
parcelHelpers.export(exports, "ValidationContext", ()=>(0, _indexMjs3.ValidationContext));
parcelHelpers.export(exports, "specifiedRules", ()=>(0, _indexMjs3.specifiedRules));
parcelHelpers.export(exports, "ExecutableDefinitionsRule", ()=>(0, _indexMjs3.ExecutableDefinitionsRule));
parcelHelpers.export(exports, "FieldsOnCorrectTypeRule", ()=>(0, _indexMjs3.FieldsOnCorrectTypeRule));
parcelHelpers.export(exports, "FragmentsOnCompositeTypesRule", ()=>(0, _indexMjs3.FragmentsOnCompositeTypesRule));
parcelHelpers.export(exports, "KnownArgumentNamesRule", ()=>(0, _indexMjs3.KnownArgumentNamesRule));
parcelHelpers.export(exports, "KnownDirectivesRule", ()=>(0, _indexMjs3.KnownDirectivesRule));
parcelHelpers.export(exports, "KnownFragmentNamesRule", ()=>(0, _indexMjs3.KnownFragmentNamesRule));
parcelHelpers.export(exports, "KnownTypeNamesRule", ()=>(0, _indexMjs3.KnownTypeNamesRule));
parcelHelpers.export(exports, "LoneAnonymousOperationRule", ()=>(0, _indexMjs3.LoneAnonymousOperationRule));
parcelHelpers.export(exports, "NoFragmentCyclesRule", ()=>(0, _indexMjs3.NoFragmentCyclesRule));
parcelHelpers.export(exports, "NoUndefinedVariablesRule", ()=>(0, _indexMjs3.NoUndefinedVariablesRule));
parcelHelpers.export(exports, "NoUnusedFragmentsRule", ()=>(0, _indexMjs3.NoUnusedFragmentsRule));
parcelHelpers.export(exports, "NoUnusedVariablesRule", ()=>(0, _indexMjs3.NoUnusedVariablesRule));
parcelHelpers.export(exports, "OverlappingFieldsCanBeMergedRule", ()=>(0, _indexMjs3.OverlappingFieldsCanBeMergedRule));
parcelHelpers.export(exports, "PossibleFragmentSpreadsRule", ()=>(0, _indexMjs3.PossibleFragmentSpreadsRule));
parcelHelpers.export(exports, "ProvidedRequiredArgumentsRule", ()=>(0, _indexMjs3.ProvidedRequiredArgumentsRule));
parcelHelpers.export(exports, "ScalarLeafsRule", ()=>(0, _indexMjs3.ScalarLeafsRule));
parcelHelpers.export(exports, "SingleFieldSubscriptionsRule", ()=>(0, _indexMjs3.SingleFieldSubscriptionsRule));
parcelHelpers.export(exports, "UniqueArgumentNamesRule", ()=>(0, _indexMjs3.UniqueArgumentNamesRule));
parcelHelpers.export(exports, "UniqueDirectivesPerLocationRule", ()=>(0, _indexMjs3.UniqueDirectivesPerLocationRule));
parcelHelpers.export(exports, "UniqueFragmentNamesRule", ()=>(0, _indexMjs3.UniqueFragmentNamesRule));
parcelHelpers.export(exports, "UniqueInputFieldNamesRule", ()=>(0, _indexMjs3.UniqueInputFieldNamesRule));
parcelHelpers.export(exports, "UniqueOperationNamesRule", ()=>(0, _indexMjs3.UniqueOperationNamesRule));
parcelHelpers.export(exports, "UniqueVariableNamesRule", ()=>(0, _indexMjs3.UniqueVariableNamesRule));
parcelHelpers.export(exports, "ValuesOfCorrectTypeRule", ()=>(0, _indexMjs3.ValuesOfCorrectTypeRule));
parcelHelpers.export(exports, "VariablesAreInputTypesRule", ()=>(0, _indexMjs3.VariablesAreInputTypesRule));
parcelHelpers.export(exports, "VariablesInAllowedPositionRule", ()=>(0, _indexMjs3.VariablesInAllowedPositionRule));
parcelHelpers.export(exports, "LoneSchemaDefinitionRule", ()=>(0, _indexMjs3.LoneSchemaDefinitionRule));
parcelHelpers.export(exports, "UniqueOperationTypesRule", ()=>(0, _indexMjs3.UniqueOperationTypesRule));
parcelHelpers.export(exports, "UniqueTypeNamesRule", ()=>(0, _indexMjs3.UniqueTypeNamesRule));
parcelHelpers.export(exports, "UniqueEnumValueNamesRule", ()=>(0, _indexMjs3.UniqueEnumValueNamesRule));
parcelHelpers.export(exports, "UniqueFieldDefinitionNamesRule", ()=>(0, _indexMjs3.UniqueFieldDefinitionNamesRule));
parcelHelpers.export(exports, "UniqueArgumentDefinitionNamesRule", ()=>(0, _indexMjs3.UniqueArgumentDefinitionNamesRule));
parcelHelpers.export(exports, "UniqueDirectiveNamesRule", ()=>(0, _indexMjs3.UniqueDirectiveNamesRule));
parcelHelpers.export(exports, "PossibleTypeExtensionsRule", ()=>(0, _indexMjs3.PossibleTypeExtensionsRule));
parcelHelpers.export(exports, "NoDeprecatedCustomRule", ()=>(0, _indexMjs3.NoDeprecatedCustomRule));
parcelHelpers.export(exports, "NoSchemaIntrospectionCustomRule", ()=>(0, _indexMjs3.NoSchemaIntrospectionCustomRule));
// Create, format, and print GraphQL errors.
parcelHelpers.export(exports, "GraphQLError", ()=>(0, _indexMjs4.GraphQLError));
parcelHelpers.export(exports, "syntaxError", ()=>(0, _indexMjs4.syntaxError));
parcelHelpers.export(exports, "locatedError", ()=>(0, _indexMjs4.locatedError));
parcelHelpers.export(exports, "printError", ()=>(0, _indexMjs4.printError));
parcelHelpers.export(exports, "formatError", ()=>(0, _indexMjs4.formatError));
// Utilities for operating on GraphQL type schema and parsed sources.
parcelHelpers.export(exports, "getIntrospectionQuery", ()=>(0, _indexMjs5.getIntrospectionQuery));
parcelHelpers.export(exports, "getOperationAST", ()=>(0, _indexMjs5.getOperationAST));
parcelHelpers.export(exports, "getOperationRootType", ()=>(0, _indexMjs5.getOperationRootType));
parcelHelpers.export(exports, "introspectionFromSchema", ()=>(0, _indexMjs5.introspectionFromSchema));
parcelHelpers.export(exports, "buildClientSchema", ()=>(0, _indexMjs5.buildClientSchema));
parcelHelpers.export(exports, "buildASTSchema", ()=>(0, _indexMjs5.buildASTSchema));
parcelHelpers.export(exports, "buildSchema", ()=>(0, _indexMjs5.buildSchema));
parcelHelpers.export(exports, "extendSchema", ()=>(0, _indexMjs5.extendSchema));
parcelHelpers.export(exports, "lexicographicSortSchema", ()=>(0, _indexMjs5.lexicographicSortSchema));
parcelHelpers.export(exports, "printSchema", ()=>(0, _indexMjs5.printSchema));
parcelHelpers.export(exports, "printType", ()=>(0, _indexMjs5.printType));
parcelHelpers.export(exports, "printIntrospectionSchema", ()=>(0, _indexMjs5.printIntrospectionSchema));
parcelHelpers.export(exports, "typeFromAST", ()=>(0, _indexMjs5.typeFromAST));
parcelHelpers.export(exports, "valueFromAST", ()=>(0, _indexMjs5.valueFromAST));
parcelHelpers.export(exports, "valueFromASTUntyped", ()=>(0, _indexMjs5.valueFromASTUntyped));
parcelHelpers.export(exports, "astFromValue", ()=>(0, _indexMjs5.astFromValue));
parcelHelpers.export(exports, "TypeInfo", ()=>(0, _indexMjs5.TypeInfo));
parcelHelpers.export(exports, "visitWithTypeInfo", ()=>(0, _indexMjs5.visitWithTypeInfo));
parcelHelpers.export(exports, "coerceInputValue", ()=>(0, _indexMjs5.coerceInputValue));
parcelHelpers.export(exports, "concatAST", ()=>(0, _indexMjs5.concatAST));
parcelHelpers.export(exports, "separateOperations", ()=>(0, _indexMjs5.separateOperations));
parcelHelpers.export(exports, "stripIgnoredCharacters", ()=>(0, _indexMjs5.stripIgnoredCharacters));
parcelHelpers.export(exports, "isEqualType", ()=>(0, _indexMjs5.isEqualType));
parcelHelpers.export(exports, "isTypeSubTypeOf", ()=>(0, _indexMjs5.isTypeSubTypeOf));
parcelHelpers.export(exports, "doTypesOverlap", ()=>(0, _indexMjs5.doTypesOverlap));
parcelHelpers.export(exports, "assertValidName", ()=>(0, _indexMjs5.assertValidName));
parcelHelpers.export(exports, "isValidNameError", ()=>(0, _indexMjs5.isValidNameError));
parcelHelpers.export(exports, "BreakingChangeType", ()=>(0, _indexMjs5.BreakingChangeType));
parcelHelpers.export(exports, "DangerousChangeType", ()=>(0, _indexMjs5.DangerousChangeType));
parcelHelpers.export(exports, "findBreakingChanges", ()=>(0, _indexMjs5.findBreakingChanges));
parcelHelpers.export(exports, "findDangerousChanges", ()=>(0, _indexMjs5.findDangerousChanges));
var _versionMjs = require("./version.mjs");
var _graphqlMjs = require("./graphql.mjs");
var _indexMjs = require("./type/index.mjs");
var _indexMjs1 = require("./language/index.mjs");
var _indexMjs2 = require("./execution/index.mjs");
var _indexMjs3 = require("./validation/index.mjs");
var _indexMjs4 = require("./error/index.mjs");
var _indexMjs5 = require("./utilities/index.mjs");

},{"./version.mjs":false,"./graphql.mjs":false,"./type/index.mjs":false,"./language/index.mjs":"gdSvN","./execution/index.mjs":false,"./validation/index.mjs":false,"./error/index.mjs":false,"./utilities/index.mjs":false,"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gdSvN":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Source", ()=>(0, _sourceMjs.Source));
parcelHelpers.export(exports, "getLocation", ()=>(0, _locationMjs.getLocation));
parcelHelpers.export(exports, "printLocation", ()=>(0, _printLocationMjs.printLocation));
parcelHelpers.export(exports, "printSourceLocation", ()=>(0, _printLocationMjs.printSourceLocation));
parcelHelpers.export(exports, "Kind", ()=>(0, _kindsMjs.Kind));
parcelHelpers.export(exports, "TokenKind", ()=>(0, _tokenKindMjs.TokenKind));
parcelHelpers.export(exports, "Lexer", ()=>(0, _lexerMjs.Lexer));
parcelHelpers.export(exports, "parse", ()=>(0, _parserMjs.parse));
parcelHelpers.export(exports, "parseValue", ()=>(0, _parserMjs.parseValue));
parcelHelpers.export(exports, "parseConstValue", ()=>(0, _parserMjs.parseConstValue));
parcelHelpers.export(exports, "parseType", ()=>(0, _parserMjs.parseType));
parcelHelpers.export(exports, "print", ()=>(0, _printerMjs.print));
parcelHelpers.export(exports, "visit", ()=>(0, _visitorMjs.visit));
parcelHelpers.export(exports, "visitInParallel", ()=>(0, _visitorMjs.visitInParallel));
parcelHelpers.export(exports, "getVisitFn", ()=>(0, _visitorMjs.getVisitFn));
parcelHelpers.export(exports, "getEnterLeaveForKind", ()=>(0, _visitorMjs.getEnterLeaveForKind));
parcelHelpers.export(exports, "BREAK", ()=>(0, _visitorMjs.BREAK));
parcelHelpers.export(exports, "Location", ()=>(0, _astMjs.Location));
parcelHelpers.export(exports, "Token", ()=>(0, _astMjs.Token));
parcelHelpers.export(exports, "OperationTypeNode", ()=>(0, _astMjs.OperationTypeNode));
parcelHelpers.export(exports, "isDefinitionNode", ()=>(0, _predicatesMjs.isDefinitionNode));
parcelHelpers.export(exports, "isExecutableDefinitionNode", ()=>(0, _predicatesMjs.isExecutableDefinitionNode));
parcelHelpers.export(exports, "isSelectionNode", ()=>(0, _predicatesMjs.isSelectionNode));
parcelHelpers.export(exports, "isValueNode", ()=>(0, _predicatesMjs.isValueNode));
parcelHelpers.export(exports, "isConstValueNode", ()=>(0, _predicatesMjs.isConstValueNode));
parcelHelpers.export(exports, "isTypeNode", ()=>(0, _predicatesMjs.isTypeNode));
parcelHelpers.export(exports, "isTypeSystemDefinitionNode", ()=>(0, _predicatesMjs.isTypeSystemDefinitionNode));
parcelHelpers.export(exports, "isTypeDefinitionNode", ()=>(0, _predicatesMjs.isTypeDefinitionNode));
parcelHelpers.export(exports, "isTypeSystemExtensionNode", ()=>(0, _predicatesMjs.isTypeSystemExtensionNode));
parcelHelpers.export(exports, "isTypeExtensionNode", ()=>(0, _predicatesMjs.isTypeExtensionNode));
parcelHelpers.export(exports, "DirectiveLocation", ()=>(0, _directiveLocationMjs.DirectiveLocation));
var _sourceMjs = require("./source.mjs");
var _locationMjs = require("./location.mjs");
var _printLocationMjs = require("./printLocation.mjs");
var _kindsMjs = require("./kinds.mjs");
var _tokenKindMjs = require("./tokenKind.mjs");
var _lexerMjs = require("./lexer.mjs");
var _parserMjs = require("./parser.mjs");
var _printerMjs = require("./printer.mjs");
var _visitorMjs = require("./visitor.mjs");
var _astMjs = require("./ast.mjs");
var _predicatesMjs = require("./predicates.mjs");
var _directiveLocationMjs = require("./directiveLocation.mjs");

},{"./source.mjs":"jclLZ","./location.mjs":"gC1Jl","./printLocation.mjs":"dxBRO","./kinds.mjs":"6adj0","./tokenKind.mjs":"chwug","./lexer.mjs":"6eDKj","./parser.mjs":"iQAAW","./printer.mjs":"6YJ0M","./visitor.mjs":"dn6QO","./ast.mjs":"iaolY","./predicates.mjs":"hiHiR","./directiveLocation.mjs":"hGyry","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jclLZ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * A representation of source input to GraphQL. The `name` and `locationOffset` parameters are
 * optional, but they are useful for clients who store GraphQL documents in source files.
 * For example, if the GraphQL input starts at line 40 in a file named `Foo.graphql`, it might
 * be useful for `name` to be `"Foo.graphql"` and location to be `{ line: 40, column: 1 }`.
 * The `line` and `column` properties in `locationOffset` are 1-indexed.
 */ parcelHelpers.export(exports, "Source", ()=>Source);
/**
 * Test if the given value is a Source object.
 *
 * @internal
 */ parcelHelpers.export(exports, "isSource", ()=>isSource);
var _devAssertMjs = require("../jsutils/devAssert.mjs");
var _inspectMjs = require("../jsutils/inspect.mjs");
var _instanceOfMjs = require("../jsutils/instanceOf.mjs");
class Source {
    constructor(body, name = "GraphQL request", locationOffset = {
        line: 1,
        column: 1
    }){
        typeof body === "string" || (0, _devAssertMjs.devAssert)(false, `Body must be a string. Received: ${(0, _inspectMjs.inspect)(body)}.`);
        this.body = body;
        this.name = name;
        this.locationOffset = locationOffset;
        this.locationOffset.line > 0 || (0, _devAssertMjs.devAssert)(false, "line in locationOffset is 1-indexed and must be positive.");
        this.locationOffset.column > 0 || (0, _devAssertMjs.devAssert)(false, "column in locationOffset is 1-indexed and must be positive.");
    }
    get [Symbol.toStringTag]() {
        return "Source";
    }
}
function isSource(source) {
    return (0, _instanceOfMjs.instanceOf)(source, Source);
}

},{"../jsutils/devAssert.mjs":"7HVcG","../jsutils/inspect.mjs":"eTiKK","../jsutils/instanceOf.mjs":"hkwlu","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7HVcG":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "devAssert", ()=>devAssert);
function devAssert(condition, message) {
    const booleanCondition = Boolean(condition);
    if (!booleanCondition) throw new Error(message);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eTiKK":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Used to print values in error messages.
 */ parcelHelpers.export(exports, "inspect", ()=>inspect);
const MAX_ARRAY_LENGTH = 10;
const MAX_RECURSIVE_DEPTH = 2;
function inspect(value) {
    return formatValue(value, []);
}
function formatValue(value, seenValues) {
    switch(typeof value){
        case "string":
            return JSON.stringify(value);
        case "function":
            return value.name ? `[function ${value.name}]` : "[function]";
        case "object":
            return formatObjectValue(value, seenValues);
        default:
            return String(value);
    }
}
function formatObjectValue(value, previouslySeenValues) {
    if (value === null) return "null";
    if (previouslySeenValues.includes(value)) return "[Circular]";
    const seenValues = [
        ...previouslySeenValues,
        value
    ];
    if (isJSONable(value)) {
        const jsonValue = value.toJSON(); // check for infinite recursion
        if (jsonValue !== value) return typeof jsonValue === "string" ? jsonValue : formatValue(jsonValue, seenValues);
    } else if (Array.isArray(value)) return formatArray(value, seenValues);
    return formatObject(value, seenValues);
}
function isJSONable(value) {
    return typeof value.toJSON === "function";
}
function formatObject(object, seenValues) {
    const entries = Object.entries(object);
    if (entries.length === 0) return "{}";
    if (seenValues.length > MAX_RECURSIVE_DEPTH) return "[" + getObjectTag(object) + "]";
    const properties = entries.map(([key, value])=>key + ": " + formatValue(value, seenValues));
    return "{ " + properties.join(", ") + " }";
}
function formatArray(array, seenValues) {
    if (array.length === 0) return "[]";
    if (seenValues.length > MAX_RECURSIVE_DEPTH) return "[Array]";
    const len = Math.min(MAX_ARRAY_LENGTH, array.length);
    const remaining = array.length - len;
    const items = [];
    for(let i = 0; i < len; ++i)items.push(formatValue(array[i], seenValues));
    if (remaining === 1) items.push("... 1 more item");
    else if (remaining > 1) items.push(`... ${remaining} more items`);
    return "[" + items.join(", ") + "]";
}
function getObjectTag(object) {
    const tag = Object.prototype.toString.call(object).replace(/^\[object /, "").replace(/]$/, "");
    if (tag === "Object" && typeof object.constructor === "function") {
        const name = object.constructor.name;
        if (typeof name === "string" && name !== "") return name;
    }
    return tag;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hkwlu":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "instanceOf", ()=>instanceOf);
var _inspectMjs = require("./inspect.mjs");
const instanceOf = function instanceOf(value, constructor) {
    if (value instanceof constructor) return true;
    if (typeof value === "object" && value !== null) {
        var _value$constructor;
        // Prefer Symbol.toStringTag since it is immune to minification.
        const className = constructor.prototype[Symbol.toStringTag];
        const valueClassName = Symbol.toStringTag in value // @ts-expect-error TS bug see, https://github.com/microsoft/TypeScript/issues/38009
         ? value[Symbol.toStringTag] : (_value$constructor = value.constructor) === null || _value$constructor === void 0 ? void 0 : _value$constructor.name;
        if (className === valueClassName) {
            const stringifiedValue = (0, _inspectMjs.inspect)(value);
            throw new Error(`Cannot use ${className} "${stringifiedValue}" from another module or realm.

Ensure that there is only one instance of "graphql" in the node_modules
directory. If different versions of "graphql" are the dependencies of other
relied on modules, use "resolutions" to ensure only one version is installed.

https://yarnpkg.com/en/docs/selective-version-resolutions

Duplicate "graphql" modules cannot be used at the same time since different
versions may have different capabilities and behavior. The data from one
version used in the function from another could produce confusing and
spurious results.`);
        }
    }
    return false;
};

},{"./inspect.mjs":"eTiKK","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gC1Jl":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Represents a location in a Source.
 */ /**
 * Takes a Source and a UTF-8 character offset, and returns the corresponding
 * line and column as a SourceLocation.
 */ parcelHelpers.export(exports, "getLocation", ()=>getLocation);
var _invariantMjs = require("../jsutils/invariant.mjs");
const LineRegExp = /\r\n|[\n\r]/g;
function getLocation(source, position) {
    let lastLineStart = 0;
    let line = 1;
    for (const match of source.body.matchAll(LineRegExp)){
        typeof match.index === "number" || (0, _invariantMjs.invariant)(false);
        if (match.index >= position) break;
        lastLineStart = match.index + match[0].length;
        line += 1;
    }
    return {
        line,
        column: position + 1 - lastLineStart
    };
}

},{"../jsutils/invariant.mjs":"kr8jI","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kr8jI":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "invariant", ()=>invariant);
function invariant(condition, message) {
    const booleanCondition = Boolean(condition);
    if (!booleanCondition) throw new Error(message != null ? message : "Unexpected invariant triggered.");
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dxBRO":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Render a helpful description of the location in the GraphQL Source document.
 */ parcelHelpers.export(exports, "printLocation", ()=>printLocation);
/**
 * Render a helpful description of the location in the GraphQL Source document.
 */ parcelHelpers.export(exports, "printSourceLocation", ()=>printSourceLocation);
var _locationMjs = require("./location.mjs");
function printLocation(location) {
    return printSourceLocation(location.source, (0, _locationMjs.getLocation)(location.source, location.start));
}
function printSourceLocation(source, sourceLocation) {
    const firstLineColumnOffset = source.locationOffset.column - 1;
    const body = "".padStart(firstLineColumnOffset) + source.body;
    const lineIndex = sourceLocation.line - 1;
    const lineOffset = source.locationOffset.line - 1;
    const lineNum = sourceLocation.line + lineOffset;
    const columnOffset = sourceLocation.line === 1 ? firstLineColumnOffset : 0;
    const columnNum = sourceLocation.column + columnOffset;
    const locationStr = `${source.name}:${lineNum}:${columnNum}\n`;
    const lines = body.split(/\r\n|[\n\r]/g);
    const locationLine = lines[lineIndex]; // Special case for minified documents
    if (locationLine.length > 120) {
        const subLineIndex = Math.floor(columnNum / 80);
        const subLineColumnNum = columnNum % 80;
        const subLines = [];
        for(let i = 0; i < locationLine.length; i += 80)subLines.push(locationLine.slice(i, i + 80));
        return locationStr + printPrefixedLines([
            [
                `${lineNum} |`,
                subLines[0]
            ],
            ...subLines.slice(1, subLineIndex + 1).map((subLine)=>[
                    "|",
                    subLine
                ]),
            [
                "|",
                "^".padStart(subLineColumnNum)
            ],
            [
                "|",
                subLines[subLineIndex + 1]
            ]
        ]);
    }
    return locationStr + printPrefixedLines([
        // Lines specified like this: ["prefix", "string"],
        [
            `${lineNum - 1} |`,
            lines[lineIndex - 1]
        ],
        [
            `${lineNum} |`,
            locationLine
        ],
        [
            "|",
            "^".padStart(columnNum)
        ],
        [
            `${lineNum + 1} |`,
            lines[lineIndex + 1]
        ]
    ]);
}
function printPrefixedLines(lines) {
    const existingLines = lines.filter(([_, line])=>line !== undefined);
    const padLen = Math.max(...existingLines.map(([prefix])=>prefix.length));
    return existingLines.map(([prefix, line])=>prefix.padStart(padLen) + (line ? " " + line : "")).join("\n");
}

},{"./location.mjs":"gC1Jl","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6adj0":[function(require,module,exports) {
/**
 * The set of allowed kind values for AST nodes.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Kind", ()=>Kind) /**
 * The enum type representing the possible kind values of AST nodes.
 *
 * @deprecated Please use `Kind`. Will be remove in v17.
 */ ;
var Kind;
(function(Kind) {
    Kind["NAME"] = "Name";
    Kind["DOCUMENT"] = "Document";
    Kind["OPERATION_DEFINITION"] = "OperationDefinition";
    Kind["VARIABLE_DEFINITION"] = "VariableDefinition";
    Kind["SELECTION_SET"] = "SelectionSet";
    Kind["FIELD"] = "Field";
    Kind["ARGUMENT"] = "Argument";
    Kind["FRAGMENT_SPREAD"] = "FragmentSpread";
    Kind["INLINE_FRAGMENT"] = "InlineFragment";
    Kind["FRAGMENT_DEFINITION"] = "FragmentDefinition";
    Kind["VARIABLE"] = "Variable";
    Kind["INT"] = "IntValue";
    Kind["FLOAT"] = "FloatValue";
    Kind["STRING"] = "StringValue";
    Kind["BOOLEAN"] = "BooleanValue";
    Kind["NULL"] = "NullValue";
    Kind["ENUM"] = "EnumValue";
    Kind["LIST"] = "ListValue";
    Kind["OBJECT"] = "ObjectValue";
    Kind["OBJECT_FIELD"] = "ObjectField";
    Kind["DIRECTIVE"] = "Directive";
    Kind["NAMED_TYPE"] = "NamedType";
    Kind["LIST_TYPE"] = "ListType";
    Kind["NON_NULL_TYPE"] = "NonNullType";
    Kind["SCHEMA_DEFINITION"] = "SchemaDefinition";
    Kind["OPERATION_TYPE_DEFINITION"] = "OperationTypeDefinition";
    Kind["SCALAR_TYPE_DEFINITION"] = "ScalarTypeDefinition";
    Kind["OBJECT_TYPE_DEFINITION"] = "ObjectTypeDefinition";
    Kind["FIELD_DEFINITION"] = "FieldDefinition";
    Kind["INPUT_VALUE_DEFINITION"] = "InputValueDefinition";
    Kind["INTERFACE_TYPE_DEFINITION"] = "InterfaceTypeDefinition";
    Kind["UNION_TYPE_DEFINITION"] = "UnionTypeDefinition";
    Kind["ENUM_TYPE_DEFINITION"] = "EnumTypeDefinition";
    Kind["ENUM_VALUE_DEFINITION"] = "EnumValueDefinition";
    Kind["INPUT_OBJECT_TYPE_DEFINITION"] = "InputObjectTypeDefinition";
    Kind["DIRECTIVE_DEFINITION"] = "DirectiveDefinition";
    Kind["SCHEMA_EXTENSION"] = "SchemaExtension";
    Kind["SCALAR_TYPE_EXTENSION"] = "ScalarTypeExtension";
    Kind["OBJECT_TYPE_EXTENSION"] = "ObjectTypeExtension";
    Kind["INTERFACE_TYPE_EXTENSION"] = "InterfaceTypeExtension";
    Kind["UNION_TYPE_EXTENSION"] = "UnionTypeExtension";
    Kind["ENUM_TYPE_EXTENSION"] = "EnumTypeExtension";
    Kind["INPUT_OBJECT_TYPE_EXTENSION"] = "InputObjectTypeExtension";
})(Kind || (Kind = {}));

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"chwug":[function(require,module,exports) {
/**
 * An exported enum describing the different kinds of tokens that the
 * lexer emits.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "TokenKind", ()=>TokenKind) /**
 * The enum type representing the token kinds values.
 *
 * @deprecated Please use `TokenKind`. Will be remove in v17.
 */ ;
var TokenKind;
(function(TokenKind) {
    TokenKind["SOF"] = "<SOF>";
    TokenKind["EOF"] = "<EOF>";
    TokenKind["BANG"] = "!";
    TokenKind["DOLLAR"] = "$";
    TokenKind["AMP"] = "&";
    TokenKind["PAREN_L"] = "(";
    TokenKind["PAREN_R"] = ")";
    TokenKind["SPREAD"] = "...";
    TokenKind["COLON"] = ":";
    TokenKind["EQUALS"] = "=";
    TokenKind["AT"] = "@";
    TokenKind["BRACKET_L"] = "[";
    TokenKind["BRACKET_R"] = "]";
    TokenKind["BRACE_L"] = "{";
    TokenKind["PIPE"] = "|";
    TokenKind["BRACE_R"] = "}";
    TokenKind["NAME"] = "Name";
    TokenKind["INT"] = "Int";
    TokenKind["FLOAT"] = "Float";
    TokenKind["STRING"] = "String";
    TokenKind["BLOCK_STRING"] = "BlockString";
    TokenKind["COMMENT"] = "Comment";
})(TokenKind || (TokenKind = {}));

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6eDKj":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Given a Source object, creates a Lexer for that source.
 * A Lexer is a stateful stream generator in that every time
 * it is advanced, it returns the next token in the Source. Assuming the
 * source lexes, the final Token emitted by the lexer will be of kind
 * EOF, after which the lexer will repeatedly return the same EOF token
 * whenever called.
 */ parcelHelpers.export(exports, "Lexer", ()=>Lexer);
/**
 * @internal
 */ parcelHelpers.export(exports, "isPunctuatorTokenKind", ()=>isPunctuatorTokenKind);
var _syntaxErrorMjs = require("../error/syntaxError.mjs");
var _astMjs = require("./ast.mjs");
var _blockStringMjs = require("./blockString.mjs");
var _characterClassesMjs = require("./characterClasses.mjs");
var _tokenKindMjs = require("./tokenKind.mjs");
class Lexer {
    /**
   * The previously focused non-ignored token.
   */ /**
   * The currently focused non-ignored token.
   */ /**
   * The (1-indexed) line containing the current token.
   */ /**
   * The character offset at which the current line begins.
   */ constructor(source){
        const startOfFileToken = new (0, _astMjs.Token)((0, _tokenKindMjs.TokenKind).SOF, 0, 0, 0, 0);
        this.source = source;
        this.lastToken = startOfFileToken;
        this.token = startOfFileToken;
        this.line = 1;
        this.lineStart = 0;
    }
    get [Symbol.toStringTag]() {
        return "Lexer";
    }
    /**
   * Advances the token stream to the next non-ignored token.
   */ advance() {
        this.lastToken = this.token;
        const token = this.token = this.lookahead();
        return token;
    }
    /**
   * Looks ahead and returns the next non-ignored token, but does not change
   * the state of Lexer.
   */ lookahead() {
        let token = this.token;
        if (token.kind !== (0, _tokenKindMjs.TokenKind).EOF) {
            do if (token.next) token = token.next;
            else {
                // Read the next token and form a link in the token linked-list.
                const nextToken = readNextToken(this, token.end); // @ts-expect-error next is only mutable during parsing.
                token.next = nextToken; // @ts-expect-error prev is only mutable during parsing.
                nextToken.prev = token;
                token = nextToken;
            }
            while (token.kind === (0, _tokenKindMjs.TokenKind).COMMENT);
        }
        return token;
    }
}
function isPunctuatorTokenKind(kind) {
    return kind === (0, _tokenKindMjs.TokenKind).BANG || kind === (0, _tokenKindMjs.TokenKind).DOLLAR || kind === (0, _tokenKindMjs.TokenKind).AMP || kind === (0, _tokenKindMjs.TokenKind).PAREN_L || kind === (0, _tokenKindMjs.TokenKind).PAREN_R || kind === (0, _tokenKindMjs.TokenKind).SPREAD || kind === (0, _tokenKindMjs.TokenKind).COLON || kind === (0, _tokenKindMjs.TokenKind).EQUALS || kind === (0, _tokenKindMjs.TokenKind).AT || kind === (0, _tokenKindMjs.TokenKind).BRACKET_L || kind === (0, _tokenKindMjs.TokenKind).BRACKET_R || kind === (0, _tokenKindMjs.TokenKind).BRACE_L || kind === (0, _tokenKindMjs.TokenKind).PIPE || kind === (0, _tokenKindMjs.TokenKind).BRACE_R;
}
/**
 * A Unicode scalar value is any Unicode code point except surrogate code
 * points. In other words, the inclusive ranges of values 0x0000 to 0xD7FF and
 * 0xE000 to 0x10FFFF.
 *
 * SourceCharacter ::
 *   - "Any Unicode scalar value"
 */ function isUnicodeScalarValue(code) {
    return code >= 0x0000 && code <= 0xd7ff || code >= 0xe000 && code <= 0x10ffff;
}
/**
 * The GraphQL specification defines source text as a sequence of unicode scalar
 * values (which Unicode defines to exclude surrogate code points). However
 * JavaScript defines strings as a sequence of UTF-16 code units which may
 * include surrogates. A surrogate pair is a valid source character as it
 * encodes a supplementary code point (above U+FFFF), but unpaired surrogate
 * code points are not valid source characters.
 */ function isSupplementaryCodePoint(body, location) {
    return isLeadingSurrogate(body.charCodeAt(location)) && isTrailingSurrogate(body.charCodeAt(location + 1));
}
function isLeadingSurrogate(code) {
    return code >= 0xd800 && code <= 0xdbff;
}
function isTrailingSurrogate(code) {
    return code >= 0xdc00 && code <= 0xdfff;
}
/**
 * Prints the code point (or end of file reference) at a given location in a
 * source for use in error messages.
 *
 * Printable ASCII is printed quoted, while other points are printed in Unicode
 * code point form (ie. U+1234).
 */ function printCodePointAt(lexer, location) {
    const code = lexer.source.body.codePointAt(location);
    if (code === undefined) return (0, _tokenKindMjs.TokenKind).EOF;
    else if (code >= 0x0020 && code <= 0x007e) {
        // Printable ASCII
        const char = String.fromCodePoint(code);
        return char === '"' ? "'\"'" : `"${char}"`;
    } // Unicode code point
    return "U+" + code.toString(16).toUpperCase().padStart(4, "0");
}
/**
 * Create a token with line and column location information.
 */ function createToken(lexer, kind, start, end, value) {
    const line = lexer.line;
    const col = 1 + start - lexer.lineStart;
    return new (0, _astMjs.Token)(kind, start, end, line, col, value);
}
/**
 * Gets the next token from the source starting at the given position.
 *
 * This skips over whitespace until it finds the next lexable token, then lexes
 * punctuators immediately or calls the appropriate helper function for more
 * complicated tokens.
 */ function readNextToken(lexer, start) {
    const body = lexer.source.body;
    const bodyLength = body.length;
    let position = start;
    while(position < bodyLength){
        const code = body.charCodeAt(position); // SourceCharacter
        switch(code){
            // Ignored ::
            //   - UnicodeBOM
            //   - WhiteSpace
            //   - LineTerminator
            //   - Comment
            //   - Comma
            //
            // UnicodeBOM :: "Byte Order Mark (U+FEFF)"
            //
            // WhiteSpace ::
            //   - "Horizontal Tab (U+0009)"
            //   - "Space (U+0020)"
            //
            // Comma :: ,
            case 0xfeff:
            case 0x0009:
            case 0x0020:
            case 0x002c:
                // ,
                ++position;
                continue;
            // LineTerminator ::
            //   - "New Line (U+000A)"
            //   - "Carriage Return (U+000D)" [lookahead != "New Line (U+000A)"]
            //   - "Carriage Return (U+000D)" "New Line (U+000A)"
            case 0x000a:
                // \n
                ++position;
                ++lexer.line;
                lexer.lineStart = position;
                continue;
            case 0x000d:
                // \r
                if (body.charCodeAt(position + 1) === 0x000a) position += 2;
                else ++position;
                ++lexer.line;
                lexer.lineStart = position;
                continue;
            // Comment
            case 0x0023:
                // #
                return readComment(lexer, position);
            // Token ::
            //   - Punctuator
            //   - Name
            //   - IntValue
            //   - FloatValue
            //   - StringValue
            //
            // Punctuator :: one of ! $ & ( ) ... : = @ [ ] { | }
            case 0x0021:
                // !
                return createToken(lexer, (0, _tokenKindMjs.TokenKind).BANG, position, position + 1);
            case 0x0024:
                // $
                return createToken(lexer, (0, _tokenKindMjs.TokenKind).DOLLAR, position, position + 1);
            case 0x0026:
                // &
                return createToken(lexer, (0, _tokenKindMjs.TokenKind).AMP, position, position + 1);
            case 0x0028:
                // (
                return createToken(lexer, (0, _tokenKindMjs.TokenKind).PAREN_L, position, position + 1);
            case 0x0029:
                // )
                return createToken(lexer, (0, _tokenKindMjs.TokenKind).PAREN_R, position, position + 1);
            case 0x002e:
                // .
                if (body.charCodeAt(position + 1) === 0x002e && body.charCodeAt(position + 2) === 0x002e) return createToken(lexer, (0, _tokenKindMjs.TokenKind).SPREAD, position, position + 3);
                break;
            case 0x003a:
                // :
                return createToken(lexer, (0, _tokenKindMjs.TokenKind).COLON, position, position + 1);
            case 0x003d:
                // =
                return createToken(lexer, (0, _tokenKindMjs.TokenKind).EQUALS, position, position + 1);
            case 0x0040:
                // @
                return createToken(lexer, (0, _tokenKindMjs.TokenKind).AT, position, position + 1);
            case 0x005b:
                // [
                return createToken(lexer, (0, _tokenKindMjs.TokenKind).BRACKET_L, position, position + 1);
            case 0x005d:
                // ]
                return createToken(lexer, (0, _tokenKindMjs.TokenKind).BRACKET_R, position, position + 1);
            case 0x007b:
                // {
                return createToken(lexer, (0, _tokenKindMjs.TokenKind).BRACE_L, position, position + 1);
            case 0x007c:
                // |
                return createToken(lexer, (0, _tokenKindMjs.TokenKind).PIPE, position, position + 1);
            case 0x007d:
                // }
                return createToken(lexer, (0, _tokenKindMjs.TokenKind).BRACE_R, position, position + 1);
            // StringValue
            case 0x0022:
                // "
                if (body.charCodeAt(position + 1) === 0x0022 && body.charCodeAt(position + 2) === 0x0022) return readBlockString(lexer, position);
                return readString(lexer, position);
        } // IntValue | FloatValue (Digit | -)
        if ((0, _characterClassesMjs.isDigit)(code) || code === 0x002d) return readNumber(lexer, position, code);
         // Name
        if ((0, _characterClassesMjs.isNameStart)(code)) return readName(lexer, position);
        throw (0, _syntaxErrorMjs.syntaxError)(lexer.source, position, code === 0x0027 ? "Unexpected single quote character ('), did you mean to use a double quote (\")?" : isUnicodeScalarValue(code) || isSupplementaryCodePoint(body, position) ? `Unexpected character: ${printCodePointAt(lexer, position)}.` : `Invalid character: ${printCodePointAt(lexer, position)}.`);
    }
    return createToken(lexer, (0, _tokenKindMjs.TokenKind).EOF, bodyLength, bodyLength);
}
/**
 * Reads a comment token from the source file.
 *
 * ```
 * Comment :: # CommentChar* [lookahead != CommentChar]
 *
 * CommentChar :: SourceCharacter but not LineTerminator
 * ```
 */ function readComment(lexer, start) {
    const body = lexer.source.body;
    const bodyLength = body.length;
    let position = start + 1;
    while(position < bodyLength){
        const code = body.charCodeAt(position); // LineTerminator (\n | \r)
        if (code === 0x000a || code === 0x000d) break;
         // SourceCharacter
        if (isUnicodeScalarValue(code)) ++position;
        else if (isSupplementaryCodePoint(body, position)) position += 2;
        else break;
    }
    return createToken(lexer, (0, _tokenKindMjs.TokenKind).COMMENT, start, position, body.slice(start + 1, position));
}
/**
 * Reads a number token from the source file, either a FloatValue or an IntValue
 * depending on whether a FractionalPart or ExponentPart is encountered.
 *
 * ```
 * IntValue :: IntegerPart [lookahead != {Digit, `.`, NameStart}]
 *
 * IntegerPart ::
 *   - NegativeSign? 0
 *   - NegativeSign? NonZeroDigit Digit*
 *
 * NegativeSign :: -
 *
 * NonZeroDigit :: Digit but not `0`
 *
 * FloatValue ::
 *   - IntegerPart FractionalPart ExponentPart [lookahead != {Digit, `.`, NameStart}]
 *   - IntegerPart FractionalPart [lookahead != {Digit, `.`, NameStart}]
 *   - IntegerPart ExponentPart [lookahead != {Digit, `.`, NameStart}]
 *
 * FractionalPart :: . Digit+
 *
 * ExponentPart :: ExponentIndicator Sign? Digit+
 *
 * ExponentIndicator :: one of `e` `E`
 *
 * Sign :: one of + -
 * ```
 */ function readNumber(lexer, start, firstCode) {
    const body = lexer.source.body;
    let position = start;
    let code = firstCode;
    let isFloat = false; // NegativeSign (-)
    if (code === 0x002d) code = body.charCodeAt(++position);
     // Zero (0)
    if (code === 0x0030) {
        code = body.charCodeAt(++position);
        if ((0, _characterClassesMjs.isDigit)(code)) throw (0, _syntaxErrorMjs.syntaxError)(lexer.source, position, `Invalid number, unexpected digit after 0: ${printCodePointAt(lexer, position)}.`);
    } else {
        position = readDigits(lexer, position, code);
        code = body.charCodeAt(position);
    } // Full stop (.)
    if (code === 0x002e) {
        isFloat = true;
        code = body.charCodeAt(++position);
        position = readDigits(lexer, position, code);
        code = body.charCodeAt(position);
    } // E e
    if (code === 0x0045 || code === 0x0065) {
        isFloat = true;
        code = body.charCodeAt(++position); // + -
        if (code === 0x002b || code === 0x002d) code = body.charCodeAt(++position);
        position = readDigits(lexer, position, code);
        code = body.charCodeAt(position);
    } // Numbers cannot be followed by . or NameStart
    if (code === 0x002e || (0, _characterClassesMjs.isNameStart)(code)) throw (0, _syntaxErrorMjs.syntaxError)(lexer.source, position, `Invalid number, expected digit but got: ${printCodePointAt(lexer, position)}.`);
    return createToken(lexer, isFloat ? (0, _tokenKindMjs.TokenKind).FLOAT : (0, _tokenKindMjs.TokenKind).INT, start, position, body.slice(start, position));
}
/**
 * Returns the new position in the source after reading one or more digits.
 */ function readDigits(lexer, start, firstCode) {
    if (!(0, _characterClassesMjs.isDigit)(firstCode)) throw (0, _syntaxErrorMjs.syntaxError)(lexer.source, start, `Invalid number, expected digit but got: ${printCodePointAt(lexer, start)}.`);
    const body = lexer.source.body;
    let position = start + 1; // +1 to skip first firstCode
    while((0, _characterClassesMjs.isDigit)(body.charCodeAt(position)))++position;
    return position;
}
/**
 * Reads a single-quote string token from the source file.
 *
 * ```
 * StringValue ::
 *   - `""` [lookahead != `"`]
 *   - `"` StringCharacter+ `"`
 *
 * StringCharacter ::
 *   - SourceCharacter but not `"` or `\` or LineTerminator
 *   - `\u` EscapedUnicode
 *   - `\` EscapedCharacter
 *
 * EscapedUnicode ::
 *   - `{` HexDigit+ `}`
 *   - HexDigit HexDigit HexDigit HexDigit
 *
 * EscapedCharacter :: one of `"` `\` `/` `b` `f` `n` `r` `t`
 * ```
 */ function readString(lexer, start) {
    const body = lexer.source.body;
    const bodyLength = body.length;
    let position = start + 1;
    let chunkStart = position;
    let value = "";
    while(position < bodyLength){
        const code = body.charCodeAt(position); // Closing Quote (")
        if (code === 0x0022) {
            value += body.slice(chunkStart, position);
            return createToken(lexer, (0, _tokenKindMjs.TokenKind).STRING, start, position + 1, value);
        } // Escape Sequence (\)
        if (code === 0x005c) {
            value += body.slice(chunkStart, position);
            const escape = body.charCodeAt(position + 1) === 0x0075 // u
             ? body.charCodeAt(position + 2) === 0x007b // {
             ? readEscapedUnicodeVariableWidth(lexer, position) : readEscapedUnicodeFixedWidth(lexer, position) : readEscapedCharacter(lexer, position);
            value += escape.value;
            position += escape.size;
            chunkStart = position;
            continue;
        } // LineTerminator (\n | \r)
        if (code === 0x000a || code === 0x000d) break;
         // SourceCharacter
        if (isUnicodeScalarValue(code)) ++position;
        else if (isSupplementaryCodePoint(body, position)) position += 2;
        else throw (0, _syntaxErrorMjs.syntaxError)(lexer.source, position, `Invalid character within String: ${printCodePointAt(lexer, position)}.`);
    }
    throw (0, _syntaxErrorMjs.syntaxError)(lexer.source, position, "Unterminated string.");
} // The string value and lexed size of an escape sequence.
function readEscapedUnicodeVariableWidth(lexer, position) {
    const body = lexer.source.body;
    let point = 0;
    let size = 3; // Cannot be larger than 12 chars (\u{00000000}).
    while(size < 12){
        const code = body.charCodeAt(position + size++); // Closing Brace (})
        if (code === 0x007d) {
            // Must be at least 5 chars (\u{0}) and encode a Unicode scalar value.
            if (size < 5 || !isUnicodeScalarValue(point)) break;
            return {
                value: String.fromCodePoint(point),
                size
            };
        } // Append this hex digit to the code point.
        point = point << 4 | readHexDigit(code);
        if (point < 0) break;
    }
    throw (0, _syntaxErrorMjs.syntaxError)(lexer.source, position, `Invalid Unicode escape sequence: "${body.slice(position, position + size)}".`);
}
function readEscapedUnicodeFixedWidth(lexer, position) {
    const body = lexer.source.body;
    const code = read16BitHexCode(body, position + 2);
    if (isUnicodeScalarValue(code)) return {
        value: String.fromCodePoint(code),
        size: 6
    };
     // GraphQL allows JSON-style surrogate pair escape sequences, but only when
    // a valid pair is formed.
    if (isLeadingSurrogate(code)) // \u
    {
        if (body.charCodeAt(position + 6) === 0x005c && body.charCodeAt(position + 7) === 0x0075) {
            const trailingCode = read16BitHexCode(body, position + 8);
            if (isTrailingSurrogate(trailingCode)) // JavaScript defines strings as a sequence of UTF-16 code units and
            // encodes Unicode code points above U+FFFF using a surrogate pair of
            // code units. Since this is a surrogate pair escape sequence, just
            // include both codes into the JavaScript string value. Had JavaScript
            // not been internally based on UTF-16, then this surrogate pair would
            // be decoded to retrieve the supplementary code point.
            return {
                value: String.fromCodePoint(code, trailingCode),
                size: 12
            };
        }
    }
    throw (0, _syntaxErrorMjs.syntaxError)(lexer.source, position, `Invalid Unicode escape sequence: "${body.slice(position, position + 6)}".`);
}
/**
 * Reads four hexadecimal characters and returns the positive integer that 16bit
 * hexadecimal string represents. For example, "000f" will return 15, and "dead"
 * will return 57005.
 *
 * Returns a negative number if any char was not a valid hexadecimal digit.
 */ function read16BitHexCode(body, position) {
    // readHexDigit() returns -1 on error. ORing a negative value with any other
    // value always produces a negative value.
    return readHexDigit(body.charCodeAt(position)) << 12 | readHexDigit(body.charCodeAt(position + 1)) << 8 | readHexDigit(body.charCodeAt(position + 2)) << 4 | readHexDigit(body.charCodeAt(position + 3));
}
/**
 * Reads a hexadecimal character and returns its positive integer value (0-15).
 *
 * '0' becomes 0, '9' becomes 9
 * 'A' becomes 10, 'F' becomes 15
 * 'a' becomes 10, 'f' becomes 15
 *
 * Returns -1 if the provided character code was not a valid hexadecimal digit.
 *
 * HexDigit :: one of
 *   - `0` `1` `2` `3` `4` `5` `6` `7` `8` `9`
 *   - `A` `B` `C` `D` `E` `F`
 *   - `a` `b` `c` `d` `e` `f`
 */ function readHexDigit(code) {
    return code >= 0x0030 && code <= 0x0039 // 0-9
     ? code - 0x0030 : code >= 0x0041 && code <= 0x0046 // A-F
     ? code - 0x0037 : code >= 0x0061 && code <= 0x0066 // a-f
     ? code - 0x0057 : -1;
}
/**
 * | Escaped Character | Code Point | Character Name               |
 * | ----------------- | ---------- | ---------------------------- |
 * | `"`               | U+0022     | double quote                 |
 * | `\`               | U+005C     | reverse solidus (back slash) |
 * | `/`               | U+002F     | solidus (forward slash)      |
 * | `b`               | U+0008     | backspace                    |
 * | `f`               | U+000C     | form feed                    |
 * | `n`               | U+000A     | line feed (new line)         |
 * | `r`               | U+000D     | carriage return              |
 * | `t`               | U+0009     | horizontal tab               |
 */ function readEscapedCharacter(lexer, position) {
    const body = lexer.source.body;
    const code = body.charCodeAt(position + 1);
    switch(code){
        case 0x0022:
            // "
            return {
                value: '"',
                size: 2
            };
        case 0x005c:
            // \
            return {
                value: "\\",
                size: 2
            };
        case 0x002f:
            // /
            return {
                value: "/",
                size: 2
            };
        case 0x0062:
            // b
            return {
                value: "\b",
                size: 2
            };
        case 0x0066:
            // f
            return {
                value: "\f",
                size: 2
            };
        case 0x006e:
            // n
            return {
                value: "\n",
                size: 2
            };
        case 0x0072:
            // r
            return {
                value: "\r",
                size: 2
            };
        case 0x0074:
            // t
            return {
                value: "	",
                size: 2
            };
    }
    throw (0, _syntaxErrorMjs.syntaxError)(lexer.source, position, `Invalid character escape sequence: "${body.slice(position, position + 2)}".`);
}
/**
 * Reads a block string token from the source file.
 *
 * ```
 * StringValue ::
 *   - `"""` BlockStringCharacter* `"""`
 *
 * BlockStringCharacter ::
 *   - SourceCharacter but not `"""` or `\"""`
 *   - `\"""`
 * ```
 */ function readBlockString(lexer, start) {
    const body = lexer.source.body;
    const bodyLength = body.length;
    let lineStart = lexer.lineStart;
    let position = start + 3;
    let chunkStart = position;
    let currentLine = "";
    const blockLines = [];
    while(position < bodyLength){
        const code = body.charCodeAt(position); // Closing Triple-Quote (""")
        if (code === 0x0022 && body.charCodeAt(position + 1) === 0x0022 && body.charCodeAt(position + 2) === 0x0022) {
            currentLine += body.slice(chunkStart, position);
            blockLines.push(currentLine);
            const token = createToken(lexer, (0, _tokenKindMjs.TokenKind).BLOCK_STRING, start, position + 3, (0, _blockStringMjs.dedentBlockStringLines)(blockLines).join("\n"));
            lexer.line += blockLines.length - 1;
            lexer.lineStart = lineStart;
            return token;
        } // Escaped Triple-Quote (\""")
        if (code === 0x005c && body.charCodeAt(position + 1) === 0x0022 && body.charCodeAt(position + 2) === 0x0022 && body.charCodeAt(position + 3) === 0x0022) {
            currentLine += body.slice(chunkStart, position);
            chunkStart = position + 1; // skip only slash
            position += 4;
            continue;
        } // LineTerminator
        if (code === 0x000a || code === 0x000d) {
            currentLine += body.slice(chunkStart, position);
            blockLines.push(currentLine);
            if (code === 0x000d && body.charCodeAt(position + 1) === 0x000a) position += 2;
            else ++position;
            currentLine = "";
            chunkStart = position;
            lineStart = position;
            continue;
        } // SourceCharacter
        if (isUnicodeScalarValue(code)) ++position;
        else if (isSupplementaryCodePoint(body, position)) position += 2;
        else throw (0, _syntaxErrorMjs.syntaxError)(lexer.source, position, `Invalid character within String: ${printCodePointAt(lexer, position)}.`);
    }
    throw (0, _syntaxErrorMjs.syntaxError)(lexer.source, position, "Unterminated string.");
}
/**
 * Reads an alphanumeric + underscore name from the source.
 *
 * ```
 * Name ::
 *   - NameStart NameContinue* [lookahead != NameContinue]
 * ```
 */ function readName(lexer, start) {
    const body = lexer.source.body;
    const bodyLength = body.length;
    let position = start + 1;
    while(position < bodyLength){
        const code = body.charCodeAt(position);
        if ((0, _characterClassesMjs.isNameContinue)(code)) ++position;
        else break;
    }
    return createToken(lexer, (0, _tokenKindMjs.TokenKind).NAME, start, position, body.slice(start, position));
}

},{"../error/syntaxError.mjs":"9aPZI","./ast.mjs":"iaolY","./blockString.mjs":"hVqvS","./characterClasses.mjs":"ieRdY","./tokenKind.mjs":"chwug","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9aPZI":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Produces a GraphQLError representing a syntax error, containing useful
 * descriptive information about the syntax error's position in the source.
 */ parcelHelpers.export(exports, "syntaxError", ()=>syntaxError);
var _graphQLErrorMjs = require("./GraphQLError.mjs");
function syntaxError(source, position, description) {
    return new (0, _graphQLErrorMjs.GraphQLError)(`Syntax Error: ${description}`, {
        source,
        positions: [
            position
        ]
    });
}

},{"./GraphQLError.mjs":"1aaUT","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1aaUT":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * A GraphQLError describes an Error found during the parse, validate, or
 * execute phases of performing a GraphQL operation. In addition to a message
 * and stack trace, it also includes information about the locations in a
 * GraphQL document and/or execution result that correspond to the Error.
 */ parcelHelpers.export(exports, "GraphQLError", ()=>GraphQLError);
/**
 * See: https://spec.graphql.org/draft/#sec-Errors
 */ /**
 * Prints a GraphQLError to a string, representing useful location information
 * about the error's position in the source.
 *
 * @deprecated Please use `error.toString` instead. Will be removed in v17
 */ parcelHelpers.export(exports, "printError", ()=>printError);
/**
 * Given a GraphQLError, format it according to the rules described by the
 * Response Format, Errors section of the GraphQL Specification.
 *
 * @deprecated Please use `error.toJSON` instead. Will be removed in v17
 */ parcelHelpers.export(exports, "formatError", ()=>formatError);
var _isObjectLikeMjs = require("../jsutils/isObjectLike.mjs");
var _locationMjs = require("../language/location.mjs");
var _printLocationMjs = require("../language/printLocation.mjs");
function toNormalizedOptions(args) {
    const firstArg = args[0];
    if (firstArg == null || "kind" in firstArg || "length" in firstArg) return {
        nodes: firstArg,
        source: args[1],
        positions: args[2],
        path: args[3],
        originalError: args[4],
        extensions: args[5]
    };
    return firstArg;
}
class GraphQLError extends Error {
    /**
   * An array of `{ line, column }` locations within the source GraphQL document
   * which correspond to this error.
   *
   * Errors during validation often contain multiple locations, for example to
   * point out two things with the same name. Errors during execution include a
   * single location, the field which produced the error.
   *
   * Enumerable, and appears in the result of JSON.stringify().
   */ /**
   * An array describing the JSON-path into the execution response which
   * corresponds to this error. Only included for errors during execution.
   *
   * Enumerable, and appears in the result of JSON.stringify().
   */ /**
   * An array of GraphQL AST Nodes corresponding to this error.
   */ /**
   * The source GraphQL document for the first location of this error.
   *
   * Note that if this Error represents more than one node, the source may not
   * represent nodes after the first node.
   */ /**
   * An array of character offsets within the source GraphQL document
   * which correspond to this error.
   */ /**
   * The original error thrown from a field resolver during execution.
   */ /**
   * Extension fields to add to the formatted error.
   */ /**
   * @deprecated Please use the `GraphQLErrorOptions` constructor overload instead.
   */ constructor(message, ...rawArgs){
        var _this$nodes, _nodeLocations$, _ref;
        const { nodes , source , positions , path , originalError , extensions  } = toNormalizedOptions(rawArgs);
        super(message);
        this.name = "GraphQLError";
        this.path = path !== null && path !== void 0 ? path : undefined;
        this.originalError = originalError !== null && originalError !== void 0 ? originalError : undefined; // Compute list of blame nodes.
        this.nodes = undefinedIfEmpty(Array.isArray(nodes) ? nodes : nodes ? [
            nodes
        ] : undefined);
        const nodeLocations = undefinedIfEmpty((_this$nodes = this.nodes) === null || _this$nodes === void 0 ? void 0 : _this$nodes.map((node)=>node.loc).filter((loc)=>loc != null)); // Compute locations in the source for the given nodes/positions.
        this.source = source !== null && source !== void 0 ? source : nodeLocations === null || nodeLocations === void 0 ? void 0 : (_nodeLocations$ = nodeLocations[0]) === null || _nodeLocations$ === void 0 ? void 0 : _nodeLocations$.source;
        this.positions = positions !== null && positions !== void 0 ? positions : nodeLocations === null || nodeLocations === void 0 ? void 0 : nodeLocations.map((loc)=>loc.start);
        this.locations = positions && source ? positions.map((pos)=>(0, _locationMjs.getLocation)(source, pos)) : nodeLocations === null || nodeLocations === void 0 ? void 0 : nodeLocations.map((loc)=>(0, _locationMjs.getLocation)(loc.source, loc.start));
        const originalExtensions = (0, _isObjectLikeMjs.isObjectLike)(originalError === null || originalError === void 0 ? void 0 : originalError.extensions) ? originalError === null || originalError === void 0 ? void 0 : originalError.extensions : undefined;
        this.extensions = (_ref = extensions !== null && extensions !== void 0 ? extensions : originalExtensions) !== null && _ref !== void 0 ? _ref : Object.create(null); // Only properties prescribed by the spec should be enumerable.
        // Keep the rest as non-enumerable.
        Object.defineProperties(this, {
            message: {
                writable: true,
                enumerable: true
            },
            name: {
                enumerable: false
            },
            nodes: {
                enumerable: false
            },
            source: {
                enumerable: false
            },
            positions: {
                enumerable: false
            },
            originalError: {
                enumerable: false
            }
        }); // Include (non-enumerable) stack trace.
        /* c8 ignore start */ // FIXME: https://github.com/graphql/graphql-js/issues/2317
        if (originalError !== null && originalError !== void 0 && originalError.stack) Object.defineProperty(this, "stack", {
            value: originalError.stack,
            writable: true,
            configurable: true
        });
        else if (Error.captureStackTrace) Error.captureStackTrace(this, GraphQLError);
        else Object.defineProperty(this, "stack", {
            value: Error().stack,
            writable: true,
            configurable: true
        });
    /* c8 ignore stop */ }
    get [Symbol.toStringTag]() {
        return "GraphQLError";
    }
    toString() {
        let output = this.message;
        if (this.nodes) {
            for (const node of this.nodes)if (node.loc) output += "\n\n" + (0, _printLocationMjs.printLocation)(node.loc);
        } else if (this.source && this.locations) for (const location of this.locations)output += "\n\n" + (0, _printLocationMjs.printSourceLocation)(this.source, location);
        return output;
    }
    toJSON() {
        const formattedError = {
            message: this.message
        };
        if (this.locations != null) formattedError.locations = this.locations;
        if (this.path != null) formattedError.path = this.path;
        if (this.extensions != null && Object.keys(this.extensions).length > 0) formattedError.extensions = this.extensions;
        return formattedError;
    }
}
function undefinedIfEmpty(array) {
    return array === undefined || array.length === 0 ? undefined : array;
}
function printError(error) {
    return error.toString();
}
function formatError(error) {
    return error.toJSON();
}

},{"../jsutils/isObjectLike.mjs":"6KQxg","../language/location.mjs":"gC1Jl","../language/printLocation.mjs":"dxBRO","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6KQxg":[function(require,module,exports) {
/**
 * Return true if `value` is object-like. A value is object-like if it's not
 * `null` and has a `typeof` result of "object".
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isObjectLike", ()=>isObjectLike);
function isObjectLike(value) {
    return typeof value == "object" && value !== null;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iaolY":[function(require,module,exports) {
/**
 * Contains a range of UTF-8 character offsets and token references that
 * identify the region of the source from which the AST derived.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Location", ()=>Location);
/**
 * Represents a range of characters represented by a lexical token
 * within a Source.
 */ parcelHelpers.export(exports, "Token", ()=>Token);
parcelHelpers.export(exports, "QueryDocumentKeys", ()=>QueryDocumentKeys);
/**
 * @internal
 */ parcelHelpers.export(exports, "isNode", ()=>isNode);
parcelHelpers.export(exports, "OperationTypeNode", ()=>OperationTypeNode);
class Location {
    /**
   * The character offset at which this Node begins.
   */ /**
   * The character offset at which this Node ends.
   */ /**
   * The Token at which this Node begins.
   */ /**
   * The Token at which this Node ends.
   */ /**
   * The Source document the AST represents.
   */ constructor(startToken, endToken, source){
        this.start = startToken.start;
        this.end = endToken.end;
        this.startToken = startToken;
        this.endToken = endToken;
        this.source = source;
    }
    get [Symbol.toStringTag]() {
        return "Location";
    }
    toJSON() {
        return {
            start: this.start,
            end: this.end
        };
    }
}
class Token {
    /**
   * The kind of Token.
   */ /**
   * The character offset at which this Node begins.
   */ /**
   * The character offset at which this Node ends.
   */ /**
   * The 1-indexed line number on which this Token appears.
   */ /**
   * The 1-indexed column number at which this Token begins.
   */ /**
   * For non-punctuation tokens, represents the interpreted value of the token.
   *
   * Note: is undefined for punctuation tokens, but typed as string for
   * convenience in the parser.
   */ /**
   * Tokens exist as nodes in a double-linked-list amongst all tokens
   * including ignored tokens. <SOF> is always the first node and <EOF>
   * the last.
   */ constructor(kind, start, end, line, column, value){
        this.kind = kind;
        this.start = start;
        this.end = end;
        this.line = line;
        this.column = column; // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        this.value = value;
        this.prev = null;
        this.next = null;
    }
    get [Symbol.toStringTag]() {
        return "Token";
    }
    toJSON() {
        return {
            kind: this.kind,
            value: this.value,
            line: this.line,
            column: this.column
        };
    }
}
const QueryDocumentKeys = {
    Name: [],
    Document: [
        "definitions"
    ],
    OperationDefinition: [
        "name",
        "variableDefinitions",
        "directives",
        "selectionSet"
    ],
    VariableDefinition: [
        "variable",
        "type",
        "defaultValue",
        "directives"
    ],
    Variable: [
        "name"
    ],
    SelectionSet: [
        "selections"
    ],
    Field: [
        "alias",
        "name",
        "arguments",
        "directives",
        "selectionSet"
    ],
    Argument: [
        "name",
        "value"
    ],
    FragmentSpread: [
        "name",
        "directives"
    ],
    InlineFragment: [
        "typeCondition",
        "directives",
        "selectionSet"
    ],
    FragmentDefinition: [
        "name",
        "variableDefinitions",
        "typeCondition",
        "directives",
        "selectionSet"
    ],
    IntValue: [],
    FloatValue: [],
    StringValue: [],
    BooleanValue: [],
    NullValue: [],
    EnumValue: [],
    ListValue: [
        "values"
    ],
    ObjectValue: [
        "fields"
    ],
    ObjectField: [
        "name",
        "value"
    ],
    Directive: [
        "name",
        "arguments"
    ],
    NamedType: [
        "name"
    ],
    ListType: [
        "type"
    ],
    NonNullType: [
        "type"
    ],
    SchemaDefinition: [
        "description",
        "directives",
        "operationTypes"
    ],
    OperationTypeDefinition: [
        "type"
    ],
    ScalarTypeDefinition: [
        "description",
        "name",
        "directives"
    ],
    ObjectTypeDefinition: [
        "description",
        "name",
        "interfaces",
        "directives",
        "fields"
    ],
    FieldDefinition: [
        "description",
        "name",
        "arguments",
        "type",
        "directives"
    ],
    InputValueDefinition: [
        "description",
        "name",
        "type",
        "defaultValue",
        "directives"
    ],
    InterfaceTypeDefinition: [
        "description",
        "name",
        "interfaces",
        "directives",
        "fields"
    ],
    UnionTypeDefinition: [
        "description",
        "name",
        "directives",
        "types"
    ],
    EnumTypeDefinition: [
        "description",
        "name",
        "directives",
        "values"
    ],
    EnumValueDefinition: [
        "description",
        "name",
        "directives"
    ],
    InputObjectTypeDefinition: [
        "description",
        "name",
        "directives",
        "fields"
    ],
    DirectiveDefinition: [
        "description",
        "name",
        "arguments",
        "locations"
    ],
    SchemaExtension: [
        "directives",
        "operationTypes"
    ],
    ScalarTypeExtension: [
        "name",
        "directives"
    ],
    ObjectTypeExtension: [
        "name",
        "interfaces",
        "directives",
        "fields"
    ],
    InterfaceTypeExtension: [
        "name",
        "interfaces",
        "directives",
        "fields"
    ],
    UnionTypeExtension: [
        "name",
        "directives",
        "types"
    ],
    EnumTypeExtension: [
        "name",
        "directives",
        "values"
    ],
    InputObjectTypeExtension: [
        "name",
        "directives",
        "fields"
    ]
};
const kindValues = new Set(Object.keys(QueryDocumentKeys));
function isNode(maybeNode) {
    const maybeKind = maybeNode === null || maybeNode === void 0 ? void 0 : maybeNode.kind;
    return typeof maybeKind === "string" && kindValues.has(maybeKind);
}
/** Name */ var OperationTypeNode;
(function(OperationTypeNode) {
    OperationTypeNode["QUERY"] = "query";
    OperationTypeNode["MUTATION"] = "mutation";
    OperationTypeNode["SUBSCRIPTION"] = "subscription";
})(OperationTypeNode || (OperationTypeNode = {}));

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hVqvS":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Produces the value of a block string from its parsed raw value, similar to
 * CoffeeScript's block string, Python's docstring trim or Ruby's strip_heredoc.
 *
 * This implements the GraphQL spec's BlockStringValue() static algorithm.
 *
 * @internal
 */ parcelHelpers.export(exports, "dedentBlockStringLines", ()=>dedentBlockStringLines);
/**
 * @internal
 */ parcelHelpers.export(exports, "isPrintableAsBlockString", ()=>isPrintableAsBlockString);
/**
 * Print a block string in the indented block form by adding a leading and
 * trailing blank line. However, if a block string starts with whitespace and is
 * a single-line, adding a leading blank line would strip that whitespace.
 *
 * @internal
 */ parcelHelpers.export(exports, "printBlockString", ()=>printBlockString);
var _characterClassesMjs = require("./characterClasses.mjs");
function dedentBlockStringLines(lines) {
    var _firstNonEmptyLine2;
    let commonIndent = Number.MAX_SAFE_INTEGER;
    let firstNonEmptyLine = null;
    let lastNonEmptyLine = -1;
    for(let i = 0; i < lines.length; ++i){
        var _firstNonEmptyLine;
        const line = lines[i];
        const indent = leadingWhitespace(line);
        if (indent === line.length) continue; // skip empty lines
        firstNonEmptyLine = (_firstNonEmptyLine = firstNonEmptyLine) !== null && _firstNonEmptyLine !== void 0 ? _firstNonEmptyLine : i;
        lastNonEmptyLine = i;
        if (i !== 0 && indent < commonIndent) commonIndent = indent;
    }
    return lines // Remove common indentation from all lines but first.
    .map((line, i)=>i === 0 ? line : line.slice(commonIndent)) // Remove leading and trailing blank lines.
    .slice((_firstNonEmptyLine2 = firstNonEmptyLine) !== null && _firstNonEmptyLine2 !== void 0 ? _firstNonEmptyLine2 : 0, lastNonEmptyLine + 1);
}
function leadingWhitespace(str) {
    let i = 0;
    while(i < str.length && (0, _characterClassesMjs.isWhiteSpace)(str.charCodeAt(i)))++i;
    return i;
}
function isPrintableAsBlockString(value) {
    if (value === "") return true; // empty string is printable
    let isEmptyLine = true;
    let hasIndent = false;
    let hasCommonIndent = true;
    let seenNonEmptyLine = false;
    for(let i = 0; i < value.length; ++i)switch(value.codePointAt(i)){
        case 0x0000:
        case 0x0001:
        case 0x0002:
        case 0x0003:
        case 0x0004:
        case 0x0005:
        case 0x0006:
        case 0x0007:
        case 0x0008:
        case 0x000b:
        case 0x000c:
        case 0x000e:
        case 0x000f:
            return false;
        // Has non-printable characters
        case 0x000d:
            //  \r
            return false;
        // Has \r or \r\n which will be replaced as \n
        case 10:
            //  \n
            if (isEmptyLine && !seenNonEmptyLine) return false; // Has leading new line
            seenNonEmptyLine = true;
            isEmptyLine = true;
            hasIndent = false;
            break;
        case 9:
        case 32:
            //  <space>
            hasIndent || (hasIndent = isEmptyLine);
            break;
        default:
            hasCommonIndent && (hasCommonIndent = hasIndent);
            isEmptyLine = false;
    }
    if (isEmptyLine) return false; // Has trailing empty lines
    if (hasCommonIndent && seenNonEmptyLine) return false; // Has internal indent
    return true;
}
function printBlockString(value, options) {
    const escapedValue = value.replace(/"""/g, '\\"""'); // Expand a block string's raw value into independent lines.
    const lines = escapedValue.split(/\r\n|[\n\r]/g);
    const isSingleLine = lines.length === 1; // If common indentation is found we can fix some of those cases by adding leading new line
    const forceLeadingNewLine = lines.length > 1 && lines.slice(1).every((line)=>line.length === 0 || (0, _characterClassesMjs.isWhiteSpace)(line.charCodeAt(0))); // Trailing triple quotes just looks confusing but doesn't force trailing new line
    const hasTrailingTripleQuotes = escapedValue.endsWith('\\"""'); // Trailing quote (single or double) or slash forces trailing new line
    const hasTrailingQuote = value.endsWith('"') && !hasTrailingTripleQuotes;
    const hasTrailingSlash = value.endsWith("\\");
    const forceTrailingNewline = hasTrailingQuote || hasTrailingSlash;
    const printAsMultipleLines = !(options !== null && options !== void 0 && options.minimize) && // add leading and trailing new lines only if it improves readability
    (!isSingleLine || value.length > 70 || forceTrailingNewline || forceLeadingNewLine || hasTrailingTripleQuotes);
    let result = ""; // Format a multi-line block quote to account for leading space.
    const skipLeadingNewLine = isSingleLine && (0, _characterClassesMjs.isWhiteSpace)(value.charCodeAt(0));
    if (printAsMultipleLines && !skipLeadingNewLine || forceLeadingNewLine) result += "\n";
    result += escapedValue;
    if (printAsMultipleLines || forceTrailingNewline) result += "\n";
    return '"""' + result + '"""';
}

},{"./characterClasses.mjs":"ieRdY","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ieRdY":[function(require,module,exports) {
/**
 * ```
 * WhiteSpace ::
 *   - "Horizontal Tab (U+0009)"
 *   - "Space (U+0020)"
 * ```
 * @internal
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isWhiteSpace", ()=>isWhiteSpace);
/**
 * ```
 * Digit :: one of
 *   - `0` `1` `2` `3` `4` `5` `6` `7` `8` `9`
 * ```
 * @internal
 */ parcelHelpers.export(exports, "isDigit", ()=>isDigit);
/**
 * ```
 * Letter :: one of
 *   - `A` `B` `C` `D` `E` `F` `G` `H` `I` `J` `K` `L` `M`
 *   - `N` `O` `P` `Q` `R` `S` `T` `U` `V` `W` `X` `Y` `Z`
 *   - `a` `b` `c` `d` `e` `f` `g` `h` `i` `j` `k` `l` `m`
 *   - `n` `o` `p` `q` `r` `s` `t` `u` `v` `w` `x` `y` `z`
 * ```
 * @internal
 */ parcelHelpers.export(exports, "isLetter", ()=>isLetter);
/**
 * ```
 * NameStart ::
 *   - Letter
 *   - `_`
 * ```
 * @internal
 */ parcelHelpers.export(exports, "isNameStart", ()=>isNameStart);
/**
 * ```
 * NameContinue ::
 *   - Letter
 *   - Digit
 *   - `_`
 * ```
 * @internal
 */ parcelHelpers.export(exports, "isNameContinue", ()=>isNameContinue);
function isWhiteSpace(code) {
    return code === 0x0009 || code === 0x0020;
}
function isDigit(code) {
    return code >= 0x0030 && code <= 0x0039;
}
function isLetter(code) {
    return code >= 0x0061 && code <= 0x007a || // A-Z
    code >= 0x0041 && code <= 0x005a // a-z
    ;
}
function isNameStart(code) {
    return isLetter(code) || code === 0x005f;
}
function isNameContinue(code) {
    return isLetter(code) || isDigit(code) || code === 0x005f;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iQAAW":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Configuration options to control parser behavior
 */ /**
 * Given a GraphQL source, parses it into a Document.
 * Throws GraphQLError if a syntax error is encountered.
 */ parcelHelpers.export(exports, "parse", ()=>parse);
/**
 * Given a string containing a GraphQL value (ex. `[42]`), parse the AST for
 * that value.
 * Throws GraphQLError if a syntax error is encountered.
 *
 * This is useful within tools that operate upon GraphQL Values directly and
 * in isolation of complete GraphQL documents.
 *
 * Consider providing the results to the utility function: valueFromAST().
 */ parcelHelpers.export(exports, "parseValue", ()=>parseValue);
/**
 * Similar to parseValue(), but raises a parse error if it encounters a
 * variable. The return type will be a constant value.
 */ parcelHelpers.export(exports, "parseConstValue", ()=>parseConstValue);
/**
 * Given a string containing a GraphQL Type (ex. `[Int!]`), parse the AST for
 * that type.
 * Throws GraphQLError if a syntax error is encountered.
 *
 * This is useful within tools that operate upon GraphQL Types directly and
 * in isolation of complete GraphQL documents.
 *
 * Consider providing the results to the utility function: typeFromAST().
 */ parcelHelpers.export(exports, "parseType", ()=>parseType);
/**
 * This class is exported only to assist people in implementing their own parsers
 * without duplicating too much code and should be used only as last resort for cases
 * such as experimental syntax or if certain features could not be contributed upstream.
 *
 * It is still part of the internal API and is versioned, so any changes to it are never
 * considered breaking changes. If you still need to support multiple versions of the
 * library, please use the `versionInfo` variable for version detection.
 *
 * @internal
 */ parcelHelpers.export(exports, "Parser", ()=>Parser);
var _syntaxErrorMjs = require("../error/syntaxError.mjs");
var _astMjs = require("./ast.mjs");
var _directiveLocationMjs = require("./directiveLocation.mjs");
var _kindsMjs = require("./kinds.mjs");
var _lexerMjs = require("./lexer.mjs");
var _sourceMjs = require("./source.mjs");
var _tokenKindMjs = require("./tokenKind.mjs");
function parse(source, options) {
    const parser = new Parser(source, options);
    return parser.parseDocument();
}
function parseValue(source, options) {
    const parser = new Parser(source, options);
    parser.expectToken((0, _tokenKindMjs.TokenKind).SOF);
    const value = parser.parseValueLiteral(false);
    parser.expectToken((0, _tokenKindMjs.TokenKind).EOF);
    return value;
}
function parseConstValue(source, options) {
    const parser = new Parser(source, options);
    parser.expectToken((0, _tokenKindMjs.TokenKind).SOF);
    const value = parser.parseConstValueLiteral();
    parser.expectToken((0, _tokenKindMjs.TokenKind).EOF);
    return value;
}
function parseType(source, options) {
    const parser = new Parser(source, options);
    parser.expectToken((0, _tokenKindMjs.TokenKind).SOF);
    const type = parser.parseTypeReference();
    parser.expectToken((0, _tokenKindMjs.TokenKind).EOF);
    return type;
}
class Parser {
    constructor(source, options = {}){
        const sourceObj = (0, _sourceMjs.isSource)(source) ? source : new (0, _sourceMjs.Source)(source);
        this._lexer = new (0, _lexerMjs.Lexer)(sourceObj);
        this._options = options;
        this._tokenCounter = 0;
    }
    /**
   * Converts a name lex token into a name parse node.
   */ parseName() {
        const token = this.expectToken((0, _tokenKindMjs.TokenKind).NAME);
        return this.node(token, {
            kind: (0, _kindsMjs.Kind).NAME,
            value: token.value
        });
    }
    /**
   * Document : Definition+
   */ parseDocument() {
        return this.node(this._lexer.token, {
            kind: (0, _kindsMjs.Kind).DOCUMENT,
            definitions: this.many((0, _tokenKindMjs.TokenKind).SOF, this.parseDefinition, (0, _tokenKindMjs.TokenKind).EOF)
        });
    }
    /**
   * Definition :
   *   - ExecutableDefinition
   *   - TypeSystemDefinition
   *   - TypeSystemExtension
   *
   * ExecutableDefinition :
   *   - OperationDefinition
   *   - FragmentDefinition
   *
   * TypeSystemDefinition :
   *   - SchemaDefinition
   *   - TypeDefinition
   *   - DirectiveDefinition
   *
   * TypeDefinition :
   *   - ScalarTypeDefinition
   *   - ObjectTypeDefinition
   *   - InterfaceTypeDefinition
   *   - UnionTypeDefinition
   *   - EnumTypeDefinition
   *   - InputObjectTypeDefinition
   */ parseDefinition() {
        if (this.peek((0, _tokenKindMjs.TokenKind).BRACE_L)) return this.parseOperationDefinition();
         // Many definitions begin with a description and require a lookahead.
        const hasDescription = this.peekDescription();
        const keywordToken = hasDescription ? this._lexer.lookahead() : this._lexer.token;
        if (keywordToken.kind === (0, _tokenKindMjs.TokenKind).NAME) {
            switch(keywordToken.value){
                case "schema":
                    return this.parseSchemaDefinition();
                case "scalar":
                    return this.parseScalarTypeDefinition();
                case "type":
                    return this.parseObjectTypeDefinition();
                case "interface":
                    return this.parseInterfaceTypeDefinition();
                case "union":
                    return this.parseUnionTypeDefinition();
                case "enum":
                    return this.parseEnumTypeDefinition();
                case "input":
                    return this.parseInputObjectTypeDefinition();
                case "directive":
                    return this.parseDirectiveDefinition();
            }
            if (hasDescription) throw (0, _syntaxErrorMjs.syntaxError)(this._lexer.source, this._lexer.token.start, "Unexpected description, descriptions are supported only on type definitions.");
            switch(keywordToken.value){
                case "query":
                case "mutation":
                case "subscription":
                    return this.parseOperationDefinition();
                case "fragment":
                    return this.parseFragmentDefinition();
                case "extend":
                    return this.parseTypeSystemExtension();
            }
        }
        throw this.unexpected(keywordToken);
    }
    /**
   * OperationDefinition :
   *  - SelectionSet
   *  - OperationType Name? VariableDefinitions? Directives? SelectionSet
   */ parseOperationDefinition() {
        const start = this._lexer.token;
        if (this.peek((0, _tokenKindMjs.TokenKind).BRACE_L)) return this.node(start, {
            kind: (0, _kindsMjs.Kind).OPERATION_DEFINITION,
            operation: (0, _astMjs.OperationTypeNode).QUERY,
            name: undefined,
            variableDefinitions: [],
            directives: [],
            selectionSet: this.parseSelectionSet()
        });
        const operation = this.parseOperationType();
        let name;
        if (this.peek((0, _tokenKindMjs.TokenKind).NAME)) name = this.parseName();
        return this.node(start, {
            kind: (0, _kindsMjs.Kind).OPERATION_DEFINITION,
            operation,
            name,
            variableDefinitions: this.parseVariableDefinitions(),
            directives: this.parseDirectives(false),
            selectionSet: this.parseSelectionSet()
        });
    }
    /**
   * OperationType : one of query mutation subscription
   */ parseOperationType() {
        const operationToken = this.expectToken((0, _tokenKindMjs.TokenKind).NAME);
        switch(operationToken.value){
            case "query":
                return (0, _astMjs.OperationTypeNode).QUERY;
            case "mutation":
                return (0, _astMjs.OperationTypeNode).MUTATION;
            case "subscription":
                return (0, _astMjs.OperationTypeNode).SUBSCRIPTION;
        }
        throw this.unexpected(operationToken);
    }
    /**
   * VariableDefinitions : ( VariableDefinition+ )
   */ parseVariableDefinitions() {
        return this.optionalMany((0, _tokenKindMjs.TokenKind).PAREN_L, this.parseVariableDefinition, (0, _tokenKindMjs.TokenKind).PAREN_R);
    }
    /**
   * VariableDefinition : Variable : Type DefaultValue? Directives[Const]?
   */ parseVariableDefinition() {
        return this.node(this._lexer.token, {
            kind: (0, _kindsMjs.Kind).VARIABLE_DEFINITION,
            variable: this.parseVariable(),
            type: (this.expectToken((0, _tokenKindMjs.TokenKind).COLON), this.parseTypeReference()),
            defaultValue: this.expectOptionalToken((0, _tokenKindMjs.TokenKind).EQUALS) ? this.parseConstValueLiteral() : undefined,
            directives: this.parseConstDirectives()
        });
    }
    /**
   * Variable : $ Name
   */ parseVariable() {
        const start = this._lexer.token;
        this.expectToken((0, _tokenKindMjs.TokenKind).DOLLAR);
        return this.node(start, {
            kind: (0, _kindsMjs.Kind).VARIABLE,
            name: this.parseName()
        });
    }
    /**
   * ```
   * SelectionSet : { Selection+ }
   * ```
   */ parseSelectionSet() {
        return this.node(this._lexer.token, {
            kind: (0, _kindsMjs.Kind).SELECTION_SET,
            selections: this.many((0, _tokenKindMjs.TokenKind).BRACE_L, this.parseSelection, (0, _tokenKindMjs.TokenKind).BRACE_R)
        });
    }
    /**
   * Selection :
   *   - Field
   *   - FragmentSpread
   *   - InlineFragment
   */ parseSelection() {
        return this.peek((0, _tokenKindMjs.TokenKind).SPREAD) ? this.parseFragment() : this.parseField();
    }
    /**
   * Field : Alias? Name Arguments? Directives? SelectionSet?
   *
   * Alias : Name :
   */ parseField() {
        const start = this._lexer.token;
        const nameOrAlias = this.parseName();
        let alias;
        let name;
        if (this.expectOptionalToken((0, _tokenKindMjs.TokenKind).COLON)) {
            alias = nameOrAlias;
            name = this.parseName();
        } else name = nameOrAlias;
        return this.node(start, {
            kind: (0, _kindsMjs.Kind).FIELD,
            alias,
            name,
            arguments: this.parseArguments(false),
            directives: this.parseDirectives(false),
            selectionSet: this.peek((0, _tokenKindMjs.TokenKind).BRACE_L) ? this.parseSelectionSet() : undefined
        });
    }
    /**
   * Arguments[Const] : ( Argument[?Const]+ )
   */ parseArguments(isConst) {
        const item = isConst ? this.parseConstArgument : this.parseArgument;
        return this.optionalMany((0, _tokenKindMjs.TokenKind).PAREN_L, item, (0, _tokenKindMjs.TokenKind).PAREN_R);
    }
    /**
   * Argument[Const] : Name : Value[?Const]
   */ parseArgument(isConst = false) {
        const start = this._lexer.token;
        const name = this.parseName();
        this.expectToken((0, _tokenKindMjs.TokenKind).COLON);
        return this.node(start, {
            kind: (0, _kindsMjs.Kind).ARGUMENT,
            name,
            value: this.parseValueLiteral(isConst)
        });
    }
    parseConstArgument() {
        return this.parseArgument(true);
    }
    /**
   * Corresponds to both FragmentSpread and InlineFragment in the spec.
   *
   * FragmentSpread : ... FragmentName Directives?
   *
   * InlineFragment : ... TypeCondition? Directives? SelectionSet
   */ parseFragment() {
        const start = this._lexer.token;
        this.expectToken((0, _tokenKindMjs.TokenKind).SPREAD);
        const hasTypeCondition = this.expectOptionalKeyword("on");
        if (!hasTypeCondition && this.peek((0, _tokenKindMjs.TokenKind).NAME)) return this.node(start, {
            kind: (0, _kindsMjs.Kind).FRAGMENT_SPREAD,
            name: this.parseFragmentName(),
            directives: this.parseDirectives(false)
        });
        return this.node(start, {
            kind: (0, _kindsMjs.Kind).INLINE_FRAGMENT,
            typeCondition: hasTypeCondition ? this.parseNamedType() : undefined,
            directives: this.parseDirectives(false),
            selectionSet: this.parseSelectionSet()
        });
    }
    /**
   * FragmentDefinition :
   *   - fragment FragmentName on TypeCondition Directives? SelectionSet
   *
   * TypeCondition : NamedType
   */ parseFragmentDefinition() {
        const start = this._lexer.token;
        this.expectKeyword("fragment"); // Legacy support for defining variables within fragments changes
        // the grammar of FragmentDefinition:
        //   - fragment FragmentName VariableDefinitions? on TypeCondition Directives? SelectionSet
        if (this._options.allowLegacyFragmentVariables === true) return this.node(start, {
            kind: (0, _kindsMjs.Kind).FRAGMENT_DEFINITION,
            name: this.parseFragmentName(),
            variableDefinitions: this.parseVariableDefinitions(),
            typeCondition: (this.expectKeyword("on"), this.parseNamedType()),
            directives: this.parseDirectives(false),
            selectionSet: this.parseSelectionSet()
        });
        return this.node(start, {
            kind: (0, _kindsMjs.Kind).FRAGMENT_DEFINITION,
            name: this.parseFragmentName(),
            typeCondition: (this.expectKeyword("on"), this.parseNamedType()),
            directives: this.parseDirectives(false),
            selectionSet: this.parseSelectionSet()
        });
    }
    /**
   * FragmentName : Name but not `on`
   */ parseFragmentName() {
        if (this._lexer.token.value === "on") throw this.unexpected();
        return this.parseName();
    }
    /**
   * Value[Const] :
   *   - [~Const] Variable
   *   - IntValue
   *   - FloatValue
   *   - StringValue
   *   - BooleanValue
   *   - NullValue
   *   - EnumValue
   *   - ListValue[?Const]
   *   - ObjectValue[?Const]
   *
   * BooleanValue : one of `true` `false`
   *
   * NullValue : `null`
   *
   * EnumValue : Name but not `true`, `false` or `null`
   */ parseValueLiteral(isConst) {
        const token = this._lexer.token;
        switch(token.kind){
            case (0, _tokenKindMjs.TokenKind).BRACKET_L:
                return this.parseList(isConst);
            case (0, _tokenKindMjs.TokenKind).BRACE_L:
                return this.parseObject(isConst);
            case (0, _tokenKindMjs.TokenKind).INT:
                this.advanceLexer();
                return this.node(token, {
                    kind: (0, _kindsMjs.Kind).INT,
                    value: token.value
                });
            case (0, _tokenKindMjs.TokenKind).FLOAT:
                this.advanceLexer();
                return this.node(token, {
                    kind: (0, _kindsMjs.Kind).FLOAT,
                    value: token.value
                });
            case (0, _tokenKindMjs.TokenKind).STRING:
            case (0, _tokenKindMjs.TokenKind).BLOCK_STRING:
                return this.parseStringLiteral();
            case (0, _tokenKindMjs.TokenKind).NAME:
                this.advanceLexer();
                switch(token.value){
                    case "true":
                        return this.node(token, {
                            kind: (0, _kindsMjs.Kind).BOOLEAN,
                            value: true
                        });
                    case "false":
                        return this.node(token, {
                            kind: (0, _kindsMjs.Kind).BOOLEAN,
                            value: false
                        });
                    case "null":
                        return this.node(token, {
                            kind: (0, _kindsMjs.Kind).NULL
                        });
                    default:
                        return this.node(token, {
                            kind: (0, _kindsMjs.Kind).ENUM,
                            value: token.value
                        });
                }
            case (0, _tokenKindMjs.TokenKind).DOLLAR:
                if (isConst) {
                    this.expectToken((0, _tokenKindMjs.TokenKind).DOLLAR);
                    if (this._lexer.token.kind === (0, _tokenKindMjs.TokenKind).NAME) {
                        const varName = this._lexer.token.value;
                        throw (0, _syntaxErrorMjs.syntaxError)(this._lexer.source, token.start, `Unexpected variable "$${varName}" in constant value.`);
                    } else throw this.unexpected(token);
                }
                return this.parseVariable();
            default:
                throw this.unexpected();
        }
    }
    parseConstValueLiteral() {
        return this.parseValueLiteral(true);
    }
    parseStringLiteral() {
        const token = this._lexer.token;
        this.advanceLexer();
        return this.node(token, {
            kind: (0, _kindsMjs.Kind).STRING,
            value: token.value,
            block: token.kind === (0, _tokenKindMjs.TokenKind).BLOCK_STRING
        });
    }
    /**
   * ListValue[Const] :
   *   - [ ]
   *   - [ Value[?Const]+ ]
   */ parseList(isConst) {
        const item = ()=>this.parseValueLiteral(isConst);
        return this.node(this._lexer.token, {
            kind: (0, _kindsMjs.Kind).LIST,
            values: this.any((0, _tokenKindMjs.TokenKind).BRACKET_L, item, (0, _tokenKindMjs.TokenKind).BRACKET_R)
        });
    }
    /**
   * ```
   * ObjectValue[Const] :
   *   - { }
   *   - { ObjectField[?Const]+ }
   * ```
   */ parseObject(isConst) {
        const item = ()=>this.parseObjectField(isConst);
        return this.node(this._lexer.token, {
            kind: (0, _kindsMjs.Kind).OBJECT,
            fields: this.any((0, _tokenKindMjs.TokenKind).BRACE_L, item, (0, _tokenKindMjs.TokenKind).BRACE_R)
        });
    }
    /**
   * ObjectField[Const] : Name : Value[?Const]
   */ parseObjectField(isConst) {
        const start = this._lexer.token;
        const name = this.parseName();
        this.expectToken((0, _tokenKindMjs.TokenKind).COLON);
        return this.node(start, {
            kind: (0, _kindsMjs.Kind).OBJECT_FIELD,
            name,
            value: this.parseValueLiteral(isConst)
        });
    }
    /**
   * Directives[Const] : Directive[?Const]+
   */ parseDirectives(isConst) {
        const directives = [];
        while(this.peek((0, _tokenKindMjs.TokenKind).AT))directives.push(this.parseDirective(isConst));
        return directives;
    }
    parseConstDirectives() {
        return this.parseDirectives(true);
    }
    /**
   * ```
   * Directive[Const] : @ Name Arguments[?Const]?
   * ```
   */ parseDirective(isConst) {
        const start = this._lexer.token;
        this.expectToken((0, _tokenKindMjs.TokenKind).AT);
        return this.node(start, {
            kind: (0, _kindsMjs.Kind).DIRECTIVE,
            name: this.parseName(),
            arguments: this.parseArguments(isConst)
        });
    }
    /**
   * Type :
   *   - NamedType
   *   - ListType
   *   - NonNullType
   */ parseTypeReference() {
        const start = this._lexer.token;
        let type;
        if (this.expectOptionalToken((0, _tokenKindMjs.TokenKind).BRACKET_L)) {
            const innerType = this.parseTypeReference();
            this.expectToken((0, _tokenKindMjs.TokenKind).BRACKET_R);
            type = this.node(start, {
                kind: (0, _kindsMjs.Kind).LIST_TYPE,
                type: innerType
            });
        } else type = this.parseNamedType();
        if (this.expectOptionalToken((0, _tokenKindMjs.TokenKind).BANG)) return this.node(start, {
            kind: (0, _kindsMjs.Kind).NON_NULL_TYPE,
            type
        });
        return type;
    }
    /**
   * NamedType : Name
   */ parseNamedType() {
        return this.node(this._lexer.token, {
            kind: (0, _kindsMjs.Kind).NAMED_TYPE,
            name: this.parseName()
        });
    }
    peekDescription() {
        return this.peek((0, _tokenKindMjs.TokenKind).STRING) || this.peek((0, _tokenKindMjs.TokenKind).BLOCK_STRING);
    }
    /**
   * Description : StringValue
   */ parseDescription() {
        if (this.peekDescription()) return this.parseStringLiteral();
    }
    /**
   * ```
   * SchemaDefinition : Description? schema Directives[Const]? { OperationTypeDefinition+ }
   * ```
   */ parseSchemaDefinition() {
        const start = this._lexer.token;
        const description = this.parseDescription();
        this.expectKeyword("schema");
        const directives = this.parseConstDirectives();
        const operationTypes = this.many((0, _tokenKindMjs.TokenKind).BRACE_L, this.parseOperationTypeDefinition, (0, _tokenKindMjs.TokenKind).BRACE_R);
        return this.node(start, {
            kind: (0, _kindsMjs.Kind).SCHEMA_DEFINITION,
            description,
            directives,
            operationTypes
        });
    }
    /**
   * OperationTypeDefinition : OperationType : NamedType
   */ parseOperationTypeDefinition() {
        const start = this._lexer.token;
        const operation = this.parseOperationType();
        this.expectToken((0, _tokenKindMjs.TokenKind).COLON);
        const type = this.parseNamedType();
        return this.node(start, {
            kind: (0, _kindsMjs.Kind).OPERATION_TYPE_DEFINITION,
            operation,
            type
        });
    }
    /**
   * ScalarTypeDefinition : Description? scalar Name Directives[Const]?
   */ parseScalarTypeDefinition() {
        const start = this._lexer.token;
        const description = this.parseDescription();
        this.expectKeyword("scalar");
        const name = this.parseName();
        const directives = this.parseConstDirectives();
        return this.node(start, {
            kind: (0, _kindsMjs.Kind).SCALAR_TYPE_DEFINITION,
            description,
            name,
            directives
        });
    }
    /**
   * ObjectTypeDefinition :
   *   Description?
   *   type Name ImplementsInterfaces? Directives[Const]? FieldsDefinition?
   */ parseObjectTypeDefinition() {
        const start = this._lexer.token;
        const description = this.parseDescription();
        this.expectKeyword("type");
        const name = this.parseName();
        const interfaces = this.parseImplementsInterfaces();
        const directives = this.parseConstDirectives();
        const fields = this.parseFieldsDefinition();
        return this.node(start, {
            kind: (0, _kindsMjs.Kind).OBJECT_TYPE_DEFINITION,
            description,
            name,
            interfaces,
            directives,
            fields
        });
    }
    /**
   * ImplementsInterfaces :
   *   - implements `&`? NamedType
   *   - ImplementsInterfaces & NamedType
   */ parseImplementsInterfaces() {
        return this.expectOptionalKeyword("implements") ? this.delimitedMany((0, _tokenKindMjs.TokenKind).AMP, this.parseNamedType) : [];
    }
    /**
   * ```
   * FieldsDefinition : { FieldDefinition+ }
   * ```
   */ parseFieldsDefinition() {
        return this.optionalMany((0, _tokenKindMjs.TokenKind).BRACE_L, this.parseFieldDefinition, (0, _tokenKindMjs.TokenKind).BRACE_R);
    }
    /**
   * FieldDefinition :
   *   - Description? Name ArgumentsDefinition? : Type Directives[Const]?
   */ parseFieldDefinition() {
        const start = this._lexer.token;
        const description = this.parseDescription();
        const name = this.parseName();
        const args = this.parseArgumentDefs();
        this.expectToken((0, _tokenKindMjs.TokenKind).COLON);
        const type = this.parseTypeReference();
        const directives = this.parseConstDirectives();
        return this.node(start, {
            kind: (0, _kindsMjs.Kind).FIELD_DEFINITION,
            description,
            name,
            arguments: args,
            type,
            directives
        });
    }
    /**
   * ArgumentsDefinition : ( InputValueDefinition+ )
   */ parseArgumentDefs() {
        return this.optionalMany((0, _tokenKindMjs.TokenKind).PAREN_L, this.parseInputValueDef, (0, _tokenKindMjs.TokenKind).PAREN_R);
    }
    /**
   * InputValueDefinition :
   *   - Description? Name : Type DefaultValue? Directives[Const]?
   */ parseInputValueDef() {
        const start = this._lexer.token;
        const description = this.parseDescription();
        const name = this.parseName();
        this.expectToken((0, _tokenKindMjs.TokenKind).COLON);
        const type = this.parseTypeReference();
        let defaultValue;
        if (this.expectOptionalToken((0, _tokenKindMjs.TokenKind).EQUALS)) defaultValue = this.parseConstValueLiteral();
        const directives = this.parseConstDirectives();
        return this.node(start, {
            kind: (0, _kindsMjs.Kind).INPUT_VALUE_DEFINITION,
            description,
            name,
            type,
            defaultValue,
            directives
        });
    }
    /**
   * InterfaceTypeDefinition :
   *   - Description? interface Name Directives[Const]? FieldsDefinition?
   */ parseInterfaceTypeDefinition() {
        const start = this._lexer.token;
        const description = this.parseDescription();
        this.expectKeyword("interface");
        const name = this.parseName();
        const interfaces = this.parseImplementsInterfaces();
        const directives = this.parseConstDirectives();
        const fields = this.parseFieldsDefinition();
        return this.node(start, {
            kind: (0, _kindsMjs.Kind).INTERFACE_TYPE_DEFINITION,
            description,
            name,
            interfaces,
            directives,
            fields
        });
    }
    /**
   * UnionTypeDefinition :
   *   - Description? union Name Directives[Const]? UnionMemberTypes?
   */ parseUnionTypeDefinition() {
        const start = this._lexer.token;
        const description = this.parseDescription();
        this.expectKeyword("union");
        const name = this.parseName();
        const directives = this.parseConstDirectives();
        const types = this.parseUnionMemberTypes();
        return this.node(start, {
            kind: (0, _kindsMjs.Kind).UNION_TYPE_DEFINITION,
            description,
            name,
            directives,
            types
        });
    }
    /**
   * UnionMemberTypes :
   *   - = `|`? NamedType
   *   - UnionMemberTypes | NamedType
   */ parseUnionMemberTypes() {
        return this.expectOptionalToken((0, _tokenKindMjs.TokenKind).EQUALS) ? this.delimitedMany((0, _tokenKindMjs.TokenKind).PIPE, this.parseNamedType) : [];
    }
    /**
   * EnumTypeDefinition :
   *   - Description? enum Name Directives[Const]? EnumValuesDefinition?
   */ parseEnumTypeDefinition() {
        const start = this._lexer.token;
        const description = this.parseDescription();
        this.expectKeyword("enum");
        const name = this.parseName();
        const directives = this.parseConstDirectives();
        const values = this.parseEnumValuesDefinition();
        return this.node(start, {
            kind: (0, _kindsMjs.Kind).ENUM_TYPE_DEFINITION,
            description,
            name,
            directives,
            values
        });
    }
    /**
   * ```
   * EnumValuesDefinition : { EnumValueDefinition+ }
   * ```
   */ parseEnumValuesDefinition() {
        return this.optionalMany((0, _tokenKindMjs.TokenKind).BRACE_L, this.parseEnumValueDefinition, (0, _tokenKindMjs.TokenKind).BRACE_R);
    }
    /**
   * EnumValueDefinition : Description? EnumValue Directives[Const]?
   */ parseEnumValueDefinition() {
        const start = this._lexer.token;
        const description = this.parseDescription();
        const name = this.parseEnumValueName();
        const directives = this.parseConstDirectives();
        return this.node(start, {
            kind: (0, _kindsMjs.Kind).ENUM_VALUE_DEFINITION,
            description,
            name,
            directives
        });
    }
    /**
   * EnumValue : Name but not `true`, `false` or `null`
   */ parseEnumValueName() {
        if (this._lexer.token.value === "true" || this._lexer.token.value === "false" || this._lexer.token.value === "null") throw (0, _syntaxErrorMjs.syntaxError)(this._lexer.source, this._lexer.token.start, `${getTokenDesc(this._lexer.token)} is reserved and cannot be used for an enum value.`);
        return this.parseName();
    }
    /**
   * InputObjectTypeDefinition :
   *   - Description? input Name Directives[Const]? InputFieldsDefinition?
   */ parseInputObjectTypeDefinition() {
        const start = this._lexer.token;
        const description = this.parseDescription();
        this.expectKeyword("input");
        const name = this.parseName();
        const directives = this.parseConstDirectives();
        const fields = this.parseInputFieldsDefinition();
        return this.node(start, {
            kind: (0, _kindsMjs.Kind).INPUT_OBJECT_TYPE_DEFINITION,
            description,
            name,
            directives,
            fields
        });
    }
    /**
   * ```
   * InputFieldsDefinition : { InputValueDefinition+ }
   * ```
   */ parseInputFieldsDefinition() {
        return this.optionalMany((0, _tokenKindMjs.TokenKind).BRACE_L, this.parseInputValueDef, (0, _tokenKindMjs.TokenKind).BRACE_R);
    }
    /**
   * TypeSystemExtension :
   *   - SchemaExtension
   *   - TypeExtension
   *
   * TypeExtension :
   *   - ScalarTypeExtension
   *   - ObjectTypeExtension
   *   - InterfaceTypeExtension
   *   - UnionTypeExtension
   *   - EnumTypeExtension
   *   - InputObjectTypeDefinition
   */ parseTypeSystemExtension() {
        const keywordToken = this._lexer.lookahead();
        if (keywordToken.kind === (0, _tokenKindMjs.TokenKind).NAME) switch(keywordToken.value){
            case "schema":
                return this.parseSchemaExtension();
            case "scalar":
                return this.parseScalarTypeExtension();
            case "type":
                return this.parseObjectTypeExtension();
            case "interface":
                return this.parseInterfaceTypeExtension();
            case "union":
                return this.parseUnionTypeExtension();
            case "enum":
                return this.parseEnumTypeExtension();
            case "input":
                return this.parseInputObjectTypeExtension();
        }
        throw this.unexpected(keywordToken);
    }
    /**
   * ```
   * SchemaExtension :
   *  - extend schema Directives[Const]? { OperationTypeDefinition+ }
   *  - extend schema Directives[Const]
   * ```
   */ parseSchemaExtension() {
        const start = this._lexer.token;
        this.expectKeyword("extend");
        this.expectKeyword("schema");
        const directives = this.parseConstDirectives();
        const operationTypes = this.optionalMany((0, _tokenKindMjs.TokenKind).BRACE_L, this.parseOperationTypeDefinition, (0, _tokenKindMjs.TokenKind).BRACE_R);
        if (directives.length === 0 && operationTypes.length === 0) throw this.unexpected();
        return this.node(start, {
            kind: (0, _kindsMjs.Kind).SCHEMA_EXTENSION,
            directives,
            operationTypes
        });
    }
    /**
   * ScalarTypeExtension :
   *   - extend scalar Name Directives[Const]
   */ parseScalarTypeExtension() {
        const start = this._lexer.token;
        this.expectKeyword("extend");
        this.expectKeyword("scalar");
        const name = this.parseName();
        const directives = this.parseConstDirectives();
        if (directives.length === 0) throw this.unexpected();
        return this.node(start, {
            kind: (0, _kindsMjs.Kind).SCALAR_TYPE_EXTENSION,
            name,
            directives
        });
    }
    /**
   * ObjectTypeExtension :
   *  - extend type Name ImplementsInterfaces? Directives[Const]? FieldsDefinition
   *  - extend type Name ImplementsInterfaces? Directives[Const]
   *  - extend type Name ImplementsInterfaces
   */ parseObjectTypeExtension() {
        const start = this._lexer.token;
        this.expectKeyword("extend");
        this.expectKeyword("type");
        const name = this.parseName();
        const interfaces = this.parseImplementsInterfaces();
        const directives = this.parseConstDirectives();
        const fields = this.parseFieldsDefinition();
        if (interfaces.length === 0 && directives.length === 0 && fields.length === 0) throw this.unexpected();
        return this.node(start, {
            kind: (0, _kindsMjs.Kind).OBJECT_TYPE_EXTENSION,
            name,
            interfaces,
            directives,
            fields
        });
    }
    /**
   * InterfaceTypeExtension :
   *  - extend interface Name ImplementsInterfaces? Directives[Const]? FieldsDefinition
   *  - extend interface Name ImplementsInterfaces? Directives[Const]
   *  - extend interface Name ImplementsInterfaces
   */ parseInterfaceTypeExtension() {
        const start = this._lexer.token;
        this.expectKeyword("extend");
        this.expectKeyword("interface");
        const name = this.parseName();
        const interfaces = this.parseImplementsInterfaces();
        const directives = this.parseConstDirectives();
        const fields = this.parseFieldsDefinition();
        if (interfaces.length === 0 && directives.length === 0 && fields.length === 0) throw this.unexpected();
        return this.node(start, {
            kind: (0, _kindsMjs.Kind).INTERFACE_TYPE_EXTENSION,
            name,
            interfaces,
            directives,
            fields
        });
    }
    /**
   * UnionTypeExtension :
   *   - extend union Name Directives[Const]? UnionMemberTypes
   *   - extend union Name Directives[Const]
   */ parseUnionTypeExtension() {
        const start = this._lexer.token;
        this.expectKeyword("extend");
        this.expectKeyword("union");
        const name = this.parseName();
        const directives = this.parseConstDirectives();
        const types = this.parseUnionMemberTypes();
        if (directives.length === 0 && types.length === 0) throw this.unexpected();
        return this.node(start, {
            kind: (0, _kindsMjs.Kind).UNION_TYPE_EXTENSION,
            name,
            directives,
            types
        });
    }
    /**
   * EnumTypeExtension :
   *   - extend enum Name Directives[Const]? EnumValuesDefinition
   *   - extend enum Name Directives[Const]
   */ parseEnumTypeExtension() {
        const start = this._lexer.token;
        this.expectKeyword("extend");
        this.expectKeyword("enum");
        const name = this.parseName();
        const directives = this.parseConstDirectives();
        const values = this.parseEnumValuesDefinition();
        if (directives.length === 0 && values.length === 0) throw this.unexpected();
        return this.node(start, {
            kind: (0, _kindsMjs.Kind).ENUM_TYPE_EXTENSION,
            name,
            directives,
            values
        });
    }
    /**
   * InputObjectTypeExtension :
   *   - extend input Name Directives[Const]? InputFieldsDefinition
   *   - extend input Name Directives[Const]
   */ parseInputObjectTypeExtension() {
        const start = this._lexer.token;
        this.expectKeyword("extend");
        this.expectKeyword("input");
        const name = this.parseName();
        const directives = this.parseConstDirectives();
        const fields = this.parseInputFieldsDefinition();
        if (directives.length === 0 && fields.length === 0) throw this.unexpected();
        return this.node(start, {
            kind: (0, _kindsMjs.Kind).INPUT_OBJECT_TYPE_EXTENSION,
            name,
            directives,
            fields
        });
    }
    /**
   * ```
   * DirectiveDefinition :
   *   - Description? directive @ Name ArgumentsDefinition? `repeatable`? on DirectiveLocations
   * ```
   */ parseDirectiveDefinition() {
        const start = this._lexer.token;
        const description = this.parseDescription();
        this.expectKeyword("directive");
        this.expectToken((0, _tokenKindMjs.TokenKind).AT);
        const name = this.parseName();
        const args = this.parseArgumentDefs();
        const repeatable = this.expectOptionalKeyword("repeatable");
        this.expectKeyword("on");
        const locations = this.parseDirectiveLocations();
        return this.node(start, {
            kind: (0, _kindsMjs.Kind).DIRECTIVE_DEFINITION,
            description,
            name,
            arguments: args,
            repeatable,
            locations
        });
    }
    /**
   * DirectiveLocations :
   *   - `|`? DirectiveLocation
   *   - DirectiveLocations | DirectiveLocation
   */ parseDirectiveLocations() {
        return this.delimitedMany((0, _tokenKindMjs.TokenKind).PIPE, this.parseDirectiveLocation);
    }
    /*
   * DirectiveLocation :
   *   - ExecutableDirectiveLocation
   *   - TypeSystemDirectiveLocation
   *
   * ExecutableDirectiveLocation : one of
   *   `QUERY`
   *   `MUTATION`
   *   `SUBSCRIPTION`
   *   `FIELD`
   *   `FRAGMENT_DEFINITION`
   *   `FRAGMENT_SPREAD`
   *   `INLINE_FRAGMENT`
   *
   * TypeSystemDirectiveLocation : one of
   *   `SCHEMA`
   *   `SCALAR`
   *   `OBJECT`
   *   `FIELD_DEFINITION`
   *   `ARGUMENT_DEFINITION`
   *   `INTERFACE`
   *   `UNION`
   *   `ENUM`
   *   `ENUM_VALUE`
   *   `INPUT_OBJECT`
   *   `INPUT_FIELD_DEFINITION`
   */ parseDirectiveLocation() {
        const start = this._lexer.token;
        const name = this.parseName();
        if (Object.prototype.hasOwnProperty.call((0, _directiveLocationMjs.DirectiveLocation), name.value)) return name;
        throw this.unexpected(start);
    }
    /**
   * Returns a node that, if configured to do so, sets a "loc" field as a
   * location object, used to identify the place in the source that created a
   * given parsed object.
   */ node(startToken, node) {
        if (this._options.noLocation !== true) node.loc = new (0, _astMjs.Location)(startToken, this._lexer.lastToken, this._lexer.source);
        return node;
    }
    /**
   * Determines if the next token is of a given kind
   */ peek(kind) {
        return this._lexer.token.kind === kind;
    }
    /**
   * If the next token is of the given kind, return that token after advancing the lexer.
   * Otherwise, do not change the parser state and throw an error.
   */ expectToken(kind) {
        const token = this._lexer.token;
        if (token.kind === kind) {
            this.advanceLexer();
            return token;
        }
        throw (0, _syntaxErrorMjs.syntaxError)(this._lexer.source, token.start, `Expected ${getTokenKindDesc(kind)}, found ${getTokenDesc(token)}.`);
    }
    /**
   * If the next token is of the given kind, return "true" after advancing the lexer.
   * Otherwise, do not change the parser state and return "false".
   */ expectOptionalToken(kind) {
        const token = this._lexer.token;
        if (token.kind === kind) {
            this.advanceLexer();
            return true;
        }
        return false;
    }
    /**
   * If the next token is a given keyword, advance the lexer.
   * Otherwise, do not change the parser state and throw an error.
   */ expectKeyword(value) {
        const token = this._lexer.token;
        if (token.kind === (0, _tokenKindMjs.TokenKind).NAME && token.value === value) this.advanceLexer();
        else throw (0, _syntaxErrorMjs.syntaxError)(this._lexer.source, token.start, `Expected "${value}", found ${getTokenDesc(token)}.`);
    }
    /**
   * If the next token is a given keyword, return "true" after advancing the lexer.
   * Otherwise, do not change the parser state and return "false".
   */ expectOptionalKeyword(value) {
        const token = this._lexer.token;
        if (token.kind === (0, _tokenKindMjs.TokenKind).NAME && token.value === value) {
            this.advanceLexer();
            return true;
        }
        return false;
    }
    /**
   * Helper function for creating an error when an unexpected lexed token is encountered.
   */ unexpected(atToken) {
        const token = atToken !== null && atToken !== void 0 ? atToken : this._lexer.token;
        return (0, _syntaxErrorMjs.syntaxError)(this._lexer.source, token.start, `Unexpected ${getTokenDesc(token)}.`);
    }
    /**
   * Returns a possibly empty list of parse nodes, determined by the parseFn.
   * This list begins with a lex token of openKind and ends with a lex token of closeKind.
   * Advances the parser to the next lex token after the closing token.
   */ any(openKind, parseFn, closeKind) {
        this.expectToken(openKind);
        const nodes = [];
        while(!this.expectOptionalToken(closeKind))nodes.push(parseFn.call(this));
        return nodes;
    }
    /**
   * Returns a list of parse nodes, determined by the parseFn.
   * It can be empty only if open token is missing otherwise it will always return non-empty list
   * that begins with a lex token of openKind and ends with a lex token of closeKind.
   * Advances the parser to the next lex token after the closing token.
   */ optionalMany(openKind, parseFn, closeKind) {
        if (this.expectOptionalToken(openKind)) {
            const nodes = [];
            do nodes.push(parseFn.call(this));
            while (!this.expectOptionalToken(closeKind));
            return nodes;
        }
        return [];
    }
    /**
   * Returns a non-empty list of parse nodes, determined by the parseFn.
   * This list begins with a lex token of openKind and ends with a lex token of closeKind.
   * Advances the parser to the next lex token after the closing token.
   */ many(openKind, parseFn, closeKind) {
        this.expectToken(openKind);
        const nodes = [];
        do nodes.push(parseFn.call(this));
        while (!this.expectOptionalToken(closeKind));
        return nodes;
    }
    /**
   * Returns a non-empty list of parse nodes, determined by the parseFn.
   * This list may begin with a lex token of delimiterKind followed by items separated by lex tokens of tokenKind.
   * Advances the parser to the next lex token after last item in the list.
   */ delimitedMany(delimiterKind, parseFn) {
        this.expectOptionalToken(delimiterKind);
        const nodes = [];
        do nodes.push(parseFn.call(this));
        while (this.expectOptionalToken(delimiterKind));
        return nodes;
    }
    advanceLexer() {
        const { maxTokens  } = this._options;
        const token = this._lexer.advance();
        if (maxTokens !== undefined && token.kind !== (0, _tokenKindMjs.TokenKind).EOF) {
            ++this._tokenCounter;
            if (this._tokenCounter > maxTokens) throw (0, _syntaxErrorMjs.syntaxError)(this._lexer.source, token.start, `Document contains more that ${maxTokens} tokens. Parsing aborted.`);
        }
    }
}
/**
 * A helper function to describe a token as a string for debugging.
 */ function getTokenDesc(token) {
    const value = token.value;
    return getTokenKindDesc(token.kind) + (value != null ? ` "${value}"` : "");
}
/**
 * A helper function to describe a token kind as a string for debugging.
 */ function getTokenKindDesc(kind) {
    return (0, _lexerMjs.isPunctuatorTokenKind)(kind) ? `"${kind}"` : kind;
}

},{"../error/syntaxError.mjs":"9aPZI","./ast.mjs":"iaolY","./directiveLocation.mjs":"hGyry","./kinds.mjs":"6adj0","./lexer.mjs":"6eDKj","./source.mjs":"jclLZ","./tokenKind.mjs":"chwug","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hGyry":[function(require,module,exports) {
/**
 * The set of allowed directive location values.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "DirectiveLocation", ()=>DirectiveLocation) /**
 * The enum type representing the directive location values.
 *
 * @deprecated Please use `DirectiveLocation`. Will be remove in v17.
 */ ;
var DirectiveLocation;
(function(DirectiveLocation) {
    DirectiveLocation["QUERY"] = "QUERY";
    DirectiveLocation["MUTATION"] = "MUTATION";
    DirectiveLocation["SUBSCRIPTION"] = "SUBSCRIPTION";
    DirectiveLocation["FIELD"] = "FIELD";
    DirectiveLocation["FRAGMENT_DEFINITION"] = "FRAGMENT_DEFINITION";
    DirectiveLocation["FRAGMENT_SPREAD"] = "FRAGMENT_SPREAD";
    DirectiveLocation["INLINE_FRAGMENT"] = "INLINE_FRAGMENT";
    DirectiveLocation["VARIABLE_DEFINITION"] = "VARIABLE_DEFINITION";
    DirectiveLocation["SCHEMA"] = "SCHEMA";
    DirectiveLocation["SCALAR"] = "SCALAR";
    DirectiveLocation["OBJECT"] = "OBJECT";
    DirectiveLocation["FIELD_DEFINITION"] = "FIELD_DEFINITION";
    DirectiveLocation["ARGUMENT_DEFINITION"] = "ARGUMENT_DEFINITION";
    DirectiveLocation["INTERFACE"] = "INTERFACE";
    DirectiveLocation["UNION"] = "UNION";
    DirectiveLocation["ENUM"] = "ENUM";
    DirectiveLocation["ENUM_VALUE"] = "ENUM_VALUE";
    DirectiveLocation["INPUT_OBJECT"] = "INPUT_OBJECT";
    DirectiveLocation["INPUT_FIELD_DEFINITION"] = "INPUT_FIELD_DEFINITION";
})(DirectiveLocation || (DirectiveLocation = {}));

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6YJ0M":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Converts an AST into a string, using one set of reasonable
 * formatting rules.
 */ parcelHelpers.export(exports, "print", ()=>print);
var _blockStringMjs = require("./blockString.mjs");
var _printStringMjs = require("./printString.mjs");
var _visitorMjs = require("./visitor.mjs");
function print(ast) {
    return (0, _visitorMjs.visit)(ast, printDocASTReducer);
}
const MAX_LINE_LENGTH = 80;
const printDocASTReducer = {
    Name: {
        leave: (node)=>node.value
    },
    Variable: {
        leave: (node)=>"$" + node.name
    },
    // Document
    Document: {
        leave: (node)=>join(node.definitions, "\n\n")
    },
    OperationDefinition: {
        leave (node) {
            const varDefs = wrap("(", join(node.variableDefinitions, ", "), ")");
            const prefix = join([
                node.operation,
                join([
                    node.name,
                    varDefs
                ]),
                join(node.directives, " ")
            ], " "); // Anonymous queries with no directives or variable definitions can use
            // the query short form.
            return (prefix === "query" ? "" : prefix + " ") + node.selectionSet;
        }
    },
    VariableDefinition: {
        leave: ({ variable , type , defaultValue , directives  })=>variable + ": " + type + wrap(" = ", defaultValue) + wrap(" ", join(directives, " "))
    },
    SelectionSet: {
        leave: ({ selections  })=>block(selections)
    },
    Field: {
        leave ({ alias , name , arguments: args , directives , selectionSet  }) {
            const prefix = wrap("", alias, ": ") + name;
            let argsLine = prefix + wrap("(", join(args, ", "), ")");
            if (argsLine.length > MAX_LINE_LENGTH) argsLine = prefix + wrap("(\n", indent(join(args, "\n")), "\n)");
            return join([
                argsLine,
                join(directives, " "),
                selectionSet
            ], " ");
        }
    },
    Argument: {
        leave: ({ name , value  })=>name + ": " + value
    },
    // Fragments
    FragmentSpread: {
        leave: ({ name , directives  })=>"..." + name + wrap(" ", join(directives, " "))
    },
    InlineFragment: {
        leave: ({ typeCondition , directives , selectionSet  })=>join([
                "...",
                wrap("on ", typeCondition),
                join(directives, " "),
                selectionSet
            ], " ")
    },
    FragmentDefinition: {
        leave: ({ name , typeCondition , variableDefinitions , directives , selectionSet  })=>// or removed in the future.
            `fragment ${name}${wrap("(", join(variableDefinitions, ", "), ")")} ` + `on ${typeCondition} ${wrap("", join(directives, " "), " ")}` + selectionSet
    },
    // Value
    IntValue: {
        leave: ({ value  })=>value
    },
    FloatValue: {
        leave: ({ value  })=>value
    },
    StringValue: {
        leave: ({ value , block: isBlockString  })=>isBlockString ? (0, _blockStringMjs.printBlockString)(value) : (0, _printStringMjs.printString)(value)
    },
    BooleanValue: {
        leave: ({ value  })=>value ? "true" : "false"
    },
    NullValue: {
        leave: ()=>"null"
    },
    EnumValue: {
        leave: ({ value  })=>value
    },
    ListValue: {
        leave: ({ values  })=>"[" + join(values, ", ") + "]"
    },
    ObjectValue: {
        leave: ({ fields  })=>"{" + join(fields, ", ") + "}"
    },
    ObjectField: {
        leave: ({ name , value  })=>name + ": " + value
    },
    // Directive
    Directive: {
        leave: ({ name , arguments: args  })=>"@" + name + wrap("(", join(args, ", "), ")")
    },
    // Type
    NamedType: {
        leave: ({ name  })=>name
    },
    ListType: {
        leave: ({ type  })=>"[" + type + "]"
    },
    NonNullType: {
        leave: ({ type  })=>type + "!"
    },
    // Type System Definitions
    SchemaDefinition: {
        leave: ({ description , directives , operationTypes  })=>wrap("", description, "\n") + join([
                "schema",
                join(directives, " "),
                block(operationTypes)
            ], " ")
    },
    OperationTypeDefinition: {
        leave: ({ operation , type  })=>operation + ": " + type
    },
    ScalarTypeDefinition: {
        leave: ({ description , name , directives  })=>wrap("", description, "\n") + join([
                "scalar",
                name,
                join(directives, " ")
            ], " ")
    },
    ObjectTypeDefinition: {
        leave: ({ description , name , interfaces , directives , fields  })=>wrap("", description, "\n") + join([
                "type",
                name,
                wrap("implements ", join(interfaces, " & ")),
                join(directives, " "),
                block(fields)
            ], " ")
    },
    FieldDefinition: {
        leave: ({ description , name , arguments: args , type , directives  })=>wrap("", description, "\n") + name + (hasMultilineItems(args) ? wrap("(\n", indent(join(args, "\n")), "\n)") : wrap("(", join(args, ", "), ")")) + ": " + type + wrap(" ", join(directives, " "))
    },
    InputValueDefinition: {
        leave: ({ description , name , type , defaultValue , directives  })=>wrap("", description, "\n") + join([
                name + ": " + type,
                wrap("= ", defaultValue),
                join(directives, " ")
            ], " ")
    },
    InterfaceTypeDefinition: {
        leave: ({ description , name , interfaces , directives , fields  })=>wrap("", description, "\n") + join([
                "interface",
                name,
                wrap("implements ", join(interfaces, " & ")),
                join(directives, " "),
                block(fields)
            ], " ")
    },
    UnionTypeDefinition: {
        leave: ({ description , name , directives , types  })=>wrap("", description, "\n") + join([
                "union",
                name,
                join(directives, " "),
                wrap("= ", join(types, " | "))
            ], " ")
    },
    EnumTypeDefinition: {
        leave: ({ description , name , directives , values  })=>wrap("", description, "\n") + join([
                "enum",
                name,
                join(directives, " "),
                block(values)
            ], " ")
    },
    EnumValueDefinition: {
        leave: ({ description , name , directives  })=>wrap("", description, "\n") + join([
                name,
                join(directives, " ")
            ], " ")
    },
    InputObjectTypeDefinition: {
        leave: ({ description , name , directives , fields  })=>wrap("", description, "\n") + join([
                "input",
                name,
                join(directives, " "),
                block(fields)
            ], " ")
    },
    DirectiveDefinition: {
        leave: ({ description , name , arguments: args , repeatable , locations  })=>wrap("", description, "\n") + "directive @" + name + (hasMultilineItems(args) ? wrap("(\n", indent(join(args, "\n")), "\n)") : wrap("(", join(args, ", "), ")")) + (repeatable ? " repeatable" : "") + " on " + join(locations, " | ")
    },
    SchemaExtension: {
        leave: ({ directives , operationTypes  })=>join([
                "extend schema",
                join(directives, " "),
                block(operationTypes)
            ], " ")
    },
    ScalarTypeExtension: {
        leave: ({ name , directives  })=>join([
                "extend scalar",
                name,
                join(directives, " ")
            ], " ")
    },
    ObjectTypeExtension: {
        leave: ({ name , interfaces , directives , fields  })=>join([
                "extend type",
                name,
                wrap("implements ", join(interfaces, " & ")),
                join(directives, " "),
                block(fields)
            ], " ")
    },
    InterfaceTypeExtension: {
        leave: ({ name , interfaces , directives , fields  })=>join([
                "extend interface",
                name,
                wrap("implements ", join(interfaces, " & ")),
                join(directives, " "),
                block(fields)
            ], " ")
    },
    UnionTypeExtension: {
        leave: ({ name , directives , types  })=>join([
                "extend union",
                name,
                join(directives, " "),
                wrap("= ", join(types, " | "))
            ], " ")
    },
    EnumTypeExtension: {
        leave: ({ name , directives , values  })=>join([
                "extend enum",
                name,
                join(directives, " "),
                block(values)
            ], " ")
    },
    InputObjectTypeExtension: {
        leave: ({ name , directives , fields  })=>join([
                "extend input",
                name,
                join(directives, " "),
                block(fields)
            ], " ")
    }
};
/**
 * Given maybeArray, print an empty string if it is null or empty, otherwise
 * print all items together separated by separator if provided
 */ function join(maybeArray, separator = "") {
    var _maybeArray$filter$jo;
    return (_maybeArray$filter$jo = maybeArray === null || maybeArray === void 0 ? void 0 : maybeArray.filter((x)=>x).join(separator)) !== null && _maybeArray$filter$jo !== void 0 ? _maybeArray$filter$jo : "";
}
/**
 * Given array, print each item on its own line, wrapped in an indented `{ }` block.
 */ function block(array) {
    return wrap("{\n", indent(join(array, "\n")), "\n}");
}
/**
 * If maybeString is not null or empty, then wrap with start and end, otherwise print an empty string.
 */ function wrap(start, maybeString, end = "") {
    return maybeString != null && maybeString !== "" ? start + maybeString + end : "";
}
function indent(str) {
    return wrap("  ", str.replace(/\n/g, "\n  "));
}
function hasMultilineItems(maybeArray) {
    var _maybeArray$some;
    // FIXME: https://github.com/graphql/graphql-js/issues/2203
    /* c8 ignore next */ return (_maybeArray$some = maybeArray === null || maybeArray === void 0 ? void 0 : maybeArray.some((str)=>str.includes("\n"))) !== null && _maybeArray$some !== void 0 ? _maybeArray$some : false;
}

},{"./blockString.mjs":"hVqvS","./printString.mjs":"c9hcM","./visitor.mjs":"dn6QO","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"c9hcM":[function(require,module,exports) {
/**
 * Prints a string as a GraphQL StringValue literal. Replaces control characters
 * and excluded characters (" U+0022 and \\ U+005C) with escape sequences.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "printString", ()=>printString) // eslint-disable-next-line no-control-regex
;
function printString(str) {
    return `"${str.replace(escapedRegExp, escapedReplacer)}"`;
}
const escapedRegExp = /[\x00-\x1f\x22\x5c\x7f-\x9f]/g;
function escapedReplacer(str) {
    return escapeSequences[str.charCodeAt(0)];
} // prettier-ignore
const escapeSequences = [
    "\\u0000",
    "\\u0001",
    "\\u0002",
    "\\u0003",
    "\\u0004",
    "\\u0005",
    "\\u0006",
    "\\u0007",
    "\\b",
    "\\t",
    "\\n",
    "\\u000B",
    "\\f",
    "\\r",
    "\\u000E",
    "\\u000F",
    "\\u0010",
    "\\u0011",
    "\\u0012",
    "\\u0013",
    "\\u0014",
    "\\u0015",
    "\\u0016",
    "\\u0017",
    "\\u0018",
    "\\u0019",
    "\\u001A",
    "\\u001B",
    "\\u001C",
    "\\u001D",
    "\\u001E",
    "\\u001F",
    "",
    "",
    '\\"',
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "\\\\",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "\\u007F",
    "\\u0080",
    "\\u0081",
    "\\u0082",
    "\\u0083",
    "\\u0084",
    "\\u0085",
    "\\u0086",
    "\\u0087",
    "\\u0088",
    "\\u0089",
    "\\u008A",
    "\\u008B",
    "\\u008C",
    "\\u008D",
    "\\u008E",
    "\\u008F",
    "\\u0090",
    "\\u0091",
    "\\u0092",
    "\\u0093",
    "\\u0094",
    "\\u0095",
    "\\u0096",
    "\\u0097",
    "\\u0098",
    "\\u0099",
    "\\u009A",
    "\\u009B",
    "\\u009C",
    "\\u009D",
    "\\u009E",
    "\\u009F"
];

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dn6QO":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "BREAK", ()=>BREAK);
/**
 * visit() will walk through an AST using a depth-first traversal, calling
 * the visitor's enter function at each node in the traversal, and calling the
 * leave function after visiting that node and all of its child nodes.
 *
 * By returning different values from the enter and leave functions, the
 * behavior of the visitor can be altered, including skipping over a sub-tree of
 * the AST (by returning false), editing the AST by returning a value or null
 * to remove the value, or to stop the whole traversal by returning BREAK.
 *
 * When using visit() to edit an AST, the original AST will not be modified, and
 * a new version of the AST with the changes applied will be returned from the
 * visit function.
 *
 * ```ts
 * const editedAST = visit(ast, {
 *   enter(node, key, parent, path, ancestors) {
 *     // @return
 *     //   undefined: no action
 *     //   false: skip visiting this node
 *     //   visitor.BREAK: stop visiting altogether
 *     //   null: delete this node
 *     //   any value: replace this node with the returned value
 *   },
 *   leave(node, key, parent, path, ancestors) {
 *     // @return
 *     //   undefined: no action
 *     //   false: no action
 *     //   visitor.BREAK: stop visiting altogether
 *     //   null: delete this node
 *     //   any value: replace this node with the returned value
 *   }
 * });
 * ```
 *
 * Alternatively to providing enter() and leave() functions, a visitor can
 * instead provide functions named the same as the kinds of AST nodes, or
 * enter/leave visitors at a named key, leading to three permutations of the
 * visitor API:
 *
 * 1) Named visitors triggered when entering a node of a specific kind.
 *
 * ```ts
 * visit(ast, {
 *   Kind(node) {
 *     // enter the "Kind" node
 *   }
 * })
 * ```
 *
 * 2) Named visitors that trigger upon entering and leaving a node of a specific kind.
 *
 * ```ts
 * visit(ast, {
 *   Kind: {
 *     enter(node) {
 *       // enter the "Kind" node
 *     }
 *     leave(node) {
 *       // leave the "Kind" node
 *     }
 *   }
 * })
 * ```
 *
 * 3) Generic visitors that trigger upon entering and leaving any node.
 *
 * ```ts
 * visit(ast, {
 *   enter(node) {
 *     // enter any node
 *   },
 *   leave(node) {
 *     // leave any node
 *   }
 * })
 * ```
 */ parcelHelpers.export(exports, "visit", ()=>visit);
/**
 * Creates a new visitor instance which delegates to many visitors to run in
 * parallel. Each visitor will be visited for each node before moving on.
 *
 * If a prior visitor edits a node, no following visitors will see that node.
 */ parcelHelpers.export(exports, "visitInParallel", ()=>visitInParallel);
/**
 * Given a visitor instance and a node kind, return EnterLeaveVisitor for that kind.
 */ parcelHelpers.export(exports, "getEnterLeaveForKind", ()=>getEnterLeaveForKind);
/**
 * Given a visitor instance, if it is leaving or not, and a node kind, return
 * the function the visitor runtime should call.
 *
 * @deprecated Please use `getEnterLeaveForKind` instead. Will be removed in v17
 */ /* c8 ignore next 8 */ parcelHelpers.export(exports, "getVisitFn", ()=>getVisitFn);
var _devAssertMjs = require("../jsutils/devAssert.mjs");
var _inspectMjs = require("../jsutils/inspect.mjs");
var _astMjs = require("./ast.mjs");
var _kindsMjs = require("./kinds.mjs");
const BREAK = Object.freeze({});
function visit(root, visitor, visitorKeys = (0, _astMjs.QueryDocumentKeys)) {
    const enterLeaveMap = new Map();
    for (const kind of Object.values((0, _kindsMjs.Kind)))enterLeaveMap.set(kind, getEnterLeaveForKind(visitor, kind));
    /* eslint-disable no-undef-init */ let stack = undefined;
    let inArray = Array.isArray(root);
    let keys = [
        root
    ];
    let index = -1;
    let edits = [];
    let node = root;
    let key = undefined;
    let parent = undefined;
    const path = [];
    const ancestors = [];
    /* eslint-enable no-undef-init */ do {
        index++;
        const isLeaving = index === keys.length;
        const isEdited = isLeaving && edits.length !== 0;
        if (isLeaving) {
            key = ancestors.length === 0 ? undefined : path[path.length - 1];
            node = parent;
            parent = ancestors.pop();
            if (isEdited) {
                if (inArray) {
                    node = node.slice();
                    let editOffset = 0;
                    for (const [editKey, editValue] of edits){
                        const arrayKey = editKey - editOffset;
                        if (editValue === null) {
                            node.splice(arrayKey, 1);
                            editOffset++;
                        } else node[arrayKey] = editValue;
                    }
                } else {
                    node = Object.defineProperties({}, Object.getOwnPropertyDescriptors(node));
                    for (const [editKey, editValue] of edits)node[editKey] = editValue;
                }
            }
            index = stack.index;
            keys = stack.keys;
            edits = stack.edits;
            inArray = stack.inArray;
            stack = stack.prev;
        } else if (parent) {
            key = inArray ? index : keys[index];
            node = parent[key];
            if (node === null || node === undefined) continue;
            path.push(key);
        }
        let result;
        if (!Array.isArray(node)) {
            var _enterLeaveMap$get, _enterLeaveMap$get2;
            (0, _astMjs.isNode)(node) || (0, _devAssertMjs.devAssert)(false, `Invalid AST Node: ${(0, _inspectMjs.inspect)(node)}.`);
            const visitFn = isLeaving ? (_enterLeaveMap$get = enterLeaveMap.get(node.kind)) === null || _enterLeaveMap$get === void 0 ? void 0 : _enterLeaveMap$get.leave : (_enterLeaveMap$get2 = enterLeaveMap.get(node.kind)) === null || _enterLeaveMap$get2 === void 0 ? void 0 : _enterLeaveMap$get2.enter;
            result = visitFn === null || visitFn === void 0 ? void 0 : visitFn.call(visitor, node, key, parent, path, ancestors);
            if (result === BREAK) break;
            if (result === false) {
                if (!isLeaving) {
                    path.pop();
                    continue;
                }
            } else if (result !== undefined) {
                edits.push([
                    key,
                    result
                ]);
                if (!isLeaving) {
                    if ((0, _astMjs.isNode)(result)) node = result;
                    else {
                        path.pop();
                        continue;
                    }
                }
            }
        }
        if (result === undefined && isEdited) edits.push([
            key,
            node
        ]);
        if (isLeaving) path.pop();
        else {
            var _node$kind;
            stack = {
                inArray,
                index,
                keys,
                edits,
                prev: stack
            };
            inArray = Array.isArray(node);
            keys = inArray ? node : (_node$kind = visitorKeys[node.kind]) !== null && _node$kind !== void 0 ? _node$kind : [];
            index = -1;
            edits = [];
            if (parent) ancestors.push(parent);
            parent = node;
        }
    }while (stack !== undefined);
    if (edits.length !== 0) // New root
    return edits[edits.length - 1][1];
    return root;
}
function visitInParallel(visitors) {
    const skipping = new Array(visitors.length).fill(null);
    const mergedVisitor = Object.create(null);
    for (const kind of Object.values((0, _kindsMjs.Kind))){
        let hasVisitor = false;
        const enterList = new Array(visitors.length).fill(undefined);
        const leaveList = new Array(visitors.length).fill(undefined);
        for(let i = 0; i < visitors.length; ++i){
            const { enter , leave  } = getEnterLeaveForKind(visitors[i], kind);
            hasVisitor || (hasVisitor = enter != null || leave != null);
            enterList[i] = enter;
            leaveList[i] = leave;
        }
        if (!hasVisitor) continue;
        const mergedEnterLeave = {
            enter (...args) {
                const node = args[0];
                for(let i = 0; i < visitors.length; i++)if (skipping[i] === null) {
                    var _enterList$i;
                    const result = (_enterList$i = enterList[i]) === null || _enterList$i === void 0 ? void 0 : _enterList$i.apply(visitors[i], args);
                    if (result === false) skipping[i] = node;
                    else if (result === BREAK) skipping[i] = BREAK;
                    else if (result !== undefined) return result;
                }
            },
            leave (...args) {
                const node = args[0];
                for(let i = 0; i < visitors.length; i++){
                    if (skipping[i] === null) {
                        var _leaveList$i;
                        const result = (_leaveList$i = leaveList[i]) === null || _leaveList$i === void 0 ? void 0 : _leaveList$i.apply(visitors[i], args);
                        if (result === BREAK) skipping[i] = BREAK;
                        else if (result !== undefined && result !== false) return result;
                    } else if (skipping[i] === node) skipping[i] = null;
                }
            }
        };
        mergedVisitor[kind] = mergedEnterLeave;
    }
    return mergedVisitor;
}
function getEnterLeaveForKind(visitor, kind) {
    const kindVisitor = visitor[kind];
    if (typeof kindVisitor === "object") // { Kind: { enter() {}, leave() {} } }
    return kindVisitor;
    else if (typeof kindVisitor === "function") // { Kind() {} }
    return {
        enter: kindVisitor,
        leave: undefined
    };
     // { enter() {}, leave() {} }
    return {
        enter: visitor.enter,
        leave: visitor.leave
    };
}
function getVisitFn(visitor, kind, isLeaving) {
    const { enter , leave  } = getEnterLeaveForKind(visitor, kind);
    return isLeaving ? leave : enter;
}

},{"../jsutils/devAssert.mjs":"7HVcG","../jsutils/inspect.mjs":"eTiKK","./ast.mjs":"iaolY","./kinds.mjs":"6adj0","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hiHiR":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isDefinitionNode", ()=>isDefinitionNode);
parcelHelpers.export(exports, "isExecutableDefinitionNode", ()=>isExecutableDefinitionNode);
parcelHelpers.export(exports, "isSelectionNode", ()=>isSelectionNode);
parcelHelpers.export(exports, "isValueNode", ()=>isValueNode);
parcelHelpers.export(exports, "isConstValueNode", ()=>isConstValueNode);
parcelHelpers.export(exports, "isTypeNode", ()=>isTypeNode);
parcelHelpers.export(exports, "isTypeSystemDefinitionNode", ()=>isTypeSystemDefinitionNode);
parcelHelpers.export(exports, "isTypeDefinitionNode", ()=>isTypeDefinitionNode);
parcelHelpers.export(exports, "isTypeSystemExtensionNode", ()=>isTypeSystemExtensionNode);
parcelHelpers.export(exports, "isTypeExtensionNode", ()=>isTypeExtensionNode);
var _kindsMjs = require("./kinds.mjs");
function isDefinitionNode(node) {
    return isExecutableDefinitionNode(node) || isTypeSystemDefinitionNode(node) || isTypeSystemExtensionNode(node);
}
function isExecutableDefinitionNode(node) {
    return node.kind === (0, _kindsMjs.Kind).OPERATION_DEFINITION || node.kind === (0, _kindsMjs.Kind).FRAGMENT_DEFINITION;
}
function isSelectionNode(node) {
    return node.kind === (0, _kindsMjs.Kind).FIELD || node.kind === (0, _kindsMjs.Kind).FRAGMENT_SPREAD || node.kind === (0, _kindsMjs.Kind).INLINE_FRAGMENT;
}
function isValueNode(node) {
    return node.kind === (0, _kindsMjs.Kind).VARIABLE || node.kind === (0, _kindsMjs.Kind).INT || node.kind === (0, _kindsMjs.Kind).FLOAT || node.kind === (0, _kindsMjs.Kind).STRING || node.kind === (0, _kindsMjs.Kind).BOOLEAN || node.kind === (0, _kindsMjs.Kind).NULL || node.kind === (0, _kindsMjs.Kind).ENUM || node.kind === (0, _kindsMjs.Kind).LIST || node.kind === (0, _kindsMjs.Kind).OBJECT;
}
function isConstValueNode(node) {
    return isValueNode(node) && (node.kind === (0, _kindsMjs.Kind).LIST ? node.values.some(isConstValueNode) : node.kind === (0, _kindsMjs.Kind).OBJECT ? node.fields.some((field)=>isConstValueNode(field.value)) : node.kind !== (0, _kindsMjs.Kind).VARIABLE);
}
function isTypeNode(node) {
    return node.kind === (0, _kindsMjs.Kind).NAMED_TYPE || node.kind === (0, _kindsMjs.Kind).LIST_TYPE || node.kind === (0, _kindsMjs.Kind).NON_NULL_TYPE;
}
function isTypeSystemDefinitionNode(node) {
    return node.kind === (0, _kindsMjs.Kind).SCHEMA_DEFINITION || isTypeDefinitionNode(node) || node.kind === (0, _kindsMjs.Kind).DIRECTIVE_DEFINITION;
}
function isTypeDefinitionNode(node) {
    return node.kind === (0, _kindsMjs.Kind).SCALAR_TYPE_DEFINITION || node.kind === (0, _kindsMjs.Kind).OBJECT_TYPE_DEFINITION || node.kind === (0, _kindsMjs.Kind).INTERFACE_TYPE_DEFINITION || node.kind === (0, _kindsMjs.Kind).UNION_TYPE_DEFINITION || node.kind === (0, _kindsMjs.Kind).ENUM_TYPE_DEFINITION || node.kind === (0, _kindsMjs.Kind).INPUT_OBJECT_TYPE_DEFINITION;
}
function isTypeSystemExtensionNode(node) {
    return node.kind === (0, _kindsMjs.Kind).SCHEMA_EXTENSION || isTypeExtensionNode(node);
}
function isTypeExtensionNode(node) {
    return node.kind === (0, _kindsMjs.Kind).SCALAR_TYPE_EXTENSION || node.kind === (0, _kindsMjs.Kind).OBJECT_TYPE_EXTENSION || node.kind === (0, _kindsMjs.Kind).INTERFACE_TYPE_EXTENSION || node.kind === (0, _kindsMjs.Kind).UNION_TYPE_EXTENSION || node.kind === (0, _kindsMjs.Kind).ENUM_TYPE_EXTENSION || node.kind === (0, _kindsMjs.Kind).INPUT_OBJECT_TYPE_EXTENSION;
}

},{"./kinds.mjs":"6adj0","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"74jlq":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ClientError", ()=>ClientError);
class ClientError extends Error {
    constructor(response, request){
        const message = `${ClientError.extractMessage(response)}: ${JSON.stringify({
            response,
            request
        })}`;
        super(message);
        Object.setPrototypeOf(this, ClientError.prototype);
        this.response = response;
        this.request = request;
        // this is needed as Safari doesn't support .captureStackTrace
        if (typeof Error.captureStackTrace === `function`) Error.captureStackTrace(this, ClientError);
    }
    static extractMessage(response) {
        return response.errors?.[0]?.message ?? `GraphQL Error (Code: ${response.status})`;
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"j4ah4":[function(require,module,exports) {
var global = typeof self !== "undefined" ? self : this;
var __self__ = function() {
    function F() {
        this.fetch = false;
        this.DOMException = global.DOMException;
    }
    F.prototype = global;
    return new F();
}();
(function(self1) {
    var irrelevant = function(exports1) {
        var support = {
            searchParams: "URLSearchParams" in self1,
            iterable: "Symbol" in self1 && "iterator" in Symbol,
            blob: "FileReader" in self1 && "Blob" in self1 && function() {
                try {
                    new Blob();
                    return true;
                } catch (e) {
                    return false;
                }
            }(),
            formData: "FormData" in self1,
            arrayBuffer: "ArrayBuffer" in self1
        };
        function isDataView(obj) {
            return obj && DataView.prototype.isPrototypeOf(obj);
        }
        if (support.arrayBuffer) {
            var viewClasses = [
                "[object Int8Array]",
                "[object Uint8Array]",
                "[object Uint8ClampedArray]",
                "[object Int16Array]",
                "[object Uint16Array]",
                "[object Int32Array]",
                "[object Uint32Array]",
                "[object Float32Array]",
                "[object Float64Array]"
            ];
            var isArrayBufferView = ArrayBuffer.isView || function(obj) {
                return obj && viewClasses.indexOf(Object.prototype.toString.call(obj)) > -1;
            };
        }
        function normalizeName(name) {
            if (typeof name !== "string") name = String(name);
            if (/[^a-z0-9\-#$%&'*+.^_`|~]/i.test(name)) throw new TypeError("Invalid character in header field name");
            return name.toLowerCase();
        }
        function normalizeValue(value) {
            if (typeof value !== "string") value = String(value);
            return value;
        }
        // Build a destructive iterator for the value list
        function iteratorFor(items) {
            var iterator = {
                next: function() {
                    var value = items.shift();
                    return {
                        done: value === undefined,
                        value: value
                    };
                }
            };
            if (support.iterable) iterator[Symbol.iterator] = function() {
                return iterator;
            };
            return iterator;
        }
        function Headers(headers) {
            this.map = {};
            if (headers instanceof Headers) headers.forEach(function(value, name) {
                this.append(name, value);
            }, this);
            else if (Array.isArray(headers)) headers.forEach(function(header) {
                this.append(header[0], header[1]);
            }, this);
            else if (headers) Object.getOwnPropertyNames(headers).forEach(function(name) {
                this.append(name, headers[name]);
            }, this);
        }
        Headers.prototype.append = function(name, value) {
            name = normalizeName(name);
            value = normalizeValue(value);
            var oldValue = this.map[name];
            this.map[name] = oldValue ? oldValue + ", " + value : value;
        };
        Headers.prototype["delete"] = function(name) {
            delete this.map[normalizeName(name)];
        };
        Headers.prototype.get = function(name) {
            name = normalizeName(name);
            return this.has(name) ? this.map[name] : null;
        };
        Headers.prototype.has = function(name) {
            return this.map.hasOwnProperty(normalizeName(name));
        };
        Headers.prototype.set = function(name, value) {
            this.map[normalizeName(name)] = normalizeValue(value);
        };
        Headers.prototype.forEach = function(callback, thisArg) {
            for(var name in this.map)if (this.map.hasOwnProperty(name)) callback.call(thisArg, this.map[name], name, this);
        };
        Headers.prototype.keys = function() {
            var items = [];
            this.forEach(function(value, name) {
                items.push(name);
            });
            return iteratorFor(items);
        };
        Headers.prototype.values = function() {
            var items = [];
            this.forEach(function(value) {
                items.push(value);
            });
            return iteratorFor(items);
        };
        Headers.prototype.entries = function() {
            var items = [];
            this.forEach(function(value, name) {
                items.push([
                    name,
                    value
                ]);
            });
            return iteratorFor(items);
        };
        if (support.iterable) Headers.prototype[Symbol.iterator] = Headers.prototype.entries;
        function consumed(body) {
            if (body.bodyUsed) return Promise.reject(new TypeError("Already read"));
            body.bodyUsed = true;
        }
        function fileReaderReady(reader) {
            return new Promise(function(resolve, reject) {
                reader.onload = function() {
                    resolve(reader.result);
                };
                reader.onerror = function() {
                    reject(reader.error);
                };
            });
        }
        function readBlobAsArrayBuffer(blob) {
            var reader = new FileReader();
            var promise = fileReaderReady(reader);
            reader.readAsArrayBuffer(blob);
            return promise;
        }
        function readBlobAsText(blob) {
            var reader = new FileReader();
            var promise = fileReaderReady(reader);
            reader.readAsText(blob);
            return promise;
        }
        function readArrayBufferAsText(buf) {
            var view = new Uint8Array(buf);
            var chars = new Array(view.length);
            for(var i = 0; i < view.length; i++)chars[i] = String.fromCharCode(view[i]);
            return chars.join("");
        }
        function bufferClone(buf) {
            if (buf.slice) return buf.slice(0);
            else {
                var view = new Uint8Array(buf.byteLength);
                view.set(new Uint8Array(buf));
                return view.buffer;
            }
        }
        function Body() {
            this.bodyUsed = false;
            this._initBody = function(body) {
                this._bodyInit = body;
                if (!body) this._bodyText = "";
                else if (typeof body === "string") this._bodyText = body;
                else if (support.blob && Blob.prototype.isPrototypeOf(body)) this._bodyBlob = body;
                else if (support.formData && FormData.prototype.isPrototypeOf(body)) this._bodyFormData = body;
                else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) this._bodyText = body.toString();
                else if (support.arrayBuffer && support.blob && isDataView(body)) {
                    this._bodyArrayBuffer = bufferClone(body.buffer);
                    // IE 10-11 can't handle a DataView body.
                    this._bodyInit = new Blob([
                        this._bodyArrayBuffer
                    ]);
                } else if (support.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(body) || isArrayBufferView(body))) this._bodyArrayBuffer = bufferClone(body);
                else this._bodyText = body = Object.prototype.toString.call(body);
                if (!this.headers.get("content-type")) {
                    if (typeof body === "string") this.headers.set("content-type", "text/plain;charset=UTF-8");
                    else if (this._bodyBlob && this._bodyBlob.type) this.headers.set("content-type", this._bodyBlob.type);
                    else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8");
                }
            };
            if (support.blob) {
                this.blob = function() {
                    var rejected = consumed(this);
                    if (rejected) return rejected;
                    if (this._bodyBlob) return Promise.resolve(this._bodyBlob);
                    else if (this._bodyArrayBuffer) return Promise.resolve(new Blob([
                        this._bodyArrayBuffer
                    ]));
                    else if (this._bodyFormData) throw new Error("could not read FormData body as blob");
                    else return Promise.resolve(new Blob([
                        this._bodyText
                    ]));
                };
                this.arrayBuffer = function() {
                    if (this._bodyArrayBuffer) return consumed(this) || Promise.resolve(this._bodyArrayBuffer);
                    else return this.blob().then(readBlobAsArrayBuffer);
                };
            }
            this.text = function() {
                var rejected = consumed(this);
                if (rejected) return rejected;
                if (this._bodyBlob) return readBlobAsText(this._bodyBlob);
                else if (this._bodyArrayBuffer) return Promise.resolve(readArrayBufferAsText(this._bodyArrayBuffer));
                else if (this._bodyFormData) throw new Error("could not read FormData body as text");
                else return Promise.resolve(this._bodyText);
            };
            if (support.formData) this.formData = function() {
                return this.text().then(decode);
            };
            this.json = function() {
                return this.text().then(JSON.parse);
            };
            return this;
        }
        // HTTP methods whose capitalization should be normalized
        var methods = [
            "DELETE",
            "GET",
            "HEAD",
            "OPTIONS",
            "POST",
            "PUT"
        ];
        function normalizeMethod(method) {
            var upcased = method.toUpperCase();
            return methods.indexOf(upcased) > -1 ? upcased : method;
        }
        function Request(input, options) {
            options = options || {};
            var body = options.body;
            if (input instanceof Request) {
                if (input.bodyUsed) throw new TypeError("Already read");
                this.url = input.url;
                this.credentials = input.credentials;
                if (!options.headers) this.headers = new Headers(input.headers);
                this.method = input.method;
                this.mode = input.mode;
                this.signal = input.signal;
                if (!body && input._bodyInit != null) {
                    body = input._bodyInit;
                    input.bodyUsed = true;
                }
            } else this.url = String(input);
            this.credentials = options.credentials || this.credentials || "same-origin";
            if (options.headers || !this.headers) this.headers = new Headers(options.headers);
            this.method = normalizeMethod(options.method || this.method || "GET");
            this.mode = options.mode || this.mode || null;
            this.signal = options.signal || this.signal;
            this.referrer = null;
            if ((this.method === "GET" || this.method === "HEAD") && body) throw new TypeError("Body not allowed for GET or HEAD requests");
            this._initBody(body);
        }
        Request.prototype.clone = function() {
            return new Request(this, {
                body: this._bodyInit
            });
        };
        function decode(body) {
            var form = new FormData();
            body.trim().split("&").forEach(function(bytes) {
                if (bytes) {
                    var split = bytes.split("=");
                    var name = split.shift().replace(/\+/g, " ");
                    var value = split.join("=").replace(/\+/g, " ");
                    form.append(decodeURIComponent(name), decodeURIComponent(value));
                }
            });
            return form;
        }
        function parseHeaders(rawHeaders) {
            var headers = new Headers();
            // Replace instances of \r\n and \n followed by at least one space or horizontal tab with a space
            // https://tools.ietf.org/html/rfc7230#section-3.2
            var preProcessedHeaders = rawHeaders.replace(/\r?\n[\t ]+/g, " ");
            preProcessedHeaders.split(/\r?\n/).forEach(function(line) {
                var parts = line.split(":");
                var key = parts.shift().trim();
                if (key) {
                    var value = parts.join(":").trim();
                    headers.append(key, value);
                }
            });
            return headers;
        }
        Body.call(Request.prototype);
        function Response(bodyInit, options) {
            if (!options) options = {};
            this.type = "default";
            this.status = options.status === undefined ? 200 : options.status;
            this.ok = this.status >= 200 && this.status < 300;
            this.statusText = "statusText" in options ? options.statusText : "OK";
            this.headers = new Headers(options.headers);
            this.url = options.url || "";
            this._initBody(bodyInit);
        }
        Body.call(Response.prototype);
        Response.prototype.clone = function() {
            return new Response(this._bodyInit, {
                status: this.status,
                statusText: this.statusText,
                headers: new Headers(this.headers),
                url: this.url
            });
        };
        Response.error = function() {
            var response = new Response(null, {
                status: 0,
                statusText: ""
            });
            response.type = "error";
            return response;
        };
        var redirectStatuses = [
            301,
            302,
            303,
            307,
            308
        ];
        Response.redirect = function(url, status) {
            if (redirectStatuses.indexOf(status) === -1) throw new RangeError("Invalid status code");
            return new Response(null, {
                status: status,
                headers: {
                    location: url
                }
            });
        };
        exports1.DOMException = self1.DOMException;
        try {
            new exports1.DOMException();
        } catch (err) {
            exports1.DOMException = function(message, name) {
                this.message = message;
                this.name = name;
                var error = Error(message);
                this.stack = error.stack;
            };
            exports1.DOMException.prototype = Object.create(Error.prototype);
            exports1.DOMException.prototype.constructor = exports1.DOMException;
        }
        function fetch(input, init) {
            return new Promise(function(resolve, reject) {
                var request = new Request(input, init);
                if (request.signal && request.signal.aborted) return reject(new exports1.DOMException("Aborted", "AbortError"));
                var xhr = new XMLHttpRequest();
                function abortXhr() {
                    xhr.abort();
                }
                xhr.onload = function() {
                    var options = {
                        status: xhr.status,
                        statusText: xhr.statusText,
                        headers: parseHeaders(xhr.getAllResponseHeaders() || "")
                    };
                    options.url = "responseURL" in xhr ? xhr.responseURL : options.headers.get("X-Request-URL");
                    var body = "response" in xhr ? xhr.response : xhr.responseText;
                    resolve(new Response(body, options));
                };
                xhr.onerror = function() {
                    reject(new TypeError("Network request failed"));
                };
                xhr.ontimeout = function() {
                    reject(new TypeError("Network request failed"));
                };
                xhr.onabort = function() {
                    reject(new exports1.DOMException("Aborted", "AbortError"));
                };
                xhr.open(request.method, request.url, true);
                if (request.credentials === "include") xhr.withCredentials = true;
                else if (request.credentials === "omit") xhr.withCredentials = false;
                if ("responseType" in xhr && support.blob) xhr.responseType = "blob";
                request.headers.forEach(function(value, name) {
                    xhr.setRequestHeader(name, value);
                });
                if (request.signal) {
                    request.signal.addEventListener("abort", abortXhr);
                    xhr.onreadystatechange = function() {
                        // DONE (success or failure)
                        if (xhr.readyState === 4) request.signal.removeEventListener("abort", abortXhr);
                    };
                }
                xhr.send(typeof request._bodyInit === "undefined" ? null : request._bodyInit);
            });
        }
        fetch.polyfill = true;
        if (!self1.fetch) {
            self1.fetch = fetch;
            self1.Headers = Headers;
            self1.Request = Request;
            self1.Response = Response;
        }
        exports1.Headers = Headers;
        exports1.Request = Request;
        exports1.Response = Response;
        exports1.fetch = fetch;
        Object.defineProperty(exports1, "__esModule", {
            value: true
        });
        return exports1;
    }({});
})(__self__);
__self__.fetch.ponyfill = true;
// Remove "polyfill" property added by whatwg-fetch
delete __self__.fetch.polyfill;
// Choose between native implementation (global) or custom implementation (__self__)
// var ctx = global.fetch ? global : __self__;
var ctx = __self__; // this line disable service worker support temporarily
exports = ctx.fetch // To enable: import fetch from 'cross-fetch'
;
exports.default = ctx.fetch // For TypeScript consumers without esModuleInterop.
;
exports.fetch = ctx.fetch // To enable: import {fetch} from 'cross-fetch'
;
exports.Headers = ctx.Headers;
exports.Request = ctx.Request;
exports.Response = ctx.Response;
module.exports = exports;

},{}],"duqQG":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "GraphQLWebSocketClient", ()=>GraphQLWebSocketClient);
var _resolveRequestDocumentJs = require("./resolveRequestDocument.js");
var _typesJs = require("./types.js");
// import type WebSocket from 'ws'
const CONNECTION_INIT = `connection_init`;
const CONNECTION_ACK = `connection_ack`;
const PING = `ping`;
const PONG = `pong`;
const SUBSCRIBE = `subscribe`;
const NEXT = `next`;
const ERROR = `error`;
const COMPLETE = `complete`;
class GraphQLWebSocketMessage {
    get type() {
        return this._type;
    }
    get id() {
        return this._id;
    }
    get payload() {
        return this._payload;
    }
    constructor(type, payload, id){
        this._type = type;
        this._payload = payload;
        this._id = id;
    }
    get text() {
        const result = {
            type: this.type
        };
        if (this.id != null && this.id != undefined) result.id = this.id;
        if (this.payload != null && this.payload != undefined) result.payload = this.payload;
        return JSON.stringify(result);
    }
    static parse(data, f) {
        const { type , payload , id  } = JSON.parse(data);
        return new GraphQLWebSocketMessage(type, f(payload), id);
    }
}
class GraphQLWebSocketClient {
    constructor(socket, { onInit , onAcknowledged , onPing , onPong  }){
        this.socketState = {
            acknowledged: false,
            lastRequestId: 0,
            subscriptions: {}
        };
        this.socket = socket;
        socket.onopen = async (e)=>{
            this.socketState.acknowledged = false;
            this.socketState.subscriptions = {};
            socket.send(ConnectionInit(onInit ? await onInit() : null).text);
        };
        socket.onclose = (e)=>{
            this.socketState.acknowledged = false;
            this.socketState.subscriptions = {};
        };
        socket.onerror = (e)=>{
            console.error(e);
        };
        socket.onmessage = (e)=>{
            try {
                const message = parseMessage(e.data);
                switch(message.type){
                    case CONNECTION_ACK:
                        if (this.socketState.acknowledged) console.warn(`Duplicate CONNECTION_ACK message ignored`);
                        else {
                            this.socketState.acknowledged = true;
                            if (onAcknowledged) onAcknowledged(message.payload);
                        }
                        return;
                    case PING:
                        if (onPing) onPing(message.payload).then((r)=>socket.send(Pong(r).text));
                        else socket.send(Pong(null).text);
                        return;
                    case PONG:
                        if (onPong) onPong(message.payload);
                        return;
                }
                if (!this.socketState.acknowledged) // Web-socket connection not acknowledged
                return;
                if (message.id === undefined || message.id === null || !this.socketState.subscriptions[message.id]) // No subscription identifer or subscription indentifier is not found
                return;
                const { query , variables , subscriber  } = this.socketState.subscriptions[message.id];
                switch(message.type){
                    case NEXT:
                        if (!message.payload.errors && message.payload.data) subscriber.next && subscriber.next(message.payload.data);
                        if (message.payload.errors) subscriber.error && subscriber.error(new (0, _typesJs.ClientError)({
                            ...message.payload,
                            status: 200
                        }, {
                            query,
                            variables
                        }));
                        return;
                    case ERROR:
                        subscriber.error && subscriber.error(new (0, _typesJs.ClientError)({
                            errors: message.payload,
                            status: 200
                        }, {
                            query,
                            variables
                        }));
                        return;
                    case COMPLETE:
                        subscriber.complete && subscriber.complete();
                        delete this.socketState.subscriptions[message.id];
                        return;
                }
            } catch (e) {
                // Unexpected errors while handling graphql-ws message
                console.error(e);
                socket.close(1006);
            }
            socket.close(4400, `Unknown graphql-ws message.`);
        };
    }
    makeSubscribe(query, operationName, subscriber, variables) {
        const subscriptionId = (this.socketState.lastRequestId++).toString();
        this.socketState.subscriptions[subscriptionId] = {
            query,
            variables,
            subscriber
        };
        this.socket.send(Subscribe(subscriptionId, {
            query,
            operationName,
            variables
        }).text);
        return ()=>{
            this.socket.send(Complete(subscriptionId).text);
            delete this.socketState.subscriptions[subscriptionId];
        };
    }
    rawRequest(query, variables) {
        return new Promise((resolve, reject)=>{
            let result;
            this.rawSubscribe(query, {
                next: (data, extensions)=>result = {
                        data,
                        extensions
                    },
                error: reject,
                complete: ()=>resolve(result)
            }, variables);
        });
    }
    request(document, variables) {
        return new Promise((resolve, reject)=>{
            let result;
            this.subscribe(document, {
                next: (data)=>result = data,
                error: reject,
                complete: ()=>resolve(result)
            }, variables);
        });
    }
    subscribe(document, subscriber, variables) {
        const { query , operationName  } = (0, _resolveRequestDocumentJs.resolveRequestDocument)(document);
        return this.makeSubscribe(query, operationName, subscriber, variables);
    }
    rawSubscribe(query, subscriber, variables) {
        return this.makeSubscribe(query, undefined, subscriber, variables);
    }
    ping(payload) {
        this.socket.send(Ping(payload).text);
    }
    close() {
        this.socket.close(1000);
    }
}
GraphQLWebSocketClient.PROTOCOL = `graphql-transport-ws`;
// Helper functions
function parseMessage(data, f = (a)=>a) {
    const m = GraphQLWebSocketMessage.parse(data, f);
    return m;
}
function ConnectionInit(payload) {
    return new GraphQLWebSocketMessage(CONNECTION_INIT, payload);
}
function Ping(payload) {
    return new GraphQLWebSocketMessage(PING, payload, undefined);
}
function Pong(payload) {
    return new GraphQLWebSocketMessage(PONG, payload, undefined);
}
function Subscribe(id, payload) {
    return new GraphQLWebSocketMessage(SUBSCRIBE, payload, id);
}
function Complete(id) {
    return new GraphQLWebSocketMessage(COMPLETE, undefined, id);
}

},{"./resolveRequestDocument.js":"2vwbW","./types.js":"74jlq","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["jC2qd","8lqZg"], "8lqZg", "parcelRequire8526")

//# sourceMappingURL=index.975ef6c8.js.map
