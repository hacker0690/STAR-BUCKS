if (Array.isArray || (Array.isArray = function(obj) {
        "use strict";
        return "[object Array]" == Object.prototype.toString.call(obj)
    }), Array.prototype.forEach || (Array.prototype.forEach = function(block, thisObject) {
        "use strict";
        for (var len = this.length >>> 0, i = 0; i < len; i++) i in this && block.call(thisObject, this[i], i, this)
    }), Array.prototype.map || (Array.prototype.map = function(fun) {
        "use strict";
        var len = this.length >>> 0;
        if ("function" != typeof fun) throw new TypeError;
        for (var res = new Array(len), thisp = arguments[1], i = 0; i < len; i++) i in this && (res[i] = fun.call(thisp, this[i], i, this));
        return res
    }), Array.prototype.filter || (Array.prototype.filter = function(block) {
        "use strict";
        for (var values = [], thisp = arguments[1], i = 0; i < this.length; i++) block.call(thisp, this[i]) && values.push(this[i]);
        return values
    }), Array.prototype.every || (Array.prototype.every = function(block) {
        "use strict";
        for (var thisp = arguments[1], i = 0; i < this.length; i++)
            if (!block.call(thisp, this[i])) return !1;
        return !0
    }), Array.prototype.some || (Array.prototype.some = function(block) {
        "use strict";
        for (var thisp = arguments[1], i = 0; i < this.length; i++)
            if (block.call(thisp, this[i])) return !0;
        return !1
    }), Array.prototype.reduce || (Array.prototype.reduce = function(fun) {
        "use strict";
        var len = this.length >>> 0;
        if ("function" != typeof fun) throw new TypeError;
        if (0 == len && 1 == arguments.length) throw new TypeError;
        var i = 0;
        if (arguments.length >= 2) var rv = arguments[1];
        else
            for (;;) {
                if (i in this) {
                    rv = this[i++];
                    break
                }
                if (++i >= len) throw new TypeError
            }
        for (; i < len; i++) i in this && (rv = fun.call(null, rv, this[i], i, this));
        return rv
    }), Array.prototype.reduceRight || (Array.prototype.reduceRight = function(fun) {
        var len = this.length >>> 0;
        if ("function" != typeof fun) throw new TypeError;
        if (0 == len && 1 == arguments.length) throw new TypeError;
        var i = len - 1;
        if (arguments.length >= 2) var rv = arguments[1];
        else
            for (;;) {
                if (i in this) {
                    rv = this[i--];
                    break
                }
                if (--i < 0) throw new TypeError
            }
        for (; i >= 0; i--) i in this && (rv = fun.call(null, rv, this[i], i, this));
        return rv
    }), Array.prototype.indexOf || (Array.prototype.indexOf = function(value) {
        "use strict";
        var length = this.length;
        if (!length) return -1;
        var i = arguments[1] || 0;
        if (i >= length) return -1;
        for (i < 0 && (i += length); i < length; i++)
            if (Object.prototype.hasOwnProperty.call(this, i) && value === this[i]) return i;
        return -1
    }), Array.prototype.lastIndexOf || (Array.prototype.lastIndexOf = function(value) {
        "use strict";
        var length = this.length;
        if (!length) return -1;
        var i = arguments[1] || length;
        for (i < 0 && (i += length), i = Math.min(i, length - 1); i >= 0; i--)
            if (Object.prototype.hasOwnProperty.call(this, i) && value === this[i]) return i;
        return -1
    }), Date.prototype.toISOString || (Date.prototype.toISOString = function() {
        "use strict";
        var result, length, value;
        if (!isFinite(this)) throw new RangeError;
        for (result = [this.getUTCFullYear(), this.getUTCMonth() + 1, this.getUTCDate(), this.getUTCHours(), this.getUTCMinutes(), this.getUTCSeconds()], length = result.length; length--;) value = result[length], value < 10 && (result[length] = "0" + value);
        return result.slice(0, 3).join("-") + "T" + result.slice(3).join(":") + "." + ("000" + this.getUTCMilliseconds()).slice(-3) + "Z"
    }), Date.now || (Date.now = function() {
        return (new Date).getTime()
    }), Date.prototype.toJSON || (Date.prototype.toJSON = function(key) {
        "use strict";
        if ("function" != typeof this.toISOString.call) throw new TypeError;
        return this.toISOString.call(this)
    }), isNaN(Date.parse("2011-06-15T21:40:05+06:00")) && (Date = function(NativeDate) {
        var Date = function(Y, M, D, h, m, s, ms) {
                var length = arguments.length;
                if (this instanceof NativeDate) {
                    var date = 1 == length && String(Y) === Y ? new NativeDate(Date.parse(Y)) : length >= 7 ? new NativeDate(Y, M, D, h, m, s, ms) : length >= 6 ? new NativeDate(Y, M, D, h, m, s) : length >= 5 ? new NativeDate(Y, M, D, h, m) : length >= 4 ? new NativeDate(Y, M, D, h) : length >= 3 ? new NativeDate(Y, M, D) : length >= 2 ? new NativeDate(Y, M) : length >= 1 ? new NativeDate(Y) : new NativeDate;
                    return date.constructor = Date, date
                }
                return NativeDate.apply(this, arguments)
            },
            isoDateExpression = new RegExp("^(\\d{4})(?:-(\\d{2})(?:-(\\d{2})(?:T(\\d{2}):(\\d{2})(?::(\\d{2})(?:\\.(\\d{3}))?)?(?:Z|(?:([-+])(\\d{2}):(\\d{2})))?)?)?)?$");
        for (var key in NativeDate) Date[key] = NativeDate[key];
        return Date.now = NativeDate.now, Date.UTC = NativeDate.UTC, Date.prototype = NativeDate.prototype, Date.prototype.constructor = Date, Date.parse = function(string) {
            "use strict";
            var match = isoDateExpression.exec(string);
            if (match) {
                match.shift();
                for (var i = 1; i < 7; i++) match[i] = +(match[i] || (i < 3 ? 1 : 0)), 1 == i && match[i]--;
                var minuteOffset = +match.pop(),
                    hourOffset = +match.pop(),
                    sign = match.pop(),
                    offset = 0;
                if (sign) {
                    if (hourOffset > 23 || minuteOffset > 59) return NaN;
                    offset = 6e4 * (60 * hourOffset + minuteOffset) * ("+" == sign ? -1 : 1)
                }
                return NativeDate.UTC.apply(this, match) + offset
            }
            return NativeDate.parse.apply(this, arguments)
        }, Date
    }(Date)), Function.prototype.bind || (Function.prototype.bind = function(context) {
        "use strict";
        if ("function" != typeof this) throw new TypeError;
        var _slice = Array.prototype.slice,
            _concat = Array.prototype.concat,
            _arguments = _slice.call(arguments, 1),
            _this = this,
            _function = function() {
                return _this.apply(this instanceof _dummy ? this : context, _concat.call(_arguments, _slice.call(arguments, 0)))
            },
            _dummy = function() {};
        return _dummy.prototype = _this.prototype, _function.prototype = new _dummy, _function
    }), !String.prototype.trim) {
    var trimBeginRegexp = /^\s\s*/,
        trimEndRegexp = /\s\s*$/;
    String.prototype.trim = function() {
        "use strict";
        return String(this).replace(trimBeginRegexp, "").replace(trimEndRegexp, "")
    }
}
this.JSON || (this.JSON = {}),
    function() {
        "use strict";

        function f(n) {
            return n < 10 ? "0" + n : n
        }

        function quote(string) {
            return escapable.lastIndex = 0, escapable.test(string) ? '"' + string.replace(escapable, function(a) {
                var c = meta[a];
                return "string" == typeof c ? c : "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4)
            }) + '"' : '"' + string + '"'
        }

        function str(key, holder) {
            var i, k, v, length, partial, mind = gap,
                value = holder[key];
            switch (value && "object" == typeof value && "function" == typeof value.toJSON && (value = value.toJSON(key)), "function" == typeof rep && (value = rep.call(holder, key, value)), typeof value) {
                case "string":
                    return quote(value);
                case "number":
                    return isFinite(value) ? String(value) : "null";
                case "boolean":
                case "null":
                    return String(value);
                case "object":
                    if (!value) return "null";
                    if (gap += indent, partial = [], "[object Array]" === Object.prototype.toString.apply(value)) {
                        for (length = value.length, i = 0; i < length; i += 1) partial[i] = str(i, value) || "null";
                        return v = 0 === partial.length ? "[]" : gap ? "[\n" + gap + partial.join(",\n" + gap) + "\n" + mind + "]" : "[" + partial.join(",") + "]", gap = mind, v
                    }
                    if (rep && "object" == typeof rep)
                        for (length = rep.length, i = 0; i < length; i += 1) k = rep[i], "string" == typeof k && (v = str(k, value), v && partial.push(quote(k) + (gap ? ": " : ":") + v));
                    else
                        for (k in value) Object.hasOwnProperty.call(value, k) && (v = str(k, value), v && partial.push(quote(k) + (gap ? ": " : ":") + v));
                    return v = 0 === partial.length ? "{}" : gap ? "{\n" + gap + partial.join(",\n" + gap) + "\n" + mind + "}" : "{" + partial.join(",") + "}", gap = mind, v
            }
        }
        "function" != typeof Date.prototype.toJSON && (Date.prototype.toJSON = function(key) {
            return isFinite(this.valueOf()) ? this.getUTCFullYear() + "-" + f(this.getUTCMonth() + 1) + "-" + f(this.getUTCDate()) + "T" + f(this.getUTCHours()) + ":" + f(this.getUTCMinutes()) + ":" + f(this.getUTCSeconds()) + "Z" : null
        }, String.prototype.toJSON = Number.prototype.toJSON = Boolean.prototype.toJSON = function(key) {
            return this.valueOf()
        });
        var cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
            escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
            gap, indent, meta = {
                "\b": "\\b",
                "\t": "\\t",
                "\n": "\\n",
                "\f": "\\f",
                "\r": "\\r",
                '"': '\\"',
                "\\": "\\\\"
            },
            rep;
        "function" != typeof JSON.stringify && (JSON.stringify = function(value, replacer, space) {
            var i;
            if (gap = "", indent = "", "number" == typeof space)
                for (i = 0; i < space; i += 1) indent += " ";
            else "string" == typeof space && (indent = space);
            if (rep = replacer, replacer && "function" != typeof replacer && ("object" != typeof replacer || "number" != typeof replacer.length)) throw new Error("JSON.stringify");
            return str("", {
                "": value
            })
        }), "function" != typeof JSON.parse && (JSON.parse = function(text, reviver) {
            function walk(holder, key) {
                var k, v, value = holder[key];
                if (value && "object" == typeof value)
                    for (k in value) Object.hasOwnProperty.call(value, k) && (v = walk(value, k), void 0 !== v ? value[k] = v : delete value[k]);
                return reviver.call(holder, key, value)
            }
            var j;
            if (text = String(text), cx.lastIndex = 0, cx.test(text) && (text = text.replace(cx, function(a) {
                    return "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4)
                })), /^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, ""))) return j = eval("(" + text + ")"), "function" == typeof reviver ? walk({
                "": j
            }, "") : j;
            throw new SyntaxError("JSON.parse")
        })
    }(), String.Format || (String.Format = function() {
        "use strict";
        if (0 === arguments.length) return null;
        for (var str = arguments[0], i = 1; i < arguments.length; i++) {
            var re = new RegExp("\\{" + (i - 1) + "\\}", "gm");
            str = str.replace(re, arguments[i])
        }
        return str
    });
var sb = function() {
    "use strict";

    function namespace(name) {
        for (var self = this, levels = name.split("."), i = 0, len = levels.length; i < len; i++) "undefined" == typeof self[levels[i]] && (self[levels[i]] = {}), self = self[levels[i]];
        return self
    }
    return {
        namespace: namespace
    }
}();
sb.type = function() {
    "use strict";
    var type, ARRAY = "array",
        BOOL = "boolean",
        FUNCTION = "function",
        NUMBER = "number",
        NULL = "null",
        OBJECT = "object",
        REGEX = "regexp",
        STRING = "string",
        TOSTRING = Object.prototype.toString,
        UNDEFINED = "undefined",
        TYPES = {
            "boolean": BOOL,
            number: NUMBER,
            string: STRING,
            undefined: UNDEFINED,
            "[object Array]": ARRAY,
            "[object Function]": FUNCTION,
            "[object RegExp]": REGEX
        },
        isNames = "isArray isBoolean isRegex isFunction isNull isNumber isString isUndefined isArguments isDate isEmpty".split(" "),
        self = {};
    type = function(obj) {
        return TYPES[typeof obj] || TYPES[TOSTRING.call(obj)] || (obj ? OBJECT : NULL)
    }, self = {
        isArray: function(obj) {
            return type(obj) === ARRAY
        },
        isBoolean: function(obj) {
            return typeof obj === BOOL || obj instanceof Boolean
        },
        isRegex: function(obj) {
            return type(obj) === REGEX
        },
        isFunction: function(obj) {
            return type(obj) === FUNCTION
        },
        isNull: function(obj) {
            return null === obj
        },
        isNumber: function(obj) {
            return type(obj) === NUMBER
        },
        isString: function(obj) {
            return typeof obj === STRING
        },
        isUndefined: function(obj) {
            return typeof obj === UNDEFINED
        },
        isArguments: function(obj) {
            return !(!obj || !obj.callee)
        },
        isDate: function(obj) {
            return !!(obj && obj.getTimezoneOffset && obj.setUTCFullYear)
        },
        isEmpty: function(obj) {
            if (this.isArray(obj) || this.isString(obj)) return 0 === obj.length;
            for (var key in obj)
                if (obj.hasOwnProperty(key)) return !1;
            return !0
        }
    };
    for (var i = 0, len = isNames.length; i < len; i++) self[isNames[i].replace(/^is/, "isNot")] = function(isName) {
        return function(obj) {
            return !self[isName](obj)
        }
    }(isNames[i]);
    return self
}();
var sb = function(global, parent, enable) {
        "use strict";
        var self = parent.console = parent.console || {},
            con = global.console,
            methodNames = "log info warn error debug dir".split(" "),
            fnEmpty = function() {};
        return self.disable = function() {
            for (var i = 0, len = methodNames.length; i < len; i++) self[methodNames[i]] = fnEmpty
        }, self.enable = function() {
            for (var i = methodNames.length; --i >= 0;) ! function(i, method) {
                self[method] = function() {
                    var args = Array.prototype.slice.call(arguments),
                        joinedArgs = args.join(", ");
                    return con ? void(con.firebug ? con[method].apply(window, args) : con[method] ? con[method](joinedArgs) : con.log(joinedArgs)) : void("status" in global && (global.status = joinedArgs))
                }
            }(i, methodNames[i])
        }, enable ? self.enable() : self.disable(), parent
    }(window, sb || {}, /(local|test)/.test(window.location.hostname)),
    sb = function(parent) {
        "use strict";
        var self = parent.query = parent.query || {},
            searchObj = {};
        return self.parse = function(querystring) {
            var search = querystring || window.location.search.substring(1);
            /[?#]/.test(search) && (search = search.match(/\?([^?#]*)/)[1]);
            var pair, i, l, params = {},
                pieces = search.split("&");
            for (i = 0, l = pieces.length; i < l; i++) pair = pieces[i].split("=", 2), "" !== pair[0] && (params[decodeURIComponent(pair[0])] = 2 == pair.length ? decodeURIComponent(pair[1].replace(/\+/g, " ")) : void 0);
            return params
        }, self.toObject = function() {
            return searchObj
        }, self.get = function(name) {
            return self.has(name) ? searchObj[name] : null
        }, self.has = function(name) {
            return searchObj.hasOwnProperty(name)
        }, searchObj = self.parse(), self._resetTo = function(querystring) {
            searchObj = self.parse(querystring)
        }, parent
    }(sb || {});
sb.namespace("i18n").culture = {
    lang: null,
    region: null,
    fromISOString: function(isoString) {
        "use strict";
        var parts = isoString.split("-");
        return this.lang = parts[0].toLowerCase(), this.region = parts.length > 1 ? parts[1].toUpperCase() : null, this
    },
    toISOString: function(separator) {
        return separator = separator || "-", this.region ? [this.lang, this.region].join(separator) : this.lang
    }
}, sb.i18n.culture.fromISOString(navigator.language || navigator.browserLanguage), sb.namespace("i18n").getText = function($, m) {
    "use strict";
    var promised = {},
        supportsSessionStorage = function() {
            try {
                return !!sessionStorage.getItem
            } catch (e) {
                return !1
            }
        }(),
        extendText = function(oTxt) {
            return $.extend(oTxt, {
                get: function(key, callback) {
                    var val = this[key] || key + "!NOTFOUND!";
                    return this.hasOwnProperty(key) && sb.type.isFunction(callback) && callback(val), val
                }
            })
        };
    return function(options) {
        var storageKey, stored, dfr, settings = $.extend({
                url: document.location.pathname,
                actionUrl: "/resources/i18n/gettext",
                resourceNames: []
            }, options || {}),
            query = {
                url: settings.url
            },
            keyParts = [];
        return "culture" in settings ? (query.culture = settings.culture, keyParts.push(settings.culture)) : keyParts.push(sb.i18n.culture.toISOString()), /https/.test(document.location.protocol) && keyParts.push("secure"), keyParts.push(settings.url), settings.resourceNames.length && (query.includeNodes = settings.resourceNames.sort().join(","), keyParts.push(query.includeNodes)), storageKey = keyParts.join(":"), promised[storageKey] || (stored = supportsSessionStorage ? sessionStorage.getItem(storageKey) : null, stored ? dfr = new $.Deferred(function(dfr) {
            sb.console.info("text loaded from sessionStorage for '" + storageKey + "'"), dfr.resolve(extendText(JSON.parse(stored)))
        }) : (dfr = new $.Deferred, $.getJSON(settings.actionUrl, query).success(function(oText) {
            supportsSessionStorage && sessionStorage.setItem(storageKey, JSON.stringify(oText)), sb.console.info("text loaded from xhr for '" + storageKey + "'"), dfr.resolve(extendText(oText))
        }).error(function(jqXHR, status, error) {
            dfr.reject(error), sb.console.warn("getText xhr failed for '" + this.url + "'")
        })), promised[storageKey] = dfr.promise()), promised[storageKey]
    }
}(jQuery), sb.namespace("i18n").getScript = function(url, callback) {
    "use strict";
    var dfr = new $.Deferred,
        cultureUrl = url.replace("ISO", sb.i18n.culture.toISOString()),
        langUrl = url.replace("ISO", sb.i18n.culture.lang);
    return $.getScript(cultureUrl).then([callback, dfr.resolve], function() {
        $.getScript(langUrl).then([callback, dfr.resolve], dfr.reject)
    }), dfr.promise()
};
var Handlebars = function() {
    var __module4__ = function() {
            "use strict";

            function SafeString(string) {
                this.string = string
            }
            var __exports__;
            return SafeString.prototype.toString = function() {
                return "" + this.string
            }, __exports__ = SafeString
        }(),
        __module3__ = function(__dependency1__) {
            "use strict";

            function escapeChar(chr) {
                return escape[chr] || "&amp;"
            }

            function extend(obj, value) {
                for (var key in value) Object.prototype.hasOwnProperty.call(value, key) && (obj[key] = value[key])
            }

            function escapeExpression(string) {
                return string instanceof SafeString ? string.toString() : string || 0 === string ? (string = "" + string, possible.test(string) ? string.replace(badChars, escapeChar) : string) : ""
            }

            function isEmpty(value) {
                return !value && 0 !== value || !(!isArray(value) || 0 !== value.length)
            }
            var __exports__ = {},
                SafeString = __dependency1__,
                escape = {
                    "&": "&amp;",
                    "<": "&lt;",
                    ">": "&gt;",
                    '"': "&quot;",
                    "'": "&#x27;",
                    "`": "&#x60;"
                },
                badChars = /[&<>"'`]/g,
                possible = /[&<>"'`]/;
            __exports__.extend = extend;
            var toString = Object.prototype.toString;
            __exports__.toString = toString;
            var isFunction = function(value) {
                return "function" == typeof value
            };
            isFunction(/x/) && (isFunction = function(value) {
                return "function" == typeof value && "[object Function]" === toString.call(value)
            });
            var isFunction;
            __exports__.isFunction = isFunction;
            var isArray = Array.isArray || function(value) {
                return !(!value || "object" != typeof value) && "[object Array]" === toString.call(value)
            };
            return __exports__.isArray = isArray, __exports__.escapeExpression = escapeExpression, __exports__.isEmpty = isEmpty, __exports__
        }(__module4__),
        __module5__ = function() {
            "use strict";

            function Exception(message, node) {
                var line;
                node && node.firstLine && (line = node.firstLine, message += " - " + line + ":" + node.firstColumn);
                for (var tmp = Error.prototype.constructor.call(this, message), idx = 0; idx < errorProps.length; idx++) this[errorProps[idx]] = tmp[errorProps[idx]];
                line && (this.lineNumber = line, this.column = node.firstColumn)
            }
            var __exports__, errorProps = ["description", "fileName", "lineNumber", "message", "name", "number", "stack"];
            return Exception.prototype = new Error, __exports__ = Exception
        }(),
        __module2__ = function(__dependency1__, __dependency2__) {
            "use strict";

            function HandlebarsEnvironment(helpers, partials) {
                this.helpers = helpers || {}, this.partials = partials || {}, registerDefaultHelpers(this)
            }

            function registerDefaultHelpers(instance) {
                instance.registerHelper("helperMissing", function(arg) {
                    if (2 !== arguments.length) throw new Exception("Missing helper: '" + arg + "'")
                }), instance.registerHelper("blockHelperMissing", function(context, options) {
                    var inverse = options.inverse || function() {},
                        fn = options.fn;
                    return isFunction(context) && (context = context.call(this)), context === !0 ? fn(this) : context === !1 || null == context ? inverse(this) : isArray(context) ? context.length > 0 ? instance.helpers.each(context, options) : inverse(this) : fn(context)
                }), instance.registerHelper("each", function(context, options) {
                    var data, fn = options.fn,
                        inverse = options.inverse,
                        i = 0,
                        ret = "";
                    if (isFunction(context) && (context = context.call(this)), options.data && (data = createFrame(options.data)), context && "object" == typeof context)
                        if (isArray(context))
                            for (var j = context.length; i < j; i++) data && (data.index = i, data.first = 0 === i, data.last = i === context.length - 1), ret += fn(context[i], {
                                data: data
                            });
                        else
                            for (var key in context) context.hasOwnProperty(key) && (data && (data.key = key, data.index = i, data.first = 0 === i), ret += fn(context[key], {
                                data: data
                            }), i++);
                    return 0 === i && (ret = inverse(this)), ret
                }), instance.registerHelper("if", function(conditional, options) {
                    return isFunction(conditional) && (conditional = conditional.call(this)), !options.hash.includeZero && !conditional || Utils.isEmpty(conditional) ? options.inverse(this) : options.fn(this)
                }), instance.registerHelper("unless", function(conditional, options) {
                    return instance.helpers["if"].call(this, conditional, {
                        fn: options.inverse,
                        inverse: options.fn,
                        hash: options.hash
                    })
                }), instance.registerHelper("with", function(context, options) {
                    if (isFunction(context) && (context = context.call(this)), !Utils.isEmpty(context)) return options.fn(context)
                }), instance.registerHelper("log", function(context, options) {
                    var level = options.data && null != options.data.level ? parseInt(options.data.level, 10) : 1;
                    instance.log(level, context)
                })
            }

            function log(level, obj) {
                logger.log(level, obj)
            }
            var __exports__ = {},
                Utils = __dependency1__,
                Exception = __dependency2__,
                VERSION = "1.3.0";
            __exports__.VERSION = VERSION;
            var COMPILER_REVISION = 4;
            __exports__.COMPILER_REVISION = COMPILER_REVISION;
            var REVISION_CHANGES = {
                1: "<= 1.0.rc.2",
                2: "== 1.0.0-rc.3",
                3: "== 1.0.0-rc.4",
                4: ">= 1.0.0"
            };
            __exports__.REVISION_CHANGES = REVISION_CHANGES;
            var isArray = Utils.isArray,
                isFunction = Utils.isFunction,
                toString = Utils.toString,
                objectType = "[object Object]";
            __exports__.HandlebarsEnvironment = HandlebarsEnvironment, HandlebarsEnvironment.prototype = {
                constructor: HandlebarsEnvironment,
                logger: logger,
                log: log,
                registerHelper: function(name, fn, inverse) {
                    if (toString.call(name) === objectType) {
                        if (inverse || fn) throw new Exception("Arg not supported with multiple helpers");
                        Utils.extend(this.helpers, name)
                    } else inverse && (fn.not = inverse), this.helpers[name] = fn
                },
                registerPartial: function(name, str) {
                    toString.call(name) === objectType ? Utils.extend(this.partials, name) : this.partials[name] = str
                }
            };
            var logger = {
                methodMap: {
                    0: "debug",
                    1: "info",
                    2: "warn",
                    3: "error"
                },
                DEBUG: 0,
                INFO: 1,
                WARN: 2,
                ERROR: 3,
                level: 3,
                log: function(level, obj) {
                    if (logger.level <= level) {
                        var method = logger.methodMap[level];
                        "undefined" != typeof console && console[method] && console[method].call(console, obj)
                    }
                }
            };
            __exports__.logger = logger, __exports__.log = log;
            var createFrame = function(object) {
                var obj = {};
                return Utils.extend(obj, object), obj
            };
            return __exports__.createFrame = createFrame, __exports__
        }(__module3__, __module5__),
        __module6__ = function(__dependency1__, __dependency2__, __dependency3__) {
            "use strict";

            function checkRevision(compilerInfo) {
                var compilerRevision = compilerInfo && compilerInfo[0] || 1,
                    currentRevision = COMPILER_REVISION;
                if (compilerRevision !== currentRevision) {
                    if (compilerRevision < currentRevision) {
                        var runtimeVersions = REVISION_CHANGES[currentRevision],
                            compilerVersions = REVISION_CHANGES[compilerRevision];
                        throw new Exception("Template was precompiled with an older version of Handlebars than the current runtime. Please update your precompiler to a newer version (" + runtimeVersions + ") or downgrade your runtime to an older version (" + compilerVersions + ").")
                    }
                    throw new Exception("Template was precompiled with a newer version of Handlebars than the current runtime. Please update your runtime to a newer version (" + compilerInfo[1] + ").")
                }
            }

            function template(templateSpec, env) {
                if (!env) throw new Exception("No environment passed to template");
                var invokePartialWrapper = function(partial, name, context, helpers, partials, data) {
                        var result = env.VM.invokePartial.apply(this, arguments);
                        if (null != result) return result;
                        if (env.compile) {
                            var options = {
                                helpers: helpers,
                                partials: partials,
                                data: data
                            };
                            return partials[name] = env.compile(partial, {
                                data: void 0 !== data
                            }, env), partials[name](context, options)
                        }
                        throw new Exception("The partial " + name + " could not be compiled when running in runtime-only mode")
                    },
                    container = {
                        escapeExpression: Utils.escapeExpression,
                        invokePartial: invokePartialWrapper,
                        programs: [],
                        program: function(i, fn, data) {
                            var programWrapper = this.programs[i];
                            return data ? programWrapper = program(i, fn, data) : programWrapper || (programWrapper = this.programs[i] = program(i, fn)), programWrapper
                        },
                        merge: function(param, common) {
                            var ret = param || common;
                            return param && common && param !== common && (ret = {}, Utils.extend(ret, common), Utils.extend(ret, param)), ret
                        },
                        programWithDepth: env.VM.programWithDepth,
                        noop: env.VM.noop,
                        compilerInfo: null
                    };
                return function(context, options) {
                    options = options || {};
                    var helpers, partials, namespace = options.partial ? options : env;
                    options.partial || (helpers = options.helpers, partials = options.partials);
                    var result = templateSpec.call(container, namespace, context, helpers, partials, options.data);
                    return options.partial || env.VM.checkRevision(container.compilerInfo), result
                }
            }

            function programWithDepth(i, fn, data) {
                var args = Array.prototype.slice.call(arguments, 3),
                    prog = function(context, options) {
                        return options = options || {}, fn.apply(this, [context, options.data || data].concat(args))
                    };
                return prog.program = i, prog.depth = args.length, prog
            }

            function program(i, fn, data) {
                var prog = function(context, options) {
                    return options = options || {}, fn(context, options.data || data)
                };
                return prog.program = i, prog.depth = 0, prog
            }

            function invokePartial(partial, name, context, helpers, partials, data) {
                var options = {
                    partial: !0,
                    helpers: helpers,
                    partials: partials,
                    data: data
                };
                if (void 0 === partial) throw new Exception("The partial " + name + " could not be found");
                if (partial instanceof Function) return partial(context, options)
            }

            function noop() {
                return ""
            }
            var __exports__ = {},
                Utils = __dependency1__,
                Exception = __dependency2__,
                COMPILER_REVISION = __dependency3__.COMPILER_REVISION,
                REVISION_CHANGES = __dependency3__.REVISION_CHANGES;
            return __exports__.checkRevision = checkRevision, __exports__.template = template, __exports__.programWithDepth = programWithDepth, __exports__.program = program, __exports__.invokePartial = invokePartial, __exports__.noop = noop, __exports__
        }(__module3__, __module5__, __module2__),
        __module1__ = function(__dependency1__, __dependency2__, __dependency3__, __dependency4__, __dependency5__) {
            "use strict";
            var __exports__, base = __dependency1__,
                SafeString = __dependency2__,
                Exception = __dependency3__,
                Utils = __dependency4__,
                runtime = __dependency5__,
                create = function() {
                    var hb = new base.HandlebarsEnvironment;
                    return Utils.extend(hb, base), hb.SafeString = SafeString, hb.Exception = Exception, hb.Utils = Utils, hb.VM = runtime, hb.template = function(spec) {
                        return runtime.template(spec, hb)
                    }, hb
                },
                Handlebars = create();
            return Handlebars.create = create, __exports__ = Handlebars
        }(__module2__, __module4__, __module5__, __module3__, __module6__),
        __module7__ = function(__dependency1__) {
            "use strict";

            function LocationInfo(locInfo) {
                locInfo = locInfo || {}, this.firstLine = locInfo.first_line, this.firstColumn = locInfo.first_column, this.lastColumn = locInfo.last_column, this.lastLine = locInfo.last_line
            }
            var __exports__, Exception = __dependency1__,
                AST = {
                    ProgramNode: function(statements, inverseStrip, inverse, locInfo) {
                        var inverseLocationInfo, firstInverseNode;
                        3 === arguments.length ? (locInfo = inverse, inverse = null) : 2 === arguments.length && (locInfo = inverseStrip, inverseStrip = null), LocationInfo.call(this, locInfo), this.type = "program", this.statements = statements, this.strip = {}, inverse ? (firstInverseNode = inverse[0], firstInverseNode ? (inverseLocationInfo = {
                            first_line: firstInverseNode.firstLine,
                            last_line: firstInverseNode.lastLine,
                            last_column: firstInverseNode.lastColumn,
                            first_column: firstInverseNode.firstColumn
                        }, this.inverse = new AST.ProgramNode(inverse, inverseStrip, inverseLocationInfo)) : this.inverse = new AST.ProgramNode(inverse, inverseStrip), this.strip.right = inverseStrip.left) : inverseStrip && (this.strip.left = inverseStrip.right)
                    },
                    MustacheNode: function(rawParams, hash, open, strip, locInfo) {
                        if (LocationInfo.call(this, locInfo), this.type = "mustache", this.strip = strip, null != open && open.charAt) {
                            var escapeFlag = open.charAt(3) || open.charAt(2);
                            this.escaped = "{" !== escapeFlag && "&" !== escapeFlag
                        } else this.escaped = !!open;
                        rawParams instanceof AST.SexprNode ? this.sexpr = rawParams : this.sexpr = new AST.SexprNode(rawParams, hash), this.sexpr.isRoot = !0, this.id = this.sexpr.id, this.params = this.sexpr.params, this.hash = this.sexpr.hash, this.eligibleHelper = this.sexpr.eligibleHelper, this.isHelper = this.sexpr.isHelper
                    },
                    SexprNode: function(rawParams, hash, locInfo) {
                        LocationInfo.call(this, locInfo), this.type = "sexpr", this.hash = hash;
                        var id = this.id = rawParams[0],
                            params = this.params = rawParams.slice(1),
                            eligibleHelper = this.eligibleHelper = id.isSimple;
                        this.isHelper = eligibleHelper && (params.length || hash)
                    },
                    PartialNode: function(partialName, context, strip, locInfo) {
                        LocationInfo.call(this, locInfo), this.type = "partial", this.partialName = partialName, this.context = context, this.strip = strip
                    },
                    BlockNode: function(mustache, program, inverse, close, locInfo) {
                        if (LocationInfo.call(this, locInfo), mustache.sexpr.id.original !== close.path.original) throw new Exception(mustache.sexpr.id.original + " doesn't match " + close.path.original, this);
                        this.type = "block", this.mustache = mustache, this.program = program, this.inverse = inverse, this.strip = {
                            left: mustache.strip.left,
                            right: close.strip.right
                        }, (program || inverse).strip.left = mustache.strip.right, (inverse || program).strip.right = close.strip.left, inverse && !program && (this.isInverse = !0)
                    },
                    ContentNode: function(string, locInfo) {
                        LocationInfo.call(this, locInfo), this.type = "content", this.string = string
                    },
                    HashNode: function(pairs, locInfo) {
                        LocationInfo.call(this, locInfo), this.type = "hash", this.pairs = pairs
                    },
                    IdNode: function(parts, locInfo) {
                        LocationInfo.call(this, locInfo), this.type = "ID";
                        for (var original = "", dig = [], depth = 0, i = 0, l = parts.length; i < l; i++) {
                            var part = parts[i].part;
                            if (original += (parts[i].separator || "") + part, ".." === part || "." === part || "this" === part) {
                                if (dig.length > 0) throw new Exception("Invalid path: " + original, this);
                                ".." === part ? depth++ : this.isScoped = !0
                            } else dig.push(part)
                        }
                        this.original = original, this.parts = dig, this.string = dig.join("."), this.depth = depth, this.isSimple = 1 === parts.length && !this.isScoped && 0 === depth, this.stringModeValue = this.string
                    },
                    PartialNameNode: function(name, locInfo) {
                        LocationInfo.call(this, locInfo), this.type = "PARTIAL_NAME", this.name = name.original
                    },
                    DataNode: function(id, locInfo) {
                        LocationInfo.call(this, locInfo), this.type = "DATA", this.id = id
                    },
                    StringNode: function(string, locInfo) {
                        LocationInfo.call(this, locInfo), this.type = "STRING", this.original = this.string = this.stringModeValue = string
                    },
                    IntegerNode: function(integer, locInfo) {
                        LocationInfo.call(this, locInfo), this.type = "INTEGER", this.original = this.integer = integer, this.stringModeValue = Number(integer)
                    },
                    BooleanNode: function(bool, locInfo) {
                        LocationInfo.call(this, locInfo), this.type = "BOOLEAN", this.bool = bool, this.stringModeValue = "true" === bool
                    },
                    CommentNode: function(comment, locInfo) {
                        LocationInfo.call(this, locInfo), this.type = "comment", this.comment = comment
                    }
                };
            return __exports__ = AST
        }(__module5__),
        __module9__ = function() {
            "use strict";
            var __exports__, handlebars = function() {
                function stripFlags(open, close) {
                    return {
                        left: "~" === open.charAt(2),
                        right: "~" === close.charAt(0) || "~" === close.charAt(1)
                    }
                }

                function Parser() {
                    this.yy = {}
                }
                var parser = {
                        trace: function() {},
                        yy: {},
                        symbols_: {
                            error: 2,
                            root: 3,
                            statements: 4,
                            EOF: 5,
                            program: 6,
                            simpleInverse: 7,
                            statement: 8,
                            openInverse: 9,
                            closeBlock: 10,
                            openBlock: 11,
                            mustache: 12,
                            partial: 13,
                            CONTENT: 14,
                            COMMENT: 15,
                            OPEN_BLOCK: 16,
                            sexpr: 17,
                            CLOSE: 18,
                            OPEN_INVERSE: 19,
                            OPEN_ENDBLOCK: 20,
                            path: 21,
                            OPEN: 22,
                            OPEN_UNESCAPED: 23,
                            CLOSE_UNESCAPED: 24,
                            OPEN_PARTIAL: 25,
                            partialName: 26,
                            partial_option0: 27,
                            sexpr_repetition0: 28,
                            sexpr_option0: 29,
                            dataName: 30,
                            param: 31,
                            STRING: 32,
                            INTEGER: 33,
                            BOOLEAN: 34,
                            OPEN_SEXPR: 35,
                            CLOSE_SEXPR: 36,
                            hash: 37,
                            hash_repetition_plus0: 38,
                            hashSegment: 39,
                            ID: 40,
                            EQUALS: 41,
                            DATA: 42,
                            pathSegments: 43,
                            SEP: 44,
                            $accept: 0,
                            $end: 1
                        },
                        terminals_: {
                            2: "error",
                            5: "EOF",
                            14: "CONTENT",
                            15: "COMMENT",
                            16: "OPEN_BLOCK",
                            18: "CLOSE",
                            19: "OPEN_INVERSE",
                            20: "OPEN_ENDBLOCK",
                            22: "OPEN",
                            23: "OPEN_UNESCAPED",
                            24: "CLOSE_UNESCAPED",
                            25: "OPEN_PARTIAL",
                            32: "STRING",
                            33: "INTEGER",
                            34: "BOOLEAN",
                            35: "OPEN_SEXPR",
                            36: "CLOSE_SEXPR",
                            40: "ID",
                            41: "EQUALS",
                            42: "DATA",
                            44: "SEP"
                        },
                        productions_: [0, [3, 2],
                            [3, 1],
                            [6, 2],
                            [6, 3],
                            [6, 2],
                            [6, 1],
                            [6, 1],
                            [6, 0],
                            [4, 1],
                            [4, 2],
                            [8, 3],
                            [8, 3],
                            [8, 1],
                            [8, 1],
                            [8, 1],
                            [8, 1],
                            [11, 3],
                            [9, 3],
                            [10, 3],
                            [12, 3],
                            [12, 3],
                            [13, 4],
                            [7, 2],
                            [17, 3],
                            [17, 1],
                            [31, 1],
                            [31, 1],
                            [31, 1],
                            [31, 1],
                            [31, 1],
                            [31, 3],
                            [37, 1],
                            [39, 3],
                            [26, 1],
                            [26, 1],
                            [26, 1],
                            [30, 2],
                            [21, 1],
                            [43, 3],
                            [43, 1],
                            [27, 0],
                            [27, 1],
                            [28, 0],
                            [28, 2],
                            [29, 0],
                            [29, 1],
                            [38, 1],
                            [38, 2]
                        ],
                        performAction: function(yytext, yyleng, yylineno, yy, yystate, $$, _$) {
                            var $0 = $$.length - 1;
                            switch (yystate) {
                                case 1:
                                    return new yy.ProgramNode($$[$0 - 1], this._$);
                                case 2:
                                    return new yy.ProgramNode([], this._$);
                                case 3:
                                    this.$ = new yy.ProgramNode([], $$[$0 - 1], $$[$0], this._$);
                                    break;
                                case 4:
                                    this.$ = new yy.ProgramNode($$[$0 - 2], $$[$0 - 1], $$[$0], this._$);
                                    break;
                                case 5:
                                    this.$ = new yy.ProgramNode($$[$0 - 1], $$[$0], [], this._$);
                                    break;
                                case 6:
                                    this.$ = new yy.ProgramNode($$[$0], this._$);
                                    break;
                                case 7:
                                    this.$ = new yy.ProgramNode([], this._$);
                                    break;
                                case 8:
                                    this.$ = new yy.ProgramNode([], this._$);
                                    break;
                                case 9:
                                    this.$ = [$$[$0]];
                                    break;
                                case 10:
                                    $$[$0 - 1].push($$[$0]), this.$ = $$[$0 - 1];
                                    break;
                                case 11:
                                    this.$ = new yy.BlockNode($$[$0 - 2], $$[$0 - 1].inverse, $$[$0 - 1], $$[$0], this._$);
                                    break;
                                case 12:
                                    this.$ = new yy.BlockNode($$[$0 - 2], $$[$0 - 1], $$[$0 - 1].inverse, $$[$0], this._$);
                                    break;
                                case 13:
                                    this.$ = $$[$0];
                                    break;
                                case 14:
                                    this.$ = $$[$0];
                                    break;
                                case 15:
                                    this.$ = new yy.ContentNode($$[$0], this._$);
                                    break;
                                case 16:
                                    this.$ = new yy.CommentNode($$[$0], this._$);
                                    break;
                                case 17:
                                    this.$ = new yy.MustacheNode($$[$0 - 1], null, $$[$0 - 2], stripFlags($$[$0 - 2], $$[$0]), this._$);
                                    break;
                                case 18:
                                    this.$ = new yy.MustacheNode($$[$0 - 1], null, $$[$0 - 2], stripFlags($$[$0 - 2], $$[$0]), this._$);
                                    break;
                                case 19:
                                    this.$ = {
                                        path: $$[$0 - 1],
                                        strip: stripFlags($$[$0 - 2], $$[$0])
                                    };
                                    break;
                                case 20:
                                    this.$ = new yy.MustacheNode($$[$0 - 1], null, $$[$0 - 2], stripFlags($$[$0 - 2], $$[$0]), this._$);
                                    break;
                                case 21:
                                    this.$ = new yy.MustacheNode($$[$0 - 1], null, $$[$0 - 2], stripFlags($$[$0 - 2], $$[$0]), this._$);
                                    break;
                                case 22:
                                    this.$ = new yy.PartialNode($$[$0 - 2], $$[$0 - 1], stripFlags($$[$0 - 3], $$[$0]), this._$);
                                    break;
                                case 23:
                                    this.$ = stripFlags($$[$0 - 1], $$[$0]);
                                    break;
                                case 24:
                                    this.$ = new yy.SexprNode([$$[$0 - 2]].concat($$[$0 - 1]), $$[$0], this._$);
                                    break;
                                case 25:
                                    this.$ = new yy.SexprNode([$$[$0]], null, this._$);
                                    break;
                                case 26:
                                    this.$ = $$[$0];
                                    break;
                                case 27:
                                    this.$ = new yy.StringNode($$[$0], this._$);
                                    break;
                                case 28:
                                    this.$ = new yy.IntegerNode($$[$0], this._$);
                                    break;
                                case 29:
                                    this.$ = new yy.BooleanNode($$[$0], this._$);
                                    break;
                                case 30:
                                    this.$ = $$[$0];
                                    break;
                                case 31:
                                    $$[$0 - 1].isHelper = !0, this.$ = $$[$0 - 1];
                                    break;
                                case 32:
                                    this.$ = new yy.HashNode($$[$0], this._$);
                                    break;
                                case 33:
                                    this.$ = [$$[$0 - 2], $$[$0]];
                                    break;
                                case 34:
                                    this.$ = new yy.PartialNameNode($$[$0], this._$);
                                    break;
                                case 35:
                                    this.$ = new yy.PartialNameNode(new yy.StringNode($$[$0], this._$), this._$);
                                    break;
                                case 36:
                                    this.$ = new yy.PartialNameNode(new yy.IntegerNode($$[$0], this._$));
                                    break;
                                case 37:
                                    this.$ = new yy.DataNode($$[$0], this._$);
                                    break;
                                case 38:
                                    this.$ = new yy.IdNode($$[$0], this._$);
                                    break;
                                case 39:
                                    $$[$0 - 2].push({
                                        part: $$[$0],
                                        separator: $$[$0 - 1]
                                    }), this.$ = $$[$0 - 2];
                                    break;
                                case 40:
                                    this.$ = [{
                                        part: $$[$0]
                                    }];
                                    break;
                                case 43:
                                    this.$ = [];
                                    break;
                                case 44:
                                    $$[$0 - 1].push($$[$0]);
                                    break;
                                case 47:
                                    this.$ = [$$[$0]];
                                    break;
                                case 48:
                                    $$[$0 - 1].push($$[$0])
                            }
                        },
                        table: [{
                            3: 1,
                            4: 2,
                            5: [1, 3],
                            8: 4,
                            9: 5,
                            11: 6,
                            12: 7,
                            13: 8,
                            14: [1, 9],
                            15: [1, 10],
                            16: [1, 12],
                            19: [1, 11],
                            22: [1, 13],
                            23: [1, 14],
                            25: [1, 15]
                        }, {
                            1: [3]
                        }, {
                            5: [1, 16],
                            8: 17,
                            9: 5,
                            11: 6,
                            12: 7,
                            13: 8,
                            14: [1, 9],
                            15: [1, 10],
                            16: [1, 12],
                            19: [1, 11],
                            22: [1, 13],
                            23: [1, 14],
                            25: [1, 15]
                        }, {
                            1: [2, 2]
                        }, {
                            5: [2, 9],
                            14: [2, 9],
                            15: [2, 9],
                            16: [2, 9],
                            19: [2, 9],
                            20: [2, 9],
                            22: [2, 9],
                            23: [2, 9],
                            25: [2, 9]
                        }, {
                            4: 20,
                            6: 18,
                            7: 19,
                            8: 4,
                            9: 5,
                            11: 6,
                            12: 7,
                            13: 8,
                            14: [1, 9],
                            15: [1, 10],
                            16: [1, 12],
                            19: [1, 21],
                            20: [2, 8],
                            22: [1, 13],
                            23: [1, 14],
                            25: [1, 15]
                        }, {
                            4: 20,
                            6: 22,
                            7: 19,
                            8: 4,
                            9: 5,
                            11: 6,
                            12: 7,
                            13: 8,
                            14: [1, 9],
                            15: [1, 10],
                            16: [1, 12],
                            19: [1, 21],
                            20: [2, 8],
                            22: [1, 13],
                            23: [1, 14],
                            25: [1, 15]
                        }, {
                            5: [2, 13],
                            14: [2, 13],
                            15: [2, 13],
                            16: [2, 13],
                            19: [2, 13],
                            20: [2, 13],
                            22: [2, 13],
                            23: [2, 13],
                            25: [2, 13]
                        }, {
                            5: [2, 14],
                            14: [2, 14],
                            15: [2, 14],
                            16: [2, 14],
                            19: [2, 14],
                            20: [2, 14],
                            22: [2, 14],
                            23: [2, 14],
                            25: [2, 14]
                        }, {
                            5: [2, 15],
                            14: [2, 15],
                            15: [2, 15],
                            16: [2, 15],
                            19: [2, 15],
                            20: [2, 15],
                            22: [2, 15],
                            23: [2, 15],
                            25: [2, 15]
                        }, {
                            5: [2, 16],
                            14: [2, 16],
                            15: [2, 16],
                            16: [2, 16],
                            19: [2, 16],
                            20: [2, 16],
                            22: [2, 16],
                            23: [2, 16],
                            25: [2, 16]
                        }, {
                            17: 23,
                            21: 24,
                            30: 25,
                            40: [1, 28],
                            42: [1, 27],
                            43: 26
                        }, {
                            17: 29,
                            21: 24,
                            30: 25,
                            40: [1, 28],
                            42: [1, 27],
                            43: 26
                        }, {
                            17: 30,
                            21: 24,
                            30: 25,
                            40: [1, 28],
                            42: [1, 27],
                            43: 26
                        }, {
                            17: 31,
                            21: 24,
                            30: 25,
                            40: [1, 28],
                            42: [1, 27],
                            43: 26
                        }, {
                            21: 33,
                            26: 32,
                            32: [1, 34],
                            33: [1, 35],
                            40: [1, 28],
                            43: 26
                        }, {
                            1: [2, 1]
                        }, {
                            5: [2, 10],
                            14: [2, 10],
                            15: [2, 10],
                            16: [2, 10],
                            19: [2, 10],
                            20: [2, 10],
                            22: [2, 10],
                            23: [2, 10],
                            25: [2, 10]
                        }, {
                            10: 36,
                            20: [1, 37]
                        }, {
                            4: 38,
                            8: 4,
                            9: 5,
                            11: 6,
                            12: 7,
                            13: 8,
                            14: [1, 9],
                            15: [1, 10],
                            16: [1, 12],
                            19: [1, 11],
                            20: [2, 7],
                            22: [1, 13],
                            23: [1, 14],
                            25: [1, 15]
                        }, {
                            7: 39,
                            8: 17,
                            9: 5,
                            11: 6,
                            12: 7,
                            13: 8,
                            14: [1, 9],
                            15: [1, 10],
                            16: [1, 12],
                            19: [1, 21],
                            20: [2, 6],
                            22: [1, 13],
                            23: [1, 14],
                            25: [1, 15]
                        }, {
                            17: 23,
                            18: [1, 40],
                            21: 24,
                            30: 25,
                            40: [1, 28],
                            42: [1, 27],
                            43: 26
                        }, {
                            10: 41,
                            20: [1, 37]
                        }, {
                            18: [1, 42]
                        }, {
                            18: [2, 43],
                            24: [2, 43],
                            28: 43,
                            32: [2, 43],
                            33: [2, 43],
                            34: [2, 43],
                            35: [2, 43],
                            36: [2, 43],
                            40: [2, 43],
                            42: [2, 43]
                        }, {
                            18: [2, 25],
                            24: [2, 25],
                            36: [2, 25]
                        }, {
                            18: [2, 38],
                            24: [2, 38],
                            32: [2, 38],
                            33: [2, 38],
                            34: [2, 38],
                            35: [2, 38],
                            36: [2, 38],
                            40: [2, 38],
                            42: [2, 38],
                            44: [1, 44]
                        }, {
                            21: 45,
                            40: [1, 28],
                            43: 26
                        }, {
                            18: [2, 40],
                            24: [2, 40],
                            32: [2, 40],
                            33: [2, 40],
                            34: [2, 40],
                            35: [2, 40],
                            36: [2, 40],
                            40: [2, 40],
                            42: [2, 40],
                            44: [2, 40]
                        }, {
                            18: [1, 46]
                        }, {
                            18: [1, 47]
                        }, {
                            24: [1, 48]
                        }, {
                            18: [2, 41],
                            21: 50,
                            27: 49,
                            40: [1, 28],
                            43: 26
                        }, {
                            18: [2, 34],
                            40: [2, 34]
                        }, {
                            18: [2, 35],
                            40: [2, 35]
                        }, {
                            18: [2, 36],
                            40: [2, 36]
                        }, {
                            5: [2, 11],
                            14: [2, 11],
                            15: [2, 11],
                            16: [2, 11],
                            19: [2, 11],
                            20: [2, 11],
                            22: [2, 11],
                            23: [2, 11],
                            25: [2, 11]
                        }, {
                            21: 51,
                            40: [1, 28],
                            43: 26
                        }, {
                            8: 17,
                            9: 5,
                            11: 6,
                            12: 7,
                            13: 8,
                            14: [1, 9],
                            15: [1, 10],
                            16: [1, 12],
                            19: [1, 11],
                            20: [2, 3],
                            22: [1, 13],
                            23: [1, 14],
                            25: [1, 15]
                        }, {
                            4: 52,
                            8: 4,
                            9: 5,
                            11: 6,
                            12: 7,
                            13: 8,
                            14: [1, 9],
                            15: [1, 10],
                            16: [1, 12],
                            19: [1, 11],
                            20: [2, 5],
                            22: [1, 13],
                            23: [1, 14],
                            25: [1, 15]
                        }, {
                            14: [2, 23],
                            15: [2, 23],
                            16: [2, 23],
                            19: [2, 23],
                            20: [2, 23],
                            22: [2, 23],
                            23: [2, 23],
                            25: [2, 23]
                        }, {
                            5: [2, 12],
                            14: [2, 12],
                            15: [2, 12],
                            16: [2, 12],
                            19: [2, 12],
                            20: [2, 12],
                            22: [2, 12],
                            23: [2, 12],
                            25: [2, 12]
                        }, {
                            14: [2, 18],
                            15: [2, 18],
                            16: [2, 18],
                            19: [2, 18],
                            20: [2, 18],
                            22: [2, 18],
                            23: [2, 18],
                            25: [2, 18]
                        }, {
                            18: [2, 45],
                            21: 56,
                            24: [2, 45],
                            29: 53,
                            30: 60,
                            31: 54,
                            32: [1, 57],
                            33: [1, 58],
                            34: [1, 59],
                            35: [1, 61],
                            36: [2, 45],
                            37: 55,
                            38: 62,
                            39: 63,
                            40: [1, 64],
                            42: [1, 27],
                            43: 26
                        }, {
                            40: [1, 65]
                        }, {
                            18: [2, 37],
                            24: [2, 37],
                            32: [2, 37],
                            33: [2, 37],
                            34: [2, 37],
                            35: [2, 37],
                            36: [2, 37],
                            40: [2, 37],
                            42: [2, 37]
                        }, {
                            14: [2, 17],
                            15: [2, 17],
                            16: [2, 17],
                            19: [2, 17],
                            20: [2, 17],
                            22: [2, 17],
                            23: [2, 17],
                            25: [2, 17]
                        }, {
                            5: [2, 20],
                            14: [2, 20],
                            15: [2, 20],
                            16: [2, 20],
                            19: [2, 20],
                            20: [2, 20],
                            22: [2, 20],
                            23: [2, 20],
                            25: [2, 20]
                        }, {
                            5: [2, 21],
                            14: [2, 21],
                            15: [2, 21],
                            16: [2, 21],
                            19: [2, 21],
                            20: [2, 21],
                            22: [2, 21],
                            23: [2, 21],
                            25: [2, 21]
                        }, {
                            18: [1, 66]
                        }, {
                            18: [2, 42]
                        }, {
                            18: [1, 67]
                        }, {
                            8: 17,
                            9: 5,
                            11: 6,
                            12: 7,
                            13: 8,
                            14: [1, 9],
                            15: [1, 10],
                            16: [1, 12],
                            19: [1, 11],
                            20: [2, 4],
                            22: [1, 13],
                            23: [1, 14],
                            25: [1, 15]
                        }, {
                            18: [2, 24],
                            24: [2, 24],
                            36: [2, 24]
                        }, {
                            18: [2, 44],
                            24: [2, 44],
                            32: [2, 44],
                            33: [2, 44],
                            34: [2, 44],
                            35: [2, 44],
                            36: [2, 44],
                            40: [2, 44],
                            42: [2, 44]
                        }, {
                            18: [2, 46],
                            24: [2, 46],
                            36: [2, 46]
                        }, {
                            18: [2, 26],
                            24: [2, 26],
                            32: [2, 26],
                            33: [2, 26],
                            34: [2, 26],
                            35: [2, 26],
                            36: [2, 26],
                            40: [2, 26],
                            42: [2, 26]
                        }, {
                            18: [2, 27],
                            24: [2, 27],
                            32: [2, 27],
                            33: [2, 27],
                            34: [2, 27],
                            35: [2, 27],
                            36: [2, 27],
                            40: [2, 27],
                            42: [2, 27]
                        }, {
                            18: [2, 28],
                            24: [2, 28],
                            32: [2, 28],
                            33: [2, 28],
                            34: [2, 28],
                            35: [2, 28],
                            36: [2, 28],
                            40: [2, 28],
                            42: [2, 28]
                        }, {
                            18: [2, 29],
                            24: [2, 29],
                            32: [2, 29],
                            33: [2, 29],
                            34: [2, 29],
                            35: [2, 29],
                            36: [2, 29],
                            40: [2, 29],
                            42: [2, 29]
                        }, {
                            18: [2, 30],
                            24: [2, 30],
                            32: [2, 30],
                            33: [2, 30],
                            34: [2, 30],
                            35: [2, 30],
                            36: [2, 30],
                            40: [2, 30],
                            42: [2, 30]
                        }, {
                            17: 68,
                            21: 24,
                            30: 25,
                            40: [1, 28],
                            42: [1, 27],
                            43: 26
                        }, {
                            18: [2, 32],
                            24: [2, 32],
                            36: [2, 32],
                            39: 69,
                            40: [1, 70]
                        }, {
                            18: [2, 47],
                            24: [2, 47],
                            36: [2, 47],
                            40: [2, 47]
                        }, {
                            18: [2, 40],
                            24: [2, 40],
                            32: [2, 40],
                            33: [2, 40],
                            34: [2, 40],
                            35: [2, 40],
                            36: [2, 40],
                            40: [2, 40],
                            41: [1, 71],
                            42: [2, 40],
                            44: [2, 40]
                        }, {
                            18: [2, 39],
                            24: [2, 39],
                            32: [2, 39],
                            33: [2, 39],
                            34: [2, 39],
                            35: [2, 39],
                            36: [2, 39],
                            40: [2, 39],
                            42: [2, 39],
                            44: [2, 39]
                        }, {
                            5: [2, 22],
                            14: [2, 22],
                            15: [2, 22],
                            16: [2, 22],
                            19: [2, 22],
                            20: [2, 22],
                            22: [2, 22],
                            23: [2, 22],
                            25: [2, 22]
                        }, {
                            5: [2, 19],
                            14: [2, 19],
                            15: [2, 19],
                            16: [2, 19],
                            19: [2, 19],
                            20: [2, 19],
                            22: [2, 19],
                            23: [2, 19],
                            25: [2, 19]
                        }, {
                            36: [1, 72]
                        }, {
                            18: [2, 48],
                            24: [2, 48],
                            36: [2, 48],
                            40: [2, 48]
                        }, {
                            41: [1, 71]
                        }, {
                            21: 56,
                            30: 60,
                            31: 73,
                            32: [1, 57],
                            33: [1, 58],
                            34: [1, 59],
                            35: [1, 61],
                            40: [1, 28],
                            42: [1, 27],
                            43: 26
                        }, {
                            18: [2, 31],
                            24: [2, 31],
                            32: [2, 31],
                            33: [2, 31],
                            34: [2, 31],
                            35: [2, 31],
                            36: [2, 31],
                            40: [2, 31],
                            42: [2, 31]
                        }, {
                            18: [2, 33],
                            24: [2, 33],
                            36: [2, 33],
                            40: [2, 33]
                        }],
                        defaultActions: {
                            3: [2, 2],
                            16: [2, 1],
                            50: [2, 42]
                        },
                        parseError: function(str, hash) {
                            throw new Error(str)
                        },
                        parse: function(input) {
                            function lex() {
                                var token;
                                return token = self.lexer.lex() || 1, "number" != typeof token && (token = self.symbols_[token] || token), token
                            }
                            var self = this,
                                stack = [0],
                                vstack = [null],
                                lstack = [],
                                table = this.table,
                                yytext = "",
                                yylineno = 0,
                                yyleng = 0,
                                recovering = 0;
                            this.lexer.setInput(input), this.lexer.yy = this.yy, this.yy.lexer = this.lexer, this.yy.parser = this, "undefined" == typeof this.lexer.yylloc && (this.lexer.yylloc = {});
                            var yyloc = this.lexer.yylloc;
                            lstack.push(yyloc);
                            var ranges = this.lexer.options && this.lexer.options.ranges;
                            "function" == typeof this.yy.parseError && (this.parseError = this.yy.parseError);
                            for (var symbol, preErrorSymbol, state, action, r, p, len, newState, expected, yyval = {};;) {
                                if (state = stack[stack.length - 1], this.defaultActions[state] ? action = this.defaultActions[state] : (null !== symbol && "undefined" != typeof symbol || (symbol = lex()), action = table[state] && table[state][symbol]), "undefined" == typeof action || !action.length || !action[0]) {
                                    var errStr = "";
                                    if (!recovering) {
                                        expected = [];
                                        for (p in table[state]) this.terminals_[p] && p > 2 && expected.push("'" + this.terminals_[p] + "'");
                                        errStr = this.lexer.showPosition ? "Parse error on line " + (yylineno + 1) + ":\n" + this.lexer.showPosition() + "\nExpecting " + expected.join(", ") + ", got '" + (this.terminals_[symbol] || symbol) + "'" : "Parse error on line " + (yylineno + 1) + ": Unexpected " + (1 == symbol ? "end of input" : "'" + (this.terminals_[symbol] || symbol) + "'"), this.parseError(errStr, {
                                            text: this.lexer.match,
                                            token: this.terminals_[symbol] || symbol,
                                            line: this.lexer.yylineno,
                                            loc: yyloc,
                                            expected: expected
                                        })
                                    }
                                }
                                if (action[0] instanceof Array && action.length > 1) throw new Error("Parse Error: multiple actions possible at state: " + state + ", token: " + symbol);
                                switch (action[0]) {
                                    case 1:
                                        stack.push(symbol), vstack.push(this.lexer.yytext), lstack.push(this.lexer.yylloc), stack.push(action[1]), symbol = null, preErrorSymbol ? (symbol = preErrorSymbol, preErrorSymbol = null) : (yyleng = this.lexer.yyleng, yytext = this.lexer.yytext, yylineno = this.lexer.yylineno, yyloc = this.lexer.yylloc, recovering > 0 && recovering--);
                                        break;
                                    case 2:
                                        if (len = this.productions_[action[1]][1], yyval.$ = vstack[vstack.length - len], yyval._$ = {
                                                first_line: lstack[lstack.length - (len || 1)].first_line,
                                                last_line: lstack[lstack.length - 1].last_line,
                                                first_column: lstack[lstack.length - (len || 1)].first_column,
                                                last_column: lstack[lstack.length - 1].last_column
                                            }, ranges && (yyval._$.range = [lstack[lstack.length - (len || 1)].range[0], lstack[lstack.length - 1].range[1]]), r = this.performAction.call(yyval, yytext, yyleng, yylineno, this.yy, action[1], vstack, lstack), "undefined" != typeof r) return r;
                                        len && (stack = stack.slice(0, -1 * len * 2), vstack = vstack.slice(0, -1 * len), lstack = lstack.slice(0, -1 * len)), stack.push(this.productions_[action[1]][0]), vstack.push(yyval.$), lstack.push(yyval._$), newState = table[stack[stack.length - 2]][stack[stack.length - 1]], stack.push(newState);
                                        break;
                                    case 3:
                                        return !0
                                }
                            }
                            return !0
                        }
                    },
                    lexer = function() {
                        var lexer = {
                            EOF: 1,
                            parseError: function(str, hash) {
                                if (!this.yy.parser) throw new Error(str);
                                this.yy.parser.parseError(str, hash)
                            },
                            setInput: function(input) {
                                return this._input = input, this._more = this._less = this.done = !1, this.yylineno = this.yyleng = 0, this.yytext = this.matched = this.match = "", this.conditionStack = ["INITIAL"], this.yylloc = {
                                    first_line: 1,
                                    first_column: 0,
                                    last_line: 1,
                                    last_column: 0
                                }, this.options.ranges && (this.yylloc.range = [0, 0]), this.offset = 0, this
                            },
                            input: function() {
                                var ch = this._input[0];
                                this.yytext += ch, this.yyleng++, this.offset++, this.match += ch, this.matched += ch;
                                var lines = ch.match(/(?:\r\n?|\n).*/g);
                                return lines ? (this.yylineno++, this.yylloc.last_line++) : this.yylloc.last_column++, this.options.ranges && this.yylloc.range[1]++, this._input = this._input.slice(1), ch
                            },
                            unput: function(ch) {
                                var len = ch.length,
                                    lines = ch.split(/(?:\r\n?|\n)/g);
                                this._input = ch + this._input, this.yytext = this.yytext.substr(0, this.yytext.length - len - 1), this.offset -= len;
                                var oldLines = this.match.split(/(?:\r\n?|\n)/g);
                                this.match = this.match.substr(0, this.match.length - 1), this.matched = this.matched.substr(0, this.matched.length - 1), lines.length - 1 && (this.yylineno -= lines.length - 1);
                                var r = this.yylloc.range;
                                return this.yylloc = {
                                    first_line: this.yylloc.first_line,
                                    last_line: this.yylineno + 1,
                                    first_column: this.yylloc.first_column,
                                    last_column: lines ? (lines.length === oldLines.length ? this.yylloc.first_column : 0) + oldLines[oldLines.length - lines.length].length - lines[0].length : this.yylloc.first_column - len
                                }, this.options.ranges && (this.yylloc.range = [r[0], r[0] + this.yyleng - len]), this
                            },
                            more: function() {
                                return this._more = !0, this
                            },
                            less: function(n) {
                                this.unput(this.match.slice(n))
                            },
                            pastInput: function() {
                                var past = this.matched.substr(0, this.matched.length - this.match.length);
                                return (past.length > 20 ? "..." : "") + past.substr(-20).replace(/\n/g, "")
                            },
                            upcomingInput: function() {
                                var next = this.match;
                                return next.length < 20 && (next += this._input.substr(0, 20 - next.length)), (next.substr(0, 20) + (next.length > 20 ? "..." : "")).replace(/\n/g, "")
                            },
                            showPosition: function() {
                                var pre = this.pastInput(),
                                    c = new Array(pre.length + 1).join("-");
                                return pre + this.upcomingInput() + "\n" + c + "^"
                            },
                            next: function() {
                                if (this.done) return this.EOF;
                                this._input || (this.done = !0);
                                var token, match, tempMatch, index, lines;
                                this._more || (this.yytext = "", this.match = "");
                                for (var rules = this._currentRules(), i = 0; i < rules.length && (tempMatch = this._input.match(this.rules[rules[i]]), !tempMatch || match && !(tempMatch[0].length > match[0].length) || (match = tempMatch, index = i, this.options.flex)); i++);
                                return match ? (lines = match[0].match(/(?:\r\n?|\n).*/g), lines && (this.yylineno += lines.length), this.yylloc = {
                                    first_line: this.yylloc.last_line,
                                    last_line: this.yylineno + 1,
                                    first_column: this.yylloc.last_column,
                                    last_column: lines ? lines[lines.length - 1].length - lines[lines.length - 1].match(/\r?\n?/)[0].length : this.yylloc.last_column + match[0].length
                                }, this.yytext += match[0], this.match += match[0], this.matches = match, this.yyleng = this.yytext.length, this.options.ranges && (this.yylloc.range = [this.offset, this.offset += this.yyleng]), this._more = !1, this._input = this._input.slice(match[0].length), this.matched += match[0], token = this.performAction.call(this, this.yy, this, rules[index], this.conditionStack[this.conditionStack.length - 1]), this.done && this._input && (this.done = !1), token ? token : void 0) : "" === this._input ? this.EOF : this.parseError("Lexical error on line " + (this.yylineno + 1) + ". Unrecognized text.\n" + this.showPosition(), {
                                    text: "",
                                    token: null,
                                    line: this.yylineno
                                })
                            },
                            lex: function() {
                                var r = this.next();
                                return "undefined" != typeof r ? r : this.lex()
                            },
                            begin: function(condition) {
                                this.conditionStack.push(condition)
                            },
                            popState: function() {
                                return this.conditionStack.pop()
                            },
                            _currentRules: function() {
                                return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules
                            },
                            topState: function() {
                                return this.conditionStack[this.conditionStack.length - 2]
                            },
                            pushState: function(condition) {
                                this.begin(condition)
                            }
                        };
                        return lexer.options = {}, lexer.performAction = function(yy, yy_, $avoiding_name_collisions, YY_START) {
                            function strip(start, end) {
                                return yy_.yytext = yy_.yytext.substr(start, yy_.yyleng - end)
                            }
                            switch ($avoiding_name_collisions) {
                                case 0:
                                    if ("\\\\" === yy_.yytext.slice(-2) ? (strip(0, 1), this.begin("mu")) : "\\" === yy_.yytext.slice(-1) ? (strip(0, 1), this.begin("emu")) : this.begin("mu"), yy_.yytext) return 14;
                                    break;
                                case 1:
                                    return 14;
                                case 2:
                                    return this.popState(), 14;
                                case 3:
                                    return strip(0, 4), this.popState(), 15;
                                case 4:
                                    return 35;
                                case 5:
                                    return 36;
                                case 6:
                                    return 25;
                                case 7:
                                    return 16;
                                case 8:
                                    return 20;
                                case 9:
                                    return 19;
                                case 10:
                                    return 19;
                                case 11:
                                    return 23;
                                case 12:
                                    return 22;
                                case 13:
                                    this.popState(), this.begin("com");
                                    break;
                                case 14:
                                    return strip(3, 5), this.popState(), 15;
                                case 15:
                                    return 22;
                                case 16:
                                    return 41;
                                case 17:
                                    return 40;
                                case 18:
                                    return 40;
                                case 19:
                                    return 44;
                                case 20:
                                    break;
                                case 21:
                                    return this.popState(), 24;
                                case 22:
                                    return this.popState(), 18;
                                case 23:
                                    return yy_.yytext = strip(1, 2).replace(/\\"/g, '"'), 32;
                                case 24:
                                    return yy_.yytext = strip(1, 2).replace(/\\'/g, "'"), 32;
                                case 25:
                                    return 42;
                                case 26:
                                    return 34;
                                case 27:
                                    return 34;
                                case 28:
                                    return 33;
                                case 29:
                                    return 40;
                                case 30:
                                    return yy_.yytext = strip(1, 2), 40;
                                case 31:
                                    return "INVALID";
                                case 32:
                                    return 5
                            }
                        }, lexer.rules = [/^(?:[^\x00]*?(?=(\{\{)))/, /^(?:[^\x00]+)/, /^(?:[^\x00]{2,}?(?=(\{\{|\\\{\{|\\\\\{\{|$)))/, /^(?:[\s\S]*?--\}\})/, /^(?:\()/, /^(?:\))/, /^(?:\{\{(~)?>)/, /^(?:\{\{(~)?#)/, /^(?:\{\{(~)?\/)/, /^(?:\{\{(~)?\^)/, /^(?:\{\{(~)?\s*else\b)/, /^(?:\{\{(~)?\{)/, /^(?:\{\{(~)?&)/, /^(?:\{\{!--)/, /^(?:\{\{![\s\S]*?\}\})/, /^(?:\{\{(~)?)/, /^(?:=)/, /^(?:\.\.)/, /^(?:\.(?=([=~}\s\/.)])))/, /^(?:[\/.])/, /^(?:\s+)/, /^(?:\}(~)?\}\})/, /^(?:(~)?\}\})/, /^(?:"(\\["]|[^"])*")/, /^(?:'(\\[']|[^'])*')/, /^(?:@)/, /^(?:true(?=([~}\s)])))/, /^(?:false(?=([~}\s)])))/, /^(?:-?[0-9]+(?=([~}\s)])))/, /^(?:([^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=([=~}\s\/.)]))))/, /^(?:\[[^\]]*\])/, /^(?:.)/, /^(?:$)/], lexer.conditions = {
                            mu: {
                                rules: [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32],
                                inclusive: !1
                            },
                            emu: {
                                rules: [2],
                                inclusive: !1
                            },
                            com: {
                                rules: [3],
                                inclusive: !1
                            },
                            INITIAL: {
                                rules: [0, 1, 32],
                                inclusive: !0
                            }
                        }, lexer
                    }();
                return parser.lexer = lexer, Parser.prototype = parser, parser.Parser = Parser, new Parser
            }();
            return __exports__ = handlebars
        }(),
        __module8__ = function(__dependency1__, __dependency2__) {
            "use strict";

            function parse(input) {
                return input.constructor === AST.ProgramNode ? input : (parser.yy = AST, parser.parse(input))
            }
            var __exports__ = {},
                parser = __dependency1__,
                AST = __dependency2__;
            return __exports__.parser = parser, __exports__.parse = parse, __exports__
        }(__module9__, __module7__),
        __module10__ = function(__dependency1__) {
            "use strict";

            function Compiler() {}

            function precompile(input, options, env) {
                if (null == input || "string" != typeof input && input.constructor !== env.AST.ProgramNode) throw new Exception("You must pass a string or Handlebars AST to Handlebars.precompile. You passed " + input);
                options = options || {}, "data" in options || (options.data = !0);
                var ast = env.parse(input),
                    environment = (new env.Compiler).compile(ast, options);
                return (new env.JavaScriptCompiler).compile(environment, options)
            }

            function compile(input, options, env) {
                function compileInput() {
                    var ast = env.parse(input),
                        environment = (new env.Compiler).compile(ast, options),
                        templateSpec = (new env.JavaScriptCompiler).compile(environment, options, void 0, !0);
                    return env.template(templateSpec)
                }
                if (null == input || "string" != typeof input && input.constructor !== env.AST.ProgramNode) throw new Exception("You must pass a string or Handlebars AST to Handlebars.compile. You passed " + input);
                options = options || {}, "data" in options || (options.data = !0);
                var compiled;
                return function(context, options) {
                    return compiled || (compiled = compileInput()), compiled.call(this, context, options)
                }
            }
            var __exports__ = {},
                Exception = __dependency1__;
            return __exports__.Compiler = Compiler, Compiler.prototype = {
                compiler: Compiler,
                disassemble: function() {
                    for (var opcode, params, param, opcodes = this.opcodes, out = [], i = 0, l = opcodes.length; i < l; i++)
                        if (opcode = opcodes[i], "DECLARE" === opcode.opcode) out.push("DECLARE " + opcode.name + "=" + opcode.value);
                        else {
                            params = [];
                            for (var j = 0; j < opcode.args.length; j++) param = opcode.args[j], "string" == typeof param && (param = '"' + param.replace("\n", "\\n") + '"'), params.push(param);
                            out.push(opcode.opcode + " " + params.join(" "))
                        }
                    return out.join("\n")
                },
                equals: function(other) {
                    var len = this.opcodes.length;
                    if (other.opcodes.length !== len) return !1;
                    for (var i = 0; i < len; i++) {
                        var opcode = this.opcodes[i],
                            otherOpcode = other.opcodes[i];
                        if (opcode.opcode !== otherOpcode.opcode || opcode.args.length !== otherOpcode.args.length) return !1;
                        for (var j = 0; j < opcode.args.length; j++)
                            if (opcode.args[j] !== otherOpcode.args[j]) return !1
                    }
                    if (len = this.children.length, other.children.length !== len) return !1;
                    for (i = 0; i < len; i++)
                        if (!this.children[i].equals(other.children[i])) return !1;
                    return !0
                },
                guid: 0,
                compile: function(program, options) {
                    this.opcodes = [], this.children = [], this.depths = {
                        list: []
                    }, this.options = options;
                    var knownHelpers = this.options.knownHelpers;
                    if (this.options.knownHelpers = {
                            helperMissing: !0,
                            blockHelperMissing: !0,
                            each: !0,
                            "if": !0,
                            unless: !0,
                            "with": !0,
                            log: !0
                        }, knownHelpers)
                        for (var name in knownHelpers) this.options.knownHelpers[name] = knownHelpers[name];
                    return this.accept(program)
                },
                accept: function(node) {
                    var ret, strip = node.strip || {};
                    return strip.left && this.opcode("strip"), ret = this[node.type](node), strip.right && this.opcode("strip"), ret
                },
                program: function(program) {
                    for (var statements = program.statements, i = 0, l = statements.length; i < l; i++) this.accept(statements[i]);
                    return this.isSimple = 1 === l, this.depths.list = this.depths.list.sort(function(a, b) {
                        return a - b
                    }), this
                },
                compileProgram: function(program) {
                    var depth, result = (new this.compiler).compile(program, this.options),
                        guid = this.guid++;
                    this.usePartial = this.usePartial || result.usePartial, this.children[guid] = result;
                    for (var i = 0, l = result.depths.list.length; i < l; i++) depth = result.depths.list[i], depth < 2 || this.addDepth(depth - 1);
                    return guid
                },
                block: function(block) {
                    var mustache = block.mustache,
                        program = block.program,
                        inverse = block.inverse;
                    program && (program = this.compileProgram(program)), inverse && (inverse = this.compileProgram(inverse));
                    var sexpr = mustache.sexpr,
                        type = this.classifySexpr(sexpr);
                    "helper" === type ? this.helperSexpr(sexpr, program, inverse) : "simple" === type ? (this.simpleSexpr(sexpr), this.opcode("pushProgram", program), this.opcode("pushProgram", inverse), this.opcode("emptyHash"), this.opcode("blockValue")) : (this.ambiguousSexpr(sexpr, program, inverse), this.opcode("pushProgram", program), this.opcode("pushProgram", inverse), this.opcode("emptyHash"), this.opcode("ambiguousBlockValue")), this.opcode("append")
                },
                hash: function(hash) {
                    var pair, val, pairs = hash.pairs;
                    this.opcode("pushHash");
                    for (var i = 0, l = pairs.length; i < l; i++) pair = pairs[i], val = pair[1], this.options.stringParams ? (val.depth && this.addDepth(val.depth), this.opcode("getContext", val.depth || 0), this.opcode("pushStringParam", val.stringModeValue, val.type), "sexpr" === val.type && this.sexpr(val)) : this.accept(val), this.opcode("assignToHash", pair[0]);
                    this.opcode("popHash")
                },
                partial: function(partial) {
                    var partialName = partial.partialName;
                    this.usePartial = !0, partial.context ? this.ID(partial.context) : this.opcode("push", "depth0"), this.opcode("invokePartial", partialName.name), this.opcode("append")
                },
                content: function(content) {
                    this.opcode("appendContent", content.string)
                },
                mustache: function(mustache) {
                    this.sexpr(mustache.sexpr), mustache.escaped && !this.options.noEscape ? this.opcode("appendEscaped") : this.opcode("append")
                },
                ambiguousSexpr: function(sexpr, program, inverse) {
                    var id = sexpr.id,
                        name = id.parts[0],
                        isBlock = null != program || null != inverse;
                    this.opcode("getContext", id.depth), this.opcode("pushProgram", program), this.opcode("pushProgram", inverse), this.opcode("invokeAmbiguous", name, isBlock)
                },
                simpleSexpr: function(sexpr) {
                    var id = sexpr.id;
                    "DATA" === id.type ? this.DATA(id) : id.parts.length ? this.ID(id) : (this.addDepth(id.depth), this.opcode("getContext", id.depth), this.opcode("pushContext")), this.opcode("resolvePossibleLambda")
                },
                helperSexpr: function(sexpr, program, inverse) {
                    var params = this.setupFullMustacheParams(sexpr, program, inverse),
                        name = sexpr.id.parts[0];
                    if (this.options.knownHelpers[name]) this.opcode("invokeKnownHelper", params.length, name);
                    else {
                        if (this.options.knownHelpersOnly) throw new Exception("You specified knownHelpersOnly, but used the unknown helper " + name, sexpr);
                        this.opcode("invokeHelper", params.length, name, sexpr.isRoot)
                    }
                },
                sexpr: function(sexpr) {
                    var type = this.classifySexpr(sexpr);
                    "simple" === type ? this.simpleSexpr(sexpr) : "helper" === type ? this.helperSexpr(sexpr) : this.ambiguousSexpr(sexpr)
                },
                ID: function(id) {
                    this.addDepth(id.depth), this.opcode("getContext", id.depth);
                    var name = id.parts[0];
                    name ? this.opcode("lookupOnContext", id.parts[0]) : this.opcode("pushContext");
                    for (var i = 1, l = id.parts.length; i < l; i++) this.opcode("lookup", id.parts[i])
                },
                DATA: function(data) {
                    if (this.options.data = !0, data.id.isScoped || data.id.depth) throw new Exception("Scoped data references are not supported: " + data.original, data);
                    this.opcode("lookupData");
                    for (var parts = data.id.parts, i = 0, l = parts.length; i < l; i++) this.opcode("lookup", parts[i])
                },
                STRING: function(string) {
                    this.opcode("pushString", string.string)
                },
                INTEGER: function(integer) {
                    this.opcode("pushLiteral", integer.integer)
                },
                BOOLEAN: function(bool) {
                    this.opcode("pushLiteral", bool.bool)
                },
                comment: function() {},
                opcode: function(name) {
                    this.opcodes.push({
                        opcode: name,
                        args: [].slice.call(arguments, 1)
                    })
                },
                declare: function(name, value) {
                    this.opcodes.push({
                        opcode: "DECLARE",
                        name: name,
                        value: value
                    })
                },
                addDepth: function(depth) {
                    0 !== depth && (this.depths[depth] || (this.depths[depth] = !0, this.depths.list.push(depth)))
                },
                classifySexpr: function(sexpr) {
                    var isHelper = sexpr.isHelper,
                        isEligible = sexpr.eligibleHelper,
                        options = this.options;
                    if (isEligible && !isHelper) {
                        var name = sexpr.id.parts[0];
                        options.knownHelpers[name] ? isHelper = !0 : options.knownHelpersOnly && (isEligible = !1)
                    }
                    return isHelper ? "helper" : isEligible ? "ambiguous" : "simple"
                },
                pushParams: function(params) {
                    for (var param, i = params.length; i--;) param = params[i], this.options.stringParams ? (param.depth && this.addDepth(param.depth), this.opcode("getContext", param.depth || 0), this.opcode("pushStringParam", param.stringModeValue, param.type), "sexpr" === param.type && this.sexpr(param)) : this[param.type](param)
                },
                setupFullMustacheParams: function(sexpr, program, inverse) {
                    var params = sexpr.params;
                    return this.pushParams(params), this.opcode("pushProgram", program), this.opcode("pushProgram", inverse), sexpr.hash ? this.hash(sexpr.hash) : this.opcode("emptyHash"), params
                }
            }, __exports__.precompile = precompile, __exports__.compile = compile, __exports__
        }(__module5__),
        __module11__ = function(__dependency1__, __dependency2__) {
            "use strict";

            function Literal(value) {
                this.value = value
            }

            function JavaScriptCompiler() {}
            var __exports__, COMPILER_REVISION = __dependency1__.COMPILER_REVISION,
                REVISION_CHANGES = __dependency1__.REVISION_CHANGES,
                log = __dependency1__.log,
                Exception = __dependency2__;
            JavaScriptCompiler.prototype = {
                nameLookup: function(parent, name) {
                    var wrap, ret;
                    return 0 === parent.indexOf("depth") && (wrap = !0), ret = /^[0-9]+$/.test(name) ? parent + "[" + name + "]" : JavaScriptCompiler.isValidJavaScriptVariableName(name) ? parent + "." + name : parent + "['" + name + "']", wrap ? "(" + parent + " && " + ret + ")" : ret
                },
                compilerInfo: function() {
                    var revision = COMPILER_REVISION,
                        versions = REVISION_CHANGES[revision];
                    return "this.compilerInfo = [" + revision + ",'" + versions + "'];\n"
                },
                appendToBuffer: function(string) {
                    return this.environment.isSimple ? "return " + string + ";" : {
                        appendToBuffer: !0,
                        content: string,
                        toString: function() {
                            return "buffer += " + string + ";"
                        }
                    }
                },
                initializeBuffer: function() {
                    return this.quotedString("")
                },
                namespace: "Handlebars",
                compile: function(environment, options, context, asObject) {
                    this.environment = environment, this.options = options || {}, log("debug", this.environment.disassemble() + "\n\n"), this.name = this.environment.name, this.isChild = !!context, this.context = context || {
                        programs: [],
                        environments: [],
                        aliases: {}
                    }, this.preamble(), this.stackSlot = 0, this.stackVars = [], this.registers = {
                        list: []
                    }, this.hashes = [], this.compileStack = [], this.inlineStack = [], this.compileChildren(environment, options);
                    var opcode, opcodes = environment.opcodes;
                    this.i = 0;
                    for (var l = opcodes.length; this.i < l; this.i++) opcode = opcodes[this.i], "DECLARE" === opcode.opcode ? this[opcode.name] = opcode.value : this[opcode.opcode].apply(this, opcode.args), opcode.opcode !== this.stripNext && (this.stripNext = !1);
                    if (this.pushSource(""), this.stackSlot || this.inlineStack.length || this.compileStack.length) throw new Exception("Compile completed with content left on stack");
                    return this.createFunctionContext(asObject)
                },
                preamble: function() {
                    var out = [];
                    if (this.isChild) out.push("");
                    else {
                        var namespace = this.namespace,
                            copies = "helpers = this.merge(helpers, " + namespace + ".helpers);";
                        this.environment.usePartial && (copies = copies + " partials = this.merge(partials, " + namespace + ".partials);"), this.options.data && (copies += " data = data || {};"), out.push(copies)
                    }
                    this.environment.isSimple ? out.push("") : out.push(", buffer = " + this.initializeBuffer()), this.lastContext = 0, this.source = out
                },
                createFunctionContext: function(asObject) {
                    var locals = this.stackVars.concat(this.registers.list);
                    if (locals.length > 0 && (this.source[1] = this.source[1] + ", " + locals.join(", ")), !this.isChild)
                        for (var alias in this.context.aliases) this.context.aliases.hasOwnProperty(alias) && (this.source[1] = this.source[1] + ", " + alias + "=" + this.context.aliases[alias]);
                    this.source[1] && (this.source[1] = "var " + this.source[1].substring(2) + ";"), this.isChild || (this.source[1] += "\n" + this.context.programs.join("\n") + "\n"), this.environment.isSimple || this.pushSource("return buffer;");
                    for (var params = this.isChild ? ["depth0", "data"] : ["Handlebars", "depth0", "helpers", "partials", "data"], i = 0, l = this.environment.depths.list.length; i < l; i++) params.push("depth" + this.environment.depths.list[i]);
                    var source = this.mergeSource();
                    if (this.isChild || (source = this.compilerInfo() + source), asObject) return params.push(source), Function.apply(this, params);
                    var functionSource = "function " + (this.name || "") + "(" + params.join(",") + ") {\n  " + source + "}";
                    return log("debug", functionSource + "\n\n"), functionSource
                },
                mergeSource: function() {
                    for (var buffer, source = "", i = 0, len = this.source.length; i < len; i++) {
                        var line = this.source[i];
                        line.appendToBuffer ? buffer = buffer ? buffer + "\n    + " + line.content : line.content : (buffer && (source += "buffer += " + buffer + ";\n  ", buffer = void 0), source += line + "\n  ")
                    }
                    return source
                },
                blockValue: function() {
                    this.context.aliases.blockHelperMissing = "helpers.blockHelperMissing";
                    var params = ["depth0"];
                    this.setupParams(0, params), this.replaceStack(function(current) {
                        return params.splice(1, 0, current), "blockHelperMissing.call(" + params.join(", ") + ")"
                    })
                },
                ambiguousBlockValue: function() {
                    this.context.aliases.blockHelperMissing = "helpers.blockHelperMissing";
                    var params = ["depth0"];
                    this.setupParams(0, params);
                    var current = this.topStack();
                    params.splice(1, 0, current), this.pushSource("if (!" + this.lastHelper + ") { " + current + " = blockHelperMissing.call(" + params.join(", ") + "); }")
                },
                appendContent: function(content) {
                    this.pendingContent && (content = this.pendingContent + content), this.stripNext && (content = content.replace(/^\s+/, "")), this.pendingContent = content
                },
                strip: function() {
                    this.pendingContent && (this.pendingContent = this.pendingContent.replace(/\s+$/, "")), this.stripNext = "strip"
                },
                append: function() {
                    this.flushInline();
                    var local = this.popStack();
                    this.pushSource("if(" + local + " || " + local + " === 0) { " + this.appendToBuffer(local) + " }"), this.environment.isSimple && this.pushSource("else { " + this.appendToBuffer("''") + " }")
                },
                appendEscaped: function() {
                    this.context.aliases.escapeExpression = "this.escapeExpression", this.pushSource(this.appendToBuffer("escapeExpression(" + this.popStack() + ")"))
                },
                getContext: function(depth) {
                    this.lastContext !== depth && (this.lastContext = depth)
                },
                lookupOnContext: function(name) {
                    this.push(this.nameLookup("depth" + this.lastContext, name, "context"))
                },
                pushContext: function() {
                    this.pushStackLiteral("depth" + this.lastContext)
                },
                resolvePossibleLambda: function() {
                    this.context.aliases.functionType = '"function"', this.replaceStack(function(current) {
                        return "typeof " + current + " === functionType ? " + current + ".apply(depth0) : " + current
                    })
                },
                lookup: function(name) {
                    this.replaceStack(function(current) {
                        return current + " == null || " + current + " === false ? " + current + " : " + this.nameLookup(current, name, "context")
                    })
                },
                lookupData: function() {
                    this.pushStackLiteral("data")
                },
                pushStringParam: function(string, type) {
                    this.pushStackLiteral("depth" + this.lastContext), this.pushString(type), "sexpr" !== type && ("string" == typeof string ? this.pushString(string) : this.pushStackLiteral(string))
                },
                emptyHash: function() {
                    this.pushStackLiteral("{}"), this.options.stringParams && (this.push("{}"), this.push("{}"))
                },
                pushHash: function() {
                    this.hash && this.hashes.push(this.hash), this.hash = {
                        values: [],
                        types: [],
                        contexts: []
                    }
                },
                popHash: function() {
                    var hash = this.hash;
                    this.hash = this.hashes.pop(), this.options.stringParams && (this.push("{" + hash.contexts.join(",") + "}"), this.push("{" + hash.types.join(",") + "}")), this.push("{\n    " + hash.values.join(",\n    ") + "\n  }")
                },
                pushString: function(string) {
                    this.pushStackLiteral(this.quotedString(string))
                },
                push: function(expr) {
                    return this.inlineStack.push(expr), expr
                },
                pushLiteral: function(value) {
                    this.pushStackLiteral(value)
                },
                pushProgram: function(guid) {
                    null != guid ? this.pushStackLiteral(this.programExpression(guid)) : this.pushStackLiteral(null)
                },
                invokeHelper: function(paramSize, name, isRoot) {
                    this.context.aliases.helperMissing = "helpers.helperMissing", this.useRegister("helper");
                    var helper = this.lastHelper = this.setupHelper(paramSize, name, !0),
                        nonHelper = this.nameLookup("depth" + this.lastContext, name, "context"),
                        lookup = "helper = " + helper.name + " || " + nonHelper;
                    helper.paramsInit && (lookup += "," + helper.paramsInit), this.push("(" + lookup + ",helper ? helper.call(" + helper.callParams + ") : helperMissing.call(" + helper.helperMissingParams + "))"), isRoot || this.flushInline()
                },
                invokeKnownHelper: function(paramSize, name) {
                    var helper = this.setupHelper(paramSize, name);
                    this.push(helper.name + ".call(" + helper.callParams + ")")
                },
                invokeAmbiguous: function(name, helperCall) {
                    this.context.aliases.functionType = '"function"', this.useRegister("helper"), this.emptyHash();
                    var helper = this.setupHelper(0, name, helperCall),
                        helperName = this.lastHelper = this.nameLookup("helpers", name, "helper"),
                        nonHelper = this.nameLookup("depth" + this.lastContext, name, "context"),
                        nextStack = this.nextStack();
                    helper.paramsInit && this.pushSource(helper.paramsInit), this.pushSource("if (helper = " + helperName + ") { " + nextStack + " = helper.call(" + helper.callParams + "); }"), this.pushSource("else { helper = " + nonHelper + "; " + nextStack + " = typeof helper === functionType ? helper.call(" + helper.callParams + ") : helper; }")
                },
                invokePartial: function(name) {
                    var params = [this.nameLookup("partials", name, "partial"), "'" + name + "'", this.popStack(), "helpers", "partials"];
                    this.options.data && params.push("data"), this.context.aliases.self = "this", this.push("self.invokePartial(" + params.join(", ") + ")")
                },
                assignToHash: function(key) {
                    var context, type, value = this.popStack();
                    this.options.stringParams && (type = this.popStack(), context = this.popStack());
                    var hash = this.hash;
                    context && hash.contexts.push("'" + key + "': " + context), type && hash.types.push("'" + key + "': " + type), hash.values.push("'" + key + "': (" + value + ")")
                },
                compiler: JavaScriptCompiler,
                compileChildren: function(environment, options) {
                    for (var child, compiler, children = environment.children, i = 0, l = children.length; i < l; i++) {
                        child = children[i], compiler = new this.compiler;
                        var index = this.matchExistingProgram(child);
                        null == index ? (this.context.programs.push(""), index = this.context.programs.length, child.index = index, child.name = "program" + index, this.context.programs[index] = compiler.compile(child, options, this.context), this.context.environments[index] = child) : (child.index = index, child.name = "program" + index)
                    }
                },
                matchExistingProgram: function(child) {
                    for (var i = 0, len = this.context.environments.length; i < len; i++) {
                        var environment = this.context.environments[i];
                        if (environment && environment.equals(child)) return i
                    }
                },
                programExpression: function(guid) {
                    if (this.context.aliases.self = "this", null == guid) return "self.noop";
                    for (var depth, child = this.environment.children[guid], depths = child.depths.list, programParams = [child.index, child.name, "data"], i = 0, l = depths.length; i < l; i++) depth = depths[i], 1 === depth ? programParams.push("depth0") : programParams.push("depth" + (depth - 1));
                    return (0 === depths.length ? "self.program(" : "self.programWithDepth(") + programParams.join(", ") + ")"
                },
                register: function(name, val) {
                    this.useRegister(name), this.pushSource(name + " = " + val + ";")
                },
                useRegister: function(name) {
                    this.registers[name] || (this.registers[name] = !0, this.registers.list.push(name))
                },
                pushStackLiteral: function(item) {
                    return this.push(new Literal(item))
                },
                pushSource: function(source) {
                    this.pendingContent && (this.source.push(this.appendToBuffer(this.quotedString(this.pendingContent))), this.pendingContent = void 0), source && this.source.push(source)
                },
                pushStack: function(item) {
                    this.flushInline();
                    var stack = this.incrStack();
                    return item && this.pushSource(stack + " = " + item + ";"), this.compileStack.push(stack), stack
                },
                replaceStack: function(callback) {
                    var stack, createdStack, usedLiteral, prefix = "",
                        inline = this.isInline();
                    if (inline) {
                        var top = this.popStack(!0);
                        if (top instanceof Literal) stack = top.value, usedLiteral = !0;
                        else {
                            createdStack = !this.stackSlot;
                            var name = createdStack ? this.incrStack() : this.topStackName();
                            prefix = "(" + this.push(name) + " = " + top + "),", stack = this.topStack()
                        }
                    } else stack = this.topStack();
                    var item = callback.call(this, stack);
                    return inline ? (usedLiteral || this.popStack(), createdStack && this.stackSlot--, this.push("(" + prefix + item + ")")) : (/^stack/.test(stack) || (stack = this.nextStack()), this.pushSource(stack + " = (" + prefix + item + ");")), stack
                },
                nextStack: function() {
                    return this.pushStack()
                },
                incrStack: function() {
                    return this.stackSlot++, this.stackSlot > this.stackVars.length && this.stackVars.push("stack" + this.stackSlot), this.topStackName()
                },
                topStackName: function() {
                    return "stack" + this.stackSlot
                },
                flushInline: function() {
                    var inlineStack = this.inlineStack;
                    if (inlineStack.length) {
                        this.inlineStack = [];
                        for (var i = 0, len = inlineStack.length; i < len; i++) {
                            var entry = inlineStack[i];
                            entry instanceof Literal ? this.compileStack.push(entry) : this.pushStack(entry)
                        }
                    }
                },
                isInline: function() {
                    return this.inlineStack.length
                },
                popStack: function(wrapped) {
                    var inline = this.isInline(),
                        item = (inline ? this.inlineStack : this.compileStack).pop();
                    if (!wrapped && item instanceof Literal) return item.value;
                    if (!inline) {
                        if (!this.stackSlot) throw new Exception("Invalid stack pop");
                        this.stackSlot--
                    }
                    return item
                },
                topStack: function(wrapped) {
                    var stack = this.isInline() ? this.inlineStack : this.compileStack,
                        item = stack[stack.length - 1];
                    return !wrapped && item instanceof Literal ? item.value : item
                },
                quotedString: function(str) {
                    return '"' + str.replace(/\\/g, "\\\\").replace(/"/g, '\\"').replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029") + '"'
                },
                setupHelper: function(paramSize, name, missingParams) {
                    var params = [],
                        paramsInit = this.setupParams(paramSize, params, missingParams),
                        foundHelper = this.nameLookup("helpers", name, "helper");
                    return {
                        params: params,
                        paramsInit: paramsInit,
                        name: foundHelper,
                        callParams: ["depth0"].concat(params).join(", "),
                        helperMissingParams: missingParams && ["depth0", this.quotedString(name)].concat(params).join(", ")
                    }
                },
                setupOptions: function(paramSize, params) {
                    var param, inverse, program, options = [],
                        contexts = [],
                        types = [];
                    options.push("hash:" + this.popStack()), this.options.stringParams && (options.push("hashTypes:" + this.popStack()), options.push("hashContexts:" + this.popStack())), inverse = this.popStack(), program = this.popStack(), (program || inverse) && (program || (this.context.aliases.self = "this", program = "self.noop"), inverse || (this.context.aliases.self = "this", inverse = "self.noop"), options.push("inverse:" + inverse), options.push("fn:" + program));
                    for (var i = 0; i < paramSize; i++) param = this.popStack(), params.push(param), this.options.stringParams && (types.push(this.popStack()), contexts.push(this.popStack()));
                    return this.options.stringParams && (options.push("contexts:[" + contexts.join(",") + "]"), options.push("types:[" + types.join(",") + "]")), this.options.data && options.push("data:data"), options
                },
                setupParams: function(paramSize, params, useRegister) {
                    var options = "{" + this.setupOptions(paramSize, params).join(",") + "}";
                    return useRegister ? (this.useRegister("options"), params.push("options"), "options=" + options) : (params.push(options), "")
                }
            };
            for (var reservedWords = "break else new var case finally return void catch for switch while continue function this with default if throw delete in try do instanceof typeof abstract enum int short boolean export interface static byte extends long super char final native synchronized class float package throws const goto private transient debugger implements protected volatile double import public let yield".split(" "), compilerWords = JavaScriptCompiler.RESERVED_WORDS = {}, i = 0, l = reservedWords.length; i < l; i++) compilerWords[reservedWords[i]] = !0;
            return JavaScriptCompiler.isValidJavaScriptVariableName = function(name) {
                return !(JavaScriptCompiler.RESERVED_WORDS[name] || !/^[a-zA-Z_$][0-9a-zA-Z_$]*$/.test(name))
            }, __exports__ = JavaScriptCompiler
        }(__module2__, __module5__),
        __module0__ = function(__dependency1__, __dependency2__, __dependency3__, __dependency4__, __dependency5__) {
            "use strict";
            var __exports__, Handlebars = __dependency1__,
                AST = __dependency2__,
                Parser = __dependency3__.parser,
                parse = __dependency3__.parse,
                Compiler = __dependency4__.Compiler,
                compile = __dependency4__.compile,
                precompile = __dependency4__.precompile,
                JavaScriptCompiler = __dependency5__,
                _create = Handlebars.create,
                create = function() {
                    var hb = _create();
                    return hb.compile = function(input, options) {
                        return compile(input, options, hb)
                    }, hb.precompile = function(input, options) {
                        return precompile(input, options, hb)
                    }, hb.AST = AST, hb.Compiler = Compiler, hb.JavaScriptCompiler = JavaScriptCompiler, hb.Parser = Parser, hb.parse = parse, hb
                };
            return Handlebars = create(), Handlebars.create = create, __exports__ = Handlebars
        }(__module1__, __module7__, __module8__, __module10__, __module11__);
    return __module0__
}();