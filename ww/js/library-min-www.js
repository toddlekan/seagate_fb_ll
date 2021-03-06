 /*! jQuery v1.9.1 | (c) 2005, 2012 jQuery Foundation, Inc. | jquery.org/license
//@ sourceMappingURL=jquery.min.map
*/
(function(e, t) {
    var n, r, i = typeof t, o = e.document, a = e.location, s = e.jQuery, u = e.$, l = {}, c = [], p = "1.9.1", f = c.concat, d = c.push, h = c.slice, g = c.indexOf, m = l.toString, y = l.hasOwnProperty, v = p.trim, b = function(e, t) {
        return new b.fn.init(e, t, r);
    }, x = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, w = /\S+/g, T = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, N = /^(?:(<[\w\W]+>)[^>]*|#([\w-]*))$/, C = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, k = /^[\],:{}\s]*$/, E = /(?:^|:|,)(?:\s*\[)+/g, S = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g, A = /"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g, j = /^-ms-/, D = /-([\da-z])/gi, L = function(e, t) {
        return t.toUpperCase();
    }, H = function(e) {
        (o.addEventListener || "load" === e.type || "complete" === o.readyState) && (q(), b.ready());
    }, q = function() {
        o.addEventListener ? (o.removeEventListener("DOMContentLoaded", H, !1), e.removeEventListener("load", H, !1)) : (o.detachEvent("onreadystatechange", H), e.detachEvent("onload", H));
    };
    b.fn = b.prototype = {jquery: p,constructor: b,init: function(e, n, r) {
            var i, a;
            if (!e) {
                return this;
            }
            if ("string" == typeof e) {
                if (i = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [null, e, null] : N.exec(e), !i || !i[1] && n) {
                    return !n || n.jquery ? (n || r).find(e) : this.constructor(n).find(e);
                }
                if (i[1]) {
                    if (n = n instanceof b ? n[0] : n, b.merge(this, b.parseHTML(i[1], n && n.nodeType ? n.ownerDocument || n : o, !0)), C.test(i[1]) && b.isPlainObject(n)) {
                        for (i in n) {
                            b.isFunction(this[i]) ? this[i](n[i]) : this.attr(i, n[i]);
                        }
                    }
                    return this;
                }
                if (a = o.getElementById(i[2]), a && a.parentNode) {
                    if (a.id !== i[2]) {
                        return r.find(e);
                    }
                    this.length = 1, this[0] = a;
                }
                return this.context = o, this.selector = e, this;
            }
            return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : b.isFunction(e) ? r.ready(e) : (e.selector !== t && (this.selector = e.selector, this.context = e.context), b.makeArray(e, this));
        },selector: "",length: 0,size: function() {
            return this.length;
        },toArray: function() {
            return h.call(this);
        },get: function(e) {
            return null == e ? this.toArray() : 0 > e ? this[this.length + e] : this[e];
        },pushStack: function(e) {
            var t = b.merge(this.constructor(), e);
            return t.prevObject = this, t.context = this.context, t;
        },each: function(e, t) {
            return b.each(this, e, t);
        },ready: function(e) {
            return b.ready.promise().done(e), this;
        },slice: function() {
            return this.pushStack(h.apply(this, arguments));
        },first: function() {
            return this.eq(0);
        },last: function() {
            return this.eq(-1);
        },eq: function(e) {
            var t = this.length, n = +e + (0 > e ? t : 0);
            return this.pushStack(n >= 0 && t > n ? [this[n]] : []);
        },map: function(e) {
            return this.pushStack(b.map(this, function(t, n) {
                return e.call(t, n, t);
            }));
        },end: function() {
            return this.prevObject || this.constructor(null);
        },push: d,sort: [].sort,splice: [].splice}, b.fn.init.prototype = b.fn, b.extend = b.fn.extend = function() {
        var e, n, r, i, o, a, s = arguments[0] || {}, u = 1, l = arguments.length, c = !1;
        for ("boolean" == typeof s && (c = s, s = arguments[1] || {}, u = 2), "object" == typeof s || b.isFunction(s) || (s = {}), l === u && (s = this, --u); l > u; u++) {
            if (null != (o = arguments[u])) {
                for (i in o) {
                    e = s[i], r = o[i], s !== r && (c && r && (b.isPlainObject(r) || (n = b.isArray(r))) ? (n ? (n = !1, a = e && b.isArray(e) ? e : []) : a = e && b.isPlainObject(e) ? e : {}, s[i] = b.extend(c, a, r)) : r !== t && (s[i] = r));
                }
            }
        }
        return s;
    }, b.extend({noConflict: function(t) {
            return e.$ === b && (e.$ = u), t && e.jQuery === b && (e.jQuery = s), b;
        },isReady: !1,readyWait: 1,holdReady: function(e) {
            e ? b.readyWait++ : b.ready(!0);
        },ready: function(e) {
            if (e === !0 ? !--b.readyWait : !b.isReady) {
                if (!o.body) {
                    return setTimeout(b.ready);
                }
                b.isReady = !0, e !== !0 && --b.readyWait > 0 || (n.resolveWith(o, [b]), b.fn.trigger && b(o).trigger("ready").off("ready"));
            }
        },isFunction: function(e) {
            return "function" === b.type(e);
        },isArray: Array.isArray || function(e) {
            return "array" === b.type(e);
        },isWindow: function(e) {
            return null != e && e == e.window;
        },isNumeric: function(e) {
            return !isNaN(parseFloat(e)) && isFinite(e);
        },type: function(e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? l[m.call(e)] || "object" : typeof e;
        },isPlainObject: function(e) {
            if (!e || "object" !== b.type(e) || e.nodeType || b.isWindow(e)) {
                return !1;
            }
            try {
                if (e.constructor && !y.call(e, "constructor") && !y.call(e.constructor.prototype, "isPrototypeOf")) {
                    return !1;
                }
            } catch (n) {
                return !1;
            }
            var r;
            for (r in e) {
            }
            return r === t || y.call(e, r);
        },isEmptyObject: function(e) {
            var t;
            for (t in e) {
                return !1;
            }
            return !0;
        },error: function(e) {
            throw Error(e);
        },parseHTML: function(e, t, n) {
            if (!e || "string" != typeof e) {
                return null;
            }
            "boolean" == typeof t && (n = t, t = !1), t = t || o;
            var r = C.exec(e), i = !n && [];
            return r ? [t.createElement(r[1])] : (r = b.buildFragment([e], t, i), i && b(i).remove(), b.merge([], r.childNodes));
        },parseJSON: function(n) {
            return e.JSON && e.JSON.parse ? e.JSON.parse(n) : null === n ? n : "string" == typeof n && (n = b.trim(n), n && k.test(n.replace(S, "@").replace(A, "]").replace(E, ""))) ? Function("return " + n)() : (b.error("Invalid JSON: " + n), t);
        },parseXML: function(n) {
            var r, i;
            if (!n || "string" != typeof n) {
                return null;
            }
            try {
                e.DOMParser ? (i = new DOMParser, r = i.parseFromString(n, "text/xml")) : (r = new ActiveXObject("Microsoft.XMLDOM"), r.async = "false", r.loadXML(n));
            } catch (o) {
                r = t;
            }
            return r && r.documentElement && !r.getElementsByTagName("parsererror").length || b.error("Invalid XML: " + n), r;
        },noop: function() {
        },globalEval: function(t) {
            t && b.trim(t) && (e.execScript || function(t) {
                e.eval.call(e, t);
            })(t);
        },camelCase: function(e) {
            return e.replace(j, "ms-").replace(D, L);
        },nodeName: function(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
        },each: function(e, t, n) {
            var r, i = 0, o = e.length, a = M(e);
            if (n) {
                if (a) {
                    for (; o > i; i++) {
                        if (r = t.apply(e[i], n), r === !1) {
                            break;
                        }
                    }
                } else {
                    for (i in e) {
                        if (r = t.apply(e[i], n), r === !1) {
                            break;
                        }
                    }
                }
            } else {
                if (a) {
                    for (; o > i; i++) {
                        if (r = t.call(e[i], i, e[i]), r === !1) {
                            break;
                        }
                    }
                } else {
                    for (i in e) {
                        if (r = t.call(e[i], i, e[i]), r === !1) {
                            break;
                        }
                    }
                }
            }
            return e;
        },trim: v && !v.call("\ufeff\u00a0") ? function(e) {
            return null == e ? "" : v.call(e);
        } : function(e) {
            return null == e ? "" : (e + "").replace(T, "");
        },makeArray: function(e, t) {
            var n = t || [];
            return null != e && (M(Object(e)) ? b.merge(n, "string" == typeof e ? [e] : e) : d.call(n, e)), n;
        },inArray: function(e, t, n) {
            var r;
            if (t) {
                if (g) {
                    return g.call(t, e, n);
                }
                for (r = t.length, n = n ? 0 > n ? Math.max(0, r + n) : n : 0; r > n; n++) {
                    if (n in t && t[n] === e) {
                        return n;
                    }
                }
            }
            return -1;
        },merge: function(e, n) {
            var r = n.length, i = e.length, o = 0;
            if ("number" == typeof r) {
                for (; r > o; o++) {
                    e[i++] = n[o];
                }
            } else {
                while (n[o] !== t) {
                    e[i++] = n[o++];
                }
            }
            return e.length = i, e;
        },grep: function(e, t, n) {
            var r, i = [], o = 0, a = e.length;
            for (n = !!n; a > o; o++) {
                r = !!t(e[o], o), n !== r && i.push(e[o]);
            }
            return i;
        },map: function(e, t, n) {
            var r, i = 0, o = e.length, a = M(e), s = [];
            if (a) {
                for (; o > i; i++) {
                    r = t(e[i], i, n), null != r && (s[s.length] = r);
                }
            } else {
                for (i in e) {
                    r = t(e[i], i, n), null != r && (s[s.length] = r);
                }
            }
            return f.apply([], s);
        },guid: 1,proxy: function(e, n) {
            var r, i, o;
            return "string" == typeof n && (o = e[n], n = e, e = o), b.isFunction(e) ? (r = h.call(arguments, 2), i = function() {
                return e.apply(n || this, r.concat(h.call(arguments)));
            }, i.guid = e.guid = e.guid || b.guid++, i) : t;
        },access: function(e, n, r, i, o, a, s) {
            var u = 0, l = e.length, c = null == r;
            if ("object" === b.type(r)) {
                o = !0;
                for (u in r) {
                    b.access(e, n, u, r[u], !0, a, s);
                }
            } else {
                if (i !== t && (o = !0, b.isFunction(i) || (s = !0), c && (s ? (n.call(e, i), n = null) : (c = n, n = function(e, t, n) {
                    return c.call(b(e), n);
                })), n)) {
                    for (; l > u; u++) {
                        n(e[u], r, s ? i : i.call(e[u], u, n(e[u], r)));
                    }
                }
            }
            return o ? e : c ? n.call(e) : l ? n(e[0], r) : a;
        },now: function() {
            return (new Date).getTime();
        }}), b.ready.promise = function(t) {
        if (!n) {
            if (n = b.Deferred(), "complete" === o.readyState) {
                setTimeout(b.ready);
            } else {
                if (o.addEventListener) {
                    o.addEventListener("DOMContentLoaded", H, !1), e.addEventListener("load", H, !1);
                } else {
                    o.attachEvent("onreadystatechange", H), e.attachEvent("onload", H);
                    var r = !1;
                    try {
                        r = null == e.frameElement && o.documentElement;
                    } catch (i) {
                    }
                    r && r.doScroll && function a() {
                        if (!b.isReady) {
                            try {
                                r.doScroll("left");
                            } catch (e) {
                                return setTimeout(a, 50);
                            }
                            q(), b.ready();
                        }
                    }();
                }
            }
        }
        return n.promise(t);
    }, b.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(e, t) {
        l["[object " + t + "]"] = t.toLowerCase();
    });
    function M(e) {
        var t = e.length, n = b.type(e);
        return b.isWindow(e) ? !1 : 1 === e.nodeType && t ? !0 : "array" === n || "function" !== n && (0 === t || "number" == typeof t && t > 0 && t - 1 in e);
    }
    r = b(o);
    var _ = {};
    function F(e) {
        var t = _[e] = {};
        return b.each(e.match(w) || [], function(e, n) {
            t[n] = !0;
        }), t;
    }
    b.Callbacks = function(e) {
        e = "string" == typeof e ? _[e] || F(e) : b.extend({}, e);
        var n, r, i, o, a, s, u = [], l = !e.once && [], c = function(t) {
            for (r = e.memory && t, i = !0, a = s || 0, s = 0, o = u.length, n = !0; u && o > a; a++) {
                if (u[a].apply(t[0], t[1]) === !1 && e.stopOnFalse) {
                    r = !1;
                    break;
                }
            }
            n = !1, u && (l ? l.length && c(l.shift()) : r ? u = [] : p.disable());
        }, p = {add: function() {
                if (u) {
                    var t = u.length;
                    (function i(t) {
                        b.each(t, function(t, n) {
                            var r = b.type(n);
                            "function" === r ? e.unique && p.has(n) || u.push(n) : n && n.length && "string" !== r && i(n);
                        });
                    })(arguments), n ? o = u.length : r && (s = t, c(r));
                }
                return this;
            },remove: function() {
                return u && b.each(arguments, function(e, t) {
                    var r;
                    while ((r = b.inArray(t, u, r)) > -1) {
                        u.splice(r, 1), n && (o >= r && o--, a >= r && a--);
                    }
                }), this;
            },has: function(e) {
                return e ? b.inArray(e, u) > -1 : !(!u || !u.length);
            },empty: function() {
                return u = [], this;
            },disable: function() {
                return u = l = r = t, this;
            },disabled: function() {
                return !u;
            },lock: function() {
                return l = t, r || p.disable(), this;
            },locked: function() {
                return !l;
            },fireWith: function(e, t) {
                return t = t || [], t = [e, t.slice ? t.slice() : t], !u || i && !l || (n ? l.push(t) : c(t)), this;
            },fire: function() {
                return p.fireWith(this, arguments), this;
            },fired: function() {
                return !!i;
            }};
        return p;
    }, b.extend({Deferred: function(e) {
            var t = [["resolve", "done", b.Callbacks("once memory"), "resolved"], ["reject", "fail", b.Callbacks("once memory"), "rejected"], ["notify", "progress", b.Callbacks("memory")]], n = "pending", r = {state: function() {
                    return n;
                },always: function() {
                    return i.done(arguments).fail(arguments), this;
                },then: function() {
                    var e = arguments;
                    return b.Deferred(function(n) {
                        b.each(t, function(t, o) {
                            var a = o[0], s = b.isFunction(e[t]) && e[t];
                            i[o[1]](function() {
                                var e = s && s.apply(this, arguments);
                                e && b.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[a + "With"](this === r ? n.promise() : this, s ? [e] : arguments);
                            });
                        }), e = null;
                    }).promise();
                },promise: function(e) {
                    return null != e ? b.extend(e, r) : r;
                }}, i = {};
            return r.pipe = r.then, b.each(t, function(e, o) {
                var a = o[2], s = o[3];
                r[o[1]] = a.add, s && a.add(function() {
                    n = s;
                }, t[1 ^ e][2].disable, t[2][2].lock), i[o[0]] = function() {
                    return i[o[0] + "With"](this === i ? r : this, arguments), this;
                }, i[o[0] + "With"] = a.fireWith;
            }), r.promise(i), e && e.call(i, i), i;
        },when: function(e) {
            var t = 0, n = h.call(arguments), r = n.length, i = 1 !== r || e && b.isFunction(e.promise) ? r : 0, o = 1 === i ? e : b.Deferred(), a = function(e, t, n) {
                return function(r) {
                    t[e] = this, n[e] = arguments.length > 1 ? h.call(arguments) : r, n === s ? o.notifyWith(t, n) : --i || o.resolveWith(t, n);
                };
            }, s, u, l;
            if (r > 1) {
                for (s = Array(r), u = Array(r), l = Array(r); r > t; t++) {
                    n[t] && b.isFunction(n[t].promise) ? n[t].promise().done(a(t, l, n)).fail(o.reject).progress(a(t, u, s)) : --i;
                }
            }
            return i || o.resolveWith(l, n), o.promise();
        }}), b.support = function() {
        var t, n, r, a, s, u, l, c, p, f, d = o.createElement("div");
        if (d.setAttribute("className", "t"), d.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", n = d.getElementsByTagName("*"), r = d.getElementsByTagName("a")[0], !n || !r || !n.length) {
            return {};
        }
        s = o.createElement("select"), l = s.appendChild(o.createElement("option")), a = d.getElementsByTagName("input")[0], r.style.cssText = "top:1px;float:left;opacity:.5", t = {getSetAttribute: "t" !== d.className,leadingWhitespace: 3 === d.firstChild.nodeType,tbody: !d.getElementsByTagName("tbody").length,htmlSerialize: !!d.getElementsByTagName("link").length,style: /top/.test(r.getAttribute("style")),hrefNormalized: "/a" === r.getAttribute("href"),opacity: /^0.5/.test(r.style.opacity),cssFloat: !!r.style.cssFloat,checkOn: !!a.value,optSelected: l.selected,enctype: !!o.createElement("form").enctype,html5Clone: "<:nav></:nav>" !== o.createElement("nav").cloneNode(!0).outerHTML,boxModel: "CSS1Compat" === o.compatMode,deleteExpando: !0,noCloneEvent: !0,inlineBlockNeedsLayout: !1,shrinkWrapBlocks: !1,reliableMarginRight: !0,boxSizingReliable: !0,pixelPosition: !1}, a.checked = !0, t.noCloneChecked = a.cloneNode(!0).checked, s.disabled = !0, t.optDisabled = !l.disabled;
        try {
            delete d.test;
        } catch (h) {
            t.deleteExpando = !1;
        }
        a = o.createElement("input"), a.setAttribute("value", ""), t.input = "" === a.getAttribute("value"), a.value = "t", a.setAttribute("type", "radio"), t.radioValue = "t" === a.value, a.setAttribute("checked", "t"), a.setAttribute("name", "t"), u = o.createDocumentFragment(), u.appendChild(a), t.appendChecked = a.checked, t.checkClone = u.cloneNode(!0).cloneNode(!0).lastChild.checked, d.attachEvent && (d.attachEvent("onclick", function() {
            t.noCloneEvent = !1;
        }), d.cloneNode(!0).click());
        for (f in {submit: !0,change: !0,focusin: !0}) {
            d.setAttribute(c = "on" + f, "t"), t[f + "Bubbles"] = c in e || d.attributes[c].expando === !1;
        }
        return d.style.backgroundClip = "content-box", d.cloneNode(!0).style.backgroundClip = "", t.clearCloneStyle = "content-box" === d.style.backgroundClip, b(function() {
            var n, r, a, s = "padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;", u = o.getElementsByTagName("body")[0];
            u && (n = o.createElement("div"), n.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px", u.appendChild(n).appendChild(d), d.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", a = d.getElementsByTagName("td"), a[0].style.cssText = "padding:0;margin:0;border:0;display:none", p = 0 === a[0].offsetHeight, a[0].style.display = "", a[1].style.display = "none", t.reliableHiddenOffsets = p && 0 === a[0].offsetHeight, d.innerHTML = "", d.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;", t.boxSizing = 4 === d.offsetWidth, t.doesNotIncludeMarginInBodyOffset = 1 !== u.offsetTop, e.getComputedStyle && (t.pixelPosition = "1%" !== (e.getComputedStyle(d, null) || {}).top, t.boxSizingReliable = "4px" === (e.getComputedStyle(d, null) || {width: "4px"}).width, r = d.appendChild(o.createElement("div")), r.style.cssText = d.style.cssText = s, r.style.marginRight = r.style.width = "0", d.style.width = "1px", t.reliableMarginRight = !parseFloat((e.getComputedStyle(r, null) || {}).marginRight)), typeof d.style.zoom !== i && (d.innerHTML = "", d.style.cssText = s + "width:1px;padding:1px;display:inline;zoom:1", t.inlineBlockNeedsLayout = 3 === d.offsetWidth, d.style.display = "block", d.innerHTML = "<div></div>", d.firstChild.style.width = "5px", t.shrinkWrapBlocks = 3 !== d.offsetWidth, t.inlineBlockNeedsLayout && (u.style.zoom = 1)), u.removeChild(n), n = d = a = r = null);
        }), n = s = u = l = r = a = null, t;
    }();
    var O = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/, B = /([A-Z])/g;
    function P(e, n, r, i) {
        if (b.acceptData(e)) {
            var o, a, s = b.expando, u = "string" == typeof n, l = e.nodeType, p = l ? b.cache : e, f = l ? e[s] : e[s] && s;
            if (f && p[f] && (i || p[f].data) || !u || r !== t) {
                return f || (l ? e[s] = f = c.pop() || b.guid++ : f = s), p[f] || (p[f] = {}, l || (p[f].toJSON = b.noop)), ("object" == typeof n || "function" == typeof n) && (i ? p[f] = b.extend(p[f], n) : p[f].data = b.extend(p[f].data, n)), o = p[f], i || (o.data || (o.data = {}), o = o.data), r !== t && (o[b.camelCase(n)] = r), u ? (a = o[n], null == a && (a = o[b.camelCase(n)])) : a = o, a;
            }
        }
    }
    function R(e, t, n) {
        if (b.acceptData(e)) {
            var r, i, o, a = e.nodeType, s = a ? b.cache : e, u = a ? e[b.expando] : b.expando;
            if (s[u]) {
                if (t && (o = n ? s[u] : s[u].data)) {
                    b.isArray(t) ? t = t.concat(b.map(t, b.camelCase)) : t in o ? t = [t] : (t = b.camelCase(t), t = t in o ? [t] : t.split(" "));
                    for (r = 0, i = t.length; i > r; r++) {
                        delete o[t[r]];
                    }
                    if (!(n ? $ : b.isEmptyObject)(o)) {
                        return;
                    }
                }
                (n || (delete s[u].data, $(s[u]))) && (a ? b.cleanData([e], !0) : b.support.deleteExpando || s != s.window ? delete s[u] : s[u] = null);
            }
        }
    }
    b.extend({cache: {},expando: "jQuery" + (p + Math.random()).replace(/\D/g, ""),noData: {embed: !0,object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",applet: !0},hasData: function(e) {
            return e = e.nodeType ? b.cache[e[b.expando]] : e[b.expando], !!e && !$(e);
        },data: function(e, t, n) {
            return P(e, t, n);
        },removeData: function(e, t) {
            return R(e, t);
        },_data: function(e, t, n) {
            return P(e, t, n, !0);
        },_removeData: function(e, t) {
            return R(e, t, !0);
        },acceptData: function(e) {
            if (e.nodeType && 1 !== e.nodeType && 9 !== e.nodeType) {
                return !1;
            }
            var t = e.nodeName && b.noData[e.nodeName.toLowerCase()];
            return !t || t !== !0 && e.getAttribute("classid") === t;
        }}), b.fn.extend({data: function(e, n) {
            var r, i, o = this[0], a = 0, s = null;
            if (e === t) {
                if (this.length && (s = b.data(o), 1 === o.nodeType && !b._data(o, "parsedAttrs"))) {
                    for (r = o.attributes; r.length > a; a++) {
                        i = r[a].name, i.indexOf("data-") || (i = b.camelCase(i.slice(5)), W(o, i, s[i]));
                    }
                    b._data(o, "parsedAttrs", !0);
                }
                return s;
            }
            return "object" == typeof e ? this.each(function() {
                b.data(this, e);
            }) : b.access(this, function(n) {
                return n === t ? o ? W(o, e, b.data(o, e)) : null : (this.each(function() {
                    b.data(this, e, n);
                }), t);
            }, null, n, arguments.length > 1, null, !0);
        },removeData: function(e) {
            return this.each(function() {
                b.removeData(this, e);
            });
        }});
    function W(e, n, r) {
        if (r === t && 1 === e.nodeType) {
            var i = "data-" + n.replace(B, "-$1").toLowerCase();
            if (r = e.getAttribute(i), "string" == typeof r) {
                try {
                    r = "true" === r ? !0 : "false" === r ? !1 : "null" === r ? null : +r + "" === r ? +r : O.test(r) ? b.parseJSON(r) : r;
                } catch (o) {
                }
                b.data(e, n, r);
            } else {
                r = t;
            }
        }
        return r;
    }
    function $(e) {
        var t;
        for (t in e) {
            if (("data" !== t || !b.isEmptyObject(e[t])) && "toJSON" !== t) {
                return !1;
            }
        }
        return !0;
    }
    b.extend({queue: function(e, n, r) {
            var i;
            return e ? (n = (n || "fx") + "queue", i = b._data(e, n), r && (!i || b.isArray(r) ? i = b._data(e, n, b.makeArray(r)) : i.push(r)), i || []) : t;
        },dequeue: function(e, t) {
            t = t || "fx";
            var n = b.queue(e, t), r = n.length, i = n.shift(), o = b._queueHooks(e, t), a = function() {
                b.dequeue(e, t);
            };
            "inprogress" === i && (i = n.shift(), r--), o.cur = i, i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, a, o)), !r && o && o.empty.fire();
        },_queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return b._data(e, n) || b._data(e, n, {empty: b.Callbacks("once memory").add(function() {
                    b._removeData(e, t + "queue"), b._removeData(e, n);
                })});
        }}), b.fn.extend({queue: function(e, n) {
            var r = 2;
            return "string" != typeof e && (n = e, e = "fx", r--), r > arguments.length ? b.queue(this[0], e) : n === t ? this : this.each(function() {
                var t = b.queue(this, e, n);
                b._queueHooks(this, e), "fx" === e && "inprogress" !== t[0] && b.dequeue(this, e);
            });
        },dequeue: function(e) {
            return this.each(function() {
                b.dequeue(this, e);
            });
        },delay: function(e, t) {
            return e = b.fx ? b.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function(t, n) {
                var r = setTimeout(t, e);
                n.stop = function() {
                    clearTimeout(r);
                };
            });
        },clearQueue: function(e) {
            return this.queue(e || "fx", []);
        },promise: function(e, n) {
            var r, i = 1, o = b.Deferred(), a = this, s = this.length, u = function() {
                --i || o.resolveWith(a, [a]);
            };
            "string" != typeof e && (n = e, e = t), e = e || "fx";
            while (s--) {
                r = b._data(a[s], e + "queueHooks"), r && r.empty && (i++, r.empty.add(u));
            }
            return u(), o.promise(n);
        }});
    var I, z, X = /[\t\r\n]/g, U = /\r/g, V = /^(?:input|select|textarea|button|object)$/i, Y = /^(?:a|area)$/i, J = /^(?:checked|selected|autofocus|autoplay|async|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped)$/i, G = /^(?:checked|selected)$/i, Q = b.support.getSetAttribute, K = b.support.input;
    b.fn.extend({attr: function(e, t) {
            return b.access(this, b.attr, e, t, arguments.length > 1);
        },removeAttr: function(e) {
            return this.each(function() {
                b.removeAttr(this, e);
            });
        },prop: function(e, t) {
            return b.access(this, b.prop, e, t, arguments.length > 1);
        },removeProp: function(e) {
            return e = b.propFix[e] || e, this.each(function() {
                try {
                    this[e] = t, delete this[e];
                } catch (n) {
                }
            });
        },addClass: function(e) {
            var t, n, r, i, o, a = 0, s = this.length, u = "string" == typeof e && e;
            if (b.isFunction(e)) {
                return this.each(function(t) {
                    b(this).addClass(e.call(this, t, this.className));
                });
            }
            if (u) {
                for (t = (e || "").match(w) || []; s > a; a++) {
                    if (n = this[a], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(X, " ") : " ")) {
                        o = 0;
                        while (i = t[o++]) {
                            0 > r.indexOf(" " + i + " ") && (r += i + " ");
                        }
                        n.className = b.trim(r);
                    }
                }
            }
            return this;
        },removeClass: function(e) {
            var t, n, r, i, o, a = 0, s = this.length, u = 0 === arguments.length || "string" == typeof e && e;
            if (b.isFunction(e)) {
                return this.each(function(t) {
                    b(this).removeClass(e.call(this, t, this.className));
                });
            }
            if (u) {
                for (t = (e || "").match(w) || []; s > a; a++) {
                    if (n = this[a], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(X, " ") : "")) {
                        o = 0;
                        while (i = t[o++]) {
                            while (r.indexOf(" " + i + " ") >= 0) {
                                r = r.replace(" " + i + " ", " ");
                            }
                        }
                        n.className = e ? b.trim(r) : "";
                    }
                }
            }
            return this;
        },toggleClass: function(e, t) {
            var n = typeof e, r = "boolean" == typeof t;
            return b.isFunction(e) ? this.each(function(n) {
                b(this).toggleClass(e.call(this, n, this.className, t), t);
            }) : this.each(function() {
                if ("string" === n) {
                    var o, a = 0, s = b(this), u = t, l = e.match(w) || [];
                    while (o = l[a++]) {
                        u = r ? u : !s.hasClass(o), s[u ? "addClass" : "removeClass"](o);
                    }
                } else {
                    (n === i || "boolean" === n) && (this.className && b._data(this, "__className__", this.className), this.className = this.className || e === !1 ? "" : b._data(this, "__className__") || "");
                }
            });
        },hasClass: function(e) {
            var t = " " + e + " ", n = 0, r = this.length;
            for (; r > n; n++) {
                if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(X, " ").indexOf(t) >= 0) {
                    return !0;
                }
            }
            return !1;
        },val: function(e) {
            var n, r, i, o = this[0];
            if (arguments.length) {
                return i = b.isFunction(e), this.each(function(n) {
                    var o, a = b(this);
                    1 === this.nodeType && (o = i ? e.call(this, n, a.val()) : e, null == o ? o = "" : "number" == typeof o ? o += "" : b.isArray(o) && (o = b.map(o, function(e) {
                        return null == e ? "" : e + "";
                    })), r = b.valHooks[this.type] || b.valHooks[this.nodeName.toLowerCase()], r && "set" in r && r.set(this, o, "value") !== t || (this.value = o));
                });
            }
            if (o) {
                return r = b.valHooks[o.type] || b.valHooks[o.nodeName.toLowerCase()], r && "get" in r && (n = r.get(o, "value")) !== t ? n : (n = o.value, "string" == typeof n ? n.replace(U, "") : null == n ? "" : n);
            }
        }}), b.extend({valHooks: {option: {get: function(e) {
                    var t = e.attributes.value;
                    return !t || t.specified ? e.value : e.text;
                }},select: {get: function(e) {
                    var t, n, r = e.options, i = e.selectedIndex, o = "select-one" === e.type || 0 > i, a = o ? null : [], s = o ? i + 1 : r.length, u = 0 > i ? s : o ? i : 0;
                    for (; s > u; u++) {
                        if (n = r[u], !(!n.selected && u !== i || (b.support.optDisabled ? n.disabled : null !== n.getAttribute("disabled")) || n.parentNode.disabled && b.nodeName(n.parentNode, "optgroup"))) {
                            if (t = b(n).val(), o) {
                                return t;
                            }
                            a.push(t);
                        }
                    }
                    return a;
                },set: function(e, t) {
                    var n = b.makeArray(t);
                    return b(e).find("option").each(function() {
                        this.selected = b.inArray(b(this).val(), n) >= 0;
                    }), n.length || (e.selectedIndex = -1), n;
                }}},attr: function(e, n, r) {
            var o, a, s, u = e.nodeType;
            if (e && 3 !== u && 8 !== u && 2 !== u) {
                return typeof e.getAttribute === i ? b.prop(e, n, r) : (a = 1 !== u || !b.isXMLDoc(e), a && (n = n.toLowerCase(), o = b.attrHooks[n] || (J.test(n) ? z : I)), r === t ? o && a && "get" in o && null !== (s = o.get(e, n)) ? s : (typeof e.getAttribute !== i && (s = e.getAttribute(n)), null == s ? t : s) : null !== r ? o && a && "set" in o && (s = o.set(e, r, n)) !== t ? s : (e.setAttribute(n, r + ""), r) : (b.removeAttr(e, n), t));
            }
        },removeAttr: function(e, t) {
            var n, r, i = 0, o = t && t.match(w);
            if (o && 1 === e.nodeType) {
                while (n = o[i++]) {
                    r = b.propFix[n] || n, J.test(n) ? !Q && G.test(n) ? e[b.camelCase("default-" + n)] = e[r] = !1 : e[r] = !1 : b.attr(e, n, ""), e.removeAttribute(Q ? n : r);
                }
            }
        },attrHooks: {type: {set: function(e, t) {
                    if (!b.support.radioValue && "radio" === t && b.nodeName(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t;
                    }
                }}},propFix: {tabindex: "tabIndex",readonly: "readOnly","for": "htmlFor","class": "className",maxlength: "maxLength",cellspacing: "cellSpacing",cellpadding: "cellPadding",rowspan: "rowSpan",colspan: "colSpan",usemap: "useMap",frameborder: "frameBorder",contenteditable: "contentEditable"},prop: function(e, n, r) {
            var i, o, a, s = e.nodeType;
            if (e && 3 !== s && 8 !== s && 2 !== s) {
                return a = 1 !== s || !b.isXMLDoc(e), a && (n = b.propFix[n] || n, o = b.propHooks[n]), r !== t ? o && "set" in o && (i = o.set(e, r, n)) !== t ? i : e[n] = r : o && "get" in o && null !== (i = o.get(e, n)) ? i : e[n];
            }
        },propHooks: {tabIndex: {get: function(e) {
                    var n = e.getAttributeNode("tabindex");
                    return n && n.specified ? parseInt(n.value, 10) : V.test(e.nodeName) || Y.test(e.nodeName) && e.href ? 0 : t;
                }}}}), z = {get: function(e, n) {
            var r = b.prop(e, n), i = "boolean" == typeof r && e.getAttribute(n), o = "boolean" == typeof r ? K && Q ? null != i : G.test(n) ? e[b.camelCase("default-" + n)] : !!i : e.getAttributeNode(n);
            return o && o.value !== !1 ? n.toLowerCase() : t;
        },set: function(e, t, n) {
            return t === !1 ? b.removeAttr(e, n) : K && Q || !G.test(n) ? e.setAttribute(!Q && b.propFix[n] || n, n) : e[b.camelCase("default-" + n)] = e[n] = !0, n;
        }}, K && Q || (b.attrHooks.value = {get: function(e, n) {
            var r = e.getAttributeNode(n);
            return b.nodeName(e, "input") ? e.defaultValue : r && r.specified ? r.value : t;
        },set: function(e, n, r) {
            return b.nodeName(e, "input") ? (e.defaultValue = n, t) : I && I.set(e, n, r);
        }}), Q || (I = b.valHooks.button = {get: function(e, n) {
            var r = e.getAttributeNode(n);
            return r && ("id" === n || "name" === n || "coords" === n ? "" !== r.value : r.specified) ? r.value : t;
        },set: function(e, n, r) {
            var i = e.getAttributeNode(r);
            return i || e.setAttributeNode(i = e.ownerDocument.createAttribute(r)), i.value = n += "", "value" === r || n === e.getAttribute(r) ? n : t;
        }}, b.attrHooks.contenteditable = {get: I.get,set: function(e, t, n) {
            I.set(e, "" === t ? !1 : t, n);
        }}, b.each(["width", "height"], function(e, n) {
        b.attrHooks[n] = b.extend(b.attrHooks[n], {set: function(e, r) {
                return "" === r ? (e.setAttribute(n, "auto"), r) : t;
            }});
    })), b.support.hrefNormalized || (b.each(["href", "src", "width", "height"], function(e, n) {
        b.attrHooks[n] = b.extend(b.attrHooks[n], {get: function(e) {
                var r = e.getAttribute(n, 2);
                return null == r ? t : r;
            }});
    }), b.each(["href", "src"], function(e, t) {
        b.propHooks[t] = {get: function(e) {
                return e.getAttribute(t, 4);
            }};
    })), b.support.style || (b.attrHooks.style = {get: function(e) {
            return e.style.cssText || t;
        },set: function(e, t) {
            return e.style.cssText = t + "";
        }}), b.support.optSelected || (b.propHooks.selected = b.extend(b.propHooks.selected, {get: function(e) {
            var t = e.parentNode;
            return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null;
        }})), b.support.enctype || (b.propFix.enctype = "encoding"), b.support.checkOn || b.each(["radio", "checkbox"], function() {
        b.valHooks[this] = {get: function(e) {
                return null === e.getAttribute("value") ? "on" : e.value;
            }};
    }), b.each(["radio", "checkbox"], function() {
        b.valHooks[this] = b.extend(b.valHooks[this], {set: function(e, n) {
                return b.isArray(n) ? e.checked = b.inArray(b(e).val(), n) >= 0 : t;
            }});
    });
    var Z = /^(?:input|select|textarea)$/i, et = /^key/, tt = /^(?:mouse|contextmenu)|click/, nt = /^(?:focusinfocus|focusoutblur)$/, rt = /^([^.]*)(?:\.(.+)|)$/;
    function it() {
        return !0;
    }
    function ot() {
        return !1;
    }
    b.event = {global: {},add: function(e, n, r, o, a) {
            var s, u, l, c, p, f, d, h, g, m, y, v = b._data(e);
            if (v) {
                r.handler && (c = r, r = c.handler, a = c.selector), r.guid || (r.guid = b.guid++), (u = v.events) || (u = v.events = {}), (f = v.handle) || (f = v.handle = function(e) {
                    return typeof b === i || e && b.event.triggered === e.type ? t : b.event.dispatch.apply(f.elem, arguments);
                }, f.elem = e), n = (n || "").match(w) || [""], l = n.length;
                while (l--) {
                    s = rt.exec(n[l]) || [], g = y = s[1], m = (s[2] || "").split(".").sort(), p = b.event.special[g] || {}, g = (a ? p.delegateType : p.bindType) || g, p = b.event.special[g] || {}, d = b.extend({type: g,origType: y,data: o,handler: r,guid: r.guid,selector: a,needsContext: a && b.expr.match.needsContext.test(a),namespace: m.join(".")}, c), (h = u[g]) || (h = u[g] = [], h.delegateCount = 0, p.setup && p.setup.call(e, o, m, f) !== !1 || (e.addEventListener ? e.addEventListener(g, f, !1) : e.attachEvent && e.attachEvent("on" + g, f))), p.add && (p.add.call(e, d), d.handler.guid || (d.handler.guid = r.guid)), a ? h.splice(h.delegateCount++, 0, d) : h.push(d), b.event.global[g] = !0;
                }
                e = null;
            }
        },remove: function(e, t, n, r, i) {
            var o, a, s, u, l, c, p, f, d, h, g, m = b.hasData(e) && b._data(e);
            if (m && (c = m.events)) {
                t = (t || "").match(w) || [""], l = t.length;
                while (l--) {
                    if (s = rt.exec(t[l]) || [], d = g = s[1], h = (s[2] || "").split(".").sort(), d) {
                        p = b.event.special[d] || {}, d = (r ? p.delegateType : p.bindType) || d, f = c[d] || [], s = s[2] && RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), u = o = f.length;
                        while (o--) {
                            a = f[o], !i && g !== a.origType || n && n.guid !== a.guid || s && !s.test(a.namespace) || r && r !== a.selector && ("**" !== r || !a.selector) || (f.splice(o, 1), a.selector && f.delegateCount--, p.remove && p.remove.call(e, a));
                        }
                        u && !f.length && (p.teardown && p.teardown.call(e, h, m.handle) !== !1 || b.removeEvent(e, d, m.handle), delete c[d]);
                    } else {
                        for (d in c) {
                            b.event.remove(e, d + t[l], n, r, !0);
                        }
                    }
                }
                b.isEmptyObject(c) && (delete m.handle, b._removeData(e, "events"));
            }
        },trigger: function(n, r, i, a) {
            var s, u, l, c, p, f, d, h = [i || o], g = y.call(n, "type") ? n.type : n, m = y.call(n, "namespace") ? n.namespace.split(".") : [];
            if (l = f = i = i || o, 3 !== i.nodeType && 8 !== i.nodeType && !nt.test(g + b.event.triggered) && (g.indexOf(".") >= 0 && (m = g.split("."), g = m.shift(), m.sort()), u = 0 > g.indexOf(":") && "on" + g, n = n[b.expando] ? n : new b.Event(g, "object" == typeof n && n), n.isTrigger = !0, n.namespace = m.join("."), n.namespace_re = n.namespace ? RegExp("(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, n.result = t, n.target || (n.target = i), r = null == r ? [n] : b.makeArray(r, [n]), p = b.event.special[g] || {}, a || !p.trigger || p.trigger.apply(i, r) !== !1)) {
                if (!a && !p.noBubble && !b.isWindow(i)) {
                    for (c = p.delegateType || g, nt.test(c + g) || (l = l.parentNode); l; l = l.parentNode) {
                        h.push(l), f = l;
                    }
                    f === (i.ownerDocument || o) && h.push(f.defaultView || f.parentWindow || e);
                }
                d = 0;
                while ((l = h[d++]) && !n.isPropagationStopped()) {
                    n.type = d > 1 ? c : p.bindType || g, s = (b._data(l, "events") || {})[n.type] && b._data(l, "handle"), s && s.apply(l, r), s = u && l[u], s && b.acceptData(l) && s.apply && s.apply(l, r) === !1 && n.preventDefault();
                }
                if (n.type = g, !(a || n.isDefaultPrevented() || p._default && p._default.apply(i.ownerDocument, r) !== !1 || "click" === g && b.nodeName(i, "a") || !b.acceptData(i) || !u || !i[g] || b.isWindow(i))) {
                    f = i[u], f && (i[u] = null), b.event.triggered = g;
                    try {
                        i[g]();
                    } catch (v) {
                    }
                    b.event.triggered = t, f && (i[u] = f);
                }
                return n.result;
            }
        },dispatch: function(e) {
            e = b.event.fix(e);
            var n, r, i, o, a, s = [], u = h.call(arguments), l = (b._data(this, "events") || {})[e.type] || [], c = b.event.special[e.type] || {};
            if (u[0] = e, e.delegateTarget = this, !c.preDispatch || c.preDispatch.call(this, e) !== !1) {
                s = b.event.handlers.call(this, e, l), n = 0;
                while ((o = s[n++]) && !e.isPropagationStopped()) {
                    e.currentTarget = o.elem, a = 0;
                    while ((i = o.handlers[a++]) && !e.isImmediatePropagationStopped()) {
                        (!e.namespace_re || e.namespace_re.test(i.namespace)) && (e.handleObj = i, e.data = i.data, r = ((b.event.special[i.origType] || {}).handle || i.handler).apply(o.elem, u), r !== t && (e.result = r) === !1 && (e.preventDefault(), e.stopPropagation()));
                    }
                }
                return c.postDispatch && c.postDispatch.call(this, e), e.result;
            }
        },handlers: function(e, n) {
            var r, i, o, a, s = [], u = n.delegateCount, l = e.target;
            if (u && l.nodeType && (!e.button || "click" !== e.type)) {
                for (; l != this; l = l.parentNode || this) {
                    if (1 === l.nodeType && (l.disabled !== !0 || "click" !== e.type)) {
                        for (o = [], a = 0; u > a; a++) {
                            i = n[a], r = i.selector + " ", o[r] === t && (o[r] = i.needsContext ? b(r, this).index(l) >= 0 : b.find(r, this, null, [l]).length), o[r] && o.push(i);
                        }
                        o.length && s.push({elem: l,handlers: o});
                    }
                }
            }
            return n.length > u && s.push({elem: this,handlers: n.slice(u)}), s;
        },fix: function(e) {
            if (e[b.expando]) {
                return e;
            }
            var t, n, r, i = e.type, a = e, s = this.fixHooks[i];
            s || (this.fixHooks[i] = s = tt.test(i) ? this.mouseHooks : et.test(i) ? this.keyHooks : {}), r = s.props ? this.props.concat(s.props) : this.props, e = new b.Event(a), t = r.length;
            while (t--) {
                n = r[t], e[n] = a[n];
            }
            return e.target || (e.target = a.srcElement || o), 3 === e.target.nodeType && (e.target = e.target.parentNode), e.metaKey = !!e.metaKey, s.filter ? s.filter(e, a) : e;
        },props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks: {},keyHooks: {props: "char charCode key keyCode".split(" "),filter: function(e, t) {
                return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e;
            }},mouseHooks: {props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter: function(e, n) {
                var r, i, a, s = n.button, u = n.fromElement;
                return null == e.pageX && null != n.clientX && (i = e.target.ownerDocument || o, a = i.documentElement, r = i.body, e.pageX = n.clientX + (a && a.scrollLeft || r && r.scrollLeft || 0) - (a && a.clientLeft || r && r.clientLeft || 0), e.pageY = n.clientY + (a && a.scrollTop || r && r.scrollTop || 0) - (a && a.clientTop || r && r.clientTop || 0)), !e.relatedTarget && u && (e.relatedTarget = u === e.target ? n.toElement : u), e.which || s === t || (e.which = 1 & s ? 1 : 2 & s ? 3 : 4 & s ? 2 : 0), e;
            }},special: {load: {noBubble: !0},click: {trigger: function() {
                    return b.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : t;
                }},focus: {trigger: function() {
                    if (this !== o.activeElement && this.focus) {
                        try {
                            return this.focus(), !1;
                        } catch (e) {
                        }
                    }
                },delegateType: "focusin"},blur: {trigger: function() {
                    return this === o.activeElement && this.blur ? (this.blur(), !1) : t;
                },delegateType: "focusout"},beforeunload: {postDispatch: function(e) {
                    e.result !== t && (e.originalEvent.returnValue = e.result);
                }}},simulate: function(e, t, n, r) {
            var i = b.extend(new b.Event, n, {type: e,isSimulated: !0,originalEvent: {}});
            r ? b.event.trigger(i, null, t) : b.event.dispatch.call(t, i), i.isDefaultPrevented() && n.preventDefault();
        }}, b.removeEvent = o.removeEventListener ? function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n, !1);
    } : function(e, t, n) {
        var r = "on" + t;
        e.detachEvent && (typeof e[r] === i && (e[r] = null), e.detachEvent(r, n));
    }, b.Event = function(e, n) {
        return this instanceof b.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || e.returnValue === !1 || e.getPreventDefault && e.getPreventDefault() ? it : ot) : this.type = e, n && b.extend(this, n), this.timeStamp = e && e.timeStamp || b.now(), this[b.expando] = !0, t) : new b.Event(e, n);
    }, b.Event.prototype = {isDefaultPrevented: ot,isPropagationStopped: ot,isImmediatePropagationStopped: ot,preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = it, e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1);
        },stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = it, e && (e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0);
        },stopImmediatePropagation: function() {
            this.isImmediatePropagationStopped = it, this.stopPropagation();
        }}, b.each({mouseenter: "mouseover",mouseleave: "mouseout"}, function(e, t) {
        b.event.special[e] = {delegateType: t,bindType: t,handle: function(e) {
                var n, r = this, i = e.relatedTarget, o = e.handleObj;
                return (!i || i !== r && !b.contains(r, i)) && (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n;
            }};
    }), b.support.submitBubbles || (b.event.special.submit = {setup: function() {
            return b.nodeName(this, "form") ? !1 : (b.event.add(this, "click._submit keypress._submit", function(e) {
                var n = e.target, r = b.nodeName(n, "input") || b.nodeName(n, "button") ? n.form : t;
                r && !b._data(r, "submitBubbles") && (b.event.add(r, "submit._submit", function(e) {
                    e._submit_bubble = !0;
                }), b._data(r, "submitBubbles", !0));
            }), t);
        },postDispatch: function(e) {
            e._submit_bubble && (delete e._submit_bubble, this.parentNode && !e.isTrigger && b.event.simulate("submit", this.parentNode, e, !0));
        },teardown: function() {
            return b.nodeName(this, "form") ? !1 : (b.event.remove(this, "._submit"), t);
        }}), b.support.changeBubbles || (b.event.special.change = {setup: function() {
            return Z.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (b.event.add(this, "propertychange._change", function(e) {
                "checked" === e.originalEvent.propertyName && (this._just_changed = !0);
            }), b.event.add(this, "click._change", function(e) {
                this._just_changed && !e.isTrigger && (this._just_changed = !1), b.event.simulate("change", this, e, !0);
            })), !1) : (b.event.add(this, "beforeactivate._change", function(e) {
                var t = e.target;
                Z.test(t.nodeName) && !b._data(t, "changeBubbles") && (b.event.add(t, "change._change", function(e) {
                    !this.parentNode || e.isSimulated || e.isTrigger || b.event.simulate("change", this.parentNode, e, !0);
                }), b._data(t, "changeBubbles", !0));
            }), t);
        },handle: function(e) {
            var n = e.target;
            return this !== n || e.isSimulated || e.isTrigger || "radio" !== n.type && "checkbox" !== n.type ? e.handleObj.handler.apply(this, arguments) : t;
        },teardown: function() {
            return b.event.remove(this, "._change"), !Z.test(this.nodeName);
        }}), b.support.focusinBubbles || b.each({focus: "focusin",blur: "focusout"}, function(e, t) {
        var n = 0, r = function(e) {
            b.event.simulate(t, e.target, b.event.fix(e), !0);
        };
        b.event.special[t] = {setup: function() {
                0 === n++ && o.addEventListener(e, r, !0);
            },teardown: function() {
                0 === --n && o.removeEventListener(e, r, !0);
            }};
    }), b.fn.extend({on: function(e, n, r, i, o) {
            var a, s;
            if ("object" == typeof e) {
                "string" != typeof n && (r = r || n, n = t);
                for (a in e) {
                    this.on(a, n, r, e[a], o);
                }
                return this;
            }
            if (null == r && null == i ? (i = n, r = n = t) : null == i && ("string" == typeof n ? (i = r, r = t) : (i = r, r = n, n = t)), i === !1) {
                i = ot;
            } else {
                if (!i) {
                    return this;
                }
            }
            return 1 === o && (s = i, i = function(e) {
                return b().off(e), s.apply(this, arguments);
            }, i.guid = s.guid || (s.guid = b.guid++)), this.each(function() {
                b.event.add(this, e, i, r, n);
            });
        },one: function(e, t, n, r) {
            return this.on(e, t, n, r, 1);
        },off: function(e, n, r) {
            var i, o;
            if (e && e.preventDefault && e.handleObj) {
                return i = e.handleObj, b(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
            }
            if ("object" == typeof e) {
                for (o in e) {
                    this.off(o, n, e[o]);
                }
                return this;
            }
            return (n === !1 || "function" == typeof n) && (r = n, n = t), r === !1 && (r = ot), this.each(function() {
                b.event.remove(this, e, r, n);
            });
        },bind: function(e, t, n) {
            return this.on(e, null, t, n);
        },unbind: function(e, t) {
            return this.off(e, null, t);
        },delegate: function(e, t, n, r) {
            return this.on(t, e, n, r);
        },undelegate: function(e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n);
        },trigger: function(e, t) {
            return this.each(function() {
                b.event.trigger(e, t, this);
            });
        },triggerHandler: function(e, n) {
            var r = this[0];
            return r ? b.event.trigger(e, n, r, !0) : t;
        }}), function(e, t) {
        var n, r, i, o, a, s, u, l, c, p, f, d, h, g, m, y, v, x = "sizzle" + -new Date, w = e.document, T = {}, N = 0, C = 0, k = it(), E = it(), S = it(), A = typeof t, j = 1 << 31, D = [], L = D.pop, H = D.push, q = D.slice, M = D.indexOf || function(e) {
            var t = 0, n = this.length;
            for (; n > t; t++) {
                if (this[t] === e) {
                    return t;
                }
            }
            return -1;
        }, _ = "[\\x20\\t\\r\\n\\f]", F = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", O = F.replace("w", "w#"), B = "([*^$|!~]?=)", P = "\\[" + _ + "*(" + F + ")" + _ + "*(?:" + B + _ + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + O + ")|)|)" + _ + "*\\]", R = ":(" + F + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + P.replace(3, 8) + ")*)|.*)\\)|)", W = RegExp("^" + _ + "+|((?:^|[^\\\\])(?:\\\\.)*)" + _ + "+$", "g"), $ = RegExp("^" + _ + "*," + _ + "*"), I = RegExp("^" + _ + "*([\\x20\\t\\r\\n\\f>+~])" + _ + "*"), z = RegExp(R), X = RegExp("^" + O + "$"), U = {ID: RegExp("^#(" + F + ")"),CLASS: RegExp("^\\.(" + F + ")"),NAME: RegExp("^\\[name=['\"]?(" + F + ")['\"]?\\]"),TAG: RegExp("^(" + F.replace("w", "w*") + ")"),ATTR: RegExp("^" + P),PSEUDO: RegExp("^" + R),CHILD: RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + _ + "*(even|odd|(([+-]|)(\\d*)n|)" + _ + "*(?:([+-]|)" + _ + "*(\\d+)|))" + _ + "*\\)|)", "i"),needsContext: RegExp("^" + _ + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + _ + "*((?:-\\d)?\\d*)" + _ + "*\\)|)(?=[^-]|$)", "i")}, V = /[\x20\t\r\n\f]*[+~]/, Y = /^[^{]+\{\s*\[native code/, J = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, G = /^(?:input|select|textarea|button)$/i, Q = /^h\d$/i, K = /'|\\/g, Z = /\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g, et = /\\([\da-fA-F]{1,6}[\x20\t\r\n\f]?|.)/g, tt = function(e, t) {
            var n = "0x" + t - 65536;
            return n !== n ? t : 0 > n ? String.fromCharCode(n + 65536) : String.fromCharCode(55296 | n >> 10, 56320 | 1023 & n);
        };
        try {
            q.call(w.documentElement.childNodes, 0)[0].nodeType;
        } catch (nt) {
            q = function(e) {
                var t, n = [];
                while (t = this[e++]) {
                    n.push(t);
                }
                return n;
            };
        }
        function rt(e) {
            return Y.test(e + "");
        }
        function it() {
            var e, t = [];
            return e = function(n, r) {
                return t.push(n += " ") > i.cacheLength && delete e[t.shift()], e[n] = r;
            };
        }
        function ot(e) {
            return e[x] = !0, e;
        }
        function at(e) {
            var t = p.createElement("div");
            try {
                return e(t);
            } catch (n) {
                return !1;
            }finally {
                t = null;
            }
        }
        function st(e, t, n, r) {
            var i, o, a, s, u, l, f, g, m, v;
            if ((t ? t.ownerDocument || t : w) !== p && c(t), t = t || p, n = n || [], !e || "string" != typeof e) {
                return n;
            }
            if (1 !== (s = t.nodeType) && 9 !== s) {
                return [];
            }
            if (!d && !r) {
                if (i = J.exec(e)) {
                    if (a = i[1]) {
                        if (9 === s) {
                            if (o = t.getElementById(a), !o || !o.parentNode) {
                                return n;
                            }
                            if (o.id === a) {
                                return n.push(o), n;
                            }
                        } else {
                            if (t.ownerDocument && (o = t.ownerDocument.getElementById(a)) && y(t, o) && o.id === a) {
                                return n.push(o), n;
                            }
                        }
                    } else {
                        if (i[2]) {
                            return H.apply(n, q.call(t.getElementsByTagName(e), 0)), n;
                        }
                        if ((a = i[3]) && T.getByClassName && t.getElementsByClassName) {
                            return H.apply(n, q.call(t.getElementsByClassName(a), 0)), n;
                        }
                    }
                }
                if (T.qsa && !h.test(e)) {
                    if (f = !0, g = x, m = t, v = 9 === s && e, 1 === s && "object" !== t.nodeName.toLowerCase()) {
                        l = ft(e), (f = t.getAttribute("id")) ? g = f.replace(K, "\\$&") : t.setAttribute("id", g), g = "[id='" + g + "'] ", u = l.length;
                        while (u--) {
                            l[u] = g + dt(l[u]);
                        }
                        m = V.test(e) && t.parentNode || t, v = l.join(",");
                    }
                    if (v) {
                        try {
                            return H.apply(n, q.call(m.querySelectorAll(v), 0)), n;
                        } catch (b) {
                        }finally {
                            f || t.removeAttribute("id");
                        }
                    }
                }
            }
            return wt(e.replace(W, "$1"), t, n, r);
        }
        a = st.isXML = function(e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return t ? "HTML" !== t.nodeName : !1;
        }, c = st.setDocument = function(e) {
            var n = e ? e.ownerDocument || e : w;
            return n !== p && 9 === n.nodeType && n.documentElement ? (p = n, f = n.documentElement, d = a(n), T.tagNameNoComments = at(function(e) {
                return e.appendChild(n.createComment("")), !e.getElementsByTagName("*").length;
            }), T.attributes = at(function(e) {
                e.innerHTML = "<select></select>";
                var t = typeof e.lastChild.getAttribute("multiple");
                return "boolean" !== t && "string" !== t;
            }), T.getByClassName = at(function(e) {
                return e.innerHTML = "<div class='hidden e'></div><div class='hidden'></div>", e.getElementsByClassName && e.getElementsByClassName("e").length ? (e.lastChild.className = "e", 2 === e.getElementsByClassName("e").length) : !1;
            }), T.getByName = at(function(e) {
                e.id = x + 0, e.innerHTML = "<a name='" + x + "'></a><div name='" + x + "'></div>", f.insertBefore(e, f.firstChild);
                var t = n.getElementsByName && n.getElementsByName(x).length === 2 + n.getElementsByName(x + 0).length;
                return T.getIdNotName = !n.getElementById(x), f.removeChild(e), t;
            }), i.attrHandle = at(function(e) {
                return e.innerHTML = "<a href='#'></a>", e.firstChild && typeof e.firstChild.getAttribute !== A && "#" === e.firstChild.getAttribute("href");
            }) ? {} : {href: function(e) {
                    return e.getAttribute("href", 2);
                },type: function(e) {
                    return e.getAttribute("type");
                }}, T.getIdNotName ? (i.find.ID = function(e, t) {
                if (typeof t.getElementById !== A && !d) {
                    var n = t.getElementById(e);
                    return n && n.parentNode ? [n] : [];
                }
            }, i.filter.ID = function(e) {
                var t = e.replace(et, tt);
                return function(e) {
                    return e.getAttribute("id") === t;
                };
            }) : (i.find.ID = function(e, n) {
                if (typeof n.getElementById !== A && !d) {
                    var r = n.getElementById(e);
                    return r ? r.id === e || typeof r.getAttributeNode !== A && r.getAttributeNode("id").value === e ? [r] : t : [];
                }
            }, i.filter.ID = function(e) {
                var t = e.replace(et, tt);
                return function(e) {
                    var n = typeof e.getAttributeNode !== A && e.getAttributeNode("id");
                    return n && n.value === t;
                };
            }), i.find.TAG = T.tagNameNoComments ? function(e, n) {
                return typeof n.getElementsByTagName !== A ? n.getElementsByTagName(e) : t;
            } : function(e, t) {
                var n, r = [], i = 0, o = t.getElementsByTagName(e);
                if ("*" === e) {
                    while (n = o[i++]) {
                        1 === n.nodeType && r.push(n);
                    }
                    return r;
                }
                return o;
            }, i.find.NAME = T.getByName && function(e, n) {
                return typeof n.getElementsByName !== A ? n.getElementsByName(name) : t;
            }, i.find.CLASS = T.getByClassName && function(e, n) {
                return typeof n.getElementsByClassName === A || d ? t : n.getElementsByClassName(e);
            }, g = [], h = [":focus"], (T.qsa = rt(n.querySelectorAll)) && (at(function(e) {
                e.innerHTML = "<select><option selected=''></option></select>", e.querySelectorAll("[selected]").length || h.push("\\[" + _ + "*(?:checked|disabled|ismap|multiple|readonly|selected|value)"), e.querySelectorAll(":checked").length || h.push(":checked");
            }), at(function(e) {
                e.innerHTML = "<input type='hidden' i=''/>", e.querySelectorAll("[i^='']").length && h.push("[*^$]=" + _ + "*(?:\"\"|'')"), e.querySelectorAll(":enabled").length || h.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), h.push(",.*:");
            })), (T.matchesSelector = rt(m = f.matchesSelector || f.mozMatchesSelector || f.webkitMatchesSelector || f.oMatchesSelector || f.msMatchesSelector)) && at(function(e) {
                T.disconnectedMatch = m.call(e, "div"), m.call(e, "[s!='']:x"), g.push("!=", R);
            }), h = RegExp(h.join("|")), g = RegExp(g.join("|")), y = rt(f.contains) || f.compareDocumentPosition ? function(e, t) {
                var n = 9 === e.nodeType ? e.documentElement : e, r = t && t.parentNode;
                return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)));
            } : function(e, t) {
                if (t) {
                    while (t = t.parentNode) {
                        if (t === e) {
                            return !0;
                        }
                    }
                }
                return !1;
            }, v = f.compareDocumentPosition ? function(e, t) {
                var r;
                return e === t ? (u = !0, 0) : (r = t.compareDocumentPosition && e.compareDocumentPosition && e.compareDocumentPosition(t)) ? 1 & r || e.parentNode && 11 === e.parentNode.nodeType ? e === n || y(w, e) ? -1 : t === n || y(w, t) ? 1 : 0 : 4 & r ? -1 : 1 : e.compareDocumentPosition ? -1 : 1;
            } : function(e, t) {
                var r, i = 0, o = e.parentNode, a = t.parentNode, s = [e], l = [t];
                if (e === t) {
                    return u = !0, 0;
                }
                if (!o || !a) {
                    return e === n ? -1 : t === n ? 1 : o ? -1 : a ? 1 : 0;
                }
                if (o === a) {
                    return ut(e, t);
                }
                r = e;
                while (r = r.parentNode) {
                    s.unshift(r);
                }
                r = t;
                while (r = r.parentNode) {
                    l.unshift(r);
                }
                while (s[i] === l[i]) {
                    i++;
                }
                return i ? ut(s[i], l[i]) : s[i] === w ? -1 : l[i] === w ? 1 : 0;
            }, u = !1, [0, 0].sort(v), T.detectDuplicates = u, p) : p;
        }, st.matches = function(e, t) {
            return st(e, null, null, t);
        }, st.matchesSelector = function(e, t) {
            if ((e.ownerDocument || e) !== p && c(e), t = t.replace(Z, "='$1']"), !(!T.matchesSelector || d || g && g.test(t) || h.test(t))) {
                try {
                    var n = m.call(e, t);
                    if (n || T.disconnectedMatch || e.document && 11 !== e.document.nodeType) {
                        return n;
                    }
                } catch (r) {
                }
            }
            return st(t, p, null, [e]).length > 0;
        }, st.contains = function(e, t) {
            return (e.ownerDocument || e) !== p && c(e), y(e, t);
        }, st.attr = function(e, t) {
            var n;
            return (e.ownerDocument || e) !== p && c(e), d || (t = t.toLowerCase()), (n = i.attrHandle[t]) ? n(e) : d || T.attributes ? e.getAttribute(t) : ((n = e.getAttributeNode(t)) || e.getAttribute(t)) && e[t] === !0 ? t : n && n.specified ? n.value : null;
        }, st.error = function(e) {
            throw Error("Syntax error, unrecognized expression: " + e);
        }, st.uniqueSort = function(e) {
            var t, n = [], r = 1, i = 0;
            if (u = !T.detectDuplicates, e.sort(v), u) {
                for (; t = e[r]; r++) {
                    t === e[r - 1] && (i = n.push(r));
                }
                while (i--) {
                    e.splice(n[i], 1);
                }
            }
            return e;
        };
        function ut(e, t) {
            var n = t && e, r = n && (~t.sourceIndex || j) - (~e.sourceIndex || j);
            if (r) {
                return r;
            }
            if (n) {
                while (n = n.nextSibling) {
                    if (n === t) {
                        return -1;
                    }
                }
            }
            return e ? 1 : -1;
        }
        function lt(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return "input" === n && t.type === e;
            };
        }
        function ct(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e;
            };
        }
        function pt(e) {
            return ot(function(t) {
                return t = +t, ot(function(n, r) {
                    var i, o = e([], n.length, t), a = o.length;
                    while (a--) {
                        n[i = o[a]] && (n[i] = !(r[i] = n[i]));
                    }
                });
            });
        }
        o = st.getText = function(e) {
            var t, n = "", r = 0, i = e.nodeType;
            if (i) {
                if (1 === i || 9 === i || 11 === i) {
                    if ("string" == typeof e.textContent) {
                        return e.textContent;
                    }
                    for (e = e.firstChild; e; e = e.nextSibling) {
                        n += o(e);
                    }
                } else {
                    if (3 === i || 4 === i) {
                        return e.nodeValue;
                    }
                }
            } else {
                for (; t = e[r]; r++) {
                    n += o(t);
                }
            }
            return n;
        }, i = st.selectors = {cacheLength: 50,createPseudo: ot,match: U,find: {},relative: {">": {dir: "parentNode",first: !0}," ": {dir: "parentNode"},"+": {dir: "previousSibling",first: !0},"~": {dir: "previousSibling"}},preFilter: {ATTR: function(e) {
                    return e[1] = e[1].replace(et, tt), e[3] = (e[4] || e[5] || "").replace(et, tt), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4);
                },CHILD: function(e) {
                    return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || st.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && st.error(e[0]), e;
                },PSEUDO: function(e) {
                    var t, n = !e[5] && e[2];
                    return U.CHILD.test(e[0]) ? null : (e[4] ? e[2] = e[4] : n && z.test(n) && (t = ft(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3));
                }},filter: {TAG: function(e) {
                    return "*" === e ? function() {
                        return !0;
                    } : (e = e.replace(et, tt).toLowerCase(), function(t) {
                        return t.nodeName && t.nodeName.toLowerCase() === e;
                    });
                },CLASS: function(e) {
                    var t = k[e + " "];
                    return t || (t = RegExp("(^|" + _ + ")" + e + "(" + _ + "|$)")) && k(e, function(e) {
                        return t.test(e.className || typeof e.getAttribute !== A && e.getAttribute("class") || "");
                    });
                },ATTR: function(e, t, n) {
                    return function(r) {
                        var i = st.attr(r, e);
                        return null == i ? "!=" === t : t ? (i += "", "=" === t ? i === n : "!=" === t ? i !== n : "^=" === t ? n && 0 === i.indexOf(n) : "*=" === t ? n && i.indexOf(n) > -1 : "$=" === t ? n && i.slice(-n.length) === n : "~=" === t ? (" " + i + " ").indexOf(n) > -1 : "|=" === t ? i === n || i.slice(0, n.length + 1) === n + "-" : !1) : !0;
                    };
                },CHILD: function(e, t, n, r, i) {
                    var o = "nth" !== e.slice(0, 3), a = "last" !== e.slice(-4), s = "of-type" === t;
                    return 1 === r && 0 === i ? function(e) {
                        return !!e.parentNode;
                    } : function(t, n, u) {
                        var l, c, p, f, d, h, g = o !== a ? "nextSibling" : "previousSibling", m = t.parentNode, y = s && t.nodeName.toLowerCase(), v = !u && !s;
                        if (m) {
                            if (o) {
                                while (g) {
                                    p = t;
                                    while (p = p[g]) {
                                        if (s ? p.nodeName.toLowerCase() === y : 1 === p.nodeType) {
                                            return !1;
                                        }
                                    }
                                    h = g = "only" === e && !h && "nextSibling";
                                }
                                return !0;
                            }
                            if (h = [a ? m.firstChild : m.lastChild], a && v) {
                                c = m[x] || (m[x] = {}), l = c[e] || [], d = l[0] === N && l[1], f = l[0] === N && l[2], p = d && m.childNodes[d];
                                while (p = ++d && p && p[g] || (f = d = 0) || h.pop()) {
                                    if (1 === p.nodeType && ++f && p === t) {
                                        c[e] = [N, d, f];
                                        break;
                                    }
                                }
                            } else {
                                if (v && (l = (t[x] || (t[x] = {}))[e]) && l[0] === N) {
                                    f = l[1];
                                } else {
                                    while (p = ++d && p && p[g] || (f = d = 0) || h.pop()) {
                                        if ((s ? p.nodeName.toLowerCase() === y : 1 === p.nodeType) && ++f && (v && ((p[x] || (p[x] = {}))[e] = [N, f]), p === t)) {
                                            break;
                                        }
                                    }
                                }
                            }
                            return f -= i, f === r || 0 === f % r && f / r >= 0;
                        }
                    };
                },PSEUDO: function(e, t) {
                    var n, r = i.pseudos[e] || i.setFilters[e.toLowerCase()] || st.error("unsupported pseudo: " + e);
                    return r[x] ? r(t) : r.length > 1 ? (n = [e, e, "", t], i.setFilters.hasOwnProperty(e.toLowerCase()) ? ot(function(e, n) {
                        var i, o = r(e, t), a = o.length;
                        while (a--) {
                            i = M.call(e, o[a]), e[i] = !(n[i] = o[a]);
                        }
                    }) : function(e) {
                        return r(e, 0, n);
                    }) : r;
                }},pseudos: {not: ot(function(e) {
                    var t = [], n = [], r = s(e.replace(W, "$1"));
                    return r[x] ? ot(function(e, t, n, i) {
                        var o, a = r(e, null, i, []), s = e.length;
                        while (s--) {
                            (o = a[s]) && (e[s] = !(t[s] = o));
                        }
                    }) : function(e, i, o) {
                        return t[0] = e, r(t, null, o, n), !n.pop();
                    };
                }),has: ot(function(e) {
                    return function(t) {
                        return st(e, t).length > 0;
                    };
                }),contains: ot(function(e) {
                    return function(t) {
                        return (t.textContent || t.innerText || o(t)).indexOf(e) > -1;
                    };
                }),lang: ot(function(e) {
                    return X.test(e || "") || st.error("unsupported lang: " + e), e = e.replace(et, tt).toLowerCase(), function(t) {
                        var n;
                        do {
                            if (n = d ? t.getAttribute("xml:lang") || t.getAttribute("lang") : t.lang) {
                                return n = n.toLowerCase(), n === e || 0 === n.indexOf(e + "-");
                            }
                        } while ((t = t.parentNode) && 1 === t.nodeType);
                        return !1;
                    };
                }),target: function(t) {
                    var n = e.location && e.location.hash;
                    return n && n.slice(1) === t.id;
                },root: function(e) {
                    return e === f;
                },focus: function(e) {
                    return e === p.activeElement && (!p.hasFocus || p.hasFocus()) && !!(e.type || e.href || ~e.tabIndex);
                },enabled: function(e) {
                    return e.disabled === !1;
                },disabled: function(e) {
                    return e.disabled === !0;
                },checked: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" === t && !!e.selected;
                },selected: function(e) {
                    return e.parentNode && e.parentNode.selectedIndex, e.selected === !0;
                },empty: function(e) {
                    for (e = e.firstChild; e; e = e.nextSibling) {
                        if (e.nodeName > "@" || 3 === e.nodeType || 4 === e.nodeType) {
                            return !1;
                        }
                    }
                    return !0;
                },parent: function(e) {
                    return !i.pseudos.empty(e);
                },header: function(e) {
                    return Q.test(e.nodeName);
                },input: function(e) {
                    return G.test(e.nodeName);
                },button: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t;
                },text: function(e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || t.toLowerCase() === e.type);
                },first: pt(function() {
                    return [0];
                }),last: pt(function(e, t) {
                    return [t - 1];
                }),eq: pt(function(e, t, n) {
                    return [0 > n ? n + t : n];
                }),even: pt(function(e, t) {
                    var n = 0;
                    for (; t > n; n += 2) {
                        e.push(n);
                    }
                    return e;
                }),odd: pt(function(e, t) {
                    var n = 1;
                    for (; t > n; n += 2) {
                        e.push(n);
                    }
                    return e;
                }),lt: pt(function(e, t, n) {
                    var r = 0 > n ? n + t : n;
                    for (; --r >= 0; ) {
                        e.push(r);
                    }
                    return e;
                }),gt: pt(function(e, t, n) {
                    var r = 0 > n ? n + t : n;
                    for (; t > ++r; ) {
                        e.push(r);
                    }
                    return e;
                })}};
        for (n in {radio: !0,checkbox: !0,file: !0,password: !0,image: !0}) {
            i.pseudos[n] = lt(n);
        }
        for (n in {submit: !0,reset: !0}) {
            i.pseudos[n] = ct(n);
        }
        function ft(e, t) {
            var n, r, o, a, s, u, l, c = E[e + " "];
            if (c) {
                return t ? 0 : c.slice(0);
            }
            s = e, u = [], l = i.preFilter;
            while (s) {
                (!n || (r = $.exec(s))) && (r && (s = s.slice(r[0].length) || s), u.push(o = [])), n = !1, (r = I.exec(s)) && (n = r.shift(), o.push({value: n,type: r[0].replace(W, " ")}), s = s.slice(n.length));
                for (a in i.filter) {
                    !(r = U[a].exec(s)) || l[a] && !(r = l[a](r)) || (n = r.shift(), o.push({value: n,type: a,matches: r}), s = s.slice(n.length));
                }
                if (!n) {
                    break;
                }
            }
            return t ? s.length : s ? st.error(e) : E(e, u).slice(0);
        }
        function dt(e) {
            var t = 0, n = e.length, r = "";
            for (; n > t; t++) {
                r += e[t].value;
            }
            return r;
        }
        function ht(e, t, n) {
            var i = t.dir, o = n && "parentNode" === i, a = C++;
            return t.first ? function(t, n, r) {
                while (t = t[i]) {
                    if (1 === t.nodeType || o) {
                        return e(t, n, r);
                    }
                }
            } : function(t, n, s) {
                var u, l, c, p = N + " " + a;
                if (s) {
                    while (t = t[i]) {
                        if ((1 === t.nodeType || o) && e(t, n, s)) {
                            return !0;
                        }
                    }
                } else {
                    while (t = t[i]) {
                        if (1 === t.nodeType || o) {
                            if (c = t[x] || (t[x] = {}), (l = c[i]) && l[0] === p) {
                                if ((u = l[1]) === !0 || u === r) {
                                    return u === !0;
                                }
                            } else {
                                if (l = c[i] = [p], l[1] = e(t, n, s) || r, l[1] === !0) {
                                    return !0;
                                }
                            }
                        }
                    }
                }
            };
        }
        function gt(e) {
            return e.length > 1 ? function(t, n, r) {
                var i = e.length;
                while (i--) {
                    if (!e[i](t, n, r)) {
                        return !1;
                    }
                }
                return !0;
            } : e[0];
        }
        function mt(e, t, n, r, i) {
            var o, a = [], s = 0, u = e.length, l = null != t;
            for (; u > s; s++) {
                (o = e[s]) && (!n || n(o, r, i)) && (a.push(o), l && t.push(s));
            }
            return a;
        }
        function yt(e, t, n, r, i, o) {
            return r && !r[x] && (r = yt(r)), i && !i[x] && (i = yt(i, o)), ot(function(o, a, s, u) {
                var l, c, p, f = [], d = [], h = a.length, g = o || xt(t || "*", s.nodeType ? [s] : s, []), m = !e || !o && t ? g : mt(g, f, e, s, u), y = n ? i || (o ? e : h || r) ? [] : a : m;
                if (n && n(m, y, s, u), r) {
                    l = mt(y, d), r(l, [], s, u), c = l.length;
                    while (c--) {
                        (p = l[c]) && (y[d[c]] = !(m[d[c]] = p));
                    }
                }
                if (o) {
                    if (i || e) {
                        if (i) {
                            l = [], c = y.length;
                            while (c--) {
                                (p = y[c]) && l.push(m[c] = p);
                            }
                            i(null, y = [], l, u);
                        }
                        c = y.length;
                        while (c--) {
                            (p = y[c]) && (l = i ? M.call(o, p) : f[c]) > -1 && (o[l] = !(a[l] = p));
                        }
                    }
                } else {
                    y = mt(y === a ? y.splice(h, y.length) : y), i ? i(null, a, y, u) : H.apply(a, y);
                }
            });
        }
        function vt(e) {
            var t, n, r, o = e.length, a = i.relative[e[0].type], s = a || i.relative[" "], u = a ? 1 : 0, c = ht(function(e) {
                return e === t;
            }, s, !0), p = ht(function(e) {
                return M.call(t, e) > -1;
            }, s, !0), f = [function(e, n, r) {
                    return !a && (r || n !== l) || ((t = n).nodeType ? c(e, n, r) : p(e, n, r));
                }];
            for (; o > u; u++) {
                if (n = i.relative[e[u].type]) {
                    f = [ht(gt(f), n)];
                } else {
                    if (n = i.filter[e[u].type].apply(null, e[u].matches), n[x]) {
                        for (r = ++u; o > r; r++) {
                            if (i.relative[e[r].type]) {
                                break;
                            }
                        }
                        return yt(u > 1 && gt(f), u > 1 && dt(e.slice(0, u - 1)).replace(W, "$1"), n, r > u && vt(e.slice(u, r)), o > r && vt(e = e.slice(r)), o > r && dt(e));
                    }
                    f.push(n);
                }
            }
            return gt(f);
        }
        function bt(e, t) {
            var n = 0, o = t.length > 0, a = e.length > 0, s = function(s, u, c, f, d) {
                var h, g, m, y = [], v = 0, b = "0", x = s && [], w = null != d, T = l, C = s || a && i.find.TAG("*", d && u.parentNode || u), k = N += null == T ? 1 : Math.random() || 0.1;
                for (w && (l = u !== p && u, r = n); null != (h = C[b]); b++) {
                    if (a && h) {
                        g = 0;
                        while (m = e[g++]) {
                            if (m(h, u, c)) {
                                f.push(h);
                                break;
                            }
                        }
                        w && (N = k, r = ++n);
                    }
                    o && ((h = !m && h) && v--, s && x.push(h));
                }
                if (v += b, o && b !== v) {
                    g = 0;
                    while (m = t[g++]) {
                        m(x, y, u, c);
                    }
                    if (s) {
                        if (v > 0) {
                            while (b--) {
                                x[b] || y[b] || (y[b] = L.call(f));
                            }
                        }
                        y = mt(y);
                    }
                    H.apply(f, y), w && !s && y.length > 0 && v + t.length > 1 && st.uniqueSort(f);
                }
                return w && (N = k, l = T), x;
            };
            return o ? ot(s) : s;
        }
        s = st.compile = function(e, t) {
            var n, r = [], i = [], o = S[e + " "];
            if (!o) {
                t || (t = ft(e)), n = t.length;
                while (n--) {
                    o = vt(t[n]), o[x] ? r.push(o) : i.push(o);
                }
                o = S(e, bt(i, r));
            }
            return o;
        };
        function xt(e, t, n) {
            var r = 0, i = t.length;
            for (; i > r; r++) {
                st(e, t[r], n);
            }
            return n;
        }
        function wt(e, t, n, r) {
            var o, a, u, l, c, p = ft(e);
            if (!r && 1 === p.length) {
                if (a = p[0] = p[0].slice(0), a.length > 2 && "ID" === (u = a[0]).type && 9 === t.nodeType && !d && i.relative[a[1].type]) {
                    if (t = i.find.ID(u.matches[0].replace(et, tt), t)[0], !t) {
                        return n;
                    }
                    e = e.slice(a.shift().value.length);
                }
                o = U.needsContext.test(e) ? 0 : a.length;
                while (o--) {
                    if (u = a[o], i.relative[l = u.type]) {
                        break;
                    }
                    if ((c = i.find[l]) && (r = c(u.matches[0].replace(et, tt), V.test(a[0].type) && t.parentNode || t))) {
                        if (a.splice(o, 1), e = r.length && dt(a), !e) {
                            return H.apply(n, q.call(r, 0)), n;
                        }
                        break;
                    }
                }
            }
            return s(e, p)(r, t, d, n, V.test(e)), n;
        }
        i.pseudos.nth = i.pseudos.eq;
        function Tt() {
        }
        i.filters = Tt.prototype = i.pseudos, i.setFilters = new Tt, c(), st.attr = b.attr, b.find = st, b.expr = st.selectors, b.expr[":"] = b.expr.pseudos, b.unique = st.uniqueSort, b.text = st.getText, b.isXMLDoc = st.isXML, b.contains = st.contains;
    }(e);
    var at = /Until$/, st = /^(?:parents|prev(?:Until|All))/, ut = /^.[^:#\[\.,]*$/, lt = b.expr.match.needsContext, ct = {children: !0,contents: !0,next: !0,prev: !0};
    b.fn.extend({find: function(e) {
            var t, n, r, i = this.length;
            if ("string" != typeof e) {
                return r = this, this.pushStack(b(e).filter(function() {
                    for (t = 0; i > t; t++) {
                        if (b.contains(r[t], this)) {
                            return !0;
                        }
                    }
                }));
            }
            for (n = [], t = 0; i > t; t++) {
                b.find(e, this[t], n);
            }
            return n = this.pushStack(i > 1 ? b.unique(n) : n), n.selector = (this.selector ? this.selector + " " : "") + e, n;
        },has: function(e) {
            var t, n = b(e, this), r = n.length;
            return this.filter(function() {
                for (t = 0; r > t; t++) {
                    if (b.contains(this, n[t])) {
                        return !0;
                    }
                }
            });
        },not: function(e) {
            return this.pushStack(ft(this, e, !1));
        },filter: function(e) {
            return this.pushStack(ft(this, e, !0));
        },is: function(e) {
            return !!e && ("string" == typeof e ? lt.test(e) ? b(e, this.context).index(this[0]) >= 0 : b.filter(e, this).length > 0 : this.filter(e).length > 0);
        },closest: function(e, t) {
            var n, r = 0, i = this.length, o = [], a = lt.test(e) || "string" != typeof e ? b(e, t || this.context) : 0;
            for (; i > r; r++) {
                n = this[r];
                while (n && n.ownerDocument && n !== t && 11 !== n.nodeType) {
                    if (a ? a.index(n) > -1 : b.find.matchesSelector(n, e)) {
                        o.push(n);
                        break;
                    }
                    n = n.parentNode;
                }
            }
            return this.pushStack(o.length > 1 ? b.unique(o) : o);
        },index: function(e) {
            return e ? "string" == typeof e ? b.inArray(this[0], b(e)) : b.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
        },add: function(e, t) {
            var n = "string" == typeof e ? b(e, t) : b.makeArray(e && e.nodeType ? [e] : e), r = b.merge(this.get(), n);
            return this.pushStack(b.unique(r));
        },addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
        }}), b.fn.andSelf = b.fn.addBack;
    function pt(e, t) {
        do {
            e = e[t];
        } while (e && 1 !== e.nodeType);
        return e;
    }
    b.each({parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null;
        },parents: function(e) {
            return b.dir(e, "parentNode");
        },parentsUntil: function(e, t, n) {
            return b.dir(e, "parentNode", n);
        },next: function(e) {
            return pt(e, "nextSibling");
        },prev: function(e) {
            return pt(e, "previousSibling");
        },nextAll: function(e) {
            return b.dir(e, "nextSibling");
        },prevAll: function(e) {
            return b.dir(e, "previousSibling");
        },nextUntil: function(e, t, n) {
            return b.dir(e, "nextSibling", n);
        },prevUntil: function(e, t, n) {
            return b.dir(e, "previousSibling", n);
        },siblings: function(e) {
            return b.sibling((e.parentNode || {}).firstChild, e);
        },children: function(e) {
            return b.sibling(e.firstChild);
        },contents: function(e) {
            return b.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : b.merge([], e.childNodes);
        }}, function(e, t) {
        b.fn[e] = function(n, r) {
            var i = b.map(this, t, n);
            return at.test(e) || (r = n), r && "string" == typeof r && (i = b.filter(r, i)), i = this.length > 1 && !ct[e] ? b.unique(i) : i, this.length > 1 && st.test(e) && (i = i.reverse()), this.pushStack(i);
        };
    }), b.extend({filter: function(e, t, n) {
            return n && (e = ":not(" + e + ")"), 1 === t.length ? b.find.matchesSelector(t[0], e) ? [t[0]] : [] : b.find.matches(e, t);
        },dir: function(e, n, r) {
            var i = [], o = e[n];
            while (o && 9 !== o.nodeType && (r === t || 1 !== o.nodeType || !b(o).is(r))) {
                1 === o.nodeType && i.push(o), o = o[n];
            }
            return i;
        },sibling: function(e, t) {
            var n = [];
            for (; e; e = e.nextSibling) {
                1 === e.nodeType && e !== t && n.push(e);
            }
            return n;
        }});
    function ft(e, t, n) {
        if (t = t || 0, b.isFunction(t)) {
            return b.grep(e, function(e, r) {
                var i = !!t.call(e, r, e);
                return i === n;
            });
        }
        if (t.nodeType) {
            return b.grep(e, function(e) {
                return e === t === n;
            });
        }
        if ("string" == typeof t) {
            var r = b.grep(e, function(e) {
                return 1 === e.nodeType;
            });
            if (ut.test(t)) {
                return b.filter(t, r, !n);
            }
            t = b.filter(t, r);
        }
        return b.grep(e, function(e) {
            return b.inArray(e, t) >= 0 === n;
        });
    }
    function dt(e) {
        var t = ht.split("|"), n = e.createDocumentFragment();
        if (n.createElement) {
            while (t.length) {
                n.createElement(t.pop());
            }
        }
        return n;
    }
    var ht = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video", gt = / jQuery\d+="(?:null|\d+)"/g, mt = RegExp("<(?:" + ht + ")[\\s/>]", "i"), yt = /^\s+/, vt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, bt = /<([\w:]+)/, xt = /<tbody/i, wt = /<|&#?\w+;/, Tt = /<(?:script|style|link)/i, Nt = /^(?:checkbox|radio)$/i, Ct = /checked\s*(?:[^=]|=\s*.checked.)/i, kt = /^$|\/(?:java|ecma)script/i, Et = /^true\/(.*)/, St = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, At = {option: [1, "<select multiple='multiple'>", "</select>"],legend: [1, "<fieldset>", "</fieldset>"],area: [1, "<map>", "</map>"],param: [1, "<object>", "</object>"],thead: [1, "<table>", "</table>"],tr: [2, "<table><tbody>", "</tbody></table>"],col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],_default: b.support.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]}, jt = dt(o), Dt = jt.appendChild(o.createElement("div"));
    At.optgroup = At.option, At.tbody = At.tfoot = At.colgroup = At.caption = At.thead, At.th = At.td, b.fn.extend({text: function(e) {
            return b.access(this, function(e) {
                return e === t ? b.text(this) : this.empty().append((this[0] && this[0].ownerDocument || o).createTextNode(e));
            }, null, e, arguments.length);
        },wrapAll: function(e) {
            if (b.isFunction(e)) {
                return this.each(function(t) {
                    b(this).wrapAll(e.call(this, t));
                });
            }
            if (this[0]) {
                var t = b(e, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                    var e = this;
                    while (e.firstChild && 1 === e.firstChild.nodeType) {
                        e = e.firstChild;
                    }
                    return e;
                }).append(this);
            }
            return this;
        },wrapInner: function(e) {
            return b.isFunction(e) ? this.each(function(t) {
                b(this).wrapInner(e.call(this, t));
            }) : this.each(function() {
                var t = b(this), n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e);
            });
        },wrap: function(e) {
            var t = b.isFunction(e);
            return this.each(function(n) {
                b(this).wrapAll(t ? e.call(this, n) : e);
            });
        },unwrap: function() {
            return this.parent().each(function() {
                b.nodeName(this, "body") || b(this).replaceWith(this.childNodes);
            }).end();
        },append: function() {
            return this.domManip(arguments, !0, function(e) {
                (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && this.appendChild(e);
            });
        },prepend: function() {
            return this.domManip(arguments, !0, function(e) {
                (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && this.insertBefore(e, this.firstChild);
            });
        },before: function() {
            return this.domManip(arguments, !1, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this);
            });
        },after: function() {
            return this.domManip(arguments, !1, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
            });
        },remove: function(e, t) {
            var n, r = 0;
            for (; null != (n = this[r]); r++) {
                (!e || b.filter(e, [n]).length > 0) && (t || 1 !== n.nodeType || b.cleanData(Ot(n)), n.parentNode && (t && b.contains(n.ownerDocument, n) && Mt(Ot(n, "script")), n.parentNode.removeChild(n)));
            }
            return this;
        },empty: function() {
            var e, t = 0;
            for (; null != (e = this[t]); t++) {
                1 === e.nodeType && b.cleanData(Ot(e, !1));
                while (e.firstChild) {
                    e.removeChild(e.firstChild);
                }
                e.options && b.nodeName(e, "select") && (e.options.length = 0);
            }
            return this;
        },clone: function(e, t) {
            return e = null == e ? !1 : e, t = null == t ? e : t, this.map(function() {
                return b.clone(this, e, t);
            });
        },html: function(e) {
            return b.access(this, function(e) {
                var n = this[0] || {}, r = 0, i = this.length;
                if (e === t) {
                    return 1 === n.nodeType ? n.innerHTML.replace(gt, "") : t;
                }
                if (!("string" != typeof e || Tt.test(e) || !b.support.htmlSerialize && mt.test(e) || !b.support.leadingWhitespace && yt.test(e) || At[(bt.exec(e) || ["", ""])[1].toLowerCase()])) {
                    e = e.replace(vt, "<$1></$2>");
                    try {
                        for (; i > r; r++) {
                            n = this[r] || {}, 1 === n.nodeType && (b.cleanData(Ot(n, !1)), n.innerHTML = e);
                        }
                        n = 0;
                    } catch (o) {
                    }
                }
                n && this.empty().append(e);
            }, null, e, arguments.length);
        },replaceWith: function(e) {
            var t = b.isFunction(e);
            return t || "string" == typeof e || (e = b(e).not(this).detach()), this.domManip([e], !0, function(e) {
                var t = this.nextSibling, n = this.parentNode;
                n && (b(this).remove(), n.insertBefore(e, t));
            });
        },detach: function(e) {
            return this.remove(e, !0);
        },domManip: function(e, n, r) {
            e = f.apply([], e);
            var i, o, a, s, u, l, c = 0, p = this.length, d = this, h = p - 1, g = e[0], m = b.isFunction(g);
            if (m || !(1 >= p || "string" != typeof g || b.support.checkClone) && Ct.test(g)) {
                return this.each(function(i) {
                    var o = d.eq(i);
                    m && (e[0] = g.call(this, i, n ? o.html() : t)), o.domManip(e, n, r);
                });
            }
            if (p && (l = b.buildFragment(e, this[0].ownerDocument, !1, this), i = l.firstChild, 1 === l.childNodes.length && (l = i), i)) {
                for (n = n && b.nodeName(i, "tr"), s = b.map(Ot(l, "script"), Ht), a = s.length; p > c; c++) {
                    o = l, c !== h && (o = b.clone(o, !0, !0), a && b.merge(s, Ot(o, "script"))), r.call(n && b.nodeName(this[c], "table") ? Lt(this[c], "tbody") : this[c], o, c);
                }
                if (a) {
                    for (u = s[s.length - 1].ownerDocument, b.map(s, qt), c = 0; a > c; c++) {
                        o = s[c], kt.test(o.type || "") && !b._data(o, "globalEval") && b.contains(u, o) && (o.src ? b.ajax({url: o.src,type: "GET",dataType: "script",async: !1,global: !1,"throws": !0}) : b.globalEval((o.text || o.textContent || o.innerHTML || "").replace(St, "")));
                    }
                }
                l = i = null;
            }
            return this;
        }});
    function Lt(e, t) {
        return e.getElementsByTagName(t)[0] || e.appendChild(e.ownerDocument.createElement(t));
    }
    function Ht(e) {
        var t = e.getAttributeNode("type");
        return e.type = (t && t.specified) + "/" + e.type, e;
    }
    function qt(e) {
        var t = Et.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"), e;
    }
    function Mt(e, t) {
        var n, r = 0;
        for (; null != (n = e[r]); r++) {
            b._data(n, "globalEval", !t || b._data(t[r], "globalEval"));
        }
    }
    function _t(e, t) {
        if (1 === t.nodeType && b.hasData(e)) {
            var n, r, i, o = b._data(e), a = b._data(t, o), s = o.events;
            if (s) {
                delete a.handle, a.events = {};
                for (n in s) {
                    for (r = 0, i = s[n].length; i > r; r++) {
                        b.event.add(t, n, s[n][r]);
                    }
                }
            }
            a.data && (a.data = b.extend({}, a.data));
        }
    }
    function Ft(e, t) {
        var n, r, i;
        if (1 === t.nodeType) {
            if (n = t.nodeName.toLowerCase(), !b.support.noCloneEvent && t[b.expando]) {
                i = b._data(t);
                for (r in i.events) {
                    b.removeEvent(t, r, i.handle);
                }
                t.removeAttribute(b.expando);
            }
            "script" === n && t.text !== e.text ? (Ht(t).text = e.text, qt(t)) : "object" === n ? (t.parentNode && (t.outerHTML = e.outerHTML), b.support.html5Clone && e.innerHTML && !b.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : "input" === n && Nt.test(e.type) ? (t.defaultChecked = t.checked = e.checked, t.value !== e.value && (t.value = e.value)) : "option" === n ? t.defaultSelected = t.selected = e.defaultSelected : ("input" === n || "textarea" === n) && (t.defaultValue = e.defaultValue);
        }
    }
    b.each({appendTo: "append",prependTo: "prepend",insertBefore: "before",insertAfter: "after",replaceAll: "replaceWith"}, function(e, t) {
        b.fn[e] = function(e) {
            var n, r = 0, i = [], o = b(e), a = o.length - 1;
            for (; a >= r; r++) {
                n = r === a ? this : this.clone(!0), b(o[r])[t](n), d.apply(i, n.get());
            }
            return this.pushStack(i);
        };
    });
    function Ot(e, n) {
        var r, o, a = 0, s = typeof e.getElementsByTagName !== i ? e.getElementsByTagName(n || "*") : typeof e.querySelectorAll !== i ? e.querySelectorAll(n || "*") : t;
        if (!s) {
            for (s = [], r = e.childNodes || e; null != (o = r[a]); a++) {
                !n || b.nodeName(o, n) ? s.push(o) : b.merge(s, Ot(o, n));
            }
        }
        return n === t || n && b.nodeName(e, n) ? b.merge([e], s) : s;
    }
    function Bt(e) {
        Nt.test(e.type) && (e.defaultChecked = e.checked);
    }
    b.extend({clone: function(e, t, n) {
            var r, i, o, a, s, u = b.contains(e.ownerDocument, e);
            if (b.support.html5Clone || b.isXMLDoc(e) || !mt.test("<" + e.nodeName + ">") ? o = e.cloneNode(!0) : (Dt.innerHTML = e.outerHTML, Dt.removeChild(o = Dt.firstChild)), !(b.support.noCloneEvent && b.support.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || b.isXMLDoc(e))) {
                for (r = Ot(o), s = Ot(e), a = 0; 
                null != (i = s[a]); ++a) {
                    r[a] && Ft(i, r[a]);
                }
            }
            if (t) {
                if (n) {
                    for (s = s || Ot(e), r = r || Ot(o), a = 0; null != (i = s[a]); a++) {
                        _t(i, r[a]);
                    }
                } else {
                    _t(e, o);
                }
            }
            return r = Ot(o, "script"), r.length > 0 && Mt(r, !u && Ot(e, "script")), r = s = i = null, o;
        },buildFragment: function(e, t, n, r) {
            var i, o, a, s, u, l, c, p = e.length, f = dt(t), d = [], h = 0;
            for (; p > h; h++) {
                if (o = e[h], o || 0 === o) {
                    if ("object" === b.type(o)) {
                        b.merge(d, o.nodeType ? [o] : o);
                    } else {
                        if (wt.test(o)) {
                            s = s || f.appendChild(t.createElement("div")), u = (bt.exec(o) || ["", ""])[1].toLowerCase(), c = At[u] || At._default, s.innerHTML = c[1] + o.replace(vt, "<$1></$2>") + c[2], i = c[0];
                            while (i--) {
                                s = s.lastChild;
                            }
                            if (!b.support.leadingWhitespace && yt.test(o) && d.push(t.createTextNode(yt.exec(o)[0])), !b.support.tbody) {
                                o = "table" !== u || xt.test(o) ? "<table>" !== c[1] || xt.test(o) ? 0 : s : s.firstChild, i = o && o.childNodes.length;
                                while (i--) {
                                    b.nodeName(l = o.childNodes[i], "tbody") && !l.childNodes.length && o.removeChild(l);
                                }
                            }
                            b.merge(d, s.childNodes), s.textContent = "";
                            while (s.firstChild) {
                                s.removeChild(s.firstChild);
                            }
                            s = f.lastChild;
                        } else {
                            d.push(t.createTextNode(o));
                        }
                    }
                }
            }
            s && f.removeChild(s), b.support.appendChecked || b.grep(Ot(d, "input"), Bt), h = 0;
            while (o = d[h++]) {
                if ((!r || -1 === b.inArray(o, r)) && (a = b.contains(o.ownerDocument, o), s = Ot(f.appendChild(o), "script"), a && Mt(s), n)) {
                    i = 0;
                    while (o = s[i++]) {
                        kt.test(o.type || "") && n.push(o);
                    }
                }
            }
            return s = null, f;
        },cleanData: function(e, t) {
            var n, r, o, a, s = 0, u = b.expando, l = b.cache, p = b.support.deleteExpando, f = b.event.special;
            for (; null != (n = e[s]); s++) {
                if ((t || b.acceptData(n)) && (o = n[u], a = o && l[o])) {
                    if (a.events) {
                        for (r in a.events) {
                            f[r] ? b.event.remove(n, r) : b.removeEvent(n, r, a.handle);
                        }
                    }
                    l[o] && (delete l[o], p ? delete n[u] : typeof n.removeAttribute !== i ? n.removeAttribute(u) : n[u] = null, c.push(o));
                }
            }
        }});
    var Pt, Rt, Wt, $t = /alpha\([^)]*\)/i, It = /opacity\s*=\s*([^)]*)/, zt = /^(top|right|bottom|left)$/, Xt = /^(none|table(?!-c[ea]).+)/, Ut = /^margin/, Vt = RegExp("^(" + x + ")(.*)$", "i"), Yt = RegExp("^(" + x + ")(?!px)[a-z%]+$", "i"), Jt = RegExp("^([+-])=(" + x + ")", "i"), Gt = {BODY: "block"}, Qt = {position: "absolute",visibility: "hidden",display: "block"}, Kt = {letterSpacing: 0,fontWeight: 400}, Zt = ["Top", "Right", "Bottom", "Left"], en = ["Webkit", "O", "Moz", "ms"];
    function tn(e, t) {
        if (t in e) {
            return t;
        }
        var n = t.charAt(0).toUpperCase() + t.slice(1), r = t, i = en.length;
        while (i--) {
            if (t = en[i] + n, t in e) {
                return t;
            }
        }
        return r;
    }
    function nn(e, t) {
        return e = t || e, "none" === b.css(e, "display") || !b.contains(e.ownerDocument, e);
    }
    function rn(e, t) {
        var n, r, i, o = [], a = 0, s = e.length;
        for (; s > a; a++) {
            r = e[a], r.style && (o[a] = b._data(r, "olddisplay"), n = r.style.display, t ? (o[a] || "none" !== n || (r.style.display = ""), "" === r.style.display && nn(r) && (o[a] = b._data(r, "olddisplay", un(r.nodeName)))) : o[a] || (i = nn(r), (n && "none" !== n || !i) && b._data(r, "olddisplay", i ? n : b.css(r, "display"))));
        }
        for (a = 0; s > a; a++) {
            r = e[a], r.style && (t && "none" !== r.style.display && "" !== r.style.display || (r.style.display = t ? o[a] || "" : "none"));
        }
        return e;
    }
    b.fn.extend({css: function(e, n) {
            return b.access(this, function(e, n, r) {
                var i, o, a = {}, s = 0;
                if (b.isArray(n)) {
                    for (o = Rt(e), i = n.length; i > s; s++) {
                        a[n[s]] = b.css(e, n[s], !1, o);
                    }
                    return a;
                }
                return r !== t ? b.style(e, n, r) : b.css(e, n);
            }, e, n, arguments.length > 1);
        },show: function() {
            return rn(this, !0);
        },hide: function() {
            return rn(this);
        },toggle: function(e) {
            var t = "boolean" == typeof e;
            return this.each(function() {
                (t ? e : nn(this)) ? b(this).show() : b(this).hide();
            });
        }}), b.extend({cssHooks: {opacity: {get: function(e, t) {
                    if (t) {
                        var n = Wt(e, "opacity");
                        return "" === n ? "1" : n;
                    }
                }}},cssNumber: {columnCount: !0,fillOpacity: !0,fontWeight: !0,lineHeight: !0,opacity: !0,orphans: !0,widows: !0,zIndex: !0,zoom: !0},cssProps: {"float": b.support.cssFloat ? "cssFloat" : "styleFloat"},style: function(e, n, r, i) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var o, a, s, u = b.camelCase(n), l = e.style;
                if (n = b.cssProps[u] || (b.cssProps[u] = tn(l, u)), s = b.cssHooks[n] || b.cssHooks[u], r === t) {
                    return s && "get" in s && (o = s.get(e, !1, i)) !== t ? o : l[n];
                }
                if (a = typeof r, "string" === a && (o = Jt.exec(r)) && (r = (o[1] + 1) * o[2] + parseFloat(b.css(e, n)), a = "number"), !(null == r || "number" === a && isNaN(r) || ("number" !== a || b.cssNumber[u] || (r += "px"), b.support.clearCloneStyle || "" !== r || 0 !== n.indexOf("background") || (l[n] = "inherit"), s && "set" in s && (r = s.set(e, r, i)) === t))) {
                    try {
                        l[n] = r;
                    } catch (c) {
                    }
                }
            }
        },css: function(e, n, r, i) {
            var o, a, s, u = b.camelCase(n);
            return n = b.cssProps[u] || (b.cssProps[u] = tn(e.style, u)), s = b.cssHooks[n] || b.cssHooks[u], s && "get" in s && (a = s.get(e, !0, r)), a === t && (a = Wt(e, n, i)), "normal" === a && n in Kt && (a = Kt[n]), "" === r || r ? (o = parseFloat(a), r === !0 || b.isNumeric(o) ? o || 0 : a) : a;
        },swap: function(e, t, n, r) {
            var i, o, a = {};
            for (o in t) {
                a[o] = e.style[o], e.style[o] = t[o];
            }
            i = n.apply(e, r || []);
            for (o in t) {
                e.style[o] = a[o];
            }
            return i;
        }}), e.getComputedStyle ? (Rt = function(t) {
        return e.getComputedStyle(t, null);
    }, Wt = function(e, n, r) {
        var i, o, a, s = r || Rt(e), u = s ? s.getPropertyValue(n) || s[n] : t, l = e.style;
        return s && ("" !== u || b.contains(e.ownerDocument, e) || (u = b.style(e, n)), Yt.test(u) && Ut.test(n) && (i = l.width, o = l.minWidth, a = l.maxWidth, l.minWidth = l.maxWidth = l.width = u, u = s.width, l.width = i, l.minWidth = o, l.maxWidth = a)), u;
    }) : o.documentElement.currentStyle && (Rt = function(e) {
        return e.currentStyle;
    }, Wt = function(e, n, r) {
        var i, o, a, s = r || Rt(e), u = s ? s[n] : t, l = e.style;
        return null == u && l && l[n] && (u = l[n]), Yt.test(u) && !zt.test(n) && (i = l.left, o = e.runtimeStyle, a = o && o.left, a && (o.left = e.currentStyle.left), l.left = "fontSize" === n ? "1em" : u, u = l.pixelLeft + "px", l.left = i, a && (o.left = a)), "" === u ? "auto" : u;
    });
    function on(e, t, n) {
        var r = Vt.exec(t);
        return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t;
    }
    function an(e, t, n, r, i) {
        var o = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0, a = 0;
        for (; 4 > o; o += 2) {
            "margin" === n && (a += b.css(e, n + Zt[o], !0, i)), r ? ("content" === n && (a -= b.css(e, "padding" + Zt[o], !0, i)), "margin" !== n && (a -= b.css(e, "border" + Zt[o] + "Width", !0, i))) : (a += b.css(e, "padding" + Zt[o], !0, i), "padding" !== n && (a += b.css(e, "border" + Zt[o] + "Width", !0, i)));
        }
        return a;
    }
    function sn(e, t, n) {
        var r = !0, i = "width" === t ? e.offsetWidth : e.offsetHeight, o = Rt(e), a = b.support.boxSizing && "border-box" === b.css(e, "boxSizing", !1, o);
        if (0 >= i || null == i) {
            if (i = Wt(e, t, o), (0 > i || null == i) && (i = e.style[t]), Yt.test(i)) {
                return i;
            }
            r = a && (b.support.boxSizingReliable || i === e.style[t]), i = parseFloat(i) || 0;
        }
        return i + an(e, t, n || (a ? "border" : "content"), r, o) + "px";
    }
    function un(e) {
        var t = o, n = Gt[e];
        return n || (n = ln(e, t), "none" !== n && n || (Pt = (Pt || b("<iframe frameborder='0' width='0' height='0'/>").css("cssText", "display:block !important")).appendTo(t.documentElement), t = (Pt[0].contentWindow || Pt[0].contentDocument).document, t.write("<!doctype html><html><body>"), t.close(), n = ln(e, t), Pt.detach()), Gt[e] = n), n;
    }
    function ln(e, t) {
        var n = b(t.createElement(e)).appendTo(t.body), r = b.css(n[0], "display");
        return n.remove(), r;
    }
    b.each(["height", "width"], function(e, n) {
        b.cssHooks[n] = {get: function(e, r, i) {
                return r ? 0 === e.offsetWidth && Xt.test(b.css(e, "display")) ? b.swap(e, Qt, function() {
                    return sn(e, n, i);
                }) : sn(e, n, i) : t;
            },set: function(e, t, r) {
                var i = r && Rt(e);
                return on(e, t, r ? an(e, n, r, b.support.boxSizing && "border-box" === b.css(e, "boxSizing", !1, i), i) : 0);
            }};
    }), b.support.opacity || (b.cssHooks.opacity = {get: function(e, t) {
            return It.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? 0.01 * parseFloat(RegExp.$1) + "" : t ? "1" : "";
        },set: function(e, t) {
            var n = e.style, r = e.currentStyle, i = b.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : "", o = r && r.filter || n.filter || "";
            n.zoom = 1, (t >= 1 || "" === t) && "" === b.trim(o.replace($t, "")) && n.removeAttribute && (n.removeAttribute("filter"), "" === t || r && !r.filter) || (n.filter = $t.test(o) ? o.replace($t, i) : o + " " + i);
        }}), b(function() {
        b.support.reliableMarginRight || (b.cssHooks.marginRight = {get: function(e, n) {
                return n ? b.swap(e, {display: "inline-block"}, Wt, [e, "marginRight"]) : t;
            }}), !b.support.pixelPosition && b.fn.position && b.each(["top", "left"], function(e, n) {
            b.cssHooks[n] = {get: function(e, r) {
                    return r ? (r = Wt(e, n), Yt.test(r) ? b(e).position()[n] + "px" : r) : t;
                }};
        });
    }), b.expr && b.expr.filters && (b.expr.filters.hidden = function(e) {
        return 0 >= e.offsetWidth && 0 >= e.offsetHeight || !b.support.reliableHiddenOffsets && "none" === (e.style && e.style.display || b.css(e, "display"));
    }, b.expr.filters.visible = function(e) {
        return !b.expr.filters.hidden(e);
    }), b.each({margin: "",padding: "",border: "Width"}, function(e, t) {
        b.cssHooks[e + t] = {expand: function(n) {
                var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n];
                for (; 4 > r; r++) {
                    i[e + Zt[r] + t] = o[r] || o[r - 2] || o[0];
                }
                return i;
            }}, Ut.test(e) || (b.cssHooks[e + t].set = on);
    });
    var cn = /%20/g, pn = /\[\]$/, fn = /\r?\n/g, dn = /^(?:submit|button|image|reset|file)$/i, hn = /^(?:input|select|textarea|keygen)/i;
    b.fn.extend({serialize: function() {
            return b.param(this.serializeArray());
        },serializeArray: function() {
            return this.map(function() {
                var e = b.prop(this, "elements");
                return e ? b.makeArray(e) : this;
            }).filter(function() {
                var e = this.type;
                return this.name && !b(this).is(":disabled") && hn.test(this.nodeName) && !dn.test(e) && (this.checked || !Nt.test(e));
            }).map(function(e, t) {
                var n = b(this).val();
                return null == n ? null : b.isArray(n) ? b.map(n, function(e) {
                    return {name: t.name,value: e.replace(fn, "\r\n")};
                }) : {name: t.name,value: n.replace(fn, "\r\n")};
            }).get();
        }}), b.param = function(e, n) {
        var r, i = [], o = function(e, t) {
            t = b.isFunction(t) ? t() : null == t ? "" : t, i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t);
        };
        if (n === t && (n = b.ajaxSettings && b.ajaxSettings.traditional), b.isArray(e) || e.jquery && !b.isPlainObject(e)) {
            b.each(e, function() {
                o(this.name, this.value);
            });
        } else {
            for (r in e) {
                gn(r, e[r], n, o);
            }
        }
        return i.join("&").replace(cn, "+");
    };
    function gn(e, t, n, r) {
        var i;
        if (b.isArray(t)) {
            b.each(t, function(t, i) {
                n || pn.test(e) ? r(e, i) : gn(e + "[" + ("object" == typeof i ? t : "") + "]", i, n, r);
            });
        } else {
            if (n || "object" !== b.type(t)) {
                r(e, t);
            } else {
                for (i in t) {
                    gn(e + "[" + i + "]", t[i], n, r);
                }
            }
        }
    }
    b.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, t) {
        b.fn[t] = function(e, n) {
            return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t);
        };
    }), b.fn.hover = function(e, t) {
        return this.mouseenter(e).mouseleave(t || e);
    };
    var mn, yn, vn = b.now(), bn = /\?/, xn = /#.*$/, wn = /([?&])_=[^&]*/, Tn = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm, Nn = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, Cn = /^(?:GET|HEAD)$/, kn = /^\/\//, En = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/, Sn = b.fn.load, An = {}, jn = {}, Dn = "*/".concat("*");
    try {
        yn = a.href;
    } catch (Ln) {
        yn = o.createElement("a"), yn.href = "", yn = yn.href;
    }
    mn = En.exec(yn.toLowerCase()) || [];
    function Hn(e) {
        return function(t, n) {
            "string" != typeof t && (n = t, t = "*");
            var r, i = 0, o = t.toLowerCase().match(w) || [];
            if (b.isFunction(n)) {
                while (r = o[i++]) {
                    "+" === r[0] ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n);
                }
            }
        };
    }
    function qn(e, n, r, i) {
        var o = {}, a = e === jn;
        function s(u) {
            var l;
            return o[u] = !0, b.each(e[u] || [], function(e, u) {
                var c = u(n, r, i);
                return "string" != typeof c || a || o[c] ? a ? !(l = c) : t : (n.dataTypes.unshift(c), s(c), !1);
            }), l;
        }
        return s(n.dataTypes[0]) || !o["*"] && s("*");
    }
    function Mn(e, n) {
        var r, i, o = b.ajaxSettings.flatOptions || {};
        for (i in n) {
            n[i] !== t && ((o[i] ? e : r || (r = {}))[i] = n[i]);
        }
        return r && b.extend(!0, e, r), e;
    }
    b.fn.load = function(e, n, r) {
        if ("string" != typeof e && Sn) {
            return Sn.apply(this, arguments);
        }
        var i, o, a, s = this, u = e.indexOf(" ");
        return u >= 0 && (i = e.slice(u, e.length), e = e.slice(0, u)), b.isFunction(n) ? (r = n, n = t) : n && "object" == typeof n && (a = "POST"), s.length > 0 && b.ajax({url: e,type: a,dataType: "html",data: n}).done(function(e) {
            o = arguments, s.html(i ? b("<div>").append(b.parseHTML(e)).find(i) : e);
        }).complete(r && function(e, t) {
            s.each(r, o || [e.responseText, t, e]);
        }), this;
    }, b.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
        b.fn[t] = function(e) {
            return this.on(t, e);
        };
    }), b.each(["get", "post"], function(e, n) {
        b[n] = function(e, r, i, o) {
            return b.isFunction(r) && (o = o || i, i = r, r = t), b.ajax({url: e,type: n,dataType: o,data: r,success: i});
        };
    }), b.extend({active: 0,lastModified: {},etag: {},ajaxSettings: {url: yn,type: "GET",isLocal: Nn.test(mn[1]),global: !0,processData: !0,async: !0,contentType: "application/x-www-form-urlencoded; charset=UTF-8",accepts: {"*": Dn,text: "text/plain",html: "text/html",xml: "application/xml, text/xml",json: "application/json, text/javascript"},contents: {xml: /xml/,html: /html/,json: /json/},responseFields: {xml: "responseXML",text: "responseText"},converters: {"* text": e.String,"text html": !0,"text json": b.parseJSON,"text xml": b.parseXML},flatOptions: {url: !0,context: !0}},ajaxSetup: function(e, t) {
            return t ? Mn(Mn(e, b.ajaxSettings), t) : Mn(b.ajaxSettings, e);
        },ajaxPrefilter: Hn(An),ajaxTransport: Hn(jn),ajax: function(e, n) {
            "object" == typeof e && (n = e, e = t), n = n || {};
            var r, i, o, a, s, u, l, c, p = b.ajaxSetup({}, n), f = p.context || p, d = p.context && (f.nodeType || f.jquery) ? b(f) : b.event, h = b.Deferred(), g = b.Callbacks("once memory"), m = p.statusCode || {}, y = {}, v = {}, x = 0, T = "canceled", N = {readyState: 0,getResponseHeader: function(e) {
                    var t;
                    if (2 === x) {
                        if (!c) {
                            c = {};
                            while (t = Tn.exec(a)) {
                                c[t[1].toLowerCase()] = t[2];
                            }
                        }
                        t = c[e.toLowerCase()];
                    }
                    return null == t ? null : t;
                },getAllResponseHeaders: function() {
                    return 2 === x ? a : null;
                },setRequestHeader: function(e, t) {
                    var n = e.toLowerCase();
                    return x || (e = v[n] = v[n] || e, y[e] = t), this;
                },overrideMimeType: function(e) {
                    return x || (p.mimeType = e), this;
                },statusCode: function(e) {
                    var t;
                    if (e) {
                        if (2 > x) {
                            for (t in e) {
                                m[t] = [m[t], e[t]];
                            }
                        } else {
                            N.always(e[N.status]);
                        }
                    }
                    return this;
                },abort: function(e) {
                    var t = e || T;
                    return l && l.abort(t), k(0, t), this;
                }};
            if (h.promise(N).complete = g.add, N.success = N.done, N.error = N.fail, p.url = ((e || p.url || yn) + "").replace(xn, "").replace(kn, mn[1] + "//"), p.type = n.method || n.type || p.method || p.type, p.dataTypes = b.trim(p.dataType || "*").toLowerCase().match(w) || [""], null == p.crossDomain && (r = En.exec(p.url.toLowerCase()), p.crossDomain = !(!r || r[1] === mn[1] && r[2] === mn[2] && (r[3] || ("http:" === r[1] ? 80 : 443)) == (mn[3] || ("http:" === mn[1] ? 80 : 443)))), p.data && p.processData && "string" != typeof p.data && (p.data = b.param(p.data, p.traditional)), qn(An, p, n, N), 2 === x) {
                return N;
            }
            u = p.global, u && 0 === b.active++ && b.event.trigger("ajaxStart"), p.type = p.type.toUpperCase(), p.hasContent = !Cn.test(p.type), o = p.url, p.hasContent || (p.data && (o = p.url += (bn.test(o) ? "&" : "?") + p.data, delete p.data), p.cache === !1 && (p.url = wn.test(o) ? o.replace(wn, "$1_=" + vn++) : o + (bn.test(o) ? "&" : "?") + "_=" + vn++)), p.ifModified && (b.lastModified[o] && N.setRequestHeader("If-Modified-Since", b.lastModified[o]), b.etag[o] && N.setRequestHeader("If-None-Match", b.etag[o])), (p.data && p.hasContent && p.contentType !== !1 || n.contentType) && N.setRequestHeader("Content-Type", p.contentType), N.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + Dn + "; q=0.01" : "") : p.accepts["*"]);
            for (i in p.headers) {
                N.setRequestHeader(i, p.headers[i]);
            }
            if (p.beforeSend && (p.beforeSend.call(f, N, p) === !1 || 2 === x)) {
                return N.abort();
            }
            T = "abort";
            for (i in {success: 1,error: 1,complete: 1}) {
                N[i](p[i]);
            }
            if (l = qn(jn, p, n, N)) {
                N.readyState = 1, u && d.trigger("ajaxSend", [N, p]), p.async && p.timeout > 0 && (s = setTimeout(function() {
                    N.abort("timeout");
                }, p.timeout));
                try {
                    x = 1, l.send(y, k);
                } catch (C) {
                    if (!(2 > x)) {
                        throw C;
                    }
                    k(-1, C);
                }
            } else {
                k(-1, "No Transport");
            }
            function k(e, n, r, i) {
                var c, y, v, w, T, C = n;
                2 !== x && (x = 2, s && clearTimeout(s), l = t, a = i || "", N.readyState = e > 0 ? 4 : 0, r && (w = _n(p, N, r)), e >= 200 && 300 > e || 304 === e ? (p.ifModified && (T = N.getResponseHeader("Last-Modified"), T && (b.lastModified[o] = T), T = N.getResponseHeader("etag"), T && (b.etag[o] = T)), 204 === e ? (c = !0, C = "nocontent") : 304 === e ? (c = !0, C = "notmodified") : (c = Fn(p, w), C = c.state, y = c.data, v = c.error, c = !v)) : (v = C, (e || !C) && (C = "error", 0 > e && (e = 0))), N.status = e, N.statusText = (n || C) + "", c ? h.resolveWith(f, [y, C, N]) : h.rejectWith(f, [N, C, v]), N.statusCode(m), m = t, u && d.trigger(c ? "ajaxSuccess" : "ajaxError", [N, p, c ? y : v]), g.fireWith(f, [N, C]), u && (d.trigger("ajaxComplete", [N, p]), --b.active || b.event.trigger("ajaxStop")));
            }
            return N;
        },getScript: function(e, n) {
            return b.get(e, t, n, "script");
        },getJSON: function(e, t, n) {
            return b.get(e, t, n, "json");
        }});
    function _n(e, n, r) {
        var i, o, a, s, u = e.contents, l = e.dataTypes, c = e.responseFields;
        for (s in c) {
            s in r && (n[c[s]] = r[s]);
        }
        while ("*" === l[0]) {
            l.shift(), o === t && (o = e.mimeType || n.getResponseHeader("Content-Type"));
        }
        if (o) {
            for (s in u) {
                if (u[s] && u[s].test(o)) {
                    l.unshift(s);
                    break;
                }
            }
        }
        if (l[0] in r) {
            a = l[0];
        } else {
            for (s in r) {
                if (!l[0] || e.converters[s + " " + l[0]]) {
                    a = s;
                    break;
                }
                i || (i = s);
            }
            a = a || i;
        }
        return a ? (a !== l[0] && l.unshift(a), r[a]) : t;
    }
    function Fn(e, t) {
        var n, r, i, o, a = {}, s = 0, u = e.dataTypes.slice(), l = u[0];
        if (e.dataFilter && (t = e.dataFilter(t, e.dataType)), u[1]) {
            for (i in e.converters) {
                a[i.toLowerCase()] = e.converters[i];
            }
        }
        for (; r = u[++s]; ) {
            if ("*" !== r) {
                if ("*" !== l && l !== r) {
                    if (i = a[l + " " + r] || a["* " + r], !i) {
                        for (n in a) {
                            if (o = n.split(" "), o[1] === r && (i = a[l + " " + o[0]] || a["* " + o[0]])) {
                                i === !0 ? i = a[n] : a[n] !== !0 && (r = o[0], u.splice(s--, 0, r));
                                break;
                            }
                        }
                    }
                    if (i !== !0) {
                        if (i && e["throws"]) {
                            t = i(t);
                        } else {
                            try {
                                t = i(t);
                            } catch (c) {
                                return {state: "parsererror",error: i ? c : "No conversion from " + l + " to " + r};
                            }
                        }
                    }
                }
                l = r;
            }
        }
        return {state: "success",data: t};
    }
    b.ajaxSetup({accepts: {script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents: {script: /(?:java|ecma)script/},converters: {"text script": function(e) {
                return b.globalEval(e), e;
            }}}), b.ajaxPrefilter("script", function(e) {
        e.cache === t && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1);
    }), b.ajaxTransport("script", function(e) {
        if (e.crossDomain) {
            var n, r = o.head || b("head")[0] || o.documentElement;
            return {send: function(t, i) {
                    n = o.createElement("script"), n.async = !0, e.scriptCharset && (n.charset = e.scriptCharset), n.src = e.url, n.onload = n.onreadystatechange = function(e, t) {
                        (t || !n.readyState || /loaded|complete/.test(n.readyState)) && (n.onload = n.onreadystatechange = null, n.parentNode && n.parentNode.removeChild(n), n = null, t || i(200, "success"));
                    }, r.insertBefore(n, r.firstChild);
                },abort: function() {
                    n && n.onload(t, !0);
                }};
        }
    });
    var On = [], Bn = /(=)\?(?=&|$)|\?\?/;
    b.ajaxSetup({jsonp: "callback",jsonpCallback: function() {
            var e = On.pop() || b.expando + "_" + vn++;
            return this[e] = !0, e;
        }}), b.ajaxPrefilter("json jsonp", function(n, r, i) {
        var o, a, s, u = n.jsonp !== !1 && (Bn.test(n.url) ? "url" : "string" == typeof n.data && !(n.contentType || "").indexOf("application/x-www-form-urlencoded") && Bn.test(n.data) && "data");
        return u || "jsonp" === n.dataTypes[0] ? (o = n.jsonpCallback = b.isFunction(n.jsonpCallback) ? n.jsonpCallback() : n.jsonpCallback, u ? n[u] = n[u].replace(Bn, "$1" + o) : n.jsonp !== !1 && (n.url += (bn.test(n.url) ? "&" : "?") + n.jsonp + "=" + o), n.converters["script json"] = function() {
            return s || b.error(o + " was not called"), s[0];
        }, n.dataTypes[0] = "json", a = e[o], e[o] = function() {
            s = arguments;
        }, i.always(function() {
            e[o] = a, n[o] && (n.jsonpCallback = r.jsonpCallback, On.push(o)), s && b.isFunction(a) && a(s[0]), s = a = t;
        }), "script") : t;
    });
    var Pn, Rn, Wn = 0, $n = e.ActiveXObject && function() {
        var e;
        for (e in Pn) {
            Pn[e](t, !0);
        }
    };
    function In() {
        try {
            return new e.XMLHttpRequest;
        } catch (t) {
        }
    }
    function zn() {
        try {
            return new e.ActiveXObject("Microsoft.XMLHTTP");
        } catch (t) {
        }
    }
    b.ajaxSettings.xhr = e.ActiveXObject ? function() {
        return !this.isLocal && In() || zn();
    } : In, Rn = b.ajaxSettings.xhr(), b.support.cors = !!Rn && "withCredentials" in Rn, Rn = b.support.ajax = !!Rn, Rn && b.ajaxTransport(function(n) {
        if (!n.crossDomain || b.support.cors) {
            var r;
            return {send: function(i, o) {
                    var a, s, u = n.xhr();
                    if (n.username ? u.open(n.type, n.url, n.async, n.username, n.password) : u.open(n.type, n.url, n.async), n.xhrFields) {
                        for (s in n.xhrFields) {
                            u[s] = n.xhrFields[s];
                        }
                    }
                    n.mimeType && u.overrideMimeType && u.overrideMimeType(n.mimeType), n.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest");
                    try {
                        for (s in i) {
                            u.setRequestHeader(s, i[s]);
                        }
                    } catch (l) {
                    }
                    u.send(n.hasContent && n.data || null), r = function(e, i) {
                        var s, l, c, p;
                        try {
                            if (r && (i || 4 === u.readyState)) {
                                if (r = t, a && (u.onreadystatechange = b.noop, $n && delete Pn[a]), i) {
                                    4 !== u.readyState && u.abort();
                                } else {
                                    p = {}, s = u.status, l = u.getAllResponseHeaders(), "string" == typeof u.responseText && (p.text = u.responseText);
                                    try {
                                        c = u.statusText;
                                    } catch (f) {
                                        c = "";
                                    }
                                    s || !n.isLocal || n.crossDomain ? 1223 === s && (s = 204) : s = p.text ? 200 : 404;
                                }
                            }
                        } catch (d) {
                            i || o(-1, d);
                        }
                        p && o(s, c, p, l);
                    }, n.async ? 4 === u.readyState ? setTimeout(r) : (a = ++Wn, $n && (Pn || (Pn = {}, b(e).unload($n)), Pn[a] = r), u.onreadystatechange = r) : r();
                },abort: function() {
                    r && r(t, !0);
                }};
        }
    });
    var Xn, Un, Vn = /^(?:toggle|show|hide)$/, Yn = RegExp("^(?:([+-])=|)(" + x + ")([a-z%]*)$", "i"), Jn = /queueHooks$/, Gn = [nr], Qn = {"*": [function(e, t) {
                var n, r, i = this.createTween(e, t), o = Yn.exec(t), a = i.cur(), s = +a || 0, u = 1, l = 20;
                if (o) {
                    if (n = +o[2], r = o[3] || (b.cssNumber[e] ? "" : "px"), "px" !== r && s) {
                        s = b.css(i.elem, e, !0) || n || 1;
                        do {
                            u = u || ".5", s /= u, b.style(i.elem, e, s + r);
                        } while (u !== (u = i.cur() / a) && 1 !== u && --l);
                    }
                    i.unit = r, i.start = s, i.end = o[1] ? s + (o[1] + 1) * n : n;
                }
                return i;
            }]};
    function Kn() {
        return setTimeout(function() {
            Xn = t;
        }), Xn = b.now();
    }
    function Zn(e, t) {
        b.each(t, function(t, n) {
            var r = (Qn[t] || []).concat(Qn["*"]), i = 0, o = r.length;
            for (; o > i; i++) {
                if (r[i].call(e, t, n)) {
                    return;
                }
            }
        });
    }
    function er(e, t, n) {
        var r, i, o = 0, a = Gn.length, s = b.Deferred().always(function() {
            delete u.elem;
        }), u = function() {
            if (i) {
                return !1;
            }
            var t = Xn || Kn(), n = Math.max(0, l.startTime + l.duration - t), r = n / l.duration || 0, o = 1 - r, a = 0, u = l.tweens.length;
            for (; u > a; a++) {
                l.tweens[a].run(o);
            }
            return s.notifyWith(e, [l, o, n]), 1 > o && u ? n : (s.resolveWith(e, [l]), !1);
        }, l = s.promise({elem: e,props: b.extend({}, t),opts: b.extend(!0, {specialEasing: {}}, n),originalProperties: t,originalOptions: n,startTime: Xn || Kn(),duration: n.duration,tweens: [],createTween: function(t, n) {
                var r = b.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing);
                return l.tweens.push(r), r;
            },stop: function(t) {
                var n = 0, r = t ? l.tweens.length : 0;
                if (i) {
                    return this;
                }
                for (i = !0; r > n; n++) {
                    l.tweens[n].run(1);
                }
                return t ? s.resolveWith(e, [l, t]) : s.rejectWith(e, [l, t]), this;
            }}), c = l.props;
        for (tr(c, l.opts.specialEasing); a > o; o++) {
            if (r = Gn[o].call(l, e, c, l.opts)) {
                return r;
            }
        }
        return Zn(l, c), b.isFunction(l.opts.start) && l.opts.start.call(e, l), b.fx.timer(b.extend(u, {elem: e,anim: l,queue: l.opts.queue})), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always);
    }
    function tr(e, t) {
        var n, r, i, o, a;
        for (i in e) {
            if (r = b.camelCase(i), o = t[r], n = e[i], b.isArray(n) && (o = n[1], n = e[i] = n[0]), i !== r && (e[r] = n, delete e[i]), a = b.cssHooks[r], a && "expand" in a) {
                n = a.expand(n), delete e[r];
                for (i in n) {
                    i in e || (e[i] = n[i], t[i] = o);
                }
            } else {
                t[r] = o;
            }
        }
    }
    b.Animation = b.extend(er, {tweener: function(e, t) {
            b.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");
            var n, r = 0, i = e.length;
            for (; i > r; r++) {
                n = e[r], Qn[n] = Qn[n] || [], Qn[n].unshift(t);
            }
        },prefilter: function(e, t) {
            t ? Gn.unshift(e) : Gn.push(e);
        }});
    function nr(e, t, n) {
        var r, i, o, a, s, u, l, c, p, f = this, d = e.style, h = {}, g = [], m = e.nodeType && nn(e);
        n.queue || (c = b._queueHooks(e, "fx"), null == c.unqueued && (c.unqueued = 0, p = c.empty.fire, c.empty.fire = function() {
            c.unqueued || p();
        }), c.unqueued++, f.always(function() {
            f.always(function() {
                c.unqueued--, b.queue(e, "fx").length || c.empty.fire();
            });
        })), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [d.overflow, d.overflowX, d.overflowY], "inline" === b.css(e, "display") && "none" === b.css(e, "float") && (b.support.inlineBlockNeedsLayout && "inline" !== un(e.nodeName) ? d.zoom = 1 : d.display = "inline-block")), n.overflow && (d.overflow = "hidden", b.support.shrinkWrapBlocks || f.always(function() {
            d.overflow = n.overflow[0], d.overflowX = n.overflow[1], d.overflowY = n.overflow[2];
        }));
        for (i in t) {
            if (a = t[i], Vn.exec(a)) {
                if (delete t[i], u = u || "toggle" === a, a === (m ? "hide" : "show")) {
                    continue;
                }
                g.push(i);
            }
        }
        if (o = g.length) {
            s = b._data(e, "fxshow") || b._data(e, "fxshow", {}), "hidden" in s && (m = s.hidden), u && (s.hidden = !m), m ? b(e).show() : f.done(function() {
                b(e).hide();
            }), f.done(function() {
                var t;
                b._removeData(e, "fxshow");
                for (t in h) {
                    b.style(e, t, h[t]);
                }
            });
            for (i = 0; o > i; i++) {
                r = g[i], l = f.createTween(r, m ? s[r] : 0), h[r] = s[r] || b.style(e, r), r in s || (s[r] = l.start, m && (l.end = l.start, l.start = "width" === r || "height" === r ? 1 : 0));
            }
        }
    }
    function rr(e, t, n, r, i) {
        return new rr.prototype.init(e, t, n, r, i);
    }
    b.Tween = rr, rr.prototype = {constructor: rr,init: function(e, t, n, r, i, o) {
            this.elem = e, this.prop = n, this.easing = i || "swing", this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (b.cssNumber[n] ? "" : "px");
        },cur: function() {
            var e = rr.propHooks[this.prop];
            return e && e.get ? e.get(this) : rr.propHooks._default.get(this);
        },run: function(e) {
            var t, n = rr.propHooks[this.prop];
            return this.pos = t = this.options.duration ? b.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : rr.propHooks._default.set(this), this;
        }}, rr.prototype.init.prototype = rr.prototype, rr.propHooks = {_default: {get: function(e) {
                var t;
                return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = b.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0) : e.elem[e.prop];
            },set: function(e) {
                b.fx.step[e.prop] ? b.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[b.cssProps[e.prop]] || b.cssHooks[e.prop]) ? b.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now;
            }}}, rr.propHooks.scrollTop = rr.propHooks.scrollLeft = {set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
        }}, b.each(["toggle", "show", "hide"], function(e, t) {
        var n = b.fn[t];
        b.fn[t] = function(e, r, i) {
            return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(ir(t, !0), e, r, i);
        };
    }), b.fn.extend({fadeTo: function(e, t, n, r) {
            return this.filter(nn).css("opacity", 0).show().end().animate({opacity: t}, e, n, r);
        },animate: function(e, t, n, r) {
            var i = b.isEmptyObject(e), o = b.speed(t, n, r), a = function() {
                var t = er(this, b.extend({}, e), o);
                a.finish = function() {
                    t.stop(!0);
                }, (i || b._data(this, "finish")) && t.stop(!0);
            };
            return a.finish = a, i || o.queue === !1 ? this.each(a) : this.queue(o.queue, a);
        },stop: function(e, n, r) {
            var i = function(e) {
                var t = e.stop;
                delete e.stop, t(r);
            };
            return "string" != typeof e && (r = n, n = e, e = t), n && e !== !1 && this.queue(e || "fx", []), this.each(function() {
                var t = !0, n = null != e && e + "queueHooks", o = b.timers, a = b._data(this);
                if (n) {
                    a[n] && a[n].stop && i(a[n]);
                } else {
                    for (n in a) {
                        a[n] && a[n].stop && Jn.test(n) && i(a[n]);
                    }
                }
                for (n = o.length; n--; ) {
                    o[n].elem !== this || null != e && o[n].queue !== e || (o[n].anim.stop(r), t = !1, o.splice(n, 1));
                }
                (t || !r) && b.dequeue(this, e);
            });
        },finish: function(e) {
            return e !== !1 && (e = e || "fx"), this.each(function() {
                var t, n = b._data(this), r = n[e + "queue"], i = n[e + "queueHooks"], o = b.timers, a = r ? r.length : 0;
                for (n.finish = !0, b.queue(this, e, []), i && i.cur && i.cur.finish && i.cur.finish.call(this), t = o.length; t--; ) {
                    o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
                }
                for (t = 0; a > t; t++) {
                    r[t] && r[t].finish && r[t].finish.call(this);
                }
                delete n.finish;
            });
        }});
    function ir(e, t) {
        var n, r = {height: e}, i = 0;
        for (t = t ? 1 : 0; 4 > i; i += 2 - t) {
            n = Zt[i], r["margin" + n] = r["padding" + n] = e;
        }
        return t && (r.opacity = r.width = e), r;
    }
    b.each({slideDown: ir("show"),slideUp: ir("hide"),slideToggle: ir("toggle"),fadeIn: {opacity: "show"},fadeOut: {opacity: "hide"},fadeToggle: {opacity: "toggle"}}, function(e, t) {
        b.fn[e] = function(e, n, r) {
            return this.animate(t, e, n, r);
        };
    }), b.speed = function(e, t, n) {
        var r = e && "object" == typeof e ? b.extend({}, e) : {complete: n || !n && t || b.isFunction(e) && e,duration: e,easing: n && t || t && !b.isFunction(t) && t};
        return r.duration = b.fx.off ? 0 : "number" == typeof r.duration ? r.duration : r.duration in b.fx.speeds ? b.fx.speeds[r.duration] : b.fx.speeds._default, (null == r.queue || r.queue === !0) && (r.queue = "fx"), r.old = r.complete, r.complete = function() {
            b.isFunction(r.old) && r.old.call(this), r.queue && b.dequeue(this, r.queue);
        }, r;
    }, b.easing = {linear: function(e) {
            return e;
        },swing: function(e) {
            return 0.5 - Math.cos(e * Math.PI) / 2;
        }}, b.timers = [], b.fx = rr.prototype.init, b.fx.tick = function() {
        var e, n = b.timers, r = 0;
        for (Xn = b.now(); n.length > r; r++) {
            e = n[r], e() || n[r] !== e || n.splice(r--, 1);
        }
        n.length || b.fx.stop(), Xn = t;
    }, b.fx.timer = function(e) {
        e() && b.timers.push(e) && b.fx.start();
    }, b.fx.interval = 13, b.fx.start = function() {
        Un || (Un = setInterval(b.fx.tick, b.fx.interval));
    }, b.fx.stop = function() {
        clearInterval(Un), Un = null;
    }, b.fx.speeds = {slow: 600,fast: 200,_default: 400}, b.fx.step = {}, b.expr && b.expr.filters && (b.expr.filters.animated = function(e) {
        return b.grep(b.timers, function(t) {
            return e === t.elem;
        }).length;
    }), b.fn.offset = function(e) {
        if (arguments.length) {
            return e === t ? this : this.each(function(t) {
                b.offset.setOffset(this, e, t);
            });
        }
        var n, r, o = {top: 0,left: 0}, a = this[0], s = a && a.ownerDocument;
        if (s) {
            return n = s.documentElement, b.contains(n, a) ? (typeof a.getBoundingClientRect !== i && (o = a.getBoundingClientRect()), r = or(s), {top: o.top + (r.pageYOffset || n.scrollTop) - (n.clientTop || 0),left: o.left + (r.pageXOffset || n.scrollLeft) - (n.clientLeft || 0)}) : o;
        }
    }, b.offset = {setOffset: function(e, t, n) {
            var r = b.css(e, "position");
            "static" === r && (e.style.position = "relative");
            var i = b(e), o = i.offset(), a = b.css(e, "top"), s = b.css(e, "left"), u = ("absolute" === r || "fixed" === r) && b.inArray("auto", [a, s]) > -1, l = {}, c = {}, p, f;
            u ? (c = i.position(), p = c.top, f = c.left) : (p = parseFloat(a) || 0, f = parseFloat(s) || 0), b.isFunction(t) && (t = t.call(e, n, o)), null != t.top && (l.top = t.top - o.top + p), null != t.left && (l.left = t.left - o.left + f), "using" in t ? t.using.call(e, l) : i.css(l);
        }}, b.fn.extend({position: function() {
            if (this[0]) {
                var e, t, n = {top: 0,left: 0}, r = this[0];
                return "fixed" === b.css(r, "position") ? t = r.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), b.nodeName(e[0], "html") || (n = e.offset()), n.top += b.css(e[0], "borderTopWidth", !0), n.left += b.css(e[0], "borderLeftWidth", !0)), {top: t.top - n.top - b.css(r, "marginTop", !0),left: t.left - n.left - b.css(r, "marginLeft", !0)};
            }
        },offsetParent: function() {
            return this.map(function() {
                var e = this.offsetParent || o.documentElement;
                while (e && !b.nodeName(e, "html") && "static" === b.css(e, "position")) {
                    e = e.offsetParent;
                }
                return e || o.documentElement;
            });
        }}), b.each({scrollLeft: "pageXOffset",scrollTop: "pageYOffset"}, function(e, n) {
        var r = /Y/.test(n);
        b.fn[e] = function(i) {
            return b.access(this, function(e, i, o) {
                var a = or(e);
                return o === t ? a ? n in a ? a[n] : a.document.documentElement[i] : e[i] : (a ? a.scrollTo(r ? b(a).scrollLeft() : o, r ? o : b(a).scrollTop()) : e[i] = o, t);
            }, e, i, arguments.length, null);
        };
    });
    function or(e) {
        return b.isWindow(e) ? e : 9 === e.nodeType ? e.defaultView || e.parentWindow : !1;
    }
    b.each({Height: "height",Width: "width"}, function(e, n) {
        b.each({padding: "inner" + e,content: n,"": "outer" + e}, function(r, i) {
            b.fn[i] = function(i, o) {
                var a = arguments.length && (r || "boolean" != typeof i), s = r || (i === !0 || o === !0 ? "margin" : "border");
                return b.access(this, function(n, r, i) {
                    var o;
                    return b.isWindow(n) ? n.document.documentElement["client" + e] : 9 === n.nodeType ? (o = n.documentElement, Math.max(n.body["scroll" + e], o["scroll" + e], n.body["offset" + e], o["offset" + e], o["client" + e])) : i === t ? b.css(n, r, s) : b.style(n, r, i, s);
                }, n, a ? i : t, a, null);
            };
        });
    }), e.jQuery = e.$ = b, "function" == typeof define && define.amd && define.amd.jQuery && define("jquery", [], function() {
        return b;
    });
})(window);
/*!
 * jQuery Migrate - v1.1.0 - 2013-01-31
 * https://github.com/jquery/jquery-migrate
 * Copyright 2005, 2013 jQuery Foundation, Inc. and other contributors; Licensed MIT
 */
(function(jQuery, window, undefined) {
    var warnedAbout = {};
    jQuery.migrateWarnings = [];
    jQuery.migrateMute = true;
    if (!jQuery.migrateMute && window.console && console.log) {
        console.log("JQMIGRATE: Logging is active");
    }
    if (jQuery.migrateTrace === undefined) {
        jQuery.migrateTrace = true;
    }
    jQuery.migrateReset = function() {
        warnedAbout = {};
        jQuery.migrateWarnings.length = 0;
    };
    function migrateWarn(msg) {
        if (!warnedAbout[msg]) {
            warnedAbout[msg] = true;
            jQuery.migrateWarnings.push(msg);
            if (window.console && console.warn && !jQuery.migrateMute) {
                console.warn("JQMIGRATE: " + msg);
                if (jQuery.migrateTrace && console.trace) {
                    console.trace();
                }
            }
        }
    }
    function migrateWarnProp(obj, prop, value, msg) {
        if (Object.defineProperty) {
            try {
                Object.defineProperty(obj, prop, {configurable: true,enumerable: true,get: function() {
                        migrateWarn(msg);
                        return value;
                    },set: function(newValue) {
                        migrateWarn(msg);
                        value = newValue;
                    }});
                return;
            } catch (err) {
            }
        }
        jQuery._definePropertyBroken = true;
        obj[prop] = value;
    }
    if (document.compatMode === "BackCompat") {
        migrateWarn("jQuery is not compatible with Quirks Mode");
    }
    var attrFn = {}, oldAttr = jQuery.attr, valueAttrGet = jQuery.attrHooks.value && jQuery.attrHooks.value.get || function() {
        return null;
    }, valueAttrSet = jQuery.attrHooks.value && jQuery.attrHooks.value.set || function() {
        return undefined;
    }, rnoType = /^(?:input|button)$/i, rnoAttrNodeType = /^[238]$/, rboolean = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i, ruseDefault = /^(?:checked|selected)$/i;
    migrateWarnProp(jQuery, "attrFn", attrFn, "jQuery.attrFn is deprecated");
    jQuery.attr = function(elem, name, value, pass) {
        var lowerName = name.toLowerCase(), nType = elem && elem.nodeType;
        if (pass && oldAttr.length < 4) {
            migrateWarn("jQuery.fn.attr( props, pass ) is deprecated");
            if (elem && !rnoAttrNodeType.test(nType) && jQuery.isFunction(jQuery.fn[name])) {
                return jQuery(elem)[name](value);
            }
        }
        if (name === "type" && value !== undefined && rnoType.test(elem.nodeName) && elem.parentNode) {
            migrateWarn("Can't change the 'type' of an input or button in IE 6/7/8");
        }
        if (!jQuery.attrHooks[lowerName] && rboolean.test(lowerName)) {
            jQuery.attrHooks[lowerName] = {get: function(elem, name) {
                    var attrNode, property = jQuery.prop(elem, name);
                    return property === true || typeof property !== "boolean" && (attrNode = elem.getAttributeNode(name)) && attrNode.nodeValue !== false ? name.toLowerCase() : undefined;
                },set: function(elem, value, name) {
                    var propName;
                    if (value === false) {
                        jQuery.removeAttr(elem, name);
                    } else {
                        propName = jQuery.propFix[name] || name;
                        if (propName in elem) {
                            elem[propName] = true;
                        }
                        elem.setAttribute(name, name.toLowerCase());
                    }
                    return name;
                }};
            if (ruseDefault.test(lowerName)) {
                migrateWarn("jQuery.fn.attr('" + lowerName + "') may use property instead of attribute");
            }
        }
        return oldAttr.call(jQuery, elem, name, value);
    };
    jQuery.attrHooks.value = {get: function(elem, name) {
            var nodeName = (elem.nodeName || "").toLowerCase();
            if (nodeName === "button") {
                return valueAttrGet.apply(this, arguments);
            }
            if (nodeName !== "input" && nodeName !== "option") {
                migrateWarn("jQuery.fn.attr('value') no longer gets properties");
            }
            return name in elem ? elem.value : null;
        },set: function(elem, value) {
            var nodeName = (elem.nodeName || "").toLowerCase();
            if (nodeName === "button") {
                return valueAttrSet.apply(this, arguments);
            }
            if (nodeName !== "input" && nodeName !== "option") {
                migrateWarn("jQuery.fn.attr('value', val) no longer sets properties");
            }
            elem.value = value;
        }};
    var matched, browser, oldInit = jQuery.fn.init, oldParseJSON = jQuery.parseJSON, rquickExpr = /^(?:[^<]*(<[\w\W]+>)[^>]*|#([\w\-]*))$/;
    jQuery.fn.init = function(selector, context, rootjQuery) {
        var match;
        if (selector && typeof selector === "string" && !jQuery.isPlainObject(context) && (match = rquickExpr.exec(selector)) && match[1]) {
            if (selector.charAt(0) !== "<") {
                migrateWarn("$(html) HTML strings must start with '<' character");
            }
            if (context && context.context) {
                context = context.context;
            }
            if (jQuery.parseHTML) {
                return oldInit.call(this, jQuery.parseHTML(jQuery.trim(selector), context, true), context, rootjQuery);
            }
        }
        return oldInit.apply(this, arguments);
    };
    jQuery.fn.init.prototype = jQuery.fn;
    jQuery.parseJSON = function(json) {
        if (!json && json !== null) {
            migrateWarn("jQuery.parseJSON requires a valid JSON string");
            return null;
        }
        return oldParseJSON.apply(this, arguments);
    };
    jQuery.uaMatch = function(ua) {
        ua = ua.toLowerCase();
        var match = /(chrome)[ \/]([\w.]+)/.exec(ua) || /(webkit)[ \/]([\w.]+)/.exec(ua) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(ua) || /(msie) ([\w.]+)/.exec(ua) || ua.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(ua) || [];
        return {browser: match[1] || "",version: match[2] || "0"};
    };
    matched = jQuery.uaMatch(navigator.userAgent);
    browser = {};
    if (matched.browser) {
        browser[matched.browser] = true;
        browser.version = matched.version;
    }
    if (browser.chrome) {
        browser.webkit = true;
    } else {
        if (browser.webkit) {
            browser.safari = true;
        }
    }
    jQuery.browser = browser;
    migrateWarnProp(jQuery, "browser", browser, "jQuery.browser is deprecated");
    jQuery.sub = function() {
        function jQuerySub(selector, context) {
            return new jQuerySub.fn.init(selector, context);
        }
        jQuery.extend(true, jQuerySub, this);
        jQuerySub.superclass = this;
        jQuerySub.fn = jQuerySub.prototype = this();
        jQuerySub.fn.constructor = jQuerySub;
        jQuerySub.sub = this.sub;
        jQuerySub.fn.init = function init(selector, context) {
            if (context && context instanceof jQuery && !(context instanceof jQuerySub)) {
                context = jQuerySub(context);
            }
            return jQuery.fn.init.call(this, selector, context, rootjQuerySub);
        };
        jQuerySub.fn.init.prototype = jQuerySub.fn;
        var rootjQuerySub = jQuerySub(document);
        migrateWarn("jQuery.sub() is deprecated");
        return jQuerySub;
    };
    var oldFnData = jQuery.fn.data;
    jQuery.fn.data = function(name) {
        var ret, evt, elem = this[0];
        if (elem && name === "events" && arguments.length === 1) {
            ret = jQuery.data(elem, name);
            evt = jQuery._data(elem, name);
            if ((ret === undefined || ret === evt) && evt !== undefined) {
                migrateWarn("Use of jQuery.fn.data('events') is deprecated");
                return evt;
            }
        }
        return oldFnData.apply(this, arguments);
    };
    var rscriptType = /\/(java|ecma)script/i, oldSelf = jQuery.fn.andSelf || jQuery.fn.addBack;
    jQuery.fn.andSelf = function() {
        migrateWarn("jQuery.fn.andSelf() replaced by jQuery.fn.addBack()");
        return oldSelf.apply(this, arguments);
    };
    if (!jQuery.clean) {
        jQuery.clean = function(elems, context, fragment, scripts) {
            context = context || document;
            context = !context.nodeType && context[0] || context;
            context = context.ownerDocument || context;
            migrateWarn("jQuery.clean() is deprecated");
            var i, elem, handleScript, jsTags, ret = [];
            jQuery.merge(ret, jQuery.buildFragment(elems, context).childNodes);
            if (fragment) {
                handleScript = function(elem) {
                    if (!elem.type || rscriptType.test(elem.type)) {
                        return scripts ? scripts.push(elem.parentNode ? elem.parentNode.removeChild(elem) : elem) : fragment.appendChild(elem);
                    }
                };
                for (i = 0; (elem = ret[i]) != null; i++) {
                    if (!(jQuery.nodeName(elem, "script") && handleScript(elem))) {
                        fragment.appendChild(elem);
                        if (typeof elem.getElementsByTagName !== "undefined") {
                            jsTags = jQuery.grep(jQuery.merge([], elem.getElementsByTagName("script")), handleScript);
                            ret.splice.apply(ret, [i + 1, 0].concat(jsTags));
                            i += jsTags.length;
                        }
                    }
                }
            }
            return ret;
        };
    }
    var eventAdd = jQuery.event.add, eventRemove = jQuery.event.remove, eventTrigger = jQuery.event.trigger, oldToggle = jQuery.fn.toggle, oldLive = jQuery.fn.live, oldDie = jQuery.fn.die, ajaxEvents = "ajaxStart|ajaxStop|ajaxSend|ajaxComplete|ajaxError|ajaxSuccess", rajaxEvent = new RegExp("\\b(?:" + ajaxEvents + ")\\b"), rhoverHack = /(?:^|\s)hover(\.\S+|)\b/, hoverHack = function(events) {
        if (typeof (events) != "string" || jQuery.event.special.hover) {
            return events;
        }
        if (rhoverHack.test(events)) {
            migrateWarn("'hover' pseudo-event is deprecated, use 'mouseenter mouseleave'");
        }
        return events && events.replace(rhoverHack, "mouseenter$1 mouseleave$1");
    };
    if (jQuery.event.props && jQuery.event.props[0] !== "attrChange") {
        jQuery.event.props.unshift("attrChange", "attrName", "relatedNode", "srcElement");
    }
    if (jQuery.event.dispatch) {
        migrateWarnProp(jQuery.event, "handle", jQuery.event.dispatch, "jQuery.event.handle is undocumented and deprecated");
    }
    jQuery.event.add = function(elem, types, handler, data, selector) {
        if (elem !== document && rajaxEvent.test(types)) {
            migrateWarn("AJAX events should be attached to document: " + types);
        }
        eventAdd.call(this, elem, hoverHack(types || ""), handler, data, selector);
    };
    jQuery.event.remove = function(elem, types, handler, selector, mappedTypes) {
        eventRemove.call(this, elem, hoverHack(types) || "", handler, selector, mappedTypes);
    };
    jQuery.fn.error = function() {
        var args = Array.prototype.slice.call(arguments, 0);
        migrateWarn("jQuery.fn.error() is deprecated");
        args.splice(0, 0, "error");
        if (arguments.length) {
            return this.bind.apply(this, args);
        }
        this.triggerHandler.apply(this, args);
        return this;
    };
    jQuery.fn.toggle = function(fn, fn2) {
        if (!jQuery.isFunction(fn) || !jQuery.isFunction(fn2)) {
            return oldToggle.apply(this, arguments);
        }
        migrateWarn("jQuery.fn.toggle(handler, handler...) is deprecated");
        var args = arguments, guid = fn.guid || jQuery.guid++, i = 0, toggler = function(event) {
            var lastToggle = (jQuery._data(this, "lastToggle" + fn.guid) || 0) % i;
            jQuery._data(this, "lastToggle" + fn.guid, lastToggle + 1);
            event.preventDefault();
            return args[lastToggle].apply(this, arguments) || false;
        };
        toggler.guid = guid;
        while (i < args.length) {
            args[i++].guid = guid;
        }
        return this.click(toggler);
    };
    jQuery.fn.live = function(types, data, fn) {
        migrateWarn("jQuery.fn.live() is deprecated");
        if (oldLive) {
            return oldLive.apply(this, arguments);
        }
        jQuery(this.context).on(types, this.selector, data, fn);
        return this;
    };
    jQuery.fn.die = function(types, fn) {
        migrateWarn("jQuery.fn.die() is deprecated");
        if (oldDie) {
            return oldDie.apply(this, arguments);
        }
        jQuery(this.context).off(types, this.selector || "**", fn);
        return this;
    };
    jQuery.event.trigger = function(event, data, elem, onlyHandlers) {
        if (!elem & !rajaxEvent.test(event)) {
            migrateWarn("Global events are undocumented and deprecated");
        }
        return eventTrigger.call(this, event, data, elem || document, onlyHandlers);
    };
    jQuery.each(ajaxEvents.split("|"), function(_, name) {
        jQuery.event.special[name] = {setup: function() {
                var elem = this;
                if (elem !== document) {
                    jQuery.event.add(document, name + "." + jQuery.guid, function() {
                        jQuery.event.trigger(name, null, elem, true);
                    });
                    jQuery._data(this, name, jQuery.guid++);
                }
                return false;
            },teardown: function() {
                if (this !== document) {
                    jQuery.event.remove(document, name + "." + jQuery._data(this, name));
                }
                return false;
            }};
    });
})(jQuery, window);
/*! jQuery UI - v1.10.3 - 2013-08-28
* http://jqueryui.com
* Includes: jquery.ui.core.js, jquery.ui.widget.js, jquery.ui.mouse.js, jquery.ui.position.js, jquery.ui.draggable.js, jquery.ui.resizable.js, jquery.ui.sortable.js, jquery.ui.accordion.js, jquery.ui.autocomplete.js, jquery.ui.menu.js
* Copyright 2013 jQuery Foundation and other contributors Licensed MIT */
(function(e, t) {
    function i(t, i) {
        var a, n, r, o = t.nodeName.toLowerCase();
        return "area" === o ? (a = t.parentNode, n = a.name, t.href && n && "map" === a.nodeName.toLowerCase() ? (r = e("img[usemap=#" + n + "]")[0], !!r && s(r)) : !1) : (/input|select|textarea|button|object/.test(o) ? !t.disabled : "a" === o ? t.href || i : i) && s(t);
    }
    function s(t) {
        return e.expr.filters.visible(t) && !e(t).parents().addBack().filter(function() {
            return "hidden" === e.css(this, "visibility");
        }).length;
    }
    var a = 0, n = /^ui-id-\d+$/;
    e.ui = e.ui || {}, e.extend(e.ui, {version: "1.10.3",keyCode: {BACKSPACE: 8,COMMA: 188,DELETE: 46,DOWN: 40,END: 35,ENTER: 13,ESCAPE: 27,HOME: 36,LEFT: 37,NUMPAD_ADD: 107,NUMPAD_DECIMAL: 110,NUMPAD_DIVIDE: 111,NUMPAD_ENTER: 108,NUMPAD_MULTIPLY: 106,NUMPAD_SUBTRACT: 109,PAGE_DOWN: 34,PAGE_UP: 33,PERIOD: 190,RIGHT: 39,SPACE: 32,TAB: 9,UP: 38}}), e.fn.extend({focus: function(t) {
            return function(i, s) {
                return "number" == typeof i ? this.each(function() {
                    var t = this;
                    setTimeout(function() {
                        e(t).focus(), s && s.call(t);
                    }, i);
                }) : t.apply(this, arguments);
            };
        }(e.fn.focus),scrollParent: function() {
            var t;
            return t = e.ui.ie && /(static|relative)/.test(this.css("position")) || /absolute/.test(this.css("position")) ? this.parents().filter(function() {
                return /(relative|absolute|fixed)/.test(e.css(this, "position")) && /(auto|scroll)/.test(e.css(this, "overflow") + e.css(this, "overflow-y") + e.css(this, "overflow-x"));
            }).eq(0) : this.parents().filter(function() {
                return /(auto|scroll)/.test(e.css(this, "overflow") + e.css(this, "overflow-y") + e.css(this, "overflow-x"));
            }).eq(0), /fixed/.test(this.css("position")) || !t.length ? e(document) : t;
        },zIndex: function(i) {
            if (i !== t) {
                return this.css("zIndex", i);
            }
            if (this.length) {
                for (var s, a, n = e(this[0]); n.length && n[0] !== document; ) {
                    if (s = n.css("position"), ("absolute" === s || "relative" === s || "fixed" === s) && (a = parseInt(n.css("zIndex"), 10), !isNaN(a) && 0 !== a)) {
                        return a;
                    }
                    n = n.parent();
                }
            }
            return 0;
        },uniqueId: function() {
            return this.each(function() {
                this.id || (this.id = "ui-id-" + ++a);
            });
        },removeUniqueId: function() {
            return this.each(function() {
                n.test(this.id) && e(this).removeAttr("id");
            });
        }}), e.extend(e.expr[":"], {data: e.expr.createPseudo ? e.expr.createPseudo(function(t) {
            return function(i) {
                return !!e.data(i, t);
            };
        }) : function(t, i, s) {
            return !!e.data(t, s[3]);
        },focusable: function(t) {
            return i(t, !isNaN(e.attr(t, "tabindex")));
        },tabbable: function(t) {
            var s = e.attr(t, "tabindex"), a = isNaN(s);
            return (a || s >= 0) && i(t, !a);
        }}), e("<a>").outerWidth(1).jquery || e.each(["Width", "Height"], function(i, s) {
        function a(t, i, s, a) {
            return e.each(n, function() {
                i -= parseFloat(e.css(t, "padding" + this)) || 0, s && (i -= parseFloat(e.css(t, "border" + this + "Width")) || 0), a && (i -= parseFloat(e.css(t, "margin" + this)) || 0);
            }), i;
        }
        var n = "Width" === s ? ["Left", "Right"] : ["Top", "Bottom"], r = s.toLowerCase(), o = {innerWidth: e.fn.innerWidth,innerHeight: e.fn.innerHeight,outerWidth: e.fn.outerWidth,outerHeight: e.fn.outerHeight};
        e.fn["inner" + s] = function(i) {
            return i === t ? o["inner" + s].call(this) : this.each(function() {
                e(this).css(r, a(this, i) + "px");
            });
        }, e.fn["outer" + s] = function(t, i) {
            return "number" != typeof t ? o["outer" + s].call(this, t) : this.each(function() {
                e(this).css(r, a(this, t, !0, i) + "px");
            });
        };
    }), e.fn.addBack || (e.fn.addBack = function(e) {
        return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
    }), e("<a>").data("a-b", "a").removeData("a-b").data("a-b") && (e.fn.removeData = function(t) {
        return function(i) {
            return arguments.length ? t.call(this, e.camelCase(i)) : t.call(this);
        };
    }(e.fn.removeData)), e.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()), e.support.selectstart = "onselectstart" in document.createElement("div"), e.fn.extend({disableSelection: function() {
            return this.bind((e.support.selectstart ? "selectstart" : "mousedown") + ".ui-disableSelection", function(e) {
                e.preventDefault();
            });
        },enableSelection: function() {
            return this.unbind(".ui-disableSelection");
        }}), e.extend(e.ui, {plugin: {add: function(t, i, s) {
                var a, n = e.ui[t].prototype;
                for (a in s) {
                    n.plugins[a] = n.plugins[a] || [], n.plugins[a].push([i, s[a]]);
                }
            },call: function(e, t, i) {
                var s, a = e.plugins[t];
                if (a && e.element[0].parentNode && 11 !== e.element[0].parentNode.nodeType) {
                    for (s = 0; a.length > s; s++) {
                        e.options[a[s][0]] && a[s][1].apply(e.element, i);
                    }
                }
            }},hasScroll: function(t, i) {
            if ("hidden" === e(t).css("overflow")) {
                return !1;
            }
            var s = i && "left" === i ? "scrollLeft" : "scrollTop", a = !1;
            return t[s] > 0 ? !0 : (t[s] = 1, a = t[s] > 0, t[s] = 0, a);
        }});
})(jQuery);
(function(e, t) {
    var i = 0, s = Array.prototype.slice, n = e.cleanData;
    e.cleanData = function(t) {
        for (var i, s = 0; null != (i = t[s]); s++) {
            try {
                e(i).triggerHandler("remove");
            } catch (a) {
            }
        }
        n(t);
    }, e.widget = function(i, s, n) {
        var a, r, o, h, l = {}, u = i.split(".")[0];
        i = i.split(".")[1], a = u + "-" + i, n || (n = s, s = e.Widget), e.expr[":"][a.toLowerCase()] = function(t) {
            return !!e.data(t, a);
        }, e[u] = e[u] || {}, r = e[u][i], o = e[u][i] = function(e, i) {
            return this._createWidget ? (arguments.length && this._createWidget(e, i), t) : new o(e, i);
        }, e.extend(o, r, {version: n.version,_proto: e.extend({}, n),_childConstructors: []}), h = new s, h.options = e.widget.extend({}, h.options), e.each(n, function(i, n) {
            return e.isFunction(n) ? (l[i] = function() {
                var e = function() {
                    return s.prototype[i].apply(this, arguments);
                }, t = function(e) {
                    return s.prototype[i].apply(this, e);
                };
                return function() {
                    var i, s = this._super, a = this._superApply;
                    return this._super = e, this._superApply = t, i = n.apply(this, arguments), this._super = s, this._superApply = a, i;
                };
            }(), t) : (l[i] = n, t);
        }), o.prototype = e.widget.extend(h, {widgetEventPrefix: r ? h.widgetEventPrefix : i}, l, {constructor: o,namespace: u,widgetName: i,widgetFullName: a}), r ? (e.each(r._childConstructors, function(t, i) {
            var s = i.prototype;
            e.widget(s.namespace + "." + s.widgetName, o, i._proto);
        }), delete r._childConstructors) : s._childConstructors.push(o), e.widget.bridge(i, o);
    }, e.widget.extend = function(i) {
        for (var n, a, r = s.call(arguments, 1), o = 0, h = r.length; h > o; o++) {
            for (n in r[o]) {
                a = r[o][n], r[o].hasOwnProperty(n) && a !== t && (i[n] = e.isPlainObject(a) ? e.isPlainObject(i[n]) ? e.widget.extend({}, i[n], a) : e.widget.extend({}, a) : a);
            }
        }
        return i;
    }, e.widget.bridge = function(i, n) {
        var a = n.prototype.widgetFullName || i;
        e.fn[i] = function(r) {
            var o = "string" == typeof r, h = s.call(arguments, 1), l = this;
            return r = !o && h.length ? e.widget.extend.apply(null, [r].concat(h)) : r, o ? this.each(function() {
                var s, n = e.data(this, a);
                return n ? e.isFunction(n[r]) && "_" !== r.charAt(0) ? (s = n[r].apply(n, h), s !== n && s !== t ? (l = s && s.jquery ? l.pushStack(s.get()) : s, !1) : t) : e.error("no such method '" + r + "' for " + i + " widget instance") : e.error("cannot call methods on " + i + " prior to initialization; " + "attempted to call method '" + r + "'");
            }) : this.each(function() {
                var t = e.data(this, a);
                t ? t.option(r || {})._init() : e.data(this, a, new n(r, this));
            }), l;
        };
    }, e.Widget = function() {
    }, e.Widget._childConstructors = [], e.Widget.prototype = {widgetName: "widget",widgetEventPrefix: "",defaultElement: "<div>",options: {disabled: !1,create: null},_createWidget: function(t, s) {
            s = e(s || this.defaultElement || this)[0], this.element = e(s), this.uuid = i++, this.eventNamespace = "." + this.widgetName + this.uuid, this.options = e.widget.extend({}, this.options, this._getCreateOptions(), t), this.bindings = e(), this.hoverable = e(), this.focusable = e(), s !== this && (e.data(s, this.widgetFullName, this), this._on(!0, this.element, {remove: function(e) {
                    e.target === s && this.destroy();
                }}), this.document = e(s.style ? s.ownerDocument : s.document || s), this.window = e(this.document[0].defaultView || this.document[0].parentWindow)), this._create(), this._trigger("create", null, this._getCreateEventData()), this._init();
        },_getCreateOptions: e.noop,_getCreateEventData: e.noop,_create: e.noop,_init: e.noop,destroy: function() {
            this._destroy(), this.element.unbind(this.eventNamespace).removeData(this.widgetName).removeData(this.widgetFullName).removeData(e.camelCase(this.widgetFullName)), this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName + "-disabled " + "ui-state-disabled"), this.bindings.unbind(this.eventNamespace), this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus");
        },_destroy: e.noop,widget: function() {
            return this.element;
        },option: function(i, s) {
            var n, a, r, o = i;
            if (0 === arguments.length) {
                return e.widget.extend({}, this.options);
            }
            if ("string" == typeof i) {
                if (o = {}, n = i.split("."), i = n.shift(), n.length) {
                    for (a = o[i] = e.widget.extend({}, this.options[i]), r = 0; n.length - 1 > r; r++) {
                        a[n[r]] = a[n[r]] || {}, a = a[n[r]];
                    }
                    if (i = n.pop(), s === t) {
                        return a[i] === t ? null : a[i];
                    }
                    a[i] = s;
                } else {
                    if (s === t) {
                        return this.options[i] === t ? null : this.options[i];
                    }
                    o[i] = s;
                }
            }
            return this._setOptions(o), this;
        },_setOptions: function(e) {
            var t;
            for (t in e) {
                this._setOption(t, e[t]);
            }
            return this;
        },_setOption: function(e, t) {
            return this.options[e] = t, "disabled" === e && (this.widget().toggleClass(this.widgetFullName + "-disabled ui-state-disabled", !!t).attr("aria-disabled", t), this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus")), this;
        },enable: function() {
            return this._setOption("disabled", !1);
        },disable: function() {
            return this._setOption("disabled", !0);
        },_on: function(i, s, n) {
            var a, r = this;
            "boolean" != typeof i && (n = s, s = i, i = !1), n ? (s = a = e(s), this.bindings = this.bindings.add(s)) : (n = s, s = this.element, a = this.widget()), e.each(n, function(n, o) {
                function h() {
                    return i || r.options.disabled !== !0 && !e(this).hasClass("ui-state-disabled") ? ("string" == typeof o ? r[o] : o).apply(r, arguments) : t;
                }
                "string" != typeof o && (h.guid = o.guid = o.guid || h.guid || e.guid++);
                var l = n.match(/^(\w+)\s*(.*)$/), u = l[1] + r.eventNamespace, c = l[2];
                c ? a.delegate(c, u, h) : s.bind(u, h);
            });
        },_off: function(e, t) {
            t = (t || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace, e.unbind(t).undelegate(t);
        },_delay: function(e, t) {
            function i() {
                return ("string" == typeof e ? s[e] : e).apply(s, arguments);
            }
            var s = this;
            return setTimeout(i, t || 0);
        },_hoverable: function(t) {
            this.hoverable = this.hoverable.add(t), this._on(t, {mouseenter: function(t) {
                    e(t.currentTarget).addClass("ui-state-hover");
                },mouseleave: function(t) {
                    e(t.currentTarget).removeClass("ui-state-hover");
                }});
        },_focusable: function(t) {
            this.focusable = this.focusable.add(t), this._on(t, {focusin: function(t) {
                    e(t.currentTarget).addClass("ui-state-focus");
                },focusout: function(t) {
                    e(t.currentTarget).removeClass("ui-state-focus");
                }});
        },_trigger: function(t, i, s) {
            var n, a, r = this.options[t];
            if (s = s || {}, i = e.Event(i), i.type = (t === this.widgetEventPrefix ? t : this.widgetEventPrefix + t).toLowerCase(), i.target = this.element[0], a = i.originalEvent) {
                for (n in a) {
                    n in i || (i[n] = a[n]);
                }
            }
            return this.element.trigger(i, s), !(e.isFunction(r) && r.apply(this.element[0], [i].concat(s)) === !1 || i.isDefaultPrevented());
        }}, e.each({show: "fadeIn",hide: "fadeOut"}, function(t, i) {
        e.Widget.prototype["_" + t] = function(s, n, a) {
            "string" == typeof n && (n = {effect: n});
            var r, o = n ? n === !0 || "number" == typeof n ? i : n.effect || i : t;
            n = n || {}, "number" == typeof n && (n = {duration: n}), r = !e.isEmptyObject(n), n.complete = a, n.delay && s.delay(n.delay), r && e.effects && e.effects.effect[o] ? s[t](n) : o !== t && s[o] ? s[o](n.duration, n.easing, a) : s.queue(function(i) {
                e(this)[t](), a && a.call(s[0]), i();
            });
        };
    });
})(jQuery);
(function(e) {
    var t = !1;
    e(document).mouseup(function() {
        t = !1;
    }), e.widget("ui.mouse", {version: "1.10.3",options: {cancel: "input,textarea,button,select,option",distance: 1,delay: 0},_mouseInit: function() {
            var t = this;
            this.element.bind("mousedown." + this.widgetName, function(e) {
                return t._mouseDown(e);
            }).bind("click." + this.widgetName, function(i) {
                return !0 === e.data(i.target, t.widgetName + ".preventClickEvent") ? (e.removeData(i.target, t.widgetName + ".preventClickEvent"), i.stopImmediatePropagation(), !1) : undefined;
            }), this.started = !1;
        },_mouseDestroy: function() {
            this.element.unbind("." + this.widgetName), this._mouseMoveDelegate && e(document).unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate);
        },_mouseDown: function(i) {
            if (!t) {
                this._mouseStarted && this._mouseUp(i), this._mouseDownEvent = i;
                var s = this, n = 1 === i.which, a = "string" == typeof this.options.cancel && i.target.nodeName ? e(i.target).closest(this.options.cancel).length : !1;
                return n && !a && this._mouseCapture(i) ? (this.mouseDelayMet = !this.options.delay, this.mouseDelayMet || (this._mouseDelayTimer = setTimeout(function() {
                    s.mouseDelayMet = !0;
                }, this.options.delay)), this._mouseDistanceMet(i) && this._mouseDelayMet(i) && (this._mouseStarted = this._mouseStart(i) !== !1, !this._mouseStarted) ? (i.preventDefault(), !0) : (!0 === e.data(i.target, this.widgetName + ".preventClickEvent") && e.removeData(i.target, this.widgetName + ".preventClickEvent"), this._mouseMoveDelegate = function(e) {
                    return s._mouseMove(e);
                }, this._mouseUpDelegate = function(e) {
                    return s._mouseUp(e);
                }, e(document).bind("mousemove." + this.widgetName, this._mouseMoveDelegate).bind("mouseup." + this.widgetName, this._mouseUpDelegate), i.preventDefault(), t = !0, !0)) : !0;
            }
        },_mouseMove: function(t) {
            return e.ui.ie && (!document.documentMode || 9 > document.documentMode) && !t.button ? this._mouseUp(t) : this._mouseStarted ? (this._mouseDrag(t), t.preventDefault()) : (this._mouseDistanceMet(t) && this._mouseDelayMet(t) && (this._mouseStarted = this._mouseStart(this._mouseDownEvent, t) !== !1, this._mouseStarted ? this._mouseDrag(t) : this._mouseUp(t)), !this._mouseStarted);
        },_mouseUp: function(t) {
            return e(document).unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate), this._mouseStarted && (this._mouseStarted = !1, t.target === this._mouseDownEvent.target && e.data(t.target, this.widgetName + ".preventClickEvent", !0), this._mouseStop(t)), !1;
        },_mouseDistanceMet: function(e) {
            return Math.max(Math.abs(this._mouseDownEvent.pageX - e.pageX), Math.abs(this._mouseDownEvent.pageY - e.pageY)) >= this.options.distance;
        },_mouseDelayMet: function() {
            return this.mouseDelayMet;
        },_mouseStart: function() {
        },_mouseDrag: function() {
        },_mouseStop: function() {
        },_mouseCapture: function() {
            return !0;
        }});
})(jQuery);
(function(t, e) {
    function i(t, e, i) {
        return [parseFloat(t[0]) * (p.test(t[0]) ? e / 100 : 1), parseFloat(t[1]) * (p.test(t[1]) ? i / 100 : 1)];
    }
    function s(e, i) {
        return parseInt(t.css(e, i), 10) || 0;
    }
    function n(e) {
        var i = e[0];
        return 9 === i.nodeType ? {width: e.width(),height: e.height(),offset: {top: 0,left: 0}} : t.isWindow(i) ? {width: e.width(),height: e.height(),offset: {top: e.scrollTop(),left: e.scrollLeft()}} : i.preventDefault ? {width: 0,height: 0,offset: {top: i.pageY,left: i.pageX}} : {width: e.outerWidth(),height: e.outerHeight(),offset: e.offset()};
    }
    t.ui = t.ui || {};
    var a, o = Math.max, r = Math.abs, h = Math.round, l = /left|center|right/, c = /top|center|bottom/, u = /[\+\-]\d+(\.[\d]+)?%?/, d = /^\w+/, p = /%$/, f = t.fn.position;
    t.position = {scrollbarWidth: function() {
            if (a !== e) {
                return a;
            }
            var i, s, n = t("<div style='display:block;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"), o = n.children()[0];
            return t("body").append(n), i = o.offsetWidth, n.css("overflow", "scroll"), s = o.offsetWidth, i === s && (s = n[0].clientWidth), n.remove(), a = i - s;
        },getScrollInfo: function(e) {
            var i = e.isWindow ? "" : e.element.css("overflow-x"), s = e.isWindow ? "" : e.element.css("overflow-y"), n = "scroll" === i || "auto" === i && e.width < e.element[0].scrollWidth, a = "scroll" === s || "auto" === s && e.height < e.element[0].scrollHeight;
            return {width: a ? t.position.scrollbarWidth() : 0,height: n ? t.position.scrollbarWidth() : 0};
        },getWithinInfo: function(e) {
            var i = t(e || window), s = t.isWindow(i[0]);
            return {element: i,isWindow: s,offset: i.offset() || {left: 0,top: 0},scrollLeft: i.scrollLeft(),scrollTop: i.scrollTop(),width: s ? i.width() : i.outerWidth(),height: s ? i.height() : i.outerHeight()};
        }}, t.fn.position = function(e) {
        if (!e || !e.of) {
            return f.apply(this, arguments);
        }
        e = t.extend({}, e);
        var a, p, m, g, v, b, _ = t(e.of), y = t.position.getWithinInfo(e.within), w = t.position.getScrollInfo(y), x = (e.collision || "flip").split(" "), k = {};
        return b = n(_), _[0].preventDefault && (e.at = "left top"), p = b.width, m = b.height, g = b.offset, v = t.extend({}, g), t.each(["my", "at"], function() {
            var t, i, s = (e[this] || "").split(" ");
            1 === s.length && (s = l.test(s[0]) ? s.concat(["center"]) : c.test(s[0]) ? ["center"].concat(s) : ["center", "center"]), s[0] = l.test(s[0]) ? s[0] : "center", s[1] = c.test(s[1]) ? s[1] : "center", t = u.exec(s[0]), i = u.exec(s[1]), k[this] = [t ? t[0] : 0, i ? i[0] : 0], e[this] = [d.exec(s[0])[0], d.exec(s[1])[0]];
        }), 1 === x.length && (x[1] = x[0]), "right" === e.at[0] ? v.left += p : "center" === e.at[0] && (v.left += p / 2), "bottom" === e.at[1] ? v.top += m : "center" === e.at[1] && (v.top += m / 2), a = i(k.at, p, m), v.left += a[0], v.top += a[1], this.each(function() {
            var n, l, c = t(this), u = c.outerWidth(), d = c.outerHeight(), f = s(this, "marginLeft"), b = s(this, "marginTop"), D = u + f + s(this, "marginRight") + w.width, T = d + b + s(this, "marginBottom") + w.height, C = t.extend({}, v), M = i(k.my, c.outerWidth(), c.outerHeight());
            "right" === e.my[0] ? C.left -= u : "center" === e.my[0] && (C.left -= u / 2), "bottom" === e.my[1] ? C.top -= d : "center" === e.my[1] && (C.top -= d / 2), C.left += M[0], C.top += M[1], t.support.offsetFractions || (C.left = h(C.left), C.top = h(C.top)), n = {marginLeft: f,marginTop: b}, t.each(["left", "top"], function(i, s) {
                t.ui.position[x[i]] && t.ui.position[x[i]][s](C, {targetWidth: p,targetHeight: m,elemWidth: u,elemHeight: d,collisionPosition: n,collisionWidth: D,collisionHeight: T,offset: [a[0] + M[0], a[1] + M[1]],my: e.my,at: e.at,within: y,elem: c});
            }), e.using && (l = function(t) {
                var i = g.left - C.left, s = i + p - u, n = g.top - C.top, a = n + m - d, h = {target: {element: _,left: g.left,top: g.top,width: p,height: m},element: {element: c,left: C.left,top: C.top,width: u,height: d},horizontal: 0 > s ? "left" : i > 0 ? "right" : "center",vertical: 0 > a ? "top" : n > 0 ? "bottom" : "middle"};
                u > p && p > r(i + s) && (h.horizontal = "center"), d > m && m > r(n + a) && (h.vertical = "middle"), h.important = o(r(i), r(s)) > o(r(n), r(a)) ? "horizontal" : "vertical", e.using.call(this, t, h);
            }), c.offset(t.extend(C, {using: l}));
        });
    }, t.ui.position = {fit: {left: function(t, e) {
                var i, s = e.within, n = s.isWindow ? s.scrollLeft : s.offset.left, a = s.width, r = t.left - e.collisionPosition.marginLeft, h = n - r, l = r + e.collisionWidth - a - n;
                e.collisionWidth > a ? h > 0 && 0 >= l ? (i = t.left + h + e.collisionWidth - a - n, t.left += h - i) : t.left = l > 0 && 0 >= h ? n : h > l ? n + a - e.collisionWidth : n : h > 0 ? t.left += h : l > 0 ? t.left -= l : t.left = o(t.left - r, t.left);
            },top: function(t, e) {
                var i, s = e.within, n = s.isWindow ? s.scrollTop : s.offset.top, a = e.within.height, r = t.top - e.collisionPosition.marginTop, h = n - r, l = r + e.collisionHeight - a - n;
                e.collisionHeight > a ? h > 0 && 0 >= l ? (i = t.top + h + e.collisionHeight - a - n, t.top += h - i) : t.top = l > 0 && 0 >= h ? n : h > l ? n + a - e.collisionHeight : n : h > 0 ? t.top += h : l > 0 ? t.top -= l : t.top = o(t.top - r, t.top);
            }},flip: {left: function(t, e) {
                var i, s, n = e.within, a = n.offset.left + n.scrollLeft, o = n.width, h = n.isWindow ? n.scrollLeft : n.offset.left, l = t.left - e.collisionPosition.marginLeft, c = l - h, u = l + e.collisionWidth - o - h, d = "left" === e.my[0] ? -e.elemWidth : "right" === e.my[0] ? e.elemWidth : 0, p = "left" === e.at[0] ? e.targetWidth : "right" === e.at[0] ? -e.targetWidth : 0, f = -2 * e.offset[0];
                0 > c ? (i = t.left + d + p + f + e.collisionWidth - o - a, (0 > i || r(c) > i) && (t.left += d + p + f)) : u > 0 && (s = t.left - e.collisionPosition.marginLeft + d + p + f - h, (s > 0 || u > r(s)) && (t.left += d + p + f));
            },top: function(t, e) {
                var i, s, n = e.within, a = n.offset.top + n.scrollTop, o = n.height, h = n.isWindow ? n.scrollTop : n.offset.top, l = t.top - e.collisionPosition.marginTop, c = l - h, u = l + e.collisionHeight - o - h, d = "top" === e.my[1], p = d ? -e.elemHeight : "bottom" === e.my[1] ? e.elemHeight : 0, f = "top" === e.at[1] ? e.targetHeight : "bottom" === e.at[1] ? -e.targetHeight : 0, m = -2 * e.offset[1];
                0 > c ? (s = t.top + p + f + m + e.collisionHeight - o - a, t.top + p + f + m > c && (0 > s || r(c) > s) && (t.top += p + f + m)) : u > 0 && (i = t.top - e.collisionPosition.marginTop + p + f + m - h, t.top + p + f + m > u && (i > 0 || u > r(i)) && (t.top += p + f + m));
            }},flipfit: {left: function() {
                t.ui.position.flip.left.apply(this, arguments), t.ui.position.fit.left.apply(this, arguments);
            },top: function() {
                t.ui.position.flip.top.apply(this, arguments), t.ui.position.fit.top.apply(this, arguments);
            }}}, function() {
        var e, i, s, n, a, o = document.getElementsByTagName("body")[0], r = document.createElement("div");
        e = document.createElement(o ? "div" : "body"), s = {visibility: "hidden",width: 0,height: 0,border: 0,margin: 0,background: "none"}, o && t.extend(s, {position: "absolute",left: "-1000px",top: "-1000px"});
        for (a in s) {
            e.style[a] = s[a];
        }
        e.appendChild(r), i = o || document.documentElement, i.insertBefore(e, i.firstChild), r.style.cssText = "position: absolute; left: 10.7432222px;", n = t(r).offset().left, t.support.offsetFractions = n > 10 && 11 > n, e.innerHTML = "", i.removeChild(e);
    }();
})(jQuery);
(function(e) {
    e.widget("ui.draggable", e.ui.mouse, {version: "1.10.3",widgetEventPrefix: "drag",options: {addClasses: !0,appendTo: "parent",axis: !1,connectToSortable: !1,containment: !1,cursor: "auto",cursorAt: !1,grid: !1,handle: !1,helper: "original",iframeFix: !1,opacity: !1,refreshPositions: !1,revert: !1,revertDuration: 500,scope: "default",scroll: !0,scrollSensitivity: 20,scrollSpeed: 20,snap: !1,snapMode: "both",snapTolerance: 20,stack: !1,zIndex: !1,drag: null,start: null,stop: null},_create: function() {
            "original" !== this.options.helper || /^(?:r|a|f)/.test(this.element.css("position")) || (this.element[0].style.position = "relative"), this.options.addClasses && this.element.addClass("ui-draggable"), this.options.disabled && this.element.addClass("ui-draggable-disabled"), this._mouseInit();
        },_destroy: function() {
            this.element.removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled"), this._mouseDestroy();
        },_mouseCapture: function(t) {
            var i = this.options;
            return this.helper || i.disabled || e(t.target).closest(".ui-resizable-handle").length > 0 ? !1 : (this.handle = this._getHandle(t), this.handle ? (e(i.iframeFix === !0 ? "iframe" : i.iframeFix).each(function() {
                e("<div class='ui-draggable-iframeFix' style='background: #fff;'></div>").css({width: this.offsetWidth + "px",height: this.offsetHeight + "px",position: "absolute",opacity: "0.001",zIndex: 1000}).css(e(this).offset()).appendTo("body");
            }), !0) : !1);
        },_mouseStart: function(t) {
            var i = this.options;
            return this.helper = this._createHelper(t), this.helper.addClass("ui-draggable-dragging"), this._cacheHelperProportions(), e.ui.ddmanager && (e.ui.ddmanager.current = this), this._cacheMargins(), this.cssPosition = this.helper.css("position"), this.scrollParent = this.helper.scrollParent(), this.offsetParent = this.helper.offsetParent(), this.offsetParentCssPosition = this.offsetParent.css("position"), this.offset = this.positionAbs = this.element.offset(), this.offset = {top: this.offset.top - this.margins.top,left: this.offset.left - this.margins.left}, this.offset.scroll = !1, e.extend(this.offset, {click: {left: t.pageX - this.offset.left,top: t.pageY - this.offset.top},parent: this._getParentOffset(),relative: this._getRelativeOffset()}), this.originalPosition = this.position = this._generatePosition(t), this.originalPageX = t.pageX, this.originalPageY = t.pageY, i.cursorAt && this._adjustOffsetFromHelper(i.cursorAt), this._setContainment(), this._trigger("start", t) === !1 ? (this._clear(), !1) : (this._cacheHelperProportions(), e.ui.ddmanager && !i.dropBehaviour && e.ui.ddmanager.prepareOffsets(this, t), this._mouseDrag(t, !0), e.ui.ddmanager && e.ui.ddmanager.dragStart(this, t), !0);
        },_mouseDrag: function(t, i) {
            if ("fixed" === this.offsetParentCssPosition && (this.offset.parent = this._getParentOffset()), this.position = this._generatePosition(t), this.positionAbs = this._convertPositionTo("absolute"), !i) {
                var s = this._uiHash();
                if (this._trigger("drag", t, s) === !1) {
                    return this._mouseUp({}), !1;
                }
                this.position = s.position;
            }
            return this.options.axis && "y" === this.options.axis || (this.helper[0].style.left = this.position.left + "px"), this.options.axis && "x" === this.options.axis || (this.helper[0].style.top = this.position.top + "px"), e.ui.ddmanager && e.ui.ddmanager.drag(this, t), !1;
        },_mouseStop: function(t) {
            var i = this, s = !1;
            return e.ui.ddmanager && !this.options.dropBehaviour && (s = e.ui.ddmanager.drop(this, t)), this.dropped && (s = this.dropped, this.dropped = !1), "original" !== this.options.helper || e.contains(this.element[0].ownerDocument, this.element[0]) ? ("invalid" === this.options.revert && !s || "valid" === this.options.revert && s || this.options.revert === !0 || e.isFunction(this.options.revert) && this.options.revert.call(this.element, s) ? e(this.helper).animate(this.originalPosition, parseInt(this.options.revertDuration, 10), function() {
                i._trigger("stop", t) !== !1 && i._clear();
            }) : this._trigger("stop", t) !== !1 && this._clear(), !1) : !1;
        },_mouseUp: function(t) {
            return e("div.ui-draggable-iframeFix").each(function() {
                this.parentNode.removeChild(this);
            }), e.ui.ddmanager && e.ui.ddmanager.dragStop(this, t), e.ui.mouse.prototype._mouseUp.call(this, t);
        },cancel: function() {
            return this.helper.is(".ui-draggable-dragging") ? this._mouseUp({}) : this._clear(), this;
        },_getHandle: function(t) {
            return this.options.handle ? !!e(t.target).closest(this.element.find(this.options.handle)).length : !0;
        },_createHelper: function(t) {
            var i = this.options, s = e.isFunction(i.helper) ? e(i.helper.apply(this.element[0], [t])) : "clone" === i.helper ? this.element.clone().removeAttr("id") : this.element;
            return s.parents("body").length || s.appendTo("parent" === i.appendTo ? this.element[0].parentNode : i.appendTo), s[0] === this.element[0] || /(fixed|absolute)/.test(s.css("position")) || s.css("position", "absolute"), s;
        },_adjustOffsetFromHelper: function(t) {
            "string" == typeof t && (t = t.split(" ")), e.isArray(t) && (t = {left: +t[0],top: +t[1] || 0}), "left" in t && (this.offset.click.left = t.left + this.margins.left), "right" in t && (this.offset.click.left = this.helperProportions.width - t.right + this.margins.left), "top" in t && (this.offset.click.top = t.top + this.margins.top), "bottom" in t && (this.offset.click.top = this.helperProportions.height - t.bottom + this.margins.top);
        },_getParentOffset: function() {
            var t = this.offsetParent.offset();
            return "absolute" === this.cssPosition && this.scrollParent[0] !== document && e.contains(this.scrollParent[0], this.offsetParent[0]) && (t.left += this.scrollParent.scrollLeft(), t.top += this.scrollParent.scrollTop()), (this.offsetParent[0] === document.body || this.offsetParent[0].tagName && "html" === this.offsetParent[0].tagName.toLowerCase() && e.ui.ie) && (t = {top: 0,left: 0}), {top: t.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),left: t.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)};
        },_getRelativeOffset: function() {
            if ("relative" === this.cssPosition) {
                var e = this.element.position();
                return {top: e.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(),left: e.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()};
            }
            return {top: 0,left: 0};
        },_cacheMargins: function() {
            this.margins = {left: parseInt(this.element.css("marginLeft"), 10) || 0,top: parseInt(this.element.css("marginTop"), 10) || 0,right: parseInt(this.element.css("marginRight"), 10) || 0,bottom: parseInt(this.element.css("marginBottom"), 10) || 0};
        },_cacheHelperProportions: function() {
            this.helperProportions = {width: this.helper.outerWidth(),height: this.helper.outerHeight()};
        },_setContainment: function() {
            var t, i, s, n = this.options;
            return n.containment ? "window" === n.containment ? (this.containment = [e(window).scrollLeft() - this.offset.relative.left - this.offset.parent.left, e(window).scrollTop() - this.offset.relative.top - this.offset.parent.top, e(window).scrollLeft() + e(window).width() - this.helperProportions.width - this.margins.left, e(window).scrollTop() + (e(window).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top], undefined) : "document" === n.containment ? (this.containment = [0, 0, e(document).width() - this.helperProportions.width - this.margins.left, (e(document).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top], undefined) : n.containment.constructor === Array ? (this.containment = n.containment, undefined) : ("parent" === n.containment && (n.containment = this.helper[0].parentNode), i = e(n.containment), s = i[0], s && (t = "hidden" !== i.css("overflow"), this.containment = [(parseInt(i.css("borderLeftWidth"), 10) || 0) + (parseInt(i.css("paddingLeft"), 10) || 0), (parseInt(i.css("borderTopWidth"), 10) || 0) + (parseInt(i.css("paddingTop"), 10) || 0), (t ? Math.max(s.scrollWidth, s.offsetWidth) : s.offsetWidth) - (parseInt(i.css("borderRightWidth"), 10) || 0) - (parseInt(i.css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left - this.margins.right, (t ? Math.max(s.scrollHeight, s.offsetHeight) : s.offsetHeight) - (parseInt(i.css("borderBottomWidth"), 10) || 0) - (parseInt(i.css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top - this.margins.bottom], this.relative_container = i), undefined) : (this.containment = null, undefined);
        },_convertPositionTo: function(t, i) {
            i || (i = this.position);
            var s = "absolute" === t ? 1 : -1, n = "absolute" !== this.cssPosition || this.scrollParent[0] !== document && e.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent;
            return this.offset.scroll || (this.offset.scroll = {top: n.scrollTop(),left: n.scrollLeft()}), {top: i.top + this.offset.relative.top * s + this.offset.parent.top * s - ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : this.offset.scroll.top) * s,left: i.left + this.offset.relative.left * s + this.offset.parent.left * s - ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : this.offset.scroll.left) * s};
        },_generatePosition: function(t) {
            var i, s, n, a, o = this.options, r = "absolute" !== this.cssPosition || this.scrollParent[0] !== document && e.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent, h = t.pageX, l = t.pageY;
            return this.offset.scroll || (this.offset.scroll = {top: r.scrollTop(),left: r.scrollLeft()}), this.originalPosition && (this.containment && (this.relative_container ? (s = this.relative_container.offset(), i = [this.containment[0] + s.left, this.containment[1] + s.top, this.containment[2] + s.left, this.containment[3] + s.top]) : i = this.containment, t.pageX - this.offset.click.left < i[0] && (h = i[0] + this.offset.click.left), t.pageY - this.offset.click.top < i[1] && (l = i[1] + this.offset.click.top), t.pageX - this.offset.click.left > i[2] && (h = i[2] + this.offset.click.left), t.pageY - this.offset.click.top > i[3] && (l = i[3] + this.offset.click.top)), o.grid && (n = o.grid[1] ? this.originalPageY + Math.round((l - this.originalPageY) / o.grid[1]) * o.grid[1] : this.originalPageY, l = i ? n - this.offset.click.top >= i[1] || n - this.offset.click.top > i[3] ? n : n - this.offset.click.top >= i[1] ? n - o.grid[1] : n + o.grid[1] : n, a = o.grid[0] ? this.originalPageX + Math.round((h - this.originalPageX) / o.grid[0]) * o.grid[0] : this.originalPageX, h = i ? a - this.offset.click.left >= i[0] || a - this.offset.click.left > i[2] ? a : a - this.offset.click.left >= i[0] ? a - o.grid[0] : a + o.grid[0] : a)), {top: l - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : this.offset.scroll.top),left: h - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : this.offset.scroll.left)};
        },_clear: function() {
            this.helper.removeClass("ui-draggable-dragging"), this.helper[0] === this.element[0] || this.cancelHelperRemoval || this.helper.remove(), this.helper = null, this.cancelHelperRemoval = !1;
        },_trigger: function(t, i, s) {
            return s = s || this._uiHash(), e.ui.plugin.call(this, t, [i, s]), "drag" === t && (this.positionAbs = this._convertPositionTo("absolute")), e.Widget.prototype._trigger.call(this, t, i, s);
        },plugins: {},_uiHash: function() {
            return {helper: this.helper,position: this.position,originalPosition: this.originalPosition,offset: this.positionAbs};
        }}), e.ui.plugin.add("draggable", "connectToSortable", {start: function(t, i) {
            var s = e(this).data("ui-draggable"), n = s.options, a = e.extend({}, i, {item: s.element});
            s.sortables = [], e(n.connectToSortable).each(function() {
                var i = e.data(this, "ui-sortable");
                i && !i.options.disabled && (s.sortables.push({instance: i,shouldRevert: i.options.revert}), i.refreshPositions(), i._trigger("activate", t, a));
            });
        },stop: function(t, i) {
            var s = e(this).data("ui-draggable"), n = e.extend({}, i, {item: s.element});
            e.each(s.sortables, function() {
                this.instance.isOver ? (this.instance.isOver = 0, s.cancelHelperRemoval = !0, this.instance.cancelHelperRemoval = !1, this.shouldRevert && (this.instance.options.revert = this.shouldRevert), this.instance._mouseStop(t), this.instance.options.helper = this.instance.options._helper, "original" === s.options.helper && this.instance.currentItem.css({top: "auto",left: "auto"})) : (this.instance.cancelHelperRemoval = !1, this.instance._trigger("deactivate", t, n));
            });
        },drag: function(t, i) {
            var s = e(this).data("ui-draggable"), n = this;
            e.each(s.sortables, function() {
                var a = !1, o = this;
                this.instance.positionAbs = s.positionAbs, this.instance.helperProportions = s.helperProportions, this.instance.offset.click = s.offset.click, this.instance._intersectsWith(this.instance.containerCache) && (a = !0, e.each(s.sortables, function() {
                    return this.instance.positionAbs = s.positionAbs, this.instance.helperProportions = s.helperProportions, this.instance.offset.click = s.offset.click, this !== o && this.instance._intersectsWith(this.instance.containerCache) && e.contains(o.instance.element[0], this.instance.element[0]) && (a = !1), a;
                })), a ? (this.instance.isOver || (this.instance.isOver = 1, this.instance.currentItem = e(n).clone().removeAttr("id").appendTo(this.instance.element).data("ui-sortable-item", !0), this.instance.options._helper = this.instance.options.helper, this.instance.options.helper = function() {
                    return i.helper[0];
                }, t.target = this.instance.currentItem[0], this.instance._mouseCapture(t, !0), this.instance._mouseStart(t, !0, !0), this.instance.offset.click.top = s.offset.click.top, this.instance.offset.click.left = s.offset.click.left, this.instance.offset.parent.left -= s.offset.parent.left - this.instance.offset.parent.left, this.instance.offset.parent.top -= s.offset.parent.top - this.instance.offset.parent.top, s._trigger("toSortable", t), s.dropped = this.instance.element, s.currentItem = s.element, this.instance.fromOutside = s), this.instance.currentItem && this.instance._mouseDrag(t)) : this.instance.isOver && (this.instance.isOver = 0, this.instance.cancelHelperRemoval = !0, this.instance.options.revert = !1, this.instance._trigger("out", t, this.instance._uiHash(this.instance)), this.instance._mouseStop(t, !0), this.instance.options.helper = this.instance.options._helper, this.instance.currentItem.remove(), this.instance.placeholder && this.instance.placeholder.remove(), s._trigger("fromSortable", t), s.dropped = !1);
            });
        }}), e.ui.plugin.add("draggable", "cursor", {start: function() {
            var t = e("body"), i = e(this).data("ui-draggable").options;
            t.css("cursor") && (i._cursor = t.css("cursor")), t.css("cursor", i.cursor);
        },stop: function() {
            var t = e(this).data("ui-draggable").options;
            t._cursor && e("body").css("cursor", t._cursor);
        }}), e.ui.plugin.add("draggable", "opacity", {start: function(t, i) {
            var s = e(i.helper), n = e(this).data("ui-draggable").options;
            s.css("opacity") && (n._opacity = s.css("opacity")), s.css("opacity", n.opacity);
        },stop: function(t, i) {
            var s = e(this).data("ui-draggable").options;
            s._opacity && e(i.helper).css("opacity", s._opacity);
        }}), e.ui.plugin.add("draggable", "scroll", {start: function() {
            var t = e(this).data("ui-draggable");
            t.scrollParent[0] !== document && "HTML" !== t.scrollParent[0].tagName && (t.overflowOffset = t.scrollParent.offset());
        },drag: function(t) {
            var i = e(this).data("ui-draggable"), s = i.options, n = !1;
            i.scrollParent[0] !== document && "HTML" !== i.scrollParent[0].tagName ? (s.axis && "x" === s.axis || (i.overflowOffset.top + i.scrollParent[0].offsetHeight - t.pageY < s.scrollSensitivity ? i.scrollParent[0].scrollTop = n = i.scrollParent[0].scrollTop + s.scrollSpeed : t.pageY - i.overflowOffset.top < s.scrollSensitivity && (i.scrollParent[0].scrollTop = n = i.scrollParent[0].scrollTop - s.scrollSpeed)), s.axis && "y" === s.axis || (i.overflowOffset.left + i.scrollParent[0].offsetWidth - t.pageX < s.scrollSensitivity ? i.scrollParent[0].scrollLeft = n = i.scrollParent[0].scrollLeft + s.scrollSpeed : t.pageX - i.overflowOffset.left < s.scrollSensitivity && (i.scrollParent[0].scrollLeft = n = i.scrollParent[0].scrollLeft - s.scrollSpeed))) : (s.axis && "x" === s.axis || (t.pageY - e(document).scrollTop() < s.scrollSensitivity ? n = e(document).scrollTop(e(document).scrollTop() - s.scrollSpeed) : e(window).height() - (t.pageY - e(document).scrollTop()) < s.scrollSensitivity && (n = e(document).scrollTop(e(document).scrollTop() + s.scrollSpeed))), s.axis && "y" === s.axis || (t.pageX - e(document).scrollLeft() < s.scrollSensitivity ? n = e(document).scrollLeft(e(document).scrollLeft() - s.scrollSpeed) : e(window).width() - (t.pageX - e(document).scrollLeft()) < s.scrollSensitivity && (n = e(document).scrollLeft(e(document).scrollLeft() + s.scrollSpeed)))), n !== !1 && e.ui.ddmanager && !s.dropBehaviour && e.ui.ddmanager.prepareOffsets(i, t);
        }}), e.ui.plugin.add("draggable", "snap", {start: function() {
            var t = e(this).data("ui-draggable"), i = t.options;
            t.snapElements = [], e(i.snap.constructor !== String ? i.snap.items || ":data(ui-draggable)" : i.snap).each(function() {
                var i = e(this), s = i.offset();
                this !== t.element[0] && t.snapElements.push({item: this,width: i.outerWidth(),height: i.outerHeight(),top: s.top,left: s.left});
            });
        },drag: function(t, i) {
            var s, n, a, o, r, h, l, u, c, d, p = e(this).data("ui-draggable"), f = p.options, m = f.snapTolerance, g = i.offset.left, v = g + p.helperProportions.width, b = i.offset.top, y = b + p.helperProportions.height;
            for (c = p.snapElements.length - 1; c >= 0; c--) {
                r = p.snapElements[c].left, h = r + p.snapElements[c].width, l = p.snapElements[c].top, u = l + p.snapElements[c].height, r - m > v || g > h + m || l - m > y || b > u + m || !e.contains(p.snapElements[c].item.ownerDocument, p.snapElements[c].item) ? (p.snapElements[c].snapping && p.options.snap.release && p.options.snap.release.call(p.element, t, e.extend(p._uiHash(), {snapItem: p.snapElements[c].item})), p.snapElements[c].snapping = !1) : ("inner" !== f.snapMode && (s = m >= Math.abs(l - y), n = m >= Math.abs(u - b), a = m >= Math.abs(r - v), o = m >= Math.abs(h - g), s && (i.position.top = p._convertPositionTo("relative", {top: l - p.helperProportions.height,left: 0}).top - p.margins.top), n && (i.position.top = p._convertPositionTo("relative", {top: u,left: 0}).top - p.margins.top), a && (i.position.left = p._convertPositionTo("relative", {top: 0,left: r - p.helperProportions.width}).left - p.margins.left), o && (i.position.left = p._convertPositionTo("relative", {top: 0,left: h}).left - p.margins.left)), d = s || n || a || o, "outer" !== f.snapMode && (s = m >= Math.abs(l - b), n = m >= Math.abs(u - y), a = m >= Math.abs(r - g), o = m >= Math.abs(h - v), s && (i.position.top = p._convertPositionTo("relative", {top: l,left: 0}).top - p.margins.top), n && (i.position.top = p._convertPositionTo("relative", {top: u - p.helperProportions.height,left: 0}).top - p.margins.top), a && (i.position.left = p._convertPositionTo("relative", {top: 0,left: r}).left - p.margins.left), o && (i.position.left = p._convertPositionTo("relative", {top: 0,left: h - p.helperProportions.width}).left - p.margins.left)), !p.snapElements[c].snapping && (s || n || a || o || d) && p.options.snap.snap && p.options.snap.snap.call(p.element, t, e.extend(p._uiHash(), {snapItem: p.snapElements[c].item})), p.snapElements[c].snapping = s || n || a || o || d);
            }
        }}), e.ui.plugin.add("draggable", "stack", {start: function() {
            var t, i = this.data("ui-draggable").options, s = e.makeArray(e(i.stack)).sort(function(t, i) {
                return (parseInt(e(t).css("zIndex"), 10) || 0) - (parseInt(e(i).css("zIndex"), 10) || 0);
            });
            s.length && (t = parseInt(e(s[0]).css("zIndex"), 10) || 0, e(s).each(function(i) {
                e(this).css("zIndex", t + i);
            }), this.css("zIndex", t + s.length));
        }}), e.ui.plugin.add("draggable", "zIndex", {start: function(t, i) {
            var s = e(i.helper), n = e(this).data("ui-draggable").options;
            s.css("zIndex") && (n._zIndex = s.css("zIndex")), s.css("zIndex", n.zIndex);
        },stop: function(t, i) {
            var s = e(this).data("ui-draggable").options;
            s._zIndex && e(i.helper).css("zIndex", s._zIndex);
        }});
})(jQuery);
(function(e) {
    function t(e) {
        return parseInt(e, 10) || 0;
    }
    function i(e) {
        return !isNaN(parseInt(e, 10));
    }
    e.widget("ui.resizable", e.ui.mouse, {version: "1.10.3",widgetEventPrefix: "resize",options: {alsoResize: !1,animate: !1,animateDuration: "slow",animateEasing: "swing",aspectRatio: !1,autoHide: !1,containment: !1,ghost: !1,grid: !1,handles: "e,s,se",helper: !1,maxHeight: null,maxWidth: null,minHeight: 10,minWidth: 10,zIndex: 90,resize: null,start: null,stop: null},_create: function() {
            var t, i, s, n, a, o = this, r = this.options;
            if (this.element.addClass("ui-resizable"), e.extend(this, {_aspectRatio: !!r.aspectRatio,aspectRatio: r.aspectRatio,originalElement: this.element,_proportionallyResizeElements: [],_helper: r.helper || r.ghost || r.animate ? r.helper || "ui-resizable-helper" : null}), this.element[0].nodeName.match(/canvas|textarea|input|select|button|img/i) && (this.element.wrap(e("<div class='ui-wrapper' style='overflow: hidden;'></div>").css({position: this.element.css("position"),width: this.element.outerWidth(),height: this.element.outerHeight(),top: this.element.css("top"),left: this.element.css("left")})), this.element = this.element.parent().data("ui-resizable", this.element.data("ui-resizable")), this.elementIsWrapper = !0, this.element.css({marginLeft: this.originalElement.css("marginLeft"),marginTop: this.originalElement.css("marginTop"),marginRight: this.originalElement.css("marginRight"),marginBottom: this.originalElement.css("marginBottom")}), this.originalElement.css({marginLeft: 0,marginTop: 0,marginRight: 0,marginBottom: 0}), this.originalResizeStyle = this.originalElement.css("resize"), this.originalElement.css("resize", "none"), this._proportionallyResizeElements.push(this.originalElement.css({position: "static",zoom: 1,display: "block"})), this.originalElement.css({margin: this.originalElement.css("margin")}), this._proportionallyResize()), this.handles = r.handles || (e(".ui-resizable-handle", this.element).length ? {n: ".ui-resizable-n",e: ".ui-resizable-e",s: ".ui-resizable-s",w: ".ui-resizable-w",se: ".ui-resizable-se",sw: ".ui-resizable-sw",ne: ".ui-resizable-ne",nw: ".ui-resizable-nw"} : "e,s,se"), this.handles.constructor === String) {
                for ("all" === this.handles && (this.handles = "n,e,s,w,se,sw,ne,nw"), t = this.handles.split(","), this.handles = {}, i = 0; t.length > i; i++) {
                    s = e.trim(t[i]), a = "ui-resizable-" + s, n = e("<div class='ui-resizable-handle " + a + "'></div>"), n.css({zIndex: r.zIndex}), "se" === s && n.addClass("ui-icon ui-icon-gripsmall-diagonal-se"), this.handles[s] = ".ui-resizable-" + s, this.element.append(n);
                }
            }
            this._renderAxis = function(t) {
                var i, s, n, a;
                t = t || this.element;
                for (i in this.handles) {
                    this.handles[i].constructor === String && (this.handles[i] = e(this.handles[i], this.element).show()), this.elementIsWrapper && this.originalElement[0].nodeName.match(/textarea|input|select|button/i) && (s = e(this.handles[i], this.element), a = /sw|ne|nw|se|n|s/.test(i) ? s.outerHeight() : s.outerWidth(), n = ["padding", /ne|nw|n/.test(i) ? "Top" : /se|sw|s/.test(i) ? "Bottom" : /^e$/.test(i) ? "Right" : "Left"].join(""), t.css(n, a), this._proportionallyResize()), e(this.handles[i]).length;
                }
            }, this._renderAxis(this.element), this._handles = e(".ui-resizable-handle", this.element).disableSelection(), this._handles.mouseover(function() {
                o.resizing || (this.className && (n = this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i)), o.axis = n && n[1] ? n[1] : "se");
            }), r.autoHide && (this._handles.hide(), e(this.element).addClass("ui-resizable-autohide").mouseenter(function() {
                r.disabled || (e(this).removeClass("ui-resizable-autohide"), o._handles.show());
            }).mouseleave(function() {
                r.disabled || o.resizing || (e(this).addClass("ui-resizable-autohide"), o._handles.hide());
            })), this._mouseInit();
        },_destroy: function() {
            this._mouseDestroy();
            var t, i = function(t) {
                e(t).removeClass("ui-resizable ui-resizable-disabled ui-resizable-resizing").removeData("resizable").removeData("ui-resizable").unbind(".resizable").find(".ui-resizable-handle").remove();
            };
            return this.elementIsWrapper && (i(this.element), t = this.element, this.originalElement.css({position: t.css("position"),width: t.outerWidth(),height: t.outerHeight(),top: t.css("top"),left: t.css("left")}).insertAfter(t), t.remove()), this.originalElement.css("resize", this.originalResizeStyle), i(this.originalElement), this;
        },_mouseCapture: function(t) {
            var i, s, n = !1;
            for (i in this.handles) {
                s = e(this.handles[i])[0], (s === t.target || e.contains(s, t.target)) && (n = !0);
            }
            return !this.options.disabled && n;
        },_mouseStart: function(i) {
            var s, n, a, o = this.options, r = this.element.position(), h = this.element;
            return this.resizing = !0, /absolute/.test(h.css("position")) ? h.css({position: "absolute",top: h.css("top"),left: h.css("left")}) : h.is(".ui-draggable") && h.css({position: "absolute",top: r.top,left: r.left}), this._renderProxy(), s = t(this.helper.css("left")), n = t(this.helper.css("top")), o.containment && (s += e(o.containment).scrollLeft() || 0, n += e(o.containment).scrollTop() || 0), this.offset = this.helper.offset(), this.position = {left: s,top: n}, this.size = this._helper ? {width: h.outerWidth(),height: h.outerHeight()} : {width: h.width(),height: h.height()}, this.originalSize = this._helper ? {width: h.outerWidth(),height: h.outerHeight()} : {width: h.width(),height: h.height()}, this.originalPosition = {left: s,top: n}, this.sizeDiff = {width: h.outerWidth() - h.width(),height: h.outerHeight() - h.height()}, this.originalMousePosition = {left: i.pageX,top: i.pageY}, this.aspectRatio = "number" == typeof o.aspectRatio ? o.aspectRatio : this.originalSize.width / this.originalSize.height || 1, a = e(".ui-resizable-" + this.axis).css("cursor"), e("body").css("cursor", "auto" === a ? this.axis + "-resize" : a), h.addClass("ui-resizable-resizing"), this._propagate("start", i), !0;
        },_mouseDrag: function(t) {
            var i, s = this.helper, n = {}, a = this.originalMousePosition, o = this.axis, r = this.position.top, h = this.position.left, l = this.size.width, u = this.size.height, c = t.pageX - a.left || 0, d = t.pageY - a.top || 0, p = this._change[o];
            return p ? (i = p.apply(this, [t, c, d]), this._updateVirtualBoundaries(t.shiftKey), (this._aspectRatio || t.shiftKey) && (i = this._updateRatio(i, t)), i = this._respectSize(i, t), this._updateCache(i), this._propagate("resize", t), this.position.top !== r && (n.top = this.position.top + "px"), this.position.left !== h && (n.left = this.position.left + "px"), this.size.width !== l && (n.width = this.size.width + "px"), this.size.height !== u && (n.height = this.size.height + "px"), s.css(n), !this._helper && this._proportionallyResizeElements.length && this._proportionallyResize(), e.isEmptyObject(n) || this._trigger("resize", t, this.ui()), !1) : !1;
        },_mouseStop: function(t) {
            this.resizing = !1;
            var i, s, n, a, o, r, h, l = this.options, u = this;
            return this._helper && (i = this._proportionallyResizeElements, s = i.length && /textarea/i.test(i[0].nodeName), n = s && e.ui.hasScroll(i[0], "left") ? 0 : u.sizeDiff.height, a = s ? 0 : u.sizeDiff.width, o = {width: u.helper.width() - a,height: u.helper.height() - n}, r = parseInt(u.element.css("left"), 10) + (u.position.left - u.originalPosition.left) || null, h = parseInt(u.element.css("top"), 10) + (u.position.top - u.originalPosition.top) || null, l.animate || this.element.css(e.extend(o, {top: h,left: r})), u.helper.height(u.size.height), u.helper.width(u.size.width), this._helper && !l.animate && this._proportionallyResize()), e("body").css("cursor", "auto"), this.element.removeClass("ui-resizable-resizing"), this._propagate("stop", t), this._helper && this.helper.remove(), !1;
        },_updateVirtualBoundaries: function(e) {
            var t, s, n, a, o, r = this.options;
            o = {minWidth: i(r.minWidth) ? r.minWidth : 0,maxWidth: i(r.maxWidth) ? r.maxWidth : 1 / 0,minHeight: i(r.minHeight) ? r.minHeight : 0,maxHeight: i(r.maxHeight) ? r.maxHeight : 1 / 0}, (this._aspectRatio || e) && (t = o.minHeight * this.aspectRatio, n = o.minWidth / this.aspectRatio, s = o.maxHeight * this.aspectRatio, a = o.maxWidth / this.aspectRatio, t > o.minWidth && (o.minWidth = t), n > o.minHeight && (o.minHeight = n), o.maxWidth > s && (o.maxWidth = s), o.maxHeight > a && (o.maxHeight = a)), this._vBoundaries = o;
        },_updateCache: function(e) {
            this.offset = this.helper.offset(), i(e.left) && (this.position.left = e.left), i(e.top) && (this.position.top = e.top), i(e.height) && (this.size.height = e.height), i(e.width) && (this.size.width = e.width);
        },_updateRatio: function(e) {
            var t = this.position, s = this.size, n = this.axis;
            return i(e.height) ? e.width = e.height * this.aspectRatio : i(e.width) && (e.height = e.width / this.aspectRatio), "sw" === n && (e.left = t.left + (s.width - e.width), e.top = null), "nw" === n && (e.top = t.top + (s.height - e.height), e.left = t.left + (s.width - e.width)), e;
        },_respectSize: function(e) {
            var t = this._vBoundaries, s = this.axis, n = i(e.width) && t.maxWidth && t.maxWidth < e.width, a = i(e.height) && t.maxHeight && t.maxHeight < e.height, o = i(e.width) && t.minWidth && t.minWidth > e.width, r = i(e.height) && t.minHeight && t.minHeight > e.height, h = this.originalPosition.left + this.originalSize.width, l = this.position.top + this.size.height, u = /sw|nw|w/.test(s), c = /nw|ne|n/.test(s);
            return o && (e.width = t.minWidth), r && (e.height = t.minHeight), n && (e.width = t.maxWidth), a && (e.height = t.maxHeight), o && u && (e.left = h - t.minWidth), n && u && (e.left = h - t.maxWidth), r && c && (e.top = l - t.minHeight), a && c && (e.top = l - t.maxHeight), e.width || e.height || e.left || !e.top ? e.width || e.height || e.top || !e.left || (e.left = null) : e.top = null, e;
        },_proportionallyResize: function() {
            if (this._proportionallyResizeElements.length) {
                var e, t, i, s, n, a = this.helper || this.element;
                for (e = 0; this._proportionallyResizeElements.length > e; e++) {
                    if (n = this._proportionallyResizeElements[e], !this.borderDif) {
                        for (this.borderDif = [], i = [n.css("borderTopWidth"), n.css("borderRightWidth"), n.css("borderBottomWidth"), n.css("borderLeftWidth")], s = [n.css("paddingTop"), n.css("paddingRight"), n.css("paddingBottom"), n.css("paddingLeft")], t = 0; i.length > t; t++) {
                            this.borderDif[t] = (parseInt(i[t], 10) || 0) + (parseInt(s[t], 10) || 0);
                        }
                    }
                    n.css({height: a.height() - this.borderDif[0] - this.borderDif[2] || 0,width: a.width() - this.borderDif[1] - this.borderDif[3] || 0});
                }
            }
        },_renderProxy: function() {
            var t = this.element, i = this.options;
            this.elementOffset = t.offset(), this._helper ? (this.helper = this.helper || e("<div style='overflow:hidden;'></div>"), this.helper.addClass(this._helper).css({width: this.element.outerWidth() - 1,height: this.element.outerHeight() - 1,position: "absolute",left: this.elementOffset.left + "px",top: this.elementOffset.top + "px",zIndex: ++i.zIndex}), this.helper.appendTo("body").disableSelection()) : this.helper = this.element;
        },_change: {e: function(e, t) {
                return {width: this.originalSize.width + t};
            },w: function(e, t) {
                var i = this.originalSize, s = this.originalPosition;
                return {left: s.left + t,width: i.width - t};
            },n: function(e, t, i) {
                var s = this.originalSize, n = this.originalPosition;
                return {top: n.top + i,height: s.height - i};
            },s: function(e, t, i) {
                return {height: this.originalSize.height + i};
            },se: function(t, i, s) {
                return e.extend(this._change.s.apply(this, arguments), this._change.e.apply(this, [t, i, s]));
            },sw: function(t, i, s) {
                return e.extend(this._change.s.apply(this, arguments), this._change.w.apply(this, [t, i, s]));
            },ne: function(t, i, s) {
                return e.extend(this._change.n.apply(this, arguments), this._change.e.apply(this, [t, i, s]));
            },nw: function(t, i, s) {
                return e.extend(this._change.n.apply(this, arguments), this._change.w.apply(this, [t, i, s]));
            }},_propagate: function(t, i) {
            e.ui.plugin.call(this, t, [i, this.ui()]), "resize" !== t && this._trigger(t, i, this.ui());
        },plugins: {},ui: function() {
            return {originalElement: this.originalElement,element: this.element,helper: this.helper,position: this.position,size: this.size,originalSize: this.originalSize,originalPosition: this.originalPosition};
        }}), e.ui.plugin.add("resizable", "animate", {stop: function(t) {
            var i = e(this).data("ui-resizable"), s = i.options, n = i._proportionallyResizeElements, a = n.length && /textarea/i.test(n[0].nodeName), o = a && e.ui.hasScroll(n[0], "left") ? 0 : i.sizeDiff.height, r = a ? 0 : i.sizeDiff.width, h = {width: i.size.width - r,height: i.size.height - o}, l = parseInt(i.element.css("left"), 10) + (i.position.left - i.originalPosition.left) || null, u = parseInt(i.element.css("top"), 10) + (i.position.top - i.originalPosition.top) || null;
            i.element.animate(e.extend(h, u && l ? {top: u,left: l} : {}), {duration: s.animateDuration,easing: s.animateEasing,step: function() {
                    var s = {width: parseInt(i.element.css("width"), 10),height: parseInt(i.element.css("height"), 10),top: parseInt(i.element.css("top"), 10),left: parseInt(i.element.css("left"), 10)};
                    n && n.length && e(n[0]).css({width: s.width,height: s.height}), i._updateCache(s), i._propagate("resize", t);
                }});
        }}), e.ui.plugin.add("resizable", "containment", {start: function() {
            var i, s, n, a, o, r, h, l = e(this).data("ui-resizable"), u = l.options, c = l.element, d = u.containment, p = d instanceof e ? d.get(0) : /parent/.test(d) ? c.parent().get(0) : d;
            p && (l.containerElement = e(p), /document/.test(d) || d === document ? (l.containerOffset = {left: 0,top: 0}, l.containerPosition = {left: 0,top: 0}, l.parentData = {element: e(document),left: 0,top: 0,width: e(document).width(),height: e(document).height() || document.body.parentNode.scrollHeight}) : (i = e(p), s = [], e(["Top", "Right", "Left", "Bottom"]).each(function(e, n) {
                s[e] = t(i.css("padding" + n));
            }), l.containerOffset = i.offset(), l.containerPosition = i.position(), l.containerSize = {height: i.innerHeight() - s[3],width: i.innerWidth() - s[1]}, n = l.containerOffset, a = l.containerSize.height, o = l.containerSize.width, r = e.ui.hasScroll(p, "left") ? p.scrollWidth : o, h = e.ui.hasScroll(p) ? p.scrollHeight : a, l.parentData = {element: p,left: n.left,top: n.top,width: r,height: h}));
        },resize: function(t) {
            var i, s, n, a, o = e(this).data("ui-resizable"), r = o.options, h = o.containerOffset, l = o.position, u = o._aspectRatio || t.shiftKey, c = {top: 0,left: 0}, d = o.containerElement;
            d[0] !== document && /static/.test(d.css("position")) && (c = h), l.left < (o._helper ? h.left : 0) && (o.size.width = o.size.width + (o._helper ? o.position.left - h.left : o.position.left - c.left), u && (o.size.height = o.size.width / o.aspectRatio), o.position.left = r.helper ? h.left : 0), l.top < (o._helper ? h.top : 0) && (o.size.height = o.size.height + (o._helper ? o.position.top - h.top : o.position.top), u && (o.size.width = o.size.height * o.aspectRatio), o.position.top = o._helper ? h.top : 0), o.offset.left = o.parentData.left + o.position.left, o.offset.top = o.parentData.top + o.position.top, i = Math.abs((o._helper ? o.offset.left - c.left : o.offset.left - c.left) + o.sizeDiff.width), s = Math.abs((o._helper ? o.offset.top - c.top : o.offset.top - h.top) + o.sizeDiff.height), n = o.containerElement.get(0) === o.element.parent().get(0), a = /relative|absolute/.test(o.containerElement.css("position")), n && a && (i -= o.parentData.left), i + o.size.width >= o.parentData.width && (o.size.width = o.parentData.width - i, u && (o.size.height = o.size.width / o.aspectRatio)), s + o.size.height >= o.parentData.height && (o.size.height = o.parentData.height - s, u && (o.size.width = o.size.height * o.aspectRatio));
        },stop: function() {
            var t = e(this).data("ui-resizable"), i = t.options, s = t.containerOffset, n = t.containerPosition, a = t.containerElement, o = e(t.helper), r = o.offset(), h = o.outerWidth() - t.sizeDiff.width, l = o.outerHeight() - t.sizeDiff.height;
            t._helper && !i.animate && /relative/.test(a.css("position")) && e(this).css({left: r.left - n.left - s.left,width: h,height: l}), t._helper && !i.animate && /static/.test(a.css("position")) && e(this).css({left: r.left - n.left - s.left,width: h,height: l});
        }}), e.ui.plugin.add("resizable", "alsoResize", {start: function() {
            var t = e(this).data("ui-resizable"), i = t.options, s = function(t) {
                e(t).each(function() {
                    var t = e(this);
                    t.data("ui-resizable-alsoresize", {width: parseInt(t.width(), 10),height: parseInt(t.height(), 10),left: parseInt(t.css("left"), 10),top: parseInt(t.css("top"), 10)});
                });
            };
            "object" != typeof i.alsoResize || i.alsoResize.parentNode ? s(i.alsoResize) : i.alsoResize.length ? (i.alsoResize = i.alsoResize[0], s(i.alsoResize)) : e.each(i.alsoResize, function(e) {
                s(e);
            });
        },resize: function(t, i) {
            var s = e(this).data("ui-resizable"), n = s.options, a = s.originalSize, o = s.originalPosition, r = {height: s.size.height - a.height || 0,width: s.size.width - a.width || 0,top: s.position.top - o.top || 0,left: s.position.left - o.left || 0}, h = function(t, s) {
                e(t).each(function() {
                    var t = e(this), n = e(this).data("ui-resizable-alsoresize"), a = {}, o = s && s.length ? s : t.parents(i.originalElement[0]).length ? ["width", "height"] : ["width", "height", "top", "left"];
                    e.each(o, function(e, t) {
                        var i = (n[t] || 0) + (r[t] || 0);
                        i && i >= 0 && (a[t] = i || null);
                    }), t.css(a);
                });
            };
            "object" != typeof n.alsoResize || n.alsoResize.nodeType ? h(n.alsoResize) : e.each(n.alsoResize, function(e, t) {
                h(e, t);
            });
        },stop: function() {
            e(this).removeData("resizable-alsoresize");
        }}), e.ui.plugin.add("resizable", "ghost", {start: function() {
            var t = e(this).data("ui-resizable"), i = t.options, s = t.size;
            t.ghost = t.originalElement.clone(), t.ghost.css({opacity: 0.25,display: "block",position: "relative",height: s.height,width: s.width,margin: 0,left: 0,top: 0}).addClass("ui-resizable-ghost").addClass("string" == typeof i.ghost ? i.ghost : ""), t.ghost.appendTo(t.helper);
        },resize: function() {
            var t = e(this).data("ui-resizable");
            t.ghost && t.ghost.css({position: "relative",height: t.size.height,width: t.size.width});
        },stop: function() {
            var t = e(this).data("ui-resizable");
            t.ghost && t.helper && t.helper.get(0).removeChild(t.ghost.get(0));
        }}), e.ui.plugin.add("resizable", "grid", {resize: function() {
            var t = e(this).data("ui-resizable"), i = t.options, s = t.size, n = t.originalSize, a = t.originalPosition, o = t.axis, r = "number" == typeof i.grid ? [i.grid, i.grid] : i.grid, h = r[0] || 1, l = r[1] || 1, u = Math.round((s.width - n.width) / h) * h, c = Math.round((s.height - n.height) / l) * l, d = n.width + u, p = n.height + c, f = i.maxWidth && d > i.maxWidth, m = i.maxHeight && p > i.maxHeight, g = i.minWidth && i.minWidth > d, v = i.minHeight && i.minHeight > p;
            i.grid = r, g && (d += h), v && (p += l), f && (d -= h), m && (p -= l), /^(se|s|e)$/.test(o) ? (t.size.width = d, t.size.height = p) : /^(ne)$/.test(o) ? (t.size.width = d, t.size.height = p, t.position.top = a.top - c) : /^(sw)$/.test(o) ? (t.size.width = d, t.size.height = p, t.position.left = a.left - u) : (t.size.width = d, t.size.height = p, t.position.top = a.top - c, t.position.left = a.left - u);
        }});
})(jQuery);
(function(t) {
    function e(t, e, i) {
        return t > e && e + i > t;
    }
    function i(t) {
        return /left|right/.test(t.css("float")) || /inline|table-cell/.test(t.css("display"));
    }
    t.widget("ui.sortable", t.ui.mouse, {version: "1.10.3",widgetEventPrefix: "sort",ready: !1,options: {appendTo: "parent",axis: !1,connectWith: !1,containment: !1,cursor: "auto",cursorAt: !1,dropOnEmpty: !0,forcePlaceholderSize: !1,forceHelperSize: !1,grid: !1,handle: !1,helper: "original",items: "> *",opacity: !1,placeholder: !1,revert: !1,scroll: !0,scrollSensitivity: 20,scrollSpeed: 20,scope: "default",tolerance: "intersect",zIndex: 1000,activate: null,beforeStop: null,change: null,deactivate: null,out: null,over: null,receive: null,remove: null,sort: null,start: null,stop: null,update: null},_create: function() {
            var t = this.options;
            this.containerCache = {}, this.element.addClass("ui-sortable"), this.refresh(), this.floating = this.items.length ? "x" === t.axis || i(this.items[0].item) : !1, this.offset = this.element.offset(), this._mouseInit(), this.ready = !0;
        },_destroy: function() {
            this.element.removeClass("ui-sortable ui-sortable-disabled"), this._mouseDestroy();
            for (var t = this.items.length - 1; t >= 0; t--) {
                this.items[t].item.removeData(this.widgetName + "-item");
            }
            return this;
        },_setOption: function(e, i) {
            "disabled" === e ? (this.options[e] = i, this.widget().toggleClass("ui-sortable-disabled", !!i)) : t.Widget.prototype._setOption.apply(this, arguments);
        },_mouseCapture: function(e, i) {
            var s = null, n = !1, a = this;
            return this.reverting ? !1 : this.options.disabled || "static" === this.options.type ? !1 : (this._refreshItems(e), t(e.target).parents().each(function() {
                return t.data(this, a.widgetName + "-item") === a ? (s = t(this), !1) : undefined;
            }), t.data(e.target, a.widgetName + "-item") === a && (s = t(e.target)), s ? !this.options.handle || i || (t(this.options.handle, s).find("*").addBack().each(function() {
                this === e.target && (n = !0);
            }), n) ? (this.currentItem = s, this._removeCurrentsFromItems(), !0) : !1 : !1);
        },_mouseStart: function(e, i, s) {
            var n, a, o = this.options;
            if (this.currentContainer = this, this.refreshPositions(), this.helper = this._createHelper(e), this._cacheHelperProportions(), this._cacheMargins(), this.scrollParent = this.helper.scrollParent(), this.offset = this.currentItem.offset(), this.offset = {top: this.offset.top - this.margins.top,left: this.offset.left - this.margins.left}, t.extend(this.offset, {click: {left: e.pageX - this.offset.left,top: e.pageY - this.offset.top},parent: this._getParentOffset(),relative: this._getRelativeOffset()}), this.helper.css("position", "absolute"), this.cssPosition = this.helper.css("position"), this.originalPosition = this._generatePosition(e), this.originalPageX = e.pageX, this.originalPageY = e.pageY, o.cursorAt && this._adjustOffsetFromHelper(o.cursorAt), this.domPosition = {prev: this.currentItem.prev()[0],parent: this.currentItem.parent()[0]}, this.helper[0] !== this.currentItem[0] && this.currentItem.hide(), this._createPlaceholder(), o.containment && this._setContainment(), o.cursor && "auto" !== o.cursor && (a = this.document.find("body"), this.storedCursor = a.css("cursor"), a.css("cursor", o.cursor), this.storedStylesheet = t("<style>*{ cursor: " + o.cursor + " !important; }</style>").appendTo(a)), o.opacity && (this.helper.css("opacity") && (this._storedOpacity = this.helper.css("opacity")), this.helper.css("opacity", o.opacity)), o.zIndex && (this.helper.css("zIndex") && (this._storedZIndex = this.helper.css("zIndex")), this.helper.css("zIndex", o.zIndex)), this.scrollParent[0] !== document && "HTML" !== this.scrollParent[0].tagName && (this.overflowOffset = this.scrollParent.offset()), this._trigger("start", e, this._uiHash()), this._preserveHelperProportions || this._cacheHelperProportions(), !s) {
                for (n = this.containers.length - 1; n >= 0; n--) {
                    this.containers[n]._trigger("activate", e, this._uiHash(this));
                }
            }
            return t.ui.ddmanager && (t.ui.ddmanager.current = this), t.ui.ddmanager && !o.dropBehaviour && t.ui.ddmanager.prepareOffsets(this, e), this.dragging = !0, this.helper.addClass("ui-sortable-helper"), this._mouseDrag(e), !0;
        },_mouseDrag: function(e) {
            var i, s, n, a, o = this.options, r = !1;
            for (this.position = this._generatePosition(e), this.positionAbs = this._convertPositionTo("absolute"), this.lastPositionAbs || (this.lastPositionAbs = this.positionAbs), this.options.scroll && (this.scrollParent[0] !== document && "HTML" !== this.scrollParent[0].tagName ? (this.overflowOffset.top + this.scrollParent[0].offsetHeight - e.pageY < o.scrollSensitivity ? this.scrollParent[0].scrollTop = r = this.scrollParent[0].scrollTop + o.scrollSpeed : e.pageY - this.overflowOffset.top < o.scrollSensitivity && (this.scrollParent[0].scrollTop = r = this.scrollParent[0].scrollTop - o.scrollSpeed), this.overflowOffset.left + this.scrollParent[0].offsetWidth - e.pageX < o.scrollSensitivity ? this.scrollParent[0].scrollLeft = r = this.scrollParent[0].scrollLeft + o.scrollSpeed : e.pageX - this.overflowOffset.left < o.scrollSensitivity && (this.scrollParent[0].scrollLeft = r = this.scrollParent[0].scrollLeft - o.scrollSpeed)) : (e.pageY - t(document).scrollTop() < o.scrollSensitivity ? r = t(document).scrollTop(t(document).scrollTop() - o.scrollSpeed) : t(window).height() - (e.pageY - t(document).scrollTop()) < o.scrollSensitivity && (r = t(document).scrollTop(t(document).scrollTop() + o.scrollSpeed)), e.pageX - t(document).scrollLeft() < o.scrollSensitivity ? r = t(document).scrollLeft(t(document).scrollLeft() - o.scrollSpeed) : t(window).width() - (e.pageX - t(document).scrollLeft()) < o.scrollSensitivity && (r = t(document).scrollLeft(t(document).scrollLeft() + o.scrollSpeed))), r !== !1 && t.ui.ddmanager && !o.dropBehaviour && t.ui.ddmanager.prepareOffsets(this, e)), this.positionAbs = this._convertPositionTo("absolute"), this.options.axis && "y" === this.options.axis || (this.helper[0].style.left = this.position.left + "px"), this.options.axis && "x" === this.options.axis || (this.helper[0].style.top = this.position.top + "px"), i = this.items.length - 1; i >= 0; i--) {
                if (s = this.items[i], n = s.item[0], a = this._intersectsWithPointer(s), a && s.instance === this.currentContainer && n !== this.currentItem[0] && this.placeholder[1 === a ? "next" : "prev"]()[0] !== n && !t.contains(this.placeholder[0], n) && ("semi-dynamic" === this.options.type ? !t.contains(this.element[0], n) : !0)) {
                    if (this.direction = 1 === a ? "down" : "up", "pointer" !== this.options.tolerance && !this._intersectsWithSides(s)) {
                        break;
                    }
                    this._rearrange(e, s), this._trigger("change", e, this._uiHash());
                    break;
                }
            }
            return this._contactContainers(e), t.ui.ddmanager && t.ui.ddmanager.drag(this, e), this._trigger("sort", e, this._uiHash()), this.lastPositionAbs = this.positionAbs, !1;
        },_mouseStop: function(e, i) {
            if (e) {
                if (t.ui.ddmanager && !this.options.dropBehaviour && t.ui.ddmanager.drop(this, e), this.options.revert) {
                    var s = this, n = this.placeholder.offset(), a = this.options.axis, o = {};
                    a && "x" !== a || (o.left = n.left - this.offset.parent.left - this.margins.left + (this.offsetParent[0] === document.body ? 0 : this.offsetParent[0].scrollLeft)), a && "y" !== a || (o.top = n.top - this.offset.parent.top - this.margins.top + (this.offsetParent[0] === document.body ? 0 : this.offsetParent[0].scrollTop)), this.reverting = !0, t(this.helper).animate(o, parseInt(this.options.revert, 10) || 500, function() {
                        s._clear(e);
                    });
                } else {
                    this._clear(e, i);
                }
                return !1;
            }
        },cancel: function() {
            if (this.dragging) {
                this._mouseUp({target: null}), "original" === this.options.helper ? this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper") : this.currentItem.show();
                for (var e = this.containers.length - 1; e >= 0; e--) {
                    this.containers[e]._trigger("deactivate", null, this._uiHash(this)), this.containers[e].containerCache.over && (this.containers[e]._trigger("out", null, this._uiHash(this)), this.containers[e].containerCache.over = 0);
                }
            }
            return this.placeholder && (this.placeholder[0].parentNode && this.placeholder[0].parentNode.removeChild(this.placeholder[0]), "original" !== this.options.helper && this.helper && this.helper[0].parentNode && this.helper.remove(), t.extend(this, {helper: null,dragging: !1,reverting: !1,_noFinalSort: null}), this.domPosition.prev ? t(this.domPosition.prev).after(this.currentItem) : t(this.domPosition.parent).prepend(this.currentItem)), this;
        },serialize: function(e) {
            var i = this._getItemsAsjQuery(e && e.connected), s = [];
            return e = e || {}, t(i).each(function() {
                var i = (t(e.item || this).attr(e.attribute || "id") || "").match(e.expression || /(.+)[\-=_](.+)/);
                i && s.push((e.key || i[1] + "[]") + "=" + (e.key && e.expression ? i[1] : i[2]));
            }), !s.length && e.key && s.push(e.key + "="), s.join("&");
        },toArray: function(e) {
            var i = this._getItemsAsjQuery(e && e.connected), s = [];
            return e = e || {}, i.each(function() {
                s.push(t(e.item || this).attr(e.attribute || "id") || "");
            }), s;
        },_intersectsWith: function(t) {
            var e = this.positionAbs.left, i = e + this.helperProportions.width, s = this.positionAbs.top, n = s + this.helperProportions.height, a = t.left, o = a + t.width, r = t.top, h = r + t.height, l = this.offset.click.top, c = this.offset.click.left, u = "x" === this.options.axis || s + l > r && h > s + l, d = "y" === this.options.axis || e + c > a && o > e + c, p = u && d;
            return "pointer" === this.options.tolerance || this.options.forcePointerForContainers || "pointer" !== this.options.tolerance && this.helperProportions[this.floating ? "width" : "height"] > t[this.floating ? "width" : "height"] ? p : e + this.helperProportions.width / 2 > a && o > i - this.helperProportions.width / 2 && s + this.helperProportions.height / 2 > r && h > n - this.helperProportions.height / 2;
        },_intersectsWithPointer: function(t) {
            var i = "x" === this.options.axis || e(this.positionAbs.top + this.offset.click.top, t.top, t.height), s = "y" === this.options.axis || e(this.positionAbs.left + this.offset.click.left, t.left, t.width), n = i && s, a = this._getDragVerticalDirection(), o = this._getDragHorizontalDirection();
            return n ? this.floating ? o && "right" === o || "down" === a ? 2 : 1 : a && ("down" === a ? 2 : 1) : !1;
        },_intersectsWithSides: function(t) {
            var i = e(this.positionAbs.top + this.offset.click.top, t.top + t.height / 2, t.height), s = e(this.positionAbs.left + this.offset.click.left, t.left + t.width / 2, t.width), n = this._getDragVerticalDirection(), a = this._getDragHorizontalDirection();
            return this.floating && a ? "right" === a && s || "left" === a && !s : n && ("down" === n && i || "up" === n && !i);
        },_getDragVerticalDirection: function() {
            var t = this.positionAbs.top - this.lastPositionAbs.top;
            return 0 !== t && (t > 0 ? "down" : "up");
        },_getDragHorizontalDirection: function() {
            var t = this.positionAbs.left - this.lastPositionAbs.left;
            return 0 !== t && (t > 0 ? "right" : "left");
        },refresh: function(t) {
            return this._refreshItems(t), this.refreshPositions(), this;
        },_connectWith: function() {
            var t = this.options;
            return t.connectWith.constructor === String ? [t.connectWith] : t.connectWith;
        },_getItemsAsjQuery: function(e) {
            var i, s, n, a, o = [], r = [], h = this._connectWith();
            if (h && e) {
                for (i = h.length - 1; i >= 0; i--) {
                    for (n = t(h[i]), s = n.length - 1; s >= 0; s--) {
                        a = t.data(n[s], this.widgetFullName), a && a !== this && !a.options.disabled && r.push([t.isFunction(a.options.items) ? a.options.items.call(a.element) : t(a.options.items, a.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), a]);
                    }
                }
            }
            for (r.push([t.isFunction(this.options.items) ? this.options.items.call(this.element, null, {options: this.options,item: this.currentItem}) : t(this.options.items, this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), this]), i = r.length - 1; i >= 0; i--) {
                r[i][0].each(function() {
                    o.push(this);
                });
            }
            return t(o);
        },_removeCurrentsFromItems: function() {
            var e = this.currentItem.find(":data(" + this.widgetName + "-item)");
            this.items = t.grep(this.items, function(t) {
                for (var i = 0; e.length > i; i++) {
                    if (e[i] === t.item[0]) {
                        return !1;
                    }
                }
                return !0;
            });
        },_refreshItems: function(e) {
            this.items = [], this.containers = [this];
            var i, s, n, a, o, r, h, l, c = this.items, u = [[t.isFunction(this.options.items) ? this.options.items.call(this.element[0], e, {item: this.currentItem}) : t(this.options.items, this.element), this]], d = this._connectWith();
            if (d && this.ready) {
                for (i = d.length - 1; i >= 0; i--) {
                    for (n = t(d[i]), s = n.length - 1; s >= 0; s--) {
                        a = t.data(n[s], this.widgetFullName), a && a !== this && !a.options.disabled && (u.push([t.isFunction(a.options.items) ? a.options.items.call(a.element[0], e, {item: this.currentItem}) : t(a.options.items, a.element), a]), this.containers.push(a));
                    }
                }
            }
            for (i = u.length - 1; i >= 0; i--) {
                for (o = u[i][1], r = u[i][0], s = 0, l = r.length; l > s; s++) {
                    h = t(r[s]), h.data(this.widgetName + "-item", o), c.push({item: h,instance: o,width: 0,height: 0,left: 0,top: 0});
                }
            }
        },refreshPositions: function(e) {
            this.offsetParent && this.helper && (this.offset.parent = this._getParentOffset());
            var i, s, n, a;
            for (i = this.items.length - 1; i >= 0; i--) {
                s = this.items[i], s.instance !== this.currentContainer && this.currentContainer && s.item[0] !== this.currentItem[0] || (n = this.options.toleranceElement ? t(this.options.toleranceElement, s.item) : s.item, e || (s.width = n.outerWidth(), s.height = n.outerHeight()), a = n.offset(), s.left = a.left, s.top = a.top);
            }
            if (this.options.custom && this.options.custom.refreshContainers) {
                this.options.custom.refreshContainers.call(this);
            } else {
                for (i = this.containers.length - 1; i >= 0; i--) {
                    a = this.containers[i].element.offset(), this.containers[i].containerCache.left = a.left, this.containers[i].containerCache.top = a.top, this.containers[i].containerCache.width = this.containers[i].element.outerWidth(), this.containers[i].containerCache.height = this.containers[i].element.outerHeight();
                }
            }
            return this;
        },_createPlaceholder: function(e) {
            e = e || this;
            var i, s = e.options;
            s.placeholder && s.placeholder.constructor !== String || (i = s.placeholder, s.placeholder = {element: function() {
                    var s = e.currentItem[0].nodeName.toLowerCase(), n = t("<" + s + ">", e.document[0]).addClass(i || e.currentItem[0].className + " ui-sortable-placeholder").removeClass("ui-sortable-helper");
                    return "tr" === s ? e.currentItem.children().each(function() {
                        t("<td>&#160;</td>", e.document[0]).attr("colspan", t(this).attr("colspan") || 1).appendTo(n);
                    }) : "img" === s && n.attr("src", e.currentItem.attr("src")), i || n.css("visibility", "hidden"), n;
                },update: function(t, n) {
                    (!i || s.forcePlaceholderSize) && (n.height() || n.height(e.currentItem.innerHeight() - parseInt(e.currentItem.css("paddingTop") || 0, 10) - parseInt(e.currentItem.css("paddingBottom") || 0, 10)), n.width() || n.width(e.currentItem.innerWidth() - parseInt(e.currentItem.css("paddingLeft") || 0, 10) - parseInt(e.currentItem.css("paddingRight") || 0, 10)));
                }}), e.placeholder = t(s.placeholder.element.call(e.element, e.currentItem)), e.currentItem.after(e.placeholder), s.placeholder.update(e, e.placeholder);
        },_contactContainers: function(s) {
            var n, a, o, r, h, l, c, u, d, p, f = null, m = null;
            for (n = this.containers.length - 1; n >= 0; n--) {
                if (!t.contains(this.currentItem[0], this.containers[n].element[0])) {
                    if (this._intersectsWith(this.containers[n].containerCache)) {
                        if (f && t.contains(this.containers[n].element[0], f.element[0])) {
                            continue;
                        }
                        f = this.containers[n], m = n;
                    } else {
                        this.containers[n].containerCache.over && (this.containers[n]._trigger("out", s, this._uiHash(this)), this.containers[n].containerCache.over = 0);
                    }
                }
            }
            if (f) {
                if (1 === this.containers.length) {
                    this.containers[m].containerCache.over || (this.containers[m]._trigger("over", s, this._uiHash(this)), this.containers[m].containerCache.over = 1);
                } else {
                    for (o = 10000, r = null, p = f.floating || i(this.currentItem), h = p ? "left" : "top", l = p ? "width" : "height", c = this.positionAbs[h] + this.offset.click[h], a = this.items.length - 1; a >= 0; a--) {
                        t.contains(this.containers[m].element[0], this.items[a].item[0]) && this.items[a].item[0] !== this.currentItem[0] && (!p || e(this.positionAbs.top + this.offset.click.top, this.items[a].top, this.items[a].height)) && (u = this.items[a].item.offset()[h], d = !1, Math.abs(u - c) > Math.abs(u + this.items[a][l] - c) && (d = !0, u += this.items[a][l]), o > Math.abs(u - c) && (o = Math.abs(u - c), r = this.items[a], this.direction = d ? "up" : "down"));
                    }
                    if (!r && !this.options.dropOnEmpty) {
                        return;
                    }
                    if (this.currentContainer === this.containers[m]) {
                        return;
                    }
                    r ? this._rearrange(s, r, null, !0) : this._rearrange(s, null, this.containers[m].element, !0), this._trigger("change", s, this._uiHash()), this.containers[m]._trigger("change", s, this._uiHash(this)), this.currentContainer = this.containers[m], this.options.placeholder.update(this.currentContainer, this.placeholder), this.containers[m]._trigger("over", s, this._uiHash(this)), this.containers[m].containerCache.over = 1;
                }
            }
        },_createHelper: function(e) {
            var i = this.options, s = t.isFunction(i.helper) ? t(i.helper.apply(this.element[0], [e, this.currentItem])) : "clone" === i.helper ? this.currentItem.clone() : this.currentItem;
            return s.parents("body").length || t("parent" !== i.appendTo ? i.appendTo : this.currentItem[0].parentNode)[0].appendChild(s[0]), s[0] === this.currentItem[0] && (this._storedCSS = {width: this.currentItem[0].style.width,height: this.currentItem[0].style.height,position: this.currentItem.css("position"),top: this.currentItem.css("top"),left: this.currentItem.css("left")}), (!s[0].style.width || i.forceHelperSize) && s.width(this.currentItem.width()), (!s[0].style.height || i.forceHelperSize) && s.height(this.currentItem.height()), s;
        },_adjustOffsetFromHelper: function(e) {
            "string" == typeof e && (e = e.split(" ")), t.isArray(e) && (e = {left: +e[0],top: +e[1] || 0}), "left" in e && (this.offset.click.left = e.left + this.margins.left), "right" in e && (this.offset.click.left = this.helperProportions.width - e.right + this.margins.left), "top" in e && (this.offset.click.top = e.top + this.margins.top), "bottom" in e && (this.offset.click.top = this.helperProportions.height - e.bottom + this.margins.top);
        },_getParentOffset: function() {
            this.offsetParent = this.helper.offsetParent();
            var e = this.offsetParent.offset();
            return "absolute" === this.cssPosition && this.scrollParent[0] !== document && t.contains(this.scrollParent[0], this.offsetParent[0]) && (e.left += this.scrollParent.scrollLeft(), e.top += this.scrollParent.scrollTop()), (this.offsetParent[0] === document.body || this.offsetParent[0].tagName && "html" === this.offsetParent[0].tagName.toLowerCase() && t.ui.ie) && (e = {top: 0,left: 0}), {top: e.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),left: e.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)};
        },_getRelativeOffset: function() {
            if ("relative" === this.cssPosition) {
                var t = this.currentItem.position();
                return {top: t.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(),left: t.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()};
            }
            return {top: 0,left: 0};
        },_cacheMargins: function() {
            this.margins = {left: parseInt(this.currentItem.css("marginLeft"), 10) || 0,top: parseInt(this.currentItem.css("marginTop"), 10) || 0};
        },_cacheHelperProportions: function() {
            this.helperProportions = {width: this.helper.outerWidth(),height: this.helper.outerHeight()};
        },_setContainment: function() {
            var e, i, s, n = this.options;
            "parent" === n.containment && (n.containment = this.helper[0].parentNode), ("document" === n.containment || "window" === n.containment) && (this.containment = [0 - this.offset.relative.left - this.offset.parent.left, 0 - this.offset.relative.top - this.offset.parent.top, t("document" === n.containment ? document : window).width() - this.helperProportions.width - this.margins.left, (t("document" === n.containment ? document : window).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]), /^(document|window|parent)$/.test(n.containment) || (e = t(n.containment)[0], i = t(n.containment).offset(), s = "hidden" !== t(e).css("overflow"), this.containment = [i.left + (parseInt(t(e).css("borderLeftWidth"), 10) || 0) + (parseInt(t(e).css("paddingLeft"), 10) || 0) - this.margins.left, i.top + (parseInt(t(e).css("borderTopWidth"), 10) || 0) + (parseInt(t(e).css("paddingTop"), 10) || 0) - this.margins.top, i.left + (s ? Math.max(e.scrollWidth, e.offsetWidth) : e.offsetWidth) - (parseInt(t(e).css("borderLeftWidth"), 10) || 0) - (parseInt(t(e).css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left, i.top + (s ? Math.max(e.scrollHeight, e.offsetHeight) : e.offsetHeight) - (parseInt(t(e).css("borderTopWidth"), 10) || 0) - (parseInt(t(e).css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top]);
        },_convertPositionTo: function(e, i) {
            i || (i = this.position);
            var s = "absolute" === e ? 1 : -1, n = "absolute" !== this.cssPosition || this.scrollParent[0] !== document && t.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent, a = /(html|body)/i.test(n[0].tagName);
            return {top: i.top + this.offset.relative.top * s + this.offset.parent.top * s - ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : a ? 0 : n.scrollTop()) * s,left: i.left + this.offset.relative.left * s + this.offset.parent.left * s - ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : a ? 0 : n.scrollLeft()) * s};
        },_generatePosition: function(e) {
            var i, s, n = this.options, a = e.pageX, o = e.pageY, r = "absolute" !== this.cssPosition || this.scrollParent[0] !== document && t.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent, h = /(html|body)/i.test(r[0].tagName);
            return "relative" !== this.cssPosition || this.scrollParent[0] !== document && this.scrollParent[0] !== this.offsetParent[0] || (this.offset.relative = this._getRelativeOffset()), this.originalPosition && (this.containment && (e.pageX - this.offset.click.left < this.containment[0] && (a = this.containment[0] + this.offset.click.left), e.pageY - this.offset.click.top < this.containment[1] && (o = this.containment[1] + this.offset.click.top), e.pageX - this.offset.click.left > this.containment[2] && (a = this.containment[2] + this.offset.click.left), e.pageY - this.offset.click.top > this.containment[3] && (o = this.containment[3] + this.offset.click.top)), n.grid && (i = this.originalPageY + Math.round((o - this.originalPageY) / n.grid[1]) * n.grid[1], o = this.containment ? i - this.offset.click.top >= this.containment[1] && i - this.offset.click.top <= this.containment[3] ? i : i - this.offset.click.top >= this.containment[1] ? i - n.grid[1] : i + n.grid[1] : i, s = this.originalPageX + Math.round((a - this.originalPageX) / n.grid[0]) * n.grid[0], a = this.containment ? s - this.offset.click.left >= this.containment[0] && s - this.offset.click.left <= this.containment[2] ? s : s - this.offset.click.left >= this.containment[0] ? s - n.grid[0] : s + n.grid[0] : s)), {top: o - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : h ? 0 : r.scrollTop()),left: a - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : h ? 0 : r.scrollLeft())};
        },_rearrange: function(t, e, i, s) {
            i ? i[0].appendChild(this.placeholder[0]) : e.item[0].parentNode.insertBefore(this.placeholder[0], "down" === this.direction ? e.item[0] : e.item[0].nextSibling), this.counter = this.counter ? ++this.counter : 1;
            var n = this.counter;
            this._delay(function() {
                n === this.counter && this.refreshPositions(!s);
            });
        },_clear: function(t, e) {
            this.reverting = !1;
            var i, s = [];
            if (!this._noFinalSort && this.currentItem.parent().length && this.placeholder.before(this.currentItem), this._noFinalSort = null, this.helper[0] === this.currentItem[0]) {
                for (i in this._storedCSS) {
                    ("auto" === this._storedCSS[i] || "static" === this._storedCSS[i]) && (this._storedCSS[i] = "");
                }
                this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper");
            } else {
                this.currentItem.show();
            }
            for (this.fromOutside && !e && s.push(function(t) {
                this._trigger("receive", t, this._uiHash(this.fromOutside));
            }), !this.fromOutside && this.domPosition.prev === this.currentItem.prev().not(".ui-sortable-helper")[0] && this.domPosition.parent === this.currentItem.parent()[0] || e || s.push(function(t) {
                this._trigger("update", t, this._uiHash());
            }), this !== this.currentContainer && (e || (s.push(function(t) {
                this._trigger("remove", t, this._uiHash());
            }), s.push(function(t) {
                return function(e) {
                    t._trigger("receive", e, this._uiHash(this));
                };
            }.call(this, this.currentContainer)), s.push(function(t) {
                return function(e) {
                    t._trigger("update", e, this._uiHash(this));
                };
            }.call(this, this.currentContainer)))), i = this.containers.length - 1; i >= 0; i--) {
                e || s.push(function(t) {
                    return function(e) {
                        t._trigger("deactivate", e, this._uiHash(this));
                    };
                }.call(this, this.containers[i])), this.containers[i].containerCache.over && (s.push(function(t) {
                    return function(e) {
                        t._trigger("out", e, this._uiHash(this));
                    };
                }.call(this, this.containers[i])), this.containers[i].containerCache.over = 0);
            }
            if (this.storedCursor && (this.document.find("body").css("cursor", this.storedCursor), this.storedStylesheet.remove()), this._storedOpacity && this.helper.css("opacity", this._storedOpacity), this._storedZIndex && this.helper.css("zIndex", "auto" === this._storedZIndex ? "" : this._storedZIndex), this.dragging = !1, this.cancelHelperRemoval) {
                if (!e) {
                    for (this._trigger("beforeStop", t, this._uiHash()), i = 0; s.length > i; i++) {
                        s[i].call(this, t);
                    }
                    this._trigger("stop", t, this._uiHash());
                }
                return this.fromOutside = !1, !1;
            }
            if (e || this._trigger("beforeStop", t, this._uiHash()), this.placeholder[0].parentNode.removeChild(this.placeholder[0]), this.helper[0] !== this.currentItem[0] && this.helper.remove(), this.helper = null, !e) {
                for (i = 0; s.length > i; i++) {
                    s[i].call(this, t);
                }
                this._trigger("stop", t, this._uiHash());
            }
            return this.fromOutside = !1, !0;
        },_trigger: function() {
            t.Widget.prototype._trigger.apply(this, arguments) === !1 && this.cancel();
        },_uiHash: function(e) {
            var i = e || this;
            return {helper: i.helper,placeholder: i.placeholder || t([]),position: i.position,originalPosition: i.originalPosition,offset: i.positionAbs,item: i.currentItem,sender: e ? e.element : null};
        }});
})(jQuery);
(function(t) {
    var e = 0, i = {}, s = {};
    i.height = i.paddingTop = i.paddingBottom = i.borderTopWidth = i.borderBottomWidth = "hide", s.height = s.paddingTop = s.paddingBottom = s.borderTopWidth = s.borderBottomWidth = "show", t.widget("ui.accordion", {version: "1.10.3",options: {active: 0,animate: {},collapsible: !1,event: "click",header: "> li > :first-child,> :not(li):even",heightStyle: "auto",icons: {activeHeader: "ui-icon-triangle-1-s",header: "ui-icon-triangle-1-e"},activate: null,beforeActivate: null},_create: function() {
            var e = this.options;
            this.prevShow = this.prevHide = t(), this.element.addClass("ui-accordion ui-widget ui-helper-reset").attr("role", "tablist"), e.collapsible || e.active !== !1 && null != e.active || (e.active = 0), this._processPanels(), 0 > e.active && (e.active += this.headers.length), this._refresh();
        },_getCreateEventData: function() {
            return {header: this.active,panel: this.active.length ? this.active.next() : t(),content: this.active.length ? this.active.next() : t()};
        },_createIcons: function() {
            var e = this.options.icons;
            e && (t("<span>").addClass("ui-accordion-header-icon ui-icon " + e.header).prependTo(this.headers), this.active.children(".ui-accordion-header-icon").removeClass(e.header).addClass(e.activeHeader), this.headers.addClass("ui-accordion-icons"));
        },_destroyIcons: function() {
            this.headers.removeClass("ui-accordion-icons").children(".ui-accordion-header-icon").remove();
        },_destroy: function() {
            var t;
            this.element.removeClass("ui-accordion ui-widget ui-helper-reset").removeAttr("role"), this.headers.removeClass("ui-accordion-header ui-accordion-header-active ui-helper-reset ui-state-default ui-corner-all ui-state-active ui-state-disabled ui-corner-top").removeAttr("role").removeAttr("aria-selected").removeAttr("aria-controls").removeAttr("tabIndex").each(function() {
                /^ui-accordion/.test(this.id) && this.removeAttribute("id");
            }), this._destroyIcons(), t = this.headers.next().css("display", "").removeAttr("role").removeAttr("aria-expanded").removeAttr("aria-hidden").removeAttr("aria-labelledby").removeClass("ui-helper-reset ui-widget-content ui-corner-bottom ui-accordion-content ui-accordion-content-active ui-state-disabled").each(function() {
                /^ui-accordion/.test(this.id) && this.removeAttribute("id");
            }), "content" !== this.options.heightStyle && t.css("height", "");
        },_setOption: function(t, e) {
            return "active" === t ? (this._activate(e), undefined) : ("event" === t && (this.options.event && this._off(this.headers, this.options.event), this._setupEvents(e)), this._super(t, e), "collapsible" !== t || e || this.options.active !== !1 || this._activate(0), "icons" === t && (this._destroyIcons(), e && this._createIcons()), "disabled" === t && this.headers.add(this.headers.next()).toggleClass("ui-state-disabled", !!e), undefined);
        },_keydown: function(e) {
            if (!e.altKey && !e.ctrlKey) {
                var i = t.ui.keyCode, s = this.headers.length, n = this.headers.index(e.target), a = !1;
                switch (e.keyCode) {
                    case i.RIGHT:
                    case i.DOWN:
                        a = this.headers[(n + 1) % s];
                        break;
                    case i.LEFT:
                    case i.UP:
                        a = this.headers[(n - 1 + s) % s];
                        break;
                    case i.SPACE:
                    case i.ENTER:
                        this._eventHandler(e);
                        break;
                    case i.HOME:
                        a = this.headers[0];
                        break;
                    case i.END:
                        a = this.headers[s - 1];
                }
                a && (t(e.target).attr("tabIndex", -1), t(a).attr("tabIndex", 0), a.focus(), e.preventDefault());
            }
        },_panelKeyDown: function(e) {
            e.keyCode === t.ui.keyCode.UP && e.ctrlKey && t(e.currentTarget).prev().focus();
        },refresh: function() {
            var e = this.options;
            this._processPanels(), e.active === !1 && e.collapsible === !0 || !this.headers.length ? (e.active = !1, this.active = t()) : e.active === !1 ? this._activate(0) : this.active.length && !t.contains(this.element[0], this.active[0]) ? this.headers.length === this.headers.find(".ui-state-disabled").length ? (e.active = !1, this.active = t()) : this._activate(Math.max(0, e.active - 1)) : e.active = this.headers.index(this.active), this._destroyIcons(), this._refresh();
        },_processPanels: function() {
            this.headers = this.element.find(this.options.header).addClass("ui-accordion-header ui-helper-reset ui-state-default ui-corner-all"), this.headers.next().addClass("ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom").filter(":not(.ui-accordion-content-active)").hide();
        },_refresh: function() {
            var i, s = this.options, n = s.heightStyle, a = this.element.parent(), o = this.accordionId = "ui-accordion-" + (this.element.attr("id") || ++e);
            this.active = this._findActive(s.active).addClass("ui-accordion-header-active ui-state-active ui-corner-top").removeClass("ui-corner-all"), this.active.next().addClass("ui-accordion-content-active").show(), this.headers.attr("role", "tab").each(function(e) {
                var i = t(this), s = i.attr("id"), n = i.next(), a = n.attr("id");
                s || (s = o + "-header-" + e, i.attr("id", s)), a || (a = o + "-panel-" + e, n.attr("id", a)), i.attr("aria-controls", a), n.attr("aria-labelledby", s);
            }).next().attr("role", "tabpanel"), this.headers.not(this.active).attr({"aria-selected": "false",tabIndex: -1}).next().attr({"aria-expanded": "false","aria-hidden": "true"}).hide(), this.active.length ? this.active.attr({"aria-selected": "true",tabIndex: 0}).next().attr({"aria-expanded": "true","aria-hidden": "false"}) : this.headers.eq(0).attr("tabIndex", 0), this._createIcons(), this._setupEvents(s.event), "fill" === n ? (i = a.height(), this.element.siblings(":visible").each(function() {
                var e = t(this), s = e.css("position");
                "absolute" !== s && "fixed" !== s && (i -= e.outerHeight(!0));
            }), this.headers.each(function() {
                i -= t(this).outerHeight(!0);
            }), this.headers.next().each(function() {
                t(this).height(Math.max(0, i - t(this).innerHeight() + t(this).height()));
            }).css("overflow", "auto")) : "auto" === n && (i = 0, this.headers.next().each(function() {
                i = Math.max(i, t(this).css("height", "").height());
            }).height(i));
        },_activate: function(e) {
            var i = this._findActive(e)[0];
            i !== this.active[0] && (i = i || this.active[0], this._eventHandler({target: i,currentTarget: i,preventDefault: t.noop}));
        },_findActive: function(e) {
            return "number" == typeof e ? this.headers.eq(e) : t();
        },_setupEvents: function(e) {
            var i = {keydown: "_keydown"};
            e && t.each(e.split(" "), function(t, e) {
                i[e] = "_eventHandler";
            }), this._off(this.headers.add(this.headers.next())), this._on(this.headers, i), this._on(this.headers.next(), {keydown: "_panelKeyDown"}), this._hoverable(this.headers), this._focusable(this.headers);
        },_eventHandler: function(e) {
            var i = this.options, s = this.active, n = t(e.currentTarget), a = n[0] === s[0], o = a && i.collapsible, r = o ? t() : n.next(), h = s.next(), l = {oldHeader: s,oldPanel: h,newHeader: o ? t() : n,newPanel: r};
            e.preventDefault(), a && !i.collapsible || this._trigger("beforeActivate", e, l) === !1 || (i.active = o ? !1 : this.headers.index(n), this.active = a ? t() : n, this._toggle(l), s.removeClass("ui-accordion-header-active ui-state-active"), i.icons && s.children(".ui-accordion-header-icon").removeClass(i.icons.activeHeader).addClass(i.icons.header), a || (n.removeClass("ui-corner-all").addClass("ui-accordion-header-active ui-state-active ui-corner-top"), i.icons && n.children(".ui-accordion-header-icon").removeClass(i.icons.header).addClass(i.icons.activeHeader), n.next().addClass("ui-accordion-content-active")));
        },_toggle: function(e) {
            var i = e.newPanel, s = this.prevShow.length ? this.prevShow : e.oldPanel;
            this.prevShow.add(this.prevHide).stop(!0, !0), this.prevShow = i, this.prevHide = s, this.options.animate ? this._animate(i, s, e) : (s.hide(), i.show(), this._toggleComplete(e)), s.attr({"aria-expanded": "false","aria-hidden": "true"}), s.prev().attr("aria-selected", "false"), i.length && s.length ? s.prev().attr("tabIndex", -1) : i.length && this.headers.filter(function() {
                return 0 === t(this).attr("tabIndex");
            }).attr("tabIndex", -1), i.attr({"aria-expanded": "true","aria-hidden": "false"}).prev().attr({"aria-selected": "true",tabIndex: 0});
        },_animate: function(t, e, n) {
            var a, o, r, h = this, l = 0, c = t.length && (!e.length || t.index() < e.index()), u = this.options.animate || {}, d = c && u.down || u, p = function() {
                h._toggleComplete(n);
            };
            return "number" == typeof d && (r = d), "string" == typeof d && (o = d), o = o || d.easing || u.easing, r = r || d.duration || u.duration, e.length ? t.length ? (a = t.show().outerHeight(), e.animate(i, {duration: r,easing: o,step: function(t, e) {
                    e.now = Math.round(t);
                }}), t.hide().animate(s, {duration: r,easing: o,complete: p,step: function(t, i) {
                    i.now = Math.round(t), "height" !== i.prop ? l += i.now : "content" !== h.options.heightStyle && (i.now = Math.round(a - e.outerHeight() - l), l = 0);
                }}), undefined) : e.animate(i, r, o, p) : t.animate(s, r, o, p);
        },_toggleComplete: function(t) {
            var e = t.oldPanel;
            e.removeClass("ui-accordion-content-active").prev().removeClass("ui-corner-top").addClass("ui-corner-all"), e.length && (e.parent()[0].className = e.parent()[0].className), this._trigger("activate", null, t);
        }});
})(jQuery);
(function(t) {
    var e = 0;
    t.widget("ui.autocomplete", {version: "1.10.3",defaultElement: "<input>",options: {appendTo: null,autoFocus: !1,delay: 300,minLength: 1,position: {my: "left top",at: "left bottom",collision: "none"},source: null,change: null,close: null,focus: null,open: null,response: null,search: null,select: null},pending: 0,_create: function() {
            var e, i, s, n = this.element[0].nodeName.toLowerCase(), a = "textarea" === n, o = "input" === n;
            this.isMultiLine = a ? !0 : o ? !1 : this.element.prop("isContentEditable"), this.valueMethod = this.element[a || o ? "val" : "text"], this.isNewMenu = !0, this.element.addClass("ui-autocomplete-input").attr("autocomplete", "off"), this._on(this.element, {keydown: function(n) {
                    if (this.element.prop("readOnly")) {
                        return e = !0, s = !0, i = !0, undefined;
                    }
                    e = !1, s = !1, i = !1;
                    var a = t.ui.keyCode;
                    switch (n.keyCode) {
                        case a.PAGE_UP:
                            e = !0, this._move("previousPage", n);
                            break;
                        case a.PAGE_DOWN:
                            e = !0, this._move("nextPage", n);
                            break;
                        case a.UP:
                            e = !0, this._keyEvent("previous", n);
                            break;
                        case a.DOWN:
                            e = !0, this._keyEvent("next", n);
                            break;
                        case a.ENTER:
                        case a.NUMPAD_ENTER:
                            this.menu.active && (e = !0, n.preventDefault(), this.menu.select(n));
                            break;
                        case a.TAB:
                            this.menu.active && this.menu.select(n);
                            break;
                        case a.ESCAPE:
                            this.menu.element.is(":visible") && (this._value(this.term), this.close(n), n.preventDefault());
                            break;
                        default:
                            i = !0, this._searchTimeout(n);
                    }
                },keypress: function(s) {
                    if (e) {
                        return e = !1, (!this.isMultiLine || this.menu.element.is(":visible")) && s.preventDefault(), undefined;
                    }
                    if (!i) {
                        var n = t.ui.keyCode;
                        switch (s.keyCode) {
                            case n.PAGE_UP:
                                this._move("previousPage", s);
                                break;
                            case n.PAGE_DOWN:
                                this._move("nextPage", s);
                                break;
                            case n.UP:
                                this._keyEvent("previous", s);
                                break;
                            case n.DOWN:
                                this._keyEvent("next", s);
                        }
                    }
                },input: function(t) {
                    return s ? (s = !1, t.preventDefault(), undefined) : (this._searchTimeout(t), undefined);
                },focus: function() {
                    this.selectedItem = null, this.previous = this._value();
                },blur: function(t) {
                    return this.cancelBlur ? (delete this.cancelBlur, undefined) : (clearTimeout(this.searching), this.close(t), this._change(t), undefined);
                }}), this._initSource(), this.menu = t("<ul>").addClass("ui-autocomplete ui-front").appendTo(this._appendTo()).menu({role: null}).hide().data("ui-menu"), this._on(this.menu.element, {mousedown: function(e) {
                    e.preventDefault(), this.cancelBlur = !0, this._delay(function() {
                        delete this.cancelBlur;
                    });
                    var i = this.menu.element[0];
                    t(e.target).closest(".ui-menu-item").length || this._delay(function() {
                        var e = this;
                        this.document.one("mousedown", function(s) {
                            s.target === e.element[0] || s.target === i || t.contains(i, s.target) || e.close();
                        });
                    });
                },menufocus: function(e, i) {
                    if (this.isNewMenu && (this.isNewMenu = !1, e.originalEvent && /^mouse/.test(e.originalEvent.type))) {
                        return this.menu.blur(), this.document.one("mousemove", function() {
                            t(e.target).trigger(e.originalEvent);
                        }), undefined;
                    }
                    var s = i.item.data("ui-autocomplete-item");
                    !1 !== this._trigger("focus", e, {item: s}) ? e.originalEvent && /^key/.test(e.originalEvent.type) && this._value(s.value) : this.liveRegion.text(s.value);
                },menuselect: function(t, e) {
                    var i = e.item.data("ui-autocomplete-item"), s = this.previous;
                    this.element[0] !== this.document[0].activeElement && (this.element.focus(), this.previous = s, this._delay(function() {
                        this.previous = s, this.selectedItem = i;
                    })), !1 !== this._trigger("select", t, {item: i}) && this._value(i.value), this.term = this._value(), this.close(t), this.selectedItem = i;
                }}), this.liveRegion = t("<span>", {role: "status","aria-live": "polite"}).addClass("ui-helper-hidden-accessible").insertBefore(this.element), this._on(this.window, {beforeunload: function() {
                    this.element.removeAttr("autocomplete");
                }});
        },_destroy: function() {
            clearTimeout(this.searching), this.element.removeClass("ui-autocomplete-input").removeAttr("autocomplete"), this.menu.element.remove(), this.liveRegion.remove();
        },_setOption: function(t, e) {
            this._super(t, e), "source" === t && this._initSource(), "appendTo" === t && this.menu.element.appendTo(this._appendTo()), "disabled" === t && e && this.xhr && this.xhr.abort();
        },_appendTo: function() {
            var e = this.options.appendTo;
            return e && (e = e.jquery || e.nodeType ? t(e) : this.document.find(e).eq(0)), e || (e = this.element.closest(".ui-front")), e.length || (e = this.document[0].body), e;
        },_initSource: function() {
            var e, i, s = this;
            t.isArray(this.options.source) ? (e = this.options.source, this.source = function(i, s) {
                s(t.ui.autocomplete.filter(e, i.term));
            }) : "string" == typeof this.options.source ? (i = this.options.source, this.source = function(e, n) {
                s.xhr && s.xhr.abort(), s.xhr = t.ajax({url: i,data: e,dataType: "json",success: function(t) {
                        n(t);
                    },error: function() {
                        n([]);
                    }});
            }) : this.source = this.options.source;
        },_searchTimeout: function(t) {
            clearTimeout(this.searching), this.searching = this._delay(function() {
                this.term !== this._value() && (this.selectedItem = null, this.search(null, t));
            }, this.options.delay);
        },search: function(t, e) {
            return t = null != t ? t : this._value(), this.term = this._value(), t.length < this.options.minLength ? this.close(e) : this._trigger("search", e) !== !1 ? this._search(t) : undefined;
        },_search: function(t) {
            this.pending++, this.element.addClass("ui-autocomplete-loading"), this.cancelSearch = !1, this.source({term: t}, this._response());
        },_response: function() {
            var t = this, i = ++e;
            return function(s) {
                i === e && t.__response(s), t.pending--, t.pending || t.element.removeClass("ui-autocomplete-loading");
            };
        },__response: function(t) {
            t && (t = this._normalize(t)), this._trigger("response", null, {content: t}), !this.options.disabled && t && t.length && !this.cancelSearch ? (this._suggest(t), this._trigger("open")) : this._close();
        },close: function(t) {
            this.cancelSearch = !0, this._close(t);
        },_close: function(t) {
            this.menu.element.is(":visible") && (this.menu.element.hide(), this.menu.blur(), this.isNewMenu = !0, this._trigger("close", t));
        },_change: function(t) {
            this.previous !== this._value() && this._trigger("change", t, {item: this.selectedItem});
        },_normalize: function(e) {
            return e.length && e[0].label && e[0].value ? e : t.map(e, function(e) {
                return "string" == typeof e ? {label: e,value: e} : t.extend({label: e.label || e.value,value: e.value || e.label}, e);
            });
        },_suggest: function(e) {
            var i = this.menu.element.empty();
            this._renderMenu(i, e), this.isNewMenu = !0, this.menu.refresh(), i.show(), this._resizeMenu(), i.position(t.extend({of: this.element}, this.options.position)), this.options.autoFocus && this.menu.next();
        },_resizeMenu: function() {
            var t = this.menu.element;
            t.outerWidth(Math.max(t.width("").outerWidth() + 1, this.element.outerWidth()));
        },_renderMenu: function(e, i) {
            var s = this;
            t.each(i, function(t, i) {
                s._renderItemData(e, i);
            });
        },_renderItemData: function(t, e) {
            return this._renderItem(t, e).data("ui-autocomplete-item", e);
        },_renderItem: function(e, i) {
            return t("<li>").append(t("<a>").text(i.label)).appendTo(e);
        },_move: function(t, e) {
            return this.menu.element.is(":visible") ? this.menu.isFirstItem() && /^previous/.test(t) || this.menu.isLastItem() && /^next/.test(t) ? (this._value(this.term), this.menu.blur(), undefined) : (this.menu[t](e), undefined) : (this.search(null, e), undefined);
        },widget: function() {
            return this.menu.element;
        },_value: function() {
            return this.valueMethod.apply(this.element, arguments);
        },_keyEvent: function(t, e) {
            (!this.isMultiLine || this.menu.element.is(":visible")) && (this._move(t, e), e.preventDefault());
        }}), t.extend(t.ui.autocomplete, {escapeRegex: function(t) {
            return t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&");
        },filter: function(e, i) {
            var s = RegExp(t.ui.autocomplete.escapeRegex(i), "i");
            return t.grep(e, function(t) {
                return s.test(t.label || t.value || t);
            });
        }}), t.widget("ui.autocomplete", t.ui.autocomplete, {options: {messages: {noResults: "No search results.",results: function(t) {
                    return t + (t > 1 ? " results are" : " result is") + " available, use up and down arrow keys to navigate.";
                }}},__response: function(t) {
            var e;
            this._superApply(arguments), this.options.disabled || this.cancelSearch || (e = t && t.length ? this.options.messages.results(t.length) : this.options.messages.noResults, this.liveRegion.text(e));
        }});
})(jQuery);
(function(t) {
    t.widget("ui.menu", {version: "1.10.3",defaultElement: "<ul>",delay: 300,options: {icons: {submenu: "ui-icon-carat-1-e"},menus: "ul",position: {my: "left top",at: "right top"},role: "menu",blur: null,focus: null,select: null},_create: function() {
            this.activeMenu = this.element, this.mouseHandled = !1, this.element.uniqueId().addClass("ui-menu ui-widget ui-widget-content ui-corner-all").toggleClass("ui-menu-icons", !!this.element.find(".ui-icon").length).attr({role: this.options.role,tabIndex: 0}).bind("click" + this.eventNamespace, t.proxy(function(t) {
                this.options.disabled && t.preventDefault();
            }, this)), this.options.disabled && this.element.addClass("ui-state-disabled").attr("aria-disabled", "true"), this._on({"mousedown .ui-menu-item > a": function(t) {
                    t.preventDefault();
                },"click .ui-state-disabled > a": function(t) {
                    t.preventDefault();
                },"click .ui-menu-item:has(a)": function(e) {
                    var i = t(e.target).closest(".ui-menu-item");
                    !this.mouseHandled && i.not(".ui-state-disabled").length && (this.mouseHandled = !0, this.select(e), i.has(".ui-menu").length ? this.expand(e) : this.element.is(":focus") || (this.element.trigger("focus", [!0]), this.active && 1 === this.active.parents(".ui-menu").length && clearTimeout(this.timer)));
                },"mouseenter .ui-menu-item": function(e) {
                    var i = t(e.currentTarget);
                    i.siblings().children(".ui-state-active").removeClass("ui-state-active"), this.focus(e, i);
                },mouseleave: "collapseAll","mouseleave .ui-menu": "collapseAll",focus: function(t, e) {
                    var i = this.active || this.element.children(".ui-menu-item").eq(0);
                    e || this.focus(t, i);
                },blur: function(e) {
                    this._delay(function() {
                        t.contains(this.element[0], this.document[0].activeElement) || this.collapseAll(e);
                    });
                },keydown: "_keydown"}), this.refresh(), this._on(this.document, {click: function(e) {
                    t(e.target).closest(".ui-menu").length || this.collapseAll(e), this.mouseHandled = !1;
                }});
        },_destroy: function() {
            this.element.removeAttr("aria-activedescendant").find(".ui-menu").addBack().removeClass("ui-menu ui-widget ui-widget-content ui-corner-all ui-menu-icons").removeAttr("role").removeAttr("tabIndex").removeAttr("aria-labelledby").removeAttr("aria-expanded").removeAttr("aria-hidden").removeAttr("aria-disabled").removeUniqueId().show(), this.element.find(".ui-menu-item").removeClass("ui-menu-item").removeAttr("role").removeAttr("aria-disabled").children("a").removeUniqueId().removeClass("ui-corner-all ui-state-hover").removeAttr("tabIndex").removeAttr("role").removeAttr("aria-haspopup").children().each(function() {
                var e = t(this);
                e.data("ui-menu-submenu-carat") && e.remove();
            }), this.element.find(".ui-menu-divider").removeClass("ui-menu-divider ui-widget-content");
        },_keydown: function(e) {
            function i(t) {
                return t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&");
            }
            var s, n, a, o, r, h = !0;
            switch (e.keyCode) {
                case t.ui.keyCode.PAGE_UP:
                    this.previousPage(e);
                    break;
                case t.ui.keyCode.PAGE_DOWN:
                    this.nextPage(e);
                    break;
                case t.ui.keyCode.HOME:
                    this._move("first", "first", e);
                    break;
                case t.ui.keyCode.END:
                    this._move("last", "last", e);
                    break;
                case t.ui.keyCode.UP:
                    this.previous(e);
                    break;
                case t.ui.keyCode.DOWN:
                    this.next(e);
                    break;
                case t.ui.keyCode.LEFT:
                    this.collapse(e);
                    break;
                case t.ui.keyCode.RIGHT:
                    this.active && !this.active.is(".ui-state-disabled") && this.expand(e);
                    break;
                case t.ui.keyCode.ENTER:
                case t.ui.keyCode.SPACE:
                    this._activate(e);
                    break;
                case t.ui.keyCode.ESCAPE:
                    this.collapse(e);
                    break;
                default:
                    h = !1, n = this.previousFilter || "", a = String.fromCharCode(e.keyCode), o = !1, clearTimeout(this.filterTimer), a === n ? o = !0 : a = n + a, r = RegExp("^" + i(a), "i"), s = this.activeMenu.children(".ui-menu-item").filter(function() {
                        return r.test(t(this).children("a").text());
                    }), s = o && -1 !== s.index(this.active.next()) ? this.active.nextAll(".ui-menu-item") : s, s.length || (a = String.fromCharCode(e.keyCode), r = RegExp("^" + i(a), "i"), s = this.activeMenu.children(".ui-menu-item").filter(function() {
                        return r.test(t(this).children("a").text());
                    })), s.length ? (this.focus(e, s), s.length > 1 ? (this.previousFilter = a, this.filterTimer = this._delay(function() {
                        delete this.previousFilter;
                    }, 1000)) : delete this.previousFilter) : delete this.previousFilter;
            }
            h && e.preventDefault();
        },_activate: function(t) {
            this.active.is(".ui-state-disabled") || (this.active.children("a[aria-haspopup='true']").length ? this.expand(t) : this.select(t));
        },refresh: function() {
            var e, i = this.options.icons.submenu, s = this.element.find(this.options.menus);
            s.filter(":not(.ui-menu)").addClass("ui-menu ui-widget ui-widget-content ui-corner-all").hide().attr({role: this.options.role,"aria-hidden": "true","aria-expanded": "false"}).each(function() {
                var e = t(this), s = e.prev("a"), n = t("<span>").addClass("ui-menu-icon ui-icon " + i).data("ui-menu-submenu-carat", !0);
                s.attr("aria-haspopup", "true").prepend(n), e.attr("aria-labelledby", s.attr("id"));
            }), e = s.add(this.element), e.children(":not(.ui-menu-item):has(a)").addClass("ui-menu-item").attr("role", "presentation").children("a").uniqueId().addClass("ui-corner-all").attr({tabIndex: -1,role: this._itemRole()}), e.children(":not(.ui-menu-item)").each(function() {
                var e = t(this);
                /[^\-\u2014\u2013\s]/.test(e.text()) || e.addClass("ui-widget-content ui-menu-divider");
            }), e.children(".ui-state-disabled").attr("aria-disabled", "true"), this.active && !t.contains(this.element[0], this.active[0]) && this.blur();
        },_itemRole: function() {
            return {menu: "menuitem",listbox: "option"}[this.options.role];
        },_setOption: function(t, e) {
            "icons" === t && this.element.find(".ui-menu-icon").removeClass(this.options.icons.submenu).addClass(e.submenu), this._super(t, e);
        },focus: function(t, e) {
            var i, s;
            this.blur(t, t && "focus" === t.type), this._scrollIntoView(e), this.active = e.first(), s = this.active.children("a").addClass("ui-state-focus"), this.options.role && this.element.attr("aria-activedescendant", s.attr("id")), this.active.parent().closest(".ui-menu-item").children("a:first").addClass("ui-state-active"), t && "keydown" === t.type ? this._close() : this.timer = this._delay(function() {
                this._close();
            }, this.delay), i = e.children(".ui-menu"), i.length && /^mouse/.test(t.type) && this._startOpening(i), this.activeMenu = e.parent(), this._trigger("focus", t, {item: e});
        },_scrollIntoView: function(e) {
            var i, s, n, a, o, r;
            this._hasScroll() && (i = parseFloat(t.css(this.activeMenu[0], "borderTopWidth")) || 0, s = parseFloat(t.css(this.activeMenu[0], "paddingTop")) || 0, n = e.offset().top - this.activeMenu.offset().top - i - s, a = this.activeMenu.scrollTop(), o = this.activeMenu.height(), r = e.height(), 0 > n ? this.activeMenu.scrollTop(a + n) : n + r > o && this.activeMenu.scrollTop(a + n - o + r));
        },blur: function(t, e) {
            e || clearTimeout(this.timer), this.active && (this.active.children("a").removeClass("ui-state-focus"), this.active = null, this._trigger("blur", t, {item: this.active}));
        },_startOpening: function(t) {
            clearTimeout(this.timer), "true" === t.attr("aria-hidden") && (this.timer = this._delay(function() {
                this._close(), this._open(t);
            }, this.delay));
        },_open: function(e) {
            var i = t.extend({of: this.active}, this.options.position);
            clearTimeout(this.timer), this.element.find(".ui-menu").not(e.parents(".ui-menu")).hide().attr("aria-hidden", "true"), e.show().removeAttr("aria-hidden").attr("aria-expanded", "true").position(i);
        },collapseAll: function(e, i) {
            clearTimeout(this.timer), this.timer = this._delay(function() {
                var s = i ? this.element : t(e && e.target).closest(this.element.find(".ui-menu"));
                s.length || (s = this.element), this._close(s), this.blur(e), this.activeMenu = s;
            }, this.delay);
        },_close: function(t) {
            t || (t = this.active ? this.active.parent() : this.element), t.find(".ui-menu").hide().attr("aria-hidden", "true").attr("aria-expanded", "false").end().find("a.ui-state-active").removeClass("ui-state-active");
        },collapse: function(t) {
            var e = this.active && this.active.parent().closest(".ui-menu-item", this.element);
            e && e.length && (this._close(), this.focus(t, e));
        },expand: function(t) {
            var e = this.active && this.active.children(".ui-menu ").children(".ui-menu-item").first();
            e && e.length && (this._open(e.parent()), this._delay(function() {
                this.focus(t, e);
            }));
        },next: function(t) {
            this._move("next", "first", t);
        },previous: function(t) {
            this._move("prev", "last", t);
        },isFirstItem: function() {
            return this.active && !this.active.prevAll(".ui-menu-item").length;
        },isLastItem: function() {
            return this.active && !this.active.nextAll(".ui-menu-item").length;
        },_move: function(t, e, i) {
            var s;
            this.active && (s = "first" === t || "last" === t ? this.active["first" === t ? "prevAll" : "nextAll"](".ui-menu-item").eq(-1) : this.active[t + "All"](".ui-menu-item").eq(0)), s && s.length && this.active || (s = this.activeMenu.children(".ui-menu-item")[e]()), this.focus(i, s);
        },nextPage: function(e) {
            var i, s, n;
            return this.active ? (this.isLastItem() || (this._hasScroll() ? (s = this.active.offset().top, n = this.element.height(), this.active.nextAll(".ui-menu-item").each(function() {
                return i = t(this), 0 > i.offset().top - s - n;
            }), this.focus(e, i)) : this.focus(e, this.activeMenu.children(".ui-menu-item")[this.active ? "last" : "first"]())), undefined) : (this.next(e), undefined);
        },previousPage: function(e) {
            var i, s, n;
            return this.active ? (this.isFirstItem() || (this._hasScroll() ? (s = this.active.offset().top, n = this.element.height(), this.active.prevAll(".ui-menu-item").each(function() {
                return i = t(this), i.offset().top - s + n > 0;
            }), this.focus(e, i)) : this.focus(e, this.activeMenu.children(".ui-menu-item").first())), undefined) : (this.next(e), undefined);
        },_hasScroll: function() {
            return this.element.outerHeight() < this.element.prop("scrollHeight");
        },select: function(e) {
            this.active = this.active || t(e.target).closest(".ui-menu-item");
            var i = {item: this.active};
            this.active.has(".ui-menu").length || this.collapseAll(e, !0), this._trigger("select", e, i);
        }});
})(jQuery);
+function($) {
    var Modal = function(element, options) {
        this.options = options;
        this.$body = $(document.body);
        this.$element = $(element);
        this.$backdrop = this.isShown = null;
        this.scrollbarWidth = 0;
        if (this.options.remote) {
            this.$element.find(".modal-content").load(this.options.remote, $.proxy(function() {
                this.$element.trigger("loaded.bs.modal");
            }, this));
        }
    };
    Modal.DEFAULTS = {backdrop: true,keyboard: true,show: true};
    Modal.prototype.toggle = function(_relatedTarget) {
        return this.isShown ? this.hide() : this.show(_relatedTarget);
    };
    Modal.prototype.show = function(_relatedTarget) {
        var that = this;
        var e = $.Event("show.bs.modal", {relatedTarget: _relatedTarget});
        this.$element.trigger(e);
        if (this.isShown || e.isDefaultPrevented()) {
            return;
        }
        this.isShown = true;
        this.checkScrollbar();
        this.$body.addClass("modal-open");
        this.setScrollbar();
        this.escape();
        this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', $.proxy(this.hide, this));
        this.backdrop(function() {
            var transition = $.support.transition && that.$element.hasClass("fade");
            if (!that.$element.parent().length) {
                that.$element.appendTo(that.$body);
            }
            that.$element.show().scrollTop(0);
            if (transition) {
                that.$element[0].offsetWidth;
            }
            that.$element.addClass("in").attr("aria-hidden", false);
            that.enforceFocus();
            var e = $.Event("shown.bs.modal", {relatedTarget: _relatedTarget});
            transition ? that.$element.find(".modal-dialog").one($.support.transition.end, function() {
                that.$element.trigger("focus").trigger(e);
            }).emulateTransitionEnd(300) : that.$element.trigger("focus").trigger(e);
        });
    };
    Modal.prototype.hide = function(e) {
        if (e) {
            e.preventDefault();
        }
        e = $.Event("hide.bs.modal");
        this.$element.trigger(e);
        if (!this.isShown || e.isDefaultPrevented()) {
            return;
        }
        this.isShown = false;
        this.$body.removeClass("modal-open");
        this.resetScrollbar();
        this.escape();
        $(document).off("focusin.bs.modal");
        this.$element.removeClass("in").attr("aria-hidden", true).off("click.dismiss.bs.modal");
        $.support.transition && this.$element.hasClass("fade") ? this.$element.one($.support.transition.end, $.proxy(this.hideModal, this)).emulateTransitionEnd(300) : this.hideModal();
    };
    Modal.prototype.enforceFocus = function() {
        $(document).off("focusin.bs.modal").on("focusin.bs.modal", $.proxy(function(e) {
            if (this.$element[0] !== e.target && !this.$element.has(e.target).length) {
                this.$element.trigger("focus");
            }
        }, this));
    };
    Modal.prototype.escape = function() {
        if (this.isShown && this.options.keyboard) {
            this.$element.on("keyup.dismiss.bs.modal", $.proxy(function(e) {
                e.which == 27 && this.hide();
            }, this));
        } else {
            if (!this.isShown) {
                this.$element.off("keyup.dismiss.bs.modal");
            }
        }
    };
    Modal.prototype.hideModal = function() {
        var that = this;
        this.$element.hide();
        this.backdrop(function() {
            that.removeBackdrop();
            that.$element.trigger("hidden.bs.modal");
        });
    };
    Modal.prototype.removeBackdrop = function() {
        this.$backdrop && this.$backdrop.remove();
        this.$backdrop = null;
    };
    Modal.prototype.backdrop = function(callback) {
        var animate = this.$element.hasClass("fade") ? "fade" : "";
        if (this.isShown && this.options.backdrop) {
            var doAnimate = $.support.transition && animate;
            this.$backdrop = $('<div class="modal-backdrop ' + animate + '" />').appendTo(this.$body);
            this.$element.on("click.dismiss.bs.modal", $.proxy(function(e) {
                if (e.target !== e.currentTarget) {
                    return;
                }
                this.options.backdrop == "static" ? this.$element[0].focus.call(this.$element[0]) : this.hide.call(this);
            }, this));
            if (doAnimate) {
                this.$backdrop[0].offsetWidth;
            }
            this.$backdrop.addClass("in");
            if (!callback) {
                return;
            }
            doAnimate ? this.$backdrop.one($.support.transition.end, callback).emulateTransitionEnd(150) : callback();
        } else {
            if (!this.isShown && this.$backdrop) {
                this.$backdrop.removeClass("in");
                $.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one($.support.transition.end, callback).emulateTransitionEnd(150) : callback();
            } else {
                if (callback) {
                    callback();
                }
            }
        }
    };
    Modal.prototype.checkScrollbar = function() {
        if (document.body.clientWidth >= window.innerWidth) {
            return;
        }
        this.scrollbarWidth = this.scrollbarWidth || this.measureScrollbar();
    };
    Modal.prototype.setScrollbar = function() {
        var bodyPad = parseInt(this.$body.css("padding-right") || 0);
        if (this.scrollbarWidth) {
            this.$body.css("padding-right", bodyPad + this.scrollbarWidth);
        }
    };
    Modal.prototype.resetScrollbar = function() {
        this.$body.css("padding-right", "");
    };
    Modal.prototype.measureScrollbar = function() {
        var scrollDiv = document.createElement("div");
        scrollDiv.className = "modal-scrollbar-measure";
        this.$body.append(scrollDiv);
        var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
        this.$body[0].removeChild(scrollDiv);
        return scrollbarWidth;
    };
    var old = $.fn.modal;
    $.fn.modal = function(option, _relatedTarget) {
        return this.each(function() {
            var $this = $(this);
            var data = $this.data("bs.modal");
            var options = $.extend({}, Modal.DEFAULTS, $this.data(), typeof option == "object" && option);
            if (!data) {
                $this.data("bs.modal", (data = new Modal(this, options)));
            }
            if (typeof option == "string") {
                data[option](_relatedTarget);
            } else {
                if (options.show) {
                    data.show(_relatedTarget);
                }
            }
        });
    };
    $.fn.modal.Constructor = Modal;
    $.fn.modal.noConflict = function() {
        $.fn.modal = old;
        return this;
    };
    $(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function(e) {
        var $this = $(this);
        var href = $this.attr("href");
        var $target = $($this.attr("data-target") || (href && href.replace(/.*(?=#[^\s]+$)/, "")));
        var option = $target.data("bs.modal") ? "toggle" : $.extend({remote: !/#/.test(href) && href}, $target.data(), $this.data());
        if ($this.is("a")) {
            e.preventDefault();
        }
        $target.modal(option, this).one("hide", function() {
            $this.is(":visible") && $this.trigger("focus");
        });
    });
}(jQuery);
+function($) {
    function transitionEnd() {
        var el = document.createElement("bootstrap");
        var transEndEventNames = {WebkitTransition: "webkitTransitionEnd",MozTransition: "transitionend",OTransition: "oTransitionEnd otransitionend",transition: "transitionend"};
        for (var name in transEndEventNames) {
            if (el.style[name] !== undefined) {
                return {end: transEndEventNames[name]};
            }
        }
        return false;
    }
    $.fn.emulateTransitionEnd = function(duration) {
        var called = false, $el = this;
        $(this).one($.support.transition.end, function() {
            called = true;
        });
        var callback = function() {
            if (!called) {
                $($el).trigger($.support.transition.end);
            }
        };
        setTimeout(callback, duration);
        return this;
    };
    $(function() {
        $.support.transition = transitionEnd();
    });
}(jQuery);
(function($) {
    var tmp, loading, overlay, wrap, outer, content, close, title, nav_left, nav_right, selectedIndex = 0, selectedOpts = {}, selectedArray = [], currentIndex = 0, currentOpts = {}, currentArray = [], ajaxLoader = null, imgPreloader = new Image(), imgRegExp = /\.(jpg|gif|png|bmp|jpeg)(.*)?$/i, swfRegExp = /[^\.]\.(swf)\s*$/i, loadingTimer, loadingFrame = 1, titleHeight = 0, titleStr = "", start_pos, final_pos, busy = false, fx = $.extend($("<div/>")[0], {prop: 0}), isIE6 = navigator.userAgent.match(/msie [6]/i) && !window.XMLHttpRequest, _abort = function() {
        loading.hide();
        imgPreloader.onerror = imgPreloader.onload = null;
        if (ajaxLoader) {
            ajaxLoader.abort();
        }
        tmp.empty();
    }, _error = function() {
        if (false === selectedOpts.onError(selectedArray, selectedIndex, selectedOpts)) {
            loading.hide();
            busy = false;
            return;
        }
        selectedOpts.titleShow = false;
        selectedOpts.width = "auto";
        selectedOpts.height = "auto";
        tmp.html('<p id="fancybox-error">The requested content cannot be loaded.<br />Please try again later.</p>');
        _process_inline();
    }, _start = function() {
        var obj = selectedArray[selectedIndex], href, type, title, str, emb, ret;
        _abort();
        selectedOpts = $.extend({}, $.fn.fancybox.defaults, (typeof $(obj).data("fancybox") == "undefined" ? selectedOpts : $(obj).data("fancybox")));
        ret = selectedOpts.onStart(selectedArray, selectedIndex, selectedOpts);
        if (ret === false) {
            busy = false;
            return;
        } else {
            if (typeof ret == "object") {
                selectedOpts = $.extend(selectedOpts, ret);
            }
        }
        title = selectedOpts.title || (obj.nodeName ? $(obj).attr("title") : obj.title) || "";
        if (obj.nodeName && !selectedOpts.orig) {
            selectedOpts.orig = $(obj).children("img:first").length ? $(obj).children("img:first") : $(obj);
        }
        if (title === "" && selectedOpts.orig && selectedOpts.titleFromAlt) {
            title = selectedOpts.orig.attr("alt");
        }
        href = selectedOpts.href || (obj.nodeName ? $(obj).attr("href") : obj.href) || null;
        if ((/^(?:javascript)/i).test(href) || href == "#") {
            href = null;
        }
        if (selectedOpts.type) {
            type = selectedOpts.type;
            if (!href) {
                href = selectedOpts.content;
            }
        } else {
            if (selectedOpts.content) {
                type = "html";
            } else {
                if (href) {
                    if (href.match(imgRegExp)) {
                        type = "image";
                    } else {
                        if (href.match(swfRegExp)) {
                            type = "swf";
                        } else {
                            if ($(obj).hasClass("iframe")) {
                                type = "iframe";
                            } else {
                                if (href.indexOf("#") === 0) {
                                    type = "inline";
                                } else {
                                    type = "ajax";
                                }
                            }
                        }
                    }
                }
            }
        }
        if (!type) {
            _error();
            return;
        }
        if (type == "inline") {
            obj = href.substr(href.indexOf("#"));
            type = $(obj).length > 0 ? "inline" : "ajax";
        }
        selectedOpts.type = type;
        selectedOpts.href = href;
        selectedOpts.title = title;
        if (selectedOpts.autoDimensions) {
            if (selectedOpts.type == "html" || selectedOpts.type == "inline" || selectedOpts.type == "ajax") {
                selectedOpts.width = "auto";
                selectedOpts.height = "auto";
            } else {
                selectedOpts.autoDimensions = false;
            }
        }
        if (selectedOpts.modal) {
            selectedOpts.overlayShow = true;
            selectedOpts.hideOnOverlayClick = false;
            selectedOpts.hideOnContentClick = false;
            selectedOpts.enableEscapeButton = false;
            selectedOpts.showCloseButton = false;
        }
        selectedOpts.padding = parseInt(selectedOpts.padding, 10);
        selectedOpts.margin = parseInt(selectedOpts.margin, 10);
        tmp.css("padding", (selectedOpts.padding + selectedOpts.margin));
        $(".fancybox-inline-tmp").unbind("fancybox-cancel").bind("fancybox-change", function() {
            $(this).replaceWith(content.children());
        });
        switch (type) {
            case "html":
                tmp.html(selectedOpts.content);
                _process_inline();
                break;
            case "inline":
                if ($(obj).parent().is("#fancybox-content") === true) {
                    busy = false;
                    return;
                }
                $('<div class="fancybox-inline-tmp" />').hide().insertBefore($(obj)).bind("fancybox-cleanup", function() {
                    $(this).replaceWith(content.children());
                }).bind("fancybox-cancel", function() {
                    $(this).replaceWith(tmp.children());
                });
                tmp.append($(obj)[0].outerHTML);
                _process_inline();
                break;
            case "image":
                busy = false;
                $.fancybox.showActivity();
                imgPreloader = new Image();
                imgPreloader.onerror = function() {
                    _error();
                };
                imgPreloader.onload = function() {
                    busy = true;
                    imgPreloader.onerror = imgPreloader.onload = null;
                    _process_image();
                };
                imgPreloader.src = href;
                break;
            case "swf":
                selectedOpts.scrolling = "no";
                str = '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="' + selectedOpts.width + '" height="' + selectedOpts.height + '"><param name="movie" value="' + href + '"></param>';
                emb = "";
                $.each(selectedOpts.swf, function(name, val) {
                    str += '<param name="' + name + '" value="' + val + '"></param>';
                    emb += " " + name + '="' + val + '"';
                });
                str += '<embed src="' + href + '" type="application/x-shockwave-flash" width="' + selectedOpts.width + '" height="' + selectedOpts.height + '"' + emb + "></embed></object>";
                tmp.html(str);
                _process_inline();
                break;
            case "ajax":
                busy = false;
                $.fancybox.showActivity();
                selectedOpts.ajax.win = selectedOpts.ajax.success;
                ajaxLoader = $.ajax($.extend({}, selectedOpts.ajax, {url: href,data: selectedOpts.ajax.data || {},error: function(XMLHttpRequest, textStatus, errorThrown) {
                        if (XMLHttpRequest.status > 0) {
                            _error();
                        }
                    },success: function(data, textStatus, XMLHttpRequest) {
                        var o = typeof XMLHttpRequest == "object" ? XMLHttpRequest : ajaxLoader;
                        if (o.status == 200) {
                            if (typeof selectedOpts.ajax.win == "function") {
                                ret = selectedOpts.ajax.win(href, data, textStatus, XMLHttpRequest);
                                if (ret === false) {
                                    loading.hide();
                                    return;
                                } else {
                                    if (typeof ret == "string" || typeof ret == "object") {
                                        data = ret;
                                    }
                                }
                            }
                            tmp.html(data);
                            _process_inline();
                        }
                    }}));
                break;
            case "iframe":
                _show();
                break;
        }
    }, _process_inline = function() {
        var w = selectedOpts.width, h = selectedOpts.height;
        if (w.toString().indexOf("%") > -1) {
            w = parseInt(($(window).width() - (selectedOpts.margin * 2)) * parseFloat(w) / 100, 10) + "px";
        } else {
            w = w == "auto" ? "auto" : w + "px";
        }
        if (h.toString().indexOf("%") > -1) {
            h = parseInt(($(window).height() - (selectedOpts.margin * 2)) * parseFloat(h) / 100, 10) + "px";
        } else {
            h = h == "auto" ? "auto" : h + "px";
        }
        tmp.wrapInner('<div style="width:' + w + ";height:" + h + ";overflow: " + (selectedOpts.scrolling == "auto" ? "auto" : (selectedOpts.scrolling == "yes" ? "scroll" : "hidden")) + ';position:relative;"></div>');
        selectedOpts.width = tmp.width();
        selectedOpts.height = tmp.height();
        _show();
    }, _process_image = function() {
        selectedOpts.width = imgPreloader.width;
        selectedOpts.height = imgPreloader.height;
        $("<img />").attr({"id": "fancybox-img","src": imgPreloader.src,"alt": selectedOpts.title}).appendTo(tmp);
        _show();
    }, _show = function() {
        var pos, equal;
        loading.hide();
        if (wrap.is(":visible") && false === currentOpts.onCleanup(currentArray, currentIndex, currentOpts)) {
            $.event.trigger("fancybox-cancel");
            busy = false;
            return;
        }
        busy = true;
        $(content.add(overlay)).unbind();
        $(window).unbind("resize.fb scroll.fb");
        $(document).unbind("keydown.fb");
        if (wrap.is(":visible") && currentOpts.titlePosition !== "outside") {
            wrap.css("height", wrap.height());
        }
        currentArray = selectedArray;
        currentIndex = selectedIndex;
        currentOpts = selectedOpts;
        if (currentOpts.overlayShow) {
            overlay.css({"background-color": currentOpts.overlayColor,"opacity": currentOpts.overlayOpacity,"cursor": currentOpts.hideOnOverlayClick ? "pointer" : "auto","height": $(document).height()});
            if (!overlay.is(":visible")) {
                if (isIE6) {
                    $("select:not(#fancybox-tmp select)").filter(function() {
                        return this.style.visibility !== "hidden";
                    }).css({"visibility": "hidden"}).one("fancybox-cleanup", function() {
                        this.style.visibility = "inherit";
                    });
                }
                overlay.show();
            }
        } else {
            overlay.hide();
        }
        final_pos = _get_zoom_to();
        _process_title();
        if (wrap.is(":visible")) {
            $(close.add(nav_left).add(nav_right)).hide();
            pos = wrap.position(), start_pos = {top: pos.top,left: pos.left,width: wrap.width(),height: wrap.height()};
            equal = (start_pos.width == final_pos.width && start_pos.height == final_pos.height);
            content.fadeTo(currentOpts.changeFade, 0.3, function() {
                var finish_resizing = function() {
                    content.html(tmp.contents()).fadeTo(currentOpts.changeFade, 1, _finish);
                };
                $.event.trigger("fancybox-change");
                content.empty().removeAttr("filter").css({"border-width": currentOpts.padding,"width": final_pos.width - currentOpts.padding * 2,"height": selectedOpts.autoDimensions ? "auto" : final_pos.height - titleHeight - currentOpts.padding * 2});
                if (equal) {
                    finish_resizing();
                } else {
                    fx.prop = 0;
                    $(fx).animate({prop: 1}, {duration: currentOpts.changeSpeed,easing: currentOpts.easingChange,step: _draw,complete: finish_resizing});
                }
            });
            return;
        }
        wrap.removeAttr("style");
        content.css("border-width", currentOpts.padding);
        if (currentOpts.transitionIn == "elastic") {
            start_pos = _get_zoom_from();
            content.html(tmp.contents());
            wrap.show();
            if (currentOpts.opacity) {
                final_pos.opacity = 0;
            }
            fx.prop = 0;
            $(fx).animate({prop: 1}, {duration: currentOpts.speedIn,easing: currentOpts.easingIn,step: _draw,complete: _finish});
            return;
        }
        if (currentOpts.titlePosition == "inside" && titleHeight > 0) {
            title.show();
        }
        content.css({"width": final_pos.width - currentOpts.padding * 2,"height": selectedOpts.autoDimensions ? "auto" : final_pos.height - titleHeight - currentOpts.padding * 2}).html(tmp.contents());
        wrap.css(final_pos).fadeIn(currentOpts.transitionIn == "none" ? 0 : currentOpts.speedIn, _finish);
    }, _format_title = function(title) {
        if (title && title.length) {
            if (currentOpts.titlePosition == "float") {
                return '<table id="fancybox-title-float-wrap" cellpadding="0" cellspacing="0"><tr><td id="fancybox-title-float-left"></td><td id="fancybox-title-float-main">' + title + '</td><td id="fancybox-title-float-right"></td></tr></table>';
            }
            return '<div id="fancybox-title-' + currentOpts.titlePosition + '">' + title + "</div>";
        }
        return false;
    }, _process_title = function() {
        titleStr = currentOpts.title || "";
        titleHeight = 0;
        title.empty().removeAttr("style").removeClass();
        if (currentOpts.titleShow === false) {
            title.hide();
            return;
        }
        titleStr = $.isFunction(currentOpts.titleFormat) ? currentOpts.titleFormat(titleStr, currentArray, currentIndex, currentOpts) : _format_title(titleStr);
        if (!titleStr || titleStr === "") {
            title.hide();
            return;
        }
        title.addClass("fancybox-title-" + currentOpts.titlePosition).html(titleStr).appendTo("body").show();
        switch (currentOpts.titlePosition) {
            case "inside":
                title.css({"width": final_pos.width - (currentOpts.padding * 2),"marginLeft": currentOpts.padding,"marginRight": currentOpts.padding});
                titleHeight = title.outerHeight(true);
                title.appendTo(outer);
                final_pos.height += titleHeight;
                break;
            case "over":
                title.css({"marginLeft": currentOpts.padding,"width": final_pos.width - (currentOpts.padding * 2),"bottom": currentOpts.padding}).appendTo(outer);
                break;
            case "float":
                title.css("left", parseInt((title.width() - final_pos.width - 40) / 2, 10) * -1).appendTo(wrap);
                break;
            default:
                title.css({"width": final_pos.width - (currentOpts.padding * 2),"paddingLeft": currentOpts.padding,"paddingRight": currentOpts.padding}).appendTo(wrap);
                break;
        }
        title.hide();
    }, _set_navigation = function() {
        if (currentOpts.enableEscapeButton || currentOpts.enableKeyboardNav) {
            $(document).bind("keydown.fb", function(e) {
                if (e.keyCode == 27 && currentOpts.enableEscapeButton) {
                    e.preventDefault();
                    $.fancybox.close();
                } else {
                    if ((e.keyCode == 37 || e.keyCode == 39) && currentOpts.enableKeyboardNav && e.target.tagName !== "INPUT" && e.target.tagName !== "TEXTAREA" && e.target.tagName !== "SELECT") {
                        e.preventDefault();
                        $.fancybox[e.keyCode == 37 ? "prev" : "next"]();
                    }
                }
            });
        }
        if (!currentOpts.showNavArrows) {
            nav_left.hide();
            nav_right.hide();
            return;
        }
        if ((currentOpts.cyclic && currentArray.length > 1) || currentIndex !== 0) {
            nav_left.show();
        }
        if ((currentOpts.cyclic && currentArray.length > 1) || currentIndex != (currentArray.length - 1)) {
            nav_right.show();
        }
    }, _finish = function() {
        if (!$.support.opacity) {
            content.get(0).style.removeAttribute("filter");
            wrap.get(0).style.removeAttribute("filter");
        }
        if (selectedOpts.autoDimensions) {
            content.css("height", "auto");
        }
        wrap.css("height", "auto");
        if (titleStr && titleStr.length) {
            title.show();
        }
        if (currentOpts.showCloseButton) {
            close.show();
        }
        _set_navigation();
        if (currentOpts.hideOnContentClick) {
            content.bind("click", $.fancybox.close);
        }
        if (currentOpts.hideOnOverlayClick) {
            overlay.bind("click", $.fancybox.close);
        }
        $(window).bind("resize.fb", $.fancybox.resize);
        if (currentOpts.centerOnScroll) {
            $(window).bind("scroll.fb", $.fancybox.center);
        }
        if (currentOpts.type == "iframe") {
            $('<iframe id="fancybox-frame" name="fancybox-frame' + new Date().getTime() + '" frameborder="0" hspace="0" ' + (navigator.userAgent.match(/msie [6]/i) ? 'allowtransparency="true""' : "") + ' scrolling="' + selectedOpts.scrolling + '" src="' + currentOpts.href + '"></iframe>').appendTo(content);
        }
        wrap.show();
        busy = false;
        $.fancybox.center();
        currentOpts.onComplete(currentArray, currentIndex, currentOpts);
        _preload_images();
    }, _preload_images = function() {
        var href, objNext;
        if ((currentArray.length - 1) > currentIndex) {
            href = currentArray[currentIndex + 1].href;
            if (typeof href !== "undefined" && href.match(imgRegExp)) {
                objNext = new Image();
                objNext.src = href;
            }
        }
        if (currentIndex > 0) {
            href = currentArray[currentIndex - 1].href;
            if (typeof href !== "undefined" && href.match(imgRegExp)) {
                objNext = new Image();
                objNext.src = href;
            }
        }
    }, _draw = function(pos) {
        var dim = {width: parseInt(start_pos.width + (final_pos.width - start_pos.width) * pos, 10),height: parseInt(start_pos.height + (final_pos.height - start_pos.height) * pos, 10),top: parseInt(start_pos.top + (final_pos.top - start_pos.top) * pos, 10),left: parseInt(start_pos.left + (final_pos.left - start_pos.left) * pos, 10)};
        if (typeof final_pos.opacity !== "undefined") {
            dim.opacity = pos < 0.5 ? 0.5 : pos;
        }
        wrap.css(dim);
        content.css({"width": dim.width - currentOpts.padding * 2,"height": dim.height - (titleHeight * pos) - currentOpts.padding * 2});
    }, _get_viewport = function() {
        return [$(window).width() - (currentOpts.margin * 2), $(window).height() - (currentOpts.margin * 2), $(document).scrollLeft() + currentOpts.margin, $(document).scrollTop() + currentOpts.margin];
    }, _get_zoom_to = function() {
        var view = _get_viewport(), to = {}, resize = currentOpts.autoScale, double_padding = currentOpts.padding * 2, ratio;
        if (currentOpts.width.toString().indexOf("%") > -1) {
            to.width = parseInt((view[0] * parseFloat(currentOpts.width)) / 100, 10);
        } else {
            to.width = currentOpts.width + double_padding;
        }
        if (currentOpts.height.toString().indexOf("%") > -1) {
            to.height = parseInt((view[1] * parseFloat(currentOpts.height)) / 100, 10);
        } else {
            to.height = currentOpts.height + double_padding;
        }
        if (resize && (to.width > view[0] || to.height > view[1])) {
            if (selectedOpts.type == "image" || selectedOpts.type == "swf") {
                ratio = (currentOpts.width) / (currentOpts.height);
                if ((to.width) > view[0]) {
                    to.width = view[0];
                    to.height = parseInt(((to.width - double_padding) / ratio) + double_padding, 10);
                }
                if ((to.height) > view[1]) {
                    to.height = view[1];
                    to.width = parseInt(((to.height - double_padding) * ratio) + double_padding, 10);
                }
            } else {
                to.width = Math.min(to.width, view[0]);
                to.height = Math.min(to.height, view[1]);
            }
        }
        to.top = parseInt(Math.max(view[3] - 20, view[3] + ((view[1] - to.height - 40) * 0.5)), 10);
        to.left = parseInt(Math.max(view[2] - 20, view[2] + ((view[0] - to.width - 40) * 0.5)), 10);
        return to;
    }, _get_obj_pos = function(obj) {
        var pos = obj.offset();
        pos.top += parseInt(obj.css("paddingTop"), 10) || 0;
        pos.left += parseInt(obj.css("paddingLeft"), 10) || 0;
        pos.top += parseInt(obj.css("border-top-width"), 10) || 0;
        pos.left += parseInt(obj.css("border-left-width"), 10) || 0;
        pos.width = obj.width();
        pos.height = obj.height();
        return pos;
    }, _get_zoom_from = function() {
        var orig = selectedOpts.orig ? $(selectedOpts.orig) : false, from = {}, pos, view;
        if (orig && orig.length) {
            pos = _get_obj_pos(orig);
            from = {width: pos.width + (currentOpts.padding * 2),height: pos.height + (currentOpts.padding * 2),top: pos.top - currentOpts.padding - 20,left: pos.left - currentOpts.padding - 20};
        } else {
            view = _get_viewport();
            from = {width: currentOpts.padding * 2,height: currentOpts.padding * 2,top: parseInt(view[3] + view[1] * 0.5, 10),left: parseInt(view[2] + view[0] * 0.5, 10)};
        }
        return from;
    }, _animate_loading = function() {
        if (!loading.is(":visible")) {
            clearInterval(loadingTimer);
            return;
        }
        $("div", loading).css("top", (loadingFrame * -40) + "px");
        loadingFrame = (loadingFrame + 1) % 12;
    };
    $.fn.fancybox = function(options) {
        if (!$(this).length) {
            return this;
        }
        $(this).data("fancybox", $.extend({}, options, ($.metadata ? $(this).metadata() : {}))).unbind("click.fb").bind("click.fb", function(e) {
            e.preventDefault();
            if (busy) {
                return;
            }
            busy = true;
            $(this).blur();
            selectedArray = [];
            selectedIndex = 0;
            var rel = $(this).attr("rel") || "";
            if (!rel || rel == "" || rel === "nofollow") {
                selectedArray.push(this);
            } else {
                selectedArray = $("a[rel=" + rel + "], area[rel=" + rel + "], img[rel=" + rel + "]");
                selectedIndex = selectedArray.index(this);
            }
            _start();
            return;
        });
        return this;
    };
    $.fancybox = function(obj) {
        var opts;
        if (busy) {
            return;
        }
        busy = true;
        opts = typeof arguments[1] !== "undefined" ? arguments[1] : {};
        selectedArray = [];
        selectedIndex = parseInt(opts.index, 10) || 0;
        if ($.isArray(obj)) {
            for (var i = 0, j = obj.length; i < j; i++) {
                if (typeof obj[i] == "object") {
                    $(obj[i]).data("fancybox", $.extend({}, opts, obj[i]));
                } else {
                    obj[i] = $({}).data("fancybox", $.extend({content: obj[i]}, opts));
                }
            }
            selectedArray = jQuery.merge(selectedArray, obj);
        } else {
            if (typeof obj == "object") {
                $(obj).data("fancybox", $.extend({}, opts, obj));
            } else {
                obj = $({}).data("fancybox", $.extend({content: obj}, opts));
            }
            selectedArray.push(obj);
        }
        if (selectedIndex > selectedArray.length || selectedIndex < 0) {
            selectedIndex = 0;
        }
        _start();
    };
    $.fancybox.showActivity = function() {
        clearInterval(loadingTimer);
        loading.show();
        loadingTimer = setInterval(_animate_loading, 66);
    };
    $.fancybox.hideActivity = function() {
        loading.hide();
    };
    $.fancybox.next = function() {
        return $.fancybox.pos(currentIndex + 1);
    };
    $.fancybox.prev = function() {
        return $.fancybox.pos(currentIndex - 1);
    };
    $.fancybox.pos = function(pos) {
        if (busy) {
            return;
        }
        pos = parseInt(pos);
        selectedArray = currentArray;
        if (pos > -1 && pos < currentArray.length) {
            selectedIndex = pos;
            _start();
        } else {
            if (currentOpts.cyclic && currentArray.length > 1) {
                selectedIndex = pos >= currentArray.length ? 0 : currentArray.length - 1;
                _start();
            }
        }
        return;
    };
    $.fancybox.cancel = function() {
        if (busy) {
            return;
        }
        busy = true;
        $.event.trigger("fancybox-cancel");
        _abort();
        selectedOpts.onCancel(selectedArray, selectedIndex, selectedOpts);
        busy = false;
    };
    $.fancybox.close = function() {
        if (busy || wrap.is(":hidden")) {
            return;
        }
        busy = true;
        if (currentOpts && false === currentOpts.onCleanup(currentArray, currentIndex, currentOpts)) {
            busy = false;
            return;
        }
        _abort();
        $(close.add(nav_left).add(nav_right)).hide();
        $(content.add(overlay)).unbind();
        $(window).unbind("resize.fb scroll.fb");
        $(document).unbind("keydown.fb");
        content.find("iframe").attr("src", isIE6 && /^https/i.test(window.location.href || "") ? "javascript:void(false)" : "about:blank");
        if (currentOpts.titlePosition !== "inside") {
            title.empty();
        }
        wrap.stop();
        function _cleanup() {
            overlay.fadeOut("fast");
            title.empty().hide();
            wrap.hide();
            $.event.trigger("fancybox-cleanup");
            content.empty();
            currentOpts.onClosed(currentArray, currentIndex, currentOpts);
            currentArray = selectedOpts = [];
            currentIndex = selectedIndex = 0;
            currentOpts = selectedOpts = {};
            busy = false;
        }
        if (currentOpts.transitionOut == "elastic") {
            start_pos = _get_zoom_from();
            var pos = wrap.position();
            final_pos = {top: pos.top,left: pos.left,width: wrap.width(),height: wrap.height()};
            if (currentOpts.opacity) {
                final_pos.opacity = 1;
            }
            title.empty().hide();
            fx.prop = 1;
            $(fx).animate({prop: 0}, {duration: currentOpts.speedOut,easing: currentOpts.easingOut,step: _draw,complete: _cleanup});
        } else {
            wrap.fadeOut(currentOpts.transitionOut == "none" ? 0 : currentOpts.speedOut, _cleanup);
        }
    };
    $.fancybox.resize = function() {
        if (overlay.is(":visible")) {
            overlay.css("height", $(document).height());
        }
        $.fancybox.center(true);
    };
    $.fancybox.center = function() {
        var view, align;
        if (busy) {
            return;
        }
        align = arguments[0] === true ? 1 : 0;
        view = _get_viewport();
        if (!align && (wrap.width() > view[0] || wrap.height() > view[1])) {
            return;
        }
        wrap.stop().animate({"top": parseInt(Math.max(view[3] - 20, view[3] + ((view[1] - content.height() - 40) * 0.5) - currentOpts.padding)),"left": parseInt(Math.max(view[2] - 20, view[2] + ((view[0] - content.width() - 40) * 0.5) - currentOpts.padding))}, typeof arguments[0] == "number" ? arguments[0] : 200);
    };
    $.fancybox.init = function() {
        if ($("#fancybox-wrap").length) {
            return;
        }
        $("body").append(tmp = $('<div id="fancybox-tmp"></div>'), loading = $('<div id="fancybox-loading"><div></div></div>'), overlay = $('<div id="fancybox-overlay"></div>'), wrap = $('<div id="fancybox-wrap"></div>'));
        outer = $('<div id="fancybox-outer"></div>').append('<div class="fancybox-bg" id="fancybox-bg-n"></div><div class="fancybox-bg" id="fancybox-bg-ne"></div><div class="fancybox-bg" id="fancybox-bg-e"></div><div class="fancybox-bg" id="fancybox-bg-se"></div><div class="fancybox-bg" id="fancybox-bg-s"></div><div class="fancybox-bg" id="fancybox-bg-sw"></div><div class="fancybox-bg" id="fancybox-bg-w"></div><div class="fancybox-bg" id="fancybox-bg-nw"></div>').appendTo(wrap);
        outer.append(content = $('<div id="fancybox-content"></div>'), close = $('<a id="fancybox-close"></a>'), title = $('<div id="fancybox-title"></div>'), nav_left = $('<a href="javascript:;" id="fancybox-left"><span class="fancy-ico" id="fancybox-left-ico"></span></a>'), nav_right = $('<a href="javascript:;" id="fancybox-right"><span class="fancy-ico" id="fancybox-right-ico"></span></a>'));
        close.click($.fancybox.close);
        loading.click($.fancybox.cancel);
        nav_left.click(function(e) {
            e.preventDefault();
            $.fancybox.prev();
        });
        nav_right.click(function(e) {
            e.preventDefault();
            $.fancybox.next();
        });
        if ($.fn.mousewheel) {
            wrap.bind("mousewheel.fb", function(e, delta) {
                if (busy) {
                    e.preventDefault();
                } else {
                    if ($(e.target).get(0).clientHeight == 0 || $(e.target).get(0).scrollHeight === $(e.target).get(0).clientHeight) {
                        e.preventDefault();
                        $.fancybox[delta > 0 ? "prev" : "next"]();
                    }
                }
            });
        }
        if (!$.support.opacity) {
            wrap.addClass("fancybox-ie");
        }
        if (isIE6) {
            loading.addClass("fancybox-ie6");
            wrap.addClass("fancybox-ie6");
            $('<iframe id="fancybox-hide-sel-frame" src="' + (/^https/i.test(window.location.href || "") ? "javascript:void(false)" : "about:blank") + '" scrolling="no" border="0" frameborder="0" tabindex="-1"></iframe>').prependTo(outer);
        }
    };
    $.fn.fancybox.defaults = {padding: 10,margin: 40,opacity: false,modal: false,cyclic: false,scrolling: "auto",width: 560,height: 340,autoScale: true,autoDimensions: true,centerOnScroll: false,ajax: {},swf: {wmode: "transparent"},hideOnOverlayClick: true,hideOnContentClick: false,overlayShow: true,overlayOpacity: 0.7,overlayColor: "#777",titleShow: true,titlePosition: "float",titleFormat: null,titleFromAlt: false,transitionIn: "fade",transitionOut: "fade",speedIn: 300,speedOut: 300,changeSpeed: 300,changeFade: "fast",easingIn: "swing",easingOut: "swing",showCloseButton: true,showNavArrows: true,enableEscapeButton: true,enableKeyboardNav: true,onStart: function() {
        },onCancel: function() {
        },onComplete: function() {
        },onCleanup: function() {
        },onClosed: function() {
        },onError: function() {
        }};
    $(document).ready(function() {
        $.fancybox.init();
    });
})(jQuery);
function clearinput() {
    $(".default").each(function() {
        var default_value = this.value;
        $(this).focus(function() {
            if (this.value == default_value) {
                this.value = "";
            }
        });
        $(this).blur(function() {
            if (this.value == "") {
                this.value = default_value;
            }
        });
    });
}
$(document).ready(function() {
    clearinput();
});
function initTabs(tabsContainer, tabsList, tabItem) {
    var foundHash = "";
    if (window.location.hash !== undefined) {
        foundHash = window.location.hash.toString();
    }
    var max_height = 0;
    $(".tabList").find("a").each(function() {
        if ($(this).height() > max_height) {
            max_height = $(this).height();
        }
    });
    $(".tabList").find("a").each(function() {
        $(this).height(max_height);
    });
    $(".tabList").find("span").each(function() {
        if ($(this).height() > max_height) {
            max_height = $(this).height();
        }
    });
    $(".tabList").find("span").each(function() {
        $(this).height(max_height);
    });
    $(".spacer").height(max_height);
    $(tabsContainer).each(function(tabIndex) {
        if ($(".tabList").attr("id") != "productFinderGrid") {
            var _hold = $(this);
            var _btn = _hold.find(tabsList);
            var _box = _hold.find(tabItem);
            var _a = _btn.index(_btn.filter(".active:eq(0)"));
            if (_a == -1) {
                _a = 0;
            }
            _btn.removeClass("active").eq(_a).addClass("active");
            _box.removeClass("active").css({position: "absolute",top: "-99999px",left: "-99999px"});
            _box.eq(_a).addClass("active").css({position: "static",top: "0",left: "0"});
            _btn.click(function(event) {
                if (typeof ($(this).find("a").attr("href")) == "undefined" || $(this).find("a").attr("href").indexOf("http") == -1) {
                    event.preventDefault();
                    changeTab(_btn.index(this));
                    return false;
                }
            });
            _btn.each(function(btnIndex) {
                if ("#" + $(this).find("a").attr("rel") == foundHash && foundHash != "") {
                    changeTab(btnIndex);
                }
            });
        }
        function changeTab(_ind) {
            if (_ind != _a) {
                _btn.eq(_a).removeClass("active");
                _btn.eq(_ind).addClass("active");
                if (_btn.eq(_ind).find("a").attr("rel") != "" && _btn.eq(_ind).find("a").attr("rel") != undefined) {
                    window.location.hash = "#" + _btn.eq(_ind).find("a").attr("rel");
                }
                _box.eq(_a).removeClass("active").css({position: "absolute",top: "-99999px",left: "-99999px"});
                _box.eq(_ind).addClass("active").css({position: "static",top: "0",left: "0"});
                _a = _ind;
                var url_address = location.href;
                if (url_address.indexOf("/about/investors/") != -1) {
                    var hash = location.hash.replace(/^#/, "") || "blank";
                    var hashUrl = _btn.eq(_ind).attr("id").replace("-li3", "");
                    if (hashUrl.indexOf("-li4") != -1) {
                        if (hash.indexOf("|") != -1) {
                            if (hash.split("|")[0] != hashUrl.replace("-li4", "")) {
                                window.location.hash = hashUrl.replace("-li4", "");
                            } else {
                                window.location.hash = hashUrl.replace("-li4", "") + "|" + hash.split("|")[1];
                            }
                        } else {
                            window.location.hash = hashUrl.replace("-li4", "");
                        }
                    } else {
                        if (hash != "" && hash.split("|").length < 2) {
                            window.location.hash = hash + "|" + hashUrl.replace("-li4", "");
                        }
                        if (hash != "" && hash.split("|").length >= 2) {
                            window.location.hash = hash.split("|")[0] + "|" + hashUrl;
                        }
                        if (hash == "") {
                            window.location.hash = hashUrl.replace("-li4", "");
                        }
                    }
                }
            }
        }
    });
}
initTabs(".tabBox", ".tabList li", ".tabContent .tab");
initTabs("#main", ".tabset li", ".tabBox .tabEl");
$(document).ready(function() {
    var navTab = $(document).getUrlParam("navtab");
    var subNavTab = $(document).getUrlParam("subnavtab");
    if (navTab) {
        var navTabLink = "#" + navTab + "-li4";
        var navTabContent = "#" + navTab + "-cd4";
        var navTabContentF = $(navTabContent).parents("div.tab4");
        var navTabContentF1 = $(navTabContent).parents("div.tab");
        if ($(navTabLink).html()) {
            $(navTabLink).siblings().removeClass("active");
            $(navTabLink).addClass("active");
            if (navTabContentF.length > 0) {
                navTabContentF.siblings().removeClass("active");
                navTabContentF.addClass("active");
            }
            if ($(navTabLink).length > 0) {
                $(navTabLink).click();
            }
        }
        if (subNavTab) {
            var subNavTabLink = "#" + subNavTab + "-li3";
            var subNavTabContent = "#" + subNavTab + "-cd3";
            var subNavTabContentF = $(subNavTabContent).parents("div.tab3");
            if ($(subNavTabLink).html()) {
                $(subNavTabLink).siblings().removeClass("active");
                $(subNavTabLink).addClass("active");
                if (subNavTabContentF.length > 0) {
                    subNavTabContentF.siblings().removeClass("active");
                    subNavTabContentF.addClass("active");
                }
                if ($(subNavTabLink).length > 0) {
                    $(subNavTabLink).click();
                }
            }
        }
    }
});
$(document).ready(function() {
    $(".mainNav .drop ul li").mouseenter(function() {
        $(this).children(".itemDetails").css("display", "block");
    });
    $(".mainNav .drop ul li").mouseleave(function() {
        $(this).children(".itemDetails").css("display", "none");
    });
});
$(function() {
    $(".firstlevel").click(function(event) {
        if ($("#compareModelIndex").val() != 0 || $(this).next().attr("id") != "comparisonBlock") {
            if ($(this).hasClass("firstlevel")) {
                $(this).next(".secondlevel").removeClass("hidethis");
                $(this).next(".secondlevel").slideToggle(0);
                if ($(this).parent().hasClass("active") != true) {
                    $(this).parent().addClass("active");
                } else {
                    $(this).parent().removeClass("active");
                }
            }
        }
    });
});
(function(b, a, c) {
    b.fn.jScrollPane = function(f) {
        function d(D, N) {
            var ay, P = this, X, aj, w, al, S, Y, z, r, az, aE, au, j, I, i, k, Z, T, ap, W, u, B, aq, ae, am, G, m, at, ax, y, av, aH, g, K, ai = true, O = true, aG = false, l = false, ao = D.clone(false, false).empty(), ab = b.fn.mwheelIntent ? "mwheelIntent.jsp" : "mousewheel.jsp";
            aH = D.css("paddingTop") + " " + D.css("paddingRight") + " " + D.css("paddingBottom") + " " + D.css("paddingLeft");
            g = (parseInt(D.css("paddingLeft"), 10) || 0) + (parseInt(D.css("paddingRight"), 10) || 0);
            function ar(aQ) {
                var aO, aP, aK, aM, aL, aJ, aI, aN;
                ay = aQ;
                if (X === c) {
                    aI = D.scrollTop();
                    aN = D.scrollLeft();
                    D.css({overflow: "hidden",padding: 0});
                    aj = D.innerWidth() + g;
                    w = D.innerHeight();
                    D.width(aj);
                    X = b('<div class="jspPane" />').css("padding", aH).append(D.children());
                    al = b('<div class="jspContainer" />').css({width: aj + "px",height: w + "px"}).append(X).appendTo(D);
                } else {
                    D.css("width", "");
                    aJ = D.innerWidth() + g != aj || D.outerHeight() != w;
                    if (aJ) {
                        aj = D.innerWidth() + g;
                        w = D.innerHeight();
                        al.css({width: aj + "px",height: w + "px"});
                    }
                    if (!aJ && K == S && X.outerHeight() == Y) {
                        D.width(aj);
                        return;
                    }
                    K = S;
                    X.css("width", "");
                    D.width(aj);
                    al.find(">.jspVerticalBar,>.jspHorizontalBar").remove().end();
                }
                aO = X.clone(false, false).css("position", "absolute");
                aP = b('<div style="width:1px; position: relative;" />').append(aO);
                b("body").append(aP);
                S = Math.max(X.outerWidth(), aO.outerWidth());
                aP.remove();
                Y = X.outerHeight();
                z = S / aj;
                r = Y / w;
                az = r > 1;
                aE = z > 1;
                if (!(aE || az)) {
                    D.removeClass("jspScrollable");
                    X.css({top: 0,width: al.width() - g});
                    o();
                    E();
                    Q();
                    x();
                    ah();
                } else {
                    D.addClass("jspScrollable");
                    aK = ay.maintainPosition && (I || Z);
                    if (aK) {
                        aM = aC();
                        aL = aA();
                    }
                    aF();
                    A();
                    F();
                    if (aK) {
                        M(aM, false);
                        L(aL, false);
                    }
                    J();
                    af();
                    an();
                    if (ay.enableKeyboardNavigation) {
                        R();
                    }
                    if (ay.clickOnTrack) {
                        q();
                    }
                    C();
                    if (ay.hijackInternalLinks) {
                        n();
                    }
                }
                if (ay.autoReinitialise && !av) {
                    av = setInterval(function() {
                        ar(ay);
                    }, ay.autoReinitialiseDelay);
                } else {
                    if (!ay.autoReinitialise && av) {
                        clearInterval(av);
                    }
                }
                aI && D.scrollTop(0) && L(aI, false);
                aN && D.scrollLeft(0) && M(aN, false);
                D.trigger("jsp-initialised", [aE || az]);
            }
            function aF() {
                if (az) {
                    al.append(b('<div class="jspVerticalBar" />').append(b('<div class="jspCap jspCapTop" />'), b('<div class="jspTrack" />').append(b('<div class="jspDrag" />').append(b('<div class="jspDragTop" />'), b('<div class="jspDragBottom" />'))), b('<div class="jspCap jspCapBottom" />')));
                    T = al.find(">.jspVerticalBar");
                    ap = T.find(">.jspTrack");
                    au = ap.find(">.jspDrag");
                    if (ay.showArrows) {
                        aq = b('<a class="jspArrow jspArrowUp" />').bind("mousedown.jsp", aD(0, -1)).bind("click.jsp", aB);
                        ae = b('<a class="jspArrow jspArrowDown" />').bind("mousedown.jsp", aD(0, 1)).bind("click.jsp", aB);
                        if (ay.arrowScrollOnHover) {
                            aq.bind("mouseover.jsp", aD(0, -1, aq));
                            ae.bind("mouseover.jsp", aD(0, 1, ae));
                        }
                        ak(ap, ay.verticalArrowPositions, aq, ae);
                    }
                    u = w;
                    al.find(">.jspVerticalBar>.jspCap:visible,>.jspVerticalBar>.jspArrow").each(function() {
                        u -= b(this).outerHeight();
                    });
                    au.hover(function() {
                        au.addClass("jspHover");
                    }, function() {
                        au.removeClass("jspHover");
                    }).bind("mousedown.jsp", function(aI) {
                        b("html").bind("dragstart.jsp selectstart.jsp", aB);
                        au.addClass("jspActive");
                        var s = aI.pageY - au.position().top;
                        b("html").bind("mousemove.jsp", function(aJ) {
                            U(aJ.pageY - s, false);
                        }).bind("mouseup.jsp mouseleave.jsp", aw);
                        return false;
                    });
                    p();
                }
            }
            function p() {
                ap.height(u + "px");
                I = 0;
                W = ay.verticalGutter + ap.outerWidth();
                X.width(aj - W - g);
                if (T.position().left === 0) {
                    X.css("margin-left", W + "px");
                }
            }
            function A() {
                if (aE) {
                    al.append(b('<div class="jspHorizontalBar" />').append(b('<div class="jspCap jspCapLeft" />'), b('<div class="jspTrack" />').append(b('<div class="jspDrag" />').append(b('<div class="jspDragLeft" />'), b('<div class="jspDragRight" />'))), b('<div class="jspCap jspCapRight" />')));
                    am = al.find(">.jspHorizontalBar");
                    G = am.find(">.jspTrack");
                    i = G.find(">.jspDrag");
                    if (ay.showArrows) {
                        ax = b('<a class="jspArrow jspArrowLeft" />').bind("mousedown.jsp", aD(-1, 0)).bind("click.jsp", aB);
                        y = b('<a class="jspArrow jspArrowRight" />').bind("mousedown.jsp", aD(1, 0)).bind("click.jsp", aB);
                        if (ay.arrowScrollOnHover) {
                            ax.bind("mouseover.jsp", aD(-1, 0, ax));
                            y.bind("mouseover.jsp", aD(1, 0, y));
                        }
                        ak(G, ay.horizontalArrowPositions, ax, y);
                    }
                    i.hover(function() {
                        i.addClass("jspHover");
                    }, function() {
                        i.removeClass("jspHover");
                    }).bind("mousedown.jsp", function(aI) {
                        b("html").bind("dragstart.jsp selectstart.jsp", aB);
                        i.addClass("jspActive");
                        var s = aI.pageX - i.position().left;
                        b("html").bind("mousemove.jsp", function(aJ) {
                            V(aJ.pageX - s, false);
                        }).bind("mouseup.jsp mouseleave.jsp", aw);
                        return false;
                    });
                    m = al.innerWidth();
                    ag();
                }
            }
            function ag() {
                al.find(">.jspHorizontalBar>.jspCap:visible,>.jspHorizontalBar>.jspArrow").each(function() {
                    m -= b(this).outerWidth();
                });
                G.width(m + "px");
                Z = 0;
            }
            function F() {
                if (aE && az) {
                    var aI = G.outerHeight(), s = ap.outerWidth();
                    u -= aI;
                    b(am).find(">.jspCap:visible,>.jspArrow").each(function() {
                        m += b(this).outerWidth();
                    });
                    m -= s;
                    w -= s;
                    aj -= aI;
                    G.parent().append(b('<div class="jspCorner" />').css("width", aI + "px"));
                    p();
                    ag();
                }
                if (aE) {
                    X.width((al.outerWidth() - g) + "px");
                }
                Y = X.outerHeight();
                r = Y / w;
                if (aE) {
                    at = Math.ceil(1 / z * m);
                    if (at > ay.horizontalDragMaxWidth) {
                        at = ay.horizontalDragMaxWidth;
                    } else {
                        if (at < ay.horizontalDragMinWidth) {
                            at = ay.horizontalDragMinWidth;
                        }
                    }
                    i.width(at + "px");
                    k = m - at;
                    ad(Z);
                }
                if (az) {
                    B = Math.ceil(1 / r * u);
                    if (B > ay.verticalDragMaxHeight) {
                        B = ay.verticalDragMaxHeight;
                    } else {
                        if (B < ay.verticalDragMinHeight) {
                            B = ay.verticalDragMinHeight;
                        }
                    }
                    au.height(B + "px");
                    j = u - B;
                    ac(I);
                }
            }
            function ak(aJ, aL, aI, s) {
                var aN = "before", aK = "after", aM;
                if (aL == "os") {
                    aL = /Mac/.test(navigator.platform) ? "after" : "split";
                }
                if (aL == aN) {
                    aK = aL;
                } else {
                    if (aL == aK) {
                        aN = aL;
                        aM = aI;
                        aI = s;
                        s = aM;
                    }
                }
                aJ[aN](aI)[aK](s);
            }
            function aD(aI, s, aJ) {
                return function() {
                    H(aI, s, this, aJ);
                    this.blur();
                    return false;
                };
            }
            function H(aL, aK, aO, aN) {
                aO = b(aO).addClass("jspActive");
                var aM, aJ, aI = true, s = function() {
                    if (aL !== 0) {
                        P.scrollByX(aL * ay.arrowButtonSpeed);
                    }
                    if (aK !== 0) {
                        P.scrollByY(aK * ay.arrowButtonSpeed);
                    }
                    aJ = setTimeout(s, aI ? ay.initialDelay : ay.arrowRepeatFreq);
                    aI = false;
                };
                s();
                aM = aN ? "mouseout.jsp" : "mouseup.jsp";
                aN = aN || b("html");
                aN.bind(aM, function() {
                    aO.removeClass("jspActive");
                    aJ && clearTimeout(aJ);
                    aJ = null;
                    aN.unbind(aM);
                });
            }
            function q() {
                x();
                if (az) {
                    ap.bind("mousedown.jsp", function(aN) {
                        if (aN.originalTarget === c || aN.originalTarget == aN.currentTarget) {
                            var aL = b(this), aO = aL.offset(), aM = aN.pageY - aO.top - I, aJ, aI = true, s = function() {
                                var aR = aL.offset(), aS = aN.pageY - aR.top - B / 2, aP = w * ay.scrollPagePercent, aQ = j * aP / (Y - w);
                                if (aM < 0) {
                                    if (I - aQ > aS) {
                                        P.scrollByY(-aP);
                                    } else {
                                        U(aS);
                                    }
                                } else {
                                    if (aM > 0) {
                                        if (I + aQ < aS) {
                                            P.scrollByY(aP);
                                        } else {
                                            U(aS);
                                        }
                                    } else {
                                        aK();
                                        return;
                                    }
                                }
                                aJ = setTimeout(s, aI ? ay.initialDelay : ay.trackClickRepeatFreq);
                                aI = false;
                            }, aK = function() {
                                aJ && clearTimeout(aJ);
                                aJ = null;
                                b(document).unbind("mouseup.jsp", aK);
                            };
                            s();
                            b(document).bind("mouseup.jsp", aK);
                            return false;
                        }
                    });
                }
                if (aE) {
                    G.bind("mousedown.jsp", function(aN) {
                        if (aN.originalTarget === c || aN.originalTarget == aN.currentTarget) {
                            var aL = b(this), aO = aL.offset(), aM = aN.pageX - aO.left - Z, aJ, aI = true, s = function() {
                                var aR = aL.offset(), aS = aN.pageX - aR.left - at / 2, aP = aj * ay.scrollPagePercent, aQ = k * aP / (S - aj);
                                if (aM < 0) {
                                    if (Z - aQ > aS) {
                                        P.scrollByX(-aP);
                                    } else {
                                        V(aS);
                                    }
                                } else {
                                    if (aM > 0) {
                                        if (Z + aQ < aS) {
                                            P.scrollByX(aP);
                                        } else {
                                            V(aS);
                                        }
                                    } else {
                                        aK();
                                        return;
                                    }
                                }
                                aJ = setTimeout(s, aI ? ay.initialDelay : ay.trackClickRepeatFreq);
                                aI = false;
                            }, aK = function() {
                                aJ && clearTimeout(aJ);
                                aJ = null;
                                b(document).unbind("mouseup.jsp", aK);
                            };
                            s();
                            b(document).bind("mouseup.jsp", aK);
                            return false;
                        }
                    });
                }
            }
            function x() {
                if (G) {
                    G.unbind("mousedown.jsp");
                }
                if (ap) {
                    ap.unbind("mousedown.jsp");
                }
            }
            function aw() {
                b("html").unbind("dragstart.jsp selectstart.jsp mousemove.jsp mouseup.jsp mouseleave.jsp");
                if (au) {
                    au.removeClass("jspActive");
                }
                if (i) {
                    i.removeClass("jspActive");
                }
            }
            function U(s, aI) {
                if (!az) {
                    return;
                }
                if (s < 0) {
                    s = 0;
                } else {
                    if (s > j) {
                        s = j;
                    }
                }
                if (aI === c) {
                    aI = ay.animateScroll;
                }
                if (aI) {
                    P.animate(au, "top", s, ac);
                } else {
                    au.css("top", s);
                    ac(s);
                }
            }
            function ac(aI) {
                if (aI === c) {
                    aI = au.position().top;
                }
                al.scrollTop(0);
                I = aI;
                var aL = I === 0, aJ = I == j, aK = aI / j, s = -aK * (Y - w);
                if (ai != aL || aG != aJ) {
                    ai = aL;
                    aG = aJ;
                    D.trigger("jsp-arrow-change", [ai, aG, O, l]);
                }
                v(aL, aJ);
                X.css("top", s);
                D.trigger("jsp-scroll-y", [-s, aL, aJ]).trigger("scroll");
            }
            function V(aI, s) {
                if (!aE) {
                    return;
                }
                if (aI < 0) {
                    aI = 0;
                } else {
                    if (aI > k) {
                        aI = k;
                    }
                }
                if (s === c) {
                    s = ay.animateScroll;
                }
                if (s) {
                    P.animate(i, "left", aI, ad);
                } else {
                    i.css("left", aI);
                    ad(aI);
                }
            }
            function ad(aI) {
                if (aI === c) {
                    aI = i.position().left;
                }
                al.scrollTop(0);
                Z = aI;
                var aL = Z === 0, aK = Z == k, aJ = aI / k, s = -aJ * (S - aj);
                if (O != aL || l != aK) {
                    O = aL;
                    l = aK;
                    D.trigger("jsp-arrow-change", [ai, aG, O, l]);
                }
                t(aL, aK);
                X.css("left", s);
                D.trigger("jsp-scroll-x", [-s, aL, aK]).trigger("scroll");
            }
            function v(aI, s) {
                if (ay.showArrows) {
                    aq[aI ? "addClass" : "removeClass"]("jspDisabled");
                    ae[s ? "addClass" : "removeClass"]("jspDisabled");
                }
            }
            function t(aI, s) {
                if (ay.showArrows) {
                    ax[aI ? "addClass" : "removeClass"]("jspDisabled");
                    y[s ? "addClass" : "removeClass"]("jspDisabled");
                }
            }
            function L(s, aI) {
                var aJ = s / (Y - w);
                U(aJ * j, aI);
            }
            function M(aI, s) {
                var aJ = aI / (S - aj);
                V(aJ * k, s);
            }
            function aa(aU, aP, aJ) {
                var aN, aK, aL, s = 0, aT = 0, aI, aO, aR, aQ, aS;
                try {
                    aN = b(aU);
                } catch (aM) {
                    return;
                }
                aK = aN.outerHeight();
                aL = aN.outerWidth();
                al.scrollTop(0);
                al.scrollLeft(0);
                while (!aN.is(".jspPane")) {
                    s += aN.position().top;
                    aT += aN.position().left;
                    aN = aN.offsetParent();
                    if (/^body|html$/i.test(aN[0].nodeName)) {
                        return;
                    }
                }
                aI = aA();
                aO = aI + w;
                if (s < aI || aP) {
                    aQ = s - ay.verticalGutter;
                } else {
                    if (s + aK > aO) {
                        aQ = s - w + aK + ay.verticalGutter;
                    }
                }
                if (aQ) {
                    L(aQ, aJ);
                }
                viewportLeft = aC();
                aR = viewportLeft + aj;
                if (aT < viewportLeft || aP) {
                    aS = aT - ay.horizontalGutter;
                } else {
                    if (aT + aL > aR) {
                        aS = aT - aj + aL + ay.horizontalGutter;
                    }
                }
                if (aS) {
                    M(aS, aJ);
                }
            }
            function aC() {
                return -X.position().left;
            }
            function aA() {
                return -X.position().top;
            }
            function af() {
                al.unbind(ab).bind(ab, function(aL, aM, aK, aI) {
                    var aJ = Z, s = I;
                    P.scrollBy(aK * ay.mouseWheelSpeed, -aI * ay.mouseWheelSpeed, false);
                    return aJ == Z && s == I;
                });
            }
            function o() {
                al.unbind(ab);
            }
            function aB() {
                return false;
            }
            function J() {
                X.find(":input,a").unbind("focus.jsp").bind("focus.jsp", function(s) {
                    aa(s.target, false);
                });
            }
            function E() {
                X.find(":input,a").unbind("focus.jsp");
            }
            function R() {
                var s, aI;
                X.focus(function() {
                    D.focus();
                });
                D.attr("tabindex", 0).unbind("keydown.jsp keypress.jsp").bind("keydown.jsp", function(aM) {
                    if (aM.target !== this) {
                        return;
                    }
                    var aL = Z, aK = I;
                    switch (aM.keyCode) {
                        case 40:
                        case 38:
                        case 34:
                        case 32:
                        case 33:
                        case 39:
                        case 37:
                            s = aM.keyCode;
                            aJ();
                            break;
                        case 35:
                            L(Y - w);
                            s = null;
                            break;
                        case 36:
                            L(0);
                            s = null;
                            break;
                    }
                    aI = aM.keyCode == s && aL != Z || aK != I;
                    return !aI;
                }).bind("keypress.jsp", function(aK) {
                    if (aK.keyCode == s) {
                        aJ();
                    }
                    return !aI;
                });
                if (ay.hideFocus) {
                    D.css("outline", "none");
                    if ("hideFocus" in al[0]) {
                        D.attr("hideFocus", true);
                    }
                } else {
                    D.css("outline", "");
                    if ("hideFocus" in al[0]) {
                        D.attr("hideFocus", false);
                    }
                }
                function aJ() {
                    var aL = Z, aK = I;
                    switch (s) {
                        case 40:
                            P.scrollByY(ay.keyboardSpeed, false);
                            break;
                        case 38:
                            P.scrollByY(-ay.keyboardSpeed, false);
                            break;
                        case 34:
                        case 32:
                            P.scrollByY(w * ay.scrollPagePercent, false);
                            break;
                        case 33:
                            P.scrollByY(-w * ay.scrollPagePercent, false);
                            break;
                        case 39:
                            P.scrollByX(ay.keyboardSpeed, false);
                            break;
                        case 37:
                            P.scrollByX(-ay.keyboardSpeed, false);
                            break;
                    }
                    aI = aL != Z || aK != I;
                    return aI;
                }
            }
            function Q() {
                D.attr("tabindex", "-1").removeAttr("tabindex").unbind("keydown.jsp keypress.jsp");
            }
            function C() {
                if (location.hash && location.hash.length > 1) {
                    var aJ, aI;
                    try {
                        aJ = b(location.hash);
                    } catch (s) {
                        return;
                    }
                    if (aJ.length && X.find(location.hash)) {
                        if (al.scrollTop() === 0) {
                            aI = setInterval(function() {
                                if (al.scrollTop() > 0) {
                                    aa(location.hash, true);
                                    b(document).scrollTop(al.position().top);
                                    clearInterval(aI);
                                }
                            }, 50);
                        } else {
                            aa(location.hash, true);
                            b(document).scrollTop(al.position().top);
                        }
                    }
                }
            }
            function ah() {
                b("a.jspHijack").unbind("click.jsp-hijack").removeClass("jspHijack");
            }
            function n() {
                ah();
                b("a[href^=#]").addClass("jspHijack").bind("click.jsp-hijack", function() {
                    var s = this.href.split("#"), aI;
                    if (s.length > 1) {
                        aI = s[1];
                        if (aI.length > 0 && X.find("#" + aI).length > 0) {
                            aa("#" + aI, true);
                            return false;
                        }
                    }
                });
            }
            function an() {
                var aJ, aI, aL, aK, aM, s = false;
                al.unbind("touchstart.jsp touchmove.jsp touchend.jsp click.jsp-touchclick").bind("touchstart.jsp", function(aN) {
                    var aO = aN.originalEvent.touches[0];
                    aJ = aC();
                    aI = aA();
                    aL = aO.pageX;
                    aK = aO.pageY;
                    aM = false;
                    s = true;
                }).bind("touchmove.jsp", function(aQ) {
                    if (!s) {
                        return;
                    }
                    var aP = aQ.originalEvent.touches[0], aO = Z, aN = I;
                    P.scrollTo(aJ + aL - aP.pageX, aI + aK - aP.pageY);
                    aM = aM || Math.abs(aL - aP.pageX) > 5 || Math.abs(aK - aP.pageY) > 5;
                    return aO == Z && aN == I;
                }).bind("touchend.jsp", function(aN) {
                    s = false;
                }).bind("click.jsp-touchclick", function(aN) {
                    if (aM) {
                        aM = false;
                        return false;
                    }
                });
            }
            function h() {
                var s = aA(), aI = aC();
                D.removeClass("jspScrollable").unbind(".jsp");
                D.replaceWith(ao.append(X.children()));
                ao.scrollTop(s);
                ao.scrollLeft(aI);
            }
            b.extend(P, {reinitialise: function(aI) {
                    aI = b.extend({}, ay, aI);
                    ar(aI);
                },scrollToElement: function(aJ, aI, s) {
                    aa(aJ, aI, s);
                },scrollTo: function(aJ, s, aI) {
                    M(aJ, aI);
                    L(s, aI);
                },scrollToX: function(aI, s) {
                    M(aI, s);
                },scrollToY: function(s, aI) {
                    L(s, aI);
                },scrollToPercentX: function(aI, s) {
                    M(aI * (S - aj), s);
                },scrollToPercentY: function(aI, s) {
                    L(aI * (Y - w), s);
                },scrollBy: function(aI, s, aJ) {
                    P.scrollByX(aI, aJ);
                    P.scrollByY(s, aJ);
                },scrollByX: function(s, aJ) {
                    var aI = aC() + s, aK = aI / (S - aj);
                    V(aK * k, aJ);
                },scrollByY: function(s, aJ) {
                    var aI = aA() + s, aK = aI / (Y - w);
                    U(aK * j, aJ);
                },positionDragX: function(s, aI) {
                    V(s, aI);
                },positionDragY: function(aI, s) {
                    V(aI, s);
                },animate: function(aI, aL, s, aK) {
                    var aJ = {};
                    aJ[aL] = s;
                    aI.animate(aJ, {duration: ay.animateDuration,ease: ay.animateEase,queue: false,step: aK});
                },getContentPositionX: function() {
                    return aC();
                },getContentPositionY: function() {
                    return aA();
                },getContentWidth: function() {
                    return S();
                },getContentHeight: function() {
                    return Y();
                },getPercentScrolledX: function() {
                    return aC() / (S - aj);
                },getPercentScrolledY: function() {
                    return aA() / (Y - w);
                },getIsScrollableH: function() {
                    return aE;
                },getIsScrollableV: function() {
                    return az;
                },getContentPane: function() {
                    return X;
                },scrollToBottom: function(s) {
                    U(j, s);
                },hijackInternalLinks: function() {
                    n();
                },destroy: function() {
                    h();
                }});
            ar(N);
        }
        f = b.extend({}, b.fn.jScrollPane.defaults, f);
        b.each(["mouseWheelSpeed", "arrowButtonSpeed", "trackClickSpeed", "keyboardSpeed"], function() {
            f[this] = f[this] || f.speed;
        });
        var e;
        this.each(function() {
            var g = b(this), h = g.data("jsp");
            if (h) {
                h.reinitialise(f);
            } else {
                h = new d(g, f);
                g.data("jsp", h);
            }
            e = e ? e.add(g) : g;
        });
        return e;
    };
    b.fn.jScrollPane.defaults = {showArrows: false,maintainPosition: true,clickOnTrack: true,autoReinitialise: false,autoReinitialiseDelay: 500,verticalDragMinHeight: 0,verticalDragMaxHeight: 99999,horizontalDragMinWidth: 0,horizontalDragMaxWidth: 99999,animateScroll: false,animateDuration: 300,animateEase: "linear",hijackInternalLinks: false,verticalGutter: 4,horizontalGutter: 4,mouseWheelSpeed: 0,arrowButtonSpeed: 0,arrowRepeatFreq: 50,arrowScrollOnHover: false,trackClickSpeed: 0,trackClickRepeatFreq: 70,verticalArrowPositions: "split",horizontalArrowPositions: "split",enableKeyboardNavigation: true,hideFocus: false,keyboardSpeed: 0,initialDelay: 300,speed: 30,scrollPagePercent: 0.8};
})(jQuery, this);
(function($) {
    $.InFieldLabels = function(b, c, d) {
        var f = this;
        f.$label = $(b);
        f.label = b;
        f.$field = $(c);
        f.field = c;
        f.$label.data("InFieldLabels", f);
        f.showing = true;
        f.init = function() {
            f.options = $.extend({}, $.InFieldLabels.defaultOptions, d);
            if (f.$field.val() != "") {
                f.$label.hide();
                f.showing = false;
            }
            f.$field.focus(function() {
                f.fadeOnFocus();
            }).blur(function() {
                f.checkForEmpty(true);
            }).bind("keydown.infieldlabel", function(e) {
                f.hideOnChange(e);
            }).change(function(e) {
                f.checkForEmpty();
            }).bind("onPropertyChange", function() {
                f.checkForEmpty();
            });
        };
        f.fadeOnFocus = function() {
            if (f.showing) {
                f.setOpacity(f.options.fadeOpacity);
            }
        };
        f.setOpacity = function(a) {
            f.$label.stop().animate({opacity: a}, f.options.fadeDuration);
            f.showing = (a > 0);
        };
        f.checkForEmpty = function(a) {
            if (f.$field.val() == "") {
                f.prepForShow();
                f.setOpacity(a ? 1 : f.options.fadeOpacity);
            } else {
                f.setOpacity(0);
            }
        };
        f.prepForShow = function(e) {
            if (!f.showing) {
                f.$label.css({opacity: 0}).show();
                f.$field.bind("keydown.infieldlabel", function(e) {
                    f.hideOnChange(e);
                });
            }
        };
        f.hideOnChange = function(e) {
            if ((e.keyCode == 16) || (e.keyCode == 9)) {
                return;
            }
            if (f.showing) {
                f.$label.hide();
                f.showing = false;
            }
            f.$field.unbind("keydown.infieldlabel");
        };
        f.init();
    };
    $.InFieldLabels.defaultOptions = {fadeOpacity: 0.5,fadeDuration: 300};
    $.fn.inFieldLabels = function(c) {
        return this.each(function() {
            var a = $(this).attr("for");
            if (!a) {
                return;
            }
            var b = $("input#" + a + "[type='text']," + "input#" + a + "[type='password']," + "textarea#" + a);
            if (b.length == 0) {
                return;
            }
            (new $.InFieldLabels(this, b[0], c));
        });
    };
})(jQuery);
$(document).ready(function() {
    $("#boxLogin label").inFieldLabels();
    $(".boxLogin label").inFieldLabels();
    $(".customerSelectorFrm label").inFieldLabels();
});
jQuery.fn.ALGGallery = function(method) {
    var methods = {init: function(custom_options) {
            $.extend(options, custom_options);
            innerContainer = $(this).children(".ALGInnerContainer");
            textBlock = innerContainer.children(".ALGText");
            imgBlock = innerContainer.children(".ALGImage");
            thumbnails = $(this).children(".ALGThumbnails");
            $(this).css("width", options.gallery_width);
            innerContainer.css("width", options.gallery_width - 2);
            textBlock.css("width", innerContainer.width() - options.start_img_width - 4);
            options.gallery_height = textBlock.innerHeight() + thumbnails.innerHeight();
            if (options.start_img_height > textBlock.innerHeight()) {
                options.gallery_height = options.start_img_height + thumbnails.innerHeight();
            }
            $(this).css("height", options.gallery_height);
            innerContainer.css("height", options.gallery_height - thumbnails.height() - 4);
            imgBlock.css("width", options.start_img_width);
            imgBlock.css("height", options.start_img_height);
            central_pos_y = innerContainer.height() / 2 - options.start_img_height / 2;
            imgBlock.css("margin-top", central_pos_y);
            initialize();
            initLoad(options.defaultModel);
            reloadElements(options.defaultModel);
            $(this).data("options", options);
            $(this).data("container", container);
            $(this).data("states", states);
            $(this).data("state", state);
            $(this).data("image_index", image_index);
            $(this).data("model_index", model_index);
            $(this).data("c_m_l", c_m_l);
            $(this).data("c_m_t", c_m_t);
            $(this).data("innerContainer", innerContainer);
            $(this).data("textBlock", textBlock);
            $(this).data("imgBlock", imgBlock);
            $(this).data("thumbnails", thumbnails);
            $(this).data("central_pos_y", central_pos_y);
            $(this).data("current_model_index", model_index);
            assignThumbnailsHover();
            assignThumbnailClick();
            assignCloseClick();
            return this;
        },changeModel: function(model) {
            options = $(this).data("options");
            container = $(this).data("container");
            states = $(this).data("states");
            state = $(this).data("state");
            image_index = $(this).data("image_index");
            model_index = $(this).data("model_index");
            current_model_index = $(this).data("current_model_index");
            c_m_l = $(this).data("c_m_l");
            c_m_t = $(this).data("c_m_t");
            innerContainer = $(this).data("innerContainer");
            textBlock = $(this).data("textBlock");
            imgBlock = $(this).data("imgBlock");
            thumbnails = $(this).data("thumbnails");
            central_pos_y = $(this).data("central_pos_y");
            for (z = 0; z < options.elements.length; z++) {
                if (options.elements[z].model == model) {
                    model_index = z;
                    $(this).data("model_index", model_index);
                    if (model_index !== current_model_index) {
                        $(".ALGImage").find(".btnPlay").remove();
                        $(this).data("image_index", 0);
                        $(this).data("current_model_index", model_index);
                    }
                    break;
                }
            }
            reloadElements();
            if (state == states.large) {
                if (options.elements.length > 0) {
                    imgBlock.children("img").attr("src", options.elements[model_index].large[image_index]);
                } else {
                    if (options.video_elements.thumbnails.length > 0) {
                        imgBlock.children("img").attr("src", options.video_elements.large[image_index]);
                    }
                }
                thumbnails.children("ul.ALGThumbnailList").children("li.ALGZoom").hide();
            } else {
                if (state == states.start) {
                    if (options.elements.length > 0) {
                        imgBlock.children("img").attr("src", options.elements[model_index].medium[image_index]);
                    } else {
                        if (options.video_elements.thumbnails.length > 0) {
                            imgBlock.children("img").attr("src", options.video_elements.large[image_index]);
                        }
                    }
                }
            }
            $("#ALGThumbItem_" + image_index).addClass("active");
            assignThumbnailsHover();
            assignThumbnailClick();
            assignCloseClick();
        }};
    var options = {"gallery_width": 648,"gallery_height": 420,"start_img_width": 313,"start_img_height": 313,"large_img_width": 500,"large_img_height": 500,"video_width": 648,"video_height": 324,"zoom_img_width": 1200,"zoom_img_height": 1200,"elements": [],"video_elements": {"thumbnails": [],"large": [],"video_code": []},"text": "","defaultModel": "default"};
    var container = $(this);
    var states = {"start": 1,"large": 2,"zoom": 3,"progress": 4};
    var state = states.start;
    var image_index;
    var model_index = 0;
    var c_m_l = 0, c_m_t = 0;
    var innerContainer;
    var textBlock;
    var imgBlock;
    var thumbnails;
    var central_pos_y;
    var images_count = 0;
    var video_count = 0;
    var paddingType = "padding-left";
    var margingType = "margin-right";
    if (isArEm) {
        paddingType = "padding-right";
        margingType = "margin-left";
    }
    if (methods[method]) {
        return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
    } else {
        if (typeof method === "object" || !method) {
            return methods.init.apply(this, arguments);
        } else {
            $.error("Method " + method + " does not exist on jQuery.tooltip");
        }
    }
    function initialize() {
        for (i = 0; i < options.elements.length; i++) {
            if (options.elements[i].model == options.defaultModel) {
                if (options.elements[i].medium != null && options.elements[i].medium != "") {
                    model_index = i;
                } else {
                    model_index = 0;
                }
                break;
            }
        }
    }
    function reloadElements() {
        container.find(".ALGThumbnailList.ALGThumbnailImage").html("");
        if (options.elements.length > 0) {
            var thumbnails_html = "";
            for (m = 0; m < options.elements[model_index].thumbnails.length; m++) {
                if (options.elements[model_index].thumbnails[m].length > 0) {
                    thumbnails_html += '<li class="ALGZoom"><a href="#" class="ALGBtnZoom"><span>zoom</span></a></li>';
                }
                break;
            }
            for (n = 0; n < options.elements[model_index].thumbnails.length; n++) {
                if (options.elements[model_index].types[n] == "image") {
                    thumbnails_html += '<li id="ALGThumbItem_' + n + '"><a href="#"><img src="' + options.elements[model_index].thumbnails[n] + '" alt="' + options.elements[model_index].altText[n] + '" title="' + options.elements[model_index].altText[n] + '" /></a></li>';
                    images_count++;
                }
            }
            thumbnails_html += "</ul>";
            container.find(".ALGThumbnailList.ALGThumbnailImage").html(thumbnails_html);
        }
        container.data("images_count", images_count);
        container.find(".ALGThumbnailList.ALGThumbnailVideo").html("");
        if (options.elements.length > 0) {
            var video_thumbnails_html = "";
            for (n = 0; n < options.elements[model_index].thumbnails.length; n++) {
                if (options.elements[model_index].types[n] == "video") {
                    video_thumbnails_html += '<li class="ALGThumbItemVideo" id="ALGThumbItem_' + n + '"><a class="videoCallBtnG" href="#"><img src="' + options.elements[model_index].thumbnails[n] + '" alt="' + options.elements[model_index].altText[n] + '" title="' + options.elements[model_index].altText[n] + '" /><span class="btnPlaySmall"><em>play</em></span></a></li>';
                    video_count++;
                }
            }
            video_thumbnails_html += "</ul>";
            container.find(".ALGThumbnailList.ALGThumbnailVideo").html(video_thumbnails_html);
        }
        container.data("video_count", video_count);
    }
    function assignThumbnailsHover() {
        thumbnails.children("ul.ALGThumbnailList").children("li").mouseenter(function() {
            $(".ALGImage").find(".btnPlay").remove();
            state = container.data("state");
            options = container.data("options");
            textBlock = container.data("textBlock");
            imgBlock = container.data("imgBlock");
            thumbnails = container.data("thumbnails");
            innerContainer = container.data("innerContainer");
            state = container.data("state");
            model_index = container.data("model_index");
            image_index = container.data("image_index");
            images_count = container.data("images_count");
            video_count = container.data("video_count");
            if (state == states.start) {
                if (!$(this).hasClass("ALGZoom")) {
                    var is_video = $(this).hasClass("ALGThumbItemVideo");
                    $(this).addClass("active");
                    state = states.progress;
                    container.data("state", state);
                    $("#ALGThumbItem_" + image_index).removeClass("active");
                    image_index = $(this).attr("id").replace("ALGThumbItem_", "");
                    container.data("image_index", image_index);
                    var start_src = "";
                    if (options.elements.length > 0) {
                        start_src = options.elements[model_index].medium[image_index];
                    }
                    imgBlock.children("img").fadeOut(3, function() {
                        $(".ALGImage").addClass("galleryVideo");
                        imgBlock.children("img").addClass("triggeredImage");
                        if (is_video == true && $(".ALGImage").find(".btnPlay").html() == null) {
                            $(".ALGImage").find("img").after('<span class="btnPlay" onclick="heroVideoClick(' + image_index + ')"><em>play</em></span>');
                        }
                        $("#ALGThumbItem_" + image_index).triggerHandler("click");
                        $(".triggeredImage").click(function() {
                            $("#ALGThumbItem_" + image_index).triggerHandler("click");
                        });
                        imgBlock.children("img").attr("src", start_src);
                        imgBlock.children("img").css("width", options.start_img_width);
                        imgBlock.children("img").css("height", options.start_img_height);
                        imgBlock.children("img").fadeIn(3, function() {
                            state = states.start;
                            container.data("state", state);
                        });
                    });
                }
            }
        });
    }
    function initLoad() {
        image_index = 0;
        container.data("image_index", image_index);
        if (options.elements.length > 0) {
            var start_src = options.elements[model_index].medium[image_index];
            var start_alt = options.elements[model_index].altText[image_index];
            insertImage(options.start_img_width, options.start_img_height, start_src, start_alt);
            thumbnails.children("ul.ALGThumbnailList").children("li:first").addClass("active");
            thumbnails.children("strong.text").hide();
        }
    }
    function assignThumbnailClick() {
        thumbnails.children("ul.ALGThumbnailList").children("li").click(function(event) {
            event.preventDefault();
            options = container.data("options");
            textBlock = container.data("textBlock");
            imgBlock = container.data("imgBlock");
            thumbnails = container.data("thumbnails");
            innerContainer = container.data("innerContainer");
            state = container.data("state");
            model_index = container.data("model_index");
            image_index = container.data("image_index");
            images_count = container.data("images_count");
            video_count = container.data("video_count");
            if (!$(this).hasClass("ALGZoom")) {
                if (state != states.progress) {
                    if (state == states.start) {
                        innerContainer.addClass("enlarged");
                        state = states.progress;
                        container.data("state", state);
                        $("#ALGThumbItem_" + image_index).removeClass("active");
                        $(this).addClass("active");
                        image_index = $(this).attr("id").replace("ALGThumbItem_", "");
                        container.data("image_index", image_index);
                        var is_video = $(this).hasClass("ALGThumbItemVideo");
                        var video_html = "";
                        if (is_video) {
                            video_html = '<object width="' + options.video_width + '" height="' + options.video_height + '"><param name="allowFullScreen" value="true"><param value="' + options.elements[model_index].large[image_index] + '" name="movie"><embed width="' + options.video_width + '" height="' + options.video_height + '" wmode="transparent" type="application/x-shockwave-flash" src="' + options.elements[model_index].large[image_index] + '&autoplay=1" allowfullscreen="true"></object>';
                        }
                        var start_src = "";
                        var start_alt = "";
                        if (options.elements.length > 0) {
                            start_src = options.elements[model_index].medium[image_index];
                            start_alt = options.elements[model_index].altText[image_index];
                        }
                        insertImage(options.start_img_width, options.start_img_height, start_src, start_alt);
                        var large_src = "";
                        if (options.elements.length > 0) {
                            large_src = options.elements[model_index].large[image_index];
                        }
                        container.children(".ALGCloseBtn").show();
                        var img_width = options.large_img_width;
                        if (is_video) {
                            img_width = options.video_width;
                        }
                        var img_height = options.large_img_height;
                        if (is_video) {
                            img_height = options.video_height;
                        }
                        var central_pos_x = innerContainer.width() / 2 - img_width / 2;
                        $(".multimediaModule").css("border", "1px solid #ccc");
                        $(".multimediaModule").css("background", "#ffffff");
                        var params_thumbnails = {};
                        params_thumbnails[paddingType] = 15;
                        thumbnails.animate(params_thumbnails, 400);
                        textBlock.css("position", "absolute");
                        textBlock.fadeOut(400);
                        var central_pos_y = options.large_img_height / 2 - img_height / 2;
                        innerContainer.animate({height: options.large_img_height}, 400);
                        var params_imgBlock = {};
                        params_imgBlock["width"] = img_width;
                        params_imgBlock["height"] = img_height;
                        params_imgBlock[margingType] = central_pos_x;
                        params_imgBlock["margin-top"] = central_pos_y;
                        imgBlock.animate(params_imgBlock, 400, function() {
                            if (is_video) {
                                $(this).children("img").fadeOut(150, function() {
                                    $(this).children("img").remove();
                                    imgBlock.html(video_html);
                                    thumbnails.children("ul.ALGThumbnailList").children("li.ALGZoom").hide();
                                    thumbnails.children("strong.text").show();
                                    state = states.large;
                                    container.data("state", state);
                                });
                            } else {
                                thumbnails.children("ul.ALGThumbnailList").children("li.ALGZoom").hide();
                                thumbnails.children("strong.text").show();
                                state = states.large;
                                container.data("state", state);
                            }
                        });
                        imgBlock.children("img").animate({"width": img_width,"height": img_height}, 400, function() {
                            $(this).attr("src", large_src);
                        });
                    } else {
                        if (state == states.large) {
                            if (image_index == $(this).attr("id").replace("ALGThumbItem_", "")) {
                                container.children(".ALGCloseBtn").trigger("click");
                            } else {
                                state = states.progress;
                                container.data("state", state);
                                images_count = container.data("images_count");
                                video_count = container.data("video_count");
                                $("#ALGThumbItem_" + image_index).removeClass("active");
                                $(this).addClass("active");
                                image_index = $(this).attr("id").replace("ALGThumbItem_", "");
                                container.data("image_index", image_index);
                                var is_video = $(this).hasClass("ALGThumbItemVideo");
                                var large_src = "";
                                var altText = "";
                                if (options.elements.length > 0) {
                                    large_src = options.elements[model_index].large[image_index];
                                    altText = options.elements[model_index].altText[image_index];
                                }
                                var video_html = "";
                                if (is_video) {
                                    video_html = '<object width="' + options.video_width + '" height="' + options.video_height + '"><param name="allowFullScreen" value="true"><param value="' + options.elements[model_index].large[image_index] + '" name="movie"><embed width="' + options.video_width + '" height="' + options.video_height + '" wmode="transparent" type="application/x-shockwave-flash" src="' + options.elements[model_index].large[image_index] + '&autoplay=1" allowfullscreen="true"></object>';
                                }
                                var img_width = options.large_img_width;
                                if (is_video) {
                                    img_width = options.video_width;
                                }
                                var img_height = options.large_img_height;
                                if (is_video) {
                                    img_height = options.video_height;
                                }
                                insertImage(img_width, img_height, large_src, altText);
                                var central_pos_x = innerContainer.width() / 2 - img_width / 2;
                                var central_pos_y = options.large_img_height / 2 - img_height / 2;
                                var params_imgBlock = {};
                                params_imgBlock["width"] = img_width;
                                params_imgBlock["height"] = img_height;
                                params_imgBlock[margingType] = central_pos_x;
                                params_imgBlock["margin-top"] = central_pos_y;
                                imgBlock.animate(params_imgBlock, 400, function() {
                                    if (is_video) {
                                        $(this).children("img").fadeOut(150, function() {
                                            $(this).children("img").remove();
                                            imgBlock.html(video_html);
                                            state = states.large;
                                            thumbnails.children("ul.ALGThumbnailList").children("li.ALGZoom").hide();
                                            container.data("state", state);
                                        });
                                    } else {
                                        state = states.large;
                                        thumbnails.children("ul.ALGThumbnailList").children("li.ALGZoom").hide();
                                        container.data("state", state);
                                    }
                                });
                                innerContainer.animate({height: options.large_img_height}, 400);
                                imgBlock.children("img").animate({"width": img_width,"height": img_height}, 400, function() {
                                    $(this).attr("src", large_src);
                                });
                            }
                        }
                    }
                }
            } else {
                if (state == states.start) {
                    $("#ALGThumbItem_" + image_index).trigger("click");
                }
            }
            if (options.elements[model_index].altText != undefined) {
                thumbnails.children("strong.text").html(options.elements[model_index].altText[image_index]);
            }
        });
    }
    function assignCloseClick() {
        container.children(".ALGCloseBtn").click(function(event) {
            event.preventDefault();
            options = container.data("options");
            textBlock = container.data("textBlock");
            imgBlock = container.data("imgBlock");
            thumbnails = container.data("thumbnails");
            innerContainer = container.data("innerContainer");
            state = container.data("state");
            model_index = container.data("model_index");
            image_index = container.data("image_index");
            images_count = container.data("images_count");
            video_count = container.data("video_count");
            if (state != states.progress) {
                if (state == states.large) {
                    innerContainer.removeClass("enlarged");
                    state = states.progress;
                    container.data("state", state);
                    container.children(".ALGCloseBtn").hide();
                    var is_video = $("#ALGThumbItem_" + image_index).hasClass("ALGThumbItemVideo");
                    var central_pos_y = (options.gallery_height - thumbnails.height()) / 2 - options.start_img_height / 2;
                    var start_src = "";
                    if (options.elements.length > 0) {
                        start_src = options.elements[model_index].medium[image_index];
                    }
                    var large_src = "";
                    var altText = "";
                    if (!is_video && options.elements.length > 0) {
                        large_src = options.elements[model_index].large[image_index];
                    } else {
                        if (is_video && options.elements.length > 0) {
                            large_src = options.elements[model_index].medium[image_index];
                        }
                    }
                    if (options.elements.length > 0) {
                        altText = options.elements[model_index].altText[image_index];
                    }
                    insertImage(options.large_img_width, options.large_img_height, large_src, altText);
                    textBlock.fadeIn(1000, "linear", function() {
                        textBlock.css("position", "static");
                    });
                    imgBlock.children("img").addClass("triggeredImage");
                    $(".ALGImage").addClass("galleryVideo");
                    if (is_video == true && $(".ALGImage").find(".btnPlay").html() == null) {
                        $(".ALGImage").find("img").after('<span class="btnPlay"><em>play</em></span>');
                    } else {
                        if (is_video == false && $(".ALGImage").find(".btnPlay").html() != null) {
                            $(".ALGImage").find(".btnPlay").remove();
                        }
                    }
                    $("#ALGThumbItem_" + image_index).triggerHandler("click");
                    $(".triggeredImage").click(function() {
                        $("#ALGThumbItem_" + image_index).triggerHandler("click");
                    });
                    $(".multimediaModule").css("border", "0");
                    $(".multimediaModule").css("background", "none");
                    $(".multimediaModule").css("border-bottom", "1px solid #ccc");
                    var params_thumbnails = {};
                    params_thumbnails[paddingType] = 0;
                    thumbnails.animate(params_thumbnails, 400);
                    var params_imgBlock = {};
                    params_imgBlock["width"] = options.start_img_width;
                    params_imgBlock["height"] = options.start_img_height;
                    params_imgBlock[margingType] = 0;
                    params_imgBlock["margin-top"] = central_pos_y;
                    imgBlock.animate(params_imgBlock, 400);
                    innerContainer.animate({height: options.gallery_height - thumbnails.height()}, 400);
                    imgBlock.children("img").animate({"width": options.start_img_width,"height": options.start_img_height}, 400, function() {
                        $(this).attr("src", start_src);
                        thumbnails.children("ul.ALGThumbnailList").children("li.ALGZoom").show();
                        thumbnails.children("strong.text").hide();
                        state = states.start;
                        container.data("state", state);
                    });
                }
            }
        });
    }
    function insertImage(width, height, src, alt) {
        imgBlock.html("<img src='' />");
        imgBlock.children("img").css("width", width);
        imgBlock.children("img").css("height", height);
        imgBlock.children("img").attr("src", src);
        imgBlock.children("img").attr("alt", alt);
        imgBlock.children("img").attr("title", alt);
    }
    function addVideoTrigger() {
    }
    function removeVideoTrigger() {
    }
};
function heroVideoClick(image_index) {
    $("#ALGThumbItem_" + image_index).click();
}
var configuratorCollapsed = null;
if (typeof (ProductInfoStruct) != "undefined") {
    if (ProductInfoStruct.releaseList[0].collapsed == true) {
        configuratorCollapsed = true;
    }
}
$(document).ready(function() {
    var _parentSlide = ".infoGoods";
    var _linkSlide = ".btnConfigure";
    var _slideBlock = ".infoVisible";
    var _openClassS = "infoGoodsOpen";
    var _durationSlide = 300;
    $(_parentSlide).each(function() {
        if (!$(this).is("." + _openClassS)) {
            $(this).find(_slideBlock).css("display", "none");
        }
    });
    $(_linkSlide, _parentSlide).click(function() {
        if ($(this).parents(_parentSlide).is("." + _openClassS)) {
            $(this).parents(_parentSlide).removeClass(_openClassS);
            $("div.sideBar_productInfoTop").css("margin-top", "0");
            configuratorCollapsed = true;
            $(this).parents(_parentSlide).find(_slideBlock).slideUp(_durationSlide, function() {
            });
        } else {
            $(this).parents(_parentSlide).addClass(_openClassS);
            $(this).parents(_parentSlide).find(_slideBlock).slideDown(_durationSlide, function() {
                $("div.sideBar_productInfoTop").css("margin-top", $("#productConfigurator").height());
                configuratorCollapsed = false;
            });
        }
        return false;
    });
});
$(document).ready(function() {
    var _parentSlide = ".btnGoTo";
    var _linkSlide = ".opener";
    var _slideBlock = ".slide";
    var _openClassS = "active";
    var _durationSlide = 300;
    $(_parentSlide).each(function() {
        if (!$(this).is("." + _openClassS)) {
            $(this).find(_slideBlock).css("display", "none");
        }
    });
    $(_linkSlide, _parentSlide).click(function() {
        if ($(this).parents(_parentSlide).is("." + _openClassS)) {
            $(this).parents(_parentSlide).removeClass(_openClassS);
            $(this).parents(_parentSlide).find(_slideBlock).slideUp(_durationSlide);
        } else {
            $(this).parents(_parentSlide).addClass(_openClassS);
            $(this).parents(_parentSlide).find(_slideBlock).slideDown(_durationSlide);
        }
        return false;
    });
});
$(document).ready(function() {
    var _parentSlide = ".searchEntry";
    var _linkSlide = ".btnTopic";
    var _slideBlock = ".infoVisible";
    var _openClassS = "searchEntryOpen";
    var _durationSlide = 300;
    $(_parentSlide).each(function() {
        if (!$(this).is("." + _openClassS)) {
            $(this).find(_slideBlock).css("display", "none");
        }
    });
    $(_linkSlide, _parentSlide).click(function() {
        if ($(this).parents(_parentSlide).is("." + _openClassS)) {
            $(this).parents(_parentSlide).removeClass(_openClassS);
            $(this).parents(_parentSlide).find(_slideBlock).slideUp(_durationSlide);
        } else {
            $(this).parents(_parentSlide).addClass(_openClassS);
            $(this).parents(_parentSlide).find(_slideBlock).slideDown(_durationSlide);
        }
        return false;
    });
});
$(document).ready(function() {
    var _parentSlide = ".informHold";
    var _linkSlide = ".btnMail a, .btnSend";
    var _slideBlock = ".headingSend";
    var _openClassS = "boxDownloadOpen";
    var _durationSlide = 300;
    $(_parentSlide).each(function() {
        if (!$(this).is("." + _openClassS)) {
            $(this).find(_slideBlock).css("display", "none");
        }
    });
    $(_linkSlide, _parentSlide).click(function() {
        if ($(this).parents(_parentSlide).is("." + _openClassS)) {
            $(this).parents(_parentSlide).removeClass(_openClassS);
            $(this).parents(_parentSlide).find(_slideBlock).slideUp(_durationSlide);
        } else {
            $(this).parents(_parentSlide).addClass(_openClassS);
            $(this).parents(_parentSlide).find(_slideBlock).slideDown(_durationSlide);
        }
        return false;
    });
});
$(document).ready(function() {
    var _parentSlide = ".sliderItem";
    var _linkSlide = ".slideLink, .slideClose";
    var _slideBlock = ".infoVisible";
    var _openClassS = "sliderItemOpen";
    var _durationSlide = 300;
    $(_parentSlide).each(function() {
        if (!$(this).is("." + _openClassS)) {
            $(this).find(_slideBlock).css("display", "none");
        }
    });
    $(_linkSlide, _parentSlide).click(function() {
        if ($(this).parents(_parentSlide).is("." + _openClassS)) {
            $(this).parents(_parentSlide).removeClass(_openClassS);
            $(this).parents(_parentSlide).find(_slideBlock).slideUp(_durationSlide);
        } else {
            $(this).parents(_parentSlide).addClass(_openClassS);
            $(this).parents(_parentSlide).find(_slideBlock).slideDown(_durationSlide);
        }
        return false;
    });
});
$(document).ready(function() {
    function bg_overlay() {
        if (typeof document.body.style.maxHeight === "undefined") {
            $("body", "html").css({height: "100%",width: "100%"});
            $("html").css("overflow", "hidden");
            if (document.getElementById("TB_HideSelect") === null) {
                $("body").append("<iframe id='TB_HideSelect'></iframe><div id='TB_overlay'></div><div id='TB_window'></div>");
                $("#TB_overlay").click(tb_remove);
            }
        } else {
            if (document.getElementById("TB_overlay") === null) {
                $("body").append("<div id='TB_overlay'></div><div id='TB_window'></div>");
                $("#TB_overlay").click(tb_remove);
            }
        }
    }
    function tb_remove() {
        $("#TB_window").fadeOut("fast", function() {
            $("#TB_window,#TB_overlay,#TB_HideSelect").trigger("unload").unbind().remove();
        });
        $("#TB_load").remove();
        if (typeof document.body.style.maxHeight == "undefined") {
            $("body", "html").css({height: "auto",width: "auto"});
            $("html").css("overflow", "");
        }
        document.onkeydown = "";
        document.onkeyup = "";
        $("#boxLogin, #boxDownload, #boxAccept, #boxProductEntry").remove();
        $(".boxDownload_container").remove();
        return false;
    }
    $(".btnAcceptOpen").click(function(event) {
        event.preventDefault();
        bg_overlay();
        $("#boxDownload").fadeIn(100, function() {
        });
        $("#boxAccept").fadeOut(100, function() {
        });
    });
    jQuery.fn.center = function() {
        this.css("position", "absolute");
        this.css("top", (($(window).height() - this.outerHeight()) / 2) + $(window).scrollTop() + "px");
        this.css("left", (($(window).width() - this.outerWidth()) / 2) + $(window).scrollLeft() + "px");
        return this;
    };
    $(".openAccept").click(function(event) {
        event.preventDefault();
        var url = $(this).attr("href");
        var container = $(this);
        if ((container.parent("div").find("input").length > 0 && container.parent("div").find("input").val() != "") || (container.parent("div").find("input").length == 0)) {
            bg_overlay();
            $.ajax({url: url,beforeSend: function() {
                },success: function(data) {
                    $("body").append(data);
                    $("#boxAccept").fadeIn(100, function() {
                    });
                    $(".boxDownload_container").center();
                    $(".btnAcceptOpen").click(function(event) {
                        event.preventDefault();
                        bg_overlay();
                        $("#boxDownload").fadeIn(100, function() {
                        });
                        $("#boxAccept").fadeOut(100, function() {
                        });
                    });
                    $(".btnClose").click(function(event) {
                        event.preventDefault();
                        tb_remove();
                        $("#boxAccept").hide();
                    });
                }});
        } else {
            container.parent("div").addClass("error");
        }
    });
    $(".OpenPopupTwitter").click(function(event) {
        event.preventDefault();
        bg_overlay();
        var pos = $(this).offset();
        $("#financialSocialTwitter").css("top", (pos.top + 28) + "px");
        $("#financialSocialTwitter").css("left", (pos.left - 170) + "px");
        $("#financialSocialTwitter").fadeIn(100, function() {
        });
    });
    $(".OpenPopupFacebook").click(function(event) {
        event.preventDefault();
        bg_overlay();
        var pos = $(this).offset();
        var pos = $(this).offset();
        $("#financialSocialFacebook").css("top", (pos.top + 24) + "px");
        $("#financialSocialFacebook").css("left", (pos.left - 170) + "px");
        $("#financialSocialFacebook").fadeIn(100, function() {
        });
    });
    $(".OpenPopupForums").click(function(event) {
        event.preventDefault();
        bg_overlay();
        var pos = $(this).offset();
        $("#financialSocialTwitter").css("top", (pos.top + 28) + "px");
        $("#financialSocialTwitter").css("left", (pos.left - 170) + "px");
        $("#financialSocialTwitter").fadeIn(100, function() {
        });
    });
    $(".btnClose").click(function(event) {
        event.preventDefault();
        tb_remove();
        $("#boxLogin, #boxDownload, #boxAccept, #boxProductEntry , #financialSocialTwitter , #financialSocialFacebook , #financialSocialForums, #boxCommunity ").hide();
    });
    $(".btnClose").click(function(event) {
        event.preventDefault();
        tb_remove();
        $("#boxLogin, #boxDownload, #boxAccept, #boxProductEntry , #financialPopup, #boxCommunity").hide();
    });
    $("input[type=hidden]").parent("div").parent("div").parent("div").removeClass("error");
    $("input[type=hidden]").change(function(event) {
        if ($(this).val()) {
            $(this).parent("div").parent("div").parent("div").removeClass("error");
        }
    });
});
$(window).scroll(function() {
    if ($(".boxDownload_container").length > 0) {
        $(".boxDownload_container").center();
    }
});
$(window).resize(function() {
    $(".boxDownload_container").center();
});
jQuery.fn.galleryScroll = function(_options) {
    var _options = jQuery.extend({btPrev: "a.link-prev",btNext: "a.link-next",holderList: "div",scrollElParent: "ul",scrollEl: "li",slideNum: false,duration: 1000,step: false,circleSlide: true,disableClass: "disable",funcOnclick: null,autoSlide: 5000,innerMargin: 0,stepWidth: false}, _options);
    return this.each(function() {
        var _this = jQuery(this);
        var self = this;
        var _holderBlock = jQuery(_options.holderList, _this);
        var _gWidth = _holderBlock.width();
        var _animatedBlock = jQuery(_options.scrollElParent, _holderBlock);
        var _liWidth = jQuery(_options.scrollEl, _animatedBlock).outerWidth(true);
        var _liSum = jQuery(_options.scrollEl, _animatedBlock).length * _liWidth;
        var _margin = -_options.innerMargin;
        var f = 0;
        var _step = 0;
        var _autoSlide = _options.autoSlide;
        var _timerSlide = null;
        var isArEm = rcLocaleJS == "ar-em";
        if (!_options.step) {
            _step = _gWidth;
        } else {
            _step = _options.step * _liWidth;
        }
        if (_options.stepWidth) {
            _step = _options.stepWidth;
        }
        self.paused = false;
        if (isArEm) {
            _margin = _liSum - _liWidth;
            var childObj = _animatedBlock.find(_options.scrollEl);
            var total = childObj.length;
            childObj.each(function(i) {
                _animatedBlock.append(childObj.eq((total - 1) - i));
            });
            _animatedBlock.css("margin-left", -_margin + "px");
        }
        if (!_options.circleSlide) {
            if (_options.innerMargin == _margin) {
                jQuery(_options.btPrev, _this).addClass("prev-" + _options.disableClass);
            }
        }
        if (_options.slideNum && !_options.step) {
            var _lastSection = 0;
            var _sectionWidth = 0;
            while (_sectionWidth < _liSum) {
                _sectionWidth = _sectionWidth + _gWidth;
                if (_sectionWidth > _liSum) {
                    _lastSection = _sectionWidth - _liSum;
                }
            }
        }
        if (_autoSlide) {
            autoSlide();
        }
        var hoverTimer = false;
        _holderBlock.mouseenter(function() {
            var el = this;
            hoverTimer = setTimeout(function() {
                if (_timerSlide) {
                    clearTimeout(_timerSlide);
                }
                el.paused = true;
            }, 300);
        }).mouseleave(function() {
            if (hoverTimer) {
                clearTimeout(hoverTimer);
            }
            this.paused = false;
            autoSlide();
        });
        jQuery(_options.btNext, _this).bind("click", function() {
            jQuery(_options.btPrev, _this).removeClass("prev-" + _options.disableClass);
            if (!_options.circleSlide) {
                if (_margin + _step > _liSum - _gWidth - _options.innerMargin) {
                    if (_margin != _liSum - _gWidth - _options.innerMargin) {
                        _margin = _liSum - _gWidth + _options.innerMargin;
                        jQuery(_options.btNext, _this).addClass("next-" + _options.disableClass);
                        _f2 = 0;
                    }
                } else {
                    _margin = _margin + _step;
                    if (_margin == _liSum - _gWidth - _options.innerMargin) {
                        jQuery(_options.btNext, _this).addClass("next-" + _options.disableClass);
                        _f2 = 0;
                    }
                }
            } else {
                if (_margin + _step > _liSum - _gWidth + _options.innerMargin) {
                    if (_margin != _liSum - _gWidth + _options.innerMargin) {
                        _margin = _liSum - _gWidth + _options.innerMargin;
                    } else {
                        _f2 = 1;
                        _margin = -_options.innerMargin;
                    }
                } else {
                    _margin = _margin + _step;
                    _f2 = 0;
                }
            }
            _animatedBlock.animate({marginLeft: -_margin + "px"}, {queue: false,duration: _options.duration,complete: function() {
                    if (_autoSlide) {
                        autoSlide();
                    }
                }});
            if (_options.slideNum && !_options.step) {
                jQuery.fn.galleryScroll.numListActive(_margin, jQuery(_options.slideNum, _this), _gWidth, _lastSection);
            }
            if (jQuery.isFunction(_options.funcOnclick)) {
                _options.funcOnclick.apply(_this);
            }
            return false;
        });
        var _f2 = 1;
        jQuery(_options.btPrev, _this).bind("click", function() {
            jQuery(_options.btNext, _this).removeClass("next-" + _options.disableClass);
            if (_margin - _step >= -_step - _options.innerMargin && _margin - _step <= -_options.innerMargin) {
                if (_f2 != 1) {
                    _margin = -_options.innerMargin;
                    _f2 = 1;
                } else {
                    if (_options.circleSlide) {
                        _margin = _liSum - _gWidth + _options.innerMargin;
                        f = 1;
                        _f2 = 0;
                    } else {
                        _margin = -_options.innerMargin;
                    }
                }
            } else {
                if (_margin - _step < -_step + _options.innerMargin) {
                    _margin = _margin - _step;
                    f = 0;
                } else {
                    _margin = _margin - _step;
                    f = 0;
                }
            }
            if (!_options.circleSlide && _margin == _options.innerMargin) {
                jQuery(this).addClass("prev-" + _options.disableClass);
                _f2 = 0;
            }
            if (!_options.circleSlide && _margin == -_options.innerMargin) {
                jQuery(this).addClass("prev-" + _options.disableClass);
            }
            _animatedBlock.animate({marginLeft: -_margin + "px"}, {queue: false,duration: _options.duration,complete: function() {
                    if (_autoSlide) {
                        autoSlide();
                    }
                }});
            if (_options.slideNum && !_options.step) {
                jQuery.fn.galleryScroll.numListActive(_margin, jQuery(_options.slideNum, _this), _gWidth, _lastSection);
            }
            if (jQuery.isFunction(_options.funcOnclick)) {
                _options.funcOnclick.apply(_this);
            }
            return false;
        });
        if (_liSum <= _gWidth) {
            jQuery(_options.btPrev, _this).addClass("prev-" + _options.disableClass).unbind("click");
            jQuery(_options.btNext, _this).addClass("next-" + _options.disableClass).unbind("click");
        }
        function autoSlide() {
            if (_options.autoSlide && !self.paused) {
                if (_timerSlide) {
                    clearTimeout(_timerSlide);
                }
                _timerSlide = setTimeout(function() {
                    jQuery(_options.btNext, _this).trigger("click");
                }, _options.autoSlide);
            }
        }
        jQuery.fn.galleryScroll.numListCreate = function(_elNumList, _liSumWidth, _width, _section) {
            var _numListElC = "";
            var _num = 1;
            var _difference = _liSumWidth + _section;
            while (_difference > 0) {
                _numListElC += '<li><a href="">' + _num + "</a></li>";
                _num++;
                _difference = _difference - _width;
            }
            jQuery(_elNumList).html("<ul>" + _numListElC + "</ul>");
        };
        jQuery.fn.galleryScroll.numListActive = function(_marginEl, _slideNum, _width, _section) {
            if (_slideNum) {
                jQuery("a", _slideNum).removeClass("active");
                var _activeRange = _width - _section - 1;
                var _n = 0;
                if (_marginEl != 0) {
                    while (_marginEl > _activeRange) {
                        _activeRange = (_n * _width) - _section - 1 + _options.innerMargin;
                        _n++;
                    }
                }
                var _a = (_activeRange + _section + 1 + _options.innerMargin) / _width - 1;
                jQuery("a", _slideNum).eq(_a).addClass("active");
            }
        };
        if (_options.slideNum && !_options.step) {
            jQuery.fn.galleryScroll.numListCreate(jQuery(_options.slideNum, _this), _liSum, _gWidth, _lastSection);
            jQuery.fn.galleryScroll.numListActive(_margin, jQuery(_options.slideNum, _this), _gWidth, _lastSection);
            numClick();
        }
        function numClick() {
            jQuery(_options.slideNum, _this).find("a").click(function() {
                jQuery(_options.btPrev, _this).removeClass("prev-" + _options.disableClass);
                jQuery(_options.btNext, _this).removeClass("next-" + _options.disableClass);
                var _indexNum = jQuery(_options.slideNum, _this).find("a").index(jQuery(this));
                _margin = (_step * _indexNum) - _options.innerMargin;
                f = 0;
                _f2 = 0;
                if (_indexNum == 0) {
                    _f2 = 1;
                }
                if (_margin + _step > _liSum) {
                    _margin = _margin - (_margin - _liSum) - _step + _options.innerMargin;
                    if (!_options.circleSlide) {
                        jQuery(_options.btNext, _this).addClass("next-" + _options.disableClass);
                    }
                }
                _animatedBlock.animate({marginLeft: -_margin + "px"}, {queue: false,duration: _options.duration});
                if (!_options.circleSlide && _margin == 0) {
                    jQuery(_options.btPrev, _this).addClass("prev-" + _options.disableClass);
                }
                jQuery.fn.galleryScroll.numListActive(_margin, jQuery(_options.slideNum, _this), _gWidth, _lastSection);
                if (_timerSlide) {
                    clearTimeout(_timerSlide);
                    _timerSlide = setTimeout(function() {
                        autoSlide(_options.autoSlide);
                    }, _options.autoSlide);
                }
                return false;
            });
        }
        jQuery(window).resize(function() {
            _gWidth = _holderBlock.width();
            _liWidth = jQuery(_options.scrollEl, _animatedBlock).outerWidth(true);
            _liSum = jQuery(_options.scrollEl, _animatedBlock).length * _liWidth;
            if (!_options.step) {
                _step = _gWidth;
            } else {
                _step = _options.step * _liWidth;
            }
            if (_options.slideNum && !_options.step) {
                var _lastSection = 0;
                var _sectionWidth = 0;
                while (_sectionWidth < _liSum) {
                    _sectionWidth = _sectionWidth + _gWidth;
                    if (_sectionWidth > _liSum) {
                        _lastSection = _sectionWidth - _liSum;
                        break;
                    }
                }
                jQuery.fn.galleryScroll.numListCreate(jQuery(_options.slideNum, _this), _liSum, _gWidth, _lastSection);
                jQuery.fn.galleryScroll.numListActive(_margin, jQuery(_options.slideNum, _this), _gWidth, _lastSection);
                numClick();
            }
            if (_liSum - _gWidth < _margin - _options.innerMargin) {
                if (!_options.circleSlide) {
                    jQuery(_options.btNext, _this).addClass("next-" + _options.disableClass);
                }
                _animatedBlock.animate({marginLeft: -(_liSum - _gWidth + _options.innerMargin)}, {queue: false,duration: _options.duration});
            }
        });
    });
};
var _globalPause = false;
var allFades = [];
var _mainGlobalPush = function() {
    $(allFades).each(function() {
        this.autoSwitch();
    });
};
jQuery.fn.fadeGallery = function(_options) {
    var _options = jQuery.extend({listSelector: "> li",navHolder: false,navCreate: false,thumbsSelector: "li",prev: "a.prev",next: "a.next",swichTime: false,autoHeight: true,delay: 900,fadeIEfix: false,onChange: null,mouseOverPause: true}, _options);
    this.each(function() {
        allFades[allFades.length] = this;
    });
    return this.each(function() {
        var _swichTime = _options.swichTime;
        var _d = (_options.fadeIEfix) ? ($.browser.msie ? 0 : _options.delay) : (_options.delay);
        var _this = $(this);
        var _list = $(_options.listSelector, _this);
        var _linksHold = $(_options.navHolder, _this);
        var _heights = new Array();
        if (_options.navCreate) {
            var _htmlNav = "<ul>";
            for (var i = 0; i < _list.length; i++) {
                _htmlNav += '<li><a href="#">' + (i + 1) + "</a></li>";
            }
            _htmlNav += "</ul>";
            _linksHold.html(_htmlNav);
        }
        if (_options.navHolder) {
            var _links = jQuery(_options.thumbsSelector, _linksHold);
        } else {
            var _links = jQuery(_options.thumbsSelector, _this);
        }
        var _btnPrev = $(_options.prev, _this);
        var _btnNext = $(_options.next, _this);
        var _a = _list.index(_list.filter(".active:eq(0)"));
        if (_a == -1) {
            _a = 0;
        }
        var _t;
        this.paused = false;
        this.over = false;
        _list.each(function(index) {
            _heights.push($(this).height());
        });
        if (rcLocaleJS == "ar-em") {
            _list.removeClass("active").css({display: "none",opacity: 0,position: "absolute",right: 0,top: 0}).eq(_a).addClass("active").css({display: "block",opacity: 1}).css("opacity", "auto");
        } else {
            _list.removeClass("active").css({display: "none",opacity: 0,position: "absolute",left: 0,top: 0}).eq(_a).addClass("active").css({display: "block",opacity: 1}).css("opacity", "auto");
        }
        if (_options.autoHeight) {
            _list.parent().animate({height: _heights[_a]}, _d);
        }
        _links.eq(_a).addClass("active");
        this.autoSwitch = function() {
            if (_t) {
                clearInterval(_t);
            }
            if (_swichTime && !_globalPause) {
                _t = setInterval(function() {
                    if (_a < _list.length - 1) {
                        changeEl(_a + 1);
                    } else {
                        changeEl(0);
                    }
                }, _swichTime);
            }
        };
        this.autoSwitch();
        if (_btnPrev) {
            _btnPrev.click(function() {
                var _prevItem = 0;
                if (_a > 0) {
                    _prevItem = _a - 1;
                } else {
                    _prevItem = _list.length - 1;
                }
                changeEl(_prevItem);
                return false;
            });
        }
        if (_btnNext) {
            _btnNext.click(function() {
                var _nextItem = 0;
                if (_a < _list.length - 1) {
                    _nextItem = _a + 1;
                } else {
                    _nextItem = 0;
                }
                changeEl(_nextItem);
                return false;
            });
        }
        _this.mouseenter(function() {
            if (_options.mouseOverPause == true) {
                _globalPause = true;
                _this.over = true;
                if (_t) {
                    clearInterval(_t);
                }
            }
        }).mouseleave(function() {
            if (_options.mouseOverPause == true) {
                _globalPause = false;
                _this.over = false;
                _mainGlobalPush();
            }
        });
        if (_links && _links.parent().parent().attr("id") != "newsBarHoldLI") {
            _links.click(function() {
                var _ind = _links.removeClass("active").index($(this).addClass("active"));
                changeEl(_ind);
                return false;
            });
        }
        function changeEl(_ind) {
            if (_t) {
                clearInterval(_t);
            }
            if (!_globalPause || _this.over) {
                if (_list.is(":animated")) {
                    _list.stop(true, true);
                }
                if (_ind != _a) {
                    _links.removeClass("active").eq(_ind).addClass("active");
                    _list.eq(_a).removeClass("active").animate({opacity: 0}, {queue: false,duration: _d,complete: function() {
                            $(this).css({display: "none"});
                        }});
                    _list.eq(_ind).addClass("active").css({opacity: 0,display: "block"});
                    if (_options.autoHeight) {
                        _list.parent().animate({height: _heights[_ind]}, _d);
                    }
                    _list.eq(_ind).animate({opacity: 1}, {queue: false,duration: _d,complete: function() {
                            $(this).css("opacity", "auto");
                            _a = _ind;
                            _this.get(0).autoSwitch();
                            if (jQuery.isFunction(_options.onChange)) {
                                _options.onChange.apply(_this);
                            }
                        }});
                }
            }
        }
    });
};
jQuery.fn.SlideCarousel = function(method) {
    var options = {"btnPrev": ".btnPrev","btnNext": ".btnNext","listHolder": ".mainGalleryList","step": 1,"size": 84.5,"sliderBar": ".statusBar","slider": ".statusBarBullet","speed": 500};
    var container = $(this);
    if (rcLocaleJS == "ar-em") {
        var html = "";
        var m = $(".mainGalleryList").find("li").length - 1;
        if ($(".mainGalleryList").find("li").length <= 4) {
            $(".mainGalleryList").find("ul").css("float", "right");
            $(".mainGalleryList").find("ul").css("width", "auto");
        }
        for (var i = m; i >= 0; i--) {
            html += "<li>" + $(".mainGalleryList").find("li").eq(i).html() + "</li>";
        }
        $(".mainGalleryList").find("ul").html(html);
    }
    var _btnPrev = null;
    var _btnNext = null;
    var _sliderBar = null;
    var _slider = null;
    var _listHolder = null;
    var pos = 0;
    var max_pos = 0;
    var _animating = false;
    var sliderPositions = new Array();
    var _sliderInAction = false;
    var _prevMousePos = null;
    var methods = {init: function(custom_options) {
            $.extend(options, custom_options);
            _btnPrev = $(this).find(options.btnPrev);
            _btnNext = $(this).find(options.btnNext);
            _sliderBar = $(this).find(options.sliderBar);
            _slider = _sliderBar.find(options.slider);
            _listHolder = $(this).find(options.listHolder);
            if (_listHolder.children("ul").children("li").length <= 4) {
                return;
            }
            initialize();
            assignPrevNextButtonClick();
            assignSliderEvents();
            checkButtons();
            $(this).data("options", options);
            return this;
        }};
    if (methods[method]) {
        return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
    } else {
        if (typeof method === "object" || !method) {
            return methods.init.apply(this, arguments);
        } else {
            $.error("Method " + method + " does not exist on jQuery.SlideCarousel");
        }
    }
    function initialize() {
        max_pos = parseInt(_listHolder.children("ul").children("li").length / options.step) - 4;
        for (i = 0; i <= max_pos; i++) {
            if (i == 0) {
                sliderPositions.push(0);
            } else {
                if (i == max_pos) {
                    sliderPositions.push(_sliderBar.width() - _slider.width() + 3);
                } else {
                    var step_length = parseInt(463 / max_pos);
                    sliderPositions.push(i * step_length);
                }
            }
        }
        if (rcLocaleJS == "ar-em") {
            noAnimate(max_pos);
        }
    }
    function assignPrevNextButtonClick() {
        _btnNext.click(function(event) {
            event.preventDefault();
            event.stopPropagation();
            if (pos < max_pos) {
                animate(pos + 1);
            }
        });
        _btnPrev.click(function(event) {
            event.preventDefault();
            event.stopPropagation();
            if (pos > 0) {
                animate(pos - 1);
            }
        });
    }
    function animate(curr_pos) {
        if (!_animating) {
            _animating = true;
            $(this).data("_animating", _animating);
            pos = curr_pos;
            $(this).data("pos", pos);
            _slider.animate({"left": sliderPositions[Math.abs(pos)]}, options.speed, "swing");
            _listHolder.find("ul").animate({"margin-left": -(pos * (options.size + 5) * (options.step + 1))}, options.speed, "swing", function() {
                _animating = false;
                $(this).data("_animating", _animating);
                checkButtons();
            });
        }
    }
    function noAnimate(curr_pos) {
        pos = curr_pos;
        _slider.css({"left": (sliderPositions[Math.abs(pos)])});
        _listHolder.find("ul").css({"margin-left": -(pos * (options.size + 5) * (options.step + 1) + 10)}, function() {
            checkButtons();
        });
    }
    function checkButtons() {
        if (pos == 0) {
            _btnPrev.addClass("prev-disable");
        } else {
            _btnPrev.removeClass("prev-disable");
        }
        if (pos == max_pos) {
            _btnNext.addClass("next-disable");
        } else {
            _btnNext.removeClass("next-disable");
        }
    }
    function assignSliderEvents() {
        _slider.mousedown(function(event) {
            event.preventDefault();
            event.stopPropagation();
            _sliderInAction = true;
        });
        $(window).mouseup(function(event) {
            if (_sliderInAction) {
                event.preventDefault();
                event.stopPropagation();
                _prevMousePos = null;
                _sliderInAction = false;
                var min_diff = 9999;
                var nearest_pos = 0;
                for (i = 0; i <= max_pos; i++) {
                    if (Math.abs(_slider.offset().left - _sliderBar.offset().left - sliderPositions[i]) < min_diff) {
                        min_diff = Math.abs(_slider.offset().left - _sliderBar.offset().left - sliderPositions[i]);
                        nearest_pos = i;
                    }
                }
                animate(nearest_pos);
            }
        });
        $(window).mousemove(function(event) {
            if (_sliderInAction) {
                if (_prevMousePos !== null) {
                    var movement = parseInt(event.pageX - _slider.offset().left - _prevMousePos);
                    if (_slider.offset().left - _sliderBar.offset().left + movement < 0) {
                        movement = _slider.offset().left - _sliderBar.offset().left;
                    }
                    if ((_slider.offset().left - _sliderBar.offset().left + movement + 2) > sliderPositions[sliderPositions.length - 1]) {
                        movement = sliderPositions[sliderPositions.length - 1] - (_slider.offset().left - _sliderBar.offset().left) + 1;
                    }
                    _slider.offset({left: _slider.offset().left + movement});
                    _prevMousePos = event.pageX - _slider.offset().left;
                } else {
                    _prevMousePos = event.pageX - _slider.offset().left;
                }
            }
        });
        _sliderBar.click(function(event) {
            event.preventDefault();
            event.stopPropagation();
            var temp_pos = event.pageX - _sliderBar.offset().left;
            var min_diff = 9999;
            var nearest_pos = 0;
            for (i = 0; i <= max_pos; i++) {
                if (Math.abs(temp_pos - sliderPositions[i]) < min_diff) {
                    min_diff = Math.abs(temp_pos - sliderPositions[i]);
                    nearest_pos = i;
                }
            }
            animate(nearest_pos);
        });
    }
};
var swfobject = function() {
    var D = "undefined", r = "object", S = "Shockwave Flash", W = "ShockwaveFlash.ShockwaveFlash", q = "application/x-shockwave-flash", R = "SWFObjectExprInst", x = "onreadystatechange", O = window, j = document, t = navigator, T = false, U = [h], o = [], N = [], I = [], l, Q, E, B, J = false, a = false, n, G, m = true, M = function() {
        var aa = typeof j.getElementById != D && typeof j.getElementsByTagName != D && typeof j.createElement != D, ah = t.userAgent.toLowerCase(), Y = t.platform.toLowerCase(), ae = Y ? /win/.test(Y) : /win/.test(ah), ac = Y ? /mac/.test(Y) : /mac/.test(ah), af = /webkit/.test(ah) ? parseFloat(ah.replace(/^.*webkit\/(\d+(\.\d+)?).*$/, "$1")) : false, X = !+"\v1", ag = [0, 0, 0], ab = null;
        if (typeof t.plugins != D && typeof t.plugins[S] == r) {
            ab = t.plugins[S].description;
            if (ab && !(typeof t.mimeTypes != D && t.mimeTypes[q] && !t.mimeTypes[q].enabledPlugin)) {
                T = true;
                X = false;
                ab = ab.replace(/^.*\s+(\S+\s+\S+$)/, "$1");
                ag[0] = parseInt(ab.replace(/^(.*)\..*$/, "$1"), 10);
                ag[1] = parseInt(ab.replace(/^.*\.(.*)\s.*$/, "$1"), 10);
                ag[2] = /[a-zA-Z]/.test(ab) ? parseInt(ab.replace(/^.*[a-zA-Z]+(.*)$/, "$1"), 10) : 0;
            }
        } else {
            if (typeof O.ActiveXObject != D) {
                try {
                    var ad = new ActiveXObject(W);
                    if (ad) {
                        ab = ad.GetVariable("$version");
                        if (ab) {
                            X = true;
                            ab = ab.split(" ")[1].split(",");
                            ag = [parseInt(ab[0], 10), parseInt(ab[1], 10), parseInt(ab[2], 10)];
                        }
                    }
                } catch (Z) {
                }
            }
        }
        return {w3: aa,pv: ag,wk: af,ie: X,win: ae,mac: ac};
    }(), k = function() {
        if (!M.w3) {
            return;
        }
        if ((typeof j.readyState != D && j.readyState == "complete") || (typeof j.readyState == D && (j.getElementsByTagName("body")[0] || j.body))) {
            f();
        }
        if (!J) {
            if (typeof j.addEventListener != D) {
                j.addEventListener("DOMContentLoaded", f, false);
            }
            if (M.ie && M.win) {
                j.attachEvent(x, function() {
                    if (j.readyState == "complete") {
                        j.detachEvent(x, arguments.callee);
                        f();
                    }
                });
                if (O == top) {
                    (function() {
                        if (J) {
                            return;
                        }
                        try {
                            j.documentElement.doScroll("left");
                        } catch (X) {
                            setTimeout(arguments.callee, 0);
                            return;
                        }
                        f();
                    })();
                }
            }
            if (M.wk) {
                (function() {
                    if (J) {
                        return;
                    }
                    if (!/loaded|complete/.test(j.readyState)) {
                        setTimeout(arguments.callee, 0);
                        return;
                    }
                    f();
                })();
            }
            s(f);
        }
    }();
    function f() {
        if (J) {
            return;
        }
        try {
            var Z = j.getElementsByTagName("body")[0].appendChild(C("span"));
            Z.parentNode.removeChild(Z);
        } catch (aa) {
            return;
        }
        J = true;
        var X = U.length;
        for (var Y = 0; Y < X; Y++) {
            U[Y]();
        }
    }
    function K(X) {
        if (J) {
            X();
        } else {
            U[U.length] = X;
        }
    }
    function s(Y) {
        if (typeof O.addEventListener != D) {
            O.addEventListener("load", Y, false);
        } else {
            if (typeof j.addEventListener != D) {
                j.addEventListener("load", Y, false);
            } else {
                if (typeof O.attachEvent != D) {
                    i(O, "onload", Y);
                } else {
                    if (typeof O.onload == "function") {
                        var X = O.onload;
                        O.onload = function() {
                            X();
                            Y();
                        };
                    } else {
                        O.onload = Y;
                    }
                }
            }
        }
    }
    function h() {
        if (T) {
            V();
        } else {
            H();
        }
    }
    function V() {
        var X = j.getElementsByTagName("body")[0];
        var aa = C(r);
        aa.setAttribute("type", q);
        var Z = X.appendChild(aa);
        if (Z) {
            var Y = 0;
            (function() {
                if (typeof Z.GetVariable != D) {
                    var ab = Z.GetVariable("$version");
                    if (ab) {
                        ab = ab.split(" ")[1].split(",");
                        M.pv = [parseInt(ab[0], 10), parseInt(ab[1], 10), parseInt(ab[2], 10)];
                    }
                } else {
                    if (Y < 10) {
                        Y++;
                        setTimeout(arguments.callee, 10);
                        return;
                    }
                }
                X.removeChild(aa);
                Z = null;
                H();
            })();
        } else {
            H();
        }
    }
    function H() {
        var ag = o.length;
        if (ag > 0) {
            for (var af = 0; af < ag; af++) {
                var Y = o[af].id;
                var ab = o[af].callbackFn;
                var aa = {success: false,id: Y};
                if (M.pv[0] > 0) {
                    var ae = c(Y);
                    if (ae) {
                        if (F(o[af].swfVersion) && !(M.wk && M.wk < 312)) {
                            w(Y, true);
                            if (ab) {
                                aa.success = true;
                                aa.ref = z(Y);
                                ab(aa);
                            }
                        } else {
                            if (o[af].expressInstall && A()) {
                                var ai = {};
                                ai.data = o[af].expressInstall;
                                ai.width = ae.getAttribute("width") || "0";
                                ai.height = ae.getAttribute("height") || "0";
                                if (ae.getAttribute("class")) {
                                    ai.styleclass = ae.getAttribute("class");
                                }
                                if (ae.getAttribute("align")) {
                                    ai.align = ae.getAttribute("align");
                                }
                                var ah = {};
                                var X = ae.getElementsByTagName("param");
                                var ac = X.length;
                                for (var ad = 0; ad < ac; ad++) {
                                    if (X[ad].getAttribute("name").toLowerCase() != "movie") {
                                        ah[X[ad].getAttribute("name")] = X[ad].getAttribute("value");
                                    }
                                }
                                P(ai, ah, Y, ab);
                            } else {
                                p(ae);
                                if (ab) {
                                    ab(aa);
                                }
                            }
                        }
                    }
                } else {
                    w(Y, true);
                    if (ab) {
                        var Z = z(Y);
                        if (Z && typeof Z.SetVariable != D) {
                            aa.success = true;
                            aa.ref = Z;
                        }
                        ab(aa);
                    }
                }
            }
        }
    }
    function z(aa) {
        var X = null;
        var Y = c(aa);
        if (Y && Y.nodeName == "OBJECT") {
            if (typeof Y.SetVariable != D) {
                X = Y;
            } else {
                var Z = Y.getElementsByTagName(r)[0];
                if (Z) {
                    X = Z;
                }
            }
        }
        return X;
    }
    function A() {
        return !a && F("6.0.65") && (M.win || M.mac) && !(M.wk && M.wk < 312);
    }
    function P(aa, ab, X, Z) {
        a = true;
        E = Z || null;
        B = {success: false,id: X};
        var ae = c(X);
        if (ae) {
            if (ae.nodeName == "OBJECT") {
                l = g(ae);
                Q = null;
            } else {
                l = ae;
                Q = X;
            }
            aa.id = R;
            if (typeof aa.width == D || (!/%$/.test(aa.width) && parseInt(aa.width, 10) < 310)) {
                aa.width = "310";
            }
            if (typeof aa.height == D || (!/%$/.test(aa.height) && parseInt(aa.height, 10) < 137)) {
                aa.height = "137";
            }
            j.title = j.title.slice(0, 47) + " - Flash Player Installation";
            var ad = M.ie && M.win ? "ActiveX" : "PlugIn", ac = "MMredirectURL=" + O.location.toString().replace(/&/g, "%26") + "&MMplayerType=" + ad + "&MMdoctitle=" + j.title;
            if (typeof ab.flashvars != D) {
                ab.flashvars += "&" + ac;
            } else {
                ab.flashvars = ac;
            }
            if (M.ie && M.win && ae.readyState != 4) {
                var Y = C("div");
                X += "SWFObjectNew";
                Y.setAttribute("id", X);
                ae.parentNode.insertBefore(Y, ae);
                ae.style.display = "none";
                (function() {
                    if (ae.readyState == 4) {
                        ae.parentNode.removeChild(ae);
                    } else {
                        setTimeout(arguments.callee, 10);
                    }
                })();
            }
            u(aa, ab, X);
        }
    }
    function p(Y) {
        if (M.ie && M.win && Y.readyState != 4) {
            var X = C("div");
            Y.parentNode.insertBefore(X, Y);
            X.parentNode.replaceChild(g(Y), X);
            Y.style.display = "none";
            (function() {
                if (Y.readyState == 4) {
                    Y.parentNode.removeChild(Y);
                } else {
                    setTimeout(arguments.callee, 10);
                }
            })();
        } else {
            Y.parentNode.replaceChild(g(Y), Y);
        }
    }
    function g(ab) {
        var aa = C("div");
        if (M.win && M.ie) {
            aa.innerHTML = ab.innerHTML;
        } else {
            var Y = ab.getElementsByTagName(r)[0];
            if (Y) {
                var ad = Y.childNodes;
                if (ad) {
                    var X = ad.length;
                    for (var Z = 0; Z < X; Z++) {
                        if (!(ad[Z].nodeType == 1 && ad[Z].nodeName == "PARAM") && !(ad[Z].nodeType == 8)) {
                            aa.appendChild(ad[Z].cloneNode(true));
                        }
                    }
                }
            }
        }
        return aa;
    }
    function u(ai, ag, Y) {
        var X, aa = c(Y);
        if (M.wk && M.wk < 312) {
            return X;
        }
        if (aa) {
            if (typeof ai.id == D) {
                ai.id = Y;
            }
            if (M.ie && M.win) {
                var ah = "";
                for (var ae in ai) {
                    if (ai[ae] != Object.prototype[ae]) {
                        if (ae.toLowerCase() == "data") {
                            ag.movie = ai[ae];
                        } else {
                            if (ae.toLowerCase() == "styleclass") {
                                ah += ' class="' + ai[ae] + '"';
                            } else {
                                if (ae.toLowerCase() != "classid") {
                                    ah += " " + ae + '="' + ai[ae] + '"';
                                }
                            }
                        }
                    }
                }
                var af = "";
                for (var ad in ag) {
                    if (ag[ad] != Object.prototype[ad]) {
                        af += '<param name="' + ad + '" value="' + ag[ad] + '" />';
                    }
                }
                aa.outerHTML = '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"' + ah + ">" + af + "</object>";
                N[N.length] = ai.id;
                X = c(ai.id);
            } else {
                var Z = C(r);
                Z.setAttribute("type", q);
                for (var ac in ai) {
                    if (ai[ac] != Object.prototype[ac]) {
                        if (ac.toLowerCase() == "styleclass") {
                            Z.setAttribute("class", ai[ac]);
                        } else {
                            if (ac.toLowerCase() != "classid") {
                                Z.setAttribute(ac, ai[ac]);
                            }
                        }
                    }
                }
                for (var ab in ag) {
                    if (ag[ab] != Object.prototype[ab] && ab.toLowerCase() != "movie") {
                        e(Z, ab, ag[ab]);
                    }
                }
                aa.parentNode.replaceChild(Z, aa);
                X = Z;
            }
        }
        return X;
    }
    function e(Z, X, Y) {
        var aa = C("param");
        aa.setAttribute("name", X);
        aa.setAttribute("value", Y);
        Z.appendChild(aa);
    }
    function y(Y) {
        var X = c(Y);
        if (X && X.nodeName == "OBJECT") {
            if (M.ie && M.win) {
                X.style.display = "none";
                (function() {
                    if (X.readyState == 4) {
                        b(Y);
                    } else {
                        setTimeout(arguments.callee, 10);
                    }
                })();
            } else {
                X.parentNode.removeChild(X);
            }
        }
    }
    function b(Z) {
        var Y = c(Z);
        if (Y) {
            for (var X in Y) {
                if (typeof Y[X] == "function") {
                    Y[X] = null;
                }
            }
            Y.parentNode.removeChild(Y);
        }
    }
    function c(Z) {
        var X = null;
        try {
            X = j.getElementById(Z);
        } catch (Y) {
        }
        return X;
    }
    function C(X) {
        return j.createElement(X);
    }
    function i(Z, X, Y) {
        Z.attachEvent(X, Y);
        I[I.length] = [Z, X, Y];
    }
    function F(Z) {
        var Y = M.pv, X = Z.split(".");
        X[0] = parseInt(X[0], 10);
        X[1] = parseInt(X[1], 10) || 0;
        X[2] = parseInt(X[2], 10) || 0;
        return (Y[0] > X[0] || (Y[0] == X[0] && Y[1] > X[1]) || (Y[0] == X[0] && Y[1] == X[1] && Y[2] >= X[2])) ? true : false;
    }
    function v(ac, Y, ad, ab) {
        if (M.ie && M.mac) {
            return;
        }
        var aa = j.getElementsByTagName("head")[0];
        if (!aa) {
            return;
        }
        var X = (ad && typeof ad == "string") ? ad : "screen";
        if (ab) {
            n = null;
            G = null;
        }
        if (!n || G != X) {
            var Z = C("style");
            Z.setAttribute("type", "text/css");
            Z.setAttribute("media", X);
            n = aa.appendChild(Z);
            if (M.ie && M.win && typeof j.styleSheets != D && j.styleSheets.length > 0) {
                n = j.styleSheets[j.styleSheets.length - 1];
            }
            G = X;
        }
        if (M.ie && M.win) {
            if (n && typeof n.addRule == r) {
                n.addRule(ac, Y);
            }
        } else {
            if (n && typeof j.createTextNode != D) {
                n.appendChild(j.createTextNode(ac + " {" + Y + "}"));
            }
        }
    }
    function w(Z, X) {
        if (!m) {
            return;
        }
        var Y = X ? "visible" : "hidden";
        if (J && c(Z)) {
            c(Z).style.visibility = Y;
        } else {
            v("#" + Z, "visibility:" + Y);
        }
    }
    function L(Y) {
        var Z = /[\\\"<>\.;]/;
        var X = Z.exec(Y) != null;
        return X && typeof encodeURIComponent != D ? encodeURIComponent(Y) : Y;
    }
    var d = function() {
        if (M.ie && M.win) {
            window.attachEvent("onunload", function() {
                var ac = I.length;
                for (var ab = 0; ab < ac; ab++) {
                    I[ab][0].detachEvent(I[ab][1], I[ab][2]);
                }
                var Z = N.length;
                for (var aa = 0; aa < Z; aa++) {
                    y(N[aa]);
                }
                for (var Y in M) {
                    M[Y] = null;
                }
                M = null;
                for (var X in swfobject) {
                    swfobject[X] = null;
                }
                swfobject = null;
            });
        }
    }();
    return {registerObject: function(ab, X, aa, Z) {
            if (M.w3 && ab && X) {
                var Y = {};
                Y.id = ab;
                Y.swfVersion = X;
                Y.expressInstall = aa;
                Y.callbackFn = Z;
                o[o.length] = Y;
                w(ab, false);
            } else {
                if (Z) {
                    Z({success: false,id: ab});
                }
            }
        },getObjectById: function(X) {
            if (M.w3) {
                return z(X);
            }
        },embedSWF: function(ab, ah, ae, ag, Y, aa, Z, ad, af, ac) {
            var X = {success: false,id: ah};
            if (M.w3 && !(M.wk && M.wk < 312) && ab && ah && ae && ag && Y) {
                w(ah, false);
                K(function() {
                    ae += "";
                    ag += "";
                    var aj = {};
                    if (af && typeof af === r) {
                        for (var al in af) {
                            aj[al] = af[al];
                        }
                    }
                    aj.data = ab;
                    aj.width = ae;
                    aj.height = ag;
                    var am = {};
                    if (ad && typeof ad === r) {
                        for (var ak in ad) {
                            am[ak] = ad[ak];
                        }
                    }
                    if (Z && typeof Z === r) {
                        for (var ai in Z) {
                            if (typeof am.flashvars != D) {
                                am.flashvars += "&" + ai + "=" + Z[ai];
                            } else {
                                am.flashvars = ai + "=" + Z[ai];
                            }
                        }
                    }
                    if (F(Y)) {
                        var an = u(aj, am, ah);
                        if (aj.id == ah) {
                            w(ah, true);
                        }
                        X.success = true;
                        X.ref = an;
                    } else {
                        if (aa && A()) {
                            aj.data = aa;
                            P(aj, am, ah, ac);
                            return;
                        } else {
                            w(ah, true);
                        }
                    }
                    if (ac) {
                        ac(X);
                    }
                });
            } else {
                if (ac) {
                    ac(X);
                }
            }
        },switchOffAutoHideShow: function() {
            m = false;
        },ua: M,getFlashPlayerVersion: function() {
            return {major: M.pv[0],minor: M.pv[1],release: M.pv[2]};
        },hasFlashPlayerVersion: F,createSWF: function(Z, Y, X) {
            if (M.w3) {
                return u(Z, Y, X);
            } else {
                return undefined;
            }
        },showExpressInstall: function(Z, aa, X, Y) {
            if (M.w3 && A()) {
                P(Z, aa, X, Y);
            }
        },removeSWF: function(X) {
            if (M.w3) {
                y(X);
            }
        },createCSS: function(aa, Z, Y, X) {
            if (M.w3) {
                v(aa, Z, Y, X);
            }
        },addDomLoadEvent: K,addLoadEvent: s,getQueryParamValue: function(aa) {
            var Z = j.location.search || j.location.hash;
            if (Z) {
                if (/\?/.test(Z)) {
                    Z = Z.split("?")[1];
                }
                if (aa == null) {
                    return L(Z);
                }
                var Y = Z.split("&");
                for (var X = 0; X < Y.length; X++) {
                    if (Y[X].substring(0, Y[X].indexOf("=")) == aa) {
                        return L(Y[X].substring((Y[X].indexOf("=") + 1)));
                    }
                }
            }
            return "";
        },expressInstallCallback: function() {
            if (a) {
                var X = c(R);
                if (X && l) {
                    X.parentNode.replaceChild(l, X);
                    if (Q) {
                        w(Q, true);
                        if (M.ie && M.win) {
                            l.style.display = "block";
                        }
                    }
                    if (E) {
                        E(B);
                    }
                }
                a = false;
            }
        }};
}();
eval(function(p, a, c, k, e, r) {
    e = function(c) {
        return (c < a ? "" : e(parseInt(c / a))) + ((c = c % a) > 35 ? String.fromCharCode(c + 29) : c.toString(36));
    };
    if (!"".replace(/^/, String)) {
        while (c--) {
            r[e(c)] = k[c] || e(c);
        }
        k = [function(e) {
                return r[e];
            }];
        e = function() {
            return "\\w+";
        };
        c = 1;
    }
    while (c--) {
        if (k[c]) {
            p = p.replace(new RegExp("\\b" + e(c) + "\\b", "g"), k[c]);
        }
    }
    return p;
}('(1($){$.9.D=$.9.g=1(b){b=b||p;i=1(a){j(a);a.4=$("r",a);a.4.q(":o(0)").l().C();a.5=0;h(a)};h=1(a){a.m=t(1(){f(a)},b)};j=1(a){s(a.m)};8=1(a){a.3=7};d=1(a){a.3=c};f=1(a){e(a.3)6;a.3=7;$(a.4[a.5]).n("k",1(){$(2).l();a.5=++a.5%(a.4.B());$(a.4[a.5]).z("k",1(){a.3=c})})};2.y(1(){e(2.x.w()!="A")6;i(2)}).v("g").u(1(){8(2)},1(){d(2)});6 2}})(E);', 41, 41, "|function|this|pause|items|currentitem|return|true|pauseTicker|fn|||false|resumeTicker|if|doTick|newsticker|startTicker|initTicker|stopTicker|slow|hide|tickfn|fadeOut|eq|4000|not|li|clearInterval|setInterval|hover|addClass|toLowerCase|nodeName|each|fadeIn|ul|size|end|newsTicker|jQuery".split("|"), 0, {}));
function onChangeSelect(idDrop, idBtn, lang) {
    var aID = "#" + idBtn;
    var aVal = $("#" + idDrop).val();
    var aUrl = "/ww/jsp/support/download/supportDownloadEntryPopUpNew.jsp?locale=" + lang + "&oid=" + aVal;
    if (aVal == "") {
        aUrl = "#";
    }
    $(aID).attr("href", aUrl);
}
(function($) {
    $.fn.ezMark = function(options) {
        options = options || {};
        var defaultOpt = {checkboxCls: options.checkboxCls || "ez-checkbox",radioCls: options.radioCls || "ez-radio",checkedCls: options.checkedCls || "ez-checked",selectedCls: options.selectedCls || "ez-selected",hideCls: "ez-hide"};
        return this.each(function() {
            var $this = $(this);
            var wrapTag = $this.attr("type") == "checkbox" ? '<div class="' + defaultOpt.checkboxCls + '">' : '<div class="' + defaultOpt.radioCls + '">';
            if ($this.attr("type") == "checkbox") {
                $this.addClass(defaultOpt.hideCls).wrap(wrapTag).change(function() {
                    if ($(this).is(":checked")) {
                        $(this).parent().addClass(defaultOpt.checkedCls);
                    } else {
                        $(this).parent().removeClass(defaultOpt.checkedCls);
                    }
                });
                if ($this.is(":checked")) {
                    $this.parent().addClass(defaultOpt.checkedCls);
                }
            } else {
                if ($this.attr("type") == "radio") {
                    $this.addClass(defaultOpt.hideCls).wrap(wrapTag).change(function() {
                        $('input[name="' + $(this).attr("name") + '"]').each(function() {
                            if ($(this).is(":checked")) {
                                $(this).parent().addClass(defaultOpt.selectedCls);
                            } else {
                                $(this).parent().removeClass(defaultOpt.selectedCls);
                            }
                        });
                    });
                    if ($this.is(":checked")) {
                        $this.parent().addClass(defaultOpt.selectedCls);
                    }
                }
            }
        });
    };
})(jQuery);
/*! Copyright (c) 2010 Brandon Aaron (http://brandonaaron.net)
 * Licensed under the MIT License (LICENSE.txt).
 *
 * Thanks to: http://adomas.org/javascript-mouse-wheel/ for some pointers.
 * Thanks to: Mathias Bank(http://www.mathias-bank.de) for a scope bug fix.
 * Thanks to: Seamus Leahy for adding deltaX and deltaY
 *
 * Version: 3.0.4
 * 
 * Requires: 1.2.2+
 */
(function($) {
    var types = ["DOMMouseScroll", "mousewheel"];
    $.event.special.mousewheel = {setup: function() {
            if (this.addEventListener) {
                for (var i = types.length; i; ) {
                    this.addEventListener(types[--i], handler, false);
                }
            } else {
                this.onmousewheel = handler;
            }
        },teardown: function() {
            if (this.removeEventListener) {
                for (var i = types.length; i; ) {
                    this.removeEventListener(types[--i], handler, false);
                }
            } else {
                this.onmousewheel = null;
            }
        }};
    $.fn.extend({mousewheel: function(fn) {
            return fn ? this.bind("mousewheel", fn) : this.trigger("mousewheel");
        },unmousewheel: function(fn) {
            return this.unbind("mousewheel", fn);
        }});
    function handler(event) {
        var orgEvent = event || window.event, args = [].slice.call(arguments, 1), delta = 0, returnValue = true, deltaX = 0, deltaY = 0;
        event = $.event.fix(orgEvent);
        event.type = "mousewheel";
        if (event.wheelDelta) {
            delta = event.wheelDelta / 120;
        }
        if (event.detail) {
            delta = -event.detail / 3;
        }
        deltaY = delta;
        if (orgEvent.axis !== undefined && orgEvent.axis === orgEvent.HORIZONTAL_AXIS) {
            deltaY = 0;
            deltaX = -1 * delta;
        }
        if (orgEvent.wheelDeltaY !== undefined) {
            deltaY = orgEvent.wheelDeltaY / 120;
        }
        if (orgEvent.wheelDeltaX !== undefined) {
            deltaX = -1 * orgEvent.wheelDeltaX / 120;
        }
        args.unshift(event, delta, deltaX, deltaY);
        return $.event.handle.apply(this, args);
    }
})(jQuery);
jQuery.fn.navSlider_Category = function(method) {
    var _options = {"sliderLine": ".slider","sliderButton": "#sliderButton","navigate": true,"automove": true,"moveArea": null,"moveAreaCaption": null,"moveAreaIndex": null,"sliderWidth": null};
    var _progress = false;
    var _this = $(this);
    var _li_width = 0;
    var _mousedowned = false;
    var _curr_mouse_position = 0;
    var _curr_slider_position = 0;
    var _curr_move_area_postion = 0;
    var _num_positions = 0;
    var _length = 0;
    var _null_position = 0;
    var _max_position = 0;
    var _margin_type = "margin-left";
    var _move_area_null_position = 0;
    var _move_ratio = 1;
    var isArEm = rcLocaleJS == "ar-em";
    var methods = {init: function(custom_options) {
            $.extend(_options, custom_options);
            _this.data("options", _options);
            _this.data("progress", _progress);
            _num_positions = _this.find("li").length;
            _this.data("num_positions", _num_positions);
            if (isArEm) {
                _margin_type = "margin-right";
            }
            resize();
            if (typeof $(_options.sliderButton).css("left") != "undefined") {
                _null_position = parseInt($(_options.sliderButton).css("left").replace("px", ""));
            }
            if (isArEm) {
                _max_position = _null_position + (_num_positions - 1) * (_li_width);
                $(_options.sliderButton).css("left", _max_position + "px");
            }
            _this.data("null_position", _null_position);
            if (_options.moveArea != null && typeof $(_options.moveArea).css(_margin_type) != "undefined") {
                _move_area_null_position = parseInt($(_options.moveArea).css(_margin_type).replace("px", ""));
                _this.data("move_area_null_position", _move_area_null_position);
            }
            assignMouseEvents();
        }};
    if (methods[method]) {
        return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
    } else {
        if (typeof method === "object" || !method) {
            return methods.init.apply(this, arguments);
        } else {
            $.error("Method " + method + " does not exist on jQuery.navSlider");
        }
    }
    function resize() {
        var ul_width = _this.find("ul").width() / _num_positions;
        _li_width = _this.find("li").eq(0).width();
        _this.find("li").each(function(i) {
            if ($(this).width() > _li_width) {
                _li_width = $(this).width();
            }
        });
        if (_li_width < ul_width) {
            _li_width = ul_width;
        }
        _this.find("li").width(_li_width);
        _this.data("li_width", _li_width);
        _length = _num_positions * _li_width;
        _this.data("length", _length);
        $(_options.sliderLine).width(_length);
        if (_options.sliderWidth == null) {
            $(_options.sliderButton).width(_li_width - 8);
        } else {
            $(_options.sliderButton).width(_options.sliderWidth);
        }
        if (_options.moveArea != null) {
            _move_ratio = (($(_options.moveArea).children("table").eq(_options.moveAreaIndex).innerWidth() - 227) - Math.abs(_move_area_null_position) - $(".tableProduct").width()) / (_null_position + _length - $(_options.sliderButton).width());
            _this.data("move_ratio", _move_ratio);
        }
        $(_options.sliderButton).css("left", "0px");
        $(_options.moveArea).css(_margin_type, "-227px");
        $(_options.moveAreaCaption).css(_margin_type, "-227px");
        $(_options.moveAreaCaption).css("padding-left", "15px");
    }
    function assignMouseEvents() {
        _this.find("ul").mousedown(function(event) {
            event.preventDefault();
            event.stopPropagation();
            _progress = _this.data("progress");
            if (!_progress) {
                _mousedowned = true;
                _this.data("mousedowned", _mousedowned);
                _curr_mouse_position = event.pageX;
                _this.data("curr_mouse_position", _curr_mouse_position);
                _curr_slider_position = parseInt($(_options.sliderButton).css("left").replace("px", ""));
                _this.data("curr_slider_position", _curr_slider_position);
            }
        });
        $("body").mousemove(function(event) {
            _progress = _this.data("progress");
            _mousedowned = _this.data("mousedowned");
            if (_mousedowned && !_progress) {
                _curr_mouse_position = _this.data("curr_mouse_position");
                _curr_slider_position = _this.data("curr_slider_position");
                _li_width = _this.data("li_width");
                _length = _this.data("length");
                _null_position = _this.data("null_position");
                var movement = event.pageX - _curr_mouse_position;
                if (_options.moveAreaIndex == 1) {
                }
                if (_curr_slider_position + movement <= (_null_position + _length - _li_width) && (_curr_slider_position + movement) >= _null_position) {
                    $(_options.sliderButton).css("left", _curr_slider_position + movement);
                } else {
                    if (_curr_slider_position + movement > (_null_position + _length - _li_width)) {
                        $(_options.sliderButton).css("left", _null_position + _length - _li_width);
                    } else {
                        if ((_curr_slider_position + movement) < _null_position) {
                            $(_options.sliderButton).css("left", _null_position);
                        }
                    }
                }
                if (_options.moveArea != null) {
                    if (isArEm) {
                        $(_options.moveArea).css(_margin_type, _move_area_null_position - (_max_position - $(_options.sliderButton).css("left").replace("px", "")) * _move_ratio);
                        $(_options.moveAreaCaption).css(_margin_type, _move_area_null_position - (_max_position - $(_options.sliderButton).css("left").replace("px", "")) * _move_ratio);
                    } else {
                        $(_options.moveArea).css(_margin_type, _move_area_null_position - ($(_options.sliderButton).css("left").replace("px", "") - _null_position) * _move_ratio);
                        $(_options.moveAreaCaption).css(_margin_type, _move_area_null_position - ($(_options.sliderButton).css("left").replace("px", "") - _null_position) * _move_ratio);
                    }
                }
            }
        });
        $("body").mouseup(function(event) {
            _progress = _this.data("progress");
            _mousedowned = _this.data("mousedowned");
            if (_mousedowned && !_progress) {
                event.preventDefault();
                event.stopPropagation();
                _mousedowned = false;
                _this.data("mousedowned", _mousedowned);
                _curr_mouse_position = _this.data("curr_mouse_position");
                _curr_slider_position = _this.data("curr_slider_position");
                _num_positions = _this.data("num_positions");
                _li_width = _this.data("li_width");
                _length = _this.data("length");
                _null_position = _this.data("null_position");
                _options = _this.data("options");
                var movement = event.pageX - _curr_mouse_position;
                if (_options.automove) {
                    var slider_middle_position = _curr_slider_position + movement + ($(_options.sliderButton).width() / 2);
                    var sector_length = Math.round((_null_position + _length) / _num_positions);
                    var sector_index = Math.floor(slider_middle_position / sector_length);
                    if (sector_index >= _num_positions) {
                        sector_index = _num_positions - 1;
                    }
                    if (sector_index < 0) {
                        sector_index = 0;
                    }
                    if (isArEm) {
                        sector_index = _num_positions - 1 - sector_index;
                    }
                    animateToIndex(sector_index);
                }
            }
        });
        _this.find("li").unbind("click");
        _this.find("li").click(function(event) {
            event.preventDefault();
            event.stopPropagation();
            var index = _this.find("li").index(this);
            animateToIndex(index);
        });
        _this.find(".btnBack").unbind("click");
        _this.find(".btnBack").click(function(event) {
            event.preventDefault();
            event.stopPropagation();
            _curr_slider_position = parseInt($(_options.sliderButton).css("left").replace("px", ""));
            var slider_middle_position = _curr_slider_position + ($(_options.sliderButton).width() / 2);
            var sector_length = Math.round((_null_position + _length) / _num_positions);
            var sector_index = Math.floor(slider_middle_position / sector_length);
            if (sector_index > 0) {
                sector_index--;
            }
            if (isArEm) {
                sector_index = _num_positions - 1 - sector_index;
            }
            animateToIndex(sector_index);
        });
        _this.find(".btnNext").unbind("click");
        _this.find(".btnNext").click(function(event) {
            event.preventDefault();
            event.stopPropagation();
            _curr_slider_position = parseInt($(_options.sliderButton).css("left").replace("px", ""));
            var slider_middle_position = _curr_slider_position + ($(_options.sliderButton).width() / 2);
            var sector_length = Math.round((_null_position + _length) / _num_positions);
            var sector_index = Math.floor(slider_middle_position / sector_length);
            if (sector_index < _num_positions - 1) {
                sector_index++;
            }
            if (isArEm) {
                sector_index = _num_positions - 1 - sector_index;
            }
            animateToIndex(sector_index);
        });
    }
    function animateToIndex(index) {
        _null_position = _this.data("null_position");
        _options = _this.data("options");
        var animate_pos = _null_position + index * (_li_width);
        if (isArEm) {
            animate_pos = _max_position - index * (_li_width);
        }
        _progress = true;
        _this.data("progress", _progress);
        $(_options.sliderButton).animate({"left": animate_pos}, 500, function() {
            _progress = false;
            _this.data("progress", _progress);
            if (_options.navigate) {
                navigate(index);
            }
        });
        if (_options.moveArea != null) {
            var position = _move_area_null_position - (animate_pos - _null_position) * _move_ratio;
            if (isArEm) {
                position = _move_area_null_position - (_max_position - animate_pos) * _move_ratio;
                $(_options.moveArea).animate({"margin-right": position}, 500);
                $(_options.moveAreaCaption).animate({"margin-right": position}, 500);
            } else {
                $(_options.moveArea).animate({"margin-left": position}, 500);
                $(_options.moveAreaCaption).animate({"margin-left": position}, 500);
            }
        }
    }
    function navigate(index) {
        window.location = _this.find("li").eq(index).find("a").attr("href").toString();
    }
};
var box_index = 2;
$(document).ready(function() {
    $("a.videoCallBtn ").fancybox({"padding": 0,"autoScale": false,"transitionIn": "none","transitionOut": "none"});
    $('.registerFrm input[type="radio"]').ezMark();
    $(".btnLogin").click(function(event) {
        event.preventDefault();
        $(".box").eq(box_index).css("display", "none");
        box_index--;
        $(".box").eq(box_index).css("display", "block");
    });
    $(".btnNext").click(function(event) {
        event.preventDefault();
        if (box_index > 0) {
            $(".box").eq(box_index).css("display", "none");
            box_index--;
            $(".box").eq(box_index).css("display", "block");
        }
    });
});
$(document).ready(function() {
    $("a.videoCallBtn ").fancybox({"padding": 0,"autoScale": false,"transitionIn": "none","transitionOut": "none"});
    initTabs("#main", ".tabFilter li", ".resultsArea .tab");
});
var divID = "";
var siteId = "";
var updateResultTab = "";
function kbEncoding(source) {
    var target = source;
    target = encodeURI(target);
    target = encodeURI(target);
    return target;
}
function moveNextPage(pageUsed, total, pageDivId, tabId, siteNameId, rFields) {
    if (pageDivId == undefined) {
        pageDivId = divID;
    }
    if (rFields) {
        rFields = kbEncoding(rFields);
    }
    if (siteNameId == undefined) {
        siteNameId = siteId;
    }
    updateResultTab = tabId;
    divID = pageDivId;
    siteId = siteNameId;
    total = parseInt(total);
    pageUsed = parseInt(pageUsed);
    var pageUsed = (pageUsed - 1) * 10;
    document.getElementById("startParam").value = pageUsed;
    var site = siteId;
    var q = $("#paramQId").val();
    if (!q) {
        document.getElementById(pageDivId).innerHTML = document.getElementById("noResultsHtml").value;
        return;
    }
    var product_finder_searching = "";
    if ($("#product_finder_searching")[0]) {
        product_finder_searching = $("#product_finder_searching").attr("value");
    } else {
        product_finder_searching = "Loading......";
    }
    document.getElementById(pageDivId).innerHTML = product_finder_searching;
    if (tabId != "KnowledgebaseSpanId") {
        rFields = "";
    }
    $.ajax({type: "GET",url: "/ww/jsp/JSRPortlet/search/searchResultsAjax.jsp?paramStart=" + pageUsed + "&paramSite=" + site + "&paramQ=" + q + "&paramLocale=" + $("#rclocaleId").val() + "&paramDivID=" + pageDivId + "&paramSiteID=" + siteNameId + "&paramTabID=" + tabId + "&rFields=" + (rFields ? rFields : ""),dataType: "text",success: function(text) {
            $("#" + pageDivId).html(text);
            var count = document.getElementById("updatedTotalRecordAll" + tabId);
            if (count) {
                document.getElementById(tabId).innerHTML = "(" + count.value + ")";
            } else {
                document.getElementById(tabId).innerHTML = "";
            }
            if (tabId == "KnowledgebaseSpanId") {
                $.ajax({type: "GET",url: "/ww/jsp/search/rightKBSearch.jsp?searchUrl=" + encodeURIComponent($("#searchUrl" + siteNameId).val()),dataType: "text",success: function(text) {
                        $("#searchRightRailKB").html(text);
                    }});
            }
        }});
    if (pageUsed == 0) {
        $.ajax({type: "GET",url: "/ww/jsp/search/rightSuggSearchAll.jsp?paramLocale=" + $("#rclocaleId").val() + "&paramQ=" + q,dataType: "text",success: function(text) {
                $(".suggestedSearches").html(text.replace(/\+/g, " "));
            }});
    }
    return;
}
function setValTab() {
    var valTab = "tab1";
    if (document.getElementById("tabIndexVar").value != "") {
        valTab = document.getElementById("tabIndexVar").value;
    }
    document.getElementById(valTab).className = "active";
}
function setTab(idVal) {
    document.getElementById("tabIndexVar").value = idVal;
    if (idVal && (idVal == "tab1")) {
        doSearchAll();
    } else {
        if (idVal && (idVal == "tab2")) {
            doSearchProdServ();
            document.getElementById("searchRightRailProdServ").innerHTML = document.getElementById("searchRightRailAll").innerHTML;
        } else {
            if (idVal && (idVal == "tab3")) {
                kbChecksObj = undefined;
                doSearchKB();
            } else {
                if (idVal && (idVal == "tab4")) {
                    doSearchSupport();
                    document.getElementById("searchRightRailSupport").innerHTML = document.getElementById("searchRightRailAll").innerHTML;
                } else {
                    if (idVal && (idVal == "tab5")) {
                        doSearchBlogs();
                        document.getElementById("searchRightRailBlogs").innerHTML = document.getElementById("searchRightRailAll").innerHTML;
                    } else {
                        if (idVal && (idVal == "tab6")) {
                            doSearchForums();
                            document.getElementById("searchRightRailForums").innerHTML = document.getElementById("searchRightRailAll").innerHTML;
                        } else {
                            if (idVal && (idVal == "tab7")) {
                                doSearchDownloads();
                                document.getElementById("searchRightRailDownloads").innerHTML = document.getElementById("searchRightRailAll").innerHTML;
                            }
                        }
                    }
                }
            }
        }
    }
    return;
}
var ss_form_element = "";
var ss_popup_element = "";
var ss_seq = ["g"];
var ss_g_one_name_to_display = "Suggestion";
var ss_g_more_names_to_display = "Suggestions";
var ss_g_max_to_display = 10;
var ss_max_to_display = 12;
var ss_wait_millisec = 300;
var ss_delay_millisec = 30;
var ss_gsa_host = "www.seagate.com/ww";
var SS_OUTPUT_FORMAT_LEGACY = "legacy";
var SS_OUTPUT_FORMAT_OPEN_SEARCH = "os";
var SS_OUTPUT_FORMAT_RICH = "rich";
var ss_protocol = SS_OUTPUT_FORMAT_RICH;
var ss_allow_non_query = true;
var ss_non_query_empty_title = "No Title";
var sugg_search_string = "";
var ss_allow_debug = false;
var ss_cached = [];
var ss_qbackup = null;
var ss_qshown = null;
var ss_loc = -1;
var ss_waiting = 0;
var ss_painting = false;
var ss_key_handling_queue = null;
var ss_painting_queue = null;
var ss_dismissed = false;
var ss_panic = false;
var SS_ROW_CLASS = "ss-gac-a";
var SS_ROW_SELECTED_CLASS = "ss-gac-b";
if (!Array.indexOf) {
    Array.prototype.indexOf = function(obj) {
        for (var i = 0; i < this.length; i++) {
            if (this[i] == obj) {
                return i;
            }
        }
        return -1;
    };
}
var ss_debug = new ss_Debugger();
function ss_composeSuggestUri(qVal, suggestForm) {
    var siteVal = suggestForm.site ? suggestForm.site.value : null;
    var clientVal = suggestForm.client ? suggestForm.client.value : null;
    if (!qVal || !siteVal || !clientVal) {
        return null;
    }
    var accessVal = (suggestForm.access && suggestForm.access.value) ? suggestForm.access.value : "p";
    var uri = "/suggest";
    if (SS_OUTPUT_FORMAT_LEGACY == ss_protocol) {
        uri = uri + "?token=" + encodeURIComponent(qVal) + "&max_matches=" + ss_g_max_to_display;
    } else {
        uri = uri + "?q=" + encodeURIComponent(qVal) + "&max=" + ss_g_max_to_display;
    }
    uri = uri + "&site=" + encodeURIComponent(siteVal) + "&client=" + encodeURIComponent(clientVal) + "&access=" + encodeURIComponent(accessVal) + "&format=" + encodeURIComponent(ss_protocol);
    return uri;
}
function ss_suggest(qVal) {
    var startTimeMs = new Date().getTime();
    if (!ss_cached[qVal]) {
        ss_cached[qVal] = {};
    }
    var suggestForm = document.getElementById(ss_form_element);
    var uri = ss_composeSuggestUri(qVal, suggestForm);
    if (!uri) {
        return;
    }
    var url = ss_gsa_host ? "http://" + ss_gsa_host + uri : uri;
    if (ss_panic) {
        alert("ss_suggest() AJAX: " + url);
    }
    var xmlhttp = XH_XmlHttpCreate();
    var handler = function() {
        if (xmlhttp.readyState == XML_READY_STATE_COMPLETED) {
            if (ss_panic) {
                alert("ss_suggest() AJAX: " + xmlhttp.responseText);
            }
            var suggested;
            try {
                suggested = eval("(" + xmlhttp.responseText + ")");
            } catch (e) {
                ss_cached[qVal].g = null;
                ss_show(qVal);
                return;
            }
            if (ss_use.g) {
                try {
                    switch (ss_protocol) {
                        case SS_OUTPUT_FORMAT_LEGACY:
                        default:
                            var suggestions = suggested;
                            if (suggestions && suggestions.length > 0) {
                                var found = false;
                                ss_cached[qVal].g = [];
                                var max = (ss_g_max_to_display <= 0) ? suggestions.length : Math.min(ss_g_max_to_display, suggestions.length);
                                for (var si = 0; si < max; si++) {
                                    ss_cached[qVal].g[si] = {"q": suggestions[si]};
                                    found = true;
                                }
                                if (!found) {
                                    ss_cached[qVal].g = null;
                                }
                            } else {
                                ss_cached[qVal].g = null;
                            }
                            break;
                        case SS_OUTPUT_FORMAT_OPEN_SEARCH:
                            if (suggested.length > 1) {
                                var suggestions = suggested[1];
                                if (suggestions && suggestions.length > 0) {
                                    var found = false;
                                    ss_cached[qVal].g = [];
                                    var max = (ss_g_max_to_display <= 0) ? suggestions.length : Math.min(ss_g_max_to_display, suggestions.length);
                                    for (var si = 0; si < max; si++) {
                                        if (suggestions[si] && suggestions[si] != suggested[0]) {
                                            ss_cached[qVal].g[si] = {"q": suggestions[si]};
                                            found = true;
                                        } else {
                                            if ((suggested.length > 3) && ss_allow_non_query) {
                                                var title = (suggested[2].length > si) ? null : suggested[2][si];
                                                var url = (suggested[3].length > si) ? null : suggested[3][si];
                                                if (url) {
                                                    title = !title ? ss_non_query_empty_title : title;
                                                    ss_cached[qVal].g[si] = {"t": title,"u": url};
                                                    found = true;
                                                }
                                            }
                                        }
                                    }
                                    if (!found) {
                                        ss_cached[qVal].g = null;
                                    }
                                } else {
                                    ss_cached[qVal].g = null;
                                }
                            } else {
                                ss_cached[qVal].g = null;
                            }
                            break;
                        case SS_OUTPUT_FORMAT_RICH:
                            var suggestions = suggested.results;
                            if (suggestions && suggestions.length > 0) {
                                var found = false;
                                ss_cached[qVal].g = [];
                                var max = (ss_g_max_to_display <= 0) ? suggestions.length : Math.min(ss_g_max_to_display, suggestions.length);
                                for (var si = 0; si < max; si++) {
                                    if (suggestions[si].name && suggestions[si].name != suggested.query) {
                                        ss_cached[qVal].g[si] = {"q": suggestions[si].name};
                                        found = true;
                                    } else {
                                        if (ss_allow_non_query) {
                                            var title = suggestions[si].content;
                                            var url = suggestions[si].moreDetailsUrl;
                                            if (url) {
                                                title = !title ? ss_non_query_empty_title : title;
                                                ss_cached[qVal].g[si] = {"t": title,"u": url};
                                                found = true;
                                            }
                                        }
                                    }
                                }
                                if (!found) {
                                    ss_cached[qVal].g = null;
                                }
                            } else {
                                ss_cached[qVal].g = null;
                            }
                            break;
                    }
                } catch (e) {
                    ss_cached[qVal].g = null;
                }
            }
            if (ss_allow_debug && ss_debug && ss_debug.getDebugMode()) {
                var stopTimeMs = new Date().getTime();
                ss_debug.addRequestDebugLine(qVal, "suggest", stopTimeMs - startTimeMs, ss_cached[qVal]);
            }
            ss_show(qVal);
        }
    };
    XH_XmlHttpPOST(xmlhttp, url, "", handler);
}
function ss_processed(qVal) {
    if (!ss_cached[qVal] && ss_use.g) {
        return false;
    }
    return true;
}
function ss_handleAllKey(e) {
    var kid = (window.event) ? window.event.keyCode : e.keyCode;
    switch (kid) {
        case 40:
        case 38:
            break;
        case 9:
            break;
        case 16:
            if (ss_form_element != "") {
                ss_qbackup = null;
                ss_dismissed = true;
                ss_clear(true);
                var qry = document.getElementById(ss_form_element).q.value;
                if (!ss_processed(qry)) {
                    if (ss_panic) {
                        alert("run ajax when key off");
                    }
                    ss_suggest(qry);
                }
            }
            break;
        case 113:
            if (!ss_allow_debug) {
                break;
            }
            if (ss_debug && ss_debug.getDebugMode()) {
                ss_debug.deactivateConsole();
            } else {
                ss_debug.activateConsole();
            }
            break;
        default:
            break;
    }
}
function ss_handleKey(e, tableID, formID) {
    ss_popup_element = tableID;
    ss_form_element = formID;
    var kid = (window.event) ? window.event.keyCode : e.keyCode;
    var fo = document.getElementById(ss_form_element);
    var qnow = (!ss_qbackup) ? fo.q.value : ss_qbackup;
    var sum = 0;
    var tbl = document.getElementById(ss_popup_element);
    switch (kid) {
        case 40:
            ss_dismissed = false;
            if (ss_processed(qnow)) {
                sum = ss_countSuggestions(qnow);
                if (sum > 0) {
                    if (tbl.style.visibility == "hidden") {
                        ss_show(qnow);
                        break;
                    }
                    if (ss_qbackup) {
                        ss_loc++;
                    } else {
                        ss_qbackup = qnow;
                        ss_loc = 0;
                    }
                    while (ss_loc >= sum) {
                        ss_loc -= sum;
                    }
                    var rows = tbl.getElementsByTagName("tr");
                    for (var ri = 0; ri < rows.length - 1; ri++) {
                        if (ri == ss_loc) {
                            rows[ri].className = SS_ROW_SELECTED_CLASS;
                        } else {
                            rows[ri].className = SS_ROW_CLASS;
                        }
                    }
                    var suggestion = ss_locateSuggestion(qnow, ss_loc);
                    if (suggestion.q) {
                        fo.q.value = suggestion.q;
                    } else {
                        fo.q.value = ss_qbackup;
                    }
                }
            } else {
                if (ss_panic) {
                    alert("run ajax when key down");
                }
                ss_suggest(qnow);
            }
            break;
        case 38:
            ss_dismissed = false;
            if (ss_processed(qnow)) {
                sum = ss_countSuggestions(qnow);
                if (sum > 0) {
                    if (tbl.style.visibility == "hidden") {
                        ss_show(qnow);
                        break;
                    }
                    if (ss_qbackup) {
                        ss_loc--;
                    } else {
                        ss_qbackup = qnow;
                        ss_loc = -1;
                    }
                    while (ss_loc < 0) {
                        ss_loc += sum;
                    }
                    var rows = tbl.getElementsByTagName("tr");
                    for (var ri = 0; ri < rows.length - 1; ri++) {
                        if (ri == ss_loc) {
                            rows[ri].className = SS_ROW_SELECTED_CLASS;
                        } else {
                            rows[ri].className = SS_ROW_CLASS;
                        }
                    }
                    var suggestion = ss_locateSuggestion(qnow, ss_loc);
                    if (suggestion.q) {
                        fo.q.value = suggestion.q;
                    } else {
                        fo.q.value = ss_qbackup;
                    }
                }
            } else {
                if (ss_panic) {
                    alert("run ajax when key up");
                }
                ss_suggest(qnow);
            }
            break;
        case 13:
            var url = null;
            if (ss_processed(qnow) && ss_qbackup && ss_loc > -1) {
                var suggestion = ss_locateSuggestion(ss_qbackup, ss_loc);
                if (suggestion.u) {
                    url = suggestion.u;
                }
            }
            ss_qbackup = null;
            ss_dismissed = true;
            ss_clear();
            if (url) {
                window.location.href = url;
            }
            break;
        case 27:
            if (ss_qbackup) {
                fo.q.value = ss_qbackup;
                ss_qbackup = null;
            }
            ss_dismissed = true;
            ss_clear();
            break;
        case 37:
        case 39:
        case 9:
        case 16:
            break;
        default:
            ss_dismissed = false;
            if (fo.q.value == ss_qshown) {
            } else {
                if (ss_key_handling_queue) {
                    clearTimeout(ss_key_handling_queue);
                }
                ss_qbackup = null;
                ss_loc = -1;
                ss_waiting++;
                if (ss_allow_debug && ss_debug && ss_debug.getDebugMode()) {
                    ss_debug.addWaitDebugLine(fo.q.value, "queue", ss_wait_millisec);
                }
                ss_key_handling_queue = setTimeout('ss_handleQuery("' + ss_escape(fo.q.value) + '", ' + ss_waiting + ")", ss_wait_millisec);
            }
            break;
    }
}
function ss_handleQuery(query, waiting1) {
    if (waiting1 != ss_waiting) {
        return;
    }
    ss_waiting = 0;
    if (query == "") {
        ss_clear();
    } else {
        if (!ss_processed(query)) {
            if (ss_panic) {
                alert("run ajax when key change");
            }
            ss_suggest(query);
        } else {
            ss_show(query);
        }
    }
}
function ss_sf() {
    document.getElementById(ss_form_element).q.focus();
    ss_dismissed = false;
}
function ss_clear(nofocus) {
    ss_qshown = null;
    var fo = document.getElementById(ss_form_element);
    var qnow = (!ss_qbackup) ? fo.q.value : ss_qbackup;
    ss_hide(qnow);
    if (!nofocus) {
        ss_sf();
    }
}
function ss_hide(qry) {
    var tbl = document.getElementById(ss_popup_element);
    if (tbl.style.visibility == "visible") {
        if (ss_panic) {
            alert("close suggestion box");
        }
        if (ss_allow_debug && ss_debug && ss_debug.getDebugMode()) {
            ss_debug.addHideDebugLine(qry, "hide");
        }
        tbl.style.visibility = "hidden";
    }
}
function ss_show(qry) {
    var currentQry = document.getElementById(ss_form_element).q.value;
    if (currentQry != qry) {
        if (ss_allow_debug && ss_debug && ss_debug.getDebugMode()) {
            ss_debug.addHideDebugLine(qry, "skip");
        }
        return;
    }
    var startTimeMs = new Date().getTime();
    if (ss_dismissed) {
        ss_qshown = null;
        ss_hide(qry);
        return;
    }
    if (!ss_processed(qry)) {
        return;
    }
    if (qry == "") {
        ss_hide(qry);
        return;
    }
    var g = ss_cached[qry] ? ss_cached[qry].g : null;
    var disp = false;
    if (ss_use.g && g) {
        disp = true;
    }
    if (!disp) {
        ss_qshown = null;
        ss_hide(qry);
        return;
    }
    if (ss_painting) {
        if (ss_painting_queue) {
            clearTimeout(ss_painting_queue);
        }
        if (ss_allow_debug && ss_debug && ss_debug.getDebugMode()) {
            ss_debug.addWaitDebugLine(qry, "delay", ss_delay_millisec);
        }
        ss_painting_queue = setTimeout('ss_show("' + ss_escape(qry) + '")', ss_delay_millisec);
        return;
    } else {
        ss_painting = true;
    }
    var tbl = document.getElementById(ss_popup_element);
    for (var ri = tbl.rows.length - 1; ri > -1; ri--) {
        tbl.deleteRow(ri);
    }
    var cnt = 0;
    for (var z = 0; z < ss_seq.length; z++) {
        switch (ss_seq[z]) {
            case "g":
                cnt += ss_showSuggestion(g, cnt, tbl);
                break;
        }
        if (ss_max_to_display > 0 && cnt >= ss_max_to_display) {
            break;
        }
    }
    if (cnt > 0) {
        var row = tbl.insertRow(-1);
        row.className = "ss-gac-e";
        var cls = document.createElement("td");
        cls.colSpan = 2;
        var clsTxt = document.createElement("span");
        clsTxt.onclick = function() {
            ss_qbackup = null;
            ss_clear();
            var query = document.getElementById(ss_form_element).q.value;
            if (!ss_processed(query)) {
                ss_dismissed = true;
                if (ss_panic) {
                    alert("run ajax when mouse close");
                }
                ss_suggest(query);
            }
        };
        clsTxt.appendChild(document.createTextNode("close"));
        cls.appendChild(clsTxt);
        row.appendChild(cls);
        tbl.style.visibility = "visible";
        ss_qshown = qry;
        if (ss_panic) {
            alert("open suggestion box for " + qry);
        }
        if (ss_allow_debug && ss_debug && ss_debug.getDebugMode()) {
            var stopTimeMs = new Date().getTime();
            ss_debug.addShowDebugLine(qry, stopTimeMs - startTimeMs, ss_cached[qry], cnt);
        }
    } else {
        ss_hide(qry);
    }
    ss_painting = false;
}
function ss_showSuggestion(g, cnt, tbl) {
    if (ss_max_to_display > 0 && cnt >= ss_max_to_display) {
        return 0;
    }
    if (g && g.length > 0) {
        sugg_search_string = "";
        for (var i = 0; i < g.length; i++) {
            var row = tbl.insertRow(-1);
            row.onclick = function setStyle() {
                document.getElementById(ss_popup_element).style.visibility = "hidden";
            };
            row.onmousemove = ss_handleMouseM;
            row.className = SS_ROW_CLASS;
            var alt = document.createElement("td");
            if (g[i].q) {
                sugg_search_string = sugg_search_string + g[i].q + "##";
                alt.appendChild(document.createTextNode(g[i].q));
            } else {
                alt.innerHTML = "<i>" + g[i].t + "</i>";
            }
            alt.className = "ss-gac-c";
            row.appendChild(alt);
            var clue = "";
            if (i == 0 && g.length == 1) {
                clue = ss_g_one_name_to_display;
            } else {
                if (i == 0) {
                    clue = ss_g_more_names_to_display;
                }
            }
            var typ = document.createElement("td");
            typ.appendChild(document.createTextNode(clue));
            typ.className = "ss-gac-d";
            row.appendChild(typ);
            if (ss_max_to_display > 0 && cnt + i + 1 >= ss_max_to_display) {
                return i + 1;
            }
        }
        sugg_search_string = sugg_search_string.substr(0, sugg_search_string.length - 2);
        document.getElementById(ss_form_element).sugg_search_string.value = sugg_search_string;
        return g.length;
    }
    return 0;
}
function ss_handleMouseM() {
    var fo = document.getElementById(ss_form_element);
    var tbl = document.getElementById(ss_popup_element);
    var rows = tbl.getElementsByTagName("tr");
    for (var ri = 0; ri < rows.length - 1; ri++) {
        if (rows[ri] == this && rows[ri].className != SS_ROW_SELECTED_CLASS) {
            rows[ri].className = SS_ROW_SELECTED_CLASS;
            if (!ss_qbackup) {
                ss_qbackup = fo.q.value;
            }
            ss_loc = ri;
            var suggestion = ss_locateSuggestion(ss_qbackup, ss_loc);
            if (suggestion.q) {
                fo.q.value = suggestion.q;
            } else {
                fo.q.value = ss_qbackup;
            }
        } else {
            if (rows[ri] != this) {
                rows[ri].className = SS_ROW_CLASS;
            }
        }
    }
    ss_sf();
    return true;
}
function ss_countSuggestions(query) {
    var cnt = 0;
    for (var i = 0; i < ss_seq.length; i++) {
        switch (ss_seq[i]) {
            case "g":
                cnt += ss_cached[query].g ? ss_cached[query].g.length : 0;
                break;
        }
        if (ss_max_to_display > 0 && cnt >= ss_max_to_display) {
            return ss_max_to_display;
        }
    }
    return cnt;
}
function ss_locateSuggestion(query, loc) {
    var cnt1 = 0;
    var cnt2 = 0;
    var type = null;
    for (var z = 0; z < ss_seq.length; z++) {
        switch (ss_seq[z]) {
            case "g":
                cnt2 += ss_cached[query].g ? ss_cached[query].g.length : 0;
                break;
        }
        if (loc >= cnt1 && loc < cnt2) {
            switch (ss_seq[z]) {
                case "g":
                    var qV = ss_cached[query].g[loc - cnt1].q;
                    if (qV) {
                        return {"q": qV};
                    } else {
                        return {"u": ss_cached[query].g[loc - cnt1].u};
                    }
            }
            break;
        }
        cnt1 = cnt2;
    }
    return null;
}
function ss_escape(query) {
    return query.replace(/\\/g, "\\\\").replace(/\"/g, '\\"');
}
function ss_escapeDbg(query) {
    var escapedQuery = "";
    var ch = query.split("");
    for (var i = 0; i < ch.length; i++) {
        switch (ch[i]) {
            case "&":
                escapedQuery += "&amp;";
                break;
            case "<":
                escapedQuery += "&lt;";
                break;
            case ">":
                escapedQuery += "&gt;";
                break;
            default:
                escapedQuery += ch[i];
                break;
        }
    }
    return escapedQuery;
}
function ss_Debugger() {
    this.debugMode = false;
}
ss_Debugger.DEBUG_CONSOLE_ID = "ss_debug_console";
ss_Debugger.DEBUG_CONTENT_ID = "ss_debug_content";
ss_Debugger.DEBUG_TOGGLE_ID = "ss_debug_toggle";
ss_Debugger.prototype.getDebugMode = function() {
    return this.debugMode;
};
ss_Debugger.prototype.activateConsole = function() {
    var console = document.getElementById(ss_Debugger.DEBUG_CONSOLE_ID);
    if (console) {
        console.style.display = "block";
    } else {
        var dc = document.createElement("div");
        dc.id = ss_Debugger.DEBUG_CONSOLE_ID;
        dc.zIndex = 100;
        dc.className = "expanded";
        var title = document.createElement("h1");
        title.appendChild(document.createTextNode("GSA Suggest Debug Console"));
        title.style.display = "inline";
        dc.appendChild(title);
        var actn = document.createElement("div");
        var btn = document.createElement("button");
        btn.onclick = function(event) {
            var debugContent = document.getElementById(ss_Debugger.DEBUG_CONTENT_ID);
            if (debugContent) {
                for (var ri = debugContent.rows.length - 1; ri > 0; ri--) {
                    debugContent.deleteRow(ri);
                }
            }
        };
        btn.appendChild(document.createTextNode("Clear console"));
        actn.appendChild(btn);
        btn = document.createElement("button");
        btn.onclick = function(event) {
            ss_cached = [];
        };
        btn.appendChild(document.createTextNode("Clear cache"));
        actn.appendChild(btn);
        btn = document.createElement("button");
        btn.id = ss_Debugger.DEBUG_TOGGLE_ID;
        btn.onclick = function(event) {
            var debugConsole = document.getElementById(ss_Debugger.DEBUG_CONSOLE_ID);
            if (debugConsole) {
                var b = document.getElementById(ss_Debugger.DEBUG_TOGGLE_ID);
                if (debugConsole.className.indexOf("expanded") != -1) {
                    debugConsole.className = debugConsole.className.replace(/expanded/, "contracted");
                    b.innerHTML = "Maximize";
                } else {
                    debugConsole.className = debugConsole.className.replace(/contracted/, "expanded");
                    b.innerHTML = "Minimize";
                }
            }
        };
        btn.appendChild(document.createTextNode("Minimize"));
        actn.appendChild(btn);
        actn.style.display = "inline";
        dc.appendChild(actn);
        dc.appendChild(document.createElement("br"));
        var pane = document.createElement("table");
        pane.id = ss_Debugger.DEBUG_CONTENT_ID;
        var dhr = pane.insertRow(-1);
        var dhc = document.createElement("th");
        dhc.innerHTML = "Query";
        dhr.appendChild(dhc);
        dhc = document.createElement("th");
        dhc.innerHTML = "Type";
        dhr.appendChild(dhc);
        dhc = document.createElement("th");
        dhc.innerHTML = "Time";
        dhr.appendChild(dhc);
        dhc = document.createElement("th");
        dhc.innerHTML = "g";
        dhr.appendChild(dhc);
        dhc = document.createElement("th");
        dhc.innerHTML = "Total";
        dhr.appendChild(dhc);
        dc.appendChild(pane);
        document.body.appendChild(dc);
    }
    this.debugMode = true;
};
ss_Debugger.prototype.deactivateConsole = function() {
    var console = document.getElementById(ss_Debugger.DEBUG_CONSOLE_ID);
    if (console) {
        console.style.display = "none";
    }
    this.debugMode = false;
};
ss_Debugger.prototype.addRequestDebugLine = function(query, type, time, obj) {
    var debugContent = document.getElementById(ss_Debugger.DEBUG_CONTENT_ID);
    if (debugContent) {
        var currentRow = debugContent.insertRow(1);
        var currentCell = document.createElement("td");
        currentCell.innerHTML = "&lt;" + ss_escapeDbg(query) + "&gt;";
        currentRow.appendChild(currentCell);
        currentCell = document.createElement("td");
        currentCell.innerHTML = type;
        currentRow.appendChild(currentCell);
        currentCell = document.createElement("td");
        currentCell.className = "no";
        currentCell.innerHTML = time + " ms";
        currentRow.appendChild(currentCell);
        switch (type) {
            case "suggest":
                currentCell = document.createElement("td");
                currentCell.className = "no";
                currentCell.innerHTML = (obj.g ? obj.g.length : 0);
                currentRow.appendChild(currentCell);
                currentCell = document.createElement("td");
                currentRow.appendChild(currentCell);
                break;
            default:
                currentCell = document.createElement("td");
                currentRow.appendChild(currentCell);
                currentCell = document.createElement("td");
                currentRow.appendChild(currentCell);
                break;
        }
    }
};
ss_Debugger.prototype.addShowDebugLine = function(query, time, o, total) {
    var debugContent = document.getElementById(ss_Debugger.DEBUG_CONTENT_ID);
    if (debugContent) {
        var currentRow = debugContent.insertRow(1);
        var currentCell = document.createElement("td");
        currentCell.innerHTML = "&lt;" + ss_escapeDbg(query) + "&gt;";
        currentRow.appendChild(currentCell);
        currentCell = document.createElement("td");
        currentCell.innerHTML = "<i>show</i>";
        currentRow.appendChild(currentCell);
        currentCell = document.createElement("td");
        currentCell.className = "no";
        currentCell.innerHTML = time + " ms";
        currentRow.appendChild(currentCell);
        currentCell = document.createElement("td");
        currentCell.className = "no";
        currentCell.innerHTML = (o ? (o.g ? o.g.length : 0) : 0);
        currentRow.appendChild(currentCell);
        currentCell = document.createElement("td");
        currentCell.className = "no";
        currentCell.innerHTML = total;
        currentRow.appendChild(currentCell);
    }
};
ss_Debugger.prototype.addHideDebugLine = function(query, type) {
    var debugContent = document.getElementById(ss_Debugger.DEBUG_CONTENT_ID);
    if (debugContent) {
        var currentRow = debugContent.insertRow(1);
        var currentCell = document.createElement("td");
        currentCell.innerHTML = "&lt;" + ss_escapeDbg(query) + "&gt;";
        currentRow.appendChild(currentCell);
        currentCell = document.createElement("td");
        currentCell.innerHTML = "<i>" + type + "</i>";
        currentRow.appendChild(currentCell);
        currentCell = document.createElement("td");
        currentCell.className = "no";
        currentCell.innerHTML = "0 ms";
        currentRow.appendChild(currentCell);
        currentCell = document.createElement("td");
        currentRow.appendChild(currentCell);
        currentCell = document.createElement("td");
        currentRow.appendChild(currentCell);
    }
};
ss_Debugger.prototype.addWaitDebugLine = function(query, type, time) {
    var debugContent = document.getElementById(ss_Debugger.DEBUG_CONTENT_ID);
    if (debugContent) {
        var currentRow = debugContent.insertRow(1);
        var currentCell = document.createElement("td");
        currentCell.innerHTML = "&lt;" + ss_escapeDbg(query) + "&gt;";
        currentRow.appendChild(currentCell);
        currentCell = document.createElement("td");
        currentCell.innerHTML = "<i>" + type + "</i>";
        currentRow.appendChild(currentCell);
        currentCell = document.createElement("td");
        currentCell.className = "no";
        currentCell.innerHTML = time + " ms";
        currentRow.appendChild(currentCell);
        currentCell = document.createElement("td");
        currentRow.appendChild(currentCell);
        currentCell = document.createElement("td");
        currentRow.appendChild(currentCell);
    }
};
var ss_use = {};
ss_use.g = ss_seq.indexOf("g") >= 0 ? true : false;
document.onkeyup = ss_handleAllKey;
jQuery.fn.slideAreaProduct = function(method) {
    var _options = {"sliderLine": ".slider","sliderButton": ".sliderButton","navigate": true,"automove": true,"moveArea": null,"sliderWidth": null};
    var _progress = false;
    var _this = $(this);
    var _li_width = 0;
    var _mousedowned = false;
    var _curr_mouse_position = 0;
    var _curr_slider_position = 0;
    var _curr_move_area_postion = 0;
    var _num_positions = 0;
    var _length = 0;
    var _null_position = 0;
    var _move_area_null_position = 0;
    var _move_ratio = 1;
    var _was_moved = false;
    if ($(".slider").attr("id") == "support") {
        moves = $("#sliderButton").outerWidth() - 2;
        $("#sliderButton").animate({left: moves}, 1);
    }
    $("#sliderButton").css("display", "block");
    var methods = {init: function(custom_options) {
            $.extend(_options, custom_options);
            _this.data("options", _options);
            _this.data("progress", _progress);
            _num_positions = _this.find("li").length;
            _this.data("num_positions", _num_positions);
            resize();
            _null_position = parseInt($(_options.sliderButton).css("left").replace("px", ""));
            _this.data("null_position", _null_position);
            if (_options.moveArea != null) {
                _move_area_null_position = parseInt($(_options.moveArea).css("margin-left").replace("px", ""));
                _this.data("move_area_null_position", _move_area_null_position);
            }
            assignMouseEvents();
        }};
    if (methods[method]) {
        return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
    } else {
        if (typeof method === "object" || !method) {
            return methods.init.apply(this, arguments);
        } else {
            $.error("Method " + method + " does not exist on jQuery.navSlider");
        }
    }
    function resize() {
        var ul_width = _this.find("ul").width() / _num_positions;
        _li_width = _this.find("li").eq(0).width();
        _this.find("li").each(function(i) {
            if ($(this).width() > _li_width) {
                _li_width = $(this).width();
            }
        });
        if (_li_width < ul_width) {
            _li_width = ul_width;
        }
        _this.find("li").width(_li_width);
        _this.data("li_width", _li_width);
        _length = _num_positions * _li_width;
        _this.data("length", _length);
        $(_options.sliderLine).width(_length);
        if (_options.sliderWidth == null) {
            $(_options.sliderButton).width(_li_width - 8);
        } else {
            $(_options.sliderButton).width(_options.sliderWidth);
        }
        if (_options.moveArea != null) {
            _move_ratio = ($(_options.moveArea).children("table").width() - Math.abs(_move_area_null_position) - $(".tableProduct").width()) / (_null_position + _length - $(_options.sliderButton).width() + 39);
            _this.data("move_ratio", _move_ratio);
        }
    }
    function assignMouseEvents() {
        _this.find("ul").mousedown(function(event) {
            event.preventDefault();
            event.stopPropagation();
            _progress = _this.data("progress");
            if (!_progress) {
                _mousedowned = true;
                _this.data("mousedowned", _mousedowned);
                _curr_mouse_position = event.pageX;
                _this.data("curr_mouse_position", _curr_mouse_position);
                _curr_slider_position = parseInt($(_options.sliderButton).css("left").replace("px", ""));
                _this.data("curr_slider_position", _curr_slider_position);
                _was_moved = false;
            }
        });
        $("body").mousemove(function(event) {
            _progress = _this.data("progress");
            _mousedowned = _this.data("mousedowned");
            if (_mousedowned && !_progress) {
                _curr_mouse_position = _this.data("curr_mouse_position");
                _curr_slider_position = _this.data("curr_slider_position");
                _li_width = _this.data("li_width");
                _length = _this.data("length");
                _null_position = _this.data("null_position");
                var movement = event.pageX - _curr_mouse_position;
                if (_curr_slider_position + movement <= (_null_position + _length - _li_width) && (_curr_slider_position + movement) >= _null_position) {
                    $(_options.sliderButton).css("left", _curr_slider_position + movement);
                } else {
                    if (_curr_slider_position + movement > (_null_position + _length - _li_width)) {
                        $(_options.sliderButton).css("left", _null_position + _length - _li_width);
                    } else {
                        if ((_curr_slider_position + movement) < _null_position) {
                            $(_options.sliderButton).css("left", _null_position);
                        }
                    }
                }
                if (_options.moveArea != null) {
                    $(_options.moveArea).css("margin-left", _move_area_null_position - ($(_options.sliderButton).css("left").replace("px", "") - _null_position) * _move_ratio);
                }
                _was_moved = true;
            }
        });
        $("body").mouseup(function(event) {
            _progress = _this.data("progress");
            _mousedowned = _this.data("mousedowned");
            if (_mousedowned && !_progress) {
                event.preventDefault();
                event.stopPropagation();
                _mousedowned = false;
                _this.data("mousedowned", _mousedowned);
                _curr_mouse_position = _this.data("curr_mouse_position");
                _curr_slider_position = _this.data("curr_slider_position");
                _num_positions = _this.data("num_positions");
                _li_width = _this.data("li_width");
                _length = _this.data("length");
                _null_position = _this.data("null_position");
                _options = _this.data("options");
                var movement = event.pageX - _curr_mouse_position;
                if (_options.automove) {
                    var slider_middle_position = _curr_slider_position + movement + ($(_options.sliderButton).width() / 2);
                    var sector_length = Math.round((_null_position + _length) / _num_positions);
                    var sector_index = Math.floor(slider_middle_position / sector_length);
                    if (sector_index >= _num_positions) {
                        sector_index = _num_positions - 1;
                    }
                    if (sector_index < 0) {
                        sector_index = 0;
                    }
                    animateToIndex(sector_index);
                }
            }
        });
        _this.find("li").click(function(event) {
            event.preventDefault();
            event.stopPropagation();
            var index = _this.find("li").index(this);
            if (!_was_moved) {
                animateToIndex(index);
            }
        });
        _this.find(".btnBack").click(function(event) {
            event.preventDefault();
            _curr_slider_position = parseInt($(_options.sliderButton).css("left").replace("px", ""));
            var slider_middle_position = _curr_slider_position + ($(_options.sliderButton).width() / 2);
            var sector_length = Math.round((_null_position + _length) / _num_positions);
            var sector_index = Math.floor(slider_middle_position / sector_length);
            if (sector_index > 0) {
                sector_index--;
            }
            animateToIndex(sector_index);
        });
        _this.find(".btnNext").click(function(event) {
            event.preventDefault();
            _curr_slider_position = parseInt($(_options.sliderButton).css("left").replace("px", ""));
            var slider_middle_position = _curr_slider_position + ($(_options.sliderButton).width() / 2);
            var sector_length = Math.round((_null_position + _length) / _num_positions);
            var sector_index = Math.floor(slider_middle_position / sector_length);
            if (sector_index < (_num_positions - 1)) {
                sector_index++;
            }
            animateToIndex(sector_index);
        });
    }
    function animateToIndex(index) {
        _null_position = _this.data("null_position");
        _options = _this.data("options");
        var animate_pos = _null_position + index * (_li_width);
        _progress = true;
        _this.data("progress", _progress);
        $(_options.sliderButton).animate({"left": animate_pos}, 500, function() {
            _progress = false;
            _this.data("progress", _progress);
            if (_options.navigate) {
                navigate(index);
            }
        });
        if (_options.moveArea != null) {
            $(_options.moveArea).animate({"margin-left": _move_area_null_position - (animate_pos - _null_position) * _move_ratio}, 500);
        }
    }
    function navigate(index) {
        window.location = _this.find("li").eq(index).find("a").attr("href").toString();
    }
};
jQuery.fn.extend({getUrlParam: function(strParamName) {
        strParamName = escape(unescape(strParamName));
        var returnVal = new Array();
        var qString = null;
        if ($(this).attr("nodeName") == "#document") {
            if (window.location.search.search(strParamName) > -1) {
                qString = window.location.search.substr(1, window.location.search.length).split("&");
            }
        } else {
            if ($(this).attr("src") != "undefined") {
                var strHref = $(this).attr("src");
                if (strHref.indexOf("?") > -1) {
                    var strQueryString = strHref.substr(strHref.indexOf("?") + 1);
                    qString = strQueryString.split("&");
                }
            } else {
                if ($(this).attr("href") != "undefined") {
                    var strHref = $(this).attr("href");
                    if (strHref.indexOf("?") > -1) {
                        var strQueryString = strHref.substr(strHref.indexOf("?") + 1);
                        qString = strQueryString.split("&");
                    }
                } else {
                    return null;
                }
            }
        }
        if (qString == null) {
            return null;
        }
        for (var i = 0; i < qString.length; i++) {
            var index = qString[i].indexOf("=");
            if (index >= 0) {
                var strCurrentParamName = escape(unescape(qString[i].substr(0, index)));
                if (strCurrentParamName == strParamName) {
                    returnVal.push(qString[i].substr(index + 1));
                }
            }
        }
        if (returnVal.length == 0) {
            return null;
        } else {
            if (returnVal.length == 1) {
                return returnVal[0];
            } else {
                return returnVal;
            }
        }
    }});
var ecommLocaleMap = {"ecommLocalesList": [{"ecommLocale": "pl-pl","seaLocale": "pl-pl","drLocale": "pl_PL","currency": "PLN"}, {"ecommLocale": "en-us","seaLocale": "en-us","drLocale": "en_US","currency": "USD"}, {"ecommLocale": "en-ca","seaLocale": "en-ca","drLocale": "en_CA","currency": "CAD"}, {"ecommLocale": "es-es","seaLocale": "es-es","drLocale": "es_ES","currency": "EUR"}, {"ecommLocale": "en-ie","seaLocale": "en-gb","drLocale": "en_IE","currency": "EUR"}, {"ecommLocale": "en-se","seaLocale": "en-gb","drLocale": "en_IE","currency": "SEK"}, {"ecommLocale": "en-au","seaLocale": "en-au","drLocale": "en_AU","currency": "AUD"}, {"ecommLocale": "en-dk","seaLocale": "en-gb","drLocale": "en_IE","currency": "DKK"}, {"ecommLocale": "de-de","seaLocale": "de-de","drLocale": "de_DE","currency": "EUR"}, {"ecommLocale": "en-ro","seaLocale": "en-gb","drLocale": "en_IE","currency": "RON"}, {"ecommLocale": "en-lt","seaLocale": "en-gb","drLocale": "en_IE","currency": "LTL"}, {"ecommLocale": "fr-fr","seaLocale": "fr-fr","drLocale": "fr_FR","currency": "EUR"}, {"ecommLocale": "en-hu","seaLocale": "en-gb","drLocale": "en_IE","currency": "HUF"}, {"ecommLocale": "en-cz","seaLocale": "en-gb","drLocale": "en_IE","currency": "CZK"}, {"ecommLocale": "it-it","seaLocale": "it-it","drLocale": "it_IT","currency": "EUR"}, {"ecommLocale": "en-gb","seaLocale": "en-gb","drLocale": "en_GB","currency": "GBP"}]};
var gsaEcommLocaleMap = {"gsaEcommLocalesList": []};
function removeNotProdReady() {
    var host = window.location.host;
    var parts = host.split(".");
    var subdomain = parts[0];
    if (subdomain.indexOf("prod") == -1 && subdomain.indexOf("edit") == -1 && subdomain.indexOf("review") == -1 && subdomain.indexOf("tst") == -1 && subdomain.indexOf("dev") == -1 && subdomain.indexOf("stg") == -1) {
        $(".edit-only").remove();
    }
}
if (typeof (rcLocaleJS) == "undefined") {
    var rcLocaleJS = "";
}
if (typeof (spp_ProfileURL) == "undefined") {
    var spp_ProfileURL = "";
}
if (typeof (gsaSite) == "undefined") {
    var gsaSite = "";
}
if (typeof (gsaURL) == "undefined") {
    var gsaURL = "";
}
if (typeof (serverHost) == "undefined") {
    var serverHost = "";
}
var gblComStoreId;
if (gblComStoreId == null) {
    gblComStoreId = "sgateus";
}
var gblComLocale;
if (gblComLocale == null) {
    gblComLocale = "en_US";
}
var loggedinUserName = getCookie("USERDETAIL");
var isSeagateDirectUser = getCookie("isSDUSER");
var IsSppUser = "false";
var sdUrl = "/portal/site/direct";
var sppUrl = "/partners";
var sppLocale = "";
var DR_addToCart_URL = "https://shop.seagate.com/store/" + gblComStoreId + "/" + gblComLocale + "/AddItemToRequisition";
var DR_cartInfo_URL = "https://shop.seagate.com/store/" + gblComStoreId + "/DisplayPage/id.DRCartSummaryJSONPage/output.json/jsonp.CartInfo.updateCartDisplay";
var CartInfo = {init: function() {
        if (gblComStoreId != null && gblComStoreId != "null") {
            jQuery.getScript(DR_cartInfo_URL);
        }
    },updateCartDisplay: function(arg) {
        if (arg.lineItems == 0) {
            $("#headerCart").removeClass("btn-info");
            $("#headerCart").addClass("btn-primary");
        } else {
            $("#headerCart").removeClass("btn-primary");
            $("#headerCart").addClass("btn-info");
        }
        $("#cartLineItems").html(arg.lineItems);
    }};
var DR_cartInfo_URL_x_New = "https://shop.seagate.com/store/" + gblComStoreId + "/DisplayPage/id.DRCartSummaryJSONPage/output.json/jsonp.CartInfoX_New.updateCartDisplay";
var CartInfoX_New = {init: function() {
        if (gblComStoreId != null && gblComStoreId != "null") {
            jQuery.getScript(DR_cartInfo_URL_x_New);
        }
    },updateCartDisplay: function(arg) {
        $("#cartLineItems_new").each(function() {
            $(this).after("<i>" + arg.lineItems + "</i>");
        });
    }};
function setLoginState() {
    loggedinUserName = getCookie("USERDETAIL");
    IsSppUser = getCookie("ISSPPUSER");
    sppLocale = getCookie("SPPLOCALE");
    isSeagateDirectUser = getCookie("isSDUSER");
    if (document.getElementById("login-div") != null && document.getElementById("logout-div") != null) {
        if (typeof (loggedinUserName) != "undefined" && !isStringNullOrEmpty(loggedinUserName)) {
            document.getElementById("login-div").style.display = "none";
            document.getElementById("logout-div").style.display = "block";
            document.getElementById("userName").innerHTML = loggedinUserName;
        } else {
            document.getElementById("login-div").style.display = "block";
            document.getElementById("logout-div").style.display = "none";
            document.getElementById("userName").innerHTML = "";
        }
    }
    var userRole = getCookie("USERROLE");
    if (isStringNullOrEmpty(userRole)) {
        return;
    }
    if (userRole == "CI") {
        var hrefArr = document.location.href.split("?");
        if (hrefArr[0].indexOf(labels.consumer_identity_url) != -1) {
            $(".gn-globe").hide();
            $(".globe-icon").hide();
        }
        $("#dashboard").attr("href", labels.my_dashboard_url_ci);
        $("#profile").attr("href", labels.my_profile_url_ci);
        $("#logout").attr("href", "javascript:Logout('" + labels.logout_url_ci + "');");
    } else {
        if (userRole == "Employee") {
            setSessionCookie("USERDETAIL", data.userName);
        } else {
            if (userRole == "Supplier") {
                $("#dashboard").attr("href", labels.my_dashboard_url_supplier);
                $("#profile").attr("href", labels.my_profile_url_supplier);
                $("#logout").attr("href", "javascript:Logout('" + labels.logout_url + "');");
            } else {
                if (userRole == "d" || userRole == "o") {
                    $("#dashboard").attr("href", labels.my_dashboard_url_sd);
                    $("#profile").attr("href", labels.my_profile_url_sd);
                    $("#logout").attr("href", "javascript:Logout('" + labels.logout_url + "');");
                } else {
                    if (userRole.indexOf("spp") != -1) {
                        $("#dashboard").attr("href", labels.my_dashboard_url_spp);
                        $("#gearbtn").attr("href", labels.my_profile_url_spp);
                        $("#profile").attr("href", labels.my_profile_url_spp);
                        $("#logout").attr("href", "javascript:Logout('" + labels.logout_url + "');");
                        if (document.URL.indexOf("/partners/my-spp-dashboard") != -1) {
                            hideLocaleSelector();
                            currentCountry = getCountryForLocale(sppLocale);
                        } else {
                            if (document.URL.indexOf("/spp_EventDetails_vf") != -1 || document.URL.indexOf("/apex/SPP_PersonProfile_VF") != -1 || document.URL.indexOf("/apex/SPP_CompanyProfile_VF") != -1) {
                                hideLocaleSelector();
                            }
                        }
                        $("ul.breadcrumbs").find("li").each(function(index, value) {
                            if (index == 0) {
                                $(this).html("<a href='javascript:showSecurePage(sppUrl)'>" + labels.spp_home + "</a>");
                            }
                        });
                        $("ul.nav-breadcrumb").find("li").each(function(index, value) {
                            if (index == 0) {
                                $(this).html("<a href='javascript:showSecurePage(sppUrl)'>" + labels.spp_home + "</a><span class='divider'>/</span>");
                            }
                        });
                    } else {
                        $("#dashboard").hide();
                        $("#profile").attr("href", labels.my_profile_url_non_consumer);
                        $("#logout").attr("href", "javascript:Logout('" + labels.logout_url + "');");
                    }
                }
            }
        }
    }
}
function setLoginState_New() {
    loggedinUserName = getCookie("USERDETAIL");
    IsSppUser = getCookie("ISSPPUSER");
    sppLocale = getCookie("SPPLOCALE");
    isSeagateDirectUser = getCookie("isSDUSER");
    if (document.getElementById("not-logged-in") != null && document.getElementById("logged-in") != null) {
        if (typeof (loggedinUserName) != "undefined" && !isStringNullOrEmpty(loggedinUserName)) {
            $("#login-wrapper").addClass("logged-box");
            $("#logged-in-hello").html(loggedinUserName);
            $("#login-text").css("display", "none");
            $("#logged-in-hello").css("display", "inline-block");
            $(".arrow-down-icon").css("display", "inline-block");
        } else {
            $("#login-wrapper").removeClass("logged-box");
            $("#login-text").css("display", "inline-block");
            $("#logged-in-hello").css("display", "none");
            $(".arrow-down-icon").css("display", "inline-block");
        }
    }
}
function setLoginState_New_Mega_Nav() {
    loggedinUserName = getCookie("USERDETAIL");
    IsSppUser = getCookie("ISSPPUSER");
    sppLocale = getCookie("SPPLOCALE");
    isSeagateDirectUser = getCookie("isSDUSER");
    if (document.getElementById("not-logged-in-new") != null && document.getElementById("logged-in-new") != null) {
        if (typeof (loggedinUserName) != "undefined" && !isStringNullOrEmpty(loggedinUserName)) {
            $("#logged-in-hello-new").text(loggedinUserName);
            $("#logged-in-new").css("display", "");
            $("#not-logged-in-new").css("display", "none");
        } else {
            $("#logged-in-new").css("display", "none");
            $("#not-logged-in-new").css("display", "");
        }
    }
}
function hideLocaleSelector() {
    var selector = $(".globe-icon");
    selector.removeAttr("data-toggle").removeAttr("href");
    selector.hover(function() {
        $(this).css("text-decoration", "none");
        $(this).css("cursor", "default");
        $(".globe-icon .ss-icon:hover").css("color", "#333");
    });
}
function isStringNullOrEmpty(str) {
    if (str != null && str != "null" && str != "") {
        return false;
    }
    return true;
}
function getCookie(name) {
    var dc = document.cookie;
    var prefix = name + "=";
    var begin = dc.indexOf("; " + prefix);
    if (begin == -1) {
        begin = dc.indexOf(prefix);
        if (begin != 0) {
            return null;
        }
    } else {
        begin += 2;
    }
    var end = document.cookie.indexOf(";", begin);
    if (end == -1) {
        end = dc.length;
    }
    return unescape(dc.substring(begin + prefix.length, end));
}
function deleteCookie(name, path, domain) {
    if (getCookie(name)) {
        document.cookie = name + "=" + ((path) ? "; path=" + path : "") + ((domain) ? "; domain=" + domain : "") + "; expires=Thu, 01-Jan-70 00:00:01 GMT";
    }
}
function Logout(redirectUrl) {
    window.top.name = "something_unique";
    deleteCookie("SMSESSION", "/", ".seagate.com");
    deleteCookie("USERDETAIL", "/", ".seagate.com");
    deleteCookie("LOCALSMSESSION", "/", ".seagate.com");
    deleteCookie("ISSPPUSER", "/", ".seagate.com");
    deleteCookie("userSelectedLocaleCookie", "/", ".seagate.com");
    deleteCookie("SPPLOCALE", "/", ".seagate.com");
    deleteCookie("isSDUSER", "/", ".seagate.com");
    deleteCookie("ISCIUSER", "/", ".seagate.com");
    deleteCookie("CILOCALE", "/", ".seagate.com");
    deleteCookie("USERROLE", "/", ".seagate.com");
    $.cookie("spp-news-alert-box-status", null, {path: "/"});
    document.location.href = redirectUrl;
    return false;
}
function replaceHttp(str, strt) {
    if (str.indexOf("http://") != -1 || str.indexOf("https://") != -1) {
        var firstIndex = str.indexOf("http://");
        if (firstIndex == -1) {
            firstIndex = str.indexOf("https://");
        }
        var newStr = str.substring(0, firstIndex);
        var rest = str.substring(firstIndex, str.length);
        var restt = strt.substring(firstIndex, strt.length);
        var blankIndex = rest.indexOf(" ");
        var blankIndext = restt.indexOf(" ");
        var url = "";
        var urlt = "";
        var restWO = "";
        var restWOt = "";
        if (blankIndext == -1) {
            urlt = restt;
        } else {
            urlt = strt.substring(firstIndex, firstIndex + blankIndext);
            restWOt = restt.substring(blankIndex, restt.length);
        }
        if (blankIndex == -1) {
            url = rest;
        } else {
            url = str.substring(firstIndex, firstIndex + blankIndex);
            restWO = rest.substring(blankIndex, rest.length);
        }
        newStr = newStr + "<a href='" + urlt + "'>" + url + "</a>";
        if (restWO.indexOf("http://") != -1 || restWO.indexOf("https://") != -1) {
            restWO = replaceHttp(restWO, restWOt);
        }
        newStr = newStr + restWO;
        return newStr;
    } else {
        return str;
    }
}
function getTwitterFeed(userId, id, listSelector) {
    $.ajax({type: "GET",url: ("https:" == document.location.protocol ? "https://" : "http://") + "search.twitter.com/search.json?callback=?&rpp=1&q=from:" + userId,dataType: "json",error: function() {
            $("#" + id).remove();
            $("#newsBarHoldLI").fadeGallery({listSelector: listSelector,navCreate: true,swichTime: 7000,delay: 800,fadeIEfix: false,mouseOverPause: true});
        },success: function(dataString) {
            if (dataString != null && dataString != "" && dataString.results.length > 0 && dataString.results[0].text != "undefined" && dataString.results[0].text != "") {
                var latestTweet = dataString.results[0].text;
                var atseagate = "@" + userId + ": ";
                var atseagateD = "<strong>@" + userId + ": </strong>";
                latestTweet = atseagate + latestTweet;
                var len = latestTweet.length;
                var latestTweetD = "";
                var points = "";
                if (len <= 120) {
                    latestTweetD = replaceHttp(latestTweet, latestTweet);
                } else {
                    var latestTweet120 = latestTweet.substring(0, 120);
                    latestTweetD = replaceHttp(latestTweet120, latestTweet);
                    points = "...";
                }
                latestTweetD = atseagateD + latestTweetD.substring(atseagate.length, latestTweetD.length);
                $("#" + id).html(latestTweetD + points);
            } else {
                $("#" + id).remove();
            }
            $("#newsBarHoldLI").fadeGallery({listSelector: listSelector,navCreate: true,swichTime: 7000,delay: 800,fadeIEfix: false,mouseOverPause: true});
        }});
}
var pagenotfound = true;
function setConsumerTargetUrl() {
    var acct = document.getElementById("consumer-accountSelect");
    var trg = document.getElementById("consumer-target");
    trg.value = acct.value;
}
function showSecurePage(secureUrl) {
    if (secureUrl.indexOf("http://") == -1) {
        secureUrl = httpsURL + secureUrl;
    }
    if (!isStringNullOrEmpty(loggedinUserName)) {
        if (IsSppUser == "true") {
            window.location.href = secureUrl.replace("http://", "https://");
        } else {
            if (isSeagateDirectUser == "true") {
                window.location.href = secureUrl.replace("http://", "https://");
            } else {
                window.location.href = secureUrl.replace("https://", "http://");
            }
        }
    } else {
        window.location.href = secureUrl.replace("https://", "http://");
    }
}
function submitSearchFormPromo() {
    var searchMsg = document.getElementById("searchMSG").value;
    var formId = "suggestion_form2";
    var qv = document.getElementById(formId).q.value;
    if (!qv || !($.trim(qv)) || qv == searchMsg || qv == "") {
        return false;
    } else {
        var n = rcLocaleJS.split("-");
        var localeURL = "/" + n[1] + "/" + n[0];
        if (rcLocaleJS == "en-us") {
            localeURL = "";
        }
        window.location.href = "//" + serverHost + localeURL + "/search/?keyword=" + encoding(qv);
        return false;
    }
}
function submitSearchFormPromoX_New(device) {
    var searchMsg = document.getElementById("searchMSG").value;
    var qv = document.getElementById("suggestion_form2_" + device).q.value;
    var searchHost = serverHost;
    searchHost = serverHost.replace(/^.*\/\//, "");
    if (typeof (rcLocaleJS) == "undefined" || rcLocaleJS == "") {
        var rcLocaleJS = "en-us";
    }
    if (!qv || !($.trim(qv)) || qv == searchMsg || qv == "") {
        return false;
    } else {
        var n = rcLocaleJS.split("-");
        var localeURL = "/" + n[1] + "/" + n[0];
        if (rcLocaleJS == "en-us") {
            localeURL = "";
        }
        window.location.href = "//" + searchHost + localeURL + "/search/?keyword=" + qv;
        return false;
    }
}
function submitSearchForm404() {
    var qv = document.getElementById("suggestion_form404").q.value;
	if (!qv || !($.trim(qv)) || qv == "") {
		return false;
	} else {
		var n = rcLocaleJS.split("-");
		var localeURL = "/" + n[1] + "/" + n[0];
		if (rcLocaleJS == "en-us") {
			localeURL = "";
		}
		window.location.href = "//" + serverHost + localeURL + "/search/?keyword=" + encoding(qv);
		return false;
	}
}
function encoding(source) {
    var target = source;
    target = encodeURI(target);
    target = target.replace(/\@/g, "%40");
    target = target.replace(/\#/g, "%23");
    target = target.replace(/\\$/g, "%24");
    target = target.replace(/\&/g, "%26");
    target = target.replace(/\=/g, "%3D");
    target = target.replace(/\//g, "%2F");
    target = target.replace(/\,/g, "%2C");
    target = target.replace(/\;/g, "%3B");
    target = target.replace(/\?/g, "%3F");
    target = target.replace(/\+/g, "%2B");
    target = target.replace(/\'/g, "%27");
    target = target.replace(/\=/g, "%3D");
    return target;
}
$("#searchPromo").keydown(function(e) {
    e = e || window.event;
    if (document.getElementById("suggestion_form2") != undefined) {
        document.getElementById("suggestion_form2").className = "";
    }
});
function suggSearchApply(suggSearch) {
    document.getElementById("suggestion_form2").querySearch.value = suggSearch;
    document.getElementById("suggestion_form2").q.value = suggSearch;
    submitSearchFormPromo();
}
$(document).ready(function() {
    var clearCart = getCookie("clearCart");
    if (clearCart != null) {
        document.getElementById("ClearCartIframe").src = "http://shop.seagate.com/store/sgateus/" + clearCart + "/ResetShoppingCart";
        removeCookie("clearCart");
    }
    setViewCartLink();
    $(".globe-icon").on("click touchstart", function(e) {
        if ($(".view-cart > i").length != 0 && $(".view-cart > i").text() != "0") {
            $(".nav-footer-cart-warning").show();
        } else {
            if ($(".view-cart > i").length == 0 && getEcommLocale() != "") {
                $(".nav-footer-cart-warning").show();
            }
        }
    });
    $(".nav-footer-checkbox").on("click touchstart", function(e) {
        e.preventDefault();
        if ($(".nav-footer-checked").css("display") == "inline-block" || $(".nav-footer-checked").css("display") == "block") {
            $(".nav-footer-checked").css("display", "none");
            $(".nav-footer-unchecked").css("display", "inline-block");
            $("#nav-footer-remember").prop("checked", false);
        } else {
            $(".nav-footer-unchecked").css("display", "none");
            $(".nav-footer-checked").css("display", "inline-block");
            $("#nav-footer-remember").prop("checked", true);
        }
    });
    removeNotProdReady();
    var autoSugglistener = window.addEventListener;
    var autoSuggEventType = "load";
    if (!autoSugglistener) {
        autoSugglistener = window.attachEvent;
        autoSuggEventType = "onload";
    }
    autoSugglistener(autoSuggEventType, function() {
        var searchHost = serverHost;
        searchHost = serverHost.replace(/^.*\/\//, "");
        $("#searchPromo").autocomplete({source: "//" + searchHost + "/ww/autoSuggest?site=" + gsaSite + "&host=" + gsaURL + "&rcLocaleJS=" + rcLocaleJS,select: function(event, item) {
                $("#searchPromo").val(item.item.value);
                if (this.form.id == "domore_form") {
                    submitdoMoreSearchForm();
                } else {
                    submitSearchFormPromo();
                }
            }});
    }, false);
    autoSugglistener(autoSuggEventType, function() {
        var searchHost = serverHost;
        searchHost = serverHost.replace(/^.*\/\//, "");
        $("#searchPromoX-desk").autocomplete({source: "//" + searchHost + "/ww/autoSuggest?site=" + gsaSite + "&host=" + gsaURL + "&rcLocaleJS=" + rcLocaleJS,select: function(event, item) {
                $("#searchPromoX-desk").val(item.item.value);
                submitSearchFormPromoX_New("desk");
            }});
    }, false);
    autoSugglistener(autoSuggEventType, function() {
        var searchHost = serverHost;
        searchHost = serverHost.replace(/^.*\/\//, "");
        $("#searchPromoX-mobile").autocomplete({source: "//" + searchHost + "/ww/autoSuggest?site=" + gsaSite + "&host=" + gsaURL + "&rcLocaleJS=" + rcLocaleJS,select: function(event, item) {
                $("#searchPromoX-mobile").val(item.item.value);
                submitSearchFormPromoX_New("mobile");
            }});
    }, false);
    autoSugglistener(autoSuggEventType, function() {
        $("#spp-support-search-textbox").autocomplete({source: "//" + serverHost + "/ww/autoSuggest?site=" + gsaSite + "&host=" + gsaURL + "&rcLocaleJS=" + rcLocaleJS,select: function(event, item) {
                $("#spp-support-search-textbox").val(item.item.value);
                $("#spp-search-support").submit();
            }});
    }, false);
    var smeSessionCookie = getCookie("SMSESSION");
    var userDetail = getCookie("USERDETAIL");
    setLoginState();
    setLoginState_New();
    setLoginState_New_Mega_Nav();
    displayCartIcon();
    if (typeof (loginVar == "undefined")) {
        var loginVar = "xxx";
    }
    $.ajax({type: "GET",url: labels.consumer_util_url,dataType: "jsonp",success: function(data) {
            var userRole = "";
            var isCIUser = data.isCIUser;
            if (isCIUser) {
                userRole = "CI";
                setSessionCookie("USERDETAIL", data.userName);
                setSessionCookie("ISCIUSER", data.isCIUser);
                setSessionCookie("CILOCALE", data.CILocale);
                setSessionCookie("USERROLE", userRole);
                setLoginState();
                setLoginState_New();
                setLoginState_New_Mega_Nav();
                displayCartIcon();
            } else {
                if ((!isStringNullOrEmpty(smeSessionCookie) && (isStringNullOrEmpty(userDetail))) || userDetail != loginVar.userName) {
                    displayHeader();
                }
            }
        },error: function(XMLHttpRequest, textStatus, errorThrown) {
            if ((!isStringNullOrEmpty(smeSessionCookie) && (isStringNullOrEmpty(userDetail))) || userDetail != loginVar.userName) {
                displayHeader();
            }
        },crossDomain: true,jsonpCallback: "results"});
    $("#login-div li").mouseover(function() {
        $("#header .searchForm").css("visibility", "hidden");
    }).mouseout(function() {
        $("#header .searchForm").css("visibility", "visible");
    });
    if ($("#partnerLoginFrm")[0]) {
        $("#formPassword").keyup(function(e) {
            if (e.which == 13) {
                e.preventDefault();
                loginSubmit();
            }
        });
    }
    var navTab = $(document).getUrlParam("navtab");
    var subNavTab = $(document).getUrlParam("subnavtab");
    if (navTab) {
        var navTabLink = "#" + navTab + "-li4";
        var navTabContent = "#" + navTab + "-cd4";
        var navTabContentF = $(navTabContent).parents("div.tab4");
        var navTabContentF1 = $(navTabContent).parents("div.tab");
        if ($(navTabLink).html()) {
            $(navTabLink).siblings().removeClass("active");
            $(navTabLink).addClass("active");
            if (navTabContentF.length > 0) {
                navTabContentF.siblings().removeClass("active");
                navTabContentF.addClass("active");
            }
            if ($(navTabLink).length > 0) {
                $(navTabLink).click();
            }
        }
        if (subNavTab) {
            var subNavTabLink = "#" + subNavTab + "-li3";
            var subNavTabContent = "#" + subNavTab + "-cd3";
            var subNavTabContentF = $(subNavTabContent).parents("div.tab3");
            if ($(subNavTabLink).html()) {
                $(subNavTabLink).siblings().removeClass("active");
                $(subNavTabLink).addClass("active");
                if (subNavTabContentF.length > 0) {
                    subNavTabContentF.siblings().removeClass("active").css({"position": "absolute","top": "-99999px","left": "-99999px"});
                    subNavTabContentF.addClass("active").css({"position": "static","top": "0px","left": "0px"});
                }
                if ($(subNavTabLink).length > 0) {
                    $(subNavTabLink).click();
                }
            }
        }
    }
    $("a.videoCallBtn_Popup").click(function() {
        if ($("#videoPopup").length > 0) {
            $("#videoPopup .title").html($(this).attr("videotitle"));
            var videoContentHtml = '<object width="648" height="422">' + '<param name="movie" value="' + $(this).attr("videourl") + '"></param>' + '<embed src="' + $(this).attr("videourl") + '" type="application/x-shockwave-flash" width="648" height="422" wmode="transparent" allowfullscreen="true"></embed>' + '<param name="allowFullScreen" value="true"></object>';
            $(".video").html(videoContentHtml);
        }
    });
    if (isSeagateDirectUser == "true") {
        $("ul.breadcrumbs").find("li").each(function(index, value) {
            if (index == 0) {
                $(this).html("<a href='javascript:showSecurePage(sdUrl)'>" + labels.seagate_direct_home + "</a>");
            }
        });
        $("ul.nav-breadcrumb").find("li").each(function(index, value) {
            if (index == 0) {
                $(this).html("<a href='javascript:showSecurePage(sdUrl)'>" + labels.seagate_direct_home + "</a><span class='divider'>/</span>");
            }
        });
    }
    if (IsSppUser == "true") {
        $("ul.breadcrumbs").find("li").each(function(index, value) {
            if (index == 0) {
                $(this).html("<a href='javascript:showSecurePage(sppUrl)'>" + labels.spp_home + "</a>");
            }
        });
        $("ul.nav-breadcrumb").find("li").each(function(index, value) {
            if (index == 0) {
                $(this).html("<a href='javascript:showSecurePage(sppUrl)'>" + labels.spp_home + "</a><span class='divider'>/</span>");
            }
        });
    }
    if ($(".support-downloads.support-pdp").length > 0) {
        generateSupportDownloadsDocumentsLinks();
    }
});
$(window).load(function() {
    if ($("#cartSection").length != 0) {
        CartInfo.init();
    }
    if ($("#cartLineItems_new").length != 0) {
        CartInfoX_New.init();
    }
});
function generateCollapse(ulId, key) {
    var $Ul = $("#" + ulId);
    var $Lis = null;
    if ($Ul != null) {
        $Lis = $Ul.children();
    }
    if ($Lis == null || $Lis.length == 0) {
        $Ul.prev().remove();
        $Ul.remove();
    } else {
        if ($Lis.length > 5) {
            var collapseStr = '<li><i class="ss-navigateright"></i>' + '<div class="support-pdp-list-item">' + '<a href="#" class="collapse-toggle" data-toggle="collapse" data-target="#collapse-' + ulId + '">' + key + "</a>" + "</div>" + '<div class="collapse-content collapse" id="collapse-' + ulId + '" style="height:0px">' + '<div class="collapse-inner">' + '<ul class="support-pdp-list unstyled">';
            $Lis.each(function(i, val) {
                if (i > 4) {
                    collapseStr = collapseStr + "<li>" + val.innerHTML + "</li>";
                    $(val).remove();
                }
            });
            collapseStr = collapseStr + "</ul></div></div></li>";
            $Ul.html($Ul.html() + collapseStr);
        }
    }
}
function generateSupportDownloadsDocumentsLinks() {
    var SeeAllDownloadsText = $("#SeeAllDownloads").val();
    generateCollapse("supportDownloads", SeeAllDownloadsText);
    var $supportDownloadsReal = $("#supportDownloadsReal");
    if ($supportDownloadsReal != null) {
        $("#supportDownloadsMark").replaceWith($("#supportDownloadsReal").html());
        $("#supportDownloadsMark").attr("display", "block");
        $("#supportDownloadsReal").remove();
    }
    var SeeAllDocumentsText = $("#SeeAllDocuments").val();
    generateCollapse("supportDocuments", SeeAllDocumentsText);
    var $supportKeyLinks = $("#supportKeyLinks");
    if ($supportKeyLinks != null && $supportKeyLinks.children().length > 5 && "${foundPDP}" == "true") {
        var $pdpLi = $supportKeyLinks.children().last();
        $supportKeyLinks.children().eq(3).after($pdpLi);
    }
    var SeeAllKeyLinksText = $("#SeeAllKeyLinks").val();
    generateCollapse("supportKeyLinks", SeeAllKeyLinksText);
}
function getEcommLocale() {
    var ecommLocale = "";
    ecommLocale = getCookie(LOCALE_COOKIE_NAME_ECOMM_TEMP);
    if (ecommLocale == null) {
        ecommLocale = getCookie(LOCALE_COOKIE_NAME_ECOMM_PERMANENT);
    }
    if (ecommLocale == null && SUPPORTED_ECOMM_LOCALE.indexOf(rcLocaleJS) != -1) {
        ecommLocale = rcLocaleJS;
    } else {
        if (ecommLocale == null) {
            ecommLocale = "";
        }
    }
    if (SUPPORTED_ECOMM_LOCALE.indexOf(ecommLocale) == -1) {
        ecommLocale = "";
    }
    return ecommLocale;
}
function getEcommCurrency() {
    for (i = 0; i < ecommLocaleMap.ecommLocalesList.length; i++) {
        if (ecommLocaleMap.ecommLocalesList[i].ecommLocale == getEcommLocale()) {
            return ecommLocaleMap.ecommLocalesList[i].currency;
        }
    }
}
function getDrLocale() {
    for (i = 0; i < ecommLocaleMap.ecommLocalesList.length; i++) {
        if (ecommLocaleMap.ecommLocalesList[i].ecommLocale == getEcommLocale()) {
            return ecommLocaleMap.ecommLocalesList[i].drLocale;
        }
    }
}
function setViewCartLink() {
    if (typeof (ecommLocaleMap != "undefined")) {
        var drLocale = getDrLocale();
        $(".view-cart").attr("href", "https://shop.seagate.com/servlet/ControllerServlet?Action=DisplayPage&Env=BASE&id=ThreePgCheckoutShoppingCartPage&Locale=" + drLocale + "&SiteID=sgateus");
    } else {
        $(".view-cart").attr("href", "https://shop.seagate.com/servlet/ControllerServlet?Action=DisplayPage&Env=BASE&id=ThreePgCheckoutShoppingCartPage&Locale=en_US&SiteID=sgateus");
    }
}
function displayCartIcon() {
    var ecommLocale = getEcommLocale();
    if (ecommLocale != "") {
        $(".gn-cart.gn-icon").css("display", "");
        $(".gn-store").css("display", "");
    }
}
function displayHeader() {
    $.ajax({type: "GET",url: httpsURL + "/ww/jsp/common/configUtil.jsp",dataType: "jsonp",success: function(data) {
            setSessionCookie("USERDETAIL", data.userName);
            setSessionCookie("ISSPPUSER", data.isSppUser);
            setSessionCookie("SPPLOCALE", data.SppLocale);
            var userRole = data.userRole;
            var userGroup = data.userGroup;
            if (userGroup != "undefined" && userGroup.indexOf("cn=all seagate suppliers") != -1) {
                userRole = "Supplier";
            } else {
                if (userRole == "" && userGroup.indexOf("o=seagate.com") != -1) {
                    userRole = "Employee";
                }
            }
            setSessionCookie("USERROLE", userRole);
            setLoginState();
            setLoginState_New();
            setLoginState_New_Mega_Nav();
            displayCartIcon();
        },crossDomain: true,jsonpCallback: "results"});
}
$(document).ready(function() {
    $(".nav-list .noclick>a").css("cursor", "default").css("text-decoration", "none");
    $(".nav-list .noclick>a").click(function(e) {
        e.preventDefault();
    });
});
function teaserProductGridItemHeight() {
    if ($(window).width() > 767) {
        setSameElementHeight(".teaser-product-grid-item-name");
        setSameElementHeight(".teaser-product-grid-item-message");
        setSameElementHeight(".teaser-product-grid-item-proposition");
    } else {
        resetElementHeight(".teaser-product-grid-item-name");
        resetElementHeight(".teaser-product-grid-item-message");
        resetElementHeight(".teaser-product-grid-item-proposition");
    }
}
$(document).ready(function() {
    $("a.videoCallBtn").fancybox({"padding": 0,"autoScale": false,"transitionIn": "none","transitionOut": "none"});
    if ($(".teaser-product-grid-item").length > 0) {
        teaserProductGridItemHeight();
        $(window).resize(function() {
            teaserProductGridItemHeight();
        });
    }
    $("button#burger").click(function() {
        if ($("#nav-wrapper").width() == 0) {
            $("#nav-wrapper").addClass("nav-wrapper-mobile-width-open");
            $("#mobile-wrapper").css("max-width", "340px");
            $("#nav-opacity").css("display", "block");
            if ($("#mega-nav-container").hasClass("light")) {
                $("button#burger").addClass("light-active");
            }
        } else {
            $("#nav-wrapper").removeClass("nav-wrapper-mobile-width-open");
            $("#mobile-wrapper").css("max-width", "0");
            $("#nav-opacity").css("display", "none");
            if ($("#mega-nav-container").hasClass("light")) {
                $("button#burger").removeClass("light-active");
            }
        }
    });
    $("#nav-opacity").click(function() {
        $("#nav-wrapper").removeClass("nav-wrapper-mobile-width-open");
        $("#mobile-wrapper").css("max-width", "0");
        $("#nav-opacity").css("display", "none");
        if ($("#mega-nav-container").hasClass("light")) {
            $("button#burger").removeClass("light-active");
        }
    });
    $(function() {
        $(".vtab > li > a").click(function(e) {
            e.preventDefault();
        });
        $(".vtab>li").click(function(e) {
            if ($(window).width() < 781) {
                e.preventDefault();
                $(".mega-nav>li").addClass("open");
                $("div#vtab-back").removeClass("hidden");
                setTimeout(function() {
                    $("div#category-name").removeClass("hidden");
                }, 400);
                var newcontent = $(this).children().attr("href");
                $(newcontent).addClass("open");
                var height;
                if (($(document).height()) > ($(".mega-nav-tab").height() + 200)) {
                    height = $(document).height();
                } else {
                    height = $(".mega-nav-tab").height() + 200;
                }
                $("#mobile-wrapper").css("height", height + "px");
                var lev1 = $(this).parents("li.mega-lev1-left").children("a").text();
                $("div#vtab-back>a").text(lev1);
                $("div#vtab-back>a").prepend('<div class="arrow-left"></div> ');
                var category = $(this).children("a").text();
                $("div#category-name>div>span").text(category);
                var catLevel = $(this).parents("li.mega-lev1-left").index();
                var fixTopMargin = $(this).children("a").attr("href");
                var topMargin = (72 - ((catLevel - 1) * 46));
                $(fixTopMargin).css("margin-top", topMargin + "px");
            }
        });
        $("div#vtab-back").click(function(e) {
            e.preventDefault();
            $(".mega-nav>li").removeClass("open");
            $(".vtab>li").removeClass("open");
            setTimeout(function() {
                $(".mega-nav-contentblock").removeClass("open");
            }, 500);
            $("div#vtab-back").addClass("hidden");
            $("div#category-name").addClass("hidden");
        });
        $(".vtab>li").on("mouseover", function(e) {
            e.preventDefault();
            if ($(this).hasClass("open")) {
            } else {
                if ($(this).hasClass("avail-item")) {
                    var ulId = $(this).parent().attr("id");
                    var oldcontent = $("#" + ulId + ">li.open>a").attr("href");
                    var newcontent = $(this).children("a").attr("href");
                    $(newcontent).removeClass("hidden");
                    $(oldcontent).addClass("hidden");
                    $("#" + ulId + ">li").removeClass("open");
                    $(this).addClass("open");
                }
            }
        });
        $("#vtab1 a").on("mouseclick", function(e) {
            e.preventDefault();
            if ($(this).hasClass("open")) {
            } else {
                var oldcontent = $("#vtab3 a.open").attr("href");
                var newcontent = $(this).attr("href");
                $(newcontent).removeClass("hidden");
                $(oldcontent).addClass("hidden");
                $("#vtab3 a").removeClass("open");
                $(this).addClass("open");
            }
        });
    });
    $("ul.vtab").click(function() {
        return false;
    });
    $(".mega-nav > li.mega-lev1-left").not(".nav-store-link").click(function() {
        if (!$(this).is("ul.vtab")) {
            if ($(this).closest("li.mega-lev1-left").hasClass("active")) {
                $(this).closest("li.mega-lev1-left").removeClass("active");
            } else {
                $(".mega-nav li.mega-lev1-left").removeClass("active");
                $(this).closest("li.mega-lev1-left").addClass("active");
            }
        }
    });
});
$(window).ready(function() {
    var width = $(this).width();
    var height = $(this).height() + 200;
    if (width < 781) {
        $("#mobile-wrapper").addClass("mobile-wrapper-mobile-height");
        $(".mega-nav li.mega-lev1-left.expand").css("background", "linear-gradient(to right, #E3E3E3 0%, #E3E3E3 275px, #333333 275px, #333333 100%) repeat scroll 0 0 rgba(0, 0, 0, 0)");
    } else {
        $("#mobile-wrapper").removeClass("mobile-wrapper-mobile-height");
        $(".mega-nav li.mega-lev1-left.expand").css("background", "none");
    }
    if (width < 387) {
        var newval = Math.round(275 - ((387 - width)));
        $(".mega-nav li.mega-lev1-left.expand").css("background", "linear-gradient(to right, #E3E3E3 0%, #E3E3E3 " + newval + "px, #333333 " + newval + "px, #333333 100%) repeat scroll 0 0 rgba(0, 0, 0, 0)");
    } else {
    }
    var scrollTop = $(window).scrollTop();
    height = height - 246 + scrollTop;
    $("#vtab-store").css("top", height + "px");
});
$(window).resize(function() {
    var width = $(this).innerWidth();
    var height = $(this).height() + 200;
    if (width < 780) {
        $("#mobile-wrapper").addClass("mobile-wrapper-mobile-height");
        $(".mega-nav li.mega-lev1-left.expand").css("background", "linear-gradient(to right, #E3E3E3 0%, #E3E3E3 275px, #333333 275px, #333333 100%) repeat scroll 0 0 rgba(0, 0, 0, 0)");
        $("#nav-wrapper").addClass("nav-wrapper-mobile-width");
    } else {
        $("#mobile-wrapper").removeClass("mobile-wrapper-mobile-height");
        $(".mega-nav li.mega-lev1-left.expand").css("background", "none");
        $("#nav-wrapper").removeClass("nav-wrapper-mobile-width , nav-wrapper-mobile-width-open");
        $("#burger").removeClass("light-active");
        $("#nav-opacity").css("display", "none");
    }
    if (width < 387) {
        var newval = Math.round(275 - ((387 - width)));
        $(".mega-nav li.mega-lev1-left.expand").css("background", "linear-gradient(to right, #E3E3E3 0%, #E3E3E3 " + newval + "px, #333333 " + newval + "px, #333333 100%) repeat scroll 0 0 rgba(0, 0, 0, 0)");
    } else {
    }
    var scrollTop = $(window).scrollTop();
    height = height - 246 + scrollTop;
    $("#vtab-store").css("top", height + "px");
});
$(window).on("scroll", function() {
    var height = $(this).height();
    var scrollTop = $(window).scrollTop();
    height = height - 46 + scrollTop;
    $("#vtab-store").css("top", height + "px");
});
var isLight;
$(window).ready(function() {
    if ($("#mega-nav-container").hasClass("light")) {
        isLight = true;
    }
});
$(window).on("scroll", function() {
    if ($(window).width() > 780) {
        var scrollTop = $(window).scrollTop();
        $("#mega-nav-container").css("top", scrollTop + "px");
        if ($("#mega-nav-container").hasClass("sticky-nav") && (scrollTop == 0)) {
            $("#mega-nav-container").removeClass("sticky-nav");
            if (!isLight) {
                $("#mega-nav-container").removeClass("light");
            }
        } else {
            if ($("#mega-nav-container").hasClass("sticky-nav")) {
            } else {
                if (scrollTop != 0) {
                    $("#mega-nav-container").addClass("sticky-nav");
                    if (!isLight) {
                        $("#mega-nav-container").addClass("light");
                    }
                }
            }
        }
    }
});
var GlobalNav = (function($) {
    var defaults = {"gnContainer": ".gn-container:eq(0)","stickyHeader": ".sticky-header","globalNav": ".global-nav-oz","gnMenu": ".gn-menu","menuList": "ul.gn-menu-list > li","gnDropdown": ".gn-dropdown","gnMenuItemLevel1": ".gn-menu-item-1lvl","gnMenuItemLevel2": ".gn-menu-item-2lvl","gnMenuItemLevel3": ".gn-menu-box-3lvl","pulledMenuClass": "gn-menu-pulled","pulledDropClass": "gn-drop-pulled","openedMenuClass": "gn-menu-opened","gnSideToggle": ".gn-side-toggle","gnIconContainer": ".gn-icon-container","gnSideWrapper": ".gn-side-wrapper","gnSideContainer": ".gn-side-container","sideOpenedClass": "gn-side-opened","gnSubMenuOpenedClass": "gn-sub-menu-opened","gnSubMenuSelectedClass": "gn-sub-menu-selected","gnUser": "gn-user","pulledClass": "gn-user-pulled","gnUserOpenedClass": "gn-user-opened","dropOverlary": ".gn-drop-overlay","sideOverlary": ".gn-side-overlay","gnStore": ".gn-store","gnPostStickyClass": "gn-post-sticky","gnPreStickyClass": "gn-pre-sticky","stickyHeaderActiveClass": "sticky-header-active"};
    var GlobalNav = function(options) {
        options = $.extend(defaults, options);
        this.options = options;
        this.$gnContainer = $(options.gnContainer);
        this.$stickyHeader = this.$gnContainer.find(options.stickyHeader);
        this.$globalNav = this.$gnContainer.find(options.globalNav);
        this.$gnMenu = this.$globalNav.find(options.gnMenu);
        this.$gnMenuList = this.$gnMenu.find(options.menuList);
        this.$gnMenuItemLevel1 = this.$gnMenuList.find(options.gnMenuItemLevel1);
        this.$gnDropdown = this.$gnMenuList.find(options.gnDropdown);
        this.$gnSubMenuItemLevel2 = this.$gnDropdown.find(options.gnMenuItemLevel2);
        this.$gnSubMenuItemLevel3 = this.$gnDropdown.find(options.gnMenuItemLevel3);
        this.$gnStore = this.$globalNav.find(options.gnStore);
        this.$gnSideToggle = this.$globalNav.find(options.gnSideToggle);
        this.$gnIconContainer = this.$gnSideToggle.find(options.gnIconContainer);
        this.$gnSideWrapper = this.$globalNav.find(options.gnSideWrapper);
        this.$gnSideContainer = this.$gnSideWrapper.find(options.gnSideContainer);
        this.$dropOverlary = this.$globalNav.find(options.dropOverlary);
        this.$sideOverlary = this.$globalNav.find(options.sideOverlary);
        this.globalNavHeight = this.$globalNav.innerHeight();
    };
    GlobalNav.prototype.init = function() {
        var that = this;
        this.$gnMenuItemLevel1.children("a").on("mouseenter touchstart", function(e) {
            that.stickyHeader();
            that.toggleMenu($(this).parent().parent(), e.type);
            if (e.type == "touchstart") {
                that.togglePullMenu($(this).parent().parent());
                that.globalUser.hideMenu(that.globalUser.$gnUser);
                return false;
            } else {
                that.pullMenu($(this).parent().parent());
            }
        });
        this.$gnMenuItemLevel1.children("a").on("click", function(e) {
            e.preventDefault();
        });
        this.$gnMenuItemLevel1.children("span").on("click", function(e) {
            that.toggleMenu($(this).parent().parent(), e.type);
            that.togglePullMenu($(this).parent().parent());
        });
        this.$gnMenu.on("mouseleave", "li." + this.options.pulledMenuClass, function(e) {
            that.hideMenu($(this));
            that.toggleMenu($(this), e.type);
        });
        this.$gnMenuList.parent().on("mouseleave", function(e) {
            that.setStickyHeader();
        });
        $("body").on("touchstart", function(e) {
            var $target = $(e.target);
            if ($target.parents("." + that.options.pulledMenuClass).length <= 0 && !$target.hasClass(that.options.pulledMenuClass)) {
                that.hidePulledMenu();
                that.setStickyHeader();
            }
        });
        this.$gnSubMenuItemLevel2.children("span").on("click", function(e) {
            if ($(this).parent().siblings(that.options.gnMenuItemLevel3).length > 0) {
                that.$gnStore.hide();
                that.openLevel3($(this));
                that.$gnStore.delay(300).fadeIn(100);
            }
        });
        this.$gnSubMenuItemLevel3.find("> a").on("click", function(e) {
            e.preventDefault();
            that.$gnStore.hide();
            that.closeLevel3();
            that.$gnStore.delay(300).fadeIn(100);
        });
        this.$gnIconContainer.on("click", function(e) {
            var $globalNav = $(this).parents(that.options.globalNav);
            if ($globalNav.hasClass(that.options.sideOpenedClass)) {
                $globalNav.removeClass(that.options.sideOpenedClass);
                that.hideOverlay("side");
            } else {
                $globalNav.addClass(that.options.sideOpenedClass);
                that.$gnSideWrapper.css("height", that.getOverlayHeight(that.$gnSideContainer));
                that.showOverlay(that.$gnSideContainer, "side");
            }
            if ($globalNav.hasClass(that.options.gnUserOpenedClass)) {
                $globalNav.removeClass(that.options.gnUserOpenedClass);
                (that.globalUser.$gnUser).removeClass(that.options.pulledClass);
            }
        });
        this.$sideOverlary.on("touchstart click", function(e) {
            if (that.$globalNav.hasClass(that.options.sideOpenedClass)) {
                that.$globalNav.removeClass(that.options.sideOpenedClass);
                that.hideOverlay("side");
            }
            if (e.type == "touchstart") {
                return false;
            }
        });
    };
    GlobalNav.prototype.setStickyHeader = function(arg) {
        this.$gnContainer.removeClass(this.options.gnPostStickyClass).removeClass(this.options.gnPreStickyClass);
        if (typeof (arg) != "undefined") {
            this.$gnContainer.addClass(arg);
        }
    };
    GlobalNav.prototype.stickyHeader = function() {
        if (!this.$gnContainer.hasClass(this.options.gnPostStickyClass) && !this.$gnContainer.hasClass(this.options.gnPreStickyClass)) {
            if (this.$stickyHeader.hasClass(this.options.stickyHeaderActiveClass)) {
                this.setStickyHeader(this.options.gnPostStickyClass);
            } else {
                this.setStickyHeader(this.options.gnPreStickyClass);
            }
        }
    };
    GlobalNav.prototype.togglePullMenu = function($this) {
        if ($this.hasClass(this.options.pulledMenuClass)) {
            this.hideMenu($this);
        } else {
            this.pullMenu($this);
        }
    };
    GlobalNav.prototype.pullMenu = function($this) {
        $this.siblings("li." + this.options.pulledMenuClass).removeClass(this.options.pulledMenuClass);
        if ($this.find(this.options.gnDropdown).length) {
            $this.addClass(this.options.pulledMenuClass);
            this.$globalNav.addClass(this.options.pulledDropClass);
            this.showOverlay(this.$gnDropdown, "drop");
            this.setSameHeight($this);
        }
        this.closeLevel3();
    };
    GlobalNav.prototype.hideMenu = function($this) {
        $this.removeClass(this.options.pulledMenuClass);
        this.$globalNav.removeClass(this.options.pulledDropClass);
        this.hideOverlay("drop");
    };
    GlobalNav.prototype.hidePulledMenu = function() {
        var $pulledMenu = this.$gnMenu.find(this.options.menuList + "." + this.options.pulledMenuClass);
        if ($pulledMenu.length > 0) {
            this.hideMenu($pulledMenu);
        }
    };
    GlobalNav.prototype.toggleMenu = function($this, eventType) {
        $this.siblings().removeClass(this.options.openedMenuClass);
        if (eventType == "mouseenter") {
            $this.addClass(this.options.openedMenuClass);
        }
        if (eventType == "mouseleave") {
        } else {
            $this.siblings().find(this.options.gnDropdown).css("height", "");
            $this.toggleClass(this.options.openedMenuClass);
            var $gnDropdown = $this.find(this.options.gnDropdown);
            if ($this.hasClass(this.options.openedMenuClass)) {
                $gnDropdown.css("height", $gnDropdown.find(".container").innerHeight());
            } else {
                $gnDropdown.css("height", "");
            }
        }
    };
    GlobalNav.prototype.openLevel3 = function($this) {
        this.$gnMenu.addClass(this.options.gnSubMenuOpenedClass);
        var $gnMenuItemLevel3 = $this.parent().siblings(this.options.gnMenuItemLevel3);
        $gnMenuItemLevel3.addClass(this.options.gnSubMenuSelectedClass);
        var gnMenuItemLevel3Height = $gnMenuItemLevel3.innerHeight();
        this.$gnMenu.css("height", gnMenuItemLevel3Height);
    };
    GlobalNav.prototype.closeLevel3 = function() {
        this.$gnMenu.removeClass(this.options.gnSubMenuOpenedClass);
        this.$gnSubMenuItemLevel3.removeClass(this.options.gnSubMenuSelectedClass);
        this.$gnMenu.css("height", "");
    };
    GlobalNav.prototype.getOverlayHeight = function($obj, type) {
        var overlayHeight = $(document).innerHeight();
        var objHeight = $obj.innerHeight();
        if ($obj.hasClass(this.options.gnDropdown.substring(1, this.options.gnDropdown.length))) {
            objHeight = objHeight + this.globalNavHeight;
        }
        if (objHeight > overlayHeight) {
            overlayHeight = objHeight;
        }
        if ($obj.hasClass(this.options.gnDropdown.substring(1, this.options.gnDropdown.length)) || type == "user") {
            if (!this.$gnContainer.parents(".home-page").length) {
                overlayHeight -= this.globalNavHeight;
            }
        }
        return overlayHeight;
    };
    GlobalNav.prototype.showOverlay = function($obj, type) {
        if (type == "drop") {
            this.$dropOverlary.css("height", this.getOverlayHeight($obj, type));
        } else {
            this.$sideOverlary.css("height", this.getOverlayHeight($obj, type));
        }
    };
    GlobalNav.prototype.hideOverlay = function(type) {
        if (type == "drop") {
            this.$dropOverlary.css("height", 0);
        } else {
            if (type == "side") {
                this.$sideOverlary.css("height", 0);
            }
        }
    };
    GlobalNav.prototype.setSameHeight = function($this) {
        var $gnDropdown = $this.find(this.options.gnDropdown);
        var $span9 = $gnDropdown.find(this.options.gnDropdown + "-menu > .span9");
        var $span3 = $gnDropdown.find(this.options.gnDropdown + "-menu > .span3");
        var height9 = $span9.innerHeight();
        var height3 = $span3.innerHeight();
        if (height9 != 0 && height3 != 0) {
            if (height9 > height3) {
                $span3.css("height", height9);
            } else {
                $span9.css("height", height3);
            }
        }
    };
    GlobalNav.prototype.setGlobalUser = function(globalUser) {
        this.globalUser = globalUser;
    };
    GlobalNav.prototype.setDebugLogger = function(debugLogger) {
        this.debugLogger = debugLogger;
    };
    return GlobalNav;
}(jQuery));
var GlobalSearch = (function($) {
    var defaults = {"gnContainer": ".gn-container:eq(0)","gnSearchInput": "input.gn-search-input","gnSearchClear": ".gn-search-clear"};
    var GlobalSearch = function(options) {
        options = $.extend(defaults, options);
        this.options = options;
        this.$gnContainer = $(options.gnContainer);
        this.$gnSearchInput = this.$gnContainer.find(options.gnSearchInput);
        this.$gnSearchClear = this.$gnSearchInput.siblings(options.gnSearchClear);
        this.defaultInputValue = this.$gnSearchInput.val();
    };
    GlobalSearch.prototype.init = function() {
        var that = this;
        this.$gnSearchInput.on("keyup", function() {
            var $gnSearchClear = $(this).siblings(that.options.gnSearchClear);
            var keyword = $(this).val();
            if (keyword != "") {
                $gnSearchClear.removeClass("hide");
            } else {
                $gnSearchClear.addClass("hide");
            }
        });
        this.$gnSearchClear.click(function(e) {
            e.preventDefault();
            $(this).siblings(that.options.gnSearchInput).val(that.defaultInputValue);
            $(this).addClass("hide");
        });
    };
    return GlobalSearch;
}(jQuery));
var GlobalUser = (function($) {
    var defaults = {"gnContainer": ".gn-container:eq(0)","globalNav": ".global-nav-oz","gnUser": ".gn-user","gnIconContainer": ".gn-icon-container","gnUserDrop": ".gn-user-drop","closeUser": ".user-delete","pulledClass": "gn-user-pulled","gnUserOpenedClass": "gn-user-opened"};
    var GlobalUser = function(options) {
        options = $.extend(defaults, options);
        this.options = options;
        this.$gnContainer = $(options.gnContainer);
        this.$globalNav = this.$gnContainer.find(options.globalNav);
        this.$gnUser = this.$gnContainer.find(options.gnUser);
        this.$gnIconContainer = this.$gnUser.find(options.gnIconContainer);
        this.$gnUserDrop = this.$gnUser.find(options.gnUserDrop);
        this.$closeUser = this.$gnUserDrop.find(options.closeUser);
    };
    GlobalUser.prototype.init = function() {
        var that = this;
        this.$gnIconContainer.children("span").on("click", function() {
            if ($(this).parents(that.options.globalNav).hasClass(that.options.gnUserOpenedClass)) {
                that.hideMenu($(this).parent().parent());
            } else {
                that.showMenu($(this).parent().parent(), "portrait");
            }
        });
        this.$closeUser.on("click", function(e) {
            that.hideMenu(that.$gnUser);
        });
        $("body").on("touchstart", function(e) {
            var $target = $(e.target);
            if ($target.hasClass(that.options.closeUser.substring(1, that.options.closeUser.length)) || (!$target.hasClass(that.options.gnUserDrop.substring(1, that.options.gnUserDrop.length)) && $target.parents(that.options.gnUserDrop).length <= 0)) {
                var $pulledMenu = that.$stickyHeader.find(that.options.gnUser + "." + that.options.pulledClass);
                if ($pulledMenu.length > 0) {
                    that.hideMenu($pulledMenu);
                }
            }
        });
    };
    GlobalUser.prototype.showMenu = function($this, screenMode) {
        this.$globalNav.addClass(this.options.gnUserOpenedClass);
        if (screenMode == "portrait") {
            var height = $(window).innerHeight();
            height -= this.$globalNav.innerHeight();
            this.$gnUserDrop.css("min-height", height);
            $this.removeClass("portrait").removeClass("landscape").addClass("portrait");
        } else {
            $this.removeClass("portrait").removeClass("landscape").addClass("landscape");
        }
        this.globalNav.showOverlay(this.globalNav.$gnSideContainer, "user");
    };
    GlobalUser.prototype.hideMenu = function($this) {
        this.globalNav.hideOverlay(this.globalNav.$gnSideContainer, "side");
        $this.removeClass(this.options.pulledClass);
        $(this.options.globalNav).removeClass(this.options.gnUserOpenedClass);
    };
    GlobalUser.prototype.setGlobalNav = function(globalNav) {
        this.globalNav = globalNav;
    };
    return GlobalUser;
}(jQuery));
var DebugLogger = (function($) {
    var DebugLogger = function() {
        this.debugTextarea = $(".debug-textarea");
        if (this.debugTextarea.length <= 0) {
            this.debugTextarea = $("<textarea/>").addClass("debug-textarea").css({"position": "absolute","left": 0,"bottom": 0,"width": "50%","height": "100px","z-index": 9999});
        }
    };
    DebugLogger.prototype.init = function() {
        this.debugTextarea.appendTo($("body"));
    };
    DebugLogger.prototype.log = function(log) {
        this.debugTextarea.val(log + "\n" + this.debugTextarea.val());
    };
    return DebugLogger;
}(jQuery));
$(function() {
    if ($(".gn-container").length > 0) {
        var globalNav = new GlobalNav({});
        globalNav.init();
        var globalSearch = new GlobalSearch({});
        globalSearch.init();
        var globalUser = new GlobalUser({});
        globalUser.init();
        globalNav.setGlobalUser(globalUser);
        globalUser.setGlobalNav(globalNav);
    }
});
/*!
 * jQuery Cookie Plugin v1.4.0
 * https://github.com/carhartl/jquery-cookie
 *
 * Copyright 2013 Klaus Hartl
 * Released under the MIT license
 */
(function(factory) {
    if (typeof define === "function" && define.amd) {
        define(["jquery"], factory);
    } else {
        if (typeof exports === "object") {
            factory(require("jquery"));
        } else {
            factory(jQuery);
        }
    }
}(function($) {
    var pluses = /\+/g;
    function encode(s) {
        return config.raw ? s : encodeURIComponent(s);
    }
    function decode(s) {
        return config.raw ? s : decodeURIComponent(s);
    }
    function stringifyCookieValue(value) {
        return encode(config.json ? JSON.stringify(value) : String(value));
    }
    function parseCookieValue(s) {
        if (s.indexOf('"') === 0) {
            s = s.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, "\\");
        }
        try {
            s = decodeURIComponent(s.replace(pluses, " "));
            return config.json ? JSON.parse(s) : s;
        } catch (e) {
        }
    }
    function read(s, converter) {
        var value = config.raw ? s : parseCookieValue(s);
        return $.isFunction(converter) ? converter(value) : value;
    }
    var config = $.cookie = function(key, value, options) {
        if (value !== undefined && !$.isFunction(value)) {
            options = $.extend({}, config.defaults, options);
            if (typeof options.expires === "number") {
                var days = options.expires, t = options.expires = new Date();
                t.setTime(+t + days * 86400000);
            }
            return (document.cookie = [encode(key), "=", stringifyCookieValue(value), options.expires ? "; expires=" + options.expires.toUTCString() : "", options.path ? "; path=" + options.path : "", options.domain ? "; domain=" + options.domain : "", options.secure ? "; secure" : ""].join(""));
        }
        var result = key ? undefined : {};
        var cookies = document.cookie ? document.cookie.split("; ") : [];
        for (var i = 0, l = cookies.length; i < l; i++) {
            var parts = cookies[i].split("=");
            var name = decode(parts.shift());
            var cookie = parts.join("=");
            if (key && key === name) {
                result = read(cookie, value);
                break;
            }
            if (!key && (cookie = read(cookie)) !== undefined) {
                result[name] = cookie;
            }
        }
        return result;
    };
    config.defaults = {};
    $.removeCookie = function(key, options) {
        if ($.cookie(key) === undefined) {
            return false;
        }
        $.cookie(key, "", $.extend({}, options, {expires: -1}));
        return !$.cookie(key);
    };
}));
