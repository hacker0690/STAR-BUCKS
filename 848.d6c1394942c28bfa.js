(self.webpackChunkTata_Starbucks = self.webpackChunkTata_Starbucks || []).push([
    [848], {
        1848: (nt, re, C) => {
            "use strict";
            C.r(re);
            var V = C(9278),
                H = C(6355),
                I = function() {
                    return I = Object.assign || function(t) {
                        for (var n, r = 1, i = arguments.length; r < i; r++)
                            for (var o in n = arguments[r]) Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o]);
                        return t
                    }, I.apply(this, arguments)
                };

            function S(e, t, n, r) {
                return new(n || (n = Promise))(function(o, s) {
                    function a(f) {
                        try {
                            u(r.next(f))
                        } catch (k) {
                            s(k)
                        }
                    }

                    function c(f) {
                        try {
                            u(r.throw(f))
                        } catch (k) {
                            s(k)
                        }
                    }

                    function u(f) {
                        f.done ? o(f.value) : function i(o) {
                            return o instanceof n ? o : new n(function(s) {
                                s(o)
                            })
                        }(f.value).then(a, c)
                    }
                    u((r = r.apply(e, t || [])).next())
                })
            }

            function g(e, t) {
                var r, i, o, s, n = {
                    label: 0,
                    sent: function() {
                        if (1 & o[0]) throw o[1];
                        return o[1]
                    },
                    trys: [],
                    ops: []
                };
                return s = {
                    next: a(0),
                    throw: a(1),
                    return: a(2)
                }, "function" == typeof Symbol && (s[Symbol.iterator] = function() {
                    return this
                }), s;

                function a(u) {
                    return function(f) {
                        return function c(u) {
                            if (r) throw new TypeError("Generator is already executing.");
                            for (; n;) try {
                                if (r = 1, i && (o = 2 & u[0] ? i.return : u[0] ? i.throw || ((o = i.return) && o.call(i), 0) : i.next) && !(o = o.call(i, u[1])).done) return o;
                                switch (i = 0, o && (u = [2 & u[0], o.value]), u[0]) {
                                    case 0:
                                    case 1:
                                        o = u;
                                        break;
                                    case 4:
                                        return n.label++, {
                                            value: u[1],
                                            done: !1
                                        };
                                    case 5:
                                        n.label++, i = u[1], u = [0];
                                        continue;
                                    case 7:
                                        u = n.ops.pop(), n.trys.pop();
                                        continue;
                                    default:
                                        if (!(o = (o = n.trys).length > 0 && o[o.length - 1]) && (6 === u[0] || 2 === u[0])) {
                                            n = 0;
                                            continue
                                        }
                                        if (3 === u[0] && (!o || u[1] > o[0] && u[1] < o[3])) {
                                            n.label = u[1];
                                            break
                                        }
                                        if (6 === u[0] && n.label < o[1]) {
                                            n.label = o[1], o = u;
                                            break
                                        }
                                        if (o && n.label < o[2]) {
                                            n.label = o[2], n.ops.push(u);
                                            break
                                        }
                                        o[2] && n.ops.pop(), n.trys.pop();
                                        continue
                                }
                                u = t.call(e, n)
                            } catch (f) {
                                u = [6, f], i = 0
                            } finally {
                                r = o = 0
                            }
                            if (5 & u[0]) throw u[1];
                            return {
                                value: u[0] ? u[1] : void 0,
                                done: !0
                            }
                        }([u, f])
                    }
                }
            }

            function P(e) {
                var t = "function" == typeof Symbol && Symbol.iterator,
                    n = t && e[t],
                    r = 0;
                if (n) return n.call(e);
                if (e && "number" == typeof e.length) return {
                    next: function() {
                        return e && r >= e.length && (e = void 0), {
                            value: e && e[r++],
                            done: !e
                        }
                    }
                };
                throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.")
            }

            function oe(e, t) {
                var n = "function" == typeof Symbol && e[Symbol.iterator];
                if (!n) return e;
                var i, s, r = n.call(e),
                    o = [];
                try {
                    for (;
                        (void 0 === t || t-- > 0) && !(i = r.next()).done;) o.push(i.value)
                } catch (a) {
                    s = {
                        error: a
                    }
                } finally {
                    try {
                        i && !i.done && (n = r.return) && n.call(r)
                    } finally {
                        if (s) throw s.error
                    }
                }
                return o
            }
            var j, ae = C(1270),
                L = C(2940),
                De = "w:0.4.17",
                ut = ((j = {})["missing-app-config-values"] = 'Missing App configuration value: "{$valueName}"', j["not-registered"] = "Firebase Installation is not registered.", j["installation-not-found"] = "Firebase Installation not found.", j["request-failed"] = '{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"', j["app-offline"] = "Could not process request. Application offline.", j["delete-pending-registration"] = "Can't delete installation while there is a pending registration request.", j),
                A = new ae.ErrorFactory("installations", "Installations", ut);

            function Me(e) {
                return e instanceof ae.FirebaseError && e.code.includes("request-failed")
            }

            function ue(e) {
                return "https://firebaseinstallations.googleapis.com/v1/projects/" + e.projectId + "/installations"
            }

            function Ne(e) {
                return {
                    token: e.token,
                    requestStatus: 2,
                    expiresIn: ct(e.expiresIn),
                    creationTime: Date.now()
                }
            }

            function ce(e, t) {
                return S(this, void 0, void 0, function() {
                    var n, r;
                    return g(this, function(i) {
                        switch (i.label) {
                            case 0:
                                return [4, t.json()];
                            case 1:
                                return n = i.sent(), [2, A.create("request-failed", {
                                    requestName: e,
                                    serverCode: (r = n.error).code,
                                    serverMessage: r.message,
                                    serverStatus: r.status
                                })]
                        }
                    })
                })
            }

            function Re(e) {
                return new Headers({
                    "Content-Type": "application/json",
                    Accept: "application/json",
                    "x-goog-api-key": e.apiKey
                })
            }

            function qe(e, t) {
                var n = t.refreshToken,
                    r = Re(e);
                return r.append("Authorization", function ft(e) {
                    return "FIS_v2 " + e
                }(n)), r
            }

            function fe(e) {
                return S(this, void 0, void 0, function() {
                    var t;
                    return g(this, function(n) {
                        switch (n.label) {
                            case 0:
                                return [4, e()];
                            case 1:
                                return (t = n.sent()).status >= 500 && t.status < 600 ? [2, e()] : [2, t]
                        }
                    })
                })
            }

            function ct(e) {
                return Number(e.replace("s", "000"))
            }

            function lt(e, t) {
                var n = t.fid;
                return S(this, void 0, void 0, function() {
                    var r, i, s, a, c;
                    return g(this, function(f) {
                        switch (f.label) {
                            case 0:
                                return r = ue(e), i = Re(e), s = {
                                    method: "POST",
                                    headers: i,
                                    body: JSON.stringify({
                                        fid: n,
                                        authVersion: "FIS_v2",
                                        appId: e.appId,
                                        sdkVersion: De
                                    })
                                }, [4, fe(function() {
                                    return fetch(r, s)
                                })];
                            case 1:
                                return (a = f.sent()).ok ? [4, a.json()] : [3, 3];
                            case 2:
                                return [2, {
                                    fid: (c = f.sent()).fid || n,
                                    registrationStatus: 2,
                                    refreshToken: c.refreshToken,
                                    authToken: Ne(c.authToken)
                                }];
                            case 3:
                                return [4, ce("Create Installation", a)];
                            case 4:
                                throw f.sent()
                        }
                    })
                })
            }

            function Ke(e) {
                return new Promise(function(t) {
                    setTimeout(t, e)
                })
            }
            var pt = /^[cdef][\w-]{21}$/;

            function ht() {
                try {
                    var e = new Uint8Array(17);
                    (self.crypto || self.msCrypto).getRandomValues(e), e[0] = 112 + e[0] % 16;
                    var n = function vt(e) {
                        return function dt(e) {
                            var t = btoa(String.fromCharCode.apply(String, function se() {
                                for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(oe(arguments[t]));
                                return e
                            }(e)));
                            return t.replace(/\+/g, "-").replace(/\//g, "_")
                        }(e).substr(0, 22)
                    }(e);
                    return pt.test(n) ? n : ""
                } catch (r) {
                    return ""
                }
            }

            function U(e) {
                return e.appName + "!" + e.appId
            }
            var W = new Map;

            function Ve(e, t) {
                var n = U(e);
                Be(n, t),
                    function bt(e, t) {
                        var n = Fe();
                        n && n.postMessage({
                            key: e,
                            fid: t
                        }), Le()
                    }(n, t)
            }

            function Be(e, t) {
                var n, r, i = W.get(e);
                if (i) try {
                    for (var o = P(i), s = o.next(); !s.done; s = o.next())(0, s.value)(t)
                } catch (c) {
                    n = {
                        error: c
                    }
                } finally {
                    try {
                        s && !s.done && (r = o.return) && r.call(o)
                    } finally {
                        if (n) throw n.error
                    }
                }
            }
            var N = null;

            function Fe() {
                return !N && "BroadcastChannel" in self && ((N = new BroadcastChannel("[Firebase] FID Change")).onmessage = function(e) {
                    Be(e.data.key, e.data.fid)
                }), N
            }

            function Le() {
                0 === W.size && N && (N.close(), N = null)
            }
            var R = "firebase-installations-store",
                de = null;

            function pe() {
                return de || (de = (0, L.openDb)("firebase-installations-database", 1, function(e) {
                    0 === e.oldVersion && e.createObjectStore(R)
                })), de
            }

            function Z(e, t) {
                return S(this, void 0, void 0, function() {
                    var n, r, i, o, s;
                    return g(this, function(a) {
                        switch (a.label) {
                            case 0:
                                return n = U(e), [4, pe()];
                            case 1:
                                return r = a.sent(), i = r.transaction(R, "readwrite"), [4, (o = i.objectStore(R)).get(n)];
                            case 2:
                                return s = a.sent(), [4, o.put(t, n)];
                            case 3:
                                return a.sent(), [4, i.complete];
                            case 4:
                                return a.sent(), (!s || s.fid !== t.fid) && Ve(e, t.fid), [2, t]
                        }
                    })
                })
            }

            function he(e) {
                return S(this, void 0, void 0, function() {
                    var t, n, r;
                    return g(this, function(i) {
                        switch (i.label) {
                            case 0:
                                return t = U(e), [4, pe()];
                            case 1:
                                return n = i.sent(), [4, (r = n.transaction(R, "readwrite")).objectStore(R).delete(t)];
                            case 2:
                                return i.sent(), [4, r.complete];
                            case 3:
                                return i.sent(), [2]
                        }
                    })
                })
            }

            function J(e, t) {
                return S(this, void 0, void 0, function() {
                    var n, r, i, o, s, a;
                    return g(this, function(c) {
                        switch (c.label) {
                            case 0:
                                return n = U(e), [4, pe()];
                            case 1:
                                return r = c.sent(), i = r.transaction(R, "readwrite"), [4, (o = i.objectStore(R)).get(n)];
                            case 2:
                                return s = c.sent(), void 0 !== (a = t(s)) ? [3, 4] : [4, o.delete(n)];
                            case 3:
                                return c.sent(), [3, 6];
                            case 4:
                                return [4, o.put(a, n)];
                            case 5:
                                c.sent(), c.label = 6;
                            case 6:
                                return [4, i.complete];
                            case 7:
                                return c.sent(), a && (!s || s.fid !== a.fid) && Ve(e, a.fid), [2, a]
                        }
                    })
                })
            }

            function ve(e) {
                return S(this, void 0, void 0, function() {
                    var t, n, r;
                    return g(this, function(i) {
                        switch (i.label) {
                            case 0:
                                return [4, J(e, function(o) {
                                    var s = function St(e) {
                                            return We(e || {
                                                fid: ht(),
                                                registrationStatus: 0
                                            })
                                        }(o),
                                        a = function kt(e, t) {
                                            if (0 === t.registrationStatus) {
                                                if (!navigator.onLine) return {
                                                    installationEntry: t,
                                                    registrationPromise: Promise.reject(A.create("app-offline"))
                                                };
                                                var r = {
                                                        fid: t.fid,
                                                        registrationStatus: 1,
                                                        registrationTime: Date.now()
                                                    },
                                                    i = function Tt(e, t) {
                                                        return S(this, void 0, void 0, function() {
                                                            var n, r;
                                                            return g(this, function(i) {
                                                                switch (i.label) {
                                                                    case 0:
                                                                        return i.trys.push([0, 2, , 7]), [4, lt(e, t)];
                                                                    case 1:
                                                                        return n = i.sent(), [2, Z(e, n)];
                                                                    case 2:
                                                                        return Me(r = i.sent()) && 409 === r.serverCode ? [4, he(e)] : [3, 4];
                                                                    case 3:
                                                                        return i.sent(), [3, 6];
                                                                    case 4:
                                                                        return [4, Z(e, {
                                                                            fid: t.fid,
                                                                            registrationStatus: 0
                                                                        })];
                                                                    case 5:
                                                                        i.sent(), i.label = 6;
                                                                    case 6:
                                                                        throw r;
                                                                    case 7:
                                                                        return [2]
                                                                }
                                                            })
                                                        })
                                                    }(e, r);
                                                return {
                                                    installationEntry: r,
                                                    registrationPromise: i
                                                }
                                            }
                                            return 1 === t.registrationStatus ? {
                                                installationEntry: t,
                                                registrationPromise: It(e)
                                            } : {
                                                installationEntry: t
                                            }
                                        }(e, s);
                                    return t = a.registrationPromise, a.installationEntry
                                })];
                            case 1:
                                return "" !== (n = i.sent()).fid ? [3, 3] : (r = {}, [4, t]);
                            case 2:
                                return [2, (r.installationEntry = i.sent(), r)];
                            case 3:
                                return [2, {
                                    installationEntry: n,
                                    registrationPromise: t
                                }]
                        }
                    })
                })
            }

            function It(e) {
                return S(this, void 0, void 0, function() {
                    var t, n, r, i;
                    return g(this, function(o) {
                        switch (o.label) {
                            case 0:
                                return [4, Ue(e)];
                            case 1:
                                t = o.sent(), o.label = 2;
                            case 2:
                                return 1 !== t.registrationStatus ? [3, 5] : [4, Ke(100)];
                            case 3:
                                return o.sent(), [4, Ue(e)];
                            case 4:
                                return t = o.sent(), [3, 2];
                            case 5:
                                return 0 !== t.registrationStatus ? [3, 7] : [4, ve(e)];
                            case 6:
                                return n = o.sent(), r = n.installationEntry, (i = n.registrationPromise) ? [2, i] : [2, r];
                            case 7:
                                return [2, t]
                        }
                    })
                })
            }

            function Ue(e) {
                return J(e, function(t) {
                    if (!t) throw A.create("installation-not-found");
                    return We(t)
                })
            }

            function We(e) {
                return function Ot(e) {
                    return 1 === e.registrationStatus && e.registrationTime + 1e4 < Date.now()
                }(e) ? {
                    fid: e.fid,
                    registrationStatus: 0
                } : e
            }

            function Et(e, t) {
                var n = e.appConfig,
                    r = e.platformLoggerProvider;
                return S(this, void 0, void 0, function() {
                    var i, o, s, c, u;
                    return g(this, function(d) {
                        switch (d.label) {
                            case 0:
                                return i = function Ct(e, t) {
                                    var n = t.fid;
                                    return ue(e) + "/" + n + "/authTokens:generate"
                                }(n, t), o = qe(n, t), (s = r.getImmediate({
                                    optional: !0
                                })) && o.append("x-firebase-client", s.getPlatformInfoString()), c = {
                                    method: "POST",
                                    headers: o,
                                    body: JSON.stringify({
                                        installation: {
                                            sdkVersion: De
                                        }
                                    })
                                }, [4, fe(function() {
                                    return fetch(i, c)
                                })];
                            case 1:
                                return (u = d.sent()).ok ? [4, u.json()] : [3, 3];
                            case 2:
                                return [2, Ne(d.sent())];
                            case 3:
                                return [4, ce("Generate Auth Token", u)];
                            case 4:
                                throw d.sent()
                        }
                    })
                })
            }

            function ge(e, t) {
                return void 0 === t && (t = !1), S(this, void 0, void 0, function() {
                    var n, r, o;
                    return g(this, function(s) {
                        switch (s.label) {
                            case 0:
                                return [4, J(e.appConfig, function(a) {
                                    if (!Ge(a)) throw A.create("not-registered");
                                    var c = a.authToken;
                                    if (!t && function _t(e) {
                                            return 2 === e.requestStatus && ! function xt(e) {
                                                var t = Date.now();
                                                return t < e.creationTime || e.creationTime + e.expiresIn < t + 36e5
                                            }(e)
                                        }(c)) return a;
                                    if (1 === c.requestStatus) return n = function Pt(e, t) {
                                        return S(this, void 0, void 0, function() {
                                            var n, r;
                                            return g(this, function(i) {
                                                switch (i.label) {
                                                    case 0:
                                                        return [4, He(e.appConfig)];
                                                    case 1:
                                                        n = i.sent(), i.label = 2;
                                                    case 2:
                                                        return 1 !== n.authToken.requestStatus ? [3, 5] : [4, Ke(100)];
                                                    case 3:
                                                        return i.sent(), [4, He(e.appConfig)];
                                                    case 4:
                                                        return n = i.sent(), [3, 2];
                                                    case 5:
                                                        return 0 === (r = n.authToken).requestStatus ? [2, ge(e, t)] : [2, r]
                                                }
                                            })
                                        })
                                    }(e, t), a;
                                    if (!navigator.onLine) throw A.create("app-offline");
                                    var u = function Dt(e) {
                                        var t = {
                                            requestStatus: 1,
                                            requestTime: Date.now()
                                        };
                                        return I(I({}, e), {
                                            authToken: t
                                        })
                                    }(a);
                                    return n = function At(e, t) {
                                        return S(this, void 0, void 0, function() {
                                            var n, r, i;
                                            return g(this, function(o) {
                                                switch (o.label) {
                                                    case 0:
                                                        return o.trys.push([0, 3, , 8]), [4, Et(e, t)];
                                                    case 1:
                                                        return n = o.sent(), i = I(I({}, t), {
                                                            authToken: n
                                                        }), [4, Z(e.appConfig, i)];
                                                    case 2:
                                                        return o.sent(), [2, n];
                                                    case 3:
                                                        return !Me(r = o.sent()) || 401 !== r.serverCode && 404 !== r.serverCode ? [3, 5] : [4, he(e.appConfig)];
                                                    case 4:
                                                        return o.sent(), [3, 7];
                                                    case 5:
                                                        return i = I(I({}, t), {
                                                            authToken: {
                                                                requestStatus: 0
                                                            }
                                                        }), [4, Z(e.appConfig, i)];
                                                    case 6:
                                                        o.sent(), o.label = 7;
                                                    case 7:
                                                        throw r;
                                                    case 8:
                                                        return [2]
                                                }
                                            })
                                        })
                                    }(e, u), u
                                })];
                            case 1:
                                return r = s.sent(), n ? [4, n] : [3, 3];
                            case 2:
                                return o = s.sent(), [3, 4];
                            case 3:
                                o = r.authToken, s.label = 4;
                            case 4:
                                return [2, o]
                        }
                    })
                })
            }

            function He(e) {
                return J(e, function(t) {
                    if (!Ge(t)) throw A.create("not-registered");
                    return function jt(e) {
                        return 1 === e.requestStatus && e.requestTime + 1e4 < Date.now()
                    }(t.authToken) ? I(I({}, t), {
                        authToken: {
                            requestStatus: 0
                        }
                    }) : t
                })
            }

            function Ge(e) {
                return void 0 !== e && 2 === e.registrationStatus
            }

            function Rt(e) {
                return S(this, void 0, void 0, function() {
                    var t;
                    return g(this, function(n) {
                        switch (n.label) {
                            case 0:
                                return [4, ve(e)];
                            case 1:
                                return (t = n.sent().registrationPromise) ? [4, t] : [3, 3];
                            case 2:
                                n.sent(), n.label = 3;
                            case 3:
                                return [2]
                        }
                    })
                })
            }

            function qt(e, t) {
                return S(this, void 0, void 0, function() {
                    var n, r, i, o;
                    return g(this, function(s) {
                        switch (s.label) {
                            case 0:
                                return n = function Kt(e, t) {
                                    var n = t.fid;
                                    return ue(e) + "/" + n
                                }(e, t), r = qe(e, t), i = {
                                    method: "DELETE",
                                    headers: r
                                }, [4, fe(function() {
                                    return fetch(n, i)
                                })];
                            case 1:
                                return (o = s.sent()).ok ? [3, 3] : [4, ce("Delete Installation", o)];
                            case 2:
                                throw s.sent();
                            case 3:
                                return [2]
                        }
                    })
                })
            }

            function ye(e) {
                return A.create("missing-app-config-values", {
                    valueName: e
                })
            }! function Lt(e) {
                e.INTERNAL.registerComponent(new H.Component("installations", function(n) {
                    var r = n.getProvider("app").getImmediate(),
                        i = function Ft(e) {
                            var t, n;
                            if (!e || !e.options) throw ye("App Configuration");
                            if (!e.name) throw ye("App Name");
                            try {
                                for (var i = P(["projectId", "apiKey", "appId"]), o = i.next(); !o.done; o = i.next()) {
                                    var s = o.value;
                                    if (!e.options[s]) throw ye(s)
                                }
                            } catch (a) {
                                t = {
                                    error: a
                                }
                            } finally {
                                try {
                                    o && !o.done && (n = i.return) && n.call(i)
                                } finally {
                                    if (t) throw t.error
                                }
                            }
                            return {
                                appName: e.name,
                                projectId: e.options.projectId,
                                apiKey: e.options.apiKey,
                                appId: e.options.appId
                            }
                        }(r),
                        s = {
                            appConfig: i,
                            platformLoggerProvider: n.getProvider("platform-logger")
                        },
                        a = {
                            app: r,
                            getId: function() {
                                return function Mt(e) {
                                    return S(this, void 0, void 0, function() {
                                        var t, n, r;
                                        return g(this, function(i) {
                                            switch (i.label) {
                                                case 0:
                                                    return [4, ve(e.appConfig)];
                                                case 1:
                                                    return t = i.sent(), n = t.installationEntry, (r = t.registrationPromise) ? r.catch(console.error) : ge(e).catch(console.error), [2, n.fid]
                                            }
                                        })
                                    })
                                }(s)
                            },
                            getToken: function(c) {
                                return function Nt(e, t) {
                                    return void 0 === t && (t = !1), S(this, void 0, void 0, function() {
                                        return g(this, function(r) {
                                            switch (r.label) {
                                                case 0:
                                                    return [4, Rt(e.appConfig)];
                                                case 1:
                                                    return r.sent(), [4, ge(e, t)];
                                                case 2:
                                                    return [2, r.sent().token]
                                            }
                                        })
                                    })
                                }(s, c)
                            },
                            delete: function() {
                                return function Vt(e) {
                                    return S(this, void 0, void 0, function() {
                                        var t, n;
                                        return g(this, function(r) {
                                            switch (r.label) {
                                                case 0:
                                                    return [4, J(t = e.appConfig, function(i) {
                                                        if (!i || 0 !== i.registrationStatus) return i
                                                    })];
                                                case 1:
                                                    if (!(n = r.sent())) return [3, 6];
                                                    if (1 !== n.registrationStatus) return [3, 2];
                                                    throw A.create("delete-pending-registration");
                                                case 2:
                                                    if (2 !== n.registrationStatus) return [3, 6];
                                                    if (navigator.onLine) return [3, 3];
                                                    throw A.create("app-offline");
                                                case 3:
                                                    return [4, qt(t, n)];
                                                case 4:
                                                    return r.sent(), [4, he(t)];
                                                case 5:
                                                    r.sent(), r.label = 6;
                                                case 6:
                                                    return [2]
                                            }
                                        })
                                    })
                                }(s)
                            },
                            onIdChange: function(c) {
                                return function Bt(e, t) {
                                    var n = e.appConfig;
                                    return function gt(e, t) {
                                            Fe();
                                            var n = U(e),
                                                r = W.get(n);
                                            r || W.set(n, r = new Set), r.add(t)
                                        }(n, t),
                                        function() {
                                            ! function yt(e, t) {
                                                var n = U(e),
                                                    r = W.get(n);
                                                !r || (r.delete(t), 0 === r.size && W.delete(n), Le())
                                            }(n, t)
                                        }
                                }(s, c)
                            }
                        };
                    return a
                }, "PUBLIC")), e.registerVersion("@firebase/installations", "0.4.17")
            }(V.default);
            var z = function() {
                return z = Object.assign || function(t) {
                    for (var n, r = 1, i = arguments.length; r < i; r++)
                        for (var o in n = arguments[r]) Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o]);
                    return t
                }, z.apply(this, arguments)
            };

            function w(e, t, n, r) {
                return new(n || (n = Promise))(function(o, s) {
                    function a(f) {
                        try {
                            u(r.next(f))
                        } catch (k) {
                            s(k)
                        }
                    }

                    function c(f) {
                        try {
                            u(r.throw(f))
                        } catch (k) {
                            s(k)
                        }
                    }

                    function u(f) {
                        f.done ? o(f.value) : function i(o) {
                            return o instanceof n ? o : new n(function(s) {
                                s(o)
                            })
                        }(f.value).then(a, c)
                    }
                    u((r = r.apply(e, t || [])).next())
                })
            }

            function m(e, t) {
                var r, i, o, s, n = {
                    label: 0,
                    sent: function() {
                        if (1 & o[0]) throw o[1];
                        return o[1]
                    },
                    trys: [],
                    ops: []
                };
                return s = {
                    next: a(0),
                    throw: a(1),
                    return: a(2)
                }, "function" == typeof Symbol && (s[Symbol.iterator] = function() {
                    return this
                }), s;

                function a(u) {
                    return function(f) {
                        return function c(u) {
                            if (r) throw new TypeError("Generator is already executing.");
                            for (; n;) try {
                                if (r = 1, i && (o = 2 & u[0] ? i.return : u[0] ? i.throw || ((o = i.return) && o.call(i), 0) : i.next) && !(o = o.call(i, u[1])).done) return o;
                                switch (i = 0, o && (u = [2 & u[0], o.value]), u[0]) {
                                    case 0:
                                    case 1:
                                        o = u;
                                        break;
                                    case 4:
                                        return n.label++, {
                                            value: u[1],
                                            done: !1
                                        };
                                    case 5:
                                        n.label++, i = u[1], u = [0];
                                        continue;
                                    case 7:
                                        u = n.ops.pop(), n.trys.pop();
                                        continue;
                                    default:
                                        if (!(o = (o = n.trys).length > 0 && o[o.length - 1]) && (6 === u[0] || 2 === u[0])) {
                                            n = 0;
                                            continue
                                        }
                                        if (3 === u[0] && (!o || u[1] > o[0] && u[1] < o[3])) {
                                            n.label = u[1];
                                            break
                                        }
                                        if (6 === u[0] && n.label < o[1]) {
                                            n.label = o[1], o = u;
                                            break
                                        }
                                        if (o && n.label < o[2]) {
                                            n.label = o[2], n.ops.push(u);
                                            break
                                        }
                                        o[2] && n.ops.pop(), n.trys.pop();
                                        continue
                                }
                                u = t.call(e, n)
                            } catch (f) {
                                u = [6, f], i = 0
                            } finally {
                                r = o = 0
                            }
                            if (5 & u[0]) throw u[1];
                            return {
                                value: u[0] ? u[1] : void 0,
                                done: !0
                            }
                        }([u, f])
                    }
                }
            }

            function Y(e) {
                var t = "function" == typeof Symbol && Symbol.iterator,
                    n = t && e[t],
                    r = 0;
                if (n) return n.call(e);
                if (e && "number" == typeof e.length) return {
                    next: function() {
                        return e && r >= e.length && (e = void 0), {
                            value: e && e[r++],
                            done: !e
                        }
                    }
                };
                throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.")
            }

            function Ut(e, t) {
                var n = "function" == typeof Symbol && e[Symbol.iterator];
                if (!n) return e;
                var i, s, r = n.call(e),
                    o = [];
                try {
                    for (;
                        (void 0 === t || t-- > 0) && !(i = r.next()).done;) o.push(i.value)
                } catch (a) {
                    s = {
                        error: a
                    }
                } finally {
                    try {
                        i && !i.done && (n = r.return) && n.call(r)
                    } finally {
                        if (s) throw s.error
                    }
                }
                return o
            }
            var T, Ht = ((T = {})["missing-app-config-values"] = 'Missing App configuration value: "{$valueName}"', T["only-available-in-window"] = "This method is available in a Window context.", T["only-available-in-sw"] = "This method is available in a service worker context.", T["permission-default"] = "The notification permission was not granted and dismissed instead.", T["permission-blocked"] = "The notification permission was not granted and blocked instead.", T["unsupported-browser"] = "This browser doesn't support the API's required to use the firebase SDK.", T["failed-service-worker-registration"] = "We are unable to register the default service worker. {$browserErrorMessage}", T["token-subscribe-failed"] = "A problem occurred while subscribing the user to FCM: {$errorInfo}", T["token-subscribe-no-token"] = "FCM returned no token when subscribing the user to push.", T["token-unsubscribe-failed"] = "A problem occurred while unsubscribing the user from FCM: {$errorInfo}", T["token-update-failed"] = "A problem occurred while updating the user from FCM: {$errorInfo}", T["token-update-no-token"] = "FCM returned no token when updating the user to push.", T["use-sw-after-get-token"] = "The useServiceWorker() method may only be called once and must be called before calling getToken() to ensure your service worker is used.", T["invalid-sw-registration"] = "The input to useServiceWorker() must be a ServiceWorkerRegistration.", T["invalid-bg-handler"] = "The input to setBackgroundMessageHandler() must be a function.", T["invalid-vapid-key"] = "The public VAPID key must be a string.", T["use-vapid-key-after-get-token"] = "The usePublicVapidKey() method may only be called once and must be called before calling getToken() to ensure your VAPID key is used.", T),
                y = new ae.ErrorFactory("messaging", "Messaging", Ht),
                te = "BDOU99-h67HcA6JeFXHbSNMu7e2yNNu3RzoMj8TM4W88jITfq7ZmPvIM1Iv-4_l2LxQcYwhqby2xGpWwzjfAnG4",
                $e = "FCM_MSG",
                Je = "google.c.a.c_id",
                M = (() => {
                    return (e = M || (M = {})).PUSH_RECEIVED = "push-received", e.NOTIFICATION_CLICKED = "notification-clicked", M;
                    var e
                })();

            function _(e) {
                var t = new Uint8Array(e),
                    n = btoa(String.fromCharCode.apply(String, function Wt() {
                        for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(Ut(arguments[t]));
                        return e
                    }(t)));
                return n.replace(/=/g, "").replace(/\+/g, "-").replace(/\//g, "_")
            }

            function Zt(e) {
                for (var n = (e + "=".repeat((4 - e.length % 4) % 4)).replace(/\-/g, "+").replace(/_/g, "/"), r = atob(n), i = new Uint8Array(r.length), o = 0; o < r.length; ++o) i[o] = r.charCodeAt(o);
                return i
            }
            var we = "fcm_token_details_db",
                ze = "fcm_token_object_Store";

            function tn(e) {
                return w(this, void 0, void 0, function() {
                    var r, o = this;
                    return m(this, function(s) {
                        switch (s.label) {
                            case 0:
                                return "databases" in indexedDB ? [4, indexedDB.databases()] : [3, 2];
                            case 1:
                                if (!s.sent().map(function(a) {
                                        return a.name
                                    }).includes(we)) return [2, null];
                                s.label = 2;
                            case 2:
                                return r = null, [4, (0, L.openDb)(we, 5, function(a) {
                                    return w(o, void 0, void 0, function() {
                                        var c, u, f, k;
                                        return m(this, function(d) {
                                            switch (d.label) {
                                                case 0:
                                                    return a.oldVersion < 2 ? [2] : a.objectStoreNames.contains(ze) ? [4, (c = a.transaction.objectStore(ze)).index("fcmSenderId").get(e)] : [2];
                                                case 1:
                                                    return u = d.sent(), [4, c.clear()];
                                                case 2:
                                                    if (d.sent(), !u) return [2];
                                                    if (2 === a.oldVersion) {
                                                        if (!(f = u).auth || !f.p256dh || !f.endpoint) return [2];
                                                        r = {
                                                            token: f.fcmToken,
                                                            createTime: null !== (k = f.createTime) && void 0 !== k ? k : Date.now(),
                                                            subscriptionOptions: {
                                                                auth: f.auth,
                                                                p256dh: f.p256dh,
                                                                endpoint: f.endpoint,
                                                                swScope: f.swScope,
                                                                vapidKey: "string" == typeof f.vapidKey ? f.vapidKey : _(f.vapidKey)
                                                            }
                                                        }
                                                    } else(3 === a.oldVersion || 4 === a.oldVersion) && (r = {
                                                        token: (f = u).fcmToken,
                                                        createTime: f.createTime,
                                                        subscriptionOptions: {
                                                            auth: _(f.auth),
                                                            p256dh: _(f.p256dh),
                                                            endpoint: f.endpoint,
                                                            swScope: f.swScope,
                                                            vapidKey: _(f.vapidKey)
                                                        }
                                                    });
                                                    return [2]
                                            }
                                        })
                                    })
                                })];
                            case 3:
                                return s.sent().close(), [4, (0, L.deleteDb)(we)];
                            case 4:
                                return s.sent(), [4, (0, L.deleteDb)("fcm_vapid_details_db")];
                            case 5:
                                return s.sent(), [4, (0, L.deleteDb)("undefined")];
                            case 6:
                                return s.sent(), [2, nn(r) ? r : null]
                        }
                    })
                })
            }

            function nn(e) {
                if (!e || !e.subscriptionOptions) return !1;
                var t = e.subscriptionOptions;
                return "number" == typeof e.createTime && e.createTime > 0 && "string" == typeof e.token && e.token.length > 0 && "string" == typeof t.auth && t.auth.length > 0 && "string" == typeof t.p256dh && t.p256dh.length > 0 && "string" == typeof t.endpoint && t.endpoint.length > 0 && "string" == typeof t.swScope && t.swScope.length > 0 && "string" == typeof t.vapidKey && t.vapidKey.length > 0
            }
            var q = "firebase-messaging-store",
                me = null;

            function Se() {
                return me || (me = (0, L.openDb)("firebase-messaging-database", 1, function(e) {
                    0 === e.oldVersion && e.createObjectStore(q)
                })), me
            }

            function ne(e) {
                return w(this, void 0, void 0, function() {
                    var t, r, i;
                    return m(this, function(o) {
                        switch (o.label) {
                            case 0:
                                return t = Te(e), [4, Se()];
                            case 1:
                                return [4, o.sent().transaction(q).objectStore(q).get(t)];
                            case 2:
                                return (r = o.sent()) ? [2, r] : [3, 3];
                            case 3:
                                return [4, tn(e.appConfig.senderId)];
                            case 4:
                                return (i = o.sent()) ? [4, ke(e, i)] : [3, 6];
                            case 5:
                                return o.sent(), [2, i];
                            case 6:
                                return [2]
                        }
                    })
                })
            }

            function ke(e, t) {
                return w(this, void 0, void 0, function() {
                    var n, r, i;
                    return m(this, function(o) {
                        switch (o.label) {
                            case 0:
                                return n = Te(e), [4, Se()];
                            case 1:
                                return r = o.sent(), [4, (i = r.transaction(q, "readwrite")).objectStore(q).put(t, n)];
                            case 2:
                                return o.sent(), [4, i.complete];
                            case 3:
                                return o.sent(), [2, t]
                        }
                    })
                })
            }

            function sn(e) {
                return w(this, void 0, void 0, function() {
                    var t, n, r;
                    return m(this, function(i) {
                        switch (i.label) {
                            case 0:
                                return t = Te(e), [4, Se()];
                            case 1:
                                return n = i.sent(), [4, (r = n.transaction(q, "readwrite")).objectStore(q).delete(t)];
                            case 2:
                                return i.sent(), [4, r.complete];
                            case 3:
                                return i.sent(), [2]
                        }
                    })
                })
            }

            function Te(e) {
                return e.appConfig.appId
            }

            function an(e, t) {
                return w(this, void 0, void 0, function() {
                    var n, r, i, o, a;
                    return m(this, function(u) {
                        switch (u.label) {
                            case 0:
                                return [4, Oe(e)];
                            case 1:
                                n = u.sent(), r = Xe(t), i = {
                                    method: "POST",
                                    headers: n,
                                    body: JSON.stringify(r)
                                }, u.label = 2;
                            case 2:
                                return u.trys.push([2, 5, , 6]), [4, fetch(Ie(e.appConfig), i)];
                            case 3:
                                return [4, u.sent().json()];
                            case 4:
                                return o = u.sent(), [3, 6];
                            case 5:
                                throw a = u.sent(), y.create("token-subscribe-failed", {
                                    errorInfo: a
                                });
                            case 6:
                                if (o.error) throw y.create("token-subscribe-failed", {
                                    errorInfo: o.error.message
                                });
                                if (!o.token) throw y.create("token-subscribe-no-token");
                                return [2, o.token]
                        }
                    })
                })
            }

            function un(e, t) {
                return w(this, void 0, void 0, function() {
                    var n, r, i, o, a;
                    return m(this, function(u) {
                        switch (u.label) {
                            case 0:
                                return [4, Oe(e)];
                            case 1:
                                n = u.sent(), r = Xe(t.subscriptionOptions), i = {
                                    method: "PATCH",
                                    headers: n,
                                    body: JSON.stringify(r)
                                }, u.label = 2;
                            case 2:
                                return u.trys.push([2, 5, , 6]), [4, fetch(Ie(e.appConfig) + "/" + t.token, i)];
                            case 3:
                                return [4, u.sent().json()];
                            case 4:
                                return o = u.sent(), [3, 6];
                            case 5:
                                throw a = u.sent(), y.create("token-update-failed", {
                                    errorInfo: a
                                });
                            case 6:
                                if (o.error) throw y.create("token-update-failed", {
                                    errorInfo: o.error.message
                                });
                                if (!o.token) throw y.create("token-update-no-token");
                                return [2, o.token]
                        }
                    })
                })
            }

            function Ye(e, t) {
                return w(this, void 0, void 0, function() {
                    var n, r, o, a;
                    return m(this, function(c) {
                        switch (c.label) {
                            case 0:
                                return [4, Oe(e)];
                            case 1:
                                n = c.sent(), r = {
                                    method: "DELETE",
                                    headers: n
                                }, c.label = 2;
                            case 2:
                                return c.trys.push([2, 5, , 6]), [4, fetch(Ie(e.appConfig) + "/" + t, r)];
                            case 3:
                                return [4, c.sent().json()];
                            case 4:
                                if ((o = c.sent()).error) throw y.create("token-unsubscribe-failed", {
                                    errorInfo: o.error.message
                                });
                                return [3, 6];
                            case 5:
                                throw a = c.sent(), y.create("token-unsubscribe-failed", {
                                    errorInfo: a
                                });
                            case 6:
                                return [2]
                        }
                    })
                })
            }

            function Ie(e) {
                return "https://fcmregistrations.googleapis.com/v1/projects/" + e.projectId + "/registrations"
            }

            function Oe(e) {
                var t = e.appConfig,
                    n = e.installations;
                return w(this, void 0, void 0, function() {
                    var r;
                    return m(this, function(i) {
                        switch (i.label) {
                            case 0:
                                return [4, n.getToken()];
                            case 1:
                                return r = i.sent(), [2, new Headers({
                                    "Content-Type": "application/json",
                                    Accept: "application/json",
                                    "x-goog-api-key": t.apiKey,
                                    "x-goog-firebase-installations-auth": "FIS " + r
                                })]
                        }
                    })
                })
            }

            function Xe(e) {
                var i = e.vapidKey,
                    o = {
                        web: {
                            endpoint: e.endpoint,
                            auth: e.auth,
                            p256dh: e.p256dh
                        }
                    };
                return i !== te && (o.web.applicationPubKey = i), o
            }

            function Ee(e, t, n) {
                return w(this, void 0, void 0, function() {
                    var r, i, o, s;
                    return m(this, function(a) {
                        switch (a.label) {
                            case 0:
                                if ("granted" !== Notification.permission) throw y.create("permission-blocked");
                                return [4, ln(t, n)];
                            case 1:
                                return r = a.sent(), [4, ne(e)];
                            case 2:
                                return i = a.sent(), o = {
                                    vapidKey: n,
                                    swScope: t.scope,
                                    endpoint: r.endpoint,
                                    auth: _(r.getKey("auth")),
                                    p256dh: _(r.getKey("p256dh"))
                                }, i ? [3, 3] : [2, Qe(e, o)];
                            case 3:
                                if (function dn(e, t) {
                                        return t.vapidKey === e.vapidKey && t.endpoint === e.endpoint && t.auth === e.auth && t.p256dh === e.p256dh
                                    }(i.subscriptionOptions, o)) return [3, 8];
                                a.label = 4;
                            case 4:
                                return a.trys.push([4, 6, , 7]), [4, Ye(e, i.token)];
                            case 5:
                                return a.sent(), [3, 7];
                            case 6:
                                return s = a.sent(), console.warn(s), [3, 7];
                            case 7:
                                return [2, Qe(e, o)];
                            case 8:
                                return Date.now() >= i.createTime + 6048e5 ? [2, fn({
                                    token: i.token,
                                    createTime: Date.now(),
                                    subscriptionOptions: o
                                }, e, t)] : [2, i.token];
                            case 9:
                                return [2]
                        }
                    })
                })
            }

            function X(e, t) {
                return w(this, void 0, void 0, function() {
                    var n, r;
                    return m(this, function(i) {
                        switch (i.label) {
                            case 0:
                                return [4, ne(e)];
                            case 1:
                                return (n = i.sent()) ? [4, Ye(e, n.token)] : [3, 4];
                            case 2:
                                return i.sent(), [4, sn(e)];
                            case 3:
                                i.sent(), i.label = 4;
                            case 4:
                                return [4, t.pushManager.getSubscription()];
                            case 5:
                                return (r = i.sent()) ? [2, r.unsubscribe()] : [2, !0]
                        }
                    })
                })
            }

            function fn(e, t, n) {
                return w(this, void 0, void 0, function() {
                    var r, i, o;
                    return m(this, function(s) {
                        switch (s.label) {
                            case 0:
                                return s.trys.push([0, 3, , 5]), [4, un(t, e)];
                            case 1:
                                return r = s.sent(), i = z(z({}, e), {
                                    token: r,
                                    createTime: Date.now()
                                }), [4, ke(t, i)];
                            case 2:
                                return s.sent(), [2, r];
                            case 3:
                                return o = s.sent(), [4, X(t, n)];
                            case 4:
                                throw s.sent(), o;
                            case 5:
                                return [2]
                        }
                    })
                })
            }

            function Qe(e, t) {
                return w(this, void 0, void 0, function() {
                    var n, r;
                    return m(this, function(i) {
                        switch (i.label) {
                            case 0:
                                return [4, an(e, t)];
                            case 1:
                                return n = i.sent(), r = {
                                    token: n,
                                    createTime: Date.now(),
                                    subscriptionOptions: t
                                }, [4, ke(e, r)];
                            case 2:
                                return i.sent(), [2, r.token]
                        }
                    })
                })
            }

            function ln(e, t) {
                return w(this, void 0, void 0, function() {
                    var n;
                    return m(this, function(r) {
                        switch (r.label) {
                            case 0:
                                return [4, e.pushManager.getSubscription()];
                            case 1:
                                return (n = r.sent()) ? [2, n] : [2, e.pushManager.subscribe({
                                    userVisibleOnly: !0,
                                    applicationServerKey: Zt(t)
                                })]
                        }
                    })
                })
            }

            function Ze(e) {
                return "object" == typeof e && !!e && Je in e
            }

            function yn(e) {
                return new Promise(function(t) {
                    setTimeout(t, e)
                })
            }
            var bn = function() {
                function e(t) {
                    var n = this;
                    this.firebaseDependencies = t, this.isOnBackgroundMessageUsed = null, this.vapidKey = null, this.bgMessageHandler = null, self.addEventListener("push", function(r) {
                        r.waitUntil(n.onPush(r))
                    }), self.addEventListener("pushsubscriptionchange", function(r) {
                        r.waitUntil(n.onSubChange(r))
                    }), self.addEventListener("notificationclick", function(r) {
                        r.waitUntil(n.onNotificationClick(r))
                    })
                }
                return Object.defineProperty(e.prototype, "app", {
                    get: function() {
                        return this.firebaseDependencies.app
                    },
                    enumerable: !1,
                    configurable: !0
                }), e.prototype.setBackgroundMessageHandler = function(t) {
                    if (this.isOnBackgroundMessageUsed = !1, !t || "function" != typeof t) throw y.create("invalid-bg-handler");
                    this.bgMessageHandler = t
                }, e.prototype.onBackgroundMessage = function(t) {
                    var n = this;
                    return this.isOnBackgroundMessageUsed = !0, this.bgMessageHandler = t,
                        function() {
                            n.bgMessageHandler = null
                        }
                }, e.prototype.getToken = function() {
                    var t, n;
                    return w(this, void 0, void 0, function() {
                        var r;
                        return m(this, function(i) {
                            switch (i.label) {
                                case 0:
                                    return this.vapidKey ? [3, 2] : [4, ne(this.firebaseDependencies)];
                                case 1:
                                    r = i.sent(), this.vapidKey = null !== (n = null === (t = null == r ? void 0 : r.subscriptionOptions) || void 0 === t ? void 0 : t.vapidKey) && void 0 !== n ? n : te, i.label = 2;
                                case 2:
                                    return [2, Ee(this.firebaseDependencies, self.registration, this.vapidKey)]
                            }
                        })
                    })
                }, e.prototype.deleteToken = function() {
                    return X(this.firebaseDependencies, self.registration)
                }, e.prototype.requestPermission = function() {
                    throw y.create("only-available-in-window")
                }, e.prototype.usePublicVapidKey = function(t) {
                    if (null !== this.vapidKey) throw y.create("use-vapid-key-after-get-token");
                    if ("string" != typeof t || 0 === t.length) throw y.create("invalid-vapid-key");
                    this.vapidKey = t
                }, e.prototype.useServiceWorker = function() {
                    throw y.create("only-available-in-window")
                }, e.prototype.onMessage = function() {
                    throw y.create("only-available-in-window")
                }, e.prototype.onTokenRefresh = function() {
                    throw y.create("only-available-in-window")
                }, e.prototype.onPush = function(t) {
                    return w(this, void 0, void 0, function() {
                        var n, r, i, o;
                        return m(this, function(s) {
                            switch (s.label) {
                                case 0:
                                    return n = function mn(e) {
                                        var t = e.data;
                                        if (!t) return null;
                                        try {
                                            return t.json()
                                        } catch (n) {
                                            return null
                                        }
                                    }(t), n ? [4, et()] : (console.debug("FirebaseMessaging: failed to get parsed MessagePayload from the PushEvent. Skip handling the push."), [2]);
                                case 1:
                                    return function kn(e) {
                                        return e.some(function(t) {
                                            return "visible" === t.visibilityState && !t.url.startsWith("chrome-extension://")
                                        })
                                    }(r = s.sent()) ? [2, Tn(r, n)] : (i = !1, n.notification ? [4, In(wn(n))] : [3, 3]);
                                case 2:
                                    s.sent(), i = !0, s.label = 3;
                                case 3:
                                    return !0 === i && !1 === this.isOnBackgroundMessageUsed || this.bgMessageHandler && (o = function pn(e) {
                                        var t = {
                                            from: e.from,
                                            collapseKey: e.collapse_key
                                        };
                                        return function hn(e, t) {
                                                if (t.notification) {
                                                    e.notification = {};
                                                    var n = t.notification.title;
                                                    n && (e.notification.title = n);
                                                    var r = t.notification.body;
                                                    r && (e.notification.body = r);
                                                    var i = t.notification.image;
                                                    i && (e.notification.image = i)
                                                }
                                            }(t, e),
                                            function vn(e, t) {
                                                !t.data || (e.data = t.data)
                                            }(t, e),
                                            function gn(e, t) {
                                                if (t.fcmOptions) {
                                                    e.fcmOptions = {};
                                                    var n = t.fcmOptions.link;
                                                    n && (e.fcmOptions.link = n);
                                                    var r = t.fcmOptions.analytics_label;
                                                    r && (e.fcmOptions.analyticsLabel = r)
                                                }
                                            }(t, e), t
                                    }(n), "function" == typeof this.bgMessageHandler ? this.bgMessageHandler(o) : this.bgMessageHandler.next(o)), [2]
                            }
                        })
                    })
                }, e.prototype.onSubChange = function(t) {
                    var n, r;
                    return w(this, void 0, void 0, function() {
                        var o;
                        return m(this, function(s) {
                            switch (s.label) {
                                case 0:
                                    return t.newSubscription ? [3, 2] : [4, X(this.firebaseDependencies, self.registration)];
                                case 1:
                                case 5:
                                    return s.sent(), [2];
                                case 2:
                                    return [4, ne(this.firebaseDependencies)];
                                case 3:
                                    return o = s.sent(), [4, X(this.firebaseDependencies, self.registration)];
                                case 4:
                                    return s.sent(), [4, Ee(this.firebaseDependencies, self.registration, null !== (r = null === (n = null == o ? void 0 : o.subscriptionOptions) || void 0 === n ? void 0 : n.vapidKey) && void 0 !== r ? r : te)]
                            }
                        })
                    })
                }, e.prototype.onNotificationClick = function(t) {
                    var n, r;
                    return w(this, void 0, void 0, function() {
                        var i, o, s, a, c;
                        return m(this, function(u) {
                            switch (u.label) {
                                case 0:
                                    return (i = null === (r = null === (n = t.notification) || void 0 === n ? void 0 : n.data) || void 0 === r ? void 0 : r[$e]) ? t.action ? [2] : (t.stopImmediatePropagation(), t.notification.close(), o = function On(e) {
                                        var t, n, r;
                                        return (null !== (n = null === (t = e.fcmOptions) || void 0 === t ? void 0 : t.link) && void 0 !== n ? n : null === (r = e.notification) || void 0 === r ? void 0 : r.click_action) || (Ze(e.data) ? self.location.origin : null)
                                    }(i), o ? (s = new URL(o, self.location.href), a = new URL(self.location.origin), s.host !== a.host ? [2] : [4, Sn(s)]) : [2]) : [2];
                                case 1:
                                    return (c = u.sent()) ? [3, 4] : [4, self.clients.openWindow(o)];
                                case 2:
                                    return c = u.sent(), [4, yn(3e3)];
                                case 3:
                                    return u.sent(), [3, 6];
                                case 4:
                                    return [4, c.focus()];
                                case 5:
                                    c = u.sent(), u.label = 6;
                                case 6:
                                    return c ? (i.messageType = M.NOTIFICATION_CLICKED, i.isFirebaseMessaging = !0, [2, c.postMessage(i)]) : [2]
                            }
                        })
                    })
                }, e
            }();

            function wn(e) {
                var t, n = z({}, e.notification);
                return n.data = ((t = {})[$e] = e, t), n
            }

            function Sn(e) {
                return w(this, void 0, void 0, function() {
                    var t, n, r, i, o, s, a;
                    return m(this, function(c) {
                        switch (c.label) {
                            case 0:
                                return [4, et()];
                            case 1:
                                t = c.sent();
                                try {
                                    for (n = Y(t), r = n.next(); !r.done; r = n.next())
                                        if (i = r.value, o = new URL(i.url, self.location.href), e.host === o.host) return [2, i]
                                } catch (u) {
                                    s = {
                                        error: u
                                    }
                                } finally {
                                    try {
                                        r && !r.done && (a = n.return) && a.call(n)
                                    } finally {
                                        if (s) throw s.error
                                    }
                                }
                                return [2, null]
                        }
                    })
                })
            }

            function Tn(e, t) {
                var n, r;
                t.isFirebaseMessaging = !0, t.messageType = M.PUSH_RECEIVED;
                try {
                    for (var i = Y(e), o = i.next(); !o.done; o = i.next()) o.value.postMessage(t)
                } catch (a) {
                    n = {
                        error: a
                    }
                } finally {
                    try {
                        o && !o.done && (r = i.return) && r.call(i)
                    } finally {
                        if (n) throw n.error
                    }
                }
            }

            function et() {
                return self.clients.matchAll({
                    type: "window",
                    includeUncontrolled: !0
                })
            }

            function In(e) {
                var t, n = e.actions,
                    r = Notification.maxActions;
                return n && r && n.length > r && console.warn("This browser only supports " + r + " actions. The remaining actions will not be displayed."), self.registration.showNotification(null !== (t = e.title) && void 0 !== t ? t : "", e)
            }
            var En = function() {
                function e(t) {
                    var n = this;
                    this.firebaseDependencies = t, this.vapidKey = null, this.onMessageCallback = null, navigator.serviceWorker.addEventListener("message", function(r) {
                        return n.messageEventListener(r)
                    })
                }
                return Object.defineProperty(e.prototype, "app", {
                    get: function() {
                        return this.firebaseDependencies.app
                    },
                    enumerable: !1,
                    configurable: !0
                }), e.prototype.messageEventListener = function(t) {
                    return w(this, void 0, void 0, function() {
                        var n, r;
                        return m(this, function(i) {
                            switch (i.label) {
                                case 0:
                                    return (n = t.data).isFirebaseMessaging ? (this.onMessageCallback && n.messageType === M.PUSH_RECEIVED && ("function" == typeof this.onMessageCallback ? this.onMessageCallback(function Pn(e) {
                                        return delete e.messageType, delete e.isFirebaseMessaging, e
                                    }(Object.assign({}, n))) : this.onMessageCallback.next(Object.assign({}, n))), Ze(r = n.data) && "1" === r["google.c.a.e"] ? [4, this.logEvent(n.messageType, r)] : [3, 2]) : [2];
                                case 1:
                                    i.sent(), i.label = 2;
                                case 2:
                                    return [2]
                            }
                        })
                    })
                }, e.prototype.getVapidKey = function() {
                    return this.vapidKey
                }, e.prototype.getSwReg = function() {
                    return this.swRegistration
                }, e.prototype.getToken = function(t) {
                    return w(this, void 0, void 0, function() {
                        return m(this, function(n) {
                            switch (n.label) {
                                case 0:
                                    return "default" !== Notification.permission ? [3, 2] : [4, Notification.requestPermission()];
                                case 1:
                                    n.sent(), n.label = 2;
                                case 2:
                                    if ("granted" !== Notification.permission) throw y.create("permission-blocked");
                                    return [4, this.updateVapidKey(null == t ? void 0 : t.vapidKey)];
                                case 3:
                                    return n.sent(), [4, this.updateSwReg(null == t ? void 0 : t.serviceWorkerRegistration)];
                                case 4:
                                    return n.sent(), [2, Ee(this.firebaseDependencies, this.swRegistration, this.vapidKey)]
                            }
                        })
                    })
                }, e.prototype.updateVapidKey = function(t) {
                    return w(this, void 0, void 0, function() {
                        return m(this, function(n) {
                            return t ? this.vapidKey = t : this.vapidKey || (this.vapidKey = te), [2]
                        })
                    })
                }, e.prototype.updateSwReg = function(t) {
                    return w(this, void 0, void 0, function() {
                        return m(this, function(n) {
                            switch (n.label) {
                                case 0:
                                    return t || this.swRegistration ? [3, 2] : [4, this.registerDefaultSw()];
                                case 1:
                                    n.sent(), n.label = 2;
                                case 2:
                                    if (!t && this.swRegistration) return [2];
                                    if (!(t instanceof ServiceWorkerRegistration)) throw y.create("invalid-sw-registration");
                                    return this.swRegistration = t, [2]
                            }
                        })
                    })
                }, e.prototype.registerDefaultSw = function() {
                    return w(this, void 0, void 0, function() {
                        var t, n;
                        return m(this, function(r) {
                            switch (r.label) {
                                case 0:
                                    return r.trys.push([0, 2, , 3]), t = this, [4, navigator.serviceWorker.register("/firebase-messaging-sw.js", {
                                        scope: "/firebase-cloud-messaging-push-scope"
                                    })];
                                case 1:
                                    return t.swRegistration = r.sent(), this.swRegistration.update().catch(function() {}), [3, 3];
                                case 2:
                                    throw n = r.sent(), y.create("failed-service-worker-registration", {
                                        browserErrorMessage: n.message
                                    });
                                case 3:
                                    return [2]
                            }
                        })
                    })
                }, e.prototype.deleteToken = function() {
                    return w(this, void 0, void 0, function() {
                        return m(this, function(t) {
                            switch (t.label) {
                                case 0:
                                    return this.swRegistration ? [3, 2] : [4, this.registerDefaultSw()];
                                case 1:
                                    t.sent(), t.label = 2;
                                case 2:
                                    return [2, X(this.firebaseDependencies, this.swRegistration)]
                            }
                        })
                    })
                }, e.prototype.requestPermission = function() {
                    return w(this, void 0, void 0, function() {
                        var t;
                        return m(this, function(n) {
                            switch (n.label) {
                                case 0:
                                    return "granted" === Notification.permission ? [2] : [4, Notification.requestPermission()];
                                case 1:
                                    if ("granted" === (t = n.sent())) return [2];
                                    throw y.create("denied" === t ? "permission-blocked" : "permission-default")
                            }
                        })
                    })
                }, e.prototype.usePublicVapidKey = function(t) {
                    if (null !== this.vapidKey) throw y.create("use-vapid-key-after-get-token");
                    if ("string" != typeof t || 0 === t.length) throw y.create("invalid-vapid-key");
                    this.vapidKey = t
                }, e.prototype.useServiceWorker = function(t) {
                    if (!(t instanceof ServiceWorkerRegistration)) throw y.create("invalid-sw-registration");
                    if (this.swRegistration) throw y.create("use-sw-after-get-token");
                    this.swRegistration = t
                }, e.prototype.onMessage = function(t) {
                    var n = this;
                    return this.onMessageCallback = t,
                        function() {
                            n.onMessageCallback = null
                        }
                }, e.prototype.setBackgroundMessageHandler = function() {
                    throw y.create("only-available-in-sw")
                }, e.prototype.onBackgroundMessage = function() {
                    throw y.create("only-available-in-sw")
                }, e.prototype.onTokenRefresh = function() {
                    return function() {}
                }, e.prototype.logEvent = function(t, n) {
                    return w(this, void 0, void 0, function() {
                        var r;
                        return m(this, function(o) {
                            switch (o.label) {
                                case 0:
                                    return r = function Cn(e) {
                                        switch (e) {
                                            case M.NOTIFICATION_CLICKED:
                                                return "notification_open";
                                            case M.PUSH_RECEIVED:
                                                return "notification_foreground";
                                            default:
                                                throw new Error
                                        }
                                    }(t), [4, this.firebaseDependencies.analyticsProvider.get()];
                                case 1:
                                    return o.sent().logEvent(r, {
                                        message_id: n[Je],
                                        message_name: n["google.c.a.c_l"],
                                        message_time: n["google.c.a.ts"],
                                        message_device_time: Math.floor(Date.now() / 1e3)
                                    }), [2]
                            }
                        })
                    })
                }, e
            }();

            function Ce(e) {
                return y.create("missing-app-config-values", {
                    valueName: e
                })
            }
            var Dn = {
                isSupported: tt
            };

            function tt() {
                return self && "ServiceWorkerGlobalScope" in self ? function Mn() {
                    return "indexedDB" in self && null !== indexedDB && "PushManager" in self && "Notification" in self && ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification") && PushSubscription.prototype.hasOwnProperty("getKey")
                }() : function jn() {
                    return "indexedDB" in window && null !== indexedDB && navigator.cookieEnabled && "serviceWorker" in navigator && "PushManager" in window && "Notification" in window && "fetch" in window && ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification") && PushSubscription.prototype.hasOwnProperty("getKey")
                }()
            }
            V.default.INTERNAL.registerComponent(new H.Component("messaging", function xn(e) {
                var t = e.getProvider("app").getImmediate(),
                    n = function An(e) {
                        var t, n;
                        if (!e || !e.options) throw Ce("App Configuration Object");
                        if (!e.name) throw Ce("App Name");
                        var i = e.options;
                        try {
                            for (var o = Y(["projectId", "apiKey", "appId", "messagingSenderId"]), s = o.next(); !s.done; s = o.next()) {
                                var a = s.value;
                                if (!i[a]) throw Ce(a)
                            }
                        } catch (c) {
                            t = {
                                error: c
                            }
                        } finally {
                            try {
                                s && !s.done && (n = o.return) && n.call(o)
                            } finally {
                                if (t) throw t.error
                            }
                        }
                        return {
                            appName: e.name,
                            projectId: i.projectId,
                            apiKey: i.apiKey,
                            appId: i.appId,
                            senderId: i.messagingSenderId
                        }
                    }(t),
                    o = {
                        app: t,
                        appConfig: n,
                        installations: e.getProvider("installations").getImmediate(),
                        analyticsProvider: e.getProvider("analytics-internal")
                    };
                if (!tt()) throw y.create("unsupported-browser");
                return self && "ServiceWorkerGlobalScope" in self ? new bn(o) : new En(o)
            }, "PUBLIC").setServiceProps(Dn))
        },
        2940: function(nt, re) {
            ! function(C) {
                "use strict";

                function V(l) {
                    return Array.prototype.slice.call(l)
                }

                function H(l) {
                    return new Promise(function(p, v) {
                        l.onsuccess = function() {
                            p(l.result)
                        }, l.onerror = function() {
                            v(l.error)
                        }
                    })
                }

                function x(l, p, v) {
                    var b, h = new Promise(function(E, F) {
                        H(b = l[p].apply(l, v)).then(E, F)
                    });
                    return h.request = b, h
                }

                function Ae(l, p, v) {
                    var b = x(l, p, v);
                    return b.then(function(h) {
                        if (h) return new S(h, b.request)
                    })
                }

                function I(l, p, v) {
                    v.forEach(function(b) {
                        Object.defineProperty(l.prototype, b, {
                            get: function() {
                                return this[p][b]
                            },
                            set: function(h) {
                                this[p][b] = h
                            }
                        })
                    })
                }

                function Q(l, p, v, b) {
                    b.forEach(function(h) {
                        h in v.prototype && (l.prototype[h] = function() {
                            return x(this[p], h, arguments)
                        })
                    })
                }

                function G(l, p, v, b) {
                    b.forEach(function(h) {
                        h in v.prototype && (l.prototype[h] = function() {
                            return this[p][h].apply(this[p], arguments)
                        })
                    })
                }

                function ie(l, p, v, b) {
                    b.forEach(function(h) {
                        h in v.prototype && (l.prototype[h] = function() {
                            return Ae(this[p], h, arguments)
                        })
                    })
                }

                function D(l) {
                    this._index = l
                }

                function S(l, p) {
                    this._cursor = l, this._request = p
                }

                function g(l) {
                    this._store = l
                }

                function B(l) {
                    this._tx = l, this.complete = new Promise(function(p, v) {
                        l.oncomplete = function() {
                            p()
                        }, l.onerror = function() {
                            v(l.error)
                        }, l.onabort = function() {
                            v(l.error)
                        }
                    })
                }

                function $(l, p, v) {
                    this._db = l, this.oldVersion = p, this.transaction = new B(v)
                }

                function P(l) {
                    this._db = l
                }
                I(D, "_index", ["name", "keyPath", "multiEntry", "unique"]), Q(D, "_index", IDBIndex, ["get", "getKey", "getAll", "getAllKeys", "count"]), ie(D, "_index", IDBIndex, ["openCursor", "openKeyCursor"]), I(S, "_cursor", ["direction", "key", "primaryKey", "value"]), Q(S, "_cursor", IDBCursor, ["update", "delete"]), ["advance", "continue", "continuePrimaryKey"].forEach(function(l) {
                    l in IDBCursor.prototype && (S.prototype[l] = function() {
                        var p = this,
                            v = arguments;
                        return Promise.resolve().then(function() {
                            return p._cursor[l].apply(p._cursor, v), H(p._request).then(function(b) {
                                if (b) return new S(b, p._request)
                            })
                        })
                    })
                }), g.prototype.createIndex = function() {
                    return new D(this._store.createIndex.apply(this._store, arguments))
                }, g.prototype.index = function() {
                    return new D(this._store.index.apply(this._store, arguments))
                }, I(g, "_store", ["name", "keyPath", "indexNames", "autoIncrement"]), Q(g, "_store", IDBObjectStore, ["put", "add", "delete", "clear", "get", "getAll", "getKey", "getAllKeys", "count"]), ie(g, "_store", IDBObjectStore, ["openCursor", "openKeyCursor"]), G(g, "_store", IDBObjectStore, ["deleteIndex"]), B.prototype.objectStore = function() {
                    return new g(this._tx.objectStore.apply(this._tx, arguments))
                }, I(B, "_tx", ["objectStoreNames", "mode"]), G(B, "_tx", IDBTransaction, ["abort"]), $.prototype.createObjectStore = function() {
                    return new g(this._db.createObjectStore.apply(this._db, arguments))
                }, I($, "_db", ["name", "version", "objectStoreNames"]), G($, "_db", IDBDatabase, ["deleteObjectStore", "close"]), P.prototype.transaction = function() {
                    return new B(this._db.transaction.apply(this._db, arguments))
                }, I(P, "_db", ["name", "version", "objectStoreNames"]), G(P, "_db", IDBDatabase, ["close"]), ["openCursor", "openKeyCursor"].forEach(function(l) {
                    [g, D].forEach(function(p) {
                        l in p.prototype && (p.prototype[l.replace("open", "iterate")] = function() {
                            var v = V(arguments),
                                b = v[v.length - 1],
                                h = this._store || this._index,
                                E = h[l].apply(h, v.slice(0, -1));
                            E.onsuccess = function() {
                                b(E.result)
                            }
                        })
                    })
                }), [D, g].forEach(function(l) {
                    l.prototype.getAll || (l.prototype.getAll = function(p, v) {
                        var b = this,
                            h = [];
                        return new Promise(function(E) {
                            b.iterateCursor(p, function(F) {
                                F ? (h.push(F.value), void 0 === v || h.length != v ? F.continue() : E(h)) : E(h)
                            })
                        })
                    })
                }), C.openDb = function oe(l, p, v) {
                    var b = x(indexedDB, "open", [l, p]),
                        h = b.request;
                    return h && (h.onupgradeneeded = function(E) {
                        v && v(new $(h.result, E.oldVersion, h.transaction))
                    }), b.then(function(E) {
                        return new P(E)
                    })
                }, C.deleteDb = function se(l) {
                    return x(indexedDB, "deleteDatabase", [l])
                }, Object.defineProperty(C, "__esModule", {
                    value: !0
                })
            }(re)
        }
    }
]);