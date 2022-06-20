var __getOwnPropNames = Object.getOwnPropertyNames;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};

// ../../node_modules/.pnpm/has-symbols@1.0.3/node_modules/has-symbols/shams.js
var require_shams = __commonJS({
  "../../node_modules/.pnpm/has-symbols@1.0.3/node_modules/has-symbols/shams.js"(exports, module) {
    "use strict";
    module.exports = function hasSymbols() {
      if (typeof Symbol !== "function" || typeof Object.getOwnPropertySymbols !== "function") {
        return false;
      }
      if (typeof Symbol.iterator === "symbol") {
        return true;
      }
      var obj = {};
      var sym = Symbol("test");
      var symObj = Object(sym);
      if (typeof sym === "string") {
        return false;
      }
      if (Object.prototype.toString.call(sym) !== "[object Symbol]") {
        return false;
      }
      if (Object.prototype.toString.call(symObj) !== "[object Symbol]") {
        return false;
      }
      var symVal = 42;
      obj[sym] = symVal;
      for (sym in obj) {
        return false;
      }
      if (typeof Object.keys === "function" && Object.keys(obj).length !== 0) {
        return false;
      }
      if (typeof Object.getOwnPropertyNames === "function" && Object.getOwnPropertyNames(obj).length !== 0) {
        return false;
      }
      var syms = Object.getOwnPropertySymbols(obj);
      if (syms.length !== 1 || syms[0] !== sym) {
        return false;
      }
      if (!Object.prototype.propertyIsEnumerable.call(obj, sym)) {
        return false;
      }
      if (typeof Object.getOwnPropertyDescriptor === "function") {
        var descriptor = Object.getOwnPropertyDescriptor(obj, sym);
        if (descriptor.value !== symVal || descriptor.enumerable !== true) {
          return false;
        }
      }
      return true;
    };
  }
});

// ../../node_modules/.pnpm/has-tostringtag@1.0.0/node_modules/has-tostringtag/shams.js
var require_shams2 = __commonJS({
  "../../node_modules/.pnpm/has-tostringtag@1.0.0/node_modules/has-tostringtag/shams.js"(exports, module) {
    "use strict";
    var hasSymbols = require_shams();
    module.exports = function hasToStringTagShams() {
      return hasSymbols() && !!Symbol.toStringTag;
    };
  }
});

// ../../node_modules/.pnpm/has-symbols@1.0.3/node_modules/has-symbols/index.js
var require_has_symbols = __commonJS({
  "../../node_modules/.pnpm/has-symbols@1.0.3/node_modules/has-symbols/index.js"(exports, module) {
    "use strict";
    var origSymbol = typeof Symbol !== "undefined" && Symbol;
    var hasSymbolSham = require_shams();
    module.exports = function hasNativeSymbols() {
      if (typeof origSymbol !== "function") {
        return false;
      }
      if (typeof Symbol !== "function") {
        return false;
      }
      if (typeof origSymbol("foo") !== "symbol") {
        return false;
      }
      if (typeof Symbol("bar") !== "symbol") {
        return false;
      }
      return hasSymbolSham();
    };
  }
});

// ../../node_modules/.pnpm/function-bind@1.1.1/node_modules/function-bind/implementation.js
var require_implementation = __commonJS({
  "../../node_modules/.pnpm/function-bind@1.1.1/node_modules/function-bind/implementation.js"(exports, module) {
    "use strict";
    var ERROR_MESSAGE = "Function.prototype.bind called on incompatible ";
    var slice = Array.prototype.slice;
    var toStr = Object.prototype.toString;
    var funcType = "[object Function]";
    module.exports = function bind(that) {
      var target = this;
      if (typeof target !== "function" || toStr.call(target) !== funcType) {
        throw new TypeError(ERROR_MESSAGE + target);
      }
      var args = slice.call(arguments, 1);
      var bound;
      var binder = function() {
        if (this instanceof bound) {
          var result = target.apply(this, args.concat(slice.call(arguments)));
          if (Object(result) === result) {
            return result;
          }
          return this;
        } else {
          return target.apply(that, args.concat(slice.call(arguments)));
        }
      };
      var boundLength = Math.max(0, target.length - args.length);
      var boundArgs = [];
      for (var i = 0; i < boundLength; i++) {
        boundArgs.push("$" + i);
      }
      bound = Function("binder", "return function (" + boundArgs.join(",") + "){ return binder.apply(this,arguments); }")(binder);
      if (target.prototype) {
        var Empty = function Empty2() {
        };
        Empty.prototype = target.prototype;
        bound.prototype = new Empty();
        Empty.prototype = null;
      }
      return bound;
    };
  }
});

// ../../node_modules/.pnpm/function-bind@1.1.1/node_modules/function-bind/index.js
var require_function_bind = __commonJS({
  "../../node_modules/.pnpm/function-bind@1.1.1/node_modules/function-bind/index.js"(exports, module) {
    "use strict";
    var implementation = require_implementation();
    module.exports = Function.prototype.bind || implementation;
  }
});

// ../../node_modules/.pnpm/has@1.0.3/node_modules/has/src/index.js
var require_src = __commonJS({
  "../../node_modules/.pnpm/has@1.0.3/node_modules/has/src/index.js"(exports, module) {
    "use strict";
    var bind = require_function_bind();
    module.exports = bind.call(Function.call, Object.prototype.hasOwnProperty);
  }
});

// ../../node_modules/.pnpm/get-intrinsic@1.1.1/node_modules/get-intrinsic/index.js
var require_get_intrinsic = __commonJS({
  "../../node_modules/.pnpm/get-intrinsic@1.1.1/node_modules/get-intrinsic/index.js"(exports, module) {
    "use strict";
    var undefined2;
    var $SyntaxError = SyntaxError;
    var $Function = Function;
    var $TypeError = TypeError;
    var getEvalledConstructor = function(expressionSyntax) {
      try {
        return $Function('"use strict"; return (' + expressionSyntax + ").constructor;")();
      } catch (e) {
      }
    };
    var $gOPD = Object.getOwnPropertyDescriptor;
    if ($gOPD) {
      try {
        $gOPD({}, "");
      } catch (e) {
        $gOPD = null;
      }
    }
    var throwTypeError = function() {
      throw new $TypeError();
    };
    var ThrowTypeError = $gOPD ? function() {
      try {
        arguments.callee;
        return throwTypeError;
      } catch (calleeThrows) {
        try {
          return $gOPD(arguments, "callee").get;
        } catch (gOPDthrows) {
          return throwTypeError;
        }
      }
    }() : throwTypeError;
    var hasSymbols = require_has_symbols()();
    var getProto = Object.getPrototypeOf || function(x) {
      return x.__proto__;
    };
    var needsEval = {};
    var TypedArray = typeof Uint8Array === "undefined" ? undefined2 : getProto(Uint8Array);
    var INTRINSICS = {
      "%AggregateError%": typeof AggregateError === "undefined" ? undefined2 : AggregateError,
      "%Array%": Array,
      "%ArrayBuffer%": typeof ArrayBuffer === "undefined" ? undefined2 : ArrayBuffer,
      "%ArrayIteratorPrototype%": hasSymbols ? getProto([][Symbol.iterator]()) : undefined2,
      "%AsyncFromSyncIteratorPrototype%": undefined2,
      "%AsyncFunction%": needsEval,
      "%AsyncGenerator%": needsEval,
      "%AsyncGeneratorFunction%": needsEval,
      "%AsyncIteratorPrototype%": needsEval,
      "%Atomics%": typeof Atomics === "undefined" ? undefined2 : Atomics,
      "%BigInt%": typeof BigInt === "undefined" ? undefined2 : BigInt,
      "%Boolean%": Boolean,
      "%DataView%": typeof DataView === "undefined" ? undefined2 : DataView,
      "%Date%": Date,
      "%decodeURI%": decodeURI,
      "%decodeURIComponent%": decodeURIComponent,
      "%encodeURI%": encodeURI,
      "%encodeURIComponent%": encodeURIComponent,
      "%Error%": Error,
      "%eval%": eval,
      "%EvalError%": EvalError,
      "%Float32Array%": typeof Float32Array === "undefined" ? undefined2 : Float32Array,
      "%Float64Array%": typeof Float64Array === "undefined" ? undefined2 : Float64Array,
      "%FinalizationRegistry%": typeof FinalizationRegistry === "undefined" ? undefined2 : FinalizationRegistry,
      "%Function%": $Function,
      "%GeneratorFunction%": needsEval,
      "%Int8Array%": typeof Int8Array === "undefined" ? undefined2 : Int8Array,
      "%Int16Array%": typeof Int16Array === "undefined" ? undefined2 : Int16Array,
      "%Int32Array%": typeof Int32Array === "undefined" ? undefined2 : Int32Array,
      "%isFinite%": isFinite,
      "%isNaN%": isNaN,
      "%IteratorPrototype%": hasSymbols ? getProto(getProto([][Symbol.iterator]())) : undefined2,
      "%JSON%": typeof JSON === "object" ? JSON : undefined2,
      "%Map%": typeof Map === "undefined" ? undefined2 : Map,
      "%MapIteratorPrototype%": typeof Map === "undefined" || !hasSymbols ? undefined2 : getProto((/* @__PURE__ */ new Map())[Symbol.iterator]()),
      "%Math%": Math,
      "%Number%": Number,
      "%Object%": Object,
      "%parseFloat%": parseFloat,
      "%parseInt%": parseInt,
      "%Promise%": typeof Promise === "undefined" ? undefined2 : Promise,
      "%Proxy%": typeof Proxy === "undefined" ? undefined2 : Proxy,
      "%RangeError%": RangeError,
      "%ReferenceError%": ReferenceError,
      "%Reflect%": typeof Reflect === "undefined" ? undefined2 : Reflect,
      "%RegExp%": RegExp,
      "%Set%": typeof Set === "undefined" ? undefined2 : Set,
      "%SetIteratorPrototype%": typeof Set === "undefined" || !hasSymbols ? undefined2 : getProto((/* @__PURE__ */ new Set())[Symbol.iterator]()),
      "%SharedArrayBuffer%": typeof SharedArrayBuffer === "undefined" ? undefined2 : SharedArrayBuffer,
      "%String%": String,
      "%StringIteratorPrototype%": hasSymbols ? getProto(""[Symbol.iterator]()) : undefined2,
      "%Symbol%": hasSymbols ? Symbol : undefined2,
      "%SyntaxError%": $SyntaxError,
      "%ThrowTypeError%": ThrowTypeError,
      "%TypedArray%": TypedArray,
      "%TypeError%": $TypeError,
      "%Uint8Array%": typeof Uint8Array === "undefined" ? undefined2 : Uint8Array,
      "%Uint8ClampedArray%": typeof Uint8ClampedArray === "undefined" ? undefined2 : Uint8ClampedArray,
      "%Uint16Array%": typeof Uint16Array === "undefined" ? undefined2 : Uint16Array,
      "%Uint32Array%": typeof Uint32Array === "undefined" ? undefined2 : Uint32Array,
      "%URIError%": URIError,
      "%WeakMap%": typeof WeakMap === "undefined" ? undefined2 : WeakMap,
      "%WeakRef%": typeof WeakRef === "undefined" ? undefined2 : WeakRef,
      "%WeakSet%": typeof WeakSet === "undefined" ? undefined2 : WeakSet
    };
    var doEval = function doEval2(name) {
      var value;
      if (name === "%AsyncFunction%") {
        value = getEvalledConstructor("async function () {}");
      } else if (name === "%GeneratorFunction%") {
        value = getEvalledConstructor("function* () {}");
      } else if (name === "%AsyncGeneratorFunction%") {
        value = getEvalledConstructor("async function* () {}");
      } else if (name === "%AsyncGenerator%") {
        var fn2 = doEval2("%AsyncGeneratorFunction%");
        if (fn2) {
          value = fn2.prototype;
        }
      } else if (name === "%AsyncIteratorPrototype%") {
        var gen = doEval2("%AsyncGenerator%");
        if (gen) {
          value = getProto(gen.prototype);
        }
      }
      INTRINSICS[name] = value;
      return value;
    };
    var LEGACY_ALIASES = {
      "%ArrayBufferPrototype%": ["ArrayBuffer", "prototype"],
      "%ArrayPrototype%": ["Array", "prototype"],
      "%ArrayProto_entries%": ["Array", "prototype", "entries"],
      "%ArrayProto_forEach%": ["Array", "prototype", "forEach"],
      "%ArrayProto_keys%": ["Array", "prototype", "keys"],
      "%ArrayProto_values%": ["Array", "prototype", "values"],
      "%AsyncFunctionPrototype%": ["AsyncFunction", "prototype"],
      "%AsyncGenerator%": ["AsyncGeneratorFunction", "prototype"],
      "%AsyncGeneratorPrototype%": ["AsyncGeneratorFunction", "prototype", "prototype"],
      "%BooleanPrototype%": ["Boolean", "prototype"],
      "%DataViewPrototype%": ["DataView", "prototype"],
      "%DatePrototype%": ["Date", "prototype"],
      "%ErrorPrototype%": ["Error", "prototype"],
      "%EvalErrorPrototype%": ["EvalError", "prototype"],
      "%Float32ArrayPrototype%": ["Float32Array", "prototype"],
      "%Float64ArrayPrototype%": ["Float64Array", "prototype"],
      "%FunctionPrototype%": ["Function", "prototype"],
      "%Generator%": ["GeneratorFunction", "prototype"],
      "%GeneratorPrototype%": ["GeneratorFunction", "prototype", "prototype"],
      "%Int8ArrayPrototype%": ["Int8Array", "prototype"],
      "%Int16ArrayPrototype%": ["Int16Array", "prototype"],
      "%Int32ArrayPrototype%": ["Int32Array", "prototype"],
      "%JSONParse%": ["JSON", "parse"],
      "%JSONStringify%": ["JSON", "stringify"],
      "%MapPrototype%": ["Map", "prototype"],
      "%NumberPrototype%": ["Number", "prototype"],
      "%ObjectPrototype%": ["Object", "prototype"],
      "%ObjProto_toString%": ["Object", "prototype", "toString"],
      "%ObjProto_valueOf%": ["Object", "prototype", "valueOf"],
      "%PromisePrototype%": ["Promise", "prototype"],
      "%PromiseProto_then%": ["Promise", "prototype", "then"],
      "%Promise_all%": ["Promise", "all"],
      "%Promise_reject%": ["Promise", "reject"],
      "%Promise_resolve%": ["Promise", "resolve"],
      "%RangeErrorPrototype%": ["RangeError", "prototype"],
      "%ReferenceErrorPrototype%": ["ReferenceError", "prototype"],
      "%RegExpPrototype%": ["RegExp", "prototype"],
      "%SetPrototype%": ["Set", "prototype"],
      "%SharedArrayBufferPrototype%": ["SharedArrayBuffer", "prototype"],
      "%StringPrototype%": ["String", "prototype"],
      "%SymbolPrototype%": ["Symbol", "prototype"],
      "%SyntaxErrorPrototype%": ["SyntaxError", "prototype"],
      "%TypedArrayPrototype%": ["TypedArray", "prototype"],
      "%TypeErrorPrototype%": ["TypeError", "prototype"],
      "%Uint8ArrayPrototype%": ["Uint8Array", "prototype"],
      "%Uint8ClampedArrayPrototype%": ["Uint8ClampedArray", "prototype"],
      "%Uint16ArrayPrototype%": ["Uint16Array", "prototype"],
      "%Uint32ArrayPrototype%": ["Uint32Array", "prototype"],
      "%URIErrorPrototype%": ["URIError", "prototype"],
      "%WeakMapPrototype%": ["WeakMap", "prototype"],
      "%WeakSetPrototype%": ["WeakSet", "prototype"]
    };
    var bind = require_function_bind();
    var hasOwn = require_src();
    var $concat = bind.call(Function.call, Array.prototype.concat);
    var $spliceApply = bind.call(Function.apply, Array.prototype.splice);
    var $replace = bind.call(Function.call, String.prototype.replace);
    var $strSlice = bind.call(Function.call, String.prototype.slice);
    var rePropName = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g;
    var reEscapeChar = /\\(\\)?/g;
    var stringToPath = function stringToPath2(string) {
      var first = $strSlice(string, 0, 1);
      var last = $strSlice(string, -1);
      if (first === "%" && last !== "%") {
        throw new $SyntaxError("invalid intrinsic syntax, expected closing `%`");
      } else if (last === "%" && first !== "%") {
        throw new $SyntaxError("invalid intrinsic syntax, expected opening `%`");
      }
      var result = [];
      $replace(string, rePropName, function(match, number, quote, subString) {
        result[result.length] = quote ? $replace(subString, reEscapeChar, "$1") : number || match;
      });
      return result;
    };
    var getBaseIntrinsic = function getBaseIntrinsic2(name, allowMissing) {
      var intrinsicName = name;
      var alias;
      if (hasOwn(LEGACY_ALIASES, intrinsicName)) {
        alias = LEGACY_ALIASES[intrinsicName];
        intrinsicName = "%" + alias[0] + "%";
      }
      if (hasOwn(INTRINSICS, intrinsicName)) {
        var value = INTRINSICS[intrinsicName];
        if (value === needsEval) {
          value = doEval(intrinsicName);
        }
        if (typeof value === "undefined" && !allowMissing) {
          throw new $TypeError("intrinsic " + name + " exists, but is not available. Please file an issue!");
        }
        return {
          alias,
          name: intrinsicName,
          value
        };
      }
      throw new $SyntaxError("intrinsic " + name + " does not exist!");
    };
    module.exports = function GetIntrinsic(name, allowMissing) {
      if (typeof name !== "string" || name.length === 0) {
        throw new $TypeError("intrinsic name must be a non-empty string");
      }
      if (arguments.length > 1 && typeof allowMissing !== "boolean") {
        throw new $TypeError('"allowMissing" argument must be a boolean');
      }
      var parts = stringToPath(name);
      var intrinsicBaseName = parts.length > 0 ? parts[0] : "";
      var intrinsic = getBaseIntrinsic("%" + intrinsicBaseName + "%", allowMissing);
      var intrinsicRealName = intrinsic.name;
      var value = intrinsic.value;
      var skipFurtherCaching = false;
      var alias = intrinsic.alias;
      if (alias) {
        intrinsicBaseName = alias[0];
        $spliceApply(parts, $concat([0, 1], alias));
      }
      for (var i = 1, isOwn = true; i < parts.length; i += 1) {
        var part = parts[i];
        var first = $strSlice(part, 0, 1);
        var last = $strSlice(part, -1);
        if ((first === '"' || first === "'" || first === "`" || (last === '"' || last === "'" || last === "`")) && first !== last) {
          throw new $SyntaxError("property names with quotes must have matching quotes");
        }
        if (part === "constructor" || !isOwn) {
          skipFurtherCaching = true;
        }
        intrinsicBaseName += "." + part;
        intrinsicRealName = "%" + intrinsicBaseName + "%";
        if (hasOwn(INTRINSICS, intrinsicRealName)) {
          value = INTRINSICS[intrinsicRealName];
        } else if (value != null) {
          if (!(part in value)) {
            if (!allowMissing) {
              throw new $TypeError("base intrinsic for " + name + " exists, but the property is not available.");
            }
            return void 0;
          }
          if ($gOPD && i + 1 >= parts.length) {
            var desc = $gOPD(value, part);
            isOwn = !!desc;
            if (isOwn && "get" in desc && !("originalValue" in desc.get)) {
              value = desc.get;
            } else {
              value = value[part];
            }
          } else {
            isOwn = hasOwn(value, part);
            value = value[part];
          }
          if (isOwn && !skipFurtherCaching) {
            INTRINSICS[intrinsicRealName] = value;
          }
        }
      }
      return value;
    };
  }
});

// ../../node_modules/.pnpm/call-bind@1.0.2/node_modules/call-bind/index.js
var require_call_bind = __commonJS({
  "../../node_modules/.pnpm/call-bind@1.0.2/node_modules/call-bind/index.js"(exports, module) {
    "use strict";
    var bind = require_function_bind();
    var GetIntrinsic = require_get_intrinsic();
    var $apply = GetIntrinsic("%Function.prototype.apply%");
    var $call = GetIntrinsic("%Function.prototype.call%");
    var $reflectApply = GetIntrinsic("%Reflect.apply%", true) || bind.call($call, $apply);
    var $gOPD = GetIntrinsic("%Object.getOwnPropertyDescriptor%", true);
    var $defineProperty = GetIntrinsic("%Object.defineProperty%", true);
    var $max = GetIntrinsic("%Math.max%");
    if ($defineProperty) {
      try {
        $defineProperty({}, "a", { value: 1 });
      } catch (e) {
        $defineProperty = null;
      }
    }
    module.exports = function callBind(originalFunction) {
      var func = $reflectApply(bind, $call, arguments);
      if ($gOPD && $defineProperty) {
        var desc = $gOPD(func, "length");
        if (desc.configurable) {
          $defineProperty(func, "length", { value: 1 + $max(0, originalFunction.length - (arguments.length - 1)) });
        }
      }
      return func;
    };
    var applyBind = function applyBind2() {
      return $reflectApply(bind, $apply, arguments);
    };
    if ($defineProperty) {
      $defineProperty(module.exports, "apply", { value: applyBind });
    } else {
      module.exports.apply = applyBind;
    }
  }
});

// ../../node_modules/.pnpm/call-bind@1.0.2/node_modules/call-bind/callBound.js
var require_callBound = __commonJS({
  "../../node_modules/.pnpm/call-bind@1.0.2/node_modules/call-bind/callBound.js"(exports, module) {
    "use strict";
    var GetIntrinsic = require_get_intrinsic();
    var callBind = require_call_bind();
    var $indexOf = callBind(GetIntrinsic("String.prototype.indexOf"));
    module.exports = function callBoundIntrinsic(name, allowMissing) {
      var intrinsic = GetIntrinsic(name, !!allowMissing);
      if (typeof intrinsic === "function" && $indexOf(name, ".prototype.") > -1) {
        return callBind(intrinsic);
      }
      return intrinsic;
    };
  }
});

// ../../node_modules/.pnpm/is-arguments@1.1.1/node_modules/is-arguments/index.js
var require_is_arguments = __commonJS({
  "../../node_modules/.pnpm/is-arguments@1.1.1/node_modules/is-arguments/index.js"(exports, module) {
    "use strict";
    var hasToStringTag = require_shams2()();
    var callBound = require_callBound();
    var $toString = callBound("Object.prototype.toString");
    var isStandardArguments = function isArguments(value) {
      if (hasToStringTag && value && typeof value === "object" && Symbol.toStringTag in value) {
        return false;
      }
      return $toString(value) === "[object Arguments]";
    };
    var isLegacyArguments = function isArguments(value) {
      if (isStandardArguments(value)) {
        return true;
      }
      return value !== null && typeof value === "object" && typeof value.length === "number" && value.length >= 0 && $toString(value) !== "[object Array]" && $toString(value.callee) === "[object Function]";
    };
    var supportsStandardArguments = function() {
      return isStandardArguments(arguments);
    }();
    isStandardArguments.isLegacyArguments = isLegacyArguments;
    module.exports = supportsStandardArguments ? isStandardArguments : isLegacyArguments;
  }
});

// ../../node_modules/.pnpm/is-generator-function@1.0.10/node_modules/is-generator-function/index.js
var require_is_generator_function = __commonJS({
  "../../node_modules/.pnpm/is-generator-function@1.0.10/node_modules/is-generator-function/index.js"(exports, module) {
    "use strict";
    var toStr = Object.prototype.toString;
    var fnToStr = Function.prototype.toString;
    var isFnRegex = /^\s*(?:function)?\*/;
    var hasToStringTag = require_shams2()();
    var getProto = Object.getPrototypeOf;
    var getGeneratorFunc = function() {
      if (!hasToStringTag) {
        return false;
      }
      try {
        return Function("return function*() {}")();
      } catch (e) {
      }
    };
    var GeneratorFunction;
    module.exports = function isGeneratorFunction(fn2) {
      if (typeof fn2 !== "function") {
        return false;
      }
      if (isFnRegex.test(fnToStr.call(fn2))) {
        return true;
      }
      if (!hasToStringTag) {
        var str = toStr.call(fn2);
        return str === "[object GeneratorFunction]";
      }
      if (!getProto) {
        return false;
      }
      if (typeof GeneratorFunction === "undefined") {
        var generatorFunc = getGeneratorFunc();
        GeneratorFunction = generatorFunc ? getProto(generatorFunc) : false;
      }
      return getProto(fn2) === GeneratorFunction;
    };
  }
});

// ../../node_modules/.pnpm/is-callable@1.2.4/node_modules/is-callable/index.js
var require_is_callable = __commonJS({
  "../../node_modules/.pnpm/is-callable@1.2.4/node_modules/is-callable/index.js"(exports, module) {
    "use strict";
    var fnToStr = Function.prototype.toString;
    var reflectApply = typeof Reflect === "object" && Reflect !== null && Reflect.apply;
    var badArrayLike;
    var isCallableMarker;
    if (typeof reflectApply === "function" && typeof Object.defineProperty === "function") {
      try {
        badArrayLike = Object.defineProperty({}, "length", {
          get: function() {
            throw isCallableMarker;
          }
        });
        isCallableMarker = {};
        reflectApply(function() {
          throw 42;
        }, null, badArrayLike);
      } catch (_) {
        if (_ !== isCallableMarker) {
          reflectApply = null;
        }
      }
    } else {
      reflectApply = null;
    }
    var constructorRegex = /^\s*class\b/;
    var isES6ClassFn = function isES6ClassFunction(value) {
      try {
        var fnStr = fnToStr.call(value);
        return constructorRegex.test(fnStr);
      } catch (e) {
        return false;
      }
    };
    var tryFunctionObject = function tryFunctionToStr(value) {
      try {
        if (isES6ClassFn(value)) {
          return false;
        }
        fnToStr.call(value);
        return true;
      } catch (e) {
        return false;
      }
    };
    var toStr = Object.prototype.toString;
    var fnClass = "[object Function]";
    var genClass = "[object GeneratorFunction]";
    var hasToStringTag = typeof Symbol === "function" && !!Symbol.toStringTag;
    var documentDotAll = typeof document === "object" && typeof document.all === "undefined" && document.all !== void 0 ? document.all : {};
    module.exports = reflectApply ? function isCallable(value) {
      if (value === documentDotAll) {
        return true;
      }
      if (!value) {
        return false;
      }
      if (typeof value !== "function" && typeof value !== "object") {
        return false;
      }
      if (typeof value === "function" && !value.prototype) {
        return true;
      }
      try {
        reflectApply(value, null, badArrayLike);
      } catch (e) {
        if (e !== isCallableMarker) {
          return false;
        }
      }
      return !isES6ClassFn(value);
    } : function isCallable(value) {
      if (value === documentDotAll) {
        return true;
      }
      if (!value) {
        return false;
      }
      if (typeof value !== "function" && typeof value !== "object") {
        return false;
      }
      if (typeof value === "function" && !value.prototype) {
        return true;
      }
      if (hasToStringTag) {
        return tryFunctionObject(value);
      }
      if (isES6ClassFn(value)) {
        return false;
      }
      var strClass = toStr.call(value);
      return strClass === fnClass || strClass === genClass;
    };
  }
});

// ../../node_modules/.pnpm/for-each@0.3.3/node_modules/for-each/index.js
var require_for_each = __commonJS({
  "../../node_modules/.pnpm/for-each@0.3.3/node_modules/for-each/index.js"(exports, module) {
    "use strict";
    var isCallable = require_is_callable();
    var toStr = Object.prototype.toString;
    var hasOwnProperty = Object.prototype.hasOwnProperty;
    var forEachArray = function forEachArray2(array, iterator, receiver) {
      for (var i = 0, len = array.length; i < len; i++) {
        if (hasOwnProperty.call(array, i)) {
          if (receiver == null) {
            iterator(array[i], i, array);
          } else {
            iterator.call(receiver, array[i], i, array);
          }
        }
      }
    };
    var forEachString = function forEachString2(string, iterator, receiver) {
      for (var i = 0, len = string.length; i < len; i++) {
        if (receiver == null) {
          iterator(string.charAt(i), i, string);
        } else {
          iterator.call(receiver, string.charAt(i), i, string);
        }
      }
    };
    var forEachObject = function forEachObject2(object, iterator, receiver) {
      for (var k in object) {
        if (hasOwnProperty.call(object, k)) {
          if (receiver == null) {
            iterator(object[k], k, object);
          } else {
            iterator.call(receiver, object[k], k, object);
          }
        }
      }
    };
    var forEach = function forEach2(list, iterator, thisArg) {
      if (!isCallable(iterator)) {
        throw new TypeError("iterator must be a function");
      }
      var receiver;
      if (arguments.length >= 3) {
        receiver = thisArg;
      }
      if (toStr.call(list) === "[object Array]") {
        forEachArray(list, iterator, receiver);
      } else if (typeof list === "string") {
        forEachString(list, iterator, receiver);
      } else {
        forEachObject(list, iterator, receiver);
      }
    };
    module.exports = forEach;
  }
});

// ../../node_modules/.pnpm/available-typed-arrays@1.0.5/node_modules/available-typed-arrays/index.js
var require_available_typed_arrays = __commonJS({
  "../../node_modules/.pnpm/available-typed-arrays@1.0.5/node_modules/available-typed-arrays/index.js"(exports, module) {
    "use strict";
    var possibleNames = [
      "BigInt64Array",
      "BigUint64Array",
      "Float32Array",
      "Float64Array",
      "Int16Array",
      "Int32Array",
      "Int8Array",
      "Uint16Array",
      "Uint32Array",
      "Uint8Array",
      "Uint8ClampedArray"
    ];
    var g = typeof globalThis === "undefined" ? global : globalThis;
    module.exports = function availableTypedArrays() {
      var out = [];
      for (var i = 0; i < possibleNames.length; i++) {
        if (typeof g[possibleNames[i]] === "function") {
          out[out.length] = possibleNames[i];
        }
      }
      return out;
    };
  }
});

// ../../node_modules/.pnpm/es-abstract@1.20.1/node_modules/es-abstract/helpers/getOwnPropertyDescriptor.js
var require_getOwnPropertyDescriptor = __commonJS({
  "../../node_modules/.pnpm/es-abstract@1.20.1/node_modules/es-abstract/helpers/getOwnPropertyDescriptor.js"(exports, module) {
    "use strict";
    var GetIntrinsic = require_get_intrinsic();
    var $gOPD = GetIntrinsic("%Object.getOwnPropertyDescriptor%", true);
    if ($gOPD) {
      try {
        $gOPD([], "length");
      } catch (e) {
        $gOPD = null;
      }
    }
    module.exports = $gOPD;
  }
});

// ../../node_modules/.pnpm/is-typed-array@1.1.9/node_modules/is-typed-array/index.js
var require_is_typed_array = __commonJS({
  "../../node_modules/.pnpm/is-typed-array@1.1.9/node_modules/is-typed-array/index.js"(exports, module) {
    "use strict";
    var forEach = require_for_each();
    var availableTypedArrays = require_available_typed_arrays();
    var callBound = require_callBound();
    var $toString = callBound("Object.prototype.toString");
    var hasToStringTag = require_shams2()();
    var g = typeof globalThis === "undefined" ? global : globalThis;
    var typedArrays = availableTypedArrays();
    var $indexOf = callBound("Array.prototype.indexOf", true) || function indexOf(array, value) {
      for (var i = 0; i < array.length; i += 1) {
        if (array[i] === value) {
          return i;
        }
      }
      return -1;
    };
    var $slice = callBound("String.prototype.slice");
    var toStrTags = {};
    var gOPD = require_getOwnPropertyDescriptor();
    var getPrototypeOf = Object.getPrototypeOf;
    if (hasToStringTag && gOPD && getPrototypeOf) {
      forEach(typedArrays, function(typedArray) {
        var arr = new g[typedArray]();
        if (Symbol.toStringTag in arr) {
          var proto = getPrototypeOf(arr);
          var descriptor = gOPD(proto, Symbol.toStringTag);
          if (!descriptor) {
            var superProto = getPrototypeOf(proto);
            descriptor = gOPD(superProto, Symbol.toStringTag);
          }
          toStrTags[typedArray] = descriptor.get;
        }
      });
    }
    var tryTypedArrays = function tryAllTypedArrays(value) {
      var anyTrue = false;
      forEach(toStrTags, function(getter, typedArray) {
        if (!anyTrue) {
          try {
            anyTrue = getter.call(value) === typedArray;
          } catch (e) {
          }
        }
      });
      return anyTrue;
    };
    module.exports = function isTypedArray(value) {
      if (!value || typeof value !== "object") {
        return false;
      }
      if (!hasToStringTag || !(Symbol.toStringTag in value)) {
        var tag = $slice($toString(value), 8, -1);
        return $indexOf(typedArrays, tag) > -1;
      }
      if (!gOPD) {
        return false;
      }
      return tryTypedArrays(value);
    };
  }
});

// ../../node_modules/.pnpm/which-typed-array@1.1.8/node_modules/which-typed-array/index.js
var require_which_typed_array = __commonJS({
  "../../node_modules/.pnpm/which-typed-array@1.1.8/node_modules/which-typed-array/index.js"(exports, module) {
    "use strict";
    var forEach = require_for_each();
    var availableTypedArrays = require_available_typed_arrays();
    var callBound = require_callBound();
    var $toString = callBound("Object.prototype.toString");
    var hasToStringTag = require_shams2()();
    var g = typeof globalThis === "undefined" ? global : globalThis;
    var typedArrays = availableTypedArrays();
    var $slice = callBound("String.prototype.slice");
    var toStrTags = {};
    var gOPD = require_getOwnPropertyDescriptor();
    var getPrototypeOf = Object.getPrototypeOf;
    if (hasToStringTag && gOPD && getPrototypeOf) {
      forEach(typedArrays, function(typedArray) {
        if (typeof g[typedArray] === "function") {
          var arr = new g[typedArray]();
          if (Symbol.toStringTag in arr) {
            var proto = getPrototypeOf(arr);
            var descriptor = gOPD(proto, Symbol.toStringTag);
            if (!descriptor) {
              var superProto = getPrototypeOf(proto);
              descriptor = gOPD(superProto, Symbol.toStringTag);
            }
            toStrTags[typedArray] = descriptor.get;
          }
        }
      });
    }
    var tryTypedArrays = function tryAllTypedArrays(value) {
      var foundName = false;
      forEach(toStrTags, function(getter, typedArray) {
        if (!foundName) {
          try {
            var name = getter.call(value);
            if (name === typedArray) {
              foundName = name;
            }
          } catch (e) {
          }
        }
      });
      return foundName;
    };
    var isTypedArray = require_is_typed_array();
    module.exports = function whichTypedArray(value) {
      if (!isTypedArray(value)) {
        return false;
      }
      if (!hasToStringTag || !(Symbol.toStringTag in value)) {
        return $slice($toString(value), 8, -1);
      }
      return tryTypedArrays(value);
    };
  }
});

// ../../node_modules/.pnpm/util@0.12.4/node_modules/util/support/types.js
var require_types = __commonJS({
  "../../node_modules/.pnpm/util@0.12.4/node_modules/util/support/types.js"(exports) {
    "use strict";
    var isArgumentsObject = require_is_arguments();
    var isGeneratorFunction = require_is_generator_function();
    var whichTypedArray = require_which_typed_array();
    var isTypedArray = require_is_typed_array();
    function uncurryThis(f) {
      return f.call.bind(f);
    }
    var BigIntSupported = typeof BigInt !== "undefined";
    var SymbolSupported = typeof Symbol !== "undefined";
    var ObjectToString = uncurryThis(Object.prototype.toString);
    var numberValue = uncurryThis(Number.prototype.valueOf);
    var stringValue = uncurryThis(String.prototype.valueOf);
    var booleanValue = uncurryThis(Boolean.prototype.valueOf);
    if (BigIntSupported) {
      bigIntValue = uncurryThis(BigInt.prototype.valueOf);
    }
    var bigIntValue;
    if (SymbolSupported) {
      symbolValue = uncurryThis(Symbol.prototype.valueOf);
    }
    var symbolValue;
    function checkBoxedPrimitive(value, prototypeValueOf) {
      if (typeof value !== "object") {
        return false;
      }
      try {
        prototypeValueOf(value);
        return true;
      } catch (e) {
        return false;
      }
    }
    exports.isArgumentsObject = isArgumentsObject;
    exports.isGeneratorFunction = isGeneratorFunction;
    exports.isTypedArray = isTypedArray;
    function isPromise(input) {
      return typeof Promise !== "undefined" && input instanceof Promise || input !== null && typeof input === "object" && typeof input.then === "function" && typeof input.catch === "function";
    }
    exports.isPromise = isPromise;
    function isArrayBufferView(value) {
      if (typeof ArrayBuffer !== "undefined" && ArrayBuffer.isView) {
        return ArrayBuffer.isView(value);
      }
      return isTypedArray(value) || isDataView(value);
    }
    exports.isArrayBufferView = isArrayBufferView;
    function isUint8Array(value) {
      return whichTypedArray(value) === "Uint8Array";
    }
    exports.isUint8Array = isUint8Array;
    function isUint8ClampedArray(value) {
      return whichTypedArray(value) === "Uint8ClampedArray";
    }
    exports.isUint8ClampedArray = isUint8ClampedArray;
    function isUint16Array(value) {
      return whichTypedArray(value) === "Uint16Array";
    }
    exports.isUint16Array = isUint16Array;
    function isUint32Array(value) {
      return whichTypedArray(value) === "Uint32Array";
    }
    exports.isUint32Array = isUint32Array;
    function isInt8Array(value) {
      return whichTypedArray(value) === "Int8Array";
    }
    exports.isInt8Array = isInt8Array;
    function isInt16Array(value) {
      return whichTypedArray(value) === "Int16Array";
    }
    exports.isInt16Array = isInt16Array;
    function isInt32Array(value) {
      return whichTypedArray(value) === "Int32Array";
    }
    exports.isInt32Array = isInt32Array;
    function isFloat32Array(value) {
      return whichTypedArray(value) === "Float32Array";
    }
    exports.isFloat32Array = isFloat32Array;
    function isFloat64Array(value) {
      return whichTypedArray(value) === "Float64Array";
    }
    exports.isFloat64Array = isFloat64Array;
    function isBigInt64Array(value) {
      return whichTypedArray(value) === "BigInt64Array";
    }
    exports.isBigInt64Array = isBigInt64Array;
    function isBigUint64Array(value) {
      return whichTypedArray(value) === "BigUint64Array";
    }
    exports.isBigUint64Array = isBigUint64Array;
    function isMapToString(value) {
      return ObjectToString(value) === "[object Map]";
    }
    isMapToString.working = typeof Map !== "undefined" && isMapToString(/* @__PURE__ */ new Map());
    function isMap(value) {
      if (typeof Map === "undefined") {
        return false;
      }
      return isMapToString.working ? isMapToString(value) : value instanceof Map;
    }
    exports.isMap = isMap;
    function isSetToString(value) {
      return ObjectToString(value) === "[object Set]";
    }
    isSetToString.working = typeof Set !== "undefined" && isSetToString(/* @__PURE__ */ new Set());
    function isSet(value) {
      if (typeof Set === "undefined") {
        return false;
      }
      return isSetToString.working ? isSetToString(value) : value instanceof Set;
    }
    exports.isSet = isSet;
    function isWeakMapToString(value) {
      return ObjectToString(value) === "[object WeakMap]";
    }
    isWeakMapToString.working = typeof WeakMap !== "undefined" && isWeakMapToString(/* @__PURE__ */ new WeakMap());
    function isWeakMap(value) {
      if (typeof WeakMap === "undefined") {
        return false;
      }
      return isWeakMapToString.working ? isWeakMapToString(value) : value instanceof WeakMap;
    }
    exports.isWeakMap = isWeakMap;
    function isWeakSetToString(value) {
      return ObjectToString(value) === "[object WeakSet]";
    }
    isWeakSetToString.working = typeof WeakSet !== "undefined" && isWeakSetToString(/* @__PURE__ */ new WeakSet());
    function isWeakSet(value) {
      return isWeakSetToString(value);
    }
    exports.isWeakSet = isWeakSet;
    function isArrayBufferToString(value) {
      return ObjectToString(value) === "[object ArrayBuffer]";
    }
    isArrayBufferToString.working = typeof ArrayBuffer !== "undefined" && isArrayBufferToString(new ArrayBuffer());
    function isArrayBuffer(value) {
      if (typeof ArrayBuffer === "undefined") {
        return false;
      }
      return isArrayBufferToString.working ? isArrayBufferToString(value) : value instanceof ArrayBuffer;
    }
    exports.isArrayBuffer = isArrayBuffer;
    function isDataViewToString(value) {
      return ObjectToString(value) === "[object DataView]";
    }
    isDataViewToString.working = typeof ArrayBuffer !== "undefined" && typeof DataView !== "undefined" && isDataViewToString(new DataView(new ArrayBuffer(1), 0, 1));
    function isDataView(value) {
      if (typeof DataView === "undefined") {
        return false;
      }
      return isDataViewToString.working ? isDataViewToString(value) : value instanceof DataView;
    }
    exports.isDataView = isDataView;
    var SharedArrayBufferCopy = typeof SharedArrayBuffer !== "undefined" ? SharedArrayBuffer : void 0;
    function isSharedArrayBufferToString(value) {
      return ObjectToString(value) === "[object SharedArrayBuffer]";
    }
    function isSharedArrayBuffer(value) {
      if (typeof SharedArrayBufferCopy === "undefined") {
        return false;
      }
      if (typeof isSharedArrayBufferToString.working === "undefined") {
        isSharedArrayBufferToString.working = isSharedArrayBufferToString(new SharedArrayBufferCopy());
      }
      return isSharedArrayBufferToString.working ? isSharedArrayBufferToString(value) : value instanceof SharedArrayBufferCopy;
    }
    exports.isSharedArrayBuffer = isSharedArrayBuffer;
    function isAsyncFunction(value) {
      return ObjectToString(value) === "[object AsyncFunction]";
    }
    exports.isAsyncFunction = isAsyncFunction;
    function isMapIterator(value) {
      return ObjectToString(value) === "[object Map Iterator]";
    }
    exports.isMapIterator = isMapIterator;
    function isSetIterator(value) {
      return ObjectToString(value) === "[object Set Iterator]";
    }
    exports.isSetIterator = isSetIterator;
    function isGeneratorObject(value) {
      return ObjectToString(value) === "[object Generator]";
    }
    exports.isGeneratorObject = isGeneratorObject;
    function isWebAssemblyCompiledModule(value) {
      return ObjectToString(value) === "[object WebAssembly.Module]";
    }
    exports.isWebAssemblyCompiledModule = isWebAssemblyCompiledModule;
    function isNumberObject(value) {
      return checkBoxedPrimitive(value, numberValue);
    }
    exports.isNumberObject = isNumberObject;
    function isStringObject(value) {
      return checkBoxedPrimitive(value, stringValue);
    }
    exports.isStringObject = isStringObject;
    function isBooleanObject(value) {
      return checkBoxedPrimitive(value, booleanValue);
    }
    exports.isBooleanObject = isBooleanObject;
    function isBigIntObject(value) {
      return BigIntSupported && checkBoxedPrimitive(value, bigIntValue);
    }
    exports.isBigIntObject = isBigIntObject;
    function isSymbolObject(value) {
      return SymbolSupported && checkBoxedPrimitive(value, symbolValue);
    }
    exports.isSymbolObject = isSymbolObject;
    function isBoxedPrimitive(value) {
      return isNumberObject(value) || isStringObject(value) || isBooleanObject(value) || isBigIntObject(value) || isSymbolObject(value);
    }
    exports.isBoxedPrimitive = isBoxedPrimitive;
    function isAnyArrayBuffer(value) {
      return typeof Uint8Array !== "undefined" && (isArrayBuffer(value) || isSharedArrayBuffer(value));
    }
    exports.isAnyArrayBuffer = isAnyArrayBuffer;
    ["isProxy", "isExternal", "isModuleNamespaceObject"].forEach(function(method) {
      Object.defineProperty(exports, method, {
        enumerable: false,
        value: function() {
          throw new Error(method + " is not supported in userland");
        }
      });
    });
  }
});

// ../../node_modules/.pnpm/util@0.12.4/node_modules/util/support/isBufferBrowser.js
var require_isBufferBrowser = __commonJS({
  "../../node_modules/.pnpm/util@0.12.4/node_modules/util/support/isBufferBrowser.js"(exports, module) {
    module.exports = function isBuffer(arg) {
      return arg && typeof arg === "object" && typeof arg.copy === "function" && typeof arg.fill === "function" && typeof arg.readUInt8 === "function";
    };
  }
});

// ../../node_modules/.pnpm/inherits@2.0.4/node_modules/inherits/inherits_browser.js
var require_inherits_browser = __commonJS({
  "../../node_modules/.pnpm/inherits@2.0.4/node_modules/inherits/inherits_browser.js"(exports, module) {
    if (typeof Object.create === "function") {
      module.exports = function inherits(ctor, superCtor) {
        if (superCtor) {
          ctor.super_ = superCtor;
          ctor.prototype = Object.create(superCtor.prototype, {
            constructor: {
              value: ctor,
              enumerable: false,
              writable: true,
              configurable: true
            }
          });
        }
      };
    } else {
      module.exports = function inherits(ctor, superCtor) {
        if (superCtor) {
          ctor.super_ = superCtor;
          var TempCtor = function() {
          };
          TempCtor.prototype = superCtor.prototype;
          ctor.prototype = new TempCtor();
          ctor.prototype.constructor = ctor;
        }
      };
    }
  }
});

// ../../node_modules/.pnpm/util@0.12.4/node_modules/util/util.js
var require_util = __commonJS({
  "../../node_modules/.pnpm/util@0.12.4/node_modules/util/util.js"(exports) {
    var getOwnPropertyDescriptors = Object.getOwnPropertyDescriptors || function getOwnPropertyDescriptors2(obj) {
      var keys = Object.keys(obj);
      var descriptors = {};
      for (var i = 0; i < keys.length; i++) {
        descriptors[keys[i]] = Object.getOwnPropertyDescriptor(obj, keys[i]);
      }
      return descriptors;
    };
    var formatRegExp = /%[sdj%]/g;
    exports.format = function(f) {
      if (!isString(f)) {
        var objects = [];
        for (var i = 0; i < arguments.length; i++) {
          objects.push(inspect(arguments[i]));
        }
        return objects.join(" ");
      }
      var i = 1;
      var args = arguments;
      var len = args.length;
      var str = String(f).replace(formatRegExp, function(x2) {
        if (x2 === "%%")
          return "%";
        if (i >= len)
          return x2;
        switch (x2) {
          case "%s":
            return String(args[i++]);
          case "%d":
            return Number(args[i++]);
          case "%j":
            try {
              return JSON.stringify(args[i++]);
            } catch (_) {
              return "[Circular]";
            }
          default:
            return x2;
        }
      });
      for (var x = args[i]; i < len; x = args[++i]) {
        if (isNull(x) || !isObject(x)) {
          str += " " + x;
        } else {
          str += " " + inspect(x);
        }
      }
      return str;
    };
    exports.deprecate = function(fn2, msg) {
      if (typeof process !== "undefined" && process.noDeprecation === true) {
        return fn2;
      }
      if (typeof process === "undefined") {
        return function() {
          return exports.deprecate(fn2, msg).apply(this, arguments);
        };
      }
      var warned = false;
      function deprecated() {
        if (!warned) {
          if (process.throwDeprecation) {
            throw new Error(msg);
          } else if (process.traceDeprecation) {
            console.trace(msg);
          } else {
            console.error(msg);
          }
          warned = true;
        }
        return fn2.apply(this, arguments);
      }
      return deprecated;
    };
    var debugs = {};
    var debugEnvRegex = /^$/;
    if (process.env.NODE_DEBUG) {
      debugEnv = process.env.NODE_DEBUG;
      debugEnv = debugEnv.replace(/[|\\{}()[\]^$+?.]/g, "\\$&").replace(/\*/g, ".*").replace(/,/g, "$|^").toUpperCase();
      debugEnvRegex = new RegExp("^" + debugEnv + "$", "i");
    }
    var debugEnv;
    exports.debuglog = function(set) {
      set = set.toUpperCase();
      if (!debugs[set]) {
        if (debugEnvRegex.test(set)) {
          var pid = process.pid;
          debugs[set] = function() {
            var msg = exports.format.apply(exports, arguments);
            console.error("%s %d: %s", set, pid, msg);
          };
        } else {
          debugs[set] = function() {
          };
        }
      }
      return debugs[set];
    };
    function inspect(obj, opts) {
      var ctx = {
        seen: [],
        stylize: stylizeNoColor
      };
      if (arguments.length >= 3)
        ctx.depth = arguments[2];
      if (arguments.length >= 4)
        ctx.colors = arguments[3];
      if (isBoolean(opts)) {
        ctx.showHidden = opts;
      } else if (opts) {
        exports._extend(ctx, opts);
      }
      if (isUndefined(ctx.showHidden))
        ctx.showHidden = false;
      if (isUndefined(ctx.depth))
        ctx.depth = 2;
      if (isUndefined(ctx.colors))
        ctx.colors = false;
      if (isUndefined(ctx.customInspect))
        ctx.customInspect = true;
      if (ctx.colors)
        ctx.stylize = stylizeWithColor;
      return formatValue(ctx, obj, ctx.depth);
    }
    exports.inspect = inspect;
    inspect.colors = {
      "bold": [1, 22],
      "italic": [3, 23],
      "underline": [4, 24],
      "inverse": [7, 27],
      "white": [37, 39],
      "grey": [90, 39],
      "black": [30, 39],
      "blue": [34, 39],
      "cyan": [36, 39],
      "green": [32, 39],
      "magenta": [35, 39],
      "red": [31, 39],
      "yellow": [33, 39]
    };
    inspect.styles = {
      "special": "cyan",
      "number": "yellow",
      "boolean": "yellow",
      "undefined": "grey",
      "null": "bold",
      "string": "green",
      "date": "magenta",
      "regexp": "red"
    };
    function stylizeWithColor(str, styleType) {
      var style = inspect.styles[styleType];
      if (style) {
        return "\x1B[" + inspect.colors[style][0] + "m" + str + "\x1B[" + inspect.colors[style][1] + "m";
      } else {
        return str;
      }
    }
    function stylizeNoColor(str, styleType) {
      return str;
    }
    function arrayToHash(array) {
      var hash = {};
      array.forEach(function(val, idx) {
        hash[val] = true;
      });
      return hash;
    }
    function formatValue(ctx, value, recurseTimes) {
      if (ctx.customInspect && value && isFunction(value.inspect) && value.inspect !== exports.inspect && !(value.constructor && value.constructor.prototype === value)) {
        var ret = value.inspect(recurseTimes, ctx);
        if (!isString(ret)) {
          ret = formatValue(ctx, ret, recurseTimes);
        }
        return ret;
      }
      var primitive = formatPrimitive(ctx, value);
      if (primitive) {
        return primitive;
      }
      var keys = Object.keys(value);
      var visibleKeys = arrayToHash(keys);
      if (ctx.showHidden) {
        keys = Object.getOwnPropertyNames(value);
      }
      if (isError(value) && (keys.indexOf("message") >= 0 || keys.indexOf("description") >= 0)) {
        return formatError(value);
      }
      if (keys.length === 0) {
        if (isFunction(value)) {
          var name = value.name ? ": " + value.name : "";
          return ctx.stylize("[Function" + name + "]", "special");
        }
        if (isRegExp(value)) {
          return ctx.stylize(RegExp.prototype.toString.call(value), "regexp");
        }
        if (isDate(value)) {
          return ctx.stylize(Date.prototype.toString.call(value), "date");
        }
        if (isError(value)) {
          return formatError(value);
        }
      }
      var base = "", array = false, braces = ["{", "}"];
      if (isArray(value)) {
        array = true;
        braces = ["[", "]"];
      }
      if (isFunction(value)) {
        var n = value.name ? ": " + value.name : "";
        base = " [Function" + n + "]";
      }
      if (isRegExp(value)) {
        base = " " + RegExp.prototype.toString.call(value);
      }
      if (isDate(value)) {
        base = " " + Date.prototype.toUTCString.call(value);
      }
      if (isError(value)) {
        base = " " + formatError(value);
      }
      if (keys.length === 0 && (!array || value.length == 0)) {
        return braces[0] + base + braces[1];
      }
      if (recurseTimes < 0) {
        if (isRegExp(value)) {
          return ctx.stylize(RegExp.prototype.toString.call(value), "regexp");
        } else {
          return ctx.stylize("[Object]", "special");
        }
      }
      ctx.seen.push(value);
      var output;
      if (array) {
        output = formatArray(ctx, value, recurseTimes, visibleKeys, keys);
      } else {
        output = keys.map(function(key) {
          return formatProperty(ctx, value, recurseTimes, visibleKeys, key, array);
        });
      }
      ctx.seen.pop();
      return reduceToSingleString(output, base, braces);
    }
    function formatPrimitive(ctx, value) {
      if (isUndefined(value))
        return ctx.stylize("undefined", "undefined");
      if (isString(value)) {
        var simple = "'" + JSON.stringify(value).replace(/^"|"$/g, "").replace(/'/g, "\\'").replace(/\\"/g, '"') + "'";
        return ctx.stylize(simple, "string");
      }
      if (isNumber(value))
        return ctx.stylize("" + value, "number");
      if (isBoolean(value))
        return ctx.stylize("" + value, "boolean");
      if (isNull(value))
        return ctx.stylize("null", "null");
    }
    function formatError(value) {
      return "[" + Error.prototype.toString.call(value) + "]";
    }
    function formatArray(ctx, value, recurseTimes, visibleKeys, keys) {
      var output = [];
      for (var i = 0, l = value.length; i < l; ++i) {
        if (hasOwnProperty(value, String(i))) {
          output.push(formatProperty(ctx, value, recurseTimes, visibleKeys, String(i), true));
        } else {
          output.push("");
        }
      }
      keys.forEach(function(key) {
        if (!key.match(/^\d+$/)) {
          output.push(formatProperty(ctx, value, recurseTimes, visibleKeys, key, true));
        }
      });
      return output;
    }
    function formatProperty(ctx, value, recurseTimes, visibleKeys, key, array) {
      var name, str, desc;
      desc = Object.getOwnPropertyDescriptor(value, key) || { value: value[key] };
      if (desc.get) {
        if (desc.set) {
          str = ctx.stylize("[Getter/Setter]", "special");
        } else {
          str = ctx.stylize("[Getter]", "special");
        }
      } else {
        if (desc.set) {
          str = ctx.stylize("[Setter]", "special");
        }
      }
      if (!hasOwnProperty(visibleKeys, key)) {
        name = "[" + key + "]";
      }
      if (!str) {
        if (ctx.seen.indexOf(desc.value) < 0) {
          if (isNull(recurseTimes)) {
            str = formatValue(ctx, desc.value, null);
          } else {
            str = formatValue(ctx, desc.value, recurseTimes - 1);
          }
          if (str.indexOf("\n") > -1) {
            if (array) {
              str = str.split("\n").map(function(line) {
                return "  " + line;
              }).join("\n").substr(2);
            } else {
              str = "\n" + str.split("\n").map(function(line) {
                return "   " + line;
              }).join("\n");
            }
          }
        } else {
          str = ctx.stylize("[Circular]", "special");
        }
      }
      if (isUndefined(name)) {
        if (array && key.match(/^\d+$/)) {
          return str;
        }
        name = JSON.stringify("" + key);
        if (name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
          name = name.substr(1, name.length - 2);
          name = ctx.stylize(name, "name");
        } else {
          name = name.replace(/'/g, "\\'").replace(/\\"/g, '"').replace(/(^"|"$)/g, "'");
          name = ctx.stylize(name, "string");
        }
      }
      return name + ": " + str;
    }
    function reduceToSingleString(output, base, braces) {
      var numLinesEst = 0;
      var length = output.reduce(function(prev, cur) {
        numLinesEst++;
        if (cur.indexOf("\n") >= 0)
          numLinesEst++;
        return prev + cur.replace(/\u001b\[\d\d?m/g, "").length + 1;
      }, 0);
      if (length > 60) {
        return braces[0] + (base === "" ? "" : base + "\n ") + " " + output.join(",\n  ") + " " + braces[1];
      }
      return braces[0] + base + " " + output.join(", ") + " " + braces[1];
    }
    exports.types = require_types();
    function isArray(ar2) {
      return Array.isArray(ar2);
    }
    exports.isArray = isArray;
    function isBoolean(arg) {
      return typeof arg === "boolean";
    }
    exports.isBoolean = isBoolean;
    function isNull(arg) {
      return arg === null;
    }
    exports.isNull = isNull;
    function isNullOrUndefined(arg) {
      return arg == null;
    }
    exports.isNullOrUndefined = isNullOrUndefined;
    function isNumber(arg) {
      return typeof arg === "number";
    }
    exports.isNumber = isNumber;
    function isString(arg) {
      return typeof arg === "string";
    }
    exports.isString = isString;
    function isSymbol(arg) {
      return typeof arg === "symbol";
    }
    exports.isSymbol = isSymbol;
    function isUndefined(arg) {
      return arg === void 0;
    }
    exports.isUndefined = isUndefined;
    function isRegExp(re) {
      return isObject(re) && objectToString(re) === "[object RegExp]";
    }
    exports.isRegExp = isRegExp;
    exports.types.isRegExp = isRegExp;
    function isObject(arg) {
      return typeof arg === "object" && arg !== null;
    }
    exports.isObject = isObject;
    function isDate(d) {
      return isObject(d) && objectToString(d) === "[object Date]";
    }
    exports.isDate = isDate;
    exports.types.isDate = isDate;
    function isError(e) {
      return isObject(e) && (objectToString(e) === "[object Error]" || e instanceof Error);
    }
    exports.isError = isError;
    exports.types.isNativeError = isError;
    function isFunction(arg) {
      return typeof arg === "function";
    }
    exports.isFunction = isFunction;
    function isPrimitive(arg) {
      return arg === null || typeof arg === "boolean" || typeof arg === "number" || typeof arg === "string" || typeof arg === "symbol" || typeof arg === "undefined";
    }
    exports.isPrimitive = isPrimitive;
    exports.isBuffer = require_isBufferBrowser();
    function objectToString(o) {
      return Object.prototype.toString.call(o);
    }
    function pad(n) {
      return n < 10 ? "0" + n.toString(10) : n.toString(10);
    }
    var months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec"
    ];
    function timestamp() {
      var d = new Date();
      var time = [
        pad(d.getHours()),
        pad(d.getMinutes()),
        pad(d.getSeconds())
      ].join(":");
      return [d.getDate(), months[d.getMonth()], time].join(" ");
    }
    exports.log = function() {
      console.log("%s - %s", timestamp(), exports.format.apply(exports, arguments));
    };
    exports.inherits = require_inherits_browser();
    exports._extend = function(origin, add) {
      if (!add || !isObject(add))
        return origin;
      var keys = Object.keys(add);
      var i = keys.length;
      while (i--) {
        origin[keys[i]] = add[keys[i]];
      }
      return origin;
    };
    function hasOwnProperty(obj, prop) {
      return Object.prototype.hasOwnProperty.call(obj, prop);
    }
    var kCustomPromisifiedSymbol = typeof Symbol !== "undefined" ? Symbol("util.promisify.custom") : void 0;
    exports.promisify = function promisify(original) {
      if (typeof original !== "function")
        throw new TypeError('The "original" argument must be of type Function');
      if (kCustomPromisifiedSymbol && original[kCustomPromisifiedSymbol]) {
        var fn2 = original[kCustomPromisifiedSymbol];
        if (typeof fn2 !== "function") {
          throw new TypeError('The "util.promisify.custom" argument must be of type Function');
        }
        Object.defineProperty(fn2, kCustomPromisifiedSymbol, {
          value: fn2,
          enumerable: false,
          writable: false,
          configurable: true
        });
        return fn2;
      }
      function fn2() {
        var promiseResolve, promiseReject;
        var promise = new Promise(function(resolve, reject) {
          promiseResolve = resolve;
          promiseReject = reject;
        });
        var args = [];
        for (var i = 0; i < arguments.length; i++) {
          args.push(arguments[i]);
        }
        args.push(function(err, value) {
          if (err) {
            promiseReject(err);
          } else {
            promiseResolve(value);
          }
        });
        try {
          original.apply(this, args);
        } catch (err) {
          promiseReject(err);
        }
        return promise;
      }
      Object.setPrototypeOf(fn2, Object.getPrototypeOf(original));
      if (kCustomPromisifiedSymbol)
        Object.defineProperty(fn2, kCustomPromisifiedSymbol, {
          value: fn2,
          enumerable: false,
          writable: false,
          configurable: true
        });
      return Object.defineProperties(fn2, getOwnPropertyDescriptors(original));
    };
    exports.promisify.custom = kCustomPromisifiedSymbol;
    function callbackifyOnRejected(reason, cb) {
      if (!reason) {
        var newReason = new Error("Promise was rejected with a falsy value");
        newReason.reason = reason;
        reason = newReason;
      }
      return cb(reason);
    }
    function callbackify(original) {
      if (typeof original !== "function") {
        throw new TypeError('The "original" argument must be of type Function');
      }
      function callbackified() {
        var args = [];
        for (var i = 0; i < arguments.length; i++) {
          args.push(arguments[i]);
        }
        var maybeCb = args.pop();
        if (typeof maybeCb !== "function") {
          throw new TypeError("The last argument must be of type Function");
        }
        var self2 = this;
        var cb = function() {
          return maybeCb.apply(self2, arguments);
        };
        original.apply(this, args).then(function(ret) {
          process.nextTick(cb.bind(null, null, ret));
        }, function(rej) {
          process.nextTick(callbackifyOnRejected.bind(null, rej, cb));
        });
      }
      Object.setPrototypeOf(callbackified, Object.getPrototypeOf(original));
      Object.defineProperties(callbackified, getOwnPropertyDescriptors(original));
      return callbackified;
    }
    exports.callbackify = callbackify;
  }
});

// dist/server/entry.mjs
import { Server as bi } from "https://deno.land/std@0.132.0/http/server.ts";
import { fetch as Ai } from "https://deno.land/x/file_fetch/mod.ts";
globalThis.process = { argv: [], env: Deno.env.toObject() };
var Ze = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function vt() {
  this._types = /* @__PURE__ */ Object.create(null), this._extensions = /* @__PURE__ */ Object.create(null);
  for (let t3 = 0; t3 < arguments.length; t3++)
    this.define(arguments[t3]);
  this.define = this.define.bind(this), this.getType = this.getType.bind(this), this.getExtension = this.getExtension.bind(this);
}
vt.prototype.define = function(t3, e) {
  for (let n in t3) {
    let o = t3[n].map(function(s) {
      return s.toLowerCase();
    });
    n = n.toLowerCase();
    for (let s = 0; s < o.length; s++) {
      const l = o[s];
      if (l[0] !== "*") {
        if (!e && l in this._types)
          throw new Error('Attempt to change mapping for "' + l + '" extension from "' + this._types[l] + '" to "' + n + '". Pass `force=true` to allow this, otherwise remove "' + l + '" from the list of extensions for "' + n + '".');
        this._types[l] = n;
      }
    }
    if (e || !this._extensions[n]) {
      const s = o[0];
      this._extensions[n] = s[0] !== "*" ? s : s.substr(1);
    }
  }
};
vt.prototype.getType = function(t3) {
  t3 = String(t3);
  let e = t3.replace(/^.*[/\\]/, "").toLowerCase(), n = e.replace(/^.*\./, "").toLowerCase(), o = e.length < t3.length;
  return (n.length < e.length - 1 || !o) && this._types[n] || null;
};
vt.prototype.getExtension = function(t3) {
  return t3 = /^\s*([^;\s]*)/.test(t3) && RegExp.$1, t3 && this._extensions[t3.toLowerCase()] || null;
};
var Ei = vt;
var Si = { "application/andrew-inset": ["ez"], "application/applixware": ["aw"], "application/atom+xml": ["atom"], "application/atomcat+xml": ["atomcat"], "application/atomdeleted+xml": ["atomdeleted"], "application/atomsvc+xml": ["atomsvc"], "application/atsc-dwd+xml": ["dwd"], "application/atsc-held+xml": ["held"], "application/atsc-rsat+xml": ["rsat"], "application/bdoc": ["bdoc"], "application/calendar+xml": ["xcs"], "application/ccxml+xml": ["ccxml"], "application/cdfx+xml": ["cdfx"], "application/cdmi-capability": ["cdmia"], "application/cdmi-container": ["cdmic"], "application/cdmi-domain": ["cdmid"], "application/cdmi-object": ["cdmio"], "application/cdmi-queue": ["cdmiq"], "application/cu-seeme": ["cu"], "application/dash+xml": ["mpd"], "application/davmount+xml": ["davmount"], "application/docbook+xml": ["dbk"], "application/dssc+der": ["dssc"], "application/dssc+xml": ["xdssc"], "application/ecmascript": ["es", "ecma"], "application/emma+xml": ["emma"], "application/emotionml+xml": ["emotionml"], "application/epub+zip": ["epub"], "application/exi": ["exi"], "application/express": ["exp"], "application/fdt+xml": ["fdt"], "application/font-tdpfr": ["pfr"], "application/geo+json": ["geojson"], "application/gml+xml": ["gml"], "application/gpx+xml": ["gpx"], "application/gxf": ["gxf"], "application/gzip": ["gz"], "application/hjson": ["hjson"], "application/hyperstudio": ["stk"], "application/inkml+xml": ["ink", "inkml"], "application/ipfix": ["ipfix"], "application/its+xml": ["its"], "application/java-archive": ["jar", "war", "ear"], "application/java-serialized-object": ["ser"], "application/java-vm": ["class"], "application/javascript": ["js", "mjs"], "application/json": ["json", "map"], "application/json5": ["json5"], "application/jsonml+json": ["jsonml"], "application/ld+json": ["jsonld"], "application/lgr+xml": ["lgr"], "application/lost+xml": ["lostxml"], "application/mac-binhex40": ["hqx"], "application/mac-compactpro": ["cpt"], "application/mads+xml": ["mads"], "application/manifest+json": ["webmanifest"], "application/marc": ["mrc"], "application/marcxml+xml": ["mrcx"], "application/mathematica": ["ma", "nb", "mb"], "application/mathml+xml": ["mathml"], "application/mbox": ["mbox"], "application/mediaservercontrol+xml": ["mscml"], "application/metalink+xml": ["metalink"], "application/metalink4+xml": ["meta4"], "application/mets+xml": ["mets"], "application/mmt-aei+xml": ["maei"], "application/mmt-usd+xml": ["musd"], "application/mods+xml": ["mods"], "application/mp21": ["m21", "mp21"], "application/mp4": ["mp4s", "m4p"], "application/msword": ["doc", "dot"], "application/mxf": ["mxf"], "application/n-quads": ["nq"], "application/n-triples": ["nt"], "application/node": ["cjs"], "application/octet-stream": ["bin", "dms", "lrf", "mar", "so", "dist", "distz", "pkg", "bpk", "dump", "elc", "deploy", "exe", "dll", "deb", "dmg", "iso", "img", "msi", "msp", "msm", "buffer"], "application/oda": ["oda"], "application/oebps-package+xml": ["opf"], "application/ogg": ["ogx"], "application/omdoc+xml": ["omdoc"], "application/onenote": ["onetoc", "onetoc2", "onetmp", "onepkg"], "application/oxps": ["oxps"], "application/p2p-overlay+xml": ["relo"], "application/patch-ops-error+xml": ["xer"], "application/pdf": ["pdf"], "application/pgp-encrypted": ["pgp"], "application/pgp-signature": ["asc", "sig"], "application/pics-rules": ["prf"], "application/pkcs10": ["p10"], "application/pkcs7-mime": ["p7m", "p7c"], "application/pkcs7-signature": ["p7s"], "application/pkcs8": ["p8"], "application/pkix-attr-cert": ["ac"], "application/pkix-cert": ["cer"], "application/pkix-crl": ["crl"], "application/pkix-pkipath": ["pkipath"], "application/pkixcmp": ["pki"], "application/pls+xml": ["pls"], "application/postscript": ["ai", "eps", "ps"], "application/provenance+xml": ["provx"], "application/pskc+xml": ["pskcxml"], "application/raml+yaml": ["raml"], "application/rdf+xml": ["rdf", "owl"], "application/reginfo+xml": ["rif"], "application/relax-ng-compact-syntax": ["rnc"], "application/resource-lists+xml": ["rl"], "application/resource-lists-diff+xml": ["rld"], "application/rls-services+xml": ["rs"], "application/route-apd+xml": ["rapd"], "application/route-s-tsid+xml": ["sls"], "application/route-usd+xml": ["rusd"], "application/rpki-ghostbusters": ["gbr"], "application/rpki-manifest": ["mft"], "application/rpki-roa": ["roa"], "application/rsd+xml": ["rsd"], "application/rss+xml": ["rss"], "application/rtf": ["rtf"], "application/sbml+xml": ["sbml"], "application/scvp-cv-request": ["scq"], "application/scvp-cv-response": ["scs"], "application/scvp-vp-request": ["spq"], "application/scvp-vp-response": ["spp"], "application/sdp": ["sdp"], "application/senml+xml": ["senmlx"], "application/sensml+xml": ["sensmlx"], "application/set-payment-initiation": ["setpay"], "application/set-registration-initiation": ["setreg"], "application/shf+xml": ["shf"], "application/sieve": ["siv", "sieve"], "application/smil+xml": ["smi", "smil"], "application/sparql-query": ["rq"], "application/sparql-results+xml": ["srx"], "application/srgs": ["gram"], "application/srgs+xml": ["grxml"], "application/sru+xml": ["sru"], "application/ssdl+xml": ["ssdl"], "application/ssml+xml": ["ssml"], "application/swid+xml": ["swidtag"], "application/tei+xml": ["tei", "teicorpus"], "application/thraud+xml": ["tfi"], "application/timestamped-data": ["tsd"], "application/toml": ["toml"], "application/trig": ["trig"], "application/ttml+xml": ["ttml"], "application/ubjson": ["ubj"], "application/urc-ressheet+xml": ["rsheet"], "application/urc-targetdesc+xml": ["td"], "application/voicexml+xml": ["vxml"], "application/wasm": ["wasm"], "application/widget": ["wgt"], "application/winhlp": ["hlp"], "application/wsdl+xml": ["wsdl"], "application/wspolicy+xml": ["wspolicy"], "application/xaml+xml": ["xaml"], "application/xcap-att+xml": ["xav"], "application/xcap-caps+xml": ["xca"], "application/xcap-diff+xml": ["xdf"], "application/xcap-el+xml": ["xel"], "application/xcap-ns+xml": ["xns"], "application/xenc+xml": ["xenc"], "application/xhtml+xml": ["xhtml", "xht"], "application/xliff+xml": ["xlf"], "application/xml": ["xml", "xsl", "xsd", "rng"], "application/xml-dtd": ["dtd"], "application/xop+xml": ["xop"], "application/xproc+xml": ["xpl"], "application/xslt+xml": ["*xsl", "xslt"], "application/xspf+xml": ["xspf"], "application/xv+xml": ["mxml", "xhvml", "xvml", "xvm"], "application/yang": ["yang"], "application/yin+xml": ["yin"], "application/zip": ["zip"], "audio/3gpp": ["*3gpp"], "audio/adpcm": ["adp"], "audio/amr": ["amr"], "audio/basic": ["au", "snd"], "audio/midi": ["mid", "midi", "kar", "rmi"], "audio/mobile-xmf": ["mxmf"], "audio/mp3": ["*mp3"], "audio/mp4": ["m4a", "mp4a"], "audio/mpeg": ["mpga", "mp2", "mp2a", "mp3", "m2a", "m3a"], "audio/ogg": ["oga", "ogg", "spx", "opus"], "audio/s3m": ["s3m"], "audio/silk": ["sil"], "audio/wav": ["wav"], "audio/wave": ["*wav"], "audio/webm": ["weba"], "audio/xm": ["xm"], "font/collection": ["ttc"], "font/otf": ["otf"], "font/ttf": ["ttf"], "font/woff": ["woff"], "font/woff2": ["woff2"], "image/aces": ["exr"], "image/apng": ["apng"], "image/avif": ["avif"], "image/bmp": ["bmp"], "image/cgm": ["cgm"], "image/dicom-rle": ["drle"], "image/emf": ["emf"], "image/fits": ["fits"], "image/g3fax": ["g3"], "image/gif": ["gif"], "image/heic": ["heic"], "image/heic-sequence": ["heics"], "image/heif": ["heif"], "image/heif-sequence": ["heifs"], "image/hej2k": ["hej2"], "image/hsj2": ["hsj2"], "image/ief": ["ief"], "image/jls": ["jls"], "image/jp2": ["jp2", "jpg2"], "image/jpeg": ["jpeg", "jpg", "jpe"], "image/jph": ["jph"], "image/jphc": ["jhc"], "image/jpm": ["jpm"], "image/jpx": ["jpx", "jpf"], "image/jxr": ["jxr"], "image/jxra": ["jxra"], "image/jxrs": ["jxrs"], "image/jxs": ["jxs"], "image/jxsc": ["jxsc"], "image/jxsi": ["jxsi"], "image/jxss": ["jxss"], "image/ktx": ["ktx"], "image/ktx2": ["ktx2"], "image/png": ["png"], "image/sgi": ["sgi"], "image/svg+xml": ["svg", "svgz"], "image/t38": ["t38"], "image/tiff": ["tif", "tiff"], "image/tiff-fx": ["tfx"], "image/webp": ["webp"], "image/wmf": ["wmf"], "message/disposition-notification": ["disposition-notification"], "message/global": ["u8msg"], "message/global-delivery-status": ["u8dsn"], "message/global-disposition-notification": ["u8mdn"], "message/global-headers": ["u8hdr"], "message/rfc822": ["eml", "mime"], "model/3mf": ["3mf"], "model/gltf+json": ["gltf"], "model/gltf-binary": ["glb"], "model/iges": ["igs", "iges"], "model/mesh": ["msh", "mesh", "silo"], "model/mtl": ["mtl"], "model/obj": ["obj"], "model/step+xml": ["stpx"], "model/step+zip": ["stpz"], "model/step-xml+zip": ["stpxz"], "model/stl": ["stl"], "model/vrml": ["wrl", "vrml"], "model/x3d+binary": ["*x3db", "x3dbz"], "model/x3d+fastinfoset": ["x3db"], "model/x3d+vrml": ["*x3dv", "x3dvz"], "model/x3d+xml": ["x3d", "x3dz"], "model/x3d-vrml": ["x3dv"], "text/cache-manifest": ["appcache", "manifest"], "text/calendar": ["ics", "ifb"], "text/coffeescript": ["coffee", "litcoffee"], "text/css": ["css"], "text/csv": ["csv"], "text/html": ["html", "htm", "shtml"], "text/jade": ["jade"], "text/jsx": ["jsx"], "text/less": ["less"], "text/markdown": ["markdown", "md"], "text/mathml": ["mml"], "text/mdx": ["mdx"], "text/n3": ["n3"], "text/plain": ["txt", "text", "conf", "def", "list", "log", "in", "ini"], "text/richtext": ["rtx"], "text/rtf": ["*rtf"], "text/sgml": ["sgml", "sgm"], "text/shex": ["shex"], "text/slim": ["slim", "slm"], "text/spdx": ["spdx"], "text/stylus": ["stylus", "styl"], "text/tab-separated-values": ["tsv"], "text/troff": ["t", "tr", "roff", "man", "me", "ms"], "text/turtle": ["ttl"], "text/uri-list": ["uri", "uris", "urls"], "text/vcard": ["vcard"], "text/vtt": ["vtt"], "text/xml": ["*xml"], "text/yaml": ["yaml", "yml"], "video/3gpp": ["3gp", "3gpp"], "video/3gpp2": ["3g2"], "video/h261": ["h261"], "video/h263": ["h263"], "video/h264": ["h264"], "video/iso.segment": ["m4s"], "video/jpeg": ["jpgv"], "video/jpm": ["*jpm", "jpgm"], "video/mj2": ["mj2", "mjp2"], "video/mp2t": ["ts"], "video/mp4": ["mp4", "mp4v", "mpg4"], "video/mpeg": ["mpeg", "mpg", "mpe", "m1v", "m2v"], "video/ogg": ["ogv"], "video/quicktime": ["qt", "mov"], "video/webm": ["webm"] };
var Fi = { "application/prs.cww": ["cww"], "application/vnd.1000minds.decision-model+xml": ["1km"], "application/vnd.3gpp.pic-bw-large": ["plb"], "application/vnd.3gpp.pic-bw-small": ["psb"], "application/vnd.3gpp.pic-bw-var": ["pvb"], "application/vnd.3gpp2.tcap": ["tcap"], "application/vnd.3m.post-it-notes": ["pwn"], "application/vnd.accpac.simply.aso": ["aso"], "application/vnd.accpac.simply.imp": ["imp"], "application/vnd.acucobol": ["acu"], "application/vnd.acucorp": ["atc", "acutc"], "application/vnd.adobe.air-application-installer-package+zip": ["air"], "application/vnd.adobe.formscentral.fcdt": ["fcdt"], "application/vnd.adobe.fxp": ["fxp", "fxpl"], "application/vnd.adobe.xdp+xml": ["xdp"], "application/vnd.adobe.xfdf": ["xfdf"], "application/vnd.ahead.space": ["ahead"], "application/vnd.airzip.filesecure.azf": ["azf"], "application/vnd.airzip.filesecure.azs": ["azs"], "application/vnd.amazon.ebook": ["azw"], "application/vnd.americandynamics.acc": ["acc"], "application/vnd.amiga.ami": ["ami"], "application/vnd.android.package-archive": ["apk"], "application/vnd.anser-web-certificate-issue-initiation": ["cii"], "application/vnd.anser-web-funds-transfer-initiation": ["fti"], "application/vnd.antix.game-component": ["atx"], "application/vnd.apple.installer+xml": ["mpkg"], "application/vnd.apple.keynote": ["key"], "application/vnd.apple.mpegurl": ["m3u8"], "application/vnd.apple.numbers": ["numbers"], "application/vnd.apple.pages": ["pages"], "application/vnd.apple.pkpass": ["pkpass"], "application/vnd.aristanetworks.swi": ["swi"], "application/vnd.astraea-software.iota": ["iota"], "application/vnd.audiograph": ["aep"], "application/vnd.balsamiq.bmml+xml": ["bmml"], "application/vnd.blueice.multipass": ["mpm"], "application/vnd.bmi": ["bmi"], "application/vnd.businessobjects": ["rep"], "application/vnd.chemdraw+xml": ["cdxml"], "application/vnd.chipnuts.karaoke-mmd": ["mmd"], "application/vnd.cinderella": ["cdy"], "application/vnd.citationstyles.style+xml": ["csl"], "application/vnd.claymore": ["cla"], "application/vnd.cloanto.rp9": ["rp9"], "application/vnd.clonk.c4group": ["c4g", "c4d", "c4f", "c4p", "c4u"], "application/vnd.cluetrust.cartomobile-config": ["c11amc"], "application/vnd.cluetrust.cartomobile-config-pkg": ["c11amz"], "application/vnd.commonspace": ["csp"], "application/vnd.contact.cmsg": ["cdbcmsg"], "application/vnd.cosmocaller": ["cmc"], "application/vnd.crick.clicker": ["clkx"], "application/vnd.crick.clicker.keyboard": ["clkk"], "application/vnd.crick.clicker.palette": ["clkp"], "application/vnd.crick.clicker.template": ["clkt"], "application/vnd.crick.clicker.wordbank": ["clkw"], "application/vnd.criticaltools.wbs+xml": ["wbs"], "application/vnd.ctc-posml": ["pml"], "application/vnd.cups-ppd": ["ppd"], "application/vnd.curl.car": ["car"], "application/vnd.curl.pcurl": ["pcurl"], "application/vnd.dart": ["dart"], "application/vnd.data-vision.rdz": ["rdz"], "application/vnd.dbf": ["dbf"], "application/vnd.dece.data": ["uvf", "uvvf", "uvd", "uvvd"], "application/vnd.dece.ttml+xml": ["uvt", "uvvt"], "application/vnd.dece.unspecified": ["uvx", "uvvx"], "application/vnd.dece.zip": ["uvz", "uvvz"], "application/vnd.denovo.fcselayout-link": ["fe_launch"], "application/vnd.dna": ["dna"], "application/vnd.dolby.mlp": ["mlp"], "application/vnd.dpgraph": ["dpg"], "application/vnd.dreamfactory": ["dfac"], "application/vnd.ds-keypoint": ["kpxx"], "application/vnd.dvb.ait": ["ait"], "application/vnd.dvb.service": ["svc"], "application/vnd.dynageo": ["geo"], "application/vnd.ecowin.chart": ["mag"], "application/vnd.enliven": ["nml"], "application/vnd.epson.esf": ["esf"], "application/vnd.epson.msf": ["msf"], "application/vnd.epson.quickanime": ["qam"], "application/vnd.epson.salt": ["slt"], "application/vnd.epson.ssf": ["ssf"], "application/vnd.eszigno3+xml": ["es3", "et3"], "application/vnd.ezpix-album": ["ez2"], "application/vnd.ezpix-package": ["ez3"], "application/vnd.fdf": ["fdf"], "application/vnd.fdsn.mseed": ["mseed"], "application/vnd.fdsn.seed": ["seed", "dataless"], "application/vnd.flographit": ["gph"], "application/vnd.fluxtime.clip": ["ftc"], "application/vnd.framemaker": ["fm", "frame", "maker", "book"], "application/vnd.frogans.fnc": ["fnc"], "application/vnd.frogans.ltf": ["ltf"], "application/vnd.fsc.weblaunch": ["fsc"], "application/vnd.fujitsu.oasys": ["oas"], "application/vnd.fujitsu.oasys2": ["oa2"], "application/vnd.fujitsu.oasys3": ["oa3"], "application/vnd.fujitsu.oasysgp": ["fg5"], "application/vnd.fujitsu.oasysprs": ["bh2"], "application/vnd.fujixerox.ddd": ["ddd"], "application/vnd.fujixerox.docuworks": ["xdw"], "application/vnd.fujixerox.docuworks.binder": ["xbd"], "application/vnd.fuzzysheet": ["fzs"], "application/vnd.genomatix.tuxedo": ["txd"], "application/vnd.geogebra.file": ["ggb"], "application/vnd.geogebra.tool": ["ggt"], "application/vnd.geometry-explorer": ["gex", "gre"], "application/vnd.geonext": ["gxt"], "application/vnd.geoplan": ["g2w"], "application/vnd.geospace": ["g3w"], "application/vnd.gmx": ["gmx"], "application/vnd.google-apps.document": ["gdoc"], "application/vnd.google-apps.presentation": ["gslides"], "application/vnd.google-apps.spreadsheet": ["gsheet"], "application/vnd.google-earth.kml+xml": ["kml"], "application/vnd.google-earth.kmz": ["kmz"], "application/vnd.grafeq": ["gqf", "gqs"], "application/vnd.groove-account": ["gac"], "application/vnd.groove-help": ["ghf"], "application/vnd.groove-identity-message": ["gim"], "application/vnd.groove-injector": ["grv"], "application/vnd.groove-tool-message": ["gtm"], "application/vnd.groove-tool-template": ["tpl"], "application/vnd.groove-vcard": ["vcg"], "application/vnd.hal+xml": ["hal"], "application/vnd.handheld-entertainment+xml": ["zmm"], "application/vnd.hbci": ["hbci"], "application/vnd.hhe.lesson-player": ["les"], "application/vnd.hp-hpgl": ["hpgl"], "application/vnd.hp-hpid": ["hpid"], "application/vnd.hp-hps": ["hps"], "application/vnd.hp-jlyt": ["jlt"], "application/vnd.hp-pcl": ["pcl"], "application/vnd.hp-pclxl": ["pclxl"], "application/vnd.hydrostatix.sof-data": ["sfd-hdstx"], "application/vnd.ibm.minipay": ["mpy"], "application/vnd.ibm.modcap": ["afp", "listafp", "list3820"], "application/vnd.ibm.rights-management": ["irm"], "application/vnd.ibm.secure-container": ["sc"], "application/vnd.iccprofile": ["icc", "icm"], "application/vnd.igloader": ["igl"], "application/vnd.immervision-ivp": ["ivp"], "application/vnd.immervision-ivu": ["ivu"], "application/vnd.insors.igm": ["igm"], "application/vnd.intercon.formnet": ["xpw", "xpx"], "application/vnd.intergeo": ["i2g"], "application/vnd.intu.qbo": ["qbo"], "application/vnd.intu.qfx": ["qfx"], "application/vnd.ipunplugged.rcprofile": ["rcprofile"], "application/vnd.irepository.package+xml": ["irp"], "application/vnd.is-xpr": ["xpr"], "application/vnd.isac.fcs": ["fcs"], "application/vnd.jam": ["jam"], "application/vnd.jcp.javame.midlet-rms": ["rms"], "application/vnd.jisp": ["jisp"], "application/vnd.joost.joda-archive": ["joda"], "application/vnd.kahootz": ["ktz", "ktr"], "application/vnd.kde.karbon": ["karbon"], "application/vnd.kde.kchart": ["chrt"], "application/vnd.kde.kformula": ["kfo"], "application/vnd.kde.kivio": ["flw"], "application/vnd.kde.kontour": ["kon"], "application/vnd.kde.kpresenter": ["kpr", "kpt"], "application/vnd.kde.kspread": ["ksp"], "application/vnd.kde.kword": ["kwd", "kwt"], "application/vnd.kenameaapp": ["htke"], "application/vnd.kidspiration": ["kia"], "application/vnd.kinar": ["kne", "knp"], "application/vnd.koan": ["skp", "skd", "skt", "skm"], "application/vnd.kodak-descriptor": ["sse"], "application/vnd.las.las+xml": ["lasxml"], "application/vnd.llamagraphics.life-balance.desktop": ["lbd"], "application/vnd.llamagraphics.life-balance.exchange+xml": ["lbe"], "application/vnd.lotus-1-2-3": ["123"], "application/vnd.lotus-approach": ["apr"], "application/vnd.lotus-freelance": ["pre"], "application/vnd.lotus-notes": ["nsf"], "application/vnd.lotus-organizer": ["org"], "application/vnd.lotus-screencam": ["scm"], "application/vnd.lotus-wordpro": ["lwp"], "application/vnd.macports.portpkg": ["portpkg"], "application/vnd.mapbox-vector-tile": ["mvt"], "application/vnd.mcd": ["mcd"], "application/vnd.medcalcdata": ["mc1"], "application/vnd.mediastation.cdkey": ["cdkey"], "application/vnd.mfer": ["mwf"], "application/vnd.mfmp": ["mfm"], "application/vnd.micrografx.flo": ["flo"], "application/vnd.micrografx.igx": ["igx"], "application/vnd.mif": ["mif"], "application/vnd.mobius.daf": ["daf"], "application/vnd.mobius.dis": ["dis"], "application/vnd.mobius.mbk": ["mbk"], "application/vnd.mobius.mqy": ["mqy"], "application/vnd.mobius.msl": ["msl"], "application/vnd.mobius.plc": ["plc"], "application/vnd.mobius.txf": ["txf"], "application/vnd.mophun.application": ["mpn"], "application/vnd.mophun.certificate": ["mpc"], "application/vnd.mozilla.xul+xml": ["xul"], "application/vnd.ms-artgalry": ["cil"], "application/vnd.ms-cab-compressed": ["cab"], "application/vnd.ms-excel": ["xls", "xlm", "xla", "xlc", "xlt", "xlw"], "application/vnd.ms-excel.addin.macroenabled.12": ["xlam"], "application/vnd.ms-excel.sheet.binary.macroenabled.12": ["xlsb"], "application/vnd.ms-excel.sheet.macroenabled.12": ["xlsm"], "application/vnd.ms-excel.template.macroenabled.12": ["xltm"], "application/vnd.ms-fontobject": ["eot"], "application/vnd.ms-htmlhelp": ["chm"], "application/vnd.ms-ims": ["ims"], "application/vnd.ms-lrm": ["lrm"], "application/vnd.ms-officetheme": ["thmx"], "application/vnd.ms-outlook": ["msg"], "application/vnd.ms-pki.seccat": ["cat"], "application/vnd.ms-pki.stl": ["*stl"], "application/vnd.ms-powerpoint": ["ppt", "pps", "pot"], "application/vnd.ms-powerpoint.addin.macroenabled.12": ["ppam"], "application/vnd.ms-powerpoint.presentation.macroenabled.12": ["pptm"], "application/vnd.ms-powerpoint.slide.macroenabled.12": ["sldm"], "application/vnd.ms-powerpoint.slideshow.macroenabled.12": ["ppsm"], "application/vnd.ms-powerpoint.template.macroenabled.12": ["potm"], "application/vnd.ms-project": ["mpp", "mpt"], "application/vnd.ms-word.document.macroenabled.12": ["docm"], "application/vnd.ms-word.template.macroenabled.12": ["dotm"], "application/vnd.ms-works": ["wps", "wks", "wcm", "wdb"], "application/vnd.ms-wpl": ["wpl"], "application/vnd.ms-xpsdocument": ["xps"], "application/vnd.mseq": ["mseq"], "application/vnd.musician": ["mus"], "application/vnd.muvee.style": ["msty"], "application/vnd.mynfc": ["taglet"], "application/vnd.neurolanguage.nlu": ["nlu"], "application/vnd.nitf": ["ntf", "nitf"], "application/vnd.noblenet-directory": ["nnd"], "application/vnd.noblenet-sealer": ["nns"], "application/vnd.noblenet-web": ["nnw"], "application/vnd.nokia.n-gage.ac+xml": ["*ac"], "application/vnd.nokia.n-gage.data": ["ngdat"], "application/vnd.nokia.n-gage.symbian.install": ["n-gage"], "application/vnd.nokia.radio-preset": ["rpst"], "application/vnd.nokia.radio-presets": ["rpss"], "application/vnd.novadigm.edm": ["edm"], "application/vnd.novadigm.edx": ["edx"], "application/vnd.novadigm.ext": ["ext"], "application/vnd.oasis.opendocument.chart": ["odc"], "application/vnd.oasis.opendocument.chart-template": ["otc"], "application/vnd.oasis.opendocument.database": ["odb"], "application/vnd.oasis.opendocument.formula": ["odf"], "application/vnd.oasis.opendocument.formula-template": ["odft"], "application/vnd.oasis.opendocument.graphics": ["odg"], "application/vnd.oasis.opendocument.graphics-template": ["otg"], "application/vnd.oasis.opendocument.image": ["odi"], "application/vnd.oasis.opendocument.image-template": ["oti"], "application/vnd.oasis.opendocument.presentation": ["odp"], "application/vnd.oasis.opendocument.presentation-template": ["otp"], "application/vnd.oasis.opendocument.spreadsheet": ["ods"], "application/vnd.oasis.opendocument.spreadsheet-template": ["ots"], "application/vnd.oasis.opendocument.text": ["odt"], "application/vnd.oasis.opendocument.text-master": ["odm"], "application/vnd.oasis.opendocument.text-template": ["ott"], "application/vnd.oasis.opendocument.text-web": ["oth"], "application/vnd.olpc-sugar": ["xo"], "application/vnd.oma.dd2+xml": ["dd2"], "application/vnd.openblox.game+xml": ["obgx"], "application/vnd.openofficeorg.extension": ["oxt"], "application/vnd.openstreetmap.data+xml": ["osm"], "application/vnd.openxmlformats-officedocument.presentationml.presentation": ["pptx"], "application/vnd.openxmlformats-officedocument.presentationml.slide": ["sldx"], "application/vnd.openxmlformats-officedocument.presentationml.slideshow": ["ppsx"], "application/vnd.openxmlformats-officedocument.presentationml.template": ["potx"], "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": ["xlsx"], "application/vnd.openxmlformats-officedocument.spreadsheetml.template": ["xltx"], "application/vnd.openxmlformats-officedocument.wordprocessingml.document": ["docx"], "application/vnd.openxmlformats-officedocument.wordprocessingml.template": ["dotx"], "application/vnd.osgeo.mapguide.package": ["mgp"], "application/vnd.osgi.dp": ["dp"], "application/vnd.osgi.subsystem": ["esa"], "application/vnd.palm": ["pdb", "pqa", "oprc"], "application/vnd.pawaafile": ["paw"], "application/vnd.pg.format": ["str"], "application/vnd.pg.osasli": ["ei6"], "application/vnd.picsel": ["efif"], "application/vnd.pmi.widget": ["wg"], "application/vnd.pocketlearn": ["plf"], "application/vnd.powerbuilder6": ["pbd"], "application/vnd.previewsystems.box": ["box"], "application/vnd.proteus.magazine": ["mgz"], "application/vnd.publishare-delta-tree": ["qps"], "application/vnd.pvi.ptid1": ["ptid"], "application/vnd.quark.quarkxpress": ["qxd", "qxt", "qwd", "qwt", "qxl", "qxb"], "application/vnd.rar": ["rar"], "application/vnd.realvnc.bed": ["bed"], "application/vnd.recordare.musicxml": ["mxl"], "application/vnd.recordare.musicxml+xml": ["musicxml"], "application/vnd.rig.cryptonote": ["cryptonote"], "application/vnd.rim.cod": ["cod"], "application/vnd.rn-realmedia": ["rm"], "application/vnd.rn-realmedia-vbr": ["rmvb"], "application/vnd.route66.link66+xml": ["link66"], "application/vnd.sailingtracker.track": ["st"], "application/vnd.seemail": ["see"], "application/vnd.sema": ["sema"], "application/vnd.semd": ["semd"], "application/vnd.semf": ["semf"], "application/vnd.shana.informed.formdata": ["ifm"], "application/vnd.shana.informed.formtemplate": ["itp"], "application/vnd.shana.informed.interchange": ["iif"], "application/vnd.shana.informed.package": ["ipk"], "application/vnd.simtech-mindmapper": ["twd", "twds"], "application/vnd.smaf": ["mmf"], "application/vnd.smart.teacher": ["teacher"], "application/vnd.software602.filler.form+xml": ["fo"], "application/vnd.solent.sdkm+xml": ["sdkm", "sdkd"], "application/vnd.spotfire.dxp": ["dxp"], "application/vnd.spotfire.sfs": ["sfs"], "application/vnd.stardivision.calc": ["sdc"], "application/vnd.stardivision.draw": ["sda"], "application/vnd.stardivision.impress": ["sdd"], "application/vnd.stardivision.math": ["smf"], "application/vnd.stardivision.writer": ["sdw", "vor"], "application/vnd.stardivision.writer-global": ["sgl"], "application/vnd.stepmania.package": ["smzip"], "application/vnd.stepmania.stepchart": ["sm"], "application/vnd.sun.wadl+xml": ["wadl"], "application/vnd.sun.xml.calc": ["sxc"], "application/vnd.sun.xml.calc.template": ["stc"], "application/vnd.sun.xml.draw": ["sxd"], "application/vnd.sun.xml.draw.template": ["std"], "application/vnd.sun.xml.impress": ["sxi"], "application/vnd.sun.xml.impress.template": ["sti"], "application/vnd.sun.xml.math": ["sxm"], "application/vnd.sun.xml.writer": ["sxw"], "application/vnd.sun.xml.writer.global": ["sxg"], "application/vnd.sun.xml.writer.template": ["stw"], "application/vnd.sus-calendar": ["sus", "susp"], "application/vnd.svd": ["svd"], "application/vnd.symbian.install": ["sis", "sisx"], "application/vnd.syncml+xml": ["xsm"], "application/vnd.syncml.dm+wbxml": ["bdm"], "application/vnd.syncml.dm+xml": ["xdm"], "application/vnd.syncml.dmddf+xml": ["ddf"], "application/vnd.tao.intent-module-archive": ["tao"], "application/vnd.tcpdump.pcap": ["pcap", "cap", "dmp"], "application/vnd.tmobile-livetv": ["tmo"], "application/vnd.trid.tpt": ["tpt"], "application/vnd.triscape.mxs": ["mxs"], "application/vnd.trueapp": ["tra"], "application/vnd.ufdl": ["ufd", "ufdl"], "application/vnd.uiq.theme": ["utz"], "application/vnd.umajin": ["umj"], "application/vnd.unity": ["unityweb"], "application/vnd.uoml+xml": ["uoml"], "application/vnd.vcx": ["vcx"], "application/vnd.visio": ["vsd", "vst", "vss", "vsw"], "application/vnd.visionary": ["vis"], "application/vnd.vsf": ["vsf"], "application/vnd.wap.wbxml": ["wbxml"], "application/vnd.wap.wmlc": ["wmlc"], "application/vnd.wap.wmlscriptc": ["wmlsc"], "application/vnd.webturbo": ["wtb"], "application/vnd.wolfram.player": ["nbp"], "application/vnd.wordperfect": ["wpd"], "application/vnd.wqd": ["wqd"], "application/vnd.wt.stf": ["stf"], "application/vnd.xara": ["xar"], "application/vnd.xfdl": ["xfdl"], "application/vnd.yamaha.hv-dic": ["hvd"], "application/vnd.yamaha.hv-script": ["hvs"], "application/vnd.yamaha.hv-voice": ["hvp"], "application/vnd.yamaha.openscoreformat": ["osf"], "application/vnd.yamaha.openscoreformat.osfpvg+xml": ["osfpvg"], "application/vnd.yamaha.smaf-audio": ["saf"], "application/vnd.yamaha.smaf-phrase": ["spf"], "application/vnd.yellowriver-custom-menu": ["cmp"], "application/vnd.zul": ["zir", "zirz"], "application/vnd.zzazz.deck+xml": ["zaz"], "application/x-7z-compressed": ["7z"], "application/x-abiword": ["abw"], "application/x-ace-compressed": ["ace"], "application/x-apple-diskimage": ["*dmg"], "application/x-arj": ["arj"], "application/x-authorware-bin": ["aab", "x32", "u32", "vox"], "application/x-authorware-map": ["aam"], "application/x-authorware-seg": ["aas"], "application/x-bcpio": ["bcpio"], "application/x-bdoc": ["*bdoc"], "application/x-bittorrent": ["torrent"], "application/x-blorb": ["blb", "blorb"], "application/x-bzip": ["bz"], "application/x-bzip2": ["bz2", "boz"], "application/x-cbr": ["cbr", "cba", "cbt", "cbz", "cb7"], "application/x-cdlink": ["vcd"], "application/x-cfs-compressed": ["cfs"], "application/x-chat": ["chat"], "application/x-chess-pgn": ["pgn"], "application/x-chrome-extension": ["crx"], "application/x-cocoa": ["cco"], "application/x-conference": ["nsc"], "application/x-cpio": ["cpio"], "application/x-csh": ["csh"], "application/x-debian-package": ["*deb", "udeb"], "application/x-dgc-compressed": ["dgc"], "application/x-director": ["dir", "dcr", "dxr", "cst", "cct", "cxt", "w3d", "fgd", "swa"], "application/x-doom": ["wad"], "application/x-dtbncx+xml": ["ncx"], "application/x-dtbook+xml": ["dtb"], "application/x-dtbresource+xml": ["res"], "application/x-dvi": ["dvi"], "application/x-envoy": ["evy"], "application/x-eva": ["eva"], "application/x-font-bdf": ["bdf"], "application/x-font-ghostscript": ["gsf"], "application/x-font-linux-psf": ["psf"], "application/x-font-pcf": ["pcf"], "application/x-font-snf": ["snf"], "application/x-font-type1": ["pfa", "pfb", "pfm", "afm"], "application/x-freearc": ["arc"], "application/x-futuresplash": ["spl"], "application/x-gca-compressed": ["gca"], "application/x-glulx": ["ulx"], "application/x-gnumeric": ["gnumeric"], "application/x-gramps-xml": ["gramps"], "application/x-gtar": ["gtar"], "application/x-hdf": ["hdf"], "application/x-httpd-php": ["php"], "application/x-install-instructions": ["install"], "application/x-iso9660-image": ["*iso"], "application/x-iwork-keynote-sffkey": ["*key"], "application/x-iwork-numbers-sffnumbers": ["*numbers"], "application/x-iwork-pages-sffpages": ["*pages"], "application/x-java-archive-diff": ["jardiff"], "application/x-java-jnlp-file": ["jnlp"], "application/x-keepass2": ["kdbx"], "application/x-latex": ["latex"], "application/x-lua-bytecode": ["luac"], "application/x-lzh-compressed": ["lzh", "lha"], "application/x-makeself": ["run"], "application/x-mie": ["mie"], "application/x-mobipocket-ebook": ["prc", "mobi"], "application/x-ms-application": ["application"], "application/x-ms-shortcut": ["lnk"], "application/x-ms-wmd": ["wmd"], "application/x-ms-wmz": ["wmz"], "application/x-ms-xbap": ["xbap"], "application/x-msaccess": ["mdb"], "application/x-msbinder": ["obd"], "application/x-mscardfile": ["crd"], "application/x-msclip": ["clp"], "application/x-msdos-program": ["*exe"], "application/x-msdownload": ["*exe", "*dll", "com", "bat", "*msi"], "application/x-msmediaview": ["mvb", "m13", "m14"], "application/x-msmetafile": ["*wmf", "*wmz", "*emf", "emz"], "application/x-msmoney": ["mny"], "application/x-mspublisher": ["pub"], "application/x-msschedule": ["scd"], "application/x-msterminal": ["trm"], "application/x-mswrite": ["wri"], "application/x-netcdf": ["nc", "cdf"], "application/x-ns-proxy-autoconfig": ["pac"], "application/x-nzb": ["nzb"], "application/x-perl": ["pl", "pm"], "application/x-pilot": ["*prc", "*pdb"], "application/x-pkcs12": ["p12", "pfx"], "application/x-pkcs7-certificates": ["p7b", "spc"], "application/x-pkcs7-certreqresp": ["p7r"], "application/x-rar-compressed": ["*rar"], "application/x-redhat-package-manager": ["rpm"], "application/x-research-info-systems": ["ris"], "application/x-sea": ["sea"], "application/x-sh": ["sh"], "application/x-shar": ["shar"], "application/x-shockwave-flash": ["swf"], "application/x-silverlight-app": ["xap"], "application/x-sql": ["sql"], "application/x-stuffit": ["sit"], "application/x-stuffitx": ["sitx"], "application/x-subrip": ["srt"], "application/x-sv4cpio": ["sv4cpio"], "application/x-sv4crc": ["sv4crc"], "application/x-t3vm-image": ["t3"], "application/x-tads": ["gam"], "application/x-tar": ["tar"], "application/x-tcl": ["tcl", "tk"], "application/x-tex": ["tex"], "application/x-tex-tfm": ["tfm"], "application/x-texinfo": ["texinfo", "texi"], "application/x-tgif": ["*obj"], "application/x-ustar": ["ustar"], "application/x-virtualbox-hdd": ["hdd"], "application/x-virtualbox-ova": ["ova"], "application/x-virtualbox-ovf": ["ovf"], "application/x-virtualbox-vbox": ["vbox"], "application/x-virtualbox-vbox-extpack": ["vbox-extpack"], "application/x-virtualbox-vdi": ["vdi"], "application/x-virtualbox-vhd": ["vhd"], "application/x-virtualbox-vmdk": ["vmdk"], "application/x-wais-source": ["src"], "application/x-web-app-manifest+json": ["webapp"], "application/x-x509-ca-cert": ["der", "crt", "pem"], "application/x-xfig": ["fig"], "application/x-xliff+xml": ["*xlf"], "application/x-xpinstall": ["xpi"], "application/x-xz": ["xz"], "application/x-zmachine": ["z1", "z2", "z3", "z4", "z5", "z6", "z7", "z8"], "audio/vnd.dece.audio": ["uva", "uvva"], "audio/vnd.digital-winds": ["eol"], "audio/vnd.dra": ["dra"], "audio/vnd.dts": ["dts"], "audio/vnd.dts.hd": ["dtshd"], "audio/vnd.lucent.voice": ["lvp"], "audio/vnd.ms-playready.media.pya": ["pya"], "audio/vnd.nuera.ecelp4800": ["ecelp4800"], "audio/vnd.nuera.ecelp7470": ["ecelp7470"], "audio/vnd.nuera.ecelp9600": ["ecelp9600"], "audio/vnd.rip": ["rip"], "audio/x-aac": ["aac"], "audio/x-aiff": ["aif", "aiff", "aifc"], "audio/x-caf": ["caf"], "audio/x-flac": ["flac"], "audio/x-m4a": ["*m4a"], "audio/x-matroska": ["mka"], "audio/x-mpegurl": ["m3u"], "audio/x-ms-wax": ["wax"], "audio/x-ms-wma": ["wma"], "audio/x-pn-realaudio": ["ram", "ra"], "audio/x-pn-realaudio-plugin": ["rmp"], "audio/x-realaudio": ["*ra"], "audio/x-wav": ["*wav"], "chemical/x-cdx": ["cdx"], "chemical/x-cif": ["cif"], "chemical/x-cmdf": ["cmdf"], "chemical/x-cml": ["cml"], "chemical/x-csml": ["csml"], "chemical/x-xyz": ["xyz"], "image/prs.btif": ["btif"], "image/prs.pti": ["pti"], "image/vnd.adobe.photoshop": ["psd"], "image/vnd.airzip.accelerator.azv": ["azv"], "image/vnd.dece.graphic": ["uvi", "uvvi", "uvg", "uvvg"], "image/vnd.djvu": ["djvu", "djv"], "image/vnd.dvb.subtitle": ["*sub"], "image/vnd.dwg": ["dwg"], "image/vnd.dxf": ["dxf"], "image/vnd.fastbidsheet": ["fbs"], "image/vnd.fpx": ["fpx"], "image/vnd.fst": ["fst"], "image/vnd.fujixerox.edmics-mmr": ["mmr"], "image/vnd.fujixerox.edmics-rlc": ["rlc"], "image/vnd.microsoft.icon": ["ico"], "image/vnd.ms-dds": ["dds"], "image/vnd.ms-modi": ["mdi"], "image/vnd.ms-photo": ["wdp"], "image/vnd.net-fpx": ["npx"], "image/vnd.pco.b16": ["b16"], "image/vnd.tencent.tap": ["tap"], "image/vnd.valve.source.texture": ["vtf"], "image/vnd.wap.wbmp": ["wbmp"], "image/vnd.xiff": ["xif"], "image/vnd.zbrush.pcx": ["pcx"], "image/x-3ds": ["3ds"], "image/x-cmu-raster": ["ras"], "image/x-cmx": ["cmx"], "image/x-freehand": ["fh", "fhc", "fh4", "fh5", "fh7"], "image/x-icon": ["*ico"], "image/x-jng": ["jng"], "image/x-mrsid-image": ["sid"], "image/x-ms-bmp": ["*bmp"], "image/x-pcx": ["*pcx"], "image/x-pict": ["pic", "pct"], "image/x-portable-anymap": ["pnm"], "image/x-portable-bitmap": ["pbm"], "image/x-portable-graymap": ["pgm"], "image/x-portable-pixmap": ["ppm"], "image/x-rgb": ["rgb"], "image/x-tga": ["tga"], "image/x-xbitmap": ["xbm"], "image/x-xpixmap": ["xpm"], "image/x-xwindowdump": ["xwd"], "message/vnd.wfa.wsc": ["wsc"], "model/vnd.collada+xml": ["dae"], "model/vnd.dwf": ["dwf"], "model/vnd.gdl": ["gdl"], "model/vnd.gtw": ["gtw"], "model/vnd.mts": ["mts"], "model/vnd.opengex": ["ogex"], "model/vnd.parasolid.transmit.binary": ["x_b"], "model/vnd.parasolid.transmit.text": ["x_t"], "model/vnd.sap.vds": ["vds"], "model/vnd.usdz+zip": ["usdz"], "model/vnd.valve.source.compiled-map": ["bsp"], "model/vnd.vtu": ["vtu"], "text/prs.lines.tag": ["dsc"], "text/vnd.curl": ["curl"], "text/vnd.curl.dcurl": ["dcurl"], "text/vnd.curl.mcurl": ["mcurl"], "text/vnd.curl.scurl": ["scurl"], "text/vnd.dvb.subtitle": ["sub"], "text/vnd.fly": ["fly"], "text/vnd.fmi.flexstor": ["flx"], "text/vnd.graphviz": ["gv"], "text/vnd.in3d.3dml": ["3dml"], "text/vnd.in3d.spot": ["spot"], "text/vnd.sun.j2me.app-descriptor": ["jad"], "text/vnd.wap.wml": ["wml"], "text/vnd.wap.wmlscript": ["wmls"], "text/x-asm": ["s", "asm"], "text/x-c": ["c", "cc", "cxx", "cpp", "h", "hh", "dic"], "text/x-component": ["htc"], "text/x-fortran": ["f", "for", "f77", "f90"], "text/x-handlebars-template": ["hbs"], "text/x-java-source": ["java"], "text/x-lua": ["lua"], "text/x-markdown": ["mkd"], "text/x-nfo": ["nfo"], "text/x-opml": ["opml"], "text/x-org": ["*org"], "text/x-pascal": ["p", "pas"], "text/x-processing": ["pde"], "text/x-sass": ["sass"], "text/x-scss": ["scss"], "text/x-setext": ["etx"], "text/x-sfv": ["sfv"], "text/x-suse-ymp": ["ymp"], "text/x-uuencode": ["uu"], "text/x-vcalendar": ["vcs"], "text/x-vcard": ["vcf"], "video/vnd.dece.hd": ["uvh", "uvvh"], "video/vnd.dece.mobile": ["uvm", "uvvm"], "video/vnd.dece.pd": ["uvp", "uvvp"], "video/vnd.dece.sd": ["uvs", "uvvs"], "video/vnd.dece.video": ["uvv", "uvvv"], "video/vnd.dvb.file": ["dvb"], "video/vnd.fvt": ["fvt"], "video/vnd.mpegurl": ["mxu", "m4u"], "video/vnd.ms-playready.media.pyv": ["pyv"], "video/vnd.uvvu.mp4": ["uvu", "uvvu"], "video/vnd.vivo": ["viv"], "video/x-f4v": ["f4v"], "video/x-fli": ["fli"], "video/x-flv": ["flv"], "video/x-m4v": ["m4v"], "video/x-matroska": ["mkv", "mk3d", "mks"], "video/x-mng": ["mng"], "video/x-ms-asf": ["asf", "asx"], "video/x-ms-vob": ["vob"], "video/x-ms-wm": ["wm"], "video/x-ms-wmv": ["wmv"], "video/x-ms-wmx": ["wmx"], "video/x-ms-wvx": ["wvx"], "video/x-msvideo": ["avi"], "video/x-sgi-movie": ["movie"], "video/x-smv": ["smv"], "x-conference/x-cooltalk": ["ice"] };
var $i = Ei;
var ji = new $i(Si, Fi);
var Kt;
var sr;
var pr;
var cr;
var lr = true;
typeof process < "u" && ({ FORCE_COLOR: Kt, NODE_DISABLE_COLORS: sr, NO_COLOR: pr, TERM: cr } = process.env, lr = process.stdout && process.stdout.isTTY);
var ki = { enabled: !sr && pr == null && cr !== "dumb" && (Kt != null && Kt !== "0" || lr) };
function Ne(t3, e) {
  let n = new RegExp(`\\x1b\\[${e}m`, "g"), o = `\x1B[${t3}m`, s = `\x1B[${e}m`;
  return function(l) {
    return !ki.enabled || l == null ? l : o + (~("" + l).indexOf(s) ? l.replace(n, s + o) : l) + s;
  };
}
var Oi = Ne(0, 0);
var pt = Ne(1, 22);
var Bi = Ne(2, 22);
var Pi = Ne(31, 39);
var $n = Ne(33, 39);
var _i = Ne(36, 39);
var fr = {};
var ur = {};
var dr = function() {
  if (typeof Symbol != "function" || typeof Object.getOwnPropertySymbols != "function")
    return false;
  if (typeof Symbol.iterator == "symbol")
    return true;
  var e = {}, n = Symbol("test"), o = Object(n);
  if (typeof n == "string" || Object.prototype.toString.call(n) !== "[object Symbol]" || Object.prototype.toString.call(o) !== "[object Symbol]")
    return false;
  var s = 42;
  e[n] = s;
  for (n in e)
    return false;
  if (typeof Object.keys == "function" && Object.keys(e).length !== 0 || typeof Object.getOwnPropertyNames == "function" && Object.getOwnPropertyNames(e).length !== 0)
    return false;
  var l = Object.getOwnPropertySymbols(e);
  if (l.length !== 1 || l[0] !== n || !Object.prototype.propertyIsEnumerable.call(e, n))
    return false;
  if (typeof Object.getOwnPropertyDescriptor == "function") {
    var r = Object.getOwnPropertyDescriptor(e, n);
    if (r.value !== s || r.enumerable !== true)
      return false;
  }
  return true;
};
var Ii = dr;
var wt = function() {
  return Ii() && !!Symbol.toStringTag;
};
var jn = typeof Symbol < "u" && Symbol;
var Ci = dr;
var Ti = function() {
  return typeof jn != "function" || typeof Symbol != "function" || typeof jn("foo") != "symbol" || typeof Symbol("bar") != "symbol" ? false : Ci();
};
var Ui = "Function.prototype.bind called on incompatible ";
var Pt = Array.prototype.slice;
var Ri = Object.prototype.toString;
var Di = "[object Function]";
var Mi = function(e) {
  var n = this;
  if (typeof n != "function" || Ri.call(n) !== Di)
    throw new TypeError(Ui + n);
  for (var o = Pt.call(arguments, 1), s, l = function() {
    if (this instanceof s) {
      var x = n.apply(this, o.concat(Pt.call(arguments)));
      return Object(x) === x ? x : this;
    } else
      return n.apply(e, o.concat(Pt.call(arguments)));
  }, r = Math.max(0, n.length - o.length), c = [], u = 0; u < r; u++)
    c.push("$" + u);
  if (s = Function("binder", "return function (" + c.join(",") + "){ return binder.apply(this,arguments); }")(l), n.prototype) {
    var y = function() {
    };
    y.prototype = n.prototype, s.prototype = new y(), y.prototype = null;
  }
  return s;
};
var Ni = Mi;
var hn = Function.prototype.bind || Ni;
var zi = hn;
var Li = zi.call(Function.call, Object.prototype.hasOwnProperty);
var U;
var Qe = SyntaxError;
var mr = Function;
var Ue = TypeError;
var _t = function(t3) {
  try {
    return mr('"use strict"; return (' + t3 + ").constructor;")();
  } catch {
  }
};
var $e = Object.getOwnPropertyDescriptor;
if ($e)
  try {
    $e({}, "");
  } catch {
    $e = null;
  }
var It = function() {
  throw new Ue();
};
var Wi = $e ? function() {
  try {
    return arguments.callee, It;
  } catch {
    try {
      return $e(arguments, "callee").get;
    } catch {
      return It;
    }
  }
}() : It;
var Pe = Ti();
var Ee = Object.getPrototypeOf || function(t3) {
  return t3.__proto__;
};
var Ie = {};
var Gi = typeof Uint8Array > "u" ? U : Ee(Uint8Array);
var Re = { "%AggregateError%": typeof AggregateError > "u" ? U : AggregateError, "%Array%": Array, "%ArrayBuffer%": typeof ArrayBuffer > "u" ? U : ArrayBuffer, "%ArrayIteratorPrototype%": Pe ? Ee([][Symbol.iterator]()) : U, "%AsyncFromSyncIteratorPrototype%": U, "%AsyncFunction%": Ie, "%AsyncGenerator%": Ie, "%AsyncGeneratorFunction%": Ie, "%AsyncIteratorPrototype%": Ie, "%Atomics%": typeof Atomics > "u" ? U : Atomics, "%BigInt%": typeof BigInt > "u" ? U : BigInt, "%Boolean%": Boolean, "%DataView%": typeof DataView > "u" ? U : DataView, "%Date%": Date, "%decodeURI%": decodeURI, "%decodeURIComponent%": decodeURIComponent, "%encodeURI%": encodeURI, "%encodeURIComponent%": encodeURIComponent, "%Error%": Error, "%eval%": eval, "%EvalError%": EvalError, "%Float32Array%": typeof Float32Array > "u" ? U : Float32Array, "%Float64Array%": typeof Float64Array > "u" ? U : Float64Array, "%FinalizationRegistry%": typeof FinalizationRegistry > "u" ? U : FinalizationRegistry, "%Function%": mr, "%GeneratorFunction%": Ie, "%Int8Array%": typeof Int8Array > "u" ? U : Int8Array, "%Int16Array%": typeof Int16Array > "u" ? U : Int16Array, "%Int32Array%": typeof Int32Array > "u" ? U : Int32Array, "%isFinite%": isFinite, "%isNaN%": isNaN, "%IteratorPrototype%": Pe ? Ee(Ee([][Symbol.iterator]())) : U, "%JSON%": typeof JSON == "object" ? JSON : U, "%Map%": typeof Map > "u" ? U : Map, "%MapIteratorPrototype%": typeof Map > "u" || !Pe ? U : Ee((/* @__PURE__ */ new Map())[Symbol.iterator]()), "%Math%": Math, "%Number%": Number, "%Object%": Object, "%parseFloat%": parseFloat, "%parseInt%": parseInt, "%Promise%": typeof Promise > "u" ? U : Promise, "%Proxy%": typeof Proxy > "u" ? U : Proxy, "%RangeError%": RangeError, "%ReferenceError%": ReferenceError, "%Reflect%": typeof Reflect > "u" ? U : Reflect, "%RegExp%": RegExp, "%Set%": typeof Set > "u" ? U : Set, "%SetIteratorPrototype%": typeof Set > "u" || !Pe ? U : Ee((/* @__PURE__ */ new Set())[Symbol.iterator]()), "%SharedArrayBuffer%": typeof SharedArrayBuffer > "u" ? U : SharedArrayBuffer, "%String%": String, "%StringIteratorPrototype%": Pe ? Ee(""[Symbol.iterator]()) : U, "%Symbol%": Pe ? Symbol : U, "%SyntaxError%": Qe, "%ThrowTypeError%": Wi, "%TypedArray%": Gi, "%TypeError%": Ue, "%Uint8Array%": typeof Uint8Array > "u" ? U : Uint8Array, "%Uint8ClampedArray%": typeof Uint8ClampedArray > "u" ? U : Uint8ClampedArray, "%Uint16Array%": typeof Uint16Array > "u" ? U : Uint16Array, "%Uint32Array%": typeof Uint32Array > "u" ? U : Uint32Array, "%URIError%": URIError, "%WeakMap%": typeof WeakMap > "u" ? U : WeakMap, "%WeakRef%": typeof WeakRef > "u" ? U : WeakRef, "%WeakSet%": typeof WeakSet > "u" ? U : WeakSet };
var Hi = function t(e) {
  var n;
  if (e === "%AsyncFunction%")
    n = _t("async function () {}");
  else if (e === "%GeneratorFunction%")
    n = _t("function* () {}");
  else if (e === "%AsyncGeneratorFunction%")
    n = _t("async function* () {}");
  else if (e === "%AsyncGenerator%") {
    var o = t("%AsyncGeneratorFunction%");
    o && (n = o.prototype);
  } else if (e === "%AsyncIteratorPrototype%") {
    var s = t("%AsyncGenerator%");
    s && (n = Ee(s.prototype));
  }
  return Re[e] = n, n;
};
var kn = { "%ArrayBufferPrototype%": ["ArrayBuffer", "prototype"], "%ArrayPrototype%": ["Array", "prototype"], "%ArrayProto_entries%": ["Array", "prototype", "entries"], "%ArrayProto_forEach%": ["Array", "prototype", "forEach"], "%ArrayProto_keys%": ["Array", "prototype", "keys"], "%ArrayProto_values%": ["Array", "prototype", "values"], "%AsyncFunctionPrototype%": ["AsyncFunction", "prototype"], "%AsyncGenerator%": ["AsyncGeneratorFunction", "prototype"], "%AsyncGeneratorPrototype%": ["AsyncGeneratorFunction", "prototype", "prototype"], "%BooleanPrototype%": ["Boolean", "prototype"], "%DataViewPrototype%": ["DataView", "prototype"], "%DatePrototype%": ["Date", "prototype"], "%ErrorPrototype%": ["Error", "prototype"], "%EvalErrorPrototype%": ["EvalError", "prototype"], "%Float32ArrayPrototype%": ["Float32Array", "prototype"], "%Float64ArrayPrototype%": ["Float64Array", "prototype"], "%FunctionPrototype%": ["Function", "prototype"], "%Generator%": ["GeneratorFunction", "prototype"], "%GeneratorPrototype%": ["GeneratorFunction", "prototype", "prototype"], "%Int8ArrayPrototype%": ["Int8Array", "prototype"], "%Int16ArrayPrototype%": ["Int16Array", "prototype"], "%Int32ArrayPrototype%": ["Int32Array", "prototype"], "%JSONParse%": ["JSON", "parse"], "%JSONStringify%": ["JSON", "stringify"], "%MapPrototype%": ["Map", "prototype"], "%NumberPrototype%": ["Number", "prototype"], "%ObjectPrototype%": ["Object", "prototype"], "%ObjProto_toString%": ["Object", "prototype", "toString"], "%ObjProto_valueOf%": ["Object", "prototype", "valueOf"], "%PromisePrototype%": ["Promise", "prototype"], "%PromiseProto_then%": ["Promise", "prototype", "then"], "%Promise_all%": ["Promise", "all"], "%Promise_reject%": ["Promise", "reject"], "%Promise_resolve%": ["Promise", "resolve"], "%RangeErrorPrototype%": ["RangeError", "prototype"], "%ReferenceErrorPrototype%": ["ReferenceError", "prototype"], "%RegExpPrototype%": ["RegExp", "prototype"], "%SetPrototype%": ["Set", "prototype"], "%SharedArrayBufferPrototype%": ["SharedArrayBuffer", "prototype"], "%StringPrototype%": ["String", "prototype"], "%SymbolPrototype%": ["Symbol", "prototype"], "%SyntaxErrorPrototype%": ["SyntaxError", "prototype"], "%TypedArrayPrototype%": ["TypedArray", "prototype"], "%TypeErrorPrototype%": ["TypeError", "prototype"], "%Uint8ArrayPrototype%": ["Uint8Array", "prototype"], "%Uint8ClampedArrayPrototype%": ["Uint8ClampedArray", "prototype"], "%Uint16ArrayPrototype%": ["Uint16Array", "prototype"], "%Uint32ArrayPrototype%": ["Uint32Array", "prototype"], "%URIErrorPrototype%": ["URIError", "prototype"], "%WeakMapPrototype%": ["WeakMap", "prototype"], "%WeakSetPrototype%": ["WeakSet", "prototype"] };
var bt = hn;
var mt = Li;
var qi = bt.call(Function.call, Array.prototype.concat);
var Vi = bt.call(Function.apply, Array.prototype.splice);
var On = bt.call(Function.call, String.prototype.replace);
var yt = bt.call(Function.call, String.prototype.slice);
var Ji = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g;
var Yi = /\\(\\)?/g;
var Xi = function(e) {
  var n = yt(e, 0, 1), o = yt(e, -1);
  if (n === "%" && o !== "%")
    throw new Qe("invalid intrinsic syntax, expected closing `%`");
  if (o === "%" && n !== "%")
    throw new Qe("invalid intrinsic syntax, expected opening `%`");
  var s = [];
  return On(e, Ji, function(l, r, c, u) {
    s[s.length] = c ? On(u, Yi, "$1") : r || l;
  }), s;
};
var Ki = function(e, n) {
  var o = e, s;
  if (mt(kn, o) && (s = kn[o], o = "%" + s[0] + "%"), mt(Re, o)) {
    var l = Re[o];
    if (l === Ie && (l = Hi(o)), typeof l > "u" && !n)
      throw new Ue("intrinsic " + e + " exists, but is not available. Please file an issue!");
    return { alias: s, name: o, value: l };
  }
  throw new Qe("intrinsic " + e + " does not exist!");
};
var xn = function(e, n) {
  if (typeof e != "string" || e.length === 0)
    throw new Ue("intrinsic name must be a non-empty string");
  if (arguments.length > 1 && typeof n != "boolean")
    throw new Ue('"allowMissing" argument must be a boolean');
  var o = Xi(e), s = o.length > 0 ? o[0] : "", l = Ki("%" + s + "%", n), r = l.name, c = l.value, u = false, y = l.alias;
  y && (s = y[0], Vi(o, qi([0, 1], y)));
  for (var x = 1, g = true; x < o.length; x += 1) {
    var E = o[x], j = yt(E, 0, 1), O = yt(E, -1);
    if ((j === '"' || j === "'" || j === "`" || O === '"' || O === "'" || O === "`") && j !== O)
      throw new Qe("property names with quotes must have matching quotes");
    if ((E === "constructor" || !g) && (u = true), s += "." + E, r = "%" + s + "%", mt(Re, r))
      c = Re[r];
    else if (c != null) {
      if (!(E in c)) {
        if (!n)
          throw new Ue("base intrinsic for " + e + " exists, but the property is not available.");
        return;
      }
      if ($e && x + 1 >= o.length) {
        var F = $e(c, E);
        g = !!F, g && "get" in F && !("originalValue" in F.get) ? c = F.get : c = c[E];
      } else
        g = mt(c, E), c = c[E];
      g && !u && (Re[r] = c);
    }
  }
  return c;
};
var yr = { exports: {} };
(function(t3) {
  var e = hn, n = xn, o = n("%Function.prototype.apply%"), s = n("%Function.prototype.call%"), l = n("%Reflect.apply%", true) || e.call(s, o), r = n("%Object.getOwnPropertyDescriptor%", true), c = n("%Object.defineProperty%", true), u = n("%Math.max%");
  if (c)
    try {
      c({}, "a", { value: 1 });
    } catch {
      c = null;
    }
  t3.exports = function(g) {
    var E = l(e, s, arguments);
    if (r && c) {
      var j = r(E, "length");
      j.configurable && c(E, "length", { value: 1 + u(0, g.length - (arguments.length - 1)) });
    }
    return E;
  };
  var y = function() {
    return l(e, o, arguments);
  };
  c ? c(t3.exports, "apply", { value: y }) : t3.exports.apply = y;
})(yr);
var hr = xn;
var xr = yr.exports;
var Zi = xr(hr("String.prototype.indexOf"));
var gn = function(e, n) {
  var o = hr(e, !!n);
  return typeof o == "function" && Zi(e, ".prototype.") > -1 ? xr(o) : o;
};
var Qi = wt();
var ea = gn;
var Zt = ea("Object.prototype.toString");
var At = function(e) {
  return Qi && e && typeof e == "object" && Symbol.toStringTag in e ? false : Zt(e) === "[object Arguments]";
};
var gr = function(e) {
  return At(e) ? true : e !== null && typeof e == "object" && typeof e.length == "number" && e.length >= 0 && Zt(e) !== "[object Array]" && Zt(e.callee) === "[object Function]";
};
var ta = function() {
  return At(arguments);
}();
At.isLegacyArguments = gr;
var na = ta ? At : gr;
var ra = Object.prototype.toString;
var ia = Function.prototype.toString;
var aa = /^\s*(?:function)?\*/;
var vr = wt();
var Ct = Object.getPrototypeOf;
var oa = function() {
  if (!vr)
    return false;
  try {
    return Function("return function*() {}")();
  } catch {
  }
};
var Tt;
var sa = function(e) {
  if (typeof e != "function")
    return false;
  if (aa.test(ia.call(e)))
    return true;
  if (!vr) {
    var n = ra.call(e);
    return n === "[object GeneratorFunction]";
  }
  if (!Ct)
    return false;
  if (typeof Tt > "u") {
    var o = oa();
    Tt = o ? Ct(o) : false;
  }
  return Ct(e) === Tt;
};
var wr = Function.prototype.toString;
var Ce = typeof Reflect == "object" && Reflect !== null && Reflect.apply;
var Qt;
var ct;
if (typeof Ce == "function" && typeof Object.defineProperty == "function")
  try {
    Qt = Object.defineProperty({}, "length", { get: function() {
      throw ct;
    } }), ct = {}, Ce(function() {
      throw 42;
    }, null, Qt);
  } catch (t3) {
    t3 !== ct && (Ce = null);
  }
else
  Ce = null;
var pa = /^\s*class\b/;
var en = function(e) {
  try {
    var n = wr.call(e);
    return pa.test(n);
  } catch {
    return false;
  }
};
var ca = function(e) {
  try {
    return en(e) ? false : (wr.call(e), true);
  } catch {
    return false;
  }
};
var la = Object.prototype.toString;
var fa = "[object Function]";
var ua = "[object GeneratorFunction]";
var da = typeof Symbol == "function" && !!Symbol.toStringTag;
var Bn = typeof document == "object" && typeof document.all > "u" && document.all !== void 0 ? document.all : {};
var ma = Ce ? function(e) {
  if (e === Bn)
    return true;
  if (!e || typeof e != "function" && typeof e != "object")
    return false;
  if (typeof e == "function" && !e.prototype)
    return true;
  try {
    Ce(e, null, Qt);
  } catch (n) {
    if (n !== ct)
      return false;
  }
  return !en(e);
} : function(e) {
  if (e === Bn)
    return true;
  if (!e || typeof e != "function" && typeof e != "object")
    return false;
  if (typeof e == "function" && !e.prototype)
    return true;
  if (da)
    return ca(e);
  if (en(e))
    return false;
  var n = la.call(e);
  return n === fa || n === ua;
};
var ya = ma;
var ha = Object.prototype.toString;
var br = Object.prototype.hasOwnProperty;
var xa = function(e, n, o) {
  for (var s = 0, l = e.length; s < l; s++)
    br.call(e, s) && (o == null ? n(e[s], s, e) : n.call(o, e[s], s, e));
};
var ga = function(e, n, o) {
  for (var s = 0, l = e.length; s < l; s++)
    o == null ? n(e.charAt(s), s, e) : n.call(o, e.charAt(s), s, e);
};
var va = function(e, n, o) {
  for (var s in e)
    br.call(e, s) && (o == null ? n(e[s], s, e) : n.call(o, e[s], s, e));
};
var wa = function(e, n, o) {
  if (!ya(n))
    throw new TypeError("iterator must be a function");
  var s;
  arguments.length >= 3 && (s = o), ha.call(e) === "[object Array]" ? xa(e, n, s) : typeof e == "string" ? ga(e, n, s) : va(e, n, s);
};
var Ar = wa;
var Ut = ["BigInt64Array", "BigUint64Array", "Float32Array", "Float64Array", "Int16Array", "Int32Array", "Int8Array", "Uint16Array", "Uint32Array", "Uint8Array", "Uint8ClampedArray"];
var ba = typeof globalThis > "u" ? Ze : globalThis;
var Er = function() {
  for (var e = [], n = 0; n < Ut.length; n++)
    typeof ba[Ut[n]] == "function" && (e[e.length] = Ut[n]);
  return e;
};
var Aa = xn;
var lt = Aa("%Object.getOwnPropertyDescriptor%", true);
if (lt)
  try {
    lt([], "length");
  } catch {
    lt = null;
  }
var Sr = lt;
var Fr = Ar;
var Ea = Er;
var vn = gn;
var Sa = vn("Object.prototype.toString");
var $r = wt();
var Fa = typeof globalThis > "u" ? Ze : globalThis;
var jr = Ea();
var $a = vn("Array.prototype.indexOf", true) || function(e, n) {
  for (var o = 0; o < e.length; o += 1)
    if (e[o] === n)
      return o;
  return -1;
};
var ja = vn("String.prototype.slice");
var kr = {};
var ft = Sr;
var Rt = Object.getPrototypeOf;
$r && ft && Rt && Fr(jr, function(t3) {
  var e = new Fa[t3]();
  if (Symbol.toStringTag in e) {
    var n = Rt(e), o = ft(n, Symbol.toStringTag);
    if (!o) {
      var s = Rt(n);
      o = ft(s, Symbol.toStringTag);
    }
    kr[t3] = o.get;
  }
});
var ka = function(e) {
  var n = false;
  return Fr(kr, function(o, s) {
    if (!n)
      try {
        n = o.call(e) === s;
      } catch {
      }
  }), n;
};
var Or = function(e) {
  if (!e || typeof e != "object")
    return false;
  if (!$r || !(Symbol.toStringTag in e)) {
    var n = ja(Sa(e), 8, -1);
    return $a(jr, n) > -1;
  }
  return ft ? ka(e) : false;
};
var Br = Ar;
var Oa = Er;
var Pr = gn;
var Ba = Pr("Object.prototype.toString");
var _r = wt();
var Pn = typeof globalThis > "u" ? Ze : globalThis;
var Pa = Oa();
var _a = Pr("String.prototype.slice");
var Ir = {};
var Dt = Sr;
var Mt = Object.getPrototypeOf;
_r && Dt && Mt && Br(Pa, function(t3) {
  if (typeof Pn[t3] == "function") {
    var e = new Pn[t3]();
    if (Symbol.toStringTag in e) {
      var n = Mt(e), o = Dt(n, Symbol.toStringTag);
      if (!o) {
        var s = Mt(n);
        o = Dt(s, Symbol.toStringTag);
      }
      Ir[t3] = o.get;
    }
  }
});
var Ia = function(e) {
  var n = false;
  return Br(Ir, function(o, s) {
    if (!n)
      try {
        var l = o.call(e);
        l === s && (n = l);
      } catch {
      }
  }), n;
};
var Ca = Or;
var Ta = function(e) {
  return Ca(e) ? !_r || !(Symbol.toStringTag in e) ? _a(Ba(e), 8, -1) : Ia(e) : false;
};
(function(t3) {
  var e = na, n = sa, o = Ta, s = Or;
  function l(b) {
    return b.call.bind(b);
  }
  var r = typeof BigInt < "u", c = typeof Symbol < "u", u = l(Object.prototype.toString), y = l(Number.prototype.valueOf), x = l(String.prototype.valueOf), g = l(Boolean.prototype.valueOf);
  if (r)
    var E = l(BigInt.prototype.valueOf);
  if (c)
    var j = l(Symbol.prototype.valueOf);
  function O(b, it) {
    if (typeof b != "object")
      return false;
    try {
      return it(b), true;
    } catch {
      return false;
    }
  }
  t3.isArgumentsObject = e, t3.isGeneratorFunction = n, t3.isTypedArray = s;
  function F(b) {
    return typeof Promise < "u" && b instanceof Promise || b !== null && typeof b == "object" && typeof b.then == "function" && typeof b.catch == "function";
  }
  t3.isPromise = F;
  function B(b) {
    return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? ArrayBuffer.isView(b) : s(b) || w(b);
  }
  t3.isArrayBufferView = B;
  function $(b) {
    return o(b) === "Uint8Array";
  }
  t3.isUint8Array = $;
  function S(b) {
    return o(b) === "Uint8ClampedArray";
  }
  t3.isUint8ClampedArray = S;
  function k(b) {
    return o(b) === "Uint16Array";
  }
  t3.isUint16Array = k;
  function z(b) {
    return o(b) === "Uint32Array";
  }
  t3.isUint32Array = z;
  function R(b) {
    return o(b) === "Int8Array";
  }
  t3.isInt8Array = R;
  function Y(b) {
    return o(b) === "Int16Array";
  }
  t3.isInt16Array = Y;
  function V(b) {
    return o(b) === "Int32Array";
  }
  t3.isInt32Array = V;
  function K(b) {
    return o(b) === "Float32Array";
  }
  t3.isFloat32Array = K;
  function Z(b) {
    return o(b) === "Float64Array";
  }
  t3.isFloat64Array = Z;
  function pe(b) {
    return o(b) === "BigInt64Array";
  }
  t3.isBigInt64Array = pe;
  function me(b) {
    return o(b) === "BigUint64Array";
  }
  t3.isBigUint64Array = me;
  function ne(b) {
    return u(b) === "[object Map]";
  }
  ne.working = typeof Map < "u" && ne(/* @__PURE__ */ new Map());
  function ze(b) {
    return typeof Map > "u" ? false : ne.working ? ne(b) : b instanceof Map;
  }
  t3.isMap = ze;
  function re(b) {
    return u(b) === "[object Set]";
  }
  re.working = typeof Set < "u" && re(/* @__PURE__ */ new Set());
  function ye(b) {
    return typeof Set > "u" ? false : re.working ? re(b) : b instanceof Set;
  }
  t3.isSet = ye;
  function he(b) {
    return u(b) === "[object WeakMap]";
  }
  he.working = typeof WeakMap < "u" && he(/* @__PURE__ */ new WeakMap());
  function Le(b) {
    return typeof WeakMap > "u" ? false : he.working ? he(b) : b instanceof WeakMap;
  }
  t3.isWeakMap = Le;
  function xe(b) {
    return u(b) === "[object WeakSet]";
  }
  xe.working = typeof WeakSet < "u" && xe(/* @__PURE__ */ new WeakSet());
  function ie(b) {
    return xe(b);
  }
  t3.isWeakSet = ie;
  function ge(b) {
    return u(b) === "[object ArrayBuffer]";
  }
  ge.working = typeof ArrayBuffer < "u" && ge(new ArrayBuffer());
  function W(b) {
    return typeof ArrayBuffer > "u" ? false : ge.working ? ge(b) : b instanceof ArrayBuffer;
  }
  t3.isArrayBuffer = W;
  function m(b) {
    return u(b) === "[object DataView]";
  }
  m.working = typeof ArrayBuffer < "u" && typeof DataView < "u" && m(new DataView(new ArrayBuffer(1), 0, 1));
  function w(b) {
    return typeof DataView > "u" ? false : m.working ? m(b) : b instanceof DataView;
  }
  t3.isDataView = w;
  var A = typeof SharedArrayBuffer < "u" ? SharedArrayBuffer : void 0;
  function P(b) {
    return u(b) === "[object SharedArrayBuffer]";
  }
  function T(b) {
    return typeof A > "u" ? false : (typeof P.working > "u" && (P.working = P(new A())), P.working ? P(b) : b instanceof A);
  }
  t3.isSharedArrayBuffer = T;
  function D(b) {
    return u(b) === "[object AsyncFunction]";
  }
  t3.isAsyncFunction = D;
  function _(b) {
    return u(b) === "[object Map Iterator]";
  }
  t3.isMapIterator = _;
  function C(b) {
    return u(b) === "[object Set Iterator]";
  }
  t3.isSetIterator = C;
  function M(b) {
    return u(b) === "[object Generator]";
  }
  t3.isGeneratorObject = M;
  function J(b) {
    return u(b) === "[object WebAssembly.Module]";
  }
  t3.isWebAssemblyCompiledModule = J;
  function ce(b) {
    return O(b, y);
  }
  t3.isNumberObject = ce;
  function ae(b) {
    return O(b, x);
  }
  t3.isStringObject = ae;
  function Q(b) {
    return O(b, g);
  }
  t3.isBooleanObject = Q;
  function Be(b) {
    return r && O(b, E);
  }
  t3.isBigIntObject = Be;
  function rt(b) {
    return c && O(b, j);
  }
  t3.isSymbolObject = rt;
  function We(b) {
    return ce(b) || ae(b) || Q(b) || Be(b) || rt(b);
  }
  t3.isBoxedPrimitive = We;
  function Ot(b) {
    return typeof Uint8Array < "u" && (W(b) || T(b));
  }
  t3.isAnyArrayBuffer = Ot, ["isProxy", "isExternal", "isModuleNamespaceObject"].forEach(function(b) {
    Object.defineProperty(t3, b, { enumerable: false, value: function() {
      throw new Error(b + " is not supported in userland");
    } });
  });
})(ur);
var Ua = function(e) {
  return e instanceof Buffer;
};
var tn = { exports: {} };
var nn = { exports: {} };
typeof Object.create == "function" ? nn.exports = function(e, n) {
  n && (e.super_ = n, e.prototype = Object.create(n.prototype, { constructor: { value: e, enumerable: false, writable: true, configurable: true } }));
} : nn.exports = function(e, n) {
  if (n) {
    e.super_ = n;
    var o = function() {
    };
    o.prototype = n.prototype, e.prototype = new o(), e.prototype.constructor = e;
  }
};
try {
  _n = require_util();
  if (typeof _n.inherits != "function")
    throw "";
  tn.exports = _n.inherits;
} catch {
  tn.exports = nn.exports;
}
var _n;
(function(t3) {
  var e = Object.getOwnPropertyDescriptors || function(w) {
    for (var A = Object.keys(w), P = {}, T = 0; T < A.length; T++)
      P[A[T]] = Object.getOwnPropertyDescriptor(w, A[T]);
    return P;
  }, n = /%[sdj%]/g;
  t3.format = function(m) {
    if (!R(m)) {
      for (var w = [], A = 0; A < arguments.length; A++)
        w.push(r(arguments[A]));
      return w.join(" ");
    }
    for (var A = 1, P = arguments, T = P.length, D = String(m).replace(n, function(C) {
      if (C === "%%")
        return "%";
      if (A >= T)
        return C;
      switch (C) {
        case "%s":
          return String(P[A++]);
        case "%d":
          return Number(P[A++]);
        case "%j":
          try {
            return JSON.stringify(P[A++]);
          } catch {
            return "[Circular]";
          }
        default:
          return C;
      }
    }), _ = P[A]; A < T; _ = P[++A])
      S(_) || !Z(_) ? D += " " + _ : D += " " + r(_);
    return D;
  }, t3.deprecate = function(m, w) {
    if (typeof process < "u" && process.noDeprecation === true)
      return m;
    if (typeof process > "u")
      return function() {
        return t3.deprecate(m, w).apply(this, arguments);
      };
    var A = false;
    function P() {
      if (!A) {
        if (process.throwDeprecation)
          throw new Error(w);
        process.traceDeprecation ? console.trace(w) : console.error(w), A = true;
      }
      return m.apply(this, arguments);
    }
    return P;
  };
  var o = {}, s = /^$/;
  if (process.env.NODE_DEBUG) {
    var l = process.env.NODE_DEBUG;
    l = l.replace(/[|\\{}()[\]^$+?.]/g, "\\$&").replace(/\*/g, ".*").replace(/,/g, "$|^").toUpperCase(), s = new RegExp("^" + l + "$", "i");
  }
  t3.debuglog = function(m) {
    if (m = m.toUpperCase(), !o[m])
      if (s.test(m)) {
        var w = process.pid;
        o[m] = function() {
          var A = t3.format.apply(t3, arguments);
          console.error("%s %d: %s", m, w, A);
        };
      } else
        o[m] = function() {
        };
    return o[m];
  };
  function r(m, w) {
    var A = { seen: [], stylize: u };
    return arguments.length >= 3 && (A.depth = arguments[2]), arguments.length >= 4 && (A.colors = arguments[3]), $(w) ? A.showHidden = w : w && t3._extend(A, w), V(A.showHidden) && (A.showHidden = false), V(A.depth) && (A.depth = 2), V(A.colors) && (A.colors = false), V(A.customInspect) && (A.customInspect = true), A.colors && (A.stylize = c), x(A, m, A.depth);
  }
  t3.inspect = r, r.colors = { bold: [1, 22], italic: [3, 23], underline: [4, 24], inverse: [7, 27], white: [37, 39], grey: [90, 39], black: [30, 39], blue: [34, 39], cyan: [36, 39], green: [32, 39], magenta: [35, 39], red: [31, 39], yellow: [33, 39] }, r.styles = { special: "cyan", number: "yellow", boolean: "yellow", undefined: "grey", null: "bold", string: "green", date: "magenta", regexp: "red" };
  function c(m, w) {
    var A = r.styles[w];
    return A ? "\x1B[" + r.colors[A][0] + "m" + m + "\x1B[" + r.colors[A][1] + "m" : m;
  }
  function u(m, w) {
    return m;
  }
  function y(m) {
    var w = {};
    return m.forEach(function(A, P) {
      w[A] = true;
    }), w;
  }
  function x(m, w, A) {
    if (m.customInspect && w && ne(w.inspect) && w.inspect !== t3.inspect && !(w.constructor && w.constructor.prototype === w)) {
      var P = w.inspect(A, m);
      return R(P) || (P = x(m, P, A)), P;
    }
    var T = g(m, w);
    if (T)
      return T;
    var D = Object.keys(w), _ = y(D);
    if (m.showHidden && (D = Object.getOwnPropertyNames(w)), me(w) && (D.indexOf("message") >= 0 || D.indexOf("description") >= 0))
      return E(w);
    if (D.length === 0) {
      if (ne(w)) {
        var C = w.name ? ": " + w.name : "";
        return m.stylize("[Function" + C + "]", "special");
      }
      if (K(w))
        return m.stylize(RegExp.prototype.toString.call(w), "regexp");
      if (pe(w))
        return m.stylize(Date.prototype.toString.call(w), "date");
      if (me(w))
        return E(w);
    }
    var M = "", J = false, ce = ["{", "}"];
    if (B(w) && (J = true, ce = ["[", "]"]), ne(w)) {
      var ae = w.name ? ": " + w.name : "";
      M = " [Function" + ae + "]";
    }
    if (K(w) && (M = " " + RegExp.prototype.toString.call(w)), pe(w) && (M = " " + Date.prototype.toUTCString.call(w)), me(w) && (M = " " + E(w)), D.length === 0 && (!J || w.length == 0))
      return ce[0] + M + ce[1];
    if (A < 0)
      return K(w) ? m.stylize(RegExp.prototype.toString.call(w), "regexp") : m.stylize("[Object]", "special");
    m.seen.push(w);
    var Q;
    return J ? Q = j(m, w, A, _, D) : Q = D.map(function(Be) {
      return O(m, w, A, _, Be, J);
    }), m.seen.pop(), F(Q, M, ce);
  }
  function g(m, w) {
    if (V(w))
      return m.stylize("undefined", "undefined");
    if (R(w)) {
      var A = "'" + JSON.stringify(w).replace(/^"|"$/g, "").replace(/'/g, "\\'").replace(/\\"/g, '"') + "'";
      return m.stylize(A, "string");
    }
    if (z(w))
      return m.stylize("" + w, "number");
    if ($(w))
      return m.stylize("" + w, "boolean");
    if (S(w))
      return m.stylize("null", "null");
  }
  function E(m) {
    return "[" + Error.prototype.toString.call(m) + "]";
  }
  function j(m, w, A, P, T) {
    for (var D = [], _ = 0, C = w.length; _ < C; ++_)
      xe(w, String(_)) ? D.push(O(m, w, A, P, String(_), true)) : D.push("");
    return T.forEach(function(M) {
      M.match(/^\d+$/) || D.push(O(m, w, A, P, M, true));
    }), D;
  }
  function O(m, w, A, P, T, D) {
    var _, C, M;
    if (M = Object.getOwnPropertyDescriptor(w, T) || { value: w[T] }, M.get ? M.set ? C = m.stylize("[Getter/Setter]", "special") : C = m.stylize("[Getter]", "special") : M.set && (C = m.stylize("[Setter]", "special")), xe(P, T) || (_ = "[" + T + "]"), C || (m.seen.indexOf(M.value) < 0 ? (S(A) ? C = x(m, M.value, null) : C = x(m, M.value, A - 1), C.indexOf(`
`) > -1 && (D ? C = C.split(`
`).map(function(J) {
      return "  " + J;
    }).join(`
`).substr(2) : C = `
` + C.split(`
`).map(function(J) {
      return "   " + J;
    }).join(`
`))) : C = m.stylize("[Circular]", "special")), V(_)) {
      if (D && T.match(/^\d+$/))
        return C;
      _ = JSON.stringify("" + T), _.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/) ? (_ = _.substr(1, _.length - 2), _ = m.stylize(_, "name")) : (_ = _.replace(/'/g, "\\'").replace(/\\"/g, '"').replace(/(^"|"$)/g, "'"), _ = m.stylize(_, "string"));
    }
    return _ + ": " + C;
  }
  function F(m, w, A) {
    var P = m.reduce(function(T, D) {
      return D.indexOf(`
`) >= 0, T + D.replace(/\u001b\[\d\d?m/g, "").length + 1;
    }, 0);
    return P > 60 ? A[0] + (w === "" ? "" : w + `
 `) + " " + m.join(`,
  `) + " " + A[1] : A[0] + w + " " + m.join(", ") + " " + A[1];
  }
  t3.types = ur;
  function B(m) {
    return Array.isArray(m);
  }
  t3.isArray = B;
  function $(m) {
    return typeof m == "boolean";
  }
  t3.isBoolean = $;
  function S(m) {
    return m === null;
  }
  t3.isNull = S;
  function k(m) {
    return m == null;
  }
  t3.isNullOrUndefined = k;
  function z(m) {
    return typeof m == "number";
  }
  t3.isNumber = z;
  function R(m) {
    return typeof m == "string";
  }
  t3.isString = R;
  function Y(m) {
    return typeof m == "symbol";
  }
  t3.isSymbol = Y;
  function V(m) {
    return m === void 0;
  }
  t3.isUndefined = V;
  function K(m) {
    return Z(m) && re(m) === "[object RegExp]";
  }
  t3.isRegExp = K, t3.types.isRegExp = K;
  function Z(m) {
    return typeof m == "object" && m !== null;
  }
  t3.isObject = Z;
  function pe(m) {
    return Z(m) && re(m) === "[object Date]";
  }
  t3.isDate = pe, t3.types.isDate = pe;
  function me(m) {
    return Z(m) && (re(m) === "[object Error]" || m instanceof Error);
  }
  t3.isError = me, t3.types.isNativeError = me;
  function ne(m) {
    return typeof m == "function";
  }
  t3.isFunction = ne;
  function ze(m) {
    return m === null || typeof m == "boolean" || typeof m == "number" || typeof m == "string" || typeof m == "symbol" || typeof m > "u";
  }
  t3.isPrimitive = ze, t3.isBuffer = Ua;
  function re(m) {
    return Object.prototype.toString.call(m);
  }
  function ye(m) {
    return m < 10 ? "0" + m.toString(10) : m.toString(10);
  }
  var he = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  function Le() {
    var m = new Date(), w = [ye(m.getHours()), ye(m.getMinutes()), ye(m.getSeconds())].join(":");
    return [m.getDate(), he[m.getMonth()], w].join(" ");
  }
  t3.log = function() {
    console.log("%s - %s", Le(), t3.format.apply(t3, arguments));
  }, t3.inherits = tn.exports, t3._extend = function(m, w) {
    if (!w || !Z(w))
      return m;
    for (var A = Object.keys(w), P = A.length; P--; )
      m[A[P]] = w[A[P]];
    return m;
  };
  function xe(m, w) {
    return Object.prototype.hasOwnProperty.call(m, w);
  }
  var ie = typeof Symbol < "u" ? Symbol("util.promisify.custom") : void 0;
  t3.promisify = function(w) {
    if (typeof w != "function")
      throw new TypeError('The "original" argument must be of type Function');
    if (ie && w[ie]) {
      var A = w[ie];
      if (typeof A != "function")
        throw new TypeError('The "util.promisify.custom" argument must be of type Function');
      return Object.defineProperty(A, ie, { value: A, enumerable: false, writable: false, configurable: true }), A;
    }
    function A() {
      for (var P, T, D = new Promise(function(M, J) {
        P = M, T = J;
      }), _ = [], C = 0; C < arguments.length; C++)
        _.push(arguments[C]);
      _.push(function(M, J) {
        M ? T(M) : P(J);
      });
      try {
        w.apply(this, _);
      } catch (M) {
        T(M);
      }
      return D;
    }
    return Object.setPrototypeOf(A, Object.getPrototypeOf(w)), ie && Object.defineProperty(A, ie, { value: A, enumerable: false, writable: false, configurable: true }), Object.defineProperties(A, e(w));
  }, t3.promisify.custom = ie;
  function ge(m, w) {
    if (!m) {
      var A = new Error("Promise was rejected with a falsy value");
      A.reason = m, m = A;
    }
    return w(m);
  }
  function W(m) {
    if (typeof m != "function")
      throw new TypeError('The "original" argument must be of type Function');
    function w() {
      for (var A = [], P = 0; P < arguments.length; P++)
        A.push(arguments[P]);
      var T = A.pop();
      if (typeof T != "function")
        throw new TypeError("The last argument must be of type Function");
      var D = this, _ = function() {
        return T.apply(D, arguments);
      };
      m.apply(this, A).then(function(C) {
        process.nextTick(_.bind(null, null, C));
      }, function(C) {
        process.nextTick(ge.bind(null, C, _));
      });
    }
    return Object.setPrototypeOf(w, Object.getPrototypeOf(m)), Object.defineProperties(w, e(m)), w;
  }
  t3.callbackify = W;
})(fr);
var Ra = { exports: {} };
(function(t3) {
  var e = {};
  t3.exports = e, e.eastAsianWidth = function(o) {
    var s = o.charCodeAt(0), l = o.length == 2 ? o.charCodeAt(1) : 0, r = s;
    return 55296 <= s && s <= 56319 && 56320 <= l && l <= 57343 && (s &= 1023, l &= 1023, r = s << 10 | l, r += 65536), r == 12288 || 65281 <= r && r <= 65376 || 65504 <= r && r <= 65510 ? "F" : r == 8361 || 65377 <= r && r <= 65470 || 65474 <= r && r <= 65479 || 65482 <= r && r <= 65487 || 65490 <= r && r <= 65495 || 65498 <= r && r <= 65500 || 65512 <= r && r <= 65518 ? "H" : 4352 <= r && r <= 4447 || 4515 <= r && r <= 4519 || 4602 <= r && r <= 4607 || 9001 <= r && r <= 9002 || 11904 <= r && r <= 11929 || 11931 <= r && r <= 12019 || 12032 <= r && r <= 12245 || 12272 <= r && r <= 12283 || 12289 <= r && r <= 12350 || 12353 <= r && r <= 12438 || 12441 <= r && r <= 12543 || 12549 <= r && r <= 12589 || 12593 <= r && r <= 12686 || 12688 <= r && r <= 12730 || 12736 <= r && r <= 12771 || 12784 <= r && r <= 12830 || 12832 <= r && r <= 12871 || 12880 <= r && r <= 13054 || 13056 <= r && r <= 19903 || 19968 <= r && r <= 42124 || 42128 <= r && r <= 42182 || 43360 <= r && r <= 43388 || 44032 <= r && r <= 55203 || 55216 <= r && r <= 55238 || 55243 <= r && r <= 55291 || 63744 <= r && r <= 64255 || 65040 <= r && r <= 65049 || 65072 <= r && r <= 65106 || 65108 <= r && r <= 65126 || 65128 <= r && r <= 65131 || 110592 <= r && r <= 110593 || 127488 <= r && r <= 127490 || 127504 <= r && r <= 127546 || 127552 <= r && r <= 127560 || 127568 <= r && r <= 127569 || 131072 <= r && r <= 194367 || 177984 <= r && r <= 196605 || 196608 <= r && r <= 262141 ? "W" : 32 <= r && r <= 126 || 162 <= r && r <= 163 || 165 <= r && r <= 166 || r == 172 || r == 175 || 10214 <= r && r <= 10221 || 10629 <= r && r <= 10630 ? "Na" : r == 161 || r == 164 || 167 <= r && r <= 168 || r == 170 || 173 <= r && r <= 174 || 176 <= r && r <= 180 || 182 <= r && r <= 186 || 188 <= r && r <= 191 || r == 198 || r == 208 || 215 <= r && r <= 216 || 222 <= r && r <= 225 || r == 230 || 232 <= r && r <= 234 || 236 <= r && r <= 237 || r == 240 || 242 <= r && r <= 243 || 247 <= r && r <= 250 || r == 252 || r == 254 || r == 257 || r == 273 || r == 275 || r == 283 || 294 <= r && r <= 295 || r == 299 || 305 <= r && r <= 307 || r == 312 || 319 <= r && r <= 322 || r == 324 || 328 <= r && r <= 331 || r == 333 || 338 <= r && r <= 339 || 358 <= r && r <= 359 || r == 363 || r == 462 || r == 464 || r == 466 || r == 468 || r == 470 || r == 472 || r == 474 || r == 476 || r == 593 || r == 609 || r == 708 || r == 711 || 713 <= r && r <= 715 || r == 717 || r == 720 || 728 <= r && r <= 731 || r == 733 || r == 735 || 768 <= r && r <= 879 || 913 <= r && r <= 929 || 931 <= r && r <= 937 || 945 <= r && r <= 961 || 963 <= r && r <= 969 || r == 1025 || 1040 <= r && r <= 1103 || r == 1105 || r == 8208 || 8211 <= r && r <= 8214 || 8216 <= r && r <= 8217 || 8220 <= r && r <= 8221 || 8224 <= r && r <= 8226 || 8228 <= r && r <= 8231 || r == 8240 || 8242 <= r && r <= 8243 || r == 8245 || r == 8251 || r == 8254 || r == 8308 || r == 8319 || 8321 <= r && r <= 8324 || r == 8364 || r == 8451 || r == 8453 || r == 8457 || r == 8467 || r == 8470 || 8481 <= r && r <= 8482 || r == 8486 || r == 8491 || 8531 <= r && r <= 8532 || 8539 <= r && r <= 8542 || 8544 <= r && r <= 8555 || 8560 <= r && r <= 8569 || r == 8585 || 8592 <= r && r <= 8601 || 8632 <= r && r <= 8633 || r == 8658 || r == 8660 || r == 8679 || r == 8704 || 8706 <= r && r <= 8707 || 8711 <= r && r <= 8712 || r == 8715 || r == 8719 || r == 8721 || r == 8725 || r == 8730 || 8733 <= r && r <= 8736 || r == 8739 || r == 8741 || 8743 <= r && r <= 8748 || r == 8750 || 8756 <= r && r <= 8759 || 8764 <= r && r <= 8765 || r == 8776 || r == 8780 || r == 8786 || 8800 <= r && r <= 8801 || 8804 <= r && r <= 8807 || 8810 <= r && r <= 8811 || 8814 <= r && r <= 8815 || 8834 <= r && r <= 8835 || 8838 <= r && r <= 8839 || r == 8853 || r == 8857 || r == 8869 || r == 8895 || r == 8978 || 9312 <= r && r <= 9449 || 9451 <= r && r <= 9547 || 9552 <= r && r <= 9587 || 9600 <= r && r <= 9615 || 9618 <= r && r <= 9621 || 9632 <= r && r <= 9633 || 9635 <= r && r <= 9641 || 9650 <= r && r <= 9651 || 9654 <= r && r <= 9655 || 9660 <= r && r <= 9661 || 9664 <= r && r <= 9665 || 9670 <= r && r <= 9672 || r == 9675 || 9678 <= r && r <= 9681 || 9698 <= r && r <= 9701 || r == 9711 || 9733 <= r && r <= 9734 || r == 9737 || 9742 <= r && r <= 9743 || 9748 <= r && r <= 9749 || r == 9756 || r == 9758 || r == 9792 || r == 9794 || 9824 <= r && r <= 9825 || 9827 <= r && r <= 9829 || 9831 <= r && r <= 9834 || 9836 <= r && r <= 9837 || r == 9839 || 9886 <= r && r <= 9887 || 9918 <= r && r <= 9919 || 9924 <= r && r <= 9933 || 9935 <= r && r <= 9953 || r == 9955 || 9960 <= r && r <= 9983 || r == 10045 || r == 10071 || 10102 <= r && r <= 10111 || 11093 <= r && r <= 11097 || 12872 <= r && r <= 12879 || 57344 <= r && r <= 63743 || 65024 <= r && r <= 65039 || r == 65533 || 127232 <= r && r <= 127242 || 127248 <= r && r <= 127277 || 127280 <= r && r <= 127337 || 127344 <= r && r <= 127386 || 917760 <= r && r <= 917999 || 983040 <= r && r <= 1048573 || 1048576 <= r && r <= 1114109 ? "A" : "N";
  }, e.characterLength = function(o) {
    var s = this.eastAsianWidth(o);
    return s == "F" || s == "W" || s == "A" ? 2 : 1;
  };
  function n(o) {
    return o.match(/[\uD800-\uDBFF][\uDC00-\uDFFF]|[^\uD800-\uDFFF]/g) || [];
  }
  e.length = function(o) {
    for (var s = n(o), l = 0, r = 0; r < s.length; r++)
      l = l + this.characterLength(s[r]);
    return l;
  }, e.slice = function(o, s, l) {
    textLen = e.length(o), s = s || 0, l = l || 1, s < 0 && (s = textLen + s), l < 0 && (l = textLen + l);
    for (var r = "", c = 0, u = n(o), y = 0; y < u.length; y++) {
      var x = u[y], g = e.length(x);
      if (c >= s - (g == 2 ? 1 : 0))
        if (c + g <= l)
          r += x;
        else
          break;
      c += g;
    }
    return r;
  };
})(Ra);
var Da = new Intl.DateTimeFormat([], { hour: "2-digit", minute: "2-digit", second: "2-digit" });
var ht = { debug: 20, info: 30, warn: 40, error: 50, silent: 90 };
function Ma(t3, e, n, ...o) {
  const s = t3.level, l = t3.dest, r = { type: n, level: e, args: o, message: "" };
  ht[s] > ht[e] || l.write(r);
}
function Ye(t3, e, ...n) {
  return Ma(t3, "warn", e, ...n);
}
function Na(...t3) {
  "_astroGlobalDebug" in globalThis && globalThis._astroGlobalDebug(...t3);
}
typeof process < "u" && (process.argv.includes("--verbose") || process.argv.includes("--silent"));
var In;
var Nt = 1;
var za = { write(t3) {
  let e = console.error;
  ht[t3.level] < ht.error && (e = console.log);
  function n() {
    let l = "", r = t3.type;
    return r && (l += Bi(Da.format(new Date()) + " "), t3.level === "info" ? r = pt(_i(`[${r}]`)) : t3.level === "warn" ? r = pt($n(`[${r}]`)) : t3.level === "error" && (r = pt(Pi(`[${r}]`))), l += `${r} `), Oi(l);
  }
  let o = fr.format(...t3.args);
  o === In ? (Nt++, o = `${o} ${$n(`(x${Nt})`)}`) : (In = o, Nt = 1);
  const s = n() + o;
  return e(s), true;
} };
function La(t3) {
  for (var e = [], n = 0; n < t3.length; ) {
    var o = t3[n];
    if (o === "*" || o === "+" || o === "?") {
      e.push({ type: "MODIFIER", index: n, value: t3[n++] });
      continue;
    }
    if (o === "\\") {
      e.push({ type: "ESCAPED_CHAR", index: n++, value: t3[n++] });
      continue;
    }
    if (o === "{") {
      e.push({ type: "OPEN", index: n, value: t3[n++] });
      continue;
    }
    if (o === "}") {
      e.push({ type: "CLOSE", index: n, value: t3[n++] });
      continue;
    }
    if (o === ":") {
      for (var s = "", l = n + 1; l < t3.length; ) {
        var r = t3.charCodeAt(l);
        if (r >= 48 && r <= 57 || r >= 65 && r <= 90 || r >= 97 && r <= 122 || r === 95) {
          s += t3[l++];
          continue;
        }
        break;
      }
      if (!s)
        throw new TypeError("Missing parameter name at ".concat(n));
      e.push({ type: "NAME", index: n, value: s }), n = l;
      continue;
    }
    if (o === "(") {
      var c = 1, u = "", l = n + 1;
      if (t3[l] === "?")
        throw new TypeError('Pattern cannot start with "?" at '.concat(l));
      for (; l < t3.length; ) {
        if (t3[l] === "\\") {
          u += t3[l++] + t3[l++];
          continue;
        }
        if (t3[l] === ")") {
          if (c--, c === 0) {
            l++;
            break;
          }
        } else if (t3[l] === "(" && (c++, t3[l + 1] !== "?"))
          throw new TypeError("Capturing groups are not allowed at ".concat(l));
        u += t3[l++];
      }
      if (c)
        throw new TypeError("Unbalanced pattern at ".concat(n));
      if (!u)
        throw new TypeError("Missing pattern at ".concat(n));
      e.push({ type: "PATTERN", index: n, value: u }), n = l;
      continue;
    }
    e.push({ type: "CHAR", index: n, value: t3[n++] });
  }
  return e.push({ type: "END", index: n, value: "" }), e;
}
function Wa(t3, e) {
  e === void 0 && (e = {});
  for (var n = La(t3), o = e.prefixes, s = o === void 0 ? "./" : o, l = "[^".concat(qa(e.delimiter || "/#?"), "]+?"), r = [], c = 0, u = 0, y = "", x = function(Y) {
    if (u < n.length && n[u].type === Y)
      return n[u++].value;
  }, g = function(Y) {
    var V = x(Y);
    if (V !== void 0)
      return V;
    var K = n[u], Z = K.type, pe = K.index;
    throw new TypeError("Unexpected ".concat(Z, " at ").concat(pe, ", expected ").concat(Y));
  }, E = function() {
    for (var Y = "", V; V = x("CHAR") || x("ESCAPED_CHAR"); )
      Y += V;
    return Y;
  }; u < n.length; ) {
    var j = x("CHAR"), O = x("NAME"), F = x("PATTERN");
    if (O || F) {
      var B = j || "";
      s.indexOf(B) === -1 && (y += B, B = ""), y && (r.push(y), y = ""), r.push({ name: O || c++, prefix: B, suffix: "", pattern: F || l, modifier: x("MODIFIER") || "" });
      continue;
    }
    var $ = j || x("ESCAPED_CHAR");
    if ($) {
      y += $;
      continue;
    }
    y && (r.push(y), y = "");
    var S = x("OPEN");
    if (S) {
      var B = E(), k = x("NAME") || "", z = x("PATTERN") || "", R = E();
      g("CLOSE"), r.push({ name: k || (z ? c++ : ""), pattern: k && !z ? l : z, prefix: B, suffix: R, modifier: x("MODIFIER") || "" });
      continue;
    }
    g("END");
  }
  return r;
}
function Ga(t3, e) {
  return Ha(Wa(t3, e), e);
}
function Ha(t3, e) {
  e === void 0 && (e = {});
  var n = Va(e), o = e.encode, s = o === void 0 ? function(u) {
    return u;
  } : o, l = e.validate, r = l === void 0 ? true : l, c = t3.map(function(u) {
    if (typeof u == "object")
      return new RegExp("^(?:".concat(u.pattern, ")$"), n);
  });
  return function(u) {
    for (var y = "", x = 0; x < t3.length; x++) {
      var g = t3[x];
      if (typeof g == "string") {
        y += g;
        continue;
      }
      var E = u ? u[g.name] : void 0, j = g.modifier === "?" || g.modifier === "*", O = g.modifier === "*" || g.modifier === "+";
      if (Array.isArray(E)) {
        if (!O)
          throw new TypeError('Expected "'.concat(g.name, '" to not repeat, but got an array'));
        if (E.length === 0) {
          if (j)
            continue;
          throw new TypeError('Expected "'.concat(g.name, '" to not be empty'));
        }
        for (var F = 0; F < E.length; F++) {
          var B = s(E[F], g);
          if (r && !c[x].test(B))
            throw new TypeError('Expected all "'.concat(g.name, '" to match "').concat(g.pattern, '", but got "').concat(B, '"'));
          y += g.prefix + B + g.suffix;
        }
        continue;
      }
      if (typeof E == "string" || typeof E == "number") {
        var B = s(String(E), g);
        if (r && !c[x].test(B))
          throw new TypeError('Expected "'.concat(g.name, '" to match "').concat(g.pattern, '", but got "').concat(B, '"'));
        y += g.prefix + B + g.suffix;
        continue;
      }
      if (!j) {
        var $ = O ? "an array" : "a string";
        throw new TypeError('Expected "'.concat(g.name, '" to be ').concat($));
      }
    }
    return y;
  };
}
function qa(t3) {
  return t3.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
}
function Va(t3) {
  return t3 && t3.sensitive ? "" : "i";
}
function Ja(t3, e) {
  const n = t3.map((l) => l[0].spread ? `/:${l[0].content.slice(3)}(.*)?` : "/" + l.map((r) => {
    if (r)
      return r.dynamic ? `:${r.content}` : r.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  }).join("")).join(""), o = e !== "never" && t3.length ? "/" : "";
  return Ga(n + o);
}
function Cn(t3) {
  return { type: t3.type, pattern: new RegExp(t3.pattern), params: t3.params, component: t3.component, generate: Ja(t3.segments, t3._meta.trailingSlash), pathname: t3.pathname || void 0, segments: t3.segments };
}
var Ya = Object.defineProperty;
var Xa = Object.defineProperties;
var Ka = Object.getOwnPropertyDescriptors;
var Tn = Object.getOwnPropertySymbols;
var Za = Object.prototype.hasOwnProperty;
var Qa = Object.prototype.propertyIsEnumerable;
var Un = (t3, e, n) => e in t3 ? Ya(t3, e, { enumerable: true, configurable: true, writable: true, value: n }) : t3[e] = n;
var Rn = (t3, e) => {
  for (var n in e || (e = {}))
    Za.call(e, n) && Un(t3, n, e[n]);
  if (Tn)
    for (var n of Tn(e))
      Qa.call(e, n) && Un(t3, n, e[n]);
  return t3;
};
var Dn = (t3, e) => Xa(t3, Ka(e));
function eo(t3) {
  const e = [];
  for (const o of t3.routes) {
    e.push(Dn(Rn({}, o), { routeData: Cn(o.routeData) }));
    const s = o;
    s.routeData = Cn(o.routeData);
  }
  const n = new Set(t3.assets);
  return Dn(Rn({}, t3), { assets: n, routes: e });
}
function to(t3, e) {
  return e.routes.find((n) => n.pattern.test(t3));
}
var { replace: no } = "";
var ro = /[&<>'"]/g;
var io = { "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" };
var ao = (t3) => io[t3];
var oo = (t3) => no.call(t3, ro, ao);
var so = oo;
var rn = class extends String {
};
var q = (t3) => t3 instanceof rn ? t3 : typeof t3 == "string" ? new rn(t3) : t3;
function Cr(t3) {
  const e = {};
  return n(t3), Object.keys(e).join(" ");
  function n(o) {
    o && typeof o.forEach == "function" ? o.forEach(n) : o === Object(o) ? Object.keys(o).forEach((s) => {
      o[s] && n(s);
    }) : (o = o == null ? "" : String(o).trim(), o && o.split(/\s+/).forEach((s) => {
      e[s] = true;
    }));
  }
}
function Tr(t3) {
  return `astro/client/${t3}.js`;
}
var an = { exports: {} };
var on = { exports: {} };
var Ur = {};
var Et = {};
Et.byteLength = lo;
Et.toByteArray = uo;
Et.fromByteArray = ho;
var de = [];
var ee = [];
var po = typeof Uint8Array < "u" ? Uint8Array : Array;
var zt = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
for (_e = 0, co = zt.length; _e < co; ++_e)
  de[_e] = zt[_e], ee[zt.charCodeAt(_e)] = _e;
var _e;
var co;
ee["-".charCodeAt(0)] = 62;
ee["_".charCodeAt(0)] = 63;
function Rr(t3) {
  var e = t3.length;
  if (e % 4 > 0)
    throw new Error("Invalid string. Length must be a multiple of 4");
  var n = t3.indexOf("=");
  n === -1 && (n = e);
  var o = n === e ? 0 : 4 - n % 4;
  return [n, o];
}
function lo(t3) {
  var e = Rr(t3), n = e[0], o = e[1];
  return (n + o) * 3 / 4 - o;
}
function fo(t3, e, n) {
  return (e + n) * 3 / 4 - n;
}
function uo(t3) {
  var e, n = Rr(t3), o = n[0], s = n[1], l = new po(fo(t3, o, s)), r = 0, c = s > 0 ? o - 4 : o, u;
  for (u = 0; u < c; u += 4)
    e = ee[t3.charCodeAt(u)] << 18 | ee[t3.charCodeAt(u + 1)] << 12 | ee[t3.charCodeAt(u + 2)] << 6 | ee[t3.charCodeAt(u + 3)], l[r++] = e >> 16 & 255, l[r++] = e >> 8 & 255, l[r++] = e & 255;
  return s === 2 && (e = ee[t3.charCodeAt(u)] << 2 | ee[t3.charCodeAt(u + 1)] >> 4, l[r++] = e & 255), s === 1 && (e = ee[t3.charCodeAt(u)] << 10 | ee[t3.charCodeAt(u + 1)] << 4 | ee[t3.charCodeAt(u + 2)] >> 2, l[r++] = e >> 8 & 255, l[r++] = e & 255), l;
}
function mo(t3) {
  return de[t3 >> 18 & 63] + de[t3 >> 12 & 63] + de[t3 >> 6 & 63] + de[t3 & 63];
}
function yo(t3, e, n) {
  for (var o, s = [], l = e; l < n; l += 3)
    o = (t3[l] << 16 & 16711680) + (t3[l + 1] << 8 & 65280) + (t3[l + 2] & 255), s.push(mo(o));
  return s.join("");
}
function ho(t3) {
  for (var e, n = t3.length, o = n % 3, s = [], l = 16383, r = 0, c = n - o; r < c; r += l)
    s.push(yo(t3, r, r + l > c ? c : r + l));
  return o === 1 ? (e = t3[n - 1], s.push(de[e >> 2] + de[e << 4 & 63] + "==")) : o === 2 && (e = (t3[n - 2] << 8) + t3[n - 1], s.push(de[e >> 10] + de[e >> 4 & 63] + de[e << 2 & 63] + "=")), s.join("");
}
var wn = {};
wn.read = function(t3, e, n, o, s) {
  var l, r, c = s * 8 - o - 1, u = (1 << c) - 1, y = u >> 1, x = -7, g = n ? s - 1 : 0, E = n ? -1 : 1, j = t3[e + g];
  for (g += E, l = j & (1 << -x) - 1, j >>= -x, x += c; x > 0; l = l * 256 + t3[e + g], g += E, x -= 8)
    ;
  for (r = l & (1 << -x) - 1, l >>= -x, x += o; x > 0; r = r * 256 + t3[e + g], g += E, x -= 8)
    ;
  if (l === 0)
    l = 1 - y;
  else {
    if (l === u)
      return r ? NaN : (j ? -1 : 1) * (1 / 0);
    r = r + Math.pow(2, o), l = l - y;
  }
  return (j ? -1 : 1) * r * Math.pow(2, l - o);
};
wn.write = function(t3, e, n, o, s, l) {
  var r, c, u, y = l * 8 - s - 1, x = (1 << y) - 1, g = x >> 1, E = s === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0, j = o ? 0 : l - 1, O = o ? 1 : -1, F = e < 0 || e === 0 && 1 / e < 0 ? 1 : 0;
  for (e = Math.abs(e), isNaN(e) || e === 1 / 0 ? (c = isNaN(e) ? 1 : 0, r = x) : (r = Math.floor(Math.log(e) / Math.LN2), e * (u = Math.pow(2, -r)) < 1 && (r--, u *= 2), r + g >= 1 ? e += E / u : e += E * Math.pow(2, 1 - g), e * u >= 2 && (r++, u /= 2), r + g >= x ? (c = 0, r = x) : r + g >= 1 ? (c = (e * u - 1) * Math.pow(2, s), r = r + g) : (c = e * Math.pow(2, g - 1) * Math.pow(2, s), r = 0)); s >= 8; t3[n + j] = c & 255, j += O, c /= 256, s -= 8)
    ;
  for (r = r << s | c, y += s; y > 0; t3[n + j] = r & 255, j += O, r /= 256, y -= 8)
    ;
  t3[n + j - O] |= F * 128;
};
(function(t3) {
  const e = Et, n = wn, o = typeof Symbol == "function" && typeof Symbol.for == "function" ? Symbol.for("nodejs.util.inspect.custom") : null;
  t3.Buffer = c, t3.SlowBuffer = S, t3.INSPECT_MAX_BYTES = 50;
  const s = 2147483647;
  t3.kMaxLength = s, c.TYPED_ARRAY_SUPPORT = l(), !c.TYPED_ARRAY_SUPPORT && typeof console < "u" && typeof console.error == "function" && console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");
  function l() {
    try {
      const p = new Uint8Array(1), i = { foo: function() {
        return 42;
      } };
      return Object.setPrototypeOf(i, Uint8Array.prototype), Object.setPrototypeOf(p, i), p.foo() === 42;
    } catch {
      return false;
    }
  }
  Object.defineProperty(c.prototype, "parent", { enumerable: true, get: function() {
    if (!!c.isBuffer(this))
      return this.buffer;
  } }), Object.defineProperty(c.prototype, "offset", { enumerable: true, get: function() {
    if (!!c.isBuffer(this))
      return this.byteOffset;
  } });
  function r(p) {
    if (p > s)
      throw new RangeError('The value "' + p + '" is invalid for option "size"');
    const i = new Uint8Array(p);
    return Object.setPrototypeOf(i, c.prototype), i;
  }
  function c(p, i, a) {
    if (typeof p == "number") {
      if (typeof i == "string")
        throw new TypeError('The "string" argument must be of type string. Received type number');
      return g(p);
    }
    return u(p, i, a);
  }
  c.poolSize = 8192;
  function u(p, i, a) {
    if (typeof p == "string")
      return E(p, i);
    if (ArrayBuffer.isView(p))
      return O(p);
    if (p == null)
      throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof p);
    if (le(p, ArrayBuffer) || p && le(p.buffer, ArrayBuffer) || typeof SharedArrayBuffer < "u" && (le(p, SharedArrayBuffer) || p && le(p.buffer, SharedArrayBuffer)))
      return F(p, i, a);
    if (typeof p == "number")
      throw new TypeError('The "value" argument must not be of type number. Received type number');
    const f = p.valueOf && p.valueOf();
    if (f != null && f !== p)
      return c.from(f, i, a);
    const d = B(p);
    if (d)
      return d;
    if (typeof Symbol < "u" && Symbol.toPrimitive != null && typeof p[Symbol.toPrimitive] == "function")
      return c.from(p[Symbol.toPrimitive]("string"), i, a);
    throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof p);
  }
  c.from = function(p, i, a) {
    return u(p, i, a);
  }, Object.setPrototypeOf(c.prototype, Uint8Array.prototype), Object.setPrototypeOf(c, Uint8Array);
  function y(p) {
    if (typeof p != "number")
      throw new TypeError('"size" argument must be of type number');
    if (p < 0)
      throw new RangeError('The value "' + p + '" is invalid for option "size"');
  }
  function x(p, i, a) {
    return y(p), p <= 0 ? r(p) : i !== void 0 ? typeof a == "string" ? r(p).fill(i, a) : r(p).fill(i) : r(p);
  }
  c.alloc = function(p, i, a) {
    return x(p, i, a);
  };
  function g(p) {
    return y(p), r(p < 0 ? 0 : $(p) | 0);
  }
  c.allocUnsafe = function(p) {
    return g(p);
  }, c.allocUnsafeSlow = function(p) {
    return g(p);
  };
  function E(p, i) {
    if ((typeof i != "string" || i === "") && (i = "utf8"), !c.isEncoding(i))
      throw new TypeError("Unknown encoding: " + i);
    const a = k(p, i) | 0;
    let f = r(a);
    const d = f.write(p, i);
    return d !== a && (f = f.slice(0, d)), f;
  }
  function j(p) {
    const i = p.length < 0 ? 0 : $(p.length) | 0, a = r(i);
    for (let f = 0; f < i; f += 1)
      a[f] = p[f] & 255;
    return a;
  }
  function O(p) {
    if (le(p, Uint8Array)) {
      const i = new Uint8Array(p);
      return F(i.buffer, i.byteOffset, i.byteLength);
    }
    return j(p);
  }
  function F(p, i, a) {
    if (i < 0 || p.byteLength < i)
      throw new RangeError('"offset" is outside of buffer bounds');
    if (p.byteLength < i + (a || 0))
      throw new RangeError('"length" is outside of buffer bounds');
    let f;
    return i === void 0 && a === void 0 ? f = new Uint8Array(p) : a === void 0 ? f = new Uint8Array(p, i) : f = new Uint8Array(p, i, a), Object.setPrototypeOf(f, c.prototype), f;
  }
  function B(p) {
    if (c.isBuffer(p)) {
      const i = $(p.length) | 0, a = r(i);
      return a.length === 0 || p.copy(a, 0, 0, i), a;
    }
    if (p.length !== void 0)
      return typeof p.length != "number" || Bt(p.length) ? r(0) : j(p);
    if (p.type === "Buffer" && Array.isArray(p.data))
      return j(p.data);
  }
  function $(p) {
    if (p >= s)
      throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + s.toString(16) + " bytes");
    return p | 0;
  }
  function S(p) {
    return +p != p && (p = 0), c.alloc(+p);
  }
  c.isBuffer = function(i) {
    return i != null && i._isBuffer === true && i !== c.prototype;
  }, c.compare = function(i, a) {
    if (le(i, Uint8Array) && (i = c.from(i, i.offset, i.byteLength)), le(a, Uint8Array) && (a = c.from(a, a.offset, a.byteLength)), !c.isBuffer(i) || !c.isBuffer(a))
      throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
    if (i === a)
      return 0;
    let f = i.length, d = a.length;
    for (let h = 0, v = Math.min(f, d); h < v; ++h)
      if (i[h] !== a[h]) {
        f = i[h], d = a[h];
        break;
      }
    return f < d ? -1 : d < f ? 1 : 0;
  }, c.isEncoding = function(i) {
    switch (String(i).toLowerCase()) {
      case "hex":
      case "utf8":
      case "utf-8":
      case "ascii":
      case "latin1":
      case "binary":
      case "base64":
      case "ucs2":
      case "ucs-2":
      case "utf16le":
      case "utf-16le":
        return true;
      default:
        return false;
    }
  }, c.concat = function(i, a) {
    if (!Array.isArray(i))
      throw new TypeError('"list" argument must be an Array of Buffers');
    if (i.length === 0)
      return c.alloc(0);
    let f;
    if (a === void 0)
      for (a = 0, f = 0; f < i.length; ++f)
        a += i[f].length;
    const d = c.allocUnsafe(a);
    let h = 0;
    for (f = 0; f < i.length; ++f) {
      let v = i[f];
      if (le(v, Uint8Array))
        h + v.length > d.length ? (c.isBuffer(v) || (v = c.from(v)), v.copy(d, h)) : Uint8Array.prototype.set.call(d, v, h);
      else if (c.isBuffer(v))
        v.copy(d, h);
      else
        throw new TypeError('"list" argument must be an Array of Buffers');
      h += v.length;
    }
    return d;
  };
  function k(p, i) {
    if (c.isBuffer(p))
      return p.length;
    if (ArrayBuffer.isView(p) || le(p, ArrayBuffer))
      return p.byteLength;
    if (typeof p != "string")
      throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof p);
    const a = p.length, f = arguments.length > 2 && arguments[2] === true;
    if (!f && a === 0)
      return 0;
    let d = false;
    for (; ; )
      switch (i) {
        case "ascii":
        case "latin1":
        case "binary":
          return a;
        case "utf8":
        case "utf-8":
          return We(p).length;
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return a * 2;
        case "hex":
          return a >>> 1;
        case "base64":
          return it(p).length;
        default:
          if (d)
            return f ? -1 : We(p).length;
          i = ("" + i).toLowerCase(), d = true;
      }
  }
  c.byteLength = k;
  function z(p, i, a) {
    let f = false;
    if ((i === void 0 || i < 0) && (i = 0), i > this.length || ((a === void 0 || a > this.length) && (a = this.length), a <= 0) || (a >>>= 0, i >>>= 0, a <= i))
      return "";
    for (p || (p = "utf8"); ; )
      switch (p) {
        case "hex":
          return ie(this, i, a);
        case "utf8":
        case "utf-8":
          return re(this, i, a);
        case "ascii":
          return Le(this, i, a);
        case "latin1":
        case "binary":
          return xe(this, i, a);
        case "base64":
          return ze(this, i, a);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return ge(this, i, a);
        default:
          if (f)
            throw new TypeError("Unknown encoding: " + p);
          p = (p + "").toLowerCase(), f = true;
      }
  }
  c.prototype._isBuffer = true;
  function R(p, i, a) {
    const f = p[i];
    p[i] = p[a], p[a] = f;
  }
  c.prototype.swap16 = function() {
    const i = this.length;
    if (i % 2 !== 0)
      throw new RangeError("Buffer size must be a multiple of 16-bits");
    for (let a = 0; a < i; a += 2)
      R(this, a, a + 1);
    return this;
  }, c.prototype.swap32 = function() {
    const i = this.length;
    if (i % 4 !== 0)
      throw new RangeError("Buffer size must be a multiple of 32-bits");
    for (let a = 0; a < i; a += 4)
      R(this, a, a + 3), R(this, a + 1, a + 2);
    return this;
  }, c.prototype.swap64 = function() {
    const i = this.length;
    if (i % 8 !== 0)
      throw new RangeError("Buffer size must be a multiple of 64-bits");
    for (let a = 0; a < i; a += 8)
      R(this, a, a + 7), R(this, a + 1, a + 6), R(this, a + 2, a + 5), R(this, a + 3, a + 4);
    return this;
  }, c.prototype.toString = function() {
    const i = this.length;
    return i === 0 ? "" : arguments.length === 0 ? re(this, 0, i) : z.apply(this, arguments);
  }, c.prototype.toLocaleString = c.prototype.toString, c.prototype.equals = function(i) {
    if (!c.isBuffer(i))
      throw new TypeError("Argument must be a Buffer");
    return this === i ? true : c.compare(this, i) === 0;
  }, c.prototype.inspect = function() {
    let i = "";
    const a = t3.INSPECT_MAX_BYTES;
    return i = this.toString("hex", 0, a).replace(/(.{2})/g, "$1 ").trim(), this.length > a && (i += " ... "), "<Buffer " + i + ">";
  }, o && (c.prototype[o] = c.prototype.inspect), c.prototype.compare = function(i, a, f, d, h) {
    if (le(i, Uint8Array) && (i = c.from(i, i.offset, i.byteLength)), !c.isBuffer(i))
      throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof i);
    if (a === void 0 && (a = 0), f === void 0 && (f = i ? i.length : 0), d === void 0 && (d = 0), h === void 0 && (h = this.length), a < 0 || f > i.length || d < 0 || h > this.length)
      throw new RangeError("out of range index");
    if (d >= h && a >= f)
      return 0;
    if (d >= h)
      return -1;
    if (a >= f)
      return 1;
    if (a >>>= 0, f >>>= 0, d >>>= 0, h >>>= 0, this === i)
      return 0;
    let v = h - d, I = f - a;
    const G = Math.min(v, I), L = this.slice(d, h), H = i.slice(a, f);
    for (let N = 0; N < G; ++N)
      if (L[N] !== H[N]) {
        v = L[N], I = H[N];
        break;
      }
    return v < I ? -1 : I < v ? 1 : 0;
  };
  function Y(p, i, a, f, d) {
    if (p.length === 0)
      return -1;
    if (typeof a == "string" ? (f = a, a = 0) : a > 2147483647 ? a = 2147483647 : a < -2147483648 && (a = -2147483648), a = +a, Bt(a) && (a = d ? 0 : p.length - 1), a < 0 && (a = p.length + a), a >= p.length) {
      if (d)
        return -1;
      a = p.length - 1;
    } else if (a < 0)
      if (d)
        a = 0;
      else
        return -1;
    if (typeof i == "string" && (i = c.from(i, f)), c.isBuffer(i))
      return i.length === 0 ? -1 : V(p, i, a, f, d);
    if (typeof i == "number")
      return i = i & 255, typeof Uint8Array.prototype.indexOf == "function" ? d ? Uint8Array.prototype.indexOf.call(p, i, a) : Uint8Array.prototype.lastIndexOf.call(p, i, a) : V(p, [i], a, f, d);
    throw new TypeError("val must be string, number or Buffer");
  }
  function V(p, i, a, f, d) {
    let h = 1, v = p.length, I = i.length;
    if (f !== void 0 && (f = String(f).toLowerCase(), f === "ucs2" || f === "ucs-2" || f === "utf16le" || f === "utf-16le")) {
      if (p.length < 2 || i.length < 2)
        return -1;
      h = 2, v /= 2, I /= 2, a /= 2;
    }
    function G(H, N) {
      return h === 1 ? H[N] : H.readUInt16BE(N * h);
    }
    let L;
    if (d) {
      let H = -1;
      for (L = a; L < v; L++)
        if (G(p, L) === G(i, H === -1 ? 0 : L - H)) {
          if (H === -1 && (H = L), L - H + 1 === I)
            return H * h;
        } else
          H !== -1 && (L -= L - H), H = -1;
    } else
      for (a + I > v && (a = v - I), L = a; L >= 0; L--) {
        let H = true;
        for (let N = 0; N < I; N++)
          if (G(p, L + N) !== G(i, N)) {
            H = false;
            break;
          }
        if (H)
          return L;
      }
    return -1;
  }
  c.prototype.includes = function(i, a, f) {
    return this.indexOf(i, a, f) !== -1;
  }, c.prototype.indexOf = function(i, a, f) {
    return Y(this, i, a, f, true);
  }, c.prototype.lastIndexOf = function(i, a, f) {
    return Y(this, i, a, f, false);
  };
  function K(p, i, a, f) {
    a = Number(a) || 0;
    const d = p.length - a;
    f ? (f = Number(f), f > d && (f = d)) : f = d;
    const h = i.length;
    f > h / 2 && (f = h / 2);
    let v;
    for (v = 0; v < f; ++v) {
      const I = parseInt(i.substr(v * 2, 2), 16);
      if (Bt(I))
        return v;
      p[a + v] = I;
    }
    return v;
  }
  function Z(p, i, a, f) {
    return Ge(We(i, p.length - a), p, a, f);
  }
  function pe(p, i, a, f) {
    return Ge(Ot(i), p, a, f);
  }
  function me(p, i, a, f) {
    return Ge(it(i), p, a, f);
  }
  function ne(p, i, a, f) {
    return Ge(b(i, p.length - a), p, a, f);
  }
  c.prototype.write = function(i, a, f, d) {
    if (a === void 0)
      d = "utf8", f = this.length, a = 0;
    else if (f === void 0 && typeof a == "string")
      d = a, f = this.length, a = 0;
    else if (isFinite(a))
      a = a >>> 0, isFinite(f) ? (f = f >>> 0, d === void 0 && (d = "utf8")) : (d = f, f = void 0);
    else
      throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
    const h = this.length - a;
    if ((f === void 0 || f > h) && (f = h), i.length > 0 && (f < 0 || a < 0) || a > this.length)
      throw new RangeError("Attempt to write outside buffer bounds");
    d || (d = "utf8");
    let v = false;
    for (; ; )
      switch (d) {
        case "hex":
          return K(this, i, a, f);
        case "utf8":
        case "utf-8":
          return Z(this, i, a, f);
        case "ascii":
        case "latin1":
        case "binary":
          return pe(this, i, a, f);
        case "base64":
          return me(this, i, a, f);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return ne(this, i, a, f);
        default:
          if (v)
            throw new TypeError("Unknown encoding: " + d);
          d = ("" + d).toLowerCase(), v = true;
      }
  }, c.prototype.toJSON = function() {
    return { type: "Buffer", data: Array.prototype.slice.call(this._arr || this, 0) };
  };
  function ze(p, i, a) {
    return i === 0 && a === p.length ? e.fromByteArray(p) : e.fromByteArray(p.slice(i, a));
  }
  function re(p, i, a) {
    a = Math.min(p.length, a);
    const f = [];
    let d = i;
    for (; d < a; ) {
      const h = p[d];
      let v = null, I = h > 239 ? 4 : h > 223 ? 3 : h > 191 ? 2 : 1;
      if (d + I <= a) {
        let G, L, H, N;
        switch (I) {
          case 1:
            h < 128 && (v = h);
            break;
          case 2:
            G = p[d + 1], (G & 192) === 128 && (N = (h & 31) << 6 | G & 63, N > 127 && (v = N));
            break;
          case 3:
            G = p[d + 1], L = p[d + 2], (G & 192) === 128 && (L & 192) === 128 && (N = (h & 15) << 12 | (G & 63) << 6 | L & 63, N > 2047 && (N < 55296 || N > 57343) && (v = N));
            break;
          case 4:
            G = p[d + 1], L = p[d + 2], H = p[d + 3], (G & 192) === 128 && (L & 192) === 128 && (H & 192) === 128 && (N = (h & 15) << 18 | (G & 63) << 12 | (L & 63) << 6 | H & 63, N > 65535 && N < 1114112 && (v = N));
        }
      }
      v === null ? (v = 65533, I = 1) : v > 65535 && (v -= 65536, f.push(v >>> 10 & 1023 | 55296), v = 56320 | v & 1023), f.push(v), d += I;
    }
    return he(f);
  }
  const ye = 4096;
  function he(p) {
    const i = p.length;
    if (i <= ye)
      return String.fromCharCode.apply(String, p);
    let a = "", f = 0;
    for (; f < i; )
      a += String.fromCharCode.apply(String, p.slice(f, f += ye));
    return a;
  }
  function Le(p, i, a) {
    let f = "";
    a = Math.min(p.length, a);
    for (let d = i; d < a; ++d)
      f += String.fromCharCode(p[d] & 127);
    return f;
  }
  function xe(p, i, a) {
    let f = "";
    a = Math.min(p.length, a);
    for (let d = i; d < a; ++d)
      f += String.fromCharCode(p[d]);
    return f;
  }
  function ie(p, i, a) {
    const f = p.length;
    (!i || i < 0) && (i = 0), (!a || a < 0 || a > f) && (a = f);
    let d = "";
    for (let h = i; h < a; ++h)
      d += vi[p[h]];
    return d;
  }
  function ge(p, i, a) {
    const f = p.slice(i, a);
    let d = "";
    for (let h = 0; h < f.length - 1; h += 2)
      d += String.fromCharCode(f[h] + f[h + 1] * 256);
    return d;
  }
  c.prototype.slice = function(i, a) {
    const f = this.length;
    i = ~~i, a = a === void 0 ? f : ~~a, i < 0 ? (i += f, i < 0 && (i = 0)) : i > f && (i = f), a < 0 ? (a += f, a < 0 && (a = 0)) : a > f && (a = f), a < i && (a = i);
    const d = this.subarray(i, a);
    return Object.setPrototypeOf(d, c.prototype), d;
  };
  function W(p, i, a) {
    if (p % 1 !== 0 || p < 0)
      throw new RangeError("offset is not uint");
    if (p + i > a)
      throw new RangeError("Trying to access beyond buffer length");
  }
  c.prototype.readUintLE = c.prototype.readUIntLE = function(i, a, f) {
    i = i >>> 0, a = a >>> 0, f || W(i, a, this.length);
    let d = this[i], h = 1, v = 0;
    for (; ++v < a && (h *= 256); )
      d += this[i + v] * h;
    return d;
  }, c.prototype.readUintBE = c.prototype.readUIntBE = function(i, a, f) {
    i = i >>> 0, a = a >>> 0, f || W(i, a, this.length);
    let d = this[i + --a], h = 1;
    for (; a > 0 && (h *= 256); )
      d += this[i + --a] * h;
    return d;
  }, c.prototype.readUint8 = c.prototype.readUInt8 = function(i, a) {
    return i = i >>> 0, a || W(i, 1, this.length), this[i];
  }, c.prototype.readUint16LE = c.prototype.readUInt16LE = function(i, a) {
    return i = i >>> 0, a || W(i, 2, this.length), this[i] | this[i + 1] << 8;
  }, c.prototype.readUint16BE = c.prototype.readUInt16BE = function(i, a) {
    return i = i >>> 0, a || W(i, 2, this.length), this[i] << 8 | this[i + 1];
  }, c.prototype.readUint32LE = c.prototype.readUInt32LE = function(i, a) {
    return i = i >>> 0, a || W(i, 4, this.length), (this[i] | this[i + 1] << 8 | this[i + 2] << 16) + this[i + 3] * 16777216;
  }, c.prototype.readUint32BE = c.prototype.readUInt32BE = function(i, a) {
    return i = i >>> 0, a || W(i, 4, this.length), this[i] * 16777216 + (this[i + 1] << 16 | this[i + 2] << 8 | this[i + 3]);
  }, c.prototype.readBigUInt64LE = ve(function(i) {
    i = i >>> 0, ae(i, "offset");
    const a = this[i], f = this[i + 7];
    (a === void 0 || f === void 0) && Q(i, this.length - 8);
    const d = a + this[++i] * 2 ** 8 + this[++i] * 2 ** 16 + this[++i] * 2 ** 24, h = this[++i] + this[++i] * 2 ** 8 + this[++i] * 2 ** 16 + f * 2 ** 24;
    return BigInt(d) + (BigInt(h) << BigInt(32));
  }), c.prototype.readBigUInt64BE = ve(function(i) {
    i = i >>> 0, ae(i, "offset");
    const a = this[i], f = this[i + 7];
    (a === void 0 || f === void 0) && Q(i, this.length - 8);
    const d = a * 2 ** 24 + this[++i] * 2 ** 16 + this[++i] * 2 ** 8 + this[++i], h = this[++i] * 2 ** 24 + this[++i] * 2 ** 16 + this[++i] * 2 ** 8 + f;
    return (BigInt(d) << BigInt(32)) + BigInt(h);
  }), c.prototype.readIntLE = function(i, a, f) {
    i = i >>> 0, a = a >>> 0, f || W(i, a, this.length);
    let d = this[i], h = 1, v = 0;
    for (; ++v < a && (h *= 256); )
      d += this[i + v] * h;
    return h *= 128, d >= h && (d -= Math.pow(2, 8 * a)), d;
  }, c.prototype.readIntBE = function(i, a, f) {
    i = i >>> 0, a = a >>> 0, f || W(i, a, this.length);
    let d = a, h = 1, v = this[i + --d];
    for (; d > 0 && (h *= 256); )
      v += this[i + --d] * h;
    return h *= 128, v >= h && (v -= Math.pow(2, 8 * a)), v;
  }, c.prototype.readInt8 = function(i, a) {
    return i = i >>> 0, a || W(i, 1, this.length), this[i] & 128 ? (255 - this[i] + 1) * -1 : this[i];
  }, c.prototype.readInt16LE = function(i, a) {
    i = i >>> 0, a || W(i, 2, this.length);
    const f = this[i] | this[i + 1] << 8;
    return f & 32768 ? f | 4294901760 : f;
  }, c.prototype.readInt16BE = function(i, a) {
    i = i >>> 0, a || W(i, 2, this.length);
    const f = this[i + 1] | this[i] << 8;
    return f & 32768 ? f | 4294901760 : f;
  }, c.prototype.readInt32LE = function(i, a) {
    return i = i >>> 0, a || W(i, 4, this.length), this[i] | this[i + 1] << 8 | this[i + 2] << 16 | this[i + 3] << 24;
  }, c.prototype.readInt32BE = function(i, a) {
    return i = i >>> 0, a || W(i, 4, this.length), this[i] << 24 | this[i + 1] << 16 | this[i + 2] << 8 | this[i + 3];
  }, c.prototype.readBigInt64LE = ve(function(i) {
    i = i >>> 0, ae(i, "offset");
    const a = this[i], f = this[i + 7];
    (a === void 0 || f === void 0) && Q(i, this.length - 8);
    const d = this[i + 4] + this[i + 5] * 2 ** 8 + this[i + 6] * 2 ** 16 + (f << 24);
    return (BigInt(d) << BigInt(32)) + BigInt(a + this[++i] * 2 ** 8 + this[++i] * 2 ** 16 + this[++i] * 2 ** 24);
  }), c.prototype.readBigInt64BE = ve(function(i) {
    i = i >>> 0, ae(i, "offset");
    const a = this[i], f = this[i + 7];
    (a === void 0 || f === void 0) && Q(i, this.length - 8);
    const d = (a << 24) + this[++i] * 2 ** 16 + this[++i] * 2 ** 8 + this[++i];
    return (BigInt(d) << BigInt(32)) + BigInt(this[++i] * 2 ** 24 + this[++i] * 2 ** 16 + this[++i] * 2 ** 8 + f);
  }), c.prototype.readFloatLE = function(i, a) {
    return i = i >>> 0, a || W(i, 4, this.length), n.read(this, i, true, 23, 4);
  }, c.prototype.readFloatBE = function(i, a) {
    return i = i >>> 0, a || W(i, 4, this.length), n.read(this, i, false, 23, 4);
  }, c.prototype.readDoubleLE = function(i, a) {
    return i = i >>> 0, a || W(i, 8, this.length), n.read(this, i, true, 52, 8);
  }, c.prototype.readDoubleBE = function(i, a) {
    return i = i >>> 0, a || W(i, 8, this.length), n.read(this, i, false, 52, 8);
  };
  function m(p, i, a, f, d, h) {
    if (!c.isBuffer(p))
      throw new TypeError('"buffer" argument must be a Buffer instance');
    if (i > d || i < h)
      throw new RangeError('"value" argument is out of bounds');
    if (a + f > p.length)
      throw new RangeError("Index out of range");
  }
  c.prototype.writeUintLE = c.prototype.writeUIntLE = function(i, a, f, d) {
    if (i = +i, a = a >>> 0, f = f >>> 0, !d) {
      const I = Math.pow(2, 8 * f) - 1;
      m(this, i, a, f, I, 0);
    }
    let h = 1, v = 0;
    for (this[a] = i & 255; ++v < f && (h *= 256); )
      this[a + v] = i / h & 255;
    return a + f;
  }, c.prototype.writeUintBE = c.prototype.writeUIntBE = function(i, a, f, d) {
    if (i = +i, a = a >>> 0, f = f >>> 0, !d) {
      const I = Math.pow(2, 8 * f) - 1;
      m(this, i, a, f, I, 0);
    }
    let h = f - 1, v = 1;
    for (this[a + h] = i & 255; --h >= 0 && (v *= 256); )
      this[a + h] = i / v & 255;
    return a + f;
  }, c.prototype.writeUint8 = c.prototype.writeUInt8 = function(i, a, f) {
    return i = +i, a = a >>> 0, f || m(this, i, a, 1, 255, 0), this[a] = i & 255, a + 1;
  }, c.prototype.writeUint16LE = c.prototype.writeUInt16LE = function(i, a, f) {
    return i = +i, a = a >>> 0, f || m(this, i, a, 2, 65535, 0), this[a] = i & 255, this[a + 1] = i >>> 8, a + 2;
  }, c.prototype.writeUint16BE = c.prototype.writeUInt16BE = function(i, a, f) {
    return i = +i, a = a >>> 0, f || m(this, i, a, 2, 65535, 0), this[a] = i >>> 8, this[a + 1] = i & 255, a + 2;
  }, c.prototype.writeUint32LE = c.prototype.writeUInt32LE = function(i, a, f) {
    return i = +i, a = a >>> 0, f || m(this, i, a, 4, 4294967295, 0), this[a + 3] = i >>> 24, this[a + 2] = i >>> 16, this[a + 1] = i >>> 8, this[a] = i & 255, a + 4;
  }, c.prototype.writeUint32BE = c.prototype.writeUInt32BE = function(i, a, f) {
    return i = +i, a = a >>> 0, f || m(this, i, a, 4, 4294967295, 0), this[a] = i >>> 24, this[a + 1] = i >>> 16, this[a + 2] = i >>> 8, this[a + 3] = i & 255, a + 4;
  };
  function w(p, i, a, f, d) {
    ce(i, f, d, p, a, 7);
    let h = Number(i & BigInt(4294967295));
    p[a++] = h, h = h >> 8, p[a++] = h, h = h >> 8, p[a++] = h, h = h >> 8, p[a++] = h;
    let v = Number(i >> BigInt(32) & BigInt(4294967295));
    return p[a++] = v, v = v >> 8, p[a++] = v, v = v >> 8, p[a++] = v, v = v >> 8, p[a++] = v, a;
  }
  function A(p, i, a, f, d) {
    ce(i, f, d, p, a, 7);
    let h = Number(i & BigInt(4294967295));
    p[a + 7] = h, h = h >> 8, p[a + 6] = h, h = h >> 8, p[a + 5] = h, h = h >> 8, p[a + 4] = h;
    let v = Number(i >> BigInt(32) & BigInt(4294967295));
    return p[a + 3] = v, v = v >> 8, p[a + 2] = v, v = v >> 8, p[a + 1] = v, v = v >> 8, p[a] = v, a + 8;
  }
  c.prototype.writeBigUInt64LE = ve(function(i, a = 0) {
    return w(this, i, a, BigInt(0), BigInt("0xffffffffffffffff"));
  }), c.prototype.writeBigUInt64BE = ve(function(i, a = 0) {
    return A(this, i, a, BigInt(0), BigInt("0xffffffffffffffff"));
  }), c.prototype.writeIntLE = function(i, a, f, d) {
    if (i = +i, a = a >>> 0, !d) {
      const G = Math.pow(2, 8 * f - 1);
      m(this, i, a, f, G - 1, -G);
    }
    let h = 0, v = 1, I = 0;
    for (this[a] = i & 255; ++h < f && (v *= 256); )
      i < 0 && I === 0 && this[a + h - 1] !== 0 && (I = 1), this[a + h] = (i / v >> 0) - I & 255;
    return a + f;
  }, c.prototype.writeIntBE = function(i, a, f, d) {
    if (i = +i, a = a >>> 0, !d) {
      const G = Math.pow(2, 8 * f - 1);
      m(this, i, a, f, G - 1, -G);
    }
    let h = f - 1, v = 1, I = 0;
    for (this[a + h] = i & 255; --h >= 0 && (v *= 256); )
      i < 0 && I === 0 && this[a + h + 1] !== 0 && (I = 1), this[a + h] = (i / v >> 0) - I & 255;
    return a + f;
  }, c.prototype.writeInt8 = function(i, a, f) {
    return i = +i, a = a >>> 0, f || m(this, i, a, 1, 127, -128), i < 0 && (i = 255 + i + 1), this[a] = i & 255, a + 1;
  }, c.prototype.writeInt16LE = function(i, a, f) {
    return i = +i, a = a >>> 0, f || m(this, i, a, 2, 32767, -32768), this[a] = i & 255, this[a + 1] = i >>> 8, a + 2;
  }, c.prototype.writeInt16BE = function(i, a, f) {
    return i = +i, a = a >>> 0, f || m(this, i, a, 2, 32767, -32768), this[a] = i >>> 8, this[a + 1] = i & 255, a + 2;
  }, c.prototype.writeInt32LE = function(i, a, f) {
    return i = +i, a = a >>> 0, f || m(this, i, a, 4, 2147483647, -2147483648), this[a] = i & 255, this[a + 1] = i >>> 8, this[a + 2] = i >>> 16, this[a + 3] = i >>> 24, a + 4;
  }, c.prototype.writeInt32BE = function(i, a, f) {
    return i = +i, a = a >>> 0, f || m(this, i, a, 4, 2147483647, -2147483648), i < 0 && (i = 4294967295 + i + 1), this[a] = i >>> 24, this[a + 1] = i >>> 16, this[a + 2] = i >>> 8, this[a + 3] = i & 255, a + 4;
  }, c.prototype.writeBigInt64LE = ve(function(i, a = 0) {
    return w(this, i, a, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
  }), c.prototype.writeBigInt64BE = ve(function(i, a = 0) {
    return A(this, i, a, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
  });
  function P(p, i, a, f, d, h) {
    if (a + f > p.length)
      throw new RangeError("Index out of range");
    if (a < 0)
      throw new RangeError("Index out of range");
  }
  function T(p, i, a, f, d) {
    return i = +i, a = a >>> 0, d || P(p, i, a, 4), n.write(p, i, a, f, 23, 4), a + 4;
  }
  c.prototype.writeFloatLE = function(i, a, f) {
    return T(this, i, a, true, f);
  }, c.prototype.writeFloatBE = function(i, a, f) {
    return T(this, i, a, false, f);
  };
  function D(p, i, a, f, d) {
    return i = +i, a = a >>> 0, d || P(p, i, a, 8), n.write(p, i, a, f, 52, 8), a + 8;
  }
  c.prototype.writeDoubleLE = function(i, a, f) {
    return D(this, i, a, true, f);
  }, c.prototype.writeDoubleBE = function(i, a, f) {
    return D(this, i, a, false, f);
  }, c.prototype.copy = function(i, a, f, d) {
    if (!c.isBuffer(i))
      throw new TypeError("argument should be a Buffer");
    if (f || (f = 0), !d && d !== 0 && (d = this.length), a >= i.length && (a = i.length), a || (a = 0), d > 0 && d < f && (d = f), d === f || i.length === 0 || this.length === 0)
      return 0;
    if (a < 0)
      throw new RangeError("targetStart out of bounds");
    if (f < 0 || f >= this.length)
      throw new RangeError("Index out of range");
    if (d < 0)
      throw new RangeError("sourceEnd out of bounds");
    d > this.length && (d = this.length), i.length - a < d - f && (d = i.length - a + f);
    const h = d - f;
    return this === i && typeof Uint8Array.prototype.copyWithin == "function" ? this.copyWithin(a, f, d) : Uint8Array.prototype.set.call(i, this.subarray(f, d), a), h;
  }, c.prototype.fill = function(i, a, f, d) {
    if (typeof i == "string") {
      if (typeof a == "string" ? (d = a, a = 0, f = this.length) : typeof f == "string" && (d = f, f = this.length), d !== void 0 && typeof d != "string")
        throw new TypeError("encoding must be a string");
      if (typeof d == "string" && !c.isEncoding(d))
        throw new TypeError("Unknown encoding: " + d);
      if (i.length === 1) {
        const v = i.charCodeAt(0);
        (d === "utf8" && v < 128 || d === "latin1") && (i = v);
      }
    } else
      typeof i == "number" ? i = i & 255 : typeof i == "boolean" && (i = Number(i));
    if (a < 0 || this.length < a || this.length < f)
      throw new RangeError("Out of range index");
    if (f <= a)
      return this;
    a = a >>> 0, f = f === void 0 ? this.length : f >>> 0, i || (i = 0);
    let h;
    if (typeof i == "number")
      for (h = a; h < f; ++h)
        this[h] = i;
    else {
      const v = c.isBuffer(i) ? i : c.from(i, d), I = v.length;
      if (I === 0)
        throw new TypeError('The value "' + i + '" is invalid for argument "value"');
      for (h = 0; h < f - a; ++h)
        this[h + a] = v[h % I];
    }
    return this;
  };
  const _ = {};
  function C(p, i, a) {
    _[p] = class extends a {
      constructor() {
        super(), Object.defineProperty(this, "message", { value: i.apply(this, arguments), writable: true, configurable: true }), this.name = `${this.name} [${p}]`, this.stack, delete this.name;
      }
      get code() {
        return p;
      }
      set code(d) {
        Object.defineProperty(this, "code", { configurable: true, enumerable: true, value: d, writable: true });
      }
      toString() {
        return `${this.name} [${p}]: ${this.message}`;
      }
    };
  }
  C("ERR_BUFFER_OUT_OF_BOUNDS", function(p) {
    return p ? `${p} is outside of buffer bounds` : "Attempt to access memory outside buffer bounds";
  }, RangeError), C("ERR_INVALID_ARG_TYPE", function(p, i) {
    return `The "${p}" argument must be of type number. Received type ${typeof i}`;
  }, TypeError), C("ERR_OUT_OF_RANGE", function(p, i, a) {
    let f = `The value of "${p}" is out of range.`, d = a;
    return Number.isInteger(a) && Math.abs(a) > 2 ** 32 ? d = M(String(a)) : typeof a == "bigint" && (d = String(a), (a > BigInt(2) ** BigInt(32) || a < -(BigInt(2) ** BigInt(32))) && (d = M(d)), d += "n"), f += ` It must be ${i}. Received ${d}`, f;
  }, RangeError);
  function M(p) {
    let i = "", a = p.length;
    const f = p[0] === "-" ? 1 : 0;
    for (; a >= f + 4; a -= 3)
      i = `_${p.slice(a - 3, a)}${i}`;
    return `${p.slice(0, a)}${i}`;
  }
  function J(p, i, a) {
    ae(i, "offset"), (p[i] === void 0 || p[i + a] === void 0) && Q(i, p.length - (a + 1));
  }
  function ce(p, i, a, f, d, h) {
    if (p > a || p < i) {
      const v = typeof i == "bigint" ? "n" : "";
      let I;
      throw h > 3 ? i === 0 || i === BigInt(0) ? I = `>= 0${v} and < 2${v} ** ${(h + 1) * 8}${v}` : I = `>= -(2${v} ** ${(h + 1) * 8 - 1}${v}) and < 2 ** ${(h + 1) * 8 - 1}${v}` : I = `>= ${i}${v} and <= ${a}${v}`, new _.ERR_OUT_OF_RANGE("value", I, p);
    }
    J(f, d, h);
  }
  function ae(p, i) {
    if (typeof p != "number")
      throw new _.ERR_INVALID_ARG_TYPE(i, "number", p);
  }
  function Q(p, i, a) {
    throw Math.floor(p) !== p ? (ae(p, a), new _.ERR_OUT_OF_RANGE(a || "offset", "an integer", p)) : i < 0 ? new _.ERR_BUFFER_OUT_OF_BOUNDS() : new _.ERR_OUT_OF_RANGE(a || "offset", `>= ${a ? 1 : 0} and <= ${i}`, p);
  }
  const Be = /[^+/0-9A-Za-z-_]/g;
  function rt(p) {
    if (p = p.split("=")[0], p = p.trim().replace(Be, ""), p.length < 2)
      return "";
    for (; p.length % 4 !== 0; )
      p = p + "=";
    return p;
  }
  function We(p, i) {
    i = i || 1 / 0;
    let a;
    const f = p.length;
    let d = null;
    const h = [];
    for (let v = 0; v < f; ++v) {
      if (a = p.charCodeAt(v), a > 55295 && a < 57344) {
        if (!d) {
          if (a > 56319) {
            (i -= 3) > -1 && h.push(239, 191, 189);
            continue;
          } else if (v + 1 === f) {
            (i -= 3) > -1 && h.push(239, 191, 189);
            continue;
          }
          d = a;
          continue;
        }
        if (a < 56320) {
          (i -= 3) > -1 && h.push(239, 191, 189), d = a;
          continue;
        }
        a = (d - 55296 << 10 | a - 56320) + 65536;
      } else
        d && (i -= 3) > -1 && h.push(239, 191, 189);
      if (d = null, a < 128) {
        if ((i -= 1) < 0)
          break;
        h.push(a);
      } else if (a < 2048) {
        if ((i -= 2) < 0)
          break;
        h.push(a >> 6 | 192, a & 63 | 128);
      } else if (a < 65536) {
        if ((i -= 3) < 0)
          break;
        h.push(a >> 12 | 224, a >> 6 & 63 | 128, a & 63 | 128);
      } else if (a < 1114112) {
        if ((i -= 4) < 0)
          break;
        h.push(a >> 18 | 240, a >> 12 & 63 | 128, a >> 6 & 63 | 128, a & 63 | 128);
      } else
        throw new Error("Invalid code point");
    }
    return h;
  }
  function Ot(p) {
    const i = [];
    for (let a = 0; a < p.length; ++a)
      i.push(p.charCodeAt(a) & 255);
    return i;
  }
  function b(p, i) {
    let a, f, d;
    const h = [];
    for (let v = 0; v < p.length && !((i -= 2) < 0); ++v)
      a = p.charCodeAt(v), f = a >> 8, d = a % 256, h.push(d), h.push(f);
    return h;
  }
  function it(p) {
    return e.toByteArray(rt(p));
  }
  function Ge(p, i, a, f) {
    let d;
    for (d = 0; d < f && !(d + a >= i.length || d >= p.length); ++d)
      i[d + a] = p[d];
    return d;
  }
  function le(p, i) {
    return p instanceof i || p != null && p.constructor != null && p.constructor.name != null && p.constructor.name === i.name;
  }
  function Bt(p) {
    return p !== p;
  }
  const vi = function() {
    const p = "0123456789abcdef", i = new Array(256);
    for (let a = 0; a < 16; ++a) {
      const f = a * 16;
      for (let d = 0; d < 16; ++d)
        i[f + d] = p[a] + p[d];
    }
    return i;
  }();
  function ve(p) {
    return typeof BigInt > "u" ? wi : p;
  }
  function wi() {
    throw new Error("BigInt not supported");
  }
})(Ur);
(function(t3, e) {
  var n = Ur, o = n.Buffer;
  function s(r, c) {
    for (var u in r)
      c[u] = r[u];
  }
  o.from && o.alloc && o.allocUnsafe && o.allocUnsafeSlow ? t3.exports = n : (s(n, e), e.Buffer = l);
  function l(r, c, u) {
    return o(r, c, u);
  }
  l.prototype = Object.create(o.prototype), s(o, l), l.from = function(r, c, u) {
    if (typeof r == "number")
      throw new TypeError("Argument must not be a number");
    return o(r, c, u);
  }, l.alloc = function(r, c, u) {
    if (typeof r != "number")
      throw new TypeError("Argument must be a number");
    var y = o(r);
    return c !== void 0 ? typeof u == "string" ? y.fill(c, u) : y.fill(c) : y.fill(0), y;
  }, l.allocUnsafe = function(r) {
    if (typeof r != "number")
      throw new TypeError("Argument must be a number");
    return o(r);
  }, l.allocUnsafeSlow = function(r) {
    if (typeof r != "number")
      throw new TypeError("Argument must be a number");
    return n.SlowBuffer(r);
  };
})(on, on.exports);
var Lt = 65536;
var xo = 4294967295;
function go() {
  throw new Error(`Secure random number generation is not supported by this browser.
Use Chrome, Firefox or Internet Explorer 11`);
}
var vo = on.exports.Buffer;
var xt = Ze.crypto || Ze.msCrypto;
xt && xt.getRandomValues ? an.exports = wo : an.exports = go;
function wo(t3, e) {
  if (t3 > xo)
    throw new RangeError("requested too many random bytes");
  var n = vo.allocUnsafe(t3);
  if (t3 > 0)
    if (t3 > Lt)
      for (var o = 0; o < t3; o += Lt)
        xt.getRandomValues(n.slice(o, o + Lt));
    else
      xt.getRandomValues(n);
  return typeof e == "function" ? process.nextTick(function() {
    e(null, n);
  }) : n;
}
var bo = an.exports;
var Mn = 16;
var oe = Bo();
var Ao = new RegExp('(\\\\)?"@__(F|R|D|M|S|A|U|I|B|L)-' + oe + '-(\\d+)__@"', "g");
var Eo = /\{\s*\[native code\]\s*\}/g;
var So = /function.*?\(/;
var Fo = /.*?=>.*?/;
var $o = /[<>\/\u2028\u2029]/g;
var jo = ["*", "async"];
var ko = { "<": "\\u003C", ">": "\\u003E", "/": "\\u002F", "\u2028": "\\u2028", "\u2029": "\\u2029" };
function Oo(t3) {
  return ko[t3];
}
function Bo() {
  for (var t3 = bo(Mn), e = "", n = 0; n < Mn; ++n)
    e += t3[n].toString(16);
  return e;
}
function Po(t3) {
  var e = [];
  for (var n in t3)
    typeof t3[n] == "function" && e.push(n);
  for (var o = 0; o < e.length; o++)
    delete t3[e[o]];
}
var _o = function t2(e, n) {
  n || (n = {}), (typeof n == "number" || typeof n == "string") && (n = { space: n });
  var o = [], s = [], l = [], r = [], c = [], u = [], y = [], x = [], g = [], E = [];
  function j(B, $) {
    if (n.ignoreFunction && Po($), !$ && $ !== void 0)
      return $;
    var S = this[B], k = typeof S;
    if (k === "object") {
      if (S instanceof RegExp)
        return "@__R-" + oe + "-" + (s.push(S) - 1) + "__@";
      if (S instanceof Date)
        return "@__D-" + oe + "-" + (l.push(S) - 1) + "__@";
      if (S instanceof Map)
        return "@__M-" + oe + "-" + (r.push(S) - 1) + "__@";
      if (S instanceof Set)
        return "@__S-" + oe + "-" + (c.push(S) - 1) + "__@";
      if (S instanceof Array) {
        var z = S.filter(function() {
          return true;
        }).length !== S.length;
        if (z)
          return "@__A-" + oe + "-" + (u.push(S) - 1) + "__@";
      }
      if (S instanceof URL)
        return "@__L-" + oe + "-" + (E.push(S) - 1) + "__@";
    }
    return k === "function" ? "@__F-" + oe + "-" + (o.push(S) - 1) + "__@" : k === "undefined" ? "@__U-" + oe + "-" + (y.push(S) - 1) + "__@" : k === "number" && !isNaN(S) && !isFinite(S) ? "@__I-" + oe + "-" + (x.push(S) - 1) + "__@" : k === "bigint" ? "@__B-" + oe + "-" + (g.push(S) - 1) + "__@" : $;
  }
  function O(B) {
    var $ = B.toString();
    if (Eo.test($))
      throw new TypeError("Serializing native function: " + B.name);
    if (So.test($) || Fo.test($))
      return $;
    var S = $.indexOf("("), k = $.substr(0, S).trim().split(" ").filter(function(R) {
      return R.length > 0;
    }), z = k.filter(function(R) {
      return jo.indexOf(R) === -1;
    });
    return z.length > 0 ? (k.indexOf("async") > -1 ? "async " : "") + "function" + (k.join("").indexOf("*") > -1 ? "*" : "") + $.substr(S) : $;
  }
  if (n.ignoreFunction && typeof e == "function" && (e = void 0), e === void 0)
    return String(e);
  var F;
  return n.isJSON && !n.space ? F = JSON.stringify(e) : F = JSON.stringify(e, n.isJSON ? null : j, n.space), typeof F != "string" ? String(F) : (n.unsafe !== true && (F = F.replace($o, Oo)), o.length === 0 && s.length === 0 && l.length === 0 && r.length === 0 && c.length === 0 && u.length === 0 && y.length === 0 && x.length === 0 && g.length === 0 && E.length === 0 ? F : F.replace(Ao, function(B, $, S, k) {
    if ($)
      return B;
    if (S === "D")
      return 'new Date("' + l[k].toISOString() + '")';
    if (S === "R")
      return "new RegExp(" + t2(s[k].source) + ', "' + s[k].flags + '")';
    if (S === "M")
      return "new Map(" + t2(Array.from(r[k].entries()), n) + ")";
    if (S === "S")
      return "new Set(" + t2(Array.from(c[k].values()), n) + ")";
    if (S === "A")
      return "Array.prototype.slice.call(" + t2(Object.assign({ length: u[k].length }, u[k]), n) + ")";
    if (S === "U")
      return "undefined";
    if (S === "I")
      return x[k];
    if (S === "B")
      return 'BigInt("' + g[k] + '")';
    if (S === "L")
      return 'new URL("' + E[k].toString() + '")';
    var z = o[k];
    return O(z);
  }));
};
function Dr(t3) {
  return _o(t3);
}
var Nn = ["load", "idle", "media", "visible", "only"];
function Io(t3) {
  let e = { hydration: null, props: {} };
  for (const [n, o] of Object.entries(t3))
    if (n.startsWith("client:"))
      switch (e.hydration || (e.hydration = { directive: "", value: "", componentUrl: "", componentExport: { value: "" } }), n) {
        case "client:component-path": {
          e.hydration.componentUrl = o;
          break;
        }
        case "client:component-export": {
          e.hydration.componentExport.value = o;
          break;
        }
        case "client:component-hydration":
          break;
        default: {
          if (e.hydration.directive = n.split(":")[1], e.hydration.value = o, Nn.indexOf(e.hydration.directive) < 0)
            throw new Error(`Error: invalid hydration directive "${n}". Supported hydration methods: ${Nn.map((s) => `"client:${s}"`).join(", ")}`);
          if (e.hydration.directive === "media" && typeof e.hydration.value != "string")
            throw new Error('Error: Media query must be provided for "client:media", similar to client:media="(max-width: 600px)"');
          break;
        }
      }
    else
      n === "class:list" ? e.props[n.slice(0, -5)] = Cr(o) : e.props[n] = o;
  return e;
}
async function Co(t3, e) {
  const { renderer: n, result: o, astroId: s, props: l } = t3, { hydrate: r, componentUrl: c, componentExport: u } = e;
  if (!u)
    throw new Error(`Unable to resolve a componentExport for "${e.displayName}"! Please open an issue.`);
  const y = n.clientEntrypoint ? `const [{ ${u.value}: Component }, { default: hydrate }] = await Promise.all([import("${await o.resolve(c)}"), import("${await o.resolve(n.clientEntrypoint)}")]);
  return (el, children) => hydrate(el)(Component, ${Dr(l)}, children, ${JSON.stringify({ client: r })});
` : `await import("${await o.resolve(c)}");
  return () => {};
`;
  return { props: { type: "module", "data-astro-component-hydration": true }, children: `import setup from '${await o.resolve(Tr(r))}';
${`import '${await o.resolve("astro:scripts/before-hydration.js")}';`}
setup("${s}", {name:"${e.displayName}",${e.hydrateArgs ? `value: ${JSON.stringify(e.hydrateArgs)}` : ""}}, async () => {
  ${y}
});
` };
}
var sn = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXY";
var Wt = sn.length;
function To(t3) {
  let e = 0;
  if (t3.length === 0)
    return e;
  for (let n = 0; n < t3.length; n++) {
    const o = t3.charCodeAt(n);
    e = (e << 5) - e + o, e = e & e;
  }
  return e;
}
function Uo(t3) {
  let e, n = "", o = To(t3);
  const s = o < 0 ? "Z" : "";
  for (o = Math.abs(o); o >= Wt; )
    e = o % Wt, o = Math.floor(o / Wt), n = sn[e] + n;
  return o > 0 && (n = sn[o] + n), s + n;
}
var Ro = class {
  constructor(e, n) {
    this.modules = n.modules, this.hoisted = n.hoisted, this.hydratedComponents = n.hydratedComponents, this.clientOnlyComponents = n.clientOnlyComponents, this.hydrationDirectives = n.hydrationDirectives, this.mockURL = new URL(e, "http://example.com"), this.metadataCache = /* @__PURE__ */ new Map();
  }
  resolvePath(e) {
    return e.startsWith(".") ? new URL(e, this.mockURL).pathname : e;
  }
  getPath(e) {
    const n = this.getComponentMetadata(e);
    return n?.componentUrl || null;
  }
  getExport(e) {
    const n = this.getComponentMetadata(e);
    return n?.componentExport || null;
  }
  *hydratedComponentPaths() {
    const e = /* @__PURE__ */ new Set();
    for (const n of this.deepMetadata())
      for (const o of n.hydratedComponents) {
        const s = n.getPath(o);
        s && !e.has(s) && (e.add(s), yield s);
      }
  }
  *clientOnlyComponentPaths() {
    const e = /* @__PURE__ */ new Set();
    for (const n of this.deepMetadata())
      for (const o of n.clientOnlyComponents) {
        const s = n.resolvePath(o);
        s && !e.has(s) && (e.add(s), yield s);
      }
  }
  *hydrationDirectiveSpecifiers() {
    const e = /* @__PURE__ */ new Set();
    for (const n of this.deepMetadata())
      for (const o of n.hydrationDirectives)
        e.has(o) || (e.add(o), yield Tr(o));
  }
  *hoistedScriptPaths() {
    for (const e of this.deepMetadata()) {
      let n = 0, o = e.mockURL.pathname;
      for (; n < e.hoisted.length; )
        yield `${o.replace("/@fs", "")}?astro&type=script&index=${n}`, n++;
    }
  }
  *deepMetadata() {
    yield this;
    const e = /* @__PURE__ */ new Set();
    for (const { module: n } of this.modules)
      if (typeof n.$$metadata < "u") {
        const o = n.$$metadata;
        for (const s of o.deepMetadata())
          e.has(s) || (e.add(s), yield s);
      }
  }
  getComponentMetadata(e) {
    if (this.metadataCache.has(e))
      return this.metadataCache.get(e);
    const n = this.findComponentMetadata(e);
    return this.metadataCache.set(e, n), n;
  }
  findComponentMetadata(e) {
    const n = typeof e == "string";
    for (const { module: o, specifier: s } of this.modules) {
      const l = this.resolvePath(s);
      for (const [r, c] of Object.entries(o))
        if (n) {
          if (r === "tagName" && e === c)
            return { componentExport: r, componentUrl: l };
        } else if (e === c)
          return { componentExport: r, componentUrl: l };
    }
    return null;
  }
};
function bn(t3, e) {
  return new Ro(t3, e);
}
var zn = Object.getOwnPropertySymbols;
var Do = Object.prototype.hasOwnProperty;
var Mo = Object.prototype.propertyIsEnumerable;
var No = (t3, e) => {
  var n = {};
  for (var o in t3)
    Do.call(t3, o) && e.indexOf(o) < 0 && (n[o] = t3[o]);
  if (t3 != null && zn)
    for (var o of zn(t3))
      e.indexOf(o) < 0 && Mo.call(t3, o) && (n[o] = t3[o]);
  return n;
};
var Mr = /^(area|base|br|col|command|embed|hr|img|input|keygen|link|meta|param|source|track|wbr)$/i;
var zo = /^(allowfullscreen|async|autofocus|autoplay|controls|default|defer|disabled|disablepictureinpicture|disableremoteplayback|formnovalidate|hidden|loop|nomodule|novalidate|open|playsinline|readonly|required|reversed|scoped|seamless|itemscope)$/i;
var Lo = /^(contenteditable|draggable|spellcheck|value)$/i;
var Wo = /^(autoReverse|externalResourcesRequired|focusable|preserveAlpha)$/i;
async function et(t3) {
  if (t3 = await t3, t3 instanceof rn)
    return t3;
  if (Array.isArray(t3))
    return q((await Promise.all(t3.map((e) => et(e)))).join(""));
  if (typeof t3 == "function")
    return et(t3());
  if (typeof t3 == "string")
    return q(so(t3));
  if (!(!t3 && t3 !== 0))
    return t3 instanceof Nr || Object.prototype.toString.call(t3) === "[object AstroComponent]" ? q(await St(t3)) : t3;
}
var Nr = class {
  constructor(e, n) {
    this.htmlParts = e, this.expressions = n;
  }
  get [Symbol.toStringTag]() {
    return "AstroComponent";
  }
  *[Symbol.iterator]() {
    const { htmlParts: e, expressions: n } = this;
    for (let o = 0; o < e.length; o++) {
      const s = e[o], l = n[o];
      yield q(s), yield et(l);
    }
  }
};
function zr(t3) {
  return typeof t3 == "object" && Object.prototype.toString.call(t3) === "[object AstroComponent]";
}
async function ke(t3, ...e) {
  return new Nr(t3, e);
}
function An(t3) {
  return t3.isAstroComponentFactory = true, t3;
}
async function je(t3, e, n) {
  return e ? await et(e) : n;
}
var Go = Symbol("Astro.Fragment");
function Ho(t3) {
  switch (t3?.split(".").pop()) {
    case "svelte":
      return ["@astrojs/svelte"];
    case "vue":
      return ["@astrojs/vue"];
    case "jsx":
    case "tsx":
      return ["@astrojs/react", "@astrojs/preact"];
    default:
      return ["@astrojs/react", "@astrojs/preact", "@astrojs/vue", "@astrojs/svelte"];
  }
}
function Gt(t3) {
  return t3.length === 1 ? t3[0] : `${t3.slice(0, -1).join(", ")} or ${t3[t3.length - 1]}`;
}
async function Se(t3, e, n, o, s = {}) {
  var l;
  if (n = await n, n === Go) {
    const $ = await je(t3, s?.default);
    return $ == null ? $ : q($);
  }
  if (n && n.isAstroComponentFactory) {
    const $ = await Qo(t3, n, o, s);
    return q($);
  }
  if (n === null && !o["client:only"])
    throw new Error(`Unable to render ${e} because it is ${n}!
Did you forget to import the component or is it possible there is a typo?`);
  const { renderers: r } = t3._metadata, c = { displayName: e }, { hydration: u, props: y } = Io(o);
  let x = "";
  u && (c.hydrate = u.directive, c.hydrateArgs = u.value, c.componentExport = u.componentExport, c.componentUrl = u.componentUrl);
  const g = Ho(c.componentUrl);
  if (Array.isArray(r) && r.length === 0 && typeof n != "string" && !Wn(n)) {
    const $ = `Unable to render ${c.displayName}!

There are no \`integrations\` set in your \`astro.config.mjs\` file.
Did you mean to add ${Gt(g.map((S) => "`" + S + "`"))}?`;
    throw new Error($);
  }
  const E = await je(t3, s?.default);
  let j;
  if (c.hydrate !== "only") {
    let $;
    for (const S of r)
      try {
        if (await S.ssr.check(n, y, E)) {
          j = S;
          break;
        }
      } catch (k) {
        $ ?? ($ = k);
      }
    if ($)
      throw $;
    if (!j && typeof HTMLElement == "function" && Wn(n))
      return ts(t3, n, o, s);
  } else {
    if (c.hydrateArgs) {
      const $ = c.hydrateArgs;
      j = r.filter(({ name: S }) => S === `@astrojs/${$}` || S === $)[0];
    }
    if (!j && r.length === 1 && (j = r[0]), !j) {
      const $ = (l = c.componentUrl) == null ? void 0 : l.split(".").pop();
      j = r.filter(({ name: S }) => S === `@astrojs/${$}` || S === $)[0];
    }
  }
  if (j)
    c.hydrate === "only" ? x = await je(t3, s?.fallback) : { html: x } = await j.ssr.renderToStaticMarkup(n, y, E, c);
  else {
    if (c.hydrate === "only")
      throw new Error(`Unable to render ${c.displayName}!

Using the \`client:only\` hydration strategy, Astro needs a hint to use the correct renderer.
Did you mean to pass <${c.displayName} client:only="${g.map(($) => $.replace("@astrojs/", "")).join("|")}" />
`);
    if (typeof n != "string") {
      const $ = r.filter((k) => g.includes(k.name)), S = r.length > 1;
      if ($.length === 0)
        throw new Error(`Unable to render ${c.displayName}!

There ${S ? "are" : "is"} ${r.length} renderer${S ? "s" : ""} configured in your \`astro.config.mjs\` file,
but ${S ? "none were" : "it was not"} able to server-side render ${c.displayName}.

Did you mean to enable ${Gt(g.map((k) => "`" + k + "`"))}?`);
      if ($.length === 1)
        j = $[0], { html: x } = await j.ssr.renderToStaticMarkup(n, y, E, c);
      else
        throw new Error(`Unable to render ${c.displayName}!

This component likely uses ${Gt(g)},
but Astro encountered an error during server-side rendering.

Please ensure that ${c.displayName}:
1. Does not unconditionally access browser-specific globals like \`window\` or \`document\`.
   If this is unavoidable, use the \`client:only\` hydration directive.
2. Does not conditionally return \`null\` or \`undefined\` when rendered on the server.

If you're still stuck, please open an issue on GitHub or join us at https://astro.build/chat.`);
    }
  }
  if (!x && typeof n == "string" && (x = await St(await ke`<${n}${cn(y)}${q((E == null || E == "") && Mr.test(n) ? "/>" : `>${E ?? ""}</${n}>`)}`)), !u)
    return q(x.replace(/\<\/?astro-fragment\>/g, ""));
  const O = Uo(`<!--${c.componentExport.value}:${c.componentUrl}-->
${x}
${Dr(y)}`);
  t3.scripts.add(await Co({ renderer: j, result: t3, astroId: O, props: y }, c));
  const F = E && !/<\/?astro-fragment\>/.test(x), B = F ? `<template data-astro-template>${E}</template>` : "";
  return q(`<astro-root ssr uid="${O}"${F ? " tmpl" : ""}>${x ?? ""}${B}</astro-root>`);
}
function qo() {
  return () => {
    throw new Error("Deprecated: Astro.fetchContent() has been replaced with Astro.glob().");
  };
}
function Vo() {
  return (e, n) => {
    let o = [...Object.values(e)];
    if (o.length === 0)
      throw new Error(`Astro.glob(${JSON.stringify(n())}) - no matches found.`);
    return Promise.all(o.map((s) => s()));
  };
}
function En(t3, e, n) {
  const o = new URL(e), s = new URL(t3, o), l = new URL(n);
  return { site: o, fetchContent: qo(), glob: Vo(), resolve(...r) {
    let c = r.reduce((u, y) => new URL(y, u), s).pathname;
    return c.startsWith(l.pathname) && (c = "/" + c.slice(l.pathname.length)), c;
  } };
}
var pn = (t3, e = true) => e ? String(t3).replace(/&/g, "&#38;").replace(/"/g, "&#34;") : t3;
var Jo = /* @__PURE__ */ new Set(["set:html", "set:text"]);
function be(t3, e, n = true) {
  return t3 == null ? "" : t3 === false ? Lo.test(e) || Wo.test(e) ? q(` ${e}="false"`) : "" : Jo.has(e) ? (console.warn(`[astro] The "${e}" directive cannot be applied dynamically at runtime. It will not be rendered as an attribute.

Make sure to use the static attribute syntax (\`${e}={value}\`) instead of the dynamic spread syntax (\`{...{ "${e}": value }}\`).`), "") : e === "class:list" ? q(` ${e.slice(0, -5)}="${pn(Cr(t3))}"`) : t3 === true && (e.startsWith("data-") || zo.test(e)) ? q(` ${e}`) : q(` ${e}="${pn(t3, n)}"`);
}
function cn(t3, e = true) {
  let n = "";
  for (const [o, s] of Object.entries(t3))
    n += be(s, o, e);
  return q(n);
}
function Ln(t3, e) {
  let n = `
`;
  for (const [o, s] of Object.entries(e))
    n += `  --${o}: ${s};
`;
  return q(`${t3} {${n}}`);
}
function Yo(t3) {
  let e = "";
  for (const [n, o] of Object.entries(t3))
    e += `let ${n} = ${JSON.stringify(o)};
`;
  return q(e);
}
function Xo(t3, e) {
  if (t3[e])
    return t3[e];
  if (e === "delete" && t3.del)
    return t3.del;
  if (t3.all)
    return t3.all;
}
async function Ko(t3, e, n) {
  var o;
  const s = (o = e.method) == null ? void 0 : o.toLowerCase(), l = Xo(t3, s);
  if (!l || typeof l != "function")
    throw new Error(`Endpoint handler not found! Expected an exported function for "${s}"`);
  l.length > 1 && console.warn(`
API routes with 2 arguments have been deprecated. Instead they take a single argument in the form of:

export function get({ params, request }) {
	//...
}

Update your code to remove this warning.`);
  const r = { request: e, params: n }, c = new Proxy(r, { get(u, y) {
    return y in u ? Reflect.get(u, y) : y in n ? (console.warn(`
API routes no longer pass params as the first argument. Instead an object containing a params property is provided in the form of:

export function get({ params }) {
	// ...
}

Update your code to remove this warning.`), Reflect.get(n, y)) : void 0;
  } });
  return l.call(t3, c, e);
}
async function Zo(t3, e) {
  let n = e;
  return n.indexOf("<!--astro:head-->") > -1 && (n = n.replace("<!--astro:head-->", await Lr(t3))), n;
}
async function Qo(t3, e, n, o) {
  const s = await e(t3, n, o);
  if (!zr(s))
    throw s;
  return await St(s);
}
async function es(t3, e, n, o) {
  try {
    const s = await e(t3, n, o);
    if (zr(s)) {
      let l = await St(s);
      const r = await Zo(t3, l);
      return { type: "html", html: r };
    } else
      return { type: "response", response: s };
  } catch (s) {
    if (s instanceof Response)
      return { type: "response", response: s };
    throw s;
  }
}
var Ht = (t3, e, n) => {
  const o = JSON.stringify(t3.props), s = t3.children;
  return e === n.findIndex((l) => JSON.stringify(l.props) === o && l.children == s);
};
async function Lr(t3) {
  const e = Array.from(t3.styles).filter(Ht).map((l) => at("style", l));
  let n = false;
  const o = Array.from(t3.scripts).filter(Ht).map((l, r) => ("data-astro-component-hydration" in l.props && (n = true), at("script", l)));
  n && e.push(at("style", { props: {}, children: "astro-root, astro-fragment { display: contents; }" }));
  const s = Array.from(t3.links).filter(Ht).map((l) => at("link", l, false));
  return q(s.join(`
`) + e.join(`
`) + o.join(`
`) + `
<!--astro:head:injected-->`);
}
async function St(t3) {
  let e = [];
  for await (const n of t3)
    (n || n === 0) && e.push(n);
  return q(await et(e));
}
function Wn(t3) {
  return typeof HTMLElement < "u" && HTMLElement.isPrototypeOf(t3);
}
async function ts(t3, e, n, o) {
  const s = ns(e);
  let l = "";
  for (const r in n)
    l += ` ${r}="${pn(await n[r])}"`;
  return q(`<${s}${l}>${await je(t3, o?.default)}</${s}>`);
}
function ns(t3) {
  const e = customElements.getName(t3);
  return e || t3.name.replace(/^HTML|Element$/g, "").replace(/[A-Z]/g, "-$&").toLowerCase().replace(/^-/, "html-");
}
function at(t3, { props: e, children: n = "" }, o = true) {
  const s = e, { lang: l, "data-astro-id": r, "define:vars": c } = s, u = No(s, ["lang", "data-astro-id", "define:vars"]);
  return c && (t3 === "style" && (u["is:global"] ? n = Ln(":root", c) + `
` + n : n = Ln(`.astro-${r}`, c) + `
` + n, delete u["is:global"], delete u["is:scoped"]), t3 === "script" && (delete u.hoist, n = Yo(c) + `
` + n)), (n == null || n == "") && Mr.test(t3) ? `<${t3}${cn(u, o)} />` : `<${t3}${cn(u, o)}>${n}</${t3}>`;
}
var rs = ["string", "number", "undefined"];
function is([t3, e]) {
  if (!rs.includes(typeof e))
    throw new Error(`[getStaticPaths] invalid route parameter for "${t3}". Expected a string or number, received \`${e}\` ("${typeof e}")`);
}
function as(t3, { ssr: e }) {
  if (t3.createCollection)
    throw new Error("[createCollection] deprecated. Please use getStaticPaths() instead.");
  if (!t3.getStaticPaths && !e)
    throw new Error("[getStaticPaths] getStaticPaths() function is required. Make sure that you `export` the function from your component.");
}
function os(t3, e) {
  if (!Array.isArray(t3))
    throw new Error(`[getStaticPaths] invalid return value. Expected an array of path objects, but got \`${JSON.stringify(t3)}\`.`);
  t3.forEach((n) => {
    if (!n.params) {
      Ye(e, "getStaticPaths", `invalid path object. Expected an object with key \`params\`, but got \`${JSON.stringify(n)}\`. Skipped.`);
      return;
    }
    for (const [o, s] of Object.entries(n.params))
      typeof s > "u" || typeof s == "string" || Ye(e, "getStaticPaths", `invalid path param: ${o}. A string value was expected, but got \`${JSON.stringify(s)}\`.`), s === "" && Ye(e, "getStaticPaths", `invalid path param: ${o}. \`undefined\` expected for an optional param, but got empty string.`);
  });
}
function ss(t3) {
  return (n) => {
    const o = {};
    return t3.forEach((s, l) => {
      s.startsWith("...") ? o[s.slice(3)] = n[l + 1] ? decodeURIComponent(n[l + 1]) : void 0 : o[s] = decodeURIComponent(n[l + 1]);
    }), o;
  };
}
function Wr(t3) {
  const e = Object.entries(t3).reduce((n, o) => {
    is(o);
    const [s, l] = o;
    return n[s] = `${l}`, n;
  }, {});
  return JSON.stringify(e, Object.keys(t3).sort());
}
function fe(t3) {
  if (typeof t3 != "string")
    throw new TypeError("Path must be a string. Received " + JSON.stringify(t3));
}
function Gn(t3, e) {
  for (var n = "", o = 0, s = -1, l = 0, r, c = 0; c <= t3.length; ++c) {
    if (c < t3.length)
      r = t3.charCodeAt(c);
    else {
      if (r === 47)
        break;
      r = 47;
    }
    if (r === 47) {
      if (!(s === c - 1 || l === 1))
        if (s !== c - 1 && l === 2) {
          if (n.length < 2 || o !== 2 || n.charCodeAt(n.length - 1) !== 46 || n.charCodeAt(n.length - 2) !== 46) {
            if (n.length > 2) {
              var u = n.lastIndexOf("/");
              if (u !== n.length - 1) {
                u === -1 ? (n = "", o = 0) : (n = n.slice(0, u), o = n.length - 1 - n.lastIndexOf("/")), s = c, l = 0;
                continue;
              }
            } else if (n.length === 2 || n.length === 1) {
              n = "", o = 0, s = c, l = 0;
              continue;
            }
          }
          e && (n.length > 0 ? n += "/.." : n = "..", o = 2);
        } else
          n.length > 0 ? n += "/" + t3.slice(s + 1, c) : n = t3.slice(s + 1, c), o = c - s - 1;
      s = c, l = 0;
    } else
      r === 46 && l !== -1 ? ++l : l = -1;
  }
  return n;
}
function ps(t3, e) {
  var n = e.dir || e.root, o = e.base || (e.name || "") + (e.ext || "");
  return n ? n === e.root ? n + o : n + t3 + o : o;
}
var De = { resolve: function() {
  for (var e = "", n = false, o, s = arguments.length - 1; s >= -1 && !n; s--) {
    var l;
    s >= 0 ? l = arguments[s] : (o === void 0 && (o = process.cwd()), l = o), fe(l), l.length !== 0 && (e = l + "/" + e, n = l.charCodeAt(0) === 47);
  }
  return e = Gn(e, !n), n ? e.length > 0 ? "/" + e : "/" : e.length > 0 ? e : ".";
}, normalize: function(e) {
  if (fe(e), e.length === 0)
    return ".";
  var n = e.charCodeAt(0) === 47, o = e.charCodeAt(e.length - 1) === 47;
  return e = Gn(e, !n), e.length === 0 && !n && (e = "."), e.length > 0 && o && (e += "/"), n ? "/" + e : e;
}, isAbsolute: function(e) {
  return fe(e), e.length > 0 && e.charCodeAt(0) === 47;
}, join: function() {
  if (arguments.length === 0)
    return ".";
  for (var e, n = 0; n < arguments.length; ++n) {
    var o = arguments[n];
    fe(o), o.length > 0 && (e === void 0 ? e = o : e += "/" + o);
  }
  return e === void 0 ? "." : De.normalize(e);
}, relative: function(e, n) {
  if (fe(e), fe(n), e === n || (e = De.resolve(e), n = De.resolve(n), e === n))
    return "";
  for (var o = 1; o < e.length && e.charCodeAt(o) === 47; ++o)
    ;
  for (var s = e.length, l = s - o, r = 1; r < n.length && n.charCodeAt(r) === 47; ++r)
    ;
  for (var c = n.length, u = c - r, y = l < u ? l : u, x = -1, g = 0; g <= y; ++g) {
    if (g === y) {
      if (u > y) {
        if (n.charCodeAt(r + g) === 47)
          return n.slice(r + g + 1);
        if (g === 0)
          return n.slice(r + g);
      } else
        l > y && (e.charCodeAt(o + g) === 47 ? x = g : g === 0 && (x = 0));
      break;
    }
    var E = e.charCodeAt(o + g), j = n.charCodeAt(r + g);
    if (E !== j)
      break;
    E === 47 && (x = g);
  }
  var O = "";
  for (g = o + x + 1; g <= s; ++g)
    (g === s || e.charCodeAt(g) === 47) && (O.length === 0 ? O += ".." : O += "/..");
  return O.length > 0 ? O + n.slice(r + x) : (r += x, n.charCodeAt(r) === 47 && ++r, n.slice(r));
}, _makeLong: function(e) {
  return e;
}, dirname: function(e) {
  if (fe(e), e.length === 0)
    return ".";
  for (var n = e.charCodeAt(0), o = n === 47, s = -1, l = true, r = e.length - 1; r >= 1; --r)
    if (n = e.charCodeAt(r), n === 47) {
      if (!l) {
        s = r;
        break;
      }
    } else
      l = false;
  return s === -1 ? o ? "/" : "." : o && s === 1 ? "//" : e.slice(0, s);
}, basename: function(e, n) {
  if (n !== void 0 && typeof n != "string")
    throw new TypeError('"ext" argument must be a string');
  fe(e);
  var o = 0, s = -1, l = true, r;
  if (n !== void 0 && n.length > 0 && n.length <= e.length) {
    if (n.length === e.length && n === e)
      return "";
    var c = n.length - 1, u = -1;
    for (r = e.length - 1; r >= 0; --r) {
      var y = e.charCodeAt(r);
      if (y === 47) {
        if (!l) {
          o = r + 1;
          break;
        }
      } else
        u === -1 && (l = false, u = r + 1), c >= 0 && (y === n.charCodeAt(c) ? --c === -1 && (s = r) : (c = -1, s = u));
    }
    return o === s ? s = u : s === -1 && (s = e.length), e.slice(o, s);
  } else {
    for (r = e.length - 1; r >= 0; --r)
      if (e.charCodeAt(r) === 47) {
        if (!l) {
          o = r + 1;
          break;
        }
      } else
        s === -1 && (l = false, s = r + 1);
    return s === -1 ? "" : e.slice(o, s);
  }
}, extname: function(e) {
  fe(e);
  for (var n = -1, o = 0, s = -1, l = true, r = 0, c = e.length - 1; c >= 0; --c) {
    var u = e.charCodeAt(c);
    if (u === 47) {
      if (!l) {
        o = c + 1;
        break;
      }
      continue;
    }
    s === -1 && (l = false, s = c + 1), u === 46 ? n === -1 ? n = c : r !== 1 && (r = 1) : n !== -1 && (r = -1);
  }
  return n === -1 || s === -1 || r === 0 || r === 1 && n === s - 1 && n === o + 1 ? "" : e.slice(n, s);
}, format: function(e) {
  if (e === null || typeof e != "object")
    throw new TypeError('The "pathObject" argument must be of type Object. Received type ' + typeof e);
  return ps("/", e);
}, parse: function(e) {
  fe(e);
  var n = { root: "", dir: "", base: "", ext: "", name: "" };
  if (e.length === 0)
    return n;
  var o = e.charCodeAt(0), s = o === 47, l;
  s ? (n.root = "/", l = 1) : l = 0;
  for (var r = -1, c = 0, u = -1, y = true, x = e.length - 1, g = 0; x >= l; --x) {
    if (o = e.charCodeAt(x), o === 47) {
      if (!y) {
        c = x + 1;
        break;
      }
      continue;
    }
    u === -1 && (y = false, u = x + 1), o === 46 ? r === -1 ? r = x : g !== 1 && (g = 1) : r !== -1 && (g = -1);
  }
  return r === -1 || u === -1 || g === 0 || g === 1 && r === u - 1 && r === c + 1 ? u !== -1 && (c === 0 && s ? n.base = n.name = e.slice(1, u) : n.base = n.name = e.slice(c, u)) : (c === 0 && s ? (n.name = e.slice(1, r), n.base = e.slice(1, u)) : (n.name = e.slice(c, r), n.base = e.slice(c, u)), n.ext = e.slice(r, u)), c > 0 ? n.dir = e.slice(0, c - 1) : s && (n.dir = "/"), n;
}, sep: "/", delimiter: ":", win32: null, posix: null };
De.posix = De;
var Gr = De;
function cs(t3, e, n) {
  let o = t3.replace(/\/index.html$/, "");
  return n && (o = o.replace(/\/1\/?$/, "")), Gr.extname(o) || (o = o.replace(/(\/+)?$/, "/")), o = o.replace(/\/+/g, "/"), new URL(o, e);
}
var ls = /* @__PURE__ */ new Set([".css", ".pcss", ".postcss", ".scss", ".sass", ".styl", ".stylus", ".less"]);
var fs = new RegExp(`\\.(${Array.from(ls).map((t3) => t3.slice(1)).join("|")})($|\\?)`);
var us = (t3) => fs.test(t3);
var ds = /* @__PURE__ */ new Set([".js", ".ts"]);
var ms = new RegExp(`\\.(${Array.from(ds).map((t3) => t3.slice(1)).join("|")})($|\\?)`);
var ys = (t3) => ms.test(t3);
var hs = Object.defineProperty;
var Hn = Object.getOwnPropertySymbols;
var xs = Object.prototype.hasOwnProperty;
var gs = Object.prototype.propertyIsEnumerable;
var qn = (t3, e, n) => e in t3 ? hs(t3, e, { enumerable: true, configurable: true, writable: true, value: n }) : t3[e] = n;
var Vn = (t3, e) => {
  for (var n in e || (e = {}))
    xs.call(e, n) && qn(t3, n, e[n]);
  if (Hn)
    for (var n of Hn(e))
      gs.call(e, n) && qn(t3, n, e[n]);
  return t3;
};
var Hr = (t3, e, n) => {
  if (!e.has(t3))
    throw TypeError("Cannot " + n);
};
var ue = (t3, e, n) => (Hr(t3, e, "read from private field"), n ? n.call(t3) : e.get(t3));
var qt = (t3, e, n) => {
  if (e.has(t3))
    throw TypeError("Cannot add the same private member more than once");
  e instanceof WeakSet ? e.add(t3) : e.set(t3, n);
};
var Jn = (t3, e, n, o) => (Hr(t3, e, "write to private field"), o ? o.call(t3, n) : e.set(t3, n), n);
var Ve;
var Je;
var Ae;
function vs(t3) {
  return function() {
    throw new Error(`Oops, you are trying to use ${t3}, which is only available with SSR.`);
  };
}
function ws(t3) {
  var e;
  if (!!t3 && ((e = t3.expressions) == null ? void 0 : e.length) === 1)
    return t3.expressions[0];
}
var bs = class {
  constructor(e, n) {
    if (qt(this, Ve, /* @__PURE__ */ new Map()), qt(this, Je, void 0), qt(this, Ae, void 0), Jn(this, Je, e), Jn(this, Ae, n), n)
      for (const o of Object.keys(n)) {
        if (this[o] !== void 0)
          throw new Error(`Unable to create a slot named "${o}". "${o}" is a reserved slot name!
Please update the name of this slot.`);
        Object.defineProperty(this, o, { get() {
          return true;
        }, enumerable: true });
      }
  }
  has(e) {
    return ue(this, Ae) ? Boolean(ue(this, Ae)[e]) : false;
  }
  async render(e, n = []) {
    const o = n.length === 0;
    if (!ue(this, Ae))
      return;
    if (o && ue(this, Ve).has(e))
      return ue(this, Ve).get(e);
    if (!this.has(e))
      return;
    if (!o) {
      const l = await ue(this, Ae)[e](), r = ws(l);
      if (r) {
        const c = r(...n);
        return await je(ue(this, Je), c).then((u) => u != null ? String(u) : u);
      }
    }
    const s = await je(ue(this, Je), ue(this, Ae)[e]).then((l) => l != null ? String(l) : l);
    return o && ue(this, Ve).set(e, s), s;
  }
};
Ve = /* @__PURE__ */ new WeakMap();
Je = /* @__PURE__ */ new WeakMap();
Ae = /* @__PURE__ */ new WeakMap();
var Vt = null;
function As({ page: t3 }) {
  return t3 && "currentPage" in t3;
}
function Es(t3) {
  const { markdown: e, params: n, pathname: o, props: s, renderers: l, request: r, resolve: c, site: u } = t3, y = As(s), x = new URL(r.url), g = cs("." + o, u ?? x.origin, y), E = { status: 200, statusText: "OK", headers: new Headers() };
  Object.defineProperty(E, "headers", { value: E.headers, enumerable: true, writable: false });
  const j = { styles: /* @__PURE__ */ new Set(), scripts: t3.scripts ?? /* @__PURE__ */ new Set(), links: t3.links ?? /* @__PURE__ */ new Set(), createAstro(O, F, B) {
    const $ = new bs(j, B), S = { __proto__: O, canonicalURL: g, params: n, props: F, request: r, redirect: t3.ssr ? (k) => new Response(null, { status: 301, headers: { Location: k } }) : vs("Astro.redirect"), resolve(k) {
      let z = `This can be replaced with a dynamic import like so: await import("${k}")`;
      return us(k) ? z = `It looks like you are resolving styles. If you are adding a link tag, replace with this:
---
import "${k}";
---
` : ys(k) && (z = `It looks like you are resolving scripts. If you are adding a script tag, replace with this:

<script type="module" src={(await import("${k}?url")).default}><\/script>

or consider make it a module like so:

<script>
	import MyModule from "${k}";
<\/script>
`), Ye(t3.logging, "deprecation", `${pt("Astro.resolve()")} is deprecated. We see that you are trying to resolve ${k}.
${z}`), "";
    }, response: E, slots: $ };
    return Object.defineProperty(S, "__renderMarkdown", { enumerable: false, writable: false, value: async function(k, z) {
      if (typeof Deno < "u")
        throw new Error("Markdown is not supported in Deno SSR");
      Vt || (Vt = (await import("@astrojs/markdown-remark")).renderMarkdown);
      const { code: R } = await Vt(k, Vn(Vn({}, e), z ?? {}));
      return R;
    } }), S;
  }, resolve: c, _metadata: { renderers: l, pathname: o }, response: E };
  return j;
}
var Ss = Object.defineProperty;
var Fs = Object.defineProperties;
var $s = Object.getOwnPropertyDescriptors;
var Yn = Object.getOwnPropertySymbols;
var js = Object.prototype.hasOwnProperty;
var ks = Object.prototype.propertyIsEnumerable;
var Xn = (t3, e, n) => e in t3 ? Ss(t3, e, { enumerable: true, configurable: true, writable: true, value: n }) : t3[e] = n;
var He = (t3, e) => {
  for (var n in e || (e = {}))
    js.call(e, n) && Xn(t3, n, e[n]);
  if (Yn)
    for (var n of Yn(e))
      ks.call(e, n) && Xn(t3, n, e[n]);
  return t3;
};
var ot = (t3, e) => Fs(t3, $s(e));
function Os(t3) {
  return function(n, o = {}) {
    let { pageSize: s, params: l, props: r } = o;
    const c = s || 10, u = "page", y = l || {}, x = r || {};
    let g;
    if (t3.params.includes(`...${u}`))
      g = false;
    else if (t3.params.includes(`${u}`))
      g = true;
    else
      throw new Error(`[paginate()] page number param \`${u}\` not found in your filepath.
Rename your file to \`[...page].astro\` or customize the param name via the \`paginate([], {param: '...'}\` option.`);
    const E = Math.max(1, Math.ceil(n.length / c));
    return [...Array(E).keys()].map((O) => {
      const F = O + 1, B = c === 1 / 0 ? 0 : (F - 1) * c, $ = Math.min(B + c, n.length), S = ot(He({}, y), { [u]: g || F > 1 ? String(F) : void 0 });
      return { params: S, props: ot(He({}, x), { page: { data: n.slice(B, $), start: B, end: $ - 1, size: c, total: n.length, currentPage: F, lastPage: E, url: { current: t3.generate(He({}, S)), next: F === E ? void 0 : t3.generate(ot(He({}, S), { page: String(F + 1) })), prev: F === 1 ? void 0 : t3.generate(ot(He({}, S), { page: !g && F - 1 === 1 ? void 0 : String(F - 1) })) } } }) };
    });
  };
}
async function Bs({ isValidate: t3, logging: e, mod: n, route: o, ssr: s }) {
  as(n, { ssr: s });
  let l = [];
  n.getStaticPaths && (l = (await n.getStaticPaths({ paginate: Os(o), rss() {
    throw new Error("The RSS helper has been removed from getStaticPaths! Try the new @astrojs/rss package instead. See https://docs.astro.build/en/guides/rss/");
  } })).flat());
  const r = l;
  r.keyed = /* @__PURE__ */ new Map();
  for (const c of r) {
    const u = Wr(c.params);
    r.keyed.set(u, c);
  }
  return t3 && os(r, e), { staticPaths: r };
}
var Ps = class {
  constructor(e) {
    this.cache = {}, this.logging = e;
  }
  clearAll() {
    this.cache = {};
  }
  set(e, n) {
    this.cache[e.component] && Ye(this.logging, "routeCache", `Internal Warning: route cache overwritten. (${e.component})`), this.cache[e.component] = n;
  }
  get(e) {
    return this.cache[e.component];
  }
};
function _s(t3, e) {
  const n = Wr(e);
  let o = t3.keyed.get(n);
  if (o)
    return o;
  Na("findPathItemByKey", `Unexpected cache miss looking for ${n}`), o = t3.find(({ params: s }) => JSON.stringify(s) === n);
}
var Is = Object.defineProperty;
var Kn = Object.getOwnPropertySymbols;
var Cs = Object.prototype.hasOwnProperty;
var Ts = Object.prototype.propertyIsEnumerable;
var Zn = (t3, e, n) => e in t3 ? Is(t3, e, { enumerable: true, configurable: true, writable: true, value: n }) : t3[e] = n;
var Us = (t3, e) => {
  for (var n in e || (e = {}))
    Cs.call(e, n) && Zn(t3, n, e[n]);
  if (Kn)
    for (var n of Kn(e))
      Ts.call(e, n) && Zn(t3, n, e[n]);
  return t3;
};
var qr = ((t3) => (t3[t3.NoMatchingStaticPath = 0] = "NoMatchingStaticPath", t3))(qr || {});
async function Vr(t3) {
  const { logging: e, mod: n, route: o, routeCache: s, pathname: l, ssr: r } = t3;
  let c = {}, u;
  if (o && !o.pathname) {
    if (o.params.length) {
      const g = o.pattern.exec(l);
      g && (c = ss(o.params)(g));
    }
    let y = s.get(o);
    y || (y = await Bs({ mod: n, route: o, isValidate: true, logging: e, ssr: r }), s.set(o, y));
    const x = _s(y.staticPaths, c);
    if (!x && !r)
      return 0;
    u = x?.props ? Us({}, x.props) : {};
  } else
    u = {};
  return [c, u];
}
async function Rs(t3) {
  const { links: e, logging: n, origin: o, markdown: s, mod: l, pathname: r, scripts: c, renderers: u, request: y, resolve: x, route: g, routeCache: E, site: j, ssr: O } = t3, F = await Vr({ logging: n, mod: l, route: g, routeCache: E, pathname: r, ssr: O });
  if (F === 0)
    throw new Error(`[getStaticPath] route pattern matched, but no matching static path found. (${r})`);
  const [B, $] = F, S = await l.default;
  if (!S)
    throw new Error(`Expected an exported Astro component but received typeof ${typeof S}`);
  if (!S.isAstroComponentFactory)
    throw new Error(`Unable to SSR non-Astro component (${g?.component})`);
  const k = Es({ links: e, logging: n, markdown: s, origin: o, params: B, props: $, pathname: r, resolve: x, renderers: u, request: y, site: j, scripts: c, ssr: O });
  let z = await es(k, S, $, null);
  if (z.type === "response")
    return z;
  let R = z.html;
  return R.indexOf("<!--astro:head:injected-->") == -1 && (R = await Lr(k) + R), R = R.replace("<!--astro:head:injected-->", ""), /<!doctype html/i.test(R) || (R = `<!DOCTYPE html>
` + R), { type: "html", html: R, response: k.response };
}
var Ds = Object.defineProperty;
var Ms = Object.defineProperties;
var Ns = Object.getOwnPropertyDescriptors;
var Qn = Object.getOwnPropertySymbols;
var zs = Object.prototype.hasOwnProperty;
var Ls = Object.prototype.propertyIsEnumerable;
var er = (t3, e, n) => e in t3 ? Ds(t3, e, { enumerable: true, configurable: true, writable: true, value: n }) : t3[e] = n;
var Ws = (t3, e) => {
  for (var n in e || (e = {}))
    zs.call(e, n) && er(t3, n, e[n]);
  if (Qn)
    for (var n of Qn(e))
      Ls.call(e, n) && er(t3, n, e[n]);
  return t3;
};
var Gs = (t3, e) => Ms(t3, Ns(e));
async function Hs(t3, e) {
  const n = await Vr(Gs(Ws({}, e), { mod: t3 }));
  if (n === qr.NoMatchingStaticPath)
    throw new Error(`[getStaticPath] route pattern matched, but no matching static path found. (${e.pathname})`);
  const [o] = n, s = await Ko(t3, e.request, o);
  return s instanceof Response ? { type: "response", response: s } : { type: "simple", body: s.body };
}
function qs(t3) {
  return t3.endsWith("/") ? t3 : t3 + "/";
}
function Vs(t3) {
  return t3[0] === "/" ? t3 : "/" + t3;
}
function Js(t3) {
  return t3.replace(/^\/|\/$/g, "");
}
function Ys(t3) {
  return typeof t3 == "string" || t3 instanceof String;
}
function Xs(...t3) {
  return t3.filter(Ys).map(Js).join("/");
}
function Ks(t3) {
  return qs(new URL(t3 || "http://localhost/").pathname);
}
function Jr(t3, e) {
  return Gr.posix.join(Ks(e), t3);
}
function Zs(t3, e) {
  return { props: { rel: "stylesheet", href: Jr(t3, e) }, children: "" };
}
function Qs(t3, e) {
  return new Set(t3.map((n) => Zs(n, e)));
}
function ep(t3, e) {
  return { props: { type: "module", src: Jr(t3, e) }, children: "" };
}
function tp(t3, e) {
  return new Set(t3.map((n) => ep(n, e)));
}
var Sn = (t3, e, n) => {
  if (!e.has(t3))
    throw TypeError("Cannot " + n);
};
var te = (t3, e, n) => (Sn(t3, e, "read from private field"), n ? n.call(t3) : e.get(t3));
var we = (t3, e, n) => {
  if (e.has(t3))
    throw TypeError("Cannot add the same private member more than once");
  e instanceof WeakSet ? e.add(t3) : e.set(t3, n);
};
var st = (t3, e, n, o) => (Sn(t3, e, "write to private field"), o ? o.call(t3, n) : e.set(t3, n), n);
var tr = (t3, e, n) => (Sn(t3, e, "access private method"), n);
var Me;
var ut;
var gt;
var tt;
var Ft;
var nt;
var ln;
var Yr;
var fn;
var Xr;
var Kr = class {
  constructor(e) {
    we(this, ln), we(this, fn), we(this, Me, void 0), we(this, ut, void 0), we(this, gt, void 0), we(this, tt, void 0), we(this, Ft, new TextEncoder()), we(this, nt, { dest: za, level: "info" }), st(this, Me, e), st(this, ut, { routes: e.routes.map((n) => n.routeData) }), st(this, gt, new Map(e.routes.map((n) => [n.routeData, n]))), st(this, tt, new Ps(te(this, nt)));
  }
  match(e) {
    const n = new URL(e.url);
    return to(n.pathname, te(this, ut));
  }
  async render(e, n) {
    if (!n && (n = this.match(e), !n))
      return new Response(null, { status: 404, statusText: "Not found" });
    const o = te(this, Me).pageMap.get(n.component);
    if (n.type === "page")
      return tr(this, ln, Yr).call(this, e, n, o);
    if (n.type === "endpoint")
      return tr(this, fn, Xr).call(this, e, n, o);
    throw new Error(`Unsupported route type [${n.type}].`);
  }
};
Me = /* @__PURE__ */ new WeakMap();
ut = /* @__PURE__ */ new WeakMap();
gt = /* @__PURE__ */ new WeakMap();
tt = /* @__PURE__ */ new WeakMap();
Ft = /* @__PURE__ */ new WeakMap();
nt = /* @__PURE__ */ new WeakMap();
ln = /* @__PURE__ */ new WeakSet();
Yr = async function(t3, e, n) {
  const o = new URL(t3.url), s = te(this, Me), l = s.renderers, r = te(this, gt).get(e), c = Qs(r.links, s.site), u = r.scripts.filter((F) => typeof F != "string" && F?.stage !== "head-inline"), y = tp(u, s.site);
  for (const F of r.scripts)
    typeof F != "string" && F.stage === "head-inline" && y.add({ props: {}, children: F.children });
  const x = await Rs({ links: c, logging: te(this, nt), markdown: s.markdown, mod: n, origin: o.origin, pathname: o.pathname, scripts: y, renderers: l, async resolve(F) {
    if (!(F in s.entryModules))
      throw new Error(`Unable to resolve [${F}]`);
    const B = s.entryModules[F];
    return B.startsWith("data:") ? B : Vs(Xs(s.base, B));
  }, route: e, routeCache: te(this, tt), site: te(this, Me).site, ssr: true, request: t3 });
  if (x.type === "response")
    return x.response;
  let g = x.html, E = x.response, j = E.headers, O = te(this, Ft).encode(g);
  return j.set("Content-Type", "text/html"), j.set("Content-Length", O.byteLength.toString()), new Response(O, E);
};
fn = /* @__PURE__ */ new WeakSet();
Xr = async function(t3, e, n) {
  const o = new URL(t3.url), l = await Hs(n, { logging: te(this, nt), origin: o.origin, pathname: o.pathname, request: t3, route: e, routeCache: te(this, tt), ssr: true });
  if (l.type === "response")
    return l.response;
  {
    const r = l.body, c = new Headers(), u = ji.getType(o.pathname);
    u && c.set("Content-Type", u);
    const y = te(this, Ft).encode(r);
    return c.set("Content-Length", y.byteLength.toString()), new Response(y, { status: 200, headers: c });
  }
};
var Te;
var Zr;
function Qr(t3, e) {
  if (e.start === false)
    return;
  const n = new URL("../client/", import.meta.url), o = new Kr(t3), s = async (r) => {
    if (o.match(r))
      return await o.render(r);
    const c = new URL(r.url), u = new URL("." + c.pathname, n);
    return Ai(u.toString());
  }, l = e.port ?? 8085;
  Te = new bi({ port: l, hostname: e.hostname ?? "0.0.0.0", handler: s }), Zr = Promise.resolve(Te.listenAndServe()), console.error(`Server running on port ${l}`);
}
function ei(t3, e) {
  const n = new Kr(t3);
  return { async stop() {
    Te && (Te.close(), Te = void 0), await Promise.resolve(Zr);
  }, running() {
    return Te !== void 0;
  }, async start() {
    return Qr(t3, e);
  }, async handle(o) {
    return n.render(o);
  } };
}
var nr = Object.freeze(Object.defineProperty({ __proto__: null, createExports: ei, start: Qr }, Symbol.toStringTag, { value: "Module" }));
var np = Symbol("error");
var qe = null;
function Fn(t3, e) {
  return [() => t3, (n) => t3 = typeof n == "function" ? n(t3) : n];
}
function un(t3, e) {
  qe = { owner: qe, context: null };
  let n;
  try {
    n = t3(e);
  } catch (o) {
    const s = ni(qe, np);
    if (!s)
      throw o;
    s.forEach((l) => l(o));
  } finally {
    qe = qe.owner;
  }
  return () => n;
}
function ti(t3) {
  return un(() => dn(t3()));
}
function ni(t3, e) {
  return t3 ? t3.context && t3.context[e] !== void 0 ? t3.context[e] : ni(t3.owner, e) : void 0;
}
function dn(t3) {
  if (typeof t3 == "function" && !t3.length)
    return dn(t3());
  if (Array.isArray(t3)) {
    const e = [];
    for (let n = 0; n < t3.length; n++) {
      const o = dn(t3[n]);
      Array.isArray(o) ? e.push.apply(e, o) : e.push(o);
    }
    return e;
  }
  return t3;
}
var se = {};
function rr(t3) {
  se.context = t3;
}
function rp() {
  return se.context ? { ...se.context, id: `${se.context.id}${se.context.count++}-`, count: 0 } : void 0;
}
function ip(t3, e) {
  if (se.context && !se.context.noHydrate) {
    const n = se.context;
    rr(rp());
    const o = t3(e || {});
    return rr(n), o;
  }
  return t3(e || {});
}
var ap = ["allowfullscreen", "async", "autofocus", "autoplay", "checked", "controls", "default", "disabled", "formnovalidate", "hidden", "indeterminate", "ismap", "loop", "multiple", "muted", "nomodule", "novalidate", "open", "playsinline", "readonly", "required", "reversed", "seamless", "selected"];
[...ap];
var Jt = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_$";
var op = /[<>\b\f\n\r\t\0\u2028\u2029]/g;
var sp = /^(?:do|if|in|for|int|let|new|try|var|byte|case|char|else|enum|goto|long|this|void|with|await|break|catch|class|const|final|float|short|super|throw|while|yield|delete|double|export|import|native|return|switch|throws|typeof|boolean|default|extends|finally|package|private|abstract|continue|debugger|function|volatile|interface|protected|transient|implements|instanceof|synchronized)$/;
var mn = { "<": "\\u003C", ">": "\\u003E", "/": "\\u002F", "\\": "\\\\", "\b": "\\b", "\f": "\\f", "\n": "\\n", "\r": "\\r", "	": "\\t", "\0": "\\0", "\u2028": "\\u2028", "\u2029": "\\u2029" };
var pp = Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
function dt(t3) {
  var e = /* @__PURE__ */ new Map();
  function n(y) {
    if (typeof y == "function")
      throw new Error("Cannot stringify a function");
    if (e.has(y)) {
      e.set(y, e.get(y) + 1);
      return;
    }
    if (e.set(y, 1), !Yt(y)) {
      var x = Xt(y);
      switch (x) {
        case "Number":
        case "String":
        case "Boolean":
        case "Date":
        case "RegExp":
          return;
        case "Array":
          y.forEach(n);
          break;
        case "Set":
        case "Map":
          Array.from(y).forEach(n);
          break;
        default:
          var g = Object.getPrototypeOf(y);
          if (g !== Object.prototype && g !== null && Object.getOwnPropertyNames(g).sort().join("\0") !== pp)
            throw new Error("Cannot stringify arbitrary non-POJOs");
          if (Object.getOwnPropertySymbols(y).length > 0)
            throw new Error("Cannot stringify POJOs with symbolic keys");
          Object.keys(y).forEach(function(E) {
            return n(y[E]);
          });
      }
    }
  }
  n(t3);
  var o = /* @__PURE__ */ new Map();
  Array.from(e).filter(function(y) {
    return y[1] > 1;
  }).sort(function(y, x) {
    return x[1] - y[1];
  }).forEach(function(y, x) {
    o.set(y[0], cp(x));
  });
  function s(y) {
    if (o.has(y))
      return o.get(y);
    if (Yt(y))
      return ir(y);
    var x = Xt(y);
    switch (x) {
      case "Number":
      case "String":
      case "Boolean":
        return "Object(" + s(y.valueOf()) + ")";
      case "RegExp":
        return "new RegExp(" + ii(y.source) + ', "' + y.flags + '")';
      case "Date":
        return "new Date(" + y.getTime() + ")";
      case "Array":
        var g = y.map(function(F, B) {
          return B in y ? s(F) : "";
        }), E = y.length === 0 || y.length - 1 in y ? "" : ",";
        return "[" + g.join(",") + E + "]";
      case "Set":
      case "Map":
        return "new " + x + "([" + Array.from(y).map(s).join(",") + "])";
      default:
        var j = "{" + Object.keys(y).map(function(F) {
          return fp(F) + ":" + s(y[F]);
        }).join(",") + "}", O = Object.getPrototypeOf(y);
        return O === null ? Object.keys(y).length > 0 ? "Object.assign(Object.create(null)," + j + ")" : "Object.create(null)" : j;
    }
  }
  var l = s(t3);
  if (o.size) {
    var r = [], c = [], u = [];
    return o.forEach(function(y, x) {
      if (r.push(y), Yt(x)) {
        u.push(ir(x));
        return;
      }
      var g = Xt(x);
      switch (g) {
        case "Number":
        case "String":
        case "Boolean":
          u.push("Object(" + s(x.valueOf()) + ")");
          break;
        case "RegExp":
          u.push(x.toString());
          break;
        case "Date":
          u.push("new Date(" + x.getTime() + ")");
          break;
        case "Array":
          u.push("Array(" + x.length + ")"), x.forEach(function(E, j) {
            c.push(y + "[" + j + "]=" + s(E));
          });
          break;
        case "Set":
          u.push("new Set"), c.push(y + "." + Array.from(x).map(function(E) {
            return "add(" + s(E) + ")";
          }).join("."));
          break;
        case "Map":
          u.push("new Map"), c.push(y + "." + Array.from(x).map(function(E) {
            var j = E[0], O = E[1];
            return "set(" + s(j) + ", " + s(O) + ")";
          }).join("."));
          break;
        default:
          u.push(Object.getPrototypeOf(x) === null ? "Object.create(null)" : "{}"), Object.keys(x).forEach(function(E) {
            c.push("" + y + up(E) + "=" + s(x[E]));
          });
      }
    }), c.push("return " + l), "(function(" + r.join(",") + "){" + c.join(";") + "}(" + u.join(",") + "))";
  } else
    return l;
}
function cp(t3) {
  var e = "";
  do
    e = Jt[t3 % Jt.length] + e, t3 = ~~(t3 / Jt.length) - 1;
  while (t3 >= 0);
  return sp.test(e) ? e + "_" : e;
}
function Yt(t3) {
  return Object(t3) !== t3;
}
function ir(t3) {
  if (typeof t3 == "string")
    return ii(t3);
  if (t3 === void 0)
    return "void 0";
  if (t3 === 0 && 1 / t3 < 0)
    return "-0";
  var e = String(t3);
  return typeof t3 == "number" ? e.replace(/^(-)?0\./, "$1.") : e;
}
function Xt(t3) {
  return Object.prototype.toString.call(t3).slice(8, -1);
}
function lp(t3) {
  return mn[t3] || t3;
}
function ri(t3) {
  return t3.replace(op, lp);
}
function fp(t3) {
  return /^[_$a-zA-Z][_$a-zA-Z0-9]*$/.test(t3) ? t3 : ri(JSON.stringify(t3));
}
function up(t3) {
  return /^[_$a-zA-Z][_$a-zA-Z0-9]*$/.test(t3) ? "." + t3 : "[" + ri(JSON.stringify(t3)) + "]";
}
function ii(t3) {
  for (var e = '"', n = 0; n < t3.length; n += 1) {
    var o = t3.charAt(n), s = o.charCodeAt(0);
    if (o === '"')
      e += '\\"';
    else if (o in mn)
      e += mn[o];
    else if (s >= 55296 && s <= 57343) {
      var l = t3.charCodeAt(n + 1);
      s <= 56319 && l >= 56320 && l <= 57343 ? e += o + t3[++n] : e += "\\u" + s.toString(16).toUpperCase();
    } else
      e += o;
  }
  return e += '"', e;
}
function dp(t3, e = {}) {
  let n = "";
  se.context = { id: e.renderId || "", count: 0, suspense: {}, assets: [], nonce: e.nonce, writeResource(s, l, r) {
    if (r)
      return n += `_$HY.set("${s}", ${xp(l)});`;
    n += `_$HY.set("${s}", ${dt(l)});`;
  } };
  let o = yp(se.context.assets, Xe(X(t3())));
  return n.length && (o = hp(o, n, e.nonce)), o;
}
function Fe(t3, ...e) {
  if (e.length) {
    let n = "";
    for (let o = 0; o < t3.length; o++) {
      n += t3[o];
      const s = e[o];
      s !== void 0 && (n += Xe(s));
    }
    t3 = n;
  }
  return { t: t3 };
}
function $t(t3, e, n) {
  return n ? e ? " " + t3 : "" : e != null ? ` ${t3}="${e}"` : "";
}
function Oe() {
  const t3 = mp();
  return t3 ? ` data-hk="${t3}"` : "";
}
function X(t3, e) {
  const n = typeof t3;
  if (n !== "string")
    return !e && n === "function" ? X(t3(), e) : e && n === "boolean" ? String(t3) : t3;
  const o = e ? '"' : "<", s = e ? "&quot;" : "&lt;";
  let l = t3.indexOf(o), r = t3.indexOf("&");
  if (l < 0 && r < 0)
    return t3;
  let c = 0, u = "";
  for (; l >= 0 && r >= 0; )
    l < r ? (c < l && (u += t3.substring(c, l)), u += s, c = l + 1, l = t3.indexOf(o, c)) : (c < r && (u += t3.substring(c, r)), u += "&amp;", c = r + 1, r = t3.indexOf("&", c));
  if (l >= 0)
    do
      c < l && (u += t3.substring(c, l)), u += s, c = l + 1, l = t3.indexOf(o, c);
    while (l >= 0);
  else
    for (; r >= 0; )
      c < r && (u += t3.substring(c, r)), u += "&amp;", c = r + 1, r = t3.indexOf("&", c);
  return c < t3.length ? u + t3.substring(c) : u;
}
function Xe(t3) {
  const e = typeof t3;
  if (e === "string")
    return t3;
  if (t3 == null || e === "boolean")
    return "";
  if (Array.isArray(t3)) {
    let n = "";
    for (let o = 0, s = t3.length; o < s; o++)
      n += Xe(t3[o]);
    return n;
  }
  return e === "object" ? Xe(t3.t) : e === "function" ? Xe(t3()) : String(t3);
}
function mp() {
  const t3 = se.context;
  return t3 && !t3.noHydrate && `${t3.id}${t3.count++}`;
}
function yp(t3, e) {
  for (let n = 0; n < t3.length; n++)
    e = e.replace(`%%$${n}%%`, t3[n]());
  return e;
}
function hp(t3, e, n) {
  const o = `<script${n ? ` nonce="${n}"` : ""}>${e}<\/script>`, s = t3.indexOf("<!--xs-->");
  return s > -1 ? t3.slice(0, s) + o + t3.slice(s) : t3 + o;
}
function xp(t3) {
  if (t3.message) {
    const e = {}, n = Object.getOwnPropertyNames(t3);
    for (let o = 0; o < n.length; o++) {
      const s = n[o], l = t3[s];
      (!l || s !== "message" && typeof l != "function") && (e[s] = l);
    }
    return `Object.assign(new Error(${dt(t3.message)}), ${dt(e)})`;
  }
  return dt(t3);
}
function gp(t3, e, n) {
  if (typeof t3 != "function")
    return false;
  const { html: o } = ai(t3, e, n);
  return typeof o == "string";
}
function ai(t3, e, n) {
  return { html: dp(() => ip(t3, { ...e, children: n != null ? Fe(`<astro-fragment>${n}</astro-fragment>`) : n })) };
}
var vp = { check: gp, renderToStaticMarkup: ai };
var wp = ["<div", ' class="z-10 max-w-3xl mx-auto p-4 mx-6 bg-zinc-200 shadow-lg shadow-slate-900 rounded-lg"><div class="sm:flex"><div class="flex-shrink-0 flex items-center px-4"><img class="h-32 w-32 border border-gray-300 text-gray-300 object-contain rounded-full mx-auto"', ' alt="Headshot of Sean Aye"></div><div class="font-mono"><h1 class="text-xl font-bold text-center sm:text-left">About Sean</h1><p class="my-4">', "</p><!--#-->", '<!--/--><div class="flex flex-row mt-2 gap-4"></div></div></div></div>'];
function oi(t3) {
  const e = ti(() => t3.children);
  return Fe(wp, Oe(), $t("src", X(t3.avatarImg, true), false), X(t3.description), X(e()));
}
var si = Object.freeze(Object.defineProperty({ __proto__: null, AboutSean: oi }, Symbol.toStringTag, { value: "Module" }));
function bp(t3, e = 100) {
  let n;
  return () => {
    clearTimeout(n), n = setTimeout(t3, e);
  };
}
function pi({ str: t3, limit: e, suffix: n = "" }) {
  if (t3.length <= e)
    return t3;
  const o = n.length, s = Math.max(e - o, 0);
  return `${t3.substring(0, s)}${n}`;
}
var Ap = Object.freeze(Object.defineProperty({ __proto__: null, debounce: bp, truncateString: pi }, Symbol.toStringTag, { value: "Module" }));
var [Ep, tc] = Fn(0);
var [Sp, nc] = Fn(0);
function Fp(t3 = 100) {
  return { width: Ep, height: Sp };
}
function $p() {
  return typeof window > "u" ? 1 : window.devicePixelRatio;
}
function jp() {
  const [t3, e] = Fn($p());
  return t3;
}
var kp = ["<div", ' class="absolute w-screen h-screen top-0 left-0" style="', '"></div>'];
var Op = ["<canvas", ' class="absolute w-screen h-screen top-0 left-0" width="', '" height="', '"></canvas>'];
var ar = 16;
var Ke = (t3) => {
  const { width: e, height: n } = Fp();
  un(() => Math.floor(e() / ar)), un(() => Math.floor(n() / ar));
  const o = jp();
  return [Fe(kp, Oe(), "background-color:" + X(t3.colours[0], true)), Fe(Op, Oe(), X(e(), true) * X(o(), true), X(n(), true) * X(o(), true))];
};
var Bp = ["<svg", ' xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor"', '><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path></svg>'];
var ci = (t3) => Fe(Bp, Oe(), $t("class", X(t3.class, true), false));
var Pp = ["<svg", ' width="22" height="22" viewBox="0 0 20 20" fill="currentColor"', '><path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84"></path></svg>'];
var li = (t3) => Fe(Pp, Oe(), $t("class", X(t3.class, true), false));
var _p = ["<svg", ' xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor"', '><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path></svg>'];
var fi = (t3) => Fe(_p, Oe(), $t("class", X(t3.class, true), false));
var Ip = ["<div", ' class="', '">', "</div>"];
function ui(t3) {
  const e = ti(() => t3.children);
  return Fe(Ip, Oe(), `flex flex-row gap-4 relative left-0 right-0 top-0 ${X(t3.class, true)}`, X(e()));
}
var Cp = Object.freeze(Object.defineProperty({ __proto__: null, GameOfLifeCanvas: Ke, GithubIcon: ci, TwitterIcon: li, LinkedinIcon: fi, Header: ui }, Symbol.toStringTag, { value: "Module" }));
var yn = bn("/@fs/Users/seanaye/dev/personal/portfolio/apps/site/src/layouts/Home.astro", { modules: [{ module: Cp, specifier: "@seanaye/ui", assert: {} }, { module: Ap, specifier: "@seanaye/utils", assert: {} }, { module: si, specifier: "../components/AboutSean.tsx", assert: {} }], hydratedComponents: [Ke], clientOnlyComponents: [], hydrationDirectives: /* @__PURE__ */ new Set(["load"]), hoisted: [] });
var Tp = En("/@fs/Users/seanaye/dev/personal/portfolio/apps/site/src/layouts/Home.astro", "https://seanaye.ca/", "file:///Users/seanaye/dev/personal/portfolio/apps/site/");
var jt = An(async (t3, e, n) => {
  const o = t3.createAstro(Tp, e, n);
  o.self = jt;
  const s = ["#282728", "#292929", "#2B2B2B", "#2C2D2D", "#2E2F2F", "#2F3131", "#313333", "#323535", "#343837", "#353A39", "#373C3A", "#383E3C", "#3A403E", "#3C4240", "#3D4442", "#3F4744", "#404946", "#424B48", "#434D4A", "#454F4C", "#46514D", "#48534F", "#495551", "#4B5853", "#4D5A55", "#4E5C57", "#505E59", "#51605B", "#53625D", "#54645F", "#566760", "#576962", "#596B64", "#5A6D66", "#5C6F68", "#5D716A", "#5F736C", "#61766E", "#627870", "#647A72", "#657C73", "#677E75", "#688077", "#6A8279", "#6B847B", "#6D877D", "#6E897F", "#708B81", "#728D83", "#738F85", "#759186", "#769388", "#78968A", "#79988C", "#7B9A8E", "#7C9C90", "#7E9E92", "#7FA094", "#81A296", "#83A598"], { description: l, title: r } = o.props, c = new URL("https://twitter.com/seanay3"), u = new URL("https://github.com/seanaye"), y = new URL("https://www.linkedin.com/in/sean-aye-5a1036114/"), x = pi({ str: l, limit: 160, suffix: "..." }), g = "text-gray-900 hover:text-blue-500 transition-all duration-300";
  return ke`<html lang="en">

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>${r}</title>
  <meta property="description"${be(x, "content")}>
  <meta property="og:title"${be(r, "content")}>
  <meta property="og:type" content="website">
  <meta property="og:image" content="/android-chrome-512x512.png">
  <meta property="og:url"${be(o.request.url, "content")}>
  <meta property="og:description"${be(x, "content")} < head>
  <meta content="text/html; charset=UTF-8" name="Content-Type">

<!--astro:head--></head><body>
  <div class="w-screen h-screen absolute">
    <div class="flex justify-center items-center absolute inset-0">
      ${Se(t3, "GameOfLifeCanvas", Ke, { "client:load": true, colours: s, "client:component-hydration": "load", "client:component-path": yn.getPath(Ke), "client:component-export": yn.getExport(Ke) })}
      ${je(t3, n.default)}
    </div>
    ${Se(t3, "Header", ui, { class: "justify-end h-16 items-center px-6" }, { default: () => ke`<div class="flex flex-row bg-zinc-200 shadow-lg shadow-slate-900 rounded-lg gap-4 px-4 py-2">
        <a${be(u, "href")} target="_blank">
          ${Se(t3, "GithubIcon", ci, { class: g })}
        </a>
        <a${be(c, "href")} target="_blank">
          ${Se(t3, "TwitterIcon", li, { class: g })}
        </a>
        <a${be(y, "href")} target="_blank">
          ${Se(t3, "LinkedinIcon", fi, { class: g })}
        </a>
      </div>` })}
  </div>
</body></html>`;
});
var Up = "/Users/seanaye/dev/personal/portfolio/apps/site/src/layouts/Home.astro";
var Rp = void 0;
var di = Object.freeze(Object.defineProperty({ __proto__: null, $$metadata: yn, default: jt, file: Up, url: Rp }, Symbol.toStringTag, { value: "Module" }));
var mi = "/assets/asset.802b8602.jpeg";
var Dp = Object.freeze(Object.defineProperty({ __proto__: null, default: mi }, Symbol.toStringTag, { value: "Module" }));
var Mp = bn("/@fs/Users/seanaye/dev/personal/portfolio/apps/site/src/pages/index.astro", { modules: [{ module: si, specifier: "../components/AboutSean.tsx", assert: {} }, { module: di, specifier: "../layouts/Home.astro", assert: {} }, { module: Dp, specifier: "./avatar.jpeg", assert: {} }], hydratedComponents: [], clientOnlyComponents: [], hydrationDirectives: /* @__PURE__ */ new Set([]), hoisted: [] });
var Np = En("/@fs/Users/seanaye/dev/personal/portfolio/apps/site/src/pages/index.astro", "https://seanaye.ca/", "file:///Users/seanaye/dev/personal/portfolio/apps/site/");
var yi = An(async (t3, e, n) => {
  const o = t3.createAstro(Np, e, n);
  o.self = yi;
  const s = new URL("https://twitter.com/seanay3"), l = new URL("https://github.com/seanaye"), r = new URL("https://www.linkedin.com/in/sean-aye-5a1036114/"), u = "Hi! My name is Sean Aye, I'm a \u{1F1E8}\u{1F1E6} software engineer working on the future of document drafting and reviewing. In my free time I enjoy taking photos, making music, and travelling.";
  return ke`${Se(t3, "Home", jt, { title: "Sean Aye Portfolio", description: u }, { default: () => ke`${Se(t3, "AboutSean", oi, { description: u, avatarImg: mi, twitterUrl: s, githubUrl: l, linkedinUrl: r })}` })}`;
});
var zp = "/Users/seanaye/dev/personal/portfolio/apps/site/src/pages/index.astro";
var Lp = "";
var Wp = Object.freeze(Object.defineProperty({ __proto__: null, $$metadata: Mp, default: yi, file: zp, url: Lp }, Symbol.toStringTag, { value: "Module" }));
var Gp = bn("/@fs/Users/seanaye/dev/personal/portfolio/apps/site/src/pages/book/index.astro", { modules: [{ module: di, specifier: "../../layouts/Home.astro", assert: {} }], hydratedComponents: [], clientOnlyComponents: [], hydrationDirectives: /* @__PURE__ */ new Set([]), hoisted: [] });
var Hp = En("/@fs/Users/seanaye/dev/personal/portfolio/apps/site/src/pages/book/index.astro", "https://seanaye.ca/", "file:///Users/seanaye/dev/personal/portfolio/apps/site/");
var hi = An(async (t3, e, n) => {
  const o = t3.createAstro(Hp, e, n);
  return o.self = hi, ke`${Se(t3, "Home", jt, { description: "Book a free 15-minute call to discuss your Web App development needs" }, { default: () => ke`<div class="rounded p-4 bg-white z-10">booking page </div>` })}`;
});
var qp = "/Users/seanaye/dev/personal/portfolio/apps/site/src/pages/book/index.astro";
var Vp = "/book";
var Jp = Object.freeze(Object.defineProperty({ __proto__: null, $$metadata: Gp, default: hi, file: qp, url: Vp }, Symbol.toStringTag, { value: "Module" }));
var Yp = /* @__PURE__ */ new Map([["src/pages/index.astro", Wp], ["src/pages/book/index.astro", Jp]]);
var Xp = [Object.assign({ name: "@astrojs/solid-js", clientEntrypoint: "@astrojs/solid-js/client.js", serverEntrypoint: "@astrojs/solid-js/server.js", jsxImportSource: "solid-js" }, { ssr: vp })];
var xi = Object.assign(eo({ "routes": [{ "file": "", "links": ["assets/asset.1ca7b18b.css"], "scripts": [], "routeData": { "type": "page", "pattern": "^\\/$", "segments": [], "params": [], "component": "src/pages/index.astro", "pathname": "/", "_meta": { "trailingSlash": "ignore" } } }, { "file": "", "links": ["assets/asset.1ca7b18b.css"], "scripts": [], "routeData": { "type": "page", "pattern": "^\\/book\\/?$", "segments": [[{ "content": "book", "dynamic": false, "spread": false }]], "params": [], "component": "src/pages/book/index.astro", "pathname": "/book", "_meta": { "trailingSlash": "ignore" } } }], "site": "https://seanaye.ca/", "base": "/", "markdown": { "mode": "mdx", "drafts": false, "syntaxHighlight": "shiki", "shikiConfig": { "langs": [], "theme": "github-dark", "wrap": false }, "remarkPlugins": [], "rehypePlugins": [] }, "pageMap": null, "renderers": [], "entryModules": { "@seanaye/ui": "entry.92f49247.js", "astro/client/load.js": "entry.d535425f.js", "@astrojs/solid-js/client.js": "entry.b4a1beed.js", "\0@astrojs-ssr-virtual-entry": "entry.mjs", "astro:scripts/before-hydration.js": "data:text/javascript;charset=utf-8,//[no before-hydration script]" }, "assets": ["/about.txt", "/android-chrome-192x192.png", "/android-chrome-512x512.png", "/apple-touch-icon.png", "/entry.92f49247.js", "/entry.b4a1beed.js", "/entry.d535425f.js", "/favicon-16x16.png", "/favicon-32x32.png", "/favicon.ico", "/site.webmanifest", "/chunks/chunk.5f1977c5.js", "/assets/asset.2e9469fb.css", "/assets/asset.e2af6753.wasm", "/assets/asset.802b8602.jpeg", "/assets/asset.1ca7b18b.css"] }), { pageMap: Yp, renderers: Xp });
var gi = {};
var kt = ei(xi, gi);
var rc = kt.stop;
var ic = kt.handle;
var ac = kt.start;
var oc = kt.running;
var or = "start";
or in nr && nr[or](xi, gi);
export {
  ic as handle,
  oc as running,
  ac as start,
  rc as stop
};
/*!
* The buffer module from node.js, for the browser.
*
* @author   Feross Aboukhadijeh <https://feross.org>
* @license  MIT
*/
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
/*! safe-buffer. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> */
/**
* shortdash - https://github.com/bibig/node-shorthash
*
* @license
*
* (The MIT License)
*
* Copyright (c) 2013 Bibig <bibig@me.com>
*
* Permission is hereby granted, free of charge, to any person
* obtaining a copy of this software and associated documentation
* files (the "Software"), to deal in the Software without
* restriction, including without limitation the rights to use,
* copy, modify, merge, publish, distribute, sublicense, and/or sell
* copies of the Software, and to permit persons to whom the
* Software is furnished to do so, subject to the following
* conditions:
*
* The above copyright notice and this permission notice shall be
* included in all copies or substantial portions of the Software.
*
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
* EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
* OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
* NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
* HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
* WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
* FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
* OTHER DEALINGS IN THE SOFTWARE.
*/
