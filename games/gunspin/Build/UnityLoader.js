height: screen.height ? screen.height : 0, browser: a, browserVersion: s, mobile: l, os: u, osVersion: p, gpu: function() {
    var e = document.createElement("canvas"),
        t = e.getContext("experimental-webgl");
    if (t) {
        var r = t.getExtension("WEBGL_debug_renderer_info");
        if (r) return t.getParameter(r.UNMASKED_RENDERER_WEBGL)
    }
    return n
}(), language: window.navigator.userLanguage || window.navigator.language, hasWebGL: function() {
    if (!window.WebGLRenderingContext) return 0;
    var e = document.createElement("canvas"),
        t = e.getContext("webgl2");
    return t ? 2 : (t = e.getContext("experimental-webgl2"), t ? 2 : (t = e.getContext("webgl"), t || (t = e.getContext("experimental-webgl")) ? 1 : 0))
}(), hasCursorLock: function() {
    var e = document.createElement("canvas");
    return e.requestPointerLock || e.mozRequestPointerLock || e.webkitRequestPointerLock || e.msRequestPointerLock ? 1 : 0
}(), hasFullscreen: function() {
    var e = document.createElement("canvas");
    return (e.requestFullScreen || e.mozRequestFullScreen || e.msRequestFullscreen || e.webkitRequestFullScreen) && (a.indexOf("Safari") == -1 || s >= 10.1) ? 1 : 0
}(), hasThreads: "undefined" != typeof SharedArrayBuffer, hasWasm: "object" == typeof WebAssembly && "function" == typeof WebAssembly.validate && "function" == typeof WebAssembly.compile, hasWasmThreads: function() {
    if ("object" != typeof WebAssembly) return !1;
    if ("undefined" == typeof SharedArrayBuffer) return !1;
    var e = new WebAssembly.Memory({
            initial: 1,
            maximum: 1,
            shared: !0
        }),
        t = e.buffer instanceof SharedArrayBuffer;
    return delete e, t
}()
}
}(), compatibilityCheck: function(e, t, r) {
    UnityLoader.SystemInfo.hasWebGL ? UnityLoader.SystemInfo.mobile ? e.popup("Please note that Unity WebGL is not currently supported on mobiles. Press OK if you wish to continue anyway.", [{
        text: "OK",
        callback: t
    }]) : ["Edge", "Firefox", "Chrome", "Safari"].indexOf(UnityLoader.SystemInfo.browser) == -1 ? e.popup("Please note that your browser is not currently supported for this Unity WebGL content. Press OK if you wish to continue anyway.", [{
        text: "OK",
        callback: t
    }]) : t() : e.popup("Your browser does not support WebGL", [{
        text: "OK",
        callback: r
    }])
}, buildCompatibilityCheck: function(e, t, r) {
    function n() {
        if ("undefined" == typeof e.graphicsAPI) return !0;
        for (var t = 0; t < e.graphicsAPI.length; t++) {
            var r = e.graphicsAPI[t];
            if ("WebGL 2.0" == r && 2 == UnityLoader.SystemInfo.hasWebGL) return !0;
            if ("WebGL 1.0" == r && UnityLoader.SystemInfo.hasWebGL >= 1) return !0;
            e.print("Warning: Unsupported graphics API " + r)
        }
        return !1
    }
    n() ? !UnityLoader.SystemInfo.hasThreads && e.multithreading ? r("Your browser does not support multithreading.") : t() : r("Your browser does not support any of the required graphics API for this content.")
}, Blobs: {}, loadCode: function(e, t, r, n) {
    var o = [].slice.call(UnityLoader.Cryptography.md5(t)).map(function(e) {
            return ("0" + e.toString(16)).substr(-2)
        }).join(""),
        i = document.createElement("script"),
        a = (n.isModularized ? function(e) {
            return new Blob([e], {
                type: "application/javascript"
            })
        } : function(e, t) {
            return new Blob(['UnityLoader["' + t + '"]=', e], {
                type: "text/javascript"
            })
        })(t, o),
        s = URL.createObjectURL(a);
    UnityLoader.Blobs[s] = n, e.deinitializers.push(function() {
        delete UnityLoader.Blobs[s], delete UnityLoader[o], document.body.removeChild(document.getElementById(o))
    }), i.src = s, i.id = o, i.onload = function() {
        e.developmentBuild || URL.revokeObjectURL(s), r(o, a), delete i.onload
    }, document.body.appendChild(i)
}, setupIndexedDBJob: function(e, t) {
    function r(n) {
        r.called || (r.called = !0, e.indexedDB = n, t.complete())
    }
    try {
        var n = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB,
            o = n.open("/idbfs-test");
        o.onerror = function(e) {
            e.preventDefault(), r()
        }, o.onsuccess = function() {
            o.result.close(), r(n)
        }
    } catch (e) {
        r()
    }
}, processWasmCodeJob: function(e, t) {
    e.wasmBinary = UnityLoader.Job.result(e, "downloadWasmCode"), t.complete()
}, processWasmFrameworkJob: function(e, t) {
    var r = UnityLoader.Job.result(e, "downloadWasmFramework");
    UnityLoader.loadCode(e, r, function(r, n) {
        e.mainScriptUrlOrBlob = n, e.isModularized && (UnityLoader[r] = UnityModule), UnityLoader[r](e), t.complete()
    }, {
        Module: e,
        url: e.wasmFrameworkUrl,
        isModularized: e.isModularized
    })
}, processAsmCodeJob: function(e, t) {
    var r = UnityLoader.Job.result(e, "downloadAsmCode");
    UnityLoader.loadCode(e, Math.fround ? r : UnityLoader.Utils.optimizeMathFround(r), function(r, n) {
        e.isModularized ? e.asmJsUrlOrBlob = n : e.asm = UnityLoader[r], t.complete()
    }, {
        Module: e,
        url: e.asmCodeUrl,
        isModularized: e.isModularized
    })
}, processAsmFrameworkJob: function(e, t) {
    var r = UnityLoader.Job.result(e, "downloadAsmFramework");
    UnityLoader.loadCode(e, r, function(r, n) {
        e.isModularized && (e.mainScriptUrlOrBlob = n, UnityLoader[r] = UnityModule), UnityLoader[r](e), t.complete()
    }, {
        Module: e,
        url: e.asmFrameworkUrl,
        isModularized: e.isModularized
    })
}, processMemoryInitializerJob: function(e, t) {
    e.memoryInitializerRequest.status = 200, e.memoryInitializerRequest.response = UnityLoader.Job.result(e, "downloadMemoryInitializer"), e.memoryInitializerRequest.callback && e.memoryInitializerRequest.callback(), t.complete()
}, processDataJob: function(e, t) {
    var r = UnityLoader.Job.result(e, "downloadData"),
        n = new DataView(r.buffer, r.byteOffset, r.byteLength),
        o = 0,
        i = "UnityWebData1.0\0";
    if (!String.fromCharCode.apply(null, r.subarray(o, o + i.length)) == i) throw "unknown data format";
    o += i.length;
    var a = n.getUint32(o, !0);
    for (o += 4; o < a;) {
        var s = n.getUint32(o, !0);
        o += 4;
        var d = n.getUint32(o, !0);
        o += 4;
        var l = n.getUint32(o, !0);
        o += 4;
        var u = String.fromCharCode.apply(null, r.subarray(o, o + l));
        o += l;
        for (var c = 0, f = u.indexOf("/", c) + 1; f > 0; c = f, f = u.indexOf("/", c) + 1) e.FS_createPath(u.substring(0, c), u.substring(c, f - 1), !0, !0);
        e.FS_createDataFile(u, null, r.subarray(s, s + d), !0, !0, !0)
    }
    e.removeRunDependency("processDataJob"), t.complete()
}, downloadJob: function(e, t) {
    var r = t.parameters.objParameters ? new UnityLoader.UnityCache.XMLHttpRequest(t.parameters.objParameters) : new XMLHttpRequest;
    r.open("GET", t.parameters.url), r.responseType = "arraybuffer", r.onload = function() {
        UnityLoader.Compression.decompress(new Uint8Array(r.response), function(e) {
            t.complete(e)
        })
    }, t.parameters.onprogress && r.addEventListener("progress", t.parameters.onprogress), t.parameters.onload && r.addEventListener("load", t.parameters.onload), r.send()
}, scheduleBuildDownloadJob: function(e, t, r) {
    UnityLoader.Progress.update(e, t), UnityLoader.Job.schedule(e, t, [], UnityLoader.downloadJob, {
        url: e.resolveBuildUrl(e[r]),
        onprogress: function(r) {
            UnityLoader.Progress.update(e, t, r)
        },
        onload: function(r) {
            UnityLoader.Progress.update(e, t, r)
        },
        objParameters: e.companyName && e.productName && e.cacheControl && (e.cacheControl[r] || e.cacheControl.default) ? {
            companyName: e.companyName,
            productName: e.productName,
            cacheControl: e.cacheControl[r] || e.cacheControl.default
        } : null
    })
}, loadModule: function(e, t) {
    if (e.useWasm = e.wasmCodeUrl && UnityLoader.SystemInfo.hasWasm, e.useWasm) {
        if (e.multithreading && !UnityLoader.SystemInfo.hasWasmThreads) return void t("Your browser does not support WebAssembly Threads.");
        var r = ["downloadWasmFramework", "setupIndexedDB"];
        e.wasmCodeUrl.endsWith(".unityweb") && (UnityLoader.scheduleBuildDownloadJob(e, "downloadWasmCode", "wasmCodeUrl"), UnityLoader.Job.schedule(e, "processWasmCode", ["downloadWasmCode"], UnityLoader.processWasmCodeJob), r.push("processWasmCode")), e.wasmMemoryUrl && (UnityLoader.scheduleBuildDownloadJob(e, "downloadMemoryInitializer", "wasmMemoryUrl"), UnityLoader.Job.schedule(e, "processMemoryInitializer", ["downloadMemoryInitializer"], UnityLoader.processMemoryInitializerJob), e.memoryInitializerRequest = {
            addEventListener: function(t, r) {
                e.memoryInitializerRequest.callback = r
            }
        }), UnityLoader.scheduleBuildDownloadJob(e, "downloadWasmFramework", "wasmFrameworkUrl"), UnityLoader.Job.schedule(e, "processWasmFramework", r, UnityLoader.processWasmFrameworkJob)
    } else {
        if (!e.asmCodeUrl) return void t("Your browser does not support WebAssembly.");
        UnityLoader.scheduleBuildDownloadJob(e, "downloadAsmCode", "asmCodeUrl"), UnityLoader.Job.schedule(e, "processAsmCode", ["downloadAsmCode"], UnityLoader.processAsmCodeJob), UnityLoader.scheduleBuildDownloadJob(e, "downloadMemoryInitializer", "asmMemoryUrl"), UnityLoader.Job.schedule(e, "processMemoryInitializer", ["downloadMemoryInitializer"], UnityLoader.processMemoryInitializerJob), e.memoryInitializerRequest = {
            addEventListener: function(t, r) {
                e.memoryInitializerRequest.callback = r
            }
        }, e.asmLibraryUrl && (e.dynamicLibraries = [e.asmLibraryUrl].map(e.resolveBuildUrl)), UnityLoader.scheduleBuildDownloadJob(e, "downloadAsmFramework", "asmFrameworkUrl"), UnityLoader.Job.schedule(e, "processAsmFramework", ["downloadAsmFramework", "processAsmCode", "setupIndexedDB"], UnityLoader.processAsmFrameworkJob)
    }
    UnityLoader.scheduleBuildDownloadJob(e, "downloadData", "dataUrl"), UnityLoader.Job.schedule(e, "setupIndexedDB", [], UnityLoader.setupIndexedDBJob), e.preRun.push(function() {
        e.addRunDependency("processDataJob"), UnityLoader.Job.schedule(e, "processData", ["downloadData"], UnityLoader.processDataJob)
    })
}, instantiate: function(e, t, r) {
    function n(e, n) {
        if ("string" == typeof e && !(e = document.getElementById(e))) return !1;
        e.innerHTML = "", e.style.border = e.style.margin = e.style.padding = 0, "static" == getComputedStyle(e).getPropertyValue("position") && (e.style.position = "relative"), e.style.width = n.width || e.style.width, e.style.height = n.height || e.style.height, n.container = e;
        var o = n.Module;
        o.canvas = document.createElement("canvas"), o.canvas.style.width = "100%", o.canvas.style.height = "100%", o.canvas.addEventListener("contextmenu", function(e) {
            e.preventDefault()
        }), o.canvas.id = "#canvas", e.appendChild(o.canvas), o.deinitializers.push(function() {
            e.removeChild(o.canvas)
        });
        var i = !0;
        return n.compatibilityCheck(n, function() {
            var t = new XMLHttpRequest;
            t.open("GET", n.url, !0), t.responseType = "text", t.onerror = function() {
                o.print("Could not download " + n.url), 0 == document.URL.indexOf("file:") && alert("It seems your browser does not support running Unity WebGL content from file:// urls. Please upload it to an http server, or try a different browser.")
            }, t.onload = function() {
                var a = JSON.parse(t.responseText);
                for (var s in a) "undefined" == typeof o[s] && (o[s] = a[s]);
                if (o.unityVersion) {
                    var d = o.unityVersion.match(/(\d+)\.(\d+)\.(\d+)(.+)/);
                    d && (o.unityVersion = {
                        string: o.unityVersion,
                        version: parseInt(d[0]),
                        major: parseInt(d[1]),
                        minor: parseInt(d[2]),
                        suffix: d[3]
                    })
                }
                o.isModularized = o.unityVersion && o.unityVersion.version >= 2019, UnityLoader.buildCompatibilityCheck(o, function() {
                    e.style.background = o.backgroundUrl ? "center/cover url('" + o.resolveBuildUrl(o.backgroundUrl) + "')" : o.backgroundColor ? " " + o.backgroundColor : "", n.onProgress(n, 0), i = UnityLoader.loadModule(o, r.onerror)
                }, r.onerror)
            }, t.send()
        }, function() {
            var e = "Instantiation of '" + t + "' terminated due to the failed compatibility check.";
            "object" == typeof r && "function" == typeof r.onerror ? r.onerror(e) : o.printErr(e)
        }), i
    }

    function o(e) {
        return o.link = o.link || document.createElement("a"), o.link.href = e, o.link.href
    }
    "undefined" == typeof r && (r = {}), "undefined" == typeof r.onerror && (r.onerror = function(e) {
        i.popup(e, [{
            text: "OK"
        }])
    });
    var i = {
        url: t,
        onProgress: UnityLoader.Progress.handler,
        compatibilityCheck: UnityLoader.compatibilityCheck,
        Module: {
            deinitializers: [],
            intervals: {},
            setInterval: function(e, t) {
                var r = window.setInterval(e, t);
                return this.intervals[r] = !0, r
            },
            clearInterval: function(e) {
                delete this.intervals[e], window.clearInterval(e)
            },
            onAbort: function(e) {
                throw void 0 !== e ? (this.print(e), this.printErr(e), e = JSON.stringify(e)) : e = "", "abort(" + e + ") at " + this.stackTrace()
            },
            preRun: [],
            postRun: [],
            print: function(e) {
                console.log(e)
            },
            printErr: function(e) {
                console.error(e)
            },
            Jobs: {},
            buildDownloadProgress: {},
            resolveBuildUrl: function(e) {
                return e.match(/(http|https|ftp|file):\/\//) ? e : t.substring(0, t.lastIndexOf("/") + 1) + e
            },
            streamingAssetsUrl: function() {
                return o(this.resolveBuildUrl("../StreamingAssets"))
            },
            locateFile: function(e) {
                return "Build/".concat("build.wasm" == e ? this.wasmCodeUrl : e)
            }
        },
        SetFullscreen: function() {
            if (i.Module.SetFullscreen) return i.Module.SetFullscreen.apply(i.Module, arguments)
        },
        SendMessage: function() {
            if (i.Module.SendMessage) return i.Module.SendMessage.apply(i.Module, arguments)
        },
        Quit: function(e) {
            "function" == typeof e && (i.Module.onQuit = e), i.Module.shouldQuit = !0
        }
    };
    i.Module.unityInstance = i, i.popup = function(e, t) {
        return UnityLoader.Error.popup(i, e, t)
    }, i.Module.postRun.push(function() {
        i.onProgress(i, 1), "object" == typeof r && "function" == typeof r.onsuccess && r.onsuccess(i.Module)
    });
    for (var a in r)
        if ("Module" == a)
            for (var s in r[a]) i.Module[s] = r[a][s];
        else i[a] = r[a];
    return n(e, i) || document.addEventListener("DOMContentLoaded", function() {
        n(e, i)
    }), i
}, instantiateAsync: function(e, t, r) {
    return new Promise(function(n, o) {
        const i = Object.assign({
            onsuccess: function(e) {
                n(e)
            },
            onerror: function(e) {
                o(e)
            }
        }, r);
        UnityLoader.instantiate(e, t, i)
    })
}, Utils: {
    assert: function(e, t) {
        e || abort("Assertion failed: " + t)
    },
    optimizeMathFround: function(e, t) {
        console.log("optimizing out Math.fround calls");
        for (var r = {
                LOOKING_FOR_MODULE: 0,
                SCANNING_MODULE_VARIABLES: 1,
                SCANNING_MODULE_FUNCTIONS: 2
            }, n = ["EMSCRIPTEN_START_ASM", "EMSCRIPTEN_START_FUNCS", "EMSCRIPTEN_END_FUNCS"], o = "var", i = "global.Math.fround;", a = 0, s = t ? r.LOOKING_FOR_MODULE : r.SCANNING_MODULE_VARIABLES, d = 0, l = 0; s <= r.SCANNING_MODULE_FUNCTIONS && a < e.length; a++)
            if (47 == e[a] && 47 == e[a + 1] && 32 == e[a + 2] && String.fromCharCode.apply(null, e.subarray(a + 3, a + 3 + n[s].length)) === n[s]) s++;
            else if (s != r.SCANNING_MODULE_VARIABLES || l || 61 != e[a] || String.fromCharCode.apply(null, e.subarray(a + 1, a + 1 + i.length)) !== i) {
            if (l && 40 == e[a]) {
                for (var u = 0; u < l && e[a - 1 - u] == e[d - u];) u++;
                if (u == l) {
                    var c = e[a - 1 - u];
                    if (c < 36 || 36 < c && c < 48 || 57 < c && c < 65 || 90 < c && c < 95 || 95 < c && c < 97 || 122 < c)
                        for (; u; u--) e[a - u] = 32
                }
            }
        } else {
            for (d = a - 1; 32 != e[d - l];) l++;
            l && String.fromCharCode.apply(null, e.subarray(d - l - o.length, d - l)) === o || (d = l = 0)
        }
        return e
    }
}, UnityCache: function() {
    function e(e) {
        console.log("[UnityCache] " + e)
    }

    function t(e) {
        return t.link = t.link || document.createElement("a"), t.link.href = e, t.link.href
    }

    function r(e) {
        return false
    }

    function n() {
        function t(t) {
            if ("undefined" == typeof n.database)
                for (n.database = t, n.database || e("indexedDB database could not be opened"); n.queue.length;) {
                    var r = n.queue.shift();
                    n.database ? n.execute.apply(n, r) : "function" == typeof r.onerror && r.onerror(new Error("operation cancelled"))
                }
        }

        function r() {
            var e = o.open(a.name, a.version);
            e.onupgradeneeded = function(e) {
                var t = e.target.result;
                t.objectStoreNames.contains(d.name) || t.createObjectStore(d.name)
            }, e.onsuccess = function(e) {
                t(e.target.result)
            }, e.onerror = function() {
                t(null)
            }
        }
        var n = this;
        n.queue = [];
        try {
            var o = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB,
                i = o.open(a.name);
            i.onupgradeneeded = function(e) {
                var t = e.target.result.createObjectStore(s.name, {
                    keyPath: "url"
                });
                ["version", "company", "product", "updated", "revalidated", "accessed"].forEach(function(e) {
                    t.createIndex(e, e)
                })
            }, i.onsuccess = function(e) {
                var n = e.target.result;
                n.version < a.version ? (n.close(), r()) : t(n)
            }, i.onerror = function() {
                t(null)
            }
        } catch (e) {
            t(null)
        }
    }

    function o(e, t, r, n, o) {
        var i = {
            url: e,
            version: s.version,
            company: t,
            product: r,
            updated: n,
            revalidated: n,
            accessed: n,
            responseHeaders: {},
            xhr: {}
        };
        return o && (["Last-Modified", "ETag"].forEach(function(e) {
            i.responseHeaders[e] = o.getResponseHeader(e)
        }), ["responseURL", "status", "statusText", "response"].forEach(function(e) {
            i.xhr[e] = o[e]
        })), i
    }

    function i(t) {
        this.cache = {
            enabled: !1
        }, t && (this.cache.control = t.cacheControl, this.cache.company = t.companyName, this.cache.product = t.productName), this.xhr = new XMLHttpRequest(t), this.xhr.addEventListener("load", function() {
            var t = this.xhr,
                r = this.cache;
            r.enabled && !r.revalidated && (304 == t.status ? (r.result.revalidated = r.result.accessed, r.revalidated = !0, l.execute(s.name, "put", [r.result]), e("'" + r.result.url + "' successfully revalidated and served from the indexedDB cache")) : 200 == t.status ? (r.result = o(r.result.url, r.company, r.product, r.result.accessed, t), r.revalidated = !0, l.execute(s.name, "put", [r.result], function(t) {
                e("'" + r.result.url + "' successfully downloaded and stored in the indexedDB cache")
            }, function(t) {
                e("'" + r.result.url + "' successfully downloaded but not stored in the indexedDB cache due to the error: " + t)
            })) : e("'" + r.result.url + "' request failed with status: " + t.status + " " + t.statusText))
        }.bind(this))
    }
    var a = {
            name: "UnityCache",
            version: 2
        },
        s = {
            name: "XMLHttpRequest",
            version: 1
        },
        d = {
            name: "WebAssembly",
            version: 1
        };
    n.prototype.execute = function(e, t, r, n, o) {
        if (this.database) try {
            var i = this.database.transaction([e], ["put", "delete", "clear"].indexOf(t) != -1 ? "readwrite" : "readonly").objectStore(e);
            "openKeyCursor" == t && (i = i.index(r[0]), r = r.slice(1));
            var a = i[t].apply(i, r);
            "function" == typeof n && (a.onsuccess = function(e) {
                n(e.target.result)
            }), a.onerror = o
        } catch (e) {
            "function" == typeof o && o(e)
        } else "undefined" == typeof this.database ? this.queue.push(arguments) : "function" == typeof o && o(new Error("indexedDB access denied"))
    };
    var l = new n;
    i.prototype.send = function(t) {
        var n = this.xhr,
            o = this.cache,
            i = arguments;
        return o.enabled = o.enabled && "arraybuffer" == n.responseType && !t, o.enabled ? void l.execute(s.name, "get", [o.result.url], function(t) {
            if (!t || t.version != s.version) return void n.send.apply(n, i);
            if (o.result = t, o.result.accessed = Date.now(), "immutable" == o.control) o.revalidated = !0, l.execute(s.name, "put", [o.result]), n.dispatchEvent(new Event("load")), e("'" + o.result.url + "' served from the indexedDB cache without revalidation");
            else if (r(o.result.url) && (o.result.responseHeaders["Last-Modified"] || o.result.responseHeaders.ETag)) {
                var a = new XMLHttpRequest;
                a.open("HEAD", o.result.url), a.onload = function() {
                    o.revalidated = ["Last-Modified", "ETag"].every(function(e) {
                        return !o.result.responseHeaders[e] || o.result.responseHeaders[e] == a.getResponseHeader(e)
                    }), o.revalidated ? (o.result.revalidated = o.result.accessed, l.execute(s.name, "put", [o.result]), n.dispatchEvent(new Event("load")), e("'" + o.result.url + "' successfully revalidated and served from the indexedDB cache")) : n.send.apply(n, i)
                }, a.send()
            } else o.result.responseHeaders["Last-Modified"] ? (n.setRequestHeader("If-Modified-Since", o.result.responseHeaders["Last-Modified"]), n.setRequestHeader("Cache-Control", "no-cache")) : o.result.responseHeaders.ETag && (n.setRequestHeader("If-None-Match", o.result.responseHeaders.ETag), n.setRequestHeader("Cache-Control", "no-cache")), n.send.apply(n, i)
        }, function(e) {
            n.send.apply(n, i)
        }) : n.send.apply(n, i)
    }, i.prototype.open = function(e, r, n, i, a) {
        return this.cache.result = o(t(r), this.cache.company, this.cache.product, Date.now()), this.cache.enabled = ["must-revalidate", "immutable"].indexOf(this.cache.control) != -1 && "GET" == e && this.cache.result.url.match("^https?://") && ("undefined" == typeof n || n) && "undefined" == typeof i && "undefined" == typeof a, this.cache.revalidated = !1, this.xhr.open.apply(this.xhr, arguments)
    }, i.prototype.setRequestHeader = function(e, t) {
        return this.cache.enabled = !1, this.xhr.setRequestHeader.apply(this.xhr, arguments)
    };
    var u = new XMLHttpRequest;
    for (var c in u) i.prototype.hasOwnProperty(c) || ! function(e) {
        Object.defineProperty(i.prototype, e, "function" == typeof u[e] ? {
            value: function() {
                return this.xhr[e].apply(this.xhr, arguments)
            }
        } : {
            get: function() {
                return this.cache.revalidated && this.cache.result.xhr.hasOwnProperty(e) ? this.cache.result.xhr[e] : this.xhr[e]
            },
            set: function(t) {
                this.xhr[e] = t
            }
        })
    }(c);
    return {
        XMLHttpRequest: i,
        WebAssembly: {
            get: function(e, r) {
                var n = {
                    url: t(e),
                    version: d.version,
                    module: null,
                    md5: null
                };
                l.execute(d.name, "get", [n.url], function(e) {
                    r(e && e.version == d.version ? e : n)
                }, function() {
                    r(n)
                })
            },
            put: function(e, t, r) {
                l.execute(d.name, "put", [e, e.url], t, r)
            }
        }
    }
}()
};