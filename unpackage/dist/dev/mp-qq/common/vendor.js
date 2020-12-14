(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["common/vendor"],{

/***/ 1:
/*!********************************************************!*\
  !*** ./node_modules/@dcloudio/uni-mp-qq/dist/index.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.createApp = createApp;exports.createComponent = createComponent;exports.createPage = createPage;exports.default = void 0;var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function ownKeys(object, enumerableOnly) {var keys = Object.keys(object);if (Object.getOwnPropertySymbols) {var symbols = Object.getOwnPropertySymbols(object);if (enumerableOnly) symbols = symbols.filter(function (sym) {return Object.getOwnPropertyDescriptor(object, sym).enumerable;});keys.push.apply(keys, symbols);}return keys;}function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};if (i % 2) {ownKeys(Object(source), true).forEach(function (key) {_defineProperty(target, key, source[key]);});} else if (Object.getOwnPropertyDescriptors) {Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));} else {ownKeys(Object(source)).forEach(function (key) {Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));});}}return target;}function _slicedToArray(arr, i) {return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();}function _nonIterableRest() {throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function _iterableToArrayLimit(arr, i) {if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;var _arr = [];var _n = true;var _d = false;var _e = undefined;try {for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {_arr.push(_s.value);if (i && _arr.length === i) break;}} catch (err) {_d = true;_e = err;} finally {try {if (!_n && _i["return"] != null) _i["return"]();} finally {if (_d) throw _e;}}return _arr;}function _arrayWithHoles(arr) {if (Array.isArray(arr)) return arr;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}function _toConsumableArray(arr) {return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();}function _nonIterableSpread() {throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function _unsupportedIterableToArray(o, minLen) {if (!o) return;if (typeof o === "string") return _arrayLikeToArray(o, minLen);var n = Object.prototype.toString.call(o).slice(8, -1);if (n === "Object" && o.constructor) n = o.constructor.name;if (n === "Map" || n === "Set") return Array.from(n);if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);}function _iterableToArray(iter) {if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);}function _arrayWithoutHoles(arr) {if (Array.isArray(arr)) return _arrayLikeToArray(arr);}function _arrayLikeToArray(arr, len) {if (len == null || len > arr.length) len = arr.length;for (var i = 0, arr2 = new Array(len); i < len; i++) {arr2[i] = arr[i];}return arr2;}

var _toString = Object.prototype.toString;
var hasOwnProperty = Object.prototype.hasOwnProperty;

function isFn(fn) {
  return typeof fn === 'function';
}

function isStr(str) {
  return typeof str === 'string';
}

function isPlainObject(obj) {
  return _toString.call(obj) === '[object Object]';
}

function hasOwn(obj, key) {
  return hasOwnProperty.call(obj, key);
}

function noop() {}

/**
                    * Create a cached version of a pure function.
                    */
function cached(fn) {
  var cache = Object.create(null);
  return function cachedFn(str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str));
  };
}

/**
   * Camelize a hyphen-delimited string.
   */
var camelizeRE = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(camelizeRE, function (_, c) {return c ? c.toUpperCase() : '';});
});

var HOOKS = [
'invoke',
'success',
'fail',
'complete',
'returnValue'];


var globalInterceptors = {};
var scopedInterceptors = {};

function mergeHook(parentVal, childVal) {
  var res = childVal ?
  parentVal ?
  parentVal.concat(childVal) :
  Array.isArray(childVal) ?
  childVal : [childVal] :
  parentVal;
  return res ?
  dedupeHooks(res) :
  res;
}

function dedupeHooks(hooks) {
  var res = [];
  for (var i = 0; i < hooks.length; i++) {
    if (res.indexOf(hooks[i]) === -1) {
      res.push(hooks[i]);
    }
  }
  return res;
}

function removeHook(hooks, hook) {
  var index = hooks.indexOf(hook);
  if (index !== -1) {
    hooks.splice(index, 1);
  }
}

function mergeInterceptorHook(interceptor, option) {
  Object.keys(option).forEach(function (hook) {
    if (HOOKS.indexOf(hook) !== -1 && isFn(option[hook])) {
      interceptor[hook] = mergeHook(interceptor[hook], option[hook]);
    }
  });
}

function removeInterceptorHook(interceptor, option) {
  if (!interceptor || !option) {
    return;
  }
  Object.keys(option).forEach(function (hook) {
    if (HOOKS.indexOf(hook) !== -1 && isFn(option[hook])) {
      removeHook(interceptor[hook], option[hook]);
    }
  });
}

function addInterceptor(method, option) {
  if (typeof method === 'string' && isPlainObject(option)) {
    mergeInterceptorHook(scopedInterceptors[method] || (scopedInterceptors[method] = {}), option);
  } else if (isPlainObject(method)) {
    mergeInterceptorHook(globalInterceptors, method);
  }
}

function removeInterceptor(method, option) {
  if (typeof method === 'string') {
    if (isPlainObject(option)) {
      removeInterceptorHook(scopedInterceptors[method], option);
    } else {
      delete scopedInterceptors[method];
    }
  } else if (isPlainObject(method)) {
    removeInterceptorHook(globalInterceptors, method);
  }
}

function wrapperHook(hook) {
  return function (data) {
    return hook(data) || data;
  };
}

function isPromise(obj) {
  return !!obj && (typeof obj === 'object' || typeof obj === 'function') && typeof obj.then === 'function';
}

function queue(hooks, data) {
  var promise = false;
  for (var i = 0; i < hooks.length; i++) {
    var hook = hooks[i];
    if (promise) {
      promise = Promise.then(wrapperHook(hook));
    } else {
      var res = hook(data);
      if (isPromise(res)) {
        promise = Promise.resolve(res);
      }
      if (res === false) {
        return {
          then: function then() {} };

      }
    }
  }
  return promise || {
    then: function then(callback) {
      return callback(data);
    } };

}

function wrapperOptions(interceptor) {var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  ['success', 'fail', 'complete'].forEach(function (name) {
    if (Array.isArray(interceptor[name])) {
      var oldCallback = options[name];
      options[name] = function callbackInterceptor(res) {
        queue(interceptor[name], res).then(function (res) {
          /* eslint-disable no-mixed-operators */
          return isFn(oldCallback) && oldCallback(res) || res;
        });
      };
    }
  });
  return options;
}

function wrapperReturnValue(method, returnValue) {
  var returnValueHooks = [];
  if (Array.isArray(globalInterceptors.returnValue)) {
    returnValueHooks.push.apply(returnValueHooks, _toConsumableArray(globalInterceptors.returnValue));
  }
  var interceptor = scopedInterceptors[method];
  if (interceptor && Array.isArray(interceptor.returnValue)) {
    returnValueHooks.push.apply(returnValueHooks, _toConsumableArray(interceptor.returnValue));
  }
  returnValueHooks.forEach(function (hook) {
    returnValue = hook(returnValue) || returnValue;
  });
  return returnValue;
}

function getApiInterceptorHooks(method) {
  var interceptor = Object.create(null);
  Object.keys(globalInterceptors).forEach(function (hook) {
    if (hook !== 'returnValue') {
      interceptor[hook] = globalInterceptors[hook].slice();
    }
  });
  var scopedInterceptor = scopedInterceptors[method];
  if (scopedInterceptor) {
    Object.keys(scopedInterceptor).forEach(function (hook) {
      if (hook !== 'returnValue') {
        interceptor[hook] = (interceptor[hook] || []).concat(scopedInterceptor[hook]);
      }
    });
  }
  return interceptor;
}

function invokeApi(method, api, options) {for (var _len = arguments.length, params = new Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {params[_key - 3] = arguments[_key];}
  var interceptor = getApiInterceptorHooks(method);
  if (interceptor && Object.keys(interceptor).length) {
    if (Array.isArray(interceptor.invoke)) {
      var res = queue(interceptor.invoke, options);
      return res.then(function (options) {
        return api.apply(void 0, [wrapperOptions(interceptor, options)].concat(params));
      });
    } else {
      return api.apply(void 0, [wrapperOptions(interceptor, options)].concat(params));
    }
  }
  return api.apply(void 0, [options].concat(params));
}

var promiseInterceptor = {
  returnValue: function returnValue(res) {
    if (!isPromise(res)) {
      return res;
    }
    return res.then(function (res) {
      return res[1];
    }).catch(function (res) {
      return res[0];
    });
  } };


var SYNC_API_RE =
/^\$|sendNativeEvent|restoreGlobal|getCurrentSubNVue|getMenuButtonBoundingClientRect|^report|interceptors|Interceptor$|getSubNVueById|requireNativePlugin|upx2px|hideKeyboard|canIUse|^create|Sync$|Manager$|base64ToArrayBuffer|arrayBufferToBase64/;

var CONTEXT_API_RE = /^create|Manager$/;

// Context例外情况
var CONTEXT_API_RE_EXC = ['createBLEConnection'];

// 同步例外情况
var ASYNC_API = ['createBLEConnection'];

var CALLBACK_API_RE = /^on|^off/;

function isContextApi(name) {
  return CONTEXT_API_RE.test(name) && CONTEXT_API_RE_EXC.indexOf(name) === -1;
}
function isSyncApi(name) {
  return SYNC_API_RE.test(name) && ASYNC_API.indexOf(name) === -1;
}

function isCallbackApi(name) {
  return CALLBACK_API_RE.test(name) && name !== 'onPush';
}

function handlePromise(promise) {
  return promise.then(function (data) {
    return [null, data];
  }).
  catch(function (err) {return [err];});
}

function shouldPromise(name) {
  if (
  isContextApi(name) ||
  isSyncApi(name) ||
  isCallbackApi(name))
  {
    return false;
  }
  return true;
}

/* eslint-disable no-extend-native */
if (!Promise.prototype.finally) {
  Promise.prototype.finally = function (callback) {
    var promise = this.constructor;
    return this.then(
    function (value) {return promise.resolve(callback()).then(function () {return value;});},
    function (reason) {return promise.resolve(callback()).then(function () {
        throw reason;
      });});

  };
}

function promisify(name, api) {
  if (!shouldPromise(name)) {
    return api;
  }
  return function promiseApi() {var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};for (var _len2 = arguments.length, params = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {params[_key2 - 1] = arguments[_key2];}
    if (isFn(options.success) || isFn(options.fail) || isFn(options.complete)) {
      return wrapperReturnValue(name, invokeApi.apply(void 0, [name, api, options].concat(params)));
    }
    return wrapperReturnValue(name, handlePromise(new Promise(function (resolve, reject) {
      invokeApi.apply(void 0, [name, api, Object.assign({}, options, {
        success: resolve,
        fail: reject })].concat(
      params));
    })));
  };
}

var EPS = 1e-4;
var BASE_DEVICE_WIDTH = 750;
var isIOS = false;
var deviceWidth = 0;
var deviceDPR = 0;

function checkDeviceWidth() {var _wx$getSystemInfoSync =




  wx.getSystemInfoSync(),platform = _wx$getSystemInfoSync.platform,pixelRatio = _wx$getSystemInfoSync.pixelRatio,windowWidth = _wx$getSystemInfoSync.windowWidth; // uni=>wx runtime 编译目标是 uni 对象，内部不允许直接使用 uni

  deviceWidth = windowWidth;
  deviceDPR = pixelRatio;
  isIOS = platform === 'ios';
}

function upx2px(number, newDeviceWidth) {
  if (deviceWidth === 0) {
    checkDeviceWidth();
  }

  number = Number(number);
  if (number === 0) {
    return 0;
  }
  var result = number / BASE_DEVICE_WIDTH * (newDeviceWidth || deviceWidth);
  if (result < 0) {
    result = -result;
  }
  result = Math.floor(result + EPS);
  if (result === 0) {
    if (deviceDPR === 1 || !isIOS) {
      return 1;
    } else {
      return 0.5;
    }
  }
  return number < 0 ? -result : result;
}

var interceptors = {
  promiseInterceptor: promiseInterceptor };


var baseApi = /*#__PURE__*/Object.freeze({
  __proto__: null,
  upx2px: upx2px,
  addInterceptor: addInterceptor,
  removeInterceptor: removeInterceptor,
  interceptors: interceptors });


var previewImage = {
  args: function args(fromArgs) {
    var currentIndex = parseInt(fromArgs.current);
    if (isNaN(currentIndex)) {
      return;
    }
    var urls = fromArgs.urls;
    if (!Array.isArray(urls)) {
      return;
    }
    var len = urls.length;
    if (!len) {
      return;
    }
    if (currentIndex < 0) {
      currentIndex = 0;
    } else if (currentIndex >= len) {
      currentIndex = len - 1;
    }
    if (currentIndex > 0) {
      fromArgs.current = urls[currentIndex];
      fromArgs.urls = urls.filter(
      function (item, index) {return index < currentIndex ? item !== urls[currentIndex] : true;});

    } else {
      fromArgs.current = urls[0];
    }
    return {
      indicator: false,
      loop: false };

  } };


var protocols = {
  previewImage: previewImage };

var todos = [
  // 'startBeaconDiscovery',
  // 'stopBeaconDiscovery',
  // 'getBeacons',
  // 'onBeaconUpdate',
  // 'onBeaconServiceChange',
  // 'addPhoneContact',
  // 'getHCEState',
  // 'startHCE',
  // 'stopHCE',
  // 'onHCEMessage',
  // 'sendHCEMessage',
  // 'startWifi',
  // 'stopWifi',
  // 'connectWifi',
  // 'getWifiList',
  // 'onGetWifiList',
  // 'setWifiList',
  // 'onWifiConnected',
  // 'getConnectedWifi',
  // 'setTopBarText',
  // 'getPhoneNumber',
  // 'chooseAddress',
  // 'addCard',
  // 'openCard',
  // 'getWeRunData',
  // 'launchApp',
  // 'chooseInvoiceTitle',
  // 'checkIsSupportSoterAuthentication',
  // 'startSoterAuthentication',
  // 'checkIsSoterEnrolledInDevice',
  // 'vibrate',
  // 'loadFontFace',
  // 'getExtConfig',
  // 'getExtConfigSync'
];
var canIUses = [
'scanCode',
'startAccelerometer',
'stopAccelerometer',
'onAccelerometerChange',
'startCompass',
'onCompassChange',
'setScreenBrightness',
'getScreenBrightness',
'setKeepScreenOn',
'onUserCaptureScreen',
'vibrateLong',
'vibrateShort',
'createWorker',
'connectSocket',
'onSocketOpen',
'onSocketError',
'sendSocketMessage',
'onSocketMessage',
'closeSocket',
'onSocketClose',
'openDocument',
'updateShareMenu',
'getShareInfo',
'createLivePlayerContext',
'createLivePusherContext',
'setNavigationBarColor',
'onMemoryWarning',
'onNetworkStatusChange',
'reportMonitor',
'getLogManager',
'reportAnalytics'];


var CALLBACKS = ['success', 'fail', 'cancel', 'complete'];

function processCallback(methodName, method, returnValue) {
  return function (res) {
    return method(processReturnValue(methodName, res, returnValue));
  };
}

function processArgs(methodName, fromArgs) {var argsOption = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};var returnValue = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};var keepFromArgs = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
  if (isPlainObject(fromArgs)) {// 一般 api 的参数解析
    var toArgs = keepFromArgs === true ? fromArgs : {}; // returnValue 为 false 时，说明是格式化返回值，直接在返回值对象上修改赋值
    if (isFn(argsOption)) {
      argsOption = argsOption(fromArgs, toArgs) || {};
    }
    for (var key in fromArgs) {
      if (hasOwn(argsOption, key)) {
        var keyOption = argsOption[key];
        if (isFn(keyOption)) {
          keyOption = keyOption(fromArgs[key], fromArgs, toArgs);
        }
        if (!keyOption) {// 不支持的参数
          console.warn("QQ\u5C0F\u7A0B\u5E8F ".concat(methodName, "\u6682\u4E0D\u652F\u6301").concat(key));
        } else if (isStr(keyOption)) {// 重写参数 key
          toArgs[keyOption] = fromArgs[key];
        } else if (isPlainObject(keyOption)) {// {name:newName,value:value}可重新指定参数 key:value
          toArgs[keyOption.name ? keyOption.name : key] = keyOption.value;
        }
      } else if (CALLBACKS.indexOf(key) !== -1) {
        toArgs[key] = processCallback(methodName, fromArgs[key], returnValue);
      } else {
        if (!keepFromArgs) {
          toArgs[key] = fromArgs[key];
        }
      }
    }
    return toArgs;
  } else if (isFn(fromArgs)) {
    fromArgs = processCallback(methodName, fromArgs, returnValue);
  }
  return fromArgs;
}

function processReturnValue(methodName, res, returnValue) {var keepReturnValue = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  if (isFn(protocols.returnValue)) {// 处理通用 returnValue
    res = protocols.returnValue(methodName, res);
  }
  return processArgs(methodName, res, returnValue, {}, keepReturnValue);
}

function wrapper(methodName, method) {
  if (hasOwn(protocols, methodName)) {
    var protocol = protocols[methodName];
    if (!protocol) {// 暂不支持的 api
      return function () {
        console.error("QQ\u5C0F\u7A0B\u5E8F \u6682\u4E0D\u652F\u6301".concat(methodName));
      };
    }
    return function (arg1, arg2) {// 目前 api 最多两个参数
      var options = protocol;
      if (isFn(protocol)) {
        options = protocol(arg1);
      }

      arg1 = processArgs(methodName, arg1, options.args, options.returnValue);

      var args = [arg1];
      if (typeof arg2 !== 'undefined') {
        args.push(arg2);
      }
      var returnValue = wx[options.name || methodName].apply(wx, args);
      if (isSyncApi(methodName)) {// 同步 api
        return processReturnValue(methodName, returnValue, options.returnValue, isContextApi(methodName));
      }
      return returnValue;
    };
  }
  return method;
}

var todoApis = Object.create(null);

var TODOS = [
'onTabBarMidButtonTap',
'subscribePush',
'unsubscribePush',
'onPush',
'offPush',
'share'];


function createTodoApi(name) {
  return function todoApi(_ref)


  {var fail = _ref.fail,complete = _ref.complete;
    var res = {
      errMsg: "".concat(name, ":fail:\u6682\u4E0D\u652F\u6301 ").concat(name, " \u65B9\u6CD5") };

    isFn(fail) && fail(res);
    isFn(complete) && complete(res);
  };
}

TODOS.forEach(function (name) {
  todoApis[name] = createTodoApi(name);
});

var providers = {
  oauth: ['qq'],
  share: ['qq'],
  payment: ['qqpay'],
  push: ['qq'] };


function getProvider(_ref2)




{var service = _ref2.service,success = _ref2.success,fail = _ref2.fail,complete = _ref2.complete;
  var res = false;
  if (providers[service]) {
    res = {
      errMsg: 'getProvider:ok',
      service: service,
      provider: providers[service] };

    isFn(success) && success(res);
  } else {
    res = {
      errMsg: 'getProvider:fail:服务[' + service + ']不存在' };

    isFn(fail) && fail(res);
  }
  isFn(complete) && complete(res);
}

var extraApi = /*#__PURE__*/Object.freeze({
  __proto__: null,
  getProvider: getProvider });


var getEmitter = function () {
  if (typeof getUniEmitter === 'function') {
    /* eslint-disable no-undef */
    return getUniEmitter;
  }
  var Emitter;
  return function getUniEmitter() {
    if (!Emitter) {
      Emitter = new _vue.default();
    }
    return Emitter;
  };
}();

function apply(ctx, method, args) {
  return ctx[method].apply(ctx, args);
}

function $on() {
  return apply(getEmitter(), '$on', Array.prototype.slice.call(arguments));
}
function $off() {
  return apply(getEmitter(), '$off', Array.prototype.slice.call(arguments));
}
function $once() {
  return apply(getEmitter(), '$once', Array.prototype.slice.call(arguments));
}
function $emit() {
  return apply(getEmitter(), '$emit', Array.prototype.slice.call(arguments));
}

var eventApi = /*#__PURE__*/Object.freeze({
  __proto__: null,
  $on: $on,
  $off: $off,
  $once: $once,
  $emit: $emit });


var api = /*#__PURE__*/Object.freeze({
  __proto__: null });


var MPPage = Page;
var MPComponent = Component;

var customizeRE = /:/g;

var customize = cached(function (str) {
  return camelize(str.replace(customizeRE, '-'));
});

function initTriggerEvent(mpInstance) {
  var oldTriggerEvent = mpInstance.triggerEvent;
  mpInstance.triggerEvent = function (event) {for (var _len3 = arguments.length, args = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {args[_key3 - 1] = arguments[_key3];}
    return oldTriggerEvent.apply(mpInstance, [customize(event)].concat(args));
  };
}

function initHook(name, options) {
  var oldHook = options[name];
  if (!oldHook) {
    options[name] = function () {
      initTriggerEvent(this);
    };
  } else {
    options[name] = function () {
      initTriggerEvent(this);for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {args[_key4] = arguments[_key4];}
      return oldHook.apply(this, args);
    };
  }
}

Page = function Page() {var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  initHook('onLoad', options);
  return MPPage(options);
};

Component = function Component() {var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  initHook('created', options);
  return MPComponent(options);
};

var PAGE_EVENT_HOOKS = [
'onPullDownRefresh',
'onReachBottom',
'onShareAppMessage',
'onPageScroll',
'onResize',
'onTabItemTap'];


function initMocks(vm, mocks) {
  var mpInstance = vm.$mp[vm.mpType];
  mocks.forEach(function (mock) {
    if (hasOwn(mpInstance, mock)) {
      vm[mock] = mpInstance[mock];
    }
  });
}

function hasHook(hook, vueOptions) {
  if (!vueOptions) {
    return true;
  }

  if (_vue.default.options && Array.isArray(_vue.default.options[hook])) {
    return true;
  }

  vueOptions = vueOptions.default || vueOptions;

  if (isFn(vueOptions)) {
    if (isFn(vueOptions.extendOptions[hook])) {
      return true;
    }
    if (vueOptions.super &&
    vueOptions.super.options &&
    Array.isArray(vueOptions.super.options[hook])) {
      return true;
    }
    return false;
  }

  if (isFn(vueOptions[hook])) {
    return true;
  }
  var mixins = vueOptions.mixins;
  if (Array.isArray(mixins)) {
    return !!mixins.find(function (mixin) {return hasHook(hook, mixin);});
  }
}

function initHooks(mpOptions, hooks, vueOptions) {
  hooks.forEach(function (hook) {
    if (hasHook(hook, vueOptions)) {
      mpOptions[hook] = function (args) {
        return this.$vm && this.$vm.__call_hook(hook, args);
      };
    }
  });
}

function initVueComponent(Vue, vueOptions) {
  vueOptions = vueOptions.default || vueOptions;
  var VueComponent;
  if (isFn(vueOptions)) {
    VueComponent = vueOptions;
  } else {
    VueComponent = Vue.extend(vueOptions);
  }
  vueOptions = VueComponent.options;
  return [VueComponent, vueOptions];
}

function initSlots(vm, vueSlots) {
  if (Array.isArray(vueSlots) && vueSlots.length) {
    var $slots = Object.create(null);
    vueSlots.forEach(function (slotName) {
      $slots[slotName] = true;
    });
    vm.$scopedSlots = vm.$slots = $slots;
  }
}

function initVueIds(vueIds, mpInstance) {
  vueIds = (vueIds || '').split(',');
  var len = vueIds.length;

  if (len === 1) {
    mpInstance._$vueId = vueIds[0];
  } else if (len === 2) {
    mpInstance._$vueId = vueIds[0];
    mpInstance._$vuePid = vueIds[1];
  }
}

function initData(vueOptions, context) {
  var data = vueOptions.data || {};
  var methods = vueOptions.methods || {};

  if (typeof data === 'function') {
    try {
      data = data.call(context); // 支持 Vue.prototype 上挂的数据
    } catch (e) {
      if (Object({"VUE_APP_PLATFORM":"mp-qq","NODE_ENV":"development","BASE_URL":"/"}).VUE_APP_DEBUG) {
        console.warn('根据 Vue 的 data 函数初始化小程序 data 失败，请尽量确保 data 函数中不访问 vm 对象，否则可能影响首次数据渲染速度。', data);
      }
    }
  } else {
    try {
      // 对 data 格式化
      data = JSON.parse(JSON.stringify(data));
    } catch (e) {}
  }

  if (!isPlainObject(data)) {
    data = {};
  }

  Object.keys(methods).forEach(function (methodName) {
    if (context.__lifecycle_hooks__.indexOf(methodName) === -1 && !hasOwn(data, methodName)) {
      data[methodName] = methods[methodName];
    }
  });

  return data;
}

var PROP_TYPES = [String, Number, Boolean, Object, Array, null];

function createObserver(name) {
  return function observer(newVal, oldVal) {
    if (this.$vm) {
      this.$vm[name] = newVal; // 为了触发其他非 render watcher
    }
  };
}

function initBehaviors(vueOptions, initBehavior) {
  var vueBehaviors = vueOptions.behaviors;
  var vueExtends = vueOptions.extends;
  var vueMixins = vueOptions.mixins;

  var vueProps = vueOptions.props;

  if (!vueProps) {
    vueOptions.props = vueProps = [];
  }

  var behaviors = [];
  if (Array.isArray(vueBehaviors)) {
    vueBehaviors.forEach(function (behavior) {
      behaviors.push(behavior.replace('uni://', "wx".concat("://")));
      if (behavior === 'uni://form-field') {
        if (Array.isArray(vueProps)) {
          vueProps.push('name');
          vueProps.push('value');
        } else {
          vueProps.name = {
            type: String,
            default: '' };

          vueProps.value = {
            type: [String, Number, Boolean, Array, Object, Date],
            default: '' };

        }
      }
    });
  }
  if (isPlainObject(vueExtends) && vueExtends.props) {
    behaviors.push(
    initBehavior({
      properties: initProperties(vueExtends.props, true) }));


  }
  if (Array.isArray(vueMixins)) {
    vueMixins.forEach(function (vueMixin) {
      if (isPlainObject(vueMixin) && vueMixin.props) {
        behaviors.push(
        initBehavior({
          properties: initProperties(vueMixin.props, true) }));


      }
    });
  }
  return behaviors;
}

function parsePropType(key, type, defaultValue, file) {
  // [String]=>String
  if (Array.isArray(type) && type.length === 1) {
    return type[0];
  }
  return type;
}

function initProperties(props) {var isBehavior = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;var file = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
  var properties = {};
  if (!isBehavior) {
    properties.vueId = {
      type: String,
      value: '' };

    properties.vueSlots = { // 小程序不能直接定义 $slots 的 props，所以通过 vueSlots 转换到 $slots
      type: null,
      value: [],
      observer: function observer(newVal, oldVal) {
        var $slots = Object.create(null);
        newVal.forEach(function (slotName) {
          $slots[slotName] = true;
        });
        this.setData({
          $slots: $slots });

      } };

  }
  if (Array.isArray(props)) {// ['title']
    props.forEach(function (key) {
      properties[key] = {
        type: null,
        observer: createObserver(key) };

    });
  } else if (isPlainObject(props)) {// {title:{type:String,default:''},content:String}
    Object.keys(props).forEach(function (key) {
      var opts = props[key];
      if (isPlainObject(opts)) {// title:{type:String,default:''}
        var value = opts.default;
        if (isFn(value)) {
          value = value();
        }

        opts.type = parsePropType(key, opts.type);

        properties[key] = {
          type: PROP_TYPES.indexOf(opts.type) !== -1 ? opts.type : null,
          value: value,
          observer: createObserver(key) };

      } else {// content:String
        var type = parsePropType(key, opts);
        properties[key] = {
          type: PROP_TYPES.indexOf(type) !== -1 ? type : null,
          observer: createObserver(key) };

      }
    });
  }
  return properties;
}

function wrapper$1(event) {
  // TODO 又得兼容 mpvue 的 mp 对象
  try {
    event.mp = JSON.parse(JSON.stringify(event));
  } catch (e) {}

  event.stopPropagation = noop;
  event.preventDefault = noop;

  event.target = event.target || {};

  if (!hasOwn(event, 'detail')) {
    event.detail = {};
  }

  if (hasOwn(event, 'markerId')) {
    event.detail = typeof event.detail === 'object' ? event.detail : {};
    event.detail.markerId = event.markerId;
  }

  if (isPlainObject(event.detail)) {
    event.target = Object.assign({}, event.target, event.detail);
  }

  return event;
}

function getExtraValue(vm, dataPathsArray) {
  var context = vm;
  dataPathsArray.forEach(function (dataPathArray) {
    var dataPath = dataPathArray[0];
    var value = dataPathArray[2];
    if (dataPath || typeof value !== 'undefined') {// ['','',index,'disable']
      var propPath = dataPathArray[1];
      var valuePath = dataPathArray[3];

      var vFor = dataPath ? vm.__get_value(dataPath, context) : context;

      if (Number.isInteger(vFor)) {
        context = value;
      } else if (!propPath) {
        context = vFor[value];
      } else {
        if (Array.isArray(vFor)) {
          context = vFor.find(function (vForItem) {
            return vm.__get_value(propPath, vForItem) === value;
          });
        } else if (isPlainObject(vFor)) {
          context = Object.keys(vFor).find(function (vForKey) {
            return vm.__get_value(propPath, vFor[vForKey]) === value;
          });
        } else {
          console.error('v-for 暂不支持循环数据：', vFor);
        }
      }

      if (valuePath) {
        context = vm.__get_value(valuePath, context);
      }
    }
  });
  return context;
}

function processEventExtra(vm, extra, event) {
  var extraObj = {};

  if (Array.isArray(extra) && extra.length) {
    /**
                                              *[
                                              *    ['data.items', 'data.id', item.data.id],
                                              *    ['metas', 'id', meta.id]
                                              *],
                                              *[
                                              *    ['data.items', 'data.id', item.data.id],
                                              *    ['metas', 'id', meta.id]
                                              *],
                                              *'test'
                                              */
    extra.forEach(function (dataPath, index) {
      if (typeof dataPath === 'string') {
        if (!dataPath) {// model,prop.sync
          extraObj['$' + index] = vm;
        } else {
          if (dataPath === '$event') {// $event
            extraObj['$' + index] = event;
          } else if (dataPath.indexOf('$event.') === 0) {// $event.target.value
            extraObj['$' + index] = vm.__get_value(dataPath.replace('$event.', ''), event);
          } else {
            extraObj['$' + index] = vm.__get_value(dataPath);
          }
        }
      } else {
        extraObj['$' + index] = getExtraValue(vm, dataPath);
      }
    });
  }

  return extraObj;
}

function getObjByArray(arr) {
  var obj = {};
  for (var i = 1; i < arr.length; i++) {
    var element = arr[i];
    obj[element[0]] = element[1];
  }
  return obj;
}

function processEventArgs(vm, event) {var args = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];var extra = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];var isCustom = arguments.length > 4 ? arguments[4] : undefined;var methodName = arguments.length > 5 ? arguments[5] : undefined;
  var isCustomMPEvent = false; // wxcomponent 组件，传递原始 event 对象
  if (isCustom) {// 自定义事件
    isCustomMPEvent = event.currentTarget &&
    event.currentTarget.dataset &&
    event.currentTarget.dataset.comType === 'wx';
    if (!args.length) {// 无参数，直接传入 event 或 detail 数组
      if (isCustomMPEvent) {
        return [event];
      }
      return event.detail.__args__ || event.detail;
    }
  }

  var extraObj = processEventExtra(vm, extra, event);

  var ret = [];
  args.forEach(function (arg) {
    if (arg === '$event') {
      if (methodName === '__set_model' && !isCustom) {// input v-model value
        ret.push(event.target.value);
      } else {
        if (isCustom && !isCustomMPEvent) {
          ret.push(event.detail.__args__[0]);
        } else {// wxcomponent 组件或内置组件
          ret.push(event);
        }
      }
    } else {
      if (Array.isArray(arg) && arg[0] === 'o') {
        ret.push(getObjByArray(arg));
      } else if (typeof arg === 'string' && hasOwn(extraObj, arg)) {
        ret.push(extraObj[arg]);
      } else {
        ret.push(arg);
      }
    }
  });

  return ret;
}

var ONCE = '~';
var CUSTOM = '^';

function isMatchEventType(eventType, optType) {
  return eventType === optType ||

  optType === 'regionchange' && (

  eventType === 'begin' ||
  eventType === 'end');


}

function handleEvent(event) {var _this = this;
  event = wrapper$1(event);

  // [['tap',[['handle',[1,2,a]],['handle1',[1,2,a]]]]]
  var dataset = (event.currentTarget || event.target).dataset;
  if (!dataset) {
    return console.warn('事件信息不存在');
  }
  var eventOpts = dataset.eventOpts || dataset['event-opts']; // 支付宝 web-view 组件 dataset 非驼峰
  if (!eventOpts) {
    return console.warn('事件信息不存在');
  }

  // [['handle',[1,2,a]],['handle1',[1,2,a]]]
  var eventType = event.type;

  var ret = [];

  eventOpts.forEach(function (eventOpt) {
    var type = eventOpt[0];
    var eventsArray = eventOpt[1];

    var isCustom = type.charAt(0) === CUSTOM;
    type = isCustom ? type.slice(1) : type;
    var isOnce = type.charAt(0) === ONCE;
    type = isOnce ? type.slice(1) : type;

    if (eventsArray && isMatchEventType(eventType, type)) {
      eventsArray.forEach(function (eventArray) {
        var methodName = eventArray[0];
        if (methodName) {
          var handlerCtx = _this.$vm;
          if (
          handlerCtx.$options.generic &&
          handlerCtx.$parent &&
          handlerCtx.$parent.$parent)
          {// mp-weixin,mp-toutiao 抽象节点模拟 scoped slots
            handlerCtx = handlerCtx.$parent.$parent;
          }
          if (methodName === '$emit') {
            handlerCtx.$emit.apply(handlerCtx,
            processEventArgs(
            _this.$vm,
            event,
            eventArray[1],
            eventArray[2],
            isCustom,
            methodName));

            return;
          }
          var handler = handlerCtx[methodName];
          if (!isFn(handler)) {
            throw new Error(" _vm.".concat(methodName, " is not a function"));
          }
          if (isOnce) {
            if (handler.once) {
              return;
            }
            handler.once = true;
          }
          ret.push(handler.apply(handlerCtx, processEventArgs(
          _this.$vm,
          event,
          eventArray[1],
          eventArray[2],
          isCustom,
          methodName)));

        }
      });
    }
  });

  if (
  eventType === 'input' &&
  ret.length === 1 &&
  typeof ret[0] !== 'undefined')
  {
    return ret[0];
  }
}

var hooks = [
'onShow',
'onHide',
'onError',
'onPageNotFound'];


function parseBaseApp(vm, _ref3)


{var mocks = _ref3.mocks,initRefs = _ref3.initRefs;
  if (vm.$options.store) {
    _vue.default.prototype.$store = vm.$options.store;
  }

  _vue.default.prototype.mpHost = "mp-qq";

  _vue.default.mixin({
    beforeCreate: function beforeCreate() {
      if (!this.$options.mpType) {
        return;
      }

      this.mpType = this.$options.mpType;

      this.$mp = _defineProperty({
        data: {} },
      this.mpType, this.$options.mpInstance);


      this.$scope = this.$options.mpInstance;

      delete this.$options.mpType;
      delete this.$options.mpInstance;

      if (this.mpType !== 'app') {
        initRefs(this);
        initMocks(this, mocks);
      }
    } });


  var appOptions = {
    onLaunch: function onLaunch(args) {
      if (this.$vm) {// 已经初始化过了，主要是为了百度，百度 onShow 在 onLaunch 之前
        return;
      }
      {
        if (!wx.canIUse('nextTick')) {// 事实 上2.2.3 即可，简单使用 2.3.0 的 nextTick 判断
          console.error('当前微信基础库版本过低，请将 微信开发者工具-详情-项目设置-调试基础库版本 更换为`2.3.0`以上');
        }
      }

      this.$vm = vm;

      this.$vm.$mp = {
        app: this };


      this.$vm.$scope = this;
      // vm 上也挂载 globalData
      this.$vm.globalData = this.globalData;

      this.$vm._isMounted = true;
      this.$vm.__call_hook('mounted', args);

      this.$vm.__call_hook('onLaunch', args);
    } };


  // 兼容旧版本 globalData
  appOptions.globalData = vm.$options.globalData || {};
  // 将 methods 中的方法挂在 getApp() 中
  var methods = vm.$options.methods;
  if (methods) {
    Object.keys(methods).forEach(function (name) {
      appOptions[name] = methods[name];
    });
  }

  initHooks(appOptions, hooks);

  return appOptions;
}

var mocks = ['__route__', '__wxExparserNodeId__', '__wxWebviewId__'];

function findVmByVueId(vm, vuePid) {
  var $children = vm.$children;
  // 优先查找直属(反向查找:https://github.com/dcloudio/uni-app/issues/1200)
  for (var i = $children.length - 1; i >= 0; i--) {
    var childVm = $children[i];
    if (childVm.$scope._$vueId === vuePid) {
      return childVm;
    }
  }
  // 反向递归查找
  var parentVm;
  for (var _i = $children.length - 1; _i >= 0; _i--) {
    parentVm = findVmByVueId($children[_i], vuePid);
    if (parentVm) {
      return parentVm;
    }
  }
}

function initBehavior(options) {
  return Behavior(options);
}

function isPage() {
  return !!this.route;
}

function initRelation(detail) {
  this.triggerEvent('__l', detail);
}

function initRefs(vm) {
  var mpInstance = vm.$scope;
  Object.defineProperty(vm, '$refs', {
    get: function get() {
      var $refs = {};
      var components = mpInstance.selectAllComponents('.vue-ref');
      components.forEach(function (component) {
        var ref = component.dataset.ref;
        $refs[ref] = component.$vm || component;
      });
      var forComponents = mpInstance.selectAllComponents('.vue-ref-in-for');
      forComponents.forEach(function (component) {
        var ref = component.dataset.ref;
        if (!$refs[ref]) {
          $refs[ref] = [];
        }
        $refs[ref].push(component.$vm || component);
      });
      return $refs;
    } });

}

function handleLink(event) {var _ref4 =



  event.detail || event.value,vuePid = _ref4.vuePid,vueOptions = _ref4.vueOptions; // detail 是微信,value 是百度(dipatch)

  var parentVm;

  if (vuePid) {
    parentVm = findVmByVueId(this.$vm, vuePid);
  }

  if (!parentVm) {
    parentVm = this.$vm;
  }

  vueOptions.parent = parentVm;
}

function parseApp(vm) {
  return parseBaseApp(vm, {
    mocks: mocks,
    initRefs: initRefs });

}

function parseApp$1(vm) {
  return parseApp(vm);
}

function createApp(vm) {
  App(parseApp$1(vm));
  return vm;
}

function parseBaseComponent(vueComponentOptions)


{var _ref5 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},isPage = _ref5.isPage,initRelation = _ref5.initRelation;var _initVueComponent =
  initVueComponent(_vue.default, vueComponentOptions),_initVueComponent2 = _slicedToArray(_initVueComponent, 2),VueComponent = _initVueComponent2[0],vueOptions = _initVueComponent2[1];

  var options = _objectSpread({
    multipleSlots: true,
    addGlobalClass: true },
  vueOptions.options || {});


  {
    // 微信 multipleSlots 部分情况有 bug，导致内容顺序错乱 如 u-list，提供覆盖选项
    if (vueOptions['mp-weixin'] && vueOptions['mp-weixin'].options) {
      Object.assign(options, vueOptions['mp-weixin'].options);
    }
  }

  var componentOptions = {
    options: options,
    data: initData(vueOptions, _vue.default.prototype),
    behaviors: initBehaviors(vueOptions, initBehavior),
    properties: initProperties(vueOptions.props, false, vueOptions.__file),
    lifetimes: {
      attached: function attached() {
        var properties = this.properties;

        var options = {
          mpType: isPage.call(this) ? 'page' : 'component',
          mpInstance: this,
          propsData: properties };


        initVueIds(properties.vueId, this);

        // 处理父子关系
        initRelation.call(this, {
          vuePid: this._$vuePid,
          vueOptions: options });


        // 初始化 vue 实例
        this.$vm = new VueComponent(options);

        // 处理$slots,$scopedSlots（暂不支持动态变化$slots）
        initSlots(this.$vm, properties.vueSlots);

        // 触发首次 setData
        this.$vm.$mount();
      },
      ready: function ready() {
        // 当组件 props 默认值为 true，初始化时传入 false 会导致 created,ready 触发, 但 attached 不触发
        // https://developers.weixin.qq.com/community/develop/doc/00066ae2844cc0f8eb883e2a557800
        if (this.$vm) {
          this.$vm._isMounted = true;
          this.$vm.__call_hook('mounted');
          this.$vm.__call_hook('onReady');
        }
      },
      detached: function detached() {
        this.$vm && this.$vm.$destroy();
      } },

    pageLifetimes: {
      show: function show(args) {
        this.$vm && this.$vm.__call_hook('onPageShow', args);
      },
      hide: function hide() {
        this.$vm && this.$vm.__call_hook('onPageHide');
      },
      resize: function resize(size) {
        this.$vm && this.$vm.__call_hook('onPageResize', size);
      } },

    methods: {
      __l: handleLink,
      __e: handleEvent } };


  // externalClasses
  if (vueOptions.externalClasses) {
    componentOptions.externalClasses = vueOptions.externalClasses;
  }

  if (Array.isArray(vueOptions.wxsCallMethods)) {
    vueOptions.wxsCallMethods.forEach(function (callMethod) {
      componentOptions.methods[callMethod] = function (args) {
        return this.$vm[callMethod](args);
      };
    });
  }

  if (isPage) {
    return componentOptions;
  }
  return [componentOptions, VueComponent];
}

function parseComponent(vueComponentOptions) {
  return parseBaseComponent(vueComponentOptions, {
    isPage: isPage,
    initRelation: initRelation });

}

function parseComponent$1(vueComponentOptions) {
  return parseComponent(vueComponentOptions);
}

var hooks$1 = [
'onShow',
'onHide',
'onUnload'];


hooks$1.push.apply(hooks$1, PAGE_EVENT_HOOKS);

function parseBasePage(vuePageOptions, _ref6)


{var isPage = _ref6.isPage,initRelation = _ref6.initRelation;
  var pageOptions = parseComponent$1(vuePageOptions);

  initHooks(pageOptions.methods, hooks$1, vuePageOptions);

  pageOptions.methods.onLoad = function (args) {
    this.$vm.$mp.query = args; // 兼容 mpvue
    this.$vm.__call_hook('onLoad', args);
  };

  return pageOptions;
}

function parsePage(vuePageOptions) {
  return parseBasePage(vuePageOptions, {
    isPage: isPage,
    initRelation: initRelation });

}

function parsePage$1(vuePageOptions) {
  return parsePage(vuePageOptions);
}

function createPage(vuePageOptions) {
  {
    return Component(parsePage$1(vuePageOptions));
  }
}

function createComponent(vueOptions) {
  {
    return Component(parseComponent$1(vueOptions));
  }
}

todos.forEach(function (todoApi) {
  protocols[todoApi] = false;
});

canIUses.forEach(function (canIUseApi) {
  var apiName = protocols[canIUseApi] && protocols[canIUseApi].name ? protocols[canIUseApi].name :
  canIUseApi;
  if (!wx.canIUse(apiName)) {
    protocols[canIUseApi] = false;
  }
});

var uni = {};

if (typeof Proxy !== 'undefined' && "mp-qq" !== 'app-plus') {
  uni = new Proxy({}, {
    get: function get(target, name) {
      if (target[name]) {
        return target[name];
      }
      if (baseApi[name]) {
        return baseApi[name];
      }
      if (api[name]) {
        return promisify(name, api[name]);
      }
      {
        if (extraApi[name]) {
          return promisify(name, extraApi[name]);
        }
        if (todoApis[name]) {
          return promisify(name, todoApis[name]);
        }
      }
      if (eventApi[name]) {
        return eventApi[name];
      }
      if (!hasOwn(wx, name) && !hasOwn(protocols, name)) {
        return;
      }
      return promisify(name, wrapper(name, wx[name]));
    },
    set: function set(target, name, value) {
      target[name] = value;
      return true;
    } });

} else {
  Object.keys(baseApi).forEach(function (name) {
    uni[name] = baseApi[name];
  });

  {
    Object.keys(todoApis).forEach(function (name) {
      uni[name] = promisify(name, todoApis[name]);
    });
    Object.keys(extraApi).forEach(function (name) {
      uni[name] = promisify(name, todoApis[name]);
    });
  }

  Object.keys(eventApi).forEach(function (name) {
    uni[name] = eventApi[name];
  });

  Object.keys(api).forEach(function (name) {
    uni[name] = promisify(name, api[name]);
  });

  Object.keys(wx).forEach(function (name) {
    if (hasOwn(wx, name) || hasOwn(protocols, name)) {
      uni[name] = promisify(name, wrapper(name, wx[name]));
    }
  });
}

wx.createApp = createApp;
wx.createPage = createPage;
wx.createComponent = createComponent;

var uni$1 = uni;var _default =

uni$1;exports.default = _default;

/***/ }),

/***/ 10:
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode, /* vue-cli only */
  components, // fixed by xxxxxx auto components
  renderjs // fixed by xxxxxx renderjs
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // fixed by xxxxxx auto components
  if (components) {
    if (!options.components) {
      options.components = {}
    }
    var hasOwn = Object.prototype.hasOwnProperty
    for (var name in components) {
      if (hasOwn.call(components, name) && !hasOwn.call(options.components, name)) {
        options.components[name] = components[name]
      }
    }
  }
  // fixed by xxxxxx renderjs
  if (renderjs) {
    (renderjs.beforeCreate || (renderjs.beforeCreate = [])).unshift(function() {
      this[renderjs.__module] = this
    });
    (options.mixins || (options.mixins = [])).push(renderjs)
  }

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ 2:
/*!******************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/mp-vue/dist/mp.runtime.esm.js ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/*!
 * Vue.js v2.6.11
 * (c) 2014-2020 Evan You
 * Released under the MIT License.
 */
/*  */

var emptyObject = Object.freeze({});

// These helpers produce better VM code in JS engines due to their
// explicitness and function inlining.
function isUndef (v) {
  return v === undefined || v === null
}

function isDef (v) {
  return v !== undefined && v !== null
}

function isTrue (v) {
  return v === true
}

function isFalse (v) {
  return v === false
}

/**
 * Check if value is primitive.
 */
function isPrimitive (value) {
  return (
    typeof value === 'string' ||
    typeof value === 'number' ||
    // $flow-disable-line
    typeof value === 'symbol' ||
    typeof value === 'boolean'
  )
}

/**
 * Quick object check - this is primarily used to tell
 * Objects from primitive values when we know the value
 * is a JSON-compliant type.
 */
function isObject (obj) {
  return obj !== null && typeof obj === 'object'
}

/**
 * Get the raw type string of a value, e.g., [object Object].
 */
var _toString = Object.prototype.toString;

function toRawType (value) {
  return _toString.call(value).slice(8, -1)
}

/**
 * Strict object type check. Only returns true
 * for plain JavaScript objects.
 */
function isPlainObject (obj) {
  return _toString.call(obj) === '[object Object]'
}

function isRegExp (v) {
  return _toString.call(v) === '[object RegExp]'
}

/**
 * Check if val is a valid array index.
 */
function isValidArrayIndex (val) {
  var n = parseFloat(String(val));
  return n >= 0 && Math.floor(n) === n && isFinite(val)
}

function isPromise (val) {
  return (
    isDef(val) &&
    typeof val.then === 'function' &&
    typeof val.catch === 'function'
  )
}

/**
 * Convert a value to a string that is actually rendered.
 */
function toString (val) {
  return val == null
    ? ''
    : Array.isArray(val) || (isPlainObject(val) && val.toString === _toString)
      ? JSON.stringify(val, null, 2)
      : String(val)
}

/**
 * Convert an input value to a number for persistence.
 * If the conversion fails, return original string.
 */
function toNumber (val) {
  var n = parseFloat(val);
  return isNaN(n) ? val : n
}

/**
 * Make a map and return a function for checking if a key
 * is in that map.
 */
function makeMap (
  str,
  expectsLowerCase
) {
  var map = Object.create(null);
  var list = str.split(',');
  for (var i = 0; i < list.length; i++) {
    map[list[i]] = true;
  }
  return expectsLowerCase
    ? function (val) { return map[val.toLowerCase()]; }
    : function (val) { return map[val]; }
}

/**
 * Check if a tag is a built-in tag.
 */
var isBuiltInTag = makeMap('slot,component', true);

/**
 * Check if an attribute is a reserved attribute.
 */
var isReservedAttribute = makeMap('key,ref,slot,slot-scope,is');

/**
 * Remove an item from an array.
 */
function remove (arr, item) {
  if (arr.length) {
    var index = arr.indexOf(item);
    if (index > -1) {
      return arr.splice(index, 1)
    }
  }
}

/**
 * Check whether an object has the property.
 */
var hasOwnProperty = Object.prototype.hasOwnProperty;
function hasOwn (obj, key) {
  return hasOwnProperty.call(obj, key)
}

/**
 * Create a cached version of a pure function.
 */
function cached (fn) {
  var cache = Object.create(null);
  return (function cachedFn (str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str))
  })
}

/**
 * Camelize a hyphen-delimited string.
 */
var camelizeRE = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(camelizeRE, function (_, c) { return c ? c.toUpperCase() : ''; })
});

/**
 * Capitalize a string.
 */
var capitalize = cached(function (str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
});

/**
 * Hyphenate a camelCase string.
 */
var hyphenateRE = /\B([A-Z])/g;
var hyphenate = cached(function (str) {
  return str.replace(hyphenateRE, '-$1').toLowerCase()
});

/**
 * Simple bind polyfill for environments that do not support it,
 * e.g., PhantomJS 1.x. Technically, we don't need this anymore
 * since native bind is now performant enough in most browsers.
 * But removing it would mean breaking code that was able to run in
 * PhantomJS 1.x, so this must be kept for backward compatibility.
 */

/* istanbul ignore next */
function polyfillBind (fn, ctx) {
  function boundFn (a) {
    var l = arguments.length;
    return l
      ? l > 1
        ? fn.apply(ctx, arguments)
        : fn.call(ctx, a)
      : fn.call(ctx)
  }

  boundFn._length = fn.length;
  return boundFn
}

function nativeBind (fn, ctx) {
  return fn.bind(ctx)
}

var bind = Function.prototype.bind
  ? nativeBind
  : polyfillBind;

/**
 * Convert an Array-like object to a real Array.
 */
function toArray (list, start) {
  start = start || 0;
  var i = list.length - start;
  var ret = new Array(i);
  while (i--) {
    ret[i] = list[i + start];
  }
  return ret
}

/**
 * Mix properties into target object.
 */
function extend (to, _from) {
  for (var key in _from) {
    to[key] = _from[key];
  }
  return to
}

/**
 * Merge an Array of Objects into a single Object.
 */
function toObject (arr) {
  var res = {};
  for (var i = 0; i < arr.length; i++) {
    if (arr[i]) {
      extend(res, arr[i]);
    }
  }
  return res
}

/* eslint-disable no-unused-vars */

/**
 * Perform no operation.
 * Stubbing args to make Flow happy without leaving useless transpiled code
 * with ...rest (https://flow.org/blog/2017/05/07/Strict-Function-Call-Arity/).
 */
function noop (a, b, c) {}

/**
 * Always return false.
 */
var no = function (a, b, c) { return false; };

/* eslint-enable no-unused-vars */

/**
 * Return the same value.
 */
var identity = function (_) { return _; };

/**
 * Check if two values are loosely equal - that is,
 * if they are plain objects, do they have the same shape?
 */
function looseEqual (a, b) {
  if (a === b) { return true }
  var isObjectA = isObject(a);
  var isObjectB = isObject(b);
  if (isObjectA && isObjectB) {
    try {
      var isArrayA = Array.isArray(a);
      var isArrayB = Array.isArray(b);
      if (isArrayA && isArrayB) {
        return a.length === b.length && a.every(function (e, i) {
          return looseEqual(e, b[i])
        })
      } else if (a instanceof Date && b instanceof Date) {
        return a.getTime() === b.getTime()
      } else if (!isArrayA && !isArrayB) {
        var keysA = Object.keys(a);
        var keysB = Object.keys(b);
        return keysA.length === keysB.length && keysA.every(function (key) {
          return looseEqual(a[key], b[key])
        })
      } else {
        /* istanbul ignore next */
        return false
      }
    } catch (e) {
      /* istanbul ignore next */
      return false
    }
  } else if (!isObjectA && !isObjectB) {
    return String(a) === String(b)
  } else {
    return false
  }
}

/**
 * Return the first index at which a loosely equal value can be
 * found in the array (if value is a plain object, the array must
 * contain an object of the same shape), or -1 if it is not present.
 */
function looseIndexOf (arr, val) {
  for (var i = 0; i < arr.length; i++) {
    if (looseEqual(arr[i], val)) { return i }
  }
  return -1
}

/**
 * Ensure a function is called only once.
 */
function once (fn) {
  var called = false;
  return function () {
    if (!called) {
      called = true;
      fn.apply(this, arguments);
    }
  }
}

var ASSET_TYPES = [
  'component',
  'directive',
  'filter'
];

var LIFECYCLE_HOOKS = [
  'beforeCreate',
  'created',
  'beforeMount',
  'mounted',
  'beforeUpdate',
  'updated',
  'beforeDestroy',
  'destroyed',
  'activated',
  'deactivated',
  'errorCaptured',
  'serverPrefetch'
];

/*  */



var config = ({
  /**
   * Option merge strategies (used in core/util/options)
   */
  // $flow-disable-line
  optionMergeStrategies: Object.create(null),

  /**
   * Whether to suppress warnings.
   */
  silent: false,

  /**
   * Show production mode tip message on boot?
   */
  productionTip: "development" !== 'production',

  /**
   * Whether to enable devtools
   */
  devtools: "development" !== 'production',

  /**
   * Whether to record perf
   */
  performance: false,

  /**
   * Error handler for watcher errors
   */
  errorHandler: null,

  /**
   * Warn handler for watcher warns
   */
  warnHandler: null,

  /**
   * Ignore certain custom elements
   */
  ignoredElements: [],

  /**
   * Custom user key aliases for v-on
   */
  // $flow-disable-line
  keyCodes: Object.create(null),

  /**
   * Check if a tag is reserved so that it cannot be registered as a
   * component. This is platform-dependent and may be overwritten.
   */
  isReservedTag: no,

  /**
   * Check if an attribute is reserved so that it cannot be used as a component
   * prop. This is platform-dependent and may be overwritten.
   */
  isReservedAttr: no,

  /**
   * Check if a tag is an unknown element.
   * Platform-dependent.
   */
  isUnknownElement: no,

  /**
   * Get the namespace of an element
   */
  getTagNamespace: noop,

  /**
   * Parse the real tag name for the specific platform.
   */
  parsePlatformTagName: identity,

  /**
   * Check if an attribute must be bound using property, e.g. value
   * Platform-dependent.
   */
  mustUseProp: no,

  /**
   * Perform updates asynchronously. Intended to be used by Vue Test Utils
   * This will significantly reduce performance if set to false.
   */
  async: true,

  /**
   * Exposed for legacy reasons
   */
  _lifecycleHooks: LIFECYCLE_HOOKS
});

/*  */

/**
 * unicode letters used for parsing html tags, component names and property paths.
 * using https://www.w3.org/TR/html53/semantics-scripting.html#potentialcustomelementname
 * skipping \u10000-\uEFFFF due to it freezing up PhantomJS
 */
var unicodeRegExp = /a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;

/**
 * Check if a string starts with $ or _
 */
function isReserved (str) {
  var c = (str + '').charCodeAt(0);
  return c === 0x24 || c === 0x5F
}

/**
 * Define a property.
 */
function def (obj, key, val, enumerable) {
  Object.defineProperty(obj, key, {
    value: val,
    enumerable: !!enumerable,
    writable: true,
    configurable: true
  });
}

/**
 * Parse simple path.
 */
var bailRE = new RegExp(("[^" + (unicodeRegExp.source) + ".$_\\d]"));
function parsePath (path) {
  if (bailRE.test(path)) {
    return
  }
  var segments = path.split('.');
  return function (obj) {
    for (var i = 0; i < segments.length; i++) {
      if (!obj) { return }
      obj = obj[segments[i]];
    }
    return obj
  }
}

/*  */

// can we use __proto__?
var hasProto = '__proto__' in {};

// Browser environment sniffing
var inBrowser = typeof window !== 'undefined';
var inWeex = typeof WXEnvironment !== 'undefined' && !!WXEnvironment.platform;
var weexPlatform = inWeex && WXEnvironment.platform.toLowerCase();
var UA = inBrowser && window.navigator.userAgent.toLowerCase();
var isIE = UA && /msie|trident/.test(UA);
var isIE9 = UA && UA.indexOf('msie 9.0') > 0;
var isEdge = UA && UA.indexOf('edge/') > 0;
var isAndroid = (UA && UA.indexOf('android') > 0) || (weexPlatform === 'android');
var isIOS = (UA && /iphone|ipad|ipod|ios/.test(UA)) || (weexPlatform === 'ios');
var isChrome = UA && /chrome\/\d+/.test(UA) && !isEdge;
var isPhantomJS = UA && /phantomjs/.test(UA);
var isFF = UA && UA.match(/firefox\/(\d+)/);

// Firefox has a "watch" function on Object.prototype...
var nativeWatch = ({}).watch;
if (inBrowser) {
  try {
    var opts = {};
    Object.defineProperty(opts, 'passive', ({
      get: function get () {
      }
    })); // https://github.com/facebook/flow/issues/285
    window.addEventListener('test-passive', null, opts);
  } catch (e) {}
}

// this needs to be lazy-evaled because vue may be required before
// vue-server-renderer can set VUE_ENV
var _isServer;
var isServerRendering = function () {
  if (_isServer === undefined) {
    /* istanbul ignore if */
    if (!inBrowser && !inWeex && typeof global !== 'undefined') {
      // detect presence of vue-server-renderer and avoid
      // Webpack shimming the process
      _isServer = global['process'] && global['process'].env.VUE_ENV === 'server';
    } else {
      _isServer = false;
    }
  }
  return _isServer
};

// detect devtools
var devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

/* istanbul ignore next */
function isNative (Ctor) {
  return typeof Ctor === 'function' && /native code/.test(Ctor.toString())
}

var hasSymbol =
  typeof Symbol !== 'undefined' && isNative(Symbol) &&
  typeof Reflect !== 'undefined' && isNative(Reflect.ownKeys);

var _Set;
/* istanbul ignore if */ // $flow-disable-line
if (typeof Set !== 'undefined' && isNative(Set)) {
  // use native Set when available.
  _Set = Set;
} else {
  // a non-standard Set polyfill that only works with primitive keys.
  _Set = /*@__PURE__*/(function () {
    function Set () {
      this.set = Object.create(null);
    }
    Set.prototype.has = function has (key) {
      return this.set[key] === true
    };
    Set.prototype.add = function add (key) {
      this.set[key] = true;
    };
    Set.prototype.clear = function clear () {
      this.set = Object.create(null);
    };

    return Set;
  }());
}

/*  */

var warn = noop;
var tip = noop;
var generateComponentTrace = (noop); // work around flow check
var formatComponentName = (noop);

if (true) {
  var hasConsole = typeof console !== 'undefined';
  var classifyRE = /(?:^|[-_])(\w)/g;
  var classify = function (str) { return str
    .replace(classifyRE, function (c) { return c.toUpperCase(); })
    .replace(/[-_]/g, ''); };

  warn = function (msg, vm) {
    var trace = vm ? generateComponentTrace(vm) : '';

    if (config.warnHandler) {
      config.warnHandler.call(null, msg, vm, trace);
    } else if (hasConsole && (!config.silent)) {
      console.error(("[Vue warn]: " + msg + trace));
    }
  };

  tip = function (msg, vm) {
    if (hasConsole && (!config.silent)) {
      console.warn("[Vue tip]: " + msg + (
        vm ? generateComponentTrace(vm) : ''
      ));
    }
  };

  formatComponentName = function (vm, includeFile) {
    {
      if(vm.$scope && vm.$scope.is){
        return vm.$scope.is
      }
    }
    if (vm.$root === vm) {
      return '<Root>'
    }
    var options = typeof vm === 'function' && vm.cid != null
      ? vm.options
      : vm._isVue
        ? vm.$options || vm.constructor.options
        : vm;
    var name = options.name || options._componentTag;
    var file = options.__file;
    if (!name && file) {
      var match = file.match(/([^/\\]+)\.vue$/);
      name = match && match[1];
    }

    return (
      (name ? ("<" + (classify(name)) + ">") : "<Anonymous>") +
      (file && includeFile !== false ? (" at " + file) : '')
    )
  };

  var repeat = function (str, n) {
    var res = '';
    while (n) {
      if (n % 2 === 1) { res += str; }
      if (n > 1) { str += str; }
      n >>= 1;
    }
    return res
  };

  generateComponentTrace = function (vm) {
    if (vm._isVue && vm.$parent) {
      var tree = [];
      var currentRecursiveSequence = 0;
      while (vm) {
        if (tree.length > 0) {
          var last = tree[tree.length - 1];
          if (last.constructor === vm.constructor) {
            currentRecursiveSequence++;
            vm = vm.$parent;
            continue
          } else if (currentRecursiveSequence > 0) {
            tree[tree.length - 1] = [last, currentRecursiveSequence];
            currentRecursiveSequence = 0;
          }
        }
        tree.push(vm);
        vm = vm.$parent;
      }
      return '\n\nfound in\n\n' + tree
        .map(function (vm, i) { return ("" + (i === 0 ? '---> ' : repeat(' ', 5 + i * 2)) + (Array.isArray(vm)
            ? ((formatComponentName(vm[0])) + "... (" + (vm[1]) + " recursive calls)")
            : formatComponentName(vm))); })
        .join('\n')
    } else {
      return ("\n\n(found in " + (formatComponentName(vm)) + ")")
    }
  };
}

/*  */

var uid = 0;

/**
 * A dep is an observable that can have multiple
 * directives subscribing to it.
 */
var Dep = function Dep () {
  // fixed by xxxxxx (nvue vuex)
  /* eslint-disable no-undef */
  if(typeof SharedObject !== 'undefined'){
    this.id = SharedObject.uid++;
  } else {
    this.id = uid++;
  }
  this.subs = [];
};

Dep.prototype.addSub = function addSub (sub) {
  this.subs.push(sub);
};

Dep.prototype.removeSub = function removeSub (sub) {
  remove(this.subs, sub);
};

Dep.prototype.depend = function depend () {
  if (Dep.SharedObject.target) {
    Dep.SharedObject.target.addDep(this);
  }
};

Dep.prototype.notify = function notify () {
  // stabilize the subscriber list first
  var subs = this.subs.slice();
  if ( true && !config.async) {
    // subs aren't sorted in scheduler if not running async
    // we need to sort them now to make sure they fire in correct
    // order
    subs.sort(function (a, b) { return a.id - b.id; });
  }
  for (var i = 0, l = subs.length; i < l; i++) {
    subs[i].update();
  }
};

// The current target watcher being evaluated.
// This is globally unique because only one watcher
// can be evaluated at a time.
// fixed by xxxxxx (nvue shared vuex)
/* eslint-disable no-undef */
Dep.SharedObject = typeof SharedObject !== 'undefined' ? SharedObject : {};
Dep.SharedObject.target = null;
Dep.SharedObject.targetStack = [];

function pushTarget (target) {
  Dep.SharedObject.targetStack.push(target);
  Dep.SharedObject.target = target;
}

function popTarget () {
  Dep.SharedObject.targetStack.pop();
  Dep.SharedObject.target = Dep.SharedObject.targetStack[Dep.SharedObject.targetStack.length - 1];
}

/*  */

var VNode = function VNode (
  tag,
  data,
  children,
  text,
  elm,
  context,
  componentOptions,
  asyncFactory
) {
  this.tag = tag;
  this.data = data;
  this.children = children;
  this.text = text;
  this.elm = elm;
  this.ns = undefined;
  this.context = context;
  this.fnContext = undefined;
  this.fnOptions = undefined;
  this.fnScopeId = undefined;
  this.key = data && data.key;
  this.componentOptions = componentOptions;
  this.componentInstance = undefined;
  this.parent = undefined;
  this.raw = false;
  this.isStatic = false;
  this.isRootInsert = true;
  this.isComment = false;
  this.isCloned = false;
  this.isOnce = false;
  this.asyncFactory = asyncFactory;
  this.asyncMeta = undefined;
  this.isAsyncPlaceholder = false;
};

var prototypeAccessors = { child: { configurable: true } };

// DEPRECATED: alias for componentInstance for backwards compat.
/* istanbul ignore next */
prototypeAccessors.child.get = function () {
  return this.componentInstance
};

Object.defineProperties( VNode.prototype, prototypeAccessors );

var createEmptyVNode = function (text) {
  if ( text === void 0 ) text = '';

  var node = new VNode();
  node.text = text;
  node.isComment = true;
  return node
};

function createTextVNode (val) {
  return new VNode(undefined, undefined, undefined, String(val))
}

// optimized shallow clone
// used for static nodes and slot nodes because they may be reused across
// multiple renders, cloning them avoids errors when DOM manipulations rely
// on their elm reference.
function cloneVNode (vnode) {
  var cloned = new VNode(
    vnode.tag,
    vnode.data,
    // #7975
    // clone children array to avoid mutating original in case of cloning
    // a child.
    vnode.children && vnode.children.slice(),
    vnode.text,
    vnode.elm,
    vnode.context,
    vnode.componentOptions,
    vnode.asyncFactory
  );
  cloned.ns = vnode.ns;
  cloned.isStatic = vnode.isStatic;
  cloned.key = vnode.key;
  cloned.isComment = vnode.isComment;
  cloned.fnContext = vnode.fnContext;
  cloned.fnOptions = vnode.fnOptions;
  cloned.fnScopeId = vnode.fnScopeId;
  cloned.asyncMeta = vnode.asyncMeta;
  cloned.isCloned = true;
  return cloned
}

/*
 * not type checking this file because flow doesn't play well with
 * dynamically accessing methods on Array prototype
 */

var arrayProto = Array.prototype;
var arrayMethods = Object.create(arrayProto);

var methodsToPatch = [
  'push',
  'pop',
  'shift',
  'unshift',
  'splice',
  'sort',
  'reverse'
];

/**
 * Intercept mutating methods and emit events
 */
methodsToPatch.forEach(function (method) {
  // cache original method
  var original = arrayProto[method];
  def(arrayMethods, method, function mutator () {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

    var result = original.apply(this, args);
    var ob = this.__ob__;
    var inserted;
    switch (method) {
      case 'push':
      case 'unshift':
        inserted = args;
        break
      case 'splice':
        inserted = args.slice(2);
        break
    }
    if (inserted) { ob.observeArray(inserted); }
    // notify change
    ob.dep.notify();
    return result
  });
});

/*  */

var arrayKeys = Object.getOwnPropertyNames(arrayMethods);

/**
 * In some cases we may want to disable observation inside a component's
 * update computation.
 */
var shouldObserve = true;

function toggleObserving (value) {
  shouldObserve = value;
}

/**
 * Observer class that is attached to each observed
 * object. Once attached, the observer converts the target
 * object's property keys into getter/setters that
 * collect dependencies and dispatch updates.
 */
var Observer = function Observer (value) {
  this.value = value;
  this.dep = new Dep();
  this.vmCount = 0;
  def(value, '__ob__', this);
  if (Array.isArray(value)) {
    if (hasProto) {
      {// fixed by xxxxxx 微信小程序使用 plugins 之后，数组方法被直接挂载到了数组对象上，需要执行 copyAugment 逻辑
        if(value.push !== value.__proto__.push){
          copyAugment(value, arrayMethods, arrayKeys);
        } else {
          protoAugment(value, arrayMethods);
        }
      }
    } else {
      copyAugment(value, arrayMethods, arrayKeys);
    }
    this.observeArray(value);
  } else {
    this.walk(value);
  }
};

/**
 * Walk through all properties and convert them into
 * getter/setters. This method should only be called when
 * value type is Object.
 */
Observer.prototype.walk = function walk (obj) {
  var keys = Object.keys(obj);
  for (var i = 0; i < keys.length; i++) {
    defineReactive$$1(obj, keys[i]);
  }
};

/**
 * Observe a list of Array items.
 */
Observer.prototype.observeArray = function observeArray (items) {
  for (var i = 0, l = items.length; i < l; i++) {
    observe(items[i]);
  }
};

// helpers

/**
 * Augment a target Object or Array by intercepting
 * the prototype chain using __proto__
 */
function protoAugment (target, src) {
  /* eslint-disable no-proto */
  target.__proto__ = src;
  /* eslint-enable no-proto */
}

/**
 * Augment a target Object or Array by defining
 * hidden properties.
 */
/* istanbul ignore next */
function copyAugment (target, src, keys) {
  for (var i = 0, l = keys.length; i < l; i++) {
    var key = keys[i];
    def(target, key, src[key]);
  }
}

/**
 * Attempt to create an observer instance for a value,
 * returns the new observer if successfully observed,
 * or the existing observer if the value already has one.
 */
function observe (value, asRootData) {
  if (!isObject(value) || value instanceof VNode) {
    return
  }
  var ob;
  if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
    ob = value.__ob__;
  } else if (
    shouldObserve &&
    !isServerRendering() &&
    (Array.isArray(value) || isPlainObject(value)) &&
    Object.isExtensible(value) &&
    !value._isVue
  ) {
    ob = new Observer(value);
  }
  if (asRootData && ob) {
    ob.vmCount++;
  }
  return ob
}

/**
 * Define a reactive property on an Object.
 */
function defineReactive$$1 (
  obj,
  key,
  val,
  customSetter,
  shallow
) {
  var dep = new Dep();

  var property = Object.getOwnPropertyDescriptor(obj, key);
  if (property && property.configurable === false) {
    return
  }

  // cater for pre-defined getter/setters
  var getter = property && property.get;
  var setter = property && property.set;
  if ((!getter || setter) && arguments.length === 2) {
    val = obj[key];
  }

  var childOb = !shallow && observe(val);
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get: function reactiveGetter () {
      var value = getter ? getter.call(obj) : val;
      if (Dep.SharedObject.target) { // fixed by xxxxxx
        dep.depend();
        if (childOb) {
          childOb.dep.depend();
          if (Array.isArray(value)) {
            dependArray(value);
          }
        }
      }
      return value
    },
    set: function reactiveSetter (newVal) {
      var value = getter ? getter.call(obj) : val;
      /* eslint-disable no-self-compare */
      if (newVal === value || (newVal !== newVal && value !== value)) {
        return
      }
      /* eslint-enable no-self-compare */
      if ( true && customSetter) {
        customSetter();
      }
      // #7981: for accessor properties without setter
      if (getter && !setter) { return }
      if (setter) {
        setter.call(obj, newVal);
      } else {
        val = newVal;
      }
      childOb = !shallow && observe(newVal);
      dep.notify();
    }
  });
}

/**
 * Set a property on an object. Adds the new property and
 * triggers change notification if the property doesn't
 * already exist.
 */
function set (target, key, val) {
  if ( true &&
    (isUndef(target) || isPrimitive(target))
  ) {
    warn(("Cannot set reactive property on undefined, null, or primitive value: " + ((target))));
  }
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.length = Math.max(target.length, key);
    target.splice(key, 1, val);
    return val
  }
  if (key in target && !(key in Object.prototype)) {
    target[key] = val;
    return val
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
     true && warn(
      'Avoid adding reactive properties to a Vue instance or its root $data ' +
      'at runtime - declare it upfront in the data option.'
    );
    return val
  }
  if (!ob) {
    target[key] = val;
    return val
  }
  defineReactive$$1(ob.value, key, val);
  ob.dep.notify();
  return val
}

/**
 * Delete a property and trigger change if necessary.
 */
function del (target, key) {
  if ( true &&
    (isUndef(target) || isPrimitive(target))
  ) {
    warn(("Cannot delete reactive property on undefined, null, or primitive value: " + ((target))));
  }
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.splice(key, 1);
    return
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
     true && warn(
      'Avoid deleting properties on a Vue instance or its root $data ' +
      '- just set it to null.'
    );
    return
  }
  if (!hasOwn(target, key)) {
    return
  }
  delete target[key];
  if (!ob) {
    return
  }
  ob.dep.notify();
}

/**
 * Collect dependencies on array elements when the array is touched, since
 * we cannot intercept array element access like property getters.
 */
function dependArray (value) {
  for (var e = (void 0), i = 0, l = value.length; i < l; i++) {
    e = value[i];
    e && e.__ob__ && e.__ob__.dep.depend();
    if (Array.isArray(e)) {
      dependArray(e);
    }
  }
}

/*  */

/**
 * Option overwriting strategies are functions that handle
 * how to merge a parent option value and a child option
 * value into the final value.
 */
var strats = config.optionMergeStrategies;

/**
 * Options with restrictions
 */
if (true) {
  strats.el = strats.propsData = function (parent, child, vm, key) {
    if (!vm) {
      warn(
        "option \"" + key + "\" can only be used during instance " +
        'creation with the `new` keyword.'
      );
    }
    return defaultStrat(parent, child)
  };
}

/**
 * Helper that recursively merges two data objects together.
 */
function mergeData (to, from) {
  if (!from) { return to }
  var key, toVal, fromVal;

  var keys = hasSymbol
    ? Reflect.ownKeys(from)
    : Object.keys(from);

  for (var i = 0; i < keys.length; i++) {
    key = keys[i];
    // in case the object is already observed...
    if (key === '__ob__') { continue }
    toVal = to[key];
    fromVal = from[key];
    if (!hasOwn(to, key)) {
      set(to, key, fromVal);
    } else if (
      toVal !== fromVal &&
      isPlainObject(toVal) &&
      isPlainObject(fromVal)
    ) {
      mergeData(toVal, fromVal);
    }
  }
  return to
}

/**
 * Data
 */
function mergeDataOrFn (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    // in a Vue.extend merge, both should be functions
    if (!childVal) {
      return parentVal
    }
    if (!parentVal) {
      return childVal
    }
    // when parentVal & childVal are both present,
    // we need to return a function that returns the
    // merged result of both functions... no need to
    // check if parentVal is a function here because
    // it has to be a function to pass previous merges.
    return function mergedDataFn () {
      return mergeData(
        typeof childVal === 'function' ? childVal.call(this, this) : childVal,
        typeof parentVal === 'function' ? parentVal.call(this, this) : parentVal
      )
    }
  } else {
    return function mergedInstanceDataFn () {
      // instance merge
      var instanceData = typeof childVal === 'function'
        ? childVal.call(vm, vm)
        : childVal;
      var defaultData = typeof parentVal === 'function'
        ? parentVal.call(vm, vm)
        : parentVal;
      if (instanceData) {
        return mergeData(instanceData, defaultData)
      } else {
        return defaultData
      }
    }
  }
}

strats.data = function (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    if (childVal && typeof childVal !== 'function') {
       true && warn(
        'The "data" option should be a function ' +
        'that returns a per-instance value in component ' +
        'definitions.',
        vm
      );

      return parentVal
    }
    return mergeDataOrFn(parentVal, childVal)
  }

  return mergeDataOrFn(parentVal, childVal, vm)
};

/**
 * Hooks and props are merged as arrays.
 */
function mergeHook (
  parentVal,
  childVal
) {
  var res = childVal
    ? parentVal
      ? parentVal.concat(childVal)
      : Array.isArray(childVal)
        ? childVal
        : [childVal]
    : parentVal;
  return res
    ? dedupeHooks(res)
    : res
}

function dedupeHooks (hooks) {
  var res = [];
  for (var i = 0; i < hooks.length; i++) {
    if (res.indexOf(hooks[i]) === -1) {
      res.push(hooks[i]);
    }
  }
  return res
}

LIFECYCLE_HOOKS.forEach(function (hook) {
  strats[hook] = mergeHook;
});

/**
 * Assets
 *
 * When a vm is present (instance creation), we need to do
 * a three-way merge between constructor options, instance
 * options and parent options.
 */
function mergeAssets (
  parentVal,
  childVal,
  vm,
  key
) {
  var res = Object.create(parentVal || null);
  if (childVal) {
     true && assertObjectType(key, childVal, vm);
    return extend(res, childVal)
  } else {
    return res
  }
}

ASSET_TYPES.forEach(function (type) {
  strats[type + 's'] = mergeAssets;
});

/**
 * Watchers.
 *
 * Watchers hashes should not overwrite one
 * another, so we merge them as arrays.
 */
strats.watch = function (
  parentVal,
  childVal,
  vm,
  key
) {
  // work around Firefox's Object.prototype.watch...
  if (parentVal === nativeWatch) { parentVal = undefined; }
  if (childVal === nativeWatch) { childVal = undefined; }
  /* istanbul ignore if */
  if (!childVal) { return Object.create(parentVal || null) }
  if (true) {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) { return childVal }
  var ret = {};
  extend(ret, parentVal);
  for (var key$1 in childVal) {
    var parent = ret[key$1];
    var child = childVal[key$1];
    if (parent && !Array.isArray(parent)) {
      parent = [parent];
    }
    ret[key$1] = parent
      ? parent.concat(child)
      : Array.isArray(child) ? child : [child];
  }
  return ret
};

/**
 * Other object hashes.
 */
strats.props =
strats.methods =
strats.inject =
strats.computed = function (
  parentVal,
  childVal,
  vm,
  key
) {
  if (childVal && "development" !== 'production') {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) { return childVal }
  var ret = Object.create(null);
  extend(ret, parentVal);
  if (childVal) { extend(ret, childVal); }
  return ret
};
strats.provide = mergeDataOrFn;

/**
 * Default strategy.
 */
var defaultStrat = function (parentVal, childVal) {
  return childVal === undefined
    ? parentVal
    : childVal
};

/**
 * Validate component names
 */
function checkComponents (options) {
  for (var key in options.components) {
    validateComponentName(key);
  }
}

function validateComponentName (name) {
  if (!new RegExp(("^[a-zA-Z][\\-\\.0-9_" + (unicodeRegExp.source) + "]*$")).test(name)) {
    warn(
      'Invalid component name: "' + name + '". Component names ' +
      'should conform to valid custom element name in html5 specification.'
    );
  }
  if (isBuiltInTag(name) || config.isReservedTag(name)) {
    warn(
      'Do not use built-in or reserved HTML elements as component ' +
      'id: ' + name
    );
  }
}

/**
 * Ensure all props option syntax are normalized into the
 * Object-based format.
 */
function normalizeProps (options, vm) {
  var props = options.props;
  if (!props) { return }
  var res = {};
  var i, val, name;
  if (Array.isArray(props)) {
    i = props.length;
    while (i--) {
      val = props[i];
      if (typeof val === 'string') {
        name = camelize(val);
        res[name] = { type: null };
      } else if (true) {
        warn('props must be strings when using array syntax.');
      }
    }
  } else if (isPlainObject(props)) {
    for (var key in props) {
      val = props[key];
      name = camelize(key);
      res[name] = isPlainObject(val)
        ? val
        : { type: val };
    }
  } else if (true) {
    warn(
      "Invalid value for option \"props\": expected an Array or an Object, " +
      "but got " + (toRawType(props)) + ".",
      vm
    );
  }
  options.props = res;
}

/**
 * Normalize all injections into Object-based format
 */
function normalizeInject (options, vm) {
  var inject = options.inject;
  if (!inject) { return }
  var normalized = options.inject = {};
  if (Array.isArray(inject)) {
    for (var i = 0; i < inject.length; i++) {
      normalized[inject[i]] = { from: inject[i] };
    }
  } else if (isPlainObject(inject)) {
    for (var key in inject) {
      var val = inject[key];
      normalized[key] = isPlainObject(val)
        ? extend({ from: key }, val)
        : { from: val };
    }
  } else if (true) {
    warn(
      "Invalid value for option \"inject\": expected an Array or an Object, " +
      "but got " + (toRawType(inject)) + ".",
      vm
    );
  }
}

/**
 * Normalize raw function directives into object format.
 */
function normalizeDirectives (options) {
  var dirs = options.directives;
  if (dirs) {
    for (var key in dirs) {
      var def$$1 = dirs[key];
      if (typeof def$$1 === 'function') {
        dirs[key] = { bind: def$$1, update: def$$1 };
      }
    }
  }
}

function assertObjectType (name, value, vm) {
  if (!isPlainObject(value)) {
    warn(
      "Invalid value for option \"" + name + "\": expected an Object, " +
      "but got " + (toRawType(value)) + ".",
      vm
    );
  }
}

/**
 * Merge two option objects into a new one.
 * Core utility used in both instantiation and inheritance.
 */
function mergeOptions (
  parent,
  child,
  vm
) {
  if (true) {
    checkComponents(child);
  }

  if (typeof child === 'function') {
    child = child.options;
  }

  normalizeProps(child, vm);
  normalizeInject(child, vm);
  normalizeDirectives(child);

  // Apply extends and mixins on the child options,
  // but only if it is a raw options object that isn't
  // the result of another mergeOptions call.
  // Only merged options has the _base property.
  if (!child._base) {
    if (child.extends) {
      parent = mergeOptions(parent, child.extends, vm);
    }
    if (child.mixins) {
      for (var i = 0, l = child.mixins.length; i < l; i++) {
        parent = mergeOptions(parent, child.mixins[i], vm);
      }
    }
  }

  var options = {};
  var key;
  for (key in parent) {
    mergeField(key);
  }
  for (key in child) {
    if (!hasOwn(parent, key)) {
      mergeField(key);
    }
  }
  function mergeField (key) {
    var strat = strats[key] || defaultStrat;
    options[key] = strat(parent[key], child[key], vm, key);
  }
  return options
}

/**
 * Resolve an asset.
 * This function is used because child instances need access
 * to assets defined in its ancestor chain.
 */
function resolveAsset (
  options,
  type,
  id,
  warnMissing
) {
  /* istanbul ignore if */
  if (typeof id !== 'string') {
    return
  }
  var assets = options[type];
  // check local registration variations first
  if (hasOwn(assets, id)) { return assets[id] }
  var camelizedId = camelize(id);
  if (hasOwn(assets, camelizedId)) { return assets[camelizedId] }
  var PascalCaseId = capitalize(camelizedId);
  if (hasOwn(assets, PascalCaseId)) { return assets[PascalCaseId] }
  // fallback to prototype chain
  var res = assets[id] || assets[camelizedId] || assets[PascalCaseId];
  if ( true && warnMissing && !res) {
    warn(
      'Failed to resolve ' + type.slice(0, -1) + ': ' + id,
      options
    );
  }
  return res
}

/*  */



function validateProp (
  key,
  propOptions,
  propsData,
  vm
) {
  var prop = propOptions[key];
  var absent = !hasOwn(propsData, key);
  var value = propsData[key];
  // boolean casting
  var booleanIndex = getTypeIndex(Boolean, prop.type);
  if (booleanIndex > -1) {
    if (absent && !hasOwn(prop, 'default')) {
      value = false;
    } else if (value === '' || value === hyphenate(key)) {
      // only cast empty string / same name to boolean if
      // boolean has higher priority
      var stringIndex = getTypeIndex(String, prop.type);
      if (stringIndex < 0 || booleanIndex < stringIndex) {
        value = true;
      }
    }
  }
  // check default value
  if (value === undefined) {
    value = getPropDefaultValue(vm, prop, key);
    // since the default value is a fresh copy,
    // make sure to observe it.
    var prevShouldObserve = shouldObserve;
    toggleObserving(true);
    observe(value);
    toggleObserving(prevShouldObserve);
  }
  if (
    true
  ) {
    assertProp(prop, key, value, vm, absent);
  }
  return value
}

/**
 * Get the default value of a prop.
 */
function getPropDefaultValue (vm, prop, key) {
  // no default, return undefined
  if (!hasOwn(prop, 'default')) {
    return undefined
  }
  var def = prop.default;
  // warn against non-factory defaults for Object & Array
  if ( true && isObject(def)) {
    warn(
      'Invalid default value for prop "' + key + '": ' +
      'Props with type Object/Array must use a factory function ' +
      'to return the default value.',
      vm
    );
  }
  // the raw prop value was also undefined from previous render,
  // return previous default value to avoid unnecessary watcher trigger
  if (vm && vm.$options.propsData &&
    vm.$options.propsData[key] === undefined &&
    vm._props[key] !== undefined
  ) {
    return vm._props[key]
  }
  // call factory function for non-Function types
  // a value is Function if its prototype is function even across different execution context
  return typeof def === 'function' && getType(prop.type) !== 'Function'
    ? def.call(vm)
    : def
}

/**
 * Assert whether a prop is valid.
 */
function assertProp (
  prop,
  name,
  value,
  vm,
  absent
) {
  if (prop.required && absent) {
    warn(
      'Missing required prop: "' + name + '"',
      vm
    );
    return
  }
  if (value == null && !prop.required) {
    return
  }
  var type = prop.type;
  var valid = !type || type === true;
  var expectedTypes = [];
  if (type) {
    if (!Array.isArray(type)) {
      type = [type];
    }
    for (var i = 0; i < type.length && !valid; i++) {
      var assertedType = assertType(value, type[i]);
      expectedTypes.push(assertedType.expectedType || '');
      valid = assertedType.valid;
    }
  }

  if (!valid) {
    warn(
      getInvalidTypeMessage(name, value, expectedTypes),
      vm
    );
    return
  }
  var validator = prop.validator;
  if (validator) {
    if (!validator(value)) {
      warn(
        'Invalid prop: custom validator check failed for prop "' + name + '".',
        vm
      );
    }
  }
}

var simpleCheckRE = /^(String|Number|Boolean|Function|Symbol)$/;

function assertType (value, type) {
  var valid;
  var expectedType = getType(type);
  if (simpleCheckRE.test(expectedType)) {
    var t = typeof value;
    valid = t === expectedType.toLowerCase();
    // for primitive wrapper objects
    if (!valid && t === 'object') {
      valid = value instanceof type;
    }
  } else if (expectedType === 'Object') {
    valid = isPlainObject(value);
  } else if (expectedType === 'Array') {
    valid = Array.isArray(value);
  } else {
    valid = value instanceof type;
  }
  return {
    valid: valid,
    expectedType: expectedType
  }
}

/**
 * Use function string name to check built-in types,
 * because a simple equality check will fail when running
 * across different vms / iframes.
 */
function getType (fn) {
  var match = fn && fn.toString().match(/^\s*function (\w+)/);
  return match ? match[1] : ''
}

function isSameType (a, b) {
  return getType(a) === getType(b)
}

function getTypeIndex (type, expectedTypes) {
  if (!Array.isArray(expectedTypes)) {
    return isSameType(expectedTypes, type) ? 0 : -1
  }
  for (var i = 0, len = expectedTypes.length; i < len; i++) {
    if (isSameType(expectedTypes[i], type)) {
      return i
    }
  }
  return -1
}

function getInvalidTypeMessage (name, value, expectedTypes) {
  var message = "Invalid prop: type check failed for prop \"" + name + "\"." +
    " Expected " + (expectedTypes.map(capitalize).join(', '));
  var expectedType = expectedTypes[0];
  var receivedType = toRawType(value);
  var expectedValue = styleValue(value, expectedType);
  var receivedValue = styleValue(value, receivedType);
  // check if we need to specify expected value
  if (expectedTypes.length === 1 &&
      isExplicable(expectedType) &&
      !isBoolean(expectedType, receivedType)) {
    message += " with value " + expectedValue;
  }
  message += ", got " + receivedType + " ";
  // check if we need to specify received value
  if (isExplicable(receivedType)) {
    message += "with value " + receivedValue + ".";
  }
  return message
}

function styleValue (value, type) {
  if (type === 'String') {
    return ("\"" + value + "\"")
  } else if (type === 'Number') {
    return ("" + (Number(value)))
  } else {
    return ("" + value)
  }
}

function isExplicable (value) {
  var explicitTypes = ['string', 'number', 'boolean'];
  return explicitTypes.some(function (elem) { return value.toLowerCase() === elem; })
}

function isBoolean () {
  var args = [], len = arguments.length;
  while ( len-- ) args[ len ] = arguments[ len ];

  return args.some(function (elem) { return elem.toLowerCase() === 'boolean'; })
}

/*  */

function handleError (err, vm, info) {
  // Deactivate deps tracking while processing error handler to avoid possible infinite rendering.
  // See: https://github.com/vuejs/vuex/issues/1505
  pushTarget();
  try {
    if (vm) {
      var cur = vm;
      while ((cur = cur.$parent)) {
        var hooks = cur.$options.errorCaptured;
        if (hooks) {
          for (var i = 0; i < hooks.length; i++) {
            try {
              var capture = hooks[i].call(cur, err, vm, info) === false;
              if (capture) { return }
            } catch (e) {
              globalHandleError(e, cur, 'errorCaptured hook');
            }
          }
        }
      }
    }
    globalHandleError(err, vm, info);
  } finally {
    popTarget();
  }
}

function invokeWithErrorHandling (
  handler,
  context,
  args,
  vm,
  info
) {
  var res;
  try {
    res = args ? handler.apply(context, args) : handler.call(context);
    if (res && !res._isVue && isPromise(res) && !res._handled) {
      res.catch(function (e) { return handleError(e, vm, info + " (Promise/async)"); });
      // issue #9511
      // avoid catch triggering multiple times when nested calls
      res._handled = true;
    }
  } catch (e) {
    handleError(e, vm, info);
  }
  return res
}

function globalHandleError (err, vm, info) {
  if (config.errorHandler) {
    try {
      return config.errorHandler.call(null, err, vm, info)
    } catch (e) {
      // if the user intentionally throws the original error in the handler,
      // do not log it twice
      if (e !== err) {
        logError(e, null, 'config.errorHandler');
      }
    }
  }
  logError(err, vm, info);
}

function logError (err, vm, info) {
  if (true) {
    warn(("Error in " + info + ": \"" + (err.toString()) + "\""), vm);
  }
  /* istanbul ignore else */
  if ((inBrowser || inWeex) && typeof console !== 'undefined') {
    console.error(err);
  } else {
    throw err
  }
}

/*  */

var callbacks = [];
var pending = false;

function flushCallbacks () {
  pending = false;
  var copies = callbacks.slice(0);
  callbacks.length = 0;
  for (var i = 0; i < copies.length; i++) {
    copies[i]();
  }
}

// Here we have async deferring wrappers using microtasks.
// In 2.5 we used (macro) tasks (in combination with microtasks).
// However, it has subtle problems when state is changed right before repaint
// (e.g. #6813, out-in transitions).
// Also, using (macro) tasks in event handler would cause some weird behaviors
// that cannot be circumvented (e.g. #7109, #7153, #7546, #7834, #8109).
// So we now use microtasks everywhere, again.
// A major drawback of this tradeoff is that there are some scenarios
// where microtasks have too high a priority and fire in between supposedly
// sequential events (e.g. #4521, #6690, which have workarounds)
// or even between bubbling of the same event (#6566).
var timerFunc;

// The nextTick behavior leverages the microtask queue, which can be accessed
// via either native Promise.then or MutationObserver.
// MutationObserver has wider support, however it is seriously bugged in
// UIWebView in iOS >= 9.3.3 when triggered in touch event handlers. It
// completely stops working after triggering a few times... so, if native
// Promise is available, we will use it:
/* istanbul ignore next, $flow-disable-line */
if (typeof Promise !== 'undefined' && isNative(Promise)) {
  var p = Promise.resolve();
  timerFunc = function () {
    p.then(flushCallbacks);
    // In problematic UIWebViews, Promise.then doesn't completely break, but
    // it can get stuck in a weird state where callbacks are pushed into the
    // microtask queue but the queue isn't being flushed, until the browser
    // needs to do some other work, e.g. handle a timer. Therefore we can
    // "force" the microtask queue to be flushed by adding an empty timer.
    if (isIOS) { setTimeout(noop); }
  };
} else if (!isIE && typeof MutationObserver !== 'undefined' && (
  isNative(MutationObserver) ||
  // PhantomJS and iOS 7.x
  MutationObserver.toString() === '[object MutationObserverConstructor]'
)) {
  // Use MutationObserver where native Promise is not available,
  // e.g. PhantomJS, iOS7, Android 4.4
  // (#6466 MutationObserver is unreliable in IE11)
  var counter = 1;
  var observer = new MutationObserver(flushCallbacks);
  var textNode = document.createTextNode(String(counter));
  observer.observe(textNode, {
    characterData: true
  });
  timerFunc = function () {
    counter = (counter + 1) % 2;
    textNode.data = String(counter);
  };
} else if (typeof setImmediate !== 'undefined' && isNative(setImmediate)) {
  // Fallback to setImmediate.
  // Technically it leverages the (macro) task queue,
  // but it is still a better choice than setTimeout.
  timerFunc = function () {
    setImmediate(flushCallbacks);
  };
} else {
  // Fallback to setTimeout.
  timerFunc = function () {
    setTimeout(flushCallbacks, 0);
  };
}

function nextTick (cb, ctx) {
  var _resolve;
  callbacks.push(function () {
    if (cb) {
      try {
        cb.call(ctx);
      } catch (e) {
        handleError(e, ctx, 'nextTick');
      }
    } else if (_resolve) {
      _resolve(ctx);
    }
  });
  if (!pending) {
    pending = true;
    timerFunc();
  }
  // $flow-disable-line
  if (!cb && typeof Promise !== 'undefined') {
    return new Promise(function (resolve) {
      _resolve = resolve;
    })
  }
}

/*  */

/* not type checking this file because flow doesn't play well with Proxy */

var initProxy;

if (true) {
  var allowedGlobals = makeMap(
    'Infinity,undefined,NaN,isFinite,isNaN,' +
    'parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,' +
    'Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,' +
    'require' // for Webpack/Browserify
  );

  var warnNonPresent = function (target, key) {
    warn(
      "Property or method \"" + key + "\" is not defined on the instance but " +
      'referenced during render. Make sure that this property is reactive, ' +
      'either in the data option, or for class-based components, by ' +
      'initializing the property. ' +
      'See: https://vuejs.org/v2/guide/reactivity.html#Declaring-Reactive-Properties.',
      target
    );
  };

  var warnReservedPrefix = function (target, key) {
    warn(
      "Property \"" + key + "\" must be accessed with \"$data." + key + "\" because " +
      'properties starting with "$" or "_" are not proxied in the Vue instance to ' +
      'prevent conflicts with Vue internals. ' +
      'See: https://vuejs.org/v2/api/#data',
      target
    );
  };

  var hasProxy =
    typeof Proxy !== 'undefined' && isNative(Proxy);

  if (hasProxy) {
    var isBuiltInModifier = makeMap('stop,prevent,self,ctrl,shift,alt,meta,exact');
    config.keyCodes = new Proxy(config.keyCodes, {
      set: function set (target, key, value) {
        if (isBuiltInModifier(key)) {
          warn(("Avoid overwriting built-in modifier in config.keyCodes: ." + key));
          return false
        } else {
          target[key] = value;
          return true
        }
      }
    });
  }

  var hasHandler = {
    has: function has (target, key) {
      var has = key in target;
      var isAllowed = allowedGlobals(key) ||
        (typeof key === 'string' && key.charAt(0) === '_' && !(key in target.$data));
      if (!has && !isAllowed) {
        if (key in target.$data) { warnReservedPrefix(target, key); }
        else { warnNonPresent(target, key); }
      }
      return has || !isAllowed
    }
  };

  var getHandler = {
    get: function get (target, key) {
      if (typeof key === 'string' && !(key in target)) {
        if (key in target.$data) { warnReservedPrefix(target, key); }
        else { warnNonPresent(target, key); }
      }
      return target[key]
    }
  };

  initProxy = function initProxy (vm) {
    if (hasProxy) {
      // determine which proxy handler to use
      var options = vm.$options;
      var handlers = options.render && options.render._withStripped
        ? getHandler
        : hasHandler;
      vm._renderProxy = new Proxy(vm, handlers);
    } else {
      vm._renderProxy = vm;
    }
  };
}

/*  */

var seenObjects = new _Set();

/**
 * Recursively traverse an object to evoke all converted
 * getters, so that every nested property inside the object
 * is collected as a "deep" dependency.
 */
function traverse (val) {
  _traverse(val, seenObjects);
  seenObjects.clear();
}

function _traverse (val, seen) {
  var i, keys;
  var isA = Array.isArray(val);
  if ((!isA && !isObject(val)) || Object.isFrozen(val) || val instanceof VNode) {
    return
  }
  if (val.__ob__) {
    var depId = val.__ob__.dep.id;
    if (seen.has(depId)) {
      return
    }
    seen.add(depId);
  }
  if (isA) {
    i = val.length;
    while (i--) { _traverse(val[i], seen); }
  } else {
    keys = Object.keys(val);
    i = keys.length;
    while (i--) { _traverse(val[keys[i]], seen); }
  }
}

var mark;
var measure;

if (true) {
  var perf = inBrowser && window.performance;
  /* istanbul ignore if */
  if (
    perf &&
    perf.mark &&
    perf.measure &&
    perf.clearMarks &&
    perf.clearMeasures
  ) {
    mark = function (tag) { return perf.mark(tag); };
    measure = function (name, startTag, endTag) {
      perf.measure(name, startTag, endTag);
      perf.clearMarks(startTag);
      perf.clearMarks(endTag);
      // perf.clearMeasures(name)
    };
  }
}

/*  */

var normalizeEvent = cached(function (name) {
  var passive = name.charAt(0) === '&';
  name = passive ? name.slice(1) : name;
  var once$$1 = name.charAt(0) === '~'; // Prefixed last, checked first
  name = once$$1 ? name.slice(1) : name;
  var capture = name.charAt(0) === '!';
  name = capture ? name.slice(1) : name;
  return {
    name: name,
    once: once$$1,
    capture: capture,
    passive: passive
  }
});

function createFnInvoker (fns, vm) {
  function invoker () {
    var arguments$1 = arguments;

    var fns = invoker.fns;
    if (Array.isArray(fns)) {
      var cloned = fns.slice();
      for (var i = 0; i < cloned.length; i++) {
        invokeWithErrorHandling(cloned[i], null, arguments$1, vm, "v-on handler");
      }
    } else {
      // return handler return value for single handlers
      return invokeWithErrorHandling(fns, null, arguments, vm, "v-on handler")
    }
  }
  invoker.fns = fns;
  return invoker
}

function updateListeners (
  on,
  oldOn,
  add,
  remove$$1,
  createOnceHandler,
  vm
) {
  var name, def$$1, cur, old, event;
  for (name in on) {
    def$$1 = cur = on[name];
    old = oldOn[name];
    event = normalizeEvent(name);
    if (isUndef(cur)) {
       true && warn(
        "Invalid handler for event \"" + (event.name) + "\": got " + String(cur),
        vm
      );
    } else if (isUndef(old)) {
      if (isUndef(cur.fns)) {
        cur = on[name] = createFnInvoker(cur, vm);
      }
      if (isTrue(event.once)) {
        cur = on[name] = createOnceHandler(event.name, cur, event.capture);
      }
      add(event.name, cur, event.capture, event.passive, event.params);
    } else if (cur !== old) {
      old.fns = cur;
      on[name] = old;
    }
  }
  for (name in oldOn) {
    if (isUndef(on[name])) {
      event = normalizeEvent(name);
      remove$$1(event.name, oldOn[name], event.capture);
    }
  }
}

/*  */

/*  */

// fixed by xxxxxx (mp properties)
function extractPropertiesFromVNodeData(data, Ctor, res, context) {
  var propOptions = Ctor.options.mpOptions && Ctor.options.mpOptions.properties;
  if (isUndef(propOptions)) {
    return res
  }
  var externalClasses = Ctor.options.mpOptions.externalClasses || [];
  var attrs = data.attrs;
  var props = data.props;
  if (isDef(attrs) || isDef(props)) {
    for (var key in propOptions) {
      var altKey = hyphenate(key);
      var result = checkProp(res, props, key, altKey, true) ||
          checkProp(res, attrs, key, altKey, false);
      // externalClass
      if (
        result &&
        res[key] &&
        externalClasses.indexOf(altKey) !== -1 &&
        context[camelize(res[key])]
      ) {
        // 赋值 externalClass 真正的值(模板里 externalClass 的值可能是字符串)
        res[key] = context[camelize(res[key])];
      }
    }
  }
  return res
}

function extractPropsFromVNodeData (
  data,
  Ctor,
  tag,
  context// fixed by xxxxxx
) {
  // we are only extracting raw values here.
  // validation and default values are handled in the child
  // component itself.
  var propOptions = Ctor.options.props;
  if (isUndef(propOptions)) {
    // fixed by xxxxxx
    return extractPropertiesFromVNodeData(data, Ctor, {}, context)
  }
  var res = {};
  var attrs = data.attrs;
  var props = data.props;
  if (isDef(attrs) || isDef(props)) {
    for (var key in propOptions) {
      var altKey = hyphenate(key);
      if (true) {
        var keyInLowerCase = key.toLowerCase();
        if (
          key !== keyInLowerCase &&
          attrs && hasOwn(attrs, keyInLowerCase)
        ) {
          tip(
            "Prop \"" + keyInLowerCase + "\" is passed to component " +
            (formatComponentName(tag || Ctor)) + ", but the declared prop name is" +
            " \"" + key + "\". " +
            "Note that HTML attributes are case-insensitive and camelCased " +
            "props need to use their kebab-case equivalents when using in-DOM " +
            "templates. You should probably use \"" + altKey + "\" instead of \"" + key + "\"."
          );
        }
      }
      checkProp(res, props, key, altKey, true) ||
      checkProp(res, attrs, key, altKey, false);
    }
  }
  // fixed by xxxxxx
  return extractPropertiesFromVNodeData(data, Ctor, res, context)
}

function checkProp (
  res,
  hash,
  key,
  altKey,
  preserve
) {
  if (isDef(hash)) {
    if (hasOwn(hash, key)) {
      res[key] = hash[key];
      if (!preserve) {
        delete hash[key];
      }
      return true
    } else if (hasOwn(hash, altKey)) {
      res[key] = hash[altKey];
      if (!preserve) {
        delete hash[altKey];
      }
      return true
    }
  }
  return false
}

/*  */

// The template compiler attempts to minimize the need for normalization by
// statically analyzing the template at compile time.
//
// For plain HTML markup, normalization can be completely skipped because the
// generated render function is guaranteed to return Array<VNode>. There are
// two cases where extra normalization is needed:

// 1. When the children contains components - because a functional component
// may return an Array instead of a single root. In this case, just a simple
// normalization is needed - if any child is an Array, we flatten the whole
// thing with Array.prototype.concat. It is guaranteed to be only 1-level deep
// because functional components already normalize their own children.
function simpleNormalizeChildren (children) {
  for (var i = 0; i < children.length; i++) {
    if (Array.isArray(children[i])) {
      return Array.prototype.concat.apply([], children)
    }
  }
  return children
}

// 2. When the children contains constructs that always generated nested Arrays,
// e.g. <template>, <slot>, v-for, or when the children is provided by user
// with hand-written render functions / JSX. In such cases a full normalization
// is needed to cater to all possible types of children values.
function normalizeChildren (children) {
  return isPrimitive(children)
    ? [createTextVNode(children)]
    : Array.isArray(children)
      ? normalizeArrayChildren(children)
      : undefined
}

function isTextNode (node) {
  return isDef(node) && isDef(node.text) && isFalse(node.isComment)
}

function normalizeArrayChildren (children, nestedIndex) {
  var res = [];
  var i, c, lastIndex, last;
  for (i = 0; i < children.length; i++) {
    c = children[i];
    if (isUndef(c) || typeof c === 'boolean') { continue }
    lastIndex = res.length - 1;
    last = res[lastIndex];
    //  nested
    if (Array.isArray(c)) {
      if (c.length > 0) {
        c = normalizeArrayChildren(c, ((nestedIndex || '') + "_" + i));
        // merge adjacent text nodes
        if (isTextNode(c[0]) && isTextNode(last)) {
          res[lastIndex] = createTextVNode(last.text + (c[0]).text);
          c.shift();
        }
        res.push.apply(res, c);
      }
    } else if (isPrimitive(c)) {
      if (isTextNode(last)) {
        // merge adjacent text nodes
        // this is necessary for SSR hydration because text nodes are
        // essentially merged when rendered to HTML strings
        res[lastIndex] = createTextVNode(last.text + c);
      } else if (c !== '') {
        // convert primitive to vnode
        res.push(createTextVNode(c));
      }
    } else {
      if (isTextNode(c) && isTextNode(last)) {
        // merge adjacent text nodes
        res[lastIndex] = createTextVNode(last.text + c.text);
      } else {
        // default key for nested array children (likely generated by v-for)
        if (isTrue(children._isVList) &&
          isDef(c.tag) &&
          isUndef(c.key) &&
          isDef(nestedIndex)) {
          c.key = "__vlist" + nestedIndex + "_" + i + "__";
        }
        res.push(c);
      }
    }
  }
  return res
}

/*  */

function initProvide (vm) {
  var provide = vm.$options.provide;
  if (provide) {
    vm._provided = typeof provide === 'function'
      ? provide.call(vm)
      : provide;
  }
}

function initInjections (vm) {
  var result = resolveInject(vm.$options.inject, vm);
  if (result) {
    toggleObserving(false);
    Object.keys(result).forEach(function (key) {
      /* istanbul ignore else */
      if (true) {
        defineReactive$$1(vm, key, result[key], function () {
          warn(
            "Avoid mutating an injected value directly since the changes will be " +
            "overwritten whenever the provided component re-renders. " +
            "injection being mutated: \"" + key + "\"",
            vm
          );
        });
      } else {}
    });
    toggleObserving(true);
  }
}

function resolveInject (inject, vm) {
  if (inject) {
    // inject is :any because flow is not smart enough to figure out cached
    var result = Object.create(null);
    var keys = hasSymbol
      ? Reflect.ownKeys(inject)
      : Object.keys(inject);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      // #6574 in case the inject object is observed...
      if (key === '__ob__') { continue }
      var provideKey = inject[key].from;
      var source = vm;
      while (source) {
        if (source._provided && hasOwn(source._provided, provideKey)) {
          result[key] = source._provided[provideKey];
          break
        }
        source = source.$parent;
      }
      if (!source) {
        if ('default' in inject[key]) {
          var provideDefault = inject[key].default;
          result[key] = typeof provideDefault === 'function'
            ? provideDefault.call(vm)
            : provideDefault;
        } else if (true) {
          warn(("Injection \"" + key + "\" not found"), vm);
        }
      }
    }
    return result
  }
}

/*  */



/**
 * Runtime helper for resolving raw children VNodes into a slot object.
 */
function resolveSlots (
  children,
  context
) {
  if (!children || !children.length) {
    return {}
  }
  var slots = {};
  for (var i = 0, l = children.length; i < l; i++) {
    var child = children[i];
    var data = child.data;
    // remove slot attribute if the node is resolved as a Vue slot node
    if (data && data.attrs && data.attrs.slot) {
      delete data.attrs.slot;
    }
    // named slots should only be respected if the vnode was rendered in the
    // same context.
    if ((child.context === context || child.fnContext === context) &&
      data && data.slot != null
    ) {
      var name = data.slot;
      var slot = (slots[name] || (slots[name] = []));
      if (child.tag === 'template') {
        slot.push.apply(slot, child.children || []);
      } else {
        slot.push(child);
      }
    } else {
      // fixed by xxxxxx 临时 hack 掉 uni-app 中的异步 name slot page
      if(child.asyncMeta && child.asyncMeta.data && child.asyncMeta.data.slot === 'page'){
        (slots['page'] || (slots['page'] = [])).push(child);
      }else{
        (slots.default || (slots.default = [])).push(child);
      }
    }
  }
  // ignore slots that contains only whitespace
  for (var name$1 in slots) {
    if (slots[name$1].every(isWhitespace)) {
      delete slots[name$1];
    }
  }
  return slots
}

function isWhitespace (node) {
  return (node.isComment && !node.asyncFactory) || node.text === ' '
}

/*  */

function normalizeScopedSlots (
  slots,
  normalSlots,
  prevSlots
) {
  var res;
  var hasNormalSlots = Object.keys(normalSlots).length > 0;
  var isStable = slots ? !!slots.$stable : !hasNormalSlots;
  var key = slots && slots.$key;
  if (!slots) {
    res = {};
  } else if (slots._normalized) {
    // fast path 1: child component re-render only, parent did not change
    return slots._normalized
  } else if (
    isStable &&
    prevSlots &&
    prevSlots !== emptyObject &&
    key === prevSlots.$key &&
    !hasNormalSlots &&
    !prevSlots.$hasNormal
  ) {
    // fast path 2: stable scoped slots w/ no normal slots to proxy,
    // only need to normalize once
    return prevSlots
  } else {
    res = {};
    for (var key$1 in slots) {
      if (slots[key$1] && key$1[0] !== '$') {
        res[key$1] = normalizeScopedSlot(normalSlots, key$1, slots[key$1]);
      }
    }
  }
  // expose normal slots on scopedSlots
  for (var key$2 in normalSlots) {
    if (!(key$2 in res)) {
      res[key$2] = proxyNormalSlot(normalSlots, key$2);
    }
  }
  // avoriaz seems to mock a non-extensible $scopedSlots object
  // and when that is passed down this would cause an error
  if (slots && Object.isExtensible(slots)) {
    (slots)._normalized = res;
  }
  def(res, '$stable', isStable);
  def(res, '$key', key);
  def(res, '$hasNormal', hasNormalSlots);
  return res
}

function normalizeScopedSlot(normalSlots, key, fn) {
  var normalized = function () {
    var res = arguments.length ? fn.apply(null, arguments) : fn({});
    res = res && typeof res === 'object' && !Array.isArray(res)
      ? [res] // single vnode
      : normalizeChildren(res);
    return res && (
      res.length === 0 ||
      (res.length === 1 && res[0].isComment) // #9658
    ) ? undefined
      : res
  };
  // this is a slot using the new v-slot syntax without scope. although it is
  // compiled as a scoped slot, render fn users would expect it to be present
  // on this.$slots because the usage is semantically a normal slot.
  if (fn.proxy) {
    Object.defineProperty(normalSlots, key, {
      get: normalized,
      enumerable: true,
      configurable: true
    });
  }
  return normalized
}

function proxyNormalSlot(slots, key) {
  return function () { return slots[key]; }
}

/*  */

/**
 * Runtime helper for rendering v-for lists.
 */
function renderList (
  val,
  render
) {
  var ret, i, l, keys, key;
  if (Array.isArray(val) || typeof val === 'string') {
    ret = new Array(val.length);
    for (i = 0, l = val.length; i < l; i++) {
      ret[i] = render(val[i], i, i, i); // fixed by xxxxxx
    }
  } else if (typeof val === 'number') {
    ret = new Array(val);
    for (i = 0; i < val; i++) {
      ret[i] = render(i + 1, i, i, i); // fixed by xxxxxx
    }
  } else if (isObject(val)) {
    if (hasSymbol && val[Symbol.iterator]) {
      ret = [];
      var iterator = val[Symbol.iterator]();
      var result = iterator.next();
      while (!result.done) {
        ret.push(render(result.value, ret.length, i++, i)); // fixed by xxxxxx
        result = iterator.next();
      }
    } else {
      keys = Object.keys(val);
      ret = new Array(keys.length);
      for (i = 0, l = keys.length; i < l; i++) {
        key = keys[i];
        ret[i] = render(val[key], key, i, i); // fixed by xxxxxx
      }
    }
  }
  if (!isDef(ret)) {
    ret = [];
  }
  (ret)._isVList = true;
  return ret
}

/*  */

/**
 * Runtime helper for rendering <slot>
 */
function renderSlot (
  name,
  fallback,
  props,
  bindObject
) {
  var scopedSlotFn = this.$scopedSlots[name];
  var nodes;
  if (scopedSlotFn) { // scoped slot
    props = props || {};
    if (bindObject) {
      if ( true && !isObject(bindObject)) {
        warn(
          'slot v-bind without argument expects an Object',
          this
        );
      }
      props = extend(extend({}, bindObject), props);
    }
    // fixed by xxxxxx app-plus scopedSlot
    nodes = scopedSlotFn(props, this, props._i) || fallback;
  } else {
    nodes = this.$slots[name] || fallback;
  }

  var target = props && props.slot;
  if (target) {
    return this.$createElement('template', { slot: target }, nodes)
  } else {
    return nodes
  }
}

/*  */

/**
 * Runtime helper for resolving filters
 */
function resolveFilter (id) {
  return resolveAsset(this.$options, 'filters', id, true) || identity
}

/*  */

function isKeyNotMatch (expect, actual) {
  if (Array.isArray(expect)) {
    return expect.indexOf(actual) === -1
  } else {
    return expect !== actual
  }
}

/**
 * Runtime helper for checking keyCodes from config.
 * exposed as Vue.prototype._k
 * passing in eventKeyName as last argument separately for backwards compat
 */
function checkKeyCodes (
  eventKeyCode,
  key,
  builtInKeyCode,
  eventKeyName,
  builtInKeyName
) {
  var mappedKeyCode = config.keyCodes[key] || builtInKeyCode;
  if (builtInKeyName && eventKeyName && !config.keyCodes[key]) {
    return isKeyNotMatch(builtInKeyName, eventKeyName)
  } else if (mappedKeyCode) {
    return isKeyNotMatch(mappedKeyCode, eventKeyCode)
  } else if (eventKeyName) {
    return hyphenate(eventKeyName) !== key
  }
}

/*  */

/**
 * Runtime helper for merging v-bind="object" into a VNode's data.
 */
function bindObjectProps (
  data,
  tag,
  value,
  asProp,
  isSync
) {
  if (value) {
    if (!isObject(value)) {
       true && warn(
        'v-bind without argument expects an Object or Array value',
        this
      );
    } else {
      if (Array.isArray(value)) {
        value = toObject(value);
      }
      var hash;
      var loop = function ( key ) {
        if (
          key === 'class' ||
          key === 'style' ||
          isReservedAttribute(key)
        ) {
          hash = data;
        } else {
          var type = data.attrs && data.attrs.type;
          hash = asProp || config.mustUseProp(tag, type, key)
            ? data.domProps || (data.domProps = {})
            : data.attrs || (data.attrs = {});
        }
        var camelizedKey = camelize(key);
        var hyphenatedKey = hyphenate(key);
        if (!(camelizedKey in hash) && !(hyphenatedKey in hash)) {
          hash[key] = value[key];

          if (isSync) {
            var on = data.on || (data.on = {});
            on[("update:" + key)] = function ($event) {
              value[key] = $event;
            };
          }
        }
      };

      for (var key in value) loop( key );
    }
  }
  return data
}

/*  */

/**
 * Runtime helper for rendering static trees.
 */
function renderStatic (
  index,
  isInFor
) {
  var cached = this._staticTrees || (this._staticTrees = []);
  var tree = cached[index];
  // if has already-rendered static tree and not inside v-for,
  // we can reuse the same tree.
  if (tree && !isInFor) {
    return tree
  }
  // otherwise, render a fresh tree.
  tree = cached[index] = this.$options.staticRenderFns[index].call(
    this._renderProxy,
    null,
    this // for render fns generated for functional component templates
  );
  markStatic(tree, ("__static__" + index), false);
  return tree
}

/**
 * Runtime helper for v-once.
 * Effectively it means marking the node as static with a unique key.
 */
function markOnce (
  tree,
  index,
  key
) {
  markStatic(tree, ("__once__" + index + (key ? ("_" + key) : "")), true);
  return tree
}

function markStatic (
  tree,
  key,
  isOnce
) {
  if (Array.isArray(tree)) {
    for (var i = 0; i < tree.length; i++) {
      if (tree[i] && typeof tree[i] !== 'string') {
        markStaticNode(tree[i], (key + "_" + i), isOnce);
      }
    }
  } else {
    markStaticNode(tree, key, isOnce);
  }
}

function markStaticNode (node, key, isOnce) {
  node.isStatic = true;
  node.key = key;
  node.isOnce = isOnce;
}

/*  */

function bindObjectListeners (data, value) {
  if (value) {
    if (!isPlainObject(value)) {
       true && warn(
        'v-on without argument expects an Object value',
        this
      );
    } else {
      var on = data.on = data.on ? extend({}, data.on) : {};
      for (var key in value) {
        var existing = on[key];
        var ours = value[key];
        on[key] = existing ? [].concat(existing, ours) : ours;
      }
    }
  }
  return data
}

/*  */

function resolveScopedSlots (
  fns, // see flow/vnode
  res,
  // the following are added in 2.6
  hasDynamicKeys,
  contentHashKey
) {
  res = res || { $stable: !hasDynamicKeys };
  for (var i = 0; i < fns.length; i++) {
    var slot = fns[i];
    if (Array.isArray(slot)) {
      resolveScopedSlots(slot, res, hasDynamicKeys);
    } else if (slot) {
      // marker for reverse proxying v-slot without scope on this.$slots
      if (slot.proxy) {
        slot.fn.proxy = true;
      }
      res[slot.key] = slot.fn;
    }
  }
  if (contentHashKey) {
    (res).$key = contentHashKey;
  }
  return res
}

/*  */

function bindDynamicKeys (baseObj, values) {
  for (var i = 0; i < values.length; i += 2) {
    var key = values[i];
    if (typeof key === 'string' && key) {
      baseObj[values[i]] = values[i + 1];
    } else if ( true && key !== '' && key !== null) {
      // null is a special value for explicitly removing a binding
      warn(
        ("Invalid value for dynamic directive argument (expected string or null): " + key),
        this
      );
    }
  }
  return baseObj
}

// helper to dynamically append modifier runtime markers to event names.
// ensure only append when value is already string, otherwise it will be cast
// to string and cause the type check to miss.
function prependModifier (value, symbol) {
  return typeof value === 'string' ? symbol + value : value
}

/*  */

function installRenderHelpers (target) {
  target._o = markOnce;
  target._n = toNumber;
  target._s = toString;
  target._l = renderList;
  target._t = renderSlot;
  target._q = looseEqual;
  target._i = looseIndexOf;
  target._m = renderStatic;
  target._f = resolveFilter;
  target._k = checkKeyCodes;
  target._b = bindObjectProps;
  target._v = createTextVNode;
  target._e = createEmptyVNode;
  target._u = resolveScopedSlots;
  target._g = bindObjectListeners;
  target._d = bindDynamicKeys;
  target._p = prependModifier;
}

/*  */

function FunctionalRenderContext (
  data,
  props,
  children,
  parent,
  Ctor
) {
  var this$1 = this;

  var options = Ctor.options;
  // ensure the createElement function in functional components
  // gets a unique context - this is necessary for correct named slot check
  var contextVm;
  if (hasOwn(parent, '_uid')) {
    contextVm = Object.create(parent);
    // $flow-disable-line
    contextVm._original = parent;
  } else {
    // the context vm passed in is a functional context as well.
    // in this case we want to make sure we are able to get a hold to the
    // real context instance.
    contextVm = parent;
    // $flow-disable-line
    parent = parent._original;
  }
  var isCompiled = isTrue(options._compiled);
  var needNormalization = !isCompiled;

  this.data = data;
  this.props = props;
  this.children = children;
  this.parent = parent;
  this.listeners = data.on || emptyObject;
  this.injections = resolveInject(options.inject, parent);
  this.slots = function () {
    if (!this$1.$slots) {
      normalizeScopedSlots(
        data.scopedSlots,
        this$1.$slots = resolveSlots(children, parent)
      );
    }
    return this$1.$slots
  };

  Object.defineProperty(this, 'scopedSlots', ({
    enumerable: true,
    get: function get () {
      return normalizeScopedSlots(data.scopedSlots, this.slots())
    }
  }));

  // support for compiled functional template
  if (isCompiled) {
    // exposing $options for renderStatic()
    this.$options = options;
    // pre-resolve slots for renderSlot()
    this.$slots = this.slots();
    this.$scopedSlots = normalizeScopedSlots(data.scopedSlots, this.$slots);
  }

  if (options._scopeId) {
    this._c = function (a, b, c, d) {
      var vnode = createElement(contextVm, a, b, c, d, needNormalization);
      if (vnode && !Array.isArray(vnode)) {
        vnode.fnScopeId = options._scopeId;
        vnode.fnContext = parent;
      }
      return vnode
    };
  } else {
    this._c = function (a, b, c, d) { return createElement(contextVm, a, b, c, d, needNormalization); };
  }
}

installRenderHelpers(FunctionalRenderContext.prototype);

function createFunctionalComponent (
  Ctor,
  propsData,
  data,
  contextVm,
  children
) {
  var options = Ctor.options;
  var props = {};
  var propOptions = options.props;
  if (isDef(propOptions)) {
    for (var key in propOptions) {
      props[key] = validateProp(key, propOptions, propsData || emptyObject);
    }
  } else {
    if (isDef(data.attrs)) { mergeProps(props, data.attrs); }
    if (isDef(data.props)) { mergeProps(props, data.props); }
  }

  var renderContext = new FunctionalRenderContext(
    data,
    props,
    children,
    contextVm,
    Ctor
  );

  var vnode = options.render.call(null, renderContext._c, renderContext);

  if (vnode instanceof VNode) {
    return cloneAndMarkFunctionalResult(vnode, data, renderContext.parent, options, renderContext)
  } else if (Array.isArray(vnode)) {
    var vnodes = normalizeChildren(vnode) || [];
    var res = new Array(vnodes.length);
    for (var i = 0; i < vnodes.length; i++) {
      res[i] = cloneAndMarkFunctionalResult(vnodes[i], data, renderContext.parent, options, renderContext);
    }
    return res
  }
}

function cloneAndMarkFunctionalResult (vnode, data, contextVm, options, renderContext) {
  // #7817 clone node before setting fnContext, otherwise if the node is reused
  // (e.g. it was from a cached normal slot) the fnContext causes named slots
  // that should not be matched to match.
  var clone = cloneVNode(vnode);
  clone.fnContext = contextVm;
  clone.fnOptions = options;
  if (true) {
    (clone.devtoolsMeta = clone.devtoolsMeta || {}).renderContext = renderContext;
  }
  if (data.slot) {
    (clone.data || (clone.data = {})).slot = data.slot;
  }
  return clone
}

function mergeProps (to, from) {
  for (var key in from) {
    to[camelize(key)] = from[key];
  }
}

/*  */

/*  */

/*  */

/*  */

// inline hooks to be invoked on component VNodes during patch
var componentVNodeHooks = {
  init: function init (vnode, hydrating) {
    if (
      vnode.componentInstance &&
      !vnode.componentInstance._isDestroyed &&
      vnode.data.keepAlive
    ) {
      // kept-alive components, treat as a patch
      var mountedNode = vnode; // work around flow
      componentVNodeHooks.prepatch(mountedNode, mountedNode);
    } else {
      var child = vnode.componentInstance = createComponentInstanceForVnode(
        vnode,
        activeInstance
      );
      child.$mount(hydrating ? vnode.elm : undefined, hydrating);
    }
  },

  prepatch: function prepatch (oldVnode, vnode) {
    var options = vnode.componentOptions;
    var child = vnode.componentInstance = oldVnode.componentInstance;
    updateChildComponent(
      child,
      options.propsData, // updated props
      options.listeners, // updated listeners
      vnode, // new parent vnode
      options.children // new children
    );
  },

  insert: function insert (vnode) {
    var context = vnode.context;
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isMounted) {
      callHook(componentInstance, 'onServiceCreated');
      callHook(componentInstance, 'onServiceAttached');
      componentInstance._isMounted = true;
      callHook(componentInstance, 'mounted');
    }
    if (vnode.data.keepAlive) {
      if (context._isMounted) {
        // vue-router#1212
        // During updates, a kept-alive component's child components may
        // change, so directly walking the tree here may call activated hooks
        // on incorrect children. Instead we push them into a queue which will
        // be processed after the whole patch process ended.
        queueActivatedComponent(componentInstance);
      } else {
        activateChildComponent(componentInstance, true /* direct */);
      }
    }
  },

  destroy: function destroy (vnode) {
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isDestroyed) {
      if (!vnode.data.keepAlive) {
        componentInstance.$destroy();
      } else {
        deactivateChildComponent(componentInstance, true /* direct */);
      }
    }
  }
};

var hooksToMerge = Object.keys(componentVNodeHooks);

function createComponent (
  Ctor,
  data,
  context,
  children,
  tag
) {
  if (isUndef(Ctor)) {
    return
  }

  var baseCtor = context.$options._base;

  // plain options object: turn it into a constructor
  if (isObject(Ctor)) {
    Ctor = baseCtor.extend(Ctor);
  }

  // if at this stage it's not a constructor or an async component factory,
  // reject.
  if (typeof Ctor !== 'function') {
    if (true) {
      warn(("Invalid Component definition: " + (String(Ctor))), context);
    }
    return
  }

  // async component
  var asyncFactory;
  if (isUndef(Ctor.cid)) {
    asyncFactory = Ctor;
    Ctor = resolveAsyncComponent(asyncFactory, baseCtor);
    if (Ctor === undefined) {
      // return a placeholder node for async component, which is rendered
      // as a comment node but preserves all the raw information for the node.
      // the information will be used for async server-rendering and hydration.
      return createAsyncPlaceholder(
        asyncFactory,
        data,
        context,
        children,
        tag
      )
    }
  }

  data = data || {};

  // resolve constructor options in case global mixins are applied after
  // component constructor creation
  resolveConstructorOptions(Ctor);

  // transform component v-model data into props & events
  if (isDef(data.model)) {
    transformModel(Ctor.options, data);
  }

  // extract props
  var propsData = extractPropsFromVNodeData(data, Ctor, tag, context); // fixed by xxxxxx

  // functional component
  if (isTrue(Ctor.options.functional)) {
    return createFunctionalComponent(Ctor, propsData, data, context, children)
  }

  // extract listeners, since these needs to be treated as
  // child component listeners instead of DOM listeners
  var listeners = data.on;
  // replace with listeners with .native modifier
  // so it gets processed during parent component patch.
  data.on = data.nativeOn;

  if (isTrue(Ctor.options.abstract)) {
    // abstract components do not keep anything
    // other than props & listeners & slot

    // work around flow
    var slot = data.slot;
    data = {};
    if (slot) {
      data.slot = slot;
    }
  }

  // install component management hooks onto the placeholder node
  installComponentHooks(data);

  // return a placeholder vnode
  var name = Ctor.options.name || tag;
  var vnode = new VNode(
    ("vue-component-" + (Ctor.cid) + (name ? ("-" + name) : '')),
    data, undefined, undefined, undefined, context,
    { Ctor: Ctor, propsData: propsData, listeners: listeners, tag: tag, children: children },
    asyncFactory
  );

  return vnode
}

function createComponentInstanceForVnode (
  vnode, // we know it's MountedComponentVNode but flow doesn't
  parent // activeInstance in lifecycle state
) {
  var options = {
    _isComponent: true,
    _parentVnode: vnode,
    parent: parent
  };
  // check inline-template render functions
  var inlineTemplate = vnode.data.inlineTemplate;
  if (isDef(inlineTemplate)) {
    options.render = inlineTemplate.render;
    options.staticRenderFns = inlineTemplate.staticRenderFns;
  }
  return new vnode.componentOptions.Ctor(options)
}

function installComponentHooks (data) {
  var hooks = data.hook || (data.hook = {});
  for (var i = 0; i < hooksToMerge.length; i++) {
    var key = hooksToMerge[i];
    var existing = hooks[key];
    var toMerge = componentVNodeHooks[key];
    if (existing !== toMerge && !(existing && existing._merged)) {
      hooks[key] = existing ? mergeHook$1(toMerge, existing) : toMerge;
    }
  }
}

function mergeHook$1 (f1, f2) {
  var merged = function (a, b) {
    // flow complains about extra args which is why we use any
    f1(a, b);
    f2(a, b);
  };
  merged._merged = true;
  return merged
}

// transform component v-model info (value and callback) into
// prop and event handler respectively.
function transformModel (options, data) {
  var prop = (options.model && options.model.prop) || 'value';
  var event = (options.model && options.model.event) || 'input'
  ;(data.attrs || (data.attrs = {}))[prop] = data.model.value;
  var on = data.on || (data.on = {});
  var existing = on[event];
  var callback = data.model.callback;
  if (isDef(existing)) {
    if (
      Array.isArray(existing)
        ? existing.indexOf(callback) === -1
        : existing !== callback
    ) {
      on[event] = [callback].concat(existing);
    }
  } else {
    on[event] = callback;
  }
}

/*  */

var SIMPLE_NORMALIZE = 1;
var ALWAYS_NORMALIZE = 2;

// wrapper function for providing a more flexible interface
// without getting yelled at by flow
function createElement (
  context,
  tag,
  data,
  children,
  normalizationType,
  alwaysNormalize
) {
  if (Array.isArray(data) || isPrimitive(data)) {
    normalizationType = children;
    children = data;
    data = undefined;
  }
  if (isTrue(alwaysNormalize)) {
    normalizationType = ALWAYS_NORMALIZE;
  }
  return _createElement(context, tag, data, children, normalizationType)
}

function _createElement (
  context,
  tag,
  data,
  children,
  normalizationType
) {
  if (isDef(data) && isDef((data).__ob__)) {
     true && warn(
      "Avoid using observed data object as vnode data: " + (JSON.stringify(data)) + "\n" +
      'Always create fresh vnode data objects in each render!',
      context
    );
    return createEmptyVNode()
  }
  // object syntax in v-bind
  if (isDef(data) && isDef(data.is)) {
    tag = data.is;
  }
  if (!tag) {
    // in case of component :is set to falsy value
    return createEmptyVNode()
  }
  // warn against non-primitive key
  if ( true &&
    isDef(data) && isDef(data.key) && !isPrimitive(data.key)
  ) {
    {
      warn(
        'Avoid using non-primitive value as key, ' +
        'use string/number value instead.',
        context
      );
    }
  }
  // support single function children as default scoped slot
  if (Array.isArray(children) &&
    typeof children[0] === 'function'
  ) {
    data = data || {};
    data.scopedSlots = { default: children[0] };
    children.length = 0;
  }
  if (normalizationType === ALWAYS_NORMALIZE) {
    children = normalizeChildren(children);
  } else if (normalizationType === SIMPLE_NORMALIZE) {
    children = simpleNormalizeChildren(children);
  }
  var vnode, ns;
  if (typeof tag === 'string') {
    var Ctor;
    ns = (context.$vnode && context.$vnode.ns) || config.getTagNamespace(tag);
    if (config.isReservedTag(tag)) {
      // platform built-in elements
      if ( true && isDef(data) && isDef(data.nativeOn)) {
        warn(
          ("The .native modifier for v-on is only valid on components but it was used on <" + tag + ">."),
          context
        );
      }
      vnode = new VNode(
        config.parsePlatformTagName(tag), data, children,
        undefined, undefined, context
      );
    } else if ((!data || !data.pre) && isDef(Ctor = resolveAsset(context.$options, 'components', tag))) {
      // component
      vnode = createComponent(Ctor, data, context, children, tag);
    } else {
      // unknown or unlisted namespaced elements
      // check at runtime because it may get assigned a namespace when its
      // parent normalizes children
      vnode = new VNode(
        tag, data, children,
        undefined, undefined, context
      );
    }
  } else {
    // direct component options / constructor
    vnode = createComponent(tag, data, context, children);
  }
  if (Array.isArray(vnode)) {
    return vnode
  } else if (isDef(vnode)) {
    if (isDef(ns)) { applyNS(vnode, ns); }
    if (isDef(data)) { registerDeepBindings(data); }
    return vnode
  } else {
    return createEmptyVNode()
  }
}

function applyNS (vnode, ns, force) {
  vnode.ns = ns;
  if (vnode.tag === 'foreignObject') {
    // use default namespace inside foreignObject
    ns = undefined;
    force = true;
  }
  if (isDef(vnode.children)) {
    for (var i = 0, l = vnode.children.length; i < l; i++) {
      var child = vnode.children[i];
      if (isDef(child.tag) && (
        isUndef(child.ns) || (isTrue(force) && child.tag !== 'svg'))) {
        applyNS(child, ns, force);
      }
    }
  }
}

// ref #5318
// necessary to ensure parent re-render when deep bindings like :style and
// :class are used on slot nodes
function registerDeepBindings (data) {
  if (isObject(data.style)) {
    traverse(data.style);
  }
  if (isObject(data.class)) {
    traverse(data.class);
  }
}

/*  */

function initRender (vm) {
  vm._vnode = null; // the root of the child tree
  vm._staticTrees = null; // v-once cached trees
  var options = vm.$options;
  var parentVnode = vm.$vnode = options._parentVnode; // the placeholder node in parent tree
  var renderContext = parentVnode && parentVnode.context;
  vm.$slots = resolveSlots(options._renderChildren, renderContext);
  vm.$scopedSlots = emptyObject;
  // bind the createElement fn to this instance
  // so that we get proper render context inside it.
  // args order: tag, data, children, normalizationType, alwaysNormalize
  // internal version is used by render functions compiled from templates
  vm._c = function (a, b, c, d) { return createElement(vm, a, b, c, d, false); };
  // normalization is always applied for the public version, used in
  // user-written render functions.
  vm.$createElement = function (a, b, c, d) { return createElement(vm, a, b, c, d, true); };

  // $attrs & $listeners are exposed for easier HOC creation.
  // they need to be reactive so that HOCs using them are always updated
  var parentData = parentVnode && parentVnode.data;

  /* istanbul ignore else */
  if (true) {
    defineReactive$$1(vm, '$attrs', parentData && parentData.attrs || emptyObject, function () {
      !isUpdatingChildComponent && warn("$attrs is readonly.", vm);
    }, true);
    defineReactive$$1(vm, '$listeners', options._parentListeners || emptyObject, function () {
      !isUpdatingChildComponent && warn("$listeners is readonly.", vm);
    }, true);
  } else {}
}

var currentRenderingInstance = null;

function renderMixin (Vue) {
  // install runtime convenience helpers
  installRenderHelpers(Vue.prototype);

  Vue.prototype.$nextTick = function (fn) {
    return nextTick(fn, this)
  };

  Vue.prototype._render = function () {
    var vm = this;
    var ref = vm.$options;
    var render = ref.render;
    var _parentVnode = ref._parentVnode;

    if (_parentVnode) {
      vm.$scopedSlots = normalizeScopedSlots(
        _parentVnode.data.scopedSlots,
        vm.$slots,
        vm.$scopedSlots
      );
    }

    // set parent vnode. this allows render functions to have access
    // to the data on the placeholder node.
    vm.$vnode = _parentVnode;
    // render self
    var vnode;
    try {
      // There's no need to maintain a stack because all render fns are called
      // separately from one another. Nested component's render fns are called
      // when parent component is patched.
      currentRenderingInstance = vm;
      vnode = render.call(vm._renderProxy, vm.$createElement);
    } catch (e) {
      handleError(e, vm, "render");
      // return error render result,
      // or previous vnode to prevent render error causing blank component
      /* istanbul ignore else */
      if ( true && vm.$options.renderError) {
        try {
          vnode = vm.$options.renderError.call(vm._renderProxy, vm.$createElement, e);
        } catch (e) {
          handleError(e, vm, "renderError");
          vnode = vm._vnode;
        }
      } else {
        vnode = vm._vnode;
      }
    } finally {
      currentRenderingInstance = null;
    }
    // if the returned array contains only a single node, allow it
    if (Array.isArray(vnode) && vnode.length === 1) {
      vnode = vnode[0];
    }
    // return empty vnode in case the render function errored out
    if (!(vnode instanceof VNode)) {
      if ( true && Array.isArray(vnode)) {
        warn(
          'Multiple root nodes returned from render function. Render function ' +
          'should return a single root node.',
          vm
        );
      }
      vnode = createEmptyVNode();
    }
    // set parent
    vnode.parent = _parentVnode;
    return vnode
  };
}

/*  */

function ensureCtor (comp, base) {
  if (
    comp.__esModule ||
    (hasSymbol && comp[Symbol.toStringTag] === 'Module')
  ) {
    comp = comp.default;
  }
  return isObject(comp)
    ? base.extend(comp)
    : comp
}

function createAsyncPlaceholder (
  factory,
  data,
  context,
  children,
  tag
) {
  var node = createEmptyVNode();
  node.asyncFactory = factory;
  node.asyncMeta = { data: data, context: context, children: children, tag: tag };
  return node
}

function resolveAsyncComponent (
  factory,
  baseCtor
) {
  if (isTrue(factory.error) && isDef(factory.errorComp)) {
    return factory.errorComp
  }

  if (isDef(factory.resolved)) {
    return factory.resolved
  }

  var owner = currentRenderingInstance;
  if (owner && isDef(factory.owners) && factory.owners.indexOf(owner) === -1) {
    // already pending
    factory.owners.push(owner);
  }

  if (isTrue(factory.loading) && isDef(factory.loadingComp)) {
    return factory.loadingComp
  }

  if (owner && !isDef(factory.owners)) {
    var owners = factory.owners = [owner];
    var sync = true;
    var timerLoading = null;
    var timerTimeout = null

    ;(owner).$on('hook:destroyed', function () { return remove(owners, owner); });

    var forceRender = function (renderCompleted) {
      for (var i = 0, l = owners.length; i < l; i++) {
        (owners[i]).$forceUpdate();
      }

      if (renderCompleted) {
        owners.length = 0;
        if (timerLoading !== null) {
          clearTimeout(timerLoading);
          timerLoading = null;
        }
        if (timerTimeout !== null) {
          clearTimeout(timerTimeout);
          timerTimeout = null;
        }
      }
    };

    var resolve = once(function (res) {
      // cache resolved
      factory.resolved = ensureCtor(res, baseCtor);
      // invoke callbacks only if this is not a synchronous resolve
      // (async resolves are shimmed as synchronous during SSR)
      if (!sync) {
        forceRender(true);
      } else {
        owners.length = 0;
      }
    });

    var reject = once(function (reason) {
       true && warn(
        "Failed to resolve async component: " + (String(factory)) +
        (reason ? ("\nReason: " + reason) : '')
      );
      if (isDef(factory.errorComp)) {
        factory.error = true;
        forceRender(true);
      }
    });

    var res = factory(resolve, reject);

    if (isObject(res)) {
      if (isPromise(res)) {
        // () => Promise
        if (isUndef(factory.resolved)) {
          res.then(resolve, reject);
        }
      } else if (isPromise(res.component)) {
        res.component.then(resolve, reject);

        if (isDef(res.error)) {
          factory.errorComp = ensureCtor(res.error, baseCtor);
        }

        if (isDef(res.loading)) {
          factory.loadingComp = ensureCtor(res.loading, baseCtor);
          if (res.delay === 0) {
            factory.loading = true;
          } else {
            timerLoading = setTimeout(function () {
              timerLoading = null;
              if (isUndef(factory.resolved) && isUndef(factory.error)) {
                factory.loading = true;
                forceRender(false);
              }
            }, res.delay || 200);
          }
        }

        if (isDef(res.timeout)) {
          timerTimeout = setTimeout(function () {
            timerTimeout = null;
            if (isUndef(factory.resolved)) {
              reject(
                 true
                  ? ("timeout (" + (res.timeout) + "ms)")
                  : undefined
              );
            }
          }, res.timeout);
        }
      }
    }

    sync = false;
    // return in case resolved synchronously
    return factory.loading
      ? factory.loadingComp
      : factory.resolved
  }
}

/*  */

function isAsyncPlaceholder (node) {
  return node.isComment && node.asyncFactory
}

/*  */

function getFirstComponentChild (children) {
  if (Array.isArray(children)) {
    for (var i = 0; i < children.length; i++) {
      var c = children[i];
      if (isDef(c) && (isDef(c.componentOptions) || isAsyncPlaceholder(c))) {
        return c
      }
    }
  }
}

/*  */

/*  */

function initEvents (vm) {
  vm._events = Object.create(null);
  vm._hasHookEvent = false;
  // init parent attached events
  var listeners = vm.$options._parentListeners;
  if (listeners) {
    updateComponentListeners(vm, listeners);
  }
}

var target;

function add (event, fn) {
  target.$on(event, fn);
}

function remove$1 (event, fn) {
  target.$off(event, fn);
}

function createOnceHandler (event, fn) {
  var _target = target;
  return function onceHandler () {
    var res = fn.apply(null, arguments);
    if (res !== null) {
      _target.$off(event, onceHandler);
    }
  }
}

function updateComponentListeners (
  vm,
  listeners,
  oldListeners
) {
  target = vm;
  updateListeners(listeners, oldListeners || {}, add, remove$1, createOnceHandler, vm);
  target = undefined;
}

function eventsMixin (Vue) {
  var hookRE = /^hook:/;
  Vue.prototype.$on = function (event, fn) {
    var vm = this;
    if (Array.isArray(event)) {
      for (var i = 0, l = event.length; i < l; i++) {
        vm.$on(event[i], fn);
      }
    } else {
      (vm._events[event] || (vm._events[event] = [])).push(fn);
      // optimize hook:event cost by using a boolean flag marked at registration
      // instead of a hash lookup
      if (hookRE.test(event)) {
        vm._hasHookEvent = true;
      }
    }
    return vm
  };

  Vue.prototype.$once = function (event, fn) {
    var vm = this;
    function on () {
      vm.$off(event, on);
      fn.apply(vm, arguments);
    }
    on.fn = fn;
    vm.$on(event, on);
    return vm
  };

  Vue.prototype.$off = function (event, fn) {
    var vm = this;
    // all
    if (!arguments.length) {
      vm._events = Object.create(null);
      return vm
    }
    // array of events
    if (Array.isArray(event)) {
      for (var i$1 = 0, l = event.length; i$1 < l; i$1++) {
        vm.$off(event[i$1], fn);
      }
      return vm
    }
    // specific event
    var cbs = vm._events[event];
    if (!cbs) {
      return vm
    }
    if (!fn) {
      vm._events[event] = null;
      return vm
    }
    // specific handler
    var cb;
    var i = cbs.length;
    while (i--) {
      cb = cbs[i];
      if (cb === fn || cb.fn === fn) {
        cbs.splice(i, 1);
        break
      }
    }
    return vm
  };

  Vue.prototype.$emit = function (event) {
    var vm = this;
    if (true) {
      var lowerCaseEvent = event.toLowerCase();
      if (lowerCaseEvent !== event && vm._events[lowerCaseEvent]) {
        tip(
          "Event \"" + lowerCaseEvent + "\" is emitted in component " +
          (formatComponentName(vm)) + " but the handler is registered for \"" + event + "\". " +
          "Note that HTML attributes are case-insensitive and you cannot use " +
          "v-on to listen to camelCase events when using in-DOM templates. " +
          "You should probably use \"" + (hyphenate(event)) + "\" instead of \"" + event + "\"."
        );
      }
    }
    var cbs = vm._events[event];
    if (cbs) {
      cbs = cbs.length > 1 ? toArray(cbs) : cbs;
      var args = toArray(arguments, 1);
      var info = "event handler for \"" + event + "\"";
      for (var i = 0, l = cbs.length; i < l; i++) {
        invokeWithErrorHandling(cbs[i], vm, args, vm, info);
      }
    }
    return vm
  };
}

/*  */

var activeInstance = null;
var isUpdatingChildComponent = false;

function setActiveInstance(vm) {
  var prevActiveInstance = activeInstance;
  activeInstance = vm;
  return function () {
    activeInstance = prevActiveInstance;
  }
}

function initLifecycle (vm) {
  var options = vm.$options;

  // locate first non-abstract parent
  var parent = options.parent;
  if (parent && !options.abstract) {
    while (parent.$options.abstract && parent.$parent) {
      parent = parent.$parent;
    }
    parent.$children.push(vm);
  }

  vm.$parent = parent;
  vm.$root = parent ? parent.$root : vm;

  vm.$children = [];
  vm.$refs = {};

  vm._watcher = null;
  vm._inactive = null;
  vm._directInactive = false;
  vm._isMounted = false;
  vm._isDestroyed = false;
  vm._isBeingDestroyed = false;
}

function lifecycleMixin (Vue) {
  Vue.prototype._update = function (vnode, hydrating) {
    var vm = this;
    var prevEl = vm.$el;
    var prevVnode = vm._vnode;
    var restoreActiveInstance = setActiveInstance(vm);
    vm._vnode = vnode;
    // Vue.prototype.__patch__ is injected in entry points
    // based on the rendering backend used.
    if (!prevVnode) {
      // initial render
      vm.$el = vm.__patch__(vm.$el, vnode, hydrating, false /* removeOnly */);
    } else {
      // updates
      vm.$el = vm.__patch__(prevVnode, vnode);
    }
    restoreActiveInstance();
    // update __vue__ reference
    if (prevEl) {
      prevEl.__vue__ = null;
    }
    if (vm.$el) {
      vm.$el.__vue__ = vm;
    }
    // if parent is an HOC, update its $el as well
    if (vm.$vnode && vm.$parent && vm.$vnode === vm.$parent._vnode) {
      vm.$parent.$el = vm.$el;
    }
    // updated hook is called by the scheduler to ensure that children are
    // updated in a parent's updated hook.
  };

  Vue.prototype.$forceUpdate = function () {
    var vm = this;
    if (vm._watcher) {
      vm._watcher.update();
    }
  };

  Vue.prototype.$destroy = function () {
    var vm = this;
    if (vm._isBeingDestroyed) {
      return
    }
    callHook(vm, 'beforeDestroy');
    vm._isBeingDestroyed = true;
    // remove self from parent
    var parent = vm.$parent;
    if (parent && !parent._isBeingDestroyed && !vm.$options.abstract) {
      remove(parent.$children, vm);
    }
    // teardown watchers
    if (vm._watcher) {
      vm._watcher.teardown();
    }
    var i = vm._watchers.length;
    while (i--) {
      vm._watchers[i].teardown();
    }
    // remove reference from data ob
    // frozen object may not have observer.
    if (vm._data.__ob__) {
      vm._data.__ob__.vmCount--;
    }
    // call the last hook...
    vm._isDestroyed = true;
    // invoke destroy hooks on current rendered tree
    vm.__patch__(vm._vnode, null);
    // fire destroyed hook
    callHook(vm, 'destroyed');
    // turn off all instance listeners.
    vm.$off();
    // remove __vue__ reference
    if (vm.$el) {
      vm.$el.__vue__ = null;
    }
    // release circular reference (#6759)
    if (vm.$vnode) {
      vm.$vnode.parent = null;
    }
  };
}

function updateChildComponent (
  vm,
  propsData,
  listeners,
  parentVnode,
  renderChildren
) {
  if (true) {
    isUpdatingChildComponent = true;
  }

  // determine whether component has slot children
  // we need to do this before overwriting $options._renderChildren.

  // check if there are dynamic scopedSlots (hand-written or compiled but with
  // dynamic slot names). Static scoped slots compiled from template has the
  // "$stable" marker.
  var newScopedSlots = parentVnode.data.scopedSlots;
  var oldScopedSlots = vm.$scopedSlots;
  var hasDynamicScopedSlot = !!(
    (newScopedSlots && !newScopedSlots.$stable) ||
    (oldScopedSlots !== emptyObject && !oldScopedSlots.$stable) ||
    (newScopedSlots && vm.$scopedSlots.$key !== newScopedSlots.$key)
  );

  // Any static slot children from the parent may have changed during parent's
  // update. Dynamic scoped slots may also have changed. In such cases, a forced
  // update is necessary to ensure correctness.
  var needsForceUpdate = !!(
    renderChildren ||               // has new static slots
    vm.$options._renderChildren ||  // has old static slots
    hasDynamicScopedSlot
  );

  vm.$options._parentVnode = parentVnode;
  vm.$vnode = parentVnode; // update vm's placeholder node without re-render

  if (vm._vnode) { // update child tree's parent
    vm._vnode.parent = parentVnode;
  }
  vm.$options._renderChildren = renderChildren;

  // update $attrs and $listeners hash
  // these are also reactive so they may trigger child update if the child
  // used them during render
  vm.$attrs = parentVnode.data.attrs || emptyObject;
  vm.$listeners = listeners || emptyObject;

  // update props
  if (propsData && vm.$options.props) {
    toggleObserving(false);
    var props = vm._props;
    var propKeys = vm.$options._propKeys || [];
    for (var i = 0; i < propKeys.length; i++) {
      var key = propKeys[i];
      var propOptions = vm.$options.props; // wtf flow?
      props[key] = validateProp(key, propOptions, propsData, vm);
    }
    toggleObserving(true);
    // keep a copy of raw propsData
    vm.$options.propsData = propsData;
  }
  
  // fixed by xxxxxx update properties(mp runtime)
  vm._$updateProperties && vm._$updateProperties(vm);
  
  // update listeners
  listeners = listeners || emptyObject;
  var oldListeners = vm.$options._parentListeners;
  vm.$options._parentListeners = listeners;
  updateComponentListeners(vm, listeners, oldListeners);

  // resolve slots + force update if has children
  if (needsForceUpdate) {
    vm.$slots = resolveSlots(renderChildren, parentVnode.context);
    vm.$forceUpdate();
  }

  if (true) {
    isUpdatingChildComponent = false;
  }
}

function isInInactiveTree (vm) {
  while (vm && (vm = vm.$parent)) {
    if (vm._inactive) { return true }
  }
  return false
}

function activateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = false;
    if (isInInactiveTree(vm)) {
      return
    }
  } else if (vm._directInactive) {
    return
  }
  if (vm._inactive || vm._inactive === null) {
    vm._inactive = false;
    for (var i = 0; i < vm.$children.length; i++) {
      activateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'activated');
  }
}

function deactivateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = true;
    if (isInInactiveTree(vm)) {
      return
    }
  }
  if (!vm._inactive) {
    vm._inactive = true;
    for (var i = 0; i < vm.$children.length; i++) {
      deactivateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'deactivated');
  }
}

function callHook (vm, hook) {
  // #7573 disable dep collection when invoking lifecycle hooks
  pushTarget();
  var handlers = vm.$options[hook];
  var info = hook + " hook";
  if (handlers) {
    for (var i = 0, j = handlers.length; i < j; i++) {
      invokeWithErrorHandling(handlers[i], vm, null, vm, info);
    }
  }
  if (vm._hasHookEvent) {
    vm.$emit('hook:' + hook);
  }
  popTarget();
}

/*  */

var MAX_UPDATE_COUNT = 100;

var queue = [];
var activatedChildren = [];
var has = {};
var circular = {};
var waiting = false;
var flushing = false;
var index = 0;

/**
 * Reset the scheduler's state.
 */
function resetSchedulerState () {
  index = queue.length = activatedChildren.length = 0;
  has = {};
  if (true) {
    circular = {};
  }
  waiting = flushing = false;
}

// Async edge case #6566 requires saving the timestamp when event listeners are
// attached. However, calling performance.now() has a perf overhead especially
// if the page has thousands of event listeners. Instead, we take a timestamp
// every time the scheduler flushes and use that for all event listeners
// attached during that flush.
var currentFlushTimestamp = 0;

// Async edge case fix requires storing an event listener's attach timestamp.
var getNow = Date.now;

// Determine what event timestamp the browser is using. Annoyingly, the
// timestamp can either be hi-res (relative to page load) or low-res
// (relative to UNIX epoch), so in order to compare time we have to use the
// same timestamp type when saving the flush timestamp.
// All IE versions use low-res event timestamps, and have problematic clock
// implementations (#9632)
if (inBrowser && !isIE) {
  var performance = window.performance;
  if (
    performance &&
    typeof performance.now === 'function' &&
    getNow() > document.createEvent('Event').timeStamp
  ) {
    // if the event timestamp, although evaluated AFTER the Date.now(), is
    // smaller than it, it means the event is using a hi-res timestamp,
    // and we need to use the hi-res version for event listener timestamps as
    // well.
    getNow = function () { return performance.now(); };
  }
}

/**
 * Flush both queues and run the watchers.
 */
function flushSchedulerQueue () {
  currentFlushTimestamp = getNow();
  flushing = true;
  var watcher, id;

  // Sort queue before flush.
  // This ensures that:
  // 1. Components are updated from parent to child. (because parent is always
  //    created before the child)
  // 2. A component's user watchers are run before its render watcher (because
  //    user watchers are created before the render watcher)
  // 3. If a component is destroyed during a parent component's watcher run,
  //    its watchers can be skipped.
  queue.sort(function (a, b) { return a.id - b.id; });

  // do not cache length because more watchers might be pushed
  // as we run existing watchers
  for (index = 0; index < queue.length; index++) {
    watcher = queue[index];
    if (watcher.before) {
      watcher.before();
    }
    id = watcher.id;
    has[id] = null;
    watcher.run();
    // in dev build, check and stop circular updates.
    if ( true && has[id] != null) {
      circular[id] = (circular[id] || 0) + 1;
      if (circular[id] > MAX_UPDATE_COUNT) {
        warn(
          'You may have an infinite update loop ' + (
            watcher.user
              ? ("in watcher with expression \"" + (watcher.expression) + "\"")
              : "in a component render function."
          ),
          watcher.vm
        );
        break
      }
    }
  }

  // keep copies of post queues before resetting state
  var activatedQueue = activatedChildren.slice();
  var updatedQueue = queue.slice();

  resetSchedulerState();

  // call component updated and activated hooks
  callActivatedHooks(activatedQueue);
  callUpdatedHooks(updatedQueue);

  // devtool hook
  /* istanbul ignore if */
  if (devtools && config.devtools) {
    devtools.emit('flush');
  }
}

function callUpdatedHooks (queue) {
  var i = queue.length;
  while (i--) {
    var watcher = queue[i];
    var vm = watcher.vm;
    if (vm._watcher === watcher && vm._isMounted && !vm._isDestroyed) {
      callHook(vm, 'updated');
    }
  }
}

/**
 * Queue a kept-alive component that was activated during patch.
 * The queue will be processed after the entire tree has been patched.
 */
function queueActivatedComponent (vm) {
  // setting _inactive to false here so that a render function can
  // rely on checking whether it's in an inactive tree (e.g. router-view)
  vm._inactive = false;
  activatedChildren.push(vm);
}

function callActivatedHooks (queue) {
  for (var i = 0; i < queue.length; i++) {
    queue[i]._inactive = true;
    activateChildComponent(queue[i], true /* true */);
  }
}

/**
 * Push a watcher into the watcher queue.
 * Jobs with duplicate IDs will be skipped unless it's
 * pushed when the queue is being flushed.
 */
function queueWatcher (watcher) {
  var id = watcher.id;
  if (has[id] == null) {
    has[id] = true;
    if (!flushing) {
      queue.push(watcher);
    } else {
      // if already flushing, splice the watcher based on its id
      // if already past its id, it will be run next immediately.
      var i = queue.length - 1;
      while (i > index && queue[i].id > watcher.id) {
        i--;
      }
      queue.splice(i + 1, 0, watcher);
    }
    // queue the flush
    if (!waiting) {
      waiting = true;

      if ( true && !config.async) {
        flushSchedulerQueue();
        return
      }
      nextTick(flushSchedulerQueue);
    }
  }
}

/*  */



var uid$2 = 0;

/**
 * A watcher parses an expression, collects dependencies,
 * and fires callback when the expression value changes.
 * This is used for both the $watch() api and directives.
 */
var Watcher = function Watcher (
  vm,
  expOrFn,
  cb,
  options,
  isRenderWatcher
) {
  this.vm = vm;
  if (isRenderWatcher) {
    vm._watcher = this;
  }
  vm._watchers.push(this);
  // options
  if (options) {
    this.deep = !!options.deep;
    this.user = !!options.user;
    this.lazy = !!options.lazy;
    this.sync = !!options.sync;
    this.before = options.before;
  } else {
    this.deep = this.user = this.lazy = this.sync = false;
  }
  this.cb = cb;
  this.id = ++uid$2; // uid for batching
  this.active = true;
  this.dirty = this.lazy; // for lazy watchers
  this.deps = [];
  this.newDeps = [];
  this.depIds = new _Set();
  this.newDepIds = new _Set();
  this.expression =  true
    ? expOrFn.toString()
    : undefined;
  // parse expression for getter
  if (typeof expOrFn === 'function') {
    this.getter = expOrFn;
  } else {
    this.getter = parsePath(expOrFn);
    if (!this.getter) {
      this.getter = noop;
       true && warn(
        "Failed watching path: \"" + expOrFn + "\" " +
        'Watcher only accepts simple dot-delimited paths. ' +
        'For full control, use a function instead.',
        vm
      );
    }
  }
  this.value = this.lazy
    ? undefined
    : this.get();
};

/**
 * Evaluate the getter, and re-collect dependencies.
 */
Watcher.prototype.get = function get () {
  pushTarget(this);
  var value;
  var vm = this.vm;
  try {
    value = this.getter.call(vm, vm);
  } catch (e) {
    if (this.user) {
      handleError(e, vm, ("getter for watcher \"" + (this.expression) + "\""));
    } else {
      throw e
    }
  } finally {
    // "touch" every property so they are all tracked as
    // dependencies for deep watching
    if (this.deep) {
      traverse(value);
    }
    popTarget();
    this.cleanupDeps();
  }
  return value
};

/**
 * Add a dependency to this directive.
 */
Watcher.prototype.addDep = function addDep (dep) {
  var id = dep.id;
  if (!this.newDepIds.has(id)) {
    this.newDepIds.add(id);
    this.newDeps.push(dep);
    if (!this.depIds.has(id)) {
      dep.addSub(this);
    }
  }
};

/**
 * Clean up for dependency collection.
 */
Watcher.prototype.cleanupDeps = function cleanupDeps () {
  var i = this.deps.length;
  while (i--) {
    var dep = this.deps[i];
    if (!this.newDepIds.has(dep.id)) {
      dep.removeSub(this);
    }
  }
  var tmp = this.depIds;
  this.depIds = this.newDepIds;
  this.newDepIds = tmp;
  this.newDepIds.clear();
  tmp = this.deps;
  this.deps = this.newDeps;
  this.newDeps = tmp;
  this.newDeps.length = 0;
};

/**
 * Subscriber interface.
 * Will be called when a dependency changes.
 */
Watcher.prototype.update = function update () {
  /* istanbul ignore else */
  if (this.lazy) {
    this.dirty = true;
  } else if (this.sync) {
    this.run();
  } else {
    queueWatcher(this);
  }
};

/**
 * Scheduler job interface.
 * Will be called by the scheduler.
 */
Watcher.prototype.run = function run () {
  if (this.active) {
    var value = this.get();
    if (
      value !== this.value ||
      // Deep watchers and watchers on Object/Arrays should fire even
      // when the value is the same, because the value may
      // have mutated.
      isObject(value) ||
      this.deep
    ) {
      // set new value
      var oldValue = this.value;
      this.value = value;
      if (this.user) {
        try {
          this.cb.call(this.vm, value, oldValue);
        } catch (e) {
          handleError(e, this.vm, ("callback for watcher \"" + (this.expression) + "\""));
        }
      } else {
        this.cb.call(this.vm, value, oldValue);
      }
    }
  }
};

/**
 * Evaluate the value of the watcher.
 * This only gets called for lazy watchers.
 */
Watcher.prototype.evaluate = function evaluate () {
  this.value = this.get();
  this.dirty = false;
};

/**
 * Depend on all deps collected by this watcher.
 */
Watcher.prototype.depend = function depend () {
  var i = this.deps.length;
  while (i--) {
    this.deps[i].depend();
  }
};

/**
 * Remove self from all dependencies' subscriber list.
 */
Watcher.prototype.teardown = function teardown () {
  if (this.active) {
    // remove self from vm's watcher list
    // this is a somewhat expensive operation so we skip it
    // if the vm is being destroyed.
    if (!this.vm._isBeingDestroyed) {
      remove(this.vm._watchers, this);
    }
    var i = this.deps.length;
    while (i--) {
      this.deps[i].removeSub(this);
    }
    this.active = false;
  }
};

/*  */

var sharedPropertyDefinition = {
  enumerable: true,
  configurable: true,
  get: noop,
  set: noop
};

function proxy (target, sourceKey, key) {
  sharedPropertyDefinition.get = function proxyGetter () {
    return this[sourceKey][key]
  };
  sharedPropertyDefinition.set = function proxySetter (val) {
    this[sourceKey][key] = val;
  };
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function initState (vm) {
  vm._watchers = [];
  var opts = vm.$options;
  if (opts.props) { initProps(vm, opts.props); }
  if (opts.methods) { initMethods(vm, opts.methods); }
  if (opts.data) {
    initData(vm);
  } else {
    observe(vm._data = {}, true /* asRootData */);
  }
  if (opts.computed) { initComputed(vm, opts.computed); }
  if (opts.watch && opts.watch !== nativeWatch) {
    initWatch(vm, opts.watch);
  }
}

function initProps (vm, propsOptions) {
  var propsData = vm.$options.propsData || {};
  var props = vm._props = {};
  // cache prop keys so that future props updates can iterate using Array
  // instead of dynamic object key enumeration.
  var keys = vm.$options._propKeys = [];
  var isRoot = !vm.$parent;
  // root instance props should be converted
  if (!isRoot) {
    toggleObserving(false);
  }
  var loop = function ( key ) {
    keys.push(key);
    var value = validateProp(key, propsOptions, propsData, vm);
    /* istanbul ignore else */
    if (true) {
      var hyphenatedKey = hyphenate(key);
      if (isReservedAttribute(hyphenatedKey) ||
          config.isReservedAttr(hyphenatedKey)) {
        warn(
          ("\"" + hyphenatedKey + "\" is a reserved attribute and cannot be used as component prop."),
          vm
        );
      }
      defineReactive$$1(props, key, value, function () {
        if (!isRoot && !isUpdatingChildComponent) {
          {
            if(vm.mpHost === 'mp-baidu'){//百度 observer 在 setData callback 之后触发，直接忽略该 warn
                return
            }
            //fixed by xxxxxx __next_tick_pending,uni://form-field 时不告警
            if(
                key === 'value' && 
                Array.isArray(vm.$options.behaviors) &&
                vm.$options.behaviors.indexOf('uni://form-field') !== -1
              ){
              return
            }
            if(vm._getFormData){
              return
            }
            var $parent = vm.$parent;
            while($parent){
              if($parent.__next_tick_pending){
                return  
              }
              $parent = $parent.$parent;
            }
          }
          warn(
            "Avoid mutating a prop directly since the value will be " +
            "overwritten whenever the parent component re-renders. " +
            "Instead, use a data or computed property based on the prop's " +
            "value. Prop being mutated: \"" + key + "\"",
            vm
          );
        }
      });
    } else {}
    // static props are already proxied on the component's prototype
    // during Vue.extend(). We only need to proxy props defined at
    // instantiation here.
    if (!(key in vm)) {
      proxy(vm, "_props", key);
    }
  };

  for (var key in propsOptions) loop( key );
  toggleObserving(true);
}

function initData (vm) {
  var data = vm.$options.data;
  data = vm._data = typeof data === 'function'
    ? getData(data, vm)
    : data || {};
  if (!isPlainObject(data)) {
    data = {};
     true && warn(
      'data functions should return an object:\n' +
      'https://vuejs.org/v2/guide/components.html#data-Must-Be-a-Function',
      vm
    );
  }
  // proxy data on instance
  var keys = Object.keys(data);
  var props = vm.$options.props;
  var methods = vm.$options.methods;
  var i = keys.length;
  while (i--) {
    var key = keys[i];
    if (true) {
      if (methods && hasOwn(methods, key)) {
        warn(
          ("Method \"" + key + "\" has already been defined as a data property."),
          vm
        );
      }
    }
    if (props && hasOwn(props, key)) {
       true && warn(
        "The data property \"" + key + "\" is already declared as a prop. " +
        "Use prop default value instead.",
        vm
      );
    } else if (!isReserved(key)) {
      proxy(vm, "_data", key);
    }
  }
  // observe data
  observe(data, true /* asRootData */);
}

function getData (data, vm) {
  // #7573 disable dep collection when invoking data getters
  pushTarget();
  try {
    return data.call(vm, vm)
  } catch (e) {
    handleError(e, vm, "data()");
    return {}
  } finally {
    popTarget();
  }
}

var computedWatcherOptions = { lazy: true };

function initComputed (vm, computed) {
  // $flow-disable-line
  var watchers = vm._computedWatchers = Object.create(null);
  // computed properties are just getters during SSR
  var isSSR = isServerRendering();

  for (var key in computed) {
    var userDef = computed[key];
    var getter = typeof userDef === 'function' ? userDef : userDef.get;
    if ( true && getter == null) {
      warn(
        ("Getter is missing for computed property \"" + key + "\"."),
        vm
      );
    }

    if (!isSSR) {
      // create internal watcher for the computed property.
      watchers[key] = new Watcher(
        vm,
        getter || noop,
        noop,
        computedWatcherOptions
      );
    }

    // component-defined computed properties are already defined on the
    // component prototype. We only need to define computed properties defined
    // at instantiation here.
    if (!(key in vm)) {
      defineComputed(vm, key, userDef);
    } else if (true) {
      if (key in vm.$data) {
        warn(("The computed property \"" + key + "\" is already defined in data."), vm);
      } else if (vm.$options.props && key in vm.$options.props) {
        warn(("The computed property \"" + key + "\" is already defined as a prop."), vm);
      }
    }
  }
}

function defineComputed (
  target,
  key,
  userDef
) {
  var shouldCache = !isServerRendering();
  if (typeof userDef === 'function') {
    sharedPropertyDefinition.get = shouldCache
      ? createComputedGetter(key)
      : createGetterInvoker(userDef);
    sharedPropertyDefinition.set = noop;
  } else {
    sharedPropertyDefinition.get = userDef.get
      ? shouldCache && userDef.cache !== false
        ? createComputedGetter(key)
        : createGetterInvoker(userDef.get)
      : noop;
    sharedPropertyDefinition.set = userDef.set || noop;
  }
  if ( true &&
      sharedPropertyDefinition.set === noop) {
    sharedPropertyDefinition.set = function () {
      warn(
        ("Computed property \"" + key + "\" was assigned to but it has no setter."),
        this
      );
    };
  }
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function createComputedGetter (key) {
  return function computedGetter () {
    var watcher = this._computedWatchers && this._computedWatchers[key];
    if (watcher) {
      if (watcher.dirty) {
        watcher.evaluate();
      }
      if (Dep.SharedObject.target) {// fixed by xxxxxx
        watcher.depend();
      }
      return watcher.value
    }
  }
}

function createGetterInvoker(fn) {
  return function computedGetter () {
    return fn.call(this, this)
  }
}

function initMethods (vm, methods) {
  var props = vm.$options.props;
  for (var key in methods) {
    if (true) {
      if (typeof methods[key] !== 'function') {
        warn(
          "Method \"" + key + "\" has type \"" + (typeof methods[key]) + "\" in the component definition. " +
          "Did you reference the function correctly?",
          vm
        );
      }
      if (props && hasOwn(props, key)) {
        warn(
          ("Method \"" + key + "\" has already been defined as a prop."),
          vm
        );
      }
      if ((key in vm) && isReserved(key)) {
        warn(
          "Method \"" + key + "\" conflicts with an existing Vue instance method. " +
          "Avoid defining component methods that start with _ or $."
        );
      }
    }
    vm[key] = typeof methods[key] !== 'function' ? noop : bind(methods[key], vm);
  }
}

function initWatch (vm, watch) {
  for (var key in watch) {
    var handler = watch[key];
    if (Array.isArray(handler)) {
      for (var i = 0; i < handler.length; i++) {
        createWatcher(vm, key, handler[i]);
      }
    } else {
      createWatcher(vm, key, handler);
    }
  }
}

function createWatcher (
  vm,
  expOrFn,
  handler,
  options
) {
  if (isPlainObject(handler)) {
    options = handler;
    handler = handler.handler;
  }
  if (typeof handler === 'string') {
    handler = vm[handler];
  }
  return vm.$watch(expOrFn, handler, options)
}

function stateMixin (Vue) {
  // flow somehow has problems with directly declared definition object
  // when using Object.defineProperty, so we have to procedurally build up
  // the object here.
  var dataDef = {};
  dataDef.get = function () { return this._data };
  var propsDef = {};
  propsDef.get = function () { return this._props };
  if (true) {
    dataDef.set = function () {
      warn(
        'Avoid replacing instance root $data. ' +
        'Use nested data properties instead.',
        this
      );
    };
    propsDef.set = function () {
      warn("$props is readonly.", this);
    };
  }
  Object.defineProperty(Vue.prototype, '$data', dataDef);
  Object.defineProperty(Vue.prototype, '$props', propsDef);

  Vue.prototype.$set = set;
  Vue.prototype.$delete = del;

  Vue.prototype.$watch = function (
    expOrFn,
    cb,
    options
  ) {
    var vm = this;
    if (isPlainObject(cb)) {
      return createWatcher(vm, expOrFn, cb, options)
    }
    options = options || {};
    options.user = true;
    var watcher = new Watcher(vm, expOrFn, cb, options);
    if (options.immediate) {
      try {
        cb.call(vm, watcher.value);
      } catch (error) {
        handleError(error, vm, ("callback for immediate watcher \"" + (watcher.expression) + "\""));
      }
    }
    return function unwatchFn () {
      watcher.teardown();
    }
  };
}

/*  */

var uid$3 = 0;

function initMixin (Vue) {
  Vue.prototype._init = function (options) {
    var vm = this;
    // a uid
    vm._uid = uid$3++;

    var startTag, endTag;
    /* istanbul ignore if */
    if ( true && config.performance && mark) {
      startTag = "vue-perf-start:" + (vm._uid);
      endTag = "vue-perf-end:" + (vm._uid);
      mark(startTag);
    }

    // a flag to avoid this being observed
    vm._isVue = true;
    // merge options
    if (options && options._isComponent) {
      // optimize internal component instantiation
      // since dynamic options merging is pretty slow, and none of the
      // internal component options needs special treatment.
      initInternalComponent(vm, options);
    } else {
      vm.$options = mergeOptions(
        resolveConstructorOptions(vm.constructor),
        options || {},
        vm
      );
    }
    /* istanbul ignore else */
    if (true) {
      initProxy(vm);
    } else {}
    // expose real self
    vm._self = vm;
    initLifecycle(vm);
    initEvents(vm);
    initRender(vm);
    callHook(vm, 'beforeCreate');
    !vm._$fallback && initInjections(vm); // resolve injections before data/props  
    initState(vm);
    !vm._$fallback && initProvide(vm); // resolve provide after data/props
    !vm._$fallback && callHook(vm, 'created');      

    /* istanbul ignore if */
    if ( true && config.performance && mark) {
      vm._name = formatComponentName(vm, false);
      mark(endTag);
      measure(("vue " + (vm._name) + " init"), startTag, endTag);
    }

    if (vm.$options.el) {
      vm.$mount(vm.$options.el);
    }
  };
}

function initInternalComponent (vm, options) {
  var opts = vm.$options = Object.create(vm.constructor.options);
  // doing this because it's faster than dynamic enumeration.
  var parentVnode = options._parentVnode;
  opts.parent = options.parent;
  opts._parentVnode = parentVnode;

  var vnodeComponentOptions = parentVnode.componentOptions;
  opts.propsData = vnodeComponentOptions.propsData;
  opts._parentListeners = vnodeComponentOptions.listeners;
  opts._renderChildren = vnodeComponentOptions.children;
  opts._componentTag = vnodeComponentOptions.tag;

  if (options.render) {
    opts.render = options.render;
    opts.staticRenderFns = options.staticRenderFns;
  }
}

function resolveConstructorOptions (Ctor) {
  var options = Ctor.options;
  if (Ctor.super) {
    var superOptions = resolveConstructorOptions(Ctor.super);
    var cachedSuperOptions = Ctor.superOptions;
    if (superOptions !== cachedSuperOptions) {
      // super option changed,
      // need to resolve new options.
      Ctor.superOptions = superOptions;
      // check if there are any late-modified/attached options (#4976)
      var modifiedOptions = resolveModifiedOptions(Ctor);
      // update base extend options
      if (modifiedOptions) {
        extend(Ctor.extendOptions, modifiedOptions);
      }
      options = Ctor.options = mergeOptions(superOptions, Ctor.extendOptions);
      if (options.name) {
        options.components[options.name] = Ctor;
      }
    }
  }
  return options
}

function resolveModifiedOptions (Ctor) {
  var modified;
  var latest = Ctor.options;
  var sealed = Ctor.sealedOptions;
  for (var key in latest) {
    if (latest[key] !== sealed[key]) {
      if (!modified) { modified = {}; }
      modified[key] = latest[key];
    }
  }
  return modified
}

function Vue (options) {
  if ( true &&
    !(this instanceof Vue)
  ) {
    warn('Vue is a constructor and should be called with the `new` keyword');
  }
  this._init(options);
}

initMixin(Vue);
stateMixin(Vue);
eventsMixin(Vue);
lifecycleMixin(Vue);
renderMixin(Vue);

/*  */

function initUse (Vue) {
  Vue.use = function (plugin) {
    var installedPlugins = (this._installedPlugins || (this._installedPlugins = []));
    if (installedPlugins.indexOf(plugin) > -1) {
      return this
    }

    // additional parameters
    var args = toArray(arguments, 1);
    args.unshift(this);
    if (typeof plugin.install === 'function') {
      plugin.install.apply(plugin, args);
    } else if (typeof plugin === 'function') {
      plugin.apply(null, args);
    }
    installedPlugins.push(plugin);
    return this
  };
}

/*  */

function initMixin$1 (Vue) {
  Vue.mixin = function (mixin) {
    this.options = mergeOptions(this.options, mixin);
    return this
  };
}

/*  */

function initExtend (Vue) {
  /**
   * Each instance constructor, including Vue, has a unique
   * cid. This enables us to create wrapped "child
   * constructors" for prototypal inheritance and cache them.
   */
  Vue.cid = 0;
  var cid = 1;

  /**
   * Class inheritance
   */
  Vue.extend = function (extendOptions) {
    extendOptions = extendOptions || {};
    var Super = this;
    var SuperId = Super.cid;
    var cachedCtors = extendOptions._Ctor || (extendOptions._Ctor = {});
    if (cachedCtors[SuperId]) {
      return cachedCtors[SuperId]
    }

    var name = extendOptions.name || Super.options.name;
    if ( true && name) {
      validateComponentName(name);
    }

    var Sub = function VueComponent (options) {
      this._init(options);
    };
    Sub.prototype = Object.create(Super.prototype);
    Sub.prototype.constructor = Sub;
    Sub.cid = cid++;
    Sub.options = mergeOptions(
      Super.options,
      extendOptions
    );
    Sub['super'] = Super;

    // For props and computed properties, we define the proxy getters on
    // the Vue instances at extension time, on the extended prototype. This
    // avoids Object.defineProperty calls for each instance created.
    if (Sub.options.props) {
      initProps$1(Sub);
    }
    if (Sub.options.computed) {
      initComputed$1(Sub);
    }

    // allow further extension/mixin/plugin usage
    Sub.extend = Super.extend;
    Sub.mixin = Super.mixin;
    Sub.use = Super.use;

    // create asset registers, so extended classes
    // can have their private assets too.
    ASSET_TYPES.forEach(function (type) {
      Sub[type] = Super[type];
    });
    // enable recursive self-lookup
    if (name) {
      Sub.options.components[name] = Sub;
    }

    // keep a reference to the super options at extension time.
    // later at instantiation we can check if Super's options have
    // been updated.
    Sub.superOptions = Super.options;
    Sub.extendOptions = extendOptions;
    Sub.sealedOptions = extend({}, Sub.options);

    // cache constructor
    cachedCtors[SuperId] = Sub;
    return Sub
  };
}

function initProps$1 (Comp) {
  var props = Comp.options.props;
  for (var key in props) {
    proxy(Comp.prototype, "_props", key);
  }
}

function initComputed$1 (Comp) {
  var computed = Comp.options.computed;
  for (var key in computed) {
    defineComputed(Comp.prototype, key, computed[key]);
  }
}

/*  */

function initAssetRegisters (Vue) {
  /**
   * Create asset registration methods.
   */
  ASSET_TYPES.forEach(function (type) {
    Vue[type] = function (
      id,
      definition
    ) {
      if (!definition) {
        return this.options[type + 's'][id]
      } else {
        /* istanbul ignore if */
        if ( true && type === 'component') {
          validateComponentName(id);
        }
        if (type === 'component' && isPlainObject(definition)) {
          definition.name = definition.name || id;
          definition = this.options._base.extend(definition);
        }
        if (type === 'directive' && typeof definition === 'function') {
          definition = { bind: definition, update: definition };
        }
        this.options[type + 's'][id] = definition;
        return definition
      }
    };
  });
}

/*  */



function getComponentName (opts) {
  return opts && (opts.Ctor.options.name || opts.tag)
}

function matches (pattern, name) {
  if (Array.isArray(pattern)) {
    return pattern.indexOf(name) > -1
  } else if (typeof pattern === 'string') {
    return pattern.split(',').indexOf(name) > -1
  } else if (isRegExp(pattern)) {
    return pattern.test(name)
  }
  /* istanbul ignore next */
  return false
}

function pruneCache (keepAliveInstance, filter) {
  var cache = keepAliveInstance.cache;
  var keys = keepAliveInstance.keys;
  var _vnode = keepAliveInstance._vnode;
  for (var key in cache) {
    var cachedNode = cache[key];
    if (cachedNode) {
      var name = getComponentName(cachedNode.componentOptions);
      if (name && !filter(name)) {
        pruneCacheEntry(cache, key, keys, _vnode);
      }
    }
  }
}

function pruneCacheEntry (
  cache,
  key,
  keys,
  current
) {
  var cached$$1 = cache[key];
  if (cached$$1 && (!current || cached$$1.tag !== current.tag)) {
    cached$$1.componentInstance.$destroy();
  }
  cache[key] = null;
  remove(keys, key);
}

var patternTypes = [String, RegExp, Array];

var KeepAlive = {
  name: 'keep-alive',
  abstract: true,

  props: {
    include: patternTypes,
    exclude: patternTypes,
    max: [String, Number]
  },

  created: function created () {
    this.cache = Object.create(null);
    this.keys = [];
  },

  destroyed: function destroyed () {
    for (var key in this.cache) {
      pruneCacheEntry(this.cache, key, this.keys);
    }
  },

  mounted: function mounted () {
    var this$1 = this;

    this.$watch('include', function (val) {
      pruneCache(this$1, function (name) { return matches(val, name); });
    });
    this.$watch('exclude', function (val) {
      pruneCache(this$1, function (name) { return !matches(val, name); });
    });
  },

  render: function render () {
    var slot = this.$slots.default;
    var vnode = getFirstComponentChild(slot);
    var componentOptions = vnode && vnode.componentOptions;
    if (componentOptions) {
      // check pattern
      var name = getComponentName(componentOptions);
      var ref = this;
      var include = ref.include;
      var exclude = ref.exclude;
      if (
        // not included
        (include && (!name || !matches(include, name))) ||
        // excluded
        (exclude && name && matches(exclude, name))
      ) {
        return vnode
      }

      var ref$1 = this;
      var cache = ref$1.cache;
      var keys = ref$1.keys;
      var key = vnode.key == null
        // same constructor may get registered as different local components
        // so cid alone is not enough (#3269)
        ? componentOptions.Ctor.cid + (componentOptions.tag ? ("::" + (componentOptions.tag)) : '')
        : vnode.key;
      if (cache[key]) {
        vnode.componentInstance = cache[key].componentInstance;
        // make current key freshest
        remove(keys, key);
        keys.push(key);
      } else {
        cache[key] = vnode;
        keys.push(key);
        // prune oldest entry
        if (this.max && keys.length > parseInt(this.max)) {
          pruneCacheEntry(cache, keys[0], keys, this._vnode);
        }
      }

      vnode.data.keepAlive = true;
    }
    return vnode || (slot && slot[0])
  }
};

var builtInComponents = {
  KeepAlive: KeepAlive
};

/*  */

function initGlobalAPI (Vue) {
  // config
  var configDef = {};
  configDef.get = function () { return config; };
  if (true) {
    configDef.set = function () {
      warn(
        'Do not replace the Vue.config object, set individual fields instead.'
      );
    };
  }
  Object.defineProperty(Vue, 'config', configDef);

  // exposed util methods.
  // NOTE: these are not considered part of the public API - avoid relying on
  // them unless you are aware of the risk.
  Vue.util = {
    warn: warn,
    extend: extend,
    mergeOptions: mergeOptions,
    defineReactive: defineReactive$$1
  };

  Vue.set = set;
  Vue.delete = del;
  Vue.nextTick = nextTick;

  // 2.6 explicit observable API
  Vue.observable = function (obj) {
    observe(obj);
    return obj
  };

  Vue.options = Object.create(null);
  ASSET_TYPES.forEach(function (type) {
    Vue.options[type + 's'] = Object.create(null);
  });

  // this is used to identify the "base" constructor to extend all plain-object
  // components with in Weex's multi-instance scenarios.
  Vue.options._base = Vue;

  extend(Vue.options.components, builtInComponents);

  initUse(Vue);
  initMixin$1(Vue);
  initExtend(Vue);
  initAssetRegisters(Vue);
}

initGlobalAPI(Vue);

Object.defineProperty(Vue.prototype, '$isServer', {
  get: isServerRendering
});

Object.defineProperty(Vue.prototype, '$ssrContext', {
  get: function get () {
    /* istanbul ignore next */
    return this.$vnode && this.$vnode.ssrContext
  }
});

// expose FunctionalRenderContext for ssr runtime helper installation
Object.defineProperty(Vue, 'FunctionalRenderContext', {
  value: FunctionalRenderContext
});

Vue.version = '2.6.11';

/**
 * https://raw.githubusercontent.com/Tencent/westore/master/packages/westore/utils/diff.js
 */
var ARRAYTYPE = '[object Array]';
var OBJECTTYPE = '[object Object]';
// const FUNCTIONTYPE = '[object Function]'

function diff(current, pre) {
    var result = {};
    syncKeys(current, pre);
    _diff(current, pre, '', result);
    return result
}

function syncKeys(current, pre) {
    if (current === pre) { return }
    var rootCurrentType = type(current);
    var rootPreType = type(pre);
    if (rootCurrentType == OBJECTTYPE && rootPreType == OBJECTTYPE) {
        if(Object.keys(current).length >= Object.keys(pre).length){
            for (var key in pre) {
                var currentValue = current[key];
                if (currentValue === undefined) {
                    current[key] = null;
                } else {
                    syncKeys(currentValue, pre[key]);
                }
            }
        }
    } else if (rootCurrentType == ARRAYTYPE && rootPreType == ARRAYTYPE) {
        if (current.length >= pre.length) {
            pre.forEach(function (item, index) {
                syncKeys(current[index], item);
            });
        }
    }
}

function _diff(current, pre, path, result) {
    if (current === pre) { return }
    var rootCurrentType = type(current);
    var rootPreType = type(pre);
    if (rootCurrentType == OBJECTTYPE) {
        if (rootPreType != OBJECTTYPE || Object.keys(current).length < Object.keys(pre).length) {
            setResult(result, path, current);
        } else {
            var loop = function ( key ) {
                var currentValue = current[key];
                var preValue = pre[key];
                var currentType = type(currentValue);
                var preType = type(preValue);
                if (currentType != ARRAYTYPE && currentType != OBJECTTYPE) {
                    if (currentValue != pre[key]) {
                        setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                    }
                } else if (currentType == ARRAYTYPE) {
                    if (preType != ARRAYTYPE) {
                        setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                    } else {
                        if (currentValue.length < preValue.length) {
                            setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                        } else {
                            currentValue.forEach(function (item, index) {
                                _diff(item, preValue[index], (path == '' ? '' : path + ".") + key + '[' + index + ']', result);
                            });
                        }
                    }
                } else if (currentType == OBJECTTYPE) {
                    if (preType != OBJECTTYPE || Object.keys(currentValue).length < Object.keys(preValue).length) {
                        setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                    } else {
                        for (var subKey in currentValue) {
                            _diff(currentValue[subKey], preValue[subKey], (path == '' ? '' : path + ".") + key + '.' + subKey, result);
                        }
                    }
                }
            };

            for (var key in current) loop( key );
        }
    } else if (rootCurrentType == ARRAYTYPE) {
        if (rootPreType != ARRAYTYPE) {
            setResult(result, path, current);
        } else {
            if (current.length < pre.length) {
                setResult(result, path, current);
            } else {
                current.forEach(function (item, index) {
                    _diff(item, pre[index], path + '[' + index + ']', result);
                });
            }
        }
    } else {
        setResult(result, path, current);
    }
}

function setResult(result, k, v) {
    // if (type(v) != FUNCTIONTYPE) {
        result[k] = v;
    // }
}

function type(obj) {
    return Object.prototype.toString.call(obj)
}

/*  */

function flushCallbacks$1(vm) {
    if (vm.__next_tick_callbacks && vm.__next_tick_callbacks.length) {
        if (Object({"VUE_APP_PLATFORM":"mp-qq","NODE_ENV":"development","BASE_URL":"/"}).VUE_APP_DEBUG) {
            var mpInstance = vm.$scope;
            console.log('[' + (+new Date) + '][' + (mpInstance.is || mpInstance.route) + '][' + vm._uid +
                ']:flushCallbacks[' + vm.__next_tick_callbacks.length + ']');
        }
        var copies = vm.__next_tick_callbacks.slice(0);
        vm.__next_tick_callbacks.length = 0;
        for (var i = 0; i < copies.length; i++) {
            copies[i]();
        }
    }
}

function hasRenderWatcher(vm) {
    return queue.find(function (watcher) { return vm._watcher === watcher; })
}

function nextTick$1(vm, cb) {
    //1.nextTick 之前 已 setData 且 setData 还未回调完成
    //2.nextTick 之前存在 render watcher
    if (!vm.__next_tick_pending && !hasRenderWatcher(vm)) {
        if(Object({"VUE_APP_PLATFORM":"mp-qq","NODE_ENV":"development","BASE_URL":"/"}).VUE_APP_DEBUG){
            var mpInstance = vm.$scope;
            console.log('[' + (+new Date) + '][' + (mpInstance.is || mpInstance.route) + '][' + vm._uid +
                ']:nextVueTick');
        }
        return nextTick(cb, vm)
    }else{
        if(Object({"VUE_APP_PLATFORM":"mp-qq","NODE_ENV":"development","BASE_URL":"/"}).VUE_APP_DEBUG){
            var mpInstance$1 = vm.$scope;
            console.log('[' + (+new Date) + '][' + (mpInstance$1.is || mpInstance$1.route) + '][' + vm._uid +
                ']:nextMPTick');
        }
    }
    var _resolve;
    if (!vm.__next_tick_callbacks) {
        vm.__next_tick_callbacks = [];
    }
    vm.__next_tick_callbacks.push(function () {
        if (cb) {
            try {
                cb.call(vm);
            } catch (e) {
                handleError(e, vm, 'nextTick');
            }
        } else if (_resolve) {
            _resolve(vm);
        }
    });
    // $flow-disable-line
    if (!cb && typeof Promise !== 'undefined') {
        return new Promise(function (resolve) {
            _resolve = resolve;
        })
    }
}

/*  */

function cloneWithData(vm) {
  // 确保当前 vm 所有数据被同步
  var ret = Object.create(null);
  var dataKeys = [].concat(
    Object.keys(vm._data || {}),
    Object.keys(vm._computedWatchers || {}));

  dataKeys.reduce(function(ret, key) {
    ret[key] = vm[key];
    return ret
  }, ret);
  //TODO 需要把无用数据处理掉，比如 list=>l0 则 list 需要移除，否则多传输一份数据
  Object.assign(ret, vm.$mp.data || {});
  if (
    Array.isArray(vm.$options.behaviors) &&
    vm.$options.behaviors.indexOf('uni://form-field') !== -1
  ) { //form-field
    ret['name'] = vm.name;
    ret['value'] = vm.value;
  }

  return JSON.parse(JSON.stringify(ret))
}

var patch = function(oldVnode, vnode) {
  var this$1 = this;

  if (vnode === null) { //destroy
    return
  }
  if (this.mpType === 'page' || this.mpType === 'component') {
    var mpInstance = this.$scope;
    var data = Object.create(null);
    try {
      data = cloneWithData(this);
    } catch (err) {
      console.error(err);
    }
    data.__webviewId__ = mpInstance.data.__webviewId__;
    var mpData = Object.create(null);
    Object.keys(data).forEach(function (key) { //仅同步 data 中有的数据
      mpData[key] = mpInstance.data[key];
    });
    var diffData = this.$shouldDiffData === false ? data : diff(data, mpData);
    if (Object.keys(diffData).length) {
      if (Object({"VUE_APP_PLATFORM":"mp-qq","NODE_ENV":"development","BASE_URL":"/"}).VUE_APP_DEBUG) {
        console.log('[' + (+new Date) + '][' + (mpInstance.is || mpInstance.route) + '][' + this._uid +
          ']差量更新',
          JSON.stringify(diffData));
      }
      this.__next_tick_pending = true;
      mpInstance.setData(diffData, function () {
        this$1.__next_tick_pending = false;
        flushCallbacks$1(this$1);
      });
    } else {
      flushCallbacks$1(this);
    }
  }
};

/*  */

function createEmptyRender() {

}

function mountComponent$1(
  vm,
  el,
  hydrating
) {
  if (!vm.mpType) {//main.js 中的 new Vue
    return vm
  }
  if (vm.mpType === 'app') {
    vm.$options.render = createEmptyRender;
  }
  if (!vm.$options.render) {
    vm.$options.render = createEmptyRender;
    if (true) {
      /* istanbul ignore if */
      if ((vm.$options.template && vm.$options.template.charAt(0) !== '#') ||
        vm.$options.el || el) {
        warn(
          'You are using the runtime-only build of Vue where the template ' +
          'compiler is not available. Either pre-compile the templates into ' +
          'render functions, or use the compiler-included build.',
          vm
        );
      } else {
        warn(
          'Failed to mount component: template or render function not defined.',
          vm
        );
      }
    }
  }
  
  !vm._$fallback && callHook(vm, 'beforeMount');

  var updateComponent = function () {
    vm._update(vm._render(), hydrating);
  };

  // we set this to vm._watcher inside the watcher's constructor
  // since the watcher's initial patch may call $forceUpdate (e.g. inside child
  // component's mounted hook), which relies on vm._watcher being already defined
  new Watcher(vm, updateComponent, noop, {
    before: function before() {
      if (vm._isMounted && !vm._isDestroyed) {
        callHook(vm, 'beforeUpdate');
      }
    }
  }, true /* isRenderWatcher */);
  hydrating = false;
  return vm
}

/*  */

function renderClass (
  staticClass,
  dynamicClass
) {
  if (isDef(staticClass) || isDef(dynamicClass)) {
    return concat(staticClass, stringifyClass(dynamicClass))
  }
  /* istanbul ignore next */
  return ''
}

function concat (a, b) {
  return a ? b ? (a + ' ' + b) : a : (b || '')
}

function stringifyClass (value) {
  if (Array.isArray(value)) {
    return stringifyArray(value)
  }
  if (isObject(value)) {
    return stringifyObject(value)
  }
  if (typeof value === 'string') {
    return value
  }
  /* istanbul ignore next */
  return ''
}

function stringifyArray (value) {
  var res = '';
  var stringified;
  for (var i = 0, l = value.length; i < l; i++) {
    if (isDef(stringified = stringifyClass(value[i])) && stringified !== '') {
      if (res) { res += ' '; }
      res += stringified;
    }
  }
  return res
}

function stringifyObject (value) {
  var res = '';
  for (var key in value) {
    if (value[key]) {
      if (res) { res += ' '; }
      res += key;
    }
  }
  return res
}

/*  */

var parseStyleText = cached(function (cssText) {
  var res = {};
  var listDelimiter = /;(?![^(]*\))/g;
  var propertyDelimiter = /:(.+)/;
  cssText.split(listDelimiter).forEach(function (item) {
    if (item) {
      var tmp = item.split(propertyDelimiter);
      tmp.length > 1 && (res[tmp[0].trim()] = tmp[1].trim());
    }
  });
  return res
});

// normalize possible array / string values into Object
function normalizeStyleBinding (bindingStyle) {
  if (Array.isArray(bindingStyle)) {
    return toObject(bindingStyle)
  }
  if (typeof bindingStyle === 'string') {
    return parseStyleText(bindingStyle)
  }
  return bindingStyle
}

/*  */

var MP_METHODS = ['createSelectorQuery', 'createIntersectionObserver', 'selectAllComponents', 'selectComponent'];

function getTarget(obj, path) {
  var parts = path.split('.');
  var key = parts[0];
  if (key.indexOf('__$n') === 0) { //number index
    key = parseInt(key.replace('__$n', ''));
  }
  if (parts.length === 1) {
    return obj[key]
  }
  return getTarget(obj[key], parts.slice(1).join('.'))
}

function internalMixin(Vue) {

  Vue.config.errorHandler = function(err) {
    console.error(err);
    /* eslint-disable no-undef */
    var app = getApp();
    if (app && app.onError) {
      app.onError(err);
    }
  };

  var oldEmit = Vue.prototype.$emit;

  Vue.prototype.$emit = function(event) {
    if (this.$scope && event) {
      this.$scope['triggerEvent'](event, {
        __args__: toArray(arguments, 1)
      });
    }
    return oldEmit.apply(this, arguments)
  };

  Vue.prototype.$nextTick = function(fn) {
    return nextTick$1(this, fn)
  };

  MP_METHODS.forEach(function (method) {
    Vue.prototype[method] = function(args) {
      if (this.$scope && this.$scope[method]) {
        return this.$scope[method](args)
      }
      // mp-alipay
      if (typeof my === 'undefined') {
        return
      }
      if (method === 'createSelectorQuery') {
        /* eslint-disable no-undef */
        return my.createSelectorQuery(args)
      } else if (method === 'createIntersectionObserver') {
        /* eslint-disable no-undef */
        return my.createIntersectionObserver(args)
      }
      // TODO mp-alipay 暂不支持 selectAllComponents,selectComponent
    };
  });

  Vue.prototype.__init_provide = initProvide;

  Vue.prototype.__init_injections = initInjections;

  Vue.prototype.__call_hook = function(hook, args) {
    var vm = this;
    // #7573 disable dep collection when invoking lifecycle hooks
    pushTarget();
    var handlers = vm.$options[hook];
    var info = hook + " hook";
    var ret;
    if (handlers) {
      for (var i = 0, j = handlers.length; i < j; i++) {
        ret = invokeWithErrorHandling(handlers[i], vm, args ? [args] : null, vm, info);
      }
    }
    if (vm._hasHookEvent) {
      vm.$emit('hook:' + hook, args);
    }
    popTarget();
    return ret
  };

  Vue.prototype.__set_model = function(target, key, value, modifiers) {
    if (Array.isArray(modifiers)) {
      if (modifiers.indexOf('trim') !== -1) {
        value = value.trim();
      }
      if (modifiers.indexOf('number') !== -1) {
        value = this._n(value);
      }
    }
    if (!target) {
      target = this;
    }
    target[key] = value;
  };

  Vue.prototype.__set_sync = function(target, key, value) {
    if (!target) {
      target = this;
    }
    target[key] = value;
  };

  Vue.prototype.__get_orig = function(item) {
    if (isPlainObject(item)) {
      return item['$orig'] || item
    }
    return item
  };

  Vue.prototype.__get_value = function(dataPath, target) {
    return getTarget(target || this, dataPath)
  };


  Vue.prototype.__get_class = function(dynamicClass, staticClass) {
    return renderClass(staticClass, dynamicClass)
  };

  Vue.prototype.__get_style = function(dynamicStyle, staticStyle) {
    if (!dynamicStyle && !staticStyle) {
      return ''
    }
    var dynamicStyleObj = normalizeStyleBinding(dynamicStyle);
    var styleObj = staticStyle ? extend(staticStyle, dynamicStyleObj) : dynamicStyleObj;
    return Object.keys(styleObj).map(function (name) { return ((hyphenate(name)) + ":" + (styleObj[name])); }).join(';')
  };

  Vue.prototype.__map = function(val, iteratee) {
    //TODO 暂不考虑 string,number
    var ret, i, l, keys, key;
    if (Array.isArray(val)) {
      ret = new Array(val.length);
      for (i = 0, l = val.length; i < l; i++) {
        ret[i] = iteratee(val[i], i);
      }
      return ret
    } else if (isObject(val)) {
      keys = Object.keys(val);
      ret = Object.create(null);
      for (i = 0, l = keys.length; i < l; i++) {
        key = keys[i];
        ret[key] = iteratee(val[key], key, i);
      }
      return ret
    }
    return []
  };

}

/*  */

var LIFECYCLE_HOOKS$1 = [
    //App
    'onLaunch',
    'onShow',
    'onHide',
    'onUniNViewMessage',
    'onError',
    //Page
    'onLoad',
    // 'onShow',
    'onReady',
    // 'onHide',
    'onUnload',
    'onPullDownRefresh',
    'onReachBottom',
    'onTabItemTap',
    'onShareAppMessage',
    'onResize',
    'onPageScroll',
    'onNavigationBarButtonTap',
    'onBackPress',
    'onNavigationBarSearchInputChanged',
    'onNavigationBarSearchInputConfirmed',
    'onNavigationBarSearchInputClicked',
    //Component
    // 'onReady', // 兼容旧版本，应该移除该事件
    'onPageShow',
    'onPageHide',
    'onPageResize'
];
function lifecycleMixin$1(Vue) {

    //fixed vue-class-component
    var oldExtend = Vue.extend;
    Vue.extend = function(extendOptions) {
        extendOptions = extendOptions || {};

        var methods = extendOptions.methods;
        if (methods) {
            Object.keys(methods).forEach(function (methodName) {
                if (LIFECYCLE_HOOKS$1.indexOf(methodName)!==-1) {
                    extendOptions[methodName] = methods[methodName];
                    delete methods[methodName];
                }
            });
        }

        return oldExtend.call(this, extendOptions)
    };

    var strategies = Vue.config.optionMergeStrategies;
    var mergeHook = strategies.created;
    LIFECYCLE_HOOKS$1.forEach(function (hook) {
        strategies[hook] = mergeHook;
    });

    Vue.prototype.__lifecycle_hooks__ = LIFECYCLE_HOOKS$1;
}

/*  */

// install platform patch function
Vue.prototype.__patch__ = patch;

// public mount method
Vue.prototype.$mount = function(
    el ,
    hydrating 
) {
    return mountComponent$1(this, el, hydrating)
};

lifecycleMixin$1(Vue);
internalMixin(Vue);

/*  */

/* harmony default export */ __webpack_exports__["default"] = (Vue);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../webpack/buildin/global.js */ 3)))

/***/ }),

/***/ 25:
/*!************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/uni-cloud/dist/index.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global, uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;function _defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}function _createClass(Constructor, protoProps, staticProps) {if (protoProps) _defineProperties(Constructor.prototype, protoProps);if (staticProps) _defineProperties(Constructor, staticProps);return Constructor;}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _createSuper(Derived) {return function () {var Super = _getPrototypeOf(Derived),result;if (_isNativeReflectConstruct()) {var NewTarget = _getPrototypeOf(this).constructor;result = Reflect.construct(Super, arguments, NewTarget);} else {result = Super.apply(this, arguments);}return _possibleConstructorReturn(this, result);};}function _possibleConstructorReturn(self, call) {if (call && (typeof call === "object" || typeof call === "function")) {return call;}return _assertThisInitialized(self);}function _assertThisInitialized(self) {if (self === void 0) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return self;}function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function");}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });if (superClass) _setPrototypeOf(subClass, superClass);}function _wrapNativeSuper(Class) {var _cache = typeof Map === "function" ? new Map() : undefined;_wrapNativeSuper = function _wrapNativeSuper(Class) {if (Class === null || !_isNativeFunction(Class)) return Class;if (typeof Class !== "function") {throw new TypeError("Super expression must either be null or a function");}if (typeof _cache !== "undefined") {if (_cache.has(Class)) return _cache.get(Class);_cache.set(Class, Wrapper);}function Wrapper() {return _construct(Class, arguments, _getPrototypeOf(this).constructor);}Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } });return _setPrototypeOf(Wrapper, Class);};return _wrapNativeSuper(Class);}function _construct(Parent, args, Class) {if (_isNativeReflectConstruct()) {_construct = Reflect.construct;} else {_construct = function _construct(Parent, args, Class) {var a = [null];a.push.apply(a, args);var Constructor = Function.bind.apply(Parent, a);var instance = new Constructor();if (Class) _setPrototypeOf(instance, Class.prototype);return instance;};}return _construct.apply(null, arguments);}function _isNativeReflectConstruct() {if (typeof Reflect === "undefined" || !Reflect.construct) return false;if (Reflect.construct.sham) return false;if (typeof Proxy === "function") return true;try {Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));return true;} catch (e) {return false;}}function _isNativeFunction(fn) {return Function.toString.call(fn).indexOf("[native code]") !== -1;}function _setPrototypeOf(o, p) {_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {o.__proto__ = p;return o;};return _setPrototypeOf(o, p);}function _getPrototypeOf(o) {_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {return o.__proto__ || Object.getPrototypeOf(o);};return _getPrototypeOf(o);}var e = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};function t(e) {return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;}function n(e, t) {return e(t = { exports: {} }, t.exports), t.exports;}var r = n(function (e, t) {var n;e.exports = (n = n || function (e, t) {var n = Object.create || function () {function e() {}return function (t) {var n;return e.prototype = t, n = new e(), e.prototype = null, n;};}(),r = {},o = r.lib = {},s = o.Base = { extend: function extend(e) {var t = n(this);return e && t.mixIn(e), t.hasOwnProperty("init") && this.init !== t.init || (t.init = function () {t.$super.init.apply(this, arguments);}), t.init.prototype = t, t.$super = this, t;}, create: function create() {var e = this.extend();return e.init.apply(e, arguments), e;}, init: function init() {}, mixIn: function mixIn(e) {for (var t in e) {e.hasOwnProperty(t) && (this[t] = e[t]);}e.hasOwnProperty("toString") && (this.toString = e.toString);}, clone: function clone() {return this.init.prototype.extend(this);} },i = o.WordArray = s.extend({ init: function init(e, t) {e = this.words = e || [], this.sigBytes = null != t ? t : 4 * e.length;}, toString: function toString(e) {return (e || c).stringify(this);}, concat: function concat(e) {var t = this.words,n = e.words,r = this.sigBytes,o = e.sigBytes;if (this.clamp(), r % 4) for (var s = 0; s < o; s++) {var i = n[s >>> 2] >>> 24 - s % 4 * 8 & 255;t[r + s >>> 2] |= i << 24 - (r + s) % 4 * 8;} else for (s = 0; s < o; s += 4) {t[r + s >>> 2] = n[s >>> 2];}return this.sigBytes += o, this;}, clamp: function clamp() {var t = this.words,n = this.sigBytes;t[n >>> 2] &= 4294967295 << 32 - n % 4 * 8, t.length = e.ceil(n / 4);}, clone: function clone() {var e = s.clone.call(this);return e.words = this.words.slice(0), e;}, random: function random(t) {for (var n, r = [], o = function o(t) {t = t;var n = 987654321,r = 4294967295;return function () {var o = ((n = 36969 * (65535 & n) + (n >> 16) & r) << 16) + (t = 18e3 * (65535 & t) + (t >> 16) & r) & r;return o /= 4294967296, (o += .5) * (e.random() > .5 ? 1 : -1);};}, s = 0; s < t; s += 4) {var a = o(4294967296 * (n || e.random()));n = 987654071 * a(), r.push(4294967296 * a() | 0);}return new i.init(r, t);} }),a = r.enc = {},c = a.Hex = { stringify: function stringify(e) {for (var t = e.words, n = e.sigBytes, r = [], o = 0; o < n; o++) {var s = t[o >>> 2] >>> 24 - o % 4 * 8 & 255;r.push((s >>> 4).toString(16)), r.push((15 & s).toString(16));}return r.join("");}, parse: function parse(e) {for (var t = e.length, n = [], r = 0; r < t; r += 2) {n[r >>> 3] |= parseInt(e.substr(r, 2), 16) << 24 - r % 8 * 4;}return new i.init(n, t / 2);} },u = a.Latin1 = { stringify: function stringify(e) {for (var t = e.words, n = e.sigBytes, r = [], o = 0; o < n; o++) {var s = t[o >>> 2] >>> 24 - o % 4 * 8 & 255;r.push(String.fromCharCode(s));}return r.join("");}, parse: function parse(e) {for (var t = e.length, n = [], r = 0; r < t; r++) {n[r >>> 2] |= (255 & e.charCodeAt(r)) << 24 - r % 4 * 8;}return new i.init(n, t);} },l = a.Utf8 = { stringify: function stringify(e) {try {return decodeURIComponent(escape(u.stringify(e)));} catch (e) {throw new Error("Malformed UTF-8 data");}}, parse: function parse(e) {return u.parse(unescape(encodeURIComponent(e)));} },f = o.BufferedBlockAlgorithm = s.extend({ reset: function reset() {this._data = new i.init(), this._nDataBytes = 0;}, _append: function _append(e) {"string" == typeof e && (e = l.parse(e)), this._data.concat(e), this._nDataBytes += e.sigBytes;}, _process: function _process(t) {var n = this._data,r = n.words,o = n.sigBytes,s = this.blockSize,a = o / (4 * s),c = (a = t ? e.ceil(a) : e.max((0 | a) - this._minBufferSize, 0)) * s,u = e.min(4 * c, o);if (c) {for (var l = 0; l < c; l += s) {this._doProcessBlock(r, l);}var f = r.splice(0, c);n.sigBytes -= u;}return new i.init(f, u);}, clone: function clone() {var e = s.clone.call(this);return e._data = this._data.clone(), e;}, _minBufferSize: 0 }),p = (o.Hasher = f.extend({ cfg: s.extend(), init: function init(e) {this.cfg = this.cfg.extend(e), this.reset();}, reset: function reset() {f.reset.call(this), this._doReset();}, update: function update(e) {return this._append(e), this._process(), this;}, finalize: function finalize(e) {return e && this._append(e), this._doFinalize();}, blockSize: 16, _createHelper: function _createHelper(e) {return function (t, n) {return new e.init(n).finalize(t);};}, _createHmacHelper: function _createHmacHelper(e) {return function (t, n) {return new p.HMAC.init(e, n).finalize(t);};} }), r.algo = {});return r;}(Math), n);}),o = (n(function (e, t) {var n;e.exports = (n = r, function (e) {var t = n,r = t.lib,o = r.WordArray,s = r.Hasher,i = t.algo,a = [];!function () {for (var t = 0; t < 64; t++) {a[t] = 4294967296 * e.abs(e.sin(t + 1)) | 0;}}();var c = i.MD5 = s.extend({ _doReset: function _doReset() {this._hash = new o.init([1732584193, 4023233417, 2562383102, 271733878]);}, _doProcessBlock: function _doProcessBlock(e, t) {for (var n = 0; n < 16; n++) {var r = t + n,o = e[r];e[r] = 16711935 & (o << 8 | o >>> 24) | 4278255360 & (o << 24 | o >>> 8);}var s = this._hash.words,i = e[t + 0],c = e[t + 1],h = e[t + 2],d = e[t + 3],y = e[t + 4],v = e[t + 5],g = e[t + 6],_ = e[t + 7],m = e[t + 8],b = e[t + 9],w = e[t + 10],E = e[t + 11],T = e[t + 12],O = e[t + 13],S = e[t + 14],k = e[t + 15],A = s[0],P = s[1],I = s[2],N = s[3];A = u(A, P, I, N, i, 7, a[0]), N = u(N, A, P, I, c, 12, a[1]), I = u(I, N, A, P, h, 17, a[2]), P = u(P, I, N, A, d, 22, a[3]), A = u(A, P, I, N, y, 7, a[4]), N = u(N, A, P, I, v, 12, a[5]), I = u(I, N, A, P, g, 17, a[6]), P = u(P, I, N, A, _, 22, a[7]), A = u(A, P, I, N, m, 7, a[8]), N = u(N, A, P, I, b, 12, a[9]), I = u(I, N, A, P, w, 17, a[10]), P = u(P, I, N, A, E, 22, a[11]), A = u(A, P, I, N, T, 7, a[12]), N = u(N, A, P, I, O, 12, a[13]), I = u(I, N, A, P, S, 17, a[14]), A = l(A, P = u(P, I, N, A, k, 22, a[15]), I, N, c, 5, a[16]), N = l(N, A, P, I, g, 9, a[17]), I = l(I, N, A, P, E, 14, a[18]), P = l(P, I, N, A, i, 20, a[19]), A = l(A, P, I, N, v, 5, a[20]), N = l(N, A, P, I, w, 9, a[21]), I = l(I, N, A, P, k, 14, a[22]), P = l(P, I, N, A, y, 20, a[23]), A = l(A, P, I, N, b, 5, a[24]), N = l(N, A, P, I, S, 9, a[25]), I = l(I, N, A, P, d, 14, a[26]), P = l(P, I, N, A, m, 20, a[27]), A = l(A, P, I, N, O, 5, a[28]), N = l(N, A, P, I, h, 9, a[29]), I = l(I, N, A, P, _, 14, a[30]), A = f(A, P = l(P, I, N, A, T, 20, a[31]), I, N, v, 4, a[32]), N = f(N, A, P, I, m, 11, a[33]), I = f(I, N, A, P, E, 16, a[34]), P = f(P, I, N, A, S, 23, a[35]), A = f(A, P, I, N, c, 4, a[36]), N = f(N, A, P, I, y, 11, a[37]), I = f(I, N, A, P, _, 16, a[38]), P = f(P, I, N, A, w, 23, a[39]), A = f(A, P, I, N, O, 4, a[40]), N = f(N, A, P, I, i, 11, a[41]), I = f(I, N, A, P, d, 16, a[42]), P = f(P, I, N, A, g, 23, a[43]), A = f(A, P, I, N, b, 4, a[44]), N = f(N, A, P, I, T, 11, a[45]), I = f(I, N, A, P, k, 16, a[46]), A = p(A, P = f(P, I, N, A, h, 23, a[47]), I, N, i, 6, a[48]), N = p(N, A, P, I, _, 10, a[49]), I = p(I, N, A, P, S, 15, a[50]), P = p(P, I, N, A, v, 21, a[51]), A = p(A, P, I, N, T, 6, a[52]), N = p(N, A, P, I, d, 10, a[53]), I = p(I, N, A, P, w, 15, a[54]), P = p(P, I, N, A, c, 21, a[55]), A = p(A, P, I, N, m, 6, a[56]), N = p(N, A, P, I, k, 10, a[57]), I = p(I, N, A, P, g, 15, a[58]), P = p(P, I, N, A, O, 21, a[59]), A = p(A, P, I, N, y, 6, a[60]), N = p(N, A, P, I, E, 10, a[61]), I = p(I, N, A, P, h, 15, a[62]), P = p(P, I, N, A, b, 21, a[63]), s[0] = s[0] + A | 0, s[1] = s[1] + P | 0, s[2] = s[2] + I | 0, s[3] = s[3] + N | 0;}, _doFinalize: function _doFinalize() {var t = this._data,n = t.words,r = 8 * this._nDataBytes,o = 8 * t.sigBytes;n[o >>> 5] |= 128 << 24 - o % 32;var s = e.floor(r / 4294967296),i = r;n[15 + (o + 64 >>> 9 << 4)] = 16711935 & (s << 8 | s >>> 24) | 4278255360 & (s << 24 | s >>> 8), n[14 + (o + 64 >>> 9 << 4)] = 16711935 & (i << 8 | i >>> 24) | 4278255360 & (i << 24 | i >>> 8), t.sigBytes = 4 * (n.length + 1), this._process();for (var a = this._hash, c = a.words, u = 0; u < 4; u++) {var l = c[u];c[u] = 16711935 & (l << 8 | l >>> 24) | 4278255360 & (l << 24 | l >>> 8);}return a;}, clone: function clone() {var e = s.clone.call(this);return e._hash = this._hash.clone(), e;} });function u(e, t, n, r, o, s, i) {var a = e + (t & n | ~t & r) + o + i;return (a << s | a >>> 32 - s) + t;}function l(e, t, n, r, o, s, i) {var a = e + (t & r | n & ~r) + o + i;return (a << s | a >>> 32 - s) + t;}function f(e, t, n, r, o, s, i) {var a = e + (t ^ n ^ r) + o + i;return (a << s | a >>> 32 - s) + t;}function p(e, t, n, r, o, s, i) {var a = e + (n ^ (t | ~r)) + o + i;return (a << s | a >>> 32 - s) + t;}t.MD5 = s._createHelper(c), t.HmacMD5 = s._createHmacHelper(c);}(Math), n.MD5);}), n(function (e, t) {var n, o, s;e.exports = (o = (n = r).lib.Base, s = n.enc.Utf8, void (n.algo.HMAC = o.extend({ init: function init(e, t) {e = this._hasher = new e.init(), "string" == typeof t && (t = s.parse(t));var n = e.blockSize,r = 4 * n;t.sigBytes > r && (t = e.finalize(t)), t.clamp();for (var o = this._oKey = t.clone(), i = this._iKey = t.clone(), a = o.words, c = i.words, u = 0; u < n; u++) {a[u] ^= 1549556828, c[u] ^= 909522486;}o.sigBytes = i.sigBytes = r, this.reset();}, reset: function reset() {var e = this._hasher;e.reset(), e.update(this._iKey);}, update: function update(e) {return this._hasher.update(e), this;}, finalize: function finalize(e) {var t = this._hasher,n = t.finalize(e);return t.reset(), t.finalize(this._oKey.clone().concat(n));} })));}), n(function (e, t) {e.exports = r.HmacMD5;}));var s = /*#__PURE__*/function (_Error) {_inherits(s, _Error);var _super = _createSuper(s);function s(e) {var _this;_classCallCheck(this, s);_this = _super.call(this, e.message), _this.errMsg = e.message || "", Object.defineProperties(_assertThisInitialized(_this), { code: { get: function get() {return e.code;} }, requestId: { get: function get() {return e.requestId;} }, message: { get: function get() {return this.errMsg;}, set: function set(e) {this.errMsg = e;} } });return _this;}return s;}( /*#__PURE__*/_wrapNativeSuper(Error));var i = { sign: function sign(e, t) {var n = "";return Object.keys(e).sort().forEach(function (t) {e[t] && (n = n + "&" + t + "=" + e[t]);}), n = n.slice(1), o(n, t).toString();}, wrappedRequest: function wrappedRequest(e) {return new Promise(function (t, n) {uni.request(Object.assign(e, { complete: function complete(e) {e || (e = {}), 0 === e.errMsg.indexOf("request:fail") && "h5" === "mp-qq" && "development" === "development" && console.warn("发布H5，需要在uniCloud后台操作，绑定安全域名，否则会因为跨域问题而无法访问。教程参考：https://uniapp.dcloud.io/uniCloud/quickstart?id=H5%E4%B8%AD%E4%BD%BF%E7%94%A8unicloud");var r = e.data && e.data.header && e.data.header["x-serverless-request-id"] || e.header && e.header["request-id"];if (!e.statusCode || e.statusCode >= 400) return n(new s({ code: "SYS_ERR", message: e.errMsg || "request:fail", requestId: r }));var o = e.data;if (o.error) return n(new s({ code: o.error.code, message: o.error.message, requestId: r }));o.result = o.data, o.requestId = r, delete o.data, t(o);} }));});} };var a = { image: "image/*", jpg: "image/jpeg", jpeg: "image/jpeg", png: "image/png", gif: "image/gif", webp: "image/webp", svg: "image/svg+xml", mp3: "audio/mp3", mp4: "video/mp4", ogg: "audio/ogg", webm: "video/webm" };function c(e) {return a[e.toLowerCase()];}var u = /*#__PURE__*/function () {function u(e) {_classCallCheck(this, u);["spaceId", "clientSecret"].forEach(function (t) {if (!Object.prototype.hasOwnProperty.call(e, t)) throw new Error("\u7F3A\u5C11\u53C2\u6570".concat(t));}), this.config = Object.assign({}, { endpoint: "https://api.bspapp.com" }, e), this.config.provider = "aliyun", this.config.requestUrl = this.config.endpoint + "/client", this.config.envType = this.config.envType || "public", this.config.accessTokenKey = "access_token_" + this.config.spaceId;}_createClass(u, [{ key: "setAccessToken", value: function setAccessToken(e) {this.accessToken = e;} }, { key: "requestAuth", value: function requestAuth(e) {return i.wrappedRequest(e);} }, { key: "request", value: function request(e, t) {var _this2 = this;return this.hasAccessToken ? t ? i.wrappedRequest(e) : i.wrappedRequest(e).catch(function (t) {return new Promise(function (e, n) {!t || "GATEWAY_INVALID_TOKEN" !== t.code && "InvalidParameter.InvalidToken" !== t.code ? n(t) : e();}).then(function () {return _this2.getAccessToken();}).then(function () {var t = _this2.rebuildRequest(e);return _this2.request(t, !0);});}) : this.getAccessToken().then(function () {var t = _this2.rebuildRequest(e);return _this2.request(t, !0);});} }, { key: "rebuildRequest", value: function rebuildRequest(e) {var t = Object.assign({}, e);return t.data.token = this.accessToken, t.header["x-basement-token"] = this.accessToken, t.header["x-serverless-sign"] = i.sign(t.data, this.config.clientSecret), t;} }, { key: "setupRequest", value: function setupRequest(e, t) {var n = Object.assign({}, e, { spaceId: this.config.spaceId, timestamp: Date.now() }),r = { "Content-Type": "application/json" };return "auth" !== t && (n.token = this.accessToken, r["x-basement-token"] = this.accessToken), r["x-serverless-sign"] = i.sign(n, this.config.clientSecret), { url: this.config.requestUrl, method: "POST", data: n, dataType: "json", header: r };} }, { key: "getAccessToken", value: function getAccessToken() {var _this3 = this;return this.requestAuth(this.setupRequest({ method: "serverless.auth.user.anonymousAuthorize", params: "{}" }, "auth")).then(function (e) {return new Promise(function (t, n) {e.result && e.result.accessToken ? (_this3.setAccessToken(e.result.accessToken), t(_this3.accessToken)) : n(new s({ code: "AUTH_FAILED", message: "获取accessToken失败" }));});});} }, { key: "authorize", value: function authorize() {this.getAccessToken();} }, { key: "callFunction", value: function callFunction(e) {var _this4 = this;var t = { method: "serverless.function.runtime.invoke", params: JSON.stringify({ functionTarget: e.name, functionArgs: e.data || {} }) };return this.config.useDebugFunction ? this.request(this.setupRequest(t)).then(function (t) {if (t && t.requestId) {var _n = JSON.stringify({ spaceId: _this4.config.spaceId, functionName: e.name, requestId: t.requestId });console.log("[aliyun-request]".concat(_n, "[/aliyun-request]"));}return Promise.resolve(t);}).catch(function (t) {if (t && t.requestId) {var _n2 = JSON.stringify({ spaceId: _this4.config.spaceId, functionName: e.name, requestId: t.requestId });console.log("[aliyun-request]".concat(_n2, "[/aliyun-request]"));}return Promise.reject(t);}) : this.request(this.setupRequest(t));} }, { key: "getOSSUploadOptionsFromPath", value: function getOSSUploadOptionsFromPath(e) {var t = { method: "serverless.file.resource.generateProximalSign", params: JSON.stringify(e) };return this.request(this.setupRequest(t));} }, { key: "uploadFileToOSS", value: function uploadFileToOSS(_ref) {var e = _ref.url,t = _ref.formData,n = _ref.fileName,r = _ref.name,o = _ref.filePath,i = _ref.fileType,a = _ref.contentType,c = _ref.onUploadProgress;return new Promise(function (a, u) {var l = uni.uploadFile({ url: e, formData: t, fileName: n, name: r, filePath: o, fileType: i, header: { "X-OSS-server-side-encrpytion": "AES256" }, success: function success(e) {e && e.statusCode < 400 ? a(e) : u(new s({ code: "UPLOAD_FAILED", message: "文件上传失败" }));}, fail: function fail(e) {u(e);} });"function" == typeof c && l.onProgressUpdate(function (e) {c({ loaded: e.totalBytesSent, total: e.totalBytesExpectedToSend });});});} }, { key: "reportOSSUpload", value: function reportOSSUpload(e) {var t = { method: "serverless.file.resource.report", params: JSON.stringify(e) };return this.request(this.setupRequest(t));} }, { key: "uploadFile", value: function uploadFile(_ref2) {var _this5 = this;var e = _ref2.filePath,t = _ref2.cloudPath,n = _ref2.onUploadProgress,r = _ref2.config;var o = r && r.envType || this.config.envType;var i,u,l,f,p,h = t || e.split("/").pop();return (i =  false ? undefined : c(u = e.split("?")[0].split(".").pop()) ? Promise.resolve() : Promise.reject(new s({ code: "UNSUPPORTED_FILE_TYPE", message: "不支持的文件类型" }))).then(function () {return new Promise(function (t, n) {uni.getFileInfo ? uni.getFileInfo({ filePath: e, success: function success(e) {t(e.size);}, fail: function fail(e) {n(e);} }) : t(0);});}).then(function (e) {return _this5.getOSSUploadOptionsFromPath({ env: o, filename: h, size: e });}).then(function (t) {var r = t.result;l = c(u), f = r.id, p = "https://" + r.cdnDomain + "/" + r.ossPath;var o = { url: "https://" + r.host, formData: { "Cache-Control": "max-age=2592000", "Content-Disposition": "attachment", OSSAccessKeyId: r.accessKeyId, Signature: r.signature, host: r.host, id: f, key: r.ossPath, policy: r.policy, success_action_status: 200 }, fileName: "file", name: "file", filePath: e, fileType: "image", contentType: l };return _this5.uploadFileToOSS(Object.assign({}, o, { onUploadProgress: n }));}).then(function () {return _this5.reportOSSUpload({ id: f, contentType: l });}).then(function (t) {return new Promise(function (n, r) {t.success ? n({ success: !0, filePath: e, fileID: p }) : r(new s({ code: "UPLOAD_FAILED", message: "文件上传失败" }));});});} }, { key: "deleteFile", value: function deleteFile(_ref3) {var e = _ref3.fileList;var t = { method: "serverless.file.resource.delete", params: JSON.stringify({ id: e[0] }) };return this.request(this.setupRequest(t));} }, { key: "hasAccessToken", get: function get() {return !!this.accessToken;} }]);return u;}();var l = __webpack_require__(/*! uni-stat-config */ 26).default || __webpack_require__(/*! uni-stat-config */ 26),f = "__DC_STAT_UUID",p = "__DC_UUID_VALUE",h = "https://ide.dcloud.net.cn/serverless/function/invoke";var d, y;function v() {if ("n" === g()) {try {d = plus.runtime.getDCloudId();} catch (e) {d = "";}return d;}return d || (d = Date.now() + "" + Math.floor(1e7 * Math.random()), uni.setStorage({ key: f, data: d })), d;}function g() {return { "app-plus": "n", h5: "h5", "mp-weixin": "wx", "mp-alipay": "ali", "mp-baidu": "bd", "mp-toutiao": "tt", "mp-qq": "qq", "quickapp-native": "qn" }["mp-qq"];}function _(e) {return function (t) {if (!((t = t || {}).success || t.fail || t.complete)) return e.call(this, t);e.call(this, t).then(function (e) {t.success && t.success(e), t.complete && t.complete(e);}).catch(function (e) {t.fail && t.fail(e), t.complete && t.complete(e);});};}setTimeout(function () {uni.getStorage({ key: f, success: function success(e) {d = e.data;}, fail: function fail() {d = p;} }), y = "qn" === g() ? "android" : uni.getSystemInfoSync().platform;}, 0);var m = { init: function init(e) {var t = new u(e);return ["uploadFile", "deleteFile"].forEach(function (e) {t[e] = _(t[e]).bind(t);}), setTimeout(function () {t.authorize();}, 0), t;} };var b;function w(e, t, n) {void 0 === n && (n = {});var r = /\?/.test(t),o = "";for (var s in n) {"" === o ? !r && (t += "?") : o += "&", o += s + "=" + encodeURIComponent(n[s]);}return /^http(s)?\:\/\//.test(t += o) ? t : "" + e + t;}!function (e) {e.local = "local", e.none = "none", e.session = "session";}(b || (b = {}));var _E,T = (_E = function E(e, t) {return (_E = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (e, t) {e.__proto__ = t;} || function (e, t) {for (var n in t) {t.hasOwnProperty(n) && (e[n] = t[n]);}})(e, t);}, function (e, t) {function n() {this.constructor = e;}_E(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());}),_O = function O() {return (_O = Object.assign || function (e) {for (var t, n = 1, r = arguments.length; n < r; n++) {for (var o in t = arguments[n]) {Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);}}return e;}).apply(this, arguments);};var S = function (e) {function t() {return null !== e && e.apply(this, arguments) || this;}return T(t, e), t.prototype.post = function (e) {var t = e.url,n = e.data,r = e.headers;return new Promise(function (e, o) {uni.request({ url: w("https:", t), data: n, method: "POST", header: r, success: function success(t) {e(t);}, fail: function fail(e) {o(e);} });});}, t.prototype.upload = function (e) {return new Promise(function (t) {var n = e.url,r = e.file,o = e.data,s = e.headers;uni.uploadFile({ url: w("https:", n), name: "file", formData: Object.assign({}, o), filePath: r, header: s, success: function success(e) {var n = { statusCode: e.statusCode, data: e.data || {} };200 === e.statusCode && o.success_action_status && (n.statusCode = parseInt(o.success_action_status, 10)), t(n);}, fail: function fail(e) {t(e);} });});}, t.prototype.download = function (e) {var t = e.url,n = e.headers;return new Promise(function (e, r) {uni.downloadFile({ url: w("https:", t), header: n, success: function success(t) {200 === t.statusCode && t.tempFilePath ? e({ statusCode: 200, tempFilePath: t.tempFilePath }) : e(t);}, fail: function fail(e) {r(e);} });});}, t;}(function () {}),k = { setItem: function setItem(e, t) {uni.setStorageSync(e, t);}, getItem: function getItem(e) {return uni.getStorageSync(e);}, removeItem: function removeItem(e) {uni.removeStorageSync(e);}, clear: function clear() {uni.clearStorageSync();} },A = function A(e, t) {void 0 === t && (t = {});var n = uni.connectSocket(_O({ url: e }, t));return { set onopen(e) {n.onOpen(e);}, set onmessage(e) {n.onMessage(e);}, set onclose(e) {n.onClose(e);}, set onerror(e) {n.onError(e);}, send: function send(e) {return n.send({ data: e });}, close: function close(e, t) {return n.close({ code: e, reason: t });}, get readyState() {return n.readyState;}, CONNECTING: 0, OPEN: 1, CLOSING: 2, CLOSED: 3 };};var P = { genAdapter: function genAdapter() {return { root: {}, reqClass: S, wsClass: A, localStorage: k, primaryStorage: b.local };}, isMatch: function isMatch() {return "undefined" != typeof uni && !!uni.request;}, runtime: "uni_app" },I = n(function (e, t) {Object.defineProperty(t, "__esModule", { value: !0 }), t.getQuery = function (e, t) {if ("undefined" == typeof window) return !1;var n = t || window.location.search,r = new RegExp("(^|&)" + e + "=([^&]*)(&|$)"),o = n.substr(n.indexOf("?") + 1).match(r);return null != o ? o[2] : "";}, t.getHash = function (e) {var t = window.location.hash.match(new RegExp("[#?&/]" + e + "=([^&#]*)"));return t ? t[1] : "";}, t.removeParam = function (e, t) {var n = t.split("?")[0],r = [],o = -1 !== t.indexOf("?") ? t.split("?")[1] : "";if ("" !== o) {for (var s = (r = o.split("&")).length - 1; s >= 0; s -= 1) {r[s].split("=")[0] === e && r.splice(s, 1);}n = n + "?" + r.join("&");}return n;}, t.createPromiseCallback = function () {var e;if (!Promise) {(e = function e() {}).promise = {};var t = function t() {throw new Error('Your Node runtime does support ES6 Promises. Set "global.Promise" to your preferred implementation of promises.');};return Object.defineProperty(e.promise, "then", { get: t }), Object.defineProperty(e.promise, "catch", { get: t }), e;}var n = new Promise(function (t, n) {e = function e(_e, r) {return _e ? n(_e) : t(r);};});return e.promise = n, e;}, t.getWeixinCode = function () {return t.getQuery("code") || t.getHash("code");}, t.getMiniAppCode = function () {return new Promise(function (e, t) {wx.login({ success: function success(t) {e(t.code);}, fail: function fail(e) {t(e);} });});}, t.isArray = function (e) {return "[object Array]" === Object.prototype.toString.call(e);}, t.isString = function (e) {return "string" == typeof e;}, t.isUndefined = function (e) {return void 0 === e;}, t.isInstanceOf = function (e, t) {return e instanceof t;}, t.isFormData = function (e) {return "[object FormData]" === Object.prototype.toString.call(e);}, t.genSeqId = function () {return Math.random().toString(16).slice(2);}, t.getArgNames = function (e) {var t = e.toString();return t.slice(t.indexOf("(") + 1, t.indexOf(")")).match(/([^\s,]+)/g);}, t.formatUrl = function (e, t, n) {void 0 === n && (n = {});var r = /\?/.test(t),o = "";for (var s in n) {"" === o ? !r && (t += "?") : o += "&", o += s + "=" + encodeURIComponent(n[s]);}return /^http(s)?\:\/\//.test(t += o) ? t : "" + e + t;};});t(I);I.getQuery, I.getHash, I.removeParam, I.createPromiseCallback, I.getWeixinCode, I.getMiniAppCode, I.isArray, I.isString, I.isUndefined, I.isInstanceOf, I.isFormData, I.genSeqId, I.getArgNames, I.formatUrl;var N,C = "dist/index.js",R = "./dist/index.d.ts",x = { build: "npm run tsc && webpack", tsc: "tsc -p tsconfig.json", "tsc:w": "tsc -p tsconfig.json -w", test: "jest --verbose false -i", e2e: 'NODE_ENV=e2e webpack && jest --config="./jest.e2e.config.js"  --verbose false -i "e2e"', start: "webpack-dev-server --hot --open", eslint: 'eslint "./**/*.js" "./**/*.ts"', "eslint-fix": 'eslint --fix "./**/*.js" "./**/*.ts"', test_web: "npm run tsc && webpack-dev-server --devtool eval-source-map --progress --colors --hot --inline --content-base ./dist --host jimmytest-088bef.tcb.qcloud.la --port 80 --disableHostCheck true --mode development --config webpack.test.js" },q = { type: "git", url: "https://github.com/TencentCloudBase/tcb-js-sdk" },U = ["tcb", "js-sdk"],j = { "@cloudbase/adapter-interface": "^0.2.0", "@cloudbase/adapter-wx_mp": "^0.2.1", "@cloudbase/database": "^0.9.8" },L = { "@babel/core": "^7.6.2", "@babel/plugin-proposal-class-properties": "^7.5.5", "@babel/plugin-proposal-object-rest-spread": "^7.6.2", "@babel/plugin-transform-runtime": "^7.6.2", "@babel/preset-env": "^7.6.2", "@babel/preset-typescript": "^7.6.0", "@babel/runtime": "^7.6.2", "@types/jest": "^23.1.4", "@types/node": "^10.14.4", "@types/superagent": "^4.1.4", axios: "^0.19.0", "babel-eslint": "^10.0.1", "babel-loader": "^8.0.6", "babel-polyfill": "^6.26.0", eslint: "^5.16.0", "eslint-config-alloy": "^1.4.2", "eslint-config-prettier": "^4.1.0", "eslint-plugin-prettier": "^3.0.1", "eslint-plugin-typescript": "^1.0.0-rc.3", express: "^4.17.1", husky: "^3.1.0", jest: "^24.7.1", "jest-puppeteer": "^4.3.0", "lint-staged": "^9.5.0", "power-assert": "^1.6.1", puppeteer: "^1.20.0", "serve-static": "^1.14.1", "ts-jest": "^23.10.4", "ts-loader": "^6.2.1", typescript: "^3.4.3", "typescript-eslint-parser": "^22.0.0", webpack: "^4.41.3", "webpack-bundle-analyzer": "^3.4.1", "webpack-cli": "^3.3.0", "webpack-dev-server": "^3.3.1", "webpack-merge": "^4.2.2", "webpack-visualizer-plugin": "^0.1.11" },D = { hooks: { "pre-commit": "lint-staged" } },F = { name: "tcb-js-sdk", version: "1.3.5", description: "js sdk for tcb", main: C, types: R, scripts: x, repository: q, keywords: U, author: "jimmyjzhang", license: "ISC", dependencies: j, devDependencies: L, husky: D, "lint-staged": { "*.{js,ts}": ["eslint --fix", "git add"] } },M = (N = Object.freeze({ __proto__: null, name: "tcb-js-sdk", version: "1.3.5", description: "js sdk for tcb", main: C, types: R, scripts: x, repository: q, keywords: U, author: "jimmyjzhang", license: "ISC", dependencies: j, devDependencies: L, husky: D, default: F })) && N.default || N,K = n(function (t, n) {var r = e && e.__importStar || function (e) {if (e && e.__esModule) return e;var t = {};if (null != e) for (var n in e) {Object.hasOwnProperty.call(e, n) && (t[n] = e[n]);}return t.default = e, t;};Object.defineProperty(n, "__esModule", { value: !0 });var o = r(M);n.SDK_VERISON = o.version, n.ACCESS_TOKEN = "access_token", n.ACCESS_TOKEN_Expire = "access_token_expire", n.REFRESH_TOKEN = "refresh_token", n.ANONYMOUS_UUID = "anonymous_uuid", n.LOGIN_TYPE_KEY = "login_type", n.protocol = "undefined" != typeof location && "http:" === location.protocol ? "http:" : "https:", n.BASE_URL =  false ? undefined : "//tcb-api.tencentcloudapi.com/web";});t(K);var G;K.SDK_VERISON, K.ACCESS_TOKEN, K.ACCESS_TOKEN_Expire, K.REFRESH_TOKEN, K.ANONYMOUS_UUID, K.LOGIN_TYPE_KEY, K.protocol, K.BASE_URL;!function (e) {e.local = "local", e.none = "none", e.session = "session";}(G || (G = {}));var H = function H() {},Y = function Y() {};var V = Object.freeze({ __proto__: null, get StorageType() {return G;}, AbstractSDKRequest: H, AbstractStorage: Y, formatUrl: function formatUrl(e, t, n) {void 0 === n && (n = {});var r = /\?/.test(t),o = "";for (var s in n) {"" === o ? !r && (t += "?") : o += "&", o += s + "=" + encodeURIComponent(n[s]);}return /^http(s)?\:\/\//.test(t += o) ? t : "" + e + t;} }),B = n(function (t, n) {var r = e && e.__extends || function () {var _e2 = function e(t, n) {return (_e2 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (e, t) {e.__proto__ = t;} || function (e, t) {for (var n in t) {t.hasOwnProperty(n) && (e[n] = t[n]);}})(t, n);};return function (t, n) {function r() {this.constructor = t;}_e2(t, n), t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r());};}(),o = e && e.__assign || function () {return (o = Object.assign || function (e) {for (var t, n = 1, r = arguments.length; n < r; n++) {for (var o in t = arguments[n]) {Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);}}return e;}).apply(this, arguments);},s = e && e.__awaiter || function (e, t, n, r) {return new (n || (n = Promise))(function (o, s) {function i(e) {try {c(r.next(e));} catch (e) {s(e);}}function a(e) {try {c(r.throw(e));} catch (e) {s(e);}}function c(e) {var t;e.done ? o(e.value) : (t = e.value, t instanceof n ? t : new n(function (e) {e(t);})).then(i, a);}c((r = r.apply(e, t || [])).next());});},i = e && e.__generator || function (e, t) {var n,r,o,s,i = { label: 0, sent: function sent() {if (1 & o[0]) throw o[1];return o[1];}, trys: [], ops: [] };return s = { next: a(0), throw: a(1), return: a(2) }, "function" == typeof Symbol && (s[Symbol.iterator] = function () {return this;}), s;function a(s) {return function (a) {return function (s) {if (n) throw new TypeError("Generator is already executing.");for (; i;) {try {if (n = 1, r && (o = 2 & s[0] ? r.return : s[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, s[1])).done) return o;switch (r = 0, o && (s = [2 & s[0], o.value]), s[0]) {case 0:case 1:o = s;break;case 4:return i.label++, { value: s[1], done: !1 };case 5:i.label++, r = s[1], s = [0];continue;case 7:s = i.ops.pop(), i.trys.pop();continue;default:if (!(o = (o = i.trys).length > 0 && o[o.length - 1]) && (6 === s[0] || 2 === s[0])) {i = 0;continue;}if (3 === s[0] && (!o || s[1] > o[0] && s[1] < o[3])) {i.label = s[1];break;}if (6 === s[0] && i.label < o[1]) {i.label = o[1], o = s;break;}if (o && i.label < o[2]) {i.label = o[2], i.ops.push(s);break;}o[2] && i.ops.pop(), i.trys.pop();continue;}s = t.call(e, i);} catch (e) {s = [6, e], r = 0;} finally {n = o = 0;}}if (5 & s[0]) throw s[1];return { value: s[0] ? s[1] : void 0, done: !0 };}([s, a]);};}};Object.defineProperty(n, "__esModule", { value: !0 });var a = function (e) {function t() {return null !== e && e.apply(this, arguments) || this;}return r(t, e), t.prototype.get = function (e) {return this._request(o(o({}, e), { method: "get" }));}, t.prototype.post = function (e) {return this._request(o(o({}, e), { method: "post" }));}, t.prototype.upload = function (e) {var t = e.data,n = e.file,r = e.name,s = new FormData();for (var i in t) {s.append(i, t[i]);}return s.append("key", r), s.append("file", n), this._request(o(o({}, e), { data: s, method: "post" }));}, t.prototype.download = function (e) {return s(this, void 0, void 0, function () {var t, n;return i(this, function (r) {return t = decodeURIComponent(new URL(e.url).pathname.split("/").pop() || ""), (n = document.createElement("a")).href = e.url, n.setAttribute("download", t), n.setAttribute("target", "_blank"), document.body.appendChild(n), n.click(), [2, new Promise(function (t) {t({ statusCode: 200, tempFilePath: e.url });})];});});}, t.prototype._request = function (e) {var t = String(e.method).toLowerCase() || "get";return new Promise(function (n) {var r = e.url,o = e.headers,s = void 0 === o ? {} : o,i = e.data,a = e.responseType,c = I.formatUrl(K.protocol, r, "get" === t ? i : {}),u = new XMLHttpRequest();for (var l in u.open(t, c), a && (u.responseType = a), s) {u.setRequestHeader(l, s[l]);}u.onreadystatechange = function () {if (4 === u.readyState) {var e = { statusCode: u.status };try {e.data = JSON.parse(u.responseText);} catch (e) {}n(e);}}, u.send("post" === t && I.isFormData(i) ? i : JSON.stringify(i || {}));});}, t;}(V.AbstractSDKRequest);n.WebRequest = a, n.genAdapter = function () {return { root: window, reqClass: a, wsClass: WebSocket, localStorage: localStorage, sessionStorage: sessionStorage };};});t(B);B.WebRequest, B.genAdapter;var W = n(function (t, n) {var r = e && e.__importStar || function (e) {if (e && e.__esModule) return e;var t = {};if (null != e) for (var n in e) {Object.hasOwnProperty.call(e, n) && (t[n] = e[n]);}return t.default = e, t;};Object.defineProperty(n, "__esModule", { value: !0 });var o,s = r(B);!function (e) {e.WEB = "web", e.WX_MP = "wx_mp";}(o = n.RUNTIME || (n.RUNTIME = {})), n.useAdapters = function (e) {for (var t = 0, n = I.isArray(e) ? e : [e]; t < n.length; t++) {var r = n[t],o = r.isMatch,s = r.genAdapter,i = r.runtime;if (o()) return { adapter: s(), runtime: i };}}, n.useDefaultAdapter = function () {return { adapter: s.genAdapter(), runtime: o.WEB };}, n.Adapter = { adapter: null, runtime: void 0 };});t(W);W.RUNTIME, W.useAdapters, W.useDefaultAdapter, W.Adapter;var z = n(function (t, n) {var r = e && e.__extends || function () {var _e3 = function e(t, n) {return (_e3 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (e, t) {e.__proto__ = t;} || function (e, t) {for (var n in t) {t.hasOwnProperty(n) && (e[n] = t[n]);}})(t, n);};return function (t, n) {function r() {this.constructor = t;}_e3(t, n), t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r());};}();Object.defineProperty(n, "__esModule", { value: !0 });var o = function () {function e(e) {switch (W.Adapter.adapter.primaryStorage || e) {case "local":this.storageClass = W.Adapter.adapter.localStorage || new s();break;case "none":this.storageClass = new s();break;default:this.storageClass = W.Adapter.adapter.sessionStorage || new s();}}return e.prototype.setStore = function (e, t, n) {try {if (!this.storageClass) return;} catch (e) {return;}var r,o = {};o.version = n || "localCachev1", o.content = t, r = JSON.stringify(o);try {this.storageClass.setItem(e, r);} catch (e) {return;}}, e.prototype.getStore = function (e, t) {try {if (!this.storageClass) return;} catch (e) {return "";}t = t || "localCachev1";var n = this.storageClass.getItem(e);return n && n.indexOf(t) >= 0 ? JSON.parse(n).content : "";}, e.prototype.removeStore = function (e) {this.storageClass.removeItem(e);}, e;}();n.Cache = o;var s = function (e) {function t() {var t = e.call(this) || this;return W.Adapter.adapter.root.tcbObject || (W.Adapter.adapter.root.tcbObject = {}), t;}return r(t, e), t.prototype.setItem = function (e, t) {W.Adapter.adapter.root.tcbObject[e] = t;}, t.prototype.getItem = function (e) {return W.Adapter.adapter.root.tcbObject[e];}, t.prototype.removeItem = function (e) {delete W.Adapter.adapter.root.tcbObject[e];}, t.prototype.clear = function () {delete W.Adapter.adapter.root.tcbObject;}, t;}(V.AbstractStorage);});t(z);z.Cache;var J = n(function (t, n) {var r = e && e.__extends || function () {var _e4 = function e(t, n) {return (_e4 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (e, t) {e.__proto__ = t;} || function (e, t) {for (var n in t) {t.hasOwnProperty(n) && (e[n] = t[n]);}})(t, n);};return function (t, n) {function r() {this.constructor = t;}_e4(t, n), t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r());};}(),o = e && e.__spreadArrays || function () {for (var e = 0, t = 0, n = arguments.length; t < n; t++) {e += arguments[t].length;}var r = Array(e),o = 0;for (t = 0; t < n; t++) {for (var s = arguments[t], i = 0, a = s.length; i < a; i++, o++) {r[o] = s[i];}}return r;};Object.defineProperty(n, "__esModule", { value: !0 });var s = function s(e, t) {this.data = t || null, this.name = e;};n.IEvent = s;var i = function (e) {function t(t, n) {var r = e.call(this, "error", { error: t, data: n }) || this;return r.error = t, r;}return r(t, e), t;}(s);n.IErrorEvent = i;var a = function () {function e() {this._listeners = {};}return e.prototype.on = function (e, t) {return function (e, t, n) {n[e] = n[e] || [], n[e].push(t);}(e, t, this._listeners), this;}, e.prototype.off = function (e, t) {return function (e, t, n) {if (n && n[e]) {var r = n[e].indexOf(t);-1 !== r && n[e].splice(r, 1);}}(e, t, this._listeners), this;}, e.prototype.fire = function (e, t) {if (I.isInstanceOf(e, i)) return console.error(e.error), this;var n = I.isString(e) ? new s(e, t || {}) : e,r = n.name;if (this._listens(r)) {n.target = this;for (var a = 0, c = this._listeners[r] ? o(this._listeners[r]) : []; a < c.length; a++) {c[a].call(this, n);}}return this;}, e.prototype._listens = function (e) {return this._listeners[e] && this._listeners[e].length > 0;}, e;}();n.IEventEmitter = a;var c = new a();n.addEventListener = function (e, t) {c.on(e, t);}, n.activateEvent = function (e, t) {void 0 === t && (t = {}), c.fire(e, t);}, n.removeEventListener = function (e, t) {c.off(e, t);}, n.EVENTS = { LOGIN_STATE_CHANGED: "loginStateChanged", LOGIN_STATE_EXPIRE: "loginStateExpire", LOGIN_TYPE_CHANGE: "loginTypeChanged", ANONYMOUS_CONVERTED: "anonymousConverted", REFRESH_ACCESS_TOKEN: "refreshAccessToken" };});t(J);J.IEvent, J.IErrorEvent, J.IEventEmitter, J.addEventListener, J.activateEvent, J.removeEventListener, J.EVENTS;var X = n(function (t, n) {var r = e && e.__assign || function () {return (r = Object.assign || function (e) {for (var t, n = 1, r = arguments.length; n < r; n++) {for (var o in t = arguments[n]) {Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);}}return e;}).apply(this, arguments);},o = e && e.__awaiter || function (e, t, n, r) {return new (n || (n = Promise))(function (o, s) {function i(e) {try {c(r.next(e));} catch (e) {s(e);}}function a(e) {try {c(r.throw(e));} catch (e) {s(e);}}function c(e) {var t;e.done ? o(e.value) : (t = e.value, t instanceof n ? t : new n(function (e) {e(t);})).then(i, a);}c((r = r.apply(e, t || [])).next());});},s = e && e.__generator || function (e, t) {var n,r,o,s,i = { label: 0, sent: function sent() {if (1 & o[0]) throw o[1];return o[1];}, trys: [], ops: [] };return s = { next: a(0), throw: a(1), return: a(2) }, "function" == typeof Symbol && (s[Symbol.iterator] = function () {return this;}), s;function a(s) {return function (a) {return function (s) {if (n) throw new TypeError("Generator is already executing.");for (; i;) {try {if (n = 1, r && (o = 2 & s[0] ? r.return : s[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, s[1])).done) return o;switch (r = 0, o && (s = [2 & s[0], o.value]), s[0]) {case 0:case 1:o = s;break;case 4:return i.label++, { value: s[1], done: !1 };case 5:i.label++, r = s[1], s = [0];continue;case 7:s = i.ops.pop(), i.trys.pop();continue;default:if (!(o = (o = i.trys).length > 0 && o[o.length - 1]) && (6 === s[0] || 2 === s[0])) {i = 0;continue;}if (3 === s[0] && (!o || s[1] > o[0] && s[1] < o[3])) {i.label = s[1];break;}if (6 === s[0] && i.label < o[1]) {i.label = o[1], o = s;break;}if (o && i.label < o[2]) {i.label = o[2], i.ops.push(s);break;}o[2] && i.ops.pop(), i.trys.pop();continue;}s = t.call(e, i);} catch (e) {s = [6, e], r = 0;} finally {n = o = 0;}}if (5 & s[0]) throw s[1];return { value: s[0] ? s[1] : void 0, done: !0 };}([s, a]);};}};Object.defineProperty(n, "__esModule", { value: !0 });var i = ["auth.getJwt", "auth.logout", "auth.signInWithTicket", "auth.signInAnonymously"],a = { "X-SDK-Version": K.SDK_VERISON };function c(e, t, n) {var o = e[t];e[t] = function (t) {var s = {},i = {};n.forEach(function (n) {var r = n.call(e, t),o = r.data,a = r.headers;Object.assign(s, o), Object.assign(i, a);});var a = t.data;return a && function () {if (I.isFormData(a)) for (var e in s) {a.append(e, s[e]);} else t.data = r(r({}, a), s);}(), t.headers = r(r({}, t.headers || {}), i), o.call(e, t);};}function u() {var e = I.genSeqId();return { data: { seqId: e }, headers: r(r({}, a), { "x-seqid": e }) };}var l = function () {function e(e) {void 0 === e && (e = {}), this.config = e, this.cache = new z.Cache(e.persistence), this.accessTokenKey = K.ACCESS_TOKEN + "_" + e.env, this.accessTokenExpireKey = K.ACCESS_TOKEN_Expire + "_" + e.env, this.refreshTokenKey = K.REFRESH_TOKEN + "_" + e.env, this.anonymousUuidKey = K.ANONYMOUS_UUID + "_" + e.env, this.loginTypeKey = K.LOGIN_TYPE_KEY + "_" + e.env, this._reqClass = new W.Adapter.adapter.reqClass(), c(this._reqClass, "post", [u]), c(this._reqClass, "upload", [u]), c(this._reqClass, "download", [u]);}return e.prototype.post = function (e) {return o(this, void 0, void 0, function () {return s(this, function (t) {switch (t.label) {case 0:return [4, this._reqClass.post(e)];case 1:return [2, t.sent()];}});});}, e.prototype.upload = function (e) {return o(this, void 0, void 0, function () {return s(this, function (t) {switch (t.label) {case 0:return [4, this._reqClass.upload(e)];case 1:return [2, t.sent()];}});});}, e.prototype.download = function (e) {return o(this, void 0, void 0, function () {return s(this, function (t) {switch (t.label) {case 0:return [4, this._reqClass.download(e)];case 1:return [2, t.sent()];}});});}, e.prototype.refreshAccessToken = function () {return o(this, void 0, void 0, function () {var e, t, n;return s(this, function (r) {switch (r.label) {case 0:this._refreshAccessTokenPromise || (this._refreshAccessTokenPromise = this._refreshAccessToken()), r.label = 1;case 1:return r.trys.push([1, 3,, 4]), [4, this._refreshAccessTokenPromise];case 2:return e = r.sent(), [3, 4];case 3:return n = r.sent(), t = n, [3, 4];case 4:if (this._refreshAccessTokenPromise = null, this._shouldRefreshAccessTokenHook = null, t) throw t;return [2, e];}});});}, e.prototype._refreshAccessToken = function () {return o(this, void 0, void 0, function () {var e, t, n, r;return s(this, function (o) {switch (o.label) {case 0:if (this.cache.removeStore(this.accessTokenKey), this.cache.removeStore(this.accessTokenExpireKey), !(e = this.cache.getStore(this.refreshTokenKey))) throw new Error("[tcb-js-sdk] 未登录CloudBase");return t = { refresh_token: e }, this.cache.getStore(this.loginTypeKey) === $.LOGINTYPE.ANONYMOUS && (t.anonymous_uuid = this.cache.getStore(this.anonymousUuidKey)), [4, this.request("auth.getJwt", t)];case 1:if ((n = o.sent()).data.code) throw "SIGN_PARAM_INVALID" !== (r = n.data.code) && "REFRESH_TOKEN_EXPIRED" !== r && "INVALID_REFRESH_TOKEN" !== r || (J.activateEvent(J.EVENTS.LOGIN_STATE_EXPIRE), this.cache.removeStore(this.refreshTokenKey)), new Error("[tcb-js-sdk] 刷新access token失败：" + n.data.code);return n.data.access_token ? (J.activateEvent(J.EVENTS.REFRESH_ACCESS_TOKEN), this.cache.setStore(this.accessTokenKey, n.data.access_token), this.cache.setStore(this.accessTokenExpireKey, n.data.access_token_expire + Date.now()), J.activateEvent(J.EVENTS.LOGIN_TYPE_CHANGE, n.data.login_type), [2, { accessToken: n.data.access_token, accessTokenExpire: n.data.access_token_expire }]) : (n.data.refresh_token && (this.cache.removeStore(this.refreshTokenKey), this.cache.setStore(this.refreshTokenKey, n.data.refresh_token), this._refreshAccessToken()), [2]);}});});}, e.prototype.getAccessToken = function () {return o(this, void 0, void 0, function () {var e, t, n, r;return s(this, function (o) {switch (o.label) {case 0:return e = this.cache.getStore(this.accessTokenKey), t = this.cache.getStore(this.accessTokenExpireKey), n = !0, (r = this._shouldRefreshAccessTokenHook) ? [4, this._shouldRefreshAccessTokenHook(e, t)] : [3, 2];case 1:r = !o.sent(), o.label = 2;case 2:return r && (n = !1), (!e || !t || t < Date.now()) && n ? [2, this.refreshAccessToken()] : [2, { accessToken: e, accessTokenExpire: t }];}});});}, e.prototype.request = function (e, t, n) {return o(this, void 0, void 0, function () {var o, a, c, u, l, f, p, h, d, y, v, g;return s(this, function (s) {switch (s.label) {case 0:return o = "application/x-www-form-urlencoded", a = r({ action: e, env: this.config.env, dataVersion: "2019-08-16" }, t), -1 !== i.indexOf(e) ? [3, 2] : (c = a, [4, this.getAccessToken()]);case 1:c.access_token = s.sent().accessToken, s.label = 2;case 2:if ("storage.uploadFile" === e) {for (l in u = new FormData()) {u.hasOwnProperty(l) && void 0 !== u[l] && u.append(l, a[l]);}o = "multipart/form-data";} else o = "application/json;charset=UTF-8", u = a;return f = { headers: { "content-type": o } }, n && n.onUploadProgress && (f.onUploadProgress = n.onUploadProgress), p = t.parse, h = t.query, d = t.search, y = { env: this.config.env }, p && (y.parse = !0), h && (y = r(r({}, h), y)), v = I.formatUrl(K.protocol, K.BASE_URL, y), d && (v += d), [4, this.post(r({ url: v, data: u }, f))];case 3:if (g = s.sent(), 200 !== Number(g.status) && 200 !== Number(g.statusCode) || !g.data) throw new Error("network request error");return [2, g];}});});}, e.prototype.send = function (e, t) {return void 0 === t && (t = {}), o(this, void 0, void 0, function () {var n, r, o;return s(this, function (s) {switch (s.label) {case 0:return n = setTimeout(function () {console.warn("Database operation is longer than 3s. Please check query performance and your network environment.");}, 3e3), [4, this.request(e, t, { onUploadProgress: t.onUploadProgress })];case 1:return r = s.sent(), clearTimeout(n), "ACCESS_TOKEN_EXPIRED" !== r.data.code || -1 !== i.indexOf(e) ? [3, 4] : [4, this.refreshAccessToken()];case 2:return s.sent(), [4, this.request(e, t, { onUploadProgress: t.onUploadProgress })];case 3:if ((o = s.sent()).data.code) throw new Error("[" + o.data.code + "] " + o.data.message);return [2, o.data];case 4:if (r.data.code) throw new Error("[" + r.data.code + "] " + r.data.message);return [2, r.data];}});});}, e;}();n.Request = l;});t(X);X.Request;var $ = n(function (t, n) {var r,o = e && e.__awaiter || function (e, t, n, r) {return new (n || (n = Promise))(function (o, s) {function i(e) {try {c(r.next(e));} catch (e) {s(e);}}function a(e) {try {c(r.throw(e));} catch (e) {s(e);}}function c(e) {var t;e.done ? o(e.value) : (t = e.value, t instanceof n ? t : new n(function (e) {e(t);})).then(i, a);}c((r = r.apply(e, t || [])).next());});},s = e && e.__generator || function (e, t) {var n,r,o,s,i = { label: 0, sent: function sent() {if (1 & o[0]) throw o[1];return o[1];}, trys: [], ops: [] };return s = { next: a(0), throw: a(1), return: a(2) }, "function" == typeof Symbol && (s[Symbol.iterator] = function () {return this;}), s;function a(s) {return function (a) {return function (s) {if (n) throw new TypeError("Generator is already executing.");for (; i;) {try {if (n = 1, r && (o = 2 & s[0] ? r.return : s[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, s[1])).done) return o;switch (r = 0, o && (s = [2 & s[0], o.value]), s[0]) {case 0:case 1:o = s;break;case 4:return i.label++, { value: s[1], done: !1 };case 5:i.label++, r = s[1], s = [0];continue;case 7:s = i.ops.pop(), i.trys.pop();continue;default:if (!(o = (o = i.trys).length > 0 && o[o.length - 1]) && (6 === s[0] || 2 === s[0])) {i = 0;continue;}if (3 === s[0] && (!o || s[1] > o[0] && s[1] < o[3])) {i.label = s[1];break;}if (6 === s[0] && i.label < o[1]) {i.label = o[1], o = s;break;}if (o && i.label < o[2]) {i.label = o[2], i.ops.push(s);break;}o[2] && i.ops.pop(), i.trys.pop();continue;}s = t.call(e, i);} catch (e) {s = [6, e], r = 0;} finally {n = o = 0;}}if (5 & s[0]) throw s[1];return { value: s[0] ? s[1] : void 0, done: !0 };}([s, a]);};}};Object.defineProperty(n, "__esModule", { value: !0 }), function (e) {e.ANONYMOUS = "ANONYMOUS", e.WECHAT = "WECHAT", e.CUSTOM = "CUSTOM", e.NULL = "NULL";}(r = n.LOGINTYPE || (n.LOGINTYPE = {}));var i = function () {function e(e) {this._loginType = r.NULL, this.config = e, this.onLoginTypeChanged = this.onLoginTypeChanged.bind(this), J.addEventListener(J.EVENTS.LOGIN_TYPE_CHANGE, this.onLoginTypeChanged);}return e.prototype.init = function () {this.httpRequest = new X.Request(this.config), this.cache = new z.Cache(this.config.persistence), this.accessTokenKey = K.ACCESS_TOKEN + "_" + this.config.env, this.accessTokenExpireKey = K.ACCESS_TOKEN_Expire + "_" + this.config.env, this.refreshTokenKey = K.REFRESH_TOKEN + "_" + this.config.env, this.loginTypeKey = K.LOGIN_TYPE_KEY + "_" + this.config.env;}, e.prototype.onLoginTypeChanged = function (e) {this._loginType = e.data, this.cache.setStore(this.loginTypeKey, this._loginType);}, Object.defineProperty(e.prototype, "loginType", { get: function get() {return this._loginType;}, enumerable: !0, configurable: !0 }), e.prototype.setRefreshToken = function (e) {this.cache.removeStore(this.accessTokenKey), this.cache.removeStore(this.accessTokenExpireKey), this.cache.setStore(this.refreshTokenKey, e);}, e.prototype.getRefreshTokenByWXCode = function (e, t, n) {return o(this, void 0, void 0, function () {var r;return s(this, function (o) {return "auth.getJwt", r = W.Adapter.runtime === W.RUNTIME.WX_MP ? "1" : "0", [2, this.httpRequest.send("auth.getJwt", { appid: e, loginType: t, code: n, hybridMiniapp: r }).then(function (e) {if (e.code) throw new Error("[tcb-js-sdk] 微信登录失败: " + e.code);if (e.refresh_token) return { refreshToken: e.refresh_token, accessToken: e.access_token, accessTokenExpire: e.access_token_expire };throw new Error("[tcb-js-sdk] getJwt未返回refreshToken");})];});});}, e;}();n.default = i;});t($);$.LOGINTYPE;var Q = n(function (t, n) {var r = e && e.__extends || function () {var _e5 = function e(t, n) {return (_e5 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (e, t) {e.__proto__ = t;} || function (e, t) {for (var n in t) {t.hasOwnProperty(n) && (e[n] = t[n]);}})(t, n);};return function (t, n) {function r() {this.constructor = t;}_e5(t, n), t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r());};}(),o = e && e.__awaiter || function (e, t, n, r) {return new (n || (n = Promise))(function (o, s) {function i(e) {try {c(r.next(e));} catch (e) {s(e);}}function a(e) {try {c(r.throw(e));} catch (e) {s(e);}}function c(e) {var t;e.done ? o(e.value) : (t = e.value, t instanceof n ? t : new n(function (e) {e(t);})).then(i, a);}c((r = r.apply(e, t || [])).next());});},s = e && e.__generator || function (e, t) {var n,r,o,s,i = { label: 0, sent: function sent() {if (1 & o[0]) throw o[1];return o[1];}, trys: [], ops: [] };return s = { next: a(0), throw: a(1), return: a(2) }, "function" == typeof Symbol && (s[Symbol.iterator] = function () {return this;}), s;function a(s) {return function (a) {return function (s) {if (n) throw new TypeError("Generator is already executing.");for (; i;) {try {if (n = 1, r && (o = 2 & s[0] ? r.return : s[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, s[1])).done) return o;switch (r = 0, o && (s = [2 & s[0], o.value]), s[0]) {case 0:case 1:o = s;break;case 4:return i.label++, { value: s[1], done: !1 };case 5:i.label++, r = s[1], s = [0];continue;case 7:s = i.ops.pop(), i.trys.pop();continue;default:if (!(o = (o = i.trys).length > 0 && o[o.length - 1]) && (6 === s[0] || 2 === s[0])) {i = 0;continue;}if (3 === s[0] && (!o || s[1] > o[0] && s[1] < o[3])) {i.label = s[1];break;}if (6 === s[0] && i.label < o[1]) {i.label = o[1], o = s;break;}if (o && i.label < o[2]) {i.label = o[2], i.ops.push(s);break;}o[2] && i.ops.pop(), i.trys.pop();continue;}s = t.call(e, i);} catch (e) {s = [6, e], r = 0;} finally {n = o = 0;}}if (5 & s[0]) throw s[1];return { value: s[0] ? s[1] : void 0, done: !0 };}([s, a]);};}},i = e && e.__importStar || function (e) {if (e && e.__esModule) return e;var t = {};if (null != e) for (var n in e) {Object.hasOwnProperty.call(e, n) && (t[n] = e[n]);}return t.default = e, t;};Object.defineProperty(n, "__esModule", { value: !0 });var a,c,u = i(I),l = i($);!function (e) {e.snsapi_base = "snsapi_base", e.snsapi_userinfo = "snsapi_userinfo", e.snsapi_login = "snsapi_login";}(a || (a = {})), function (e) {e.redirect = "redirect", e.prompt = "prompt";}(c || (c = {}));var f = {},p = function (e) {function t(t, n, r, o, s) {var i = e.call(this, t) || this;return i.config = t, i.appid = n, i.scope = W.Adapter.runtime === W.RUNTIME.WX_MP ? "snsapi_base" : r, i.state = s || "weixin", i.loginMode = o || "redirect", i;}return r(t, e), t.prototype.signIn = function () {return o(this, void 0, void 0, function () {var e, t, n;return s(this, function (r) {switch (r.label) {case 0:f[this.config.env] || (f[this.config.env] = this._signIn()), r.label = 1;case 1:return r.trys.push([1, 3,, 4]), [4, f[this.config.env]];case 2:return e = r.sent(), [3, 4];case 3:return n = r.sent(), t = n, [3, 4];case 4:if (f[this.config.env] = null, t) throw t;return [2, e];}});});}, t.prototype._signIn = function () {return o(this, void 0, void 0, function () {var e, t, n, r, o, i;return s(this, function (s) {switch (s.label) {case 0:if (e = this.cache.getStore(this.accessTokenKey), t = this.cache.getStore(this.accessTokenExpireKey), e) {if (t && t > Date.now()) return [2, { credential: { accessToken: e, refreshToken: this.cache.getStore(this.refreshTokenKey) } }];this.cache.removeStore(this.accessTokenKey), this.cache.removeStore(this.accessTokenExpireKey);}if (!1 === Object.values(a).includes(a[this.scope])) throw new Error("错误的scope类型");return W.Adapter.runtime !== W.RUNTIME.WX_MP ? [3, 2] : [4, u.getMiniAppCode()];case 1:return n = s.sent(), [3, 4];case 2:return [4, u.getWeixinCode()];case 3:if (!(n = s.sent())) return [2, this.redirect()];s.label = 4;case 4:return r = function (e) {switch (e) {case a.snsapi_login:return "WECHAT-OPEN";default:return "WECHAT-PUBLIC";}}(this.scope), [4, this.getRefreshTokenByWXCode(this.appid, r, n)];case 5:return o = s.sent(), i = o.refreshToken, this.cache.setStore(this.refreshTokenKey, i), o.accessToken && this.cache.setStore(this.accessTokenKey, o.accessToken), o.accessTokenExpire && this.cache.setStore(this.accessTokenExpireKey, o.accessTokenExpire + Date.now()), J.activateEvent(J.EVENTS.LOGIN_STATE_CHANGED), J.activateEvent(J.EVENTS.LOGIN_TYPE_CHANGE, l.LOGINTYPE.WECHAT), [2, { credential: { refreshToken: i } }];}});});}, t.prototype.redirect = function () {var e = u.removeParam("code", location.href);e = u.removeParam("state", e), e = encodeURIComponent(e);var t = "//open.weixin.qq.com/connect/oauth2/authorize";"snsapi_login" === this.scope && (t = "//open.weixin.qq.com/connect/qrconnect"), "redirect" === c[this.loginMode] && (location.href = t + "?appid=" + this.appid + "&redirect_uri=" + e + "&response_type=code&scope=" + this.scope + "&state=" + this.state + "#wechat_redirect");}, t;}(l.default);n.default = p;});t(Q);var Z = n(function (t, n) {var r = e && e.__extends || function () {var _e6 = function e(t, n) {return (_e6 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (e, t) {e.__proto__ = t;} || function (e, t) {for (var n in t) {t.hasOwnProperty(n) && (e[n] = t[n]);}})(t, n);};return function (t, n) {function r() {this.constructor = t;}_e6(t, n), t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r());};}(),o = e && e.__assign || function () {return (o = Object.assign || function (e) {for (var t, n = 1, r = arguments.length; n < r; n++) {for (var o in t = arguments[n]) {Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);}}return e;}).apply(this, arguments);},s = e && e.__awaiter || function (e, t, n, r) {return new (n || (n = Promise))(function (o, s) {function i(e) {try {c(r.next(e));} catch (e) {s(e);}}function a(e) {try {c(r.throw(e));} catch (e) {s(e);}}function c(e) {var t;e.done ? o(e.value) : (t = e.value, t instanceof n ? t : new n(function (e) {e(t);})).then(i, a);}c((r = r.apply(e, t || [])).next());});},i = e && e.__generator || function (e, t) {var n,r,o,s,i = { label: 0, sent: function sent() {if (1 & o[0]) throw o[1];return o[1];}, trys: [], ops: [] };return s = { next: a(0), throw: a(1), return: a(2) }, "function" == typeof Symbol && (s[Symbol.iterator] = function () {return this;}), s;function a(s) {return function (a) {return function (s) {if (n) throw new TypeError("Generator is already executing.");for (; i;) {try {if (n = 1, r && (o = 2 & s[0] ? r.return : s[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, s[1])).done) return o;switch (r = 0, o && (s = [2 & s[0], o.value]), s[0]) {case 0:case 1:o = s;break;case 4:return i.label++, { value: s[1], done: !1 };case 5:i.label++, r = s[1], s = [0];continue;case 7:s = i.ops.pop(), i.trys.pop();continue;default:if (!(o = (o = i.trys).length > 0 && o[o.length - 1]) && (6 === s[0] || 2 === s[0])) {i = 0;continue;}if (3 === s[0] && (!o || s[1] > o[0] && s[1] < o[3])) {i.label = s[1];break;}if (6 === s[0] && i.label < o[1]) {i.label = o[1], o = s;break;}if (o && i.label < o[2]) {i.label = o[2], i.ops.push(s);break;}o[2] && i.ops.pop(), i.trys.pop();continue;}s = t.call(e, i);} catch (e) {s = [6, e], r = 0;} finally {n = o = 0;}}if (5 & s[0]) throw s[1];return { value: s[0] ? s[1] : void 0, done: !0 };}([s, a]);};}},a = e && e.__importStar || function (e) {if (e && e.__esModule) return e;var t = {};if (null != e) for (var n in e) {Object.hasOwnProperty.call(e, n) && (t[n] = e[n]);}return t.default = e, t;};Object.defineProperty(n, "__esModule", { value: !0 });var c = a($),u = function (e) {function t(t) {var n = e.call(this, o(o({}, t), { persistence: "local" })) || this;return n._anonymousUuidKey = K.ANONYMOUS_UUID + "_" + n.config.env, n._loginTypeKey = K.LOGIN_TYPE_KEY + "_" + n.config.env, n;}return r(t, e), t.prototype.init = function () {e.prototype.init.call(this);}, t.prototype.signIn = function () {return s(this, void 0, void 0, function () {var e, t, n;return i(this, function (r) {switch (r.label) {case 0:return e = this.cache.getStore(this._anonymousUuidKey) || void 0, t = this.cache.getStore(this.refreshTokenKey) || void 0, [4, this.httpRequest.send("auth.signInAnonymously", { anonymous_uuid: e, refresh_token: t })];case 1:return (n = r.sent()).uuid && n.refresh_token ? (this._setAnonymousUUID(n.uuid), this.setRefreshToken(n.refresh_token), [4, this.httpRequest.refreshAccessToken()]) : [3, 3];case 2:return r.sent(), J.activateEvent(J.EVENTS.LOGIN_STATE_CHANGED), J.activateEvent(J.EVENTS.LOGIN_TYPE_CHANGE, c.LOGINTYPE.ANONYMOUS), [2, { credential: { refreshToken: n.refresh_token } }];case 3:throw new Error("[tcb-js-sdk] 匿名登录失败");}});});}, t.prototype.linkAndRetrieveDataWithTicket = function (e) {return s(this, void 0, void 0, function () {var t, n, r;return i(this, function (o) {switch (o.label) {case 0:return t = this.cache.getStore(this._anonymousUuidKey), n = this.cache.getStore(this.refreshTokenKey), [4, this.httpRequest.send("auth.linkAndRetrieveDataWithTicket", { anonymous_uuid: t, refresh_token: n, ticket: e })];case 1:return (r = o.sent()).refresh_token ? (this._clearAnonymousUUID(), this.setRefreshToken(r.refresh_token), [4, this.httpRequest.refreshAccessToken()]) : [3, 3];case 2:return o.sent(), J.activateEvent(J.EVENTS.ANONYMOUS_CONVERTED, { refresh_token: r.refresh_token }), J.activateEvent(J.EVENTS.LOGIN_TYPE_CHANGE, c.LOGINTYPE.CUSTOM), [2, { credential: { refreshToken: r.refresh_token } }];case 3:throw new Error("[tcb-js-sdk] 匿名转化失败");}});});}, t.prototype.getAllStore = function () {var e = {};return e[this.refreshTokenKey] = this.cache.getStore(this.refreshTokenKey) || "", e[this._loginTypeKey] = this.cache.getStore(this._loginTypeKey) || "", e[this.accessTokenKey] = this.cache.getStore(this.accessTokenKey) || "", e[this.accessTokenExpireKey] = this.cache.getStore(this.accessTokenExpireKey) || "", e;}, t.prototype._setAnonymousUUID = function (e) {this.cache.removeStore(this._anonymousUuidKey), this.cache.setStore(this._anonymousUuidKey, e), this.cache.setStore(this._loginTypeKey, c.LOGINTYPE.ANONYMOUS);}, t.prototype._clearAnonymousUUID = function () {this.cache.removeStore(this._anonymousUuidKey);}, t;}(c.default);n.AnonymousAuthProvider = u;});t(Z);Z.AnonymousAuthProvider;var ee = n(function (t, n) {var r = e && e.__extends || function () {var _e7 = function e(t, n) {return (_e7 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (e, t) {e.__proto__ = t;} || function (e, t) {for (var n in t) {t.hasOwnProperty(n) && (e[n] = t[n]);}})(t, n);};return function (t, n) {function r() {this.constructor = t;}_e7(t, n), t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r());};}(),o = e && e.__assign || function () {return (o = Object.assign || function (e) {for (var t, n = 1, r = arguments.length; n < r; n++) {for (var o in t = arguments[n]) {Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);}}return e;}).apply(this, arguments);},s = e && e.__awaiter || function (e, t, n, r) {return new (n || (n = Promise))(function (o, s) {function i(e) {try {c(r.next(e));} catch (e) {s(e);}}function a(e) {try {c(r.throw(e));} catch (e) {s(e);}}function c(e) {var t;e.done ? o(e.value) : (t = e.value, t instanceof n ? t : new n(function (e) {e(t);})).then(i, a);}c((r = r.apply(e, t || [])).next());});},i = e && e.__generator || function (e, t) {var n,r,o,s,i = { label: 0, sent: function sent() {if (1 & o[0]) throw o[1];return o[1];}, trys: [], ops: [] };return s = { next: a(0), throw: a(1), return: a(2) }, "function" == typeof Symbol && (s[Symbol.iterator] = function () {return this;}), s;function a(s) {return function (a) {return function (s) {if (n) throw new TypeError("Generator is already executing.");for (; i;) {try {if (n = 1, r && (o = 2 & s[0] ? r.return : s[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, s[1])).done) return o;switch (r = 0, o && (s = [2 & s[0], o.value]), s[0]) {case 0:case 1:o = s;break;case 4:return i.label++, { value: s[1], done: !1 };case 5:i.label++, r = s[1], s = [0];continue;case 7:s = i.ops.pop(), i.trys.pop();continue;default:if (!(o = (o = i.trys).length > 0 && o[o.length - 1]) && (6 === s[0] || 2 === s[0])) {i = 0;continue;}if (3 === s[0] && (!o || s[1] > o[0] && s[1] < o[3])) {i.label = s[1];break;}if (6 === s[0] && i.label < o[1]) {i.label = o[1], o = s;break;}if (o && i.label < o[2]) {i.label = o[2], i.ops.push(s);break;}o[2] && i.ops.pop(), i.trys.pop();continue;}s = t.call(e, i);} catch (e) {s = [6, e], r = 0;} finally {n = o = 0;}}if (5 & s[0]) throw s[1];return { value: s[0] ? s[1] : void 0, done: !0 };}([s, a]);};}},a = e && e.__importDefault || function (e) {return e && e.__esModule ? e : { default: e };},c = e && e.__importStar || function (e) {if (e && e.__esModule) return e;var t = {};if (null != e) for (var n in e) {Object.hasOwnProperty.call(e, n) && (t[n] = e[n]);}return t.default = e, t;};Object.defineProperty(n, "__esModule", { value: !0 });var u = a(Q),l = c($),f = function (e) {function t(t) {var n = e.call(this, t) || this;return n.config = t, n;}return r(t, e), t.prototype.init = function () {e.prototype.init.call(this), this.customAuthProvider = new l.default(this.config), this.customAuthProvider.init();}, t.prototype.weixinAuthProvider = function (e) {var t = e.appid,n = e.scope,r = e.loginMode,o = e.state,s = new u.default(this.config, t, n, r, o);return s.init(), s;}, t.prototype.signInAnonymously = function () {return s(this, void 0, void 0, function () {var e = this;return i(this, function (t) {switch (t.label) {case 0:return this._anonymousAuthProvider || (this._anonymousAuthProvider = new Z.AnonymousAuthProvider(this.config), this._anonymousAuthProvider.init()), J.addEventListener(J.EVENTS.LOGIN_TYPE_CHANGE, function (t) {if (t && t.data === l.LOGINTYPE.ANONYMOUS) {var n = e._anonymousAuthProvider.getAllStore();for (var r in n) {n[r] && e.httpRequest.cache.setStore(r, n[r]);}}}), [4, this._anonymousAuthProvider.signIn()];case 1:return [2, t.sent()];}});});}, t.prototype.linkAndRetrieveDataWithTicket = function (e) {return s(this, void 0, void 0, function () {var t = this;return i(this, function (n) {switch (n.label) {case 0:return this._anonymousAuthProvider || (this._anonymousAuthProvider = new Z.AnonymousAuthProvider(this.config), this._anonymousAuthProvider.init()), J.addEventListener(J.EVENTS.ANONYMOUS_CONVERTED, function (e) {var n = e.data.refresh_token;n && t.httpRequest.cache.setStore(t.refreshTokenKey, n);}), [4, this._anonymousAuthProvider.linkAndRetrieveDataWithTicket(e)];case 1:return [2, n.sent()];}});});}, t.prototype.signOut = function () {return s(this, void 0, void 0, function () {var e, t, n, r, o, s, a;return i(this, function (i) {switch (i.label) {case 0:if (this.loginType === l.LOGINTYPE.ANONYMOUS) throw new Error("[tcb-js-sdk] 匿名用户不支持登出操作");return e = this.httpRequest, t = e.cache, n = e.refreshTokenKey, r = e.accessTokenKey, o = e.accessTokenExpireKey, "auth.logout", (s = t.getStore(n)) ? [4, this.httpRequest.send("auth.logout", { refresh_token: s })] : [2];case 1:return a = i.sent(), t.removeStore(n), t.removeStore(r), t.removeStore(o), J.activateEvent(J.EVENTS.LOGIN_STATE_CHANGED), J.activateEvent(J.EVENTS.LOGIN_TYPE_CHANGE, l.LOGINTYPE.NULL), [2, a];}});});}, t.prototype.getAccessToken = function () {return s(this, void 0, void 0, function () {var e;return i(this, function (t) {switch (t.label) {case 0:return e = {}, [4, this.httpRequest.getAccessToken()];case 1:return [2, (e.accessToken = t.sent().accessToken, e.env = this.config.env, e)];}});});}, t.prototype.onLoginStateExpire = function (e) {J.addEventListener("loginStateExpire", e);}, t.prototype.getLoginState = function () {return s(this, void 0, void 0, function () {var e, t, n, r, o;return i(this, function (s) {switch (s.label) {case 0:if (e = this.httpRequest, t = e.cache, n = e.refreshTokenKey, r = e.accessTokenKey, !(o = t.getStore(n))) return [3, 5];s.label = 1;case 1:return s.trys.push([1, 3,, 4]), [4, this.httpRequest.refreshAccessToken()];case 2:return s.sent(), [3, 4];case 3:return s.sent(), [2, null];case 4:return [2, { isAnonymous: this.loginType === l.LOGINTYPE.ANONYMOUS, credential: { refreshToken: o, accessToken: t.getStore(r) } }];case 5:return [2, null];}});});}, t.prototype.signInWithTicket = function (e) {return s(this, void 0, void 0, function () {var t, n, r, o;return i(this, function (s) {switch (s.label) {case 0:if ("string" != typeof e) throw new Error("ticket must be a string");return t = this.httpRequest, n = t.cache, r = t.refreshTokenKey, [4, this.httpRequest.send("auth.signInWithTicket", { ticket: e, refresh_token: n.getStore(r) || "" })];case 1:return (o = s.sent()).refresh_token ? (this.customAuthProvider.setRefreshToken(o.refresh_token), [4, this.httpRequest.refreshAccessToken()]) : [3, 3];case 2:return s.sent(), J.activateEvent(J.EVENTS.LOGIN_STATE_CHANGED), J.activateEvent(J.EVENTS.LOGIN_TYPE_CHANGE, l.LOGINTYPE.CUSTOM), [2, { credential: { refreshToken: o.refresh_token } }];case 3:throw new Error("[tcb-js-sdk] 自定义登录失败");}});});}, t.prototype.shouldRefreshAccessToken = function (e) {this.httpRequest._shouldRefreshAccessTokenHook = e.bind(this);}, t.prototype.getUserInfo = function () {return this.httpRequest.send("auth.getUserInfo", {}).then(function (e) {return e.code ? e : o(o({}, e.data), { requestId: e.seqId });});}, t;}(l.default);n.default = f;});t(ee);var te = n(function (t, n) {var r = e && e.__awaiter || function (e, t, n, r) {return new (n || (n = Promise))(function (o, s) {function i(e) {try {c(r.next(e));} catch (e) {s(e);}}function a(e) {try {c(r.throw(e));} catch (e) {s(e);}}function c(e) {var t;e.done ? o(e.value) : (t = e.value, t instanceof n ? t : new n(function (e) {e(t);})).then(i, a);}c((r = r.apply(e, t || [])).next());});},o = e && e.__generator || function (e, t) {var n,r,o,s,i = { label: 0, sent: function sent() {if (1 & o[0]) throw o[1];return o[1];}, trys: [], ops: [] };return s = { next: a(0), throw: a(1), return: a(2) }, "function" == typeof Symbol && (s[Symbol.iterator] = function () {return this;}), s;function a(s) {return function (a) {return function (s) {if (n) throw new TypeError("Generator is already executing.");for (; i;) {try {if (n = 1, r && (o = 2 & s[0] ? r.return : s[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, s[1])).done) return o;switch (r = 0, o && (s = [2 & s[0], o.value]), s[0]) {case 0:case 1:o = s;break;case 4:return i.label++, { value: s[1], done: !1 };case 5:i.label++, r = s[1], s = [0];continue;case 7:s = i.ops.pop(), i.trys.pop();continue;default:if (!(o = (o = i.trys).length > 0 && o[o.length - 1]) && (6 === s[0] || 2 === s[0])) {i = 0;continue;}if (3 === s[0] && (!o || s[1] > o[0] && s[1] < o[3])) {i.label = s[1];break;}if (6 === s[0] && i.label < o[1]) {i.label = o[1], o = s;break;}if (o && i.label < o[2]) {i.label = o[2], i.ops.push(s);break;}o[2] && i.ops.pop(), i.trys.pop();continue;}s = t.call(e, i);} catch (e) {s = [6, e], r = 0;} finally {n = o = 0;}}if (5 & s[0]) throw s[1];return { value: s[0] ? s[1] : void 0, done: !0 };}([s, a]);};}};Object.defineProperty(n, "__esModule", { value: !0 }), n.uploadFile = function (e, t) {t = t || I.createPromiseCallback();var n = new X.Request(this.config),r = e.cloudPath,o = e.filePath,s = e.onUploadProgress;return n.send("storage.getUploadMetadata", { path: r }).then(function (e) {var i = e.data,a = i.url,c = i.authorization,u = i.token,l = i.fileId,f = i.cosFileId,p = e.requestId,h = { key: r, signature: c, "x-cos-meta-fileid": f, success_action_status: "201", "x-cos-security-token": u };n.upload({ url: a, data: h, file: o, name: r, onUploadProgress: s }).then(function (e) {201 === e.statusCode ? t(null, { fileID: l, requestId: p }) : t(new Error("STORAGE_REQUEST_FAIL: " + e.data));}).catch(function (e) {t(e);});}).catch(function (e) {t(e);}), t.promise;}, n.deleteFile = function (e, t) {var n = e.fileList;if (t = t || I.createPromiseCallback(), !n || !Array.isArray(n)) return { code: "INVALID_PARAM", message: "fileList必须是非空的数组" };for (var r = 0, o = n; r < o.length; r++) {var s = o[r];if (!s || "string" != typeof s) return { code: "INVALID_PARAM", message: "fileList的元素必须是非空的字符串" };}var i = { fileid_list: n };return new X.Request(this.config).send("storage.batchDeleteFile", i).then(function (e) {e.code ? t(null, e) : t(null, { fileList: e.data.delete_list, requestId: e.requestId });}).catch(function (e) {t(e);}), t.promise;}, n.getTempFileURL = function (e, t) {var n = e.fileList;t = t || I.createPromiseCallback(), n && Array.isArray(n) || t(null, { code: "INVALID_PARAM", message: "fileList必须是非空的数组" });for (var r = [], o = 0, s = n; o < s.length; o++) {var i = s[o];"object" == typeof i ? (i.hasOwnProperty("fileID") && i.hasOwnProperty("maxAge") || t(null, { code: "INVALID_PARAM", message: "fileList的元素必须是包含fileID和maxAge的对象" }), r.push({ fileid: i.fileID, max_age: i.maxAge })) : "string" == typeof i ? r.push({ fileid: i }) : t(null, { code: "INVALID_PARAM", message: "fileList的元素必须是字符串" });}var a = { file_list: r };return new X.Request(this.config).send("storage.batchGetDownloadUrl", a).then(function (e) {e.code ? t(null, e) : t(null, { fileList: e.data.download_list, requestId: e.requestId });}).catch(function (e) {t(e);}), t.promise;}, n.downloadFile = function (e, t) {var s = e.fileID;return r(this, void 0, void 0, function () {var e, r, i, a, c;return o(this, function (o) {switch (o.label) {case 0:return [4, n.getTempFileURL.call(this, { fileList: [{ fileID: s, maxAge: 600 }] })];case 1:return e = o.sent(), "SUCCESS" !== (r = e.fileList[0]).code ? [2, t ? t(r) : new Promise(function (e) {e(r);})] : (i = r.download_url, i = encodeURI(i), a = new X.Request(this.config), t ? [4, a.download({ url: i })] : [3, 3]);case 2:return c = o.sent(), t(c), [3, 4];case 3:return [2, a.download({ url: i })];case 4:return [2];}});});};});t(te);te.uploadFile, te.deleteFile, te.getTempFileURL, te.downloadFile;var ne = n(function (e, t) {Object.defineProperty(t, "__esModule", { value: !0 }), t.callFunction = function (e, t) {var n,r = e.name,o = e.data,s = e.query,i = e.parse,a = e.search,c = t || I.createPromiseCallback();try {n = o ? JSON.stringify(o) : "";} catch (e) {return Promise.reject(e);}if (!r) return Promise.reject(new Error("函数名不能为空"));var u = { query: s, parse: i, search: a, function_name: r, request_data: n };return new X.Request(this.config).send("functions.invokeFunction", u).then(function (e) {if (e.code) c(null, e);else {var t = e.data.response_data;if (i) c(null, { result: t, requestId: e.requestId });else try {t = JSON.parse(e.data.response_data), c(null, { result: t, requestId: e.requestId });} catch (e) {c(new Error("response data must be json"));}}return c.promise;}).catch(function (e) {c(e);}), c.promise;};});t(ne);ne.callFunction;var re = t(n(function (t) {var n = e && e.__assign || function () {return (n = Object.assign || function (e) {for (var t, n = 1, r = arguments.length; n < r; n++) {for (var o in t = arguments[n]) {Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);}}return e;}).apply(this, arguments);},r = e && e.__importDefault || function (e) {return e && e.__esModule ? e : { default: e };},o = e && e.__importStar || function (e) {if (e && e.__esModule) return e;var t = {};if (null != e) for (var n in e) {Object.hasOwnProperty.call(e, n) && (t[n] = e[n]);}return t.default = e, t;},s = r(P),i = r(ee),a = o(te),c = o(ne),u = { timeout: 15e3 },l = new (function () {function e(e) {var t = this;this.config = e || this.config, this.authObj = void 0, J.addEventListener(J.EVENTS.LOGIN_TYPE_CHANGE, function (e) {e.data === $.LOGINTYPE.ANONYMOUS && (t.config.persistence = "local");});}return e.prototype.init = function (t) {return this.config = n(n({}, u), t), W.Adapter.adapter || this._useDefaultAdapter(), new e(this.config);}, e.prototype.auth = function (e) {var t = (void 0 === e ? {} : e).persistence;return this.authObj ? this.authObj : (this.config = n(n({}, this.config), { persistence: t || W.Adapter.adapter.primaryStorage || "session" }), this.authObj = new i.default(this.config), this.authObj.init(), this.authObj);}, e.prototype.on = function (e, t) {return J.addEventListener.apply(this, [e, t]);}, e.prototype.off = function (e, t) {return J.removeEventListener.apply(this, [e, t]);}, e.prototype.callFunction = function (e, t) {return c.callFunction.apply(this, [e, t]);}, e.prototype.deleteFile = function (e, t) {return a.deleteFile.apply(this, [e, t]);}, e.prototype.getTempFileURL = function (e, t) {return a.getTempFileURL.apply(this, [e, t]);}, e.prototype.downloadFile = function (e, t) {return a.downloadFile.apply(this, [e, t]);}, e.prototype.uploadFile = function (e, t) {return a.uploadFile.apply(this, [e, t]);}, e.prototype.useAdapters = function (e) {var t = W.useAdapters(e) || {},n = t.adapter,r = t.runtime;n && (W.Adapter.adapter = n), r && (W.Adapter.runtime = r);}, e.prototype._useDefaultAdapter = function () {var e = W.useDefaultAdapter(),t = e.adapter,n = e.runtime;W.Adapter.adapter = t, W.Adapter.runtime = n;}, e;}())();l.useAdapters(s.default);try {window.tcb = l;} catch (e) {}t.exports = l;}));re.useAdapters(P);var oe = re,se = oe.init;var ie, ae;function ce(e) {ie || (ie = { PLATFORM: "mp-qq", OS: y, APPID: l.appid }, ae = { ak: l.appid, p: "android" === y ? "a" : "i", ut: g(), uuid: v() });var t = JSON.parse(JSON.stringify(e.data || {})),n = e.name,r = this.config.spaceId,o = { tencent: "t", aliyun: "a" }[this.config.provider],s = Object.assign({}, ae, { fn: n, sid: r, pvd: o });return Object.assign(t, { clientInfo: ie, uniCloudClientInfo: encodeURIComponent(JSON.stringify(s)) }), e.data = t, e;}function ue(e) {var t = ce.call(this, e),n = { tencent: "tcb", aliyun: "aliyun" }[this.config.provider],r = ae.ak,o = this.config.spaceId,i = JSON.stringify(t.data),a = t.name,c = JSON.stringify({ body: { provider: n, appid: r, spaceId: o, functionName: a, run_params: i }, header: { token: "913967a0-dd3a-11ea-bd50-e32b139f468b" } });return new Promise(function (e, t) {uni.request({ url: h, method: "POST", data: { param: c }, complete: function complete(r) {r || (r = {});var o = r.data && r.data.body;if (!o) return void t(new s({ message: "[FUNCTIONS_EXECUTE_FAIL] Request Fail: [".concat(a, "]") }));if ("tcb" === n && o.log && "" !== o.log.trim() && console.log(o.log), 0 !== o.invokeResult && "0" !== o.invokeResult) return void t(new s({ message: o.errorMsg }));var i = o.requestId;var c = {};try {c = JSON.parse(o.result);} catch (e) {c = o.result;}e({ requestId: i, result: c });} });});}oe.init = function (e) {e.env = e.spaceId;var t = se.call(this, e);t.config.provider = "tencent", t.config.spaceId = e.spaceId;var n = t.auth;t.auth = function (e) {var t = n.call(this, e);return ["linkAndRetrieveDataWithTicket", "signInAnonymously", "signOut", "getAccessToken", "getLoginState", "signInWithTicket", "getUserInfo"].forEach(function (e) {t[e] = _(t[e]).bind(t);}), t;};if (["uploadFile", "deleteFile", "getTempFileURL", "downloadFile"].forEach(function (e) {t[e] = _(t[e]).bind(t);}), !1 !== e.autoSignIn) {var _e8 = t.auth();_e8.getLoginState().then(function (t) {t || _e8.signInAnonymously();});}return  true && console.log("使用腾讯云作为服务商时，调用云函数的同时会获取云函数运行日志，云函数响应会比发行慢，云函数实际响应时间应以发行为准"), t;};var le = { init: function init(e) {var t = {},n = !(!1 === e.debugFunction || "development" !== "development" || !"913967a0-dd3a-11ea-bd50-e32b139f468b");switch (e.provider) {case "tencent":t = oe.init(Object.assign(e, { useDebugFunction: n }));break;case "aliyun":n = n && ( false || "app-plus" === "mp-qq"), t = m.init(Object.assign(e, { useDebugFunction: n }));break;default:throw new Error("未提供正确的provider参数");}return function (e) {var t = e.callFunction;e.config.useDebugFunction && "tencent" === e.config.provider && (t = ue), e.callFunction = function (e) {var _this6 = this;var n = ce.call(this, e);return new Promise(function (r, o) {t.call(_this6, n).then(function (e) {r(e);}).catch(function (t) {t && t.message && (t.message = "[".concat(e.name, "]: ").concat(t.message)), o(t);});});};var n = e.callFunction;e.callFunction = function (e) {return _(n).call(this, e);};}(t), t.init = this.init, t;} };var fe = le;try {var _e9 = {};1 === [{"provider":"aliyun","spaceName":"unic266589","spaceId":"eb0a0073-ca0a-40e6-aef4-12d67ee79baa","clientSecret":"8U8Px1oTgP1HrHsVMI5Gag==","endpoint":"https://api.bspapp.com"}].length && (_e9 = [{"provider":"aliyun","spaceName":"unic266589","spaceId":"eb0a0073-ca0a-40e6-aef4-12d67ee79baa","clientSecret":"8U8Px1oTgP1HrHsVMI5Gag==","endpoint":"https://api.bspapp.com"}][0]), fe = le.init(_e9);} catch (e) {["auth", "callFunction", "uploadFile", "deleteFile", "getTempFileURL", "downloadFile"].forEach(function (e) {fe[e] = function () {var e = [{"provider":"aliyun","spaceName":"unic266589","spaceId":"eb0a0073-ca0a-40e6-aef4-12d67ee79baa","clientSecret":"8U8Px1oTgP1HrHsVMI5Gag==","endpoint":"https://api.bspapp.com"}].length > 0 ? "应用有多个服务空间，请通过uniCloud.init方法指定要使用的服务空间" : "应用未关联服务空间，请在cloudfunctions目录右键关联服务空间";return console.error(e), Promise.reject(new s({ code: "SYS_ERR", message: e }));};});}var pe = fe;var _default = pe;exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../webpack/buildin/global.js */ 3), __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-qq/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 26:
/*!***************************************************!*\
  !*** D:/nuiapp/remake/pages.json?{"type":"stat"} ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _default = { "appid": "__UNI__C266589" };exports.default = _default;

/***/ }),

/***/ 3:
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ 4:
/*!***********************************!*\
  !*** D:/nuiapp/remake/pages.json ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vRTovSEJ1aWxkZXJYLjIuNS4xLjIwMjAwMTAzLmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3VuaS1tcC1xcS9kaXN0L2luZGV4LmpzIiwidW5pLWFwcDovLy9FOi9IQnVpbGRlclguMi41LjEuMjAyMDAxMDMuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qcyIsInVuaS1hcHA6Ly8vRTovSEJ1aWxkZXJYLjIuNS4xLjIwMjAwMTAzLmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy9tcC12dWUvZGlzdC9tcC5ydW50aW1lLmVzbS5qcyIsInVuaS1hcHA6Ly8vRTovSEJ1aWxkZXJYLjIuNS4xLjIwMjAwMTAzLmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy91bmktY2xvdWQvZGlzdC9pbmRleC5qcyIsInVuaS1hcHA6Ly8vcGFnZXMuanNvbiIsInVuaS1hcHA6Ly8vRTovSEJ1aWxkZXJYLjIuNS4xLjIwMjAwMTAzLmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvd2VicGFjay9idWlsZGluL2dsb2JhbC5qcyJdLCJuYW1lcyI6WyJfdG9TdHJpbmciLCJPYmplY3QiLCJwcm90b3R5cGUiLCJ0b1N0cmluZyIsImhhc093blByb3BlcnR5IiwiaXNGbiIsImZuIiwiaXNTdHIiLCJzdHIiLCJpc1BsYWluT2JqZWN0Iiwib2JqIiwiY2FsbCIsImhhc093biIsImtleSIsIm5vb3AiLCJjYWNoZWQiLCJjYWNoZSIsImNyZWF0ZSIsImNhY2hlZEZuIiwiaGl0IiwiY2FtZWxpemVSRSIsImNhbWVsaXplIiwicmVwbGFjZSIsIl8iLCJjIiwidG9VcHBlckNhc2UiLCJIT09LUyIsImdsb2JhbEludGVyY2VwdG9ycyIsInNjb3BlZEludGVyY2VwdG9ycyIsIm1lcmdlSG9vayIsInBhcmVudFZhbCIsImNoaWxkVmFsIiwicmVzIiwiY29uY2F0IiwiQXJyYXkiLCJpc0FycmF5IiwiZGVkdXBlSG9va3MiLCJob29rcyIsImkiLCJsZW5ndGgiLCJpbmRleE9mIiwicHVzaCIsInJlbW92ZUhvb2siLCJob29rIiwiaW5kZXgiLCJzcGxpY2UiLCJtZXJnZUludGVyY2VwdG9ySG9vayIsImludGVyY2VwdG9yIiwib3B0aW9uIiwia2V5cyIsImZvckVhY2giLCJyZW1vdmVJbnRlcmNlcHRvckhvb2siLCJhZGRJbnRlcmNlcHRvciIsIm1ldGhvZCIsInJlbW92ZUludGVyY2VwdG9yIiwid3JhcHBlckhvb2siLCJkYXRhIiwiaXNQcm9taXNlIiwidGhlbiIsInF1ZXVlIiwicHJvbWlzZSIsIlByb21pc2UiLCJyZXNvbHZlIiwiY2FsbGJhY2siLCJ3cmFwcGVyT3B0aW9ucyIsIm9wdGlvbnMiLCJuYW1lIiwib2xkQ2FsbGJhY2siLCJjYWxsYmFja0ludGVyY2VwdG9yIiwid3JhcHBlclJldHVyblZhbHVlIiwicmV0dXJuVmFsdWUiLCJyZXR1cm5WYWx1ZUhvb2tzIiwiZ2V0QXBpSW50ZXJjZXB0b3JIb29rcyIsInNsaWNlIiwic2NvcGVkSW50ZXJjZXB0b3IiLCJpbnZva2VBcGkiLCJhcGkiLCJwYXJhbXMiLCJpbnZva2UiLCJwcm9taXNlSW50ZXJjZXB0b3IiLCJjYXRjaCIsIlNZTkNfQVBJX1JFIiwiQ09OVEVYVF9BUElfUkUiLCJDT05URVhUX0FQSV9SRV9FWEMiLCJBU1lOQ19BUEkiLCJDQUxMQkFDS19BUElfUkUiLCJpc0NvbnRleHRBcGkiLCJ0ZXN0IiwiaXNTeW5jQXBpIiwiaXNDYWxsYmFja0FwaSIsImhhbmRsZVByb21pc2UiLCJlcnIiLCJzaG91bGRQcm9taXNlIiwiZmluYWxseSIsImNvbnN0cnVjdG9yIiwidmFsdWUiLCJyZWFzb24iLCJwcm9taXNpZnkiLCJwcm9taXNlQXBpIiwic3VjY2VzcyIsImZhaWwiLCJjb21wbGV0ZSIsInJlamVjdCIsImFzc2lnbiIsIkVQUyIsIkJBU0VfREVWSUNFX1dJRFRIIiwiaXNJT1MiLCJkZXZpY2VXaWR0aCIsImRldmljZURQUiIsImNoZWNrRGV2aWNlV2lkdGgiLCJ3eCIsImdldFN5c3RlbUluZm9TeW5jIiwicGxhdGZvcm0iLCJwaXhlbFJhdGlvIiwid2luZG93V2lkdGgiLCJ1cHgycHgiLCJudW1iZXIiLCJuZXdEZXZpY2VXaWR0aCIsIk51bWJlciIsInJlc3VsdCIsIk1hdGgiLCJmbG9vciIsImludGVyY2VwdG9ycyIsImJhc2VBcGkiLCJmcmVlemUiLCJfX3Byb3RvX18iLCJwcmV2aWV3SW1hZ2UiLCJhcmdzIiwiZnJvbUFyZ3MiLCJjdXJyZW50SW5kZXgiLCJwYXJzZUludCIsImN1cnJlbnQiLCJpc05hTiIsInVybHMiLCJsZW4iLCJmaWx0ZXIiLCJpdGVtIiwiaW5kaWNhdG9yIiwibG9vcCIsInByb3RvY29scyIsInRvZG9zIiwiY2FuSVVzZXMiLCJDQUxMQkFDS1MiLCJwcm9jZXNzQ2FsbGJhY2siLCJtZXRob2ROYW1lIiwicHJvY2Vzc1JldHVyblZhbHVlIiwicHJvY2Vzc0FyZ3MiLCJhcmdzT3B0aW9uIiwia2VlcEZyb21BcmdzIiwidG9BcmdzIiwia2V5T3B0aW9uIiwiY29uc29sZSIsIndhcm4iLCJrZWVwUmV0dXJuVmFsdWUiLCJ3cmFwcGVyIiwicHJvdG9jb2wiLCJlcnJvciIsImFyZzEiLCJhcmcyIiwiYXBwbHkiLCJ0b2RvQXBpcyIsIlRPRE9TIiwiY3JlYXRlVG9kb0FwaSIsInRvZG9BcGkiLCJlcnJNc2ciLCJwcm92aWRlcnMiLCJvYXV0aCIsInNoYXJlIiwicGF5bWVudCIsImdldFByb3ZpZGVyIiwic2VydmljZSIsInByb3ZpZGVyIiwiZXh0cmFBcGkiLCJnZXRFbWl0dGVyIiwiZ2V0VW5pRW1pdHRlciIsIkVtaXR0ZXIiLCJWdWUiLCJjdHgiLCIkb24iLCJhcmd1bWVudHMiLCIkb2ZmIiwiJG9uY2UiLCIkZW1pdCIsImV2ZW50QXBpIiwiTVBQYWdlIiwiUGFnZSIsIk1QQ29tcG9uZW50IiwiQ29tcG9uZW50IiwiY3VzdG9taXplUkUiLCJjdXN0b21pemUiLCJpbml0VHJpZ2dlckV2ZW50IiwibXBJbnN0YW5jZSIsIm9sZFRyaWdnZXJFdmVudCIsInRyaWdnZXJFdmVudCIsImV2ZW50IiwiaW5pdEhvb2siLCJvbGRIb29rIiwiUEFHRV9FVkVOVF9IT09LUyIsImluaXRNb2NrcyIsInZtIiwibW9ja3MiLCIkbXAiLCJtcFR5cGUiLCJtb2NrIiwiaGFzSG9vayIsInZ1ZU9wdGlvbnMiLCJkZWZhdWx0IiwiZXh0ZW5kT3B0aW9ucyIsInN1cGVyIiwibWl4aW5zIiwiZmluZCIsIm1peGluIiwiaW5pdEhvb2tzIiwibXBPcHRpb25zIiwiJHZtIiwiX19jYWxsX2hvb2siLCJpbml0VnVlQ29tcG9uZW50IiwiVnVlQ29tcG9uZW50IiwiZXh0ZW5kIiwiaW5pdFNsb3RzIiwidnVlU2xvdHMiLCIkc2xvdHMiLCJzbG90TmFtZSIsIiRzY29wZWRTbG90cyIsImluaXRWdWVJZHMiLCJ2dWVJZHMiLCJzcGxpdCIsIl8kdnVlSWQiLCJfJHZ1ZVBpZCIsImluaXREYXRhIiwiY29udGV4dCIsIm1ldGhvZHMiLCJlIiwicHJvY2VzcyIsIlZVRV9BUFBfREVCVUciLCJKU09OIiwicGFyc2UiLCJzdHJpbmdpZnkiLCJfX2xpZmVjeWNsZV9ob29rc19fIiwiUFJPUF9UWVBFUyIsIlN0cmluZyIsIkJvb2xlYW4iLCJjcmVhdGVPYnNlcnZlciIsIm9ic2VydmVyIiwibmV3VmFsIiwib2xkVmFsIiwiaW5pdEJlaGF2aW9ycyIsImluaXRCZWhhdmlvciIsInZ1ZUJlaGF2aW9ycyIsImJlaGF2aW9ycyIsInZ1ZUV4dGVuZHMiLCJleHRlbmRzIiwidnVlTWl4aW5zIiwidnVlUHJvcHMiLCJwcm9wcyIsImJlaGF2aW9yIiwidHlwZSIsIkRhdGUiLCJwcm9wZXJ0aWVzIiwiaW5pdFByb3BlcnRpZXMiLCJ2dWVNaXhpbiIsInBhcnNlUHJvcFR5cGUiLCJkZWZhdWx0VmFsdWUiLCJmaWxlIiwiaXNCZWhhdmlvciIsInZ1ZUlkIiwic2V0RGF0YSIsIm9wdHMiLCJ3cmFwcGVyJDEiLCJtcCIsInN0b3BQcm9wYWdhdGlvbiIsInByZXZlbnREZWZhdWx0IiwidGFyZ2V0IiwiZGV0YWlsIiwibWFya2VySWQiLCJnZXRFeHRyYVZhbHVlIiwiZGF0YVBhdGhzQXJyYXkiLCJkYXRhUGF0aEFycmF5IiwiZGF0YVBhdGgiLCJwcm9wUGF0aCIsInZhbHVlUGF0aCIsInZGb3IiLCJfX2dldF92YWx1ZSIsImlzSW50ZWdlciIsInZGb3JJdGVtIiwidkZvcktleSIsInByb2Nlc3NFdmVudEV4dHJhIiwiZXh0cmEiLCJleHRyYU9iaiIsImdldE9iakJ5QXJyYXkiLCJhcnIiLCJlbGVtZW50IiwicHJvY2Vzc0V2ZW50QXJncyIsImlzQ3VzdG9tIiwiaXNDdXN0b21NUEV2ZW50IiwiY3VycmVudFRhcmdldCIsImRhdGFzZXQiLCJjb21UeXBlIiwiX19hcmdzX18iLCJyZXQiLCJhcmciLCJPTkNFIiwiQ1VTVE9NIiwiaXNNYXRjaEV2ZW50VHlwZSIsImV2ZW50VHlwZSIsIm9wdFR5cGUiLCJoYW5kbGVFdmVudCIsImV2ZW50T3B0cyIsImV2ZW50T3B0IiwiZXZlbnRzQXJyYXkiLCJjaGFyQXQiLCJpc09uY2UiLCJldmVudEFycmF5IiwiaGFuZGxlckN0eCIsIiRvcHRpb25zIiwiZ2VuZXJpYyIsIiRwYXJlbnQiLCJoYW5kbGVyIiwiRXJyb3IiLCJvbmNlIiwicGFyc2VCYXNlQXBwIiwiaW5pdFJlZnMiLCJzdG9yZSIsIiRzdG9yZSIsIm1wSG9zdCIsImJlZm9yZUNyZWF0ZSIsIiRzY29wZSIsImFwcE9wdGlvbnMiLCJvbkxhdW5jaCIsImNhbklVc2UiLCJhcHAiLCJnbG9iYWxEYXRhIiwiX2lzTW91bnRlZCIsImZpbmRWbUJ5VnVlSWQiLCJ2dWVQaWQiLCIkY2hpbGRyZW4iLCJjaGlsZFZtIiwicGFyZW50Vm0iLCJCZWhhdmlvciIsImlzUGFnZSIsInJvdXRlIiwiaW5pdFJlbGF0aW9uIiwiZGVmaW5lUHJvcGVydHkiLCJnZXQiLCIkcmVmcyIsImNvbXBvbmVudHMiLCJzZWxlY3RBbGxDb21wb25lbnRzIiwiY29tcG9uZW50IiwicmVmIiwiZm9yQ29tcG9uZW50cyIsImhhbmRsZUxpbmsiLCJwYXJlbnQiLCJwYXJzZUFwcCIsInBhcnNlQXBwJDEiLCJjcmVhdGVBcHAiLCJBcHAiLCJwYXJzZUJhc2VDb21wb25lbnQiLCJ2dWVDb21wb25lbnRPcHRpb25zIiwibXVsdGlwbGVTbG90cyIsImFkZEdsb2JhbENsYXNzIiwiY29tcG9uZW50T3B0aW9ucyIsIl9fZmlsZSIsImxpZmV0aW1lcyIsImF0dGFjaGVkIiwicHJvcHNEYXRhIiwiJG1vdW50IiwicmVhZHkiLCJkZXRhY2hlZCIsIiRkZXN0cm95IiwicGFnZUxpZmV0aW1lcyIsInNob3ciLCJoaWRlIiwicmVzaXplIiwic2l6ZSIsIl9fbCIsIl9fZSIsImV4dGVybmFsQ2xhc3NlcyIsInd4c0NhbGxNZXRob2RzIiwiY2FsbE1ldGhvZCIsInBhcnNlQ29tcG9uZW50IiwicGFyc2VDb21wb25lbnQkMSIsImhvb2tzJDEiLCJwYXJzZUJhc2VQYWdlIiwidnVlUGFnZU9wdGlvbnMiLCJwYWdlT3B0aW9ucyIsIm9uTG9hZCIsInF1ZXJ5IiwicGFyc2VQYWdlIiwicGFyc2VQYWdlJDEiLCJjcmVhdGVQYWdlIiwiY3JlYXRlQ29tcG9uZW50IiwiY2FuSVVzZUFwaSIsImFwaU5hbWUiLCJ1bmkiLCJQcm94eSIsInNldCIsInVuaSQxIiwiZ2xvYmFsVGhpcyIsIndpbmRvdyIsImdsb2JhbCIsInNlbGYiLCJ0IiwiX19lc01vZHVsZSIsIm4iLCJleHBvcnRzIiwiciIsIm8iLCJsaWIiLCJzIiwiQmFzZSIsIm1peEluIiwiaW5pdCIsIiRzdXBlciIsImNsb25lIiwiV29yZEFycmF5Iiwid29yZHMiLCJzaWdCeXRlcyIsImNsYW1wIiwiY2VpbCIsInJhbmRvbSIsImEiLCJlbmMiLCJIZXgiLCJqb2luIiwic3Vic3RyIiwidSIsIkxhdGluMSIsImZyb21DaGFyQ29kZSIsImNoYXJDb2RlQXQiLCJsIiwiVXRmOCIsImRlY29kZVVSSUNvbXBvbmVudCIsImVzY2FwZSIsInVuZXNjYXBlIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwiZiIsIkJ1ZmZlcmVkQmxvY2tBbGdvcml0aG0iLCJyZXNldCIsIl9kYXRhIiwiX25EYXRhQnl0ZXMiLCJfYXBwZW5kIiwiX3Byb2Nlc3MiLCJibG9ja1NpemUiLCJtYXgiLCJfbWluQnVmZmVyU2l6ZSIsIm1pbiIsIl9kb1Byb2Nlc3NCbG9jayIsInAiLCJIYXNoZXIiLCJjZmciLCJfZG9SZXNldCIsInVwZGF0ZSIsImZpbmFsaXplIiwiX2RvRmluYWxpemUiLCJfY3JlYXRlSGVscGVyIiwiX2NyZWF0ZUhtYWNIZWxwZXIiLCJITUFDIiwiYWxnbyIsImFicyIsInNpbiIsIk1ENSIsIl9oYXNoIiwiaCIsImQiLCJ5IiwidiIsImciLCJtIiwiYiIsInciLCJFIiwiVCIsIk8iLCJTIiwiayIsIkEiLCJQIiwiSSIsIk4iLCJIbWFjTUQ1IiwiX2hhc2hlciIsIl9vS2V5IiwiX2lLZXkiLCJtZXNzYWdlIiwiZGVmaW5lUHJvcGVydGllcyIsImNvZGUiLCJyZXF1ZXN0SWQiLCJzaWduIiwic29ydCIsIndyYXBwZWRSZXF1ZXN0IiwicmVxdWVzdCIsImhlYWRlciIsInN0YXR1c0NvZGUiLCJpbWFnZSIsImpwZyIsImpwZWciLCJwbmciLCJnaWYiLCJ3ZWJwIiwic3ZnIiwibXAzIiwibXA0Iiwib2dnIiwid2VibSIsInRvTG93ZXJDYXNlIiwiY29uZmlnIiwiZW5kcG9pbnQiLCJyZXF1ZXN0VXJsIiwiZW52VHlwZSIsImFjY2Vzc1Rva2VuS2V5Iiwic3BhY2VJZCIsImFjY2Vzc1Rva2VuIiwiaGFzQWNjZXNzVG9rZW4iLCJnZXRBY2Nlc3NUb2tlbiIsInJlYnVpbGRSZXF1ZXN0IiwidG9rZW4iLCJjbGllbnRTZWNyZXQiLCJ0aW1lc3RhbXAiLCJub3ciLCJ1cmwiLCJkYXRhVHlwZSIsInJlcXVlc3RBdXRoIiwic2V0dXBSZXF1ZXN0Iiwic2V0QWNjZXNzVG9rZW4iLCJmdW5jdGlvblRhcmdldCIsImZ1bmN0aW9uQXJncyIsInVzZURlYnVnRnVuY3Rpb24iLCJmdW5jdGlvbk5hbWUiLCJsb2ciLCJmb3JtRGF0YSIsImZpbGVOYW1lIiwiZmlsZVBhdGgiLCJmaWxlVHlwZSIsImNvbnRlbnRUeXBlIiwib25VcGxvYWRQcm9ncmVzcyIsInVwbG9hZEZpbGUiLCJvblByb2dyZXNzVXBkYXRlIiwibG9hZGVkIiwidG90YWxCeXRlc1NlbnQiLCJ0b3RhbCIsInRvdGFsQnl0ZXNFeHBlY3RlZFRvU2VuZCIsImNsb3VkUGF0aCIsInBvcCIsImdldEZpbGVJbmZvIiwiZ2V0T1NTVXBsb2FkT3B0aW9uc0Zyb21QYXRoIiwiZW52IiwiZmlsZW5hbWUiLCJpZCIsImNkbkRvbWFpbiIsIm9zc1BhdGgiLCJob3N0IiwiT1NTQWNjZXNzS2V5SWQiLCJhY2Nlc3NLZXlJZCIsIlNpZ25hdHVyZSIsInNpZ25hdHVyZSIsInBvbGljeSIsInN1Y2Nlc3NfYWN0aW9uX3N0YXR1cyIsInVwbG9hZEZpbGVUb09TUyIsInJlcG9ydE9TU1VwbG9hZCIsImZpbGVJRCIsImZpbGVMaXN0IiwicmVxdWlyZSIsInBsdXMiLCJydW50aW1lIiwiZ2V0RENsb3VkSWQiLCJzZXRTdG9yYWdlIiwiaDUiLCJzZXRUaW1lb3V0IiwiZ2V0U3RvcmFnZSIsImJpbmQiLCJhdXRob3JpemUiLCJsb2NhbCIsIm5vbmUiLCJzZXNzaW9uIiwic2V0UHJvdG90eXBlT2YiLCJwb3N0IiwiaGVhZGVycyIsInVwbG9hZCIsImRvd25sb2FkIiwiZG93bmxvYWRGaWxlIiwidGVtcEZpbGVQYXRoIiwic2V0SXRlbSIsInNldFN0b3JhZ2VTeW5jIiwiZ2V0SXRlbSIsImdldFN0b3JhZ2VTeW5jIiwicmVtb3ZlSXRlbSIsInJlbW92ZVN0b3JhZ2VTeW5jIiwiY2xlYXIiLCJjbGVhclN0b3JhZ2VTeW5jIiwiY29ubmVjdFNvY2tldCIsIm9ub3BlbiIsIm9uT3BlbiIsIm9ubWVzc2FnZSIsIm9uTWVzc2FnZSIsIm9uY2xvc2UiLCJvbkNsb3NlIiwib25lcnJvciIsIm9uRXJyb3IiLCJzZW5kIiwiY2xvc2UiLCJyZWFkeVN0YXRlIiwiQ09OTkVDVElORyIsIk9QRU4iLCJDTE9TSU5HIiwiQ0xPU0VEIiwiZ2VuQWRhcHRlciIsInJvb3QiLCJyZXFDbGFzcyIsIndzQ2xhc3MiLCJsb2NhbFN0b3JhZ2UiLCJwcmltYXJ5U3RvcmFnZSIsImlzTWF0Y2giLCJnZXRRdWVyeSIsImxvY2F0aW9uIiwic2VhcmNoIiwiUmVnRXhwIiwibWF0Y2giLCJnZXRIYXNoIiwiaGFzaCIsInJlbW92ZVBhcmFtIiwiY3JlYXRlUHJvbWlzZUNhbGxiYWNrIiwiZ2V0V2VpeGluQ29kZSIsImdldE1pbmlBcHBDb2RlIiwibG9naW4iLCJpc1N0cmluZyIsImlzVW5kZWZpbmVkIiwiaXNJbnN0YW5jZU9mIiwiaXNGb3JtRGF0YSIsImdlblNlcUlkIiwiZ2V0QXJnTmFtZXMiLCJmb3JtYXRVcmwiLCJDIiwiUiIsIngiLCJidWlsZCIsInRzYyIsImUyZSIsInN0YXJ0IiwiZXNsaW50IiwidGVzdF93ZWIiLCJxIiwiVSIsImoiLCJMIiwiYXhpb3MiLCJleHByZXNzIiwiaHVza3kiLCJqZXN0IiwicHVwcGV0ZWVyIiwidHlwZXNjcmlwdCIsIndlYnBhY2siLCJEIiwiRiIsInZlcnNpb24iLCJkZXNjcmlwdGlvbiIsIm1haW4iLCJ0eXBlcyIsInNjcmlwdHMiLCJyZXBvc2l0b3J5Iiwia2V5d29yZHMiLCJhdXRob3IiLCJsaWNlbnNlIiwiZGVwZW5kZW5jaWVzIiwiZGV2RGVwZW5kZW5jaWVzIiwiTSIsIksiLCJfX2ltcG9ydFN0YXIiLCJTREtfVkVSSVNPTiIsIkFDQ0VTU19UT0tFTiIsIkFDQ0VTU19UT0tFTl9FeHBpcmUiLCJSRUZSRVNIX1RPS0VOIiwiQU5PTllNT1VTX1VVSUQiLCJMT0dJTl9UWVBFX0tFWSIsIkJBU0VfVVJMIiwiRyIsIkgiLCJZIiwiViIsIlN0b3JhZ2VUeXBlIiwiQWJzdHJhY3RTREtSZXF1ZXN0IiwiQWJzdHJhY3RTdG9yYWdlIiwiQiIsIl9fZXh0ZW5kcyIsIl9fYXNzaWduIiwiX19hd2FpdGVyIiwibmV4dCIsInRocm93IiwiZG9uZSIsIl9fZ2VuZXJhdG9yIiwibGFiZWwiLCJzZW50IiwidHJ5cyIsIm9wcyIsInJldHVybiIsIlN5bWJvbCIsIml0ZXJhdG9yIiwiVHlwZUVycm9yIiwiX3JlcXVlc3QiLCJGb3JtRGF0YSIsImFwcGVuZCIsIlVSTCIsInBhdGhuYW1lIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiaHJlZiIsInNldEF0dHJpYnV0ZSIsImJvZHkiLCJhcHBlbmRDaGlsZCIsImNsaWNrIiwicmVzcG9uc2VUeXBlIiwiWE1MSHR0cFJlcXVlc3QiLCJvcGVuIiwic2V0UmVxdWVzdEhlYWRlciIsIm9ucmVhZHlzdGF0ZWNoYW5nZSIsInN0YXR1cyIsInJlc3BvbnNlVGV4dCIsIldlYlJlcXVlc3QiLCJXZWJTb2NrZXQiLCJzZXNzaW9uU3RvcmFnZSIsIlciLCJXRUIiLCJXWF9NUCIsIlJVTlRJTUUiLCJ1c2VBZGFwdGVycyIsImFkYXB0ZXIiLCJ1c2VEZWZhdWx0QWRhcHRlciIsIkFkYXB0ZXIiLCJ6Iiwic3RvcmFnZUNsYXNzIiwic2V0U3RvcmUiLCJjb250ZW50IiwiZ2V0U3RvcmUiLCJyZW1vdmVTdG9yZSIsIkNhY2hlIiwidGNiT2JqZWN0IiwiSiIsIl9fc3ByZWFkQXJyYXlzIiwiSUV2ZW50IiwiSUVycm9yRXZlbnQiLCJfbGlzdGVuZXJzIiwib24iLCJvZmYiLCJmaXJlIiwiX2xpc3RlbnMiLCJJRXZlbnRFbWl0dGVyIiwiYWRkRXZlbnRMaXN0ZW5lciIsImFjdGl2YXRlRXZlbnQiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiRVZFTlRTIiwiTE9HSU5fU1RBVEVfQ0hBTkdFRCIsIkxPR0lOX1NUQVRFX0VYUElSRSIsIkxPR0lOX1RZUEVfQ0hBTkdFIiwiQU5PTllNT1VTX0NPTlZFUlRFRCIsIlJFRlJFU0hfQUNDRVNTX1RPS0VOIiwiWCIsInNlcUlkIiwicGVyc2lzdGVuY2UiLCJhY2Nlc3NUb2tlbkV4cGlyZUtleSIsInJlZnJlc2hUb2tlbktleSIsImFub255bW91c1V1aWRLZXkiLCJsb2dpblR5cGVLZXkiLCJfcmVxQ2xhc3MiLCJyZWZyZXNoQWNjZXNzVG9rZW4iLCJfcmVmcmVzaEFjY2Vzc1Rva2VuUHJvbWlzZSIsIl9yZWZyZXNoQWNjZXNzVG9rZW4iLCJfc2hvdWxkUmVmcmVzaEFjY2Vzc1Rva2VuSG9vayIsInJlZnJlc2hfdG9rZW4iLCIkIiwiTE9HSU5UWVBFIiwiQU5PTllNT1VTIiwiYW5vbnltb3VzX3V1aWQiLCJhY2Nlc3NfdG9rZW4iLCJhY2Nlc3NfdG9rZW5fZXhwaXJlIiwibG9naW5fdHlwZSIsImFjY2Vzc1Rva2VuRXhwaXJlIiwiYWN0aW9uIiwiZGF0YVZlcnNpb24iLCJjbGVhclRpbWVvdXQiLCJSZXF1ZXN0IiwiV0VDSEFUIiwiTlVMTCIsIl9sb2dpblR5cGUiLCJvbkxvZ2luVHlwZUNoYW5nZWQiLCJodHRwUmVxdWVzdCIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJzZXRSZWZyZXNoVG9rZW4iLCJnZXRSZWZyZXNoVG9rZW5CeVdYQ29kZSIsImFwcGlkIiwibG9naW5UeXBlIiwiaHlicmlkTWluaWFwcCIsInJlZnJlc2hUb2tlbiIsIlEiLCJzbnNhcGlfYmFzZSIsInNuc2FwaV91c2VyaW5mbyIsInNuc2FwaV9sb2dpbiIsInJlZGlyZWN0IiwicHJvbXB0Iiwic2NvcGUiLCJzdGF0ZSIsImxvZ2luTW9kZSIsInNpZ25JbiIsIl9zaWduSW4iLCJjcmVkZW50aWFsIiwidmFsdWVzIiwiaW5jbHVkZXMiLCJaIiwiX2Fub255bW91c1V1aWRLZXkiLCJfbG9naW5UeXBlS2V5IiwidXVpZCIsIl9zZXRBbm9ueW1vdXNVVUlEIiwibGlua0FuZFJldHJpZXZlRGF0YVdpdGhUaWNrZXQiLCJ0aWNrZXQiLCJfY2xlYXJBbm9ueW1vdXNVVUlEIiwiZ2V0QWxsU3RvcmUiLCJBbm9ueW1vdXNBdXRoUHJvdmlkZXIiLCJlZSIsIl9faW1wb3J0RGVmYXVsdCIsImN1c3RvbUF1dGhQcm92aWRlciIsIndlaXhpbkF1dGhQcm92aWRlciIsInNpZ25JbkFub255bW91c2x5IiwiX2Fub255bW91c0F1dGhQcm92aWRlciIsInNpZ25PdXQiLCJvbkxvZ2luU3RhdGVFeHBpcmUiLCJnZXRMb2dpblN0YXRlIiwiaXNBbm9ueW1vdXMiLCJzaWduSW5XaXRoVGlja2V0Iiwic2hvdWxkUmVmcmVzaEFjY2Vzc1Rva2VuIiwiZ2V0VXNlckluZm8iLCJ0ZSIsInBhdGgiLCJhdXRob3JpemF0aW9uIiwiZmlsZUlkIiwiY29zRmlsZUlkIiwiZGVsZXRlRmlsZSIsImZpbGVpZF9saXN0IiwiZGVsZXRlX2xpc3QiLCJnZXRUZW1wRmlsZVVSTCIsImZpbGVpZCIsIm1heF9hZ2UiLCJtYXhBZ2UiLCJmaWxlX2xpc3QiLCJkb3dubG9hZF9saXN0IiwiZG93bmxvYWRfdXJsIiwiZW5jb2RlVVJJIiwibmUiLCJjYWxsRnVuY3Rpb24iLCJmdW5jdGlvbl9uYW1lIiwicmVxdWVzdF9kYXRhIiwicmVzcG9uc2VfZGF0YSIsInJlIiwidGltZW91dCIsImF1dGhPYmoiLCJfdXNlRGVmYXVsdEFkYXB0ZXIiLCJhdXRoIiwidGNiIiwib2UiLCJzZSIsImllIiwiYWUiLCJjZSIsIlBMQVRGT1JNIiwiT1MiLCJBUFBJRCIsImFrIiwidXQiLCJ0ZW5jZW50IiwiYWxpeXVuIiwic2lkIiwicHZkIiwiY2xpZW50SW5mbyIsInVuaUNsb3VkQ2xpZW50SW5mbyIsInVlIiwicnVuX3BhcmFtcyIsInBhcmFtIiwidHJpbSIsImludm9rZVJlc3VsdCIsImVycm9yTXNnIiwiYXV0b1NpZ25JbiIsImxlIiwiZGVidWdGdW5jdGlvbiIsImZlIiwicGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7K0xBQUEscUU7O0FBRUEsSUFBTUEsU0FBUyxHQUFHQyxNQUFNLENBQUNDLFNBQVAsQ0FBaUJDLFFBQW5DO0FBQ0EsSUFBTUMsY0FBYyxHQUFHSCxNQUFNLENBQUNDLFNBQVAsQ0FBaUJFLGNBQXhDOztBQUVBLFNBQVNDLElBQVQsQ0FBZUMsRUFBZixFQUFtQjtBQUNqQixTQUFPLE9BQU9BLEVBQVAsS0FBYyxVQUFyQjtBQUNEOztBQUVELFNBQVNDLEtBQVQsQ0FBZ0JDLEdBQWhCLEVBQXFCO0FBQ25CLFNBQU8sT0FBT0EsR0FBUCxLQUFlLFFBQXRCO0FBQ0Q7O0FBRUQsU0FBU0MsYUFBVCxDQUF3QkMsR0FBeEIsRUFBNkI7QUFDM0IsU0FBT1YsU0FBUyxDQUFDVyxJQUFWLENBQWVELEdBQWYsTUFBd0IsaUJBQS9CO0FBQ0Q7O0FBRUQsU0FBU0UsTUFBVCxDQUFpQkYsR0FBakIsRUFBc0JHLEdBQXRCLEVBQTJCO0FBQ3pCLFNBQU9ULGNBQWMsQ0FBQ08sSUFBZixDQUFvQkQsR0FBcEIsRUFBeUJHLEdBQXpCLENBQVA7QUFDRDs7QUFFRCxTQUFTQyxJQUFULEdBQWlCLENBQUU7O0FBRW5COzs7QUFHQSxTQUFTQyxNQUFULENBQWlCVCxFQUFqQixFQUFxQjtBQUNuQixNQUFNVSxLQUFLLEdBQUdmLE1BQU0sQ0FBQ2dCLE1BQVAsQ0FBYyxJQUFkLENBQWQ7QUFDQSxTQUFPLFNBQVNDLFFBQVQsQ0FBbUJWLEdBQW5CLEVBQXdCO0FBQzdCLFFBQU1XLEdBQUcsR0FBR0gsS0FBSyxDQUFDUixHQUFELENBQWpCO0FBQ0EsV0FBT1csR0FBRyxLQUFLSCxLQUFLLENBQUNSLEdBQUQsQ0FBTCxHQUFhRixFQUFFLENBQUNFLEdBQUQsQ0FBcEIsQ0FBVjtBQUNELEdBSEQ7QUFJRDs7QUFFRDs7O0FBR0EsSUFBTVksVUFBVSxHQUFHLFFBQW5CO0FBQ0EsSUFBTUMsUUFBUSxHQUFHTixNQUFNLENBQUMsVUFBQ1AsR0FBRCxFQUFTO0FBQy9CLFNBQU9BLEdBQUcsQ0FBQ2MsT0FBSixDQUFZRixVQUFaLEVBQXdCLFVBQUNHLENBQUQsRUFBSUMsQ0FBSixVQUFVQSxDQUFDLEdBQUdBLENBQUMsQ0FBQ0MsV0FBRixFQUFILEdBQXFCLEVBQWhDLEVBQXhCLENBQVA7QUFDRCxDQUZzQixDQUF2Qjs7QUFJQSxJQUFNQyxLQUFLLEdBQUc7QUFDWixRQURZO0FBRVosU0FGWTtBQUdaLE1BSFk7QUFJWixVQUpZO0FBS1osYUFMWSxDQUFkOzs7QUFRQSxJQUFNQyxrQkFBa0IsR0FBRyxFQUEzQjtBQUNBLElBQU1DLGtCQUFrQixHQUFHLEVBQTNCOztBQUVBLFNBQVNDLFNBQVQsQ0FBb0JDLFNBQXBCLEVBQStCQyxRQUEvQixFQUF5QztBQUN2QyxNQUFNQyxHQUFHLEdBQUdELFFBQVE7QUFDaEJELFdBQVM7QUFDUEEsV0FBUyxDQUFDRyxNQUFWLENBQWlCRixRQUFqQixDQURPO0FBRVBHLE9BQUssQ0FBQ0MsT0FBTixDQUFjSixRQUFkO0FBQ0VBLFVBREYsR0FDYSxDQUFDQSxRQUFELENBSkM7QUFLaEJELFdBTEo7QUFNQSxTQUFPRSxHQUFHO0FBQ05JLGFBQVcsQ0FBQ0osR0FBRCxDQURMO0FBRU5BLEtBRko7QUFHRDs7QUFFRCxTQUFTSSxXQUFULENBQXNCQyxLQUF0QixFQUE2QjtBQUMzQixNQUFNTCxHQUFHLEdBQUcsRUFBWjtBQUNBLE9BQUssSUFBSU0sQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR0QsS0FBSyxDQUFDRSxNQUExQixFQUFrQ0QsQ0FBQyxFQUFuQyxFQUF1QztBQUNyQyxRQUFJTixHQUFHLENBQUNRLE9BQUosQ0FBWUgsS0FBSyxDQUFDQyxDQUFELENBQWpCLE1BQTBCLENBQUMsQ0FBL0IsRUFBa0M7QUFDaENOLFNBQUcsQ0FBQ1MsSUFBSixDQUFTSixLQUFLLENBQUNDLENBQUQsQ0FBZDtBQUNEO0FBQ0Y7QUFDRCxTQUFPTixHQUFQO0FBQ0Q7O0FBRUQsU0FBU1UsVUFBVCxDQUFxQkwsS0FBckIsRUFBNEJNLElBQTVCLEVBQWtDO0FBQ2hDLE1BQU1DLEtBQUssR0FBR1AsS0FBSyxDQUFDRyxPQUFOLENBQWNHLElBQWQsQ0FBZDtBQUNBLE1BQUlDLEtBQUssS0FBSyxDQUFDLENBQWYsRUFBa0I7QUFDaEJQLFNBQUssQ0FBQ1EsTUFBTixDQUFhRCxLQUFiLEVBQW9CLENBQXBCO0FBQ0Q7QUFDRjs7QUFFRCxTQUFTRSxvQkFBVCxDQUErQkMsV0FBL0IsRUFBNENDLE1BQTVDLEVBQW9EO0FBQ2xEL0MsUUFBTSxDQUFDZ0QsSUFBUCxDQUFZRCxNQUFaLEVBQW9CRSxPQUFwQixDQUE0QixVQUFBUCxJQUFJLEVBQUk7QUFDbEMsUUFBSWpCLEtBQUssQ0FBQ2MsT0FBTixDQUFjRyxJQUFkLE1BQXdCLENBQUMsQ0FBekIsSUFBOEJ0QyxJQUFJLENBQUMyQyxNQUFNLENBQUNMLElBQUQsQ0FBUCxDQUF0QyxFQUFzRDtBQUNwREksaUJBQVcsQ0FBQ0osSUFBRCxDQUFYLEdBQW9CZCxTQUFTLENBQUNrQixXQUFXLENBQUNKLElBQUQsQ0FBWixFQUFvQkssTUFBTSxDQUFDTCxJQUFELENBQTFCLENBQTdCO0FBQ0Q7QUFDRixHQUpEO0FBS0Q7O0FBRUQsU0FBU1EscUJBQVQsQ0FBZ0NKLFdBQWhDLEVBQTZDQyxNQUE3QyxFQUFxRDtBQUNuRCxNQUFJLENBQUNELFdBQUQsSUFBZ0IsQ0FBQ0MsTUFBckIsRUFBNkI7QUFDM0I7QUFDRDtBQUNEL0MsUUFBTSxDQUFDZ0QsSUFBUCxDQUFZRCxNQUFaLEVBQW9CRSxPQUFwQixDQUE0QixVQUFBUCxJQUFJLEVBQUk7QUFDbEMsUUFBSWpCLEtBQUssQ0FBQ2MsT0FBTixDQUFjRyxJQUFkLE1BQXdCLENBQUMsQ0FBekIsSUFBOEJ0QyxJQUFJLENBQUMyQyxNQUFNLENBQUNMLElBQUQsQ0FBUCxDQUF0QyxFQUFzRDtBQUNwREQsZ0JBQVUsQ0FBQ0ssV0FBVyxDQUFDSixJQUFELENBQVosRUFBb0JLLE1BQU0sQ0FBQ0wsSUFBRCxDQUExQixDQUFWO0FBQ0Q7QUFDRixHQUpEO0FBS0Q7O0FBRUQsU0FBU1MsY0FBVCxDQUF5QkMsTUFBekIsRUFBaUNMLE1BQWpDLEVBQXlDO0FBQ3ZDLE1BQUksT0FBT0ssTUFBUCxLQUFrQixRQUFsQixJQUE4QjVDLGFBQWEsQ0FBQ3VDLE1BQUQsQ0FBL0MsRUFBeUQ7QUFDdkRGLHdCQUFvQixDQUFDbEIsa0JBQWtCLENBQUN5QixNQUFELENBQWxCLEtBQStCekIsa0JBQWtCLENBQUN5QixNQUFELENBQWxCLEdBQTZCLEVBQTVELENBQUQsRUFBa0VMLE1BQWxFLENBQXBCO0FBQ0QsR0FGRCxNQUVPLElBQUl2QyxhQUFhLENBQUM0QyxNQUFELENBQWpCLEVBQTJCO0FBQ2hDUCx3QkFBb0IsQ0FBQ25CLGtCQUFELEVBQXFCMEIsTUFBckIsQ0FBcEI7QUFDRDtBQUNGOztBQUVELFNBQVNDLGlCQUFULENBQTRCRCxNQUE1QixFQUFvQ0wsTUFBcEMsRUFBNEM7QUFDMUMsTUFBSSxPQUFPSyxNQUFQLEtBQWtCLFFBQXRCLEVBQWdDO0FBQzlCLFFBQUk1QyxhQUFhLENBQUN1QyxNQUFELENBQWpCLEVBQTJCO0FBQ3pCRywyQkFBcUIsQ0FBQ3ZCLGtCQUFrQixDQUFDeUIsTUFBRCxDQUFuQixFQUE2QkwsTUFBN0IsQ0FBckI7QUFDRCxLQUZELE1BRU87QUFDTCxhQUFPcEIsa0JBQWtCLENBQUN5QixNQUFELENBQXpCO0FBQ0Q7QUFDRixHQU5ELE1BTU8sSUFBSTVDLGFBQWEsQ0FBQzRDLE1BQUQsQ0FBakIsRUFBMkI7QUFDaENGLHlCQUFxQixDQUFDeEIsa0JBQUQsRUFBcUIwQixNQUFyQixDQUFyQjtBQUNEO0FBQ0Y7O0FBRUQsU0FBU0UsV0FBVCxDQUFzQlosSUFBdEIsRUFBNEI7QUFDMUIsU0FBTyxVQUFVYSxJQUFWLEVBQWdCO0FBQ3JCLFdBQU9iLElBQUksQ0FBQ2EsSUFBRCxDQUFKLElBQWNBLElBQXJCO0FBQ0QsR0FGRDtBQUdEOztBQUVELFNBQVNDLFNBQVQsQ0FBb0IvQyxHQUFwQixFQUF5QjtBQUN2QixTQUFPLENBQUMsQ0FBQ0EsR0FBRixLQUFVLE9BQU9BLEdBQVAsS0FBZSxRQUFmLElBQTJCLE9BQU9BLEdBQVAsS0FBZSxVQUFwRCxLQUFtRSxPQUFPQSxHQUFHLENBQUNnRCxJQUFYLEtBQW9CLFVBQTlGO0FBQ0Q7O0FBRUQsU0FBU0MsS0FBVCxDQUFnQnRCLEtBQWhCLEVBQXVCbUIsSUFBdkIsRUFBNkI7QUFDM0IsTUFBSUksT0FBTyxHQUFHLEtBQWQ7QUFDQSxPQUFLLElBQUl0QixDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHRCxLQUFLLENBQUNFLE1BQTFCLEVBQWtDRCxDQUFDLEVBQW5DLEVBQXVDO0FBQ3JDLFFBQU1LLElBQUksR0FBR04sS0FBSyxDQUFDQyxDQUFELENBQWxCO0FBQ0EsUUFBSXNCLE9BQUosRUFBYTtBQUNYQSxhQUFPLEdBQUdDLE9BQU8sQ0FBQ0gsSUFBUixDQUFhSCxXQUFXLENBQUNaLElBQUQsQ0FBeEIsQ0FBVjtBQUNELEtBRkQsTUFFTztBQUNMLFVBQU1YLEdBQUcsR0FBR1csSUFBSSxDQUFDYSxJQUFELENBQWhCO0FBQ0EsVUFBSUMsU0FBUyxDQUFDekIsR0FBRCxDQUFiLEVBQW9CO0FBQ2xCNEIsZUFBTyxHQUFHQyxPQUFPLENBQUNDLE9BQVIsQ0FBZ0I5QixHQUFoQixDQUFWO0FBQ0Q7QUFDRCxVQUFJQSxHQUFHLEtBQUssS0FBWixFQUFtQjtBQUNqQixlQUFPO0FBQ0wwQixjQURLLGtCQUNHLENBQUUsQ0FETCxFQUFQOztBQUdEO0FBQ0Y7QUFDRjtBQUNELFNBQU9FLE9BQU8sSUFBSTtBQUNoQkYsUUFEZ0IsZ0JBQ1ZLLFFBRFUsRUFDQTtBQUNkLGFBQU9BLFFBQVEsQ0FBQ1AsSUFBRCxDQUFmO0FBQ0QsS0FIZSxFQUFsQjs7QUFLRDs7QUFFRCxTQUFTUSxjQUFULENBQXlCakIsV0FBekIsRUFBb0QsS0FBZGtCLE9BQWMsdUVBQUosRUFBSTtBQUNsRCxHQUFDLFNBQUQsRUFBWSxNQUFaLEVBQW9CLFVBQXBCLEVBQWdDZixPQUFoQyxDQUF3QyxVQUFBZ0IsSUFBSSxFQUFJO0FBQzlDLFFBQUloQyxLQUFLLENBQUNDLE9BQU4sQ0FBY1ksV0FBVyxDQUFDbUIsSUFBRCxDQUF6QixDQUFKLEVBQXNDO0FBQ3BDLFVBQU1DLFdBQVcsR0FBR0YsT0FBTyxDQUFDQyxJQUFELENBQTNCO0FBQ0FELGFBQU8sQ0FBQ0MsSUFBRCxDQUFQLEdBQWdCLFNBQVNFLG1CQUFULENBQThCcEMsR0FBOUIsRUFBbUM7QUFDakQyQixhQUFLLENBQUNaLFdBQVcsQ0FBQ21CLElBQUQsQ0FBWixFQUFvQmxDLEdBQXBCLENBQUwsQ0FBOEIwQixJQUE5QixDQUFtQyxVQUFDMUIsR0FBRCxFQUFTO0FBQzFDO0FBQ0EsaUJBQU8zQixJQUFJLENBQUM4RCxXQUFELENBQUosSUFBcUJBLFdBQVcsQ0FBQ25DLEdBQUQsQ0FBaEMsSUFBeUNBLEdBQWhEO0FBQ0QsU0FIRDtBQUlELE9BTEQ7QUFNRDtBQUNGLEdBVkQ7QUFXQSxTQUFPaUMsT0FBUDtBQUNEOztBQUVELFNBQVNJLGtCQUFULENBQTZCaEIsTUFBN0IsRUFBcUNpQixXQUFyQyxFQUFrRDtBQUNoRCxNQUFNQyxnQkFBZ0IsR0FBRyxFQUF6QjtBQUNBLE1BQUlyQyxLQUFLLENBQUNDLE9BQU4sQ0FBY1Isa0JBQWtCLENBQUMyQyxXQUFqQyxDQUFKLEVBQW1EO0FBQ2pEQyxvQkFBZ0IsQ0FBQzlCLElBQWpCLE9BQUE4QixnQkFBZ0IscUJBQVM1QyxrQkFBa0IsQ0FBQzJDLFdBQTVCLEVBQWhCO0FBQ0Q7QUFDRCxNQUFNdkIsV0FBVyxHQUFHbkIsa0JBQWtCLENBQUN5QixNQUFELENBQXRDO0FBQ0EsTUFBSU4sV0FBVyxJQUFJYixLQUFLLENBQUNDLE9BQU4sQ0FBY1ksV0FBVyxDQUFDdUIsV0FBMUIsQ0FBbkIsRUFBMkQ7QUFDekRDLG9CQUFnQixDQUFDOUIsSUFBakIsT0FBQThCLGdCQUFnQixxQkFBU3hCLFdBQVcsQ0FBQ3VCLFdBQXJCLEVBQWhCO0FBQ0Q7QUFDREMsa0JBQWdCLENBQUNyQixPQUFqQixDQUF5QixVQUFBUCxJQUFJLEVBQUk7QUFDL0IyQixlQUFXLEdBQUczQixJQUFJLENBQUMyQixXQUFELENBQUosSUFBcUJBLFdBQW5DO0FBQ0QsR0FGRDtBQUdBLFNBQU9BLFdBQVA7QUFDRDs7QUFFRCxTQUFTRSxzQkFBVCxDQUFpQ25CLE1BQWpDLEVBQXlDO0FBQ3ZDLE1BQU1OLFdBQVcsR0FBRzlDLE1BQU0sQ0FBQ2dCLE1BQVAsQ0FBYyxJQUFkLENBQXBCO0FBQ0FoQixRQUFNLENBQUNnRCxJQUFQLENBQVl0QixrQkFBWixFQUFnQ3VCLE9BQWhDLENBQXdDLFVBQUFQLElBQUksRUFBSTtBQUM5QyxRQUFJQSxJQUFJLEtBQUssYUFBYixFQUE0QjtBQUMxQkksaUJBQVcsQ0FBQ0osSUFBRCxDQUFYLEdBQW9CaEIsa0JBQWtCLENBQUNnQixJQUFELENBQWxCLENBQXlCOEIsS0FBekIsRUFBcEI7QUFDRDtBQUNGLEdBSkQ7QUFLQSxNQUFNQyxpQkFBaUIsR0FBRzlDLGtCQUFrQixDQUFDeUIsTUFBRCxDQUE1QztBQUNBLE1BQUlxQixpQkFBSixFQUF1QjtBQUNyQnpFLFVBQU0sQ0FBQ2dELElBQVAsQ0FBWXlCLGlCQUFaLEVBQStCeEIsT0FBL0IsQ0FBdUMsVUFBQVAsSUFBSSxFQUFJO0FBQzdDLFVBQUlBLElBQUksS0FBSyxhQUFiLEVBQTRCO0FBQzFCSSxtQkFBVyxDQUFDSixJQUFELENBQVgsR0FBb0IsQ0FBQ0ksV0FBVyxDQUFDSixJQUFELENBQVgsSUFBcUIsRUFBdEIsRUFBMEJWLE1BQTFCLENBQWlDeUMsaUJBQWlCLENBQUMvQixJQUFELENBQWxELENBQXBCO0FBQ0Q7QUFDRixLQUpEO0FBS0Q7QUFDRCxTQUFPSSxXQUFQO0FBQ0Q7O0FBRUQsU0FBUzRCLFNBQVQsQ0FBb0J0QixNQUFwQixFQUE0QnVCLEdBQTVCLEVBQWlDWCxPQUFqQyxFQUFxRCxtQ0FBUlksTUFBUSx1RUFBUkEsTUFBUTtBQUNuRCxNQUFNOUIsV0FBVyxHQUFHeUIsc0JBQXNCLENBQUNuQixNQUFELENBQTFDO0FBQ0EsTUFBSU4sV0FBVyxJQUFJOUMsTUFBTSxDQUFDZ0QsSUFBUCxDQUFZRixXQUFaLEVBQXlCUixNQUE1QyxFQUFvRDtBQUNsRCxRQUFJTCxLQUFLLENBQUNDLE9BQU4sQ0FBY1ksV0FBVyxDQUFDK0IsTUFBMUIsQ0FBSixFQUF1QztBQUNyQyxVQUFNOUMsR0FBRyxHQUFHMkIsS0FBSyxDQUFDWixXQUFXLENBQUMrQixNQUFiLEVBQXFCYixPQUFyQixDQUFqQjtBQUNBLGFBQU9qQyxHQUFHLENBQUMwQixJQUFKLENBQVMsVUFBQ08sT0FBRCxFQUFhO0FBQzNCLGVBQU9XLEdBQUcsTUFBSCxVQUFJWixjQUFjLENBQUNqQixXQUFELEVBQWNrQixPQUFkLENBQWxCLFNBQTZDWSxNQUE3QyxFQUFQO0FBQ0QsT0FGTSxDQUFQO0FBR0QsS0FMRCxNQUtPO0FBQ0wsYUFBT0QsR0FBRyxNQUFILFVBQUlaLGNBQWMsQ0FBQ2pCLFdBQUQsRUFBY2tCLE9BQWQsQ0FBbEIsU0FBNkNZLE1BQTdDLEVBQVA7QUFDRDtBQUNGO0FBQ0QsU0FBT0QsR0FBRyxNQUFILFVBQUlYLE9BQUosU0FBZ0JZLE1BQWhCLEVBQVA7QUFDRDs7QUFFRCxJQUFNRSxrQkFBa0IsR0FBRztBQUN6QlQsYUFEeUIsdUJBQ1p0QyxHQURZLEVBQ1A7QUFDaEIsUUFBSSxDQUFDeUIsU0FBUyxDQUFDekIsR0FBRCxDQUFkLEVBQXFCO0FBQ25CLGFBQU9BLEdBQVA7QUFDRDtBQUNELFdBQU9BLEdBQUcsQ0FBQzBCLElBQUosQ0FBUyxVQUFBMUIsR0FBRyxFQUFJO0FBQ3JCLGFBQU9BLEdBQUcsQ0FBQyxDQUFELENBQVY7QUFDRCxLQUZNLEVBRUpnRCxLQUZJLENBRUUsVUFBQWhELEdBQUcsRUFBSTtBQUNkLGFBQU9BLEdBQUcsQ0FBQyxDQUFELENBQVY7QUFDRCxLQUpNLENBQVA7QUFLRCxHQVZ3QixFQUEzQjs7O0FBYUEsSUFBTWlELFdBQVc7QUFDZixxUEFERjs7QUFHQSxJQUFNQyxjQUFjLEdBQUcsa0JBQXZCOztBQUVBO0FBQ0EsSUFBTUMsa0JBQWtCLEdBQUcsQ0FBQyxxQkFBRCxDQUEzQjs7QUFFQTtBQUNBLElBQU1DLFNBQVMsR0FBRyxDQUFDLHFCQUFELENBQWxCOztBQUVBLElBQU1DLGVBQWUsR0FBRyxVQUF4Qjs7QUFFQSxTQUFTQyxZQUFULENBQXVCcEIsSUFBdkIsRUFBNkI7QUFDM0IsU0FBT2dCLGNBQWMsQ0FBQ0ssSUFBZixDQUFvQnJCLElBQXBCLEtBQTZCaUIsa0JBQWtCLENBQUMzQyxPQUFuQixDQUEyQjBCLElBQTNCLE1BQXFDLENBQUMsQ0FBMUU7QUFDRDtBQUNELFNBQVNzQixTQUFULENBQW9CdEIsSUFBcEIsRUFBMEI7QUFDeEIsU0FBT2UsV0FBVyxDQUFDTSxJQUFaLENBQWlCckIsSUFBakIsS0FBMEJrQixTQUFTLENBQUM1QyxPQUFWLENBQWtCMEIsSUFBbEIsTUFBNEIsQ0FBQyxDQUE5RDtBQUNEOztBQUVELFNBQVN1QixhQUFULENBQXdCdkIsSUFBeEIsRUFBOEI7QUFDNUIsU0FBT21CLGVBQWUsQ0FBQ0UsSUFBaEIsQ0FBcUJyQixJQUFyQixLQUE4QkEsSUFBSSxLQUFLLFFBQTlDO0FBQ0Q7O0FBRUQsU0FBU3dCLGFBQVQsQ0FBd0I5QixPQUF4QixFQUFpQztBQUMvQixTQUFPQSxPQUFPLENBQUNGLElBQVIsQ0FBYSxVQUFBRixJQUFJLEVBQUk7QUFDMUIsV0FBTyxDQUFDLElBQUQsRUFBT0EsSUFBUCxDQUFQO0FBQ0QsR0FGTTtBQUdKd0IsT0FISSxDQUdFLFVBQUFXLEdBQUcsVUFBSSxDQUFDQSxHQUFELENBQUosRUFITCxDQUFQO0FBSUQ7O0FBRUQsU0FBU0MsYUFBVCxDQUF3QjFCLElBQXhCLEVBQThCO0FBQzVCO0FBQ0VvQixjQUFZLENBQUNwQixJQUFELENBQVo7QUFDQXNCLFdBQVMsQ0FBQ3RCLElBQUQsQ0FEVDtBQUVBdUIsZUFBYSxDQUFDdkIsSUFBRCxDQUhmO0FBSUU7QUFDQSxXQUFPLEtBQVA7QUFDRDtBQUNELFNBQU8sSUFBUDtBQUNEOztBQUVEO0FBQ0EsSUFBSSxDQUFDTCxPQUFPLENBQUMzRCxTQUFSLENBQWtCMkYsT0FBdkIsRUFBZ0M7QUFDOUJoQyxTQUFPLENBQUMzRCxTQUFSLENBQWtCMkYsT0FBbEIsR0FBNEIsVUFBVTlCLFFBQVYsRUFBb0I7QUFDOUMsUUFBTUgsT0FBTyxHQUFHLEtBQUtrQyxXQUFyQjtBQUNBLFdBQU8sS0FBS3BDLElBQUw7QUFDTCxjQUFBcUMsS0FBSyxVQUFJbkMsT0FBTyxDQUFDRSxPQUFSLENBQWdCQyxRQUFRLEVBQXhCLEVBQTRCTCxJQUE1QixDQUFpQyxvQkFBTXFDLEtBQU4sRUFBakMsQ0FBSixFQURBO0FBRUwsY0FBQUMsTUFBTSxVQUFJcEMsT0FBTyxDQUFDRSxPQUFSLENBQWdCQyxRQUFRLEVBQXhCLEVBQTRCTCxJQUE1QixDQUFpQyxZQUFNO0FBQy9DLGNBQU1zQyxNQUFOO0FBQ0QsT0FGUyxDQUFKLEVBRkQsQ0FBUDs7QUFNRCxHQVJEO0FBU0Q7O0FBRUQsU0FBU0MsU0FBVCxDQUFvQi9CLElBQXBCLEVBQTBCVSxHQUExQixFQUErQjtBQUM3QixNQUFJLENBQUNnQixhQUFhLENBQUMxQixJQUFELENBQWxCLEVBQTBCO0FBQ3hCLFdBQU9VLEdBQVA7QUFDRDtBQUNELFNBQU8sU0FBU3NCLFVBQVQsR0FBOEMsS0FBekJqQyxPQUF5Qix1RUFBZixFQUFlLG9DQUFSWSxNQUFRLDZFQUFSQSxNQUFRO0FBQ25ELFFBQUl4RSxJQUFJLENBQUM0RCxPQUFPLENBQUNrQyxPQUFULENBQUosSUFBeUI5RixJQUFJLENBQUM0RCxPQUFPLENBQUNtQyxJQUFULENBQTdCLElBQStDL0YsSUFBSSxDQUFDNEQsT0FBTyxDQUFDb0MsUUFBVCxDQUF2RCxFQUEyRTtBQUN6RSxhQUFPaEMsa0JBQWtCLENBQUNILElBQUQsRUFBT1MsU0FBUyxNQUFULFVBQVVULElBQVYsRUFBZ0JVLEdBQWhCLEVBQXFCWCxPQUFyQixTQUFpQ1ksTUFBakMsRUFBUCxDQUF6QjtBQUNEO0FBQ0QsV0FBT1Isa0JBQWtCLENBQUNILElBQUQsRUFBT3dCLGFBQWEsQ0FBQyxJQUFJN0IsT0FBSixDQUFZLFVBQUNDLE9BQUQsRUFBVXdDLE1BQVYsRUFBcUI7QUFDN0UzQixlQUFTLE1BQVQsVUFBVVQsSUFBVixFQUFnQlUsR0FBaEIsRUFBcUIzRSxNQUFNLENBQUNzRyxNQUFQLENBQWMsRUFBZCxFQUFrQnRDLE9BQWxCLEVBQTJCO0FBQzlDa0MsZUFBTyxFQUFFckMsT0FEcUM7QUFFOUNzQyxZQUFJLEVBQUVFLE1BRndDLEVBQTNCLENBQXJCO0FBR096QixZQUhQO0FBSUQsS0FMNkMsQ0FBRCxDQUFwQixDQUF6QjtBQU1ELEdBVkQ7QUFXRDs7QUFFRCxJQUFNMkIsR0FBRyxHQUFHLElBQVo7QUFDQSxJQUFNQyxpQkFBaUIsR0FBRyxHQUExQjtBQUNBLElBQUlDLEtBQUssR0FBRyxLQUFaO0FBQ0EsSUFBSUMsV0FBVyxHQUFHLENBQWxCO0FBQ0EsSUFBSUMsU0FBUyxHQUFHLENBQWhCOztBQUVBLFNBQVNDLGdCQUFULEdBQTZCOzs7OztBQUt2QkMsSUFBRSxDQUFDQyxpQkFBSCxFQUx1QixDQUV6QkMsUUFGeUIseUJBRXpCQSxRQUZ5QixDQUd6QkMsVUFIeUIseUJBR3pCQSxVQUh5QixDQUl6QkMsV0FKeUIseUJBSXpCQSxXQUp5QixFQUtDOztBQUU1QlAsYUFBVyxHQUFHTyxXQUFkO0FBQ0FOLFdBQVMsR0FBR0ssVUFBWjtBQUNBUCxPQUFLLEdBQUdNLFFBQVEsS0FBSyxLQUFyQjtBQUNEOztBQUVELFNBQVNHLE1BQVQsQ0FBaUJDLE1BQWpCLEVBQXlCQyxjQUF6QixFQUF5QztBQUN2QyxNQUFJVixXQUFXLEtBQUssQ0FBcEIsRUFBdUI7QUFDckJFLG9CQUFnQjtBQUNqQjs7QUFFRE8sUUFBTSxHQUFHRSxNQUFNLENBQUNGLE1BQUQsQ0FBZjtBQUNBLE1BQUlBLE1BQU0sS0FBSyxDQUFmLEVBQWtCO0FBQ2hCLFdBQU8sQ0FBUDtBQUNEO0FBQ0QsTUFBSUcsTUFBTSxHQUFJSCxNQUFNLEdBQUdYLGlCQUFWLElBQWdDWSxjQUFjLElBQUlWLFdBQWxELENBQWI7QUFDQSxNQUFJWSxNQUFNLEdBQUcsQ0FBYixFQUFnQjtBQUNkQSxVQUFNLEdBQUcsQ0FBQ0EsTUFBVjtBQUNEO0FBQ0RBLFFBQU0sR0FBR0MsSUFBSSxDQUFDQyxLQUFMLENBQVdGLE1BQU0sR0FBR2YsR0FBcEIsQ0FBVDtBQUNBLE1BQUllLE1BQU0sS0FBSyxDQUFmLEVBQWtCO0FBQ2hCLFFBQUlYLFNBQVMsS0FBSyxDQUFkLElBQW1CLENBQUNGLEtBQXhCLEVBQStCO0FBQzdCLGFBQU8sQ0FBUDtBQUNELEtBRkQsTUFFTztBQUNMLGFBQU8sR0FBUDtBQUNEO0FBQ0Y7QUFDRCxTQUFPVSxNQUFNLEdBQUcsQ0FBVCxHQUFhLENBQUNHLE1BQWQsR0FBdUJBLE1BQTlCO0FBQ0Q7O0FBRUQsSUFBTUcsWUFBWSxHQUFHO0FBQ25CM0Msb0JBQWtCLEVBQWxCQSxrQkFEbUIsRUFBckI7OztBQUlBLElBQUk0QyxPQUFPLEdBQUcsYUFBYTFILE1BQU0sQ0FBQzJILE1BQVAsQ0FBYztBQUN2Q0MsV0FBUyxFQUFFLElBRDRCO0FBRXZDVixRQUFNLEVBQUVBLE1BRitCO0FBR3ZDL0QsZ0JBQWMsRUFBRUEsY0FIdUI7QUFJdkNFLG1CQUFpQixFQUFFQSxpQkFKb0I7QUFLdkNvRSxjQUFZLEVBQUVBLFlBTHlCLEVBQWQsQ0FBM0I7OztBQVFBLElBQUlJLFlBQVksR0FBRztBQUNqQkMsTUFEaUIsZ0JBQ1hDLFFBRFcsRUFDRDtBQUNkLFFBQUlDLFlBQVksR0FBR0MsUUFBUSxDQUFDRixRQUFRLENBQUNHLE9BQVYsQ0FBM0I7QUFDQSxRQUFJQyxLQUFLLENBQUNILFlBQUQsQ0FBVCxFQUF5QjtBQUN2QjtBQUNEO0FBQ0QsUUFBTUksSUFBSSxHQUFHTCxRQUFRLENBQUNLLElBQXRCO0FBQ0EsUUFBSSxDQUFDbkcsS0FBSyxDQUFDQyxPQUFOLENBQWNrRyxJQUFkLENBQUwsRUFBMEI7QUFDeEI7QUFDRDtBQUNELFFBQU1DLEdBQUcsR0FBR0QsSUFBSSxDQUFDOUYsTUFBakI7QUFDQSxRQUFJLENBQUMrRixHQUFMLEVBQVU7QUFDUjtBQUNEO0FBQ0QsUUFBSUwsWUFBWSxHQUFHLENBQW5CLEVBQXNCO0FBQ3BCQSxrQkFBWSxHQUFHLENBQWY7QUFDRCxLQUZELE1BRU8sSUFBSUEsWUFBWSxJQUFJSyxHQUFwQixFQUF5QjtBQUM5Qkwsa0JBQVksR0FBR0ssR0FBRyxHQUFHLENBQXJCO0FBQ0Q7QUFDRCxRQUFJTCxZQUFZLEdBQUcsQ0FBbkIsRUFBc0I7QUFDcEJELGNBQVEsQ0FBQ0csT0FBVCxHQUFtQkUsSUFBSSxDQUFDSixZQUFELENBQXZCO0FBQ0FELGNBQVEsQ0FBQ0ssSUFBVCxHQUFnQkEsSUFBSSxDQUFDRSxNQUFMO0FBQ2QsZ0JBQUNDLElBQUQsRUFBTzVGLEtBQVAsVUFBaUJBLEtBQUssR0FBR3FGLFlBQVIsR0FBdUJPLElBQUksS0FBS0gsSUFBSSxDQUFDSixZQUFELENBQXBDLEdBQXFELElBQXRFLEVBRGMsQ0FBaEI7O0FBR0QsS0FMRCxNQUtPO0FBQ0xELGNBQVEsQ0FBQ0csT0FBVCxHQUFtQkUsSUFBSSxDQUFDLENBQUQsQ0FBdkI7QUFDRDtBQUNELFdBQU87QUFDTEksZUFBUyxFQUFFLEtBRE47QUFFTEMsVUFBSSxFQUFFLEtBRkQsRUFBUDs7QUFJRCxHQS9CZ0IsRUFBbkI7OztBQWtDQSxJQUFNQyxTQUFTLEdBQUc7QUFDaEJiLGNBQVksRUFBWkEsWUFEZ0IsRUFBbEI7O0FBR0EsSUFBTWMsS0FBSyxHQUFHO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFsQ1ksQ0FBZDtBQW9DQSxJQUFNQyxRQUFRLEdBQUc7QUFDZixVQURlO0FBRWYsb0JBRmU7QUFHZixtQkFIZTtBQUlmLHVCQUplO0FBS2YsY0FMZTtBQU1mLGlCQU5lO0FBT2YscUJBUGU7QUFRZixxQkFSZTtBQVNmLGlCQVRlO0FBVWYscUJBVmU7QUFXZixhQVhlO0FBWWYsY0FaZTtBQWFmLGNBYmU7QUFjZixlQWRlO0FBZWYsY0FmZTtBQWdCZixlQWhCZTtBQWlCZixtQkFqQmU7QUFrQmYsaUJBbEJlO0FBbUJmLGFBbkJlO0FBb0JmLGVBcEJlO0FBcUJmLGNBckJlO0FBc0JmLGlCQXRCZTtBQXVCZixjQXZCZTtBQXdCZix5QkF4QmU7QUF5QmYseUJBekJlO0FBMEJmLHVCQTFCZTtBQTJCZixpQkEzQmU7QUE0QmYsdUJBNUJlO0FBNkJmLGVBN0JlO0FBOEJmLGVBOUJlO0FBK0JmLGlCQS9CZSxDQUFqQjs7O0FBa0NBLElBQU1DLFNBQVMsR0FBRyxDQUFDLFNBQUQsRUFBWSxNQUFaLEVBQW9CLFFBQXBCLEVBQThCLFVBQTlCLENBQWxCOztBQUVBLFNBQVNDLGVBQVQsQ0FBMEJDLFVBQTFCLEVBQXNDM0YsTUFBdEMsRUFBOENpQixXQUE5QyxFQUEyRDtBQUN6RCxTQUFPLFVBQVV0QyxHQUFWLEVBQWU7QUFDcEIsV0FBT3FCLE1BQU0sQ0FBQzRGLGtCQUFrQixDQUFDRCxVQUFELEVBQWFoSCxHQUFiLEVBQWtCc0MsV0FBbEIsQ0FBbkIsQ0FBYjtBQUNELEdBRkQ7QUFHRDs7QUFFRCxTQUFTNEUsV0FBVCxDQUFzQkYsVUFBdEIsRUFBa0NoQixRQUFsQyxFQUFxRyxLQUF6RG1CLFVBQXlELHVFQUE1QyxFQUE0QyxLQUF4QzdFLFdBQXdDLHVFQUExQixFQUEwQixLQUF0QjhFLFlBQXNCLHVFQUFQLEtBQU87QUFDbkcsTUFBSTNJLGFBQWEsQ0FBQ3VILFFBQUQsQ0FBakIsRUFBNkIsQ0FBRTtBQUM3QixRQUFNcUIsTUFBTSxHQUFHRCxZQUFZLEtBQUssSUFBakIsR0FBd0JwQixRQUF4QixHQUFtQyxFQUFsRCxDQUQyQixDQUMyQjtBQUN0RCxRQUFJM0gsSUFBSSxDQUFDOEksVUFBRCxDQUFSLEVBQXNCO0FBQ3BCQSxnQkFBVSxHQUFHQSxVQUFVLENBQUNuQixRQUFELEVBQVdxQixNQUFYLENBQVYsSUFBZ0MsRUFBN0M7QUFDRDtBQUNELFNBQUssSUFBTXhJLEdBQVgsSUFBa0JtSCxRQUFsQixFQUE0QjtBQUMxQixVQUFJcEgsTUFBTSxDQUFDdUksVUFBRCxFQUFhdEksR0FBYixDQUFWLEVBQTZCO0FBQzNCLFlBQUl5SSxTQUFTLEdBQUdILFVBQVUsQ0FBQ3RJLEdBQUQsQ0FBMUI7QUFDQSxZQUFJUixJQUFJLENBQUNpSixTQUFELENBQVIsRUFBcUI7QUFDbkJBLG1CQUFTLEdBQUdBLFNBQVMsQ0FBQ3RCLFFBQVEsQ0FBQ25ILEdBQUQsQ0FBVCxFQUFnQm1ILFFBQWhCLEVBQTBCcUIsTUFBMUIsQ0FBckI7QUFDRDtBQUNELFlBQUksQ0FBQ0MsU0FBTCxFQUFnQixDQUFFO0FBQ2hCQyxpQkFBTyxDQUFDQyxJQUFSLGdDQUFzQlIsVUFBdEIscUNBQXVDbkksR0FBdkM7QUFDRCxTQUZELE1BRU8sSUFBSU4sS0FBSyxDQUFDK0ksU0FBRCxDQUFULEVBQXNCLENBQUU7QUFDN0JELGdCQUFNLENBQUNDLFNBQUQsQ0FBTixHQUFvQnRCLFFBQVEsQ0FBQ25ILEdBQUQsQ0FBNUI7QUFDRCxTQUZNLE1BRUEsSUFBSUosYUFBYSxDQUFDNkksU0FBRCxDQUFqQixFQUE4QixDQUFFO0FBQ3JDRCxnQkFBTSxDQUFDQyxTQUFTLENBQUNwRixJQUFWLEdBQWlCb0YsU0FBUyxDQUFDcEYsSUFBM0IsR0FBa0NyRCxHQUFuQyxDQUFOLEdBQWdEeUksU0FBUyxDQUFDdkQsS0FBMUQ7QUFDRDtBQUNGLE9BWkQsTUFZTyxJQUFJK0MsU0FBUyxDQUFDdEcsT0FBVixDQUFrQjNCLEdBQWxCLE1BQTJCLENBQUMsQ0FBaEMsRUFBbUM7QUFDeEN3SSxjQUFNLENBQUN4SSxHQUFELENBQU4sR0FBY2tJLGVBQWUsQ0FBQ0MsVUFBRCxFQUFhaEIsUUFBUSxDQUFDbkgsR0FBRCxDQUFyQixFQUE0QnlELFdBQTVCLENBQTdCO0FBQ0QsT0FGTSxNQUVBO0FBQ0wsWUFBSSxDQUFDOEUsWUFBTCxFQUFtQjtBQUNqQkMsZ0JBQU0sQ0FBQ3hJLEdBQUQsQ0FBTixHQUFjbUgsUUFBUSxDQUFDbkgsR0FBRCxDQUF0QjtBQUNEO0FBQ0Y7QUFDRjtBQUNELFdBQU93SSxNQUFQO0FBQ0QsR0EzQkQsTUEyQk8sSUFBSWhKLElBQUksQ0FBQzJILFFBQUQsQ0FBUixFQUFvQjtBQUN6QkEsWUFBUSxHQUFHZSxlQUFlLENBQUNDLFVBQUQsRUFBYWhCLFFBQWIsRUFBdUIxRCxXQUF2QixDQUExQjtBQUNEO0FBQ0QsU0FBTzBELFFBQVA7QUFDRDs7QUFFRCxTQUFTaUIsa0JBQVQsQ0FBNkJELFVBQTdCLEVBQXlDaEgsR0FBekMsRUFBOENzQyxXQUE5QyxFQUFvRixLQUF6Qm1GLGVBQXlCLHVFQUFQLEtBQU87QUFDbEYsTUFBSXBKLElBQUksQ0FBQ3NJLFNBQVMsQ0FBQ3JFLFdBQVgsQ0FBUixFQUFpQyxDQUFFO0FBQ2pDdEMsT0FBRyxHQUFHMkcsU0FBUyxDQUFDckUsV0FBVixDQUFzQjBFLFVBQXRCLEVBQWtDaEgsR0FBbEMsQ0FBTjtBQUNEO0FBQ0QsU0FBT2tILFdBQVcsQ0FBQ0YsVUFBRCxFQUFhaEgsR0FBYixFQUFrQnNDLFdBQWxCLEVBQStCLEVBQS9CLEVBQW1DbUYsZUFBbkMsQ0FBbEI7QUFDRDs7QUFFRCxTQUFTQyxPQUFULENBQWtCVixVQUFsQixFQUE4QjNGLE1BQTlCLEVBQXNDO0FBQ3BDLE1BQUl6QyxNQUFNLENBQUMrSCxTQUFELEVBQVlLLFVBQVosQ0FBVixFQUFtQztBQUNqQyxRQUFNVyxRQUFRLEdBQUdoQixTQUFTLENBQUNLLFVBQUQsQ0FBMUI7QUFDQSxRQUFJLENBQUNXLFFBQUwsRUFBZSxDQUFFO0FBQ2YsYUFBTyxZQUFZO0FBQ2pCSixlQUFPLENBQUNLLEtBQVIsd0RBQTJCWixVQUEzQjtBQUNELE9BRkQ7QUFHRDtBQUNELFdBQU8sVUFBVWEsSUFBVixFQUFnQkMsSUFBaEIsRUFBc0IsQ0FBRTtBQUM3QixVQUFJN0YsT0FBTyxHQUFHMEYsUUFBZDtBQUNBLFVBQUl0SixJQUFJLENBQUNzSixRQUFELENBQVIsRUFBb0I7QUFDbEIxRixlQUFPLEdBQUcwRixRQUFRLENBQUNFLElBQUQsQ0FBbEI7QUFDRDs7QUFFREEsVUFBSSxHQUFHWCxXQUFXLENBQUNGLFVBQUQsRUFBYWEsSUFBYixFQUFtQjVGLE9BQU8sQ0FBQzhELElBQTNCLEVBQWlDOUQsT0FBTyxDQUFDSyxXQUF6QyxDQUFsQjs7QUFFQSxVQUFNeUQsSUFBSSxHQUFHLENBQUM4QixJQUFELENBQWI7QUFDQSxVQUFJLE9BQU9DLElBQVAsS0FBZ0IsV0FBcEIsRUFBaUM7QUFDL0IvQixZQUFJLENBQUN0RixJQUFMLENBQVVxSCxJQUFWO0FBQ0Q7QUFDRCxVQUFNeEYsV0FBVyxHQUFHd0MsRUFBRSxDQUFDN0MsT0FBTyxDQUFDQyxJQUFSLElBQWdCOEUsVUFBakIsQ0FBRixDQUErQmUsS0FBL0IsQ0FBcUNqRCxFQUFyQyxFQUF5Q2lCLElBQXpDLENBQXBCO0FBQ0EsVUFBSXZDLFNBQVMsQ0FBQ3dELFVBQUQsQ0FBYixFQUEyQixDQUFFO0FBQzNCLGVBQU9DLGtCQUFrQixDQUFDRCxVQUFELEVBQWExRSxXQUFiLEVBQTBCTCxPQUFPLENBQUNLLFdBQWxDLEVBQStDZ0IsWUFBWSxDQUFDMEQsVUFBRCxDQUEzRCxDQUF6QjtBQUNEO0FBQ0QsYUFBTzFFLFdBQVA7QUFDRCxLQWpCRDtBQWtCRDtBQUNELFNBQU9qQixNQUFQO0FBQ0Q7O0FBRUQsSUFBTTJHLFFBQVEsR0FBRy9KLE1BQU0sQ0FBQ2dCLE1BQVAsQ0FBYyxJQUFkLENBQWpCOztBQUVBLElBQU1nSixLQUFLLEdBQUc7QUFDWixzQkFEWTtBQUVaLGVBRlk7QUFHWixpQkFIWTtBQUlaLFFBSlk7QUFLWixTQUxZO0FBTVosT0FOWSxDQUFkOzs7QUFTQSxTQUFTQyxhQUFULENBQXdCaEcsSUFBeEIsRUFBOEI7QUFDNUIsU0FBTyxTQUFTaUcsT0FBVDs7O0FBR0osT0FGRC9ELElBRUMsUUFGREEsSUFFQyxDQUREQyxRQUNDLFFBRERBLFFBQ0M7QUFDRCxRQUFNckUsR0FBRyxHQUFHO0FBQ1ZvSSxZQUFNLFlBQUtsRyxJQUFMLDRDQUF1QkEsSUFBdkIsa0JBREksRUFBWjs7QUFHQTdELFFBQUksQ0FBQytGLElBQUQsQ0FBSixJQUFjQSxJQUFJLENBQUNwRSxHQUFELENBQWxCO0FBQ0EzQixRQUFJLENBQUNnRyxRQUFELENBQUosSUFBa0JBLFFBQVEsQ0FBQ3JFLEdBQUQsQ0FBMUI7QUFDRCxHQVREO0FBVUQ7O0FBRURpSSxLQUFLLENBQUMvRyxPQUFOLENBQWMsVUFBVWdCLElBQVYsRUFBZ0I7QUFDNUI4RixVQUFRLENBQUM5RixJQUFELENBQVIsR0FBaUJnRyxhQUFhLENBQUNoRyxJQUFELENBQTlCO0FBQ0QsQ0FGRDs7QUFJQSxJQUFJbUcsU0FBUyxHQUFHO0FBQ2RDLE9BQUssRUFBRSxDQUFDLElBQUQsQ0FETztBQUVkQyxPQUFLLEVBQUUsQ0FBQyxJQUFELENBRk87QUFHZEMsU0FBTyxFQUFFLENBQUMsT0FBRCxDQUhLO0FBSWQvSCxNQUFJLEVBQUUsQ0FBQyxJQUFELENBSlEsRUFBaEI7OztBQU9BLFNBQVNnSSxXQUFUOzs7OztBQUtHLEtBSkRDLE9BSUMsU0FKREEsT0FJQyxDQUhEdkUsT0FHQyxTQUhEQSxPQUdDLENBRkRDLElBRUMsU0FGREEsSUFFQyxDQUREQyxRQUNDLFNBRERBLFFBQ0M7QUFDRCxNQUFJckUsR0FBRyxHQUFHLEtBQVY7QUFDQSxNQUFJcUksU0FBUyxDQUFDSyxPQUFELENBQWIsRUFBd0I7QUFDdEIxSSxPQUFHLEdBQUc7QUFDSm9JLFlBQU0sRUFBRSxnQkFESjtBQUVKTSxhQUFPLEVBQVBBLE9BRkk7QUFHSkMsY0FBUSxFQUFFTixTQUFTLENBQUNLLE9BQUQsQ0FIZixFQUFOOztBQUtBckssUUFBSSxDQUFDOEYsT0FBRCxDQUFKLElBQWlCQSxPQUFPLENBQUNuRSxHQUFELENBQXhCO0FBQ0QsR0FQRCxNQU9PO0FBQ0xBLE9BQUcsR0FBRztBQUNKb0ksWUFBTSxFQUFFLHlCQUF5Qk0sT0FBekIsR0FBbUMsTUFEdkMsRUFBTjs7QUFHQXJLLFFBQUksQ0FBQytGLElBQUQsQ0FBSixJQUFjQSxJQUFJLENBQUNwRSxHQUFELENBQWxCO0FBQ0Q7QUFDRDNCLE1BQUksQ0FBQ2dHLFFBQUQsQ0FBSixJQUFrQkEsUUFBUSxDQUFDckUsR0FBRCxDQUExQjtBQUNEOztBQUVELElBQUk0SSxRQUFRLEdBQUcsYUFBYTNLLE1BQU0sQ0FBQzJILE1BQVAsQ0FBYztBQUN4Q0MsV0FBUyxFQUFFLElBRDZCO0FBRXhDNEMsYUFBVyxFQUFFQSxXQUYyQixFQUFkLENBQTVCOzs7QUFLQSxJQUFNSSxVQUFVLEdBQUksWUFBWTtBQUM5QixNQUFJLE9BQU9DLGFBQVAsS0FBeUIsVUFBN0IsRUFBeUM7QUFDdkM7QUFDQSxXQUFPQSxhQUFQO0FBQ0Q7QUFDRCxNQUFJQyxPQUFKO0FBQ0EsU0FBTyxTQUFTRCxhQUFULEdBQTBCO0FBQy9CLFFBQUksQ0FBQ0MsT0FBTCxFQUFjO0FBQ1pBLGFBQU8sR0FBRyxJQUFJQyxZQUFKLEVBQVY7QUFDRDtBQUNELFdBQU9ELE9BQVA7QUFDRCxHQUxEO0FBTUQsQ0Faa0IsRUFBbkI7O0FBY0EsU0FBU2hCLEtBQVQsQ0FBZ0JrQixHQUFoQixFQUFxQjVILE1BQXJCLEVBQTZCMEUsSUFBN0IsRUFBbUM7QUFDakMsU0FBT2tELEdBQUcsQ0FBQzVILE1BQUQsQ0FBSCxDQUFZMEcsS0FBWixDQUFrQmtCLEdBQWxCLEVBQXVCbEQsSUFBdkIsQ0FBUDtBQUNEOztBQUVELFNBQVNtRCxHQUFULEdBQWdCO0FBQ2QsU0FBT25CLEtBQUssQ0FBQ2MsVUFBVSxFQUFYLEVBQWUsS0FBZiw2QkFBMEJNLFNBQTFCLEVBQVo7QUFDRDtBQUNELFNBQVNDLElBQVQsR0FBaUI7QUFDZixTQUFPckIsS0FBSyxDQUFDYyxVQUFVLEVBQVgsRUFBZSxNQUFmLDZCQUEyQk0sU0FBM0IsRUFBWjtBQUNEO0FBQ0QsU0FBU0UsS0FBVCxHQUFrQjtBQUNoQixTQUFPdEIsS0FBSyxDQUFDYyxVQUFVLEVBQVgsRUFBZSxPQUFmLDZCQUE0Qk0sU0FBNUIsRUFBWjtBQUNEO0FBQ0QsU0FBU0csS0FBVCxHQUFrQjtBQUNoQixTQUFPdkIsS0FBSyxDQUFDYyxVQUFVLEVBQVgsRUFBZSxPQUFmLDZCQUE0Qk0sU0FBNUIsRUFBWjtBQUNEOztBQUVELElBQUlJLFFBQVEsR0FBRyxhQUFhdEwsTUFBTSxDQUFDMkgsTUFBUCxDQUFjO0FBQ3hDQyxXQUFTLEVBQUUsSUFENkI7QUFFeENxRCxLQUFHLEVBQUVBLEdBRm1DO0FBR3hDRSxNQUFJLEVBQUVBLElBSGtDO0FBSXhDQyxPQUFLLEVBQUVBLEtBSmlDO0FBS3hDQyxPQUFLLEVBQUVBLEtBTGlDLEVBQWQsQ0FBNUI7OztBQVFBLElBQUkxRyxHQUFHLEdBQUcsYUFBYTNFLE1BQU0sQ0FBQzJILE1BQVAsQ0FBYztBQUNuQ0MsV0FBUyxFQUFFLElBRHdCLEVBQWQsQ0FBdkI7OztBQUlBLElBQU0yRCxNQUFNLEdBQUdDLElBQWY7QUFDQSxJQUFNQyxXQUFXLEdBQUdDLFNBQXBCOztBQUVBLElBQU1DLFdBQVcsR0FBRyxJQUFwQjs7QUFFQSxJQUFNQyxTQUFTLEdBQUc5SyxNQUFNLENBQUMsVUFBQ1AsR0FBRCxFQUFTO0FBQ2hDLFNBQU9hLFFBQVEsQ0FBQ2IsR0FBRyxDQUFDYyxPQUFKLENBQVlzSyxXQUFaLEVBQXlCLEdBQXpCLENBQUQsQ0FBZjtBQUNELENBRnVCLENBQXhCOztBQUlBLFNBQVNFLGdCQUFULENBQTJCQyxVQUEzQixFQUF1QztBQUNyQyxNQUFNQyxlQUFlLEdBQUdELFVBQVUsQ0FBQ0UsWUFBbkM7QUFDQUYsWUFBVSxDQUFDRSxZQUFYLEdBQTBCLFVBQVVDLEtBQVYsRUFBMEIsb0NBQU5uRSxJQUFNLDZFQUFOQSxJQUFNO0FBQ2xELFdBQU9pRSxlQUFlLENBQUNqQyxLQUFoQixDQUFzQmdDLFVBQXRCLEdBQW1DRixTQUFTLENBQUNLLEtBQUQsQ0FBNUMsU0FBd0RuRSxJQUF4RCxFQUFQO0FBQ0QsR0FGRDtBQUdEOztBQUVELFNBQVNvRSxRQUFULENBQW1CakksSUFBbkIsRUFBeUJELE9BQXpCLEVBQWtDO0FBQ2hDLE1BQU1tSSxPQUFPLEdBQUduSSxPQUFPLENBQUNDLElBQUQsQ0FBdkI7QUFDQSxNQUFJLENBQUNrSSxPQUFMLEVBQWM7QUFDWm5JLFdBQU8sQ0FBQ0MsSUFBRCxDQUFQLEdBQWdCLFlBQVk7QUFDMUI0SCxzQkFBZ0IsQ0FBQyxJQUFELENBQWhCO0FBQ0QsS0FGRDtBQUdELEdBSkQsTUFJTztBQUNMN0gsV0FBTyxDQUFDQyxJQUFELENBQVAsR0FBZ0IsWUFBbUI7QUFDakM0SCxzQkFBZ0IsQ0FBQyxJQUFELENBQWhCLENBRGlDLG1DQUFOL0QsSUFBTSx5REFBTkEsSUFBTTtBQUVqQyxhQUFPcUUsT0FBTyxDQUFDckMsS0FBUixDQUFjLElBQWQsRUFBb0JoQyxJQUFwQixDQUFQO0FBQ0QsS0FIRDtBQUlEO0FBQ0Y7O0FBRUQwRCxJQUFJLEdBQUcsZ0JBQXdCLEtBQWR4SCxPQUFjLHVFQUFKLEVBQUk7QUFDN0JrSSxVQUFRLENBQUMsUUFBRCxFQUFXbEksT0FBWCxDQUFSO0FBQ0EsU0FBT3VILE1BQU0sQ0FBQ3ZILE9BQUQsQ0FBYjtBQUNELENBSEQ7O0FBS0EwSCxTQUFTLEdBQUcscUJBQXdCLEtBQWQxSCxPQUFjLHVFQUFKLEVBQUk7QUFDbENrSSxVQUFRLENBQUMsU0FBRCxFQUFZbEksT0FBWixDQUFSO0FBQ0EsU0FBT3lILFdBQVcsQ0FBQ3pILE9BQUQsQ0FBbEI7QUFDRCxDQUhEOztBQUtBLElBQU1vSSxnQkFBZ0IsR0FBRztBQUN2QixtQkFEdUI7QUFFdkIsZUFGdUI7QUFHdkIsbUJBSHVCO0FBSXZCLGNBSnVCO0FBS3ZCLFVBTHVCO0FBTXZCLGNBTnVCLENBQXpCOzs7QUFTQSxTQUFTQyxTQUFULENBQW9CQyxFQUFwQixFQUF3QkMsS0FBeEIsRUFBK0I7QUFDN0IsTUFBTVQsVUFBVSxHQUFHUSxFQUFFLENBQUNFLEdBQUgsQ0FBT0YsRUFBRSxDQUFDRyxNQUFWLENBQW5CO0FBQ0FGLE9BQUssQ0FBQ3RKLE9BQU4sQ0FBYyxVQUFBeUosSUFBSSxFQUFJO0FBQ3BCLFFBQUkvTCxNQUFNLENBQUNtTCxVQUFELEVBQWFZLElBQWIsQ0FBVixFQUE4QjtBQUM1QkosUUFBRSxDQUFDSSxJQUFELENBQUYsR0FBV1osVUFBVSxDQUFDWSxJQUFELENBQXJCO0FBQ0Q7QUFDRixHQUpEO0FBS0Q7O0FBRUQsU0FBU0MsT0FBVCxDQUFrQmpLLElBQWxCLEVBQXdCa0ssVUFBeEIsRUFBb0M7QUFDbEMsTUFBSSxDQUFDQSxVQUFMLEVBQWlCO0FBQ2YsV0FBTyxJQUFQO0FBQ0Q7O0FBRUQsTUFBSTdCLGFBQUkvRyxPQUFKLElBQWUvQixLQUFLLENBQUNDLE9BQU4sQ0FBYzZJLGFBQUkvRyxPQUFKLENBQVl0QixJQUFaLENBQWQsQ0FBbkIsRUFBcUQ7QUFDbkQsV0FBTyxJQUFQO0FBQ0Q7O0FBRURrSyxZQUFVLEdBQUdBLFVBQVUsQ0FBQ0MsT0FBWCxJQUFzQkQsVUFBbkM7O0FBRUEsTUFBSXhNLElBQUksQ0FBQ3dNLFVBQUQsQ0FBUixFQUFzQjtBQUNwQixRQUFJeE0sSUFBSSxDQUFDd00sVUFBVSxDQUFDRSxhQUFYLENBQXlCcEssSUFBekIsQ0FBRCxDQUFSLEVBQTBDO0FBQ3hDLGFBQU8sSUFBUDtBQUNEO0FBQ0QsUUFBSWtLLFVBQVUsQ0FBQ0csS0FBWDtBQUNGSCxjQUFVLENBQUNHLEtBQVgsQ0FBaUIvSSxPQURmO0FBRUYvQixTQUFLLENBQUNDLE9BQU4sQ0FBYzBLLFVBQVUsQ0FBQ0csS0FBWCxDQUFpQi9JLE9BQWpCLENBQXlCdEIsSUFBekIsQ0FBZCxDQUZGLEVBRWlEO0FBQy9DLGFBQU8sSUFBUDtBQUNEO0FBQ0QsV0FBTyxLQUFQO0FBQ0Q7O0FBRUQsTUFBSXRDLElBQUksQ0FBQ3dNLFVBQVUsQ0FBQ2xLLElBQUQsQ0FBWCxDQUFSLEVBQTRCO0FBQzFCLFdBQU8sSUFBUDtBQUNEO0FBQ0QsTUFBTXNLLE1BQU0sR0FBR0osVUFBVSxDQUFDSSxNQUExQjtBQUNBLE1BQUkvSyxLQUFLLENBQUNDLE9BQU4sQ0FBYzhLLE1BQWQsQ0FBSixFQUEyQjtBQUN6QixXQUFPLENBQUMsQ0FBQ0EsTUFBTSxDQUFDQyxJQUFQLENBQVksVUFBQUMsS0FBSyxVQUFJUCxPQUFPLENBQUNqSyxJQUFELEVBQU93SyxLQUFQLENBQVgsRUFBakIsQ0FBVDtBQUNEO0FBQ0Y7O0FBRUQsU0FBU0MsU0FBVCxDQUFvQkMsU0FBcEIsRUFBK0JoTCxLQUEvQixFQUFzQ3dLLFVBQXRDLEVBQWtEO0FBQ2hEeEssT0FBSyxDQUFDYSxPQUFOLENBQWMsVUFBQVAsSUFBSSxFQUFJO0FBQ3BCLFFBQUlpSyxPQUFPLENBQUNqSyxJQUFELEVBQU9rSyxVQUFQLENBQVgsRUFBK0I7QUFDN0JRLGVBQVMsQ0FBQzFLLElBQUQsQ0FBVCxHQUFrQixVQUFVb0YsSUFBVixFQUFnQjtBQUNoQyxlQUFPLEtBQUt1RixHQUFMLElBQVksS0FBS0EsR0FBTCxDQUFTQyxXQUFULENBQXFCNUssSUFBckIsRUFBMkJvRixJQUEzQixDQUFuQjtBQUNELE9BRkQ7QUFHRDtBQUNGLEdBTkQ7QUFPRDs7QUFFRCxTQUFTeUYsZ0JBQVQsQ0FBMkJ4QyxHQUEzQixFQUFnQzZCLFVBQWhDLEVBQTRDO0FBQzFDQSxZQUFVLEdBQUdBLFVBQVUsQ0FBQ0MsT0FBWCxJQUFzQkQsVUFBbkM7QUFDQSxNQUFJWSxZQUFKO0FBQ0EsTUFBSXBOLElBQUksQ0FBQ3dNLFVBQUQsQ0FBUixFQUFzQjtBQUNwQlksZ0JBQVksR0FBR1osVUFBZjtBQUNELEdBRkQsTUFFTztBQUNMWSxnQkFBWSxHQUFHekMsR0FBRyxDQUFDMEMsTUFBSixDQUFXYixVQUFYLENBQWY7QUFDRDtBQUNEQSxZQUFVLEdBQUdZLFlBQVksQ0FBQ3hKLE9BQTFCO0FBQ0EsU0FBTyxDQUFDd0osWUFBRCxFQUFlWixVQUFmLENBQVA7QUFDRDs7QUFFRCxTQUFTYyxTQUFULENBQW9CcEIsRUFBcEIsRUFBd0JxQixRQUF4QixFQUFrQztBQUNoQyxNQUFJMUwsS0FBSyxDQUFDQyxPQUFOLENBQWN5TCxRQUFkLEtBQTJCQSxRQUFRLENBQUNyTCxNQUF4QyxFQUFnRDtBQUM5QyxRQUFNc0wsTUFBTSxHQUFHNU4sTUFBTSxDQUFDZ0IsTUFBUCxDQUFjLElBQWQsQ0FBZjtBQUNBMk0sWUFBUSxDQUFDMUssT0FBVCxDQUFpQixVQUFBNEssUUFBUSxFQUFJO0FBQzNCRCxZQUFNLENBQUNDLFFBQUQsQ0FBTixHQUFtQixJQUFuQjtBQUNELEtBRkQ7QUFHQXZCLE1BQUUsQ0FBQ3dCLFlBQUgsR0FBa0J4QixFQUFFLENBQUNzQixNQUFILEdBQVlBLE1BQTlCO0FBQ0Q7QUFDRjs7QUFFRCxTQUFTRyxVQUFULENBQXFCQyxNQUFyQixFQUE2QmxDLFVBQTdCLEVBQXlDO0FBQ3ZDa0MsUUFBTSxHQUFHLENBQUNBLE1BQU0sSUFBSSxFQUFYLEVBQWVDLEtBQWYsQ0FBcUIsR0FBckIsQ0FBVDtBQUNBLE1BQU01RixHQUFHLEdBQUcyRixNQUFNLENBQUMxTCxNQUFuQjs7QUFFQSxNQUFJK0YsR0FBRyxLQUFLLENBQVosRUFBZTtBQUNieUQsY0FBVSxDQUFDb0MsT0FBWCxHQUFxQkYsTUFBTSxDQUFDLENBQUQsQ0FBM0I7QUFDRCxHQUZELE1BRU8sSUFBSTNGLEdBQUcsS0FBSyxDQUFaLEVBQWU7QUFDcEJ5RCxjQUFVLENBQUNvQyxPQUFYLEdBQXFCRixNQUFNLENBQUMsQ0FBRCxDQUEzQjtBQUNBbEMsY0FBVSxDQUFDcUMsUUFBWCxHQUFzQkgsTUFBTSxDQUFDLENBQUQsQ0FBNUI7QUFDRDtBQUNGOztBQUVELFNBQVNJLFFBQVQsQ0FBbUJ4QixVQUFuQixFQUErQnlCLE9BQS9CLEVBQXdDO0FBQ3RDLE1BQUk5SyxJQUFJLEdBQUdxSixVQUFVLENBQUNySixJQUFYLElBQW1CLEVBQTlCO0FBQ0EsTUFBTStLLE9BQU8sR0FBRzFCLFVBQVUsQ0FBQzBCLE9BQVgsSUFBc0IsRUFBdEM7O0FBRUEsTUFBSSxPQUFPL0ssSUFBUCxLQUFnQixVQUFwQixFQUFnQztBQUM5QixRQUFJO0FBQ0ZBLFVBQUksR0FBR0EsSUFBSSxDQUFDN0MsSUFBTCxDQUFVMk4sT0FBVixDQUFQLENBREUsQ0FDeUI7QUFDNUIsS0FGRCxDQUVFLE9BQU9FLENBQVAsRUFBVTtBQUNWLFVBQUlDLDRFQUFBLENBQVlDLGFBQWhCLEVBQStCO0FBQzdCbkYsZUFBTyxDQUFDQyxJQUFSLENBQWEsd0VBQWIsRUFBdUZoRyxJQUF2RjtBQUNEO0FBQ0Y7QUFDRixHQVJELE1BUU87QUFDTCxRQUFJO0FBQ0Y7QUFDQUEsVUFBSSxHQUFHbUwsSUFBSSxDQUFDQyxLQUFMLENBQVdELElBQUksQ0FBQ0UsU0FBTCxDQUFlckwsSUFBZixDQUFYLENBQVA7QUFDRCxLQUhELENBR0UsT0FBT2dMLENBQVAsRUFBVSxDQUFFO0FBQ2Y7O0FBRUQsTUFBSSxDQUFDL04sYUFBYSxDQUFDK0MsSUFBRCxDQUFsQixFQUEwQjtBQUN4QkEsUUFBSSxHQUFHLEVBQVA7QUFDRDs7QUFFRHZELFFBQU0sQ0FBQ2dELElBQVAsQ0FBWXNMLE9BQVosRUFBcUJyTCxPQUFyQixDQUE2QixVQUFBOEYsVUFBVSxFQUFJO0FBQ3pDLFFBQUlzRixPQUFPLENBQUNRLG1CQUFSLENBQTRCdE0sT0FBNUIsQ0FBb0N3RyxVQUFwQyxNQUFvRCxDQUFDLENBQXJELElBQTBELENBQUNwSSxNQUFNLENBQUM0QyxJQUFELEVBQU93RixVQUFQLENBQXJFLEVBQXlGO0FBQ3ZGeEYsVUFBSSxDQUFDd0YsVUFBRCxDQUFKLEdBQW1CdUYsT0FBTyxDQUFDdkYsVUFBRCxDQUExQjtBQUNEO0FBQ0YsR0FKRDs7QUFNQSxTQUFPeEYsSUFBUDtBQUNEOztBQUVELElBQU11TCxVQUFVLEdBQUcsQ0FBQ0MsTUFBRCxFQUFTMUgsTUFBVCxFQUFpQjJILE9BQWpCLEVBQTBCaFAsTUFBMUIsRUFBa0NpQyxLQUFsQyxFQUF5QyxJQUF6QyxDQUFuQjs7QUFFQSxTQUFTZ04sY0FBVCxDQUF5QmhMLElBQXpCLEVBQStCO0FBQzdCLFNBQU8sU0FBU2lMLFFBQVQsQ0FBbUJDLE1BQW5CLEVBQTJCQyxNQUEzQixFQUFtQztBQUN4QyxRQUFJLEtBQUsvQixHQUFULEVBQWM7QUFDWixXQUFLQSxHQUFMLENBQVNwSixJQUFULElBQWlCa0wsTUFBakIsQ0FEWSxDQUNhO0FBQzFCO0FBQ0YsR0FKRDtBQUtEOztBQUVELFNBQVNFLGFBQVQsQ0FBd0J6QyxVQUF4QixFQUFvQzBDLFlBQXBDLEVBQWtEO0FBQ2hELE1BQU1DLFlBQVksR0FBRzNDLFVBQVUsQ0FBQzRDLFNBQWhDO0FBQ0EsTUFBTUMsVUFBVSxHQUFHN0MsVUFBVSxDQUFDOEMsT0FBOUI7QUFDQSxNQUFNQyxTQUFTLEdBQUcvQyxVQUFVLENBQUNJLE1BQTdCOztBQUVBLE1BQUk0QyxRQUFRLEdBQUdoRCxVQUFVLENBQUNpRCxLQUExQjs7QUFFQSxNQUFJLENBQUNELFFBQUwsRUFBZTtBQUNiaEQsY0FBVSxDQUFDaUQsS0FBWCxHQUFtQkQsUUFBUSxHQUFHLEVBQTlCO0FBQ0Q7O0FBRUQsTUFBTUosU0FBUyxHQUFHLEVBQWxCO0FBQ0EsTUFBSXZOLEtBQUssQ0FBQ0MsT0FBTixDQUFjcU4sWUFBZCxDQUFKLEVBQWlDO0FBQy9CQSxnQkFBWSxDQUFDdE0sT0FBYixDQUFxQixVQUFBNk0sUUFBUSxFQUFJO0FBQy9CTixlQUFTLENBQUNoTixJQUFWLENBQWVzTixRQUFRLENBQUN6TyxPQUFULENBQWlCLFFBQWpCLEVBQThCLElBQTlCLGVBQWY7QUFDQSxVQUFJeU8sUUFBUSxLQUFLLGtCQUFqQixFQUFxQztBQUNuQyxZQUFJN04sS0FBSyxDQUFDQyxPQUFOLENBQWMwTixRQUFkLENBQUosRUFBNkI7QUFDM0JBLGtCQUFRLENBQUNwTixJQUFULENBQWMsTUFBZDtBQUNBb04sa0JBQVEsQ0FBQ3BOLElBQVQsQ0FBYyxPQUFkO0FBQ0QsU0FIRCxNQUdPO0FBQ0xvTixrQkFBUSxDQUFDM0wsSUFBVCxHQUFnQjtBQUNkOEwsZ0JBQUksRUFBRWhCLE1BRFE7QUFFZGxDLG1CQUFPLEVBQUUsRUFGSyxFQUFoQjs7QUFJQStDLGtCQUFRLENBQUM5SixLQUFULEdBQWlCO0FBQ2ZpSyxnQkFBSSxFQUFFLENBQUNoQixNQUFELEVBQVMxSCxNQUFULEVBQWlCMkgsT0FBakIsRUFBMEIvTSxLQUExQixFQUFpQ2pDLE1BQWpDLEVBQXlDZ1EsSUFBekMsQ0FEUztBQUVmbkQsbUJBQU8sRUFBRSxFQUZNLEVBQWpCOztBQUlEO0FBQ0Y7QUFDRixLQWpCRDtBQWtCRDtBQUNELE1BQUlyTSxhQUFhLENBQUNpUCxVQUFELENBQWIsSUFBNkJBLFVBQVUsQ0FBQ0ksS0FBNUMsRUFBbUQ7QUFDakRMLGFBQVMsQ0FBQ2hOLElBQVY7QUFDRThNLGdCQUFZLENBQUM7QUFDWFcsZ0JBQVUsRUFBRUMsY0FBYyxDQUFDVCxVQUFVLENBQUNJLEtBQVosRUFBbUIsSUFBbkIsQ0FEZixFQUFELENBRGQ7OztBQUtEO0FBQ0QsTUFBSTVOLEtBQUssQ0FBQ0MsT0FBTixDQUFjeU4sU0FBZCxDQUFKLEVBQThCO0FBQzVCQSxhQUFTLENBQUMxTSxPQUFWLENBQWtCLFVBQUFrTixRQUFRLEVBQUk7QUFDNUIsVUFBSTNQLGFBQWEsQ0FBQzJQLFFBQUQsQ0FBYixJQUEyQkEsUUFBUSxDQUFDTixLQUF4QyxFQUErQztBQUM3Q0wsaUJBQVMsQ0FBQ2hOLElBQVY7QUFDRThNLG9CQUFZLENBQUM7QUFDWFcsb0JBQVUsRUFBRUMsY0FBYyxDQUFDQyxRQUFRLENBQUNOLEtBQVYsRUFBaUIsSUFBakIsQ0FEZixFQUFELENBRGQ7OztBQUtEO0FBQ0YsS0FSRDtBQVNEO0FBQ0QsU0FBT0wsU0FBUDtBQUNEOztBQUVELFNBQVNZLGFBQVQsQ0FBd0J4UCxHQUF4QixFQUE2Qm1QLElBQTdCLEVBQW1DTSxZQUFuQyxFQUFpREMsSUFBakQsRUFBdUQ7QUFDckQ7QUFDQSxNQUFJck8sS0FBSyxDQUFDQyxPQUFOLENBQWM2TixJQUFkLEtBQXVCQSxJQUFJLENBQUN6TixNQUFMLEtBQWdCLENBQTNDLEVBQThDO0FBQzVDLFdBQU95TixJQUFJLENBQUMsQ0FBRCxDQUFYO0FBQ0Q7QUFDRCxTQUFPQSxJQUFQO0FBQ0Q7O0FBRUQsU0FBU0csY0FBVCxDQUF5QkwsS0FBekIsRUFBK0QsS0FBL0JVLFVBQStCLHVFQUFsQixLQUFrQixLQUFYRCxJQUFXLHVFQUFKLEVBQUk7QUFDN0QsTUFBTUwsVUFBVSxHQUFHLEVBQW5CO0FBQ0EsTUFBSSxDQUFDTSxVQUFMLEVBQWlCO0FBQ2ZOLGNBQVUsQ0FBQ08sS0FBWCxHQUFtQjtBQUNqQlQsVUFBSSxFQUFFaEIsTUFEVztBQUVqQmpKLFdBQUssRUFBRSxFQUZVLEVBQW5COztBQUlBbUssY0FBVSxDQUFDdEMsUUFBWCxHQUFzQixFQUFFO0FBQ3RCb0MsVUFBSSxFQUFFLElBRGM7QUFFcEJqSyxXQUFLLEVBQUUsRUFGYTtBQUdwQm9KLGNBQVEsRUFBRSxrQkFBVUMsTUFBVixFQUFrQkMsTUFBbEIsRUFBMEI7QUFDbEMsWUFBTXhCLE1BQU0sR0FBRzVOLE1BQU0sQ0FBQ2dCLE1BQVAsQ0FBYyxJQUFkLENBQWY7QUFDQW1PLGNBQU0sQ0FBQ2xNLE9BQVAsQ0FBZSxVQUFBNEssUUFBUSxFQUFJO0FBQ3pCRCxnQkFBTSxDQUFDQyxRQUFELENBQU4sR0FBbUIsSUFBbkI7QUFDRCxTQUZEO0FBR0EsYUFBSzRDLE9BQUwsQ0FBYTtBQUNYN0MsZ0JBQU0sRUFBTkEsTUFEVyxFQUFiOztBQUdELE9BWG1CLEVBQXRCOztBQWFEO0FBQ0QsTUFBSTNMLEtBQUssQ0FBQ0MsT0FBTixDQUFjMk4sS0FBZCxDQUFKLEVBQTBCLENBQUU7QUFDMUJBLFNBQUssQ0FBQzVNLE9BQU4sQ0FBYyxVQUFBckMsR0FBRyxFQUFJO0FBQ25CcVAsZ0JBQVUsQ0FBQ3JQLEdBQUQsQ0FBVixHQUFrQjtBQUNoQm1QLFlBQUksRUFBRSxJQURVO0FBRWhCYixnQkFBUSxFQUFFRCxjQUFjLENBQUNyTyxHQUFELENBRlIsRUFBbEI7O0FBSUQsS0FMRDtBQU1ELEdBUEQsTUFPTyxJQUFJSixhQUFhLENBQUNxUCxLQUFELENBQWpCLEVBQTBCLENBQUU7QUFDakM3UCxVQUFNLENBQUNnRCxJQUFQLENBQVk2TSxLQUFaLEVBQW1CNU0sT0FBbkIsQ0FBMkIsVUFBQXJDLEdBQUcsRUFBSTtBQUNoQyxVQUFNOFAsSUFBSSxHQUFHYixLQUFLLENBQUNqUCxHQUFELENBQWxCO0FBQ0EsVUFBSUosYUFBYSxDQUFDa1EsSUFBRCxDQUFqQixFQUF5QixDQUFFO0FBQ3pCLFlBQUk1SyxLQUFLLEdBQUc0SyxJQUFJLENBQUM3RCxPQUFqQjtBQUNBLFlBQUl6TSxJQUFJLENBQUMwRixLQUFELENBQVIsRUFBaUI7QUFDZkEsZUFBSyxHQUFHQSxLQUFLLEVBQWI7QUFDRDs7QUFFRDRLLFlBQUksQ0FBQ1gsSUFBTCxHQUFZSyxhQUFhLENBQUN4UCxHQUFELEVBQU04UCxJQUFJLENBQUNYLElBQVgsQ0FBekI7O0FBRUFFLGtCQUFVLENBQUNyUCxHQUFELENBQVYsR0FBa0I7QUFDaEJtUCxjQUFJLEVBQUVqQixVQUFVLENBQUN2TSxPQUFYLENBQW1CbU8sSUFBSSxDQUFDWCxJQUF4QixNQUFrQyxDQUFDLENBQW5DLEdBQXVDVyxJQUFJLENBQUNYLElBQTVDLEdBQW1ELElBRHpDO0FBRWhCakssZUFBSyxFQUFMQSxLQUZnQjtBQUdoQm9KLGtCQUFRLEVBQUVELGNBQWMsQ0FBQ3JPLEdBQUQsQ0FIUixFQUFsQjs7QUFLRCxPQWJELE1BYU8sQ0FBRTtBQUNQLFlBQU1tUCxJQUFJLEdBQUdLLGFBQWEsQ0FBQ3hQLEdBQUQsRUFBTThQLElBQU4sQ0FBMUI7QUFDQVQsa0JBQVUsQ0FBQ3JQLEdBQUQsQ0FBVixHQUFrQjtBQUNoQm1QLGNBQUksRUFBRWpCLFVBQVUsQ0FBQ3ZNLE9BQVgsQ0FBbUJ3TixJQUFuQixNQUE2QixDQUFDLENBQTlCLEdBQWtDQSxJQUFsQyxHQUF5QyxJQUQvQjtBQUVoQmIsa0JBQVEsRUFBRUQsY0FBYyxDQUFDck8sR0FBRCxDQUZSLEVBQWxCOztBQUlEO0FBQ0YsS0F0QkQ7QUF1QkQ7QUFDRCxTQUFPcVAsVUFBUDtBQUNEOztBQUVELFNBQVNVLFNBQVQsQ0FBb0IxRSxLQUFwQixFQUEyQjtBQUN6QjtBQUNBLE1BQUk7QUFDRkEsU0FBSyxDQUFDMkUsRUFBTixHQUFXbEMsSUFBSSxDQUFDQyxLQUFMLENBQVdELElBQUksQ0FBQ0UsU0FBTCxDQUFlM0MsS0FBZixDQUFYLENBQVg7QUFDRCxHQUZELENBRUUsT0FBT3NDLENBQVAsRUFBVSxDQUFFOztBQUVkdEMsT0FBSyxDQUFDNEUsZUFBTixHQUF3QmhRLElBQXhCO0FBQ0FvTCxPQUFLLENBQUM2RSxjQUFOLEdBQXVCalEsSUFBdkI7O0FBRUFvTCxPQUFLLENBQUM4RSxNQUFOLEdBQWU5RSxLQUFLLENBQUM4RSxNQUFOLElBQWdCLEVBQS9COztBQUVBLE1BQUksQ0FBQ3BRLE1BQU0sQ0FBQ3NMLEtBQUQsRUFBUSxRQUFSLENBQVgsRUFBOEI7QUFDNUJBLFNBQUssQ0FBQytFLE1BQU4sR0FBZSxFQUFmO0FBQ0Q7O0FBRUQsTUFBSXJRLE1BQU0sQ0FBQ3NMLEtBQUQsRUFBUSxVQUFSLENBQVYsRUFBK0I7QUFDN0JBLFNBQUssQ0FBQytFLE1BQU4sR0FBZSxPQUFPL0UsS0FBSyxDQUFDK0UsTUFBYixLQUF3QixRQUF4QixHQUFtQy9FLEtBQUssQ0FBQytFLE1BQXpDLEdBQWtELEVBQWpFO0FBQ0EvRSxTQUFLLENBQUMrRSxNQUFOLENBQWFDLFFBQWIsR0FBd0JoRixLQUFLLENBQUNnRixRQUE5QjtBQUNEOztBQUVELE1BQUl6USxhQUFhLENBQUN5TCxLQUFLLENBQUMrRSxNQUFQLENBQWpCLEVBQWlDO0FBQy9CL0UsU0FBSyxDQUFDOEUsTUFBTixHQUFlL1EsTUFBTSxDQUFDc0csTUFBUCxDQUFjLEVBQWQsRUFBa0IyRixLQUFLLENBQUM4RSxNQUF4QixFQUFnQzlFLEtBQUssQ0FBQytFLE1BQXRDLENBQWY7QUFDRDs7QUFFRCxTQUFPL0UsS0FBUDtBQUNEOztBQUVELFNBQVNpRixhQUFULENBQXdCNUUsRUFBeEIsRUFBNEI2RSxjQUE1QixFQUE0QztBQUMxQyxNQUFJOUMsT0FBTyxHQUFHL0IsRUFBZDtBQUNBNkUsZ0JBQWMsQ0FBQ2xPLE9BQWYsQ0FBdUIsVUFBQW1PLGFBQWEsRUFBSTtBQUN0QyxRQUFNQyxRQUFRLEdBQUdELGFBQWEsQ0FBQyxDQUFELENBQTlCO0FBQ0EsUUFBTXRMLEtBQUssR0FBR3NMLGFBQWEsQ0FBQyxDQUFELENBQTNCO0FBQ0EsUUFBSUMsUUFBUSxJQUFJLE9BQU92TCxLQUFQLEtBQWlCLFdBQWpDLEVBQThDLENBQUU7QUFDOUMsVUFBTXdMLFFBQVEsR0FBR0YsYUFBYSxDQUFDLENBQUQsQ0FBOUI7QUFDQSxVQUFNRyxTQUFTLEdBQUdILGFBQWEsQ0FBQyxDQUFELENBQS9COztBQUVBLFVBQU1JLElBQUksR0FBR0gsUUFBUSxHQUFHL0UsRUFBRSxDQUFDbUYsV0FBSCxDQUFlSixRQUFmLEVBQXlCaEQsT0FBekIsQ0FBSCxHQUF1Q0EsT0FBNUQ7O0FBRUEsVUFBSWhILE1BQU0sQ0FBQ3FLLFNBQVAsQ0FBaUJGLElBQWpCLENBQUosRUFBNEI7QUFDMUJuRCxlQUFPLEdBQUd2SSxLQUFWO0FBQ0QsT0FGRCxNQUVPLElBQUksQ0FBQ3dMLFFBQUwsRUFBZTtBQUNwQmpELGVBQU8sR0FBR21ELElBQUksQ0FBQzFMLEtBQUQsQ0FBZDtBQUNELE9BRk0sTUFFQTtBQUNMLFlBQUk3RCxLQUFLLENBQUNDLE9BQU4sQ0FBY3NQLElBQWQsQ0FBSixFQUF5QjtBQUN2Qm5ELGlCQUFPLEdBQUdtRCxJQUFJLENBQUN2RSxJQUFMLENBQVUsVUFBQTBFLFFBQVEsRUFBSTtBQUM5QixtQkFBT3JGLEVBQUUsQ0FBQ21GLFdBQUgsQ0FBZUgsUUFBZixFQUF5QkssUUFBekIsTUFBdUM3TCxLQUE5QztBQUNELFdBRlMsQ0FBVjtBQUdELFNBSkQsTUFJTyxJQUFJdEYsYUFBYSxDQUFDZ1IsSUFBRCxDQUFqQixFQUF5QjtBQUM5Qm5ELGlCQUFPLEdBQUdyTyxNQUFNLENBQUNnRCxJQUFQLENBQVl3TyxJQUFaLEVBQWtCdkUsSUFBbEIsQ0FBdUIsVUFBQTJFLE9BQU8sRUFBSTtBQUMxQyxtQkFBT3RGLEVBQUUsQ0FBQ21GLFdBQUgsQ0FBZUgsUUFBZixFQUF5QkUsSUFBSSxDQUFDSSxPQUFELENBQTdCLE1BQTRDOUwsS0FBbkQ7QUFDRCxXQUZTLENBQVY7QUFHRCxTQUpNLE1BSUE7QUFDTHdELGlCQUFPLENBQUNLLEtBQVIsQ0FBYyxpQkFBZCxFQUFpQzZILElBQWpDO0FBQ0Q7QUFDRjs7QUFFRCxVQUFJRCxTQUFKLEVBQWU7QUFDYmxELGVBQU8sR0FBRy9CLEVBQUUsQ0FBQ21GLFdBQUgsQ0FBZUYsU0FBZixFQUEwQmxELE9BQTFCLENBQVY7QUFDRDtBQUNGO0FBQ0YsR0EvQkQ7QUFnQ0EsU0FBT0EsT0FBUDtBQUNEOztBQUVELFNBQVN3RCxpQkFBVCxDQUE0QnZGLEVBQTVCLEVBQWdDd0YsS0FBaEMsRUFBdUM3RixLQUF2QyxFQUE4QztBQUM1QyxNQUFNOEYsUUFBUSxHQUFHLEVBQWpCOztBQUVBLE1BQUk5UCxLQUFLLENBQUNDLE9BQU4sQ0FBYzRQLEtBQWQsS0FBd0JBLEtBQUssQ0FBQ3hQLE1BQWxDLEVBQTBDO0FBQ3hDOzs7Ozs7Ozs7OztBQVdBd1AsU0FBSyxDQUFDN08sT0FBTixDQUFjLFVBQUNvTyxRQUFELEVBQVcxTyxLQUFYLEVBQXFCO0FBQ2pDLFVBQUksT0FBTzBPLFFBQVAsS0FBb0IsUUFBeEIsRUFBa0M7QUFDaEMsWUFBSSxDQUFDQSxRQUFMLEVBQWUsQ0FBRTtBQUNmVSxrQkFBUSxDQUFDLE1BQU1wUCxLQUFQLENBQVIsR0FBd0IySixFQUF4QjtBQUNELFNBRkQsTUFFTztBQUNMLGNBQUkrRSxRQUFRLEtBQUssUUFBakIsRUFBMkIsQ0FBRTtBQUMzQlUsb0JBQVEsQ0FBQyxNQUFNcFAsS0FBUCxDQUFSLEdBQXdCc0osS0FBeEI7QUFDRCxXQUZELE1BRU8sSUFBSW9GLFFBQVEsQ0FBQzlPLE9BQVQsQ0FBaUIsU0FBakIsTUFBZ0MsQ0FBcEMsRUFBdUMsQ0FBRTtBQUM5Q3dQLG9CQUFRLENBQUMsTUFBTXBQLEtBQVAsQ0FBUixHQUF3QjJKLEVBQUUsQ0FBQ21GLFdBQUgsQ0FBZUosUUFBUSxDQUFDaFEsT0FBVCxDQUFpQixTQUFqQixFQUE0QixFQUE1QixDQUFmLEVBQWdENEssS0FBaEQsQ0FBeEI7QUFDRCxXQUZNLE1BRUE7QUFDTDhGLG9CQUFRLENBQUMsTUFBTXBQLEtBQVAsQ0FBUixHQUF3QjJKLEVBQUUsQ0FBQ21GLFdBQUgsQ0FBZUosUUFBZixDQUF4QjtBQUNEO0FBQ0Y7QUFDRixPQVpELE1BWU87QUFDTFUsZ0JBQVEsQ0FBQyxNQUFNcFAsS0FBUCxDQUFSLEdBQXdCdU8sYUFBYSxDQUFDNUUsRUFBRCxFQUFLK0UsUUFBTCxDQUFyQztBQUNEO0FBQ0YsS0FoQkQ7QUFpQkQ7O0FBRUQsU0FBT1UsUUFBUDtBQUNEOztBQUVELFNBQVNDLGFBQVQsQ0FBd0JDLEdBQXhCLEVBQTZCO0FBQzNCLE1BQU14UixHQUFHLEdBQUcsRUFBWjtBQUNBLE9BQUssSUFBSTRCLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUc0UCxHQUFHLENBQUMzUCxNQUF4QixFQUFnQ0QsQ0FBQyxFQUFqQyxFQUFxQztBQUNuQyxRQUFNNlAsT0FBTyxHQUFHRCxHQUFHLENBQUM1UCxDQUFELENBQW5CO0FBQ0E1QixPQUFHLENBQUN5UixPQUFPLENBQUMsQ0FBRCxDQUFSLENBQUgsR0FBa0JBLE9BQU8sQ0FBQyxDQUFELENBQXpCO0FBQ0Q7QUFDRCxTQUFPelIsR0FBUDtBQUNEOztBQUVELFNBQVMwUixnQkFBVCxDQUEyQjdGLEVBQTNCLEVBQStCTCxLQUEvQixFQUFtRixLQUE3Q25FLElBQTZDLHVFQUF0QyxFQUFzQyxLQUFsQ2dLLEtBQWtDLHVFQUExQixFQUEwQixLQUF0Qk0sUUFBc0IsdURBQVpySixVQUFZO0FBQ2pGLE1BQUlzSixlQUFlLEdBQUcsS0FBdEIsQ0FEaUYsQ0FDcEQ7QUFDN0IsTUFBSUQsUUFBSixFQUFjLENBQUU7QUFDZEMsbUJBQWUsR0FBR3BHLEtBQUssQ0FBQ3FHLGFBQU47QUFDaEJyRyxTQUFLLENBQUNxRyxhQUFOLENBQW9CQyxPQURKO0FBRWhCdEcsU0FBSyxDQUFDcUcsYUFBTixDQUFvQkMsT0FBcEIsQ0FBNEJDLE9BQTVCLEtBQXdDLElBRjFDO0FBR0EsUUFBSSxDQUFDMUssSUFBSSxDQUFDeEYsTUFBVixFQUFrQixDQUFFO0FBQ2xCLFVBQUkrUCxlQUFKLEVBQXFCO0FBQ25CLGVBQU8sQ0FBQ3BHLEtBQUQsQ0FBUDtBQUNEO0FBQ0QsYUFBT0EsS0FBSyxDQUFDK0UsTUFBTixDQUFheUIsUUFBYixJQUF5QnhHLEtBQUssQ0FBQytFLE1BQXRDO0FBQ0Q7QUFDRjs7QUFFRCxNQUFNZSxRQUFRLEdBQUdGLGlCQUFpQixDQUFDdkYsRUFBRCxFQUFLd0YsS0FBTCxFQUFZN0YsS0FBWixDQUFsQzs7QUFFQSxNQUFNeUcsR0FBRyxHQUFHLEVBQVo7QUFDQTVLLE1BQUksQ0FBQzdFLE9BQUwsQ0FBYSxVQUFBMFAsR0FBRyxFQUFJO0FBQ2xCLFFBQUlBLEdBQUcsS0FBSyxRQUFaLEVBQXNCO0FBQ3BCLFVBQUk1SixVQUFVLEtBQUssYUFBZixJQUFnQyxDQUFDcUosUUFBckMsRUFBK0MsQ0FBRTtBQUMvQ00sV0FBRyxDQUFDbFEsSUFBSixDQUFTeUosS0FBSyxDQUFDOEUsTUFBTixDQUFhakwsS0FBdEI7QUFDRCxPQUZELE1BRU87QUFDTCxZQUFJc00sUUFBUSxJQUFJLENBQUNDLGVBQWpCLEVBQWtDO0FBQ2hDSyxhQUFHLENBQUNsUSxJQUFKLENBQVN5SixLQUFLLENBQUMrRSxNQUFOLENBQWF5QixRQUFiLENBQXNCLENBQXRCLENBQVQ7QUFDRCxTQUZELE1BRU8sQ0FBRTtBQUNQQyxhQUFHLENBQUNsUSxJQUFKLENBQVN5SixLQUFUO0FBQ0Q7QUFDRjtBQUNGLEtBVkQsTUFVTztBQUNMLFVBQUloSyxLQUFLLENBQUNDLE9BQU4sQ0FBY3lRLEdBQWQsS0FBc0JBLEdBQUcsQ0FBQyxDQUFELENBQUgsS0FBVyxHQUFyQyxFQUEwQztBQUN4Q0QsV0FBRyxDQUFDbFEsSUFBSixDQUFTd1AsYUFBYSxDQUFDVyxHQUFELENBQXRCO0FBQ0QsT0FGRCxNQUVPLElBQUksT0FBT0EsR0FBUCxLQUFlLFFBQWYsSUFBMkJoUyxNQUFNLENBQUNvUixRQUFELEVBQVdZLEdBQVgsQ0FBckMsRUFBc0Q7QUFDM0RELFdBQUcsQ0FBQ2xRLElBQUosQ0FBU3VQLFFBQVEsQ0FBQ1ksR0FBRCxDQUFqQjtBQUNELE9BRk0sTUFFQTtBQUNMRCxXQUFHLENBQUNsUSxJQUFKLENBQVNtUSxHQUFUO0FBQ0Q7QUFDRjtBQUNGLEdBcEJEOztBQXNCQSxTQUFPRCxHQUFQO0FBQ0Q7O0FBRUQsSUFBTUUsSUFBSSxHQUFHLEdBQWI7QUFDQSxJQUFNQyxNQUFNLEdBQUcsR0FBZjs7QUFFQSxTQUFTQyxnQkFBVCxDQUEyQkMsU0FBM0IsRUFBc0NDLE9BQXRDLEVBQStDO0FBQzdDLFNBQVFELFNBQVMsS0FBS0MsT0FBZjs7QUFFSEEsU0FBTyxLQUFLLGNBQVo7O0FBRUVELFdBQVMsS0FBSyxPQUFkO0FBQ0FBLFdBQVMsS0FBSyxLQUhoQixDQUZKOzs7QUFRRDs7QUFFRCxTQUFTRSxXQUFULENBQXNCaEgsS0FBdEIsRUFBNkI7QUFDM0JBLE9BQUssR0FBRzBFLFNBQVMsQ0FBQzFFLEtBQUQsQ0FBakI7O0FBRUE7QUFDQSxNQUFNc0csT0FBTyxHQUFHLENBQUN0RyxLQUFLLENBQUNxRyxhQUFOLElBQXVCckcsS0FBSyxDQUFDOEUsTUFBOUIsRUFBc0N3QixPQUF0RDtBQUNBLE1BQUksQ0FBQ0EsT0FBTCxFQUFjO0FBQ1osV0FBT2pKLE9BQU8sQ0FBQ0MsSUFBUixDQUFhLFNBQWIsQ0FBUDtBQUNEO0FBQ0QsTUFBTTJKLFNBQVMsR0FBR1gsT0FBTyxDQUFDVyxTQUFSLElBQXFCWCxPQUFPLENBQUMsWUFBRCxDQUE5QyxDQVIyQixDQVFtQztBQUM5RCxNQUFJLENBQUNXLFNBQUwsRUFBZ0I7QUFDZCxXQUFPNUosT0FBTyxDQUFDQyxJQUFSLENBQWEsU0FBYixDQUFQO0FBQ0Q7O0FBRUQ7QUFDQSxNQUFNd0osU0FBUyxHQUFHOUcsS0FBSyxDQUFDOEQsSUFBeEI7O0FBRUEsTUFBTTJDLEdBQUcsR0FBRyxFQUFaOztBQUVBUSxXQUFTLENBQUNqUSxPQUFWLENBQWtCLFVBQUFrUSxRQUFRLEVBQUk7QUFDNUIsUUFBSXBELElBQUksR0FBR29ELFFBQVEsQ0FBQyxDQUFELENBQW5CO0FBQ0EsUUFBTUMsV0FBVyxHQUFHRCxRQUFRLENBQUMsQ0FBRCxDQUE1Qjs7QUFFQSxRQUFNZixRQUFRLEdBQUdyQyxJQUFJLENBQUNzRCxNQUFMLENBQVksQ0FBWixNQUFtQlIsTUFBcEM7QUFDQTlDLFFBQUksR0FBR3FDLFFBQVEsR0FBR3JDLElBQUksQ0FBQ3ZMLEtBQUwsQ0FBVyxDQUFYLENBQUgsR0FBbUJ1TCxJQUFsQztBQUNBLFFBQU11RCxNQUFNLEdBQUd2RCxJQUFJLENBQUNzRCxNQUFMLENBQVksQ0FBWixNQUFtQlQsSUFBbEM7QUFDQTdDLFFBQUksR0FBR3VELE1BQU0sR0FBR3ZELElBQUksQ0FBQ3ZMLEtBQUwsQ0FBVyxDQUFYLENBQUgsR0FBbUJ1TCxJQUFoQzs7QUFFQSxRQUFJcUQsV0FBVyxJQUFJTixnQkFBZ0IsQ0FBQ0MsU0FBRCxFQUFZaEQsSUFBWixDQUFuQyxFQUFzRDtBQUNwRHFELGlCQUFXLENBQUNuUSxPQUFaLENBQW9CLFVBQUFzUSxVQUFVLEVBQUk7QUFDaEMsWUFBTXhLLFVBQVUsR0FBR3dLLFVBQVUsQ0FBQyxDQUFELENBQTdCO0FBQ0EsWUFBSXhLLFVBQUosRUFBZ0I7QUFDZCxjQUFJeUssVUFBVSxHQUFHLEtBQUksQ0FBQ25HLEdBQXRCO0FBQ0E7QUFDRW1HLG9CQUFVLENBQUNDLFFBQVgsQ0FBb0JDLE9BQXBCO0FBQ0FGLG9CQUFVLENBQUNHLE9BRFg7QUFFQUgsb0JBQVUsQ0FBQ0csT0FBWCxDQUFtQkEsT0FIckI7QUFJRSxXQUFFO0FBQ0ZILHNCQUFVLEdBQUdBLFVBQVUsQ0FBQ0csT0FBWCxDQUFtQkEsT0FBaEM7QUFDRDtBQUNELGNBQUk1SyxVQUFVLEtBQUssT0FBbkIsRUFBNEI7QUFDMUJ5SyxzQkFBVSxDQUFDbkksS0FBWCxDQUFpQnZCLEtBQWpCLENBQXVCMEosVUFBdkI7QUFDRXJCLDRCQUFnQjtBQUNkLGlCQUFJLENBQUM5RSxHQURTO0FBRWRwQixpQkFGYztBQUdkc0gsc0JBQVUsQ0FBQyxDQUFELENBSEk7QUFJZEEsc0JBQVUsQ0FBQyxDQUFELENBSkk7QUFLZG5CLG9CQUxjO0FBTWRySixzQkFOYyxDQURsQjs7QUFTQTtBQUNEO0FBQ0QsY0FBTTZLLE9BQU8sR0FBR0osVUFBVSxDQUFDekssVUFBRCxDQUExQjtBQUNBLGNBQUksQ0FBQzNJLElBQUksQ0FBQ3dULE9BQUQsQ0FBVCxFQUFvQjtBQUNsQixrQkFBTSxJQUFJQyxLQUFKLGdCQUFrQjlLLFVBQWxCLHdCQUFOO0FBQ0Q7QUFDRCxjQUFJdUssTUFBSixFQUFZO0FBQ1YsZ0JBQUlNLE9BQU8sQ0FBQ0UsSUFBWixFQUFrQjtBQUNoQjtBQUNEO0FBQ0RGLG1CQUFPLENBQUNFLElBQVIsR0FBZSxJQUFmO0FBQ0Q7QUFDRHBCLGFBQUcsQ0FBQ2xRLElBQUosQ0FBU29SLE9BQU8sQ0FBQzlKLEtBQVIsQ0FBYzBKLFVBQWQsRUFBMEJyQixnQkFBZ0I7QUFDakQsZUFBSSxDQUFDOUUsR0FENEM7QUFFakRwQixlQUZpRDtBQUdqRHNILG9CQUFVLENBQUMsQ0FBRCxDQUh1QztBQUlqREEsb0JBQVUsQ0FBQyxDQUFELENBSnVDO0FBS2pEbkIsa0JBTGlEO0FBTWpEckosb0JBTmlELENBQTFDLENBQVQ7O0FBUUQ7QUFDRixPQTFDRDtBQTJDRDtBQUNGLEdBdEREOztBQXdEQTtBQUNFZ0ssV0FBUyxLQUFLLE9BQWQ7QUFDQUwsS0FBRyxDQUFDcFEsTUFBSixLQUFlLENBRGY7QUFFQSxTQUFPb1EsR0FBRyxDQUFDLENBQUQsQ0FBVixLQUFrQixXQUhwQjtBQUlFO0FBQ0EsV0FBT0EsR0FBRyxDQUFDLENBQUQsQ0FBVjtBQUNEO0FBQ0Y7O0FBRUQsSUFBTXRRLEtBQUssR0FBRztBQUNaLFFBRFk7QUFFWixRQUZZO0FBR1osU0FIWTtBQUlaLGdCQUpZLENBQWQ7OztBQU9BLFNBQVMyUixZQUFULENBQXVCekgsRUFBdkI7OztBQUdHLEtBRkRDLEtBRUMsU0FGREEsS0FFQyxDQUREeUgsUUFDQyxTQUREQSxRQUNDO0FBQ0QsTUFBSTFILEVBQUUsQ0FBQ21ILFFBQUgsQ0FBWVEsS0FBaEIsRUFBdUI7QUFDckJsSixpQkFBSTlLLFNBQUosQ0FBY2lVLE1BQWQsR0FBdUI1SCxFQUFFLENBQUNtSCxRQUFILENBQVlRLEtBQW5DO0FBQ0Q7O0FBRURsSixlQUFJOUssU0FBSixDQUFja1UsTUFBZCxHQUF1QixPQUF2Qjs7QUFFQXBKLGVBQUltQyxLQUFKLENBQVU7QUFDUmtILGdCQURRLDBCQUNRO0FBQ2QsVUFBSSxDQUFDLEtBQUtYLFFBQUwsQ0FBY2hILE1BQW5CLEVBQTJCO0FBQ3pCO0FBQ0Q7O0FBRUQsV0FBS0EsTUFBTCxHQUFjLEtBQUtnSCxRQUFMLENBQWNoSCxNQUE1Qjs7QUFFQSxXQUFLRCxHQUFMO0FBQ0VqSixZQUFJLEVBQUUsRUFEUjtBQUVHLFdBQUtrSixNQUZSLEVBRWlCLEtBQUtnSCxRQUFMLENBQWMzSCxVQUYvQjs7O0FBS0EsV0FBS3VJLE1BQUwsR0FBYyxLQUFLWixRQUFMLENBQWMzSCxVQUE1Qjs7QUFFQSxhQUFPLEtBQUsySCxRQUFMLENBQWNoSCxNQUFyQjtBQUNBLGFBQU8sS0FBS2dILFFBQUwsQ0FBYzNILFVBQXJCOztBQUVBLFVBQUksS0FBS1csTUFBTCxLQUFnQixLQUFwQixFQUEyQjtBQUN6QnVILGdCQUFRLENBQUMsSUFBRCxDQUFSO0FBQ0EzSCxpQkFBUyxDQUFDLElBQUQsRUFBT0UsS0FBUCxDQUFUO0FBQ0Q7QUFDRixLQXRCTyxFQUFWOzs7QUF5QkEsTUFBTStILFVBQVUsR0FBRztBQUNqQkMsWUFEaUIsb0JBQ1B6TSxJQURPLEVBQ0Q7QUFDZCxVQUFJLEtBQUt1RixHQUFULEVBQWMsQ0FBRTtBQUNkO0FBQ0Q7QUFDRDtBQUNFLFlBQUksQ0FBQ3hHLEVBQUUsQ0FBQzJOLE9BQUgsQ0FBVyxVQUFYLENBQUwsRUFBNkIsQ0FBRTtBQUM3QmxMLGlCQUFPLENBQUNLLEtBQVIsQ0FBYyxxREFBZDtBQUNEO0FBQ0Y7O0FBRUQsV0FBSzBELEdBQUwsR0FBV2YsRUFBWDs7QUFFQSxXQUFLZSxHQUFMLENBQVNiLEdBQVQsR0FBZTtBQUNiaUksV0FBRyxFQUFFLElBRFEsRUFBZjs7O0FBSUEsV0FBS3BILEdBQUwsQ0FBU2dILE1BQVQsR0FBa0IsSUFBbEI7QUFDQTtBQUNBLFdBQUtoSCxHQUFMLENBQVNxSCxVQUFULEdBQXNCLEtBQUtBLFVBQTNCOztBQUVBLFdBQUtySCxHQUFMLENBQVNzSCxVQUFULEdBQXNCLElBQXRCO0FBQ0EsV0FBS3RILEdBQUwsQ0FBU0MsV0FBVCxDQUFxQixTQUFyQixFQUFnQ3hGLElBQWhDOztBQUVBLFdBQUt1RixHQUFMLENBQVNDLFdBQVQsQ0FBcUIsVUFBckIsRUFBaUN4RixJQUFqQztBQUNELEtBekJnQixFQUFuQjs7O0FBNEJBO0FBQ0F3TSxZQUFVLENBQUNJLFVBQVgsR0FBd0JwSSxFQUFFLENBQUNtSCxRQUFILENBQVlpQixVQUFaLElBQTBCLEVBQWxEO0FBQ0E7QUFDQSxNQUFNcEcsT0FBTyxHQUFHaEMsRUFBRSxDQUFDbUgsUUFBSCxDQUFZbkYsT0FBNUI7QUFDQSxNQUFJQSxPQUFKLEVBQWE7QUFDWHRPLFVBQU0sQ0FBQ2dELElBQVAsQ0FBWXNMLE9BQVosRUFBcUJyTCxPQUFyQixDQUE2QixVQUFBZ0IsSUFBSSxFQUFJO0FBQ25DcVEsZ0JBQVUsQ0FBQ3JRLElBQUQsQ0FBVixHQUFtQnFLLE9BQU8sQ0FBQ3JLLElBQUQsQ0FBMUI7QUFDRCxLQUZEO0FBR0Q7O0FBRURrSixXQUFTLENBQUNtSCxVQUFELEVBQWFsUyxLQUFiLENBQVQ7O0FBRUEsU0FBT2tTLFVBQVA7QUFDRDs7QUFFRCxJQUFNL0gsS0FBSyxHQUFHLENBQUMsV0FBRCxFQUFjLHNCQUFkLEVBQXNDLGlCQUF0QyxDQUFkOztBQUVBLFNBQVNxSSxhQUFULENBQXdCdEksRUFBeEIsRUFBNEJ1SSxNQUE1QixFQUFvQztBQUNsQyxNQUFNQyxTQUFTLEdBQUd4SSxFQUFFLENBQUN3SSxTQUFyQjtBQUNBO0FBQ0EsT0FBSyxJQUFJelMsQ0FBQyxHQUFHeVMsU0FBUyxDQUFDeFMsTUFBVixHQUFtQixDQUFoQyxFQUFtQ0QsQ0FBQyxJQUFJLENBQXhDLEVBQTJDQSxDQUFDLEVBQTVDLEVBQWdEO0FBQzlDLFFBQU0wUyxPQUFPLEdBQUdELFNBQVMsQ0FBQ3pTLENBQUQsQ0FBekI7QUFDQSxRQUFJMFMsT0FBTyxDQUFDVixNQUFSLENBQWVuRyxPQUFmLEtBQTJCMkcsTUFBL0IsRUFBdUM7QUFDckMsYUFBT0UsT0FBUDtBQUNEO0FBQ0Y7QUFDRDtBQUNBLE1BQUlDLFFBQUo7QUFDQSxPQUFLLElBQUkzUyxFQUFDLEdBQUd5UyxTQUFTLENBQUN4UyxNQUFWLEdBQW1CLENBQWhDLEVBQW1DRCxFQUFDLElBQUksQ0FBeEMsRUFBMkNBLEVBQUMsRUFBNUMsRUFBZ0Q7QUFDOUMyUyxZQUFRLEdBQUdKLGFBQWEsQ0FBQ0UsU0FBUyxDQUFDelMsRUFBRCxDQUFWLEVBQWV3UyxNQUFmLENBQXhCO0FBQ0EsUUFBSUcsUUFBSixFQUFjO0FBQ1osYUFBT0EsUUFBUDtBQUNEO0FBQ0Y7QUFDRjs7QUFFRCxTQUFTMUYsWUFBVCxDQUF1QnRMLE9BQXZCLEVBQWdDO0FBQzlCLFNBQU9pUixRQUFRLENBQUNqUixPQUFELENBQWY7QUFDRDs7QUFFRCxTQUFTa1IsTUFBVCxHQUFtQjtBQUNqQixTQUFPLENBQUMsQ0FBQyxLQUFLQyxLQUFkO0FBQ0Q7O0FBRUQsU0FBU0MsWUFBVCxDQUF1QnBFLE1BQXZCLEVBQStCO0FBQzdCLE9BQUtoRixZQUFMLENBQWtCLEtBQWxCLEVBQXlCZ0YsTUFBekI7QUFDRDs7QUFFRCxTQUFTZ0QsUUFBVCxDQUFtQjFILEVBQW5CLEVBQXVCO0FBQ3JCLE1BQU1SLFVBQVUsR0FBR1EsRUFBRSxDQUFDK0gsTUFBdEI7QUFDQXJVLFFBQU0sQ0FBQ3FWLGNBQVAsQ0FBc0IvSSxFQUF0QixFQUEwQixPQUExQixFQUFtQztBQUNqQ2dKLE9BRGlDLGlCQUMxQjtBQUNMLFVBQU1DLEtBQUssR0FBRyxFQUFkO0FBQ0EsVUFBTUMsVUFBVSxHQUFHMUosVUFBVSxDQUFDMkosbUJBQVgsQ0FBK0IsVUFBL0IsQ0FBbkI7QUFDQUQsZ0JBQVUsQ0FBQ3ZTLE9BQVgsQ0FBbUIsVUFBQXlTLFNBQVMsRUFBSTtBQUM5QixZQUFNQyxHQUFHLEdBQUdELFNBQVMsQ0FBQ25ELE9BQVYsQ0FBa0JvRCxHQUE5QjtBQUNBSixhQUFLLENBQUNJLEdBQUQsQ0FBTCxHQUFhRCxTQUFTLENBQUNySSxHQUFWLElBQWlCcUksU0FBOUI7QUFDRCxPQUhEO0FBSUEsVUFBTUUsYUFBYSxHQUFHOUosVUFBVSxDQUFDMkosbUJBQVgsQ0FBK0IsaUJBQS9CLENBQXRCO0FBQ0FHLG1CQUFhLENBQUMzUyxPQUFkLENBQXNCLFVBQUF5UyxTQUFTLEVBQUk7QUFDakMsWUFBTUMsR0FBRyxHQUFHRCxTQUFTLENBQUNuRCxPQUFWLENBQWtCb0QsR0FBOUI7QUFDQSxZQUFJLENBQUNKLEtBQUssQ0FBQ0ksR0FBRCxDQUFWLEVBQWlCO0FBQ2ZKLGVBQUssQ0FBQ0ksR0FBRCxDQUFMLEdBQWEsRUFBYjtBQUNEO0FBQ0RKLGFBQUssQ0FBQ0ksR0FBRCxDQUFMLENBQVduVCxJQUFYLENBQWdCa1QsU0FBUyxDQUFDckksR0FBVixJQUFpQnFJLFNBQWpDO0FBQ0QsT0FORDtBQU9BLGFBQU9ILEtBQVA7QUFDRCxLQWpCZ0MsRUFBbkM7O0FBbUJEOztBQUVELFNBQVNNLFVBQVQsQ0FBcUI1SixLQUFyQixFQUE0Qjs7OztBQUl0QkEsT0FBSyxDQUFDK0UsTUFBTixJQUFnQi9FLEtBQUssQ0FBQ25HLEtBSkEsQ0FFeEIrTyxNQUZ3QixTQUV4QkEsTUFGd0IsQ0FHeEJqSSxVQUh3QixTQUd4QkEsVUFId0IsRUFJTzs7QUFFakMsTUFBSW9JLFFBQUo7O0FBRUEsTUFBSUgsTUFBSixFQUFZO0FBQ1ZHLFlBQVEsR0FBR0osYUFBYSxDQUFDLEtBQUt2SCxHQUFOLEVBQVd3SCxNQUFYLENBQXhCO0FBQ0Q7O0FBRUQsTUFBSSxDQUFDRyxRQUFMLEVBQWU7QUFDYkEsWUFBUSxHQUFHLEtBQUszSCxHQUFoQjtBQUNEOztBQUVEVCxZQUFVLENBQUNrSixNQUFYLEdBQW9CZCxRQUFwQjtBQUNEOztBQUVELFNBQVNlLFFBQVQsQ0FBbUJ6SixFQUFuQixFQUF1QjtBQUNyQixTQUFPeUgsWUFBWSxDQUFDekgsRUFBRCxFQUFLO0FBQ3RCQyxTQUFLLEVBQUxBLEtBRHNCO0FBRXRCeUgsWUFBUSxFQUFSQSxRQUZzQixFQUFMLENBQW5COztBQUlEOztBQUVELFNBQVNnQyxVQUFULENBQXFCMUosRUFBckIsRUFBeUI7QUFDdkIsU0FBT3lKLFFBQVEsQ0FBQ3pKLEVBQUQsQ0FBZjtBQUNEOztBQUVELFNBQVMySixTQUFULENBQW9CM0osRUFBcEIsRUFBd0I7QUFDdEI0SixLQUFHLENBQUNGLFVBQVUsQ0FBQzFKLEVBQUQsQ0FBWCxDQUFIO0FBQ0EsU0FBT0EsRUFBUDtBQUNEOztBQUVELFNBQVM2SixrQkFBVCxDQUE2QkMsbUJBQTdCOzs7QUFHUSxpRkFBSixFQUFJLENBRk5sQixNQUVNLFNBRk5BLE1BRU0sQ0FETkUsWUFDTSxTQUROQSxZQUNNO0FBQzZCN0gsa0JBQWdCLENBQUN4QyxZQUFELEVBQU1xTCxtQkFBTixDQUQ3QywyREFDQzVJLFlBREQseUJBQ2VaLFVBRGY7O0FBR04sTUFBTTVJLE9BQU87QUFDWHFTLGlCQUFhLEVBQUUsSUFESjtBQUVYQyxrQkFBYyxFQUFFLElBRkw7QUFHUDFKLFlBQVUsQ0FBQzVJLE9BQVgsSUFBc0IsRUFIZixDQUFiOzs7QUFNQTtBQUNFO0FBQ0EsUUFBSTRJLFVBQVUsQ0FBQyxXQUFELENBQVYsSUFBMkJBLFVBQVUsQ0FBQyxXQUFELENBQVYsQ0FBd0I1SSxPQUF2RCxFQUFnRTtBQUM5RGhFLFlBQU0sQ0FBQ3NHLE1BQVAsQ0FBY3RDLE9BQWQsRUFBdUI0SSxVQUFVLENBQUMsV0FBRCxDQUFWLENBQXdCNUksT0FBL0M7QUFDRDtBQUNGOztBQUVELE1BQU11UyxnQkFBZ0IsR0FBRztBQUN2QnZTLFdBQU8sRUFBUEEsT0FEdUI7QUFFdkJULFFBQUksRUFBRTZLLFFBQVEsQ0FBQ3hCLFVBQUQsRUFBYTdCLGFBQUk5SyxTQUFqQixDQUZTO0FBR3ZCdVAsYUFBUyxFQUFFSCxhQUFhLENBQUN6QyxVQUFELEVBQWEwQyxZQUFiLENBSEQ7QUFJdkJXLGNBQVUsRUFBRUMsY0FBYyxDQUFDdEQsVUFBVSxDQUFDaUQsS0FBWixFQUFtQixLQUFuQixFQUEwQmpELFVBQVUsQ0FBQzRKLE1BQXJDLENBSkg7QUFLdkJDLGFBQVMsRUFBRTtBQUNUQyxjQURTLHNCQUNHO0FBQ1YsWUFBTXpHLFVBQVUsR0FBRyxLQUFLQSxVQUF4Qjs7QUFFQSxZQUFNak0sT0FBTyxHQUFHO0FBQ2R5SSxnQkFBTSxFQUFFeUksTUFBTSxDQUFDeFUsSUFBUCxDQUFZLElBQVosSUFBb0IsTUFBcEIsR0FBNkIsV0FEdkI7QUFFZG9MLG9CQUFVLEVBQUUsSUFGRTtBQUdkNkssbUJBQVMsRUFBRTFHLFVBSEcsRUFBaEI7OztBQU1BbEMsa0JBQVUsQ0FBQ2tDLFVBQVUsQ0FBQ08sS0FBWixFQUFtQixJQUFuQixDQUFWOztBQUVBO0FBQ0E0RSxvQkFBWSxDQUFDMVUsSUFBYixDQUFrQixJQUFsQixFQUF3QjtBQUN0Qm1VLGdCQUFNLEVBQUUsS0FBSzFHLFFBRFM7QUFFdEJ2QixvQkFBVSxFQUFFNUksT0FGVSxFQUF4Qjs7O0FBS0E7QUFDQSxhQUFLcUosR0FBTCxHQUFXLElBQUlHLFlBQUosQ0FBaUJ4SixPQUFqQixDQUFYOztBQUVBO0FBQ0EwSixpQkFBUyxDQUFDLEtBQUtMLEdBQU4sRUFBVzRDLFVBQVUsQ0FBQ3RDLFFBQXRCLENBQVQ7O0FBRUE7QUFDQSxhQUFLTixHQUFMLENBQVN1SixNQUFUO0FBQ0QsT0ExQlE7QUEyQlRDLFdBM0JTLG1CQTJCQTtBQUNQO0FBQ0E7QUFDQSxZQUFJLEtBQUt4SixHQUFULEVBQWM7QUFDWixlQUFLQSxHQUFMLENBQVNzSCxVQUFULEdBQXNCLElBQXRCO0FBQ0EsZUFBS3RILEdBQUwsQ0FBU0MsV0FBVCxDQUFxQixTQUFyQjtBQUNBLGVBQUtELEdBQUwsQ0FBU0MsV0FBVCxDQUFxQixTQUFyQjtBQUNEO0FBQ0YsT0FuQ1E7QUFvQ1R3SixjQXBDUyxzQkFvQ0c7QUFDVixhQUFLekosR0FBTCxJQUFZLEtBQUtBLEdBQUwsQ0FBUzBKLFFBQVQsRUFBWjtBQUNELE9BdENRLEVBTFk7O0FBNkN2QkMsaUJBQWEsRUFBRTtBQUNiQyxVQURhLGdCQUNQblAsSUFETyxFQUNEO0FBQ1YsYUFBS3VGLEdBQUwsSUFBWSxLQUFLQSxHQUFMLENBQVNDLFdBQVQsQ0FBcUIsWUFBckIsRUFBbUN4RixJQUFuQyxDQUFaO0FBQ0QsT0FIWTtBQUlib1AsVUFKYSxrQkFJTDtBQUNOLGFBQUs3SixHQUFMLElBQVksS0FBS0EsR0FBTCxDQUFTQyxXQUFULENBQXFCLFlBQXJCLENBQVo7QUFDRCxPQU5ZO0FBT2I2SixZQVBhLGtCQU9MQyxJQVBLLEVBT0M7QUFDWixhQUFLL0osR0FBTCxJQUFZLEtBQUtBLEdBQUwsQ0FBU0MsV0FBVCxDQUFxQixjQUFyQixFQUFxQzhKLElBQXJDLENBQVo7QUFDRCxPQVRZLEVBN0NROztBQXdEdkI5SSxXQUFPLEVBQUU7QUFDUCtJLFNBQUcsRUFBRXhCLFVBREU7QUFFUHlCLFNBQUcsRUFBRXJFLFdBRkUsRUF4RGMsRUFBekI7OztBQTZEQTtBQUNBLE1BQUlyRyxVQUFVLENBQUMySyxlQUFmLEVBQWdDO0FBQzlCaEIsb0JBQWdCLENBQUNnQixlQUFqQixHQUFtQzNLLFVBQVUsQ0FBQzJLLGVBQTlDO0FBQ0Q7O0FBRUQsTUFBSXRWLEtBQUssQ0FBQ0MsT0FBTixDQUFjMEssVUFBVSxDQUFDNEssY0FBekIsQ0FBSixFQUE4QztBQUM1QzVLLGNBQVUsQ0FBQzRLLGNBQVgsQ0FBMEJ2VSxPQUExQixDQUFrQyxVQUFBd1UsVUFBVSxFQUFJO0FBQzlDbEIsc0JBQWdCLENBQUNqSSxPQUFqQixDQUF5Qm1KLFVBQXpCLElBQXVDLFVBQVUzUCxJQUFWLEVBQWdCO0FBQ3JELGVBQU8sS0FBS3VGLEdBQUwsQ0FBU29LLFVBQVQsRUFBcUIzUCxJQUFyQixDQUFQO0FBQ0QsT0FGRDtBQUdELEtBSkQ7QUFLRDs7QUFFRCxNQUFJb04sTUFBSixFQUFZO0FBQ1YsV0FBT3FCLGdCQUFQO0FBQ0Q7QUFDRCxTQUFPLENBQUNBLGdCQUFELEVBQW1CL0ksWUFBbkIsQ0FBUDtBQUNEOztBQUVELFNBQVNrSyxjQUFULENBQXlCdEIsbUJBQXpCLEVBQThDO0FBQzVDLFNBQU9ELGtCQUFrQixDQUFDQyxtQkFBRCxFQUFzQjtBQUM3Q2xCLFVBQU0sRUFBTkEsTUFENkM7QUFFN0NFLGdCQUFZLEVBQVpBLFlBRjZDLEVBQXRCLENBQXpCOztBQUlEOztBQUVELFNBQVN1QyxnQkFBVCxDQUEyQnZCLG1CQUEzQixFQUFnRDtBQUM5QyxTQUFPc0IsY0FBYyxDQUFDdEIsbUJBQUQsQ0FBckI7QUFDRDs7QUFFRCxJQUFNd0IsT0FBTyxHQUFHO0FBQ2QsUUFEYztBQUVkLFFBRmM7QUFHZCxVQUhjLENBQWhCOzs7QUFNQUEsT0FBTyxDQUFDcFYsSUFBUixPQUFBb1YsT0FBTyxFQUFTeEwsZ0JBQVQsQ0FBUDs7QUFFQSxTQUFTeUwsYUFBVCxDQUF3QkMsY0FBeEI7OztBQUdHLEtBRkQ1QyxNQUVDLFNBRkRBLE1BRUMsQ0FEREUsWUFDQyxTQUREQSxZQUNDO0FBQ0QsTUFBTTJDLFdBQVcsR0FBR0osZ0JBQWdCLENBQUNHLGNBQUQsQ0FBcEM7O0FBRUEzSyxXQUFTLENBQUM0SyxXQUFXLENBQUN6SixPQUFiLEVBQXNCc0osT0FBdEIsRUFBK0JFLGNBQS9CLENBQVQ7O0FBRUFDLGFBQVcsQ0FBQ3pKLE9BQVosQ0FBb0IwSixNQUFwQixHQUE2QixVQUFVbFEsSUFBVixFQUFnQjtBQUMzQyxTQUFLdUYsR0FBTCxDQUFTYixHQUFULENBQWF5TCxLQUFiLEdBQXFCblEsSUFBckIsQ0FEMkMsQ0FDaEI7QUFDM0IsU0FBS3VGLEdBQUwsQ0FBU0MsV0FBVCxDQUFxQixRQUFyQixFQUErQnhGLElBQS9CO0FBQ0QsR0FIRDs7QUFLQSxTQUFPaVEsV0FBUDtBQUNEOztBQUVELFNBQVNHLFNBQVQsQ0FBb0JKLGNBQXBCLEVBQW9DO0FBQ2xDLFNBQU9ELGFBQWEsQ0FBQ0MsY0FBRCxFQUFpQjtBQUNuQzVDLFVBQU0sRUFBTkEsTUFEbUM7QUFFbkNFLGdCQUFZLEVBQVpBLFlBRm1DLEVBQWpCLENBQXBCOztBQUlEOztBQUVELFNBQVMrQyxXQUFULENBQXNCTCxjQUF0QixFQUFzQztBQUNwQyxTQUFPSSxTQUFTLENBQUNKLGNBQUQsQ0FBaEI7QUFDRDs7QUFFRCxTQUFTTSxVQUFULENBQXFCTixjQUFyQixFQUFxQztBQUNuQztBQUNFLFdBQU9wTSxTQUFTLENBQUN5TSxXQUFXLENBQUNMLGNBQUQsQ0FBWixDQUFoQjtBQUNEO0FBQ0Y7O0FBRUQsU0FBU08sZUFBVCxDQUEwQnpMLFVBQTFCLEVBQXNDO0FBQ3BDO0FBQ0UsV0FBT2xCLFNBQVMsQ0FBQ2lNLGdCQUFnQixDQUFDL0ssVUFBRCxDQUFqQixDQUFoQjtBQUNEO0FBQ0Y7O0FBRURqRSxLQUFLLENBQUMxRixPQUFOLENBQWMsVUFBQWlILE9BQU8sRUFBSTtBQUN2QnhCLFdBQVMsQ0FBQ3dCLE9BQUQsQ0FBVCxHQUFxQixLQUFyQjtBQUNELENBRkQ7O0FBSUF0QixRQUFRLENBQUMzRixPQUFULENBQWlCLFVBQUFxVixVQUFVLEVBQUk7QUFDN0IsTUFBTUMsT0FBTyxHQUFHN1AsU0FBUyxDQUFDNFAsVUFBRCxDQUFULElBQXlCNVAsU0FBUyxDQUFDNFAsVUFBRCxDQUFULENBQXNCclUsSUFBL0MsR0FBc0R5RSxTQUFTLENBQUM0UCxVQUFELENBQVQsQ0FBc0JyVSxJQUE1RTtBQUNacVUsWUFESjtBQUVBLE1BQUksQ0FBQ3pSLEVBQUUsQ0FBQzJOLE9BQUgsQ0FBVytELE9BQVgsQ0FBTCxFQUEwQjtBQUN4QjdQLGFBQVMsQ0FBQzRQLFVBQUQsQ0FBVCxHQUF3QixLQUF4QjtBQUNEO0FBQ0YsQ0FORDs7QUFRQSxJQUFJRSxHQUFHLEdBQUcsRUFBVjs7QUFFQSxJQUFJLE9BQU9DLEtBQVAsS0FBaUIsV0FBakIsSUFBZ0MsWUFBWSxVQUFoRCxFQUE0RDtBQUMxREQsS0FBRyxHQUFHLElBQUlDLEtBQUosQ0FBVSxFQUFWLEVBQWM7QUFDbEJuRCxPQURrQixlQUNidkUsTUFEYSxFQUNMOU0sSUFESyxFQUNDO0FBQ2pCLFVBQUk4TSxNQUFNLENBQUM5TSxJQUFELENBQVYsRUFBa0I7QUFDaEIsZUFBTzhNLE1BQU0sQ0FBQzlNLElBQUQsQ0FBYjtBQUNEO0FBQ0QsVUFBSXlELE9BQU8sQ0FBQ3pELElBQUQsQ0FBWCxFQUFtQjtBQUNqQixlQUFPeUQsT0FBTyxDQUFDekQsSUFBRCxDQUFkO0FBQ0Q7QUFDRCxVQUFJVSxHQUFHLENBQUNWLElBQUQsQ0FBUCxFQUFlO0FBQ2IsZUFBTytCLFNBQVMsQ0FBQy9CLElBQUQsRUFBT1UsR0FBRyxDQUFDVixJQUFELENBQVYsQ0FBaEI7QUFDRDtBQUNEO0FBQ0UsWUFBSTBHLFFBQVEsQ0FBQzFHLElBQUQsQ0FBWixFQUFvQjtBQUNsQixpQkFBTytCLFNBQVMsQ0FBQy9CLElBQUQsRUFBTzBHLFFBQVEsQ0FBQzFHLElBQUQsQ0FBZixDQUFoQjtBQUNEO0FBQ0QsWUFBSThGLFFBQVEsQ0FBQzlGLElBQUQsQ0FBWixFQUFvQjtBQUNsQixpQkFBTytCLFNBQVMsQ0FBQy9CLElBQUQsRUFBTzhGLFFBQVEsQ0FBQzlGLElBQUQsQ0FBZixDQUFoQjtBQUNEO0FBQ0Y7QUFDRCxVQUFJcUgsUUFBUSxDQUFDckgsSUFBRCxDQUFaLEVBQW9CO0FBQ2xCLGVBQU9xSCxRQUFRLENBQUNySCxJQUFELENBQWY7QUFDRDtBQUNELFVBQUksQ0FBQ3RELE1BQU0sQ0FBQ2tHLEVBQUQsRUFBSzVDLElBQUwsQ0FBUCxJQUFxQixDQUFDdEQsTUFBTSxDQUFDK0gsU0FBRCxFQUFZekUsSUFBWixDQUFoQyxFQUFtRDtBQUNqRDtBQUNEO0FBQ0QsYUFBTytCLFNBQVMsQ0FBQy9CLElBQUQsRUFBT3dGLE9BQU8sQ0FBQ3hGLElBQUQsRUFBTzRDLEVBQUUsQ0FBQzVDLElBQUQsQ0FBVCxDQUFkLENBQWhCO0FBQ0QsS0ExQmlCO0FBMkJsQnlVLE9BM0JrQixlQTJCYjNILE1BM0JhLEVBMkJMOU0sSUEzQkssRUEyQkM2QixLQTNCRCxFQTJCUTtBQUN4QmlMLFlBQU0sQ0FBQzlNLElBQUQsQ0FBTixHQUFlNkIsS0FBZjtBQUNBLGFBQU8sSUFBUDtBQUNELEtBOUJpQixFQUFkLENBQU47O0FBZ0NELENBakNELE1BaUNPO0FBQ0w5RixRQUFNLENBQUNnRCxJQUFQLENBQVkwRSxPQUFaLEVBQXFCekUsT0FBckIsQ0FBNkIsVUFBQWdCLElBQUksRUFBSTtBQUNuQ3VVLE9BQUcsQ0FBQ3ZVLElBQUQsQ0FBSCxHQUFZeUQsT0FBTyxDQUFDekQsSUFBRCxDQUFuQjtBQUNELEdBRkQ7O0FBSUE7QUFDRWpFLFVBQU0sQ0FBQ2dELElBQVAsQ0FBWStHLFFBQVosRUFBc0I5RyxPQUF0QixDQUE4QixVQUFBZ0IsSUFBSSxFQUFJO0FBQ3BDdVUsU0FBRyxDQUFDdlUsSUFBRCxDQUFILEdBQVkrQixTQUFTLENBQUMvQixJQUFELEVBQU84RixRQUFRLENBQUM5RixJQUFELENBQWYsQ0FBckI7QUFDRCxLQUZEO0FBR0FqRSxVQUFNLENBQUNnRCxJQUFQLENBQVkySCxRQUFaLEVBQXNCMUgsT0FBdEIsQ0FBOEIsVUFBQWdCLElBQUksRUFBSTtBQUNwQ3VVLFNBQUcsQ0FBQ3ZVLElBQUQsQ0FBSCxHQUFZK0IsU0FBUyxDQUFDL0IsSUFBRCxFQUFPOEYsUUFBUSxDQUFDOUYsSUFBRCxDQUFmLENBQXJCO0FBQ0QsS0FGRDtBQUdEOztBQUVEakUsUUFBTSxDQUFDZ0QsSUFBUCxDQUFZc0ksUUFBWixFQUFzQnJJLE9BQXRCLENBQThCLFVBQUFnQixJQUFJLEVBQUk7QUFDcEN1VSxPQUFHLENBQUN2VSxJQUFELENBQUgsR0FBWXFILFFBQVEsQ0FBQ3JILElBQUQsQ0FBcEI7QUFDRCxHQUZEOztBQUlBakUsUUFBTSxDQUFDZ0QsSUFBUCxDQUFZMkIsR0FBWixFQUFpQjFCLE9BQWpCLENBQXlCLFVBQUFnQixJQUFJLEVBQUk7QUFDL0J1VSxPQUFHLENBQUN2VSxJQUFELENBQUgsR0FBWStCLFNBQVMsQ0FBQy9CLElBQUQsRUFBT1UsR0FBRyxDQUFDVixJQUFELENBQVYsQ0FBckI7QUFDRCxHQUZEOztBQUlBakUsUUFBTSxDQUFDZ0QsSUFBUCxDQUFZNkQsRUFBWixFQUFnQjVELE9BQWhCLENBQXdCLFVBQUFnQixJQUFJLEVBQUk7QUFDOUIsUUFBSXRELE1BQU0sQ0FBQ2tHLEVBQUQsRUFBSzVDLElBQUwsQ0FBTixJQUFvQnRELE1BQU0sQ0FBQytILFNBQUQsRUFBWXpFLElBQVosQ0FBOUIsRUFBaUQ7QUFDL0N1VSxTQUFHLENBQUN2VSxJQUFELENBQUgsR0FBWStCLFNBQVMsQ0FBQy9CLElBQUQsRUFBT3dGLE9BQU8sQ0FBQ3hGLElBQUQsRUFBTzRDLEVBQUUsQ0FBQzVDLElBQUQsQ0FBVCxDQUFkLENBQXJCO0FBQ0Q7QUFDRixHQUpEO0FBS0Q7O0FBRUQ0QyxFQUFFLENBQUNvUCxTQUFILEdBQWVBLFNBQWY7QUFDQXBQLEVBQUUsQ0FBQ3VSLFVBQUgsR0FBZ0JBLFVBQWhCO0FBQ0F2UixFQUFFLENBQUN3UixlQUFILEdBQXFCQSxlQUFyQjs7QUFFQSxJQUFJTSxLQUFLLEdBQUdILEdBQVosQzs7QUFFZUcsSzs7Ozs7Ozs7Ozs7O0FDdmtEZjtBQUFBO0FBQUE7O0FBRUE7QUFDQTtBQUNBOztBQUVlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDbEhBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGtDQUFrQzs7QUFFbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsaUJBQWlCO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQiwrQkFBK0I7QUFDckQsc0JBQXNCLGlCQUFpQjtBQUN2Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtEQUFrRCxpQ0FBaUMsRUFBRTtBQUNyRixDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLGdCQUFnQjtBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QixjQUFjOztBQUUzQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIsVUFBVTs7QUFFdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsZ0JBQWdCO0FBQ2pDLGtDQUFrQztBQUNsQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsYUFBb0I7O0FBRXJDO0FBQ0E7QUFDQTtBQUNBLFlBQVksYUFBb0I7O0FBRWhDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLHFCQUFxQjtBQUN4QyxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUssR0FBRztBQUNSO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRztBQUNIOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxvQ0FBb0M7QUFDcEM7O0FBRUEsSUFBSSxJQUFxQztBQUN6QztBQUNBO0FBQ0EsaUNBQWlDO0FBQ2pDLHVDQUF1Qyx3QkFBd0IsRUFBRTtBQUNqRSwwQkFBMEI7O0FBRTFCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixZQUFZO0FBQ3BDLGtCQUFrQixZQUFZO0FBQzlCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQjtBQUMvQjtBQUNBLHdDQUF3QyxFQUFFO0FBQzFDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTSxLQUFxQztBQUMzQztBQUNBO0FBQ0E7QUFDQSwrQkFBK0Isb0JBQW9CLEVBQUU7QUFDckQ7QUFDQSxrQ0FBa0MsT0FBTztBQUN6QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSwwQkFBMEIsU0FBUyxxQkFBcUI7O0FBRXhEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsMkJBQTJCO0FBQzlDO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxDQUFDOztBQUVEOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFD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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCO0FBQzNCO0FBQ0Esb0NBQW9DO0FBQ3BDO0FBQ0EscUNBQXFDO0FBQ3JDO0FBQ0E7QUFDQSxNQUFNLEtBQXFDO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksSUFFUTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLEtBQXFDO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsMkJBQTJCO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFD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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLEtBQXFDO0FBQzNDO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxrREFBa0Q7QUFDbEQsNENBQTRDO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw2Q0FBNkM7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLGlCQUFpQjtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLEtBQXFDO0FBQzNDO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCw0Q0FBNEM7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCLGlCQUFpQixnQkFBZ0I7QUFDakM7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLGlCQUFpQixtQkFBbUI7QUFDcEM7QUFDQTtBQUNBO0FBQ0EsS0FBSyxVQUFVLEtBQXFDO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gscUNBQXFDLGdFQUFnRTtBQUNyRztBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsNEJBQTRCLCtCQUErQjtBQUMzRCw0QkFBNEIsK0JBQStCO0FBQzNEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLG1CQUFtQixtQkFBbUI7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0sSUFBcUM7QUFDM0Msa0RBQWtEO0FBQ2xEO0FBQ0E7QUFDQSxtQ0FBbUM7QUFDbkM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCO0FBQzlCO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsUUFBUSxJQUFxQztBQUM3QztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esc0VBQXNFOztBQUV0RTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUssdUZBQXVGO0FBQzVGO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMENBQTBDO0FBQzFDLGlCQUFpQix5QkFBeUI7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUcsK0JBQStCO0FBQ2xDLG1DQUFtQztBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLEtBQXFDO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0sS0FBcUM7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVLEtBQXFDO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxvQkFBb0Isb0JBQW9CO0FBQ3hDLHNCQUFzQiw0QkFBNEI7QUFDbEQ7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEMsT0FBTztBQUNyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxtQkFBbUI7QUFDbkIseUJBQXlCO0FBQ3pCO0FBQ0EscURBQXFEO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDLDZDQUE2QztBQUM5RTtBQUNBO0FBQ0EsNkNBQTZDLDRDQUE0Qzs7QUFFekY7QUFDQTtBQUNBOztBQUVBO0FBQ0EsTUFBTSxJQUFxQztBQUMzQztBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRyxNQUFNLEVBR047QUFDSDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVUsS0FBcUM7QUFDL0M7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVSxLQUFxQztBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQjtBQUNwQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEtBQUssMkNBQTJDLDhCQUE4QixFQUFFOztBQUVoRjtBQUNBLHdDQUF3QyxPQUFPO0FBQy9DO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0EsTUFBTSxLQUFxQztBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLEtBQXFDO0FBQ3JEO0FBQ0Esb0JBQW9CLFNBQUk7QUFDeEI7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxtQkFBbUIscUJBQXFCO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQ0FBK0M7QUFDL0M7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDLE9BQU87QUFDOUM7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUNBQXlDLFNBQVM7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFFBQVEsSUFBcUM7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUMsT0FBTztBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTSxJQUFxQztBQUMzQztBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDBCQUEwQjs7QUFFMUIsa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIscUJBQXFCO0FBQ3hDO0FBQ0EsMENBQTBDO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNLElBQXFDO0FBQzNDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIseUJBQXlCO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLHlCQUF5QjtBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdDQUF3QyxPQUFPO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTSxJQUFxQztBQUMzQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLDBCQUEwQjtBQUNwRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsb0JBQW9CLEVBQUU7O0FBRXBEO0FBQ0E7QUFDQSxpQkFBaUIsc0JBQXNCO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLEtBQXFDO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpQkFBaUIsa0JBQWtCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxVQUFVLEtBQXFDO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7O0FBSUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQjtBQUNwQjtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixLQUFxQztBQUN6RDtBQUNBLE1BQU0sU0FBRTtBQUNSO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxNQUFNLEtBQXFDO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLDJCQUEyQjtBQUM5QyxxQkFBcUIsK0JBQStCO0FBQ3BEO0FBQ0E7QUFDQSxHQUFHO0FBQ0gseUJBQXlCO0FBQ3pCO0FBQ0Esc0JBQXNCLGlDQUFpQztBQUN2RDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLElBQXFDO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5Q0FBeUM7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLLE1BQU0sRUFFTjtBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksS0FBcUM7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxJQUFxQztBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTSxLQUFxQztBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQSw4QkFBOEI7O0FBRTlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsUUFBUSxLQUFxQztBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSyxVQUFVLElBQXFDO0FBQ3BEO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTSxLQUFxQztBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQztBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLElBQXFDO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsb0JBQW9CO0FBQ3pDO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQSw4QkFBOEI7QUFDOUIsTUFBTSxJQUFxQztBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFFBQVEsS0FBcUM7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxJQUFxQztBQUM3QztBQUNBLEtBQUssTUFBTSxFQUVOO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUNBQXlDO0FBQ3pDO0FBQ0Esc0NBQXNDO0FBQ3RDLDhDOztBQUVBO0FBQ0EsUUFBUSxLQUFxQztBQUM3QztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsZUFBZTtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsTUFBTSxLQUFxQztBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzRUFBc0U7QUFDdEU7QUFDQTtBQUNBOztBQUVBO0FBQ0EsUUFBUSxLQUFxQztBQUM3QztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUM7O0FBRWpDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsWUFBWSxLQUFxQztBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QjtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBOzs7O0FBSUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBOztBQUVBO0FBQ0EsMENBQTBDLDJCQUEyQixFQUFFO0FBQ3ZFLEtBQUs7QUFDTDtBQUNBLDBDQUEwQyw0QkFBNEIsRUFBRTtBQUN4RSxLQUFLO0FBQ0wsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLGVBQWU7QUFDOUMsTUFBTSxJQUFxQztBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwwQkFBMEI7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMEJBQTBCO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7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Q3BkLElBQUgsQ0FBUW5MLEdBQVIsQ0FBcEYsQ0FBK0YsQ0FBNUcsQ0FBNEcsT0FBTUEsQ0FBTixFQUFRLENBQUMsQ0FBQyxNQUFELEVBQVEsY0FBUixFQUF1QixZQUF2QixFQUFvQyxZQUFwQyxFQUFpRCxnQkFBakQsRUFBa0UsY0FBbEUsRUFBa0Z0TCxPQUFsRixDQUEwRixVQUFBc0wsQ0FBQyxFQUFFLENBQUN5b0IsRUFBRSxDQUFDem9CLENBQUQsQ0FBRixHQUFNLFlBQVUsQ0FBQyxJQUFNQSxDQUFDLEdBQUNDLCtLQUFBLENBQStCbE0sTUFBL0IsR0FBc0MsQ0FBdEMsR0FBd0Msd0NBQXhDLEdBQWlGLHNDQUF6RixDQUFnSSxPQUFPZ0gsT0FBTyxDQUFDSyxLQUFSLENBQWM0RSxDQUFkLEdBQWlCM0ssT0FBTyxDQUFDeUMsTUFBUixDQUFlLElBQUlrVCxDQUFKLENBQU0sRUFBQzZFLElBQUksRUFBQyxTQUFOLEVBQWdCRixPQUFPLEVBQUMzUCxDQUF4QixFQUFOLENBQWYsQ0FBeEIsQ0FBMEUsQ0FBM04sQ0FBNE4sQ0FBMVQsRUFBNFQsS0FBSTBvQixFQUFFLEdBQUNELEVBQVAsQyxlQUF5QkMsRTs7Ozs7Ozs7Ozs7OztzR0NBMThpRSxFQUFDLFNBQVEsZ0JBQVQsRTs7Ozs7Ozs7Ozs7QUNBZjs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDRDQUE0Qzs7QUFFNUMiLCJmaWxlIjoiY29tbW9uL3ZlbmRvci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBWdWUgZnJvbSAndnVlJztcclxuXHJcbmNvbnN0IF90b1N0cmluZyA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmc7XHJcbmNvbnN0IGhhc093blByb3BlcnR5ID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcclxuXHJcbmZ1bmN0aW9uIGlzRm4gKGZuKSB7XHJcbiAgcmV0dXJuIHR5cGVvZiBmbiA9PT0gJ2Z1bmN0aW9uJ1xyXG59XHJcblxyXG5mdW5jdGlvbiBpc1N0ciAoc3RyKSB7XHJcbiAgcmV0dXJuIHR5cGVvZiBzdHIgPT09ICdzdHJpbmcnXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGlzUGxhaW5PYmplY3QgKG9iaikge1xyXG4gIHJldHVybiBfdG9TdHJpbmcuY2FsbChvYmopID09PSAnW29iamVjdCBPYmplY3RdJ1xyXG59XHJcblxyXG5mdW5jdGlvbiBoYXNPd24gKG9iaiwga2V5KSB7XHJcbiAgcmV0dXJuIGhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIG5vb3AgKCkge31cclxuXHJcbi8qKlxyXG4gKiBDcmVhdGUgYSBjYWNoZWQgdmVyc2lvbiBvZiBhIHB1cmUgZnVuY3Rpb24uXHJcbiAqL1xyXG5mdW5jdGlvbiBjYWNoZWQgKGZuKSB7XHJcbiAgY29uc3QgY2FjaGUgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xyXG4gIHJldHVybiBmdW5jdGlvbiBjYWNoZWRGbiAoc3RyKSB7XHJcbiAgICBjb25zdCBoaXQgPSBjYWNoZVtzdHJdO1xyXG4gICAgcmV0dXJuIGhpdCB8fCAoY2FjaGVbc3RyXSA9IGZuKHN0cikpXHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICogQ2FtZWxpemUgYSBoeXBoZW4tZGVsaW1pdGVkIHN0cmluZy5cclxuICovXHJcbmNvbnN0IGNhbWVsaXplUkUgPSAvLShcXHcpL2c7XHJcbmNvbnN0IGNhbWVsaXplID0gY2FjaGVkKChzdHIpID0+IHtcclxuICByZXR1cm4gc3RyLnJlcGxhY2UoY2FtZWxpemVSRSwgKF8sIGMpID0+IGMgPyBjLnRvVXBwZXJDYXNlKCkgOiAnJylcclxufSk7XHJcblxyXG5jb25zdCBIT09LUyA9IFtcclxuICAnaW52b2tlJyxcclxuICAnc3VjY2VzcycsXHJcbiAgJ2ZhaWwnLFxyXG4gICdjb21wbGV0ZScsXHJcbiAgJ3JldHVyblZhbHVlJ1xyXG5dO1xyXG5cclxuY29uc3QgZ2xvYmFsSW50ZXJjZXB0b3JzID0ge307XHJcbmNvbnN0IHNjb3BlZEludGVyY2VwdG9ycyA9IHt9O1xyXG5cclxuZnVuY3Rpb24gbWVyZ2VIb29rIChwYXJlbnRWYWwsIGNoaWxkVmFsKSB7XHJcbiAgY29uc3QgcmVzID0gY2hpbGRWYWxcclxuICAgID8gcGFyZW50VmFsXHJcbiAgICAgID8gcGFyZW50VmFsLmNvbmNhdChjaGlsZFZhbClcclxuICAgICAgOiBBcnJheS5pc0FycmF5KGNoaWxkVmFsKVxyXG4gICAgICAgID8gY2hpbGRWYWwgOiBbY2hpbGRWYWxdXHJcbiAgICA6IHBhcmVudFZhbDtcclxuICByZXR1cm4gcmVzXHJcbiAgICA/IGRlZHVwZUhvb2tzKHJlcylcclxuICAgIDogcmVzXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRlZHVwZUhvb2tzIChob29rcykge1xyXG4gIGNvbnN0IHJlcyA9IFtdO1xyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgaG9va3MubGVuZ3RoOyBpKyspIHtcclxuICAgIGlmIChyZXMuaW5kZXhPZihob29rc1tpXSkgPT09IC0xKSB7XHJcbiAgICAgIHJlcy5wdXNoKGhvb2tzW2ldKTtcclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIHJlc1xyXG59XHJcblxyXG5mdW5jdGlvbiByZW1vdmVIb29rIChob29rcywgaG9vaykge1xyXG4gIGNvbnN0IGluZGV4ID0gaG9va3MuaW5kZXhPZihob29rKTtcclxuICBpZiAoaW5kZXggIT09IC0xKSB7XHJcbiAgICBob29rcy5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gbWVyZ2VJbnRlcmNlcHRvckhvb2sgKGludGVyY2VwdG9yLCBvcHRpb24pIHtcclxuICBPYmplY3Qua2V5cyhvcHRpb24pLmZvckVhY2goaG9vayA9PiB7XHJcbiAgICBpZiAoSE9PS1MuaW5kZXhPZihob29rKSAhPT0gLTEgJiYgaXNGbihvcHRpb25baG9va10pKSB7XHJcbiAgICAgIGludGVyY2VwdG9yW2hvb2tdID0gbWVyZ2VIb29rKGludGVyY2VwdG9yW2hvb2tdLCBvcHRpb25baG9va10pO1xyXG4gICAgfVxyXG4gIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiByZW1vdmVJbnRlcmNlcHRvckhvb2sgKGludGVyY2VwdG9yLCBvcHRpb24pIHtcclxuICBpZiAoIWludGVyY2VwdG9yIHx8ICFvcHRpb24pIHtcclxuICAgIHJldHVyblxyXG4gIH1cclxuICBPYmplY3Qua2V5cyhvcHRpb24pLmZvckVhY2goaG9vayA9PiB7XHJcbiAgICBpZiAoSE9PS1MuaW5kZXhPZihob29rKSAhPT0gLTEgJiYgaXNGbihvcHRpb25baG9va10pKSB7XHJcbiAgICAgIHJlbW92ZUhvb2soaW50ZXJjZXB0b3JbaG9va10sIG9wdGlvbltob29rXSk7XHJcbiAgICB9XHJcbiAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFkZEludGVyY2VwdG9yIChtZXRob2QsIG9wdGlvbikge1xyXG4gIGlmICh0eXBlb2YgbWV0aG9kID09PSAnc3RyaW5nJyAmJiBpc1BsYWluT2JqZWN0KG9wdGlvbikpIHtcclxuICAgIG1lcmdlSW50ZXJjZXB0b3JIb29rKHNjb3BlZEludGVyY2VwdG9yc1ttZXRob2RdIHx8IChzY29wZWRJbnRlcmNlcHRvcnNbbWV0aG9kXSA9IHt9KSwgb3B0aW9uKTtcclxuICB9IGVsc2UgaWYgKGlzUGxhaW5PYmplY3QobWV0aG9kKSkge1xyXG4gICAgbWVyZ2VJbnRlcmNlcHRvckhvb2soZ2xvYmFsSW50ZXJjZXB0b3JzLCBtZXRob2QpO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gcmVtb3ZlSW50ZXJjZXB0b3IgKG1ldGhvZCwgb3B0aW9uKSB7XHJcbiAgaWYgKHR5cGVvZiBtZXRob2QgPT09ICdzdHJpbmcnKSB7XHJcbiAgICBpZiAoaXNQbGFpbk9iamVjdChvcHRpb24pKSB7XHJcbiAgICAgIHJlbW92ZUludGVyY2VwdG9ySG9vayhzY29wZWRJbnRlcmNlcHRvcnNbbWV0aG9kXSwgb3B0aW9uKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGRlbGV0ZSBzY29wZWRJbnRlcmNlcHRvcnNbbWV0aG9kXTtcclxuICAgIH1cclxuICB9IGVsc2UgaWYgKGlzUGxhaW5PYmplY3QobWV0aG9kKSkge1xyXG4gICAgcmVtb3ZlSW50ZXJjZXB0b3JIb29rKGdsb2JhbEludGVyY2VwdG9ycywgbWV0aG9kKTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHdyYXBwZXJIb29rIChob29rKSB7XHJcbiAgcmV0dXJuIGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICByZXR1cm4gaG9vayhkYXRhKSB8fCBkYXRhXHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBpc1Byb21pc2UgKG9iaikge1xyXG4gIHJldHVybiAhIW9iaiAmJiAodHlwZW9mIG9iaiA9PT0gJ29iamVjdCcgfHwgdHlwZW9mIG9iaiA9PT0gJ2Z1bmN0aW9uJykgJiYgdHlwZW9mIG9iai50aGVuID09PSAnZnVuY3Rpb24nXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHF1ZXVlIChob29rcywgZGF0YSkge1xyXG4gIGxldCBwcm9taXNlID0gZmFsc2U7XHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBob29rcy5sZW5ndGg7IGkrKykge1xyXG4gICAgY29uc3QgaG9vayA9IGhvb2tzW2ldO1xyXG4gICAgaWYgKHByb21pc2UpIHtcclxuICAgICAgcHJvbWlzZSA9IFByb21pc2UudGhlbih3cmFwcGVySG9vayhob29rKSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zdCByZXMgPSBob29rKGRhdGEpO1xyXG4gICAgICBpZiAoaXNQcm9taXNlKHJlcykpIHtcclxuICAgICAgICBwcm9taXNlID0gUHJvbWlzZS5yZXNvbHZlKHJlcyk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKHJlcyA9PT0gZmFsc2UpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgdGhlbiAoKSB7fVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICByZXR1cm4gcHJvbWlzZSB8fCB7XHJcbiAgICB0aGVuIChjYWxsYmFjaykge1xyXG4gICAgICByZXR1cm4gY2FsbGJhY2soZGF0YSlcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHdyYXBwZXJPcHRpb25zIChpbnRlcmNlcHRvciwgb3B0aW9ucyA9IHt9KSB7XHJcbiAgWydzdWNjZXNzJywgJ2ZhaWwnLCAnY29tcGxldGUnXS5mb3JFYWNoKG5hbWUgPT4ge1xyXG4gICAgaWYgKEFycmF5LmlzQXJyYXkoaW50ZXJjZXB0b3JbbmFtZV0pKSB7XHJcbiAgICAgIGNvbnN0IG9sZENhbGxiYWNrID0gb3B0aW9uc1tuYW1lXTtcclxuICAgICAgb3B0aW9uc1tuYW1lXSA9IGZ1bmN0aW9uIGNhbGxiYWNrSW50ZXJjZXB0b3IgKHJlcykge1xyXG4gICAgICAgIHF1ZXVlKGludGVyY2VwdG9yW25hbWVdLCByZXMpLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgICAgLyogZXNsaW50LWRpc2FibGUgbm8tbWl4ZWQtb3BlcmF0b3JzICovXHJcbiAgICAgICAgICByZXR1cm4gaXNGbihvbGRDYWxsYmFjaykgJiYgb2xkQ2FsbGJhY2socmVzKSB8fCByZXNcclxuICAgICAgICB9KTtcclxuICAgICAgfTtcclxuICAgIH1cclxuICB9KTtcclxuICByZXR1cm4gb3B0aW9uc1xyXG59XHJcblxyXG5mdW5jdGlvbiB3cmFwcGVyUmV0dXJuVmFsdWUgKG1ldGhvZCwgcmV0dXJuVmFsdWUpIHtcclxuICBjb25zdCByZXR1cm5WYWx1ZUhvb2tzID0gW107XHJcbiAgaWYgKEFycmF5LmlzQXJyYXkoZ2xvYmFsSW50ZXJjZXB0b3JzLnJldHVyblZhbHVlKSkge1xyXG4gICAgcmV0dXJuVmFsdWVIb29rcy5wdXNoKC4uLmdsb2JhbEludGVyY2VwdG9ycy5yZXR1cm5WYWx1ZSk7XHJcbiAgfVxyXG4gIGNvbnN0IGludGVyY2VwdG9yID0gc2NvcGVkSW50ZXJjZXB0b3JzW21ldGhvZF07XHJcbiAgaWYgKGludGVyY2VwdG9yICYmIEFycmF5LmlzQXJyYXkoaW50ZXJjZXB0b3IucmV0dXJuVmFsdWUpKSB7XHJcbiAgICByZXR1cm5WYWx1ZUhvb2tzLnB1c2goLi4uaW50ZXJjZXB0b3IucmV0dXJuVmFsdWUpO1xyXG4gIH1cclxuICByZXR1cm5WYWx1ZUhvb2tzLmZvckVhY2goaG9vayA9PiB7XHJcbiAgICByZXR1cm5WYWx1ZSA9IGhvb2socmV0dXJuVmFsdWUpIHx8IHJldHVyblZhbHVlO1xyXG4gIH0pO1xyXG4gIHJldHVybiByZXR1cm5WYWx1ZVxyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRBcGlJbnRlcmNlcHRvckhvb2tzIChtZXRob2QpIHtcclxuICBjb25zdCBpbnRlcmNlcHRvciA9IE9iamVjdC5jcmVhdGUobnVsbCk7XHJcbiAgT2JqZWN0LmtleXMoZ2xvYmFsSW50ZXJjZXB0b3JzKS5mb3JFYWNoKGhvb2sgPT4ge1xyXG4gICAgaWYgKGhvb2sgIT09ICdyZXR1cm5WYWx1ZScpIHtcclxuICAgICAgaW50ZXJjZXB0b3JbaG9va10gPSBnbG9iYWxJbnRlcmNlcHRvcnNbaG9va10uc2xpY2UoKTtcclxuICAgIH1cclxuICB9KTtcclxuICBjb25zdCBzY29wZWRJbnRlcmNlcHRvciA9IHNjb3BlZEludGVyY2VwdG9yc1ttZXRob2RdO1xyXG4gIGlmIChzY29wZWRJbnRlcmNlcHRvcikge1xyXG4gICAgT2JqZWN0LmtleXMoc2NvcGVkSW50ZXJjZXB0b3IpLmZvckVhY2goaG9vayA9PiB7XHJcbiAgICAgIGlmIChob29rICE9PSAncmV0dXJuVmFsdWUnKSB7XHJcbiAgICAgICAgaW50ZXJjZXB0b3JbaG9va10gPSAoaW50ZXJjZXB0b3JbaG9va10gfHwgW10pLmNvbmNhdChzY29wZWRJbnRlcmNlcHRvcltob29rXSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuICByZXR1cm4gaW50ZXJjZXB0b3JcclxufVxyXG5cclxuZnVuY3Rpb24gaW52b2tlQXBpIChtZXRob2QsIGFwaSwgb3B0aW9ucywgLi4ucGFyYW1zKSB7XHJcbiAgY29uc3QgaW50ZXJjZXB0b3IgPSBnZXRBcGlJbnRlcmNlcHRvckhvb2tzKG1ldGhvZCk7XHJcbiAgaWYgKGludGVyY2VwdG9yICYmIE9iamVjdC5rZXlzKGludGVyY2VwdG9yKS5sZW5ndGgpIHtcclxuICAgIGlmIChBcnJheS5pc0FycmF5KGludGVyY2VwdG9yLmludm9rZSkpIHtcclxuICAgICAgY29uc3QgcmVzID0gcXVldWUoaW50ZXJjZXB0b3IuaW52b2tlLCBvcHRpb25zKTtcclxuICAgICAgcmV0dXJuIHJlcy50aGVuKChvcHRpb25zKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIGFwaSh3cmFwcGVyT3B0aW9ucyhpbnRlcmNlcHRvciwgb3B0aW9ucyksIC4uLnBhcmFtcylcclxuICAgICAgfSlcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiBhcGkod3JhcHBlck9wdGlvbnMoaW50ZXJjZXB0b3IsIG9wdGlvbnMpLCAuLi5wYXJhbXMpXHJcbiAgICB9XHJcbiAgfVxyXG4gIHJldHVybiBhcGkob3B0aW9ucywgLi4ucGFyYW1zKVxyXG59XHJcblxyXG5jb25zdCBwcm9taXNlSW50ZXJjZXB0b3IgPSB7XHJcbiAgcmV0dXJuVmFsdWUgKHJlcykge1xyXG4gICAgaWYgKCFpc1Byb21pc2UocmVzKSkge1xyXG4gICAgICByZXR1cm4gcmVzXHJcbiAgICB9XHJcbiAgICByZXR1cm4gcmVzLnRoZW4ocmVzID0+IHtcclxuICAgICAgcmV0dXJuIHJlc1sxXVxyXG4gICAgfSkuY2F0Y2gocmVzID0+IHtcclxuICAgICAgcmV0dXJuIHJlc1swXVxyXG4gICAgfSlcclxuICB9XHJcbn07XHJcblxyXG5jb25zdCBTWU5DX0FQSV9SRSA9XHJcbiAgL15cXCR8c2VuZE5hdGl2ZUV2ZW50fHJlc3RvcmVHbG9iYWx8Z2V0Q3VycmVudFN1Yk5WdWV8Z2V0TWVudUJ1dHRvbkJvdW5kaW5nQ2xpZW50UmVjdHxecmVwb3J0fGludGVyY2VwdG9yc3xJbnRlcmNlcHRvciR8Z2V0U3ViTlZ1ZUJ5SWR8cmVxdWlyZU5hdGl2ZVBsdWdpbnx1cHgycHh8aGlkZUtleWJvYXJkfGNhbklVc2V8XmNyZWF0ZXxTeW5jJHxNYW5hZ2VyJHxiYXNlNjRUb0FycmF5QnVmZmVyfGFycmF5QnVmZmVyVG9CYXNlNjQvO1xyXG5cclxuY29uc3QgQ09OVEVYVF9BUElfUkUgPSAvXmNyZWF0ZXxNYW5hZ2VyJC87XHJcblxyXG4vLyBDb250ZXh05L6L5aSW5oOF5Ya1XHJcbmNvbnN0IENPTlRFWFRfQVBJX1JFX0VYQyA9IFsnY3JlYXRlQkxFQ29ubmVjdGlvbiddO1xyXG5cclxuLy8g5ZCM5q2l5L6L5aSW5oOF5Ya1XHJcbmNvbnN0IEFTWU5DX0FQSSA9IFsnY3JlYXRlQkxFQ29ubmVjdGlvbiddO1xyXG5cclxuY29uc3QgQ0FMTEJBQ0tfQVBJX1JFID0gL15vbnxeb2ZmLztcclxuXHJcbmZ1bmN0aW9uIGlzQ29udGV4dEFwaSAobmFtZSkge1xyXG4gIHJldHVybiBDT05URVhUX0FQSV9SRS50ZXN0KG5hbWUpICYmIENPTlRFWFRfQVBJX1JFX0VYQy5pbmRleE9mKG5hbWUpID09PSAtMVxyXG59XHJcbmZ1bmN0aW9uIGlzU3luY0FwaSAobmFtZSkge1xyXG4gIHJldHVybiBTWU5DX0FQSV9SRS50ZXN0KG5hbWUpICYmIEFTWU5DX0FQSS5pbmRleE9mKG5hbWUpID09PSAtMVxyXG59XHJcblxyXG5mdW5jdGlvbiBpc0NhbGxiYWNrQXBpIChuYW1lKSB7XHJcbiAgcmV0dXJuIENBTExCQUNLX0FQSV9SRS50ZXN0KG5hbWUpICYmIG5hbWUgIT09ICdvblB1c2gnXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGhhbmRsZVByb21pc2UgKHByb21pc2UpIHtcclxuICByZXR1cm4gcHJvbWlzZS50aGVuKGRhdGEgPT4ge1xyXG4gICAgcmV0dXJuIFtudWxsLCBkYXRhXVxyXG4gIH0pXHJcbiAgICAuY2F0Y2goZXJyID0+IFtlcnJdKVxyXG59XHJcblxyXG5mdW5jdGlvbiBzaG91bGRQcm9taXNlIChuYW1lKSB7XHJcbiAgaWYgKFxyXG4gICAgaXNDb250ZXh0QXBpKG5hbWUpIHx8XHJcbiAgICBpc1N5bmNBcGkobmFtZSkgfHxcclxuICAgIGlzQ2FsbGJhY2tBcGkobmFtZSlcclxuICApIHtcclxuICAgIHJldHVybiBmYWxzZVxyXG4gIH1cclxuICByZXR1cm4gdHJ1ZVxyXG59XHJcblxyXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1leHRlbmQtbmF0aXZlICovXHJcbmlmICghUHJvbWlzZS5wcm90b3R5cGUuZmluYWxseSkge1xyXG4gIFByb21pc2UucHJvdG90eXBlLmZpbmFsbHkgPSBmdW5jdGlvbiAoY2FsbGJhY2spIHtcclxuICAgIGNvbnN0IHByb21pc2UgPSB0aGlzLmNvbnN0cnVjdG9yO1xyXG4gICAgcmV0dXJuIHRoaXMudGhlbihcclxuICAgICAgdmFsdWUgPT4gcHJvbWlzZS5yZXNvbHZlKGNhbGxiYWNrKCkpLnRoZW4oKCkgPT4gdmFsdWUpLFxyXG4gICAgICByZWFzb24gPT4gcHJvbWlzZS5yZXNvbHZlKGNhbGxiYWNrKCkpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgIHRocm93IHJlYXNvblxyXG4gICAgICB9KVxyXG4gICAgKVxyXG4gIH07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHByb21pc2lmeSAobmFtZSwgYXBpKSB7XHJcbiAgaWYgKCFzaG91bGRQcm9taXNlKG5hbWUpKSB7XHJcbiAgICByZXR1cm4gYXBpXHJcbiAgfVxyXG4gIHJldHVybiBmdW5jdGlvbiBwcm9taXNlQXBpIChvcHRpb25zID0ge30sIC4uLnBhcmFtcykge1xyXG4gICAgaWYgKGlzRm4ob3B0aW9ucy5zdWNjZXNzKSB8fCBpc0ZuKG9wdGlvbnMuZmFpbCkgfHwgaXNGbihvcHRpb25zLmNvbXBsZXRlKSkge1xyXG4gICAgICByZXR1cm4gd3JhcHBlclJldHVyblZhbHVlKG5hbWUsIGludm9rZUFwaShuYW1lLCBhcGksIG9wdGlvbnMsIC4uLnBhcmFtcykpXHJcbiAgICB9XHJcbiAgICByZXR1cm4gd3JhcHBlclJldHVyblZhbHVlKG5hbWUsIGhhbmRsZVByb21pc2UobmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICBpbnZva2VBcGkobmFtZSwgYXBpLCBPYmplY3QuYXNzaWduKHt9LCBvcHRpb25zLCB7XHJcbiAgICAgICAgc3VjY2VzczogcmVzb2x2ZSxcclxuICAgICAgICBmYWlsOiByZWplY3RcclxuICAgICAgfSksIC4uLnBhcmFtcyk7XHJcbiAgICB9KSkpXHJcbiAgfVxyXG59XHJcblxyXG5jb25zdCBFUFMgPSAxZS00O1xyXG5jb25zdCBCQVNFX0RFVklDRV9XSURUSCA9IDc1MDtcclxubGV0IGlzSU9TID0gZmFsc2U7XHJcbmxldCBkZXZpY2VXaWR0aCA9IDA7XHJcbmxldCBkZXZpY2VEUFIgPSAwO1xyXG5cclxuZnVuY3Rpb24gY2hlY2tEZXZpY2VXaWR0aCAoKSB7XHJcbiAgY29uc3Qge1xyXG4gICAgcGxhdGZvcm0sXHJcbiAgICBwaXhlbFJhdGlvLFxyXG4gICAgd2luZG93V2lkdGhcclxuICB9ID0gd3guZ2V0U3lzdGVtSW5mb1N5bmMoKTsgLy8gdW5pPT53eCBydW50aW1lIOe8luivkeebruagh+aYryB1bmkg5a+56LGh77yM5YaF6YOo5LiN5YWB6K6455u05o6l5L2/55SoIHVuaVxyXG5cclxuICBkZXZpY2VXaWR0aCA9IHdpbmRvd1dpZHRoO1xyXG4gIGRldmljZURQUiA9IHBpeGVsUmF0aW87XHJcbiAgaXNJT1MgPSBwbGF0Zm9ybSA9PT0gJ2lvcyc7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHVweDJweCAobnVtYmVyLCBuZXdEZXZpY2VXaWR0aCkge1xyXG4gIGlmIChkZXZpY2VXaWR0aCA9PT0gMCkge1xyXG4gICAgY2hlY2tEZXZpY2VXaWR0aCgpO1xyXG4gIH1cclxuXHJcbiAgbnVtYmVyID0gTnVtYmVyKG51bWJlcik7XHJcbiAgaWYgKG51bWJlciA9PT0gMCkge1xyXG4gICAgcmV0dXJuIDBcclxuICB9XHJcbiAgbGV0IHJlc3VsdCA9IChudW1iZXIgLyBCQVNFX0RFVklDRV9XSURUSCkgKiAobmV3RGV2aWNlV2lkdGggfHwgZGV2aWNlV2lkdGgpO1xyXG4gIGlmIChyZXN1bHQgPCAwKSB7XHJcbiAgICByZXN1bHQgPSAtcmVzdWx0O1xyXG4gIH1cclxuICByZXN1bHQgPSBNYXRoLmZsb29yKHJlc3VsdCArIEVQUyk7XHJcbiAgaWYgKHJlc3VsdCA9PT0gMCkge1xyXG4gICAgaWYgKGRldmljZURQUiA9PT0gMSB8fCAhaXNJT1MpIHtcclxuICAgICAgcmV0dXJuIDFcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiAwLjVcclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIG51bWJlciA8IDAgPyAtcmVzdWx0IDogcmVzdWx0XHJcbn1cclxuXHJcbmNvbnN0IGludGVyY2VwdG9ycyA9IHtcclxuICBwcm9taXNlSW50ZXJjZXB0b3JcclxufTtcclxuXHJcbnZhciBiYXNlQXBpID0gLyojX19QVVJFX18qL09iamVjdC5mcmVlemUoe1xyXG4gIF9fcHJvdG9fXzogbnVsbCxcclxuICB1cHgycHg6IHVweDJweCxcclxuICBhZGRJbnRlcmNlcHRvcjogYWRkSW50ZXJjZXB0b3IsXHJcbiAgcmVtb3ZlSW50ZXJjZXB0b3I6IHJlbW92ZUludGVyY2VwdG9yLFxyXG4gIGludGVyY2VwdG9yczogaW50ZXJjZXB0b3JzXHJcbn0pO1xyXG5cclxudmFyIHByZXZpZXdJbWFnZSA9IHtcclxuICBhcmdzIChmcm9tQXJncykge1xyXG4gICAgbGV0IGN1cnJlbnRJbmRleCA9IHBhcnNlSW50KGZyb21BcmdzLmN1cnJlbnQpO1xyXG4gICAgaWYgKGlzTmFOKGN1cnJlbnRJbmRleCkpIHtcclxuICAgICAgcmV0dXJuXHJcbiAgICB9XHJcbiAgICBjb25zdCB1cmxzID0gZnJvbUFyZ3MudXJscztcclxuICAgIGlmICghQXJyYXkuaXNBcnJheSh1cmxzKSkge1xyXG4gICAgICByZXR1cm5cclxuICAgIH1cclxuICAgIGNvbnN0IGxlbiA9IHVybHMubGVuZ3RoO1xyXG4gICAgaWYgKCFsZW4pIHtcclxuICAgICAgcmV0dXJuXHJcbiAgICB9XHJcbiAgICBpZiAoY3VycmVudEluZGV4IDwgMCkge1xyXG4gICAgICBjdXJyZW50SW5kZXggPSAwO1xyXG4gICAgfSBlbHNlIGlmIChjdXJyZW50SW5kZXggPj0gbGVuKSB7XHJcbiAgICAgIGN1cnJlbnRJbmRleCA9IGxlbiAtIDE7XHJcbiAgICB9XHJcbiAgICBpZiAoY3VycmVudEluZGV4ID4gMCkge1xyXG4gICAgICBmcm9tQXJncy5jdXJyZW50ID0gdXJsc1tjdXJyZW50SW5kZXhdO1xyXG4gICAgICBmcm9tQXJncy51cmxzID0gdXJscy5maWx0ZXIoXHJcbiAgICAgICAgKGl0ZW0sIGluZGV4KSA9PiBpbmRleCA8IGN1cnJlbnRJbmRleCA/IGl0ZW0gIT09IHVybHNbY3VycmVudEluZGV4XSA6IHRydWVcclxuICAgICAgKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGZyb21BcmdzLmN1cnJlbnQgPSB1cmxzWzBdO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgaW5kaWNhdG9yOiBmYWxzZSxcclxuICAgICAgbG9vcDogZmFsc2VcclxuICAgIH1cclxuICB9XHJcbn07XHJcblxyXG5jb25zdCBwcm90b2NvbHMgPSB7XHJcbiAgcHJldmlld0ltYWdlXHJcbn07XHJcbmNvbnN0IHRvZG9zID0gW1xyXG4gIC8vICdzdGFydEJlYWNvbkRpc2NvdmVyeScsXHJcbiAgLy8gJ3N0b3BCZWFjb25EaXNjb3ZlcnknLFxyXG4gIC8vICdnZXRCZWFjb25zJyxcclxuICAvLyAnb25CZWFjb25VcGRhdGUnLFxyXG4gIC8vICdvbkJlYWNvblNlcnZpY2VDaGFuZ2UnLFxyXG4gIC8vICdhZGRQaG9uZUNvbnRhY3QnLFxyXG4gIC8vICdnZXRIQ0VTdGF0ZScsXHJcbiAgLy8gJ3N0YXJ0SENFJyxcclxuICAvLyAnc3RvcEhDRScsXHJcbiAgLy8gJ29uSENFTWVzc2FnZScsXHJcbiAgLy8gJ3NlbmRIQ0VNZXNzYWdlJyxcclxuICAvLyAnc3RhcnRXaWZpJyxcclxuICAvLyAnc3RvcFdpZmknLFxyXG4gIC8vICdjb25uZWN0V2lmaScsXHJcbiAgLy8gJ2dldFdpZmlMaXN0JyxcclxuICAvLyAnb25HZXRXaWZpTGlzdCcsXHJcbiAgLy8gJ3NldFdpZmlMaXN0JyxcclxuICAvLyAnb25XaWZpQ29ubmVjdGVkJyxcclxuICAvLyAnZ2V0Q29ubmVjdGVkV2lmaScsXHJcbiAgLy8gJ3NldFRvcEJhclRleHQnLFxyXG4gIC8vICdnZXRQaG9uZU51bWJlcicsXHJcbiAgLy8gJ2Nob29zZUFkZHJlc3MnLFxyXG4gIC8vICdhZGRDYXJkJyxcclxuICAvLyAnb3BlbkNhcmQnLFxyXG4gIC8vICdnZXRXZVJ1bkRhdGEnLFxyXG4gIC8vICdsYXVuY2hBcHAnLFxyXG4gIC8vICdjaG9vc2VJbnZvaWNlVGl0bGUnLFxyXG4gIC8vICdjaGVja0lzU3VwcG9ydFNvdGVyQXV0aGVudGljYXRpb24nLFxyXG4gIC8vICdzdGFydFNvdGVyQXV0aGVudGljYXRpb24nLFxyXG4gIC8vICdjaGVja0lzU290ZXJFbnJvbGxlZEluRGV2aWNlJyxcclxuICAvLyAndmlicmF0ZScsXHJcbiAgLy8gJ2xvYWRGb250RmFjZScsXHJcbiAgLy8gJ2dldEV4dENvbmZpZycsXHJcbiAgLy8gJ2dldEV4dENvbmZpZ1N5bmMnXHJcbl07XHJcbmNvbnN0IGNhbklVc2VzID0gW1xyXG4gICdzY2FuQ29kZScsXHJcbiAgJ3N0YXJ0QWNjZWxlcm9tZXRlcicsXHJcbiAgJ3N0b3BBY2NlbGVyb21ldGVyJyxcclxuICAnb25BY2NlbGVyb21ldGVyQ2hhbmdlJyxcclxuICAnc3RhcnRDb21wYXNzJyxcclxuICAnb25Db21wYXNzQ2hhbmdlJyxcclxuICAnc2V0U2NyZWVuQnJpZ2h0bmVzcycsXHJcbiAgJ2dldFNjcmVlbkJyaWdodG5lc3MnLFxyXG4gICdzZXRLZWVwU2NyZWVuT24nLFxyXG4gICdvblVzZXJDYXB0dXJlU2NyZWVuJyxcclxuICAndmlicmF0ZUxvbmcnLFxyXG4gICd2aWJyYXRlU2hvcnQnLFxyXG4gICdjcmVhdGVXb3JrZXInLFxyXG4gICdjb25uZWN0U29ja2V0JyxcclxuICAnb25Tb2NrZXRPcGVuJyxcclxuICAnb25Tb2NrZXRFcnJvcicsXHJcbiAgJ3NlbmRTb2NrZXRNZXNzYWdlJyxcclxuICAnb25Tb2NrZXRNZXNzYWdlJyxcclxuICAnY2xvc2VTb2NrZXQnLFxyXG4gICdvblNvY2tldENsb3NlJyxcclxuICAnb3BlbkRvY3VtZW50JyxcclxuICAndXBkYXRlU2hhcmVNZW51JyxcclxuICAnZ2V0U2hhcmVJbmZvJyxcclxuICAnY3JlYXRlTGl2ZVBsYXllckNvbnRleHQnLFxyXG4gICdjcmVhdGVMaXZlUHVzaGVyQ29udGV4dCcsXHJcbiAgJ3NldE5hdmlnYXRpb25CYXJDb2xvcicsXHJcbiAgJ29uTWVtb3J5V2FybmluZycsXHJcbiAgJ29uTmV0d29ya1N0YXR1c0NoYW5nZScsXHJcbiAgJ3JlcG9ydE1vbml0b3InLFxyXG4gICdnZXRMb2dNYW5hZ2VyJyxcclxuICAncmVwb3J0QW5hbHl0aWNzJ1xyXG5dO1xyXG5cclxuY29uc3QgQ0FMTEJBQ0tTID0gWydzdWNjZXNzJywgJ2ZhaWwnLCAnY2FuY2VsJywgJ2NvbXBsZXRlJ107XHJcblxyXG5mdW5jdGlvbiBwcm9jZXNzQ2FsbGJhY2sgKG1ldGhvZE5hbWUsIG1ldGhvZCwgcmV0dXJuVmFsdWUpIHtcclxuICByZXR1cm4gZnVuY3Rpb24gKHJlcykge1xyXG4gICAgcmV0dXJuIG1ldGhvZChwcm9jZXNzUmV0dXJuVmFsdWUobWV0aG9kTmFtZSwgcmVzLCByZXR1cm5WYWx1ZSkpXHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBwcm9jZXNzQXJncyAobWV0aG9kTmFtZSwgZnJvbUFyZ3MsIGFyZ3NPcHRpb24gPSB7fSwgcmV0dXJuVmFsdWUgPSB7fSwga2VlcEZyb21BcmdzID0gZmFsc2UpIHtcclxuICBpZiAoaXNQbGFpbk9iamVjdChmcm9tQXJncykpIHsgLy8g5LiA6IisIGFwaSDnmoTlj4LmlbDop6PmnpBcclxuICAgIGNvbnN0IHRvQXJncyA9IGtlZXBGcm9tQXJncyA9PT0gdHJ1ZSA/IGZyb21BcmdzIDoge307IC8vIHJldHVyblZhbHVlIOS4uiBmYWxzZSDml7bvvIzor7TmmI7mmK/moLzlvI/ljJbov5Tlm57lgLzvvIznm7TmjqXlnKjov5Tlm57lgLzlr7nosaHkuIrkv67mlLnotYvlgLxcclxuICAgIGlmIChpc0ZuKGFyZ3NPcHRpb24pKSB7XHJcbiAgICAgIGFyZ3NPcHRpb24gPSBhcmdzT3B0aW9uKGZyb21BcmdzLCB0b0FyZ3MpIHx8IHt9O1xyXG4gICAgfVxyXG4gICAgZm9yIChjb25zdCBrZXkgaW4gZnJvbUFyZ3MpIHtcclxuICAgICAgaWYgKGhhc093bihhcmdzT3B0aW9uLCBrZXkpKSB7XHJcbiAgICAgICAgbGV0IGtleU9wdGlvbiA9IGFyZ3NPcHRpb25ba2V5XTtcclxuICAgICAgICBpZiAoaXNGbihrZXlPcHRpb24pKSB7XHJcbiAgICAgICAgICBrZXlPcHRpb24gPSBrZXlPcHRpb24oZnJvbUFyZ3Nba2V5XSwgZnJvbUFyZ3MsIHRvQXJncyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICgha2V5T3B0aW9uKSB7IC8vIOS4jeaUr+aMgeeahOWPguaVsFxyXG4gICAgICAgICAgY29uc29sZS53YXJuKGBRUeWwj+eoi+W6jyAke21ldGhvZE5hbWV95pqC5LiN5pSv5oyBJHtrZXl9YCk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChpc1N0cihrZXlPcHRpb24pKSB7IC8vIOmHjeWGmeWPguaVsCBrZXlcclxuICAgICAgICAgIHRvQXJnc1trZXlPcHRpb25dID0gZnJvbUFyZ3Nba2V5XTtcclxuICAgICAgICB9IGVsc2UgaWYgKGlzUGxhaW5PYmplY3Qoa2V5T3B0aW9uKSkgeyAvLyB7bmFtZTpuZXdOYW1lLHZhbHVlOnZhbHVlfeWPr+mHjeaWsOaMh+WumuWPguaVsCBrZXk6dmFsdWVcclxuICAgICAgICAgIHRvQXJnc1trZXlPcHRpb24ubmFtZSA/IGtleU9wdGlvbi5uYW1lIDoga2V5XSA9IGtleU9wdGlvbi52YWx1ZTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSBpZiAoQ0FMTEJBQ0tTLmluZGV4T2Yoa2V5KSAhPT0gLTEpIHtcclxuICAgICAgICB0b0FyZ3Nba2V5XSA9IHByb2Nlc3NDYWxsYmFjayhtZXRob2ROYW1lLCBmcm9tQXJnc1trZXldLCByZXR1cm5WYWx1ZSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgaWYgKCFrZWVwRnJvbUFyZ3MpIHtcclxuICAgICAgICAgIHRvQXJnc1trZXldID0gZnJvbUFyZ3Nba2V5XTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiB0b0FyZ3NcclxuICB9IGVsc2UgaWYgKGlzRm4oZnJvbUFyZ3MpKSB7XHJcbiAgICBmcm9tQXJncyA9IHByb2Nlc3NDYWxsYmFjayhtZXRob2ROYW1lLCBmcm9tQXJncywgcmV0dXJuVmFsdWUpO1xyXG4gIH1cclxuICByZXR1cm4gZnJvbUFyZ3NcclxufVxyXG5cclxuZnVuY3Rpb24gcHJvY2Vzc1JldHVyblZhbHVlIChtZXRob2ROYW1lLCByZXMsIHJldHVyblZhbHVlLCBrZWVwUmV0dXJuVmFsdWUgPSBmYWxzZSkge1xyXG4gIGlmIChpc0ZuKHByb3RvY29scy5yZXR1cm5WYWx1ZSkpIHsgLy8g5aSE55CG6YCa55SoIHJldHVyblZhbHVlXHJcbiAgICByZXMgPSBwcm90b2NvbHMucmV0dXJuVmFsdWUobWV0aG9kTmFtZSwgcmVzKTtcclxuICB9XHJcbiAgcmV0dXJuIHByb2Nlc3NBcmdzKG1ldGhvZE5hbWUsIHJlcywgcmV0dXJuVmFsdWUsIHt9LCBrZWVwUmV0dXJuVmFsdWUpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHdyYXBwZXIgKG1ldGhvZE5hbWUsIG1ldGhvZCkge1xyXG4gIGlmIChoYXNPd24ocHJvdG9jb2xzLCBtZXRob2ROYW1lKSkge1xyXG4gICAgY29uc3QgcHJvdG9jb2wgPSBwcm90b2NvbHNbbWV0aG9kTmFtZV07XHJcbiAgICBpZiAoIXByb3RvY29sKSB7IC8vIOaaguS4jeaUr+aMgeeahCBhcGlcclxuICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKGBRUeWwj+eoi+W6jyDmmoLkuI3mlK/mjIEke21ldGhvZE5hbWV9YCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBmdW5jdGlvbiAoYXJnMSwgYXJnMikgeyAvLyDnm67liY0gYXBpIOacgOWkmuS4pOS4quWPguaVsFxyXG4gICAgICBsZXQgb3B0aW9ucyA9IHByb3RvY29sO1xyXG4gICAgICBpZiAoaXNGbihwcm90b2NvbCkpIHtcclxuICAgICAgICBvcHRpb25zID0gcHJvdG9jb2woYXJnMSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGFyZzEgPSBwcm9jZXNzQXJncyhtZXRob2ROYW1lLCBhcmcxLCBvcHRpb25zLmFyZ3MsIG9wdGlvbnMucmV0dXJuVmFsdWUpO1xyXG5cclxuICAgICAgY29uc3QgYXJncyA9IFthcmcxXTtcclxuICAgICAgaWYgKHR5cGVvZiBhcmcyICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgIGFyZ3MucHVzaChhcmcyKTtcclxuICAgICAgfVxyXG4gICAgICBjb25zdCByZXR1cm5WYWx1ZSA9IHd4W29wdGlvbnMubmFtZSB8fCBtZXRob2ROYW1lXS5hcHBseSh3eCwgYXJncyk7XHJcbiAgICAgIGlmIChpc1N5bmNBcGkobWV0aG9kTmFtZSkpIHsgLy8g5ZCM5q2lIGFwaVxyXG4gICAgICAgIHJldHVybiBwcm9jZXNzUmV0dXJuVmFsdWUobWV0aG9kTmFtZSwgcmV0dXJuVmFsdWUsIG9wdGlvbnMucmV0dXJuVmFsdWUsIGlzQ29udGV4dEFwaShtZXRob2ROYW1lKSlcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gcmV0dXJuVmFsdWVcclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIG1ldGhvZFxyXG59XHJcblxyXG5jb25zdCB0b2RvQXBpcyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XHJcblxyXG5jb25zdCBUT0RPUyA9IFtcclxuICAnb25UYWJCYXJNaWRCdXR0b25UYXAnLFxyXG4gICdzdWJzY3JpYmVQdXNoJyxcclxuICAndW5zdWJzY3JpYmVQdXNoJyxcclxuICAnb25QdXNoJyxcclxuICAnb2ZmUHVzaCcsXHJcbiAgJ3NoYXJlJ1xyXG5dO1xyXG5cclxuZnVuY3Rpb24gY3JlYXRlVG9kb0FwaSAobmFtZSkge1xyXG4gIHJldHVybiBmdW5jdGlvbiB0b2RvQXBpICh7XHJcbiAgICBmYWlsLFxyXG4gICAgY29tcGxldGVcclxuICB9KSB7XHJcbiAgICBjb25zdCByZXMgPSB7XHJcbiAgICAgIGVyck1zZzogYCR7bmFtZX06ZmFpbDrmmoLkuI3mlK/mjIEgJHtuYW1lfSDmlrnms5VgXHJcbiAgICB9O1xyXG4gICAgaXNGbihmYWlsKSAmJiBmYWlsKHJlcyk7XHJcbiAgICBpc0ZuKGNvbXBsZXRlKSAmJiBjb21wbGV0ZShyZXMpO1xyXG4gIH1cclxufVxyXG5cclxuVE9ET1MuZm9yRWFjaChmdW5jdGlvbiAobmFtZSkge1xyXG4gIHRvZG9BcGlzW25hbWVdID0gY3JlYXRlVG9kb0FwaShuYW1lKTtcclxufSk7XHJcblxyXG52YXIgcHJvdmlkZXJzID0ge1xyXG4gIG9hdXRoOiBbJ3FxJ10sXHJcbiAgc2hhcmU6IFsncXEnXSxcclxuICBwYXltZW50OiBbJ3FxcGF5J10sXHJcbiAgcHVzaDogWydxcSddXHJcbn07XHJcblxyXG5mdW5jdGlvbiBnZXRQcm92aWRlciAoe1xyXG4gIHNlcnZpY2UsXHJcbiAgc3VjY2VzcyxcclxuICBmYWlsLFxyXG4gIGNvbXBsZXRlXHJcbn0pIHtcclxuICBsZXQgcmVzID0gZmFsc2U7XHJcbiAgaWYgKHByb3ZpZGVyc1tzZXJ2aWNlXSkge1xyXG4gICAgcmVzID0ge1xyXG4gICAgICBlcnJNc2c6ICdnZXRQcm92aWRlcjpvaycsXHJcbiAgICAgIHNlcnZpY2UsXHJcbiAgICAgIHByb3ZpZGVyOiBwcm92aWRlcnNbc2VydmljZV1cclxuICAgIH07XHJcbiAgICBpc0ZuKHN1Y2Nlc3MpICYmIHN1Y2Nlc3MocmVzKTtcclxuICB9IGVsc2Uge1xyXG4gICAgcmVzID0ge1xyXG4gICAgICBlcnJNc2c6ICdnZXRQcm92aWRlcjpmYWlsOuacjeWKoVsnICsgc2VydmljZSArICdd5LiN5a2Y5ZyoJ1xyXG4gICAgfTtcclxuICAgIGlzRm4oZmFpbCkgJiYgZmFpbChyZXMpO1xyXG4gIH1cclxuICBpc0ZuKGNvbXBsZXRlKSAmJiBjb21wbGV0ZShyZXMpO1xyXG59XHJcblxyXG52YXIgZXh0cmFBcGkgPSAvKiNfX1BVUkVfXyovT2JqZWN0LmZyZWV6ZSh7XHJcbiAgX19wcm90b19fOiBudWxsLFxyXG4gIGdldFByb3ZpZGVyOiBnZXRQcm92aWRlclxyXG59KTtcclxuXHJcbmNvbnN0IGdldEVtaXR0ZXIgPSAoZnVuY3Rpb24gKCkge1xyXG4gIGlmICh0eXBlb2YgZ2V0VW5pRW1pdHRlciA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgLyogZXNsaW50LWRpc2FibGUgbm8tdW5kZWYgKi9cclxuICAgIHJldHVybiBnZXRVbmlFbWl0dGVyXHJcbiAgfVxyXG4gIGxldCBFbWl0dGVyO1xyXG4gIHJldHVybiBmdW5jdGlvbiBnZXRVbmlFbWl0dGVyICgpIHtcclxuICAgIGlmICghRW1pdHRlcikge1xyXG4gICAgICBFbWl0dGVyID0gbmV3IFZ1ZSgpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIEVtaXR0ZXJcclxuICB9XHJcbn0pKCk7XHJcblxyXG5mdW5jdGlvbiBhcHBseSAoY3R4LCBtZXRob2QsIGFyZ3MpIHtcclxuICByZXR1cm4gY3R4W21ldGhvZF0uYXBwbHkoY3R4LCBhcmdzKVxyXG59XHJcblxyXG5mdW5jdGlvbiAkb24gKCkge1xyXG4gIHJldHVybiBhcHBseShnZXRFbWl0dGVyKCksICckb24nLCBbLi4uYXJndW1lbnRzXSlcclxufVxyXG5mdW5jdGlvbiAkb2ZmICgpIHtcclxuICByZXR1cm4gYXBwbHkoZ2V0RW1pdHRlcigpLCAnJG9mZicsIFsuLi5hcmd1bWVudHNdKVxyXG59XHJcbmZ1bmN0aW9uICRvbmNlICgpIHtcclxuICByZXR1cm4gYXBwbHkoZ2V0RW1pdHRlcigpLCAnJG9uY2UnLCBbLi4uYXJndW1lbnRzXSlcclxufVxyXG5mdW5jdGlvbiAkZW1pdCAoKSB7XHJcbiAgcmV0dXJuIGFwcGx5KGdldEVtaXR0ZXIoKSwgJyRlbWl0JywgWy4uLmFyZ3VtZW50c10pXHJcbn1cclxuXHJcbnZhciBldmVudEFwaSA9IC8qI19fUFVSRV9fKi9PYmplY3QuZnJlZXplKHtcclxuICBfX3Byb3RvX186IG51bGwsXHJcbiAgJG9uOiAkb24sXHJcbiAgJG9mZjogJG9mZixcclxuICAkb25jZTogJG9uY2UsXHJcbiAgJGVtaXQ6ICRlbWl0XHJcbn0pO1xyXG5cclxudmFyIGFwaSA9IC8qI19fUFVSRV9fKi9PYmplY3QuZnJlZXplKHtcclxuICBfX3Byb3RvX186IG51bGxcclxufSk7XHJcblxyXG5jb25zdCBNUFBhZ2UgPSBQYWdlO1xyXG5jb25zdCBNUENvbXBvbmVudCA9IENvbXBvbmVudDtcclxuXHJcbmNvbnN0IGN1c3RvbWl6ZVJFID0gLzovZztcclxuXHJcbmNvbnN0IGN1c3RvbWl6ZSA9IGNhY2hlZCgoc3RyKSA9PiB7XHJcbiAgcmV0dXJuIGNhbWVsaXplKHN0ci5yZXBsYWNlKGN1c3RvbWl6ZVJFLCAnLScpKVxyXG59KTtcclxuXHJcbmZ1bmN0aW9uIGluaXRUcmlnZ2VyRXZlbnQgKG1wSW5zdGFuY2UpIHtcclxuICBjb25zdCBvbGRUcmlnZ2VyRXZlbnQgPSBtcEluc3RhbmNlLnRyaWdnZXJFdmVudDtcclxuICBtcEluc3RhbmNlLnRyaWdnZXJFdmVudCA9IGZ1bmN0aW9uIChldmVudCwgLi4uYXJncykge1xyXG4gICAgcmV0dXJuIG9sZFRyaWdnZXJFdmVudC5hcHBseShtcEluc3RhbmNlLCBbY3VzdG9taXplKGV2ZW50KSwgLi4uYXJnc10pXHJcbiAgfTtcclxufVxyXG5cclxuZnVuY3Rpb24gaW5pdEhvb2sgKG5hbWUsIG9wdGlvbnMpIHtcclxuICBjb25zdCBvbGRIb29rID0gb3B0aW9uc1tuYW1lXTtcclxuICBpZiAoIW9sZEhvb2spIHtcclxuICAgIG9wdGlvbnNbbmFtZV0gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIGluaXRUcmlnZ2VyRXZlbnQodGhpcyk7XHJcbiAgICB9O1xyXG4gIH0gZWxzZSB7XHJcbiAgICBvcHRpb25zW25hbWVdID0gZnVuY3Rpb24gKC4uLmFyZ3MpIHtcclxuICAgICAgaW5pdFRyaWdnZXJFdmVudCh0aGlzKTtcclxuICAgICAgcmV0dXJuIG9sZEhvb2suYXBwbHkodGhpcywgYXJncylcclxuICAgIH07XHJcbiAgfVxyXG59XHJcblxyXG5QYWdlID0gZnVuY3Rpb24gKG9wdGlvbnMgPSB7fSkge1xyXG4gIGluaXRIb29rKCdvbkxvYWQnLCBvcHRpb25zKTtcclxuICByZXR1cm4gTVBQYWdlKG9wdGlvbnMpXHJcbn07XHJcblxyXG5Db21wb25lbnQgPSBmdW5jdGlvbiAob3B0aW9ucyA9IHt9KSB7XHJcbiAgaW5pdEhvb2soJ2NyZWF0ZWQnLCBvcHRpb25zKTtcclxuICByZXR1cm4gTVBDb21wb25lbnQob3B0aW9ucylcclxufTtcclxuXHJcbmNvbnN0IFBBR0VfRVZFTlRfSE9PS1MgPSBbXHJcbiAgJ29uUHVsbERvd25SZWZyZXNoJyxcclxuICAnb25SZWFjaEJvdHRvbScsXHJcbiAgJ29uU2hhcmVBcHBNZXNzYWdlJyxcclxuICAnb25QYWdlU2Nyb2xsJyxcclxuICAnb25SZXNpemUnLFxyXG4gICdvblRhYkl0ZW1UYXAnXHJcbl07XHJcblxyXG5mdW5jdGlvbiBpbml0TW9ja3MgKHZtLCBtb2Nrcykge1xyXG4gIGNvbnN0IG1wSW5zdGFuY2UgPSB2bS4kbXBbdm0ubXBUeXBlXTtcclxuICBtb2Nrcy5mb3JFYWNoKG1vY2sgPT4ge1xyXG4gICAgaWYgKGhhc093bihtcEluc3RhbmNlLCBtb2NrKSkge1xyXG4gICAgICB2bVttb2NrXSA9IG1wSW5zdGFuY2VbbW9ja107XHJcbiAgICB9XHJcbiAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGhhc0hvb2sgKGhvb2ssIHZ1ZU9wdGlvbnMpIHtcclxuICBpZiAoIXZ1ZU9wdGlvbnMpIHtcclxuICAgIHJldHVybiB0cnVlXHJcbiAgfVxyXG5cclxuICBpZiAoVnVlLm9wdGlvbnMgJiYgQXJyYXkuaXNBcnJheShWdWUub3B0aW9uc1tob29rXSkpIHtcclxuICAgIHJldHVybiB0cnVlXHJcbiAgfVxyXG5cclxuICB2dWVPcHRpb25zID0gdnVlT3B0aW9ucy5kZWZhdWx0IHx8IHZ1ZU9wdGlvbnM7XHJcblxyXG4gIGlmIChpc0ZuKHZ1ZU9wdGlvbnMpKSB7XHJcbiAgICBpZiAoaXNGbih2dWVPcHRpb25zLmV4dGVuZE9wdGlvbnNbaG9va10pKSB7XHJcbiAgICAgIHJldHVybiB0cnVlXHJcbiAgICB9XHJcbiAgICBpZiAodnVlT3B0aW9ucy5zdXBlciAmJlxyXG4gICAgICB2dWVPcHRpb25zLnN1cGVyLm9wdGlvbnMgJiZcclxuICAgICAgQXJyYXkuaXNBcnJheSh2dWVPcHRpb25zLnN1cGVyLm9wdGlvbnNbaG9va10pKSB7XHJcbiAgICAgIHJldHVybiB0cnVlXHJcbiAgICB9XHJcbiAgICByZXR1cm4gZmFsc2VcclxuICB9XHJcblxyXG4gIGlmIChpc0ZuKHZ1ZU9wdGlvbnNbaG9va10pKSB7XHJcbiAgICByZXR1cm4gdHJ1ZVxyXG4gIH1cclxuICBjb25zdCBtaXhpbnMgPSB2dWVPcHRpb25zLm1peGlucztcclxuICBpZiAoQXJyYXkuaXNBcnJheShtaXhpbnMpKSB7XHJcbiAgICByZXR1cm4gISFtaXhpbnMuZmluZChtaXhpbiA9PiBoYXNIb29rKGhvb2ssIG1peGluKSlcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGluaXRIb29rcyAobXBPcHRpb25zLCBob29rcywgdnVlT3B0aW9ucykge1xyXG4gIGhvb2tzLmZvckVhY2goaG9vayA9PiB7XHJcbiAgICBpZiAoaGFzSG9vayhob29rLCB2dWVPcHRpb25zKSkge1xyXG4gICAgICBtcE9wdGlvbnNbaG9va10gPSBmdW5jdGlvbiAoYXJncykge1xyXG4gICAgICAgIHJldHVybiB0aGlzLiR2bSAmJiB0aGlzLiR2bS5fX2NhbGxfaG9vayhob29rLCBhcmdzKVxyXG4gICAgICB9O1xyXG4gICAgfVxyXG4gIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBpbml0VnVlQ29tcG9uZW50IChWdWUsIHZ1ZU9wdGlvbnMpIHtcclxuICB2dWVPcHRpb25zID0gdnVlT3B0aW9ucy5kZWZhdWx0IHx8IHZ1ZU9wdGlvbnM7XHJcbiAgbGV0IFZ1ZUNvbXBvbmVudDtcclxuICBpZiAoaXNGbih2dWVPcHRpb25zKSkge1xyXG4gICAgVnVlQ29tcG9uZW50ID0gdnVlT3B0aW9ucztcclxuICB9IGVsc2Uge1xyXG4gICAgVnVlQ29tcG9uZW50ID0gVnVlLmV4dGVuZCh2dWVPcHRpb25zKTtcclxuICB9XHJcbiAgdnVlT3B0aW9ucyA9IFZ1ZUNvbXBvbmVudC5vcHRpb25zO1xyXG4gIHJldHVybiBbVnVlQ29tcG9uZW50LCB2dWVPcHRpb25zXVxyXG59XHJcblxyXG5mdW5jdGlvbiBpbml0U2xvdHMgKHZtLCB2dWVTbG90cykge1xyXG4gIGlmIChBcnJheS5pc0FycmF5KHZ1ZVNsb3RzKSAmJiB2dWVTbG90cy5sZW5ndGgpIHtcclxuICAgIGNvbnN0ICRzbG90cyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XHJcbiAgICB2dWVTbG90cy5mb3JFYWNoKHNsb3ROYW1lID0+IHtcclxuICAgICAgJHNsb3RzW3Nsb3ROYW1lXSA9IHRydWU7XHJcbiAgICB9KTtcclxuICAgIHZtLiRzY29wZWRTbG90cyA9IHZtLiRzbG90cyA9ICRzbG90cztcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGluaXRWdWVJZHMgKHZ1ZUlkcywgbXBJbnN0YW5jZSkge1xyXG4gIHZ1ZUlkcyA9ICh2dWVJZHMgfHwgJycpLnNwbGl0KCcsJyk7XHJcbiAgY29uc3QgbGVuID0gdnVlSWRzLmxlbmd0aDtcclxuXHJcbiAgaWYgKGxlbiA9PT0gMSkge1xyXG4gICAgbXBJbnN0YW5jZS5fJHZ1ZUlkID0gdnVlSWRzWzBdO1xyXG4gIH0gZWxzZSBpZiAobGVuID09PSAyKSB7XHJcbiAgICBtcEluc3RhbmNlLl8kdnVlSWQgPSB2dWVJZHNbMF07XHJcbiAgICBtcEluc3RhbmNlLl8kdnVlUGlkID0gdnVlSWRzWzFdO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gaW5pdERhdGEgKHZ1ZU9wdGlvbnMsIGNvbnRleHQpIHtcclxuICBsZXQgZGF0YSA9IHZ1ZU9wdGlvbnMuZGF0YSB8fCB7fTtcclxuICBjb25zdCBtZXRob2RzID0gdnVlT3B0aW9ucy5tZXRob2RzIHx8IHt9O1xyXG5cclxuICBpZiAodHlwZW9mIGRhdGEgPT09ICdmdW5jdGlvbicpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGRhdGEgPSBkYXRhLmNhbGwoY29udGV4dCk7IC8vIOaUr+aMgSBWdWUucHJvdG90eXBlIOS4iuaMgueahOaVsOaNrlxyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuVlVFX0FQUF9ERUJVRykge1xyXG4gICAgICAgIGNvbnNvbGUud2Fybign5qC55o2uIFZ1ZSDnmoQgZGF0YSDlh73mlbDliJ3lp4vljJblsI/nqIvluo8gZGF0YSDlpLHotKXvvIzor7flsL3ph4/noa7kv50gZGF0YSDlh73mlbDkuK3kuI3orr/pl64gdm0g5a+56LGh77yM5ZCm5YiZ5Y+v6IO95b2x5ZON6aaW5qyh5pWw5o2u5riy5p+T6YCf5bqm44CCJywgZGF0YSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9IGVsc2Uge1xyXG4gICAgdHJ5IHtcclxuICAgICAgLy8g5a+5IGRhdGEg5qC85byP5YyWXHJcbiAgICAgIGRhdGEgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KGRhdGEpKTtcclxuICAgIH0gY2F0Y2ggKGUpIHt9XHJcbiAgfVxyXG5cclxuICBpZiAoIWlzUGxhaW5PYmplY3QoZGF0YSkpIHtcclxuICAgIGRhdGEgPSB7fTtcclxuICB9XHJcblxyXG4gIE9iamVjdC5rZXlzKG1ldGhvZHMpLmZvckVhY2gobWV0aG9kTmFtZSA9PiB7XHJcbiAgICBpZiAoY29udGV4dC5fX2xpZmVjeWNsZV9ob29rc19fLmluZGV4T2YobWV0aG9kTmFtZSkgPT09IC0xICYmICFoYXNPd24oZGF0YSwgbWV0aG9kTmFtZSkpIHtcclxuICAgICAgZGF0YVttZXRob2ROYW1lXSA9IG1ldGhvZHNbbWV0aG9kTmFtZV07XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiBkYXRhXHJcbn1cclxuXHJcbmNvbnN0IFBST1BfVFlQRVMgPSBbU3RyaW5nLCBOdW1iZXIsIEJvb2xlYW4sIE9iamVjdCwgQXJyYXksIG51bGxdO1xyXG5cclxuZnVuY3Rpb24gY3JlYXRlT2JzZXJ2ZXIgKG5hbWUpIHtcclxuICByZXR1cm4gZnVuY3Rpb24gb2JzZXJ2ZXIgKG5ld1ZhbCwgb2xkVmFsKSB7XHJcbiAgICBpZiAodGhpcy4kdm0pIHtcclxuICAgICAgdGhpcy4kdm1bbmFtZV0gPSBuZXdWYWw7IC8vIOS4uuS6huinpuWPkeWFtuS7lumdniByZW5kZXIgd2F0Y2hlclxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gaW5pdEJlaGF2aW9ycyAodnVlT3B0aW9ucywgaW5pdEJlaGF2aW9yKSB7XHJcbiAgY29uc3QgdnVlQmVoYXZpb3JzID0gdnVlT3B0aW9ucy5iZWhhdmlvcnM7XHJcbiAgY29uc3QgdnVlRXh0ZW5kcyA9IHZ1ZU9wdGlvbnMuZXh0ZW5kcztcclxuICBjb25zdCB2dWVNaXhpbnMgPSB2dWVPcHRpb25zLm1peGlucztcclxuXHJcbiAgbGV0IHZ1ZVByb3BzID0gdnVlT3B0aW9ucy5wcm9wcztcclxuXHJcbiAgaWYgKCF2dWVQcm9wcykge1xyXG4gICAgdnVlT3B0aW9ucy5wcm9wcyA9IHZ1ZVByb3BzID0gW107XHJcbiAgfVxyXG5cclxuICBjb25zdCBiZWhhdmlvcnMgPSBbXTtcclxuICBpZiAoQXJyYXkuaXNBcnJheSh2dWVCZWhhdmlvcnMpKSB7XHJcbiAgICB2dWVCZWhhdmlvcnMuZm9yRWFjaChiZWhhdmlvciA9PiB7XHJcbiAgICAgIGJlaGF2aW9ycy5wdXNoKGJlaGF2aW9yLnJlcGxhY2UoJ3VuaTovLycsIGAke1wid3hcIn06Ly9gKSk7XHJcbiAgICAgIGlmIChiZWhhdmlvciA9PT0gJ3VuaTovL2Zvcm0tZmllbGQnKSB7XHJcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkodnVlUHJvcHMpKSB7XHJcbiAgICAgICAgICB2dWVQcm9wcy5wdXNoKCduYW1lJyk7XHJcbiAgICAgICAgICB2dWVQcm9wcy5wdXNoKCd2YWx1ZScpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB2dWVQcm9wcy5uYW1lID0ge1xyXG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgICAgICAgIGRlZmF1bHQ6ICcnXHJcbiAgICAgICAgICB9O1xyXG4gICAgICAgICAgdnVlUHJvcHMudmFsdWUgPSB7XHJcbiAgICAgICAgICAgIHR5cGU6IFtTdHJpbmcsIE51bWJlciwgQm9vbGVhbiwgQXJyYXksIE9iamVjdCwgRGF0ZV0sXHJcbiAgICAgICAgICAgIGRlZmF1bHQ6ICcnXHJcbiAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG4gIGlmIChpc1BsYWluT2JqZWN0KHZ1ZUV4dGVuZHMpICYmIHZ1ZUV4dGVuZHMucHJvcHMpIHtcclxuICAgIGJlaGF2aW9ycy5wdXNoKFxyXG4gICAgICBpbml0QmVoYXZpb3Ioe1xyXG4gICAgICAgIHByb3BlcnRpZXM6IGluaXRQcm9wZXJ0aWVzKHZ1ZUV4dGVuZHMucHJvcHMsIHRydWUpXHJcbiAgICAgIH0pXHJcbiAgICApO1xyXG4gIH1cclxuICBpZiAoQXJyYXkuaXNBcnJheSh2dWVNaXhpbnMpKSB7XHJcbiAgICB2dWVNaXhpbnMuZm9yRWFjaCh2dWVNaXhpbiA9PiB7XHJcbiAgICAgIGlmIChpc1BsYWluT2JqZWN0KHZ1ZU1peGluKSAmJiB2dWVNaXhpbi5wcm9wcykge1xyXG4gICAgICAgIGJlaGF2aW9ycy5wdXNoKFxyXG4gICAgICAgICAgaW5pdEJlaGF2aW9yKHtcclxuICAgICAgICAgICAgcHJvcGVydGllczogaW5pdFByb3BlcnRpZXModnVlTWl4aW4ucHJvcHMsIHRydWUpXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuICByZXR1cm4gYmVoYXZpb3JzXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHBhcnNlUHJvcFR5cGUgKGtleSwgdHlwZSwgZGVmYXVsdFZhbHVlLCBmaWxlKSB7XHJcbiAgLy8gW1N0cmluZ109PlN0cmluZ1xyXG4gIGlmIChBcnJheS5pc0FycmF5KHR5cGUpICYmIHR5cGUubGVuZ3RoID09PSAxKSB7XHJcbiAgICByZXR1cm4gdHlwZVswXVxyXG4gIH1cclxuICByZXR1cm4gdHlwZVxyXG59XHJcblxyXG5mdW5jdGlvbiBpbml0UHJvcGVydGllcyAocHJvcHMsIGlzQmVoYXZpb3IgPSBmYWxzZSwgZmlsZSA9ICcnKSB7XHJcbiAgY29uc3QgcHJvcGVydGllcyA9IHt9O1xyXG4gIGlmICghaXNCZWhhdmlvcikge1xyXG4gICAgcHJvcGVydGllcy52dWVJZCA9IHtcclxuICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICB2YWx1ZTogJydcclxuICAgIH07XHJcbiAgICBwcm9wZXJ0aWVzLnZ1ZVNsb3RzID0geyAvLyDlsI/nqIvluo/kuI3og73nm7TmjqXlrprkuYkgJHNsb3RzIOeahCBwcm9wc++8jOaJgOS7pemAmui/hyB2dWVTbG90cyDovazmjaLliLAgJHNsb3RzXHJcbiAgICAgIHR5cGU6IG51bGwsXHJcbiAgICAgIHZhbHVlOiBbXSxcclxuICAgICAgb2JzZXJ2ZXI6IGZ1bmN0aW9uIChuZXdWYWwsIG9sZFZhbCkge1xyXG4gICAgICAgIGNvbnN0ICRzbG90cyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XHJcbiAgICAgICAgbmV3VmFsLmZvckVhY2goc2xvdE5hbWUgPT4ge1xyXG4gICAgICAgICAgJHNsb3RzW3Nsb3ROYW1lXSA9IHRydWU7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICAgICRzbG90c1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gIH1cclxuICBpZiAoQXJyYXkuaXNBcnJheShwcm9wcykpIHsgLy8gWyd0aXRsZSddXHJcbiAgICBwcm9wcy5mb3JFYWNoKGtleSA9PiB7XHJcbiAgICAgIHByb3BlcnRpZXNba2V5XSA9IHtcclxuICAgICAgICB0eXBlOiBudWxsLFxyXG4gICAgICAgIG9ic2VydmVyOiBjcmVhdGVPYnNlcnZlcihrZXkpXHJcbiAgICAgIH07XHJcbiAgICB9KTtcclxuICB9IGVsc2UgaWYgKGlzUGxhaW5PYmplY3QocHJvcHMpKSB7IC8vIHt0aXRsZTp7dHlwZTpTdHJpbmcsZGVmYXVsdDonJ30sY29udGVudDpTdHJpbmd9XHJcbiAgICBPYmplY3Qua2V5cyhwcm9wcykuZm9yRWFjaChrZXkgPT4ge1xyXG4gICAgICBjb25zdCBvcHRzID0gcHJvcHNba2V5XTtcclxuICAgICAgaWYgKGlzUGxhaW5PYmplY3Qob3B0cykpIHsgLy8gdGl0bGU6e3R5cGU6U3RyaW5nLGRlZmF1bHQ6Jyd9XHJcbiAgICAgICAgbGV0IHZhbHVlID0gb3B0cy5kZWZhdWx0O1xyXG4gICAgICAgIGlmIChpc0ZuKHZhbHVlKSkge1xyXG4gICAgICAgICAgdmFsdWUgPSB2YWx1ZSgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgb3B0cy50eXBlID0gcGFyc2VQcm9wVHlwZShrZXksIG9wdHMudHlwZSk7XHJcblxyXG4gICAgICAgIHByb3BlcnRpZXNba2V5XSA9IHtcclxuICAgICAgICAgIHR5cGU6IFBST1BfVFlQRVMuaW5kZXhPZihvcHRzLnR5cGUpICE9PSAtMSA/IG9wdHMudHlwZSA6IG51bGwsXHJcbiAgICAgICAgICB2YWx1ZSxcclxuICAgICAgICAgIG9ic2VydmVyOiBjcmVhdGVPYnNlcnZlcihrZXkpXHJcbiAgICAgICAgfTtcclxuICAgICAgfSBlbHNlIHsgLy8gY29udGVudDpTdHJpbmdcclxuICAgICAgICBjb25zdCB0eXBlID0gcGFyc2VQcm9wVHlwZShrZXksIG9wdHMpO1xyXG4gICAgICAgIHByb3BlcnRpZXNba2V5XSA9IHtcclxuICAgICAgICAgIHR5cGU6IFBST1BfVFlQRVMuaW5kZXhPZih0eXBlKSAhPT0gLTEgPyB0eXBlIDogbnVsbCxcclxuICAgICAgICAgIG9ic2VydmVyOiBjcmVhdGVPYnNlcnZlcihrZXkpXHJcbiAgICAgICAgfTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG4gIHJldHVybiBwcm9wZXJ0aWVzXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHdyYXBwZXIkMSAoZXZlbnQpIHtcclxuICAvLyBUT0RPIOWPiOW+l+WFvOWuuSBtcHZ1ZSDnmoQgbXAg5a+56LGhXHJcbiAgdHJ5IHtcclxuICAgIGV2ZW50Lm1wID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShldmVudCkpO1xyXG4gIH0gY2F0Y2ggKGUpIHt9XHJcblxyXG4gIGV2ZW50LnN0b3BQcm9wYWdhdGlvbiA9IG5vb3A7XHJcbiAgZXZlbnQucHJldmVudERlZmF1bHQgPSBub29wO1xyXG5cclxuICBldmVudC50YXJnZXQgPSBldmVudC50YXJnZXQgfHwge307XHJcblxyXG4gIGlmICghaGFzT3duKGV2ZW50LCAnZGV0YWlsJykpIHtcclxuICAgIGV2ZW50LmRldGFpbCA9IHt9O1xyXG4gIH1cclxuXHJcbiAgaWYgKGhhc093bihldmVudCwgJ21hcmtlcklkJykpIHtcclxuICAgIGV2ZW50LmRldGFpbCA9IHR5cGVvZiBldmVudC5kZXRhaWwgPT09ICdvYmplY3QnID8gZXZlbnQuZGV0YWlsIDoge307XHJcbiAgICBldmVudC5kZXRhaWwubWFya2VySWQgPSBldmVudC5tYXJrZXJJZDtcclxuICB9XHJcblxyXG4gIGlmIChpc1BsYWluT2JqZWN0KGV2ZW50LmRldGFpbCkpIHtcclxuICAgIGV2ZW50LnRhcmdldCA9IE9iamVjdC5hc3NpZ24oe30sIGV2ZW50LnRhcmdldCwgZXZlbnQuZGV0YWlsKTtcclxuICB9XHJcblxyXG4gIHJldHVybiBldmVudFxyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRFeHRyYVZhbHVlICh2bSwgZGF0YVBhdGhzQXJyYXkpIHtcclxuICBsZXQgY29udGV4dCA9IHZtO1xyXG4gIGRhdGFQYXRoc0FycmF5LmZvckVhY2goZGF0YVBhdGhBcnJheSA9PiB7XHJcbiAgICBjb25zdCBkYXRhUGF0aCA9IGRhdGFQYXRoQXJyYXlbMF07XHJcbiAgICBjb25zdCB2YWx1ZSA9IGRhdGFQYXRoQXJyYXlbMl07XHJcbiAgICBpZiAoZGF0YVBhdGggfHwgdHlwZW9mIHZhbHVlICE9PSAndW5kZWZpbmVkJykgeyAvLyBbJycsJycsaW5kZXgsJ2Rpc2FibGUnXVxyXG4gICAgICBjb25zdCBwcm9wUGF0aCA9IGRhdGFQYXRoQXJyYXlbMV07XHJcbiAgICAgIGNvbnN0IHZhbHVlUGF0aCA9IGRhdGFQYXRoQXJyYXlbM107XHJcblxyXG4gICAgICBjb25zdCB2Rm9yID0gZGF0YVBhdGggPyB2bS5fX2dldF92YWx1ZShkYXRhUGF0aCwgY29udGV4dCkgOiBjb250ZXh0O1xyXG5cclxuICAgICAgaWYgKE51bWJlci5pc0ludGVnZXIodkZvcikpIHtcclxuICAgICAgICBjb250ZXh0ID0gdmFsdWU7XHJcbiAgICAgIH0gZWxzZSBpZiAoIXByb3BQYXRoKSB7XHJcbiAgICAgICAgY29udGV4dCA9IHZGb3JbdmFsdWVdO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KHZGb3IpKSB7XHJcbiAgICAgICAgICBjb250ZXh0ID0gdkZvci5maW5kKHZGb3JJdGVtID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHZtLl9fZ2V0X3ZhbHVlKHByb3BQYXRoLCB2Rm9ySXRlbSkgPT09IHZhbHVlXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9IGVsc2UgaWYgKGlzUGxhaW5PYmplY3QodkZvcikpIHtcclxuICAgICAgICAgIGNvbnRleHQgPSBPYmplY3Qua2V5cyh2Rm9yKS5maW5kKHZGb3JLZXkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gdm0uX19nZXRfdmFsdWUocHJvcFBhdGgsIHZGb3JbdkZvcktleV0pID09PSB2YWx1ZVxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ3YtZm9yIOaaguS4jeaUr+aMgeW+queOr+aVsOaNru+8micsIHZGb3IpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKHZhbHVlUGF0aCkge1xyXG4gICAgICAgIGNvbnRleHQgPSB2bS5fX2dldF92YWx1ZSh2YWx1ZVBhdGgsIGNvbnRleHQpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSk7XHJcbiAgcmV0dXJuIGNvbnRleHRcclxufVxyXG5cclxuZnVuY3Rpb24gcHJvY2Vzc0V2ZW50RXh0cmEgKHZtLCBleHRyYSwgZXZlbnQpIHtcclxuICBjb25zdCBleHRyYU9iaiA9IHt9O1xyXG5cclxuICBpZiAoQXJyYXkuaXNBcnJheShleHRyYSkgJiYgZXh0cmEubGVuZ3RoKSB7XHJcbiAgICAvKipcclxuICAgICAqW1xyXG4gICAgICogICAgWydkYXRhLml0ZW1zJywgJ2RhdGEuaWQnLCBpdGVtLmRhdGEuaWRdLFxyXG4gICAgICogICAgWydtZXRhcycsICdpZCcsIG1ldGEuaWRdXHJcbiAgICAgKl0sXHJcbiAgICAgKltcclxuICAgICAqICAgIFsnZGF0YS5pdGVtcycsICdkYXRhLmlkJywgaXRlbS5kYXRhLmlkXSxcclxuICAgICAqICAgIFsnbWV0YXMnLCAnaWQnLCBtZXRhLmlkXVxyXG4gICAgICpdLFxyXG4gICAgICondGVzdCdcclxuICAgICAqL1xyXG4gICAgZXh0cmEuZm9yRWFjaCgoZGF0YVBhdGgsIGluZGV4KSA9PiB7XHJcbiAgICAgIGlmICh0eXBlb2YgZGF0YVBhdGggPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgICAgaWYgKCFkYXRhUGF0aCkgeyAvLyBtb2RlbCxwcm9wLnN5bmNcclxuICAgICAgICAgIGV4dHJhT2JqWyckJyArIGluZGV4XSA9IHZtO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBpZiAoZGF0YVBhdGggPT09ICckZXZlbnQnKSB7IC8vICRldmVudFxyXG4gICAgICAgICAgICBleHRyYU9ialsnJCcgKyBpbmRleF0gPSBldmVudDtcclxuICAgICAgICAgIH0gZWxzZSBpZiAoZGF0YVBhdGguaW5kZXhPZignJGV2ZW50LicpID09PSAwKSB7IC8vICRldmVudC50YXJnZXQudmFsdWVcclxuICAgICAgICAgICAgZXh0cmFPYmpbJyQnICsgaW5kZXhdID0gdm0uX19nZXRfdmFsdWUoZGF0YVBhdGgucmVwbGFjZSgnJGV2ZW50LicsICcnKSwgZXZlbnQpO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZXh0cmFPYmpbJyQnICsgaW5kZXhdID0gdm0uX19nZXRfdmFsdWUoZGF0YVBhdGgpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBleHRyYU9ialsnJCcgKyBpbmRleF0gPSBnZXRFeHRyYVZhbHVlKHZtLCBkYXRhUGF0aCk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGV4dHJhT2JqXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldE9iakJ5QXJyYXkgKGFycikge1xyXG4gIGNvbnN0IG9iaiA9IHt9O1xyXG4gIGZvciAobGV0IGkgPSAxOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7XHJcbiAgICBjb25zdCBlbGVtZW50ID0gYXJyW2ldO1xyXG4gICAgb2JqW2VsZW1lbnRbMF1dID0gZWxlbWVudFsxXTtcclxuICB9XHJcbiAgcmV0dXJuIG9ialxyXG59XHJcblxyXG5mdW5jdGlvbiBwcm9jZXNzRXZlbnRBcmdzICh2bSwgZXZlbnQsIGFyZ3MgPSBbXSwgZXh0cmEgPSBbXSwgaXNDdXN0b20sIG1ldGhvZE5hbWUpIHtcclxuICBsZXQgaXNDdXN0b21NUEV2ZW50ID0gZmFsc2U7IC8vIHd4Y29tcG9uZW50IOe7hOS7tu+8jOS8oOmAkuWOn+WniyBldmVudCDlr7nosaFcclxuICBpZiAoaXNDdXN0b20pIHsgLy8g6Ieq5a6a5LmJ5LqL5Lu2XHJcbiAgICBpc0N1c3RvbU1QRXZlbnQgPSBldmVudC5jdXJyZW50VGFyZ2V0ICYmXHJcbiAgICAgIGV2ZW50LmN1cnJlbnRUYXJnZXQuZGF0YXNldCAmJlxyXG4gICAgICBldmVudC5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuY29tVHlwZSA9PT0gJ3d4JztcclxuICAgIGlmICghYXJncy5sZW5ndGgpIHsgLy8g5peg5Y+C5pWw77yM55u05o6l5Lyg5YWlIGV2ZW50IOaIliBkZXRhaWwg5pWw57uEXHJcbiAgICAgIGlmIChpc0N1c3RvbU1QRXZlbnQpIHtcclxuICAgICAgICByZXR1cm4gW2V2ZW50XVxyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBldmVudC5kZXRhaWwuX19hcmdzX18gfHwgZXZlbnQuZGV0YWlsXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb25zdCBleHRyYU9iaiA9IHByb2Nlc3NFdmVudEV4dHJhKHZtLCBleHRyYSwgZXZlbnQpO1xyXG5cclxuICBjb25zdCByZXQgPSBbXTtcclxuICBhcmdzLmZvckVhY2goYXJnID0+IHtcclxuICAgIGlmIChhcmcgPT09ICckZXZlbnQnKSB7XHJcbiAgICAgIGlmIChtZXRob2ROYW1lID09PSAnX19zZXRfbW9kZWwnICYmICFpc0N1c3RvbSkgeyAvLyBpbnB1dCB2LW1vZGVsIHZhbHVlXHJcbiAgICAgICAgcmV0LnB1c2goZXZlbnQudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBpZiAoaXNDdXN0b20gJiYgIWlzQ3VzdG9tTVBFdmVudCkge1xyXG4gICAgICAgICAgcmV0LnB1c2goZXZlbnQuZGV0YWlsLl9fYXJnc19fWzBdKTtcclxuICAgICAgICB9IGVsc2UgeyAvLyB3eGNvbXBvbmVudCDnu4Tku7bmiJblhoXnva7nu4Tku7ZcclxuICAgICAgICAgIHJldC5wdXNoKGV2ZW50KTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGlmIChBcnJheS5pc0FycmF5KGFyZykgJiYgYXJnWzBdID09PSAnbycpIHtcclxuICAgICAgICByZXQucHVzaChnZXRPYmpCeUFycmF5KGFyZykpO1xyXG4gICAgICB9IGVsc2UgaWYgKHR5cGVvZiBhcmcgPT09ICdzdHJpbmcnICYmIGhhc093bihleHRyYU9iaiwgYXJnKSkge1xyXG4gICAgICAgIHJldC5wdXNoKGV4dHJhT2JqW2FyZ10pO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldC5wdXNoKGFyZyk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIHJldFxyXG59XHJcblxyXG5jb25zdCBPTkNFID0gJ34nO1xyXG5jb25zdCBDVVNUT00gPSAnXic7XHJcblxyXG5mdW5jdGlvbiBpc01hdGNoRXZlbnRUeXBlIChldmVudFR5cGUsIG9wdFR5cGUpIHtcclxuICByZXR1cm4gKGV2ZW50VHlwZSA9PT0gb3B0VHlwZSkgfHxcclxuICAgIChcclxuICAgICAgb3B0VHlwZSA9PT0gJ3JlZ2lvbmNoYW5nZScgJiZcclxuICAgICAgKFxyXG4gICAgICAgIGV2ZW50VHlwZSA9PT0gJ2JlZ2luJyB8fFxyXG4gICAgICAgIGV2ZW50VHlwZSA9PT0gJ2VuZCdcclxuICAgICAgKVxyXG4gICAgKVxyXG59XHJcblxyXG5mdW5jdGlvbiBoYW5kbGVFdmVudCAoZXZlbnQpIHtcclxuICBldmVudCA9IHdyYXBwZXIkMShldmVudCk7XHJcblxyXG4gIC8vIFtbJ3RhcCcsW1snaGFuZGxlJyxbMSwyLGFdXSxbJ2hhbmRsZTEnLFsxLDIsYV1dXV1dXHJcbiAgY29uc3QgZGF0YXNldCA9IChldmVudC5jdXJyZW50VGFyZ2V0IHx8IGV2ZW50LnRhcmdldCkuZGF0YXNldDtcclxuICBpZiAoIWRhdGFzZXQpIHtcclxuICAgIHJldHVybiBjb25zb2xlLndhcm4oJ+S6i+S7tuS/oeaBr+S4jeWtmOWcqCcpXHJcbiAgfVxyXG4gIGNvbnN0IGV2ZW50T3B0cyA9IGRhdGFzZXQuZXZlbnRPcHRzIHx8IGRhdGFzZXRbJ2V2ZW50LW9wdHMnXTsgLy8g5pSv5LuY5a6dIHdlYi12aWV3IOe7hOS7tiBkYXRhc2V0IOmdnumpvOWzsFxyXG4gIGlmICghZXZlbnRPcHRzKSB7XHJcbiAgICByZXR1cm4gY29uc29sZS53YXJuKCfkuovku7bkv6Hmga/kuI3lrZjlnKgnKVxyXG4gIH1cclxuXHJcbiAgLy8gW1snaGFuZGxlJyxbMSwyLGFdXSxbJ2hhbmRsZTEnLFsxLDIsYV1dXVxyXG4gIGNvbnN0IGV2ZW50VHlwZSA9IGV2ZW50LnR5cGU7XHJcblxyXG4gIGNvbnN0IHJldCA9IFtdO1xyXG5cclxuICBldmVudE9wdHMuZm9yRWFjaChldmVudE9wdCA9PiB7XHJcbiAgICBsZXQgdHlwZSA9IGV2ZW50T3B0WzBdO1xyXG4gICAgY29uc3QgZXZlbnRzQXJyYXkgPSBldmVudE9wdFsxXTtcclxuXHJcbiAgICBjb25zdCBpc0N1c3RvbSA9IHR5cGUuY2hhckF0KDApID09PSBDVVNUT007XHJcbiAgICB0eXBlID0gaXNDdXN0b20gPyB0eXBlLnNsaWNlKDEpIDogdHlwZTtcclxuICAgIGNvbnN0IGlzT25jZSA9IHR5cGUuY2hhckF0KDApID09PSBPTkNFO1xyXG4gICAgdHlwZSA9IGlzT25jZSA/IHR5cGUuc2xpY2UoMSkgOiB0eXBlO1xyXG5cclxuICAgIGlmIChldmVudHNBcnJheSAmJiBpc01hdGNoRXZlbnRUeXBlKGV2ZW50VHlwZSwgdHlwZSkpIHtcclxuICAgICAgZXZlbnRzQXJyYXkuZm9yRWFjaChldmVudEFycmF5ID0+IHtcclxuICAgICAgICBjb25zdCBtZXRob2ROYW1lID0gZXZlbnRBcnJheVswXTtcclxuICAgICAgICBpZiAobWV0aG9kTmFtZSkge1xyXG4gICAgICAgICAgbGV0IGhhbmRsZXJDdHggPSB0aGlzLiR2bTtcclxuICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgaGFuZGxlckN0eC4kb3B0aW9ucy5nZW5lcmljICYmXHJcbiAgICAgICAgICAgIGhhbmRsZXJDdHguJHBhcmVudCAmJlxyXG4gICAgICAgICAgICBoYW5kbGVyQ3R4LiRwYXJlbnQuJHBhcmVudFxyXG4gICAgICAgICAgKSB7IC8vIG1wLXdlaXhpbixtcC10b3V0aWFvIOaKveixoeiKgueCueaooeaLnyBzY29wZWQgc2xvdHNcclxuICAgICAgICAgICAgaGFuZGxlckN0eCA9IGhhbmRsZXJDdHguJHBhcmVudC4kcGFyZW50O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaWYgKG1ldGhvZE5hbWUgPT09ICckZW1pdCcpIHtcclxuICAgICAgICAgICAgaGFuZGxlckN0eC4kZW1pdC5hcHBseShoYW5kbGVyQ3R4LFxyXG4gICAgICAgICAgICAgIHByb2Nlc3NFdmVudEFyZ3MoXHJcbiAgICAgICAgICAgICAgICB0aGlzLiR2bSxcclxuICAgICAgICAgICAgICAgIGV2ZW50LFxyXG4gICAgICAgICAgICAgICAgZXZlbnRBcnJheVsxXSxcclxuICAgICAgICAgICAgICAgIGV2ZW50QXJyYXlbMl0sXHJcbiAgICAgICAgICAgICAgICBpc0N1c3RvbSxcclxuICAgICAgICAgICAgICAgIG1ldGhvZE5hbWVcclxuICAgICAgICAgICAgICApKTtcclxuICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBjb25zdCBoYW5kbGVyID0gaGFuZGxlckN0eFttZXRob2ROYW1lXTtcclxuICAgICAgICAgIGlmICghaXNGbihoYW5kbGVyKSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYCBfdm0uJHttZXRob2ROYW1lfSBpcyBub3QgYSBmdW5jdGlvbmApXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpZiAoaXNPbmNlKSB7XHJcbiAgICAgICAgICAgIGlmIChoYW5kbGVyLm9uY2UpIHtcclxuICAgICAgICAgICAgICByZXR1cm5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBoYW5kbGVyLm9uY2UgPSB0cnVlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgcmV0LnB1c2goaGFuZGxlci5hcHBseShoYW5kbGVyQ3R4LCBwcm9jZXNzRXZlbnRBcmdzKFxyXG4gICAgICAgICAgICB0aGlzLiR2bSxcclxuICAgICAgICAgICAgZXZlbnQsXHJcbiAgICAgICAgICAgIGV2ZW50QXJyYXlbMV0sXHJcbiAgICAgICAgICAgIGV2ZW50QXJyYXlbMl0sXHJcbiAgICAgICAgICAgIGlzQ3VzdG9tLFxyXG4gICAgICAgICAgICBtZXRob2ROYW1lXHJcbiAgICAgICAgICApKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgaWYgKFxyXG4gICAgZXZlbnRUeXBlID09PSAnaW5wdXQnICYmXHJcbiAgICByZXQubGVuZ3RoID09PSAxICYmXHJcbiAgICB0eXBlb2YgcmV0WzBdICE9PSAndW5kZWZpbmVkJ1xyXG4gICkge1xyXG4gICAgcmV0dXJuIHJldFswXVxyXG4gIH1cclxufVxyXG5cclxuY29uc3QgaG9va3MgPSBbXHJcbiAgJ29uU2hvdycsXHJcbiAgJ29uSGlkZScsXHJcbiAgJ29uRXJyb3InLFxyXG4gICdvblBhZ2VOb3RGb3VuZCdcclxuXTtcclxuXHJcbmZ1bmN0aW9uIHBhcnNlQmFzZUFwcCAodm0sIHtcclxuICBtb2NrcyxcclxuICBpbml0UmVmc1xyXG59KSB7XHJcbiAgaWYgKHZtLiRvcHRpb25zLnN0b3JlKSB7XHJcbiAgICBWdWUucHJvdG90eXBlLiRzdG9yZSA9IHZtLiRvcHRpb25zLnN0b3JlO1xyXG4gIH1cclxuXHJcbiAgVnVlLnByb3RvdHlwZS5tcEhvc3QgPSBcIm1wLXFxXCI7XHJcblxyXG4gIFZ1ZS5taXhpbih7XHJcbiAgICBiZWZvcmVDcmVhdGUgKCkge1xyXG4gICAgICBpZiAoIXRoaXMuJG9wdGlvbnMubXBUeXBlKSB7XHJcbiAgICAgICAgcmV0dXJuXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRoaXMubXBUeXBlID0gdGhpcy4kb3B0aW9ucy5tcFR5cGU7XHJcblxyXG4gICAgICB0aGlzLiRtcCA9IHtcclxuICAgICAgICBkYXRhOiB7fSxcclxuICAgICAgICBbdGhpcy5tcFR5cGVdOiB0aGlzLiRvcHRpb25zLm1wSW5zdGFuY2VcclxuICAgICAgfTtcclxuXHJcbiAgICAgIHRoaXMuJHNjb3BlID0gdGhpcy4kb3B0aW9ucy5tcEluc3RhbmNlO1xyXG5cclxuICAgICAgZGVsZXRlIHRoaXMuJG9wdGlvbnMubXBUeXBlO1xyXG4gICAgICBkZWxldGUgdGhpcy4kb3B0aW9ucy5tcEluc3RhbmNlO1xyXG5cclxuICAgICAgaWYgKHRoaXMubXBUeXBlICE9PSAnYXBwJykge1xyXG4gICAgICAgIGluaXRSZWZzKHRoaXMpO1xyXG4gICAgICAgIGluaXRNb2Nrcyh0aGlzLCBtb2Nrcyk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgY29uc3QgYXBwT3B0aW9ucyA9IHtcclxuICAgIG9uTGF1bmNoIChhcmdzKSB7XHJcbiAgICAgIGlmICh0aGlzLiR2bSkgeyAvLyDlt7Lnu4/liJ3lp4vljJbov4fkuobvvIzkuLvopoHmmK/kuLrkuobnmb7luqbvvIznmb7luqYgb25TaG93IOWcqCBvbkxhdW5jaCDkuYvliY1cclxuICAgICAgICByZXR1cm5cclxuICAgICAgfVxyXG4gICAgICB7XHJcbiAgICAgICAgaWYgKCF3eC5jYW5JVXNlKCduZXh0VGljaycpKSB7IC8vIOS6i+WuniDkuIoyLjIuMyDljbPlj6/vvIznroDljZXkvb/nlKggMi4zLjAg55qEIG5leHRUaWNrIOWIpOaWrVxyXG4gICAgICAgICAgY29uc29sZS5lcnJvcign5b2T5YmN5b6u5L+h5Z+656GA5bqT54mI5pys6L+H5L2O77yM6K+35bCGIOW+ruS/oeW8gOWPkeiAheW3peWFty3or6bmg4Ut6aG555uu6K6+572uLeiwg+ivleWfuuehgOW6k+eJiOacrCDmm7TmjaLkuLpgMi4zLjBg5Lul5LiKJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICB0aGlzLiR2bSA9IHZtO1xyXG5cclxuICAgICAgdGhpcy4kdm0uJG1wID0ge1xyXG4gICAgICAgIGFwcDogdGhpc1xyXG4gICAgICB9O1xyXG5cclxuICAgICAgdGhpcy4kdm0uJHNjb3BlID0gdGhpcztcclxuICAgICAgLy8gdm0g5LiK5Lmf5oyC6L29IGdsb2JhbERhdGFcclxuICAgICAgdGhpcy4kdm0uZ2xvYmFsRGF0YSA9IHRoaXMuZ2xvYmFsRGF0YTtcclxuXHJcbiAgICAgIHRoaXMuJHZtLl9pc01vdW50ZWQgPSB0cnVlO1xyXG4gICAgICB0aGlzLiR2bS5fX2NhbGxfaG9vaygnbW91bnRlZCcsIGFyZ3MpO1xyXG5cclxuICAgICAgdGhpcy4kdm0uX19jYWxsX2hvb2soJ29uTGF1bmNoJywgYXJncyk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgLy8g5YW85a655pen54mI5pysIGdsb2JhbERhdGFcclxuICBhcHBPcHRpb25zLmdsb2JhbERhdGEgPSB2bS4kb3B0aW9ucy5nbG9iYWxEYXRhIHx8IHt9O1xyXG4gIC8vIOWwhiBtZXRob2RzIOS4reeahOaWueazleaMguWcqCBnZXRBcHAoKSDkuK1cclxuICBjb25zdCBtZXRob2RzID0gdm0uJG9wdGlvbnMubWV0aG9kcztcclxuICBpZiAobWV0aG9kcykge1xyXG4gICAgT2JqZWN0LmtleXMobWV0aG9kcykuZm9yRWFjaChuYW1lID0+IHtcclxuICAgICAgYXBwT3B0aW9uc1tuYW1lXSA9IG1ldGhvZHNbbmFtZV07XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGluaXRIb29rcyhhcHBPcHRpb25zLCBob29rcyk7XHJcblxyXG4gIHJldHVybiBhcHBPcHRpb25zXHJcbn1cclxuXHJcbmNvbnN0IG1vY2tzID0gWydfX3JvdXRlX18nLCAnX193eEV4cGFyc2VyTm9kZUlkX18nLCAnX193eFdlYnZpZXdJZF9fJ107XHJcblxyXG5mdW5jdGlvbiBmaW5kVm1CeVZ1ZUlkICh2bSwgdnVlUGlkKSB7XHJcbiAgY29uc3QgJGNoaWxkcmVuID0gdm0uJGNoaWxkcmVuO1xyXG4gIC8vIOS8mOWFiOafpeaJvuebtOWxnijlj43lkJHmn6Xmib46aHR0cHM6Ly9naXRodWIuY29tL2RjbG91ZGlvL3VuaS1hcHAvaXNzdWVzLzEyMDApXHJcbiAgZm9yIChsZXQgaSA9ICRjaGlsZHJlbi5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xyXG4gICAgY29uc3QgY2hpbGRWbSA9ICRjaGlsZHJlbltpXTtcclxuICAgIGlmIChjaGlsZFZtLiRzY29wZS5fJHZ1ZUlkID09PSB2dWVQaWQpIHtcclxuICAgICAgcmV0dXJuIGNoaWxkVm1cclxuICAgIH1cclxuICB9XHJcbiAgLy8g5Y+N5ZCR6YCS5b2S5p+l5om+XHJcbiAgbGV0IHBhcmVudFZtO1xyXG4gIGZvciAobGV0IGkgPSAkY2hpbGRyZW4ubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcclxuICAgIHBhcmVudFZtID0gZmluZFZtQnlWdWVJZCgkY2hpbGRyZW5baV0sIHZ1ZVBpZCk7XHJcbiAgICBpZiAocGFyZW50Vm0pIHtcclxuICAgICAgcmV0dXJuIHBhcmVudFZtXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBpbml0QmVoYXZpb3IgKG9wdGlvbnMpIHtcclxuICByZXR1cm4gQmVoYXZpb3Iob3B0aW9ucylcclxufVxyXG5cclxuZnVuY3Rpb24gaXNQYWdlICgpIHtcclxuICByZXR1cm4gISF0aGlzLnJvdXRlXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGluaXRSZWxhdGlvbiAoZGV0YWlsKSB7XHJcbiAgdGhpcy50cmlnZ2VyRXZlbnQoJ19fbCcsIGRldGFpbCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGluaXRSZWZzICh2bSkge1xyXG4gIGNvbnN0IG1wSW5zdGFuY2UgPSB2bS4kc2NvcGU7XHJcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHZtLCAnJHJlZnMnLCB7XHJcbiAgICBnZXQgKCkge1xyXG4gICAgICBjb25zdCAkcmVmcyA9IHt9O1xyXG4gICAgICBjb25zdCBjb21wb25lbnRzID0gbXBJbnN0YW5jZS5zZWxlY3RBbGxDb21wb25lbnRzKCcudnVlLXJlZicpO1xyXG4gICAgICBjb21wb25lbnRzLmZvckVhY2goY29tcG9uZW50ID0+IHtcclxuICAgICAgICBjb25zdCByZWYgPSBjb21wb25lbnQuZGF0YXNldC5yZWY7XHJcbiAgICAgICAgJHJlZnNbcmVmXSA9IGNvbXBvbmVudC4kdm0gfHwgY29tcG9uZW50O1xyXG4gICAgICB9KTtcclxuICAgICAgY29uc3QgZm9yQ29tcG9uZW50cyA9IG1wSW5zdGFuY2Uuc2VsZWN0QWxsQ29tcG9uZW50cygnLnZ1ZS1yZWYtaW4tZm9yJyk7XHJcbiAgICAgIGZvckNvbXBvbmVudHMuZm9yRWFjaChjb21wb25lbnQgPT4ge1xyXG4gICAgICAgIGNvbnN0IHJlZiA9IGNvbXBvbmVudC5kYXRhc2V0LnJlZjtcclxuICAgICAgICBpZiAoISRyZWZzW3JlZl0pIHtcclxuICAgICAgICAgICRyZWZzW3JlZl0gPSBbXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgJHJlZnNbcmVmXS5wdXNoKGNvbXBvbmVudC4kdm0gfHwgY29tcG9uZW50KTtcclxuICAgICAgfSk7XHJcbiAgICAgIHJldHVybiAkcmVmc1xyXG4gICAgfVxyXG4gIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBoYW5kbGVMaW5rIChldmVudCkge1xyXG4gIGNvbnN0IHtcclxuICAgIHZ1ZVBpZCxcclxuICAgIHZ1ZU9wdGlvbnNcclxuICB9ID0gZXZlbnQuZGV0YWlsIHx8IGV2ZW50LnZhbHVlOyAvLyBkZXRhaWwg5piv5b6u5L+hLHZhbHVlIOaYr+eZvuW6pihkaXBhdGNoKVxyXG5cclxuICBsZXQgcGFyZW50Vm07XHJcblxyXG4gIGlmICh2dWVQaWQpIHtcclxuICAgIHBhcmVudFZtID0gZmluZFZtQnlWdWVJZCh0aGlzLiR2bSwgdnVlUGlkKTtcclxuICB9XHJcblxyXG4gIGlmICghcGFyZW50Vm0pIHtcclxuICAgIHBhcmVudFZtID0gdGhpcy4kdm07XHJcbiAgfVxyXG5cclxuICB2dWVPcHRpb25zLnBhcmVudCA9IHBhcmVudFZtO1xyXG59XHJcblxyXG5mdW5jdGlvbiBwYXJzZUFwcCAodm0pIHtcclxuICByZXR1cm4gcGFyc2VCYXNlQXBwKHZtLCB7XHJcbiAgICBtb2NrcyxcclxuICAgIGluaXRSZWZzXHJcbiAgfSlcclxufVxyXG5cclxuZnVuY3Rpb24gcGFyc2VBcHAkMSAodm0pIHtcclxuICByZXR1cm4gcGFyc2VBcHAodm0pXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUFwcCAodm0pIHtcclxuICBBcHAocGFyc2VBcHAkMSh2bSkpO1xyXG4gIHJldHVybiB2bVxyXG59XHJcblxyXG5mdW5jdGlvbiBwYXJzZUJhc2VDb21wb25lbnQgKHZ1ZUNvbXBvbmVudE9wdGlvbnMsIHtcclxuICBpc1BhZ2UsXHJcbiAgaW5pdFJlbGF0aW9uXHJcbn0gPSB7fSkge1xyXG4gIGNvbnN0IFtWdWVDb21wb25lbnQsIHZ1ZU9wdGlvbnNdID0gaW5pdFZ1ZUNvbXBvbmVudChWdWUsIHZ1ZUNvbXBvbmVudE9wdGlvbnMpO1xyXG5cclxuICBjb25zdCBvcHRpb25zID0ge1xyXG4gICAgbXVsdGlwbGVTbG90czogdHJ1ZSxcclxuICAgIGFkZEdsb2JhbENsYXNzOiB0cnVlLFxyXG4gICAgLi4uKHZ1ZU9wdGlvbnMub3B0aW9ucyB8fCB7fSlcclxuICB9O1xyXG5cclxuICB7XHJcbiAgICAvLyDlvq7kv6EgbXVsdGlwbGVTbG90cyDpg6jliIbmg4XlhrXmnIkgYnVn77yM5a+86Ie05YaF5a656aG65bqP6ZSZ5LmxIOWmgiB1LWxpc3TvvIzmj5Dkvpvopobnm5bpgInpoblcclxuICAgIGlmICh2dWVPcHRpb25zWydtcC13ZWl4aW4nXSAmJiB2dWVPcHRpb25zWydtcC13ZWl4aW4nXS5vcHRpb25zKSB7XHJcbiAgICAgIE9iamVjdC5hc3NpZ24ob3B0aW9ucywgdnVlT3B0aW9uc1snbXAtd2VpeGluJ10ub3B0aW9ucyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb25zdCBjb21wb25lbnRPcHRpb25zID0ge1xyXG4gICAgb3B0aW9ucyxcclxuICAgIGRhdGE6IGluaXREYXRhKHZ1ZU9wdGlvbnMsIFZ1ZS5wcm90b3R5cGUpLFxyXG4gICAgYmVoYXZpb3JzOiBpbml0QmVoYXZpb3JzKHZ1ZU9wdGlvbnMsIGluaXRCZWhhdmlvciksXHJcbiAgICBwcm9wZXJ0aWVzOiBpbml0UHJvcGVydGllcyh2dWVPcHRpb25zLnByb3BzLCBmYWxzZSwgdnVlT3B0aW9ucy5fX2ZpbGUpLFxyXG4gICAgbGlmZXRpbWVzOiB7XHJcbiAgICAgIGF0dGFjaGVkICgpIHtcclxuICAgICAgICBjb25zdCBwcm9wZXJ0aWVzID0gdGhpcy5wcm9wZXJ0aWVzO1xyXG5cclxuICAgICAgICBjb25zdCBvcHRpb25zID0ge1xyXG4gICAgICAgICAgbXBUeXBlOiBpc1BhZ2UuY2FsbCh0aGlzKSA/ICdwYWdlJyA6ICdjb21wb25lbnQnLFxyXG4gICAgICAgICAgbXBJbnN0YW5jZTogdGhpcyxcclxuICAgICAgICAgIHByb3BzRGF0YTogcHJvcGVydGllc1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGluaXRWdWVJZHMocHJvcGVydGllcy52dWVJZCwgdGhpcyk7XHJcblxyXG4gICAgICAgIC8vIOWkhOeQhueItuWtkOWFs+ezu1xyXG4gICAgICAgIGluaXRSZWxhdGlvbi5jYWxsKHRoaXMsIHtcclxuICAgICAgICAgIHZ1ZVBpZDogdGhpcy5fJHZ1ZVBpZCxcclxuICAgICAgICAgIHZ1ZU9wdGlvbnM6IG9wdGlvbnNcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8g5Yid5aeL5YyWIHZ1ZSDlrp7kvotcclxuICAgICAgICB0aGlzLiR2bSA9IG5ldyBWdWVDb21wb25lbnQob3B0aW9ucyk7XHJcblxyXG4gICAgICAgIC8vIOWkhOeQhiRzbG90cywkc2NvcGVkU2xvdHPvvIjmmoLkuI3mlK/mjIHliqjmgIHlj5jljJYkc2xvdHPvvIlcclxuICAgICAgICBpbml0U2xvdHModGhpcy4kdm0sIHByb3BlcnRpZXMudnVlU2xvdHMpO1xyXG5cclxuICAgICAgICAvLyDop6blj5HpppbmrKEgc2V0RGF0YVxyXG4gICAgICAgIHRoaXMuJHZtLiRtb3VudCgpO1xyXG4gICAgICB9LFxyXG4gICAgICByZWFkeSAoKSB7XHJcbiAgICAgICAgLy8g5b2T57uE5Lu2IHByb3BzIOm7mOiupOWAvOS4uiB0cnVl77yM5Yid5aeL5YyW5pe25Lyg5YWlIGZhbHNlIOS8muWvvOiHtCBjcmVhdGVkLHJlYWR5IOinpuWPkSwg5L2GIGF0dGFjaGVkIOS4jeinpuWPkVxyXG4gICAgICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVycy53ZWl4aW4ucXEuY29tL2NvbW11bml0eS9kZXZlbG9wL2RvYy8wMDA2NmFlMjg0NGNjMGY4ZWI4ODNlMmE1NTc4MDBcclxuICAgICAgICBpZiAodGhpcy4kdm0pIHtcclxuICAgICAgICAgIHRoaXMuJHZtLl9pc01vdW50ZWQgPSB0cnVlO1xyXG4gICAgICAgICAgdGhpcy4kdm0uX19jYWxsX2hvb2soJ21vdW50ZWQnKTtcclxuICAgICAgICAgIHRoaXMuJHZtLl9fY2FsbF9ob29rKCdvblJlYWR5Jyk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgICBkZXRhY2hlZCAoKSB7XHJcbiAgICAgICAgdGhpcy4kdm0gJiYgdGhpcy4kdm0uJGRlc3Ryb3koKTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIHBhZ2VMaWZldGltZXM6IHtcclxuICAgICAgc2hvdyAoYXJncykge1xyXG4gICAgICAgIHRoaXMuJHZtICYmIHRoaXMuJHZtLl9fY2FsbF9ob29rKCdvblBhZ2VTaG93JywgYXJncyk7XHJcbiAgICAgIH0sXHJcbiAgICAgIGhpZGUgKCkge1xyXG4gICAgICAgIHRoaXMuJHZtICYmIHRoaXMuJHZtLl9fY2FsbF9ob29rKCdvblBhZ2VIaWRlJyk7XHJcbiAgICAgIH0sXHJcbiAgICAgIHJlc2l6ZSAoc2l6ZSkge1xyXG4gICAgICAgIHRoaXMuJHZtICYmIHRoaXMuJHZtLl9fY2FsbF9ob29rKCdvblBhZ2VSZXNpemUnLCBzaXplKTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIG1ldGhvZHM6IHtcclxuICAgICAgX19sOiBoYW5kbGVMaW5rLFxyXG4gICAgICBfX2U6IGhhbmRsZUV2ZW50XHJcbiAgICB9XHJcbiAgfTtcclxuICAvLyBleHRlcm5hbENsYXNzZXNcclxuICBpZiAodnVlT3B0aW9ucy5leHRlcm5hbENsYXNzZXMpIHtcclxuICAgIGNvbXBvbmVudE9wdGlvbnMuZXh0ZXJuYWxDbGFzc2VzID0gdnVlT3B0aW9ucy5leHRlcm5hbENsYXNzZXM7XHJcbiAgfVxyXG5cclxuICBpZiAoQXJyYXkuaXNBcnJheSh2dWVPcHRpb25zLnd4c0NhbGxNZXRob2RzKSkge1xyXG4gICAgdnVlT3B0aW9ucy53eHNDYWxsTWV0aG9kcy5mb3JFYWNoKGNhbGxNZXRob2QgPT4ge1xyXG4gICAgICBjb21wb25lbnRPcHRpb25zLm1ldGhvZHNbY2FsbE1ldGhvZF0gPSBmdW5jdGlvbiAoYXJncykge1xyXG4gICAgICAgIHJldHVybiB0aGlzLiR2bVtjYWxsTWV0aG9kXShhcmdzKVxyXG4gICAgICB9O1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBpZiAoaXNQYWdlKSB7XHJcbiAgICByZXR1cm4gY29tcG9uZW50T3B0aW9uc1xyXG4gIH1cclxuICByZXR1cm4gW2NvbXBvbmVudE9wdGlvbnMsIFZ1ZUNvbXBvbmVudF1cclxufVxyXG5cclxuZnVuY3Rpb24gcGFyc2VDb21wb25lbnQgKHZ1ZUNvbXBvbmVudE9wdGlvbnMpIHtcclxuICByZXR1cm4gcGFyc2VCYXNlQ29tcG9uZW50KHZ1ZUNvbXBvbmVudE9wdGlvbnMsIHtcclxuICAgIGlzUGFnZSxcclxuICAgIGluaXRSZWxhdGlvblxyXG4gIH0pXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHBhcnNlQ29tcG9uZW50JDEgKHZ1ZUNvbXBvbmVudE9wdGlvbnMpIHtcclxuICByZXR1cm4gcGFyc2VDb21wb25lbnQodnVlQ29tcG9uZW50T3B0aW9ucylcclxufVxyXG5cclxuY29uc3QgaG9va3MkMSA9IFtcclxuICAnb25TaG93JyxcclxuICAnb25IaWRlJyxcclxuICAnb25VbmxvYWQnXHJcbl07XHJcblxyXG5ob29rcyQxLnB1c2goLi4uUEFHRV9FVkVOVF9IT09LUyk7XHJcblxyXG5mdW5jdGlvbiBwYXJzZUJhc2VQYWdlICh2dWVQYWdlT3B0aW9ucywge1xyXG4gIGlzUGFnZSxcclxuICBpbml0UmVsYXRpb25cclxufSkge1xyXG4gIGNvbnN0IHBhZ2VPcHRpb25zID0gcGFyc2VDb21wb25lbnQkMSh2dWVQYWdlT3B0aW9ucyk7XHJcblxyXG4gIGluaXRIb29rcyhwYWdlT3B0aW9ucy5tZXRob2RzLCBob29rcyQxLCB2dWVQYWdlT3B0aW9ucyk7XHJcblxyXG4gIHBhZ2VPcHRpb25zLm1ldGhvZHMub25Mb2FkID0gZnVuY3Rpb24gKGFyZ3MpIHtcclxuICAgIHRoaXMuJHZtLiRtcC5xdWVyeSA9IGFyZ3M7IC8vIOWFvOWuuSBtcHZ1ZVxyXG4gICAgdGhpcy4kdm0uX19jYWxsX2hvb2soJ29uTG9hZCcsIGFyZ3MpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiBwYWdlT3B0aW9uc1xyXG59XHJcblxyXG5mdW5jdGlvbiBwYXJzZVBhZ2UgKHZ1ZVBhZ2VPcHRpb25zKSB7XHJcbiAgcmV0dXJuIHBhcnNlQmFzZVBhZ2UodnVlUGFnZU9wdGlvbnMsIHtcclxuICAgIGlzUGFnZSxcclxuICAgIGluaXRSZWxhdGlvblxyXG4gIH0pXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHBhcnNlUGFnZSQxICh2dWVQYWdlT3B0aW9ucykge1xyXG4gIHJldHVybiBwYXJzZVBhZ2UodnVlUGFnZU9wdGlvbnMpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZVBhZ2UgKHZ1ZVBhZ2VPcHRpb25zKSB7XHJcbiAge1xyXG4gICAgcmV0dXJuIENvbXBvbmVudChwYXJzZVBhZ2UkMSh2dWVQYWdlT3B0aW9ucykpXHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVDb21wb25lbnQgKHZ1ZU9wdGlvbnMpIHtcclxuICB7XHJcbiAgICByZXR1cm4gQ29tcG9uZW50KHBhcnNlQ29tcG9uZW50JDEodnVlT3B0aW9ucykpXHJcbiAgfVxyXG59XHJcblxyXG50b2Rvcy5mb3JFYWNoKHRvZG9BcGkgPT4ge1xyXG4gIHByb3RvY29sc1t0b2RvQXBpXSA9IGZhbHNlO1xyXG59KTtcclxuXHJcbmNhbklVc2VzLmZvckVhY2goY2FuSVVzZUFwaSA9PiB7XHJcbiAgY29uc3QgYXBpTmFtZSA9IHByb3RvY29sc1tjYW5JVXNlQXBpXSAmJiBwcm90b2NvbHNbY2FuSVVzZUFwaV0ubmFtZSA/IHByb3RvY29sc1tjYW5JVXNlQXBpXS5uYW1lXHJcbiAgICA6IGNhbklVc2VBcGk7XHJcbiAgaWYgKCF3eC5jYW5JVXNlKGFwaU5hbWUpKSB7XHJcbiAgICBwcm90b2NvbHNbY2FuSVVzZUFwaV0gPSBmYWxzZTtcclxuICB9XHJcbn0pO1xyXG5cclxubGV0IHVuaSA9IHt9O1xyXG5cclxuaWYgKHR5cGVvZiBQcm94eSAhPT0gJ3VuZGVmaW5lZCcgJiYgXCJtcC1xcVwiICE9PSAnYXBwLXBsdXMnKSB7XHJcbiAgdW5pID0gbmV3IFByb3h5KHt9LCB7XHJcbiAgICBnZXQgKHRhcmdldCwgbmFtZSkge1xyXG4gICAgICBpZiAodGFyZ2V0W25hbWVdKSB7XHJcbiAgICAgICAgcmV0dXJuIHRhcmdldFtuYW1lXVxyXG4gICAgICB9XHJcbiAgICAgIGlmIChiYXNlQXBpW25hbWVdKSB7XHJcbiAgICAgICAgcmV0dXJuIGJhc2VBcGlbbmFtZV1cclxuICAgICAgfVxyXG4gICAgICBpZiAoYXBpW25hbWVdKSB7XHJcbiAgICAgICAgcmV0dXJuIHByb21pc2lmeShuYW1lLCBhcGlbbmFtZV0pXHJcbiAgICAgIH1cclxuICAgICAge1xyXG4gICAgICAgIGlmIChleHRyYUFwaVtuYW1lXSkge1xyXG4gICAgICAgICAgcmV0dXJuIHByb21pc2lmeShuYW1lLCBleHRyYUFwaVtuYW1lXSlcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRvZG9BcGlzW25hbWVdKSB7XHJcbiAgICAgICAgICByZXR1cm4gcHJvbWlzaWZ5KG5hbWUsIHRvZG9BcGlzW25hbWVdKVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBpZiAoZXZlbnRBcGlbbmFtZV0pIHtcclxuICAgICAgICByZXR1cm4gZXZlbnRBcGlbbmFtZV1cclxuICAgICAgfVxyXG4gICAgICBpZiAoIWhhc093bih3eCwgbmFtZSkgJiYgIWhhc093bihwcm90b2NvbHMsIG5hbWUpKSB7XHJcbiAgICAgICAgcmV0dXJuXHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIHByb21pc2lmeShuYW1lLCB3cmFwcGVyKG5hbWUsIHd4W25hbWVdKSlcclxuICAgIH0sXHJcbiAgICBzZXQgKHRhcmdldCwgbmFtZSwgdmFsdWUpIHtcclxuICAgICAgdGFyZ2V0W25hbWVdID0gdmFsdWU7XHJcbiAgICAgIHJldHVybiB0cnVlXHJcbiAgICB9XHJcbiAgfSk7XHJcbn0gZWxzZSB7XHJcbiAgT2JqZWN0LmtleXMoYmFzZUFwaSkuZm9yRWFjaChuYW1lID0+IHtcclxuICAgIHVuaVtuYW1lXSA9IGJhc2VBcGlbbmFtZV07XHJcbiAgfSk7XHJcblxyXG4gIHtcclxuICAgIE9iamVjdC5rZXlzKHRvZG9BcGlzKS5mb3JFYWNoKG5hbWUgPT4ge1xyXG4gICAgICB1bmlbbmFtZV0gPSBwcm9taXNpZnkobmFtZSwgdG9kb0FwaXNbbmFtZV0pO1xyXG4gICAgfSk7XHJcbiAgICBPYmplY3Qua2V5cyhleHRyYUFwaSkuZm9yRWFjaChuYW1lID0+IHtcclxuICAgICAgdW5pW25hbWVdID0gcHJvbWlzaWZ5KG5hbWUsIHRvZG9BcGlzW25hbWVdKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgT2JqZWN0LmtleXMoZXZlbnRBcGkpLmZvckVhY2gobmFtZSA9PiB7XHJcbiAgICB1bmlbbmFtZV0gPSBldmVudEFwaVtuYW1lXTtcclxuICB9KTtcclxuXHJcbiAgT2JqZWN0LmtleXMoYXBpKS5mb3JFYWNoKG5hbWUgPT4ge1xyXG4gICAgdW5pW25hbWVdID0gcHJvbWlzaWZ5KG5hbWUsIGFwaVtuYW1lXSk7XHJcbiAgfSk7XHJcblxyXG4gIE9iamVjdC5rZXlzKHd4KS5mb3JFYWNoKG5hbWUgPT4ge1xyXG4gICAgaWYgKGhhc093bih3eCwgbmFtZSkgfHwgaGFzT3duKHByb3RvY29scywgbmFtZSkpIHtcclxuICAgICAgdW5pW25hbWVdID0gcHJvbWlzaWZ5KG5hbWUsIHdyYXBwZXIobmFtZSwgd3hbbmFtZV0pKTtcclxuICAgIH1cclxuICB9KTtcclxufVxyXG5cclxud3guY3JlYXRlQXBwID0gY3JlYXRlQXBwO1xyXG53eC5jcmVhdGVQYWdlID0gY3JlYXRlUGFnZTtcclxud3guY3JlYXRlQ29tcG9uZW50ID0gY3JlYXRlQ29tcG9uZW50O1xyXG5cclxudmFyIHVuaSQxID0gdW5pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgdW5pJDE7XHJcbmV4cG9ydCB7IGNyZWF0ZUFwcCwgY3JlYXRlQ29tcG9uZW50LCBjcmVhdGVQYWdlIH07XHJcbiIsIi8qIGdsb2JhbHMgX19WVUVfU1NSX0NPTlRFWFRfXyAqL1xuXG4vLyBJTVBPUlRBTlQ6IERvIE5PVCB1c2UgRVMyMDE1IGZlYXR1cmVzIGluIHRoaXMgZmlsZSAoZXhjZXB0IGZvciBtb2R1bGVzKS5cbi8vIFRoaXMgbW9kdWxlIGlzIGEgcnVudGltZSB1dGlsaXR5IGZvciBjbGVhbmVyIGNvbXBvbmVudCBtb2R1bGUgb3V0cHV0IGFuZCB3aWxsXG4vLyBiZSBpbmNsdWRlZCBpbiB0aGUgZmluYWwgd2VicGFjayB1c2VyIGJ1bmRsZS5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbm9ybWFsaXplQ29tcG9uZW50IChcbiAgc2NyaXB0RXhwb3J0cyxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZ1bmN0aW9uYWxUZW1wbGF0ZSxcbiAgaW5qZWN0U3R5bGVzLFxuICBzY29wZUlkLFxuICBtb2R1bGVJZGVudGlmaWVyLCAvKiBzZXJ2ZXIgb25seSAqL1xuICBzaGFkb3dNb2RlLCAvKiB2dWUtY2xpIG9ubHkgKi9cbiAgY29tcG9uZW50cywgLy8gZml4ZWQgYnkgeHh4eHh4IGF1dG8gY29tcG9uZW50c1xuICByZW5kZXJqcyAvLyBmaXhlZCBieSB4eHh4eHggcmVuZGVyanNcbikge1xuICAvLyBWdWUuZXh0ZW5kIGNvbnN0cnVjdG9yIGV4cG9ydCBpbnRlcm9wXG4gIHZhciBvcHRpb25zID0gdHlwZW9mIHNjcmlwdEV4cG9ydHMgPT09ICdmdW5jdGlvbidcbiAgICA/IHNjcmlwdEV4cG9ydHMub3B0aW9uc1xuICAgIDogc2NyaXB0RXhwb3J0c1xuXG4gIC8vIGZpeGVkIGJ5IHh4eHh4eCBhdXRvIGNvbXBvbmVudHNcbiAgaWYgKGNvbXBvbmVudHMpIHtcbiAgICBpZiAoIW9wdGlvbnMuY29tcG9uZW50cykge1xuICAgICAgb3B0aW9ucy5jb21wb25lbnRzID0ge31cbiAgICB9XG4gICAgdmFyIGhhc093biA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHlcbiAgICBmb3IgKHZhciBuYW1lIGluIGNvbXBvbmVudHMpIHtcbiAgICAgIGlmIChoYXNPd24uY2FsbChjb21wb25lbnRzLCBuYW1lKSAmJiAhaGFzT3duLmNhbGwob3B0aW9ucy5jb21wb25lbnRzLCBuYW1lKSkge1xuICAgICAgICBvcHRpb25zLmNvbXBvbmVudHNbbmFtZV0gPSBjb21wb25lbnRzW25hbWVdXG4gICAgICB9XG4gICAgfVxuICB9XG4gIC8vIGZpeGVkIGJ5IHh4eHh4eCByZW5kZXJqc1xuICBpZiAocmVuZGVyanMpIHtcbiAgICAocmVuZGVyanMuYmVmb3JlQ3JlYXRlIHx8IChyZW5kZXJqcy5iZWZvcmVDcmVhdGUgPSBbXSkpLnVuc2hpZnQoZnVuY3Rpb24oKSB7XG4gICAgICB0aGlzW3JlbmRlcmpzLl9fbW9kdWxlXSA9IHRoaXNcbiAgICB9KTtcbiAgICAob3B0aW9ucy5taXhpbnMgfHwgKG9wdGlvbnMubWl4aW5zID0gW10pKS5wdXNoKHJlbmRlcmpzKVxuICB9XG5cbiAgLy8gcmVuZGVyIGZ1bmN0aW9uc1xuICBpZiAocmVuZGVyKSB7XG4gICAgb3B0aW9ucy5yZW5kZXIgPSByZW5kZXJcbiAgICBvcHRpb25zLnN0YXRpY1JlbmRlckZucyA9IHN0YXRpY1JlbmRlckZuc1xuICAgIG9wdGlvbnMuX2NvbXBpbGVkID0gdHJ1ZVxuICB9XG5cbiAgLy8gZnVuY3Rpb25hbCB0ZW1wbGF0ZVxuICBpZiAoZnVuY3Rpb25hbFRlbXBsYXRlKSB7XG4gICAgb3B0aW9ucy5mdW5jdGlvbmFsID0gdHJ1ZVxuICB9XG5cbiAgLy8gc2NvcGVkSWRcbiAgaWYgKHNjb3BlSWQpIHtcbiAgICBvcHRpb25zLl9zY29wZUlkID0gJ2RhdGEtdi0nICsgc2NvcGVJZFxuICB9XG5cbiAgdmFyIGhvb2tcbiAgaWYgKG1vZHVsZUlkZW50aWZpZXIpIHsgLy8gc2VydmVyIGJ1aWxkXG4gICAgaG9vayA9IGZ1bmN0aW9uIChjb250ZXh0KSB7XG4gICAgICAvLyAyLjMgaW5qZWN0aW9uXG4gICAgICBjb250ZXh0ID1cbiAgICAgICAgY29udGV4dCB8fCAvLyBjYWNoZWQgY2FsbFxuICAgICAgICAodGhpcy4kdm5vZGUgJiYgdGhpcy4kdm5vZGUuc3NyQ29udGV4dCkgfHwgLy8gc3RhdGVmdWxcbiAgICAgICAgKHRoaXMucGFyZW50ICYmIHRoaXMucGFyZW50LiR2bm9kZSAmJiB0aGlzLnBhcmVudC4kdm5vZGUuc3NyQ29udGV4dCkgLy8gZnVuY3Rpb25hbFxuICAgICAgLy8gMi4yIHdpdGggcnVuSW5OZXdDb250ZXh0OiB0cnVlXG4gICAgICBpZiAoIWNvbnRleHQgJiYgdHlwZW9mIF9fVlVFX1NTUl9DT05URVhUX18gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNvbnRleHQgPSBfX1ZVRV9TU1JfQ09OVEVYVF9fXG4gICAgICB9XG4gICAgICAvLyBpbmplY3QgY29tcG9uZW50IHN0eWxlc1xuICAgICAgaWYgKGluamVjdFN0eWxlcykge1xuICAgICAgICBpbmplY3RTdHlsZXMuY2FsbCh0aGlzLCBjb250ZXh0KVxuICAgICAgfVxuICAgICAgLy8gcmVnaXN0ZXIgY29tcG9uZW50IG1vZHVsZSBpZGVudGlmaWVyIGZvciBhc3luYyBjaHVuayBpbmZlcnJlbmNlXG4gICAgICBpZiAoY29udGV4dCAmJiBjb250ZXh0Ll9yZWdpc3RlcmVkQ29tcG9uZW50cykge1xuICAgICAgICBjb250ZXh0Ll9yZWdpc3RlcmVkQ29tcG9uZW50cy5hZGQobW9kdWxlSWRlbnRpZmllcilcbiAgICAgIH1cbiAgICB9XG4gICAgLy8gdXNlZCBieSBzc3IgaW4gY2FzZSBjb21wb25lbnQgaXMgY2FjaGVkIGFuZCBiZWZvcmVDcmVhdGVcbiAgICAvLyBuZXZlciBnZXRzIGNhbGxlZFxuICAgIG9wdGlvbnMuX3NzclJlZ2lzdGVyID0gaG9va1xuICB9IGVsc2UgaWYgKGluamVjdFN0eWxlcykge1xuICAgIGhvb2sgPSBzaGFkb3dNb2RlXG4gICAgICA/IGZ1bmN0aW9uICgpIHsgaW5qZWN0U3R5bGVzLmNhbGwodGhpcywgdGhpcy4kcm9vdC4kb3B0aW9ucy5zaGFkb3dSb290KSB9XG4gICAgICA6IGluamVjdFN0eWxlc1xuICB9XG5cbiAgaWYgKGhvb2spIHtcbiAgICBpZiAob3B0aW9ucy5mdW5jdGlvbmFsKSB7XG4gICAgICAvLyBmb3IgdGVtcGxhdGUtb25seSBob3QtcmVsb2FkIGJlY2F1c2UgaW4gdGhhdCBjYXNlIHRoZSByZW5kZXIgZm4gZG9lc24ndFxuICAgICAgLy8gZ28gdGhyb3VnaCB0aGUgbm9ybWFsaXplclxuICAgICAgb3B0aW9ucy5faW5qZWN0U3R5bGVzID0gaG9va1xuICAgICAgLy8gcmVnaXN0ZXIgZm9yIGZ1bmN0aW9hbCBjb21wb25lbnQgaW4gdnVlIGZpbGVcbiAgICAgIHZhciBvcmlnaW5hbFJlbmRlciA9IG9wdGlvbnMucmVuZGVyXG4gICAgICBvcHRpb25zLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcldpdGhTdHlsZUluamVjdGlvbiAoaCwgY29udGV4dCkge1xuICAgICAgICBob29rLmNhbGwoY29udGV4dClcbiAgICAgICAgcmV0dXJuIG9yaWdpbmFsUmVuZGVyKGgsIGNvbnRleHQpXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGluamVjdCBjb21wb25lbnQgcmVnaXN0cmF0aW9uIGFzIGJlZm9yZUNyZWF0ZSBob29rXG4gICAgICB2YXIgZXhpc3RpbmcgPSBvcHRpb25zLmJlZm9yZUNyZWF0ZVxuICAgICAgb3B0aW9ucy5iZWZvcmVDcmVhdGUgPSBleGlzdGluZ1xuICAgICAgICA/IFtdLmNvbmNhdChleGlzdGluZywgaG9vaylcbiAgICAgICAgOiBbaG9va11cbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGV4cG9ydHM6IHNjcmlwdEV4cG9ydHMsXG4gICAgb3B0aW9uczogb3B0aW9uc1xuICB9XG59XG4iLCIvKiFcbiAqIFZ1ZS5qcyB2Mi42LjExXG4gKiAoYykgMjAxNC0yMDIwIEV2YW4gWW91XG4gKiBSZWxlYXNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXG4gKi9cbi8qICAqL1xuXG52YXIgZW1wdHlPYmplY3QgPSBPYmplY3QuZnJlZXplKHt9KTtcblxuLy8gVGhlc2UgaGVscGVycyBwcm9kdWNlIGJldHRlciBWTSBjb2RlIGluIEpTIGVuZ2luZXMgZHVlIHRvIHRoZWlyXG4vLyBleHBsaWNpdG5lc3MgYW5kIGZ1bmN0aW9uIGlubGluaW5nLlxuZnVuY3Rpb24gaXNVbmRlZiAodikge1xuICByZXR1cm4gdiA9PT0gdW5kZWZpbmVkIHx8IHYgPT09IG51bGxcbn1cblxuZnVuY3Rpb24gaXNEZWYgKHYpIHtcbiAgcmV0dXJuIHYgIT09IHVuZGVmaW5lZCAmJiB2ICE9PSBudWxsXG59XG5cbmZ1bmN0aW9uIGlzVHJ1ZSAodikge1xuICByZXR1cm4gdiA9PT0gdHJ1ZVxufVxuXG5mdW5jdGlvbiBpc0ZhbHNlICh2KSB7XG4gIHJldHVybiB2ID09PSBmYWxzZVxufVxuXG4vKipcbiAqIENoZWNrIGlmIHZhbHVlIGlzIHByaW1pdGl2ZS5cbiAqL1xuZnVuY3Rpb24gaXNQcmltaXRpdmUgKHZhbHVlKSB7XG4gIHJldHVybiAoXG4gICAgdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyB8fFxuICAgIHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicgfHxcbiAgICAvLyAkZmxvdy1kaXNhYmxlLWxpbmVcbiAgICB0eXBlb2YgdmFsdWUgPT09ICdzeW1ib2wnIHx8XG4gICAgdHlwZW9mIHZhbHVlID09PSAnYm9vbGVhbidcbiAgKVxufVxuXG4vKipcbiAqIFF1aWNrIG9iamVjdCBjaGVjayAtIHRoaXMgaXMgcHJpbWFyaWx5IHVzZWQgdG8gdGVsbFxuICogT2JqZWN0cyBmcm9tIHByaW1pdGl2ZSB2YWx1ZXMgd2hlbiB3ZSBrbm93IHRoZSB2YWx1ZVxuICogaXMgYSBKU09OLWNvbXBsaWFudCB0eXBlLlxuICovXG5mdW5jdGlvbiBpc09iamVjdCAob2JqKSB7XG4gIHJldHVybiBvYmogIT09IG51bGwgJiYgdHlwZW9mIG9iaiA9PT0gJ29iamVjdCdcbn1cblxuLyoqXG4gKiBHZXQgdGhlIHJhdyB0eXBlIHN0cmluZyBvZiBhIHZhbHVlLCBlLmcuLCBbb2JqZWN0IE9iamVjdF0uXG4gKi9cbnZhciBfdG9TdHJpbmcgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nO1xuXG5mdW5jdGlvbiB0b1Jhd1R5cGUgKHZhbHVlKSB7XG4gIHJldHVybiBfdG9TdHJpbmcuY2FsbCh2YWx1ZSkuc2xpY2UoOCwgLTEpXG59XG5cbi8qKlxuICogU3RyaWN0IG9iamVjdCB0eXBlIGNoZWNrLiBPbmx5IHJldHVybnMgdHJ1ZVxuICogZm9yIHBsYWluIEphdmFTY3JpcHQgb2JqZWN0cy5cbiAqL1xuZnVuY3Rpb24gaXNQbGFpbk9iamVjdCAob2JqKSB7XG4gIHJldHVybiBfdG9TdHJpbmcuY2FsbChvYmopID09PSAnW29iamVjdCBPYmplY3RdJ1xufVxuXG5mdW5jdGlvbiBpc1JlZ0V4cCAodikge1xuICByZXR1cm4gX3RvU3RyaW5nLmNhbGwodikgPT09ICdbb2JqZWN0IFJlZ0V4cF0nXG59XG5cbi8qKlxuICogQ2hlY2sgaWYgdmFsIGlzIGEgdmFsaWQgYXJyYXkgaW5kZXguXG4gKi9cbmZ1bmN0aW9uIGlzVmFsaWRBcnJheUluZGV4ICh2YWwpIHtcbiAgdmFyIG4gPSBwYXJzZUZsb2F0KFN0cmluZyh2YWwpKTtcbiAgcmV0dXJuIG4gPj0gMCAmJiBNYXRoLmZsb29yKG4pID09PSBuICYmIGlzRmluaXRlKHZhbClcbn1cblxuZnVuY3Rpb24gaXNQcm9taXNlICh2YWwpIHtcbiAgcmV0dXJuIChcbiAgICBpc0RlZih2YWwpICYmXG4gICAgdHlwZW9mIHZhbC50aGVuID09PSAnZnVuY3Rpb24nICYmXG4gICAgdHlwZW9mIHZhbC5jYXRjaCA9PT0gJ2Z1bmN0aW9uJ1xuICApXG59XG5cbi8qKlxuICogQ29udmVydCBhIHZhbHVlIHRvIGEgc3RyaW5nIHRoYXQgaXMgYWN0dWFsbHkgcmVuZGVyZWQuXG4gKi9cbmZ1bmN0aW9uIHRvU3RyaW5nICh2YWwpIHtcbiAgcmV0dXJuIHZhbCA9PSBudWxsXG4gICAgPyAnJ1xuICAgIDogQXJyYXkuaXNBcnJheSh2YWwpIHx8IChpc1BsYWluT2JqZWN0KHZhbCkgJiYgdmFsLnRvU3RyaW5nID09PSBfdG9TdHJpbmcpXG4gICAgICA/IEpTT04uc3RyaW5naWZ5KHZhbCwgbnVsbCwgMilcbiAgICAgIDogU3RyaW5nKHZhbClcbn1cblxuLyoqXG4gKiBDb252ZXJ0IGFuIGlucHV0IHZhbHVlIHRvIGEgbnVtYmVyIGZvciBwZXJzaXN0ZW5jZS5cbiAqIElmIHRoZSBjb252ZXJzaW9uIGZhaWxzLCByZXR1cm4gb3JpZ2luYWwgc3RyaW5nLlxuICovXG5mdW5jdGlvbiB0b051bWJlciAodmFsKSB7XG4gIHZhciBuID0gcGFyc2VGbG9hdCh2YWwpO1xuICByZXR1cm4gaXNOYU4obikgPyB2YWwgOiBuXG59XG5cbi8qKlxuICogTWFrZSBhIG1hcCBhbmQgcmV0dXJuIGEgZnVuY3Rpb24gZm9yIGNoZWNraW5nIGlmIGEga2V5XG4gKiBpcyBpbiB0aGF0IG1hcC5cbiAqL1xuZnVuY3Rpb24gbWFrZU1hcCAoXG4gIHN0cixcbiAgZXhwZWN0c0xvd2VyQ2FzZVxuKSB7XG4gIHZhciBtYXAgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICB2YXIgbGlzdCA9IHN0ci5zcGxpdCgnLCcpO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICBtYXBbbGlzdFtpXV0gPSB0cnVlO1xuICB9XG4gIHJldHVybiBleHBlY3RzTG93ZXJDYXNlXG4gICAgPyBmdW5jdGlvbiAodmFsKSB7IHJldHVybiBtYXBbdmFsLnRvTG93ZXJDYXNlKCldOyB9XG4gICAgOiBmdW5jdGlvbiAodmFsKSB7IHJldHVybiBtYXBbdmFsXTsgfVxufVxuXG4vKipcbiAqIENoZWNrIGlmIGEgdGFnIGlzIGEgYnVpbHQtaW4gdGFnLlxuICovXG52YXIgaXNCdWlsdEluVGFnID0gbWFrZU1hcCgnc2xvdCxjb21wb25lbnQnLCB0cnVlKTtcblxuLyoqXG4gKiBDaGVjayBpZiBhbiBhdHRyaWJ1dGUgaXMgYSByZXNlcnZlZCBhdHRyaWJ1dGUuXG4gKi9cbnZhciBpc1Jlc2VydmVkQXR0cmlidXRlID0gbWFrZU1hcCgna2V5LHJlZixzbG90LHNsb3Qtc2NvcGUsaXMnKTtcblxuLyoqXG4gKiBSZW1vdmUgYW4gaXRlbSBmcm9tIGFuIGFycmF5LlxuICovXG5mdW5jdGlvbiByZW1vdmUgKGFyciwgaXRlbSkge1xuICBpZiAoYXJyLmxlbmd0aCkge1xuICAgIHZhciBpbmRleCA9IGFyci5pbmRleE9mKGl0ZW0pO1xuICAgIGlmIChpbmRleCA+IC0xKSB7XG4gICAgICByZXR1cm4gYXJyLnNwbGljZShpbmRleCwgMSlcbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBDaGVjayB3aGV0aGVyIGFuIG9iamVjdCBoYXMgdGhlIHByb3BlcnR5LlxuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xuZnVuY3Rpb24gaGFzT3duIChvYmosIGtleSkge1xuICByZXR1cm4gaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSlcbn1cblxuLyoqXG4gKiBDcmVhdGUgYSBjYWNoZWQgdmVyc2lvbiBvZiBhIHB1cmUgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIGNhY2hlZCAoZm4pIHtcbiAgdmFyIGNhY2hlID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgcmV0dXJuIChmdW5jdGlvbiBjYWNoZWRGbiAoc3RyKSB7XG4gICAgdmFyIGhpdCA9IGNhY2hlW3N0cl07XG4gICAgcmV0dXJuIGhpdCB8fCAoY2FjaGVbc3RyXSA9IGZuKHN0cikpXG4gIH0pXG59XG5cbi8qKlxuICogQ2FtZWxpemUgYSBoeXBoZW4tZGVsaW1pdGVkIHN0cmluZy5cbiAqL1xudmFyIGNhbWVsaXplUkUgPSAvLShcXHcpL2c7XG52YXIgY2FtZWxpemUgPSBjYWNoZWQoZnVuY3Rpb24gKHN0cikge1xuICByZXR1cm4gc3RyLnJlcGxhY2UoY2FtZWxpemVSRSwgZnVuY3Rpb24gKF8sIGMpIHsgcmV0dXJuIGMgPyBjLnRvVXBwZXJDYXNlKCkgOiAnJzsgfSlcbn0pO1xuXG4vKipcbiAqIENhcGl0YWxpemUgYSBzdHJpbmcuXG4gKi9cbnZhciBjYXBpdGFsaXplID0gY2FjaGVkKGZ1bmN0aW9uIChzdHIpIHtcbiAgcmV0dXJuIHN0ci5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHN0ci5zbGljZSgxKVxufSk7XG5cbi8qKlxuICogSHlwaGVuYXRlIGEgY2FtZWxDYXNlIHN0cmluZy5cbiAqL1xudmFyIGh5cGhlbmF0ZVJFID0gL1xcQihbQS1aXSkvZztcbnZhciBoeXBoZW5hdGUgPSBjYWNoZWQoZnVuY3Rpb24gKHN0cikge1xuICByZXR1cm4gc3RyLnJlcGxhY2UoaHlwaGVuYXRlUkUsICctJDEnKS50b0xvd2VyQ2FzZSgpXG59KTtcblxuLyoqXG4gKiBTaW1wbGUgYmluZCBwb2x5ZmlsbCBmb3IgZW52aXJvbm1lbnRzIHRoYXQgZG8gbm90IHN1cHBvcnQgaXQsXG4gKiBlLmcuLCBQaGFudG9tSlMgMS54LiBUZWNobmljYWxseSwgd2UgZG9uJ3QgbmVlZCB0aGlzIGFueW1vcmVcbiAqIHNpbmNlIG5hdGl2ZSBiaW5kIGlzIG5vdyBwZXJmb3JtYW50IGVub3VnaCBpbiBtb3N0IGJyb3dzZXJzLlxuICogQnV0IHJlbW92aW5nIGl0IHdvdWxkIG1lYW4gYnJlYWtpbmcgY29kZSB0aGF0IHdhcyBhYmxlIHRvIHJ1biBpblxuICogUGhhbnRvbUpTIDEueCwgc28gdGhpcyBtdXN0IGJlIGtlcHQgZm9yIGJhY2t3YXJkIGNvbXBhdGliaWxpdHkuXG4gKi9cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbmZ1bmN0aW9uIHBvbHlmaWxsQmluZCAoZm4sIGN0eCkge1xuICBmdW5jdGlvbiBib3VuZEZuIChhKSB7XG4gICAgdmFyIGwgPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgIHJldHVybiBsXG4gICAgICA/IGwgPiAxXG4gICAgICAgID8gZm4uYXBwbHkoY3R4LCBhcmd1bWVudHMpXG4gICAgICAgIDogZm4uY2FsbChjdHgsIGEpXG4gICAgICA6IGZuLmNhbGwoY3R4KVxuICB9XG5cbiAgYm91bmRGbi5fbGVuZ3RoID0gZm4ubGVuZ3RoO1xuICByZXR1cm4gYm91bmRGblxufVxuXG5mdW5jdGlvbiBuYXRpdmVCaW5kIChmbiwgY3R4KSB7XG4gIHJldHVybiBmbi5iaW5kKGN0eClcbn1cblxudmFyIGJpbmQgPSBGdW5jdGlvbi5wcm90b3R5cGUuYmluZFxuICA/IG5hdGl2ZUJpbmRcbiAgOiBwb2x5ZmlsbEJpbmQ7XG5cbi8qKlxuICogQ29udmVydCBhbiBBcnJheS1saWtlIG9iamVjdCB0byBhIHJlYWwgQXJyYXkuXG4gKi9cbmZ1bmN0aW9uIHRvQXJyYXkgKGxpc3QsIHN0YXJ0KSB7XG4gIHN0YXJ0ID0gc3RhcnQgfHwgMDtcbiAgdmFyIGkgPSBsaXN0Lmxlbmd0aCAtIHN0YXJ0O1xuICB2YXIgcmV0ID0gbmV3IEFycmF5KGkpO1xuICB3aGlsZSAoaS0tKSB7XG4gICAgcmV0W2ldID0gbGlzdFtpICsgc3RhcnRdO1xuICB9XG4gIHJldHVybiByZXRcbn1cblxuLyoqXG4gKiBNaXggcHJvcGVydGllcyBpbnRvIHRhcmdldCBvYmplY3QuXG4gKi9cbmZ1bmN0aW9uIGV4dGVuZCAodG8sIF9mcm9tKSB7XG4gIGZvciAodmFyIGtleSBpbiBfZnJvbSkge1xuICAgIHRvW2tleV0gPSBfZnJvbVtrZXldO1xuICB9XG4gIHJldHVybiB0b1xufVxuXG4vKipcbiAqIE1lcmdlIGFuIEFycmF5IG9mIE9iamVjdHMgaW50byBhIHNpbmdsZSBPYmplY3QuXG4gKi9cbmZ1bmN0aW9uIHRvT2JqZWN0IChhcnIpIHtcbiAgdmFyIHJlcyA9IHt9O1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkrKykge1xuICAgIGlmIChhcnJbaV0pIHtcbiAgICAgIGV4dGVuZChyZXMsIGFycltpXSk7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXNcbn1cblxuLyogZXNsaW50LWRpc2FibGUgbm8tdW51c2VkLXZhcnMgKi9cblxuLyoqXG4gKiBQZXJmb3JtIG5vIG9wZXJhdGlvbi5cbiAqIFN0dWJiaW5nIGFyZ3MgdG8gbWFrZSBGbG93IGhhcHB5IHdpdGhvdXQgbGVhdmluZyB1c2VsZXNzIHRyYW5zcGlsZWQgY29kZVxuICogd2l0aCAuLi5yZXN0IChodHRwczovL2Zsb3cub3JnL2Jsb2cvMjAxNy8wNS8wNy9TdHJpY3QtRnVuY3Rpb24tQ2FsbC1Bcml0eS8pLlxuICovXG5mdW5jdGlvbiBub29wIChhLCBiLCBjKSB7fVxuXG4vKipcbiAqIEFsd2F5cyByZXR1cm4gZmFsc2UuXG4gKi9cbnZhciBubyA9IGZ1bmN0aW9uIChhLCBiLCBjKSB7IHJldHVybiBmYWxzZTsgfTtcblxuLyogZXNsaW50LWVuYWJsZSBuby11bnVzZWQtdmFycyAqL1xuXG4vKipcbiAqIFJldHVybiB0aGUgc2FtZSB2YWx1ZS5cbiAqL1xudmFyIGlkZW50aXR5ID0gZnVuY3Rpb24gKF8pIHsgcmV0dXJuIF87IH07XG5cbi8qKlxuICogQ2hlY2sgaWYgdHdvIHZhbHVlcyBhcmUgbG9vc2VseSBlcXVhbCAtIHRoYXQgaXMsXG4gKiBpZiB0aGV5IGFyZSBwbGFpbiBvYmplY3RzLCBkbyB0aGV5IGhhdmUgdGhlIHNhbWUgc2hhcGU/XG4gKi9cbmZ1bmN0aW9uIGxvb3NlRXF1YWwgKGEsIGIpIHtcbiAgaWYgKGEgPT09IGIpIHsgcmV0dXJuIHRydWUgfVxuICB2YXIgaXNPYmplY3RBID0gaXNPYmplY3QoYSk7XG4gIHZhciBpc09iamVjdEIgPSBpc09iamVjdChiKTtcbiAgaWYgKGlzT2JqZWN0QSAmJiBpc09iamVjdEIpIHtcbiAgICB0cnkge1xuICAgICAgdmFyIGlzQXJyYXlBID0gQXJyYXkuaXNBcnJheShhKTtcbiAgICAgIHZhciBpc0FycmF5QiA9IEFycmF5LmlzQXJyYXkoYik7XG4gICAgICBpZiAoaXNBcnJheUEgJiYgaXNBcnJheUIpIHtcbiAgICAgICAgcmV0dXJuIGEubGVuZ3RoID09PSBiLmxlbmd0aCAmJiBhLmV2ZXJ5KGZ1bmN0aW9uIChlLCBpKSB7XG4gICAgICAgICAgcmV0dXJuIGxvb3NlRXF1YWwoZSwgYltpXSlcbiAgICAgICAgfSlcbiAgICAgIH0gZWxzZSBpZiAoYSBpbnN0YW5jZW9mIERhdGUgJiYgYiBpbnN0YW5jZW9mIERhdGUpIHtcbiAgICAgICAgcmV0dXJuIGEuZ2V0VGltZSgpID09PSBiLmdldFRpbWUoKVxuICAgICAgfSBlbHNlIGlmICghaXNBcnJheUEgJiYgIWlzQXJyYXlCKSB7XG4gICAgICAgIHZhciBrZXlzQSA9IE9iamVjdC5rZXlzKGEpO1xuICAgICAgICB2YXIga2V5c0IgPSBPYmplY3Qua2V5cyhiKTtcbiAgICAgICAgcmV0dXJuIGtleXNBLmxlbmd0aCA9PT0ga2V5c0IubGVuZ3RoICYmIGtleXNBLmV2ZXJ5KGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgICByZXR1cm4gbG9vc2VFcXVhbChhW2tleV0sIGJba2V5XSlcbiAgICAgICAgfSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG4gIH0gZWxzZSBpZiAoIWlzT2JqZWN0QSAmJiAhaXNPYmplY3RCKSB7XG4gICAgcmV0dXJuIFN0cmluZyhhKSA9PT0gU3RyaW5nKGIpXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cbn1cblxuLyoqXG4gKiBSZXR1cm4gdGhlIGZpcnN0IGluZGV4IGF0IHdoaWNoIGEgbG9vc2VseSBlcXVhbCB2YWx1ZSBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBhcnJheSAoaWYgdmFsdWUgaXMgYSBwbGFpbiBvYmplY3QsIHRoZSBhcnJheSBtdXN0XG4gKiBjb250YWluIGFuIG9iamVjdCBvZiB0aGUgc2FtZSBzaGFwZSksIG9yIC0xIGlmIGl0IGlzIG5vdCBwcmVzZW50LlxuICovXG5mdW5jdGlvbiBsb29zZUluZGV4T2YgKGFyciwgdmFsKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKGxvb3NlRXF1YWwoYXJyW2ldLCB2YWwpKSB7IHJldHVybiBpIH1cbiAgfVxuICByZXR1cm4gLTFcbn1cblxuLyoqXG4gKiBFbnN1cmUgYSBmdW5jdGlvbiBpcyBjYWxsZWQgb25seSBvbmNlLlxuICovXG5mdW5jdGlvbiBvbmNlIChmbikge1xuICB2YXIgY2FsbGVkID0gZmFsc2U7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKCFjYWxsZWQpIHtcbiAgICAgIGNhbGxlZCA9IHRydWU7XG4gICAgICBmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH1cbiAgfVxufVxuXG52YXIgQVNTRVRfVFlQRVMgPSBbXG4gICdjb21wb25lbnQnLFxuICAnZGlyZWN0aXZlJyxcbiAgJ2ZpbHRlcidcbl07XG5cbnZhciBMSUZFQ1lDTEVfSE9PS1MgPSBbXG4gICdiZWZvcmVDcmVhdGUnLFxuICAnY3JlYXRlZCcsXG4gICdiZWZvcmVNb3VudCcsXG4gICdtb3VudGVkJyxcbiAgJ2JlZm9yZVVwZGF0ZScsXG4gICd1cGRhdGVkJyxcbiAgJ2JlZm9yZURlc3Ryb3knLFxuICAnZGVzdHJveWVkJyxcbiAgJ2FjdGl2YXRlZCcsXG4gICdkZWFjdGl2YXRlZCcsXG4gICdlcnJvckNhcHR1cmVkJyxcbiAgJ3NlcnZlclByZWZldGNoJ1xuXTtcblxuLyogICovXG5cblxuXG52YXIgY29uZmlnID0gKHtcbiAgLyoqXG4gICAqIE9wdGlvbiBtZXJnZSBzdHJhdGVnaWVzICh1c2VkIGluIGNvcmUvdXRpbC9vcHRpb25zKVxuICAgKi9cbiAgLy8gJGZsb3ctZGlzYWJsZS1saW5lXG4gIG9wdGlvbk1lcmdlU3RyYXRlZ2llczogT2JqZWN0LmNyZWF0ZShudWxsKSxcblxuICAvKipcbiAgICogV2hldGhlciB0byBzdXBwcmVzcyB3YXJuaW5ncy5cbiAgICovXG4gIHNpbGVudDogZmFsc2UsXG5cbiAgLyoqXG4gICAqIFNob3cgcHJvZHVjdGlvbiBtb2RlIHRpcCBtZXNzYWdlIG9uIGJvb3Q/XG4gICAqL1xuICBwcm9kdWN0aW9uVGlwOiBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nLFxuXG4gIC8qKlxuICAgKiBXaGV0aGVyIHRvIGVuYWJsZSBkZXZ0b29sc1xuICAgKi9cbiAgZGV2dG9vbHM6IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicsXG5cbiAgLyoqXG4gICAqIFdoZXRoZXIgdG8gcmVjb3JkIHBlcmZcbiAgICovXG4gIHBlcmZvcm1hbmNlOiBmYWxzZSxcblxuICAvKipcbiAgICogRXJyb3IgaGFuZGxlciBmb3Igd2F0Y2hlciBlcnJvcnNcbiAgICovXG4gIGVycm9ySGFuZGxlcjogbnVsbCxcblxuICAvKipcbiAgICogV2FybiBoYW5kbGVyIGZvciB3YXRjaGVyIHdhcm5zXG4gICAqL1xuICB3YXJuSGFuZGxlcjogbnVsbCxcblxuICAvKipcbiAgICogSWdub3JlIGNlcnRhaW4gY3VzdG9tIGVsZW1lbnRzXG4gICAqL1xuICBpZ25vcmVkRWxlbWVudHM6IFtdLFxuXG4gIC8qKlxuICAgKiBDdXN0b20gdXNlciBrZXkgYWxpYXNlcyBmb3Igdi1vblxuICAgKi9cbiAgLy8gJGZsb3ctZGlzYWJsZS1saW5lXG4gIGtleUNvZGVzOiBPYmplY3QuY3JlYXRlKG51bGwpLFxuXG4gIC8qKlxuICAgKiBDaGVjayBpZiBhIHRhZyBpcyByZXNlcnZlZCBzbyB0aGF0IGl0IGNhbm5vdCBiZSByZWdpc3RlcmVkIGFzIGFcbiAgICogY29tcG9uZW50LiBUaGlzIGlzIHBsYXRmb3JtLWRlcGVuZGVudCBhbmQgbWF5IGJlIG92ZXJ3cml0dGVuLlxuICAgKi9cbiAgaXNSZXNlcnZlZFRhZzogbm8sXG5cbiAgLyoqXG4gICAqIENoZWNrIGlmIGFuIGF0dHJpYnV0ZSBpcyByZXNlcnZlZCBzbyB0aGF0IGl0IGNhbm5vdCBiZSB1c2VkIGFzIGEgY29tcG9uZW50XG4gICAqIHByb3AuIFRoaXMgaXMgcGxhdGZvcm0tZGVwZW5kZW50IGFuZCBtYXkgYmUgb3ZlcndyaXR0ZW4uXG4gICAqL1xuICBpc1Jlc2VydmVkQXR0cjogbm8sXG5cbiAgLyoqXG4gICAqIENoZWNrIGlmIGEgdGFnIGlzIGFuIHVua25vd24gZWxlbWVudC5cbiAgICogUGxhdGZvcm0tZGVwZW5kZW50LlxuICAgKi9cbiAgaXNVbmtub3duRWxlbWVudDogbm8sXG5cbiAgLyoqXG4gICAqIEdldCB0aGUgbmFtZXNwYWNlIG9mIGFuIGVsZW1lbnRcbiAgICovXG4gIGdldFRhZ05hbWVzcGFjZTogbm9vcCxcblxuICAvKipcbiAgICogUGFyc2UgdGhlIHJlYWwgdGFnIG5hbWUgZm9yIHRoZSBzcGVjaWZpYyBwbGF0Zm9ybS5cbiAgICovXG4gIHBhcnNlUGxhdGZvcm1UYWdOYW1lOiBpZGVudGl0eSxcblxuICAvKipcbiAgICogQ2hlY2sgaWYgYW4gYXR0cmlidXRlIG11c3QgYmUgYm91bmQgdXNpbmcgcHJvcGVydHksIGUuZy4gdmFsdWVcbiAgICogUGxhdGZvcm0tZGVwZW5kZW50LlxuICAgKi9cbiAgbXVzdFVzZVByb3A6IG5vLFxuXG4gIC8qKlxuICAgKiBQZXJmb3JtIHVwZGF0ZXMgYXN5bmNocm9ub3VzbHkuIEludGVuZGVkIHRvIGJlIHVzZWQgYnkgVnVlIFRlc3QgVXRpbHNcbiAgICogVGhpcyB3aWxsIHNpZ25pZmljYW50bHkgcmVkdWNlIHBlcmZvcm1hbmNlIGlmIHNldCB0byBmYWxzZS5cbiAgICovXG4gIGFzeW5jOiB0cnVlLFxuXG4gIC8qKlxuICAgKiBFeHBvc2VkIGZvciBsZWdhY3kgcmVhc29uc1xuICAgKi9cbiAgX2xpZmVjeWNsZUhvb2tzOiBMSUZFQ1lDTEVfSE9PS1Ncbn0pO1xuXG4vKiAgKi9cblxuLyoqXG4gKiB1bmljb2RlIGxldHRlcnMgdXNlZCBmb3IgcGFyc2luZyBodG1sIHRhZ3MsIGNvbXBvbmVudCBuYW1lcyBhbmQgcHJvcGVydHkgcGF0aHMuXG4gKiB1c2luZyBodHRwczovL3d3dy53My5vcmcvVFIvaHRtbDUzL3NlbWFudGljcy1zY3JpcHRpbmcuaHRtbCNwb3RlbnRpYWxjdXN0b21lbGVtZW50bmFtZVxuICogc2tpcHBpbmcgXFx1MTAwMDAtXFx1RUZGRkYgZHVlIHRvIGl0IGZyZWV6aW5nIHVwIFBoYW50b21KU1xuICovXG52YXIgdW5pY29kZVJlZ0V4cCA9IC9hLXpBLVpcXHUwMEI3XFx1MDBDMC1cXHUwMEQ2XFx1MDBEOC1cXHUwMEY2XFx1MDBGOC1cXHUwMzdEXFx1MDM3Ri1cXHUxRkZGXFx1MjAwQy1cXHUyMDBEXFx1MjAzRi1cXHUyMDQwXFx1MjA3MC1cXHUyMThGXFx1MkMwMC1cXHUyRkVGXFx1MzAwMS1cXHVEN0ZGXFx1RjkwMC1cXHVGRENGXFx1RkRGMC1cXHVGRkZELztcblxuLyoqXG4gKiBDaGVjayBpZiBhIHN0cmluZyBzdGFydHMgd2l0aCAkIG9yIF9cbiAqL1xuZnVuY3Rpb24gaXNSZXNlcnZlZCAoc3RyKSB7XG4gIHZhciBjID0gKHN0ciArICcnKS5jaGFyQ29kZUF0KDApO1xuICByZXR1cm4gYyA9PT0gMHgyNCB8fCBjID09PSAweDVGXG59XG5cbi8qKlxuICogRGVmaW5lIGEgcHJvcGVydHkuXG4gKi9cbmZ1bmN0aW9uIGRlZiAob2JqLCBrZXksIHZhbCwgZW51bWVyYWJsZSkge1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcbiAgICB2YWx1ZTogdmFsLFxuICAgIGVudW1lcmFibGU6ICEhZW51bWVyYWJsZSxcbiAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICBjb25maWd1cmFibGU6IHRydWVcbiAgfSk7XG59XG5cbi8qKlxuICogUGFyc2Ugc2ltcGxlIHBhdGguXG4gKi9cbnZhciBiYWlsUkUgPSBuZXcgUmVnRXhwKChcIlteXCIgKyAodW5pY29kZVJlZ0V4cC5zb3VyY2UpICsgXCIuJF9cXFxcZF1cIikpO1xuZnVuY3Rpb24gcGFyc2VQYXRoIChwYXRoKSB7XG4gIGlmIChiYWlsUkUudGVzdChwYXRoKSkge1xuICAgIHJldHVyblxuICB9XG4gIHZhciBzZWdtZW50cyA9IHBhdGguc3BsaXQoJy4nKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIChvYmopIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNlZ21lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoIW9iaikgeyByZXR1cm4gfVxuICAgICAgb2JqID0gb2JqW3NlZ21lbnRzW2ldXTtcbiAgICB9XG4gICAgcmV0dXJuIG9ialxuICB9XG59XG5cbi8qICAqL1xuXG4vLyBjYW4gd2UgdXNlIF9fcHJvdG9fXz9cbnZhciBoYXNQcm90byA9ICdfX3Byb3RvX18nIGluIHt9O1xuXG4vLyBCcm93c2VyIGVudmlyb25tZW50IHNuaWZmaW5nXG52YXIgaW5Ccm93c2VyID0gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCc7XG52YXIgaW5XZWV4ID0gdHlwZW9mIFdYRW52aXJvbm1lbnQgIT09ICd1bmRlZmluZWQnICYmICEhV1hFbnZpcm9ubWVudC5wbGF0Zm9ybTtcbnZhciB3ZWV4UGxhdGZvcm0gPSBpbldlZXggJiYgV1hFbnZpcm9ubWVudC5wbGF0Zm9ybS50b0xvd2VyQ2FzZSgpO1xudmFyIFVBID0gaW5Ccm93c2VyICYmIHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCk7XG52YXIgaXNJRSA9IFVBICYmIC9tc2llfHRyaWRlbnQvLnRlc3QoVUEpO1xudmFyIGlzSUU5ID0gVUEgJiYgVUEuaW5kZXhPZignbXNpZSA5LjAnKSA+IDA7XG52YXIgaXNFZGdlID0gVUEgJiYgVUEuaW5kZXhPZignZWRnZS8nKSA+IDA7XG52YXIgaXNBbmRyb2lkID0gKFVBICYmIFVBLmluZGV4T2YoJ2FuZHJvaWQnKSA+IDApIHx8ICh3ZWV4UGxhdGZvcm0gPT09ICdhbmRyb2lkJyk7XG52YXIgaXNJT1MgPSAoVUEgJiYgL2lwaG9uZXxpcGFkfGlwb2R8aW9zLy50ZXN0KFVBKSkgfHwgKHdlZXhQbGF0Zm9ybSA9PT0gJ2lvcycpO1xudmFyIGlzQ2hyb21lID0gVUEgJiYgL2Nocm9tZVxcL1xcZCsvLnRlc3QoVUEpICYmICFpc0VkZ2U7XG52YXIgaXNQaGFudG9tSlMgPSBVQSAmJiAvcGhhbnRvbWpzLy50ZXN0KFVBKTtcbnZhciBpc0ZGID0gVUEgJiYgVUEubWF0Y2goL2ZpcmVmb3hcXC8oXFxkKykvKTtcblxuLy8gRmlyZWZveCBoYXMgYSBcIndhdGNoXCIgZnVuY3Rpb24gb24gT2JqZWN0LnByb3RvdHlwZS4uLlxudmFyIG5hdGl2ZVdhdGNoID0gKHt9KS53YXRjaDtcbmlmIChpbkJyb3dzZXIpIHtcbiAgdHJ5IHtcbiAgICB2YXIgb3B0cyA9IHt9O1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvcHRzLCAncGFzc2l2ZScsICh7XG4gICAgICBnZXQ6IGZ1bmN0aW9uIGdldCAoKSB7XG4gICAgICB9XG4gICAgfSkpOyAvLyBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svZmxvdy9pc3N1ZXMvMjg1XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Rlc3QtcGFzc2l2ZScsIG51bGwsIG9wdHMpO1xuICB9IGNhdGNoIChlKSB7fVxufVxuXG4vLyB0aGlzIG5lZWRzIHRvIGJlIGxhenktZXZhbGVkIGJlY2F1c2UgdnVlIG1heSBiZSByZXF1aXJlZCBiZWZvcmVcbi8vIHZ1ZS1zZXJ2ZXItcmVuZGVyZXIgY2FuIHNldCBWVUVfRU5WXG52YXIgX2lzU2VydmVyO1xudmFyIGlzU2VydmVyUmVuZGVyaW5nID0gZnVuY3Rpb24gKCkge1xuICBpZiAoX2lzU2VydmVyID09PSB1bmRlZmluZWQpIHtcbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgICBpZiAoIWluQnJvd3NlciAmJiAhaW5XZWV4ICYmIHR5cGVvZiBnbG9iYWwgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBkZXRlY3QgcHJlc2VuY2Ugb2YgdnVlLXNlcnZlci1yZW5kZXJlciBhbmQgYXZvaWRcbiAgICAgIC8vIFdlYnBhY2sgc2hpbW1pbmcgdGhlIHByb2Nlc3NcbiAgICAgIF9pc1NlcnZlciA9IGdsb2JhbFsncHJvY2VzcyddICYmIGdsb2JhbFsncHJvY2VzcyddLmVudi5WVUVfRU5WID09PSAnc2VydmVyJztcbiAgICB9IGVsc2Uge1xuICAgICAgX2lzU2VydmVyID0gZmFsc2U7XG4gICAgfVxuICB9XG4gIHJldHVybiBfaXNTZXJ2ZXJcbn07XG5cbi8vIGRldGVjdCBkZXZ0b29sc1xudmFyIGRldnRvb2xzID0gaW5Ccm93c2VyICYmIHdpbmRvdy5fX1ZVRV9ERVZUT09MU19HTE9CQUxfSE9PS19fO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuZnVuY3Rpb24gaXNOYXRpdmUgKEN0b3IpIHtcbiAgcmV0dXJuIHR5cGVvZiBDdG9yID09PSAnZnVuY3Rpb24nICYmIC9uYXRpdmUgY29kZS8udGVzdChDdG9yLnRvU3RyaW5nKCkpXG59XG5cbnZhciBoYXNTeW1ib2wgPVxuICB0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBpc05hdGl2ZShTeW1ib2wpICYmXG4gIHR5cGVvZiBSZWZsZWN0ICE9PSAndW5kZWZpbmVkJyAmJiBpc05hdGl2ZShSZWZsZWN0Lm93bktleXMpO1xuXG52YXIgX1NldDtcbi8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqLyAvLyAkZmxvdy1kaXNhYmxlLWxpbmVcbmlmICh0eXBlb2YgU2V0ICE9PSAndW5kZWZpbmVkJyAmJiBpc05hdGl2ZShTZXQpKSB7XG4gIC8vIHVzZSBuYXRpdmUgU2V0IHdoZW4gYXZhaWxhYmxlLlxuICBfU2V0ID0gU2V0O1xufSBlbHNlIHtcbiAgLy8gYSBub24tc3RhbmRhcmQgU2V0IHBvbHlmaWxsIHRoYXQgb25seSB3b3JrcyB3aXRoIHByaW1pdGl2ZSBrZXlzLlxuICBfU2V0ID0gLypAX19QVVJFX18qLyhmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gU2V0ICgpIHtcbiAgICAgIHRoaXMuc2V0ID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICB9XG4gICAgU2V0LnByb3RvdHlwZS5oYXMgPSBmdW5jdGlvbiBoYXMgKGtleSkge1xuICAgICAgcmV0dXJuIHRoaXMuc2V0W2tleV0gPT09IHRydWVcbiAgICB9O1xuICAgIFNldC5wcm90b3R5cGUuYWRkID0gZnVuY3Rpb24gYWRkIChrZXkpIHtcbiAgICAgIHRoaXMuc2V0W2tleV0gPSB0cnVlO1xuICAgIH07XG4gICAgU2V0LnByb3RvdHlwZS5jbGVhciA9IGZ1bmN0aW9uIGNsZWFyICgpIHtcbiAgICAgIHRoaXMuc2V0ID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIFNldDtcbiAgfSgpKTtcbn1cblxuLyogICovXG5cbnZhciB3YXJuID0gbm9vcDtcbnZhciB0aXAgPSBub29wO1xudmFyIGdlbmVyYXRlQ29tcG9uZW50VHJhY2UgPSAobm9vcCk7IC8vIHdvcmsgYXJvdW5kIGZsb3cgY2hlY2tcbnZhciBmb3JtYXRDb21wb25lbnROYW1lID0gKG5vb3ApO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICB2YXIgaGFzQ29uc29sZSA9IHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJztcbiAgdmFyIGNsYXNzaWZ5UkUgPSAvKD86XnxbLV9dKShcXHcpL2c7XG4gIHZhciBjbGFzc2lmeSA9IGZ1bmN0aW9uIChzdHIpIHsgcmV0dXJuIHN0clxuICAgIC5yZXBsYWNlKGNsYXNzaWZ5UkUsIGZ1bmN0aW9uIChjKSB7IHJldHVybiBjLnRvVXBwZXJDYXNlKCk7IH0pXG4gICAgLnJlcGxhY2UoL1stX10vZywgJycpOyB9O1xuXG4gIHdhcm4gPSBmdW5jdGlvbiAobXNnLCB2bSkge1xuICAgIHZhciB0cmFjZSA9IHZtID8gZ2VuZXJhdGVDb21wb25lbnRUcmFjZSh2bSkgOiAnJztcblxuICAgIGlmIChjb25maWcud2FybkhhbmRsZXIpIHtcbiAgICAgIGNvbmZpZy53YXJuSGFuZGxlci5jYWxsKG51bGwsIG1zZywgdm0sIHRyYWNlKTtcbiAgICB9IGVsc2UgaWYgKGhhc0NvbnNvbGUgJiYgKCFjb25maWcuc2lsZW50KSkge1xuICAgICAgY29uc29sZS5lcnJvcigoXCJbVnVlIHdhcm5dOiBcIiArIG1zZyArIHRyYWNlKSk7XG4gICAgfVxuICB9O1xuXG4gIHRpcCA9IGZ1bmN0aW9uIChtc2csIHZtKSB7XG4gICAgaWYgKGhhc0NvbnNvbGUgJiYgKCFjb25maWcuc2lsZW50KSkge1xuICAgICAgY29uc29sZS53YXJuKFwiW1Z1ZSB0aXBdOiBcIiArIG1zZyArIChcbiAgICAgICAgdm0gPyBnZW5lcmF0ZUNvbXBvbmVudFRyYWNlKHZtKSA6ICcnXG4gICAgICApKTtcbiAgICB9XG4gIH07XG5cbiAgZm9ybWF0Q29tcG9uZW50TmFtZSA9IGZ1bmN0aW9uICh2bSwgaW5jbHVkZUZpbGUpIHtcbiAgICB7XG4gICAgICBpZih2bS4kc2NvcGUgJiYgdm0uJHNjb3BlLmlzKXtcbiAgICAgICAgcmV0dXJuIHZtLiRzY29wZS5pc1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAodm0uJHJvb3QgPT09IHZtKSB7XG4gICAgICByZXR1cm4gJzxSb290PidcbiAgICB9XG4gICAgdmFyIG9wdGlvbnMgPSB0eXBlb2Ygdm0gPT09ICdmdW5jdGlvbicgJiYgdm0uY2lkICE9IG51bGxcbiAgICAgID8gdm0ub3B0aW9uc1xuICAgICAgOiB2bS5faXNWdWVcbiAgICAgICAgPyB2bS4kb3B0aW9ucyB8fCB2bS5jb25zdHJ1Y3Rvci5vcHRpb25zXG4gICAgICAgIDogdm07XG4gICAgdmFyIG5hbWUgPSBvcHRpb25zLm5hbWUgfHwgb3B0aW9ucy5fY29tcG9uZW50VGFnO1xuICAgIHZhciBmaWxlID0gb3B0aW9ucy5fX2ZpbGU7XG4gICAgaWYgKCFuYW1lICYmIGZpbGUpIHtcbiAgICAgIHZhciBtYXRjaCA9IGZpbGUubWF0Y2goLyhbXi9cXFxcXSspXFwudnVlJC8pO1xuICAgICAgbmFtZSA9IG1hdGNoICYmIG1hdGNoWzFdO1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAobmFtZSA/IChcIjxcIiArIChjbGFzc2lmeShuYW1lKSkgKyBcIj5cIikgOiBcIjxBbm9ueW1vdXM+XCIpICtcbiAgICAgIChmaWxlICYmIGluY2x1ZGVGaWxlICE9PSBmYWxzZSA/IChcIiBhdCBcIiArIGZpbGUpIDogJycpXG4gICAgKVxuICB9O1xuXG4gIHZhciByZXBlYXQgPSBmdW5jdGlvbiAoc3RyLCBuKSB7XG4gICAgdmFyIHJlcyA9ICcnO1xuICAgIHdoaWxlIChuKSB7XG4gICAgICBpZiAobiAlIDIgPT09IDEpIHsgcmVzICs9IHN0cjsgfVxuICAgICAgaWYgKG4gPiAxKSB7IHN0ciArPSBzdHI7IH1cbiAgICAgIG4gPj49IDE7XG4gICAgfVxuICAgIHJldHVybiByZXNcbiAgfTtcblxuICBnZW5lcmF0ZUNvbXBvbmVudFRyYWNlID0gZnVuY3Rpb24gKHZtKSB7XG4gICAgaWYgKHZtLl9pc1Z1ZSAmJiB2bS4kcGFyZW50KSB7XG4gICAgICB2YXIgdHJlZSA9IFtdO1xuICAgICAgdmFyIGN1cnJlbnRSZWN1cnNpdmVTZXF1ZW5jZSA9IDA7XG4gICAgICB3aGlsZSAodm0pIHtcbiAgICAgICAgaWYgKHRyZWUubGVuZ3RoID4gMCkge1xuICAgICAgICAgIHZhciBsYXN0ID0gdHJlZVt0cmVlLmxlbmd0aCAtIDFdO1xuICAgICAgICAgIGlmIChsYXN0LmNvbnN0cnVjdG9yID09PSB2bS5jb25zdHJ1Y3Rvcikge1xuICAgICAgICAgICAgY3VycmVudFJlY3Vyc2l2ZVNlcXVlbmNlKys7XG4gICAgICAgICAgICB2bSA9IHZtLiRwYXJlbnQ7XG4gICAgICAgICAgICBjb250aW51ZVxuICAgICAgICAgIH0gZWxzZSBpZiAoY3VycmVudFJlY3Vyc2l2ZVNlcXVlbmNlID4gMCkge1xuICAgICAgICAgICAgdHJlZVt0cmVlLmxlbmd0aCAtIDFdID0gW2xhc3QsIGN1cnJlbnRSZWN1cnNpdmVTZXF1ZW5jZV07XG4gICAgICAgICAgICBjdXJyZW50UmVjdXJzaXZlU2VxdWVuY2UgPSAwO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0cmVlLnB1c2godm0pO1xuICAgICAgICB2bSA9IHZtLiRwYXJlbnQ7XG4gICAgICB9XG4gICAgICByZXR1cm4gJ1xcblxcbmZvdW5kIGluXFxuXFxuJyArIHRyZWVcbiAgICAgICAgLm1hcChmdW5jdGlvbiAodm0sIGkpIHsgcmV0dXJuIChcIlwiICsgKGkgPT09IDAgPyAnLS0tPiAnIDogcmVwZWF0KCcgJywgNSArIGkgKiAyKSkgKyAoQXJyYXkuaXNBcnJheSh2bSlcbiAgICAgICAgICAgID8gKChmb3JtYXRDb21wb25lbnROYW1lKHZtWzBdKSkgKyBcIi4uLiAoXCIgKyAodm1bMV0pICsgXCIgcmVjdXJzaXZlIGNhbGxzKVwiKVxuICAgICAgICAgICAgOiBmb3JtYXRDb21wb25lbnROYW1lKHZtKSkpOyB9KVxuICAgICAgICAuam9pbignXFxuJylcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIChcIlxcblxcbihmb3VuZCBpbiBcIiArIChmb3JtYXRDb21wb25lbnROYW1lKHZtKSkgKyBcIilcIilcbiAgICB9XG4gIH07XG59XG5cbi8qICAqL1xuXG52YXIgdWlkID0gMDtcblxuLyoqXG4gKiBBIGRlcCBpcyBhbiBvYnNlcnZhYmxlIHRoYXQgY2FuIGhhdmUgbXVsdGlwbGVcbiAqIGRpcmVjdGl2ZXMgc3Vic2NyaWJpbmcgdG8gaXQuXG4gKi9cbnZhciBEZXAgPSBmdW5jdGlvbiBEZXAgKCkge1xuICAvLyBmaXhlZCBieSB4eHh4eHggKG52dWUgdnVleClcbiAgLyogZXNsaW50LWRpc2FibGUgbm8tdW5kZWYgKi9cbiAgaWYodHlwZW9mIFNoYXJlZE9iamVjdCAhPT0gJ3VuZGVmaW5lZCcpe1xuICAgIHRoaXMuaWQgPSBTaGFyZWRPYmplY3QudWlkKys7XG4gIH0gZWxzZSB7XG4gICAgdGhpcy5pZCA9IHVpZCsrO1xuICB9XG4gIHRoaXMuc3VicyA9IFtdO1xufTtcblxuRGVwLnByb3RvdHlwZS5hZGRTdWIgPSBmdW5jdGlvbiBhZGRTdWIgKHN1Yikge1xuICB0aGlzLnN1YnMucHVzaChzdWIpO1xufTtcblxuRGVwLnByb3RvdHlwZS5yZW1vdmVTdWIgPSBmdW5jdGlvbiByZW1vdmVTdWIgKHN1Yikge1xuICByZW1vdmUodGhpcy5zdWJzLCBzdWIpO1xufTtcblxuRGVwLnByb3RvdHlwZS5kZXBlbmQgPSBmdW5jdGlvbiBkZXBlbmQgKCkge1xuICBpZiAoRGVwLlNoYXJlZE9iamVjdC50YXJnZXQpIHtcbiAgICBEZXAuU2hhcmVkT2JqZWN0LnRhcmdldC5hZGREZXAodGhpcyk7XG4gIH1cbn07XG5cbkRlcC5wcm90b3R5cGUubm90aWZ5ID0gZnVuY3Rpb24gbm90aWZ5ICgpIHtcbiAgLy8gc3RhYmlsaXplIHRoZSBzdWJzY3JpYmVyIGxpc3QgZmlyc3RcbiAgdmFyIHN1YnMgPSB0aGlzLnN1YnMuc2xpY2UoKTtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgIWNvbmZpZy5hc3luYykge1xuICAgIC8vIHN1YnMgYXJlbid0IHNvcnRlZCBpbiBzY2hlZHVsZXIgaWYgbm90IHJ1bm5pbmcgYXN5bmNcbiAgICAvLyB3ZSBuZWVkIHRvIHNvcnQgdGhlbSBub3cgdG8gbWFrZSBzdXJlIHRoZXkgZmlyZSBpbiBjb3JyZWN0XG4gICAgLy8gb3JkZXJcbiAgICBzdWJzLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHsgcmV0dXJuIGEuaWQgLSBiLmlkOyB9KTtcbiAgfVxuICBmb3IgKHZhciBpID0gMCwgbCA9IHN1YnMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgc3Vic1tpXS51cGRhdGUoKTtcbiAgfVxufTtcblxuLy8gVGhlIGN1cnJlbnQgdGFyZ2V0IHdhdGNoZXIgYmVpbmcgZXZhbHVhdGVkLlxuLy8gVGhpcyBpcyBnbG9iYWxseSB1bmlxdWUgYmVjYXVzZSBvbmx5IG9uZSB3YXRjaGVyXG4vLyBjYW4gYmUgZXZhbHVhdGVkIGF0IGEgdGltZS5cbi8vIGZpeGVkIGJ5IHh4eHh4eCAobnZ1ZSBzaGFyZWQgdnVleClcbi8qIGVzbGludC1kaXNhYmxlIG5vLXVuZGVmICovXG5EZXAuU2hhcmVkT2JqZWN0ID0gdHlwZW9mIFNoYXJlZE9iamVjdCAhPT0gJ3VuZGVmaW5lZCcgPyBTaGFyZWRPYmplY3QgOiB7fTtcbkRlcC5TaGFyZWRPYmplY3QudGFyZ2V0ID0gbnVsbDtcbkRlcC5TaGFyZWRPYmplY3QudGFyZ2V0U3RhY2sgPSBbXTtcblxuZnVuY3Rpb24gcHVzaFRhcmdldCAodGFyZ2V0KSB7XG4gIERlcC5TaGFyZWRPYmplY3QudGFyZ2V0U3RhY2sucHVzaCh0YXJnZXQpO1xuICBEZXAuU2hhcmVkT2JqZWN0LnRhcmdldCA9IHRhcmdldDtcbn1cblxuZnVuY3Rpb24gcG9wVGFyZ2V0ICgpIHtcbiAgRGVwLlNoYXJlZE9iamVjdC50YXJnZXRTdGFjay5wb3AoKTtcbiAgRGVwLlNoYXJlZE9iamVjdC50YXJnZXQgPSBEZXAuU2hhcmVkT2JqZWN0LnRhcmdldFN0YWNrW0RlcC5TaGFyZWRPYmplY3QudGFyZ2V0U3RhY2subGVuZ3RoIC0gMV07XG59XG5cbi8qICAqL1xuXG52YXIgVk5vZGUgPSBmdW5jdGlvbiBWTm9kZSAoXG4gIHRhZyxcbiAgZGF0YSxcbiAgY2hpbGRyZW4sXG4gIHRleHQsXG4gIGVsbSxcbiAgY29udGV4dCxcbiAgY29tcG9uZW50T3B0aW9ucyxcbiAgYXN5bmNGYWN0b3J5XG4pIHtcbiAgdGhpcy50YWcgPSB0YWc7XG4gIHRoaXMuZGF0YSA9IGRhdGE7XG4gIHRoaXMuY2hpbGRyZW4gPSBjaGlsZHJlbjtcbiAgdGhpcy50ZXh0ID0gdGV4dDtcbiAgdGhpcy5lbG0gPSBlbG07XG4gIHRoaXMubnMgPSB1bmRlZmluZWQ7XG4gIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XG4gIHRoaXMuZm5Db250ZXh0ID0gdW5kZWZpbmVkO1xuICB0aGlzLmZuT3B0aW9ucyA9IHVuZGVmaW5lZDtcbiAgdGhpcy5mblNjb3BlSWQgPSB1bmRlZmluZWQ7XG4gIHRoaXMua2V5ID0gZGF0YSAmJiBkYXRhLmtleTtcbiAgdGhpcy5jb21wb25lbnRPcHRpb25zID0gY29tcG9uZW50T3B0aW9ucztcbiAgdGhpcy5jb21wb25lbnRJbnN0YW5jZSA9IHVuZGVmaW5lZDtcbiAgdGhpcy5wYXJlbnQgPSB1bmRlZmluZWQ7XG4gIHRoaXMucmF3ID0gZmFsc2U7XG4gIHRoaXMuaXNTdGF0aWMgPSBmYWxzZTtcbiAgdGhpcy5pc1Jvb3RJbnNlcnQgPSB0cnVlO1xuICB0aGlzLmlzQ29tbWVudCA9IGZhbHNlO1xuICB0aGlzLmlzQ2xvbmVkID0gZmFsc2U7XG4gIHRoaXMuaXNPbmNlID0gZmFsc2U7XG4gIHRoaXMuYXN5bmNGYWN0b3J5ID0gYXN5bmNGYWN0b3J5O1xuICB0aGlzLmFzeW5jTWV0YSA9IHVuZGVmaW5lZDtcbiAgdGhpcy5pc0FzeW5jUGxhY2Vob2xkZXIgPSBmYWxzZTtcbn07XG5cbnZhciBwcm90b3R5cGVBY2Nlc3NvcnMgPSB7IGNoaWxkOiB7IGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH07XG5cbi8vIERFUFJFQ0FURUQ6IGFsaWFzIGZvciBjb21wb25lbnRJbnN0YW5jZSBmb3IgYmFja3dhcmRzIGNvbXBhdC5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG5wcm90b3R5cGVBY2Nlc3NvcnMuY2hpbGQuZ2V0ID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gdGhpcy5jb21wb25lbnRJbnN0YW5jZVxufTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoIFZOb2RlLnByb3RvdHlwZSwgcHJvdG90eXBlQWNjZXNzb3JzICk7XG5cbnZhciBjcmVhdGVFbXB0eVZOb2RlID0gZnVuY3Rpb24gKHRleHQpIHtcbiAgaWYgKCB0ZXh0ID09PSB2b2lkIDAgKSB0ZXh0ID0gJyc7XG5cbiAgdmFyIG5vZGUgPSBuZXcgVk5vZGUoKTtcbiAgbm9kZS50ZXh0ID0gdGV4dDtcbiAgbm9kZS5pc0NvbW1lbnQgPSB0cnVlO1xuICByZXR1cm4gbm9kZVxufTtcblxuZnVuY3Rpb24gY3JlYXRlVGV4dFZOb2RlICh2YWwpIHtcbiAgcmV0dXJuIG5ldyBWTm9kZSh1bmRlZmluZWQsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCBTdHJpbmcodmFsKSlcbn1cblxuLy8gb3B0aW1pemVkIHNoYWxsb3cgY2xvbmVcbi8vIHVzZWQgZm9yIHN0YXRpYyBub2RlcyBhbmQgc2xvdCBub2RlcyBiZWNhdXNlIHRoZXkgbWF5IGJlIHJldXNlZCBhY3Jvc3Ncbi8vIG11bHRpcGxlIHJlbmRlcnMsIGNsb25pbmcgdGhlbSBhdm9pZHMgZXJyb3JzIHdoZW4gRE9NIG1hbmlwdWxhdGlvbnMgcmVseVxuLy8gb24gdGhlaXIgZWxtIHJlZmVyZW5jZS5cbmZ1bmN0aW9uIGNsb25lVk5vZGUgKHZub2RlKSB7XG4gIHZhciBjbG9uZWQgPSBuZXcgVk5vZGUoXG4gICAgdm5vZGUudGFnLFxuICAgIHZub2RlLmRhdGEsXG4gICAgLy8gIzc5NzVcbiAgICAvLyBjbG9uZSBjaGlsZHJlbiBhcnJheSB0byBhdm9pZCBtdXRhdGluZyBvcmlnaW5hbCBpbiBjYXNlIG9mIGNsb25pbmdcbiAgICAvLyBhIGNoaWxkLlxuICAgIHZub2RlLmNoaWxkcmVuICYmIHZub2RlLmNoaWxkcmVuLnNsaWNlKCksXG4gICAgdm5vZGUudGV4dCxcbiAgICB2bm9kZS5lbG0sXG4gICAgdm5vZGUuY29udGV4dCxcbiAgICB2bm9kZS5jb21wb25lbnRPcHRpb25zLFxuICAgIHZub2RlLmFzeW5jRmFjdG9yeVxuICApO1xuICBjbG9uZWQubnMgPSB2bm9kZS5ucztcbiAgY2xvbmVkLmlzU3RhdGljID0gdm5vZGUuaXNTdGF0aWM7XG4gIGNsb25lZC5rZXkgPSB2bm9kZS5rZXk7XG4gIGNsb25lZC5pc0NvbW1lbnQgPSB2bm9kZS5pc0NvbW1lbnQ7XG4gIGNsb25lZC5mbkNvbnRleHQgPSB2bm9kZS5mbkNvbnRleHQ7XG4gIGNsb25lZC5mbk9wdGlvbnMgPSB2bm9kZS5mbk9wdGlvbnM7XG4gIGNsb25lZC5mblNjb3BlSWQgPSB2bm9kZS5mblNjb3BlSWQ7XG4gIGNsb25lZC5hc3luY01ldGEgPSB2bm9kZS5hc3luY01ldGE7XG4gIGNsb25lZC5pc0Nsb25lZCA9IHRydWU7XG4gIHJldHVybiBjbG9uZWRcbn1cblxuLypcbiAqIG5vdCB0eXBlIGNoZWNraW5nIHRoaXMgZmlsZSBiZWNhdXNlIGZsb3cgZG9lc24ndCBwbGF5IHdlbGwgd2l0aFxuICogZHluYW1pY2FsbHkgYWNjZXNzaW5nIG1ldGhvZHMgb24gQXJyYXkgcHJvdG90eXBlXG4gKi9cblxudmFyIGFycmF5UHJvdG8gPSBBcnJheS5wcm90b3R5cGU7XG52YXIgYXJyYXlNZXRob2RzID0gT2JqZWN0LmNyZWF0ZShhcnJheVByb3RvKTtcblxudmFyIG1ldGhvZHNUb1BhdGNoID0gW1xuICAncHVzaCcsXG4gICdwb3AnLFxuICAnc2hpZnQnLFxuICAndW5zaGlmdCcsXG4gICdzcGxpY2UnLFxuICAnc29ydCcsXG4gICdyZXZlcnNlJ1xuXTtcblxuLyoqXG4gKiBJbnRlcmNlcHQgbXV0YXRpbmcgbWV0aG9kcyBhbmQgZW1pdCBldmVudHNcbiAqL1xubWV0aG9kc1RvUGF0Y2guZm9yRWFjaChmdW5jdGlvbiAobWV0aG9kKSB7XG4gIC8vIGNhY2hlIG9yaWdpbmFsIG1ldGhvZFxuICB2YXIgb3JpZ2luYWwgPSBhcnJheVByb3RvW21ldGhvZF07XG4gIGRlZihhcnJheU1ldGhvZHMsIG1ldGhvZCwgZnVuY3Rpb24gbXV0YXRvciAoKSB7XG4gICAgdmFyIGFyZ3MgPSBbXSwgbGVuID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICB3aGlsZSAoIGxlbi0tICkgYXJnc1sgbGVuIF0gPSBhcmd1bWVudHNbIGxlbiBdO1xuXG4gICAgdmFyIHJlc3VsdCA9IG9yaWdpbmFsLmFwcGx5KHRoaXMsIGFyZ3MpO1xuICAgIHZhciBvYiA9IHRoaXMuX19vYl9fO1xuICAgIHZhciBpbnNlcnRlZDtcbiAgICBzd2l0Y2ggKG1ldGhvZCkge1xuICAgICAgY2FzZSAncHVzaCc6XG4gICAgICBjYXNlICd1bnNoaWZ0JzpcbiAgICAgICAgaW5zZXJ0ZWQgPSBhcmdzO1xuICAgICAgICBicmVha1xuICAgICAgY2FzZSAnc3BsaWNlJzpcbiAgICAgICAgaW5zZXJ0ZWQgPSBhcmdzLnNsaWNlKDIpO1xuICAgICAgICBicmVha1xuICAgIH1cbiAgICBpZiAoaW5zZXJ0ZWQpIHsgb2Iub2JzZXJ2ZUFycmF5KGluc2VydGVkKTsgfVxuICAgIC8vIG5vdGlmeSBjaGFuZ2VcbiAgICBvYi5kZXAubm90aWZ5KCk7XG4gICAgcmV0dXJuIHJlc3VsdFxuICB9KTtcbn0pO1xuXG4vKiAgKi9cblxudmFyIGFycmF5S2V5cyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKGFycmF5TWV0aG9kcyk7XG5cbi8qKlxuICogSW4gc29tZSBjYXNlcyB3ZSBtYXkgd2FudCB0byBkaXNhYmxlIG9ic2VydmF0aW9uIGluc2lkZSBhIGNvbXBvbmVudCdzXG4gKiB1cGRhdGUgY29tcHV0YXRpb24uXG4gKi9cbnZhciBzaG91bGRPYnNlcnZlID0gdHJ1ZTtcblxuZnVuY3Rpb24gdG9nZ2xlT2JzZXJ2aW5nICh2YWx1ZSkge1xuICBzaG91bGRPYnNlcnZlID0gdmFsdWU7XG59XG5cbi8qKlxuICogT2JzZXJ2ZXIgY2xhc3MgdGhhdCBpcyBhdHRhY2hlZCB0byBlYWNoIG9ic2VydmVkXG4gKiBvYmplY3QuIE9uY2UgYXR0YWNoZWQsIHRoZSBvYnNlcnZlciBjb252ZXJ0cyB0aGUgdGFyZ2V0XG4gKiBvYmplY3QncyBwcm9wZXJ0eSBrZXlzIGludG8gZ2V0dGVyL3NldHRlcnMgdGhhdFxuICogY29sbGVjdCBkZXBlbmRlbmNpZXMgYW5kIGRpc3BhdGNoIHVwZGF0ZXMuXG4gKi9cbnZhciBPYnNlcnZlciA9IGZ1bmN0aW9uIE9ic2VydmVyICh2YWx1ZSkge1xuICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gIHRoaXMuZGVwID0gbmV3IERlcCgpO1xuICB0aGlzLnZtQ291bnQgPSAwO1xuICBkZWYodmFsdWUsICdfX29iX18nLCB0aGlzKTtcbiAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgaWYgKGhhc1Byb3RvKSB7XG4gICAgICB7Ly8gZml4ZWQgYnkgeHh4eHh4IOW+ruS/oeWwj+eoi+W6j+S9v+eUqCBwbHVnaW5zIOS5i+WQju+8jOaVsOe7hOaWueazleiiq+ebtOaOpeaMgui9veWIsOS6huaVsOe7hOWvueixoeS4iu+8jOmcgOimgeaJp+ihjCBjb3B5QXVnbWVudCDpgLvovpFcbiAgICAgICAgaWYodmFsdWUucHVzaCAhPT0gdmFsdWUuX19wcm90b19fLnB1c2gpe1xuICAgICAgICAgIGNvcHlBdWdtZW50KHZhbHVlLCBhcnJheU1ldGhvZHMsIGFycmF5S2V5cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcHJvdG9BdWdtZW50KHZhbHVlLCBhcnJheU1ldGhvZHMpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvcHlBdWdtZW50KHZhbHVlLCBhcnJheU1ldGhvZHMsIGFycmF5S2V5cyk7XG4gICAgfVxuICAgIHRoaXMub2JzZXJ2ZUFycmF5KHZhbHVlKTtcbiAgfSBlbHNlIHtcbiAgICB0aGlzLndhbGsodmFsdWUpO1xuICB9XG59O1xuXG4vKipcbiAqIFdhbGsgdGhyb3VnaCBhbGwgcHJvcGVydGllcyBhbmQgY29udmVydCB0aGVtIGludG9cbiAqIGdldHRlci9zZXR0ZXJzLiBUaGlzIG1ldGhvZCBzaG91bGQgb25seSBiZSBjYWxsZWQgd2hlblxuICogdmFsdWUgdHlwZSBpcyBPYmplY3QuXG4gKi9cbk9ic2VydmVyLnByb3RvdHlwZS53YWxrID0gZnVuY3Rpb24gd2FsayAob2JqKSB7XG4gIHZhciBrZXlzID0gT2JqZWN0LmtleXMob2JqKTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgZGVmaW5lUmVhY3RpdmUkJDEob2JqLCBrZXlzW2ldKTtcbiAgfVxufTtcblxuLyoqXG4gKiBPYnNlcnZlIGEgbGlzdCBvZiBBcnJheSBpdGVtcy5cbiAqL1xuT2JzZXJ2ZXIucHJvdG90eXBlLm9ic2VydmVBcnJheSA9IGZ1bmN0aW9uIG9ic2VydmVBcnJheSAoaXRlbXMpIHtcbiAgZm9yICh2YXIgaSA9IDAsIGwgPSBpdGVtcy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICBvYnNlcnZlKGl0ZW1zW2ldKTtcbiAgfVxufTtcblxuLy8gaGVscGVyc1xuXG4vKipcbiAqIEF1Z21lbnQgYSB0YXJnZXQgT2JqZWN0IG9yIEFycmF5IGJ5IGludGVyY2VwdGluZ1xuICogdGhlIHByb3RvdHlwZSBjaGFpbiB1c2luZyBfX3Byb3RvX19cbiAqL1xuZnVuY3Rpb24gcHJvdG9BdWdtZW50ICh0YXJnZXQsIHNyYykge1xuICAvKiBlc2xpbnQtZGlzYWJsZSBuby1wcm90byAqL1xuICB0YXJnZXQuX19wcm90b19fID0gc3JjO1xuICAvKiBlc2xpbnQtZW5hYmxlIG5vLXByb3RvICovXG59XG5cbi8qKlxuICogQXVnbWVudCBhIHRhcmdldCBPYmplY3Qgb3IgQXJyYXkgYnkgZGVmaW5pbmdcbiAqIGhpZGRlbiBwcm9wZXJ0aWVzLlxuICovXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuZnVuY3Rpb24gY29weUF1Z21lbnQgKHRhcmdldCwgc3JjLCBrZXlzKSB7XG4gIGZvciAodmFyIGkgPSAwLCBsID0ga2V5cy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICB2YXIga2V5ID0ga2V5c1tpXTtcbiAgICBkZWYodGFyZ2V0LCBrZXksIHNyY1trZXldKTtcbiAgfVxufVxuXG4vKipcbiAqIEF0dGVtcHQgdG8gY3JlYXRlIGFuIG9ic2VydmVyIGluc3RhbmNlIGZvciBhIHZhbHVlLFxuICogcmV0dXJucyB0aGUgbmV3IG9ic2VydmVyIGlmIHN1Y2Nlc3NmdWxseSBvYnNlcnZlZCxcbiAqIG9yIHRoZSBleGlzdGluZyBvYnNlcnZlciBpZiB0aGUgdmFsdWUgYWxyZWFkeSBoYXMgb25lLlxuICovXG5mdW5jdGlvbiBvYnNlcnZlICh2YWx1ZSwgYXNSb290RGF0YSkge1xuICBpZiAoIWlzT2JqZWN0KHZhbHVlKSB8fCB2YWx1ZSBpbnN0YW5jZW9mIFZOb2RlKSB7XG4gICAgcmV0dXJuXG4gIH1cbiAgdmFyIG9iO1xuICBpZiAoaGFzT3duKHZhbHVlLCAnX19vYl9fJykgJiYgdmFsdWUuX19vYl9fIGluc3RhbmNlb2YgT2JzZXJ2ZXIpIHtcbiAgICBvYiA9IHZhbHVlLl9fb2JfXztcbiAgfSBlbHNlIGlmIChcbiAgICBzaG91bGRPYnNlcnZlICYmXG4gICAgIWlzU2VydmVyUmVuZGVyaW5nKCkgJiZcbiAgICAoQXJyYXkuaXNBcnJheSh2YWx1ZSkgfHwgaXNQbGFpbk9iamVjdCh2YWx1ZSkpICYmXG4gICAgT2JqZWN0LmlzRXh0ZW5zaWJsZSh2YWx1ZSkgJiZcbiAgICAhdmFsdWUuX2lzVnVlXG4gICkge1xuICAgIG9iID0gbmV3IE9ic2VydmVyKHZhbHVlKTtcbiAgfVxuICBpZiAoYXNSb290RGF0YSAmJiBvYikge1xuICAgIG9iLnZtQ291bnQrKztcbiAgfVxuICByZXR1cm4gb2Jcbn1cblxuLyoqXG4gKiBEZWZpbmUgYSByZWFjdGl2ZSBwcm9wZXJ0eSBvbiBhbiBPYmplY3QuXG4gKi9cbmZ1bmN0aW9uIGRlZmluZVJlYWN0aXZlJCQxIChcbiAgb2JqLFxuICBrZXksXG4gIHZhbCxcbiAgY3VzdG9tU2V0dGVyLFxuICBzaGFsbG93XG4pIHtcbiAgdmFyIGRlcCA9IG5ldyBEZXAoKTtcblxuICB2YXIgcHJvcGVydHkgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iaiwga2V5KTtcbiAgaWYgKHByb3BlcnR5ICYmIHByb3BlcnR5LmNvbmZpZ3VyYWJsZSA9PT0gZmFsc2UpIHtcbiAgICByZXR1cm5cbiAgfVxuXG4gIC8vIGNhdGVyIGZvciBwcmUtZGVmaW5lZCBnZXR0ZXIvc2V0dGVyc1xuICB2YXIgZ2V0dGVyID0gcHJvcGVydHkgJiYgcHJvcGVydHkuZ2V0O1xuICB2YXIgc2V0dGVyID0gcHJvcGVydHkgJiYgcHJvcGVydHkuc2V0O1xuICBpZiAoKCFnZXR0ZXIgfHwgc2V0dGVyKSAmJiBhcmd1bWVudHMubGVuZ3RoID09PSAyKSB7XG4gICAgdmFsID0gb2JqW2tleV07XG4gIH1cblxuICB2YXIgY2hpbGRPYiA9ICFzaGFsbG93ICYmIG9ic2VydmUodmFsKTtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgZ2V0OiBmdW5jdGlvbiByZWFjdGl2ZUdldHRlciAoKSB7XG4gICAgICB2YXIgdmFsdWUgPSBnZXR0ZXIgPyBnZXR0ZXIuY2FsbChvYmopIDogdmFsO1xuICAgICAgaWYgKERlcC5TaGFyZWRPYmplY3QudGFyZ2V0KSB7IC8vIGZpeGVkIGJ5IHh4eHh4eFxuICAgICAgICBkZXAuZGVwZW5kKCk7XG4gICAgICAgIGlmIChjaGlsZE9iKSB7XG4gICAgICAgICAgY2hpbGRPYi5kZXAuZGVwZW5kKCk7XG4gICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgICAgICBkZXBlbmRBcnJheSh2YWx1ZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gdmFsdWVcbiAgICB9LFxuICAgIHNldDogZnVuY3Rpb24gcmVhY3RpdmVTZXR0ZXIgKG5ld1ZhbCkge1xuICAgICAgdmFyIHZhbHVlID0gZ2V0dGVyID8gZ2V0dGVyLmNhbGwob2JqKSA6IHZhbDtcbiAgICAgIC8qIGVzbGludC1kaXNhYmxlIG5vLXNlbGYtY29tcGFyZSAqL1xuICAgICAgaWYgKG5ld1ZhbCA9PT0gdmFsdWUgfHwgKG5ld1ZhbCAhPT0gbmV3VmFsICYmIHZhbHVlICE9PSB2YWx1ZSkpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgICAvKiBlc2xpbnQtZW5hYmxlIG5vLXNlbGYtY29tcGFyZSAqL1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgY3VzdG9tU2V0dGVyKSB7XG4gICAgICAgIGN1c3RvbVNldHRlcigpO1xuICAgICAgfVxuICAgICAgLy8gIzc5ODE6IGZvciBhY2Nlc3NvciBwcm9wZXJ0aWVzIHdpdGhvdXQgc2V0dGVyXG4gICAgICBpZiAoZ2V0dGVyICYmICFzZXR0ZXIpIHsgcmV0dXJuIH1cbiAgICAgIGlmIChzZXR0ZXIpIHtcbiAgICAgICAgc2V0dGVyLmNhbGwob2JqLCBuZXdWYWwpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFsID0gbmV3VmFsO1xuICAgICAgfVxuICAgICAgY2hpbGRPYiA9ICFzaGFsbG93ICYmIG9ic2VydmUobmV3VmFsKTtcbiAgICAgIGRlcC5ub3RpZnkoKTtcbiAgICB9XG4gIH0pO1xufVxuXG4vKipcbiAqIFNldCBhIHByb3BlcnR5IG9uIGFuIG9iamVjdC4gQWRkcyB0aGUgbmV3IHByb3BlcnR5IGFuZFxuICogdHJpZ2dlcnMgY2hhbmdlIG5vdGlmaWNhdGlvbiBpZiB0aGUgcHJvcGVydHkgZG9lc24ndFxuICogYWxyZWFkeSBleGlzdC5cbiAqL1xuZnVuY3Rpb24gc2V0ICh0YXJnZXQsIGtleSwgdmFsKSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmXG4gICAgKGlzVW5kZWYodGFyZ2V0KSB8fCBpc1ByaW1pdGl2ZSh0YXJnZXQpKVxuICApIHtcbiAgICB3YXJuKChcIkNhbm5vdCBzZXQgcmVhY3RpdmUgcHJvcGVydHkgb24gdW5kZWZpbmVkLCBudWxsLCBvciBwcmltaXRpdmUgdmFsdWU6IFwiICsgKCh0YXJnZXQpKSkpO1xuICB9XG4gIGlmIChBcnJheS5pc0FycmF5KHRhcmdldCkgJiYgaXNWYWxpZEFycmF5SW5kZXgoa2V5KSkge1xuICAgIHRhcmdldC5sZW5ndGggPSBNYXRoLm1heCh0YXJnZXQubGVuZ3RoLCBrZXkpO1xuICAgIHRhcmdldC5zcGxpY2Uoa2V5LCAxLCB2YWwpO1xuICAgIHJldHVybiB2YWxcbiAgfVxuICBpZiAoa2V5IGluIHRhcmdldCAmJiAhKGtleSBpbiBPYmplY3QucHJvdG90eXBlKSkge1xuICAgIHRhcmdldFtrZXldID0gdmFsO1xuICAgIHJldHVybiB2YWxcbiAgfVxuICB2YXIgb2IgPSAodGFyZ2V0KS5fX29iX187XG4gIGlmICh0YXJnZXQuX2lzVnVlIHx8IChvYiAmJiBvYi52bUNvdW50KSkge1xuICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgd2FybihcbiAgICAgICdBdm9pZCBhZGRpbmcgcmVhY3RpdmUgcHJvcGVydGllcyB0byBhIFZ1ZSBpbnN0YW5jZSBvciBpdHMgcm9vdCAkZGF0YSAnICtcbiAgICAgICdhdCBydW50aW1lIC0gZGVjbGFyZSBpdCB1cGZyb250IGluIHRoZSBkYXRhIG9wdGlvbi4nXG4gICAgKTtcbiAgICByZXR1cm4gdmFsXG4gIH1cbiAgaWYgKCFvYikge1xuICAgIHRhcmdldFtrZXldID0gdmFsO1xuICAgIHJldHVybiB2YWxcbiAgfVxuICBkZWZpbmVSZWFjdGl2ZSQkMShvYi52YWx1ZSwga2V5LCB2YWwpO1xuICBvYi5kZXAubm90aWZ5KCk7XG4gIHJldHVybiB2YWxcbn1cblxuLyoqXG4gKiBEZWxldGUgYSBwcm9wZXJ0eSBhbmQgdHJpZ2dlciBjaGFuZ2UgaWYgbmVjZXNzYXJ5LlxuICovXG5mdW5jdGlvbiBkZWwgKHRhcmdldCwga2V5KSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmXG4gICAgKGlzVW5kZWYodGFyZ2V0KSB8fCBpc1ByaW1pdGl2ZSh0YXJnZXQpKVxuICApIHtcbiAgICB3YXJuKChcIkNhbm5vdCBkZWxldGUgcmVhY3RpdmUgcHJvcGVydHkgb24gdW5kZWZpbmVkLCBudWxsLCBvciBwcmltaXRpdmUgdmFsdWU6IFwiICsgKCh0YXJnZXQpKSkpO1xuICB9XG4gIGlmIChBcnJheS5pc0FycmF5KHRhcmdldCkgJiYgaXNWYWxpZEFycmF5SW5kZXgoa2V5KSkge1xuICAgIHRhcmdldC5zcGxpY2Uoa2V5LCAxKTtcbiAgICByZXR1cm5cbiAgfVxuICB2YXIgb2IgPSAodGFyZ2V0KS5fX29iX187XG4gIGlmICh0YXJnZXQuX2lzVnVlIHx8IChvYiAmJiBvYi52bUNvdW50KSkge1xuICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgd2FybihcbiAgICAgICdBdm9pZCBkZWxldGluZyBwcm9wZXJ0aWVzIG9uIGEgVnVlIGluc3RhbmNlIG9yIGl0cyByb290ICRkYXRhICcgK1xuICAgICAgJy0ganVzdCBzZXQgaXQgdG8gbnVsbC4nXG4gICAgKTtcbiAgICByZXR1cm5cbiAgfVxuICBpZiAoIWhhc093bih0YXJnZXQsIGtleSkpIHtcbiAgICByZXR1cm5cbiAgfVxuICBkZWxldGUgdGFyZ2V0W2tleV07XG4gIGlmICghb2IpIHtcbiAgICByZXR1cm5cbiAgfVxuICBvYi5kZXAubm90aWZ5KCk7XG59XG5cbi8qKlxuICogQ29sbGVjdCBkZXBlbmRlbmNpZXMgb24gYXJyYXkgZWxlbWVudHMgd2hlbiB0aGUgYXJyYXkgaXMgdG91Y2hlZCwgc2luY2VcbiAqIHdlIGNhbm5vdCBpbnRlcmNlcHQgYXJyYXkgZWxlbWVudCBhY2Nlc3MgbGlrZSBwcm9wZXJ0eSBnZXR0ZXJzLlxuICovXG5mdW5jdGlvbiBkZXBlbmRBcnJheSAodmFsdWUpIHtcbiAgZm9yICh2YXIgZSA9ICh2b2lkIDApLCBpID0gMCwgbCA9IHZhbHVlLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIGUgPSB2YWx1ZVtpXTtcbiAgICBlICYmIGUuX19vYl9fICYmIGUuX19vYl9fLmRlcC5kZXBlbmQoKTtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShlKSkge1xuICAgICAgZGVwZW5kQXJyYXkoZSk7XG4gICAgfVxuICB9XG59XG5cbi8qICAqL1xuXG4vKipcbiAqIE9wdGlvbiBvdmVyd3JpdGluZyBzdHJhdGVnaWVzIGFyZSBmdW5jdGlvbnMgdGhhdCBoYW5kbGVcbiAqIGhvdyB0byBtZXJnZSBhIHBhcmVudCBvcHRpb24gdmFsdWUgYW5kIGEgY2hpbGQgb3B0aW9uXG4gKiB2YWx1ZSBpbnRvIHRoZSBmaW5hbCB2YWx1ZS5cbiAqL1xudmFyIHN0cmF0cyA9IGNvbmZpZy5vcHRpb25NZXJnZVN0cmF0ZWdpZXM7XG5cbi8qKlxuICogT3B0aW9ucyB3aXRoIHJlc3RyaWN0aW9uc1xuICovXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICBzdHJhdHMuZWwgPSBzdHJhdHMucHJvcHNEYXRhID0gZnVuY3Rpb24gKHBhcmVudCwgY2hpbGQsIHZtLCBrZXkpIHtcbiAgICBpZiAoIXZtKSB7XG4gICAgICB3YXJuKFxuICAgICAgICBcIm9wdGlvbiBcXFwiXCIgKyBrZXkgKyBcIlxcXCIgY2FuIG9ubHkgYmUgdXNlZCBkdXJpbmcgaW5zdGFuY2UgXCIgK1xuICAgICAgICAnY3JlYXRpb24gd2l0aCB0aGUgYG5ld2Aga2V5d29yZC4nXG4gICAgICApO1xuICAgIH1cbiAgICByZXR1cm4gZGVmYXVsdFN0cmF0KHBhcmVudCwgY2hpbGQpXG4gIH07XG59XG5cbi8qKlxuICogSGVscGVyIHRoYXQgcmVjdXJzaXZlbHkgbWVyZ2VzIHR3byBkYXRhIG9iamVjdHMgdG9nZXRoZXIuXG4gKi9cbmZ1bmN0aW9uIG1lcmdlRGF0YSAodG8sIGZyb20pIHtcbiAgaWYgKCFmcm9tKSB7IHJldHVybiB0byB9XG4gIHZhciBrZXksIHRvVmFsLCBmcm9tVmFsO1xuXG4gIHZhciBrZXlzID0gaGFzU3ltYm9sXG4gICAgPyBSZWZsZWN0Lm93bktleXMoZnJvbSlcbiAgICA6IE9iamVjdC5rZXlzKGZyb20pO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xuICAgIGtleSA9IGtleXNbaV07XG4gICAgLy8gaW4gY2FzZSB0aGUgb2JqZWN0IGlzIGFscmVhZHkgb2JzZXJ2ZWQuLi5cbiAgICBpZiAoa2V5ID09PSAnX19vYl9fJykgeyBjb250aW51ZSB9XG4gICAgdG9WYWwgPSB0b1trZXldO1xuICAgIGZyb21WYWwgPSBmcm9tW2tleV07XG4gICAgaWYgKCFoYXNPd24odG8sIGtleSkpIHtcbiAgICAgIHNldCh0bywga2V5LCBmcm9tVmFsKTtcbiAgICB9IGVsc2UgaWYgKFxuICAgICAgdG9WYWwgIT09IGZyb21WYWwgJiZcbiAgICAgIGlzUGxhaW5PYmplY3QodG9WYWwpICYmXG4gICAgICBpc1BsYWluT2JqZWN0KGZyb21WYWwpXG4gICAgKSB7XG4gICAgICBtZXJnZURhdGEodG9WYWwsIGZyb21WYWwpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gdG9cbn1cblxuLyoqXG4gKiBEYXRhXG4gKi9cbmZ1bmN0aW9uIG1lcmdlRGF0YU9yRm4gKFxuICBwYXJlbnRWYWwsXG4gIGNoaWxkVmFsLFxuICB2bVxuKSB7XG4gIGlmICghdm0pIHtcbiAgICAvLyBpbiBhIFZ1ZS5leHRlbmQgbWVyZ2UsIGJvdGggc2hvdWxkIGJlIGZ1bmN0aW9uc1xuICAgIGlmICghY2hpbGRWYWwpIHtcbiAgICAgIHJldHVybiBwYXJlbnRWYWxcbiAgICB9XG4gICAgaWYgKCFwYXJlbnRWYWwpIHtcbiAgICAgIHJldHVybiBjaGlsZFZhbFxuICAgIH1cbiAgICAvLyB3aGVuIHBhcmVudFZhbCAmIGNoaWxkVmFsIGFyZSBib3RoIHByZXNlbnQsXG4gICAgLy8gd2UgbmVlZCB0byByZXR1cm4gYSBmdW5jdGlvbiB0aGF0IHJldHVybnMgdGhlXG4gICAgLy8gbWVyZ2VkIHJlc3VsdCBvZiBib3RoIGZ1bmN0aW9ucy4uLiBubyBuZWVkIHRvXG4gICAgLy8gY2hlY2sgaWYgcGFyZW50VmFsIGlzIGEgZnVuY3Rpb24gaGVyZSBiZWNhdXNlXG4gICAgLy8gaXQgaGFzIHRvIGJlIGEgZnVuY3Rpb24gdG8gcGFzcyBwcmV2aW91cyBtZXJnZXMuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIG1lcmdlZERhdGFGbiAoKSB7XG4gICAgICByZXR1cm4gbWVyZ2VEYXRhKFxuICAgICAgICB0eXBlb2YgY2hpbGRWYWwgPT09ICdmdW5jdGlvbicgPyBjaGlsZFZhbC5jYWxsKHRoaXMsIHRoaXMpIDogY2hpbGRWYWwsXG4gICAgICAgIHR5cGVvZiBwYXJlbnRWYWwgPT09ICdmdW5jdGlvbicgPyBwYXJlbnRWYWwuY2FsbCh0aGlzLCB0aGlzKSA6IHBhcmVudFZhbFxuICAgICAgKVxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gbWVyZ2VkSW5zdGFuY2VEYXRhRm4gKCkge1xuICAgICAgLy8gaW5zdGFuY2UgbWVyZ2VcbiAgICAgIHZhciBpbnN0YW5jZURhdGEgPSB0eXBlb2YgY2hpbGRWYWwgPT09ICdmdW5jdGlvbidcbiAgICAgICAgPyBjaGlsZFZhbC5jYWxsKHZtLCB2bSlcbiAgICAgICAgOiBjaGlsZFZhbDtcbiAgICAgIHZhciBkZWZhdWx0RGF0YSA9IHR5cGVvZiBwYXJlbnRWYWwgPT09ICdmdW5jdGlvbidcbiAgICAgICAgPyBwYXJlbnRWYWwuY2FsbCh2bSwgdm0pXG4gICAgICAgIDogcGFyZW50VmFsO1xuICAgICAgaWYgKGluc3RhbmNlRGF0YSkge1xuICAgICAgICByZXR1cm4gbWVyZ2VEYXRhKGluc3RhbmNlRGF0YSwgZGVmYXVsdERhdGEpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gZGVmYXVsdERhdGFcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuc3RyYXRzLmRhdGEgPSBmdW5jdGlvbiAoXG4gIHBhcmVudFZhbCxcbiAgY2hpbGRWYWwsXG4gIHZtXG4pIHtcbiAgaWYgKCF2bSkge1xuICAgIGlmIChjaGlsZFZhbCAmJiB0eXBlb2YgY2hpbGRWYWwgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgd2FybihcbiAgICAgICAgJ1RoZSBcImRhdGFcIiBvcHRpb24gc2hvdWxkIGJlIGEgZnVuY3Rpb24gJyArXG4gICAgICAgICd0aGF0IHJldHVybnMgYSBwZXItaW5zdGFuY2UgdmFsdWUgaW4gY29tcG9uZW50ICcgK1xuICAgICAgICAnZGVmaW5pdGlvbnMuJyxcbiAgICAgICAgdm1cbiAgICAgICk7XG5cbiAgICAgIHJldHVybiBwYXJlbnRWYWxcbiAgICB9XG4gICAgcmV0dXJuIG1lcmdlRGF0YU9yRm4ocGFyZW50VmFsLCBjaGlsZFZhbClcbiAgfVxuXG4gIHJldHVybiBtZXJnZURhdGFPckZuKHBhcmVudFZhbCwgY2hpbGRWYWwsIHZtKVxufTtcblxuLyoqXG4gKiBIb29rcyBhbmQgcHJvcHMgYXJlIG1lcmdlZCBhcyBhcnJheXMuXG4gKi9cbmZ1bmN0aW9uIG1lcmdlSG9vayAoXG4gIHBhcmVudFZhbCxcbiAgY2hpbGRWYWxcbikge1xuICB2YXIgcmVzID0gY2hpbGRWYWxcbiAgICA/IHBhcmVudFZhbFxuICAgICAgPyBwYXJlbnRWYWwuY29uY2F0KGNoaWxkVmFsKVxuICAgICAgOiBBcnJheS5pc0FycmF5KGNoaWxkVmFsKVxuICAgICAgICA/IGNoaWxkVmFsXG4gICAgICAgIDogW2NoaWxkVmFsXVxuICAgIDogcGFyZW50VmFsO1xuICByZXR1cm4gcmVzXG4gICAgPyBkZWR1cGVIb29rcyhyZXMpXG4gICAgOiByZXNcbn1cblxuZnVuY3Rpb24gZGVkdXBlSG9va3MgKGhvb2tzKSB7XG4gIHZhciByZXMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBob29rcy5sZW5ndGg7IGkrKykge1xuICAgIGlmIChyZXMuaW5kZXhPZihob29rc1tpXSkgPT09IC0xKSB7XG4gICAgICByZXMucHVzaChob29rc1tpXSk7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXNcbn1cblxuTElGRUNZQ0xFX0hPT0tTLmZvckVhY2goZnVuY3Rpb24gKGhvb2spIHtcbiAgc3RyYXRzW2hvb2tdID0gbWVyZ2VIb29rO1xufSk7XG5cbi8qKlxuICogQXNzZXRzXG4gKlxuICogV2hlbiBhIHZtIGlzIHByZXNlbnQgKGluc3RhbmNlIGNyZWF0aW9uKSwgd2UgbmVlZCB0byBkb1xuICogYSB0aHJlZS13YXkgbWVyZ2UgYmV0d2VlbiBjb25zdHJ1Y3RvciBvcHRpb25zLCBpbnN0YW5jZVxuICogb3B0aW9ucyBhbmQgcGFyZW50IG9wdGlvbnMuXG4gKi9cbmZ1bmN0aW9uIG1lcmdlQXNzZXRzIChcbiAgcGFyZW50VmFsLFxuICBjaGlsZFZhbCxcbiAgdm0sXG4gIGtleVxuKSB7XG4gIHZhciByZXMgPSBPYmplY3QuY3JlYXRlKHBhcmVudFZhbCB8fCBudWxsKTtcbiAgaWYgKGNoaWxkVmFsKSB7XG4gICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiBhc3NlcnRPYmplY3RUeXBlKGtleSwgY2hpbGRWYWwsIHZtKTtcbiAgICByZXR1cm4gZXh0ZW5kKHJlcywgY2hpbGRWYWwpXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHJlc1xuICB9XG59XG5cbkFTU0VUX1RZUEVTLmZvckVhY2goZnVuY3Rpb24gKHR5cGUpIHtcbiAgc3RyYXRzW3R5cGUgKyAncyddID0gbWVyZ2VBc3NldHM7XG59KTtcblxuLyoqXG4gKiBXYXRjaGVycy5cbiAqXG4gKiBXYXRjaGVycyBoYXNoZXMgc2hvdWxkIG5vdCBvdmVyd3JpdGUgb25lXG4gKiBhbm90aGVyLCBzbyB3ZSBtZXJnZSB0aGVtIGFzIGFycmF5cy5cbiAqL1xuc3RyYXRzLndhdGNoID0gZnVuY3Rpb24gKFxuICBwYXJlbnRWYWwsXG4gIGNoaWxkVmFsLFxuICB2bSxcbiAga2V5XG4pIHtcbiAgLy8gd29yayBhcm91bmQgRmlyZWZveCdzIE9iamVjdC5wcm90b3R5cGUud2F0Y2guLi5cbiAgaWYgKHBhcmVudFZhbCA9PT0gbmF0aXZlV2F0Y2gpIHsgcGFyZW50VmFsID0gdW5kZWZpbmVkOyB9XG4gIGlmIChjaGlsZFZhbCA9PT0gbmF0aXZlV2F0Y2gpIHsgY2hpbGRWYWwgPSB1bmRlZmluZWQ7IH1cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gIGlmICghY2hpbGRWYWwpIHsgcmV0dXJuIE9iamVjdC5jcmVhdGUocGFyZW50VmFsIHx8IG51bGwpIH1cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBhc3NlcnRPYmplY3RUeXBlKGtleSwgY2hpbGRWYWwsIHZtKTtcbiAgfVxuICBpZiAoIXBhcmVudFZhbCkgeyByZXR1cm4gY2hpbGRWYWwgfVxuICB2YXIgcmV0ID0ge307XG4gIGV4dGVuZChyZXQsIHBhcmVudFZhbCk7XG4gIGZvciAodmFyIGtleSQxIGluIGNoaWxkVmFsKSB7XG4gICAgdmFyIHBhcmVudCA9IHJldFtrZXkkMV07XG4gICAgdmFyIGNoaWxkID0gY2hpbGRWYWxba2V5JDFdO1xuICAgIGlmIChwYXJlbnQgJiYgIUFycmF5LmlzQXJyYXkocGFyZW50KSkge1xuICAgICAgcGFyZW50ID0gW3BhcmVudF07XG4gICAgfVxuICAgIHJldFtrZXkkMV0gPSBwYXJlbnRcbiAgICAgID8gcGFyZW50LmNvbmNhdChjaGlsZClcbiAgICAgIDogQXJyYXkuaXNBcnJheShjaGlsZCkgPyBjaGlsZCA6IFtjaGlsZF07XG4gIH1cbiAgcmV0dXJuIHJldFxufTtcblxuLyoqXG4gKiBPdGhlciBvYmplY3QgaGFzaGVzLlxuICovXG5zdHJhdHMucHJvcHMgPVxuc3RyYXRzLm1ldGhvZHMgPVxuc3RyYXRzLmluamVjdCA9XG5zdHJhdHMuY29tcHV0ZWQgPSBmdW5jdGlvbiAoXG4gIHBhcmVudFZhbCxcbiAgY2hpbGRWYWwsXG4gIHZtLFxuICBrZXlcbikge1xuICBpZiAoY2hpbGRWYWwgJiYgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGFzc2VydE9iamVjdFR5cGUoa2V5LCBjaGlsZFZhbCwgdm0pO1xuICB9XG4gIGlmICghcGFyZW50VmFsKSB7IHJldHVybiBjaGlsZFZhbCB9XG4gIHZhciByZXQgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICBleHRlbmQocmV0LCBwYXJlbnRWYWwpO1xuICBpZiAoY2hpbGRWYWwpIHsgZXh0ZW5kKHJldCwgY2hpbGRWYWwpOyB9XG4gIHJldHVybiByZXRcbn07XG5zdHJhdHMucHJvdmlkZSA9IG1lcmdlRGF0YU9yRm47XG5cbi8qKlxuICogRGVmYXVsdCBzdHJhdGVneS5cbiAqL1xudmFyIGRlZmF1bHRTdHJhdCA9IGZ1bmN0aW9uIChwYXJlbnRWYWwsIGNoaWxkVmFsKSB7XG4gIHJldHVybiBjaGlsZFZhbCA9PT0gdW5kZWZpbmVkXG4gICAgPyBwYXJlbnRWYWxcbiAgICA6IGNoaWxkVmFsXG59O1xuXG4vKipcbiAqIFZhbGlkYXRlIGNvbXBvbmVudCBuYW1lc1xuICovXG5mdW5jdGlvbiBjaGVja0NvbXBvbmVudHMgKG9wdGlvbnMpIHtcbiAgZm9yICh2YXIga2V5IGluIG9wdGlvbnMuY29tcG9uZW50cykge1xuICAgIHZhbGlkYXRlQ29tcG9uZW50TmFtZShrZXkpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHZhbGlkYXRlQ29tcG9uZW50TmFtZSAobmFtZSkge1xuICBpZiAoIW5ldyBSZWdFeHAoKFwiXlthLXpBLVpdW1xcXFwtXFxcXC4wLTlfXCIgKyAodW5pY29kZVJlZ0V4cC5zb3VyY2UpICsgXCJdKiRcIikpLnRlc3QobmFtZSkpIHtcbiAgICB3YXJuKFxuICAgICAgJ0ludmFsaWQgY29tcG9uZW50IG5hbWU6IFwiJyArIG5hbWUgKyAnXCIuIENvbXBvbmVudCBuYW1lcyAnICtcbiAgICAgICdzaG91bGQgY29uZm9ybSB0byB2YWxpZCBjdXN0b20gZWxlbWVudCBuYW1lIGluIGh0bWw1IHNwZWNpZmljYXRpb24uJ1xuICAgICk7XG4gIH1cbiAgaWYgKGlzQnVpbHRJblRhZyhuYW1lKSB8fCBjb25maWcuaXNSZXNlcnZlZFRhZyhuYW1lKSkge1xuICAgIHdhcm4oXG4gICAgICAnRG8gbm90IHVzZSBidWlsdC1pbiBvciByZXNlcnZlZCBIVE1MIGVsZW1lbnRzIGFzIGNvbXBvbmVudCAnICtcbiAgICAgICdpZDogJyArIG5hbWVcbiAgICApO1xuICB9XG59XG5cbi8qKlxuICogRW5zdXJlIGFsbCBwcm9wcyBvcHRpb24gc3ludGF4IGFyZSBub3JtYWxpemVkIGludG8gdGhlXG4gKiBPYmplY3QtYmFzZWQgZm9ybWF0LlxuICovXG5mdW5jdGlvbiBub3JtYWxpemVQcm9wcyAob3B0aW9ucywgdm0pIHtcbiAgdmFyIHByb3BzID0gb3B0aW9ucy5wcm9wcztcbiAgaWYgKCFwcm9wcykgeyByZXR1cm4gfVxuICB2YXIgcmVzID0ge307XG4gIHZhciBpLCB2YWwsIG5hbWU7XG4gIGlmIChBcnJheS5pc0FycmF5KHByb3BzKSkge1xuICAgIGkgPSBwcm9wcy5sZW5ndGg7XG4gICAgd2hpbGUgKGktLSkge1xuICAgICAgdmFsID0gcHJvcHNbaV07XG4gICAgICBpZiAodHlwZW9mIHZhbCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgbmFtZSA9IGNhbWVsaXplKHZhbCk7XG4gICAgICAgIHJlc1tuYW1lXSA9IHsgdHlwZTogbnVsbCB9O1xuICAgICAgfSBlbHNlIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIHdhcm4oJ3Byb3BzIG11c3QgYmUgc3RyaW5ncyB3aGVuIHVzaW5nIGFycmF5IHN5bnRheC4nKTtcbiAgICAgIH1cbiAgICB9XG4gIH0gZWxzZSBpZiAoaXNQbGFpbk9iamVjdChwcm9wcykpIHtcbiAgICBmb3IgKHZhciBrZXkgaW4gcHJvcHMpIHtcbiAgICAgIHZhbCA9IHByb3BzW2tleV07XG4gICAgICBuYW1lID0gY2FtZWxpemUoa2V5KTtcbiAgICAgIHJlc1tuYW1lXSA9IGlzUGxhaW5PYmplY3QodmFsKVxuICAgICAgICA/IHZhbFxuICAgICAgICA6IHsgdHlwZTogdmFsIH07XG4gICAgfVxuICB9IGVsc2UgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICB3YXJuKFxuICAgICAgXCJJbnZhbGlkIHZhbHVlIGZvciBvcHRpb24gXFxcInByb3BzXFxcIjogZXhwZWN0ZWQgYW4gQXJyYXkgb3IgYW4gT2JqZWN0LCBcIiArXG4gICAgICBcImJ1dCBnb3QgXCIgKyAodG9SYXdUeXBlKHByb3BzKSkgKyBcIi5cIixcbiAgICAgIHZtXG4gICAgKTtcbiAgfVxuICBvcHRpb25zLnByb3BzID0gcmVzO1xufVxuXG4vKipcbiAqIE5vcm1hbGl6ZSBhbGwgaW5qZWN0aW9ucyBpbnRvIE9iamVjdC1iYXNlZCBmb3JtYXRcbiAqL1xuZnVuY3Rpb24gbm9ybWFsaXplSW5qZWN0IChvcHRpb25zLCB2bSkge1xuICB2YXIgaW5qZWN0ID0gb3B0aW9ucy5pbmplY3Q7XG4gIGlmICghaW5qZWN0KSB7IHJldHVybiB9XG4gIHZhciBub3JtYWxpemVkID0gb3B0aW9ucy5pbmplY3QgPSB7fTtcbiAgaWYgKEFycmF5LmlzQXJyYXkoaW5qZWN0KSkge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgaW5qZWN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICBub3JtYWxpemVkW2luamVjdFtpXV0gPSB7IGZyb206IGluamVjdFtpXSB9O1xuICAgIH1cbiAgfSBlbHNlIGlmIChpc1BsYWluT2JqZWN0KGluamVjdCkpIHtcbiAgICBmb3IgKHZhciBrZXkgaW4gaW5qZWN0KSB7XG4gICAgICB2YXIgdmFsID0gaW5qZWN0W2tleV07XG4gICAgICBub3JtYWxpemVkW2tleV0gPSBpc1BsYWluT2JqZWN0KHZhbClcbiAgICAgICAgPyBleHRlbmQoeyBmcm9tOiBrZXkgfSwgdmFsKVxuICAgICAgICA6IHsgZnJvbTogdmFsIH07XG4gICAgfVxuICB9IGVsc2UgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICB3YXJuKFxuICAgICAgXCJJbnZhbGlkIHZhbHVlIGZvciBvcHRpb24gXFxcImluamVjdFxcXCI6IGV4cGVjdGVkIGFuIEFycmF5IG9yIGFuIE9iamVjdCwgXCIgK1xuICAgICAgXCJidXQgZ290IFwiICsgKHRvUmF3VHlwZShpbmplY3QpKSArIFwiLlwiLFxuICAgICAgdm1cbiAgICApO1xuICB9XG59XG5cbi8qKlxuICogTm9ybWFsaXplIHJhdyBmdW5jdGlvbiBkaXJlY3RpdmVzIGludG8gb2JqZWN0IGZvcm1hdC5cbiAqL1xuZnVuY3Rpb24gbm9ybWFsaXplRGlyZWN0aXZlcyAob3B0aW9ucykge1xuICB2YXIgZGlycyA9IG9wdGlvbnMuZGlyZWN0aXZlcztcbiAgaWYgKGRpcnMpIHtcbiAgICBmb3IgKHZhciBrZXkgaW4gZGlycykge1xuICAgICAgdmFyIGRlZiQkMSA9IGRpcnNba2V5XTtcbiAgICAgIGlmICh0eXBlb2YgZGVmJCQxID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGRpcnNba2V5XSA9IHsgYmluZDogZGVmJCQxLCB1cGRhdGU6IGRlZiQkMSB9O1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBhc3NlcnRPYmplY3RUeXBlIChuYW1lLCB2YWx1ZSwgdm0pIHtcbiAgaWYgKCFpc1BsYWluT2JqZWN0KHZhbHVlKSkge1xuICAgIHdhcm4oXG4gICAgICBcIkludmFsaWQgdmFsdWUgZm9yIG9wdGlvbiBcXFwiXCIgKyBuYW1lICsgXCJcXFwiOiBleHBlY3RlZCBhbiBPYmplY3QsIFwiICtcbiAgICAgIFwiYnV0IGdvdCBcIiArICh0b1Jhd1R5cGUodmFsdWUpKSArIFwiLlwiLFxuICAgICAgdm1cbiAgICApO1xuICB9XG59XG5cbi8qKlxuICogTWVyZ2UgdHdvIG9wdGlvbiBvYmplY3RzIGludG8gYSBuZXcgb25lLlxuICogQ29yZSB1dGlsaXR5IHVzZWQgaW4gYm90aCBpbnN0YW50aWF0aW9uIGFuZCBpbmhlcml0YW5jZS5cbiAqL1xuZnVuY3Rpb24gbWVyZ2VPcHRpb25zIChcbiAgcGFyZW50LFxuICBjaGlsZCxcbiAgdm1cbikge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGNoZWNrQ29tcG9uZW50cyhjaGlsZCk7XG4gIH1cblxuICBpZiAodHlwZW9mIGNoaWxkID09PSAnZnVuY3Rpb24nKSB7XG4gICAgY2hpbGQgPSBjaGlsZC5vcHRpb25zO1xuICB9XG5cbiAgbm9ybWFsaXplUHJvcHMoY2hpbGQsIHZtKTtcbiAgbm9ybWFsaXplSW5qZWN0KGNoaWxkLCB2bSk7XG4gIG5vcm1hbGl6ZURpcmVjdGl2ZXMoY2hpbGQpO1xuXG4gIC8vIEFwcGx5IGV4dGVuZHMgYW5kIG1peGlucyBvbiB0aGUgY2hpbGQgb3B0aW9ucyxcbiAgLy8gYnV0IG9ubHkgaWYgaXQgaXMgYSByYXcgb3B0aW9ucyBvYmplY3QgdGhhdCBpc24ndFxuICAvLyB0aGUgcmVzdWx0IG9mIGFub3RoZXIgbWVyZ2VPcHRpb25zIGNhbGwuXG4gIC8vIE9ubHkgbWVyZ2VkIG9wdGlvbnMgaGFzIHRoZSBfYmFzZSBwcm9wZXJ0eS5cbiAgaWYgKCFjaGlsZC5fYmFzZSkge1xuICAgIGlmIChjaGlsZC5leHRlbmRzKSB7XG4gICAgICBwYXJlbnQgPSBtZXJnZU9wdGlvbnMocGFyZW50LCBjaGlsZC5leHRlbmRzLCB2bSk7XG4gICAgfVxuICAgIGlmIChjaGlsZC5taXhpbnMpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwLCBsID0gY2hpbGQubWl4aW5zLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICBwYXJlbnQgPSBtZXJnZU9wdGlvbnMocGFyZW50LCBjaGlsZC5taXhpbnNbaV0sIHZtKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICB2YXIgb3B0aW9ucyA9IHt9O1xuICB2YXIga2V5O1xuICBmb3IgKGtleSBpbiBwYXJlbnQpIHtcbiAgICBtZXJnZUZpZWxkKGtleSk7XG4gIH1cbiAgZm9yIChrZXkgaW4gY2hpbGQpIHtcbiAgICBpZiAoIWhhc093bihwYXJlbnQsIGtleSkpIHtcbiAgICAgIG1lcmdlRmllbGQoa2V5KTtcbiAgICB9XG4gIH1cbiAgZnVuY3Rpb24gbWVyZ2VGaWVsZCAoa2V5KSB7XG4gICAgdmFyIHN0cmF0ID0gc3RyYXRzW2tleV0gfHwgZGVmYXVsdFN0cmF0O1xuICAgIG9wdGlvbnNba2V5XSA9IHN0cmF0KHBhcmVudFtrZXldLCBjaGlsZFtrZXldLCB2bSwga2V5KTtcbiAgfVxuICByZXR1cm4gb3B0aW9uc1xufVxuXG4vKipcbiAqIFJlc29sdmUgYW4gYXNzZXQuXG4gKiBUaGlzIGZ1bmN0aW9uIGlzIHVzZWQgYmVjYXVzZSBjaGlsZCBpbnN0YW5jZXMgbmVlZCBhY2Nlc3NcbiAqIHRvIGFzc2V0cyBkZWZpbmVkIGluIGl0cyBhbmNlc3RvciBjaGFpbi5cbiAqL1xuZnVuY3Rpb24gcmVzb2x2ZUFzc2V0IChcbiAgb3B0aW9ucyxcbiAgdHlwZSxcbiAgaWQsXG4gIHdhcm5NaXNzaW5nXG4pIHtcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gIGlmICh0eXBlb2YgaWQgIT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuXG4gIH1cbiAgdmFyIGFzc2V0cyA9IG9wdGlvbnNbdHlwZV07XG4gIC8vIGNoZWNrIGxvY2FsIHJlZ2lzdHJhdGlvbiB2YXJpYXRpb25zIGZpcnN0XG4gIGlmIChoYXNPd24oYXNzZXRzLCBpZCkpIHsgcmV0dXJuIGFzc2V0c1tpZF0gfVxuICB2YXIgY2FtZWxpemVkSWQgPSBjYW1lbGl6ZShpZCk7XG4gIGlmIChoYXNPd24oYXNzZXRzLCBjYW1lbGl6ZWRJZCkpIHsgcmV0dXJuIGFzc2V0c1tjYW1lbGl6ZWRJZF0gfVxuICB2YXIgUGFzY2FsQ2FzZUlkID0gY2FwaXRhbGl6ZShjYW1lbGl6ZWRJZCk7XG4gIGlmIChoYXNPd24oYXNzZXRzLCBQYXNjYWxDYXNlSWQpKSB7IHJldHVybiBhc3NldHNbUGFzY2FsQ2FzZUlkXSB9XG4gIC8vIGZhbGxiYWNrIHRvIHByb3RvdHlwZSBjaGFpblxuICB2YXIgcmVzID0gYXNzZXRzW2lkXSB8fCBhc3NldHNbY2FtZWxpemVkSWRdIHx8IGFzc2V0c1tQYXNjYWxDYXNlSWRdO1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiB3YXJuTWlzc2luZyAmJiAhcmVzKSB7XG4gICAgd2FybihcbiAgICAgICdGYWlsZWQgdG8gcmVzb2x2ZSAnICsgdHlwZS5zbGljZSgwLCAtMSkgKyAnOiAnICsgaWQsXG4gICAgICBvcHRpb25zXG4gICAgKTtcbiAgfVxuICByZXR1cm4gcmVzXG59XG5cbi8qICAqL1xuXG5cblxuZnVuY3Rpb24gdmFsaWRhdGVQcm9wIChcbiAga2V5LFxuICBwcm9wT3B0aW9ucyxcbiAgcHJvcHNEYXRhLFxuICB2bVxuKSB7XG4gIHZhciBwcm9wID0gcHJvcE9wdGlvbnNba2V5XTtcbiAgdmFyIGFic2VudCA9ICFoYXNPd24ocHJvcHNEYXRhLCBrZXkpO1xuICB2YXIgdmFsdWUgPSBwcm9wc0RhdGFba2V5XTtcbiAgLy8gYm9vbGVhbiBjYXN0aW5nXG4gIHZhciBib29sZWFuSW5kZXggPSBnZXRUeXBlSW5kZXgoQm9vbGVhbiwgcHJvcC50eXBlKTtcbiAgaWYgKGJvb2xlYW5JbmRleCA+IC0xKSB7XG4gICAgaWYgKGFic2VudCAmJiAhaGFzT3duKHByb3AsICdkZWZhdWx0JykpIHtcbiAgICAgIHZhbHVlID0gZmFsc2U7XG4gICAgfSBlbHNlIGlmICh2YWx1ZSA9PT0gJycgfHwgdmFsdWUgPT09IGh5cGhlbmF0ZShrZXkpKSB7XG4gICAgICAvLyBvbmx5IGNhc3QgZW1wdHkgc3RyaW5nIC8gc2FtZSBuYW1lIHRvIGJvb2xlYW4gaWZcbiAgICAgIC8vIGJvb2xlYW4gaGFzIGhpZ2hlciBwcmlvcml0eVxuICAgICAgdmFyIHN0cmluZ0luZGV4ID0gZ2V0VHlwZUluZGV4KFN0cmluZywgcHJvcC50eXBlKTtcbiAgICAgIGlmIChzdHJpbmdJbmRleCA8IDAgfHwgYm9vbGVhbkluZGV4IDwgc3RyaW5nSW5kZXgpIHtcbiAgICAgICAgdmFsdWUgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICAvLyBjaGVjayBkZWZhdWx0IHZhbHVlXG4gIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgdmFsdWUgPSBnZXRQcm9wRGVmYXVsdFZhbHVlKHZtLCBwcm9wLCBrZXkpO1xuICAgIC8vIHNpbmNlIHRoZSBkZWZhdWx0IHZhbHVlIGlzIGEgZnJlc2ggY29weSxcbiAgICAvLyBtYWtlIHN1cmUgdG8gb2JzZXJ2ZSBpdC5cbiAgICB2YXIgcHJldlNob3VsZE9ic2VydmUgPSBzaG91bGRPYnNlcnZlO1xuICAgIHRvZ2dsZU9ic2VydmluZyh0cnVlKTtcbiAgICBvYnNlcnZlKHZhbHVlKTtcbiAgICB0b2dnbGVPYnNlcnZpbmcocHJldlNob3VsZE9ic2VydmUpO1xuICB9XG4gIGlmIChcbiAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmXG4gICAgLy8gc2tpcCB2YWxpZGF0aW9uIGZvciB3ZWV4IHJlY3ljbGUtbGlzdCBjaGlsZCBjb21wb25lbnQgcHJvcHNcbiAgICAhKGZhbHNlKVxuICApIHtcbiAgICBhc3NlcnRQcm9wKHByb3AsIGtleSwgdmFsdWUsIHZtLCBhYnNlbnQpO1xuICB9XG4gIHJldHVybiB2YWx1ZVxufVxuXG4vKipcbiAqIEdldCB0aGUgZGVmYXVsdCB2YWx1ZSBvZiBhIHByb3AuXG4gKi9cbmZ1bmN0aW9uIGdldFByb3BEZWZhdWx0VmFsdWUgKHZtLCBwcm9wLCBrZXkpIHtcbiAgLy8gbm8gZGVmYXVsdCwgcmV0dXJuIHVuZGVmaW5lZFxuICBpZiAoIWhhc093bihwcm9wLCAnZGVmYXVsdCcpKSB7XG4gICAgcmV0dXJuIHVuZGVmaW5lZFxuICB9XG4gIHZhciBkZWYgPSBwcm9wLmRlZmF1bHQ7XG4gIC8vIHdhcm4gYWdhaW5zdCBub24tZmFjdG9yeSBkZWZhdWx0cyBmb3IgT2JqZWN0ICYgQXJyYXlcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgaXNPYmplY3QoZGVmKSkge1xuICAgIHdhcm4oXG4gICAgICAnSW52YWxpZCBkZWZhdWx0IHZhbHVlIGZvciBwcm9wIFwiJyArIGtleSArICdcIjogJyArXG4gICAgICAnUHJvcHMgd2l0aCB0eXBlIE9iamVjdC9BcnJheSBtdXN0IHVzZSBhIGZhY3RvcnkgZnVuY3Rpb24gJyArXG4gICAgICAndG8gcmV0dXJuIHRoZSBkZWZhdWx0IHZhbHVlLicsXG4gICAgICB2bVxuICAgICk7XG4gIH1cbiAgLy8gdGhlIHJhdyBwcm9wIHZhbHVlIHdhcyBhbHNvIHVuZGVmaW5lZCBmcm9tIHByZXZpb3VzIHJlbmRlcixcbiAgLy8gcmV0dXJuIHByZXZpb3VzIGRlZmF1bHQgdmFsdWUgdG8gYXZvaWQgdW5uZWNlc3Nhcnkgd2F0Y2hlciB0cmlnZ2VyXG4gIGlmICh2bSAmJiB2bS4kb3B0aW9ucy5wcm9wc0RhdGEgJiZcbiAgICB2bS4kb3B0aW9ucy5wcm9wc0RhdGFba2V5XSA9PT0gdW5kZWZpbmVkICYmXG4gICAgdm0uX3Byb3BzW2tleV0gIT09IHVuZGVmaW5lZFxuICApIHtcbiAgICByZXR1cm4gdm0uX3Byb3BzW2tleV1cbiAgfVxuICAvLyBjYWxsIGZhY3RvcnkgZnVuY3Rpb24gZm9yIG5vbi1GdW5jdGlvbiB0eXBlc1xuICAvLyBhIHZhbHVlIGlzIEZ1bmN0aW9uIGlmIGl0cyBwcm90b3R5cGUgaXMgZnVuY3Rpb24gZXZlbiBhY3Jvc3MgZGlmZmVyZW50IGV4ZWN1dGlvbiBjb250ZXh0XG4gIHJldHVybiB0eXBlb2YgZGVmID09PSAnZnVuY3Rpb24nICYmIGdldFR5cGUocHJvcC50eXBlKSAhPT0gJ0Z1bmN0aW9uJ1xuICAgID8gZGVmLmNhbGwodm0pXG4gICAgOiBkZWZcbn1cblxuLyoqXG4gKiBBc3NlcnQgd2hldGhlciBhIHByb3AgaXMgdmFsaWQuXG4gKi9cbmZ1bmN0aW9uIGFzc2VydFByb3AgKFxuICBwcm9wLFxuICBuYW1lLFxuICB2YWx1ZSxcbiAgdm0sXG4gIGFic2VudFxuKSB7XG4gIGlmIChwcm9wLnJlcXVpcmVkICYmIGFic2VudCkge1xuICAgIHdhcm4oXG4gICAgICAnTWlzc2luZyByZXF1aXJlZCBwcm9wOiBcIicgKyBuYW1lICsgJ1wiJyxcbiAgICAgIHZtXG4gICAgKTtcbiAgICByZXR1cm5cbiAgfVxuICBpZiAodmFsdWUgPT0gbnVsbCAmJiAhcHJvcC5yZXF1aXJlZCkge1xuICAgIHJldHVyblxuICB9XG4gIHZhciB0eXBlID0gcHJvcC50eXBlO1xuICB2YXIgdmFsaWQgPSAhdHlwZSB8fCB0eXBlID09PSB0cnVlO1xuICB2YXIgZXhwZWN0ZWRUeXBlcyA9IFtdO1xuICBpZiAodHlwZSkge1xuICAgIGlmICghQXJyYXkuaXNBcnJheSh0eXBlKSkge1xuICAgICAgdHlwZSA9IFt0eXBlXTtcbiAgICB9XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0eXBlLmxlbmd0aCAmJiAhdmFsaWQ7IGkrKykge1xuICAgICAgdmFyIGFzc2VydGVkVHlwZSA9IGFzc2VydFR5cGUodmFsdWUsIHR5cGVbaV0pO1xuICAgICAgZXhwZWN0ZWRUeXBlcy5wdXNoKGFzc2VydGVkVHlwZS5leHBlY3RlZFR5cGUgfHwgJycpO1xuICAgICAgdmFsaWQgPSBhc3NlcnRlZFR5cGUudmFsaWQ7XG4gICAgfVxuICB9XG5cbiAgaWYgKCF2YWxpZCkge1xuICAgIHdhcm4oXG4gICAgICBnZXRJbnZhbGlkVHlwZU1lc3NhZ2UobmFtZSwgdmFsdWUsIGV4cGVjdGVkVHlwZXMpLFxuICAgICAgdm1cbiAgICApO1xuICAgIHJldHVyblxuICB9XG4gIHZhciB2YWxpZGF0b3IgPSBwcm9wLnZhbGlkYXRvcjtcbiAgaWYgKHZhbGlkYXRvcikge1xuICAgIGlmICghdmFsaWRhdG9yKHZhbHVlKSkge1xuICAgICAgd2FybihcbiAgICAgICAgJ0ludmFsaWQgcHJvcDogY3VzdG9tIHZhbGlkYXRvciBjaGVjayBmYWlsZWQgZm9yIHByb3AgXCInICsgbmFtZSArICdcIi4nLFxuICAgICAgICB2bVxuICAgICAgKTtcbiAgICB9XG4gIH1cbn1cblxudmFyIHNpbXBsZUNoZWNrUkUgPSAvXihTdHJpbmd8TnVtYmVyfEJvb2xlYW58RnVuY3Rpb258U3ltYm9sKSQvO1xuXG5mdW5jdGlvbiBhc3NlcnRUeXBlICh2YWx1ZSwgdHlwZSkge1xuICB2YXIgdmFsaWQ7XG4gIHZhciBleHBlY3RlZFR5cGUgPSBnZXRUeXBlKHR5cGUpO1xuICBpZiAoc2ltcGxlQ2hlY2tSRS50ZXN0KGV4cGVjdGVkVHlwZSkpIHtcbiAgICB2YXIgdCA9IHR5cGVvZiB2YWx1ZTtcbiAgICB2YWxpZCA9IHQgPT09IGV4cGVjdGVkVHlwZS50b0xvd2VyQ2FzZSgpO1xuICAgIC8vIGZvciBwcmltaXRpdmUgd3JhcHBlciBvYmplY3RzXG4gICAgaWYgKCF2YWxpZCAmJiB0ID09PSAnb2JqZWN0Jykge1xuICAgICAgdmFsaWQgPSB2YWx1ZSBpbnN0YW5jZW9mIHR5cGU7XG4gICAgfVxuICB9IGVsc2UgaWYgKGV4cGVjdGVkVHlwZSA9PT0gJ09iamVjdCcpIHtcbiAgICB2YWxpZCA9IGlzUGxhaW5PYmplY3QodmFsdWUpO1xuICB9IGVsc2UgaWYgKGV4cGVjdGVkVHlwZSA9PT0gJ0FycmF5Jykge1xuICAgIHZhbGlkID0gQXJyYXkuaXNBcnJheSh2YWx1ZSk7XG4gIH0gZWxzZSB7XG4gICAgdmFsaWQgPSB2YWx1ZSBpbnN0YW5jZW9mIHR5cGU7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICB2YWxpZDogdmFsaWQsXG4gICAgZXhwZWN0ZWRUeXBlOiBleHBlY3RlZFR5cGVcbiAgfVxufVxuXG4vKipcbiAqIFVzZSBmdW5jdGlvbiBzdHJpbmcgbmFtZSB0byBjaGVjayBidWlsdC1pbiB0eXBlcyxcbiAqIGJlY2F1c2UgYSBzaW1wbGUgZXF1YWxpdHkgY2hlY2sgd2lsbCBmYWlsIHdoZW4gcnVubmluZ1xuICogYWNyb3NzIGRpZmZlcmVudCB2bXMgLyBpZnJhbWVzLlxuICovXG5mdW5jdGlvbiBnZXRUeXBlIChmbikge1xuICB2YXIgbWF0Y2ggPSBmbiAmJiBmbi50b1N0cmluZygpLm1hdGNoKC9eXFxzKmZ1bmN0aW9uIChcXHcrKS8pO1xuICByZXR1cm4gbWF0Y2ggPyBtYXRjaFsxXSA6ICcnXG59XG5cbmZ1bmN0aW9uIGlzU2FtZVR5cGUgKGEsIGIpIHtcbiAgcmV0dXJuIGdldFR5cGUoYSkgPT09IGdldFR5cGUoYilcbn1cblxuZnVuY3Rpb24gZ2V0VHlwZUluZGV4ICh0eXBlLCBleHBlY3RlZFR5cGVzKSB7XG4gIGlmICghQXJyYXkuaXNBcnJheShleHBlY3RlZFR5cGVzKSkge1xuICAgIHJldHVybiBpc1NhbWVUeXBlKGV4cGVjdGVkVHlwZXMsIHR5cGUpID8gMCA6IC0xXG4gIH1cbiAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IGV4cGVjdGVkVHlwZXMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICBpZiAoaXNTYW1lVHlwZShleHBlY3RlZFR5cGVzW2ldLCB0eXBlKSkge1xuICAgICAgcmV0dXJuIGlcbiAgICB9XG4gIH1cbiAgcmV0dXJuIC0xXG59XG5cbmZ1bmN0aW9uIGdldEludmFsaWRUeXBlTWVzc2FnZSAobmFtZSwgdmFsdWUsIGV4cGVjdGVkVHlwZXMpIHtcbiAgdmFyIG1lc3NhZ2UgPSBcIkludmFsaWQgcHJvcDogdHlwZSBjaGVjayBmYWlsZWQgZm9yIHByb3AgXFxcIlwiICsgbmFtZSArIFwiXFxcIi5cIiArXG4gICAgXCIgRXhwZWN0ZWQgXCIgKyAoZXhwZWN0ZWRUeXBlcy5tYXAoY2FwaXRhbGl6ZSkuam9pbignLCAnKSk7XG4gIHZhciBleHBlY3RlZFR5cGUgPSBleHBlY3RlZFR5cGVzWzBdO1xuICB2YXIgcmVjZWl2ZWRUeXBlID0gdG9SYXdUeXBlKHZhbHVlKTtcbiAgdmFyIGV4cGVjdGVkVmFsdWUgPSBzdHlsZVZhbHVlKHZhbHVlLCBleHBlY3RlZFR5cGUpO1xuICB2YXIgcmVjZWl2ZWRWYWx1ZSA9IHN0eWxlVmFsdWUodmFsdWUsIHJlY2VpdmVkVHlwZSk7XG4gIC8vIGNoZWNrIGlmIHdlIG5lZWQgdG8gc3BlY2lmeSBleHBlY3RlZCB2YWx1ZVxuICBpZiAoZXhwZWN0ZWRUeXBlcy5sZW5ndGggPT09IDEgJiZcbiAgICAgIGlzRXhwbGljYWJsZShleHBlY3RlZFR5cGUpICYmXG4gICAgICAhaXNCb29sZWFuKGV4cGVjdGVkVHlwZSwgcmVjZWl2ZWRUeXBlKSkge1xuICAgIG1lc3NhZ2UgKz0gXCIgd2l0aCB2YWx1ZSBcIiArIGV4cGVjdGVkVmFsdWU7XG4gIH1cbiAgbWVzc2FnZSArPSBcIiwgZ290IFwiICsgcmVjZWl2ZWRUeXBlICsgXCIgXCI7XG4gIC8vIGNoZWNrIGlmIHdlIG5lZWQgdG8gc3BlY2lmeSByZWNlaXZlZCB2YWx1ZVxuICBpZiAoaXNFeHBsaWNhYmxlKHJlY2VpdmVkVHlwZSkpIHtcbiAgICBtZXNzYWdlICs9IFwid2l0aCB2YWx1ZSBcIiArIHJlY2VpdmVkVmFsdWUgKyBcIi5cIjtcbiAgfVxuICByZXR1cm4gbWVzc2FnZVxufVxuXG5mdW5jdGlvbiBzdHlsZVZhbHVlICh2YWx1ZSwgdHlwZSkge1xuICBpZiAodHlwZSA9PT0gJ1N0cmluZycpIHtcbiAgICByZXR1cm4gKFwiXFxcIlwiICsgdmFsdWUgKyBcIlxcXCJcIilcbiAgfSBlbHNlIGlmICh0eXBlID09PSAnTnVtYmVyJykge1xuICAgIHJldHVybiAoXCJcIiArIChOdW1iZXIodmFsdWUpKSlcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gKFwiXCIgKyB2YWx1ZSlcbiAgfVxufVxuXG5mdW5jdGlvbiBpc0V4cGxpY2FibGUgKHZhbHVlKSB7XG4gIHZhciBleHBsaWNpdFR5cGVzID0gWydzdHJpbmcnLCAnbnVtYmVyJywgJ2Jvb2xlYW4nXTtcbiAgcmV0dXJuIGV4cGxpY2l0VHlwZXMuc29tZShmdW5jdGlvbiAoZWxlbSkgeyByZXR1cm4gdmFsdWUudG9Mb3dlckNhc2UoKSA9PT0gZWxlbTsgfSlcbn1cblxuZnVuY3Rpb24gaXNCb29sZWFuICgpIHtcbiAgdmFyIGFyZ3MgPSBbXSwgbGVuID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgd2hpbGUgKCBsZW4tLSApIGFyZ3NbIGxlbiBdID0gYXJndW1lbnRzWyBsZW4gXTtcblxuICByZXR1cm4gYXJncy5zb21lKGZ1bmN0aW9uIChlbGVtKSB7IHJldHVybiBlbGVtLnRvTG93ZXJDYXNlKCkgPT09ICdib29sZWFuJzsgfSlcbn1cblxuLyogICovXG5cbmZ1bmN0aW9uIGhhbmRsZUVycm9yIChlcnIsIHZtLCBpbmZvKSB7XG4gIC8vIERlYWN0aXZhdGUgZGVwcyB0cmFja2luZyB3aGlsZSBwcm9jZXNzaW5nIGVycm9yIGhhbmRsZXIgdG8gYXZvaWQgcG9zc2libGUgaW5maW5pdGUgcmVuZGVyaW5nLlxuICAvLyBTZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS92dWVqcy92dWV4L2lzc3Vlcy8xNTA1XG4gIHB1c2hUYXJnZXQoKTtcbiAgdHJ5IHtcbiAgICBpZiAodm0pIHtcbiAgICAgIHZhciBjdXIgPSB2bTtcbiAgICAgIHdoaWxlICgoY3VyID0gY3VyLiRwYXJlbnQpKSB7XG4gICAgICAgIHZhciBob29rcyA9IGN1ci4kb3B0aW9ucy5lcnJvckNhcHR1cmVkO1xuICAgICAgICBpZiAoaG9va3MpIHtcbiAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGhvb2tzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICB2YXIgY2FwdHVyZSA9IGhvb2tzW2ldLmNhbGwoY3VyLCBlcnIsIHZtLCBpbmZvKSA9PT0gZmFsc2U7XG4gICAgICAgICAgICAgIGlmIChjYXB0dXJlKSB7IHJldHVybiB9XG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgIGdsb2JhbEhhbmRsZUVycm9yKGUsIGN1ciwgJ2Vycm9yQ2FwdHVyZWQgaG9vaycpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBnbG9iYWxIYW5kbGVFcnJvcihlcnIsIHZtLCBpbmZvKTtcbiAgfSBmaW5hbGx5IHtcbiAgICBwb3BUYXJnZXQoKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBpbnZva2VXaXRoRXJyb3JIYW5kbGluZyAoXG4gIGhhbmRsZXIsXG4gIGNvbnRleHQsXG4gIGFyZ3MsXG4gIHZtLFxuICBpbmZvXG4pIHtcbiAgdmFyIHJlcztcbiAgdHJ5IHtcbiAgICByZXMgPSBhcmdzID8gaGFuZGxlci5hcHBseShjb250ZXh0LCBhcmdzKSA6IGhhbmRsZXIuY2FsbChjb250ZXh0KTtcbiAgICBpZiAocmVzICYmICFyZXMuX2lzVnVlICYmIGlzUHJvbWlzZShyZXMpICYmICFyZXMuX2hhbmRsZWQpIHtcbiAgICAgIHJlcy5jYXRjaChmdW5jdGlvbiAoZSkgeyByZXR1cm4gaGFuZGxlRXJyb3IoZSwgdm0sIGluZm8gKyBcIiAoUHJvbWlzZS9hc3luYylcIik7IH0pO1xuICAgICAgLy8gaXNzdWUgIzk1MTFcbiAgICAgIC8vIGF2b2lkIGNhdGNoIHRyaWdnZXJpbmcgbXVsdGlwbGUgdGltZXMgd2hlbiBuZXN0ZWQgY2FsbHNcbiAgICAgIHJlcy5faGFuZGxlZCA9IHRydWU7XG4gICAgfVxuICB9IGNhdGNoIChlKSB7XG4gICAgaGFuZGxlRXJyb3IoZSwgdm0sIGluZm8pO1xuICB9XG4gIHJldHVybiByZXNcbn1cblxuZnVuY3Rpb24gZ2xvYmFsSGFuZGxlRXJyb3IgKGVyciwgdm0sIGluZm8pIHtcbiAgaWYgKGNvbmZpZy5lcnJvckhhbmRsZXIpIHtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIGNvbmZpZy5lcnJvckhhbmRsZXIuY2FsbChudWxsLCBlcnIsIHZtLCBpbmZvKVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIC8vIGlmIHRoZSB1c2VyIGludGVudGlvbmFsbHkgdGhyb3dzIHRoZSBvcmlnaW5hbCBlcnJvciBpbiB0aGUgaGFuZGxlcixcbiAgICAgIC8vIGRvIG5vdCBsb2cgaXQgdHdpY2VcbiAgICAgIGlmIChlICE9PSBlcnIpIHtcbiAgICAgICAgbG9nRXJyb3IoZSwgbnVsbCwgJ2NvbmZpZy5lcnJvckhhbmRsZXInKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgbG9nRXJyb3IoZXJyLCB2bSwgaW5mbyk7XG59XG5cbmZ1bmN0aW9uIGxvZ0Vycm9yIChlcnIsIHZtLCBpbmZvKSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgd2FybigoXCJFcnJvciBpbiBcIiArIGluZm8gKyBcIjogXFxcIlwiICsgKGVyci50b1N0cmluZygpKSArIFwiXFxcIlwiKSwgdm0pO1xuICB9XG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICovXG4gIGlmICgoaW5Ccm93c2VyIHx8IGluV2VleCkgJiYgdHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgY29uc29sZS5lcnJvcihlcnIpO1xuICB9IGVsc2Uge1xuICAgIHRocm93IGVyclxuICB9XG59XG5cbi8qICAqL1xuXG52YXIgY2FsbGJhY2tzID0gW107XG52YXIgcGVuZGluZyA9IGZhbHNlO1xuXG5mdW5jdGlvbiBmbHVzaENhbGxiYWNrcyAoKSB7XG4gIHBlbmRpbmcgPSBmYWxzZTtcbiAgdmFyIGNvcGllcyA9IGNhbGxiYWNrcy5zbGljZSgwKTtcbiAgY2FsbGJhY2tzLmxlbmd0aCA9IDA7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgY29waWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgY29waWVzW2ldKCk7XG4gIH1cbn1cblxuLy8gSGVyZSB3ZSBoYXZlIGFzeW5jIGRlZmVycmluZyB3cmFwcGVycyB1c2luZyBtaWNyb3Rhc2tzLlxuLy8gSW4gMi41IHdlIHVzZWQgKG1hY3JvKSB0YXNrcyAoaW4gY29tYmluYXRpb24gd2l0aCBtaWNyb3Rhc2tzKS5cbi8vIEhvd2V2ZXIsIGl0IGhhcyBzdWJ0bGUgcHJvYmxlbXMgd2hlbiBzdGF0ZSBpcyBjaGFuZ2VkIHJpZ2h0IGJlZm9yZSByZXBhaW50XG4vLyAoZS5nLiAjNjgxMywgb3V0LWluIHRyYW5zaXRpb25zKS5cbi8vIEFsc28sIHVzaW5nIChtYWNybykgdGFza3MgaW4gZXZlbnQgaGFuZGxlciB3b3VsZCBjYXVzZSBzb21lIHdlaXJkIGJlaGF2aW9yc1xuLy8gdGhhdCBjYW5ub3QgYmUgY2lyY3VtdmVudGVkIChlLmcuICM3MTA5LCAjNzE1MywgIzc1NDYsICM3ODM0LCAjODEwOSkuXG4vLyBTbyB3ZSBub3cgdXNlIG1pY3JvdGFza3MgZXZlcnl3aGVyZSwgYWdhaW4uXG4vLyBBIG1ham9yIGRyYXdiYWNrIG9mIHRoaXMgdHJhZGVvZmYgaXMgdGhhdCB0aGVyZSBhcmUgc29tZSBzY2VuYXJpb3Ncbi8vIHdoZXJlIG1pY3JvdGFza3MgaGF2ZSB0b28gaGlnaCBhIHByaW9yaXR5IGFuZCBmaXJlIGluIGJldHdlZW4gc3VwcG9zZWRseVxuLy8gc2VxdWVudGlhbCBldmVudHMgKGUuZy4gIzQ1MjEsICM2NjkwLCB3aGljaCBoYXZlIHdvcmthcm91bmRzKVxuLy8gb3IgZXZlbiBiZXR3ZWVuIGJ1YmJsaW5nIG9mIHRoZSBzYW1lIGV2ZW50ICgjNjU2NikuXG52YXIgdGltZXJGdW5jO1xuXG4vLyBUaGUgbmV4dFRpY2sgYmVoYXZpb3IgbGV2ZXJhZ2VzIHRoZSBtaWNyb3Rhc2sgcXVldWUsIHdoaWNoIGNhbiBiZSBhY2Nlc3NlZFxuLy8gdmlhIGVpdGhlciBuYXRpdmUgUHJvbWlzZS50aGVuIG9yIE11dGF0aW9uT2JzZXJ2ZXIuXG4vLyBNdXRhdGlvbk9ic2VydmVyIGhhcyB3aWRlciBzdXBwb3J0LCBob3dldmVyIGl0IGlzIHNlcmlvdXNseSBidWdnZWQgaW5cbi8vIFVJV2ViVmlldyBpbiBpT1MgPj0gOS4zLjMgd2hlbiB0cmlnZ2VyZWQgaW4gdG91Y2ggZXZlbnQgaGFuZGxlcnMuIEl0XG4vLyBjb21wbGV0ZWx5IHN0b3BzIHdvcmtpbmcgYWZ0ZXIgdHJpZ2dlcmluZyBhIGZldyB0aW1lcy4uLiBzbywgaWYgbmF0aXZlXG4vLyBQcm9taXNlIGlzIGF2YWlsYWJsZSwgd2Ugd2lsbCB1c2UgaXQ6XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCwgJGZsb3ctZGlzYWJsZS1saW5lICovXG5pZiAodHlwZW9mIFByb21pc2UgIT09ICd1bmRlZmluZWQnICYmIGlzTmF0aXZlKFByb21pc2UpKSB7XG4gIHZhciBwID0gUHJvbWlzZS5yZXNvbHZlKCk7XG4gIHRpbWVyRnVuYyA9IGZ1bmN0aW9uICgpIHtcbiAgICBwLnRoZW4oZmx1c2hDYWxsYmFja3MpO1xuICAgIC8vIEluIHByb2JsZW1hdGljIFVJV2ViVmlld3MsIFByb21pc2UudGhlbiBkb2Vzbid0IGNvbXBsZXRlbHkgYnJlYWssIGJ1dFxuICAgIC8vIGl0IGNhbiBnZXQgc3R1Y2sgaW4gYSB3ZWlyZCBzdGF0ZSB3aGVyZSBjYWxsYmFja3MgYXJlIHB1c2hlZCBpbnRvIHRoZVxuICAgIC8vIG1pY3JvdGFzayBxdWV1ZSBidXQgdGhlIHF1ZXVlIGlzbid0IGJlaW5nIGZsdXNoZWQsIHVudGlsIHRoZSBicm93c2VyXG4gICAgLy8gbmVlZHMgdG8gZG8gc29tZSBvdGhlciB3b3JrLCBlLmcuIGhhbmRsZSBhIHRpbWVyLiBUaGVyZWZvcmUgd2UgY2FuXG4gICAgLy8gXCJmb3JjZVwiIHRoZSBtaWNyb3Rhc2sgcXVldWUgdG8gYmUgZmx1c2hlZCBieSBhZGRpbmcgYW4gZW1wdHkgdGltZXIuXG4gICAgaWYgKGlzSU9TKSB7IHNldFRpbWVvdXQobm9vcCk7IH1cbiAgfTtcbn0gZWxzZSBpZiAoIWlzSUUgJiYgdHlwZW9mIE11dGF0aW9uT2JzZXJ2ZXIgIT09ICd1bmRlZmluZWQnICYmIChcbiAgaXNOYXRpdmUoTXV0YXRpb25PYnNlcnZlcikgfHxcbiAgLy8gUGhhbnRvbUpTIGFuZCBpT1MgNy54XG4gIE11dGF0aW9uT2JzZXJ2ZXIudG9TdHJpbmcoKSA9PT0gJ1tvYmplY3QgTXV0YXRpb25PYnNlcnZlckNvbnN0cnVjdG9yXSdcbikpIHtcbiAgLy8gVXNlIE11dGF0aW9uT2JzZXJ2ZXIgd2hlcmUgbmF0aXZlIFByb21pc2UgaXMgbm90IGF2YWlsYWJsZSxcbiAgLy8gZS5nLiBQaGFudG9tSlMsIGlPUzcsIEFuZHJvaWQgNC40XG4gIC8vICgjNjQ2NiBNdXRhdGlvbk9ic2VydmVyIGlzIHVucmVsaWFibGUgaW4gSUUxMSlcbiAgdmFyIGNvdW50ZXIgPSAxO1xuICB2YXIgb2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcihmbHVzaENhbGxiYWNrcyk7XG4gIHZhciB0ZXh0Tm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFN0cmluZyhjb3VudGVyKSk7XG4gIG9ic2VydmVyLm9ic2VydmUodGV4dE5vZGUsIHtcbiAgICBjaGFyYWN0ZXJEYXRhOiB0cnVlXG4gIH0pO1xuICB0aW1lckZ1bmMgPSBmdW5jdGlvbiAoKSB7XG4gICAgY291bnRlciA9IChjb3VudGVyICsgMSkgJSAyO1xuICAgIHRleHROb2RlLmRhdGEgPSBTdHJpbmcoY291bnRlcik7XG4gIH07XG59IGVsc2UgaWYgKHR5cGVvZiBzZXRJbW1lZGlhdGUgIT09ICd1bmRlZmluZWQnICYmIGlzTmF0aXZlKHNldEltbWVkaWF0ZSkpIHtcbiAgLy8gRmFsbGJhY2sgdG8gc2V0SW1tZWRpYXRlLlxuICAvLyBUZWNobmljYWxseSBpdCBsZXZlcmFnZXMgdGhlIChtYWNybykgdGFzayBxdWV1ZSxcbiAgLy8gYnV0IGl0IGlzIHN0aWxsIGEgYmV0dGVyIGNob2ljZSB0aGFuIHNldFRpbWVvdXQuXG4gIHRpbWVyRnVuYyA9IGZ1bmN0aW9uICgpIHtcbiAgICBzZXRJbW1lZGlhdGUoZmx1c2hDYWxsYmFja3MpO1xuICB9O1xufSBlbHNlIHtcbiAgLy8gRmFsbGJhY2sgdG8gc2V0VGltZW91dC5cbiAgdGltZXJGdW5jID0gZnVuY3Rpb24gKCkge1xuICAgIHNldFRpbWVvdXQoZmx1c2hDYWxsYmFja3MsIDApO1xuICB9O1xufVxuXG5mdW5jdGlvbiBuZXh0VGljayAoY2IsIGN0eCkge1xuICB2YXIgX3Jlc29sdmU7XG4gIGNhbGxiYWNrcy5wdXNoKGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoY2IpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNiLmNhbGwoY3R4KTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgaGFuZGxlRXJyb3IoZSwgY3R4LCAnbmV4dFRpY2snKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKF9yZXNvbHZlKSB7XG4gICAgICBfcmVzb2x2ZShjdHgpO1xuICAgIH1cbiAgfSk7XG4gIGlmICghcGVuZGluZykge1xuICAgIHBlbmRpbmcgPSB0cnVlO1xuICAgIHRpbWVyRnVuYygpO1xuICB9XG4gIC8vICRmbG93LWRpc2FibGUtbGluZVxuICBpZiAoIWNiICYmIHR5cGVvZiBQcm9taXNlICE9PSAndW5kZWZpbmVkJykge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSkge1xuICAgICAgX3Jlc29sdmUgPSByZXNvbHZlO1xuICAgIH0pXG4gIH1cbn1cblxuLyogICovXG5cbi8qIG5vdCB0eXBlIGNoZWNraW5nIHRoaXMgZmlsZSBiZWNhdXNlIGZsb3cgZG9lc24ndCBwbGF5IHdlbGwgd2l0aCBQcm94eSAqL1xuXG52YXIgaW5pdFByb3h5O1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICB2YXIgYWxsb3dlZEdsb2JhbHMgPSBtYWtlTWFwKFxuICAgICdJbmZpbml0eSx1bmRlZmluZWQsTmFOLGlzRmluaXRlLGlzTmFOLCcgK1xuICAgICdwYXJzZUZsb2F0LHBhcnNlSW50LGRlY29kZVVSSSxkZWNvZGVVUklDb21wb25lbnQsZW5jb2RlVVJJLGVuY29kZVVSSUNvbXBvbmVudCwnICtcbiAgICAnTWF0aCxOdW1iZXIsRGF0ZSxBcnJheSxPYmplY3QsQm9vbGVhbixTdHJpbmcsUmVnRXhwLE1hcCxTZXQsSlNPTixJbnRsLCcgK1xuICAgICdyZXF1aXJlJyAvLyBmb3IgV2VicGFjay9Ccm93c2VyaWZ5XG4gICk7XG5cbiAgdmFyIHdhcm5Ob25QcmVzZW50ID0gZnVuY3Rpb24gKHRhcmdldCwga2V5KSB7XG4gICAgd2FybihcbiAgICAgIFwiUHJvcGVydHkgb3IgbWV0aG9kIFxcXCJcIiArIGtleSArIFwiXFxcIiBpcyBub3QgZGVmaW5lZCBvbiB0aGUgaW5zdGFuY2UgYnV0IFwiICtcbiAgICAgICdyZWZlcmVuY2VkIGR1cmluZyByZW5kZXIuIE1ha2Ugc3VyZSB0aGF0IHRoaXMgcHJvcGVydHkgaXMgcmVhY3RpdmUsICcgK1xuICAgICAgJ2VpdGhlciBpbiB0aGUgZGF0YSBvcHRpb24sIG9yIGZvciBjbGFzcy1iYXNlZCBjb21wb25lbnRzLCBieSAnICtcbiAgICAgICdpbml0aWFsaXppbmcgdGhlIHByb3BlcnR5LiAnICtcbiAgICAgICdTZWU6IGh0dHBzOi8vdnVlanMub3JnL3YyL2d1aWRlL3JlYWN0aXZpdHkuaHRtbCNEZWNsYXJpbmctUmVhY3RpdmUtUHJvcGVydGllcy4nLFxuICAgICAgdGFyZ2V0XG4gICAgKTtcbiAgfTtcblxuICB2YXIgd2FyblJlc2VydmVkUHJlZml4ID0gZnVuY3Rpb24gKHRhcmdldCwga2V5KSB7XG4gICAgd2FybihcbiAgICAgIFwiUHJvcGVydHkgXFxcIlwiICsga2V5ICsgXCJcXFwiIG11c3QgYmUgYWNjZXNzZWQgd2l0aCBcXFwiJGRhdGEuXCIgKyBrZXkgKyBcIlxcXCIgYmVjYXVzZSBcIiArXG4gICAgICAncHJvcGVydGllcyBzdGFydGluZyB3aXRoIFwiJFwiIG9yIFwiX1wiIGFyZSBub3QgcHJveGllZCBpbiB0aGUgVnVlIGluc3RhbmNlIHRvICcgK1xuICAgICAgJ3ByZXZlbnQgY29uZmxpY3RzIHdpdGggVnVlIGludGVybmFscy4gJyArXG4gICAgICAnU2VlOiBodHRwczovL3Z1ZWpzLm9yZy92Mi9hcGkvI2RhdGEnLFxuICAgICAgdGFyZ2V0XG4gICAgKTtcbiAgfTtcblxuICB2YXIgaGFzUHJveHkgPVxuICAgIHR5cGVvZiBQcm94eSAhPT0gJ3VuZGVmaW5lZCcgJiYgaXNOYXRpdmUoUHJveHkpO1xuXG4gIGlmIChoYXNQcm94eSkge1xuICAgIHZhciBpc0J1aWx0SW5Nb2RpZmllciA9IG1ha2VNYXAoJ3N0b3AscHJldmVudCxzZWxmLGN0cmwsc2hpZnQsYWx0LG1ldGEsZXhhY3QnKTtcbiAgICBjb25maWcua2V5Q29kZXMgPSBuZXcgUHJveHkoY29uZmlnLmtleUNvZGVzLCB7XG4gICAgICBzZXQ6IGZ1bmN0aW9uIHNldCAodGFyZ2V0LCBrZXksIHZhbHVlKSB7XG4gICAgICAgIGlmIChpc0J1aWx0SW5Nb2RpZmllcihrZXkpKSB7XG4gICAgICAgICAgd2FybigoXCJBdm9pZCBvdmVyd3JpdGluZyBidWlsdC1pbiBtb2RpZmllciBpbiBjb25maWcua2V5Q29kZXM6IC5cIiArIGtleSkpO1xuICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRhcmdldFtrZXldID0gdmFsdWU7XG4gICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgdmFyIGhhc0hhbmRsZXIgPSB7XG4gICAgaGFzOiBmdW5jdGlvbiBoYXMgKHRhcmdldCwga2V5KSB7XG4gICAgICB2YXIgaGFzID0ga2V5IGluIHRhcmdldDtcbiAgICAgIHZhciBpc0FsbG93ZWQgPSBhbGxvd2VkR2xvYmFscyhrZXkpIHx8XG4gICAgICAgICh0eXBlb2Yga2V5ID09PSAnc3RyaW5nJyAmJiBrZXkuY2hhckF0KDApID09PSAnXycgJiYgIShrZXkgaW4gdGFyZ2V0LiRkYXRhKSk7XG4gICAgICBpZiAoIWhhcyAmJiAhaXNBbGxvd2VkKSB7XG4gICAgICAgIGlmIChrZXkgaW4gdGFyZ2V0LiRkYXRhKSB7IHdhcm5SZXNlcnZlZFByZWZpeCh0YXJnZXQsIGtleSk7IH1cbiAgICAgICAgZWxzZSB7IHdhcm5Ob25QcmVzZW50KHRhcmdldCwga2V5KTsgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIGhhcyB8fCAhaXNBbGxvd2VkXG4gICAgfVxuICB9O1xuXG4gIHZhciBnZXRIYW5kbGVyID0ge1xuICAgIGdldDogZnVuY3Rpb24gZ2V0ICh0YXJnZXQsIGtleSkge1xuICAgICAgaWYgKHR5cGVvZiBrZXkgPT09ICdzdHJpbmcnICYmICEoa2V5IGluIHRhcmdldCkpIHtcbiAgICAgICAgaWYgKGtleSBpbiB0YXJnZXQuJGRhdGEpIHsgd2FyblJlc2VydmVkUHJlZml4KHRhcmdldCwga2V5KTsgfVxuICAgICAgICBlbHNlIHsgd2Fybk5vblByZXNlbnQodGFyZ2V0LCBrZXkpOyB9XG4gICAgICB9XG4gICAgICByZXR1cm4gdGFyZ2V0W2tleV1cbiAgICB9XG4gIH07XG5cbiAgaW5pdFByb3h5ID0gZnVuY3Rpb24gaW5pdFByb3h5ICh2bSkge1xuICAgIGlmIChoYXNQcm94eSkge1xuICAgICAgLy8gZGV0ZXJtaW5lIHdoaWNoIHByb3h5IGhhbmRsZXIgdG8gdXNlXG4gICAgICB2YXIgb3B0aW9ucyA9IHZtLiRvcHRpb25zO1xuICAgICAgdmFyIGhhbmRsZXJzID0gb3B0aW9ucy5yZW5kZXIgJiYgb3B0aW9ucy5yZW5kZXIuX3dpdGhTdHJpcHBlZFxuICAgICAgICA/IGdldEhhbmRsZXJcbiAgICAgICAgOiBoYXNIYW5kbGVyO1xuICAgICAgdm0uX3JlbmRlclByb3h5ID0gbmV3IFByb3h5KHZtLCBoYW5kbGVycyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZtLl9yZW5kZXJQcm94eSA9IHZtO1xuICAgIH1cbiAgfTtcbn1cblxuLyogICovXG5cbnZhciBzZWVuT2JqZWN0cyA9IG5ldyBfU2V0KCk7XG5cbi8qKlxuICogUmVjdXJzaXZlbHkgdHJhdmVyc2UgYW4gb2JqZWN0IHRvIGV2b2tlIGFsbCBjb252ZXJ0ZWRcbiAqIGdldHRlcnMsIHNvIHRoYXQgZXZlcnkgbmVzdGVkIHByb3BlcnR5IGluc2lkZSB0aGUgb2JqZWN0XG4gKiBpcyBjb2xsZWN0ZWQgYXMgYSBcImRlZXBcIiBkZXBlbmRlbmN5LlxuICovXG5mdW5jdGlvbiB0cmF2ZXJzZSAodmFsKSB7XG4gIF90cmF2ZXJzZSh2YWwsIHNlZW5PYmplY3RzKTtcbiAgc2Vlbk9iamVjdHMuY2xlYXIoKTtcbn1cblxuZnVuY3Rpb24gX3RyYXZlcnNlICh2YWwsIHNlZW4pIHtcbiAgdmFyIGksIGtleXM7XG4gIHZhciBpc0EgPSBBcnJheS5pc0FycmF5KHZhbCk7XG4gIGlmICgoIWlzQSAmJiAhaXNPYmplY3QodmFsKSkgfHwgT2JqZWN0LmlzRnJvemVuKHZhbCkgfHwgdmFsIGluc3RhbmNlb2YgVk5vZGUpIHtcbiAgICByZXR1cm5cbiAgfVxuICBpZiAodmFsLl9fb2JfXykge1xuICAgIHZhciBkZXBJZCA9IHZhbC5fX29iX18uZGVwLmlkO1xuICAgIGlmIChzZWVuLmhhcyhkZXBJZCkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICBzZWVuLmFkZChkZXBJZCk7XG4gIH1cbiAgaWYgKGlzQSkge1xuICAgIGkgPSB2YWwubGVuZ3RoO1xuICAgIHdoaWxlIChpLS0pIHsgX3RyYXZlcnNlKHZhbFtpXSwgc2Vlbik7IH1cbiAgfSBlbHNlIHtcbiAgICBrZXlzID0gT2JqZWN0LmtleXModmFsKTtcbiAgICBpID0ga2V5cy5sZW5ndGg7XG4gICAgd2hpbGUgKGktLSkgeyBfdHJhdmVyc2UodmFsW2tleXNbaV1dLCBzZWVuKTsgfVxuICB9XG59XG5cbnZhciBtYXJrO1xudmFyIG1lYXN1cmU7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIHZhciBwZXJmID0gaW5Ccm93c2VyICYmIHdpbmRvdy5wZXJmb3JtYW5jZTtcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gIGlmIChcbiAgICBwZXJmICYmXG4gICAgcGVyZi5tYXJrICYmXG4gICAgcGVyZi5tZWFzdXJlICYmXG4gICAgcGVyZi5jbGVhck1hcmtzICYmXG4gICAgcGVyZi5jbGVhck1lYXN1cmVzXG4gICkge1xuICAgIG1hcmsgPSBmdW5jdGlvbiAodGFnKSB7IHJldHVybiBwZXJmLm1hcmsodGFnKTsgfTtcbiAgICBtZWFzdXJlID0gZnVuY3Rpb24gKG5hbWUsIHN0YXJ0VGFnLCBlbmRUYWcpIHtcbiAgICAgIHBlcmYubWVhc3VyZShuYW1lLCBzdGFydFRhZywgZW5kVGFnKTtcbiAgICAgIHBlcmYuY2xlYXJNYXJrcyhzdGFydFRhZyk7XG4gICAgICBwZXJmLmNsZWFyTWFya3MoZW5kVGFnKTtcbiAgICAgIC8vIHBlcmYuY2xlYXJNZWFzdXJlcyhuYW1lKVxuICAgIH07XG4gIH1cbn1cblxuLyogICovXG5cbnZhciBub3JtYWxpemVFdmVudCA9IGNhY2hlZChmdW5jdGlvbiAobmFtZSkge1xuICB2YXIgcGFzc2l2ZSA9IG5hbWUuY2hhckF0KDApID09PSAnJic7XG4gIG5hbWUgPSBwYXNzaXZlID8gbmFtZS5zbGljZSgxKSA6IG5hbWU7XG4gIHZhciBvbmNlJCQxID0gbmFtZS5jaGFyQXQoMCkgPT09ICd+JzsgLy8gUHJlZml4ZWQgbGFzdCwgY2hlY2tlZCBmaXJzdFxuICBuYW1lID0gb25jZSQkMSA/IG5hbWUuc2xpY2UoMSkgOiBuYW1lO1xuICB2YXIgY2FwdHVyZSA9IG5hbWUuY2hhckF0KDApID09PSAnISc7XG4gIG5hbWUgPSBjYXB0dXJlID8gbmFtZS5zbGljZSgxKSA6IG5hbWU7XG4gIHJldHVybiB7XG4gICAgbmFtZTogbmFtZSxcbiAgICBvbmNlOiBvbmNlJCQxLFxuICAgIGNhcHR1cmU6IGNhcHR1cmUsXG4gICAgcGFzc2l2ZTogcGFzc2l2ZVxuICB9XG59KTtcblxuZnVuY3Rpb24gY3JlYXRlRm5JbnZva2VyIChmbnMsIHZtKSB7XG4gIGZ1bmN0aW9uIGludm9rZXIgKCkge1xuICAgIHZhciBhcmd1bWVudHMkMSA9IGFyZ3VtZW50cztcblxuICAgIHZhciBmbnMgPSBpbnZva2VyLmZucztcbiAgICBpZiAoQXJyYXkuaXNBcnJheShmbnMpKSB7XG4gICAgICB2YXIgY2xvbmVkID0gZm5zLnNsaWNlKCk7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNsb25lZC5sZW5ndGg7IGkrKykge1xuICAgICAgICBpbnZva2VXaXRoRXJyb3JIYW5kbGluZyhjbG9uZWRbaV0sIG51bGwsIGFyZ3VtZW50cyQxLCB2bSwgXCJ2LW9uIGhhbmRsZXJcIik7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIHJldHVybiBoYW5kbGVyIHJldHVybiB2YWx1ZSBmb3Igc2luZ2xlIGhhbmRsZXJzXG4gICAgICByZXR1cm4gaW52b2tlV2l0aEVycm9ySGFuZGxpbmcoZm5zLCBudWxsLCBhcmd1bWVudHMsIHZtLCBcInYtb24gaGFuZGxlclwiKVxuICAgIH1cbiAgfVxuICBpbnZva2VyLmZucyA9IGZucztcbiAgcmV0dXJuIGludm9rZXJcbn1cblxuZnVuY3Rpb24gdXBkYXRlTGlzdGVuZXJzIChcbiAgb24sXG4gIG9sZE9uLFxuICBhZGQsXG4gIHJlbW92ZSQkMSxcbiAgY3JlYXRlT25jZUhhbmRsZXIsXG4gIHZtXG4pIHtcbiAgdmFyIG5hbWUsIGRlZiQkMSwgY3VyLCBvbGQsIGV2ZW50O1xuICBmb3IgKG5hbWUgaW4gb24pIHtcbiAgICBkZWYkJDEgPSBjdXIgPSBvbltuYW1lXTtcbiAgICBvbGQgPSBvbGRPbltuYW1lXTtcbiAgICBldmVudCA9IG5vcm1hbGl6ZUV2ZW50KG5hbWUpO1xuICAgIGlmIChpc1VuZGVmKGN1cikpIHtcbiAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgd2FybihcbiAgICAgICAgXCJJbnZhbGlkIGhhbmRsZXIgZm9yIGV2ZW50IFxcXCJcIiArIChldmVudC5uYW1lKSArIFwiXFxcIjogZ290IFwiICsgU3RyaW5nKGN1ciksXG4gICAgICAgIHZtXG4gICAgICApO1xuICAgIH0gZWxzZSBpZiAoaXNVbmRlZihvbGQpKSB7XG4gICAgICBpZiAoaXNVbmRlZihjdXIuZm5zKSkge1xuICAgICAgICBjdXIgPSBvbltuYW1lXSA9IGNyZWF0ZUZuSW52b2tlcihjdXIsIHZtKTtcbiAgICAgIH1cbiAgICAgIGlmIChpc1RydWUoZXZlbnQub25jZSkpIHtcbiAgICAgICAgY3VyID0gb25bbmFtZV0gPSBjcmVhdGVPbmNlSGFuZGxlcihldmVudC5uYW1lLCBjdXIsIGV2ZW50LmNhcHR1cmUpO1xuICAgICAgfVxuICAgICAgYWRkKGV2ZW50Lm5hbWUsIGN1ciwgZXZlbnQuY2FwdHVyZSwgZXZlbnQucGFzc2l2ZSwgZXZlbnQucGFyYW1zKTtcbiAgICB9IGVsc2UgaWYgKGN1ciAhPT0gb2xkKSB7XG4gICAgICBvbGQuZm5zID0gY3VyO1xuICAgICAgb25bbmFtZV0gPSBvbGQ7XG4gICAgfVxuICB9XG4gIGZvciAobmFtZSBpbiBvbGRPbikge1xuICAgIGlmIChpc1VuZGVmKG9uW25hbWVdKSkge1xuICAgICAgZXZlbnQgPSBub3JtYWxpemVFdmVudChuYW1lKTtcbiAgICAgIHJlbW92ZSQkMShldmVudC5uYW1lLCBvbGRPbltuYW1lXSwgZXZlbnQuY2FwdHVyZSk7XG4gICAgfVxuICB9XG59XG5cbi8qICAqL1xuXG4vKiAgKi9cblxuLy8gZml4ZWQgYnkgeHh4eHh4IChtcCBwcm9wZXJ0aWVzKVxyXG5mdW5jdGlvbiBleHRyYWN0UHJvcGVydGllc0Zyb21WTm9kZURhdGEoZGF0YSwgQ3RvciwgcmVzLCBjb250ZXh0KSB7XHJcbiAgdmFyIHByb3BPcHRpb25zID0gQ3Rvci5vcHRpb25zLm1wT3B0aW9ucyAmJiBDdG9yLm9wdGlvbnMubXBPcHRpb25zLnByb3BlcnRpZXM7XHJcbiAgaWYgKGlzVW5kZWYocHJvcE9wdGlvbnMpKSB7XHJcbiAgICByZXR1cm4gcmVzXHJcbiAgfVxuICB2YXIgZXh0ZXJuYWxDbGFzc2VzID0gQ3Rvci5vcHRpb25zLm1wT3B0aW9ucy5leHRlcm5hbENsYXNzZXMgfHwgW107XHJcbiAgdmFyIGF0dHJzID0gZGF0YS5hdHRycztcbiAgdmFyIHByb3BzID0gZGF0YS5wcm9wcztcclxuICBpZiAoaXNEZWYoYXR0cnMpIHx8IGlzRGVmKHByb3BzKSkge1xyXG4gICAgZm9yICh2YXIga2V5IGluIHByb3BPcHRpb25zKSB7XHJcbiAgICAgIHZhciBhbHRLZXkgPSBoeXBoZW5hdGUoa2V5KTtcbiAgICAgIHZhciByZXN1bHQgPSBjaGVja1Byb3AocmVzLCBwcm9wcywga2V5LCBhbHRLZXksIHRydWUpIHx8XG4gICAgICAgICAgY2hlY2tQcm9wKHJlcywgYXR0cnMsIGtleSwgYWx0S2V5LCBmYWxzZSk7XG4gICAgICAvLyBleHRlcm5hbENsYXNzXG4gICAgICBpZiAoXG4gICAgICAgIHJlc3VsdCAmJlxuICAgICAgICByZXNba2V5XSAmJlxuICAgICAgICBleHRlcm5hbENsYXNzZXMuaW5kZXhPZihhbHRLZXkpICE9PSAtMSAmJlxuICAgICAgICBjb250ZXh0W2NhbWVsaXplKHJlc1trZXldKV1cbiAgICAgICkge1xuICAgICAgICAvLyDotYvlgLwgZXh0ZXJuYWxDbGFzcyDnnJ/mraPnmoTlgLwo5qih5p2/6YeMIGV4dGVybmFsQ2xhc3Mg55qE5YC85Y+v6IO95piv5a2X56ym5LiyKVxuICAgICAgICByZXNba2V5XSA9IGNvbnRleHRbY2FtZWxpemUocmVzW2tleV0pXTtcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIHJlc1xyXG59XG5cbmZ1bmN0aW9uIGV4dHJhY3RQcm9wc0Zyb21WTm9kZURhdGEgKFxuICBkYXRhLFxuICBDdG9yLFxuICB0YWcsXG4gIGNvbnRleHQvLyBmaXhlZCBieSB4eHh4eHhcbikge1xuICAvLyB3ZSBhcmUgb25seSBleHRyYWN0aW5nIHJhdyB2YWx1ZXMgaGVyZS5cbiAgLy8gdmFsaWRhdGlvbiBhbmQgZGVmYXVsdCB2YWx1ZXMgYXJlIGhhbmRsZWQgaW4gdGhlIGNoaWxkXG4gIC8vIGNvbXBvbmVudCBpdHNlbGYuXG4gIHZhciBwcm9wT3B0aW9ucyA9IEN0b3Iub3B0aW9ucy5wcm9wcztcbiAgaWYgKGlzVW5kZWYocHJvcE9wdGlvbnMpKSB7XG4gICAgLy8gZml4ZWQgYnkgeHh4eHh4XG4gICAgcmV0dXJuIGV4dHJhY3RQcm9wZXJ0aWVzRnJvbVZOb2RlRGF0YShkYXRhLCBDdG9yLCB7fSwgY29udGV4dClcbiAgfVxuICB2YXIgcmVzID0ge307XG4gIHZhciBhdHRycyA9IGRhdGEuYXR0cnM7XG4gIHZhciBwcm9wcyA9IGRhdGEucHJvcHM7XG4gIGlmIChpc0RlZihhdHRycykgfHwgaXNEZWYocHJvcHMpKSB7XG4gICAgZm9yICh2YXIga2V5IGluIHByb3BPcHRpb25zKSB7XG4gICAgICB2YXIgYWx0S2V5ID0gaHlwaGVuYXRlKGtleSk7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICB2YXIga2V5SW5Mb3dlckNhc2UgPSBrZXkudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIGtleSAhPT0ga2V5SW5Mb3dlckNhc2UgJiZcbiAgICAgICAgICBhdHRycyAmJiBoYXNPd24oYXR0cnMsIGtleUluTG93ZXJDYXNlKVxuICAgICAgICApIHtcbiAgICAgICAgICB0aXAoXG4gICAgICAgICAgICBcIlByb3AgXFxcIlwiICsga2V5SW5Mb3dlckNhc2UgKyBcIlxcXCIgaXMgcGFzc2VkIHRvIGNvbXBvbmVudCBcIiArXG4gICAgICAgICAgICAoZm9ybWF0Q29tcG9uZW50TmFtZSh0YWcgfHwgQ3RvcikpICsgXCIsIGJ1dCB0aGUgZGVjbGFyZWQgcHJvcCBuYW1lIGlzXCIgK1xuICAgICAgICAgICAgXCIgXFxcIlwiICsga2V5ICsgXCJcXFwiLiBcIiArXG4gICAgICAgICAgICBcIk5vdGUgdGhhdCBIVE1MIGF0dHJpYnV0ZXMgYXJlIGNhc2UtaW5zZW5zaXRpdmUgYW5kIGNhbWVsQ2FzZWQgXCIgK1xuICAgICAgICAgICAgXCJwcm9wcyBuZWVkIHRvIHVzZSB0aGVpciBrZWJhYi1jYXNlIGVxdWl2YWxlbnRzIHdoZW4gdXNpbmcgaW4tRE9NIFwiICtcbiAgICAgICAgICAgIFwidGVtcGxhdGVzLiBZb3Ugc2hvdWxkIHByb2JhYmx5IHVzZSBcXFwiXCIgKyBhbHRLZXkgKyBcIlxcXCIgaW5zdGVhZCBvZiBcXFwiXCIgKyBrZXkgKyBcIlxcXCIuXCJcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBjaGVja1Byb3AocmVzLCBwcm9wcywga2V5LCBhbHRLZXksIHRydWUpIHx8XG4gICAgICBjaGVja1Byb3AocmVzLCBhdHRycywga2V5LCBhbHRLZXksIGZhbHNlKTtcbiAgICB9XG4gIH1cbiAgLy8gZml4ZWQgYnkgeHh4eHh4XG4gIHJldHVybiBleHRyYWN0UHJvcGVydGllc0Zyb21WTm9kZURhdGEoZGF0YSwgQ3RvciwgcmVzLCBjb250ZXh0KVxufVxuXG5mdW5jdGlvbiBjaGVja1Byb3AgKFxuICByZXMsXG4gIGhhc2gsXG4gIGtleSxcbiAgYWx0S2V5LFxuICBwcmVzZXJ2ZVxuKSB7XG4gIGlmIChpc0RlZihoYXNoKSkge1xuICAgIGlmIChoYXNPd24oaGFzaCwga2V5KSkge1xuICAgICAgcmVzW2tleV0gPSBoYXNoW2tleV07XG4gICAgICBpZiAoIXByZXNlcnZlKSB7XG4gICAgICAgIGRlbGV0ZSBoYXNoW2tleV07XG4gICAgICB9XG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH0gZWxzZSBpZiAoaGFzT3duKGhhc2gsIGFsdEtleSkpIHtcbiAgICAgIHJlc1trZXldID0gaGFzaFthbHRLZXldO1xuICAgICAgaWYgKCFwcmVzZXJ2ZSkge1xuICAgICAgICBkZWxldGUgaGFzaFthbHRLZXldO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGZhbHNlXG59XG5cbi8qICAqL1xuXG4vLyBUaGUgdGVtcGxhdGUgY29tcGlsZXIgYXR0ZW1wdHMgdG8gbWluaW1pemUgdGhlIG5lZWQgZm9yIG5vcm1hbGl6YXRpb24gYnlcbi8vIHN0YXRpY2FsbHkgYW5hbHl6aW5nIHRoZSB0ZW1wbGF0ZSBhdCBjb21waWxlIHRpbWUuXG4vL1xuLy8gRm9yIHBsYWluIEhUTUwgbWFya3VwLCBub3JtYWxpemF0aW9uIGNhbiBiZSBjb21wbGV0ZWx5IHNraXBwZWQgYmVjYXVzZSB0aGVcbi8vIGdlbmVyYXRlZCByZW5kZXIgZnVuY3Rpb24gaXMgZ3VhcmFudGVlZCB0byByZXR1cm4gQXJyYXk8Vk5vZGU+LiBUaGVyZSBhcmVcbi8vIHR3byBjYXNlcyB3aGVyZSBleHRyYSBub3JtYWxpemF0aW9uIGlzIG5lZWRlZDpcblxuLy8gMS4gV2hlbiB0aGUgY2hpbGRyZW4gY29udGFpbnMgY29tcG9uZW50cyAtIGJlY2F1c2UgYSBmdW5jdGlvbmFsIGNvbXBvbmVudFxuLy8gbWF5IHJldHVybiBhbiBBcnJheSBpbnN0ZWFkIG9mIGEgc2luZ2xlIHJvb3QuIEluIHRoaXMgY2FzZSwganVzdCBhIHNpbXBsZVxuLy8gbm9ybWFsaXphdGlvbiBpcyBuZWVkZWQgLSBpZiBhbnkgY2hpbGQgaXMgYW4gQXJyYXksIHdlIGZsYXR0ZW4gdGhlIHdob2xlXG4vLyB0aGluZyB3aXRoIEFycmF5LnByb3RvdHlwZS5jb25jYXQuIEl0IGlzIGd1YXJhbnRlZWQgdG8gYmUgb25seSAxLWxldmVsIGRlZXBcbi8vIGJlY2F1c2UgZnVuY3Rpb25hbCBjb21wb25lbnRzIGFscmVhZHkgbm9ybWFsaXplIHRoZWlyIG93biBjaGlsZHJlbi5cbmZ1bmN0aW9uIHNpbXBsZU5vcm1hbGl6ZUNoaWxkcmVuIChjaGlsZHJlbikge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkoY2hpbGRyZW5baV0pKSB7XG4gICAgICByZXR1cm4gQXJyYXkucHJvdG90eXBlLmNvbmNhdC5hcHBseShbXSwgY2hpbGRyZW4pXG4gICAgfVxuICB9XG4gIHJldHVybiBjaGlsZHJlblxufVxuXG4vLyAyLiBXaGVuIHRoZSBjaGlsZHJlbiBjb250YWlucyBjb25zdHJ1Y3RzIHRoYXQgYWx3YXlzIGdlbmVyYXRlZCBuZXN0ZWQgQXJyYXlzLFxuLy8gZS5nLiA8dGVtcGxhdGU+LCA8c2xvdD4sIHYtZm9yLCBvciB3aGVuIHRoZSBjaGlsZHJlbiBpcyBwcm92aWRlZCBieSB1c2VyXG4vLyB3aXRoIGhhbmQtd3JpdHRlbiByZW5kZXIgZnVuY3Rpb25zIC8gSlNYLiBJbiBzdWNoIGNhc2VzIGEgZnVsbCBub3JtYWxpemF0aW9uXG4vLyBpcyBuZWVkZWQgdG8gY2F0ZXIgdG8gYWxsIHBvc3NpYmxlIHR5cGVzIG9mIGNoaWxkcmVuIHZhbHVlcy5cbmZ1bmN0aW9uIG5vcm1hbGl6ZUNoaWxkcmVuIChjaGlsZHJlbikge1xuICByZXR1cm4gaXNQcmltaXRpdmUoY2hpbGRyZW4pXG4gICAgPyBbY3JlYXRlVGV4dFZOb2RlKGNoaWxkcmVuKV1cbiAgICA6IEFycmF5LmlzQXJyYXkoY2hpbGRyZW4pXG4gICAgICA/IG5vcm1hbGl6ZUFycmF5Q2hpbGRyZW4oY2hpbGRyZW4pXG4gICAgICA6IHVuZGVmaW5lZFxufVxuXG5mdW5jdGlvbiBpc1RleHROb2RlIChub2RlKSB7XG4gIHJldHVybiBpc0RlZihub2RlKSAmJiBpc0RlZihub2RlLnRleHQpICYmIGlzRmFsc2Uobm9kZS5pc0NvbW1lbnQpXG59XG5cbmZ1bmN0aW9uIG5vcm1hbGl6ZUFycmF5Q2hpbGRyZW4gKGNoaWxkcmVuLCBuZXN0ZWRJbmRleCkge1xuICB2YXIgcmVzID0gW107XG4gIHZhciBpLCBjLCBsYXN0SW5kZXgsIGxhc3Q7XG4gIGZvciAoaSA9IDA7IGkgPCBjaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgIGMgPSBjaGlsZHJlbltpXTtcbiAgICBpZiAoaXNVbmRlZihjKSB8fCB0eXBlb2YgYyA9PT0gJ2Jvb2xlYW4nKSB7IGNvbnRpbnVlIH1cbiAgICBsYXN0SW5kZXggPSByZXMubGVuZ3RoIC0gMTtcbiAgICBsYXN0ID0gcmVzW2xhc3RJbmRleF07XG4gICAgLy8gIG5lc3RlZFxuICAgIGlmIChBcnJheS5pc0FycmF5KGMpKSB7XG4gICAgICBpZiAoYy5sZW5ndGggPiAwKSB7XG4gICAgICAgIGMgPSBub3JtYWxpemVBcnJheUNoaWxkcmVuKGMsICgobmVzdGVkSW5kZXggfHwgJycpICsgXCJfXCIgKyBpKSk7XG4gICAgICAgIC8vIG1lcmdlIGFkamFjZW50IHRleHQgbm9kZXNcbiAgICAgICAgaWYgKGlzVGV4dE5vZGUoY1swXSkgJiYgaXNUZXh0Tm9kZShsYXN0KSkge1xuICAgICAgICAgIHJlc1tsYXN0SW5kZXhdID0gY3JlYXRlVGV4dFZOb2RlKGxhc3QudGV4dCArIChjWzBdKS50ZXh0KTtcbiAgICAgICAgICBjLnNoaWZ0KCk7XG4gICAgICAgIH1cbiAgICAgICAgcmVzLnB1c2guYXBwbHkocmVzLCBjKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGlzUHJpbWl0aXZlKGMpKSB7XG4gICAgICBpZiAoaXNUZXh0Tm9kZShsYXN0KSkge1xuICAgICAgICAvLyBtZXJnZSBhZGphY2VudCB0ZXh0IG5vZGVzXG4gICAgICAgIC8vIHRoaXMgaXMgbmVjZXNzYXJ5IGZvciBTU1IgaHlkcmF0aW9uIGJlY2F1c2UgdGV4dCBub2RlcyBhcmVcbiAgICAgICAgLy8gZXNzZW50aWFsbHkgbWVyZ2VkIHdoZW4gcmVuZGVyZWQgdG8gSFRNTCBzdHJpbmdzXG4gICAgICAgIHJlc1tsYXN0SW5kZXhdID0gY3JlYXRlVGV4dFZOb2RlKGxhc3QudGV4dCArIGMpO1xuICAgICAgfSBlbHNlIGlmIChjICE9PSAnJykge1xuICAgICAgICAvLyBjb252ZXJ0IHByaW1pdGl2ZSB0byB2bm9kZVxuICAgICAgICByZXMucHVzaChjcmVhdGVUZXh0Vk5vZGUoYykpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoaXNUZXh0Tm9kZShjKSAmJiBpc1RleHROb2RlKGxhc3QpKSB7XG4gICAgICAgIC8vIG1lcmdlIGFkamFjZW50IHRleHQgbm9kZXNcbiAgICAgICAgcmVzW2xhc3RJbmRleF0gPSBjcmVhdGVUZXh0Vk5vZGUobGFzdC50ZXh0ICsgYy50ZXh0KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIGRlZmF1bHQga2V5IGZvciBuZXN0ZWQgYXJyYXkgY2hpbGRyZW4gKGxpa2VseSBnZW5lcmF0ZWQgYnkgdi1mb3IpXG4gICAgICAgIGlmIChpc1RydWUoY2hpbGRyZW4uX2lzVkxpc3QpICYmXG4gICAgICAgICAgaXNEZWYoYy50YWcpICYmXG4gICAgICAgICAgaXNVbmRlZihjLmtleSkgJiZcbiAgICAgICAgICBpc0RlZihuZXN0ZWRJbmRleCkpIHtcbiAgICAgICAgICBjLmtleSA9IFwiX192bGlzdFwiICsgbmVzdGVkSW5kZXggKyBcIl9cIiArIGkgKyBcIl9fXCI7XG4gICAgICAgIH1cbiAgICAgICAgcmVzLnB1c2goYyk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiByZXNcbn1cblxuLyogICovXG5cbmZ1bmN0aW9uIGluaXRQcm92aWRlICh2bSkge1xuICB2YXIgcHJvdmlkZSA9IHZtLiRvcHRpb25zLnByb3ZpZGU7XG4gIGlmIChwcm92aWRlKSB7XG4gICAgdm0uX3Byb3ZpZGVkID0gdHlwZW9mIHByb3ZpZGUgPT09ICdmdW5jdGlvbidcbiAgICAgID8gcHJvdmlkZS5jYWxsKHZtKVxuICAgICAgOiBwcm92aWRlO1xuICB9XG59XG5cbmZ1bmN0aW9uIGluaXRJbmplY3Rpb25zICh2bSkge1xuICB2YXIgcmVzdWx0ID0gcmVzb2x2ZUluamVjdCh2bS4kb3B0aW9ucy5pbmplY3QsIHZtKTtcbiAgaWYgKHJlc3VsdCkge1xuICAgIHRvZ2dsZU9ic2VydmluZyhmYWxzZSk7XG4gICAgT2JqZWN0LmtleXMocmVzdWx0KS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICovXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBkZWZpbmVSZWFjdGl2ZSQkMSh2bSwga2V5LCByZXN1bHRba2V5XSwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHdhcm4oXG4gICAgICAgICAgICBcIkF2b2lkIG11dGF0aW5nIGFuIGluamVjdGVkIHZhbHVlIGRpcmVjdGx5IHNpbmNlIHRoZSBjaGFuZ2VzIHdpbGwgYmUgXCIgK1xuICAgICAgICAgICAgXCJvdmVyd3JpdHRlbiB3aGVuZXZlciB0aGUgcHJvdmlkZWQgY29tcG9uZW50IHJlLXJlbmRlcnMuIFwiICtcbiAgICAgICAgICAgIFwiaW5qZWN0aW9uIGJlaW5nIG11dGF0ZWQ6IFxcXCJcIiArIGtleSArIFwiXFxcIlwiLFxuICAgICAgICAgICAgdm1cbiAgICAgICAgICApO1xuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRlZmluZVJlYWN0aXZlJCQxKHZtLCBrZXksIHJlc3VsdFtrZXldKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICB0b2dnbGVPYnNlcnZpbmcodHJ1ZSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gcmVzb2x2ZUluamVjdCAoaW5qZWN0LCB2bSkge1xuICBpZiAoaW5qZWN0KSB7XG4gICAgLy8gaW5qZWN0IGlzIDphbnkgYmVjYXVzZSBmbG93IGlzIG5vdCBzbWFydCBlbm91Z2ggdG8gZmlndXJlIG91dCBjYWNoZWRcbiAgICB2YXIgcmVzdWx0ID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICB2YXIga2V5cyA9IGhhc1N5bWJvbFxuICAgICAgPyBSZWZsZWN0Lm93bktleXMoaW5qZWN0KVxuICAgICAgOiBPYmplY3Qua2V5cyhpbmplY3QpO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIga2V5ID0ga2V5c1tpXTtcbiAgICAgIC8vICM2NTc0IGluIGNhc2UgdGhlIGluamVjdCBvYmplY3QgaXMgb2JzZXJ2ZWQuLi5cbiAgICAgIGlmIChrZXkgPT09ICdfX29iX18nKSB7IGNvbnRpbnVlIH1cbiAgICAgIHZhciBwcm92aWRlS2V5ID0gaW5qZWN0W2tleV0uZnJvbTtcbiAgICAgIHZhciBzb3VyY2UgPSB2bTtcbiAgICAgIHdoaWxlIChzb3VyY2UpIHtcbiAgICAgICAgaWYgKHNvdXJjZS5fcHJvdmlkZWQgJiYgaGFzT3duKHNvdXJjZS5fcHJvdmlkZWQsIHByb3ZpZGVLZXkpKSB7XG4gICAgICAgICAgcmVzdWx0W2tleV0gPSBzb3VyY2UuX3Byb3ZpZGVkW3Byb3ZpZGVLZXldO1xuICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cbiAgICAgICAgc291cmNlID0gc291cmNlLiRwYXJlbnQ7XG4gICAgICB9XG4gICAgICBpZiAoIXNvdXJjZSkge1xuICAgICAgICBpZiAoJ2RlZmF1bHQnIGluIGluamVjdFtrZXldKSB7XG4gICAgICAgICAgdmFyIHByb3ZpZGVEZWZhdWx0ID0gaW5qZWN0W2tleV0uZGVmYXVsdDtcbiAgICAgICAgICByZXN1bHRba2V5XSA9IHR5cGVvZiBwcm92aWRlRGVmYXVsdCA9PT0gJ2Z1bmN0aW9uJ1xuICAgICAgICAgICAgPyBwcm92aWRlRGVmYXVsdC5jYWxsKHZtKVxuICAgICAgICAgICAgOiBwcm92aWRlRGVmYXVsdDtcbiAgICAgICAgfSBlbHNlIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgd2FybigoXCJJbmplY3Rpb24gXFxcIlwiICsga2V5ICsgXCJcXFwiIG5vdCBmb3VuZFwiKSwgdm0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXN1bHRcbiAgfVxufVxuXG4vKiAgKi9cblxuXG5cbi8qKlxuICogUnVudGltZSBoZWxwZXIgZm9yIHJlc29sdmluZyByYXcgY2hpbGRyZW4gVk5vZGVzIGludG8gYSBzbG90IG9iamVjdC5cbiAqL1xuZnVuY3Rpb24gcmVzb2x2ZVNsb3RzIChcbiAgY2hpbGRyZW4sXG4gIGNvbnRleHRcbikge1xuICBpZiAoIWNoaWxkcmVuIHx8ICFjaGlsZHJlbi5sZW5ndGgpIHtcbiAgICByZXR1cm4ge31cbiAgfVxuICB2YXIgc2xvdHMgPSB7fTtcbiAgZm9yICh2YXIgaSA9IDAsIGwgPSBjaGlsZHJlbi5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICB2YXIgY2hpbGQgPSBjaGlsZHJlbltpXTtcbiAgICB2YXIgZGF0YSA9IGNoaWxkLmRhdGE7XG4gICAgLy8gcmVtb3ZlIHNsb3QgYXR0cmlidXRlIGlmIHRoZSBub2RlIGlzIHJlc29sdmVkIGFzIGEgVnVlIHNsb3Qgbm9kZVxuICAgIGlmIChkYXRhICYmIGRhdGEuYXR0cnMgJiYgZGF0YS5hdHRycy5zbG90KSB7XG4gICAgICBkZWxldGUgZGF0YS5hdHRycy5zbG90O1xuICAgIH1cbiAgICAvLyBuYW1lZCBzbG90cyBzaG91bGQgb25seSBiZSByZXNwZWN0ZWQgaWYgdGhlIHZub2RlIHdhcyByZW5kZXJlZCBpbiB0aGVcbiAgICAvLyBzYW1lIGNvbnRleHQuXG4gICAgaWYgKChjaGlsZC5jb250ZXh0ID09PSBjb250ZXh0IHx8IGNoaWxkLmZuQ29udGV4dCA9PT0gY29udGV4dCkgJiZcbiAgICAgIGRhdGEgJiYgZGF0YS5zbG90ICE9IG51bGxcbiAgICApIHtcbiAgICAgIHZhciBuYW1lID0gZGF0YS5zbG90O1xuICAgICAgdmFyIHNsb3QgPSAoc2xvdHNbbmFtZV0gfHwgKHNsb3RzW25hbWVdID0gW10pKTtcbiAgICAgIGlmIChjaGlsZC50YWcgPT09ICd0ZW1wbGF0ZScpIHtcbiAgICAgICAgc2xvdC5wdXNoLmFwcGx5KHNsb3QsIGNoaWxkLmNoaWxkcmVuIHx8IFtdKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNsb3QucHVzaChjaGlsZCk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGZpeGVkIGJ5IHh4eHh4eCDkuLTml7YgaGFjayDmjokgdW5pLWFwcCDkuK3nmoTlvILmraUgbmFtZSBzbG90IHBhZ2VcbiAgICAgIGlmKGNoaWxkLmFzeW5jTWV0YSAmJiBjaGlsZC5hc3luY01ldGEuZGF0YSAmJiBjaGlsZC5hc3luY01ldGEuZGF0YS5zbG90ID09PSAncGFnZScpe1xuICAgICAgICAoc2xvdHNbJ3BhZ2UnXSB8fCAoc2xvdHNbJ3BhZ2UnXSA9IFtdKSkucHVzaChjaGlsZCk7XG4gICAgICB9ZWxzZXtcbiAgICAgICAgKHNsb3RzLmRlZmF1bHQgfHwgKHNsb3RzLmRlZmF1bHQgPSBbXSkpLnB1c2goY2hpbGQpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICAvLyBpZ25vcmUgc2xvdHMgdGhhdCBjb250YWlucyBvbmx5IHdoaXRlc3BhY2VcbiAgZm9yICh2YXIgbmFtZSQxIGluIHNsb3RzKSB7XG4gICAgaWYgKHNsb3RzW25hbWUkMV0uZXZlcnkoaXNXaGl0ZXNwYWNlKSkge1xuICAgICAgZGVsZXRlIHNsb3RzW25hbWUkMV07XG4gICAgfVxuICB9XG4gIHJldHVybiBzbG90c1xufVxuXG5mdW5jdGlvbiBpc1doaXRlc3BhY2UgKG5vZGUpIHtcbiAgcmV0dXJuIChub2RlLmlzQ29tbWVudCAmJiAhbm9kZS5hc3luY0ZhY3RvcnkpIHx8IG5vZGUudGV4dCA9PT0gJyAnXG59XG5cbi8qICAqL1xuXG5mdW5jdGlvbiBub3JtYWxpemVTY29wZWRTbG90cyAoXG4gIHNsb3RzLFxuICBub3JtYWxTbG90cyxcbiAgcHJldlNsb3RzXG4pIHtcbiAgdmFyIHJlcztcbiAgdmFyIGhhc05vcm1hbFNsb3RzID0gT2JqZWN0LmtleXMobm9ybWFsU2xvdHMpLmxlbmd0aCA+IDA7XG4gIHZhciBpc1N0YWJsZSA9IHNsb3RzID8gISFzbG90cy4kc3RhYmxlIDogIWhhc05vcm1hbFNsb3RzO1xuICB2YXIga2V5ID0gc2xvdHMgJiYgc2xvdHMuJGtleTtcbiAgaWYgKCFzbG90cykge1xuICAgIHJlcyA9IHt9O1xuICB9IGVsc2UgaWYgKHNsb3RzLl9ub3JtYWxpemVkKSB7XG4gICAgLy8gZmFzdCBwYXRoIDE6IGNoaWxkIGNvbXBvbmVudCByZS1yZW5kZXIgb25seSwgcGFyZW50IGRpZCBub3QgY2hhbmdlXG4gICAgcmV0dXJuIHNsb3RzLl9ub3JtYWxpemVkXG4gIH0gZWxzZSBpZiAoXG4gICAgaXNTdGFibGUgJiZcbiAgICBwcmV2U2xvdHMgJiZcbiAgICBwcmV2U2xvdHMgIT09IGVtcHR5T2JqZWN0ICYmXG4gICAga2V5ID09PSBwcmV2U2xvdHMuJGtleSAmJlxuICAgICFoYXNOb3JtYWxTbG90cyAmJlxuICAgICFwcmV2U2xvdHMuJGhhc05vcm1hbFxuICApIHtcbiAgICAvLyBmYXN0IHBhdGggMjogc3RhYmxlIHNjb3BlZCBzbG90cyB3LyBubyBub3JtYWwgc2xvdHMgdG8gcHJveHksXG4gICAgLy8gb25seSBuZWVkIHRvIG5vcm1hbGl6ZSBvbmNlXG4gICAgcmV0dXJuIHByZXZTbG90c1xuICB9IGVsc2Uge1xuICAgIHJlcyA9IHt9O1xuICAgIGZvciAodmFyIGtleSQxIGluIHNsb3RzKSB7XG4gICAgICBpZiAoc2xvdHNba2V5JDFdICYmIGtleSQxWzBdICE9PSAnJCcpIHtcbiAgICAgICAgcmVzW2tleSQxXSA9IG5vcm1hbGl6ZVNjb3BlZFNsb3Qobm9ybWFsU2xvdHMsIGtleSQxLCBzbG90c1trZXkkMV0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICAvLyBleHBvc2Ugbm9ybWFsIHNsb3RzIG9uIHNjb3BlZFNsb3RzXG4gIGZvciAodmFyIGtleSQyIGluIG5vcm1hbFNsb3RzKSB7XG4gICAgaWYgKCEoa2V5JDIgaW4gcmVzKSkge1xuICAgICAgcmVzW2tleSQyXSA9IHByb3h5Tm9ybWFsU2xvdChub3JtYWxTbG90cywga2V5JDIpO1xuICAgIH1cbiAgfVxuICAvLyBhdm9yaWF6IHNlZW1zIHRvIG1vY2sgYSBub24tZXh0ZW5zaWJsZSAkc2NvcGVkU2xvdHMgb2JqZWN0XG4gIC8vIGFuZCB3aGVuIHRoYXQgaXMgcGFzc2VkIGRvd24gdGhpcyB3b3VsZCBjYXVzZSBhbiBlcnJvclxuICBpZiAoc2xvdHMgJiYgT2JqZWN0LmlzRXh0ZW5zaWJsZShzbG90cykpIHtcbiAgICAoc2xvdHMpLl9ub3JtYWxpemVkID0gcmVzO1xuICB9XG4gIGRlZihyZXMsICckc3RhYmxlJywgaXNTdGFibGUpO1xuICBkZWYocmVzLCAnJGtleScsIGtleSk7XG4gIGRlZihyZXMsICckaGFzTm9ybWFsJywgaGFzTm9ybWFsU2xvdHMpO1xuICByZXR1cm4gcmVzXG59XG5cbmZ1bmN0aW9uIG5vcm1hbGl6ZVNjb3BlZFNsb3Qobm9ybWFsU2xvdHMsIGtleSwgZm4pIHtcbiAgdmFyIG5vcm1hbGl6ZWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHJlcyA9IGFyZ3VtZW50cy5sZW5ndGggPyBmbi5hcHBseShudWxsLCBhcmd1bWVudHMpIDogZm4oe30pO1xuICAgIHJlcyA9IHJlcyAmJiB0eXBlb2YgcmVzID09PSAnb2JqZWN0JyAmJiAhQXJyYXkuaXNBcnJheShyZXMpXG4gICAgICA/IFtyZXNdIC8vIHNpbmdsZSB2bm9kZVxuICAgICAgOiBub3JtYWxpemVDaGlsZHJlbihyZXMpO1xuICAgIHJldHVybiByZXMgJiYgKFxuICAgICAgcmVzLmxlbmd0aCA9PT0gMCB8fFxuICAgICAgKHJlcy5sZW5ndGggPT09IDEgJiYgcmVzWzBdLmlzQ29tbWVudCkgLy8gIzk2NThcbiAgICApID8gdW5kZWZpbmVkXG4gICAgICA6IHJlc1xuICB9O1xuICAvLyB0aGlzIGlzIGEgc2xvdCB1c2luZyB0aGUgbmV3IHYtc2xvdCBzeW50YXggd2l0aG91dCBzY29wZS4gYWx0aG91Z2ggaXQgaXNcbiAgLy8gY29tcGlsZWQgYXMgYSBzY29wZWQgc2xvdCwgcmVuZGVyIGZuIHVzZXJzIHdvdWxkIGV4cGVjdCBpdCB0byBiZSBwcmVzZW50XG4gIC8vIG9uIHRoaXMuJHNsb3RzIGJlY2F1c2UgdGhlIHVzYWdlIGlzIHNlbWFudGljYWxseSBhIG5vcm1hbCBzbG90LlxuICBpZiAoZm4ucHJveHkpIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobm9ybWFsU2xvdHMsIGtleSwge1xuICAgICAgZ2V0OiBub3JtYWxpemVkLFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICB9XG4gIHJldHVybiBub3JtYWxpemVkXG59XG5cbmZ1bmN0aW9uIHByb3h5Tm9ybWFsU2xvdChzbG90cywga2V5KSB7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7IHJldHVybiBzbG90c1trZXldOyB9XG59XG5cbi8qICAqL1xuXG4vKipcbiAqIFJ1bnRpbWUgaGVscGVyIGZvciByZW5kZXJpbmcgdi1mb3IgbGlzdHMuXG4gKi9cbmZ1bmN0aW9uIHJlbmRlckxpc3QgKFxuICB2YWwsXG4gIHJlbmRlclxuKSB7XG4gIHZhciByZXQsIGksIGwsIGtleXMsIGtleTtcbiAgaWYgKEFycmF5LmlzQXJyYXkodmFsKSB8fCB0eXBlb2YgdmFsID09PSAnc3RyaW5nJykge1xuICAgIHJldCA9IG5ldyBBcnJheSh2YWwubGVuZ3RoKTtcbiAgICBmb3IgKGkgPSAwLCBsID0gdmFsLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgcmV0W2ldID0gcmVuZGVyKHZhbFtpXSwgaSwgaSwgaSk7IC8vIGZpeGVkIGJ5IHh4eHh4eFxuICAgIH1cbiAgfSBlbHNlIGlmICh0eXBlb2YgdmFsID09PSAnbnVtYmVyJykge1xuICAgIHJldCA9IG5ldyBBcnJheSh2YWwpO1xuICAgIGZvciAoaSA9IDA7IGkgPCB2YWw7IGkrKykge1xuICAgICAgcmV0W2ldID0gcmVuZGVyKGkgKyAxLCBpLCBpLCBpKTsgLy8gZml4ZWQgYnkgeHh4eHh4XG4gICAgfVxuICB9IGVsc2UgaWYgKGlzT2JqZWN0KHZhbCkpIHtcbiAgICBpZiAoaGFzU3ltYm9sICYmIHZhbFtTeW1ib2wuaXRlcmF0b3JdKSB7XG4gICAgICByZXQgPSBbXTtcbiAgICAgIHZhciBpdGVyYXRvciA9IHZhbFtTeW1ib2wuaXRlcmF0b3JdKCk7XG4gICAgICB2YXIgcmVzdWx0ID0gaXRlcmF0b3IubmV4dCgpO1xuICAgICAgd2hpbGUgKCFyZXN1bHQuZG9uZSkge1xuICAgICAgICByZXQucHVzaChyZW5kZXIocmVzdWx0LnZhbHVlLCByZXQubGVuZ3RoLCBpKyssIGkpKTsgLy8gZml4ZWQgYnkgeHh4eHh4XG4gICAgICAgIHJlc3VsdCA9IGl0ZXJhdG9yLm5leHQoKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAga2V5cyA9IE9iamVjdC5rZXlzKHZhbCk7XG4gICAgICByZXQgPSBuZXcgQXJyYXkoa2V5cy5sZW5ndGgpO1xuICAgICAgZm9yIChpID0gMCwgbCA9IGtleXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgIGtleSA9IGtleXNbaV07XG4gICAgICAgIHJldFtpXSA9IHJlbmRlcih2YWxba2V5XSwga2V5LCBpLCBpKTsgLy8gZml4ZWQgYnkgeHh4eHh4XG4gICAgICB9XG4gICAgfVxuICB9XG4gIGlmICghaXNEZWYocmV0KSkge1xuICAgIHJldCA9IFtdO1xuICB9XG4gIChyZXQpLl9pc1ZMaXN0ID0gdHJ1ZTtcbiAgcmV0dXJuIHJldFxufVxuXG4vKiAgKi9cblxuLyoqXG4gKiBSdW50aW1lIGhlbHBlciBmb3IgcmVuZGVyaW5nIDxzbG90PlxuICovXG5mdW5jdGlvbiByZW5kZXJTbG90IChcbiAgbmFtZSxcbiAgZmFsbGJhY2ssXG4gIHByb3BzLFxuICBiaW5kT2JqZWN0XG4pIHtcbiAgdmFyIHNjb3BlZFNsb3RGbiA9IHRoaXMuJHNjb3BlZFNsb3RzW25hbWVdO1xuICB2YXIgbm9kZXM7XG4gIGlmIChzY29wZWRTbG90Rm4pIHsgLy8gc2NvcGVkIHNsb3RcbiAgICBwcm9wcyA9IHByb3BzIHx8IHt9O1xuICAgIGlmIChiaW5kT2JqZWN0KSB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiAhaXNPYmplY3QoYmluZE9iamVjdCkpIHtcbiAgICAgICAgd2FybihcbiAgICAgICAgICAnc2xvdCB2LWJpbmQgd2l0aG91dCBhcmd1bWVudCBleHBlY3RzIGFuIE9iamVjdCcsXG4gICAgICAgICAgdGhpc1xuICAgICAgICApO1xuICAgICAgfVxuICAgICAgcHJvcHMgPSBleHRlbmQoZXh0ZW5kKHt9LCBiaW5kT2JqZWN0KSwgcHJvcHMpO1xuICAgIH1cbiAgICAvLyBmaXhlZCBieSB4eHh4eHggYXBwLXBsdXMgc2NvcGVkU2xvdFxuICAgIG5vZGVzID0gc2NvcGVkU2xvdEZuKHByb3BzLCB0aGlzLCBwcm9wcy5faSkgfHwgZmFsbGJhY2s7XG4gIH0gZWxzZSB7XG4gICAgbm9kZXMgPSB0aGlzLiRzbG90c1tuYW1lXSB8fCBmYWxsYmFjaztcbiAgfVxuXG4gIHZhciB0YXJnZXQgPSBwcm9wcyAmJiBwcm9wcy5zbG90O1xuICBpZiAodGFyZ2V0KSB7XG4gICAgcmV0dXJuIHRoaXMuJGNyZWF0ZUVsZW1lbnQoJ3RlbXBsYXRlJywgeyBzbG90OiB0YXJnZXQgfSwgbm9kZXMpXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIG5vZGVzXG4gIH1cbn1cblxuLyogICovXG5cbi8qKlxuICogUnVudGltZSBoZWxwZXIgZm9yIHJlc29sdmluZyBmaWx0ZXJzXG4gKi9cbmZ1bmN0aW9uIHJlc29sdmVGaWx0ZXIgKGlkKSB7XG4gIHJldHVybiByZXNvbHZlQXNzZXQodGhpcy4kb3B0aW9ucywgJ2ZpbHRlcnMnLCBpZCwgdHJ1ZSkgfHwgaWRlbnRpdHlcbn1cblxuLyogICovXG5cbmZ1bmN0aW9uIGlzS2V5Tm90TWF0Y2ggKGV4cGVjdCwgYWN0dWFsKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KGV4cGVjdCkpIHtcbiAgICByZXR1cm4gZXhwZWN0LmluZGV4T2YoYWN0dWFsKSA9PT0gLTFcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gZXhwZWN0ICE9PSBhY3R1YWxcbiAgfVxufVxuXG4vKipcbiAqIFJ1bnRpbWUgaGVscGVyIGZvciBjaGVja2luZyBrZXlDb2RlcyBmcm9tIGNvbmZpZy5cbiAqIGV4cG9zZWQgYXMgVnVlLnByb3RvdHlwZS5fa1xuICogcGFzc2luZyBpbiBldmVudEtleU5hbWUgYXMgbGFzdCBhcmd1bWVudCBzZXBhcmF0ZWx5IGZvciBiYWNrd2FyZHMgY29tcGF0XG4gKi9cbmZ1bmN0aW9uIGNoZWNrS2V5Q29kZXMgKFxuICBldmVudEtleUNvZGUsXG4gIGtleSxcbiAgYnVpbHRJbktleUNvZGUsXG4gIGV2ZW50S2V5TmFtZSxcbiAgYnVpbHRJbktleU5hbWVcbikge1xuICB2YXIgbWFwcGVkS2V5Q29kZSA9IGNvbmZpZy5rZXlDb2Rlc1trZXldIHx8IGJ1aWx0SW5LZXlDb2RlO1xuICBpZiAoYnVpbHRJbktleU5hbWUgJiYgZXZlbnRLZXlOYW1lICYmICFjb25maWcua2V5Q29kZXNba2V5XSkge1xuICAgIHJldHVybiBpc0tleU5vdE1hdGNoKGJ1aWx0SW5LZXlOYW1lLCBldmVudEtleU5hbWUpXG4gIH0gZWxzZSBpZiAobWFwcGVkS2V5Q29kZSkge1xuICAgIHJldHVybiBpc0tleU5vdE1hdGNoKG1hcHBlZEtleUNvZGUsIGV2ZW50S2V5Q29kZSlcbiAgfSBlbHNlIGlmIChldmVudEtleU5hbWUpIHtcbiAgICByZXR1cm4gaHlwaGVuYXRlKGV2ZW50S2V5TmFtZSkgIT09IGtleVxuICB9XG59XG5cbi8qICAqL1xuXG4vKipcbiAqIFJ1bnRpbWUgaGVscGVyIGZvciBtZXJnaW5nIHYtYmluZD1cIm9iamVjdFwiIGludG8gYSBWTm9kZSdzIGRhdGEuXG4gKi9cbmZ1bmN0aW9uIGJpbmRPYmplY3RQcm9wcyAoXG4gIGRhdGEsXG4gIHRhZyxcbiAgdmFsdWUsXG4gIGFzUHJvcCxcbiAgaXNTeW5jXG4pIHtcbiAgaWYgKHZhbHVlKSB7XG4gICAgaWYgKCFpc09iamVjdCh2YWx1ZSkpIHtcbiAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgd2FybihcbiAgICAgICAgJ3YtYmluZCB3aXRob3V0IGFyZ3VtZW50IGV4cGVjdHMgYW4gT2JqZWN0IG9yIEFycmF5IHZhbHVlJyxcbiAgICAgICAgdGhpc1xuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgIHZhbHVlID0gdG9PYmplY3QodmFsdWUpO1xuICAgICAgfVxuICAgICAgdmFyIGhhc2g7XG4gICAgICB2YXIgbG9vcCA9IGZ1bmN0aW9uICgga2V5ICkge1xuICAgICAgICBpZiAoXG4gICAgICAgICAga2V5ID09PSAnY2xhc3MnIHx8XG4gICAgICAgICAga2V5ID09PSAnc3R5bGUnIHx8XG4gICAgICAgICAgaXNSZXNlcnZlZEF0dHJpYnV0ZShrZXkpXG4gICAgICAgICkge1xuICAgICAgICAgIGhhc2ggPSBkYXRhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHZhciB0eXBlID0gZGF0YS5hdHRycyAmJiBkYXRhLmF0dHJzLnR5cGU7XG4gICAgICAgICAgaGFzaCA9IGFzUHJvcCB8fCBjb25maWcubXVzdFVzZVByb3AodGFnLCB0eXBlLCBrZXkpXG4gICAgICAgICAgICA/IGRhdGEuZG9tUHJvcHMgfHwgKGRhdGEuZG9tUHJvcHMgPSB7fSlcbiAgICAgICAgICAgIDogZGF0YS5hdHRycyB8fCAoZGF0YS5hdHRycyA9IHt9KTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgY2FtZWxpemVkS2V5ID0gY2FtZWxpemUoa2V5KTtcbiAgICAgICAgdmFyIGh5cGhlbmF0ZWRLZXkgPSBoeXBoZW5hdGUoa2V5KTtcbiAgICAgICAgaWYgKCEoY2FtZWxpemVkS2V5IGluIGhhc2gpICYmICEoaHlwaGVuYXRlZEtleSBpbiBoYXNoKSkge1xuICAgICAgICAgIGhhc2hba2V5XSA9IHZhbHVlW2tleV07XG5cbiAgICAgICAgICBpZiAoaXNTeW5jKSB7XG4gICAgICAgICAgICB2YXIgb24gPSBkYXRhLm9uIHx8IChkYXRhLm9uID0ge30pO1xuICAgICAgICAgICAgb25bKFwidXBkYXRlOlwiICsga2V5KV0gPSBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgIHZhbHVlW2tleV0gPSAkZXZlbnQ7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgZm9yICh2YXIga2V5IGluIHZhbHVlKSBsb29wKCBrZXkgKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGRhdGFcbn1cblxuLyogICovXG5cbi8qKlxuICogUnVudGltZSBoZWxwZXIgZm9yIHJlbmRlcmluZyBzdGF0aWMgdHJlZXMuXG4gKi9cbmZ1bmN0aW9uIHJlbmRlclN0YXRpYyAoXG4gIGluZGV4LFxuICBpc0luRm9yXG4pIHtcbiAgdmFyIGNhY2hlZCA9IHRoaXMuX3N0YXRpY1RyZWVzIHx8ICh0aGlzLl9zdGF0aWNUcmVlcyA9IFtdKTtcbiAgdmFyIHRyZWUgPSBjYWNoZWRbaW5kZXhdO1xuICAvLyBpZiBoYXMgYWxyZWFkeS1yZW5kZXJlZCBzdGF0aWMgdHJlZSBhbmQgbm90IGluc2lkZSB2LWZvcixcbiAgLy8gd2UgY2FuIHJldXNlIHRoZSBzYW1lIHRyZWUuXG4gIGlmICh0cmVlICYmICFpc0luRm9yKSB7XG4gICAgcmV0dXJuIHRyZWVcbiAgfVxuICAvLyBvdGhlcndpc2UsIHJlbmRlciBhIGZyZXNoIHRyZWUuXG4gIHRyZWUgPSBjYWNoZWRbaW5kZXhdID0gdGhpcy4kb3B0aW9ucy5zdGF0aWNSZW5kZXJGbnNbaW5kZXhdLmNhbGwoXG4gICAgdGhpcy5fcmVuZGVyUHJveHksXG4gICAgbnVsbCxcbiAgICB0aGlzIC8vIGZvciByZW5kZXIgZm5zIGdlbmVyYXRlZCBmb3IgZnVuY3Rpb25hbCBjb21wb25lbnQgdGVtcGxhdGVzXG4gICk7XG4gIG1hcmtTdGF0aWModHJlZSwgKFwiX19zdGF0aWNfX1wiICsgaW5kZXgpLCBmYWxzZSk7XG4gIHJldHVybiB0cmVlXG59XG5cbi8qKlxuICogUnVudGltZSBoZWxwZXIgZm9yIHYtb25jZS5cbiAqIEVmZmVjdGl2ZWx5IGl0IG1lYW5zIG1hcmtpbmcgdGhlIG5vZGUgYXMgc3RhdGljIHdpdGggYSB1bmlxdWUga2V5LlxuICovXG5mdW5jdGlvbiBtYXJrT25jZSAoXG4gIHRyZWUsXG4gIGluZGV4LFxuICBrZXlcbikge1xuICBtYXJrU3RhdGljKHRyZWUsIChcIl9fb25jZV9fXCIgKyBpbmRleCArIChrZXkgPyAoXCJfXCIgKyBrZXkpIDogXCJcIikpLCB0cnVlKTtcbiAgcmV0dXJuIHRyZWVcbn1cblxuZnVuY3Rpb24gbWFya1N0YXRpYyAoXG4gIHRyZWUsXG4gIGtleSxcbiAgaXNPbmNlXG4pIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkodHJlZSkpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRyZWUubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmICh0cmVlW2ldICYmIHR5cGVvZiB0cmVlW2ldICE9PSAnc3RyaW5nJykge1xuICAgICAgICBtYXJrU3RhdGljTm9kZSh0cmVlW2ldLCAoa2V5ICsgXCJfXCIgKyBpKSwgaXNPbmNlKTtcbiAgICAgIH1cbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgbWFya1N0YXRpY05vZGUodHJlZSwga2V5LCBpc09uY2UpO1xuICB9XG59XG5cbmZ1bmN0aW9uIG1hcmtTdGF0aWNOb2RlIChub2RlLCBrZXksIGlzT25jZSkge1xuICBub2RlLmlzU3RhdGljID0gdHJ1ZTtcbiAgbm9kZS5rZXkgPSBrZXk7XG4gIG5vZGUuaXNPbmNlID0gaXNPbmNlO1xufVxuXG4vKiAgKi9cblxuZnVuY3Rpb24gYmluZE9iamVjdExpc3RlbmVycyAoZGF0YSwgdmFsdWUpIHtcbiAgaWYgKHZhbHVlKSB7XG4gICAgaWYgKCFpc1BsYWluT2JqZWN0KHZhbHVlKSkge1xuICAgICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiB3YXJuKFxuICAgICAgICAndi1vbiB3aXRob3V0IGFyZ3VtZW50IGV4cGVjdHMgYW4gT2JqZWN0IHZhbHVlJyxcbiAgICAgICAgdGhpc1xuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIG9uID0gZGF0YS5vbiA9IGRhdGEub24gPyBleHRlbmQoe30sIGRhdGEub24pIDoge307XG4gICAgICBmb3IgKHZhciBrZXkgaW4gdmFsdWUpIHtcbiAgICAgICAgdmFyIGV4aXN0aW5nID0gb25ba2V5XTtcbiAgICAgICAgdmFyIG91cnMgPSB2YWx1ZVtrZXldO1xuICAgICAgICBvbltrZXldID0gZXhpc3RpbmcgPyBbXS5jb25jYXQoZXhpc3RpbmcsIG91cnMpIDogb3VycztcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIGRhdGFcbn1cblxuLyogICovXG5cbmZ1bmN0aW9uIHJlc29sdmVTY29wZWRTbG90cyAoXG4gIGZucywgLy8gc2VlIGZsb3cvdm5vZGVcbiAgcmVzLFxuICAvLyB0aGUgZm9sbG93aW5nIGFyZSBhZGRlZCBpbiAyLjZcbiAgaGFzRHluYW1pY0tleXMsXG4gIGNvbnRlbnRIYXNoS2V5XG4pIHtcbiAgcmVzID0gcmVzIHx8IHsgJHN0YWJsZTogIWhhc0R5bmFtaWNLZXlzIH07XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgZm5zLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIHNsb3QgPSBmbnNbaV07XG4gICAgaWYgKEFycmF5LmlzQXJyYXkoc2xvdCkpIHtcbiAgICAgIHJlc29sdmVTY29wZWRTbG90cyhzbG90LCByZXMsIGhhc0R5bmFtaWNLZXlzKTtcbiAgICB9IGVsc2UgaWYgKHNsb3QpIHtcbiAgICAgIC8vIG1hcmtlciBmb3IgcmV2ZXJzZSBwcm94eWluZyB2LXNsb3Qgd2l0aG91dCBzY29wZSBvbiB0aGlzLiRzbG90c1xuICAgICAgaWYgKHNsb3QucHJveHkpIHtcbiAgICAgICAgc2xvdC5mbi5wcm94eSA9IHRydWU7XG4gICAgICB9XG4gICAgICByZXNbc2xvdC5rZXldID0gc2xvdC5mbjtcbiAgICB9XG4gIH1cbiAgaWYgKGNvbnRlbnRIYXNoS2V5KSB7XG4gICAgKHJlcykuJGtleSA9IGNvbnRlbnRIYXNoS2V5O1xuICB9XG4gIHJldHVybiByZXNcbn1cblxuLyogICovXG5cbmZ1bmN0aW9uIGJpbmREeW5hbWljS2V5cyAoYmFzZU9iaiwgdmFsdWVzKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgdmFsdWVzLmxlbmd0aDsgaSArPSAyKSB7XG4gICAgdmFyIGtleSA9IHZhbHVlc1tpXTtcbiAgICBpZiAodHlwZW9mIGtleSA9PT0gJ3N0cmluZycgJiYga2V5KSB7XG4gICAgICBiYXNlT2JqW3ZhbHVlc1tpXV0gPSB2YWx1ZXNbaSArIDFdO1xuICAgIH0gZWxzZSBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiBrZXkgIT09ICcnICYmIGtleSAhPT0gbnVsbCkge1xuICAgICAgLy8gbnVsbCBpcyBhIHNwZWNpYWwgdmFsdWUgZm9yIGV4cGxpY2l0bHkgcmVtb3ZpbmcgYSBiaW5kaW5nXG4gICAgICB3YXJuKFxuICAgICAgICAoXCJJbnZhbGlkIHZhbHVlIGZvciBkeW5hbWljIGRpcmVjdGl2ZSBhcmd1bWVudCAoZXhwZWN0ZWQgc3RyaW5nIG9yIG51bGwpOiBcIiArIGtleSksXG4gICAgICAgIHRoaXNcbiAgICAgICk7XG4gICAgfVxuICB9XG4gIHJldHVybiBiYXNlT2JqXG59XG5cbi8vIGhlbHBlciB0byBkeW5hbWljYWxseSBhcHBlbmQgbW9kaWZpZXIgcnVudGltZSBtYXJrZXJzIHRvIGV2ZW50IG5hbWVzLlxuLy8gZW5zdXJlIG9ubHkgYXBwZW5kIHdoZW4gdmFsdWUgaXMgYWxyZWFkeSBzdHJpbmcsIG90aGVyd2lzZSBpdCB3aWxsIGJlIGNhc3Rcbi8vIHRvIHN0cmluZyBhbmQgY2F1c2UgdGhlIHR5cGUgY2hlY2sgdG8gbWlzcy5cbmZ1bmN0aW9uIHByZXBlbmRNb2RpZmllciAodmFsdWUsIHN5bWJvbCkge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyA/IHN5bWJvbCArIHZhbHVlIDogdmFsdWVcbn1cblxuLyogICovXG5cbmZ1bmN0aW9uIGluc3RhbGxSZW5kZXJIZWxwZXJzICh0YXJnZXQpIHtcbiAgdGFyZ2V0Ll9vID0gbWFya09uY2U7XG4gIHRhcmdldC5fbiA9IHRvTnVtYmVyO1xuICB0YXJnZXQuX3MgPSB0b1N0cmluZztcbiAgdGFyZ2V0Ll9sID0gcmVuZGVyTGlzdDtcbiAgdGFyZ2V0Ll90ID0gcmVuZGVyU2xvdDtcbiAgdGFyZ2V0Ll9xID0gbG9vc2VFcXVhbDtcbiAgdGFyZ2V0Ll9pID0gbG9vc2VJbmRleE9mO1xuICB0YXJnZXQuX20gPSByZW5kZXJTdGF0aWM7XG4gIHRhcmdldC5fZiA9IHJlc29sdmVGaWx0ZXI7XG4gIHRhcmdldC5fayA9IGNoZWNrS2V5Q29kZXM7XG4gIHRhcmdldC5fYiA9IGJpbmRPYmplY3RQcm9wcztcbiAgdGFyZ2V0Ll92ID0gY3JlYXRlVGV4dFZOb2RlO1xuICB0YXJnZXQuX2UgPSBjcmVhdGVFbXB0eVZOb2RlO1xuICB0YXJnZXQuX3UgPSByZXNvbHZlU2NvcGVkU2xvdHM7XG4gIHRhcmdldC5fZyA9IGJpbmRPYmplY3RMaXN0ZW5lcnM7XG4gIHRhcmdldC5fZCA9IGJpbmREeW5hbWljS2V5cztcbiAgdGFyZ2V0Ll9wID0gcHJlcGVuZE1vZGlmaWVyO1xufVxuXG4vKiAgKi9cblxuZnVuY3Rpb24gRnVuY3Rpb25hbFJlbmRlckNvbnRleHQgKFxuICBkYXRhLFxuICBwcm9wcyxcbiAgY2hpbGRyZW4sXG4gIHBhcmVudCxcbiAgQ3RvclxuKSB7XG4gIHZhciB0aGlzJDEgPSB0aGlzO1xuXG4gIHZhciBvcHRpb25zID0gQ3Rvci5vcHRpb25zO1xuICAvLyBlbnN1cmUgdGhlIGNyZWF0ZUVsZW1lbnQgZnVuY3Rpb24gaW4gZnVuY3Rpb25hbCBjb21wb25lbnRzXG4gIC8vIGdldHMgYSB1bmlxdWUgY29udGV4dCAtIHRoaXMgaXMgbmVjZXNzYXJ5IGZvciBjb3JyZWN0IG5hbWVkIHNsb3QgY2hlY2tcbiAgdmFyIGNvbnRleHRWbTtcbiAgaWYgKGhhc093bihwYXJlbnQsICdfdWlkJykpIHtcbiAgICBjb250ZXh0Vm0gPSBPYmplY3QuY3JlYXRlKHBhcmVudCk7XG4gICAgLy8gJGZsb3ctZGlzYWJsZS1saW5lXG4gICAgY29udGV4dFZtLl9vcmlnaW5hbCA9IHBhcmVudDtcbiAgfSBlbHNlIHtcbiAgICAvLyB0aGUgY29udGV4dCB2bSBwYXNzZWQgaW4gaXMgYSBmdW5jdGlvbmFsIGNvbnRleHQgYXMgd2VsbC5cbiAgICAvLyBpbiB0aGlzIGNhc2Ugd2Ugd2FudCB0byBtYWtlIHN1cmUgd2UgYXJlIGFibGUgdG8gZ2V0IGEgaG9sZCB0byB0aGVcbiAgICAvLyByZWFsIGNvbnRleHQgaW5zdGFuY2UuXG4gICAgY29udGV4dFZtID0gcGFyZW50O1xuICAgIC8vICRmbG93LWRpc2FibGUtbGluZVxuICAgIHBhcmVudCA9IHBhcmVudC5fb3JpZ2luYWw7XG4gIH1cbiAgdmFyIGlzQ29tcGlsZWQgPSBpc1RydWUob3B0aW9ucy5fY29tcGlsZWQpO1xuICB2YXIgbmVlZE5vcm1hbGl6YXRpb24gPSAhaXNDb21waWxlZDtcblxuICB0aGlzLmRhdGEgPSBkYXRhO1xuICB0aGlzLnByb3BzID0gcHJvcHM7XG4gIHRoaXMuY2hpbGRyZW4gPSBjaGlsZHJlbjtcbiAgdGhpcy5wYXJlbnQgPSBwYXJlbnQ7XG4gIHRoaXMubGlzdGVuZXJzID0gZGF0YS5vbiB8fCBlbXB0eU9iamVjdDtcbiAgdGhpcy5pbmplY3Rpb25zID0gcmVzb2x2ZUluamVjdChvcHRpb25zLmluamVjdCwgcGFyZW50KTtcbiAgdGhpcy5zbG90cyA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoIXRoaXMkMS4kc2xvdHMpIHtcbiAgICAgIG5vcm1hbGl6ZVNjb3BlZFNsb3RzKFxuICAgICAgICBkYXRhLnNjb3BlZFNsb3RzLFxuICAgICAgICB0aGlzJDEuJHNsb3RzID0gcmVzb2x2ZVNsb3RzKGNoaWxkcmVuLCBwYXJlbnQpXG4gICAgICApO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcyQxLiRzbG90c1xuICB9O1xuXG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCAnc2NvcGVkU2xvdHMnLCAoe1xuICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQgKCkge1xuICAgICAgcmV0dXJuIG5vcm1hbGl6ZVNjb3BlZFNsb3RzKGRhdGEuc2NvcGVkU2xvdHMsIHRoaXMuc2xvdHMoKSlcbiAgICB9XG4gIH0pKTtcblxuICAvLyBzdXBwb3J0IGZvciBjb21waWxlZCBmdW5jdGlvbmFsIHRlbXBsYXRlXG4gIGlmIChpc0NvbXBpbGVkKSB7XG4gICAgLy8gZXhwb3NpbmcgJG9wdGlvbnMgZm9yIHJlbmRlclN0YXRpYygpXG4gICAgdGhpcy4kb3B0aW9ucyA9IG9wdGlvbnM7XG4gICAgLy8gcHJlLXJlc29sdmUgc2xvdHMgZm9yIHJlbmRlclNsb3QoKVxuICAgIHRoaXMuJHNsb3RzID0gdGhpcy5zbG90cygpO1xuICAgIHRoaXMuJHNjb3BlZFNsb3RzID0gbm9ybWFsaXplU2NvcGVkU2xvdHMoZGF0YS5zY29wZWRTbG90cywgdGhpcy4kc2xvdHMpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuX3Njb3BlSWQpIHtcbiAgICB0aGlzLl9jID0gZnVuY3Rpb24gKGEsIGIsIGMsIGQpIHtcbiAgICAgIHZhciB2bm9kZSA9IGNyZWF0ZUVsZW1lbnQoY29udGV4dFZtLCBhLCBiLCBjLCBkLCBuZWVkTm9ybWFsaXphdGlvbik7XG4gICAgICBpZiAodm5vZGUgJiYgIUFycmF5LmlzQXJyYXkodm5vZGUpKSB7XG4gICAgICAgIHZub2RlLmZuU2NvcGVJZCA9IG9wdGlvbnMuX3Njb3BlSWQ7XG4gICAgICAgIHZub2RlLmZuQ29udGV4dCA9IHBhcmVudDtcbiAgICAgIH1cbiAgICAgIHJldHVybiB2bm9kZVxuICAgIH07XG4gIH0gZWxzZSB7XG4gICAgdGhpcy5fYyA9IGZ1bmN0aW9uIChhLCBiLCBjLCBkKSB7IHJldHVybiBjcmVhdGVFbGVtZW50KGNvbnRleHRWbSwgYSwgYiwgYywgZCwgbmVlZE5vcm1hbGl6YXRpb24pOyB9O1xuICB9XG59XG5cbmluc3RhbGxSZW5kZXJIZWxwZXJzKEZ1bmN0aW9uYWxSZW5kZXJDb250ZXh0LnByb3RvdHlwZSk7XG5cbmZ1bmN0aW9uIGNyZWF0ZUZ1bmN0aW9uYWxDb21wb25lbnQgKFxuICBDdG9yLFxuICBwcm9wc0RhdGEsXG4gIGRhdGEsXG4gIGNvbnRleHRWbSxcbiAgY2hpbGRyZW5cbikge1xuICB2YXIgb3B0aW9ucyA9IEN0b3Iub3B0aW9ucztcbiAgdmFyIHByb3BzID0ge307XG4gIHZhciBwcm9wT3B0aW9ucyA9IG9wdGlvbnMucHJvcHM7XG4gIGlmIChpc0RlZihwcm9wT3B0aW9ucykpIHtcbiAgICBmb3IgKHZhciBrZXkgaW4gcHJvcE9wdGlvbnMpIHtcbiAgICAgIHByb3BzW2tleV0gPSB2YWxpZGF0ZVByb3Aoa2V5LCBwcm9wT3B0aW9ucywgcHJvcHNEYXRhIHx8IGVtcHR5T2JqZWN0KTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgaWYgKGlzRGVmKGRhdGEuYXR0cnMpKSB7IG1lcmdlUHJvcHMocHJvcHMsIGRhdGEuYXR0cnMpOyB9XG4gICAgaWYgKGlzRGVmKGRhdGEucHJvcHMpKSB7IG1lcmdlUHJvcHMocHJvcHMsIGRhdGEucHJvcHMpOyB9XG4gIH1cblxuICB2YXIgcmVuZGVyQ29udGV4dCA9IG5ldyBGdW5jdGlvbmFsUmVuZGVyQ29udGV4dChcbiAgICBkYXRhLFxuICAgIHByb3BzLFxuICAgIGNoaWxkcmVuLFxuICAgIGNvbnRleHRWbSxcbiAgICBDdG9yXG4gICk7XG5cbiAgdmFyIHZub2RlID0gb3B0aW9ucy5yZW5kZXIuY2FsbChudWxsLCByZW5kZXJDb250ZXh0Ll9jLCByZW5kZXJDb250ZXh0KTtcblxuICBpZiAodm5vZGUgaW5zdGFuY2VvZiBWTm9kZSkge1xuICAgIHJldHVybiBjbG9uZUFuZE1hcmtGdW5jdGlvbmFsUmVzdWx0KHZub2RlLCBkYXRhLCByZW5kZXJDb250ZXh0LnBhcmVudCwgb3B0aW9ucywgcmVuZGVyQ29udGV4dClcbiAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KHZub2RlKSkge1xuICAgIHZhciB2bm9kZXMgPSBub3JtYWxpemVDaGlsZHJlbih2bm9kZSkgfHwgW107XG4gICAgdmFyIHJlcyA9IG5ldyBBcnJheSh2bm9kZXMubGVuZ3RoKTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHZub2Rlcy5sZW5ndGg7IGkrKykge1xuICAgICAgcmVzW2ldID0gY2xvbmVBbmRNYXJrRnVuY3Rpb25hbFJlc3VsdCh2bm9kZXNbaV0sIGRhdGEsIHJlbmRlckNvbnRleHQucGFyZW50LCBvcHRpb25zLCByZW5kZXJDb250ZXh0KTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc1xuICB9XG59XG5cbmZ1bmN0aW9uIGNsb25lQW5kTWFya0Z1bmN0aW9uYWxSZXN1bHQgKHZub2RlLCBkYXRhLCBjb250ZXh0Vm0sIG9wdGlvbnMsIHJlbmRlckNvbnRleHQpIHtcbiAgLy8gIzc4MTcgY2xvbmUgbm9kZSBiZWZvcmUgc2V0dGluZyBmbkNvbnRleHQsIG90aGVyd2lzZSBpZiB0aGUgbm9kZSBpcyByZXVzZWRcbiAgLy8gKGUuZy4gaXQgd2FzIGZyb20gYSBjYWNoZWQgbm9ybWFsIHNsb3QpIHRoZSBmbkNvbnRleHQgY2F1c2VzIG5hbWVkIHNsb3RzXG4gIC8vIHRoYXQgc2hvdWxkIG5vdCBiZSBtYXRjaGVkIHRvIG1hdGNoLlxuICB2YXIgY2xvbmUgPSBjbG9uZVZOb2RlKHZub2RlKTtcbiAgY2xvbmUuZm5Db250ZXh0ID0gY29udGV4dFZtO1xuICBjbG9uZS5mbk9wdGlvbnMgPSBvcHRpb25zO1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIChjbG9uZS5kZXZ0b29sc01ldGEgPSBjbG9uZS5kZXZ0b29sc01ldGEgfHwge30pLnJlbmRlckNvbnRleHQgPSByZW5kZXJDb250ZXh0O1xuICB9XG4gIGlmIChkYXRhLnNsb3QpIHtcbiAgICAoY2xvbmUuZGF0YSB8fCAoY2xvbmUuZGF0YSA9IHt9KSkuc2xvdCA9IGRhdGEuc2xvdDtcbiAgfVxuICByZXR1cm4gY2xvbmVcbn1cblxuZnVuY3Rpb24gbWVyZ2VQcm9wcyAodG8sIGZyb20pIHtcbiAgZm9yICh2YXIga2V5IGluIGZyb20pIHtcbiAgICB0b1tjYW1lbGl6ZShrZXkpXSA9IGZyb21ba2V5XTtcbiAgfVxufVxuXG4vKiAgKi9cblxuLyogICovXG5cbi8qICAqL1xuXG4vKiAgKi9cblxuLy8gaW5saW5lIGhvb2tzIHRvIGJlIGludm9rZWQgb24gY29tcG9uZW50IFZOb2RlcyBkdXJpbmcgcGF0Y2hcbnZhciBjb21wb25lbnRWTm9kZUhvb2tzID0ge1xuICBpbml0OiBmdW5jdGlvbiBpbml0ICh2bm9kZSwgaHlkcmF0aW5nKSB7XG4gICAgaWYgKFxuICAgICAgdm5vZGUuY29tcG9uZW50SW5zdGFuY2UgJiZcbiAgICAgICF2bm9kZS5jb21wb25lbnRJbnN0YW5jZS5faXNEZXN0cm95ZWQgJiZcbiAgICAgIHZub2RlLmRhdGEua2VlcEFsaXZlXG4gICAgKSB7XG4gICAgICAvLyBrZXB0LWFsaXZlIGNvbXBvbmVudHMsIHRyZWF0IGFzIGEgcGF0Y2hcbiAgICAgIHZhciBtb3VudGVkTm9kZSA9IHZub2RlOyAvLyB3b3JrIGFyb3VuZCBmbG93XG4gICAgICBjb21wb25lbnRWTm9kZUhvb2tzLnByZXBhdGNoKG1vdW50ZWROb2RlLCBtb3VudGVkTm9kZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBjaGlsZCA9IHZub2RlLmNvbXBvbmVudEluc3RhbmNlID0gY3JlYXRlQ29tcG9uZW50SW5zdGFuY2VGb3JWbm9kZShcbiAgICAgICAgdm5vZGUsXG4gICAgICAgIGFjdGl2ZUluc3RhbmNlXG4gICAgICApO1xuICAgICAgY2hpbGQuJG1vdW50KGh5ZHJhdGluZyA/IHZub2RlLmVsbSA6IHVuZGVmaW5lZCwgaHlkcmF0aW5nKTtcbiAgICB9XG4gIH0sXG5cbiAgcHJlcGF0Y2g6IGZ1bmN0aW9uIHByZXBhdGNoIChvbGRWbm9kZSwgdm5vZGUpIHtcbiAgICB2YXIgb3B0aW9ucyA9IHZub2RlLmNvbXBvbmVudE9wdGlvbnM7XG4gICAgdmFyIGNoaWxkID0gdm5vZGUuY29tcG9uZW50SW5zdGFuY2UgPSBvbGRWbm9kZS5jb21wb25lbnRJbnN0YW5jZTtcbiAgICB1cGRhdGVDaGlsZENvbXBvbmVudChcbiAgICAgIGNoaWxkLFxuICAgICAgb3B0aW9ucy5wcm9wc0RhdGEsIC8vIHVwZGF0ZWQgcHJvcHNcbiAgICAgIG9wdGlvbnMubGlzdGVuZXJzLCAvLyB1cGRhdGVkIGxpc3RlbmVyc1xuICAgICAgdm5vZGUsIC8vIG5ldyBwYXJlbnQgdm5vZGVcbiAgICAgIG9wdGlvbnMuY2hpbGRyZW4gLy8gbmV3IGNoaWxkcmVuXG4gICAgKTtcbiAgfSxcblxuICBpbnNlcnQ6IGZ1bmN0aW9uIGluc2VydCAodm5vZGUpIHtcbiAgICB2YXIgY29udGV4dCA9IHZub2RlLmNvbnRleHQ7XG4gICAgdmFyIGNvbXBvbmVudEluc3RhbmNlID0gdm5vZGUuY29tcG9uZW50SW5zdGFuY2U7XG4gICAgaWYgKCFjb21wb25lbnRJbnN0YW5jZS5faXNNb3VudGVkKSB7XG4gICAgICBjYWxsSG9vayhjb21wb25lbnRJbnN0YW5jZSwgJ29uU2VydmljZUNyZWF0ZWQnKTtcbiAgICAgIGNhbGxIb29rKGNvbXBvbmVudEluc3RhbmNlLCAnb25TZXJ2aWNlQXR0YWNoZWQnKTtcbiAgICAgIGNvbXBvbmVudEluc3RhbmNlLl9pc01vdW50ZWQgPSB0cnVlO1xuICAgICAgY2FsbEhvb2soY29tcG9uZW50SW5zdGFuY2UsICdtb3VudGVkJyk7XG4gICAgfVxuICAgIGlmICh2bm9kZS5kYXRhLmtlZXBBbGl2ZSkge1xuICAgICAgaWYgKGNvbnRleHQuX2lzTW91bnRlZCkge1xuICAgICAgICAvLyB2dWUtcm91dGVyIzEyMTJcbiAgICAgICAgLy8gRHVyaW5nIHVwZGF0ZXMsIGEga2VwdC1hbGl2ZSBjb21wb25lbnQncyBjaGlsZCBjb21wb25lbnRzIG1heVxuICAgICAgICAvLyBjaGFuZ2UsIHNvIGRpcmVjdGx5IHdhbGtpbmcgdGhlIHRyZWUgaGVyZSBtYXkgY2FsbCBhY3RpdmF0ZWQgaG9va3NcbiAgICAgICAgLy8gb24gaW5jb3JyZWN0IGNoaWxkcmVuLiBJbnN0ZWFkIHdlIHB1c2ggdGhlbSBpbnRvIGEgcXVldWUgd2hpY2ggd2lsbFxuICAgICAgICAvLyBiZSBwcm9jZXNzZWQgYWZ0ZXIgdGhlIHdob2xlIHBhdGNoIHByb2Nlc3MgZW5kZWQuXG4gICAgICAgIHF1ZXVlQWN0aXZhdGVkQ29tcG9uZW50KGNvbXBvbmVudEluc3RhbmNlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGFjdGl2YXRlQ2hpbGRDb21wb25lbnQoY29tcG9uZW50SW5zdGFuY2UsIHRydWUgLyogZGlyZWN0ICovKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sXG5cbiAgZGVzdHJveTogZnVuY3Rpb24gZGVzdHJveSAodm5vZGUpIHtcbiAgICB2YXIgY29tcG9uZW50SW5zdGFuY2UgPSB2bm9kZS5jb21wb25lbnRJbnN0YW5jZTtcbiAgICBpZiAoIWNvbXBvbmVudEluc3RhbmNlLl9pc0Rlc3Ryb3llZCkge1xuICAgICAgaWYgKCF2bm9kZS5kYXRhLmtlZXBBbGl2ZSkge1xuICAgICAgICBjb21wb25lbnRJbnN0YW5jZS4kZGVzdHJveSgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZGVhY3RpdmF0ZUNoaWxkQ29tcG9uZW50KGNvbXBvbmVudEluc3RhbmNlLCB0cnVlIC8qIGRpcmVjdCAqLyk7XG4gICAgICB9XG4gICAgfVxuICB9XG59O1xuXG52YXIgaG9va3NUb01lcmdlID0gT2JqZWN0LmtleXMoY29tcG9uZW50Vk5vZGVIb29rcyk7XG5cbmZ1bmN0aW9uIGNyZWF0ZUNvbXBvbmVudCAoXG4gIEN0b3IsXG4gIGRhdGEsXG4gIGNvbnRleHQsXG4gIGNoaWxkcmVuLFxuICB0YWdcbikge1xuICBpZiAoaXNVbmRlZihDdG9yKSkge1xuICAgIHJldHVyblxuICB9XG5cbiAgdmFyIGJhc2VDdG9yID0gY29udGV4dC4kb3B0aW9ucy5fYmFzZTtcblxuICAvLyBwbGFpbiBvcHRpb25zIG9iamVjdDogdHVybiBpdCBpbnRvIGEgY29uc3RydWN0b3JcbiAgaWYgKGlzT2JqZWN0KEN0b3IpKSB7XG4gICAgQ3RvciA9IGJhc2VDdG9yLmV4dGVuZChDdG9yKTtcbiAgfVxuXG4gIC8vIGlmIGF0IHRoaXMgc3RhZ2UgaXQncyBub3QgYSBjb25zdHJ1Y3RvciBvciBhbiBhc3luYyBjb21wb25lbnQgZmFjdG9yeSxcbiAgLy8gcmVqZWN0LlxuICBpZiAodHlwZW9mIEN0b3IgIT09ICdmdW5jdGlvbicpIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgd2FybigoXCJJbnZhbGlkIENvbXBvbmVudCBkZWZpbml0aW9uOiBcIiArIChTdHJpbmcoQ3RvcikpKSwgY29udGV4dCk7XG4gICAgfVxuICAgIHJldHVyblxuICB9XG5cbiAgLy8gYXN5bmMgY29tcG9uZW50XG4gIHZhciBhc3luY0ZhY3Rvcnk7XG4gIGlmIChpc1VuZGVmKEN0b3IuY2lkKSkge1xuICAgIGFzeW5jRmFjdG9yeSA9IEN0b3I7XG4gICAgQ3RvciA9IHJlc29sdmVBc3luY0NvbXBvbmVudChhc3luY0ZhY3RvcnksIGJhc2VDdG9yKTtcbiAgICBpZiAoQ3RvciA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAvLyByZXR1cm4gYSBwbGFjZWhvbGRlciBub2RlIGZvciBhc3luYyBjb21wb25lbnQsIHdoaWNoIGlzIHJlbmRlcmVkXG4gICAgICAvLyBhcyBhIGNvbW1lbnQgbm9kZSBidXQgcHJlc2VydmVzIGFsbCB0aGUgcmF3IGluZm9ybWF0aW9uIGZvciB0aGUgbm9kZS5cbiAgICAgIC8vIHRoZSBpbmZvcm1hdGlvbiB3aWxsIGJlIHVzZWQgZm9yIGFzeW5jIHNlcnZlci1yZW5kZXJpbmcgYW5kIGh5ZHJhdGlvbi5cbiAgICAgIHJldHVybiBjcmVhdGVBc3luY1BsYWNlaG9sZGVyKFxuICAgICAgICBhc3luY0ZhY3RvcnksXG4gICAgICAgIGRhdGEsXG4gICAgICAgIGNvbnRleHQsXG4gICAgICAgIGNoaWxkcmVuLFxuICAgICAgICB0YWdcbiAgICAgIClcbiAgICB9XG4gIH1cblxuICBkYXRhID0gZGF0YSB8fCB7fTtcblxuICAvLyByZXNvbHZlIGNvbnN0cnVjdG9yIG9wdGlvbnMgaW4gY2FzZSBnbG9iYWwgbWl4aW5zIGFyZSBhcHBsaWVkIGFmdGVyXG4gIC8vIGNvbXBvbmVudCBjb25zdHJ1Y3RvciBjcmVhdGlvblxuICByZXNvbHZlQ29uc3RydWN0b3JPcHRpb25zKEN0b3IpO1xuXG4gIC8vIHRyYW5zZm9ybSBjb21wb25lbnQgdi1tb2RlbCBkYXRhIGludG8gcHJvcHMgJiBldmVudHNcbiAgaWYgKGlzRGVmKGRhdGEubW9kZWwpKSB7XG4gICAgdHJhbnNmb3JtTW9kZWwoQ3Rvci5vcHRpb25zLCBkYXRhKTtcbiAgfVxuXG4gIC8vIGV4dHJhY3QgcHJvcHNcbiAgdmFyIHByb3BzRGF0YSA9IGV4dHJhY3RQcm9wc0Zyb21WTm9kZURhdGEoZGF0YSwgQ3RvciwgdGFnLCBjb250ZXh0KTsgLy8gZml4ZWQgYnkgeHh4eHh4XG5cbiAgLy8gZnVuY3Rpb25hbCBjb21wb25lbnRcbiAgaWYgKGlzVHJ1ZShDdG9yLm9wdGlvbnMuZnVuY3Rpb25hbCkpIHtcbiAgICByZXR1cm4gY3JlYXRlRnVuY3Rpb25hbENvbXBvbmVudChDdG9yLCBwcm9wc0RhdGEsIGRhdGEsIGNvbnRleHQsIGNoaWxkcmVuKVxuICB9XG5cbiAgLy8gZXh0cmFjdCBsaXN0ZW5lcnMsIHNpbmNlIHRoZXNlIG5lZWRzIHRvIGJlIHRyZWF0ZWQgYXNcbiAgLy8gY2hpbGQgY29tcG9uZW50IGxpc3RlbmVycyBpbnN0ZWFkIG9mIERPTSBsaXN0ZW5lcnNcbiAgdmFyIGxpc3RlbmVycyA9IGRhdGEub247XG4gIC8vIHJlcGxhY2Ugd2l0aCBsaXN0ZW5lcnMgd2l0aCAubmF0aXZlIG1vZGlmaWVyXG4gIC8vIHNvIGl0IGdldHMgcHJvY2Vzc2VkIGR1cmluZyBwYXJlbnQgY29tcG9uZW50IHBhdGNoLlxuICBkYXRhLm9uID0gZGF0YS5uYXRpdmVPbjtcblxuICBpZiAoaXNUcnVlKEN0b3Iub3B0aW9ucy5hYnN0cmFjdCkpIHtcbiAgICAvLyBhYnN0cmFjdCBjb21wb25lbnRzIGRvIG5vdCBrZWVwIGFueXRoaW5nXG4gICAgLy8gb3RoZXIgdGhhbiBwcm9wcyAmIGxpc3RlbmVycyAmIHNsb3RcblxuICAgIC8vIHdvcmsgYXJvdW5kIGZsb3dcbiAgICB2YXIgc2xvdCA9IGRhdGEuc2xvdDtcbiAgICBkYXRhID0ge307XG4gICAgaWYgKHNsb3QpIHtcbiAgICAgIGRhdGEuc2xvdCA9IHNsb3Q7XG4gICAgfVxuICB9XG5cbiAgLy8gaW5zdGFsbCBjb21wb25lbnQgbWFuYWdlbWVudCBob29rcyBvbnRvIHRoZSBwbGFjZWhvbGRlciBub2RlXG4gIGluc3RhbGxDb21wb25lbnRIb29rcyhkYXRhKTtcblxuICAvLyByZXR1cm4gYSBwbGFjZWhvbGRlciB2bm9kZVxuICB2YXIgbmFtZSA9IEN0b3Iub3B0aW9ucy5uYW1lIHx8IHRhZztcbiAgdmFyIHZub2RlID0gbmV3IFZOb2RlKFxuICAgIChcInZ1ZS1jb21wb25lbnQtXCIgKyAoQ3Rvci5jaWQpICsgKG5hbWUgPyAoXCItXCIgKyBuYW1lKSA6ICcnKSksXG4gICAgZGF0YSwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgY29udGV4dCxcbiAgICB7IEN0b3I6IEN0b3IsIHByb3BzRGF0YTogcHJvcHNEYXRhLCBsaXN0ZW5lcnM6IGxpc3RlbmVycywgdGFnOiB0YWcsIGNoaWxkcmVuOiBjaGlsZHJlbiB9LFxuICAgIGFzeW5jRmFjdG9yeVxuICApO1xuXG4gIHJldHVybiB2bm9kZVxufVxuXG5mdW5jdGlvbiBjcmVhdGVDb21wb25lbnRJbnN0YW5jZUZvclZub2RlIChcbiAgdm5vZGUsIC8vIHdlIGtub3cgaXQncyBNb3VudGVkQ29tcG9uZW50Vk5vZGUgYnV0IGZsb3cgZG9lc24ndFxuICBwYXJlbnQgLy8gYWN0aXZlSW5zdGFuY2UgaW4gbGlmZWN5Y2xlIHN0YXRlXG4pIHtcbiAgdmFyIG9wdGlvbnMgPSB7XG4gICAgX2lzQ29tcG9uZW50OiB0cnVlLFxuICAgIF9wYXJlbnRWbm9kZTogdm5vZGUsXG4gICAgcGFyZW50OiBwYXJlbnRcbiAgfTtcbiAgLy8gY2hlY2sgaW5saW5lLXRlbXBsYXRlIHJlbmRlciBmdW5jdGlvbnNcbiAgdmFyIGlubGluZVRlbXBsYXRlID0gdm5vZGUuZGF0YS5pbmxpbmVUZW1wbGF0ZTtcbiAgaWYgKGlzRGVmKGlubGluZVRlbXBsYXRlKSkge1xuICAgIG9wdGlvbnMucmVuZGVyID0gaW5saW5lVGVtcGxhdGUucmVuZGVyO1xuICAgIG9wdGlvbnMuc3RhdGljUmVuZGVyRm5zID0gaW5saW5lVGVtcGxhdGUuc3RhdGljUmVuZGVyRm5zO1xuICB9XG4gIHJldHVybiBuZXcgdm5vZGUuY29tcG9uZW50T3B0aW9ucy5DdG9yKG9wdGlvbnMpXG59XG5cbmZ1bmN0aW9uIGluc3RhbGxDb21wb25lbnRIb29rcyAoZGF0YSkge1xuICB2YXIgaG9va3MgPSBkYXRhLmhvb2sgfHwgKGRhdGEuaG9vayA9IHt9KTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBob29rc1RvTWVyZ2UubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIga2V5ID0gaG9va3NUb01lcmdlW2ldO1xuICAgIHZhciBleGlzdGluZyA9IGhvb2tzW2tleV07XG4gICAgdmFyIHRvTWVyZ2UgPSBjb21wb25lbnRWTm9kZUhvb2tzW2tleV07XG4gICAgaWYgKGV4aXN0aW5nICE9PSB0b01lcmdlICYmICEoZXhpc3RpbmcgJiYgZXhpc3RpbmcuX21lcmdlZCkpIHtcbiAgICAgIGhvb2tzW2tleV0gPSBleGlzdGluZyA/IG1lcmdlSG9vayQxKHRvTWVyZ2UsIGV4aXN0aW5nKSA6IHRvTWVyZ2U7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIG1lcmdlSG9vayQxIChmMSwgZjIpIHtcbiAgdmFyIG1lcmdlZCA9IGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgLy8gZmxvdyBjb21wbGFpbnMgYWJvdXQgZXh0cmEgYXJncyB3aGljaCBpcyB3aHkgd2UgdXNlIGFueVxuICAgIGYxKGEsIGIpO1xuICAgIGYyKGEsIGIpO1xuICB9O1xuICBtZXJnZWQuX21lcmdlZCA9IHRydWU7XG4gIHJldHVybiBtZXJnZWRcbn1cblxuLy8gdHJhbnNmb3JtIGNvbXBvbmVudCB2LW1vZGVsIGluZm8gKHZhbHVlIGFuZCBjYWxsYmFjaykgaW50b1xuLy8gcHJvcCBhbmQgZXZlbnQgaGFuZGxlciByZXNwZWN0aXZlbHkuXG5mdW5jdGlvbiB0cmFuc2Zvcm1Nb2RlbCAob3B0aW9ucywgZGF0YSkge1xuICB2YXIgcHJvcCA9IChvcHRpb25zLm1vZGVsICYmIG9wdGlvbnMubW9kZWwucHJvcCkgfHwgJ3ZhbHVlJztcbiAgdmFyIGV2ZW50ID0gKG9wdGlvbnMubW9kZWwgJiYgb3B0aW9ucy5tb2RlbC5ldmVudCkgfHwgJ2lucHV0J1xuICA7KGRhdGEuYXR0cnMgfHwgKGRhdGEuYXR0cnMgPSB7fSkpW3Byb3BdID0gZGF0YS5tb2RlbC52YWx1ZTtcbiAgdmFyIG9uID0gZGF0YS5vbiB8fCAoZGF0YS5vbiA9IHt9KTtcbiAgdmFyIGV4aXN0aW5nID0gb25bZXZlbnRdO1xuICB2YXIgY2FsbGJhY2sgPSBkYXRhLm1vZGVsLmNhbGxiYWNrO1xuICBpZiAoaXNEZWYoZXhpc3RpbmcpKSB7XG4gICAgaWYgKFxuICAgICAgQXJyYXkuaXNBcnJheShleGlzdGluZylcbiAgICAgICAgPyBleGlzdGluZy5pbmRleE9mKGNhbGxiYWNrKSA9PT0gLTFcbiAgICAgICAgOiBleGlzdGluZyAhPT0gY2FsbGJhY2tcbiAgICApIHtcbiAgICAgIG9uW2V2ZW50XSA9IFtjYWxsYmFja10uY29uY2F0KGV4aXN0aW5nKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgb25bZXZlbnRdID0gY2FsbGJhY2s7XG4gIH1cbn1cblxuLyogICovXG5cbnZhciBTSU1QTEVfTk9STUFMSVpFID0gMTtcbnZhciBBTFdBWVNfTk9STUFMSVpFID0gMjtcblxuLy8gd3JhcHBlciBmdW5jdGlvbiBmb3IgcHJvdmlkaW5nIGEgbW9yZSBmbGV4aWJsZSBpbnRlcmZhY2Vcbi8vIHdpdGhvdXQgZ2V0dGluZyB5ZWxsZWQgYXQgYnkgZmxvd1xuZnVuY3Rpb24gY3JlYXRlRWxlbWVudCAoXG4gIGNvbnRleHQsXG4gIHRhZyxcbiAgZGF0YSxcbiAgY2hpbGRyZW4sXG4gIG5vcm1hbGl6YXRpb25UeXBlLFxuICBhbHdheXNOb3JtYWxpemVcbikge1xuICBpZiAoQXJyYXkuaXNBcnJheShkYXRhKSB8fCBpc1ByaW1pdGl2ZShkYXRhKSkge1xuICAgIG5vcm1hbGl6YXRpb25UeXBlID0gY2hpbGRyZW47XG4gICAgY2hpbGRyZW4gPSBkYXRhO1xuICAgIGRhdGEgPSB1bmRlZmluZWQ7XG4gIH1cbiAgaWYgKGlzVHJ1ZShhbHdheXNOb3JtYWxpemUpKSB7XG4gICAgbm9ybWFsaXphdGlvblR5cGUgPSBBTFdBWVNfTk9STUFMSVpFO1xuICB9XG4gIHJldHVybiBfY3JlYXRlRWxlbWVudChjb250ZXh0LCB0YWcsIGRhdGEsIGNoaWxkcmVuLCBub3JtYWxpemF0aW9uVHlwZSlcbn1cblxuZnVuY3Rpb24gX2NyZWF0ZUVsZW1lbnQgKFxuICBjb250ZXh0LFxuICB0YWcsXG4gIGRhdGEsXG4gIGNoaWxkcmVuLFxuICBub3JtYWxpemF0aW9uVHlwZVxuKSB7XG4gIGlmIChpc0RlZihkYXRhKSAmJiBpc0RlZigoZGF0YSkuX19vYl9fKSkge1xuICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgd2FybihcbiAgICAgIFwiQXZvaWQgdXNpbmcgb2JzZXJ2ZWQgZGF0YSBvYmplY3QgYXMgdm5vZGUgZGF0YTogXCIgKyAoSlNPTi5zdHJpbmdpZnkoZGF0YSkpICsgXCJcXG5cIiArXG4gICAgICAnQWx3YXlzIGNyZWF0ZSBmcmVzaCB2bm9kZSBkYXRhIG9iamVjdHMgaW4gZWFjaCByZW5kZXIhJyxcbiAgICAgIGNvbnRleHRcbiAgICApO1xuICAgIHJldHVybiBjcmVhdGVFbXB0eVZOb2RlKClcbiAgfVxuICAvLyBvYmplY3Qgc3ludGF4IGluIHYtYmluZFxuICBpZiAoaXNEZWYoZGF0YSkgJiYgaXNEZWYoZGF0YS5pcykpIHtcbiAgICB0YWcgPSBkYXRhLmlzO1xuICB9XG4gIGlmICghdGFnKSB7XG4gICAgLy8gaW4gY2FzZSBvZiBjb21wb25lbnQgOmlzIHNldCB0byBmYWxzeSB2YWx1ZVxuICAgIHJldHVybiBjcmVhdGVFbXB0eVZOb2RlKClcbiAgfVxuICAvLyB3YXJuIGFnYWluc3Qgbm9uLXByaW1pdGl2ZSBrZXlcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiZcbiAgICBpc0RlZihkYXRhKSAmJiBpc0RlZihkYXRhLmtleSkgJiYgIWlzUHJpbWl0aXZlKGRhdGEua2V5KVxuICApIHtcbiAgICB7XG4gICAgICB3YXJuKFxuICAgICAgICAnQXZvaWQgdXNpbmcgbm9uLXByaW1pdGl2ZSB2YWx1ZSBhcyBrZXksICcgK1xuICAgICAgICAndXNlIHN0cmluZy9udW1iZXIgdmFsdWUgaW5zdGVhZC4nLFxuICAgICAgICBjb250ZXh0XG4gICAgICApO1xuICAgIH1cbiAgfVxuICAvLyBzdXBwb3J0IHNpbmdsZSBmdW5jdGlvbiBjaGlsZHJlbiBhcyBkZWZhdWx0IHNjb3BlZCBzbG90XG4gIGlmIChBcnJheS5pc0FycmF5KGNoaWxkcmVuKSAmJlxuICAgIHR5cGVvZiBjaGlsZHJlblswXSA9PT0gJ2Z1bmN0aW9uJ1xuICApIHtcbiAgICBkYXRhID0gZGF0YSB8fCB7fTtcbiAgICBkYXRhLnNjb3BlZFNsb3RzID0geyBkZWZhdWx0OiBjaGlsZHJlblswXSB9O1xuICAgIGNoaWxkcmVuLmxlbmd0aCA9IDA7XG4gIH1cbiAgaWYgKG5vcm1hbGl6YXRpb25UeXBlID09PSBBTFdBWVNfTk9STUFMSVpFKSB7XG4gICAgY2hpbGRyZW4gPSBub3JtYWxpemVDaGlsZHJlbihjaGlsZHJlbik7XG4gIH0gZWxzZSBpZiAobm9ybWFsaXphdGlvblR5cGUgPT09IFNJTVBMRV9OT1JNQUxJWkUpIHtcbiAgICBjaGlsZHJlbiA9IHNpbXBsZU5vcm1hbGl6ZUNoaWxkcmVuKGNoaWxkcmVuKTtcbiAgfVxuICB2YXIgdm5vZGUsIG5zO1xuICBpZiAodHlwZW9mIHRhZyA9PT0gJ3N0cmluZycpIHtcbiAgICB2YXIgQ3RvcjtcbiAgICBucyA9IChjb250ZXh0LiR2bm9kZSAmJiBjb250ZXh0LiR2bm9kZS5ucykgfHwgY29uZmlnLmdldFRhZ05hbWVzcGFjZSh0YWcpO1xuICAgIGlmIChjb25maWcuaXNSZXNlcnZlZFRhZyh0YWcpKSB7XG4gICAgICAvLyBwbGF0Zm9ybSBidWlsdC1pbiBlbGVtZW50c1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgaXNEZWYoZGF0YSkgJiYgaXNEZWYoZGF0YS5uYXRpdmVPbikpIHtcbiAgICAgICAgd2FybihcbiAgICAgICAgICAoXCJUaGUgLm5hdGl2ZSBtb2RpZmllciBmb3Igdi1vbiBpcyBvbmx5IHZhbGlkIG9uIGNvbXBvbmVudHMgYnV0IGl0IHdhcyB1c2VkIG9uIDxcIiArIHRhZyArIFwiPi5cIiksXG4gICAgICAgICAgY29udGV4dFxuICAgICAgICApO1xuICAgICAgfVxuICAgICAgdm5vZGUgPSBuZXcgVk5vZGUoXG4gICAgICAgIGNvbmZpZy5wYXJzZVBsYXRmb3JtVGFnTmFtZSh0YWcpLCBkYXRhLCBjaGlsZHJlbixcbiAgICAgICAgdW5kZWZpbmVkLCB1bmRlZmluZWQsIGNvbnRleHRcbiAgICAgICk7XG4gICAgfSBlbHNlIGlmICgoIWRhdGEgfHwgIWRhdGEucHJlKSAmJiBpc0RlZihDdG9yID0gcmVzb2x2ZUFzc2V0KGNvbnRleHQuJG9wdGlvbnMsICdjb21wb25lbnRzJywgdGFnKSkpIHtcbiAgICAgIC8vIGNvbXBvbmVudFxuICAgICAgdm5vZGUgPSBjcmVhdGVDb21wb25lbnQoQ3RvciwgZGF0YSwgY29udGV4dCwgY2hpbGRyZW4sIHRhZyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIHVua25vd24gb3IgdW5saXN0ZWQgbmFtZXNwYWNlZCBlbGVtZW50c1xuICAgICAgLy8gY2hlY2sgYXQgcnVudGltZSBiZWNhdXNlIGl0IG1heSBnZXQgYXNzaWduZWQgYSBuYW1lc3BhY2Ugd2hlbiBpdHNcbiAgICAgIC8vIHBhcmVudCBub3JtYWxpemVzIGNoaWxkcmVuXG4gICAgICB2bm9kZSA9IG5ldyBWTm9kZShcbiAgICAgICAgdGFnLCBkYXRhLCBjaGlsZHJlbixcbiAgICAgICAgdW5kZWZpbmVkLCB1bmRlZmluZWQsIGNvbnRleHRcbiAgICAgICk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIC8vIGRpcmVjdCBjb21wb25lbnQgb3B0aW9ucyAvIGNvbnN0cnVjdG9yXG4gICAgdm5vZGUgPSBjcmVhdGVDb21wb25lbnQodGFnLCBkYXRhLCBjb250ZXh0LCBjaGlsZHJlbik7XG4gIH1cbiAgaWYgKEFycmF5LmlzQXJyYXkodm5vZGUpKSB7XG4gICAgcmV0dXJuIHZub2RlXG4gIH0gZWxzZSBpZiAoaXNEZWYodm5vZGUpKSB7XG4gICAgaWYgKGlzRGVmKG5zKSkgeyBhcHBseU5TKHZub2RlLCBucyk7IH1cbiAgICBpZiAoaXNEZWYoZGF0YSkpIHsgcmVnaXN0ZXJEZWVwQmluZGluZ3MoZGF0YSk7IH1cbiAgICByZXR1cm4gdm5vZGVcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gY3JlYXRlRW1wdHlWTm9kZSgpXG4gIH1cbn1cblxuZnVuY3Rpb24gYXBwbHlOUyAodm5vZGUsIG5zLCBmb3JjZSkge1xuICB2bm9kZS5ucyA9IG5zO1xuICBpZiAodm5vZGUudGFnID09PSAnZm9yZWlnbk9iamVjdCcpIHtcbiAgICAvLyB1c2UgZGVmYXVsdCBuYW1lc3BhY2UgaW5zaWRlIGZvcmVpZ25PYmplY3RcbiAgICBucyA9IHVuZGVmaW5lZDtcbiAgICBmb3JjZSA9IHRydWU7XG4gIH1cbiAgaWYgKGlzRGVmKHZub2RlLmNoaWxkcmVuKSkge1xuICAgIGZvciAodmFyIGkgPSAwLCBsID0gdm5vZGUuY2hpbGRyZW4ubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICB2YXIgY2hpbGQgPSB2bm9kZS5jaGlsZHJlbltpXTtcbiAgICAgIGlmIChpc0RlZihjaGlsZC50YWcpICYmIChcbiAgICAgICAgaXNVbmRlZihjaGlsZC5ucykgfHwgKGlzVHJ1ZShmb3JjZSkgJiYgY2hpbGQudGFnICE9PSAnc3ZnJykpKSB7XG4gICAgICAgIGFwcGx5TlMoY2hpbGQsIG5zLCBmb3JjZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8vIHJlZiAjNTMxOFxuLy8gbmVjZXNzYXJ5IHRvIGVuc3VyZSBwYXJlbnQgcmUtcmVuZGVyIHdoZW4gZGVlcCBiaW5kaW5ncyBsaWtlIDpzdHlsZSBhbmRcbi8vIDpjbGFzcyBhcmUgdXNlZCBvbiBzbG90IG5vZGVzXG5mdW5jdGlvbiByZWdpc3RlckRlZXBCaW5kaW5ncyAoZGF0YSkge1xuICBpZiAoaXNPYmplY3QoZGF0YS5zdHlsZSkpIHtcbiAgICB0cmF2ZXJzZShkYXRhLnN0eWxlKTtcbiAgfVxuICBpZiAoaXNPYmplY3QoZGF0YS5jbGFzcykpIHtcbiAgICB0cmF2ZXJzZShkYXRhLmNsYXNzKTtcbiAgfVxufVxuXG4vKiAgKi9cblxuZnVuY3Rpb24gaW5pdFJlbmRlciAodm0pIHtcbiAgdm0uX3Zub2RlID0gbnVsbDsgLy8gdGhlIHJvb3Qgb2YgdGhlIGNoaWxkIHRyZWVcbiAgdm0uX3N0YXRpY1RyZWVzID0gbnVsbDsgLy8gdi1vbmNlIGNhY2hlZCB0cmVlc1xuICB2YXIgb3B0aW9ucyA9IHZtLiRvcHRpb25zO1xuICB2YXIgcGFyZW50Vm5vZGUgPSB2bS4kdm5vZGUgPSBvcHRpb25zLl9wYXJlbnRWbm9kZTsgLy8gdGhlIHBsYWNlaG9sZGVyIG5vZGUgaW4gcGFyZW50IHRyZWVcbiAgdmFyIHJlbmRlckNvbnRleHQgPSBwYXJlbnRWbm9kZSAmJiBwYXJlbnRWbm9kZS5jb250ZXh0O1xuICB2bS4kc2xvdHMgPSByZXNvbHZlU2xvdHMob3B0aW9ucy5fcmVuZGVyQ2hpbGRyZW4sIHJlbmRlckNvbnRleHQpO1xuICB2bS4kc2NvcGVkU2xvdHMgPSBlbXB0eU9iamVjdDtcbiAgLy8gYmluZCB0aGUgY3JlYXRlRWxlbWVudCBmbiB0byB0aGlzIGluc3RhbmNlXG4gIC8vIHNvIHRoYXQgd2UgZ2V0IHByb3BlciByZW5kZXIgY29udGV4dCBpbnNpZGUgaXQuXG4gIC8vIGFyZ3Mgb3JkZXI6IHRhZywgZGF0YSwgY2hpbGRyZW4sIG5vcm1hbGl6YXRpb25UeXBlLCBhbHdheXNOb3JtYWxpemVcbiAgLy8gaW50ZXJuYWwgdmVyc2lvbiBpcyB1c2VkIGJ5IHJlbmRlciBmdW5jdGlvbnMgY29tcGlsZWQgZnJvbSB0ZW1wbGF0ZXNcbiAgdm0uX2MgPSBmdW5jdGlvbiAoYSwgYiwgYywgZCkgeyByZXR1cm4gY3JlYXRlRWxlbWVudCh2bSwgYSwgYiwgYywgZCwgZmFsc2UpOyB9O1xuICAvLyBub3JtYWxpemF0aW9uIGlzIGFsd2F5cyBhcHBsaWVkIGZvciB0aGUgcHVibGljIHZlcnNpb24sIHVzZWQgaW5cbiAgLy8gdXNlci13cml0dGVuIHJlbmRlciBmdW5jdGlvbnMuXG4gIHZtLiRjcmVhdGVFbGVtZW50ID0gZnVuY3Rpb24gKGEsIGIsIGMsIGQpIHsgcmV0dXJuIGNyZWF0ZUVsZW1lbnQodm0sIGEsIGIsIGMsIGQsIHRydWUpOyB9O1xuXG4gIC8vICRhdHRycyAmICRsaXN0ZW5lcnMgYXJlIGV4cG9zZWQgZm9yIGVhc2llciBIT0MgY3JlYXRpb24uXG4gIC8vIHRoZXkgbmVlZCB0byBiZSByZWFjdGl2ZSBzbyB0aGF0IEhPQ3MgdXNpbmcgdGhlbSBhcmUgYWx3YXlzIHVwZGF0ZWRcbiAgdmFyIHBhcmVudERhdGEgPSBwYXJlbnRWbm9kZSAmJiBwYXJlbnRWbm9kZS5kYXRhO1xuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICovXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgZGVmaW5lUmVhY3RpdmUkJDEodm0sICckYXR0cnMnLCBwYXJlbnREYXRhICYmIHBhcmVudERhdGEuYXR0cnMgfHwgZW1wdHlPYmplY3QsIGZ1bmN0aW9uICgpIHtcbiAgICAgICFpc1VwZGF0aW5nQ2hpbGRDb21wb25lbnQgJiYgd2FybihcIiRhdHRycyBpcyByZWFkb25seS5cIiwgdm0pO1xuICAgIH0sIHRydWUpO1xuICAgIGRlZmluZVJlYWN0aXZlJCQxKHZtLCAnJGxpc3RlbmVycycsIG9wdGlvbnMuX3BhcmVudExpc3RlbmVycyB8fCBlbXB0eU9iamVjdCwgZnVuY3Rpb24gKCkge1xuICAgICAgIWlzVXBkYXRpbmdDaGlsZENvbXBvbmVudCAmJiB3YXJuKFwiJGxpc3RlbmVycyBpcyByZWFkb25seS5cIiwgdm0pO1xuICAgIH0sIHRydWUpO1xuICB9IGVsc2Uge1xuICAgIGRlZmluZVJlYWN0aXZlJCQxKHZtLCAnJGF0dHJzJywgcGFyZW50RGF0YSAmJiBwYXJlbnREYXRhLmF0dHJzIHx8IGVtcHR5T2JqZWN0LCBudWxsLCB0cnVlKTtcbiAgICBkZWZpbmVSZWFjdGl2ZSQkMSh2bSwgJyRsaXN0ZW5lcnMnLCBvcHRpb25zLl9wYXJlbnRMaXN0ZW5lcnMgfHwgZW1wdHlPYmplY3QsIG51bGwsIHRydWUpO1xuICB9XG59XG5cbnZhciBjdXJyZW50UmVuZGVyaW5nSW5zdGFuY2UgPSBudWxsO1xuXG5mdW5jdGlvbiByZW5kZXJNaXhpbiAoVnVlKSB7XG4gIC8vIGluc3RhbGwgcnVudGltZSBjb252ZW5pZW5jZSBoZWxwZXJzXG4gIGluc3RhbGxSZW5kZXJIZWxwZXJzKFZ1ZS5wcm90b3R5cGUpO1xuXG4gIFZ1ZS5wcm90b3R5cGUuJG5leHRUaWNrID0gZnVuY3Rpb24gKGZuKSB7XG4gICAgcmV0dXJuIG5leHRUaWNrKGZuLCB0aGlzKVxuICB9O1xuXG4gIFZ1ZS5wcm90b3R5cGUuX3JlbmRlciA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgdm0gPSB0aGlzO1xuICAgIHZhciByZWYgPSB2bS4kb3B0aW9ucztcbiAgICB2YXIgcmVuZGVyID0gcmVmLnJlbmRlcjtcbiAgICB2YXIgX3BhcmVudFZub2RlID0gcmVmLl9wYXJlbnRWbm9kZTtcblxuICAgIGlmIChfcGFyZW50Vm5vZGUpIHtcbiAgICAgIHZtLiRzY29wZWRTbG90cyA9IG5vcm1hbGl6ZVNjb3BlZFNsb3RzKFxuICAgICAgICBfcGFyZW50Vm5vZGUuZGF0YS5zY29wZWRTbG90cyxcbiAgICAgICAgdm0uJHNsb3RzLFxuICAgICAgICB2bS4kc2NvcGVkU2xvdHNcbiAgICAgICk7XG4gICAgfVxuXG4gICAgLy8gc2V0IHBhcmVudCB2bm9kZS4gdGhpcyBhbGxvd3MgcmVuZGVyIGZ1bmN0aW9ucyB0byBoYXZlIGFjY2Vzc1xuICAgIC8vIHRvIHRoZSBkYXRhIG9uIHRoZSBwbGFjZWhvbGRlciBub2RlLlxuICAgIHZtLiR2bm9kZSA9IF9wYXJlbnRWbm9kZTtcbiAgICAvLyByZW5kZXIgc2VsZlxuICAgIHZhciB2bm9kZTtcbiAgICB0cnkge1xuICAgICAgLy8gVGhlcmUncyBubyBuZWVkIHRvIG1haW50YWluIGEgc3RhY2sgYmVjYXVzZSBhbGwgcmVuZGVyIGZucyBhcmUgY2FsbGVkXG4gICAgICAvLyBzZXBhcmF0ZWx5IGZyb20gb25lIGFub3RoZXIuIE5lc3RlZCBjb21wb25lbnQncyByZW5kZXIgZm5zIGFyZSBjYWxsZWRcbiAgICAgIC8vIHdoZW4gcGFyZW50IGNvbXBvbmVudCBpcyBwYXRjaGVkLlxuICAgICAgY3VycmVudFJlbmRlcmluZ0luc3RhbmNlID0gdm07XG4gICAgICB2bm9kZSA9IHJlbmRlci5jYWxsKHZtLl9yZW5kZXJQcm94eSwgdm0uJGNyZWF0ZUVsZW1lbnQpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGhhbmRsZUVycm9yKGUsIHZtLCBcInJlbmRlclwiKTtcbiAgICAgIC8vIHJldHVybiBlcnJvciByZW5kZXIgcmVzdWx0LFxuICAgICAgLy8gb3IgcHJldmlvdXMgdm5vZGUgdG8gcHJldmVudCByZW5kZXIgZXJyb3IgY2F1c2luZyBibGFuayBjb21wb25lbnRcbiAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICovXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiB2bS4kb3B0aW9ucy5yZW5kZXJFcnJvcikge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIHZub2RlID0gdm0uJG9wdGlvbnMucmVuZGVyRXJyb3IuY2FsbCh2bS5fcmVuZGVyUHJveHksIHZtLiRjcmVhdGVFbGVtZW50LCBlKTtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIGhhbmRsZUVycm9yKGUsIHZtLCBcInJlbmRlckVycm9yXCIpO1xuICAgICAgICAgIHZub2RlID0gdm0uX3Zub2RlO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2bm9kZSA9IHZtLl92bm9kZTtcbiAgICAgIH1cbiAgICB9IGZpbmFsbHkge1xuICAgICAgY3VycmVudFJlbmRlcmluZ0luc3RhbmNlID0gbnVsbDtcbiAgICB9XG4gICAgLy8gaWYgdGhlIHJldHVybmVkIGFycmF5IGNvbnRhaW5zIG9ubHkgYSBzaW5nbGUgbm9kZSwgYWxsb3cgaXRcbiAgICBpZiAoQXJyYXkuaXNBcnJheSh2bm9kZSkgJiYgdm5vZGUubGVuZ3RoID09PSAxKSB7XG4gICAgICB2bm9kZSA9IHZub2RlWzBdO1xuICAgIH1cbiAgICAvLyByZXR1cm4gZW1wdHkgdm5vZGUgaW4gY2FzZSB0aGUgcmVuZGVyIGZ1bmN0aW9uIGVycm9yZWQgb3V0XG4gICAgaWYgKCEodm5vZGUgaW5zdGFuY2VvZiBWTm9kZSkpIHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIEFycmF5LmlzQXJyYXkodm5vZGUpKSB7XG4gICAgICAgIHdhcm4oXG4gICAgICAgICAgJ011bHRpcGxlIHJvb3Qgbm9kZXMgcmV0dXJuZWQgZnJvbSByZW5kZXIgZnVuY3Rpb24uIFJlbmRlciBmdW5jdGlvbiAnICtcbiAgICAgICAgICAnc2hvdWxkIHJldHVybiBhIHNpbmdsZSByb290IG5vZGUuJyxcbiAgICAgICAgICB2bVxuICAgICAgICApO1xuICAgICAgfVxuICAgICAgdm5vZGUgPSBjcmVhdGVFbXB0eVZOb2RlKCk7XG4gICAgfVxuICAgIC8vIHNldCBwYXJlbnRcbiAgICB2bm9kZS5wYXJlbnQgPSBfcGFyZW50Vm5vZGU7XG4gICAgcmV0dXJuIHZub2RlXG4gIH07XG59XG5cbi8qICAqL1xuXG5mdW5jdGlvbiBlbnN1cmVDdG9yIChjb21wLCBiYXNlKSB7XG4gIGlmIChcbiAgICBjb21wLl9fZXNNb2R1bGUgfHxcbiAgICAoaGFzU3ltYm9sICYmIGNvbXBbU3ltYm9sLnRvU3RyaW5nVGFnXSA9PT0gJ01vZHVsZScpXG4gICkge1xuICAgIGNvbXAgPSBjb21wLmRlZmF1bHQ7XG4gIH1cbiAgcmV0dXJuIGlzT2JqZWN0KGNvbXApXG4gICAgPyBiYXNlLmV4dGVuZChjb21wKVxuICAgIDogY29tcFxufVxuXG5mdW5jdGlvbiBjcmVhdGVBc3luY1BsYWNlaG9sZGVyIChcbiAgZmFjdG9yeSxcbiAgZGF0YSxcbiAgY29udGV4dCxcbiAgY2hpbGRyZW4sXG4gIHRhZ1xuKSB7XG4gIHZhciBub2RlID0gY3JlYXRlRW1wdHlWTm9kZSgpO1xuICBub2RlLmFzeW5jRmFjdG9yeSA9IGZhY3Rvcnk7XG4gIG5vZGUuYXN5bmNNZXRhID0geyBkYXRhOiBkYXRhLCBjb250ZXh0OiBjb250ZXh0LCBjaGlsZHJlbjogY2hpbGRyZW4sIHRhZzogdGFnIH07XG4gIHJldHVybiBub2RlXG59XG5cbmZ1bmN0aW9uIHJlc29sdmVBc3luY0NvbXBvbmVudCAoXG4gIGZhY3RvcnksXG4gIGJhc2VDdG9yXG4pIHtcbiAgaWYgKGlzVHJ1ZShmYWN0b3J5LmVycm9yKSAmJiBpc0RlZihmYWN0b3J5LmVycm9yQ29tcCkpIHtcbiAgICByZXR1cm4gZmFjdG9yeS5lcnJvckNvbXBcbiAgfVxuXG4gIGlmIChpc0RlZihmYWN0b3J5LnJlc29sdmVkKSkge1xuICAgIHJldHVybiBmYWN0b3J5LnJlc29sdmVkXG4gIH1cblxuICB2YXIgb3duZXIgPSBjdXJyZW50UmVuZGVyaW5nSW5zdGFuY2U7XG4gIGlmIChvd25lciAmJiBpc0RlZihmYWN0b3J5Lm93bmVycykgJiYgZmFjdG9yeS5vd25lcnMuaW5kZXhPZihvd25lcikgPT09IC0xKSB7XG4gICAgLy8gYWxyZWFkeSBwZW5kaW5nXG4gICAgZmFjdG9yeS5vd25lcnMucHVzaChvd25lcik7XG4gIH1cblxuICBpZiAoaXNUcnVlKGZhY3RvcnkubG9hZGluZykgJiYgaXNEZWYoZmFjdG9yeS5sb2FkaW5nQ29tcCkpIHtcbiAgICByZXR1cm4gZmFjdG9yeS5sb2FkaW5nQ29tcFxuICB9XG5cbiAgaWYgKG93bmVyICYmICFpc0RlZihmYWN0b3J5Lm93bmVycykpIHtcbiAgICB2YXIgb3duZXJzID0gZmFjdG9yeS5vd25lcnMgPSBbb3duZXJdO1xuICAgIHZhciBzeW5jID0gdHJ1ZTtcbiAgICB2YXIgdGltZXJMb2FkaW5nID0gbnVsbDtcbiAgICB2YXIgdGltZXJUaW1lb3V0ID0gbnVsbFxuXG4gICAgOyhvd25lcikuJG9uKCdob29rOmRlc3Ryb3llZCcsIGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlbW92ZShvd25lcnMsIG93bmVyKTsgfSk7XG5cbiAgICB2YXIgZm9yY2VSZW5kZXIgPSBmdW5jdGlvbiAocmVuZGVyQ29tcGxldGVkKSB7XG4gICAgICBmb3IgKHZhciBpID0gMCwgbCA9IG93bmVycy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgKG93bmVyc1tpXSkuJGZvcmNlVXBkYXRlKCk7XG4gICAgICB9XG5cbiAgICAgIGlmIChyZW5kZXJDb21wbGV0ZWQpIHtcbiAgICAgICAgb3duZXJzLmxlbmd0aCA9IDA7XG4gICAgICAgIGlmICh0aW1lckxvYWRpbmcgIT09IG51bGwpIHtcbiAgICAgICAgICBjbGVhclRpbWVvdXQodGltZXJMb2FkaW5nKTtcbiAgICAgICAgICB0aW1lckxvYWRpbmcgPSBudWxsO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aW1lclRpbWVvdXQgIT09IG51bGwpIHtcbiAgICAgICAgICBjbGVhclRpbWVvdXQodGltZXJUaW1lb3V0KTtcbiAgICAgICAgICB0aW1lclRpbWVvdXQgPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcblxuICAgIHZhciByZXNvbHZlID0gb25jZShmdW5jdGlvbiAocmVzKSB7XG4gICAgICAvLyBjYWNoZSByZXNvbHZlZFxuICAgICAgZmFjdG9yeS5yZXNvbHZlZCA9IGVuc3VyZUN0b3IocmVzLCBiYXNlQ3Rvcik7XG4gICAgICAvLyBpbnZva2UgY2FsbGJhY2tzIG9ubHkgaWYgdGhpcyBpcyBub3QgYSBzeW5jaHJvbm91cyByZXNvbHZlXG4gICAgICAvLyAoYXN5bmMgcmVzb2x2ZXMgYXJlIHNoaW1tZWQgYXMgc3luY2hyb25vdXMgZHVyaW5nIFNTUilcbiAgICAgIGlmICghc3luYykge1xuICAgICAgICBmb3JjZVJlbmRlcih0cnVlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG93bmVycy5sZW5ndGggPSAwO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgdmFyIHJlamVjdCA9IG9uY2UoZnVuY3Rpb24gKHJlYXNvbikge1xuICAgICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiB3YXJuKFxuICAgICAgICBcIkZhaWxlZCB0byByZXNvbHZlIGFzeW5jIGNvbXBvbmVudDogXCIgKyAoU3RyaW5nKGZhY3RvcnkpKSArXG4gICAgICAgIChyZWFzb24gPyAoXCJcXG5SZWFzb246IFwiICsgcmVhc29uKSA6ICcnKVxuICAgICAgKTtcbiAgICAgIGlmIChpc0RlZihmYWN0b3J5LmVycm9yQ29tcCkpIHtcbiAgICAgICAgZmFjdG9yeS5lcnJvciA9IHRydWU7XG4gICAgICAgIGZvcmNlUmVuZGVyKHRydWUpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgdmFyIHJlcyA9IGZhY3RvcnkocmVzb2x2ZSwgcmVqZWN0KTtcblxuICAgIGlmIChpc09iamVjdChyZXMpKSB7XG4gICAgICBpZiAoaXNQcm9taXNlKHJlcykpIHtcbiAgICAgICAgLy8gKCkgPT4gUHJvbWlzZVxuICAgICAgICBpZiAoaXNVbmRlZihmYWN0b3J5LnJlc29sdmVkKSkge1xuICAgICAgICAgIHJlcy50aGVuKHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoaXNQcm9taXNlKHJlcy5jb21wb25lbnQpKSB7XG4gICAgICAgIHJlcy5jb21wb25lbnQudGhlbihyZXNvbHZlLCByZWplY3QpO1xuXG4gICAgICAgIGlmIChpc0RlZihyZXMuZXJyb3IpKSB7XG4gICAgICAgICAgZmFjdG9yeS5lcnJvckNvbXAgPSBlbnN1cmVDdG9yKHJlcy5lcnJvciwgYmFzZUN0b3IpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGlzRGVmKHJlcy5sb2FkaW5nKSkge1xuICAgICAgICAgIGZhY3RvcnkubG9hZGluZ0NvbXAgPSBlbnN1cmVDdG9yKHJlcy5sb2FkaW5nLCBiYXNlQ3Rvcik7XG4gICAgICAgICAgaWYgKHJlcy5kZWxheSA9PT0gMCkge1xuICAgICAgICAgICAgZmFjdG9yeS5sb2FkaW5nID0gdHJ1ZTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGltZXJMb2FkaW5nID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgIHRpbWVyTG9hZGluZyA9IG51bGw7XG4gICAgICAgICAgICAgIGlmIChpc1VuZGVmKGZhY3RvcnkucmVzb2x2ZWQpICYmIGlzVW5kZWYoZmFjdG9yeS5lcnJvcikpIHtcbiAgICAgICAgICAgICAgICBmYWN0b3J5LmxvYWRpbmcgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGZvcmNlUmVuZGVyKGZhbHNlKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwgcmVzLmRlbGF5IHx8IDIwMCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGlzRGVmKHJlcy50aW1lb3V0KSkge1xuICAgICAgICAgIHRpbWVyVGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdGltZXJUaW1lb3V0ID0gbnVsbDtcbiAgICAgICAgICAgIGlmIChpc1VuZGVmKGZhY3RvcnkucmVzb2x2ZWQpKSB7XG4gICAgICAgICAgICAgIHJlamVjdChcbiAgICAgICAgICAgICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nXG4gICAgICAgICAgICAgICAgICA/IChcInRpbWVvdXQgKFwiICsgKHJlcy50aW1lb3V0KSArIFwibXMpXCIpXG4gICAgICAgICAgICAgICAgICA6IG51bGxcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LCByZXMudGltZW91dCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBzeW5jID0gZmFsc2U7XG4gICAgLy8gcmV0dXJuIGluIGNhc2UgcmVzb2x2ZWQgc3luY2hyb25vdXNseVxuICAgIHJldHVybiBmYWN0b3J5LmxvYWRpbmdcbiAgICAgID8gZmFjdG9yeS5sb2FkaW5nQ29tcFxuICAgICAgOiBmYWN0b3J5LnJlc29sdmVkXG4gIH1cbn1cblxuLyogICovXG5cbmZ1bmN0aW9uIGlzQXN5bmNQbGFjZWhvbGRlciAobm9kZSkge1xuICByZXR1cm4gbm9kZS5pc0NvbW1lbnQgJiYgbm9kZS5hc3luY0ZhY3Rvcnlcbn1cblxuLyogICovXG5cbmZ1bmN0aW9uIGdldEZpcnN0Q29tcG9uZW50Q2hpbGQgKGNoaWxkcmVuKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KGNoaWxkcmVuKSkge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBjID0gY2hpbGRyZW5baV07XG4gICAgICBpZiAoaXNEZWYoYykgJiYgKGlzRGVmKGMuY29tcG9uZW50T3B0aW9ucykgfHwgaXNBc3luY1BsYWNlaG9sZGVyKGMpKSkge1xuICAgICAgICByZXR1cm4gY1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vKiAgKi9cblxuLyogICovXG5cbmZ1bmN0aW9uIGluaXRFdmVudHMgKHZtKSB7XG4gIHZtLl9ldmVudHMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICB2bS5faGFzSG9va0V2ZW50ID0gZmFsc2U7XG4gIC8vIGluaXQgcGFyZW50IGF0dGFjaGVkIGV2ZW50c1xuICB2YXIgbGlzdGVuZXJzID0gdm0uJG9wdGlvbnMuX3BhcmVudExpc3RlbmVycztcbiAgaWYgKGxpc3RlbmVycykge1xuICAgIHVwZGF0ZUNvbXBvbmVudExpc3RlbmVycyh2bSwgbGlzdGVuZXJzKTtcbiAgfVxufVxuXG52YXIgdGFyZ2V0O1xuXG5mdW5jdGlvbiBhZGQgKGV2ZW50LCBmbikge1xuICB0YXJnZXQuJG9uKGV2ZW50LCBmbik7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZSQxIChldmVudCwgZm4pIHtcbiAgdGFyZ2V0LiRvZmYoZXZlbnQsIGZuKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlT25jZUhhbmRsZXIgKGV2ZW50LCBmbikge1xuICB2YXIgX3RhcmdldCA9IHRhcmdldDtcbiAgcmV0dXJuIGZ1bmN0aW9uIG9uY2VIYW5kbGVyICgpIHtcbiAgICB2YXIgcmVzID0gZm4uYXBwbHkobnVsbCwgYXJndW1lbnRzKTtcbiAgICBpZiAocmVzICE9PSBudWxsKSB7XG4gICAgICBfdGFyZ2V0LiRvZmYoZXZlbnQsIG9uY2VIYW5kbGVyKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gdXBkYXRlQ29tcG9uZW50TGlzdGVuZXJzIChcbiAgdm0sXG4gIGxpc3RlbmVycyxcbiAgb2xkTGlzdGVuZXJzXG4pIHtcbiAgdGFyZ2V0ID0gdm07XG4gIHVwZGF0ZUxpc3RlbmVycyhsaXN0ZW5lcnMsIG9sZExpc3RlbmVycyB8fCB7fSwgYWRkLCByZW1vdmUkMSwgY3JlYXRlT25jZUhhbmRsZXIsIHZtKTtcbiAgdGFyZ2V0ID0gdW5kZWZpbmVkO1xufVxuXG5mdW5jdGlvbiBldmVudHNNaXhpbiAoVnVlKSB7XG4gIHZhciBob29rUkUgPSAvXmhvb2s6LztcbiAgVnVlLnByb3RvdHlwZS4kb24gPSBmdW5jdGlvbiAoZXZlbnQsIGZuKSB7XG4gICAgdmFyIHZtID0gdGhpcztcbiAgICBpZiAoQXJyYXkuaXNBcnJheShldmVudCkpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwLCBsID0gZXZlbnQubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgIHZtLiRvbihldmVudFtpXSwgZm4pO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAodm0uX2V2ZW50c1tldmVudF0gfHwgKHZtLl9ldmVudHNbZXZlbnRdID0gW10pKS5wdXNoKGZuKTtcbiAgICAgIC8vIG9wdGltaXplIGhvb2s6ZXZlbnQgY29zdCBieSB1c2luZyBhIGJvb2xlYW4gZmxhZyBtYXJrZWQgYXQgcmVnaXN0cmF0aW9uXG4gICAgICAvLyBpbnN0ZWFkIG9mIGEgaGFzaCBsb29rdXBcbiAgICAgIGlmIChob29rUkUudGVzdChldmVudCkpIHtcbiAgICAgICAgdm0uX2hhc0hvb2tFdmVudCA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB2bVxuICB9O1xuXG4gIFZ1ZS5wcm90b3R5cGUuJG9uY2UgPSBmdW5jdGlvbiAoZXZlbnQsIGZuKSB7XG4gICAgdmFyIHZtID0gdGhpcztcbiAgICBmdW5jdGlvbiBvbiAoKSB7XG4gICAgICB2bS4kb2ZmKGV2ZW50LCBvbik7XG4gICAgICBmbi5hcHBseSh2bSwgYXJndW1lbnRzKTtcbiAgICB9XG4gICAgb24uZm4gPSBmbjtcbiAgICB2bS4kb24oZXZlbnQsIG9uKTtcbiAgICByZXR1cm4gdm1cbiAgfTtcblxuICBWdWUucHJvdG90eXBlLiRvZmYgPSBmdW5jdGlvbiAoZXZlbnQsIGZuKSB7XG4gICAgdmFyIHZtID0gdGhpcztcbiAgICAvLyBhbGxcbiAgICBpZiAoIWFyZ3VtZW50cy5sZW5ndGgpIHtcbiAgICAgIHZtLl9ldmVudHMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgICAgcmV0dXJuIHZtXG4gICAgfVxuICAgIC8vIGFycmF5IG9mIGV2ZW50c1xuICAgIGlmIChBcnJheS5pc0FycmF5KGV2ZW50KSkge1xuICAgICAgZm9yICh2YXIgaSQxID0gMCwgbCA9IGV2ZW50Lmxlbmd0aDsgaSQxIDwgbDsgaSQxKyspIHtcbiAgICAgICAgdm0uJG9mZihldmVudFtpJDFdLCBmbik7XG4gICAgICB9XG4gICAgICByZXR1cm4gdm1cbiAgICB9XG4gICAgLy8gc3BlY2lmaWMgZXZlbnRcbiAgICB2YXIgY2JzID0gdm0uX2V2ZW50c1tldmVudF07XG4gICAgaWYgKCFjYnMpIHtcbiAgICAgIHJldHVybiB2bVxuICAgIH1cbiAgICBpZiAoIWZuKSB7XG4gICAgICB2bS5fZXZlbnRzW2V2ZW50XSA9IG51bGw7XG4gICAgICByZXR1cm4gdm1cbiAgICB9XG4gICAgLy8gc3BlY2lmaWMgaGFuZGxlclxuICAgIHZhciBjYjtcbiAgICB2YXIgaSA9IGNicy5sZW5ndGg7XG4gICAgd2hpbGUgKGktLSkge1xuICAgICAgY2IgPSBjYnNbaV07XG4gICAgICBpZiAoY2IgPT09IGZuIHx8IGNiLmZuID09PSBmbikge1xuICAgICAgICBjYnMuc3BsaWNlKGksIDEpO1xuICAgICAgICBicmVha1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdm1cbiAgfTtcblxuICBWdWUucHJvdG90eXBlLiRlbWl0ID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgdmFyIHZtID0gdGhpcztcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgdmFyIGxvd2VyQ2FzZUV2ZW50ID0gZXZlbnQudG9Mb3dlckNhc2UoKTtcbiAgICAgIGlmIChsb3dlckNhc2VFdmVudCAhPT0gZXZlbnQgJiYgdm0uX2V2ZW50c1tsb3dlckNhc2VFdmVudF0pIHtcbiAgICAgICAgdGlwKFxuICAgICAgICAgIFwiRXZlbnQgXFxcIlwiICsgbG93ZXJDYXNlRXZlbnQgKyBcIlxcXCIgaXMgZW1pdHRlZCBpbiBjb21wb25lbnQgXCIgK1xuICAgICAgICAgIChmb3JtYXRDb21wb25lbnROYW1lKHZtKSkgKyBcIiBidXQgdGhlIGhhbmRsZXIgaXMgcmVnaXN0ZXJlZCBmb3IgXFxcIlwiICsgZXZlbnQgKyBcIlxcXCIuIFwiICtcbiAgICAgICAgICBcIk5vdGUgdGhhdCBIVE1MIGF0dHJpYnV0ZXMgYXJlIGNhc2UtaW5zZW5zaXRpdmUgYW5kIHlvdSBjYW5ub3QgdXNlIFwiICtcbiAgICAgICAgICBcInYtb24gdG8gbGlzdGVuIHRvIGNhbWVsQ2FzZSBldmVudHMgd2hlbiB1c2luZyBpbi1ET00gdGVtcGxhdGVzLiBcIiArXG4gICAgICAgICAgXCJZb3Ugc2hvdWxkIHByb2JhYmx5IHVzZSBcXFwiXCIgKyAoaHlwaGVuYXRlKGV2ZW50KSkgKyBcIlxcXCIgaW5zdGVhZCBvZiBcXFwiXCIgKyBldmVudCArIFwiXFxcIi5cIlxuICAgICAgICApO1xuICAgICAgfVxuICAgIH1cbiAgICB2YXIgY2JzID0gdm0uX2V2ZW50c1tldmVudF07XG4gICAgaWYgKGNicykge1xuICAgICAgY2JzID0gY2JzLmxlbmd0aCA+IDEgPyB0b0FycmF5KGNicykgOiBjYnM7XG4gICAgICB2YXIgYXJncyA9IHRvQXJyYXkoYXJndW1lbnRzLCAxKTtcbiAgICAgIHZhciBpbmZvID0gXCJldmVudCBoYW5kbGVyIGZvciBcXFwiXCIgKyBldmVudCArIFwiXFxcIlwiO1xuICAgICAgZm9yICh2YXIgaSA9IDAsIGwgPSBjYnMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgIGludm9rZVdpdGhFcnJvckhhbmRsaW5nKGNic1tpXSwgdm0sIGFyZ3MsIHZtLCBpbmZvKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHZtXG4gIH07XG59XG5cbi8qICAqL1xuXG52YXIgYWN0aXZlSW5zdGFuY2UgPSBudWxsO1xudmFyIGlzVXBkYXRpbmdDaGlsZENvbXBvbmVudCA9IGZhbHNlO1xuXG5mdW5jdGlvbiBzZXRBY3RpdmVJbnN0YW5jZSh2bSkge1xuICB2YXIgcHJldkFjdGl2ZUluc3RhbmNlID0gYWN0aXZlSW5zdGFuY2U7XG4gIGFjdGl2ZUluc3RhbmNlID0gdm07XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgYWN0aXZlSW5zdGFuY2UgPSBwcmV2QWN0aXZlSW5zdGFuY2U7XG4gIH1cbn1cblxuZnVuY3Rpb24gaW5pdExpZmVjeWNsZSAodm0pIHtcbiAgdmFyIG9wdGlvbnMgPSB2bS4kb3B0aW9ucztcblxuICAvLyBsb2NhdGUgZmlyc3Qgbm9uLWFic3RyYWN0IHBhcmVudFxuICB2YXIgcGFyZW50ID0gb3B0aW9ucy5wYXJlbnQ7XG4gIGlmIChwYXJlbnQgJiYgIW9wdGlvbnMuYWJzdHJhY3QpIHtcbiAgICB3aGlsZSAocGFyZW50LiRvcHRpb25zLmFic3RyYWN0ICYmIHBhcmVudC4kcGFyZW50KSB7XG4gICAgICBwYXJlbnQgPSBwYXJlbnQuJHBhcmVudDtcbiAgICB9XG4gICAgcGFyZW50LiRjaGlsZHJlbi5wdXNoKHZtKTtcbiAgfVxuXG4gIHZtLiRwYXJlbnQgPSBwYXJlbnQ7XG4gIHZtLiRyb290ID0gcGFyZW50ID8gcGFyZW50LiRyb290IDogdm07XG5cbiAgdm0uJGNoaWxkcmVuID0gW107XG4gIHZtLiRyZWZzID0ge307XG5cbiAgdm0uX3dhdGNoZXIgPSBudWxsO1xuICB2bS5faW5hY3RpdmUgPSBudWxsO1xuICB2bS5fZGlyZWN0SW5hY3RpdmUgPSBmYWxzZTtcbiAgdm0uX2lzTW91bnRlZCA9IGZhbHNlO1xuICB2bS5faXNEZXN0cm95ZWQgPSBmYWxzZTtcbiAgdm0uX2lzQmVpbmdEZXN0cm95ZWQgPSBmYWxzZTtcbn1cblxuZnVuY3Rpb24gbGlmZWN5Y2xlTWl4aW4gKFZ1ZSkge1xuICBWdWUucHJvdG90eXBlLl91cGRhdGUgPSBmdW5jdGlvbiAodm5vZGUsIGh5ZHJhdGluZykge1xuICAgIHZhciB2bSA9IHRoaXM7XG4gICAgdmFyIHByZXZFbCA9IHZtLiRlbDtcbiAgICB2YXIgcHJldlZub2RlID0gdm0uX3Zub2RlO1xuICAgIHZhciByZXN0b3JlQWN0aXZlSW5zdGFuY2UgPSBzZXRBY3RpdmVJbnN0YW5jZSh2bSk7XG4gICAgdm0uX3Zub2RlID0gdm5vZGU7XG4gICAgLy8gVnVlLnByb3RvdHlwZS5fX3BhdGNoX18gaXMgaW5qZWN0ZWQgaW4gZW50cnkgcG9pbnRzXG4gICAgLy8gYmFzZWQgb24gdGhlIHJlbmRlcmluZyBiYWNrZW5kIHVzZWQuXG4gICAgaWYgKCFwcmV2Vm5vZGUpIHtcbiAgICAgIC8vIGluaXRpYWwgcmVuZGVyXG4gICAgICB2bS4kZWwgPSB2bS5fX3BhdGNoX18odm0uJGVsLCB2bm9kZSwgaHlkcmF0aW5nLCBmYWxzZSAvKiByZW1vdmVPbmx5ICovKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gdXBkYXRlc1xuICAgICAgdm0uJGVsID0gdm0uX19wYXRjaF9fKHByZXZWbm9kZSwgdm5vZGUpO1xuICAgIH1cbiAgICByZXN0b3JlQWN0aXZlSW5zdGFuY2UoKTtcbiAgICAvLyB1cGRhdGUgX192dWVfXyByZWZlcmVuY2VcbiAgICBpZiAocHJldkVsKSB7XG4gICAgICBwcmV2RWwuX192dWVfXyA9IG51bGw7XG4gICAgfVxuICAgIGlmICh2bS4kZWwpIHtcbiAgICAgIHZtLiRlbC5fX3Z1ZV9fID0gdm07XG4gICAgfVxuICAgIC8vIGlmIHBhcmVudCBpcyBhbiBIT0MsIHVwZGF0ZSBpdHMgJGVsIGFzIHdlbGxcbiAgICBpZiAodm0uJHZub2RlICYmIHZtLiRwYXJlbnQgJiYgdm0uJHZub2RlID09PSB2bS4kcGFyZW50Ll92bm9kZSkge1xuICAgICAgdm0uJHBhcmVudC4kZWwgPSB2bS4kZWw7XG4gICAgfVxuICAgIC8vIHVwZGF0ZWQgaG9vayBpcyBjYWxsZWQgYnkgdGhlIHNjaGVkdWxlciB0byBlbnN1cmUgdGhhdCBjaGlsZHJlbiBhcmVcbiAgICAvLyB1cGRhdGVkIGluIGEgcGFyZW50J3MgdXBkYXRlZCBob29rLlxuICB9O1xuXG4gIFZ1ZS5wcm90b3R5cGUuJGZvcmNlVXBkYXRlID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciB2bSA9IHRoaXM7XG4gICAgaWYgKHZtLl93YXRjaGVyKSB7XG4gICAgICB2bS5fd2F0Y2hlci51cGRhdGUoKTtcbiAgICB9XG4gIH07XG5cbiAgVnVlLnByb3RvdHlwZS4kZGVzdHJveSA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgdm0gPSB0aGlzO1xuICAgIGlmICh2bS5faXNCZWluZ0Rlc3Ryb3llZCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIGNhbGxIb29rKHZtLCAnYmVmb3JlRGVzdHJveScpO1xuICAgIHZtLl9pc0JlaW5nRGVzdHJveWVkID0gdHJ1ZTtcbiAgICAvLyByZW1vdmUgc2VsZiBmcm9tIHBhcmVudFxuICAgIHZhciBwYXJlbnQgPSB2bS4kcGFyZW50O1xuICAgIGlmIChwYXJlbnQgJiYgIXBhcmVudC5faXNCZWluZ0Rlc3Ryb3llZCAmJiAhdm0uJG9wdGlvbnMuYWJzdHJhY3QpIHtcbiAgICAgIHJlbW92ZShwYXJlbnQuJGNoaWxkcmVuLCB2bSk7XG4gICAgfVxuICAgIC8vIHRlYXJkb3duIHdhdGNoZXJzXG4gICAgaWYgKHZtLl93YXRjaGVyKSB7XG4gICAgICB2bS5fd2F0Y2hlci50ZWFyZG93bigpO1xuICAgIH1cbiAgICB2YXIgaSA9IHZtLl93YXRjaGVycy5sZW5ndGg7XG4gICAgd2hpbGUgKGktLSkge1xuICAgICAgdm0uX3dhdGNoZXJzW2ldLnRlYXJkb3duKCk7XG4gICAgfVxuICAgIC8vIHJlbW92ZSByZWZlcmVuY2UgZnJvbSBkYXRhIG9iXG4gICAgLy8gZnJvemVuIG9iamVjdCBtYXkgbm90IGhhdmUgb2JzZXJ2ZXIuXG4gICAgaWYgKHZtLl9kYXRhLl9fb2JfXykge1xuICAgICAgdm0uX2RhdGEuX19vYl9fLnZtQ291bnQtLTtcbiAgICB9XG4gICAgLy8gY2FsbCB0aGUgbGFzdCBob29rLi4uXG4gICAgdm0uX2lzRGVzdHJveWVkID0gdHJ1ZTtcbiAgICAvLyBpbnZva2UgZGVzdHJveSBob29rcyBvbiBjdXJyZW50IHJlbmRlcmVkIHRyZWVcbiAgICB2bS5fX3BhdGNoX18odm0uX3Zub2RlLCBudWxsKTtcbiAgICAvLyBmaXJlIGRlc3Ryb3llZCBob29rXG4gICAgY2FsbEhvb2sodm0sICdkZXN0cm95ZWQnKTtcbiAgICAvLyB0dXJuIG9mZiBhbGwgaW5zdGFuY2UgbGlzdGVuZXJzLlxuICAgIHZtLiRvZmYoKTtcbiAgICAvLyByZW1vdmUgX192dWVfXyByZWZlcmVuY2VcbiAgICBpZiAodm0uJGVsKSB7XG4gICAgICB2bS4kZWwuX192dWVfXyA9IG51bGw7XG4gICAgfVxuICAgIC8vIHJlbGVhc2UgY2lyY3VsYXIgcmVmZXJlbmNlICgjNjc1OSlcbiAgICBpZiAodm0uJHZub2RlKSB7XG4gICAgICB2bS4kdm5vZGUucGFyZW50ID0gbnVsbDtcbiAgICB9XG4gIH07XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZUNoaWxkQ29tcG9uZW50IChcbiAgdm0sXG4gIHByb3BzRGF0YSxcbiAgbGlzdGVuZXJzLFxuICBwYXJlbnRWbm9kZSxcbiAgcmVuZGVyQ2hpbGRyZW5cbikge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGlzVXBkYXRpbmdDaGlsZENvbXBvbmVudCA9IHRydWU7XG4gIH1cblxuICAvLyBkZXRlcm1pbmUgd2hldGhlciBjb21wb25lbnQgaGFzIHNsb3QgY2hpbGRyZW5cbiAgLy8gd2UgbmVlZCB0byBkbyB0aGlzIGJlZm9yZSBvdmVyd3JpdGluZyAkb3B0aW9ucy5fcmVuZGVyQ2hpbGRyZW4uXG5cbiAgLy8gY2hlY2sgaWYgdGhlcmUgYXJlIGR5bmFtaWMgc2NvcGVkU2xvdHMgKGhhbmQtd3JpdHRlbiBvciBjb21waWxlZCBidXQgd2l0aFxuICAvLyBkeW5hbWljIHNsb3QgbmFtZXMpLiBTdGF0aWMgc2NvcGVkIHNsb3RzIGNvbXBpbGVkIGZyb20gdGVtcGxhdGUgaGFzIHRoZVxuICAvLyBcIiRzdGFibGVcIiBtYXJrZXIuXG4gIHZhciBuZXdTY29wZWRTbG90cyA9IHBhcmVudFZub2RlLmRhdGEuc2NvcGVkU2xvdHM7XG4gIHZhciBvbGRTY29wZWRTbG90cyA9IHZtLiRzY29wZWRTbG90cztcbiAgdmFyIGhhc0R5bmFtaWNTY29wZWRTbG90ID0gISEoXG4gICAgKG5ld1Njb3BlZFNsb3RzICYmICFuZXdTY29wZWRTbG90cy4kc3RhYmxlKSB8fFxuICAgIChvbGRTY29wZWRTbG90cyAhPT0gZW1wdHlPYmplY3QgJiYgIW9sZFNjb3BlZFNsb3RzLiRzdGFibGUpIHx8XG4gICAgKG5ld1Njb3BlZFNsb3RzICYmIHZtLiRzY29wZWRTbG90cy4ka2V5ICE9PSBuZXdTY29wZWRTbG90cy4ka2V5KVxuICApO1xuXG4gIC8vIEFueSBzdGF0aWMgc2xvdCBjaGlsZHJlbiBmcm9tIHRoZSBwYXJlbnQgbWF5IGhhdmUgY2hhbmdlZCBkdXJpbmcgcGFyZW50J3NcbiAgLy8gdXBkYXRlLiBEeW5hbWljIHNjb3BlZCBzbG90cyBtYXkgYWxzbyBoYXZlIGNoYW5nZWQuIEluIHN1Y2ggY2FzZXMsIGEgZm9yY2VkXG4gIC8vIHVwZGF0ZSBpcyBuZWNlc3NhcnkgdG8gZW5zdXJlIGNvcnJlY3RuZXNzLlxuICB2YXIgbmVlZHNGb3JjZVVwZGF0ZSA9ICEhKFxuICAgIHJlbmRlckNoaWxkcmVuIHx8ICAgICAgICAgICAgICAgLy8gaGFzIG5ldyBzdGF0aWMgc2xvdHNcbiAgICB2bS4kb3B0aW9ucy5fcmVuZGVyQ2hpbGRyZW4gfHwgIC8vIGhhcyBvbGQgc3RhdGljIHNsb3RzXG4gICAgaGFzRHluYW1pY1Njb3BlZFNsb3RcbiAgKTtcblxuICB2bS4kb3B0aW9ucy5fcGFyZW50Vm5vZGUgPSBwYXJlbnRWbm9kZTtcbiAgdm0uJHZub2RlID0gcGFyZW50Vm5vZGU7IC8vIHVwZGF0ZSB2bSdzIHBsYWNlaG9sZGVyIG5vZGUgd2l0aG91dCByZS1yZW5kZXJcblxuICBpZiAodm0uX3Zub2RlKSB7IC8vIHVwZGF0ZSBjaGlsZCB0cmVlJ3MgcGFyZW50XG4gICAgdm0uX3Zub2RlLnBhcmVudCA9IHBhcmVudFZub2RlO1xuICB9XG4gIHZtLiRvcHRpb25zLl9yZW5kZXJDaGlsZHJlbiA9IHJlbmRlckNoaWxkcmVuO1xuXG4gIC8vIHVwZGF0ZSAkYXR0cnMgYW5kICRsaXN0ZW5lcnMgaGFzaFxuICAvLyB0aGVzZSBhcmUgYWxzbyByZWFjdGl2ZSBzbyB0aGV5IG1heSB0cmlnZ2VyIGNoaWxkIHVwZGF0ZSBpZiB0aGUgY2hpbGRcbiAgLy8gdXNlZCB0aGVtIGR1cmluZyByZW5kZXJcbiAgdm0uJGF0dHJzID0gcGFyZW50Vm5vZGUuZGF0YS5hdHRycyB8fCBlbXB0eU9iamVjdDtcbiAgdm0uJGxpc3RlbmVycyA9IGxpc3RlbmVycyB8fCBlbXB0eU9iamVjdDtcblxuICAvLyB1cGRhdGUgcHJvcHNcbiAgaWYgKHByb3BzRGF0YSAmJiB2bS4kb3B0aW9ucy5wcm9wcykge1xuICAgIHRvZ2dsZU9ic2VydmluZyhmYWxzZSk7XG4gICAgdmFyIHByb3BzID0gdm0uX3Byb3BzO1xuICAgIHZhciBwcm9wS2V5cyA9IHZtLiRvcHRpb25zLl9wcm9wS2V5cyB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BLZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIga2V5ID0gcHJvcEtleXNbaV07XG4gICAgICB2YXIgcHJvcE9wdGlvbnMgPSB2bS4kb3B0aW9ucy5wcm9wczsgLy8gd3RmIGZsb3c/XG4gICAgICBwcm9wc1trZXldID0gdmFsaWRhdGVQcm9wKGtleSwgcHJvcE9wdGlvbnMsIHByb3BzRGF0YSwgdm0pO1xuICAgIH1cbiAgICB0b2dnbGVPYnNlcnZpbmcodHJ1ZSk7XG4gICAgLy8ga2VlcCBhIGNvcHkgb2YgcmF3IHByb3BzRGF0YVxuICAgIHZtLiRvcHRpb25zLnByb3BzRGF0YSA9IHByb3BzRGF0YTtcbiAgfVxuICBcbiAgLy8gZml4ZWQgYnkgeHh4eHh4IHVwZGF0ZSBwcm9wZXJ0aWVzKG1wIHJ1bnRpbWUpXG4gIHZtLl8kdXBkYXRlUHJvcGVydGllcyAmJiB2bS5fJHVwZGF0ZVByb3BlcnRpZXModm0pO1xuICBcbiAgLy8gdXBkYXRlIGxpc3RlbmVyc1xuICBsaXN0ZW5lcnMgPSBsaXN0ZW5lcnMgfHwgZW1wdHlPYmplY3Q7XG4gIHZhciBvbGRMaXN0ZW5lcnMgPSB2bS4kb3B0aW9ucy5fcGFyZW50TGlzdGVuZXJzO1xuICB2bS4kb3B0aW9ucy5fcGFyZW50TGlzdGVuZXJzID0gbGlzdGVuZXJzO1xuICB1cGRhdGVDb21wb25lbnRMaXN0ZW5lcnModm0sIGxpc3RlbmVycywgb2xkTGlzdGVuZXJzKTtcblxuICAvLyByZXNvbHZlIHNsb3RzICsgZm9yY2UgdXBkYXRlIGlmIGhhcyBjaGlsZHJlblxuICBpZiAobmVlZHNGb3JjZVVwZGF0ZSkge1xuICAgIHZtLiRzbG90cyA9IHJlc29sdmVTbG90cyhyZW5kZXJDaGlsZHJlbiwgcGFyZW50Vm5vZGUuY29udGV4dCk7XG4gICAgdm0uJGZvcmNlVXBkYXRlKCk7XG4gIH1cblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGlzVXBkYXRpbmdDaGlsZENvbXBvbmVudCA9IGZhbHNlO1xuICB9XG59XG5cbmZ1bmN0aW9uIGlzSW5JbmFjdGl2ZVRyZWUgKHZtKSB7XG4gIHdoaWxlICh2bSAmJiAodm0gPSB2bS4kcGFyZW50KSkge1xuICAgIGlmICh2bS5faW5hY3RpdmUpIHsgcmV0dXJuIHRydWUgfVxuICB9XG4gIHJldHVybiBmYWxzZVxufVxuXG5mdW5jdGlvbiBhY3RpdmF0ZUNoaWxkQ29tcG9uZW50ICh2bSwgZGlyZWN0KSB7XG4gIGlmIChkaXJlY3QpIHtcbiAgICB2bS5fZGlyZWN0SW5hY3RpdmUgPSBmYWxzZTtcbiAgICBpZiAoaXNJbkluYWN0aXZlVHJlZSh2bSkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cbiAgfSBlbHNlIGlmICh2bS5fZGlyZWN0SW5hY3RpdmUpIHtcbiAgICByZXR1cm5cbiAgfVxuICBpZiAodm0uX2luYWN0aXZlIHx8IHZtLl9pbmFjdGl2ZSA9PT0gbnVsbCkge1xuICAgIHZtLl9pbmFjdGl2ZSA9IGZhbHNlO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdm0uJGNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICBhY3RpdmF0ZUNoaWxkQ29tcG9uZW50KHZtLiRjaGlsZHJlbltpXSk7XG4gICAgfVxuICAgIGNhbGxIb29rKHZtLCAnYWN0aXZhdGVkJyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gZGVhY3RpdmF0ZUNoaWxkQ29tcG9uZW50ICh2bSwgZGlyZWN0KSB7XG4gIGlmIChkaXJlY3QpIHtcbiAgICB2bS5fZGlyZWN0SW5hY3RpdmUgPSB0cnVlO1xuICAgIGlmIChpc0luSW5hY3RpdmVUcmVlKHZtKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuICB9XG4gIGlmICghdm0uX2luYWN0aXZlKSB7XG4gICAgdm0uX2luYWN0aXZlID0gdHJ1ZTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHZtLiRjaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgZGVhY3RpdmF0ZUNoaWxkQ29tcG9uZW50KHZtLiRjaGlsZHJlbltpXSk7XG4gICAgfVxuICAgIGNhbGxIb29rKHZtLCAnZGVhY3RpdmF0ZWQnKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBjYWxsSG9vayAodm0sIGhvb2spIHtcbiAgLy8gIzc1NzMgZGlzYWJsZSBkZXAgY29sbGVjdGlvbiB3aGVuIGludm9raW5nIGxpZmVjeWNsZSBob29rc1xuICBwdXNoVGFyZ2V0KCk7XG4gIHZhciBoYW5kbGVycyA9IHZtLiRvcHRpb25zW2hvb2tdO1xuICB2YXIgaW5mbyA9IGhvb2sgKyBcIiBob29rXCI7XG4gIGlmIChoYW5kbGVycykge1xuICAgIGZvciAodmFyIGkgPSAwLCBqID0gaGFuZGxlcnMubGVuZ3RoOyBpIDwgajsgaSsrKSB7XG4gICAgICBpbnZva2VXaXRoRXJyb3JIYW5kbGluZyhoYW5kbGVyc1tpXSwgdm0sIG51bGwsIHZtLCBpbmZvKTtcbiAgICB9XG4gIH1cbiAgaWYgKHZtLl9oYXNIb29rRXZlbnQpIHtcbiAgICB2bS4kZW1pdCgnaG9vazonICsgaG9vayk7XG4gIH1cbiAgcG9wVGFyZ2V0KCk7XG59XG5cbi8qICAqL1xuXG52YXIgTUFYX1VQREFURV9DT1VOVCA9IDEwMDtcblxudmFyIHF1ZXVlID0gW107XG52YXIgYWN0aXZhdGVkQ2hpbGRyZW4gPSBbXTtcbnZhciBoYXMgPSB7fTtcbnZhciBjaXJjdWxhciA9IHt9O1xudmFyIHdhaXRpbmcgPSBmYWxzZTtcbnZhciBmbHVzaGluZyA9IGZhbHNlO1xudmFyIGluZGV4ID0gMDtcblxuLyoqXG4gKiBSZXNldCB0aGUgc2NoZWR1bGVyJ3Mgc3RhdGUuXG4gKi9cbmZ1bmN0aW9uIHJlc2V0U2NoZWR1bGVyU3RhdGUgKCkge1xuICBpbmRleCA9IHF1ZXVlLmxlbmd0aCA9IGFjdGl2YXRlZENoaWxkcmVuLmxlbmd0aCA9IDA7XG4gIGhhcyA9IHt9O1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGNpcmN1bGFyID0ge307XG4gIH1cbiAgd2FpdGluZyA9IGZsdXNoaW5nID0gZmFsc2U7XG59XG5cbi8vIEFzeW5jIGVkZ2UgY2FzZSAjNjU2NiByZXF1aXJlcyBzYXZpbmcgdGhlIHRpbWVzdGFtcCB3aGVuIGV2ZW50IGxpc3RlbmVycyBhcmVcbi8vIGF0dGFjaGVkLiBIb3dldmVyLCBjYWxsaW5nIHBlcmZvcm1hbmNlLm5vdygpIGhhcyBhIHBlcmYgb3ZlcmhlYWQgZXNwZWNpYWxseVxuLy8gaWYgdGhlIHBhZ2UgaGFzIHRob3VzYW5kcyBvZiBldmVudCBsaXN0ZW5lcnMuIEluc3RlYWQsIHdlIHRha2UgYSB0aW1lc3RhbXBcbi8vIGV2ZXJ5IHRpbWUgdGhlIHNjaGVkdWxlciBmbHVzaGVzIGFuZCB1c2UgdGhhdCBmb3IgYWxsIGV2ZW50IGxpc3RlbmVyc1xuLy8gYXR0YWNoZWQgZHVyaW5nIHRoYXQgZmx1c2guXG52YXIgY3VycmVudEZsdXNoVGltZXN0YW1wID0gMDtcblxuLy8gQXN5bmMgZWRnZSBjYXNlIGZpeCByZXF1aXJlcyBzdG9yaW5nIGFuIGV2ZW50IGxpc3RlbmVyJ3MgYXR0YWNoIHRpbWVzdGFtcC5cbnZhciBnZXROb3cgPSBEYXRlLm5vdztcblxuLy8gRGV0ZXJtaW5lIHdoYXQgZXZlbnQgdGltZXN0YW1wIHRoZSBicm93c2VyIGlzIHVzaW5nLiBBbm5veWluZ2x5LCB0aGVcbi8vIHRpbWVzdGFtcCBjYW4gZWl0aGVyIGJlIGhpLXJlcyAocmVsYXRpdmUgdG8gcGFnZSBsb2FkKSBvciBsb3ctcmVzXG4vLyAocmVsYXRpdmUgdG8gVU5JWCBlcG9jaCksIHNvIGluIG9yZGVyIHRvIGNvbXBhcmUgdGltZSB3ZSBoYXZlIHRvIHVzZSB0aGVcbi8vIHNhbWUgdGltZXN0YW1wIHR5cGUgd2hlbiBzYXZpbmcgdGhlIGZsdXNoIHRpbWVzdGFtcC5cbi8vIEFsbCBJRSB2ZXJzaW9ucyB1c2UgbG93LXJlcyBldmVudCB0aW1lc3RhbXBzLCBhbmQgaGF2ZSBwcm9ibGVtYXRpYyBjbG9ja1xuLy8gaW1wbGVtZW50YXRpb25zICgjOTYzMilcbmlmIChpbkJyb3dzZXIgJiYgIWlzSUUpIHtcbiAgdmFyIHBlcmZvcm1hbmNlID0gd2luZG93LnBlcmZvcm1hbmNlO1xuICBpZiAoXG4gICAgcGVyZm9ybWFuY2UgJiZcbiAgICB0eXBlb2YgcGVyZm9ybWFuY2Uubm93ID09PSAnZnVuY3Rpb24nICYmXG4gICAgZ2V0Tm93KCkgPiBkb2N1bWVudC5jcmVhdGVFdmVudCgnRXZlbnQnKS50aW1lU3RhbXBcbiAgKSB7XG4gICAgLy8gaWYgdGhlIGV2ZW50IHRpbWVzdGFtcCwgYWx0aG91Z2ggZXZhbHVhdGVkIEFGVEVSIHRoZSBEYXRlLm5vdygpLCBpc1xuICAgIC8vIHNtYWxsZXIgdGhhbiBpdCwgaXQgbWVhbnMgdGhlIGV2ZW50IGlzIHVzaW5nIGEgaGktcmVzIHRpbWVzdGFtcCxcbiAgICAvLyBhbmQgd2UgbmVlZCB0byB1c2UgdGhlIGhpLXJlcyB2ZXJzaW9uIGZvciBldmVudCBsaXN0ZW5lciB0aW1lc3RhbXBzIGFzXG4gICAgLy8gd2VsbC5cbiAgICBnZXROb3cgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBwZXJmb3JtYW5jZS5ub3coKTsgfTtcbiAgfVxufVxuXG4vKipcbiAqIEZsdXNoIGJvdGggcXVldWVzIGFuZCBydW4gdGhlIHdhdGNoZXJzLlxuICovXG5mdW5jdGlvbiBmbHVzaFNjaGVkdWxlclF1ZXVlICgpIHtcbiAgY3VycmVudEZsdXNoVGltZXN0YW1wID0gZ2V0Tm93KCk7XG4gIGZsdXNoaW5nID0gdHJ1ZTtcbiAgdmFyIHdhdGNoZXIsIGlkO1xuXG4gIC8vIFNvcnQgcXVldWUgYmVmb3JlIGZsdXNoLlxuICAvLyBUaGlzIGVuc3VyZXMgdGhhdDpcbiAgLy8gMS4gQ29tcG9uZW50cyBhcmUgdXBkYXRlZCBmcm9tIHBhcmVudCB0byBjaGlsZC4gKGJlY2F1c2UgcGFyZW50IGlzIGFsd2F5c1xuICAvLyAgICBjcmVhdGVkIGJlZm9yZSB0aGUgY2hpbGQpXG4gIC8vIDIuIEEgY29tcG9uZW50J3MgdXNlciB3YXRjaGVycyBhcmUgcnVuIGJlZm9yZSBpdHMgcmVuZGVyIHdhdGNoZXIgKGJlY2F1c2VcbiAgLy8gICAgdXNlciB3YXRjaGVycyBhcmUgY3JlYXRlZCBiZWZvcmUgdGhlIHJlbmRlciB3YXRjaGVyKVxuICAvLyAzLiBJZiBhIGNvbXBvbmVudCBpcyBkZXN0cm95ZWQgZHVyaW5nIGEgcGFyZW50IGNvbXBvbmVudCdzIHdhdGNoZXIgcnVuLFxuICAvLyAgICBpdHMgd2F0Y2hlcnMgY2FuIGJlIHNraXBwZWQuXG4gIHF1ZXVlLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHsgcmV0dXJuIGEuaWQgLSBiLmlkOyB9KTtcblxuICAvLyBkbyBub3QgY2FjaGUgbGVuZ3RoIGJlY2F1c2UgbW9yZSB3YXRjaGVycyBtaWdodCBiZSBwdXNoZWRcbiAgLy8gYXMgd2UgcnVuIGV4aXN0aW5nIHdhdGNoZXJzXG4gIGZvciAoaW5kZXggPSAwOyBpbmRleCA8IHF1ZXVlLmxlbmd0aDsgaW5kZXgrKykge1xuICAgIHdhdGNoZXIgPSBxdWV1ZVtpbmRleF07XG4gICAgaWYgKHdhdGNoZXIuYmVmb3JlKSB7XG4gICAgICB3YXRjaGVyLmJlZm9yZSgpO1xuICAgIH1cbiAgICBpZCA9IHdhdGNoZXIuaWQ7XG4gICAgaGFzW2lkXSA9IG51bGw7XG4gICAgd2F0Y2hlci5ydW4oKTtcbiAgICAvLyBpbiBkZXYgYnVpbGQsIGNoZWNrIGFuZCBzdG9wIGNpcmN1bGFyIHVwZGF0ZXMuXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgaGFzW2lkXSAhPSBudWxsKSB7XG4gICAgICBjaXJjdWxhcltpZF0gPSAoY2lyY3VsYXJbaWRdIHx8IDApICsgMTtcbiAgICAgIGlmIChjaXJjdWxhcltpZF0gPiBNQVhfVVBEQVRFX0NPVU5UKSB7XG4gICAgICAgIHdhcm4oXG4gICAgICAgICAgJ1lvdSBtYXkgaGF2ZSBhbiBpbmZpbml0ZSB1cGRhdGUgbG9vcCAnICsgKFxuICAgICAgICAgICAgd2F0Y2hlci51c2VyXG4gICAgICAgICAgICAgID8gKFwiaW4gd2F0Y2hlciB3aXRoIGV4cHJlc3Npb24gXFxcIlwiICsgKHdhdGNoZXIuZXhwcmVzc2lvbikgKyBcIlxcXCJcIilcbiAgICAgICAgICAgICAgOiBcImluIGEgY29tcG9uZW50IHJlbmRlciBmdW5jdGlvbi5cIlxuICAgICAgICAgICksXG4gICAgICAgICAgd2F0Y2hlci52bVxuICAgICAgICApO1xuICAgICAgICBicmVha1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vIGtlZXAgY29waWVzIG9mIHBvc3QgcXVldWVzIGJlZm9yZSByZXNldHRpbmcgc3RhdGVcbiAgdmFyIGFjdGl2YXRlZFF1ZXVlID0gYWN0aXZhdGVkQ2hpbGRyZW4uc2xpY2UoKTtcbiAgdmFyIHVwZGF0ZWRRdWV1ZSA9IHF1ZXVlLnNsaWNlKCk7XG5cbiAgcmVzZXRTY2hlZHVsZXJTdGF0ZSgpO1xuXG4gIC8vIGNhbGwgY29tcG9uZW50IHVwZGF0ZWQgYW5kIGFjdGl2YXRlZCBob29rc1xuICBjYWxsQWN0aXZhdGVkSG9va3MoYWN0aXZhdGVkUXVldWUpO1xuICBjYWxsVXBkYXRlZEhvb2tzKHVwZGF0ZWRRdWV1ZSk7XG5cbiAgLy8gZGV2dG9vbCBob29rXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICBpZiAoZGV2dG9vbHMgJiYgY29uZmlnLmRldnRvb2xzKSB7XG4gICAgZGV2dG9vbHMuZW1pdCgnZmx1c2gnKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBjYWxsVXBkYXRlZEhvb2tzIChxdWV1ZSkge1xuICB2YXIgaSA9IHF1ZXVlLmxlbmd0aDtcbiAgd2hpbGUgKGktLSkge1xuICAgIHZhciB3YXRjaGVyID0gcXVldWVbaV07XG4gICAgdmFyIHZtID0gd2F0Y2hlci52bTtcbiAgICBpZiAodm0uX3dhdGNoZXIgPT09IHdhdGNoZXIgJiYgdm0uX2lzTW91bnRlZCAmJiAhdm0uX2lzRGVzdHJveWVkKSB7XG4gICAgICBjYWxsSG9vayh2bSwgJ3VwZGF0ZWQnKTtcbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBRdWV1ZSBhIGtlcHQtYWxpdmUgY29tcG9uZW50IHRoYXQgd2FzIGFjdGl2YXRlZCBkdXJpbmcgcGF0Y2guXG4gKiBUaGUgcXVldWUgd2lsbCBiZSBwcm9jZXNzZWQgYWZ0ZXIgdGhlIGVudGlyZSB0cmVlIGhhcyBiZWVuIHBhdGNoZWQuXG4gKi9cbmZ1bmN0aW9uIHF1ZXVlQWN0aXZhdGVkQ29tcG9uZW50ICh2bSkge1xuICAvLyBzZXR0aW5nIF9pbmFjdGl2ZSB0byBmYWxzZSBoZXJlIHNvIHRoYXQgYSByZW5kZXIgZnVuY3Rpb24gY2FuXG4gIC8vIHJlbHkgb24gY2hlY2tpbmcgd2hldGhlciBpdCdzIGluIGFuIGluYWN0aXZlIHRyZWUgKGUuZy4gcm91dGVyLXZpZXcpXG4gIHZtLl9pbmFjdGl2ZSA9IGZhbHNlO1xuICBhY3RpdmF0ZWRDaGlsZHJlbi5wdXNoKHZtKTtcbn1cblxuZnVuY3Rpb24gY2FsbEFjdGl2YXRlZEhvb2tzIChxdWV1ZSkge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHF1ZXVlLmxlbmd0aDsgaSsrKSB7XG4gICAgcXVldWVbaV0uX2luYWN0aXZlID0gdHJ1ZTtcbiAgICBhY3RpdmF0ZUNoaWxkQ29tcG9uZW50KHF1ZXVlW2ldLCB0cnVlIC8qIHRydWUgKi8pO1xuICB9XG59XG5cbi8qKlxuICogUHVzaCBhIHdhdGNoZXIgaW50byB0aGUgd2F0Y2hlciBxdWV1ZS5cbiAqIEpvYnMgd2l0aCBkdXBsaWNhdGUgSURzIHdpbGwgYmUgc2tpcHBlZCB1bmxlc3MgaXQnc1xuICogcHVzaGVkIHdoZW4gdGhlIHF1ZXVlIGlzIGJlaW5nIGZsdXNoZWQuXG4gKi9cbmZ1bmN0aW9uIHF1ZXVlV2F0Y2hlciAod2F0Y2hlcikge1xuICB2YXIgaWQgPSB3YXRjaGVyLmlkO1xuICBpZiAoaGFzW2lkXSA9PSBudWxsKSB7XG4gICAgaGFzW2lkXSA9IHRydWU7XG4gICAgaWYgKCFmbHVzaGluZykge1xuICAgICAgcXVldWUucHVzaCh3YXRjaGVyKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gaWYgYWxyZWFkeSBmbHVzaGluZywgc3BsaWNlIHRoZSB3YXRjaGVyIGJhc2VkIG9uIGl0cyBpZFxuICAgICAgLy8gaWYgYWxyZWFkeSBwYXN0IGl0cyBpZCwgaXQgd2lsbCBiZSBydW4gbmV4dCBpbW1lZGlhdGVseS5cbiAgICAgIHZhciBpID0gcXVldWUubGVuZ3RoIC0gMTtcbiAgICAgIHdoaWxlIChpID4gaW5kZXggJiYgcXVldWVbaV0uaWQgPiB3YXRjaGVyLmlkKSB7XG4gICAgICAgIGktLTtcbiAgICAgIH1cbiAgICAgIHF1ZXVlLnNwbGljZShpICsgMSwgMCwgd2F0Y2hlcik7XG4gICAgfVxuICAgIC8vIHF1ZXVlIHRoZSBmbHVzaFxuICAgIGlmICghd2FpdGluZykge1xuICAgICAgd2FpdGluZyA9IHRydWU7XG5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmICFjb25maWcuYXN5bmMpIHtcbiAgICAgICAgZmx1c2hTY2hlZHVsZXJRdWV1ZSgpO1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICAgIG5leHRUaWNrKGZsdXNoU2NoZWR1bGVyUXVldWUpO1xuICAgIH1cbiAgfVxufVxuXG4vKiAgKi9cblxuXG5cbnZhciB1aWQkMiA9IDA7XG5cbi8qKlxuICogQSB3YXRjaGVyIHBhcnNlcyBhbiBleHByZXNzaW9uLCBjb2xsZWN0cyBkZXBlbmRlbmNpZXMsXG4gKiBhbmQgZmlyZXMgY2FsbGJhY2sgd2hlbiB0aGUgZXhwcmVzc2lvbiB2YWx1ZSBjaGFuZ2VzLlxuICogVGhpcyBpcyB1c2VkIGZvciBib3RoIHRoZSAkd2F0Y2goKSBhcGkgYW5kIGRpcmVjdGl2ZXMuXG4gKi9cbnZhciBXYXRjaGVyID0gZnVuY3Rpb24gV2F0Y2hlciAoXG4gIHZtLFxuICBleHBPckZuLFxuICBjYixcbiAgb3B0aW9ucyxcbiAgaXNSZW5kZXJXYXRjaGVyXG4pIHtcbiAgdGhpcy52bSA9IHZtO1xuICBpZiAoaXNSZW5kZXJXYXRjaGVyKSB7XG4gICAgdm0uX3dhdGNoZXIgPSB0aGlzO1xuICB9XG4gIHZtLl93YXRjaGVycy5wdXNoKHRoaXMpO1xuICAvLyBvcHRpb25zXG4gIGlmIChvcHRpb25zKSB7XG4gICAgdGhpcy5kZWVwID0gISFvcHRpb25zLmRlZXA7XG4gICAgdGhpcy51c2VyID0gISFvcHRpb25zLnVzZXI7XG4gICAgdGhpcy5sYXp5ID0gISFvcHRpb25zLmxhenk7XG4gICAgdGhpcy5zeW5jID0gISFvcHRpb25zLnN5bmM7XG4gICAgdGhpcy5iZWZvcmUgPSBvcHRpb25zLmJlZm9yZTtcbiAgfSBlbHNlIHtcbiAgICB0aGlzLmRlZXAgPSB0aGlzLnVzZXIgPSB0aGlzLmxhenkgPSB0aGlzLnN5bmMgPSBmYWxzZTtcbiAgfVxuICB0aGlzLmNiID0gY2I7XG4gIHRoaXMuaWQgPSArK3VpZCQyOyAvLyB1aWQgZm9yIGJhdGNoaW5nXG4gIHRoaXMuYWN0aXZlID0gdHJ1ZTtcbiAgdGhpcy5kaXJ0eSA9IHRoaXMubGF6eTsgLy8gZm9yIGxhenkgd2F0Y2hlcnNcbiAgdGhpcy5kZXBzID0gW107XG4gIHRoaXMubmV3RGVwcyA9IFtdO1xuICB0aGlzLmRlcElkcyA9IG5ldyBfU2V0KCk7XG4gIHRoaXMubmV3RGVwSWRzID0gbmV3IF9TZXQoKTtcbiAgdGhpcy5leHByZXNzaW9uID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJ1xuICAgID8gZXhwT3JGbi50b1N0cmluZygpXG4gICAgOiAnJztcbiAgLy8gcGFyc2UgZXhwcmVzc2lvbiBmb3IgZ2V0dGVyXG4gIGlmICh0eXBlb2YgZXhwT3JGbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHRoaXMuZ2V0dGVyID0gZXhwT3JGbjtcbiAgfSBlbHNlIHtcbiAgICB0aGlzLmdldHRlciA9IHBhcnNlUGF0aChleHBPckZuKTtcbiAgICBpZiAoIXRoaXMuZ2V0dGVyKSB7XG4gICAgICB0aGlzLmdldHRlciA9IG5vb3A7XG4gICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIHdhcm4oXG4gICAgICAgIFwiRmFpbGVkIHdhdGNoaW5nIHBhdGg6IFxcXCJcIiArIGV4cE9yRm4gKyBcIlxcXCIgXCIgK1xuICAgICAgICAnV2F0Y2hlciBvbmx5IGFjY2VwdHMgc2ltcGxlIGRvdC1kZWxpbWl0ZWQgcGF0aHMuICcgK1xuICAgICAgICAnRm9yIGZ1bGwgY29udHJvbCwgdXNlIGEgZnVuY3Rpb24gaW5zdGVhZC4nLFxuICAgICAgICB2bVxuICAgICAgKTtcbiAgICB9XG4gIH1cbiAgdGhpcy52YWx1ZSA9IHRoaXMubGF6eVxuICAgID8gdW5kZWZpbmVkXG4gICAgOiB0aGlzLmdldCgpO1xufTtcblxuLyoqXG4gKiBFdmFsdWF0ZSB0aGUgZ2V0dGVyLCBhbmQgcmUtY29sbGVjdCBkZXBlbmRlbmNpZXMuXG4gKi9cbldhdGNoZXIucHJvdG90eXBlLmdldCA9IGZ1bmN0aW9uIGdldCAoKSB7XG4gIHB1c2hUYXJnZXQodGhpcyk7XG4gIHZhciB2YWx1ZTtcbiAgdmFyIHZtID0gdGhpcy52bTtcbiAgdHJ5IHtcbiAgICB2YWx1ZSA9IHRoaXMuZ2V0dGVyLmNhbGwodm0sIHZtKTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIGlmICh0aGlzLnVzZXIpIHtcbiAgICAgIGhhbmRsZUVycm9yKGUsIHZtLCAoXCJnZXR0ZXIgZm9yIHdhdGNoZXIgXFxcIlwiICsgKHRoaXMuZXhwcmVzc2lvbikgKyBcIlxcXCJcIikpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBlXG4gICAgfVxuICB9IGZpbmFsbHkge1xuICAgIC8vIFwidG91Y2hcIiBldmVyeSBwcm9wZXJ0eSBzbyB0aGV5IGFyZSBhbGwgdHJhY2tlZCBhc1xuICAgIC8vIGRlcGVuZGVuY2llcyBmb3IgZGVlcCB3YXRjaGluZ1xuICAgIGlmICh0aGlzLmRlZXApIHtcbiAgICAgIHRyYXZlcnNlKHZhbHVlKTtcbiAgICB9XG4gICAgcG9wVGFyZ2V0KCk7XG4gICAgdGhpcy5jbGVhbnVwRGVwcygpO1xuICB9XG4gIHJldHVybiB2YWx1ZVxufTtcblxuLyoqXG4gKiBBZGQgYSBkZXBlbmRlbmN5IHRvIHRoaXMgZGlyZWN0aXZlLlxuICovXG5XYXRjaGVyLnByb3RvdHlwZS5hZGREZXAgPSBmdW5jdGlvbiBhZGREZXAgKGRlcCkge1xuICB2YXIgaWQgPSBkZXAuaWQ7XG4gIGlmICghdGhpcy5uZXdEZXBJZHMuaGFzKGlkKSkge1xuICAgIHRoaXMubmV3RGVwSWRzLmFkZChpZCk7XG4gICAgdGhpcy5uZXdEZXBzLnB1c2goZGVwKTtcbiAgICBpZiAoIXRoaXMuZGVwSWRzLmhhcyhpZCkpIHtcbiAgICAgIGRlcC5hZGRTdWIodGhpcyk7XG4gICAgfVxuICB9XG59O1xuXG4vKipcbiAqIENsZWFuIHVwIGZvciBkZXBlbmRlbmN5IGNvbGxlY3Rpb24uXG4gKi9cbldhdGNoZXIucHJvdG90eXBlLmNsZWFudXBEZXBzID0gZnVuY3Rpb24gY2xlYW51cERlcHMgKCkge1xuICB2YXIgaSA9IHRoaXMuZGVwcy5sZW5ndGg7XG4gIHdoaWxlIChpLS0pIHtcbiAgICB2YXIgZGVwID0gdGhpcy5kZXBzW2ldO1xuICAgIGlmICghdGhpcy5uZXdEZXBJZHMuaGFzKGRlcC5pZCkpIHtcbiAgICAgIGRlcC5yZW1vdmVTdWIodGhpcyk7XG4gICAgfVxuICB9XG4gIHZhciB0bXAgPSB0aGlzLmRlcElkcztcbiAgdGhpcy5kZXBJZHMgPSB0aGlzLm5ld0RlcElkcztcbiAgdGhpcy5uZXdEZXBJZHMgPSB0bXA7XG4gIHRoaXMubmV3RGVwSWRzLmNsZWFyKCk7XG4gIHRtcCA9IHRoaXMuZGVwcztcbiAgdGhpcy5kZXBzID0gdGhpcy5uZXdEZXBzO1xuICB0aGlzLm5ld0RlcHMgPSB0bXA7XG4gIHRoaXMubmV3RGVwcy5sZW5ndGggPSAwO1xufTtcblxuLyoqXG4gKiBTdWJzY3JpYmVyIGludGVyZmFjZS5cbiAqIFdpbGwgYmUgY2FsbGVkIHdoZW4gYSBkZXBlbmRlbmN5IGNoYW5nZXMuXG4gKi9cbldhdGNoZXIucHJvdG90eXBlLnVwZGF0ZSA9IGZ1bmN0aW9uIHVwZGF0ZSAoKSB7XG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICovXG4gIGlmICh0aGlzLmxhenkpIHtcbiAgICB0aGlzLmRpcnR5ID0gdHJ1ZTtcbiAgfSBlbHNlIGlmICh0aGlzLnN5bmMpIHtcbiAgICB0aGlzLnJ1bigpO1xuICB9IGVsc2Uge1xuICAgIHF1ZXVlV2F0Y2hlcih0aGlzKTtcbiAgfVxufTtcblxuLyoqXG4gKiBTY2hlZHVsZXIgam9iIGludGVyZmFjZS5cbiAqIFdpbGwgYmUgY2FsbGVkIGJ5IHRoZSBzY2hlZHVsZXIuXG4gKi9cbldhdGNoZXIucHJvdG90eXBlLnJ1biA9IGZ1bmN0aW9uIHJ1biAoKSB7XG4gIGlmICh0aGlzLmFjdGl2ZSkge1xuICAgIHZhciB2YWx1ZSA9IHRoaXMuZ2V0KCk7XG4gICAgaWYgKFxuICAgICAgdmFsdWUgIT09IHRoaXMudmFsdWUgfHxcbiAgICAgIC8vIERlZXAgd2F0Y2hlcnMgYW5kIHdhdGNoZXJzIG9uIE9iamVjdC9BcnJheXMgc2hvdWxkIGZpcmUgZXZlblxuICAgICAgLy8gd2hlbiB0aGUgdmFsdWUgaXMgdGhlIHNhbWUsIGJlY2F1c2UgdGhlIHZhbHVlIG1heVxuICAgICAgLy8gaGF2ZSBtdXRhdGVkLlxuICAgICAgaXNPYmplY3QodmFsdWUpIHx8XG4gICAgICB0aGlzLmRlZXBcbiAgICApIHtcbiAgICAgIC8vIHNldCBuZXcgdmFsdWVcbiAgICAgIHZhciBvbGRWYWx1ZSA9IHRoaXMudmFsdWU7XG4gICAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgICBpZiAodGhpcy51c2VyKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgdGhpcy5jYi5jYWxsKHRoaXMudm0sIHZhbHVlLCBvbGRWYWx1ZSk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICBoYW5kbGVFcnJvcihlLCB0aGlzLnZtLCAoXCJjYWxsYmFjayBmb3Igd2F0Y2hlciBcXFwiXCIgKyAodGhpcy5leHByZXNzaW9uKSArIFwiXFxcIlwiKSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuY2IuY2FsbCh0aGlzLnZtLCB2YWx1ZSwgb2xkVmFsdWUpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufTtcblxuLyoqXG4gKiBFdmFsdWF0ZSB0aGUgdmFsdWUgb2YgdGhlIHdhdGNoZXIuXG4gKiBUaGlzIG9ubHkgZ2V0cyBjYWxsZWQgZm9yIGxhenkgd2F0Y2hlcnMuXG4gKi9cbldhdGNoZXIucHJvdG90eXBlLmV2YWx1YXRlID0gZnVuY3Rpb24gZXZhbHVhdGUgKCkge1xuICB0aGlzLnZhbHVlID0gdGhpcy5nZXQoKTtcbiAgdGhpcy5kaXJ0eSA9IGZhbHNlO1xufTtcblxuLyoqXG4gKiBEZXBlbmQgb24gYWxsIGRlcHMgY29sbGVjdGVkIGJ5IHRoaXMgd2F0Y2hlci5cbiAqL1xuV2F0Y2hlci5wcm90b3R5cGUuZGVwZW5kID0gZnVuY3Rpb24gZGVwZW5kICgpIHtcbiAgdmFyIGkgPSB0aGlzLmRlcHMubGVuZ3RoO1xuICB3aGlsZSAoaS0tKSB7XG4gICAgdGhpcy5kZXBzW2ldLmRlcGVuZCgpO1xuICB9XG59O1xuXG4vKipcbiAqIFJlbW92ZSBzZWxmIGZyb20gYWxsIGRlcGVuZGVuY2llcycgc3Vic2NyaWJlciBsaXN0LlxuICovXG5XYXRjaGVyLnByb3RvdHlwZS50ZWFyZG93biA9IGZ1bmN0aW9uIHRlYXJkb3duICgpIHtcbiAgaWYgKHRoaXMuYWN0aXZlKSB7XG4gICAgLy8gcmVtb3ZlIHNlbGYgZnJvbSB2bSdzIHdhdGNoZXIgbGlzdFxuICAgIC8vIHRoaXMgaXMgYSBzb21ld2hhdCBleHBlbnNpdmUgb3BlcmF0aW9uIHNvIHdlIHNraXAgaXRcbiAgICAvLyBpZiB0aGUgdm0gaXMgYmVpbmcgZGVzdHJveWVkLlxuICAgIGlmICghdGhpcy52bS5faXNCZWluZ0Rlc3Ryb3llZCkge1xuICAgICAgcmVtb3ZlKHRoaXMudm0uX3dhdGNoZXJzLCB0aGlzKTtcbiAgICB9XG4gICAgdmFyIGkgPSB0aGlzLmRlcHMubGVuZ3RoO1xuICAgIHdoaWxlIChpLS0pIHtcbiAgICAgIHRoaXMuZGVwc1tpXS5yZW1vdmVTdWIodGhpcyk7XG4gICAgfVxuICAgIHRoaXMuYWN0aXZlID0gZmFsc2U7XG4gIH1cbn07XG5cbi8qICAqL1xuXG52YXIgc2hhcmVkUHJvcGVydHlEZWZpbml0aW9uID0ge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBjb25maWd1cmFibGU6IHRydWUsXG4gIGdldDogbm9vcCxcbiAgc2V0OiBub29wXG59O1xuXG5mdW5jdGlvbiBwcm94eSAodGFyZ2V0LCBzb3VyY2VLZXksIGtleSkge1xuICBzaGFyZWRQcm9wZXJ0eURlZmluaXRpb24uZ2V0ID0gZnVuY3Rpb24gcHJveHlHZXR0ZXIgKCkge1xuICAgIHJldHVybiB0aGlzW3NvdXJjZUtleV1ba2V5XVxuICB9O1xuICBzaGFyZWRQcm9wZXJ0eURlZmluaXRpb24uc2V0ID0gZnVuY3Rpb24gcHJveHlTZXR0ZXIgKHZhbCkge1xuICAgIHRoaXNbc291cmNlS2V5XVtrZXldID0gdmFsO1xuICB9O1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHNoYXJlZFByb3BlcnR5RGVmaW5pdGlvbik7XG59XG5cbmZ1bmN0aW9uIGluaXRTdGF0ZSAodm0pIHtcbiAgdm0uX3dhdGNoZXJzID0gW107XG4gIHZhciBvcHRzID0gdm0uJG9wdGlvbnM7XG4gIGlmIChvcHRzLnByb3BzKSB7IGluaXRQcm9wcyh2bSwgb3B0cy5wcm9wcyk7IH1cbiAgaWYgKG9wdHMubWV0aG9kcykgeyBpbml0TWV0aG9kcyh2bSwgb3B0cy5tZXRob2RzKTsgfVxuICBpZiAob3B0cy5kYXRhKSB7XG4gICAgaW5pdERhdGEodm0pO1xuICB9IGVsc2Uge1xuICAgIG9ic2VydmUodm0uX2RhdGEgPSB7fSwgdHJ1ZSAvKiBhc1Jvb3REYXRhICovKTtcbiAgfVxuICBpZiAob3B0cy5jb21wdXRlZCkgeyBpbml0Q29tcHV0ZWQodm0sIG9wdHMuY29tcHV0ZWQpOyB9XG4gIGlmIChvcHRzLndhdGNoICYmIG9wdHMud2F0Y2ggIT09IG5hdGl2ZVdhdGNoKSB7XG4gICAgaW5pdFdhdGNoKHZtLCBvcHRzLndhdGNoKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBpbml0UHJvcHMgKHZtLCBwcm9wc09wdGlvbnMpIHtcbiAgdmFyIHByb3BzRGF0YSA9IHZtLiRvcHRpb25zLnByb3BzRGF0YSB8fCB7fTtcbiAgdmFyIHByb3BzID0gdm0uX3Byb3BzID0ge307XG4gIC8vIGNhY2hlIHByb3Aga2V5cyBzbyB0aGF0IGZ1dHVyZSBwcm9wcyB1cGRhdGVzIGNhbiBpdGVyYXRlIHVzaW5nIEFycmF5XG4gIC8vIGluc3RlYWQgb2YgZHluYW1pYyBvYmplY3Qga2V5IGVudW1lcmF0aW9uLlxuICB2YXIga2V5cyA9IHZtLiRvcHRpb25zLl9wcm9wS2V5cyA9IFtdO1xuICB2YXIgaXNSb290ID0gIXZtLiRwYXJlbnQ7XG4gIC8vIHJvb3QgaW5zdGFuY2UgcHJvcHMgc2hvdWxkIGJlIGNvbnZlcnRlZFxuICBpZiAoIWlzUm9vdCkge1xuICAgIHRvZ2dsZU9ic2VydmluZyhmYWxzZSk7XG4gIH1cbiAgdmFyIGxvb3AgPSBmdW5jdGlvbiAoIGtleSApIHtcbiAgICBrZXlzLnB1c2goa2V5KTtcbiAgICB2YXIgdmFsdWUgPSB2YWxpZGF0ZVByb3Aoa2V5LCBwcm9wc09wdGlvbnMsIHByb3BzRGF0YSwgdm0pO1xuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICovXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIHZhciBoeXBoZW5hdGVkS2V5ID0gaHlwaGVuYXRlKGtleSk7XG4gICAgICBpZiAoaXNSZXNlcnZlZEF0dHJpYnV0ZShoeXBoZW5hdGVkS2V5KSB8fFxuICAgICAgICAgIGNvbmZpZy5pc1Jlc2VydmVkQXR0cihoeXBoZW5hdGVkS2V5KSkge1xuICAgICAgICB3YXJuKFxuICAgICAgICAgIChcIlxcXCJcIiArIGh5cGhlbmF0ZWRLZXkgKyBcIlxcXCIgaXMgYSByZXNlcnZlZCBhdHRyaWJ1dGUgYW5kIGNhbm5vdCBiZSB1c2VkIGFzIGNvbXBvbmVudCBwcm9wLlwiKSxcbiAgICAgICAgICB2bVxuICAgICAgICApO1xuICAgICAgfVxuICAgICAgZGVmaW5lUmVhY3RpdmUkJDEocHJvcHMsIGtleSwgdmFsdWUsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCFpc1Jvb3QgJiYgIWlzVXBkYXRpbmdDaGlsZENvbXBvbmVudCkge1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIGlmKHZtLm1wSG9zdCA9PT0gJ21wLWJhaWR1Jyl7Ly/nmb7luqYgb2JzZXJ2ZXIg5ZyoIHNldERhdGEgY2FsbGJhY2sg5LmL5ZCO6Kem5Y+R77yM55u05o6l5b+955Wl6K+lIHdhcm5cbiAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vZml4ZWQgYnkgeHh4eHh4IF9fbmV4dF90aWNrX3BlbmRpbmcsdW5pOi8vZm9ybS1maWVsZCDml7bkuI3lkYroraZcbiAgICAgICAgICAgIGlmKFxuICAgICAgICAgICAgICAgIGtleSA9PT0gJ3ZhbHVlJyAmJiBcbiAgICAgICAgICAgICAgICBBcnJheS5pc0FycmF5KHZtLiRvcHRpb25zLmJlaGF2aW9ycykgJiZcbiAgICAgICAgICAgICAgICB2bS4kb3B0aW9ucy5iZWhhdmlvcnMuaW5kZXhPZigndW5pOi8vZm9ybS1maWVsZCcpICE9PSAtMVxuICAgICAgICAgICAgICApe1xuICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmKHZtLl9nZXRGb3JtRGF0YSl7XG4gICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyICRwYXJlbnQgPSB2bS4kcGFyZW50O1xuICAgICAgICAgICAgd2hpbGUoJHBhcmVudCl7XG4gICAgICAgICAgICAgIGlmKCRwYXJlbnQuX19uZXh0X3RpY2tfcGVuZGluZyl7XG4gICAgICAgICAgICAgICAgcmV0dXJuICBcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAkcGFyZW50ID0gJHBhcmVudC4kcGFyZW50O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICB3YXJuKFxuICAgICAgICAgICAgXCJBdm9pZCBtdXRhdGluZyBhIHByb3AgZGlyZWN0bHkgc2luY2UgdGhlIHZhbHVlIHdpbGwgYmUgXCIgK1xuICAgICAgICAgICAgXCJvdmVyd3JpdHRlbiB3aGVuZXZlciB0aGUgcGFyZW50IGNvbXBvbmVudCByZS1yZW5kZXJzLiBcIiArXG4gICAgICAgICAgICBcIkluc3RlYWQsIHVzZSBhIGRhdGEgb3IgY29tcHV0ZWQgcHJvcGVydHkgYmFzZWQgb24gdGhlIHByb3AncyBcIiArXG4gICAgICAgICAgICBcInZhbHVlLiBQcm9wIGJlaW5nIG11dGF0ZWQ6IFxcXCJcIiArIGtleSArIFwiXFxcIlwiLFxuICAgICAgICAgICAgdm1cbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgZGVmaW5lUmVhY3RpdmUkJDEocHJvcHMsIGtleSwgdmFsdWUpO1xuICAgIH1cbiAgICAvLyBzdGF0aWMgcHJvcHMgYXJlIGFscmVhZHkgcHJveGllZCBvbiB0aGUgY29tcG9uZW50J3MgcHJvdG90eXBlXG4gICAgLy8gZHVyaW5nIFZ1ZS5leHRlbmQoKS4gV2Ugb25seSBuZWVkIHRvIHByb3h5IHByb3BzIGRlZmluZWQgYXRcbiAgICAvLyBpbnN0YW50aWF0aW9uIGhlcmUuXG4gICAgaWYgKCEoa2V5IGluIHZtKSkge1xuICAgICAgcHJveHkodm0sIFwiX3Byb3BzXCIsIGtleSk7XG4gICAgfVxuICB9O1xuXG4gIGZvciAodmFyIGtleSBpbiBwcm9wc09wdGlvbnMpIGxvb3AoIGtleSApO1xuICB0b2dnbGVPYnNlcnZpbmcodHJ1ZSk7XG59XG5cbmZ1bmN0aW9uIGluaXREYXRhICh2bSkge1xuICB2YXIgZGF0YSA9IHZtLiRvcHRpb25zLmRhdGE7XG4gIGRhdGEgPSB2bS5fZGF0YSA9IHR5cGVvZiBkYXRhID09PSAnZnVuY3Rpb24nXG4gICAgPyBnZXREYXRhKGRhdGEsIHZtKVxuICAgIDogZGF0YSB8fCB7fTtcbiAgaWYgKCFpc1BsYWluT2JqZWN0KGRhdGEpKSB7XG4gICAgZGF0YSA9IHt9O1xuICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgd2FybihcbiAgICAgICdkYXRhIGZ1bmN0aW9ucyBzaG91bGQgcmV0dXJuIGFuIG9iamVjdDpcXG4nICtcbiAgICAgICdodHRwczovL3Z1ZWpzLm9yZy92Mi9ndWlkZS9jb21wb25lbnRzLmh0bWwjZGF0YS1NdXN0LUJlLWEtRnVuY3Rpb24nLFxuICAgICAgdm1cbiAgICApO1xuICB9XG4gIC8vIHByb3h5IGRhdGEgb24gaW5zdGFuY2VcbiAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhkYXRhKTtcbiAgdmFyIHByb3BzID0gdm0uJG9wdGlvbnMucHJvcHM7XG4gIHZhciBtZXRob2RzID0gdm0uJG9wdGlvbnMubWV0aG9kcztcbiAgdmFyIGkgPSBrZXlzLmxlbmd0aDtcbiAgd2hpbGUgKGktLSkge1xuICAgIHZhciBrZXkgPSBrZXlzW2ldO1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBpZiAobWV0aG9kcyAmJiBoYXNPd24obWV0aG9kcywga2V5KSkge1xuICAgICAgICB3YXJuKFxuICAgICAgICAgIChcIk1ldGhvZCBcXFwiXCIgKyBrZXkgKyBcIlxcXCIgaGFzIGFscmVhZHkgYmVlbiBkZWZpbmVkIGFzIGEgZGF0YSBwcm9wZXJ0eS5cIiksXG4gICAgICAgICAgdm1cbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHByb3BzICYmIGhhc093bihwcm9wcywga2V5KSkge1xuICAgICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiB3YXJuKFxuICAgICAgICBcIlRoZSBkYXRhIHByb3BlcnR5IFxcXCJcIiArIGtleSArIFwiXFxcIiBpcyBhbHJlYWR5IGRlY2xhcmVkIGFzIGEgcHJvcC4gXCIgK1xuICAgICAgICBcIlVzZSBwcm9wIGRlZmF1bHQgdmFsdWUgaW5zdGVhZC5cIixcbiAgICAgICAgdm1cbiAgICAgICk7XG4gICAgfSBlbHNlIGlmICghaXNSZXNlcnZlZChrZXkpKSB7XG4gICAgICBwcm94eSh2bSwgXCJfZGF0YVwiLCBrZXkpO1xuICAgIH1cbiAgfVxuICAvLyBvYnNlcnZlIGRhdGFcbiAgb2JzZXJ2ZShkYXRhLCB0cnVlIC8qIGFzUm9vdERhdGEgKi8pO1xufVxuXG5mdW5jdGlvbiBnZXREYXRhIChkYXRhLCB2bSkge1xuICAvLyAjNzU3MyBkaXNhYmxlIGRlcCBjb2xsZWN0aW9uIHdoZW4gaW52b2tpbmcgZGF0YSBnZXR0ZXJzXG4gIHB1c2hUYXJnZXQoKTtcbiAgdHJ5IHtcbiAgICByZXR1cm4gZGF0YS5jYWxsKHZtLCB2bSlcbiAgfSBjYXRjaCAoZSkge1xuICAgIGhhbmRsZUVycm9yKGUsIHZtLCBcImRhdGEoKVwiKTtcbiAgICByZXR1cm4ge31cbiAgfSBmaW5hbGx5IHtcbiAgICBwb3BUYXJnZXQoKTtcbiAgfVxufVxuXG52YXIgY29tcHV0ZWRXYXRjaGVyT3B0aW9ucyA9IHsgbGF6eTogdHJ1ZSB9O1xuXG5mdW5jdGlvbiBpbml0Q29tcHV0ZWQgKHZtLCBjb21wdXRlZCkge1xuICAvLyAkZmxvdy1kaXNhYmxlLWxpbmVcbiAgdmFyIHdhdGNoZXJzID0gdm0uX2NvbXB1dGVkV2F0Y2hlcnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAvLyBjb21wdXRlZCBwcm9wZXJ0aWVzIGFyZSBqdXN0IGdldHRlcnMgZHVyaW5nIFNTUlxuICB2YXIgaXNTU1IgPSBpc1NlcnZlclJlbmRlcmluZygpO1xuXG4gIGZvciAodmFyIGtleSBpbiBjb21wdXRlZCkge1xuICAgIHZhciB1c2VyRGVmID0gY29tcHV0ZWRba2V5XTtcbiAgICB2YXIgZ2V0dGVyID0gdHlwZW9mIHVzZXJEZWYgPT09ICdmdW5jdGlvbicgPyB1c2VyRGVmIDogdXNlckRlZi5nZXQ7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgZ2V0dGVyID09IG51bGwpIHtcbiAgICAgIHdhcm4oXG4gICAgICAgIChcIkdldHRlciBpcyBtaXNzaW5nIGZvciBjb21wdXRlZCBwcm9wZXJ0eSBcXFwiXCIgKyBrZXkgKyBcIlxcXCIuXCIpLFxuICAgICAgICB2bVxuICAgICAgKTtcbiAgICB9XG5cbiAgICBpZiAoIWlzU1NSKSB7XG4gICAgICAvLyBjcmVhdGUgaW50ZXJuYWwgd2F0Y2hlciBmb3IgdGhlIGNvbXB1dGVkIHByb3BlcnR5LlxuICAgICAgd2F0Y2hlcnNba2V5XSA9IG5ldyBXYXRjaGVyKFxuICAgICAgICB2bSxcbiAgICAgICAgZ2V0dGVyIHx8IG5vb3AsXG4gICAgICAgIG5vb3AsXG4gICAgICAgIGNvbXB1dGVkV2F0Y2hlck9wdGlvbnNcbiAgICAgICk7XG4gICAgfVxuXG4gICAgLy8gY29tcG9uZW50LWRlZmluZWQgY29tcHV0ZWQgcHJvcGVydGllcyBhcmUgYWxyZWFkeSBkZWZpbmVkIG9uIHRoZVxuICAgIC8vIGNvbXBvbmVudCBwcm90b3R5cGUuIFdlIG9ubHkgbmVlZCB0byBkZWZpbmUgY29tcHV0ZWQgcHJvcGVydGllcyBkZWZpbmVkXG4gICAgLy8gYXQgaW5zdGFudGlhdGlvbiBoZXJlLlxuICAgIGlmICghKGtleSBpbiB2bSkpIHtcbiAgICAgIGRlZmluZUNvbXB1dGVkKHZtLCBrZXksIHVzZXJEZWYpO1xuICAgIH0gZWxzZSBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgaWYgKGtleSBpbiB2bS4kZGF0YSkge1xuICAgICAgICB3YXJuKChcIlRoZSBjb21wdXRlZCBwcm9wZXJ0eSBcXFwiXCIgKyBrZXkgKyBcIlxcXCIgaXMgYWxyZWFkeSBkZWZpbmVkIGluIGRhdGEuXCIpLCB2bSk7XG4gICAgICB9IGVsc2UgaWYgKHZtLiRvcHRpb25zLnByb3BzICYmIGtleSBpbiB2bS4kb3B0aW9ucy5wcm9wcykge1xuICAgICAgICB3YXJuKChcIlRoZSBjb21wdXRlZCBwcm9wZXJ0eSBcXFwiXCIgKyBrZXkgKyBcIlxcXCIgaXMgYWxyZWFkeSBkZWZpbmVkIGFzIGEgcHJvcC5cIiksIHZtKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gZGVmaW5lQ29tcHV0ZWQgKFxuICB0YXJnZXQsXG4gIGtleSxcbiAgdXNlckRlZlxuKSB7XG4gIHZhciBzaG91bGRDYWNoZSA9ICFpc1NlcnZlclJlbmRlcmluZygpO1xuICBpZiAodHlwZW9mIHVzZXJEZWYgPT09ICdmdW5jdGlvbicpIHtcbiAgICBzaGFyZWRQcm9wZXJ0eURlZmluaXRpb24uZ2V0ID0gc2hvdWxkQ2FjaGVcbiAgICAgID8gY3JlYXRlQ29tcHV0ZWRHZXR0ZXIoa2V5KVxuICAgICAgOiBjcmVhdGVHZXR0ZXJJbnZva2VyKHVzZXJEZWYpO1xuICAgIHNoYXJlZFByb3BlcnR5RGVmaW5pdGlvbi5zZXQgPSBub29wO1xuICB9IGVsc2Uge1xuICAgIHNoYXJlZFByb3BlcnR5RGVmaW5pdGlvbi5nZXQgPSB1c2VyRGVmLmdldFxuICAgICAgPyBzaG91bGRDYWNoZSAmJiB1c2VyRGVmLmNhY2hlICE9PSBmYWxzZVxuICAgICAgICA/IGNyZWF0ZUNvbXB1dGVkR2V0dGVyKGtleSlcbiAgICAgICAgOiBjcmVhdGVHZXR0ZXJJbnZva2VyKHVzZXJEZWYuZ2V0KVxuICAgICAgOiBub29wO1xuICAgIHNoYXJlZFByb3BlcnR5RGVmaW5pdGlvbi5zZXQgPSB1c2VyRGVmLnNldCB8fCBub29wO1xuICB9XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmXG4gICAgICBzaGFyZWRQcm9wZXJ0eURlZmluaXRpb24uc2V0ID09PSBub29wKSB7XG4gICAgc2hhcmVkUHJvcGVydHlEZWZpbml0aW9uLnNldCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHdhcm4oXG4gICAgICAgIChcIkNvbXB1dGVkIHByb3BlcnR5IFxcXCJcIiArIGtleSArIFwiXFxcIiB3YXMgYXNzaWduZWQgdG8gYnV0IGl0IGhhcyBubyBzZXR0ZXIuXCIpLFxuICAgICAgICB0aGlzXG4gICAgICApO1xuICAgIH07XG4gIH1cbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBzaGFyZWRQcm9wZXJ0eURlZmluaXRpb24pO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVDb21wdXRlZEdldHRlciAoa2V5KSB7XG4gIHJldHVybiBmdW5jdGlvbiBjb21wdXRlZEdldHRlciAoKSB7XG4gICAgdmFyIHdhdGNoZXIgPSB0aGlzLl9jb21wdXRlZFdhdGNoZXJzICYmIHRoaXMuX2NvbXB1dGVkV2F0Y2hlcnNba2V5XTtcbiAgICBpZiAod2F0Y2hlcikge1xuICAgICAgaWYgKHdhdGNoZXIuZGlydHkpIHtcbiAgICAgICAgd2F0Y2hlci5ldmFsdWF0ZSgpO1xuICAgICAgfVxuICAgICAgaWYgKERlcC5TaGFyZWRPYmplY3QudGFyZ2V0KSB7Ly8gZml4ZWQgYnkgeHh4eHh4XG4gICAgICAgIHdhdGNoZXIuZGVwZW5kKCk7XG4gICAgICB9XG4gICAgICByZXR1cm4gd2F0Y2hlci52YWx1ZVxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBjcmVhdGVHZXR0ZXJJbnZva2VyKGZuKSB7XG4gIHJldHVybiBmdW5jdGlvbiBjb21wdXRlZEdldHRlciAoKSB7XG4gICAgcmV0dXJuIGZuLmNhbGwodGhpcywgdGhpcylcbiAgfVxufVxuXG5mdW5jdGlvbiBpbml0TWV0aG9kcyAodm0sIG1ldGhvZHMpIHtcbiAgdmFyIHByb3BzID0gdm0uJG9wdGlvbnMucHJvcHM7XG4gIGZvciAodmFyIGtleSBpbiBtZXRob2RzKSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGlmICh0eXBlb2YgbWV0aG9kc1trZXldICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHdhcm4oXG4gICAgICAgICAgXCJNZXRob2QgXFxcIlwiICsga2V5ICsgXCJcXFwiIGhhcyB0eXBlIFxcXCJcIiArICh0eXBlb2YgbWV0aG9kc1trZXldKSArIFwiXFxcIiBpbiB0aGUgY29tcG9uZW50IGRlZmluaXRpb24uIFwiICtcbiAgICAgICAgICBcIkRpZCB5b3UgcmVmZXJlbmNlIHRoZSBmdW5jdGlvbiBjb3JyZWN0bHk/XCIsXG4gICAgICAgICAgdm1cbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICAgIGlmIChwcm9wcyAmJiBoYXNPd24ocHJvcHMsIGtleSkpIHtcbiAgICAgICAgd2FybihcbiAgICAgICAgICAoXCJNZXRob2QgXFxcIlwiICsga2V5ICsgXCJcXFwiIGhhcyBhbHJlYWR5IGJlZW4gZGVmaW5lZCBhcyBhIHByb3AuXCIpLFxuICAgICAgICAgIHZtXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgICBpZiAoKGtleSBpbiB2bSkgJiYgaXNSZXNlcnZlZChrZXkpKSB7XG4gICAgICAgIHdhcm4oXG4gICAgICAgICAgXCJNZXRob2QgXFxcIlwiICsga2V5ICsgXCJcXFwiIGNvbmZsaWN0cyB3aXRoIGFuIGV4aXN0aW5nIFZ1ZSBpbnN0YW5jZSBtZXRob2QuIFwiICtcbiAgICAgICAgICBcIkF2b2lkIGRlZmluaW5nIGNvbXBvbmVudCBtZXRob2RzIHRoYXQgc3RhcnQgd2l0aCBfIG9yICQuXCJcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9XG4gICAgdm1ba2V5XSA9IHR5cGVvZiBtZXRob2RzW2tleV0gIT09ICdmdW5jdGlvbicgPyBub29wIDogYmluZChtZXRob2RzW2tleV0sIHZtKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBpbml0V2F0Y2ggKHZtLCB3YXRjaCkge1xuICBmb3IgKHZhciBrZXkgaW4gd2F0Y2gpIHtcbiAgICB2YXIgaGFuZGxlciA9IHdhdGNoW2tleV07XG4gICAgaWYgKEFycmF5LmlzQXJyYXkoaGFuZGxlcikpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgaGFuZGxlci5sZW5ndGg7IGkrKykge1xuICAgICAgICBjcmVhdGVXYXRjaGVyKHZtLCBrZXksIGhhbmRsZXJbaV0pO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBjcmVhdGVXYXRjaGVyKHZtLCBrZXksIGhhbmRsZXIpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBjcmVhdGVXYXRjaGVyIChcbiAgdm0sXG4gIGV4cE9yRm4sXG4gIGhhbmRsZXIsXG4gIG9wdGlvbnNcbikge1xuICBpZiAoaXNQbGFpbk9iamVjdChoYW5kbGVyKSkge1xuICAgIG9wdGlvbnMgPSBoYW5kbGVyO1xuICAgIGhhbmRsZXIgPSBoYW5kbGVyLmhhbmRsZXI7XG4gIH1cbiAgaWYgKHR5cGVvZiBoYW5kbGVyID09PSAnc3RyaW5nJykge1xuICAgIGhhbmRsZXIgPSB2bVtoYW5kbGVyXTtcbiAgfVxuICByZXR1cm4gdm0uJHdhdGNoKGV4cE9yRm4sIGhhbmRsZXIsIG9wdGlvbnMpXG59XG5cbmZ1bmN0aW9uIHN0YXRlTWl4aW4gKFZ1ZSkge1xuICAvLyBmbG93IHNvbWVob3cgaGFzIHByb2JsZW1zIHdpdGggZGlyZWN0bHkgZGVjbGFyZWQgZGVmaW5pdGlvbiBvYmplY3RcbiAgLy8gd2hlbiB1c2luZyBPYmplY3QuZGVmaW5lUHJvcGVydHksIHNvIHdlIGhhdmUgdG8gcHJvY2VkdXJhbGx5IGJ1aWxkIHVwXG4gIC8vIHRoZSBvYmplY3QgaGVyZS5cbiAgdmFyIGRhdGFEZWYgPSB7fTtcbiAgZGF0YURlZi5nZXQgPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzLl9kYXRhIH07XG4gIHZhciBwcm9wc0RlZiA9IHt9O1xuICBwcm9wc0RlZi5nZXQgPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzLl9wcm9wcyB9O1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGRhdGFEZWYuc2V0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgd2FybihcbiAgICAgICAgJ0F2b2lkIHJlcGxhY2luZyBpbnN0YW5jZSByb290ICRkYXRhLiAnICtcbiAgICAgICAgJ1VzZSBuZXN0ZWQgZGF0YSBwcm9wZXJ0aWVzIGluc3RlYWQuJyxcbiAgICAgICAgdGhpc1xuICAgICAgKTtcbiAgICB9O1xuICAgIHByb3BzRGVmLnNldCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHdhcm4oXCIkcHJvcHMgaXMgcmVhZG9ubHkuXCIsIHRoaXMpO1xuICAgIH07XG4gIH1cbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFZ1ZS5wcm90b3R5cGUsICckZGF0YScsIGRhdGFEZWYpO1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoVnVlLnByb3RvdHlwZSwgJyRwcm9wcycsIHByb3BzRGVmKTtcblxuICBWdWUucHJvdG90eXBlLiRzZXQgPSBzZXQ7XG4gIFZ1ZS5wcm90b3R5cGUuJGRlbGV0ZSA9IGRlbDtcblxuICBWdWUucHJvdG90eXBlLiR3YXRjaCA9IGZ1bmN0aW9uIChcbiAgICBleHBPckZuLFxuICAgIGNiLFxuICAgIG9wdGlvbnNcbiAgKSB7XG4gICAgdmFyIHZtID0gdGhpcztcbiAgICBpZiAoaXNQbGFpbk9iamVjdChjYikpIHtcbiAgICAgIHJldHVybiBjcmVhdGVXYXRjaGVyKHZtLCBleHBPckZuLCBjYiwgb3B0aW9ucylcbiAgICB9XG4gICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gICAgb3B0aW9ucy51c2VyID0gdHJ1ZTtcbiAgICB2YXIgd2F0Y2hlciA9IG5ldyBXYXRjaGVyKHZtLCBleHBPckZuLCBjYiwgb3B0aW9ucyk7XG4gICAgaWYgKG9wdGlvbnMuaW1tZWRpYXRlKSB7XG4gICAgICB0cnkge1xuICAgICAgICBjYi5jYWxsKHZtLCB3YXRjaGVyLnZhbHVlKTtcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGhhbmRsZUVycm9yKGVycm9yLCB2bSwgKFwiY2FsbGJhY2sgZm9yIGltbWVkaWF0ZSB3YXRjaGVyIFxcXCJcIiArICh3YXRjaGVyLmV4cHJlc3Npb24pICsgXCJcXFwiXCIpKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGZ1bmN0aW9uIHVud2F0Y2hGbiAoKSB7XG4gICAgICB3YXRjaGVyLnRlYXJkb3duKCk7XG4gICAgfVxuICB9O1xufVxuXG4vKiAgKi9cblxudmFyIHVpZCQzID0gMDtcblxuZnVuY3Rpb24gaW5pdE1peGluIChWdWUpIHtcbiAgVnVlLnByb3RvdHlwZS5faW5pdCA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XG4gICAgdmFyIHZtID0gdGhpcztcbiAgICAvLyBhIHVpZFxuICAgIHZtLl91aWQgPSB1aWQkMysrO1xuXG4gICAgdmFyIHN0YXJ0VGFnLCBlbmRUYWc7XG4gICAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgY29uZmlnLnBlcmZvcm1hbmNlICYmIG1hcmspIHtcbiAgICAgIHN0YXJ0VGFnID0gXCJ2dWUtcGVyZi1zdGFydDpcIiArICh2bS5fdWlkKTtcbiAgICAgIGVuZFRhZyA9IFwidnVlLXBlcmYtZW5kOlwiICsgKHZtLl91aWQpO1xuICAgICAgbWFyayhzdGFydFRhZyk7XG4gICAgfVxuXG4gICAgLy8gYSBmbGFnIHRvIGF2b2lkIHRoaXMgYmVpbmcgb2JzZXJ2ZWRcbiAgICB2bS5faXNWdWUgPSB0cnVlO1xuICAgIC8vIG1lcmdlIG9wdGlvbnNcbiAgICBpZiAob3B0aW9ucyAmJiBvcHRpb25zLl9pc0NvbXBvbmVudCkge1xuICAgICAgLy8gb3B0aW1pemUgaW50ZXJuYWwgY29tcG9uZW50IGluc3RhbnRpYXRpb25cbiAgICAgIC8vIHNpbmNlIGR5bmFtaWMgb3B0aW9ucyBtZXJnaW5nIGlzIHByZXR0eSBzbG93LCBhbmQgbm9uZSBvZiB0aGVcbiAgICAgIC8vIGludGVybmFsIGNvbXBvbmVudCBvcHRpb25zIG5lZWRzIHNwZWNpYWwgdHJlYXRtZW50LlxuICAgICAgaW5pdEludGVybmFsQ29tcG9uZW50KHZtLCBvcHRpb25zKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdm0uJG9wdGlvbnMgPSBtZXJnZU9wdGlvbnMoXG4gICAgICAgIHJlc29sdmVDb25zdHJ1Y3Rvck9wdGlvbnModm0uY29uc3RydWN0b3IpLFxuICAgICAgICBvcHRpb25zIHx8IHt9LFxuICAgICAgICB2bVxuICAgICAgKTtcbiAgICB9XG4gICAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9cbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgaW5pdFByb3h5KHZtKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdm0uX3JlbmRlclByb3h5ID0gdm07XG4gICAgfVxuICAgIC8vIGV4cG9zZSByZWFsIHNlbGZcbiAgICB2bS5fc2VsZiA9IHZtO1xuICAgIGluaXRMaWZlY3ljbGUodm0pO1xuICAgIGluaXRFdmVudHModm0pO1xuICAgIGluaXRSZW5kZXIodm0pO1xuICAgIGNhbGxIb29rKHZtLCAnYmVmb3JlQ3JlYXRlJyk7XG4gICAgIXZtLl8kZmFsbGJhY2sgJiYgaW5pdEluamVjdGlvbnModm0pOyAvLyByZXNvbHZlIGluamVjdGlvbnMgYmVmb3JlIGRhdGEvcHJvcHMgIFxuICAgIGluaXRTdGF0ZSh2bSk7XG4gICAgIXZtLl8kZmFsbGJhY2sgJiYgaW5pdFByb3ZpZGUodm0pOyAvLyByZXNvbHZlIHByb3ZpZGUgYWZ0ZXIgZGF0YS9wcm9wc1xuICAgICF2bS5fJGZhbGxiYWNrICYmIGNhbGxIb29rKHZtLCAnY3JlYXRlZCcpOyAgICAgIFxuXG4gICAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgY29uZmlnLnBlcmZvcm1hbmNlICYmIG1hcmspIHtcbiAgICAgIHZtLl9uYW1lID0gZm9ybWF0Q29tcG9uZW50TmFtZSh2bSwgZmFsc2UpO1xuICAgICAgbWFyayhlbmRUYWcpO1xuICAgICAgbWVhc3VyZSgoXCJ2dWUgXCIgKyAodm0uX25hbWUpICsgXCIgaW5pdFwiKSwgc3RhcnRUYWcsIGVuZFRhZyk7XG4gICAgfVxuXG4gICAgaWYgKHZtLiRvcHRpb25zLmVsKSB7XG4gICAgICB2bS4kbW91bnQodm0uJG9wdGlvbnMuZWwpO1xuICAgIH1cbiAgfTtcbn1cblxuZnVuY3Rpb24gaW5pdEludGVybmFsQ29tcG9uZW50ICh2bSwgb3B0aW9ucykge1xuICB2YXIgb3B0cyA9IHZtLiRvcHRpb25zID0gT2JqZWN0LmNyZWF0ZSh2bS5jb25zdHJ1Y3Rvci5vcHRpb25zKTtcbiAgLy8gZG9pbmcgdGhpcyBiZWNhdXNlIGl0J3MgZmFzdGVyIHRoYW4gZHluYW1pYyBlbnVtZXJhdGlvbi5cbiAgdmFyIHBhcmVudFZub2RlID0gb3B0aW9ucy5fcGFyZW50Vm5vZGU7XG4gIG9wdHMucGFyZW50ID0gb3B0aW9ucy5wYXJlbnQ7XG4gIG9wdHMuX3BhcmVudFZub2RlID0gcGFyZW50Vm5vZGU7XG5cbiAgdmFyIHZub2RlQ29tcG9uZW50T3B0aW9ucyA9IHBhcmVudFZub2RlLmNvbXBvbmVudE9wdGlvbnM7XG4gIG9wdHMucHJvcHNEYXRhID0gdm5vZGVDb21wb25lbnRPcHRpb25zLnByb3BzRGF0YTtcbiAgb3B0cy5fcGFyZW50TGlzdGVuZXJzID0gdm5vZGVDb21wb25lbnRPcHRpb25zLmxpc3RlbmVycztcbiAgb3B0cy5fcmVuZGVyQ2hpbGRyZW4gPSB2bm9kZUNvbXBvbmVudE9wdGlvbnMuY2hpbGRyZW47XG4gIG9wdHMuX2NvbXBvbmVudFRhZyA9IHZub2RlQ29tcG9uZW50T3B0aW9ucy50YWc7XG5cbiAgaWYgKG9wdGlvbnMucmVuZGVyKSB7XG4gICAgb3B0cy5yZW5kZXIgPSBvcHRpb25zLnJlbmRlcjtcbiAgICBvcHRzLnN0YXRpY1JlbmRlckZucyA9IG9wdGlvbnMuc3RhdGljUmVuZGVyRm5zO1xuICB9XG59XG5cbmZ1bmN0aW9uIHJlc29sdmVDb25zdHJ1Y3Rvck9wdGlvbnMgKEN0b3IpIHtcbiAgdmFyIG9wdGlvbnMgPSBDdG9yLm9wdGlvbnM7XG4gIGlmIChDdG9yLnN1cGVyKSB7XG4gICAgdmFyIHN1cGVyT3B0aW9ucyA9IHJlc29sdmVDb25zdHJ1Y3Rvck9wdGlvbnMoQ3Rvci5zdXBlcik7XG4gICAgdmFyIGNhY2hlZFN1cGVyT3B0aW9ucyA9IEN0b3Iuc3VwZXJPcHRpb25zO1xuICAgIGlmIChzdXBlck9wdGlvbnMgIT09IGNhY2hlZFN1cGVyT3B0aW9ucykge1xuICAgICAgLy8gc3VwZXIgb3B0aW9uIGNoYW5nZWQsXG4gICAgICAvLyBuZWVkIHRvIHJlc29sdmUgbmV3IG9wdGlvbnMuXG4gICAgICBDdG9yLnN1cGVyT3B0aW9ucyA9IHN1cGVyT3B0aW9ucztcbiAgICAgIC8vIGNoZWNrIGlmIHRoZXJlIGFyZSBhbnkgbGF0ZS1tb2RpZmllZC9hdHRhY2hlZCBvcHRpb25zICgjNDk3NilcbiAgICAgIHZhciBtb2RpZmllZE9wdGlvbnMgPSByZXNvbHZlTW9kaWZpZWRPcHRpb25zKEN0b3IpO1xuICAgICAgLy8gdXBkYXRlIGJhc2UgZXh0ZW5kIG9wdGlvbnNcbiAgICAgIGlmIChtb2RpZmllZE9wdGlvbnMpIHtcbiAgICAgICAgZXh0ZW5kKEN0b3IuZXh0ZW5kT3B0aW9ucywgbW9kaWZpZWRPcHRpb25zKTtcbiAgICAgIH1cbiAgICAgIG9wdGlvbnMgPSBDdG9yLm9wdGlvbnMgPSBtZXJnZU9wdGlvbnMoc3VwZXJPcHRpb25zLCBDdG9yLmV4dGVuZE9wdGlvbnMpO1xuICAgICAgaWYgKG9wdGlvbnMubmFtZSkge1xuICAgICAgICBvcHRpb25zLmNvbXBvbmVudHNbb3B0aW9ucy5uYW1lXSA9IEN0b3I7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiBvcHRpb25zXG59XG5cbmZ1bmN0aW9uIHJlc29sdmVNb2RpZmllZE9wdGlvbnMgKEN0b3IpIHtcbiAgdmFyIG1vZGlmaWVkO1xuICB2YXIgbGF0ZXN0ID0gQ3Rvci5vcHRpb25zO1xuICB2YXIgc2VhbGVkID0gQ3Rvci5zZWFsZWRPcHRpb25zO1xuICBmb3IgKHZhciBrZXkgaW4gbGF0ZXN0KSB7XG4gICAgaWYgKGxhdGVzdFtrZXldICE9PSBzZWFsZWRba2V5XSkge1xuICAgICAgaWYgKCFtb2RpZmllZCkgeyBtb2RpZmllZCA9IHt9OyB9XG4gICAgICBtb2RpZmllZFtrZXldID0gbGF0ZXN0W2tleV07XG4gICAgfVxuICB9XG4gIHJldHVybiBtb2RpZmllZFxufVxuXG5mdW5jdGlvbiBWdWUgKG9wdGlvbnMpIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiZcbiAgICAhKHRoaXMgaW5zdGFuY2VvZiBWdWUpXG4gICkge1xuICAgIHdhcm4oJ1Z1ZSBpcyBhIGNvbnN0cnVjdG9yIGFuZCBzaG91bGQgYmUgY2FsbGVkIHdpdGggdGhlIGBuZXdgIGtleXdvcmQnKTtcbiAgfVxuICB0aGlzLl9pbml0KG9wdGlvbnMpO1xufVxuXG5pbml0TWl4aW4oVnVlKTtcbnN0YXRlTWl4aW4oVnVlKTtcbmV2ZW50c01peGluKFZ1ZSk7XG5saWZlY3ljbGVNaXhpbihWdWUpO1xucmVuZGVyTWl4aW4oVnVlKTtcblxuLyogICovXG5cbmZ1bmN0aW9uIGluaXRVc2UgKFZ1ZSkge1xuICBWdWUudXNlID0gZnVuY3Rpb24gKHBsdWdpbikge1xuICAgIHZhciBpbnN0YWxsZWRQbHVnaW5zID0gKHRoaXMuX2luc3RhbGxlZFBsdWdpbnMgfHwgKHRoaXMuX2luc3RhbGxlZFBsdWdpbnMgPSBbXSkpO1xuICAgIGlmIChpbnN0YWxsZWRQbHVnaW5zLmluZGV4T2YocGx1Z2luKSA+IC0xKSB7XG4gICAgICByZXR1cm4gdGhpc1xuICAgIH1cblxuICAgIC8vIGFkZGl0aW9uYWwgcGFyYW1ldGVyc1xuICAgIHZhciBhcmdzID0gdG9BcnJheShhcmd1bWVudHMsIDEpO1xuICAgIGFyZ3MudW5zaGlmdCh0aGlzKTtcbiAgICBpZiAodHlwZW9mIHBsdWdpbi5pbnN0YWxsID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBwbHVnaW4uaW5zdGFsbC5hcHBseShwbHVnaW4sIGFyZ3MpO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIHBsdWdpbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcGx1Z2luLmFwcGx5KG51bGwsIGFyZ3MpO1xuICAgIH1cbiAgICBpbnN0YWxsZWRQbHVnaW5zLnB1c2gocGx1Z2luKTtcbiAgICByZXR1cm4gdGhpc1xuICB9O1xufVxuXG4vKiAgKi9cblxuZnVuY3Rpb24gaW5pdE1peGluJDEgKFZ1ZSkge1xuICBWdWUubWl4aW4gPSBmdW5jdGlvbiAobWl4aW4pIHtcbiAgICB0aGlzLm9wdGlvbnMgPSBtZXJnZU9wdGlvbnModGhpcy5vcHRpb25zLCBtaXhpbik7XG4gICAgcmV0dXJuIHRoaXNcbiAgfTtcbn1cblxuLyogICovXG5cbmZ1bmN0aW9uIGluaXRFeHRlbmQgKFZ1ZSkge1xuICAvKipcbiAgICogRWFjaCBpbnN0YW5jZSBjb25zdHJ1Y3RvciwgaW5jbHVkaW5nIFZ1ZSwgaGFzIGEgdW5pcXVlXG4gICAqIGNpZC4gVGhpcyBlbmFibGVzIHVzIHRvIGNyZWF0ZSB3cmFwcGVkIFwiY2hpbGRcbiAgICogY29uc3RydWN0b3JzXCIgZm9yIHByb3RvdHlwYWwgaW5oZXJpdGFuY2UgYW5kIGNhY2hlIHRoZW0uXG4gICAqL1xuICBWdWUuY2lkID0gMDtcbiAgdmFyIGNpZCA9IDE7XG5cbiAgLyoqXG4gICAqIENsYXNzIGluaGVyaXRhbmNlXG4gICAqL1xuICBWdWUuZXh0ZW5kID0gZnVuY3Rpb24gKGV4dGVuZE9wdGlvbnMpIHtcbiAgICBleHRlbmRPcHRpb25zID0gZXh0ZW5kT3B0aW9ucyB8fCB7fTtcbiAgICB2YXIgU3VwZXIgPSB0aGlzO1xuICAgIHZhciBTdXBlcklkID0gU3VwZXIuY2lkO1xuICAgIHZhciBjYWNoZWRDdG9ycyA9IGV4dGVuZE9wdGlvbnMuX0N0b3IgfHwgKGV4dGVuZE9wdGlvbnMuX0N0b3IgPSB7fSk7XG4gICAgaWYgKGNhY2hlZEN0b3JzW1N1cGVySWRdKSB7XG4gICAgICByZXR1cm4gY2FjaGVkQ3RvcnNbU3VwZXJJZF1cbiAgICB9XG5cbiAgICB2YXIgbmFtZSA9IGV4dGVuZE9wdGlvbnMubmFtZSB8fCBTdXBlci5vcHRpb25zLm5hbWU7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgbmFtZSkge1xuICAgICAgdmFsaWRhdGVDb21wb25lbnROYW1lKG5hbWUpO1xuICAgIH1cblxuICAgIHZhciBTdWIgPSBmdW5jdGlvbiBWdWVDb21wb25lbnQgKG9wdGlvbnMpIHtcbiAgICAgIHRoaXMuX2luaXQob3B0aW9ucyk7XG4gICAgfTtcbiAgICBTdWIucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShTdXBlci5wcm90b3R5cGUpO1xuICAgIFN1Yi5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBTdWI7XG4gICAgU3ViLmNpZCA9IGNpZCsrO1xuICAgIFN1Yi5vcHRpb25zID0gbWVyZ2VPcHRpb25zKFxuICAgICAgU3VwZXIub3B0aW9ucyxcbiAgICAgIGV4dGVuZE9wdGlvbnNcbiAgICApO1xuICAgIFN1Ylsnc3VwZXInXSA9IFN1cGVyO1xuXG4gICAgLy8gRm9yIHByb3BzIGFuZCBjb21wdXRlZCBwcm9wZXJ0aWVzLCB3ZSBkZWZpbmUgdGhlIHByb3h5IGdldHRlcnMgb25cbiAgICAvLyB0aGUgVnVlIGluc3RhbmNlcyBhdCBleHRlbnNpb24gdGltZSwgb24gdGhlIGV4dGVuZGVkIHByb3RvdHlwZS4gVGhpc1xuICAgIC8vIGF2b2lkcyBPYmplY3QuZGVmaW5lUHJvcGVydHkgY2FsbHMgZm9yIGVhY2ggaW5zdGFuY2UgY3JlYXRlZC5cbiAgICBpZiAoU3ViLm9wdGlvbnMucHJvcHMpIHtcbiAgICAgIGluaXRQcm9wcyQxKFN1Yik7XG4gICAgfVxuICAgIGlmIChTdWIub3B0aW9ucy5jb21wdXRlZCkge1xuICAgICAgaW5pdENvbXB1dGVkJDEoU3ViKTtcbiAgICB9XG5cbiAgICAvLyBhbGxvdyBmdXJ0aGVyIGV4dGVuc2lvbi9taXhpbi9wbHVnaW4gdXNhZ2VcbiAgICBTdWIuZXh0ZW5kID0gU3VwZXIuZXh0ZW5kO1xuICAgIFN1Yi5taXhpbiA9IFN1cGVyLm1peGluO1xuICAgIFN1Yi51c2UgPSBTdXBlci51c2U7XG5cbiAgICAvLyBjcmVhdGUgYXNzZXQgcmVnaXN0ZXJzLCBzbyBleHRlbmRlZCBjbGFzc2VzXG4gICAgLy8gY2FuIGhhdmUgdGhlaXIgcHJpdmF0ZSBhc3NldHMgdG9vLlxuICAgIEFTU0VUX1RZUEVTLmZvckVhY2goZnVuY3Rpb24gKHR5cGUpIHtcbiAgICAgIFN1Ylt0eXBlXSA9IFN1cGVyW3R5cGVdO1xuICAgIH0pO1xuICAgIC8vIGVuYWJsZSByZWN1cnNpdmUgc2VsZi1sb29rdXBcbiAgICBpZiAobmFtZSkge1xuICAgICAgU3ViLm9wdGlvbnMuY29tcG9uZW50c1tuYW1lXSA9IFN1YjtcbiAgICB9XG5cbiAgICAvLyBrZWVwIGEgcmVmZXJlbmNlIHRvIHRoZSBzdXBlciBvcHRpb25zIGF0IGV4dGVuc2lvbiB0aW1lLlxuICAgIC8vIGxhdGVyIGF0IGluc3RhbnRpYXRpb24gd2UgY2FuIGNoZWNrIGlmIFN1cGVyJ3Mgb3B0aW9ucyBoYXZlXG4gICAgLy8gYmVlbiB1cGRhdGVkLlxuICAgIFN1Yi5zdXBlck9wdGlvbnMgPSBTdXBlci5vcHRpb25zO1xuICAgIFN1Yi5leHRlbmRPcHRpb25zID0gZXh0ZW5kT3B0aW9ucztcbiAgICBTdWIuc2VhbGVkT3B0aW9ucyA9IGV4dGVuZCh7fSwgU3ViLm9wdGlvbnMpO1xuXG4gICAgLy8gY2FjaGUgY29uc3RydWN0b3JcbiAgICBjYWNoZWRDdG9yc1tTdXBlcklkXSA9IFN1YjtcbiAgICByZXR1cm4gU3ViXG4gIH07XG59XG5cbmZ1bmN0aW9uIGluaXRQcm9wcyQxIChDb21wKSB7XG4gIHZhciBwcm9wcyA9IENvbXAub3B0aW9ucy5wcm9wcztcbiAgZm9yICh2YXIga2V5IGluIHByb3BzKSB7XG4gICAgcHJveHkoQ29tcC5wcm90b3R5cGUsIFwiX3Byb3BzXCIsIGtleSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gaW5pdENvbXB1dGVkJDEgKENvbXApIHtcbiAgdmFyIGNvbXB1dGVkID0gQ29tcC5vcHRpb25zLmNvbXB1dGVkO1xuICBmb3IgKHZhciBrZXkgaW4gY29tcHV0ZWQpIHtcbiAgICBkZWZpbmVDb21wdXRlZChDb21wLnByb3RvdHlwZSwga2V5LCBjb21wdXRlZFtrZXldKTtcbiAgfVxufVxuXG4vKiAgKi9cblxuZnVuY3Rpb24gaW5pdEFzc2V0UmVnaXN0ZXJzIChWdWUpIHtcbiAgLyoqXG4gICAqIENyZWF0ZSBhc3NldCByZWdpc3RyYXRpb24gbWV0aG9kcy5cbiAgICovXG4gIEFTU0VUX1RZUEVTLmZvckVhY2goZnVuY3Rpb24gKHR5cGUpIHtcbiAgICBWdWVbdHlwZV0gPSBmdW5jdGlvbiAoXG4gICAgICBpZCxcbiAgICAgIGRlZmluaXRpb25cbiAgICApIHtcbiAgICAgIGlmICghZGVmaW5pdGlvbikge1xuICAgICAgICByZXR1cm4gdGhpcy5vcHRpb25zW3R5cGUgKyAncyddW2lkXVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIHR5cGUgPT09ICdjb21wb25lbnQnKSB7XG4gICAgICAgICAgdmFsaWRhdGVDb21wb25lbnROYW1lKGlkKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZSA9PT0gJ2NvbXBvbmVudCcgJiYgaXNQbGFpbk9iamVjdChkZWZpbml0aW9uKSkge1xuICAgICAgICAgIGRlZmluaXRpb24ubmFtZSA9IGRlZmluaXRpb24ubmFtZSB8fCBpZDtcbiAgICAgICAgICBkZWZpbml0aW9uID0gdGhpcy5vcHRpb25zLl9iYXNlLmV4dGVuZChkZWZpbml0aW9uKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZSA9PT0gJ2RpcmVjdGl2ZScgJiYgdHlwZW9mIGRlZmluaXRpb24gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICBkZWZpbml0aW9uID0geyBiaW5kOiBkZWZpbml0aW9uLCB1cGRhdGU6IGRlZmluaXRpb24gfTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLm9wdGlvbnNbdHlwZSArICdzJ11baWRdID0gZGVmaW5pdGlvbjtcbiAgICAgICAgcmV0dXJuIGRlZmluaXRpb25cbiAgICAgIH1cbiAgICB9O1xuICB9KTtcbn1cblxuLyogICovXG5cblxuXG5mdW5jdGlvbiBnZXRDb21wb25lbnROYW1lIChvcHRzKSB7XG4gIHJldHVybiBvcHRzICYmIChvcHRzLkN0b3Iub3B0aW9ucy5uYW1lIHx8IG9wdHMudGFnKVxufVxuXG5mdW5jdGlvbiBtYXRjaGVzIChwYXR0ZXJuLCBuYW1lKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KHBhdHRlcm4pKSB7XG4gICAgcmV0dXJuIHBhdHRlcm4uaW5kZXhPZihuYW1lKSA+IC0xXG4gIH0gZWxzZSBpZiAodHlwZW9mIHBhdHRlcm4gPT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIHBhdHRlcm4uc3BsaXQoJywnKS5pbmRleE9mKG5hbWUpID4gLTFcbiAgfSBlbHNlIGlmIChpc1JlZ0V4cChwYXR0ZXJuKSkge1xuICAgIHJldHVybiBwYXR0ZXJuLnRlc3QobmFtZSlcbiAgfVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICByZXR1cm4gZmFsc2Vcbn1cblxuZnVuY3Rpb24gcHJ1bmVDYWNoZSAoa2VlcEFsaXZlSW5zdGFuY2UsIGZpbHRlcikge1xuICB2YXIgY2FjaGUgPSBrZWVwQWxpdmVJbnN0YW5jZS5jYWNoZTtcbiAgdmFyIGtleXMgPSBrZWVwQWxpdmVJbnN0YW5jZS5rZXlzO1xuICB2YXIgX3Zub2RlID0ga2VlcEFsaXZlSW5zdGFuY2UuX3Zub2RlO1xuICBmb3IgKHZhciBrZXkgaW4gY2FjaGUpIHtcbiAgICB2YXIgY2FjaGVkTm9kZSA9IGNhY2hlW2tleV07XG4gICAgaWYgKGNhY2hlZE5vZGUpIHtcbiAgICAgIHZhciBuYW1lID0gZ2V0Q29tcG9uZW50TmFtZShjYWNoZWROb2RlLmNvbXBvbmVudE9wdGlvbnMpO1xuICAgICAgaWYgKG5hbWUgJiYgIWZpbHRlcihuYW1lKSkge1xuICAgICAgICBwcnVuZUNhY2hlRW50cnkoY2FjaGUsIGtleSwga2V5cywgX3Zub2RlKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gcHJ1bmVDYWNoZUVudHJ5IChcbiAgY2FjaGUsXG4gIGtleSxcbiAga2V5cyxcbiAgY3VycmVudFxuKSB7XG4gIHZhciBjYWNoZWQkJDEgPSBjYWNoZVtrZXldO1xuICBpZiAoY2FjaGVkJCQxICYmICghY3VycmVudCB8fCBjYWNoZWQkJDEudGFnICE9PSBjdXJyZW50LnRhZykpIHtcbiAgICBjYWNoZWQkJDEuY29tcG9uZW50SW5zdGFuY2UuJGRlc3Ryb3koKTtcbiAgfVxuICBjYWNoZVtrZXldID0gbnVsbDtcbiAgcmVtb3ZlKGtleXMsIGtleSk7XG59XG5cbnZhciBwYXR0ZXJuVHlwZXMgPSBbU3RyaW5nLCBSZWdFeHAsIEFycmF5XTtcblxudmFyIEtlZXBBbGl2ZSA9IHtcbiAgbmFtZTogJ2tlZXAtYWxpdmUnLFxuICBhYnN0cmFjdDogdHJ1ZSxcblxuICBwcm9wczoge1xuICAgIGluY2x1ZGU6IHBhdHRlcm5UeXBlcyxcbiAgICBleGNsdWRlOiBwYXR0ZXJuVHlwZXMsXG4gICAgbWF4OiBbU3RyaW5nLCBOdW1iZXJdXG4gIH0sXG5cbiAgY3JlYXRlZDogZnVuY3Rpb24gY3JlYXRlZCAoKSB7XG4gICAgdGhpcy5jYWNoZSA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgdGhpcy5rZXlzID0gW107XG4gIH0sXG5cbiAgZGVzdHJveWVkOiBmdW5jdGlvbiBkZXN0cm95ZWQgKCkge1xuICAgIGZvciAodmFyIGtleSBpbiB0aGlzLmNhY2hlKSB7XG4gICAgICBwcnVuZUNhY2hlRW50cnkodGhpcy5jYWNoZSwga2V5LCB0aGlzLmtleXMpO1xuICAgIH1cbiAgfSxcblxuICBtb3VudGVkOiBmdW5jdGlvbiBtb3VudGVkICgpIHtcbiAgICB2YXIgdGhpcyQxID0gdGhpcztcblxuICAgIHRoaXMuJHdhdGNoKCdpbmNsdWRlJywgZnVuY3Rpb24gKHZhbCkge1xuICAgICAgcHJ1bmVDYWNoZSh0aGlzJDEsIGZ1bmN0aW9uIChuYW1lKSB7IHJldHVybiBtYXRjaGVzKHZhbCwgbmFtZSk7IH0pO1xuICAgIH0pO1xuICAgIHRoaXMuJHdhdGNoKCdleGNsdWRlJywgZnVuY3Rpb24gKHZhbCkge1xuICAgICAgcHJ1bmVDYWNoZSh0aGlzJDEsIGZ1bmN0aW9uIChuYW1lKSB7IHJldHVybiAhbWF0Y2hlcyh2YWwsIG5hbWUpOyB9KTtcbiAgICB9KTtcbiAgfSxcblxuICByZW5kZXI6IGZ1bmN0aW9uIHJlbmRlciAoKSB7XG4gICAgdmFyIHNsb3QgPSB0aGlzLiRzbG90cy5kZWZhdWx0O1xuICAgIHZhciB2bm9kZSA9IGdldEZpcnN0Q29tcG9uZW50Q2hpbGQoc2xvdCk7XG4gICAgdmFyIGNvbXBvbmVudE9wdGlvbnMgPSB2bm9kZSAmJiB2bm9kZS5jb21wb25lbnRPcHRpb25zO1xuICAgIGlmIChjb21wb25lbnRPcHRpb25zKSB7XG4gICAgICAvLyBjaGVjayBwYXR0ZXJuXG4gICAgICB2YXIgbmFtZSA9IGdldENvbXBvbmVudE5hbWUoY29tcG9uZW50T3B0aW9ucyk7XG4gICAgICB2YXIgcmVmID0gdGhpcztcbiAgICAgIHZhciBpbmNsdWRlID0gcmVmLmluY2x1ZGU7XG4gICAgICB2YXIgZXhjbHVkZSA9IHJlZi5leGNsdWRlO1xuICAgICAgaWYgKFxuICAgICAgICAvLyBub3QgaW5jbHVkZWRcbiAgICAgICAgKGluY2x1ZGUgJiYgKCFuYW1lIHx8ICFtYXRjaGVzKGluY2x1ZGUsIG5hbWUpKSkgfHxcbiAgICAgICAgLy8gZXhjbHVkZWRcbiAgICAgICAgKGV4Y2x1ZGUgJiYgbmFtZSAmJiBtYXRjaGVzKGV4Y2x1ZGUsIG5hbWUpKVxuICAgICAgKSB7XG4gICAgICAgIHJldHVybiB2bm9kZVxuICAgICAgfVxuXG4gICAgICB2YXIgcmVmJDEgPSB0aGlzO1xuICAgICAgdmFyIGNhY2hlID0gcmVmJDEuY2FjaGU7XG4gICAgICB2YXIga2V5cyA9IHJlZiQxLmtleXM7XG4gICAgICB2YXIga2V5ID0gdm5vZGUua2V5ID09IG51bGxcbiAgICAgICAgLy8gc2FtZSBjb25zdHJ1Y3RvciBtYXkgZ2V0IHJlZ2lzdGVyZWQgYXMgZGlmZmVyZW50IGxvY2FsIGNvbXBvbmVudHNcbiAgICAgICAgLy8gc28gY2lkIGFsb25lIGlzIG5vdCBlbm91Z2ggKCMzMjY5KVxuICAgICAgICA/IGNvbXBvbmVudE9wdGlvbnMuQ3Rvci5jaWQgKyAoY29tcG9uZW50T3B0aW9ucy50YWcgPyAoXCI6OlwiICsgKGNvbXBvbmVudE9wdGlvbnMudGFnKSkgOiAnJylcbiAgICAgICAgOiB2bm9kZS5rZXk7XG4gICAgICBpZiAoY2FjaGVba2V5XSkge1xuICAgICAgICB2bm9kZS5jb21wb25lbnRJbnN0YW5jZSA9IGNhY2hlW2tleV0uY29tcG9uZW50SW5zdGFuY2U7XG4gICAgICAgIC8vIG1ha2UgY3VycmVudCBrZXkgZnJlc2hlc3RcbiAgICAgICAgcmVtb3ZlKGtleXMsIGtleSk7XG4gICAgICAgIGtleXMucHVzaChrZXkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY2FjaGVba2V5XSA9IHZub2RlO1xuICAgICAgICBrZXlzLnB1c2goa2V5KTtcbiAgICAgICAgLy8gcHJ1bmUgb2xkZXN0IGVudHJ5XG4gICAgICAgIGlmICh0aGlzLm1heCAmJiBrZXlzLmxlbmd0aCA+IHBhcnNlSW50KHRoaXMubWF4KSkge1xuICAgICAgICAgIHBydW5lQ2FjaGVFbnRyeShjYWNoZSwga2V5c1swXSwga2V5cywgdGhpcy5fdm5vZGUpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHZub2RlLmRhdGEua2VlcEFsaXZlID0gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIHZub2RlIHx8IChzbG90ICYmIHNsb3RbMF0pXG4gIH1cbn07XG5cbnZhciBidWlsdEluQ29tcG9uZW50cyA9IHtcbiAgS2VlcEFsaXZlOiBLZWVwQWxpdmVcbn07XG5cbi8qICAqL1xuXG5mdW5jdGlvbiBpbml0R2xvYmFsQVBJIChWdWUpIHtcbiAgLy8gY29uZmlnXG4gIHZhciBjb25maWdEZWYgPSB7fTtcbiAgY29uZmlnRGVmLmdldCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGNvbmZpZzsgfTtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBjb25maWdEZWYuc2V0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgd2FybihcbiAgICAgICAgJ0RvIG5vdCByZXBsYWNlIHRoZSBWdWUuY29uZmlnIG9iamVjdCwgc2V0IGluZGl2aWR1YWwgZmllbGRzIGluc3RlYWQuJ1xuICAgICAgKTtcbiAgICB9O1xuICB9XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShWdWUsICdjb25maWcnLCBjb25maWdEZWYpO1xuXG4gIC8vIGV4cG9zZWQgdXRpbCBtZXRob2RzLlxuICAvLyBOT1RFOiB0aGVzZSBhcmUgbm90IGNvbnNpZGVyZWQgcGFydCBvZiB0aGUgcHVibGljIEFQSSAtIGF2b2lkIHJlbHlpbmcgb25cbiAgLy8gdGhlbSB1bmxlc3MgeW91IGFyZSBhd2FyZSBvZiB0aGUgcmlzay5cbiAgVnVlLnV0aWwgPSB7XG4gICAgd2Fybjogd2FybixcbiAgICBleHRlbmQ6IGV4dGVuZCxcbiAgICBtZXJnZU9wdGlvbnM6IG1lcmdlT3B0aW9ucyxcbiAgICBkZWZpbmVSZWFjdGl2ZTogZGVmaW5lUmVhY3RpdmUkJDFcbiAgfTtcblxuICBWdWUuc2V0ID0gc2V0O1xuICBWdWUuZGVsZXRlID0gZGVsO1xuICBWdWUubmV4dFRpY2sgPSBuZXh0VGljaztcblxuICAvLyAyLjYgZXhwbGljaXQgb2JzZXJ2YWJsZSBBUElcbiAgVnVlLm9ic2VydmFibGUgPSBmdW5jdGlvbiAob2JqKSB7XG4gICAgb2JzZXJ2ZShvYmopO1xuICAgIHJldHVybiBvYmpcbiAgfTtcblxuICBWdWUub3B0aW9ucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gIEFTU0VUX1RZUEVTLmZvckVhY2goZnVuY3Rpb24gKHR5cGUpIHtcbiAgICBWdWUub3B0aW9uc1t0eXBlICsgJ3MnXSA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gIH0pO1xuXG4gIC8vIHRoaXMgaXMgdXNlZCB0byBpZGVudGlmeSB0aGUgXCJiYXNlXCIgY29uc3RydWN0b3IgdG8gZXh0ZW5kIGFsbCBwbGFpbi1vYmplY3RcbiAgLy8gY29tcG9uZW50cyB3aXRoIGluIFdlZXgncyBtdWx0aS1pbnN0YW5jZSBzY2VuYXJpb3MuXG4gIFZ1ZS5vcHRpb25zLl9iYXNlID0gVnVlO1xuXG4gIGV4dGVuZChWdWUub3B0aW9ucy5jb21wb25lbnRzLCBidWlsdEluQ29tcG9uZW50cyk7XG5cbiAgaW5pdFVzZShWdWUpO1xuICBpbml0TWl4aW4kMShWdWUpO1xuICBpbml0RXh0ZW5kKFZ1ZSk7XG4gIGluaXRBc3NldFJlZ2lzdGVycyhWdWUpO1xufVxuXG5pbml0R2xvYmFsQVBJKFZ1ZSk7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShWdWUucHJvdG90eXBlLCAnJGlzU2VydmVyJywge1xuICBnZXQ6IGlzU2VydmVyUmVuZGVyaW5nXG59KTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KFZ1ZS5wcm90b3R5cGUsICckc3NyQ29udGV4dCcsIHtcbiAgZ2V0OiBmdW5jdGlvbiBnZXQgKCkge1xuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG4gICAgcmV0dXJuIHRoaXMuJHZub2RlICYmIHRoaXMuJHZub2RlLnNzckNvbnRleHRcbiAgfVxufSk7XG5cbi8vIGV4cG9zZSBGdW5jdGlvbmFsUmVuZGVyQ29udGV4dCBmb3Igc3NyIHJ1bnRpbWUgaGVscGVyIGluc3RhbGxhdGlvblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KFZ1ZSwgJ0Z1bmN0aW9uYWxSZW5kZXJDb250ZXh0Jywge1xuICB2YWx1ZTogRnVuY3Rpb25hbFJlbmRlckNvbnRleHRcbn0pO1xuXG5WdWUudmVyc2lvbiA9ICcyLjYuMTEnO1xuXG4vKipcbiAqIGh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9UZW5jZW50L3dlc3RvcmUvbWFzdGVyL3BhY2thZ2VzL3dlc3RvcmUvdXRpbHMvZGlmZi5qc1xuICovXG52YXIgQVJSQVlUWVBFID0gJ1tvYmplY3QgQXJyYXldJztcbnZhciBPQkpFQ1RUWVBFID0gJ1tvYmplY3QgT2JqZWN0XSc7XG4vLyBjb25zdCBGVU5DVElPTlRZUEUgPSAnW29iamVjdCBGdW5jdGlvbl0nXG5cbmZ1bmN0aW9uIGRpZmYoY3VycmVudCwgcHJlKSB7XG4gICAgdmFyIHJlc3VsdCA9IHt9O1xuICAgIHN5bmNLZXlzKGN1cnJlbnQsIHByZSk7XG4gICAgX2RpZmYoY3VycmVudCwgcHJlLCAnJywgcmVzdWx0KTtcbiAgICByZXR1cm4gcmVzdWx0XG59XG5cbmZ1bmN0aW9uIHN5bmNLZXlzKGN1cnJlbnQsIHByZSkge1xuICAgIGlmIChjdXJyZW50ID09PSBwcmUpIHsgcmV0dXJuIH1cbiAgICB2YXIgcm9vdEN1cnJlbnRUeXBlID0gdHlwZShjdXJyZW50KTtcbiAgICB2YXIgcm9vdFByZVR5cGUgPSB0eXBlKHByZSk7XG4gICAgaWYgKHJvb3RDdXJyZW50VHlwZSA9PSBPQkpFQ1RUWVBFICYmIHJvb3RQcmVUeXBlID09IE9CSkVDVFRZUEUpIHtcbiAgICAgICAgaWYoT2JqZWN0LmtleXMoY3VycmVudCkubGVuZ3RoID49IE9iamVjdC5rZXlzKHByZSkubGVuZ3RoKXtcbiAgICAgICAgICAgIGZvciAodmFyIGtleSBpbiBwcmUpIHtcbiAgICAgICAgICAgICAgICB2YXIgY3VycmVudFZhbHVlID0gY3VycmVudFtrZXldO1xuICAgICAgICAgICAgICAgIGlmIChjdXJyZW50VmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICBjdXJyZW50W2tleV0gPSBudWxsO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHN5bmNLZXlzKGN1cnJlbnRWYWx1ZSwgcHJlW2tleV0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0gZWxzZSBpZiAocm9vdEN1cnJlbnRUeXBlID09IEFSUkFZVFlQRSAmJiByb290UHJlVHlwZSA9PSBBUlJBWVRZUEUpIHtcbiAgICAgICAgaWYgKGN1cnJlbnQubGVuZ3RoID49IHByZS5sZW5ndGgpIHtcbiAgICAgICAgICAgIHByZS5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtLCBpbmRleCkge1xuICAgICAgICAgICAgICAgIHN5bmNLZXlzKGN1cnJlbnRbaW5kZXhdLCBpdGVtKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5mdW5jdGlvbiBfZGlmZihjdXJyZW50LCBwcmUsIHBhdGgsIHJlc3VsdCkge1xuICAgIGlmIChjdXJyZW50ID09PSBwcmUpIHsgcmV0dXJuIH1cbiAgICB2YXIgcm9vdEN1cnJlbnRUeXBlID0gdHlwZShjdXJyZW50KTtcbiAgICB2YXIgcm9vdFByZVR5cGUgPSB0eXBlKHByZSk7XG4gICAgaWYgKHJvb3RDdXJyZW50VHlwZSA9PSBPQkpFQ1RUWVBFKSB7XG4gICAgICAgIGlmIChyb290UHJlVHlwZSAhPSBPQkpFQ1RUWVBFIHx8IE9iamVjdC5rZXlzKGN1cnJlbnQpLmxlbmd0aCA8IE9iamVjdC5rZXlzKHByZSkubGVuZ3RoKSB7XG4gICAgICAgICAgICBzZXRSZXN1bHQocmVzdWx0LCBwYXRoLCBjdXJyZW50KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHZhciBsb29wID0gZnVuY3Rpb24gKCBrZXkgKSB7XG4gICAgICAgICAgICAgICAgdmFyIGN1cnJlbnRWYWx1ZSA9IGN1cnJlbnRba2V5XTtcbiAgICAgICAgICAgICAgICB2YXIgcHJlVmFsdWUgPSBwcmVba2V5XTtcbiAgICAgICAgICAgICAgICB2YXIgY3VycmVudFR5cGUgPSB0eXBlKGN1cnJlbnRWYWx1ZSk7XG4gICAgICAgICAgICAgICAgdmFyIHByZVR5cGUgPSB0eXBlKHByZVZhbHVlKTtcbiAgICAgICAgICAgICAgICBpZiAoY3VycmVudFR5cGUgIT0gQVJSQVlUWVBFICYmIGN1cnJlbnRUeXBlICE9IE9CSkVDVFRZUEUpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRWYWx1ZSAhPSBwcmVba2V5XSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2V0UmVzdWx0KHJlc3VsdCwgKHBhdGggPT0gJycgPyAnJyA6IHBhdGggKyBcIi5cIikgKyBrZXksIGN1cnJlbnRWYWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGN1cnJlbnRUeXBlID09IEFSUkFZVFlQRSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAocHJlVHlwZSAhPSBBUlJBWVRZUEUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFJlc3VsdChyZXN1bHQsIChwYXRoID09ICcnID8gJycgOiBwYXRoICsgXCIuXCIpICsga2V5LCBjdXJyZW50VmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRWYWx1ZS5sZW5ndGggPCBwcmVWYWx1ZS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRSZXN1bHQocmVzdWx0LCAocGF0aCA9PSAnJyA/ICcnIDogcGF0aCArIFwiLlwiKSArIGtleSwgY3VycmVudFZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudFZhbHVlLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0sIGluZGV4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9kaWZmKGl0ZW0sIHByZVZhbHVlW2luZGV4XSwgKHBhdGggPT0gJycgPyAnJyA6IHBhdGggKyBcIi5cIikgKyBrZXkgKyAnWycgKyBpbmRleCArICddJywgcmVzdWx0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoY3VycmVudFR5cGUgPT0gT0JKRUNUVFlQRSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAocHJlVHlwZSAhPSBPQkpFQ1RUWVBFIHx8IE9iamVjdC5rZXlzKGN1cnJlbnRWYWx1ZSkubGVuZ3RoIDwgT2JqZWN0LmtleXMocHJlVmFsdWUpLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2V0UmVzdWx0KHJlc3VsdCwgKHBhdGggPT0gJycgPyAnJyA6IHBhdGggKyBcIi5cIikgKyBrZXksIGN1cnJlbnRWYWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBzdWJLZXkgaW4gY3VycmVudFZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2RpZmYoY3VycmVudFZhbHVlW3N1YktleV0sIHByZVZhbHVlW3N1YktleV0sIChwYXRoID09ICcnID8gJycgOiBwYXRoICsgXCIuXCIpICsga2V5ICsgJy4nICsgc3ViS2V5LCByZXN1bHQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgZm9yICh2YXIga2V5IGluIGN1cnJlbnQpIGxvb3AoIGtleSApO1xuICAgICAgICB9XG4gICAgfSBlbHNlIGlmIChyb290Q3VycmVudFR5cGUgPT0gQVJSQVlUWVBFKSB7XG4gICAgICAgIGlmIChyb290UHJlVHlwZSAhPSBBUlJBWVRZUEUpIHtcbiAgICAgICAgICAgIHNldFJlc3VsdChyZXN1bHQsIHBhdGgsIGN1cnJlbnQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKGN1cnJlbnQubGVuZ3RoIDwgcHJlLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHNldFJlc3VsdChyZXN1bHQsIHBhdGgsIGN1cnJlbnQpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50LmZvckVhY2goZnVuY3Rpb24gKGl0ZW0sIGluZGV4KSB7XG4gICAgICAgICAgICAgICAgICAgIF9kaWZmKGl0ZW0sIHByZVtpbmRleF0sIHBhdGggKyAnWycgKyBpbmRleCArICddJywgcmVzdWx0KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAgIHNldFJlc3VsdChyZXN1bHQsIHBhdGgsIGN1cnJlbnQpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gc2V0UmVzdWx0KHJlc3VsdCwgaywgdikge1xuICAgIC8vIGlmICh0eXBlKHYpICE9IEZVTkNUSU9OVFlQRSkge1xuICAgICAgICByZXN1bHRba10gPSB2O1xuICAgIC8vIH1cbn1cblxuZnVuY3Rpb24gdHlwZShvYmopIHtcbiAgICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG9iailcbn1cblxuLyogICovXHJcblxyXG5mdW5jdGlvbiBmbHVzaENhbGxiYWNrcyQxKHZtKSB7XHJcbiAgICBpZiAodm0uX19uZXh0X3RpY2tfY2FsbGJhY2tzICYmIHZtLl9fbmV4dF90aWNrX2NhbGxiYWNrcy5sZW5ndGgpIHtcclxuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuVlVFX0FQUF9ERUJVRykge1xyXG4gICAgICAgICAgICB2YXIgbXBJbnN0YW5jZSA9IHZtLiRzY29wZTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ1snICsgKCtuZXcgRGF0ZSkgKyAnXVsnICsgKG1wSW5zdGFuY2UuaXMgfHwgbXBJbnN0YW5jZS5yb3V0ZSkgKyAnXVsnICsgdm0uX3VpZCArXHJcbiAgICAgICAgICAgICAgICAnXTpmbHVzaENhbGxiYWNrc1snICsgdm0uX19uZXh0X3RpY2tfY2FsbGJhY2tzLmxlbmd0aCArICddJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBjb3BpZXMgPSB2bS5fX25leHRfdGlja19jYWxsYmFja3Muc2xpY2UoMCk7XHJcbiAgICAgICAgdm0uX19uZXh0X3RpY2tfY2FsbGJhY2tzLmxlbmd0aCA9IDA7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjb3BpZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgY29waWVzW2ldKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBoYXNSZW5kZXJXYXRjaGVyKHZtKSB7XHJcbiAgICByZXR1cm4gcXVldWUuZmluZChmdW5jdGlvbiAod2F0Y2hlcikgeyByZXR1cm4gdm0uX3dhdGNoZXIgPT09IHdhdGNoZXI7IH0pXHJcbn1cclxuXHJcbmZ1bmN0aW9uIG5leHRUaWNrJDEodm0sIGNiKSB7XHJcbiAgICAvLzEubmV4dFRpY2sg5LmL5YmNIOW3siBzZXREYXRhIOS4lCBzZXREYXRhIOi/mOacquWbnuiwg+WujOaIkFxyXG4gICAgLy8yLm5leHRUaWNrIOS5i+WJjeWtmOWcqCByZW5kZXIgd2F0Y2hlclxyXG4gICAgaWYgKCF2bS5fX25leHRfdGlja19wZW5kaW5nICYmICFoYXNSZW5kZXJXYXRjaGVyKHZtKSkge1xuICAgICAgICBpZihwcm9jZXNzLmVudi5WVUVfQVBQX0RFQlVHKXtcbiAgICAgICAgICAgIHZhciBtcEluc3RhbmNlID0gdm0uJHNjb3BlO1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ1snICsgKCtuZXcgRGF0ZSkgKyAnXVsnICsgKG1wSW5zdGFuY2UuaXMgfHwgbXBJbnN0YW5jZS5yb3V0ZSkgKyAnXVsnICsgdm0uX3VpZCArXG4gICAgICAgICAgICAgICAgJ106bmV4dFZ1ZVRpY2snKTtcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBuZXh0VGljayhjYiwgdm0pXHJcbiAgICB9ZWxzZXtcbiAgICAgICAgaWYocHJvY2Vzcy5lbnYuVlVFX0FQUF9ERUJVRyl7XG4gICAgICAgICAgICB2YXIgbXBJbnN0YW5jZSQxID0gdm0uJHNjb3BlO1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ1snICsgKCtuZXcgRGF0ZSkgKyAnXVsnICsgKG1wSW5zdGFuY2UkMS5pcyB8fCBtcEluc3RhbmNlJDEucm91dGUpICsgJ11bJyArIHZtLl91aWQgK1xuICAgICAgICAgICAgICAgICddOm5leHRNUFRpY2snKTtcbiAgICAgICAgfVxuICAgIH1cclxuICAgIHZhciBfcmVzb2x2ZTtcclxuICAgIGlmICghdm0uX19uZXh0X3RpY2tfY2FsbGJhY2tzKSB7XHJcbiAgICAgICAgdm0uX19uZXh0X3RpY2tfY2FsbGJhY2tzID0gW107XHJcbiAgICB9XHJcbiAgICB2bS5fX25leHRfdGlja19jYWxsYmFja3MucHVzaChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKGNiKSB7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBjYi5jYWxsKHZtKTtcclxuICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICAgICAgaGFuZGxlRXJyb3IoZSwgdm0sICduZXh0VGljaycpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIGlmIChfcmVzb2x2ZSkge1xyXG4gICAgICAgICAgICBfcmVzb2x2ZSh2bSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICAvLyAkZmxvdy1kaXNhYmxlLWxpbmVcclxuICAgIGlmICghY2IgJiYgdHlwZW9mIFByb21pc2UgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlKSB7XHJcbiAgICAgICAgICAgIF9yZXNvbHZlID0gcmVzb2x2ZTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG59XG5cbi8qICAqL1xyXG5cclxuZnVuY3Rpb24gY2xvbmVXaXRoRGF0YSh2bSkge1xyXG4gIC8vIOehruS/neW9k+WJjSB2bSDmiYDmnInmlbDmja7ooqvlkIzmraVcclxuICB2YXIgcmV0ID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcclxuICB2YXIgZGF0YUtleXMgPSBbXS5jb25jYXQoXHJcbiAgICBPYmplY3Qua2V5cyh2bS5fZGF0YSB8fCB7fSksXHJcbiAgICBPYmplY3Qua2V5cyh2bS5fY29tcHV0ZWRXYXRjaGVycyB8fCB7fSkpO1xyXG5cclxuICBkYXRhS2V5cy5yZWR1Y2UoZnVuY3Rpb24ocmV0LCBrZXkpIHtcclxuICAgIHJldFtrZXldID0gdm1ba2V5XTtcclxuICAgIHJldHVybiByZXRcclxuICB9LCByZXQpO1xyXG4gIC8vVE9ETyDpnIDopoHmiorml6DnlKjmlbDmja7lpITnkIbmjonvvIzmr5TlpoIgbGlzdD0+bDAg5YiZIGxpc3Qg6ZyA6KaB56e76Zmk77yM5ZCm5YiZ5aSa5Lyg6L6T5LiA5Lu95pWw5o2uXHJcbiAgT2JqZWN0LmFzc2lnbihyZXQsIHZtLiRtcC5kYXRhIHx8IHt9KTtcclxuICBpZiAoXHJcbiAgICBBcnJheS5pc0FycmF5KHZtLiRvcHRpb25zLmJlaGF2aW9ycykgJiZcclxuICAgIHZtLiRvcHRpb25zLmJlaGF2aW9ycy5pbmRleE9mKCd1bmk6Ly9mb3JtLWZpZWxkJykgIT09IC0xXHJcbiAgKSB7IC8vZm9ybS1maWVsZFxyXG4gICAgcmV0WyduYW1lJ10gPSB2bS5uYW1lO1xyXG4gICAgcmV0Wyd2YWx1ZSddID0gdm0udmFsdWU7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShyZXQpKVxyXG59XHJcblxyXG52YXIgcGF0Y2ggPSBmdW5jdGlvbihvbGRWbm9kZSwgdm5vZGUpIHtcbiAgdmFyIHRoaXMkMSA9IHRoaXM7XG5cclxuICBpZiAodm5vZGUgPT09IG51bGwpIHsgLy9kZXN0cm95XHJcbiAgICByZXR1cm5cclxuICB9XHJcbiAgaWYgKHRoaXMubXBUeXBlID09PSAncGFnZScgfHwgdGhpcy5tcFR5cGUgPT09ICdjb21wb25lbnQnKSB7XHJcbiAgICB2YXIgbXBJbnN0YW5jZSA9IHRoaXMuJHNjb3BlO1xyXG4gICAgdmFyIGRhdGEgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xyXG4gICAgdHJ5IHtcclxuICAgICAgZGF0YSA9IGNsb25lV2l0aERhdGEodGhpcyk7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgfVxyXG4gICAgZGF0YS5fX3dlYnZpZXdJZF9fID0gbXBJbnN0YW5jZS5kYXRhLl9fd2Vidmlld0lkX187XHJcbiAgICB2YXIgbXBEYXRhID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcclxuICAgIE9iamVjdC5rZXlzKGRhdGEpLmZvckVhY2goZnVuY3Rpb24gKGtleSkgeyAvL+S7heWQjOatpSBkYXRhIOS4reacieeahOaVsOaNrlxyXG4gICAgICBtcERhdGFba2V5XSA9IG1wSW5zdGFuY2UuZGF0YVtrZXldO1xyXG4gICAgfSk7XHJcbiAgICB2YXIgZGlmZkRhdGEgPSB0aGlzLiRzaG91bGREaWZmRGF0YSA9PT0gZmFsc2UgPyBkYXRhIDogZGlmZihkYXRhLCBtcERhdGEpO1xyXG4gICAgaWYgKE9iamVjdC5rZXlzKGRpZmZEYXRhKS5sZW5ndGgpIHtcclxuICAgICAgaWYgKHByb2Nlc3MuZW52LlZVRV9BUFBfREVCVUcpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnWycgKyAoK25ldyBEYXRlKSArICddWycgKyAobXBJbnN0YW5jZS5pcyB8fCBtcEluc3RhbmNlLnJvdXRlKSArICddWycgKyB0aGlzLl91aWQgK1xyXG4gICAgICAgICAgJ13lt67ph4/mm7TmlrAnLFxyXG4gICAgICAgICAgSlNPTi5zdHJpbmdpZnkoZGlmZkRhdGEpKTtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLl9fbmV4dF90aWNrX3BlbmRpbmcgPSB0cnVlO1xyXG4gICAgICBtcEluc3RhbmNlLnNldERhdGEoZGlmZkRhdGEsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzJDEuX19uZXh0X3RpY2tfcGVuZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGZsdXNoQ2FsbGJhY2tzJDEodGhpcyQxKTtcclxuICAgICAgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBmbHVzaENhbGxiYWNrcyQxKHRoaXMpO1xyXG4gICAgfVxyXG4gIH1cclxufTtcblxuLyogICovXG5cbmZ1bmN0aW9uIGNyZWF0ZUVtcHR5UmVuZGVyKCkge1xuXG59XG5cbmZ1bmN0aW9uIG1vdW50Q29tcG9uZW50JDEoXG4gIHZtLFxuICBlbCxcbiAgaHlkcmF0aW5nXG4pIHtcbiAgaWYgKCF2bS5tcFR5cGUpIHsvL21haW4uanMg5Lit55qEIG5ldyBWdWVcbiAgICByZXR1cm4gdm1cbiAgfVxuICBpZiAodm0ubXBUeXBlID09PSAnYXBwJykge1xuICAgIHZtLiRvcHRpb25zLnJlbmRlciA9IGNyZWF0ZUVtcHR5UmVuZGVyO1xuICB9XG4gIGlmICghdm0uJG9wdGlvbnMucmVuZGVyKSB7XG4gICAgdm0uJG9wdGlvbnMucmVuZGVyID0gY3JlYXRlRW1wdHlSZW5kZXI7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICAgICAgaWYgKCh2bS4kb3B0aW9ucy50ZW1wbGF0ZSAmJiB2bS4kb3B0aW9ucy50ZW1wbGF0ZS5jaGFyQXQoMCkgIT09ICcjJykgfHxcbiAgICAgICAgdm0uJG9wdGlvbnMuZWwgfHwgZWwpIHtcbiAgICAgICAgd2FybihcbiAgICAgICAgICAnWW91IGFyZSB1c2luZyB0aGUgcnVudGltZS1vbmx5IGJ1aWxkIG9mIFZ1ZSB3aGVyZSB0aGUgdGVtcGxhdGUgJyArXG4gICAgICAgICAgJ2NvbXBpbGVyIGlzIG5vdCBhdmFpbGFibGUuIEVpdGhlciBwcmUtY29tcGlsZSB0aGUgdGVtcGxhdGVzIGludG8gJyArXG4gICAgICAgICAgJ3JlbmRlciBmdW5jdGlvbnMsIG9yIHVzZSB0aGUgY29tcGlsZXItaW5jbHVkZWQgYnVpbGQuJyxcbiAgICAgICAgICB2bVxuICAgICAgICApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgd2FybihcbiAgICAgICAgICAnRmFpbGVkIHRvIG1vdW50IGNvbXBvbmVudDogdGVtcGxhdGUgb3IgcmVuZGVyIGZ1bmN0aW9uIG5vdCBkZWZpbmVkLicsXG4gICAgICAgICAgdm1cbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgXG4gICF2bS5fJGZhbGxiYWNrICYmIGNhbGxIb29rKHZtLCAnYmVmb3JlTW91bnQnKTtcblxuICB2YXIgdXBkYXRlQ29tcG9uZW50ID0gZnVuY3Rpb24gKCkge1xuICAgIHZtLl91cGRhdGUodm0uX3JlbmRlcigpLCBoeWRyYXRpbmcpO1xuICB9O1xuXG4gIC8vIHdlIHNldCB0aGlzIHRvIHZtLl93YXRjaGVyIGluc2lkZSB0aGUgd2F0Y2hlcidzIGNvbnN0cnVjdG9yXG4gIC8vIHNpbmNlIHRoZSB3YXRjaGVyJ3MgaW5pdGlhbCBwYXRjaCBtYXkgY2FsbCAkZm9yY2VVcGRhdGUgKGUuZy4gaW5zaWRlIGNoaWxkXG4gIC8vIGNvbXBvbmVudCdzIG1vdW50ZWQgaG9vayksIHdoaWNoIHJlbGllcyBvbiB2bS5fd2F0Y2hlciBiZWluZyBhbHJlYWR5IGRlZmluZWRcbiAgbmV3IFdhdGNoZXIodm0sIHVwZGF0ZUNvbXBvbmVudCwgbm9vcCwge1xuICAgIGJlZm9yZTogZnVuY3Rpb24gYmVmb3JlKCkge1xuICAgICAgaWYgKHZtLl9pc01vdW50ZWQgJiYgIXZtLl9pc0Rlc3Ryb3llZCkge1xuICAgICAgICBjYWxsSG9vayh2bSwgJ2JlZm9yZVVwZGF0ZScpO1xuICAgICAgfVxuICAgIH1cbiAgfSwgdHJ1ZSAvKiBpc1JlbmRlcldhdGNoZXIgKi8pO1xuICBoeWRyYXRpbmcgPSBmYWxzZTtcbiAgcmV0dXJuIHZtXG59XG5cbi8qICAqL1xuXG5mdW5jdGlvbiByZW5kZXJDbGFzcyAoXG4gIHN0YXRpY0NsYXNzLFxuICBkeW5hbWljQ2xhc3Ncbikge1xuICBpZiAoaXNEZWYoc3RhdGljQ2xhc3MpIHx8IGlzRGVmKGR5bmFtaWNDbGFzcykpIHtcbiAgICByZXR1cm4gY29uY2F0KHN0YXRpY0NsYXNzLCBzdHJpbmdpZnlDbGFzcyhkeW5hbWljQ2xhc3MpKVxuICB9XG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG4gIHJldHVybiAnJ1xufVxuXG5mdW5jdGlvbiBjb25jYXQgKGEsIGIpIHtcbiAgcmV0dXJuIGEgPyBiID8gKGEgKyAnICcgKyBiKSA6IGEgOiAoYiB8fCAnJylcbn1cblxuZnVuY3Rpb24gc3RyaW5naWZ5Q2xhc3MgKHZhbHVlKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgIHJldHVybiBzdHJpbmdpZnlBcnJheSh2YWx1ZSlcbiAgfVxuICBpZiAoaXNPYmplY3QodmFsdWUpKSB7XG4gICAgcmV0dXJuIHN0cmluZ2lmeU9iamVjdCh2YWx1ZSlcbiAgfVxuICBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJykge1xuICAgIHJldHVybiB2YWx1ZVxuICB9XG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG4gIHJldHVybiAnJ1xufVxuXG5mdW5jdGlvbiBzdHJpbmdpZnlBcnJheSAodmFsdWUpIHtcbiAgdmFyIHJlcyA9ICcnO1xuICB2YXIgc3RyaW5naWZpZWQ7XG4gIGZvciAodmFyIGkgPSAwLCBsID0gdmFsdWUubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgaWYgKGlzRGVmKHN0cmluZ2lmaWVkID0gc3RyaW5naWZ5Q2xhc3ModmFsdWVbaV0pKSAmJiBzdHJpbmdpZmllZCAhPT0gJycpIHtcbiAgICAgIGlmIChyZXMpIHsgcmVzICs9ICcgJzsgfVxuICAgICAgcmVzICs9IHN0cmluZ2lmaWVkO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzXG59XG5cbmZ1bmN0aW9uIHN0cmluZ2lmeU9iamVjdCAodmFsdWUpIHtcbiAgdmFyIHJlcyA9ICcnO1xuICBmb3IgKHZhciBrZXkgaW4gdmFsdWUpIHtcbiAgICBpZiAodmFsdWVba2V5XSkge1xuICAgICAgaWYgKHJlcykgeyByZXMgKz0gJyAnOyB9XG4gICAgICByZXMgKz0ga2V5O1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzXG59XG5cbi8qICAqL1xuXG52YXIgcGFyc2VTdHlsZVRleHQgPSBjYWNoZWQoZnVuY3Rpb24gKGNzc1RleHQpIHtcbiAgdmFyIHJlcyA9IHt9O1xuICB2YXIgbGlzdERlbGltaXRlciA9IC87KD8hW14oXSpcXCkpL2c7XG4gIHZhciBwcm9wZXJ0eURlbGltaXRlciA9IC86KC4rKS87XG4gIGNzc1RleHQuc3BsaXQobGlzdERlbGltaXRlcikuZm9yRWFjaChmdW5jdGlvbiAoaXRlbSkge1xuICAgIGlmIChpdGVtKSB7XG4gICAgICB2YXIgdG1wID0gaXRlbS5zcGxpdChwcm9wZXJ0eURlbGltaXRlcik7XG4gICAgICB0bXAubGVuZ3RoID4gMSAmJiAocmVzW3RtcFswXS50cmltKCldID0gdG1wWzFdLnRyaW0oKSk7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIHJlc1xufSk7XG5cbi8vIG5vcm1hbGl6ZSBwb3NzaWJsZSBhcnJheSAvIHN0cmluZyB2YWx1ZXMgaW50byBPYmplY3RcbmZ1bmN0aW9uIG5vcm1hbGl6ZVN0eWxlQmluZGluZyAoYmluZGluZ1N0eWxlKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KGJpbmRpbmdTdHlsZSkpIHtcbiAgICByZXR1cm4gdG9PYmplY3QoYmluZGluZ1N0eWxlKVxuICB9XG4gIGlmICh0eXBlb2YgYmluZGluZ1N0eWxlID09PSAnc3RyaW5nJykge1xuICAgIHJldHVybiBwYXJzZVN0eWxlVGV4dChiaW5kaW5nU3R5bGUpXG4gIH1cbiAgcmV0dXJuIGJpbmRpbmdTdHlsZVxufVxuXG4vKiAgKi9cclxuXHJcbnZhciBNUF9NRVRIT0RTID0gWydjcmVhdGVTZWxlY3RvclF1ZXJ5JywgJ2NyZWF0ZUludGVyc2VjdGlvbk9ic2VydmVyJywgJ3NlbGVjdEFsbENvbXBvbmVudHMnLCAnc2VsZWN0Q29tcG9uZW50J107XHJcblxyXG5mdW5jdGlvbiBnZXRUYXJnZXQob2JqLCBwYXRoKSB7XHJcbiAgdmFyIHBhcnRzID0gcGF0aC5zcGxpdCgnLicpO1xyXG4gIHZhciBrZXkgPSBwYXJ0c1swXTtcclxuICBpZiAoa2V5LmluZGV4T2YoJ19fJG4nKSA9PT0gMCkgeyAvL251bWJlciBpbmRleFxyXG4gICAga2V5ID0gcGFyc2VJbnQoa2V5LnJlcGxhY2UoJ19fJG4nLCAnJykpO1xyXG4gIH1cclxuICBpZiAocGFydHMubGVuZ3RoID09PSAxKSB7XHJcbiAgICByZXR1cm4gb2JqW2tleV1cclxuICB9XHJcbiAgcmV0dXJuIGdldFRhcmdldChvYmpba2V5XSwgcGFydHMuc2xpY2UoMSkuam9pbignLicpKVxyXG59XHJcblxyXG5mdW5jdGlvbiBpbnRlcm5hbE1peGluKFZ1ZSkge1xyXG5cclxuICBWdWUuY29uZmlnLmVycm9ySGFuZGxlciA9IGZ1bmN0aW9uKGVycikge1xuICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICAvKiBlc2xpbnQtZGlzYWJsZSBuby11bmRlZiAqL1xyXG4gICAgdmFyIGFwcCA9IGdldEFwcCgpO1xyXG4gICAgaWYgKGFwcCAmJiBhcHAub25FcnJvcikge1xyXG4gICAgICBhcHAub25FcnJvcihlcnIpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHZhciBvbGRFbWl0ID0gVnVlLnByb3RvdHlwZS4kZW1pdDtcclxuXHJcbiAgVnVlLnByb3RvdHlwZS4kZW1pdCA9IGZ1bmN0aW9uKGV2ZW50KSB7XHJcbiAgICBpZiAodGhpcy4kc2NvcGUgJiYgZXZlbnQpIHtcclxuICAgICAgdGhpcy4kc2NvcGVbJ3RyaWdnZXJFdmVudCddKGV2ZW50LCB7XHJcbiAgICAgICAgX19hcmdzX186IHRvQXJyYXkoYXJndW1lbnRzLCAxKVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgIHJldHVybiBvbGRFbWl0LmFwcGx5KHRoaXMsIGFyZ3VtZW50cylcclxuICB9O1xyXG5cclxuICBWdWUucHJvdG90eXBlLiRuZXh0VGljayA9IGZ1bmN0aW9uKGZuKSB7XHJcbiAgICByZXR1cm4gbmV4dFRpY2skMSh0aGlzLCBmbilcclxuICB9O1xyXG5cclxuICBNUF9NRVRIT0RTLmZvckVhY2goZnVuY3Rpb24gKG1ldGhvZCkge1xyXG4gICAgVnVlLnByb3RvdHlwZVttZXRob2RdID0gZnVuY3Rpb24oYXJncykge1xyXG4gICAgICBpZiAodGhpcy4kc2NvcGUgJiYgdGhpcy4kc2NvcGVbbWV0aG9kXSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLiRzY29wZVttZXRob2RdKGFyZ3MpXHJcbiAgICAgIH1cclxuICAgICAgLy8gbXAtYWxpcGF5XHJcbiAgICAgIGlmICh0eXBlb2YgbXkgPT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgcmV0dXJuXHJcbiAgICAgIH1cclxuICAgICAgaWYgKG1ldGhvZCA9PT0gJ2NyZWF0ZVNlbGVjdG9yUXVlcnknKSB7XHJcbiAgICAgICAgLyogZXNsaW50LWRpc2FibGUgbm8tdW5kZWYgKi9cclxuICAgICAgICByZXR1cm4gbXkuY3JlYXRlU2VsZWN0b3JRdWVyeShhcmdzKVxyXG4gICAgICB9IGVsc2UgaWYgKG1ldGhvZCA9PT0gJ2NyZWF0ZUludGVyc2VjdGlvbk9ic2VydmVyJykge1xyXG4gICAgICAgIC8qIGVzbGludC1kaXNhYmxlIG5vLXVuZGVmICovXHJcbiAgICAgICAgcmV0dXJuIG15LmNyZWF0ZUludGVyc2VjdGlvbk9ic2VydmVyKGFyZ3MpXHJcbiAgICAgIH1cclxuICAgICAgLy8gVE9ETyBtcC1hbGlwYXkg5pqC5LiN5pSv5oyBIHNlbGVjdEFsbENvbXBvbmVudHMsc2VsZWN0Q29tcG9uZW50XHJcbiAgICB9O1xyXG4gIH0pO1xyXG5cclxuICBWdWUucHJvdG90eXBlLl9faW5pdF9wcm92aWRlID0gaW5pdFByb3ZpZGU7XHJcblxyXG4gIFZ1ZS5wcm90b3R5cGUuX19pbml0X2luamVjdGlvbnMgPSBpbml0SW5qZWN0aW9ucztcclxuXHJcbiAgVnVlLnByb3RvdHlwZS5fX2NhbGxfaG9vayA9IGZ1bmN0aW9uKGhvb2ssIGFyZ3MpIHtcclxuICAgIHZhciB2bSA9IHRoaXM7XHJcbiAgICAvLyAjNzU3MyBkaXNhYmxlIGRlcCBjb2xsZWN0aW9uIHdoZW4gaW52b2tpbmcgbGlmZWN5Y2xlIGhvb2tzXHJcbiAgICBwdXNoVGFyZ2V0KCk7XHJcbiAgICB2YXIgaGFuZGxlcnMgPSB2bS4kb3B0aW9uc1tob29rXTtcclxuICAgIHZhciBpbmZvID0gaG9vayArIFwiIGhvb2tcIjtcclxuICAgIHZhciByZXQ7XHJcbiAgICBpZiAoaGFuZGxlcnMpIHtcclxuICAgICAgZm9yICh2YXIgaSA9IDAsIGogPSBoYW5kbGVycy5sZW5ndGg7IGkgPCBqOyBpKyspIHtcclxuICAgICAgICByZXQgPSBpbnZva2VXaXRoRXJyb3JIYW5kbGluZyhoYW5kbGVyc1tpXSwgdm0sIGFyZ3MgPyBbYXJnc10gOiBudWxsLCB2bSwgaW5mbyk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGlmICh2bS5faGFzSG9va0V2ZW50KSB7XHJcbiAgICAgIHZtLiRlbWl0KCdob29rOicgKyBob29rLCBhcmdzKTtcclxuICAgIH1cclxuICAgIHBvcFRhcmdldCgpO1xyXG4gICAgcmV0dXJuIHJldFxyXG4gIH07XHJcblxyXG4gIFZ1ZS5wcm90b3R5cGUuX19zZXRfbW9kZWwgPSBmdW5jdGlvbih0YXJnZXQsIGtleSwgdmFsdWUsIG1vZGlmaWVycykge1xyXG4gICAgaWYgKEFycmF5LmlzQXJyYXkobW9kaWZpZXJzKSkge1xyXG4gICAgICBpZiAobW9kaWZpZXJzLmluZGV4T2YoJ3RyaW0nKSAhPT0gLTEpIHtcclxuICAgICAgICB2YWx1ZSA9IHZhbHVlLnRyaW0oKTtcclxuICAgICAgfVxyXG4gICAgICBpZiAobW9kaWZpZXJzLmluZGV4T2YoJ251bWJlcicpICE9PSAtMSkge1xyXG4gICAgICAgIHZhbHVlID0gdGhpcy5fbih2YWx1ZSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGlmICghdGFyZ2V0KSB7XHJcbiAgICAgIHRhcmdldCA9IHRoaXM7XHJcbiAgICB9XHJcbiAgICB0YXJnZXRba2V5XSA9IHZhbHVlO1xyXG4gIH07XHJcblxyXG4gIFZ1ZS5wcm90b3R5cGUuX19zZXRfc3luYyA9IGZ1bmN0aW9uKHRhcmdldCwga2V5LCB2YWx1ZSkge1xyXG4gICAgaWYgKCF0YXJnZXQpIHtcclxuICAgICAgdGFyZ2V0ID0gdGhpcztcclxuICAgIH1cclxuICAgIHRhcmdldFtrZXldID0gdmFsdWU7XHJcbiAgfTtcclxuXHJcbiAgVnVlLnByb3RvdHlwZS5fX2dldF9vcmlnID0gZnVuY3Rpb24oaXRlbSkge1xyXG4gICAgaWYgKGlzUGxhaW5PYmplY3QoaXRlbSkpIHtcclxuICAgICAgcmV0dXJuIGl0ZW1bJyRvcmlnJ10gfHwgaXRlbVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGl0ZW1cclxuICB9O1xyXG5cclxuICBWdWUucHJvdG90eXBlLl9fZ2V0X3ZhbHVlID0gZnVuY3Rpb24oZGF0YVBhdGgsIHRhcmdldCkge1xyXG4gICAgcmV0dXJuIGdldFRhcmdldCh0YXJnZXQgfHwgdGhpcywgZGF0YVBhdGgpXHJcbiAgfTtcclxuXHJcblxyXG4gIFZ1ZS5wcm90b3R5cGUuX19nZXRfY2xhc3MgPSBmdW5jdGlvbihkeW5hbWljQ2xhc3MsIHN0YXRpY0NsYXNzKSB7XHJcbiAgICByZXR1cm4gcmVuZGVyQ2xhc3Moc3RhdGljQ2xhc3MsIGR5bmFtaWNDbGFzcylcclxuICB9O1xyXG5cclxuICBWdWUucHJvdG90eXBlLl9fZ2V0X3N0eWxlID0gZnVuY3Rpb24oZHluYW1pY1N0eWxlLCBzdGF0aWNTdHlsZSkge1xyXG4gICAgaWYgKCFkeW5hbWljU3R5bGUgJiYgIXN0YXRpY1N0eWxlKSB7XHJcbiAgICAgIHJldHVybiAnJ1xyXG4gICAgfVxyXG4gICAgdmFyIGR5bmFtaWNTdHlsZU9iaiA9IG5vcm1hbGl6ZVN0eWxlQmluZGluZyhkeW5hbWljU3R5bGUpO1xyXG4gICAgdmFyIHN0eWxlT2JqID0gc3RhdGljU3R5bGUgPyBleHRlbmQoc3RhdGljU3R5bGUsIGR5bmFtaWNTdHlsZU9iaikgOiBkeW5hbWljU3R5bGVPYmo7XHJcbiAgICByZXR1cm4gT2JqZWN0LmtleXMoc3R5bGVPYmopLm1hcChmdW5jdGlvbiAobmFtZSkgeyByZXR1cm4gKChoeXBoZW5hdGUobmFtZSkpICsgXCI6XCIgKyAoc3R5bGVPYmpbbmFtZV0pKTsgfSkuam9pbignOycpXHJcbiAgfTtcclxuXHJcbiAgVnVlLnByb3RvdHlwZS5fX21hcCA9IGZ1bmN0aW9uKHZhbCwgaXRlcmF0ZWUpIHtcclxuICAgIC8vVE9ETyDmmoLkuI3ogIPomZEgc3RyaW5nLG51bWJlclxyXG4gICAgdmFyIHJldCwgaSwgbCwga2V5cywga2V5O1xyXG4gICAgaWYgKEFycmF5LmlzQXJyYXkodmFsKSkge1xyXG4gICAgICByZXQgPSBuZXcgQXJyYXkodmFsLmxlbmd0aCk7XHJcbiAgICAgIGZvciAoaSA9IDAsIGwgPSB2YWwubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XHJcbiAgICAgICAgcmV0W2ldID0gaXRlcmF0ZWUodmFsW2ldLCBpKTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gcmV0XHJcbiAgICB9IGVsc2UgaWYgKGlzT2JqZWN0KHZhbCkpIHtcclxuICAgICAga2V5cyA9IE9iamVjdC5rZXlzKHZhbCk7XHJcbiAgICAgIHJldCA9IE9iamVjdC5jcmVhdGUobnVsbCk7XHJcbiAgICAgIGZvciAoaSA9IDAsIGwgPSBrZXlzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xyXG4gICAgICAgIGtleSA9IGtleXNbaV07XHJcbiAgICAgICAgcmV0W2tleV0gPSBpdGVyYXRlZSh2YWxba2V5XSwga2V5LCBpKTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gcmV0XHJcbiAgICB9XHJcbiAgICByZXR1cm4gW11cclxuICB9O1xyXG5cclxufVxuXG4vKiAgKi9cclxuXHJcbnZhciBMSUZFQ1lDTEVfSE9PS1MkMSA9IFtcclxuICAgIC8vQXBwXHJcbiAgICAnb25MYXVuY2gnLFxyXG4gICAgJ29uU2hvdycsXHJcbiAgICAnb25IaWRlJyxcclxuICAgICdvblVuaU5WaWV3TWVzc2FnZScsXG4gICAgJ29uRXJyb3InLFxyXG4gICAgLy9QYWdlXHJcbiAgICAnb25Mb2FkJyxcclxuICAgIC8vICdvblNob3cnLFxyXG4gICAgJ29uUmVhZHknLFxyXG4gICAgLy8gJ29uSGlkZScsXHJcbiAgICAnb25VbmxvYWQnLFxyXG4gICAgJ29uUHVsbERvd25SZWZyZXNoJyxcclxuICAgICdvblJlYWNoQm90dG9tJyxcclxuICAgICdvblRhYkl0ZW1UYXAnLFxyXG4gICAgJ29uU2hhcmVBcHBNZXNzYWdlJyxcbiAgICAnb25SZXNpemUnLFxyXG4gICAgJ29uUGFnZVNjcm9sbCcsXHJcbiAgICAnb25OYXZpZ2F0aW9uQmFyQnV0dG9uVGFwJyxcclxuICAgICdvbkJhY2tQcmVzcycsXHJcbiAgICAnb25OYXZpZ2F0aW9uQmFyU2VhcmNoSW5wdXRDaGFuZ2VkJyxcclxuICAgICdvbk5hdmlnYXRpb25CYXJTZWFyY2hJbnB1dENvbmZpcm1lZCcsXHJcbiAgICAnb25OYXZpZ2F0aW9uQmFyU2VhcmNoSW5wdXRDbGlja2VkJyxcclxuICAgIC8vQ29tcG9uZW50XHJcbiAgICAvLyAnb25SZWFkeScsIC8vIOWFvOWuueaXp+eJiOacrO+8jOW6lOivpeenu+mZpOivpeS6i+S7tlxyXG4gICAgJ29uUGFnZVNob3cnLFxyXG4gICAgJ29uUGFnZUhpZGUnLFxyXG4gICAgJ29uUGFnZVJlc2l6ZSdcclxuXTtcclxuZnVuY3Rpb24gbGlmZWN5Y2xlTWl4aW4kMShWdWUpIHtcclxuXHJcbiAgICAvL2ZpeGVkIHZ1ZS1jbGFzcy1jb21wb25lbnRcclxuICAgIHZhciBvbGRFeHRlbmQgPSBWdWUuZXh0ZW5kO1xyXG4gICAgVnVlLmV4dGVuZCA9IGZ1bmN0aW9uKGV4dGVuZE9wdGlvbnMpIHtcclxuICAgICAgICBleHRlbmRPcHRpb25zID0gZXh0ZW5kT3B0aW9ucyB8fCB7fTtcclxuXHJcbiAgICAgICAgdmFyIG1ldGhvZHMgPSBleHRlbmRPcHRpb25zLm1ldGhvZHM7XHJcbiAgICAgICAgaWYgKG1ldGhvZHMpIHtcclxuICAgICAgICAgICAgT2JqZWN0LmtleXMobWV0aG9kcykuZm9yRWFjaChmdW5jdGlvbiAobWV0aG9kTmFtZSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKExJRkVDWUNMRV9IT09LUyQxLmluZGV4T2YobWV0aG9kTmFtZSkhPT0tMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGV4dGVuZE9wdGlvbnNbbWV0aG9kTmFtZV0gPSBtZXRob2RzW21ldGhvZE5hbWVdO1xyXG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBtZXRob2RzW21ldGhvZE5hbWVdO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBvbGRFeHRlbmQuY2FsbCh0aGlzLCBleHRlbmRPcHRpb25zKVxyXG4gICAgfTtcclxuXHJcbiAgICB2YXIgc3RyYXRlZ2llcyA9IFZ1ZS5jb25maWcub3B0aW9uTWVyZ2VTdHJhdGVnaWVzO1xyXG4gICAgdmFyIG1lcmdlSG9vayA9IHN0cmF0ZWdpZXMuY3JlYXRlZDtcclxuICAgIExJRkVDWUNMRV9IT09LUyQxLmZvckVhY2goZnVuY3Rpb24gKGhvb2spIHtcclxuICAgICAgICBzdHJhdGVnaWVzW2hvb2tdID0gbWVyZ2VIb29rO1xyXG4gICAgfSk7XHJcblxyXG4gICAgVnVlLnByb3RvdHlwZS5fX2xpZmVjeWNsZV9ob29rc19fID0gTElGRUNZQ0xFX0hPT0tTJDE7XHJcbn1cblxuLyogICovXHJcblxuLy8gaW5zdGFsbCBwbGF0Zm9ybSBwYXRjaCBmdW5jdGlvblxyXG5WdWUucHJvdG90eXBlLl9fcGF0Y2hfXyA9IHBhdGNoO1xyXG5cclxuLy8gcHVibGljIG1vdW50IG1ldGhvZFxyXG5WdWUucHJvdG90eXBlLiRtb3VudCA9IGZ1bmN0aW9uKFxyXG4gICAgZWwgLFxyXG4gICAgaHlkcmF0aW5nIFxyXG4pIHtcclxuICAgIHJldHVybiBtb3VudENvbXBvbmVudCQxKHRoaXMsIGVsLCBoeWRyYXRpbmcpXHJcbn07XHJcblxyXG5saWZlY3ljbGVNaXhpbiQxKFZ1ZSk7XHJcbmludGVybmFsTWl4aW4oVnVlKTtcblxuLyogICovXG5cbmV4cG9ydCBkZWZhdWx0IFZ1ZTtcbiIsInZhciBlPVwidW5kZWZpbmVkXCIhPXR5cGVvZiBnbG9iYWxUaGlzP2dsb2JhbFRoaXM6XCJ1bmRlZmluZWRcIiE9dHlwZW9mIHdpbmRvdz93aW5kb3c6XCJ1bmRlZmluZWRcIiE9dHlwZW9mIGdsb2JhbD9nbG9iYWw6XCJ1bmRlZmluZWRcIiE9dHlwZW9mIHNlbGY/c2VsZjp7fTtmdW5jdGlvbiB0KGUpe3JldHVybiBlJiZlLl9fZXNNb2R1bGUmJk9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChlLFwiZGVmYXVsdFwiKT9lLmRlZmF1bHQ6ZX1mdW5jdGlvbiBuKGUsdCl7cmV0dXJuIGUodD17ZXhwb3J0czp7fX0sdC5leHBvcnRzKSx0LmV4cG9ydHN9dmFyIHI9bigoZnVuY3Rpb24oZSx0KXt2YXIgbjtlLmV4cG9ydHM9KG49bnx8ZnVuY3Rpb24oZSx0KXt2YXIgbj1PYmplY3QuY3JlYXRlfHxmdW5jdGlvbigpe2Z1bmN0aW9uIGUoKXt9cmV0dXJuIGZ1bmN0aW9uKHQpe3ZhciBuO3JldHVybiBlLnByb3RvdHlwZT10LG49bmV3IGUsZS5wcm90b3R5cGU9bnVsbCxufX0oKSxyPXt9LG89ci5saWI9e30scz1vLkJhc2U9e2V4dGVuZDpmdW5jdGlvbihlKXt2YXIgdD1uKHRoaXMpO3JldHVybiBlJiZ0Lm1peEluKGUpLHQuaGFzT3duUHJvcGVydHkoXCJpbml0XCIpJiZ0aGlzLmluaXQhPT10LmluaXR8fCh0LmluaXQ9ZnVuY3Rpb24oKXt0LiRzdXBlci5pbml0LmFwcGx5KHRoaXMsYXJndW1lbnRzKX0pLHQuaW5pdC5wcm90b3R5cGU9dCx0LiRzdXBlcj10aGlzLHR9LGNyZWF0ZTpmdW5jdGlvbigpe3ZhciBlPXRoaXMuZXh0ZW5kKCk7cmV0dXJuIGUuaW5pdC5hcHBseShlLGFyZ3VtZW50cyksZX0saW5pdDpmdW5jdGlvbigpe30sbWl4SW46ZnVuY3Rpb24oZSl7Zm9yKHZhciB0IGluIGUpZS5oYXNPd25Qcm9wZXJ0eSh0KSYmKHRoaXNbdF09ZVt0XSk7ZS5oYXNPd25Qcm9wZXJ0eShcInRvU3RyaW5nXCIpJiYodGhpcy50b1N0cmluZz1lLnRvU3RyaW5nKX0sY2xvbmU6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5pbml0LnByb3RvdHlwZS5leHRlbmQodGhpcyl9fSxpPW8uV29yZEFycmF5PXMuZXh0ZW5kKHtpbml0OmZ1bmN0aW9uKGUsdCl7ZT10aGlzLndvcmRzPWV8fFtdLHRoaXMuc2lnQnl0ZXM9bnVsbCE9dD90OjQqZS5sZW5ndGh9LHRvU3RyaW5nOmZ1bmN0aW9uKGUpe3JldHVybihlfHxjKS5zdHJpbmdpZnkodGhpcyl9LGNvbmNhdDpmdW5jdGlvbihlKXt2YXIgdD10aGlzLndvcmRzLG49ZS53b3JkcyxyPXRoaXMuc2lnQnl0ZXMsbz1lLnNpZ0J5dGVzO2lmKHRoaXMuY2xhbXAoKSxyJTQpZm9yKHZhciBzPTA7czxvO3MrKyl7dmFyIGk9bltzPj4+Ml0+Pj4yNC1zJTQqOCYyNTU7dFtyK3M+Pj4yXXw9aTw8MjQtKHIrcyklNCo4fWVsc2UgZm9yKHM9MDtzPG87cys9NCl0W3Ircz4+PjJdPW5bcz4+PjJdO3JldHVybiB0aGlzLnNpZ0J5dGVzKz1vLHRoaXN9LGNsYW1wOmZ1bmN0aW9uKCl7dmFyIHQ9dGhpcy53b3JkcyxuPXRoaXMuc2lnQnl0ZXM7dFtuPj4+Ml0mPTQyOTQ5NjcyOTU8PDMyLW4lNCo4LHQubGVuZ3RoPWUuY2VpbChuLzQpfSxjbG9uZTpmdW5jdGlvbigpe3ZhciBlPXMuY2xvbmUuY2FsbCh0aGlzKTtyZXR1cm4gZS53b3Jkcz10aGlzLndvcmRzLnNsaWNlKDApLGV9LHJhbmRvbTpmdW5jdGlvbih0KXtmb3IodmFyIG4scj1bXSxvPWZ1bmN0aW9uKHQpe3Q9dDt2YXIgbj05ODc2NTQzMjEscj00Mjk0OTY3Mjk1O3JldHVybiBmdW5jdGlvbigpe3ZhciBvPSgobj0zNjk2OSooNjU1MzUmbikrKG4+PjE2KSZyKTw8MTYpKyh0PTE4ZTMqKDY1NTM1JnQpKyh0Pj4xNikmcikmcjtyZXR1cm4gby89NDI5NDk2NzI5Niwobys9LjUpKihlLnJhbmRvbSgpPi41PzE6LTEpfX0scz0wO3M8dDtzKz00KXt2YXIgYT1vKDQyOTQ5NjcyOTYqKG58fGUucmFuZG9tKCkpKTtuPTk4NzY1NDA3MSphKCksci5wdXNoKDQyOTQ5NjcyOTYqYSgpfDApfXJldHVybiBuZXcgaS5pbml0KHIsdCl9fSksYT1yLmVuYz17fSxjPWEuSGV4PXtzdHJpbmdpZnk6ZnVuY3Rpb24oZSl7Zm9yKHZhciB0PWUud29yZHMsbj1lLnNpZ0J5dGVzLHI9W10sbz0wO288bjtvKyspe3ZhciBzPXRbbz4+PjJdPj4+MjQtbyU0KjgmMjU1O3IucHVzaCgocz4+PjQpLnRvU3RyaW5nKDE2KSksci5wdXNoKCgxNSZzKS50b1N0cmluZygxNikpfXJldHVybiByLmpvaW4oXCJcIil9LHBhcnNlOmZ1bmN0aW9uKGUpe2Zvcih2YXIgdD1lLmxlbmd0aCxuPVtdLHI9MDtyPHQ7cis9MiluW3I+Pj4zXXw9cGFyc2VJbnQoZS5zdWJzdHIociwyKSwxNik8PDI0LXIlOCo0O3JldHVybiBuZXcgaS5pbml0KG4sdC8yKX19LHU9YS5MYXRpbjE9e3N0cmluZ2lmeTpmdW5jdGlvbihlKXtmb3IodmFyIHQ9ZS53b3JkcyxuPWUuc2lnQnl0ZXMscj1bXSxvPTA7bzxuO28rKyl7dmFyIHM9dFtvPj4+Ml0+Pj4yNC1vJTQqOCYyNTU7ci5wdXNoKFN0cmluZy5mcm9tQ2hhckNvZGUocykpfXJldHVybiByLmpvaW4oXCJcIil9LHBhcnNlOmZ1bmN0aW9uKGUpe2Zvcih2YXIgdD1lLmxlbmd0aCxuPVtdLHI9MDtyPHQ7cisrKW5bcj4+PjJdfD0oMjU1JmUuY2hhckNvZGVBdChyKSk8PDI0LXIlNCo4O3JldHVybiBuZXcgaS5pbml0KG4sdCl9fSxsPWEuVXRmOD17c3RyaW5naWZ5OmZ1bmN0aW9uKGUpe3RyeXtyZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KGVzY2FwZSh1LnN0cmluZ2lmeShlKSkpfWNhdGNoKGUpe3Rocm93IG5ldyBFcnJvcihcIk1hbGZvcm1lZCBVVEYtOCBkYXRhXCIpfX0scGFyc2U6ZnVuY3Rpb24oZSl7cmV0dXJuIHUucGFyc2UodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KGUpKSl9fSxmPW8uQnVmZmVyZWRCbG9ja0FsZ29yaXRobT1zLmV4dGVuZCh7cmVzZXQ6ZnVuY3Rpb24oKXt0aGlzLl9kYXRhPW5ldyBpLmluaXQsdGhpcy5fbkRhdGFCeXRlcz0wfSxfYXBwZW5kOmZ1bmN0aW9uKGUpe1wic3RyaW5nXCI9PXR5cGVvZiBlJiYoZT1sLnBhcnNlKGUpKSx0aGlzLl9kYXRhLmNvbmNhdChlKSx0aGlzLl9uRGF0YUJ5dGVzKz1lLnNpZ0J5dGVzfSxfcHJvY2VzczpmdW5jdGlvbih0KXt2YXIgbj10aGlzLl9kYXRhLHI9bi53b3JkcyxvPW4uc2lnQnl0ZXMscz10aGlzLmJsb2NrU2l6ZSxhPW8vKDQqcyksYz0oYT10P2UuY2VpbChhKTplLm1heCgoMHxhKS10aGlzLl9taW5CdWZmZXJTaXplLDApKSpzLHU9ZS5taW4oNCpjLG8pO2lmKGMpe2Zvcih2YXIgbD0wO2w8YztsKz1zKXRoaXMuX2RvUHJvY2Vzc0Jsb2NrKHIsbCk7dmFyIGY9ci5zcGxpY2UoMCxjKTtuLnNpZ0J5dGVzLT11fXJldHVybiBuZXcgaS5pbml0KGYsdSl9LGNsb25lOmZ1bmN0aW9uKCl7dmFyIGU9cy5jbG9uZS5jYWxsKHRoaXMpO3JldHVybiBlLl9kYXRhPXRoaXMuX2RhdGEuY2xvbmUoKSxlfSxfbWluQnVmZmVyU2l6ZTowfSkscD0oby5IYXNoZXI9Zi5leHRlbmQoe2NmZzpzLmV4dGVuZCgpLGluaXQ6ZnVuY3Rpb24oZSl7dGhpcy5jZmc9dGhpcy5jZmcuZXh0ZW5kKGUpLHRoaXMucmVzZXQoKX0scmVzZXQ6ZnVuY3Rpb24oKXtmLnJlc2V0LmNhbGwodGhpcyksdGhpcy5fZG9SZXNldCgpfSx1cGRhdGU6ZnVuY3Rpb24oZSl7cmV0dXJuIHRoaXMuX2FwcGVuZChlKSx0aGlzLl9wcm9jZXNzKCksdGhpc30sZmluYWxpemU6ZnVuY3Rpb24oZSl7cmV0dXJuIGUmJnRoaXMuX2FwcGVuZChlKSx0aGlzLl9kb0ZpbmFsaXplKCl9LGJsb2NrU2l6ZToxNixfY3JlYXRlSGVscGVyOmZ1bmN0aW9uKGUpe3JldHVybiBmdW5jdGlvbih0LG4pe3JldHVybiBuZXcgZS5pbml0KG4pLmZpbmFsaXplKHQpfX0sX2NyZWF0ZUhtYWNIZWxwZXI6ZnVuY3Rpb24oZSl7cmV0dXJuIGZ1bmN0aW9uKHQsbil7cmV0dXJuIG5ldyBwLkhNQUMuaW5pdChlLG4pLmZpbmFsaXplKHQpfX19KSxyLmFsZ289e30pO3JldHVybiByfShNYXRoKSxuKX0pKSxvPShuKChmdW5jdGlvbihlLHQpe3ZhciBuO2UuZXhwb3J0cz0obj1yLGZ1bmN0aW9uKGUpe3ZhciB0PW4scj10LmxpYixvPXIuV29yZEFycmF5LHM9ci5IYXNoZXIsaT10LmFsZ28sYT1bXTshZnVuY3Rpb24oKXtmb3IodmFyIHQ9MDt0PDY0O3QrKylhW3RdPTQyOTQ5NjcyOTYqZS5hYnMoZS5zaW4odCsxKSl8MH0oKTt2YXIgYz1pLk1ENT1zLmV4dGVuZCh7X2RvUmVzZXQ6ZnVuY3Rpb24oKXt0aGlzLl9oYXNoPW5ldyBvLmluaXQoWzE3MzI1ODQxOTMsNDAyMzIzMzQxNywyNTYyMzgzMTAyLDI3MTczMzg3OF0pfSxfZG9Qcm9jZXNzQmxvY2s6ZnVuY3Rpb24oZSx0KXtmb3IodmFyIG49MDtuPDE2O24rKyl7dmFyIHI9dCtuLG89ZVtyXTtlW3JdPTE2NzExOTM1JihvPDw4fG8+Pj4yNCl8NDI3ODI1NTM2MCYobzw8MjR8bz4+PjgpfXZhciBzPXRoaXMuX2hhc2gud29yZHMsaT1lW3QrMF0sYz1lW3QrMV0saD1lW3QrMl0sZD1lW3QrM10seT1lW3QrNF0sdj1lW3QrNV0sZz1lW3QrNl0sXz1lW3QrN10sbT1lW3QrOF0sYj1lW3QrOV0sdz1lW3QrMTBdLEU9ZVt0KzExXSxUPWVbdCsxMl0sTz1lW3QrMTNdLFM9ZVt0KzE0XSxrPWVbdCsxNV0sQT1zWzBdLFA9c1sxXSxJPXNbMl0sTj1zWzNdO0E9dShBLFAsSSxOLGksNyxhWzBdKSxOPXUoTixBLFAsSSxjLDEyLGFbMV0pLEk9dShJLE4sQSxQLGgsMTcsYVsyXSksUD11KFAsSSxOLEEsZCwyMixhWzNdKSxBPXUoQSxQLEksTix5LDcsYVs0XSksTj11KE4sQSxQLEksdiwxMixhWzVdKSxJPXUoSSxOLEEsUCxnLDE3LGFbNl0pLFA9dShQLEksTixBLF8sMjIsYVs3XSksQT11KEEsUCxJLE4sbSw3LGFbOF0pLE49dShOLEEsUCxJLGIsMTIsYVs5XSksST11KEksTixBLFAsdywxNyxhWzEwXSksUD11KFAsSSxOLEEsRSwyMixhWzExXSksQT11KEEsUCxJLE4sVCw3LGFbMTJdKSxOPXUoTixBLFAsSSxPLDEyLGFbMTNdKSxJPXUoSSxOLEEsUCxTLDE3LGFbMTRdKSxBPWwoQSxQPXUoUCxJLE4sQSxrLDIyLGFbMTVdKSxJLE4sYyw1LGFbMTZdKSxOPWwoTixBLFAsSSxnLDksYVsxN10pLEk9bChJLE4sQSxQLEUsMTQsYVsxOF0pLFA9bChQLEksTixBLGksMjAsYVsxOV0pLEE9bChBLFAsSSxOLHYsNSxhWzIwXSksTj1sKE4sQSxQLEksdyw5LGFbMjFdKSxJPWwoSSxOLEEsUCxrLDE0LGFbMjJdKSxQPWwoUCxJLE4sQSx5LDIwLGFbMjNdKSxBPWwoQSxQLEksTixiLDUsYVsyNF0pLE49bChOLEEsUCxJLFMsOSxhWzI1XSksST1sKEksTixBLFAsZCwxNCxhWzI2XSksUD1sKFAsSSxOLEEsbSwyMCxhWzI3XSksQT1sKEEsUCxJLE4sTyw1LGFbMjhdKSxOPWwoTixBLFAsSSxoLDksYVsyOV0pLEk9bChJLE4sQSxQLF8sMTQsYVszMF0pLEE9ZihBLFA9bChQLEksTixBLFQsMjAsYVszMV0pLEksTix2LDQsYVszMl0pLE49ZihOLEEsUCxJLG0sMTEsYVszM10pLEk9ZihJLE4sQSxQLEUsMTYsYVszNF0pLFA9ZihQLEksTixBLFMsMjMsYVszNV0pLEE9ZihBLFAsSSxOLGMsNCxhWzM2XSksTj1mKE4sQSxQLEkseSwxMSxhWzM3XSksST1mKEksTixBLFAsXywxNixhWzM4XSksUD1mKFAsSSxOLEEsdywyMyxhWzM5XSksQT1mKEEsUCxJLE4sTyw0LGFbNDBdKSxOPWYoTixBLFAsSSxpLDExLGFbNDFdKSxJPWYoSSxOLEEsUCxkLDE2LGFbNDJdKSxQPWYoUCxJLE4sQSxnLDIzLGFbNDNdKSxBPWYoQSxQLEksTixiLDQsYVs0NF0pLE49ZihOLEEsUCxJLFQsMTEsYVs0NV0pLEk9ZihJLE4sQSxQLGssMTYsYVs0Nl0pLEE9cChBLFA9ZihQLEksTixBLGgsMjMsYVs0N10pLEksTixpLDYsYVs0OF0pLE49cChOLEEsUCxJLF8sMTAsYVs0OV0pLEk9cChJLE4sQSxQLFMsMTUsYVs1MF0pLFA9cChQLEksTixBLHYsMjEsYVs1MV0pLEE9cChBLFAsSSxOLFQsNixhWzUyXSksTj1wKE4sQSxQLEksZCwxMCxhWzUzXSksST1wKEksTixBLFAsdywxNSxhWzU0XSksUD1wKFAsSSxOLEEsYywyMSxhWzU1XSksQT1wKEEsUCxJLE4sbSw2LGFbNTZdKSxOPXAoTixBLFAsSSxrLDEwLGFbNTddKSxJPXAoSSxOLEEsUCxnLDE1LGFbNThdKSxQPXAoUCxJLE4sQSxPLDIxLGFbNTldKSxBPXAoQSxQLEksTix5LDYsYVs2MF0pLE49cChOLEEsUCxJLEUsMTAsYVs2MV0pLEk9cChJLE4sQSxQLGgsMTUsYVs2Ml0pLFA9cChQLEksTixBLGIsMjEsYVs2M10pLHNbMF09c1swXStBfDAsc1sxXT1zWzFdK1B8MCxzWzJdPXNbMl0rSXwwLHNbM109c1szXStOfDB9LF9kb0ZpbmFsaXplOmZ1bmN0aW9uKCl7dmFyIHQ9dGhpcy5fZGF0YSxuPXQud29yZHMscj04KnRoaXMuX25EYXRhQnl0ZXMsbz04KnQuc2lnQnl0ZXM7bltvPj4+NV18PTEyODw8MjQtbyUzMjt2YXIgcz1lLmZsb29yKHIvNDI5NDk2NzI5NiksaT1yO25bMTUrKG8rNjQ+Pj45PDw0KV09MTY3MTE5MzUmKHM8PDh8cz4+PjI0KXw0Mjc4MjU1MzYwJihzPDwyNHxzPj4+OCksblsxNCsobys2ND4+Pjk8PDQpXT0xNjcxMTkzNSYoaTw8OHxpPj4+MjQpfDQyNzgyNTUzNjAmKGk8PDI0fGk+Pj44KSx0LnNpZ0J5dGVzPTQqKG4ubGVuZ3RoKzEpLHRoaXMuX3Byb2Nlc3MoKTtmb3IodmFyIGE9dGhpcy5faGFzaCxjPWEud29yZHMsdT0wO3U8NDt1Kyspe3ZhciBsPWNbdV07Y1t1XT0xNjcxMTkzNSYobDw8OHxsPj4+MjQpfDQyNzgyNTUzNjAmKGw8PDI0fGw+Pj44KX1yZXR1cm4gYX0sY2xvbmU6ZnVuY3Rpb24oKXt2YXIgZT1zLmNsb25lLmNhbGwodGhpcyk7cmV0dXJuIGUuX2hhc2g9dGhpcy5faGFzaC5jbG9uZSgpLGV9fSk7ZnVuY3Rpb24gdShlLHQsbixyLG8scyxpKXt2YXIgYT1lKyh0Jm58fnQmcikrbytpO3JldHVybihhPDxzfGE+Pj4zMi1zKSt0fWZ1bmN0aW9uIGwoZSx0LG4scixvLHMsaSl7dmFyIGE9ZSsodCZyfG4mfnIpK28raTtyZXR1cm4oYTw8c3xhPj4+MzItcykrdH1mdW5jdGlvbiBmKGUsdCxuLHIsbyxzLGkpe3ZhciBhPWUrKHRebl5yKStvK2k7cmV0dXJuKGE8PHN8YT4+PjMyLXMpK3R9ZnVuY3Rpb24gcChlLHQsbixyLG8scyxpKXt2YXIgYT1lKyhuXih0fH5yKSkrbytpO3JldHVybihhPDxzfGE+Pj4zMi1zKSt0fXQuTUQ1PXMuX2NyZWF0ZUhlbHBlcihjKSx0LkhtYWNNRDU9cy5fY3JlYXRlSG1hY0hlbHBlcihjKX0oTWF0aCksbi5NRDUpfSkpLG4oKGZ1bmN0aW9uKGUsdCl7dmFyIG4sbyxzO2UuZXhwb3J0cz0obz0obj1yKS5saWIuQmFzZSxzPW4uZW5jLlV0Zjgsdm9pZChuLmFsZ28uSE1BQz1vLmV4dGVuZCh7aW5pdDpmdW5jdGlvbihlLHQpe2U9dGhpcy5faGFzaGVyPW5ldyBlLmluaXQsXCJzdHJpbmdcIj09dHlwZW9mIHQmJih0PXMucGFyc2UodCkpO3ZhciBuPWUuYmxvY2tTaXplLHI9NCpuO3Quc2lnQnl0ZXM+ciYmKHQ9ZS5maW5hbGl6ZSh0KSksdC5jbGFtcCgpO2Zvcih2YXIgbz10aGlzLl9vS2V5PXQuY2xvbmUoKSxpPXRoaXMuX2lLZXk9dC5jbG9uZSgpLGE9by53b3JkcyxjPWkud29yZHMsdT0wO3U8bjt1KyspYVt1XV49MTU0OTU1NjgyOCxjW3VdXj05MDk1MjI0ODY7by5zaWdCeXRlcz1pLnNpZ0J5dGVzPXIsdGhpcy5yZXNldCgpfSxyZXNldDpmdW5jdGlvbigpe3ZhciBlPXRoaXMuX2hhc2hlcjtlLnJlc2V0KCksZS51cGRhdGUodGhpcy5faUtleSl9LHVwZGF0ZTpmdW5jdGlvbihlKXtyZXR1cm4gdGhpcy5faGFzaGVyLnVwZGF0ZShlKSx0aGlzfSxmaW5hbGl6ZTpmdW5jdGlvbihlKXt2YXIgdD10aGlzLl9oYXNoZXIsbj10LmZpbmFsaXplKGUpO3JldHVybiB0LnJlc2V0KCksdC5maW5hbGl6ZSh0aGlzLl9vS2V5LmNsb25lKCkuY29uY2F0KG4pKX19KSkpfSkpLG4oKGZ1bmN0aW9uKGUsdCl7ZS5leHBvcnRzPXIuSG1hY01ENX0pKSk7Y2xhc3MgcyBleHRlbmRzIEVycm9ye2NvbnN0cnVjdG9yKGUpe3N1cGVyKGUubWVzc2FnZSksdGhpcy5lcnJNc2c9ZS5tZXNzYWdlfHxcIlwiLE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRoaXMse2NvZGU6e2dldDooKT0+ZS5jb2RlfSxyZXF1ZXN0SWQ6e2dldDooKT0+ZS5yZXF1ZXN0SWR9LG1lc3NhZ2U6e2dldCgpe3JldHVybiB0aGlzLmVyck1zZ30sc2V0KGUpe3RoaXMuZXJyTXNnPWV9fX0pfX12YXIgaT17c2lnbjpmdW5jdGlvbihlLHQpe2xldCBuPVwiXCI7cmV0dXJuIE9iamVjdC5rZXlzKGUpLnNvcnQoKS5mb3JFYWNoKChmdW5jdGlvbih0KXtlW3RdJiYobj1uK1wiJlwiK3QrXCI9XCIrZVt0XSl9KSksbj1uLnNsaWNlKDEpLG8obix0KS50b1N0cmluZygpfSx3cmFwcGVkUmVxdWVzdDpmdW5jdGlvbihlKXtyZXR1cm4gbmV3IFByb21pc2UoKHQsbik9Pnt1bmkucmVxdWVzdChPYmplY3QuYXNzaWduKGUse2NvbXBsZXRlKGUpe2V8fChlPXt9KSwwPT09ZS5lcnJNc2cuaW5kZXhPZihcInJlcXVlc3Q6ZmFpbFwiKSYmXCJoNVwiPT09cHJvY2Vzcy5lbnYuVlVFX0FQUF9QTEFURk9STSYmXCJkZXZlbG9wbWVudFwiPT09cHJvY2Vzcy5lbnYuTk9ERV9FTlYmJmNvbnNvbGUud2FybihcIuWPkeW4g0g177yM6ZyA6KaB5ZyodW5pQ2xvdWTlkI7lj7Dmk43kvZzvvIznu5Hlrprlronlhajln5/lkI3vvIzlkKbliJnkvJrlm6DkuLrot6jln5/pl67popjogIzml6Dms5Xorr/pl67jgILmlZnnqIvlj4LogIPvvJpodHRwczovL3VuaWFwcC5kY2xvdWQuaW8vdW5pQ2xvdWQvcXVpY2tzdGFydD9pZD1INSVFNCVCOCVBRCVFNCVCRCVCRiVFNyU5NCVBOHVuaWNsb3VkXCIpO2NvbnN0IHI9ZS5kYXRhJiZlLmRhdGEuaGVhZGVyJiZlLmRhdGEuaGVhZGVyW1wieC1zZXJ2ZXJsZXNzLXJlcXVlc3QtaWRcIl18fGUuaGVhZGVyJiZlLmhlYWRlcltcInJlcXVlc3QtaWRcIl07aWYoIWUuc3RhdHVzQ29kZXx8ZS5zdGF0dXNDb2RlPj00MDApcmV0dXJuIG4obmV3IHMoe2NvZGU6XCJTWVNfRVJSXCIsbWVzc2FnZTplLmVyck1zZ3x8XCJyZXF1ZXN0OmZhaWxcIixyZXF1ZXN0SWQ6cn0pKTtjb25zdCBvPWUuZGF0YTtpZihvLmVycm9yKXJldHVybiBuKG5ldyBzKHtjb2RlOm8uZXJyb3IuY29kZSxtZXNzYWdlOm8uZXJyb3IubWVzc2FnZSxyZXF1ZXN0SWQ6cn0pKTtvLnJlc3VsdD1vLmRhdGEsby5yZXF1ZXN0SWQ9cixkZWxldGUgby5kYXRhLHQobyl9fSkpfSl9fTtjb25zdCBhPXtpbWFnZTpcImltYWdlLypcIixqcGc6XCJpbWFnZS9qcGVnXCIsanBlZzpcImltYWdlL2pwZWdcIixwbmc6XCJpbWFnZS9wbmdcIixnaWY6XCJpbWFnZS9naWZcIix3ZWJwOlwiaW1hZ2Uvd2VicFwiLHN2ZzpcImltYWdlL3N2Zyt4bWxcIixtcDM6XCJhdWRpby9tcDNcIixtcDQ6XCJ2aWRlby9tcDRcIixvZ2c6XCJhdWRpby9vZ2dcIix3ZWJtOlwidmlkZW8vd2VibVwifTtmdW5jdGlvbiBjKGUpe3JldHVybiBhW2UudG9Mb3dlckNhc2UoKV19Y2xhc3MgdXtjb25zdHJ1Y3RvcihlKXtbXCJzcGFjZUlkXCIsXCJjbGllbnRTZWNyZXRcIl0uZm9yRWFjaCh0PT57aWYoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChlLHQpKXRocm93IG5ldyBFcnJvcihg57y65bCR5Y+C5pWwJHt0fWApfSksdGhpcy5jb25maWc9T2JqZWN0LmFzc2lnbih7fSx7ZW5kcG9pbnQ6XCJodHRwczovL2FwaS5ic3BhcHAuY29tXCJ9LGUpLHRoaXMuY29uZmlnLnByb3ZpZGVyPVwiYWxpeXVuXCIsdGhpcy5jb25maWcucmVxdWVzdFVybD10aGlzLmNvbmZpZy5lbmRwb2ludCtcIi9jbGllbnRcIix0aGlzLmNvbmZpZy5lbnZUeXBlPXRoaXMuY29uZmlnLmVudlR5cGV8fFwicHVibGljXCIsdGhpcy5jb25maWcuYWNjZXNzVG9rZW5LZXk9XCJhY2Nlc3NfdG9rZW5fXCIrdGhpcy5jb25maWcuc3BhY2VJZH1nZXQgaGFzQWNjZXNzVG9rZW4oKXtyZXR1cm4hIXRoaXMuYWNjZXNzVG9rZW59c2V0QWNjZXNzVG9rZW4oZSl7dGhpcy5hY2Nlc3NUb2tlbj1lfXJlcXVlc3RBdXRoKGUpe3JldHVybiBpLndyYXBwZWRSZXF1ZXN0KGUpfXJlcXVlc3QoZSx0KXtyZXR1cm4gdGhpcy5oYXNBY2Nlc3NUb2tlbj90P2kud3JhcHBlZFJlcXVlc3QoZSk6aS53cmFwcGVkUmVxdWVzdChlKS5jYXRjaCh0PT5uZXcgUHJvbWlzZSgoZSxuKT0+eyF0fHxcIkdBVEVXQVlfSU5WQUxJRF9UT0tFTlwiIT09dC5jb2RlJiZcIkludmFsaWRQYXJhbWV0ZXIuSW52YWxpZFRva2VuXCIhPT10LmNvZGU/bih0KTplKCl9KS50aGVuKCgpPT50aGlzLmdldEFjY2Vzc1Rva2VuKCkpLnRoZW4oKCk9Pntjb25zdCB0PXRoaXMucmVidWlsZFJlcXVlc3QoZSk7cmV0dXJuIHRoaXMucmVxdWVzdCh0LCEwKX0pKTp0aGlzLmdldEFjY2Vzc1Rva2VuKCkudGhlbigoKT0+e2NvbnN0IHQ9dGhpcy5yZWJ1aWxkUmVxdWVzdChlKTtyZXR1cm4gdGhpcy5yZXF1ZXN0KHQsITApfSl9cmVidWlsZFJlcXVlc3QoZSl7Y29uc3QgdD1PYmplY3QuYXNzaWduKHt9LGUpO3JldHVybiB0LmRhdGEudG9rZW49dGhpcy5hY2Nlc3NUb2tlbix0LmhlYWRlcltcIngtYmFzZW1lbnQtdG9rZW5cIl09dGhpcy5hY2Nlc3NUb2tlbix0LmhlYWRlcltcIngtc2VydmVybGVzcy1zaWduXCJdPWkuc2lnbih0LmRhdGEsdGhpcy5jb25maWcuY2xpZW50U2VjcmV0KSx0fXNldHVwUmVxdWVzdChlLHQpe2NvbnN0IG49T2JqZWN0LmFzc2lnbih7fSxlLHtzcGFjZUlkOnRoaXMuY29uZmlnLnNwYWNlSWQsdGltZXN0YW1wOkRhdGUubm93KCl9KSxyPXtcIkNvbnRlbnQtVHlwZVwiOlwiYXBwbGljYXRpb24vanNvblwifTtyZXR1cm5cImF1dGhcIiE9PXQmJihuLnRva2VuPXRoaXMuYWNjZXNzVG9rZW4scltcIngtYmFzZW1lbnQtdG9rZW5cIl09dGhpcy5hY2Nlc3NUb2tlbikscltcIngtc2VydmVybGVzcy1zaWduXCJdPWkuc2lnbihuLHRoaXMuY29uZmlnLmNsaWVudFNlY3JldCkse3VybDp0aGlzLmNvbmZpZy5yZXF1ZXN0VXJsLG1ldGhvZDpcIlBPU1RcIixkYXRhOm4sZGF0YVR5cGU6XCJqc29uXCIsaGVhZGVyOnJ9fWdldEFjY2Vzc1Rva2VuKCl7cmV0dXJuIHRoaXMucmVxdWVzdEF1dGgodGhpcy5zZXR1cFJlcXVlc3Qoe21ldGhvZDpcInNlcnZlcmxlc3MuYXV0aC51c2VyLmFub255bW91c0F1dGhvcml6ZVwiLHBhcmFtczpcInt9XCJ9LFwiYXV0aFwiKSkudGhlbihlPT5uZXcgUHJvbWlzZSgodCxuKT0+e2UucmVzdWx0JiZlLnJlc3VsdC5hY2Nlc3NUb2tlbj8odGhpcy5zZXRBY2Nlc3NUb2tlbihlLnJlc3VsdC5hY2Nlc3NUb2tlbiksdCh0aGlzLmFjY2Vzc1Rva2VuKSk6bihuZXcgcyh7Y29kZTpcIkFVVEhfRkFJTEVEXCIsbWVzc2FnZTpcIuiOt+WPlmFjY2Vzc1Rva2Vu5aSx6LSlXCJ9KSl9KSl9YXV0aG9yaXplKCl7dGhpcy5nZXRBY2Nlc3NUb2tlbigpfWNhbGxGdW5jdGlvbihlKXtjb25zdCB0PXttZXRob2Q6XCJzZXJ2ZXJsZXNzLmZ1bmN0aW9uLnJ1bnRpbWUuaW52b2tlXCIscGFyYW1zOkpTT04uc3RyaW5naWZ5KHtmdW5jdGlvblRhcmdldDplLm5hbWUsZnVuY3Rpb25BcmdzOmUuZGF0YXx8e319KX07cmV0dXJuIHRoaXMuY29uZmlnLnVzZURlYnVnRnVuY3Rpb24/dGhpcy5yZXF1ZXN0KHRoaXMuc2V0dXBSZXF1ZXN0KHQpKS50aGVuKHQ9PntpZih0JiZ0LnJlcXVlc3RJZCl7Y29uc3Qgbj1KU09OLnN0cmluZ2lmeSh7c3BhY2VJZDp0aGlzLmNvbmZpZy5zcGFjZUlkLGZ1bmN0aW9uTmFtZTplLm5hbWUscmVxdWVzdElkOnQucmVxdWVzdElkfSk7Y29uc29sZS5sb2coYFthbGl5dW4tcmVxdWVzdF0ke259Wy9hbGl5dW4tcmVxdWVzdF1gKX1yZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHQpfSkuY2F0Y2godD0+e2lmKHQmJnQucmVxdWVzdElkKXtjb25zdCBuPUpTT04uc3RyaW5naWZ5KHtzcGFjZUlkOnRoaXMuY29uZmlnLnNwYWNlSWQsZnVuY3Rpb25OYW1lOmUubmFtZSxyZXF1ZXN0SWQ6dC5yZXF1ZXN0SWR9KTtjb25zb2xlLmxvZyhgW2FsaXl1bi1yZXF1ZXN0XSR7bn1bL2FsaXl1bi1yZXF1ZXN0XWApfXJldHVybiBQcm9taXNlLnJlamVjdCh0KX0pOnRoaXMucmVxdWVzdCh0aGlzLnNldHVwUmVxdWVzdCh0KSl9Z2V0T1NTVXBsb2FkT3B0aW9uc0Zyb21QYXRoKGUpe2NvbnN0IHQ9e21ldGhvZDpcInNlcnZlcmxlc3MuZmlsZS5yZXNvdXJjZS5nZW5lcmF0ZVByb3hpbWFsU2lnblwiLHBhcmFtczpKU09OLnN0cmluZ2lmeShlKX07cmV0dXJuIHRoaXMucmVxdWVzdCh0aGlzLnNldHVwUmVxdWVzdCh0KSl9dXBsb2FkRmlsZVRvT1NTKHt1cmw6ZSxmb3JtRGF0YTp0LGZpbGVOYW1lOm4sbmFtZTpyLGZpbGVQYXRoOm8sZmlsZVR5cGU6aSxjb250ZW50VHlwZTphLG9uVXBsb2FkUHJvZ3Jlc3M6Y30pe3JldHVybiBuZXcgUHJvbWlzZSgoYSx1KT0+e2NvbnN0IGw9dW5pLnVwbG9hZEZpbGUoe3VybDplLGZvcm1EYXRhOnQsZmlsZU5hbWU6bixuYW1lOnIsZmlsZVBhdGg6byxmaWxlVHlwZTppLGhlYWRlcjp7XCJYLU9TUy1zZXJ2ZXItc2lkZS1lbmNycHl0aW9uXCI6XCJBRVMyNTZcIn0sc3VjY2VzcyhlKXtlJiZlLnN0YXR1c0NvZGU8NDAwP2EoZSk6dShuZXcgcyh7Y29kZTpcIlVQTE9BRF9GQUlMRURcIixtZXNzYWdlOlwi5paH5Lu25LiK5Lyg5aSx6LSlXCJ9KSl9LGZhaWwoZSl7dShlKX19KTtcImZ1bmN0aW9uXCI9PXR5cGVvZiBjJiZsLm9uUHJvZ3Jlc3NVcGRhdGUoZT0+e2Moe2xvYWRlZDplLnRvdGFsQnl0ZXNTZW50LHRvdGFsOmUudG90YWxCeXRlc0V4cGVjdGVkVG9TZW5kfSl9KX0pfXJlcG9ydE9TU1VwbG9hZChlKXtjb25zdCB0PXttZXRob2Q6XCJzZXJ2ZXJsZXNzLmZpbGUucmVzb3VyY2UucmVwb3J0XCIscGFyYW1zOkpTT04uc3RyaW5naWZ5KGUpfTtyZXR1cm4gdGhpcy5yZXF1ZXN0KHRoaXMuc2V0dXBSZXF1ZXN0KHQpKX11cGxvYWRGaWxlKHtmaWxlUGF0aDplLGNsb3VkUGF0aDp0LG9uVXBsb2FkUHJvZ3Jlc3M6bixjb25maWc6cn0pe2NvbnN0IG89ciYmci5lbnZUeXBlfHx0aGlzLmNvbmZpZy5lbnZUeXBlO2xldCBpLHUsbCxmLHAsaD10fHxlLnNwbGl0KFwiL1wiKS5wb3AoKTtyZXR1cm4oaT1cImg1XCI9PT1wcm9jZXNzLmVudi5WVUVfQVBQX1BMQVRGT1JNP25ldyBQcm9taXNlKChuLHIpPT57dmFyIG89bmV3IFhNTEh0dHBSZXF1ZXN0O28ub3BlbihcIkdFVFwiLGUsITApLG8ucmVzcG9uc2VUeXBlPVwiYmxvYlwiLG8ub25sb2FkPWZ1bmN0aW9uKCl7KHU9ZnVuY3Rpb24oZSl7bGV0IHQ7cmV0dXJuIE9iamVjdC5rZXlzKGEpLmZvckVhY2gobj0+e2Fbbl09PT1lJiYodD1uKX0pLHR9KHRoaXMucmVzcG9uc2UudHlwZSkpfHxyKG5ldyBzKHtjb2RlOlwiVU5TVVBQT1JURURfRklMRV9UWVBFXCIsbWVzc2FnZTpcIuS4jeaUr+aMgeeahOaWh+S7tuexu+Wei1wifSkpLHR8fChoKz1cIi5cIit1KSxuKCl9LG8uc2VuZCgpfSk6Yyh1PWUuc3BsaXQoXCI/XCIpWzBdLnNwbGl0KFwiLlwiKS5wb3AoKSk/UHJvbWlzZS5yZXNvbHZlKCk6UHJvbWlzZS5yZWplY3QobmV3IHMoe2NvZGU6XCJVTlNVUFBPUlRFRF9GSUxFX1RZUEVcIixtZXNzYWdlOlwi5LiN5pSv5oyB55qE5paH5Lu257G75Z6LXCJ9KSkpLnRoZW4oKCk9Pm5ldyBQcm9taXNlKCh0LG4pPT57dW5pLmdldEZpbGVJbmZvP3VuaS5nZXRGaWxlSW5mbyh7ZmlsZVBhdGg6ZSxzdWNjZXNzKGUpe3QoZS5zaXplKX0sZmFpbChlKXtuKGUpfX0pOnQoMCl9KSkudGhlbihlPT50aGlzLmdldE9TU1VwbG9hZE9wdGlvbnNGcm9tUGF0aCh7ZW52Om8sZmlsZW5hbWU6aCxzaXplOmV9KSkudGhlbih0PT57Y29uc3Qgcj10LnJlc3VsdDtsPWModSksZj1yLmlkLHA9XCJodHRwczovL1wiK3IuY2RuRG9tYWluK1wiL1wiK3Iub3NzUGF0aDtjb25zdCBvPXt1cmw6XCJodHRwczovL1wiK3IuaG9zdCxmb3JtRGF0YTp7XCJDYWNoZS1Db250cm9sXCI6XCJtYXgtYWdlPTI1OTIwMDBcIixcIkNvbnRlbnQtRGlzcG9zaXRpb25cIjpcImF0dGFjaG1lbnRcIixPU1NBY2Nlc3NLZXlJZDpyLmFjY2Vzc0tleUlkLFNpZ25hdHVyZTpyLnNpZ25hdHVyZSxob3N0OnIuaG9zdCxpZDpmLGtleTpyLm9zc1BhdGgscG9saWN5OnIucG9saWN5LHN1Y2Nlc3NfYWN0aW9uX3N0YXR1czoyMDB9LGZpbGVOYW1lOlwiZmlsZVwiLG5hbWU6XCJmaWxlXCIsZmlsZVBhdGg6ZSxmaWxlVHlwZTpcImltYWdlXCIsY29udGVudFR5cGU6bH07cmV0dXJuIHRoaXMudXBsb2FkRmlsZVRvT1NTKE9iamVjdC5hc3NpZ24oe30sbyx7b25VcGxvYWRQcm9ncmVzczpufSkpfSkudGhlbigoKT0+dGhpcy5yZXBvcnRPU1NVcGxvYWQoe2lkOmYsY29udGVudFR5cGU6bH0pKS50aGVuKHQ9Pm5ldyBQcm9taXNlKChuLHIpPT57dC5zdWNjZXNzP24oe3N1Y2Nlc3M6ITAsZmlsZVBhdGg6ZSxmaWxlSUQ6cH0pOnIobmV3IHMoe2NvZGU6XCJVUExPQURfRkFJTEVEXCIsbWVzc2FnZTpcIuaWh+S7tuS4iuS8oOWksei0pVwifSkpfSkpfWRlbGV0ZUZpbGUoe2ZpbGVMaXN0OmV9KXtjb25zdCB0PXttZXRob2Q6XCJzZXJ2ZXJsZXNzLmZpbGUucmVzb3VyY2UuZGVsZXRlXCIscGFyYW1zOkpTT04uc3RyaW5naWZ5KHtpZDplWzBdfSl9O3JldHVybiB0aGlzLnJlcXVlc3QodGhpcy5zZXR1cFJlcXVlc3QodCkpfX1jb25zdCBsPXJlcXVpcmUoXCJ1bmktc3RhdC1jb25maWdcIikuZGVmYXVsdHx8cmVxdWlyZShcInVuaS1zdGF0LWNvbmZpZ1wiKSxmPVwiX19EQ19TVEFUX1VVSURcIixwPVwiX19EQ19VVUlEX1ZBTFVFXCIsaD1cImh0dHBzOi8vaWRlLmRjbG91ZC5uZXQuY24vc2VydmVybGVzcy9mdW5jdGlvbi9pbnZva2VcIjtsZXQgZCx5O2Z1bmN0aW9uIHYoKXtpZihcIm5cIj09PWcoKSl7dHJ5e2Q9cGx1cy5ydW50aW1lLmdldERDbG91ZElkKCl9Y2F0Y2goZSl7ZD1cIlwifXJldHVybiBkfXJldHVybiBkfHwoZD1EYXRlLm5vdygpK1wiXCIrTWF0aC5mbG9vcigxZTcqTWF0aC5yYW5kb20oKSksdW5pLnNldFN0b3JhZ2Uoe2tleTpmLGRhdGE6ZH0pKSxkfWZ1bmN0aW9uIGcoKXtyZXR1cm57XCJhcHAtcGx1c1wiOlwiblwiLGg1OlwiaDVcIixcIm1wLXdlaXhpblwiOlwid3hcIixcIm1wLWFsaXBheVwiOlwiYWxpXCIsXCJtcC1iYWlkdVwiOlwiYmRcIixcIm1wLXRvdXRpYW9cIjpcInR0XCIsXCJtcC1xcVwiOlwicXFcIixcInF1aWNrYXBwLW5hdGl2ZVwiOlwicW5cIn1bcHJvY2Vzcy5lbnYuVlVFX0FQUF9QTEFURk9STV19ZnVuY3Rpb24gXyhlKXtyZXR1cm4gZnVuY3Rpb24odCl7aWYoISgodD10fHx7fSkuc3VjY2Vzc3x8dC5mYWlsfHx0LmNvbXBsZXRlKSlyZXR1cm4gZS5jYWxsKHRoaXMsdCk7ZS5jYWxsKHRoaXMsdCkudGhlbihlPT57dC5zdWNjZXNzJiZ0LnN1Y2Nlc3MoZSksdC5jb21wbGV0ZSYmdC5jb21wbGV0ZShlKX0pLmNhdGNoKGU9Pnt0LmZhaWwmJnQuZmFpbChlKSx0LmNvbXBsZXRlJiZ0LmNvbXBsZXRlKGUpfSl9fXNldFRpbWVvdXQoKGZ1bmN0aW9uKCl7dW5pLmdldFN0b3JhZ2Uoe2tleTpmLHN1Y2Nlc3MoZSl7ZD1lLmRhdGF9LGZhaWwoKXtkPXB9fSkseT1cInFuXCI9PT1nKCk/XCJhbmRyb2lkXCI6dW5pLmdldFN5c3RlbUluZm9TeW5jKCkucGxhdGZvcm19KSwwKTtjb25zdCBtPXtpbml0KGUpe2NvbnN0IHQ9bmV3IHUoZSk7cmV0dXJuW1widXBsb2FkRmlsZVwiLFwiZGVsZXRlRmlsZVwiXS5mb3JFYWNoKGU9Pnt0W2VdPV8odFtlXSkuYmluZCh0KX0pLHNldFRpbWVvdXQoKCk9Pnt0LmF1dGhvcml6ZSgpfSwwKSx0fX07dmFyIGI7ZnVuY3Rpb24gdyhlLHQsbil7dm9pZCAwPT09biYmKG49e30pO3ZhciByPS9cXD8vLnRlc3QodCksbz1cIlwiO2Zvcih2YXIgcyBpbiBuKVwiXCI9PT1vPyFyJiYodCs9XCI/XCIpOm8rPVwiJlwiLG8rPXMrXCI9XCIrZW5jb2RlVVJJQ29tcG9uZW50KG5bc10pO3JldHVybi9eaHR0cChzKT9cXDpcXC9cXC8vLnRlc3QodCs9byk/dDpcIlwiK2UrdH0hZnVuY3Rpb24oZSl7ZS5sb2NhbD1cImxvY2FsXCIsZS5ub25lPVwibm9uZVwiLGUuc2Vzc2lvbj1cInNlc3Npb25cIn0oYnx8KGI9e30pKTt2YXIgRSxUPShFPWZ1bmN0aW9uKGUsdCl7cmV0dXJuKEU9T2JqZWN0LnNldFByb3RvdHlwZU9mfHx7X19wcm90b19fOltdfWluc3RhbmNlb2YgQXJyYXkmJmZ1bmN0aW9uKGUsdCl7ZS5fX3Byb3RvX189dH18fGZ1bmN0aW9uKGUsdCl7Zm9yKHZhciBuIGluIHQpdC5oYXNPd25Qcm9wZXJ0eShuKSYmKGVbbl09dFtuXSl9KShlLHQpfSxmdW5jdGlvbihlLHQpe2Z1bmN0aW9uIG4oKXt0aGlzLmNvbnN0cnVjdG9yPWV9RShlLHQpLGUucHJvdG90eXBlPW51bGw9PT10P09iamVjdC5jcmVhdGUodCk6KG4ucHJvdG90eXBlPXQucHJvdG90eXBlLG5ldyBuKX0pLE89ZnVuY3Rpb24oKXtyZXR1cm4oTz1PYmplY3QuYXNzaWdufHxmdW5jdGlvbihlKXtmb3IodmFyIHQsbj0xLHI9YXJndW1lbnRzLmxlbmd0aDtuPHI7bisrKWZvcih2YXIgbyBpbiB0PWFyZ3VtZW50c1tuXSlPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwodCxvKSYmKGVbb109dFtvXSk7cmV0dXJuIGV9KS5hcHBseSh0aGlzLGFyZ3VtZW50cyl9O3ZhciBTPWZ1bmN0aW9uKGUpe2Z1bmN0aW9uIHQoKXtyZXR1cm4gbnVsbCE9PWUmJmUuYXBwbHkodGhpcyxhcmd1bWVudHMpfHx0aGlzfXJldHVybiBUKHQsZSksdC5wcm90b3R5cGUucG9zdD1mdW5jdGlvbihlKXt2YXIgdD1lLnVybCxuPWUuZGF0YSxyPWUuaGVhZGVycztyZXR1cm4gbmV3IFByb21pc2UoKGZ1bmN0aW9uKGUsbyl7dW5pLnJlcXVlc3Qoe3VybDp3KFwiaHR0cHM6XCIsdCksZGF0YTpuLG1ldGhvZDpcIlBPU1RcIixoZWFkZXI6cixzdWNjZXNzOmZ1bmN0aW9uKHQpe2UodCl9LGZhaWw6ZnVuY3Rpb24oZSl7byhlKX19KX0pKX0sdC5wcm90b3R5cGUudXBsb2FkPWZ1bmN0aW9uKGUpe3JldHVybiBuZXcgUHJvbWlzZSgoZnVuY3Rpb24odCl7dmFyIG49ZS51cmwscj1lLmZpbGUsbz1lLmRhdGEscz1lLmhlYWRlcnM7dW5pLnVwbG9hZEZpbGUoe3VybDp3KFwiaHR0cHM6XCIsbiksbmFtZTpcImZpbGVcIixmb3JtRGF0YTpPYmplY3QuYXNzaWduKHt9LG8pLGZpbGVQYXRoOnIsaGVhZGVyOnMsc3VjY2VzczpmdW5jdGlvbihlKXt2YXIgbj17c3RhdHVzQ29kZTplLnN0YXR1c0NvZGUsZGF0YTplLmRhdGF8fHt9fTsyMDA9PT1lLnN0YXR1c0NvZGUmJm8uc3VjY2Vzc19hY3Rpb25fc3RhdHVzJiYobi5zdGF0dXNDb2RlPXBhcnNlSW50KG8uc3VjY2Vzc19hY3Rpb25fc3RhdHVzLDEwKSksdChuKX0sZmFpbDpmdW5jdGlvbihlKXt0KGUpfX0pfSkpfSx0LnByb3RvdHlwZS5kb3dubG9hZD1mdW5jdGlvbihlKXt2YXIgdD1lLnVybCxuPWUuaGVhZGVycztyZXR1cm4gbmV3IFByb21pc2UoKGZ1bmN0aW9uKGUscil7dW5pLmRvd25sb2FkRmlsZSh7dXJsOncoXCJodHRwczpcIix0KSxoZWFkZXI6bixzdWNjZXNzOmZ1bmN0aW9uKHQpezIwMD09PXQuc3RhdHVzQ29kZSYmdC50ZW1wRmlsZVBhdGg/ZSh7c3RhdHVzQ29kZToyMDAsdGVtcEZpbGVQYXRoOnQudGVtcEZpbGVQYXRofSk6ZSh0KX0sZmFpbDpmdW5jdGlvbihlKXtyKGUpfX0pfSkpfSx0fSgoZnVuY3Rpb24oKXt9KSksaz17c2V0SXRlbTpmdW5jdGlvbihlLHQpe3VuaS5zZXRTdG9yYWdlU3luYyhlLHQpfSxnZXRJdGVtOmZ1bmN0aW9uKGUpe3JldHVybiB1bmkuZ2V0U3RvcmFnZVN5bmMoZSl9LHJlbW92ZUl0ZW06ZnVuY3Rpb24oZSl7dW5pLnJlbW92ZVN0b3JhZ2VTeW5jKGUpfSxjbGVhcjpmdW5jdGlvbigpe3VuaS5jbGVhclN0b3JhZ2VTeW5jKCl9fSxBPWZ1bmN0aW9uKGUsdCl7dm9pZCAwPT09dCYmKHQ9e30pO3ZhciBuPXVuaS5jb25uZWN0U29ja2V0KE8oe3VybDplfSx0KSk7cmV0dXJue3NldCBvbm9wZW4oZSl7bi5vbk9wZW4oZSl9LHNldCBvbm1lc3NhZ2UoZSl7bi5vbk1lc3NhZ2UoZSl9LHNldCBvbmNsb3NlKGUpe24ub25DbG9zZShlKX0sc2V0IG9uZXJyb3IoZSl7bi5vbkVycm9yKGUpfSxzZW5kOmZ1bmN0aW9uKGUpe3JldHVybiBuLnNlbmQoe2RhdGE6ZX0pfSxjbG9zZTpmdW5jdGlvbihlLHQpe3JldHVybiBuLmNsb3NlKHtjb2RlOmUscmVhc29uOnR9KX0sZ2V0IHJlYWR5U3RhdGUoKXtyZXR1cm4gbi5yZWFkeVN0YXRlfSxDT05ORUNUSU5HOjAsT1BFTjoxLENMT1NJTkc6MixDTE9TRUQ6M319O3ZhciBQPXtnZW5BZGFwdGVyOmZ1bmN0aW9uKCl7cmV0dXJue3Jvb3Q6e30scmVxQ2xhc3M6Uyx3c0NsYXNzOkEsbG9jYWxTdG9yYWdlOmsscHJpbWFyeVN0b3JhZ2U6Yi5sb2NhbH19LGlzTWF0Y2g6ZnVuY3Rpb24oKXtyZXR1cm5cInVuZGVmaW5lZFwiIT10eXBlb2YgdW5pJiYhIXVuaS5yZXF1ZXN0fSxydW50aW1lOlwidW5pX2FwcFwifSxJPW4oKGZ1bmN0aW9uKGUsdCl7T2JqZWN0LmRlZmluZVByb3BlcnR5KHQsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSksdC5nZXRRdWVyeT1mdW5jdGlvbihlLHQpe2lmKFwidW5kZWZpbmVkXCI9PXR5cGVvZiB3aW5kb3cpcmV0dXJuITE7dmFyIG49dHx8d2luZG93LmxvY2F0aW9uLnNlYXJjaCxyPW5ldyBSZWdFeHAoXCIoXnwmKVwiK2UrXCI9KFteJl0qKSgmfCQpXCIpLG89bi5zdWJzdHIobi5pbmRleE9mKFwiP1wiKSsxKS5tYXRjaChyKTtyZXR1cm4gbnVsbCE9bz9vWzJdOlwiXCJ9LHQuZ2V0SGFzaD1mdW5jdGlvbihlKXt2YXIgdD13aW5kb3cubG9jYXRpb24uaGFzaC5tYXRjaChuZXcgUmVnRXhwKFwiWyM/Ji9dXCIrZStcIj0oW14mI10qKVwiKSk7cmV0dXJuIHQ/dFsxXTpcIlwifSx0LnJlbW92ZVBhcmFtPWZ1bmN0aW9uKGUsdCl7dmFyIG49dC5zcGxpdChcIj9cIilbMF0scj1bXSxvPS0xIT09dC5pbmRleE9mKFwiP1wiKT90LnNwbGl0KFwiP1wiKVsxXTpcIlwiO2lmKFwiXCIhPT1vKXtmb3IodmFyIHM9KHI9by5zcGxpdChcIiZcIikpLmxlbmd0aC0xO3M+PTA7cy09MSlyW3NdLnNwbGl0KFwiPVwiKVswXT09PWUmJnIuc3BsaWNlKHMsMSk7bj1uK1wiP1wiK3Iuam9pbihcIiZcIil9cmV0dXJuIG59LHQuY3JlYXRlUHJvbWlzZUNhbGxiYWNrPWZ1bmN0aW9uKCl7dmFyIGU7aWYoIVByb21pc2UpeyhlPWZ1bmN0aW9uKCl7fSkucHJvbWlzZT17fTt2YXIgdD1mdW5jdGlvbigpe3Rocm93IG5ldyBFcnJvcignWW91ciBOb2RlIHJ1bnRpbWUgZG9lcyBzdXBwb3J0IEVTNiBQcm9taXNlcy4gU2V0IFwiZ2xvYmFsLlByb21pc2VcIiB0byB5b3VyIHByZWZlcnJlZCBpbXBsZW1lbnRhdGlvbiBvZiBwcm9taXNlcy4nKX07cmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLnByb21pc2UsXCJ0aGVuXCIse2dldDp0fSksT2JqZWN0LmRlZmluZVByb3BlcnR5KGUucHJvbWlzZSxcImNhdGNoXCIse2dldDp0fSksZX12YXIgbj1uZXcgUHJvbWlzZSgoZnVuY3Rpb24odCxuKXtlPWZ1bmN0aW9uKGUscil7cmV0dXJuIGU/bihlKTp0KHIpfX0pKTtyZXR1cm4gZS5wcm9taXNlPW4sZX0sdC5nZXRXZWl4aW5Db2RlPWZ1bmN0aW9uKCl7cmV0dXJuIHQuZ2V0UXVlcnkoXCJjb2RlXCIpfHx0LmdldEhhc2goXCJjb2RlXCIpfSx0LmdldE1pbmlBcHBDb2RlPWZ1bmN0aW9uKCl7cmV0dXJuIG5ldyBQcm9taXNlKChmdW5jdGlvbihlLHQpe3d4LmxvZ2luKHtzdWNjZXNzOmZ1bmN0aW9uKHQpe2UodC5jb2RlKX0sZmFpbDpmdW5jdGlvbihlKXt0KGUpfX0pfSkpfSx0LmlzQXJyYXk9ZnVuY3Rpb24oZSl7cmV0dXJuXCJbb2JqZWN0IEFycmF5XVwiPT09T2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGUpfSx0LmlzU3RyaW5nPWZ1bmN0aW9uKGUpe3JldHVyblwic3RyaW5nXCI9PXR5cGVvZiBlfSx0LmlzVW5kZWZpbmVkPWZ1bmN0aW9uKGUpe3JldHVybiB2b2lkIDA9PT1lfSx0LmlzSW5zdGFuY2VPZj1mdW5jdGlvbihlLHQpe3JldHVybiBlIGluc3RhbmNlb2YgdH0sdC5pc0Zvcm1EYXRhPWZ1bmN0aW9uKGUpe3JldHVyblwiW29iamVjdCBGb3JtRGF0YV1cIj09PU9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChlKX0sdC5nZW5TZXFJZD1mdW5jdGlvbigpe3JldHVybiBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDE2KS5zbGljZSgyKX0sdC5nZXRBcmdOYW1lcz1mdW5jdGlvbihlKXt2YXIgdD1lLnRvU3RyaW5nKCk7cmV0dXJuIHQuc2xpY2UodC5pbmRleE9mKFwiKFwiKSsxLHQuaW5kZXhPZihcIilcIikpLm1hdGNoKC8oW15cXHMsXSspL2cpfSx0LmZvcm1hdFVybD1mdW5jdGlvbihlLHQsbil7dm9pZCAwPT09biYmKG49e30pO3ZhciByPS9cXD8vLnRlc3QodCksbz1cIlwiO2Zvcih2YXIgcyBpbiBuKVwiXCI9PT1vPyFyJiYodCs9XCI/XCIpOm8rPVwiJlwiLG8rPXMrXCI9XCIrZW5jb2RlVVJJQ29tcG9uZW50KG5bc10pO3JldHVybi9eaHR0cChzKT9cXDpcXC9cXC8vLnRlc3QodCs9byk/dDpcIlwiK2UrdH19KSk7dChJKTtJLmdldFF1ZXJ5LEkuZ2V0SGFzaCxJLnJlbW92ZVBhcmFtLEkuY3JlYXRlUHJvbWlzZUNhbGxiYWNrLEkuZ2V0V2VpeGluQ29kZSxJLmdldE1pbmlBcHBDb2RlLEkuaXNBcnJheSxJLmlzU3RyaW5nLEkuaXNVbmRlZmluZWQsSS5pc0luc3RhbmNlT2YsSS5pc0Zvcm1EYXRhLEkuZ2VuU2VxSWQsSS5nZXRBcmdOYW1lcyxJLmZvcm1hdFVybDt2YXIgTixDPVwiZGlzdC9pbmRleC5qc1wiLFI9XCIuL2Rpc3QvaW5kZXguZC50c1wiLHg9e2J1aWxkOlwibnBtIHJ1biB0c2MgJiYgd2VicGFja1wiLHRzYzpcInRzYyAtcCB0c2NvbmZpZy5qc29uXCIsXCJ0c2M6d1wiOlwidHNjIC1wIHRzY29uZmlnLmpzb24gLXdcIix0ZXN0OlwiamVzdCAtLXZlcmJvc2UgZmFsc2UgLWlcIixlMmU6J05PREVfRU5WPWUyZSB3ZWJwYWNrICYmIGplc3QgLS1jb25maWc9XCIuL2plc3QuZTJlLmNvbmZpZy5qc1wiICAtLXZlcmJvc2UgZmFsc2UgLWkgXCJlMmVcIicsc3RhcnQ6XCJ3ZWJwYWNrLWRldi1zZXJ2ZXIgLS1ob3QgLS1vcGVuXCIsZXNsaW50Oidlc2xpbnQgXCIuLyoqLyouanNcIiBcIi4vKiovKi50c1wiJyxcImVzbGludC1maXhcIjonZXNsaW50IC0tZml4IFwiLi8qKi8qLmpzXCIgXCIuLyoqLyoudHNcIicsdGVzdF93ZWI6XCJucG0gcnVuIHRzYyAmJiB3ZWJwYWNrLWRldi1zZXJ2ZXIgLS1kZXZ0b29sIGV2YWwtc291cmNlLW1hcCAtLXByb2dyZXNzIC0tY29sb3JzIC0taG90IC0taW5saW5lIC0tY29udGVudC1iYXNlIC4vZGlzdCAtLWhvc3QgamltbXl0ZXN0LTA4OGJlZi50Y2IucWNsb3VkLmxhIC0tcG9ydCA4MCAtLWRpc2FibGVIb3N0Q2hlY2sgdHJ1ZSAtLW1vZGUgZGV2ZWxvcG1lbnQgLS1jb25maWcgd2VicGFjay50ZXN0LmpzXCJ9LHE9e3R5cGU6XCJnaXRcIix1cmw6XCJodHRwczovL2dpdGh1Yi5jb20vVGVuY2VudENsb3VkQmFzZS90Y2ItanMtc2RrXCJ9LFU9W1widGNiXCIsXCJqcy1zZGtcIl0saj17XCJAY2xvdWRiYXNlL2FkYXB0ZXItaW50ZXJmYWNlXCI6XCJeMC4yLjBcIixcIkBjbG91ZGJhc2UvYWRhcHRlci13eF9tcFwiOlwiXjAuMi4xXCIsXCJAY2xvdWRiYXNlL2RhdGFiYXNlXCI6XCJeMC45LjhcIn0sTD17XCJAYmFiZWwvY29yZVwiOlwiXjcuNi4yXCIsXCJAYmFiZWwvcGx1Z2luLXByb3Bvc2FsLWNsYXNzLXByb3BlcnRpZXNcIjpcIl43LjUuNVwiLFwiQGJhYmVsL3BsdWdpbi1wcm9wb3NhbC1vYmplY3QtcmVzdC1zcHJlYWRcIjpcIl43LjYuMlwiLFwiQGJhYmVsL3BsdWdpbi10cmFuc2Zvcm0tcnVudGltZVwiOlwiXjcuNi4yXCIsXCJAYmFiZWwvcHJlc2V0LWVudlwiOlwiXjcuNi4yXCIsXCJAYmFiZWwvcHJlc2V0LXR5cGVzY3JpcHRcIjpcIl43LjYuMFwiLFwiQGJhYmVsL3J1bnRpbWVcIjpcIl43LjYuMlwiLFwiQHR5cGVzL2plc3RcIjpcIl4yMy4xLjRcIixcIkB0eXBlcy9ub2RlXCI6XCJeMTAuMTQuNFwiLFwiQHR5cGVzL3N1cGVyYWdlbnRcIjpcIl40LjEuNFwiLGF4aW9zOlwiXjAuMTkuMFwiLFwiYmFiZWwtZXNsaW50XCI6XCJeMTAuMC4xXCIsXCJiYWJlbC1sb2FkZXJcIjpcIl44LjAuNlwiLFwiYmFiZWwtcG9seWZpbGxcIjpcIl42LjI2LjBcIixlc2xpbnQ6XCJeNS4xNi4wXCIsXCJlc2xpbnQtY29uZmlnLWFsbG95XCI6XCJeMS40LjJcIixcImVzbGludC1jb25maWctcHJldHRpZXJcIjpcIl40LjEuMFwiLFwiZXNsaW50LXBsdWdpbi1wcmV0dGllclwiOlwiXjMuMC4xXCIsXCJlc2xpbnQtcGx1Z2luLXR5cGVzY3JpcHRcIjpcIl4xLjAuMC1yYy4zXCIsZXhwcmVzczpcIl40LjE3LjFcIixodXNreTpcIl4zLjEuMFwiLGplc3Q6XCJeMjQuNy4xXCIsXCJqZXN0LXB1cHBldGVlclwiOlwiXjQuMy4wXCIsXCJsaW50LXN0YWdlZFwiOlwiXjkuNS4wXCIsXCJwb3dlci1hc3NlcnRcIjpcIl4xLjYuMVwiLHB1cHBldGVlcjpcIl4xLjIwLjBcIixcInNlcnZlLXN0YXRpY1wiOlwiXjEuMTQuMVwiLFwidHMtamVzdFwiOlwiXjIzLjEwLjRcIixcInRzLWxvYWRlclwiOlwiXjYuMi4xXCIsdHlwZXNjcmlwdDpcIl4zLjQuM1wiLFwidHlwZXNjcmlwdC1lc2xpbnQtcGFyc2VyXCI6XCJeMjIuMC4wXCIsd2VicGFjazpcIl40LjQxLjNcIixcIndlYnBhY2stYnVuZGxlLWFuYWx5emVyXCI6XCJeMy40LjFcIixcIndlYnBhY2stY2xpXCI6XCJeMy4zLjBcIixcIndlYnBhY2stZGV2LXNlcnZlclwiOlwiXjMuMy4xXCIsXCJ3ZWJwYWNrLW1lcmdlXCI6XCJeNC4yLjJcIixcIndlYnBhY2stdmlzdWFsaXplci1wbHVnaW5cIjpcIl4wLjEuMTFcIn0sRD17aG9va3M6e1wicHJlLWNvbW1pdFwiOlwibGludC1zdGFnZWRcIn19LEY9e25hbWU6XCJ0Y2ItanMtc2RrXCIsdmVyc2lvbjpcIjEuMy41XCIsZGVzY3JpcHRpb246XCJqcyBzZGsgZm9yIHRjYlwiLG1haW46Qyx0eXBlczpSLHNjcmlwdHM6eCxyZXBvc2l0b3J5OnEsa2V5d29yZHM6VSxhdXRob3I6XCJqaW1teWp6aGFuZ1wiLGxpY2Vuc2U6XCJJU0NcIixkZXBlbmRlbmNpZXM6aixkZXZEZXBlbmRlbmNpZXM6TCxodXNreTpELFwibGludC1zdGFnZWRcIjp7XCIqLntqcyx0c31cIjpbXCJlc2xpbnQgLS1maXhcIixcImdpdCBhZGRcIl19fSxNPShOPU9iamVjdC5mcmVlemUoe19fcHJvdG9fXzpudWxsLG5hbWU6XCJ0Y2ItanMtc2RrXCIsdmVyc2lvbjpcIjEuMy41XCIsZGVzY3JpcHRpb246XCJqcyBzZGsgZm9yIHRjYlwiLG1haW46Qyx0eXBlczpSLHNjcmlwdHM6eCxyZXBvc2l0b3J5OnEsa2V5d29yZHM6VSxhdXRob3I6XCJqaW1teWp6aGFuZ1wiLGxpY2Vuc2U6XCJJU0NcIixkZXBlbmRlbmNpZXM6aixkZXZEZXBlbmRlbmNpZXM6TCxodXNreTpELGRlZmF1bHQ6Rn0pKSYmTi5kZWZhdWx0fHxOLEs9bigoZnVuY3Rpb24odCxuKXt2YXIgcj1lJiZlLl9faW1wb3J0U3Rhcnx8ZnVuY3Rpb24oZSl7aWYoZSYmZS5fX2VzTW9kdWxlKXJldHVybiBlO3ZhciB0PXt9O2lmKG51bGwhPWUpZm9yKHZhciBuIGluIGUpT2JqZWN0Lmhhc093blByb3BlcnR5LmNhbGwoZSxuKSYmKHRbbl09ZVtuXSk7cmV0dXJuIHQuZGVmYXVsdD1lLHR9O09iamVjdC5kZWZpbmVQcm9wZXJ0eShuLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pO3ZhciBvPXIoTSk7bi5TREtfVkVSSVNPTj1vLnZlcnNpb24sbi5BQ0NFU1NfVE9LRU49XCJhY2Nlc3NfdG9rZW5cIixuLkFDQ0VTU19UT0tFTl9FeHBpcmU9XCJhY2Nlc3NfdG9rZW5fZXhwaXJlXCIsbi5SRUZSRVNIX1RPS0VOPVwicmVmcmVzaF90b2tlblwiLG4uQU5PTllNT1VTX1VVSUQ9XCJhbm9ueW1vdXNfdXVpZFwiLG4uTE9HSU5fVFlQRV9LRVk9XCJsb2dpbl90eXBlXCIsbi5wcm90b2NvbD1cInVuZGVmaW5lZFwiIT10eXBlb2YgbG9jYXRpb24mJlwiaHR0cDpcIj09PWxvY2F0aW9uLnByb3RvY29sP1wiaHR0cDpcIjpcImh0dHBzOlwiLG4uQkFTRV9VUkw9XCJlMmVcIj09PXByb2Nlc3MuZW52Lk5PREVfRU5WJiZcInByZVwiPT09cHJvY2Vzcy5lbnYuRU5EX1BPSU5UP1wiLy90Y2ItcHJlLnRlbmNlbnRjbG91ZGFwaS5jb20vd2ViXCI6XCIvL3RjYi1hcGkudGVuY2VudGNsb3VkYXBpLmNvbS93ZWJcIn0pKTt0KEspO3ZhciBHO0suU0RLX1ZFUklTT04sSy5BQ0NFU1NfVE9LRU4sSy5BQ0NFU1NfVE9LRU5fRXhwaXJlLEsuUkVGUkVTSF9UT0tFTixLLkFOT05ZTU9VU19VVUlELEsuTE9HSU5fVFlQRV9LRVksSy5wcm90b2NvbCxLLkJBU0VfVVJMOyFmdW5jdGlvbihlKXtlLmxvY2FsPVwibG9jYWxcIixlLm5vbmU9XCJub25lXCIsZS5zZXNzaW9uPVwic2Vzc2lvblwifShHfHwoRz17fSkpO3ZhciBIPWZ1bmN0aW9uKCl7fSxZPWZ1bmN0aW9uKCl7fTt2YXIgVj1PYmplY3QuZnJlZXplKHtfX3Byb3RvX186bnVsbCxnZXQgU3RvcmFnZVR5cGUoKXtyZXR1cm4gR30sQWJzdHJhY3RTREtSZXF1ZXN0OkgsQWJzdHJhY3RTdG9yYWdlOlksZm9ybWF0VXJsOmZ1bmN0aW9uKGUsdCxuKXt2b2lkIDA9PT1uJiYobj17fSk7dmFyIHI9L1xcPy8udGVzdCh0KSxvPVwiXCI7Zm9yKHZhciBzIGluIG4pXCJcIj09PW8/IXImJih0Kz1cIj9cIik6bys9XCImXCIsbys9cytcIj1cIitlbmNvZGVVUklDb21wb25lbnQobltzXSk7cmV0dXJuL15odHRwKHMpP1xcOlxcL1xcLy8udGVzdCh0Kz1vKT90OlwiXCIrZSt0fX0pLEI9bigoZnVuY3Rpb24odCxuKXt2YXIgcj1lJiZlLl9fZXh0ZW5kc3x8ZnVuY3Rpb24oKXt2YXIgZT1mdW5jdGlvbih0LG4pe3JldHVybihlPU9iamVjdC5zZXRQcm90b3R5cGVPZnx8e19fcHJvdG9fXzpbXX1pbnN0YW5jZW9mIEFycmF5JiZmdW5jdGlvbihlLHQpe2UuX19wcm90b19fPXR9fHxmdW5jdGlvbihlLHQpe2Zvcih2YXIgbiBpbiB0KXQuaGFzT3duUHJvcGVydHkobikmJihlW25dPXRbbl0pfSkodCxuKX07cmV0dXJuIGZ1bmN0aW9uKHQsbil7ZnVuY3Rpb24gcigpe3RoaXMuY29uc3RydWN0b3I9dH1lKHQsbiksdC5wcm90b3R5cGU9bnVsbD09PW4/T2JqZWN0LmNyZWF0ZShuKTooci5wcm90b3R5cGU9bi5wcm90b3R5cGUsbmV3IHIpfX0oKSxvPWUmJmUuX19hc3NpZ258fGZ1bmN0aW9uKCl7cmV0dXJuKG89T2JqZWN0LmFzc2lnbnx8ZnVuY3Rpb24oZSl7Zm9yKHZhciB0LG49MSxyPWFyZ3VtZW50cy5sZW5ndGg7bjxyO24rKylmb3IodmFyIG8gaW4gdD1hcmd1bWVudHNbbl0pT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHQsbykmJihlW29dPXRbb10pO3JldHVybiBlfSkuYXBwbHkodGhpcyxhcmd1bWVudHMpfSxzPWUmJmUuX19hd2FpdGVyfHxmdW5jdGlvbihlLHQsbixyKXtyZXR1cm4gbmV3KG58fChuPVByb21pc2UpKSgoZnVuY3Rpb24obyxzKXtmdW5jdGlvbiBpKGUpe3RyeXtjKHIubmV4dChlKSl9Y2F0Y2goZSl7cyhlKX19ZnVuY3Rpb24gYShlKXt0cnl7YyhyLnRocm93KGUpKX1jYXRjaChlKXtzKGUpfX1mdW5jdGlvbiBjKGUpe3ZhciB0O2UuZG9uZT9vKGUudmFsdWUpOih0PWUudmFsdWUsdCBpbnN0YW5jZW9mIG4/dDpuZXcgbigoZnVuY3Rpb24oZSl7ZSh0KX0pKSkudGhlbihpLGEpfWMoKHI9ci5hcHBseShlLHR8fFtdKSkubmV4dCgpKX0pKX0saT1lJiZlLl9fZ2VuZXJhdG9yfHxmdW5jdGlvbihlLHQpe3ZhciBuLHIsbyxzLGk9e2xhYmVsOjAsc2VudDpmdW5jdGlvbigpe2lmKDEmb1swXSl0aHJvdyBvWzFdO3JldHVybiBvWzFdfSx0cnlzOltdLG9wczpbXX07cmV0dXJuIHM9e25leHQ6YSgwKSx0aHJvdzphKDEpLHJldHVybjphKDIpfSxcImZ1bmN0aW9uXCI9PXR5cGVvZiBTeW1ib2wmJihzW1N5bWJvbC5pdGVyYXRvcl09ZnVuY3Rpb24oKXtyZXR1cm4gdGhpc30pLHM7ZnVuY3Rpb24gYShzKXtyZXR1cm4gZnVuY3Rpb24oYSl7cmV0dXJuIGZ1bmN0aW9uKHMpe2lmKG4pdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7Zm9yKDtpOyl0cnl7aWYobj0xLHImJihvPTImc1swXT9yLnJldHVybjpzWzBdP3IudGhyb3d8fCgobz1yLnJldHVybikmJm8uY2FsbChyKSwwKTpyLm5leHQpJiYhKG89by5jYWxsKHIsc1sxXSkpLmRvbmUpcmV0dXJuIG87c3dpdGNoKHI9MCxvJiYocz1bMiZzWzBdLG8udmFsdWVdKSxzWzBdKXtjYXNlIDA6Y2FzZSAxOm89czticmVhaztjYXNlIDQ6cmV0dXJuIGkubGFiZWwrKyx7dmFsdWU6c1sxXSxkb25lOiExfTtjYXNlIDU6aS5sYWJlbCsrLHI9c1sxXSxzPVswXTtjb250aW51ZTtjYXNlIDc6cz1pLm9wcy5wb3AoKSxpLnRyeXMucG9wKCk7Y29udGludWU7ZGVmYXVsdDppZighKG89KG89aS50cnlzKS5sZW5ndGg+MCYmb1tvLmxlbmd0aC0xXSkmJig2PT09c1swXXx8Mj09PXNbMF0pKXtpPTA7Y29udGludWV9aWYoMz09PXNbMF0mJighb3x8c1sxXT5vWzBdJiZzWzFdPG9bM10pKXtpLmxhYmVsPXNbMV07YnJlYWt9aWYoNj09PXNbMF0mJmkubGFiZWw8b1sxXSl7aS5sYWJlbD1vWzFdLG89czticmVha31pZihvJiZpLmxhYmVsPG9bMl0pe2kubGFiZWw9b1syXSxpLm9wcy5wdXNoKHMpO2JyZWFrfW9bMl0mJmkub3BzLnBvcCgpLGkudHJ5cy5wb3AoKTtjb250aW51ZX1zPXQuY2FsbChlLGkpfWNhdGNoKGUpe3M9WzYsZV0scj0wfWZpbmFsbHl7bj1vPTB9aWYoNSZzWzBdKXRocm93IHNbMV07cmV0dXJue3ZhbHVlOnNbMF0/c1sxXTp2b2lkIDAsZG9uZTohMH19KFtzLGFdKX19fTtPYmplY3QuZGVmaW5lUHJvcGVydHkobixcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KTt2YXIgYT1mdW5jdGlvbihlKXtmdW5jdGlvbiB0KCl7cmV0dXJuIG51bGwhPT1lJiZlLmFwcGx5KHRoaXMsYXJndW1lbnRzKXx8dGhpc31yZXR1cm4gcih0LGUpLHQucHJvdG90eXBlLmdldD1mdW5jdGlvbihlKXtyZXR1cm4gdGhpcy5fcmVxdWVzdChvKG8oe30sZSkse21ldGhvZDpcImdldFwifSkpfSx0LnByb3RvdHlwZS5wb3N0PWZ1bmN0aW9uKGUpe3JldHVybiB0aGlzLl9yZXF1ZXN0KG8obyh7fSxlKSx7bWV0aG9kOlwicG9zdFwifSkpfSx0LnByb3RvdHlwZS51cGxvYWQ9ZnVuY3Rpb24oZSl7dmFyIHQ9ZS5kYXRhLG49ZS5maWxlLHI9ZS5uYW1lLHM9bmV3IEZvcm1EYXRhO2Zvcih2YXIgaSBpbiB0KXMuYXBwZW5kKGksdFtpXSk7cmV0dXJuIHMuYXBwZW5kKFwia2V5XCIscikscy5hcHBlbmQoXCJmaWxlXCIsbiksdGhpcy5fcmVxdWVzdChvKG8oe30sZSkse2RhdGE6cyxtZXRob2Q6XCJwb3N0XCJ9KSl9LHQucHJvdG90eXBlLmRvd25sb2FkPWZ1bmN0aW9uKGUpe3JldHVybiBzKHRoaXMsdm9pZCAwLHZvaWQgMCwoZnVuY3Rpb24oKXt2YXIgdCxuO3JldHVybiBpKHRoaXMsKGZ1bmN0aW9uKHIpe3JldHVybiB0PWRlY29kZVVSSUNvbXBvbmVudChuZXcgVVJMKGUudXJsKS5wYXRobmFtZS5zcGxpdChcIi9cIikucG9wKCl8fFwiXCIpLChuPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpKS5ocmVmPWUudXJsLG4uc2V0QXR0cmlidXRlKFwiZG93bmxvYWRcIix0KSxuLnNldEF0dHJpYnV0ZShcInRhcmdldFwiLFwiX2JsYW5rXCIpLGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobiksbi5jbGljaygpLFsyLG5ldyBQcm9taXNlKChmdW5jdGlvbih0KXt0KHtzdGF0dXNDb2RlOjIwMCx0ZW1wRmlsZVBhdGg6ZS51cmx9KX0pKV19KSl9KSl9LHQucHJvdG90eXBlLl9yZXF1ZXN0PWZ1bmN0aW9uKGUpe3ZhciB0PVN0cmluZyhlLm1ldGhvZCkudG9Mb3dlckNhc2UoKXx8XCJnZXRcIjtyZXR1cm4gbmV3IFByb21pc2UoKGZ1bmN0aW9uKG4pe3ZhciByPWUudXJsLG89ZS5oZWFkZXJzLHM9dm9pZCAwPT09bz97fTpvLGk9ZS5kYXRhLGE9ZS5yZXNwb25zZVR5cGUsYz1JLmZvcm1hdFVybChLLnByb3RvY29sLHIsXCJnZXRcIj09PXQ/aTp7fSksdT1uZXcgWE1MSHR0cFJlcXVlc3Q7Zm9yKHZhciBsIGluIHUub3Blbih0LGMpLGEmJih1LnJlc3BvbnNlVHlwZT1hKSxzKXUuc2V0UmVxdWVzdEhlYWRlcihsLHNbbF0pO3Uub25yZWFkeXN0YXRlY2hhbmdlPWZ1bmN0aW9uKCl7aWYoND09PXUucmVhZHlTdGF0ZSl7dmFyIGU9e3N0YXR1c0NvZGU6dS5zdGF0dXN9O3RyeXtlLmRhdGE9SlNPTi5wYXJzZSh1LnJlc3BvbnNlVGV4dCl9Y2F0Y2goZSl7fW4oZSl9fSx1LnNlbmQoXCJwb3N0XCI9PT10JiZJLmlzRm9ybURhdGEoaSk/aTpKU09OLnN0cmluZ2lmeShpfHx7fSkpfSkpfSx0fShWLkFic3RyYWN0U0RLUmVxdWVzdCk7bi5XZWJSZXF1ZXN0PWEsbi5nZW5BZGFwdGVyPWZ1bmN0aW9uKCl7cmV0dXJue3Jvb3Q6d2luZG93LHJlcUNsYXNzOmEsd3NDbGFzczpXZWJTb2NrZXQsbG9jYWxTdG9yYWdlOmxvY2FsU3RvcmFnZSxzZXNzaW9uU3RvcmFnZTpzZXNzaW9uU3RvcmFnZX19fSkpO3QoQik7Qi5XZWJSZXF1ZXN0LEIuZ2VuQWRhcHRlcjt2YXIgVz1uKChmdW5jdGlvbih0LG4pe3ZhciByPWUmJmUuX19pbXBvcnRTdGFyfHxmdW5jdGlvbihlKXtpZihlJiZlLl9fZXNNb2R1bGUpcmV0dXJuIGU7dmFyIHQ9e307aWYobnVsbCE9ZSlmb3IodmFyIG4gaW4gZSlPYmplY3QuaGFzT3duUHJvcGVydHkuY2FsbChlLG4pJiYodFtuXT1lW25dKTtyZXR1cm4gdC5kZWZhdWx0PWUsdH07T2JqZWN0LmRlZmluZVByb3BlcnR5KG4sXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSk7dmFyIG8scz1yKEIpOyFmdW5jdGlvbihlKXtlLldFQj1cIndlYlwiLGUuV1hfTVA9XCJ3eF9tcFwifShvPW4uUlVOVElNRXx8KG4uUlVOVElNRT17fSkpLG4udXNlQWRhcHRlcnM9ZnVuY3Rpb24oZSl7Zm9yKHZhciB0PTAsbj1JLmlzQXJyYXkoZSk/ZTpbZV07dDxuLmxlbmd0aDt0Kyspe3ZhciByPW5bdF0sbz1yLmlzTWF0Y2gscz1yLmdlbkFkYXB0ZXIsaT1yLnJ1bnRpbWU7aWYobygpKXJldHVybnthZGFwdGVyOnMoKSxydW50aW1lOml9fX0sbi51c2VEZWZhdWx0QWRhcHRlcj1mdW5jdGlvbigpe3JldHVybnthZGFwdGVyOnMuZ2VuQWRhcHRlcigpLHJ1bnRpbWU6by5XRUJ9fSxuLkFkYXB0ZXI9e2FkYXB0ZXI6bnVsbCxydW50aW1lOnZvaWQgMH19KSk7dChXKTtXLlJVTlRJTUUsVy51c2VBZGFwdGVycyxXLnVzZURlZmF1bHRBZGFwdGVyLFcuQWRhcHRlcjt2YXIgej1uKChmdW5jdGlvbih0LG4pe3ZhciByPWUmJmUuX19leHRlbmRzfHxmdW5jdGlvbigpe3ZhciBlPWZ1bmN0aW9uKHQsbil7cmV0dXJuKGU9T2JqZWN0LnNldFByb3RvdHlwZU9mfHx7X19wcm90b19fOltdfWluc3RhbmNlb2YgQXJyYXkmJmZ1bmN0aW9uKGUsdCl7ZS5fX3Byb3RvX189dH18fGZ1bmN0aW9uKGUsdCl7Zm9yKHZhciBuIGluIHQpdC5oYXNPd25Qcm9wZXJ0eShuKSYmKGVbbl09dFtuXSl9KSh0LG4pfTtyZXR1cm4gZnVuY3Rpb24odCxuKXtmdW5jdGlvbiByKCl7dGhpcy5jb25zdHJ1Y3Rvcj10fWUodCxuKSx0LnByb3RvdHlwZT1udWxsPT09bj9PYmplY3QuY3JlYXRlKG4pOihyLnByb3RvdHlwZT1uLnByb3RvdHlwZSxuZXcgcil9fSgpO09iamVjdC5kZWZpbmVQcm9wZXJ0eShuLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pO3ZhciBvPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gZShlKXtzd2l0Y2goVy5BZGFwdGVyLmFkYXB0ZXIucHJpbWFyeVN0b3JhZ2V8fGUpe2Nhc2VcImxvY2FsXCI6dGhpcy5zdG9yYWdlQ2xhc3M9Vy5BZGFwdGVyLmFkYXB0ZXIubG9jYWxTdG9yYWdlfHxuZXcgczticmVhaztjYXNlXCJub25lXCI6dGhpcy5zdG9yYWdlQ2xhc3M9bmV3IHM7YnJlYWs7ZGVmYXVsdDp0aGlzLnN0b3JhZ2VDbGFzcz1XLkFkYXB0ZXIuYWRhcHRlci5zZXNzaW9uU3RvcmFnZXx8bmV3IHN9fXJldHVybiBlLnByb3RvdHlwZS5zZXRTdG9yZT1mdW5jdGlvbihlLHQsbil7dHJ5e2lmKCF0aGlzLnN0b3JhZ2VDbGFzcylyZXR1cm59Y2F0Y2goZSl7cmV0dXJufXZhciByLG89e307by52ZXJzaW9uPW58fFwibG9jYWxDYWNoZXYxXCIsby5jb250ZW50PXQscj1KU09OLnN0cmluZ2lmeShvKTt0cnl7dGhpcy5zdG9yYWdlQ2xhc3Muc2V0SXRlbShlLHIpfWNhdGNoKGUpe3JldHVybn19LGUucHJvdG90eXBlLmdldFN0b3JlPWZ1bmN0aW9uKGUsdCl7dHJ5e2lmKCF0aGlzLnN0b3JhZ2VDbGFzcylyZXR1cm59Y2F0Y2goZSl7cmV0dXJuXCJcIn10PXR8fFwibG9jYWxDYWNoZXYxXCI7dmFyIG49dGhpcy5zdG9yYWdlQ2xhc3MuZ2V0SXRlbShlKTtyZXR1cm4gbiYmbi5pbmRleE9mKHQpPj0wP0pTT04ucGFyc2UobikuY29udGVudDpcIlwifSxlLnByb3RvdHlwZS5yZW1vdmVTdG9yZT1mdW5jdGlvbihlKXt0aGlzLnN0b3JhZ2VDbGFzcy5yZW1vdmVJdGVtKGUpfSxlfSgpO24uQ2FjaGU9bzt2YXIgcz1mdW5jdGlvbihlKXtmdW5jdGlvbiB0KCl7dmFyIHQ9ZS5jYWxsKHRoaXMpfHx0aGlzO3JldHVybiBXLkFkYXB0ZXIuYWRhcHRlci5yb290LnRjYk9iamVjdHx8KFcuQWRhcHRlci5hZGFwdGVyLnJvb3QudGNiT2JqZWN0PXt9KSx0fXJldHVybiByKHQsZSksdC5wcm90b3R5cGUuc2V0SXRlbT1mdW5jdGlvbihlLHQpe1cuQWRhcHRlci5hZGFwdGVyLnJvb3QudGNiT2JqZWN0W2VdPXR9LHQucHJvdG90eXBlLmdldEl0ZW09ZnVuY3Rpb24oZSl7cmV0dXJuIFcuQWRhcHRlci5hZGFwdGVyLnJvb3QudGNiT2JqZWN0W2VdfSx0LnByb3RvdHlwZS5yZW1vdmVJdGVtPWZ1bmN0aW9uKGUpe2RlbGV0ZSBXLkFkYXB0ZXIuYWRhcHRlci5yb290LnRjYk9iamVjdFtlXX0sdC5wcm90b3R5cGUuY2xlYXI9ZnVuY3Rpb24oKXtkZWxldGUgVy5BZGFwdGVyLmFkYXB0ZXIucm9vdC50Y2JPYmplY3R9LHR9KFYuQWJzdHJhY3RTdG9yYWdlKX0pKTt0KHopO3ouQ2FjaGU7dmFyIEo9bigoZnVuY3Rpb24odCxuKXt2YXIgcj1lJiZlLl9fZXh0ZW5kc3x8ZnVuY3Rpb24oKXt2YXIgZT1mdW5jdGlvbih0LG4pe3JldHVybihlPU9iamVjdC5zZXRQcm90b3R5cGVPZnx8e19fcHJvdG9fXzpbXX1pbnN0YW5jZW9mIEFycmF5JiZmdW5jdGlvbihlLHQpe2UuX19wcm90b19fPXR9fHxmdW5jdGlvbihlLHQpe2Zvcih2YXIgbiBpbiB0KXQuaGFzT3duUHJvcGVydHkobikmJihlW25dPXRbbl0pfSkodCxuKX07cmV0dXJuIGZ1bmN0aW9uKHQsbil7ZnVuY3Rpb24gcigpe3RoaXMuY29uc3RydWN0b3I9dH1lKHQsbiksdC5wcm90b3R5cGU9bnVsbD09PW4/T2JqZWN0LmNyZWF0ZShuKTooci5wcm90b3R5cGU9bi5wcm90b3R5cGUsbmV3IHIpfX0oKSxvPWUmJmUuX19zcHJlYWRBcnJheXN8fGZ1bmN0aW9uKCl7Zm9yKHZhciBlPTAsdD0wLG49YXJndW1lbnRzLmxlbmd0aDt0PG47dCsrKWUrPWFyZ3VtZW50c1t0XS5sZW5ndGg7dmFyIHI9QXJyYXkoZSksbz0wO2Zvcih0PTA7dDxuO3QrKylmb3IodmFyIHM9YXJndW1lbnRzW3RdLGk9MCxhPXMubGVuZ3RoO2k8YTtpKyssbysrKXJbb109c1tpXTtyZXR1cm4gcn07T2JqZWN0LmRlZmluZVByb3BlcnR5KG4sXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSk7dmFyIHM9ZnVuY3Rpb24oZSx0KXt0aGlzLmRhdGE9dHx8bnVsbCx0aGlzLm5hbWU9ZX07bi5JRXZlbnQ9czt2YXIgaT1mdW5jdGlvbihlKXtmdW5jdGlvbiB0KHQsbil7dmFyIHI9ZS5jYWxsKHRoaXMsXCJlcnJvclwiLHtlcnJvcjp0LGRhdGE6bn0pfHx0aGlzO3JldHVybiByLmVycm9yPXQscn1yZXR1cm4gcih0LGUpLHR9KHMpO24uSUVycm9yRXZlbnQ9aTt2YXIgYT1mdW5jdGlvbigpe2Z1bmN0aW9uIGUoKXt0aGlzLl9saXN0ZW5lcnM9e319cmV0dXJuIGUucHJvdG90eXBlLm9uPWZ1bmN0aW9uKGUsdCl7cmV0dXJuIGZ1bmN0aW9uKGUsdCxuKXtuW2VdPW5bZV18fFtdLG5bZV0ucHVzaCh0KX0oZSx0LHRoaXMuX2xpc3RlbmVycyksdGhpc30sZS5wcm90b3R5cGUub2ZmPWZ1bmN0aW9uKGUsdCl7cmV0dXJuIGZ1bmN0aW9uKGUsdCxuKXtpZihuJiZuW2VdKXt2YXIgcj1uW2VdLmluZGV4T2YodCk7LTEhPT1yJiZuW2VdLnNwbGljZShyLDEpfX0oZSx0LHRoaXMuX2xpc3RlbmVycyksdGhpc30sZS5wcm90b3R5cGUuZmlyZT1mdW5jdGlvbihlLHQpe2lmKEkuaXNJbnN0YW5jZU9mKGUsaSkpcmV0dXJuIGNvbnNvbGUuZXJyb3IoZS5lcnJvciksdGhpczt2YXIgbj1JLmlzU3RyaW5nKGUpP25ldyBzKGUsdHx8e30pOmUscj1uLm5hbWU7aWYodGhpcy5fbGlzdGVucyhyKSl7bi50YXJnZXQ9dGhpcztmb3IodmFyIGE9MCxjPXRoaXMuX2xpc3RlbmVyc1tyXT9vKHRoaXMuX2xpc3RlbmVyc1tyXSk6W107YTxjLmxlbmd0aDthKyspe2NbYV0uY2FsbCh0aGlzLG4pfX1yZXR1cm4gdGhpc30sZS5wcm90b3R5cGUuX2xpc3RlbnM9ZnVuY3Rpb24oZSl7cmV0dXJuIHRoaXMuX2xpc3RlbmVyc1tlXSYmdGhpcy5fbGlzdGVuZXJzW2VdLmxlbmd0aD4wfSxlfSgpO24uSUV2ZW50RW1pdHRlcj1hO3ZhciBjPW5ldyBhO24uYWRkRXZlbnRMaXN0ZW5lcj1mdW5jdGlvbihlLHQpe2Mub24oZSx0KX0sbi5hY3RpdmF0ZUV2ZW50PWZ1bmN0aW9uKGUsdCl7dm9pZCAwPT09dCYmKHQ9e30pLGMuZmlyZShlLHQpfSxuLnJlbW92ZUV2ZW50TGlzdGVuZXI9ZnVuY3Rpb24oZSx0KXtjLm9mZihlLHQpfSxuLkVWRU5UUz17TE9HSU5fU1RBVEVfQ0hBTkdFRDpcImxvZ2luU3RhdGVDaGFuZ2VkXCIsTE9HSU5fU1RBVEVfRVhQSVJFOlwibG9naW5TdGF0ZUV4cGlyZVwiLExPR0lOX1RZUEVfQ0hBTkdFOlwibG9naW5UeXBlQ2hhbmdlZFwiLEFOT05ZTU9VU19DT05WRVJURUQ6XCJhbm9ueW1vdXNDb252ZXJ0ZWRcIixSRUZSRVNIX0FDQ0VTU19UT0tFTjpcInJlZnJlc2hBY2Nlc3NUb2tlblwifX0pKTt0KEopO0ouSUV2ZW50LEouSUVycm9yRXZlbnQsSi5JRXZlbnRFbWl0dGVyLEouYWRkRXZlbnRMaXN0ZW5lcixKLmFjdGl2YXRlRXZlbnQsSi5yZW1vdmVFdmVudExpc3RlbmVyLEouRVZFTlRTO3ZhciBYPW4oKGZ1bmN0aW9uKHQsbil7dmFyIHI9ZSYmZS5fX2Fzc2lnbnx8ZnVuY3Rpb24oKXtyZXR1cm4ocj1PYmplY3QuYXNzaWdufHxmdW5jdGlvbihlKXtmb3IodmFyIHQsbj0xLHI9YXJndW1lbnRzLmxlbmd0aDtuPHI7bisrKWZvcih2YXIgbyBpbiB0PWFyZ3VtZW50c1tuXSlPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwodCxvKSYmKGVbb109dFtvXSk7cmV0dXJuIGV9KS5hcHBseSh0aGlzLGFyZ3VtZW50cyl9LG89ZSYmZS5fX2F3YWl0ZXJ8fGZ1bmN0aW9uKGUsdCxuLHIpe3JldHVybiBuZXcobnx8KG49UHJvbWlzZSkpKChmdW5jdGlvbihvLHMpe2Z1bmN0aW9uIGkoZSl7dHJ5e2Moci5uZXh0KGUpKX1jYXRjaChlKXtzKGUpfX1mdW5jdGlvbiBhKGUpe3RyeXtjKHIudGhyb3coZSkpfWNhdGNoKGUpe3MoZSl9fWZ1bmN0aW9uIGMoZSl7dmFyIHQ7ZS5kb25lP28oZS52YWx1ZSk6KHQ9ZS52YWx1ZSx0IGluc3RhbmNlb2Ygbj90Om5ldyBuKChmdW5jdGlvbihlKXtlKHQpfSkpKS50aGVuKGksYSl9Yygocj1yLmFwcGx5KGUsdHx8W10pKS5uZXh0KCkpfSkpfSxzPWUmJmUuX19nZW5lcmF0b3J8fGZ1bmN0aW9uKGUsdCl7dmFyIG4scixvLHMsaT17bGFiZWw6MCxzZW50OmZ1bmN0aW9uKCl7aWYoMSZvWzBdKXRocm93IG9bMV07cmV0dXJuIG9bMV19LHRyeXM6W10sb3BzOltdfTtyZXR1cm4gcz17bmV4dDphKDApLHRocm93OmEoMSkscmV0dXJuOmEoMil9LFwiZnVuY3Rpb25cIj09dHlwZW9mIFN5bWJvbCYmKHNbU3ltYm9sLml0ZXJhdG9yXT1mdW5jdGlvbigpe3JldHVybiB0aGlzfSkscztmdW5jdGlvbiBhKHMpe3JldHVybiBmdW5jdGlvbihhKXtyZXR1cm4gZnVuY3Rpb24ocyl7aWYobil0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtmb3IoO2k7KXRyeXtpZihuPTEsciYmKG89MiZzWzBdP3IucmV0dXJuOnNbMF0/ci50aHJvd3x8KChvPXIucmV0dXJuKSYmby5jYWxsKHIpLDApOnIubmV4dCkmJiEobz1vLmNhbGwocixzWzFdKSkuZG9uZSlyZXR1cm4gbztzd2l0Y2gocj0wLG8mJihzPVsyJnNbMF0sby52YWx1ZV0pLHNbMF0pe2Nhc2UgMDpjYXNlIDE6bz1zO2JyZWFrO2Nhc2UgNDpyZXR1cm4gaS5sYWJlbCsrLHt2YWx1ZTpzWzFdLGRvbmU6ITF9O2Nhc2UgNTppLmxhYmVsKysscj1zWzFdLHM9WzBdO2NvbnRpbnVlO2Nhc2UgNzpzPWkub3BzLnBvcCgpLGkudHJ5cy5wb3AoKTtjb250aW51ZTtkZWZhdWx0OmlmKCEobz0obz1pLnRyeXMpLmxlbmd0aD4wJiZvW28ubGVuZ3RoLTFdKSYmKDY9PT1zWzBdfHwyPT09c1swXSkpe2k9MDtjb250aW51ZX1pZigzPT09c1swXSYmKCFvfHxzWzFdPm9bMF0mJnNbMV08b1szXSkpe2kubGFiZWw9c1sxXTticmVha31pZig2PT09c1swXSYmaS5sYWJlbDxvWzFdKXtpLmxhYmVsPW9bMV0sbz1zO2JyZWFrfWlmKG8mJmkubGFiZWw8b1syXSl7aS5sYWJlbD1vWzJdLGkub3BzLnB1c2gocyk7YnJlYWt9b1syXSYmaS5vcHMucG9wKCksaS50cnlzLnBvcCgpO2NvbnRpbnVlfXM9dC5jYWxsKGUsaSl9Y2F0Y2goZSl7cz1bNixlXSxyPTB9ZmluYWxseXtuPW89MH1pZig1JnNbMF0pdGhyb3cgc1sxXTtyZXR1cm57dmFsdWU6c1swXT9zWzFdOnZvaWQgMCxkb25lOiEwfX0oW3MsYV0pfX19O09iamVjdC5kZWZpbmVQcm9wZXJ0eShuLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pO3ZhciBpPVtcImF1dGguZ2V0Snd0XCIsXCJhdXRoLmxvZ291dFwiLFwiYXV0aC5zaWduSW5XaXRoVGlja2V0XCIsXCJhdXRoLnNpZ25JbkFub255bW91c2x5XCJdLGE9e1wiWC1TREstVmVyc2lvblwiOksuU0RLX1ZFUklTT059O2Z1bmN0aW9uIGMoZSx0LG4pe3ZhciBvPWVbdF07ZVt0XT1mdW5jdGlvbih0KXt2YXIgcz17fSxpPXt9O24uZm9yRWFjaCgoZnVuY3Rpb24obil7dmFyIHI9bi5jYWxsKGUsdCksbz1yLmRhdGEsYT1yLmhlYWRlcnM7T2JqZWN0LmFzc2lnbihzLG8pLE9iamVjdC5hc3NpZ24oaSxhKX0pKTt2YXIgYT10LmRhdGE7cmV0dXJuIGEmJmZ1bmN0aW9uKCl7aWYoSS5pc0Zvcm1EYXRhKGEpKWZvcih2YXIgZSBpbiBzKWEuYXBwZW5kKGUsc1tlXSk7ZWxzZSB0LmRhdGE9cihyKHt9LGEpLHMpfSgpLHQuaGVhZGVycz1yKHIoe30sdC5oZWFkZXJzfHx7fSksaSksby5jYWxsKGUsdCl9fWZ1bmN0aW9uIHUoKXt2YXIgZT1JLmdlblNlcUlkKCk7cmV0dXJue2RhdGE6e3NlcUlkOmV9LGhlYWRlcnM6cihyKHt9LGEpLHtcIngtc2VxaWRcIjplfSl9fXZhciBsPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gZShlKXt2b2lkIDA9PT1lJiYoZT17fSksdGhpcy5jb25maWc9ZSx0aGlzLmNhY2hlPW5ldyB6LkNhY2hlKGUucGVyc2lzdGVuY2UpLHRoaXMuYWNjZXNzVG9rZW5LZXk9Sy5BQ0NFU1NfVE9LRU4rXCJfXCIrZS5lbnYsdGhpcy5hY2Nlc3NUb2tlbkV4cGlyZUtleT1LLkFDQ0VTU19UT0tFTl9FeHBpcmUrXCJfXCIrZS5lbnYsdGhpcy5yZWZyZXNoVG9rZW5LZXk9Sy5SRUZSRVNIX1RPS0VOK1wiX1wiK2UuZW52LHRoaXMuYW5vbnltb3VzVXVpZEtleT1LLkFOT05ZTU9VU19VVUlEK1wiX1wiK2UuZW52LHRoaXMubG9naW5UeXBlS2V5PUsuTE9HSU5fVFlQRV9LRVkrXCJfXCIrZS5lbnYsdGhpcy5fcmVxQ2xhc3M9bmV3IFcuQWRhcHRlci5hZGFwdGVyLnJlcUNsYXNzLGModGhpcy5fcmVxQ2xhc3MsXCJwb3N0XCIsW3VdKSxjKHRoaXMuX3JlcUNsYXNzLFwidXBsb2FkXCIsW3VdKSxjKHRoaXMuX3JlcUNsYXNzLFwiZG93bmxvYWRcIixbdV0pfXJldHVybiBlLnByb3RvdHlwZS5wb3N0PWZ1bmN0aW9uKGUpe3JldHVybiBvKHRoaXMsdm9pZCAwLHZvaWQgMCwoZnVuY3Rpb24oKXtyZXR1cm4gcyh0aGlzLChmdW5jdGlvbih0KXtzd2l0Y2godC5sYWJlbCl7Y2FzZSAwOnJldHVybls0LHRoaXMuX3JlcUNsYXNzLnBvc3QoZSldO2Nhc2UgMTpyZXR1cm5bMix0LnNlbnQoKV19fSkpfSkpfSxlLnByb3RvdHlwZS51cGxvYWQ9ZnVuY3Rpb24oZSl7cmV0dXJuIG8odGhpcyx2b2lkIDAsdm9pZCAwLChmdW5jdGlvbigpe3JldHVybiBzKHRoaXMsKGZ1bmN0aW9uKHQpe3N3aXRjaCh0LmxhYmVsKXtjYXNlIDA6cmV0dXJuWzQsdGhpcy5fcmVxQ2xhc3MudXBsb2FkKGUpXTtjYXNlIDE6cmV0dXJuWzIsdC5zZW50KCldfX0pKX0pKX0sZS5wcm90b3R5cGUuZG93bmxvYWQ9ZnVuY3Rpb24oZSl7cmV0dXJuIG8odGhpcyx2b2lkIDAsdm9pZCAwLChmdW5jdGlvbigpe3JldHVybiBzKHRoaXMsKGZ1bmN0aW9uKHQpe3N3aXRjaCh0LmxhYmVsKXtjYXNlIDA6cmV0dXJuWzQsdGhpcy5fcmVxQ2xhc3MuZG93bmxvYWQoZSldO2Nhc2UgMTpyZXR1cm5bMix0LnNlbnQoKV19fSkpfSkpfSxlLnByb3RvdHlwZS5yZWZyZXNoQWNjZXNzVG9rZW49ZnVuY3Rpb24oKXtyZXR1cm4gbyh0aGlzLHZvaWQgMCx2b2lkIDAsKGZ1bmN0aW9uKCl7dmFyIGUsdCxuO3JldHVybiBzKHRoaXMsKGZ1bmN0aW9uKHIpe3N3aXRjaChyLmxhYmVsKXtjYXNlIDA6dGhpcy5fcmVmcmVzaEFjY2Vzc1Rva2VuUHJvbWlzZXx8KHRoaXMuX3JlZnJlc2hBY2Nlc3NUb2tlblByb21pc2U9dGhpcy5fcmVmcmVzaEFjY2Vzc1Rva2VuKCkpLHIubGFiZWw9MTtjYXNlIDE6cmV0dXJuIHIudHJ5cy5wdXNoKFsxLDMsLDRdKSxbNCx0aGlzLl9yZWZyZXNoQWNjZXNzVG9rZW5Qcm9taXNlXTtjYXNlIDI6cmV0dXJuIGU9ci5zZW50KCksWzMsNF07Y2FzZSAzOnJldHVybiBuPXIuc2VudCgpLHQ9bixbMyw0XTtjYXNlIDQ6aWYodGhpcy5fcmVmcmVzaEFjY2Vzc1Rva2VuUHJvbWlzZT1udWxsLHRoaXMuX3Nob3VsZFJlZnJlc2hBY2Nlc3NUb2tlbkhvb2s9bnVsbCx0KXRocm93IHQ7cmV0dXJuWzIsZV19fSkpfSkpfSxlLnByb3RvdHlwZS5fcmVmcmVzaEFjY2Vzc1Rva2VuPWZ1bmN0aW9uKCl7cmV0dXJuIG8odGhpcyx2b2lkIDAsdm9pZCAwLChmdW5jdGlvbigpe3ZhciBlLHQsbixyO3JldHVybiBzKHRoaXMsKGZ1bmN0aW9uKG8pe3N3aXRjaChvLmxhYmVsKXtjYXNlIDA6aWYodGhpcy5jYWNoZS5yZW1vdmVTdG9yZSh0aGlzLmFjY2Vzc1Rva2VuS2V5KSx0aGlzLmNhY2hlLnJlbW92ZVN0b3JlKHRoaXMuYWNjZXNzVG9rZW5FeHBpcmVLZXkpLCEoZT10aGlzLmNhY2hlLmdldFN0b3JlKHRoaXMucmVmcmVzaFRva2VuS2V5KSkpdGhyb3cgbmV3IEVycm9yKFwiW3RjYi1qcy1zZGtdIOacqueZu+W9lUNsb3VkQmFzZVwiKTtyZXR1cm4gdD17cmVmcmVzaF90b2tlbjplfSx0aGlzLmNhY2hlLmdldFN0b3JlKHRoaXMubG9naW5UeXBlS2V5KT09PSQuTE9HSU5UWVBFLkFOT05ZTU9VUyYmKHQuYW5vbnltb3VzX3V1aWQ9dGhpcy5jYWNoZS5nZXRTdG9yZSh0aGlzLmFub255bW91c1V1aWRLZXkpKSxbNCx0aGlzLnJlcXVlc3QoXCJhdXRoLmdldEp3dFwiLHQpXTtjYXNlIDE6aWYoKG49by5zZW50KCkpLmRhdGEuY29kZSl0aHJvd1wiU0lHTl9QQVJBTV9JTlZBTElEXCIhPT0ocj1uLmRhdGEuY29kZSkmJlwiUkVGUkVTSF9UT0tFTl9FWFBJUkVEXCIhPT1yJiZcIklOVkFMSURfUkVGUkVTSF9UT0tFTlwiIT09cnx8KEouYWN0aXZhdGVFdmVudChKLkVWRU5UUy5MT0dJTl9TVEFURV9FWFBJUkUpLHRoaXMuY2FjaGUucmVtb3ZlU3RvcmUodGhpcy5yZWZyZXNoVG9rZW5LZXkpKSxuZXcgRXJyb3IoXCJbdGNiLWpzLXNka10g5Yi35pawYWNjZXNzIHRva2Vu5aSx6LSl77yaXCIrbi5kYXRhLmNvZGUpO3JldHVybiBuLmRhdGEuYWNjZXNzX3Rva2VuPyhKLmFjdGl2YXRlRXZlbnQoSi5FVkVOVFMuUkVGUkVTSF9BQ0NFU1NfVE9LRU4pLHRoaXMuY2FjaGUuc2V0U3RvcmUodGhpcy5hY2Nlc3NUb2tlbktleSxuLmRhdGEuYWNjZXNzX3Rva2VuKSx0aGlzLmNhY2hlLnNldFN0b3JlKHRoaXMuYWNjZXNzVG9rZW5FeHBpcmVLZXksbi5kYXRhLmFjY2Vzc190b2tlbl9leHBpcmUrRGF0ZS5ub3coKSksSi5hY3RpdmF0ZUV2ZW50KEouRVZFTlRTLkxPR0lOX1RZUEVfQ0hBTkdFLG4uZGF0YS5sb2dpbl90eXBlKSxbMix7YWNjZXNzVG9rZW46bi5kYXRhLmFjY2Vzc190b2tlbixhY2Nlc3NUb2tlbkV4cGlyZTpuLmRhdGEuYWNjZXNzX3Rva2VuX2V4cGlyZX1dKToobi5kYXRhLnJlZnJlc2hfdG9rZW4mJih0aGlzLmNhY2hlLnJlbW92ZVN0b3JlKHRoaXMucmVmcmVzaFRva2VuS2V5KSx0aGlzLmNhY2hlLnNldFN0b3JlKHRoaXMucmVmcmVzaFRva2VuS2V5LG4uZGF0YS5yZWZyZXNoX3Rva2VuKSx0aGlzLl9yZWZyZXNoQWNjZXNzVG9rZW4oKSksWzJdKX19KSl9KSl9LGUucHJvdG90eXBlLmdldEFjY2Vzc1Rva2VuPWZ1bmN0aW9uKCl7cmV0dXJuIG8odGhpcyx2b2lkIDAsdm9pZCAwLChmdW5jdGlvbigpe3ZhciBlLHQsbixyO3JldHVybiBzKHRoaXMsKGZ1bmN0aW9uKG8pe3N3aXRjaChvLmxhYmVsKXtjYXNlIDA6cmV0dXJuIGU9dGhpcy5jYWNoZS5nZXRTdG9yZSh0aGlzLmFjY2Vzc1Rva2VuS2V5KSx0PXRoaXMuY2FjaGUuZ2V0U3RvcmUodGhpcy5hY2Nlc3NUb2tlbkV4cGlyZUtleSksbj0hMCwocj10aGlzLl9zaG91bGRSZWZyZXNoQWNjZXNzVG9rZW5Ib29rKT9bNCx0aGlzLl9zaG91bGRSZWZyZXNoQWNjZXNzVG9rZW5Ib29rKGUsdCldOlszLDJdO2Nhc2UgMTpyPSFvLnNlbnQoKSxvLmxhYmVsPTI7Y2FzZSAyOnJldHVybiByJiYobj0hMSksKCFlfHwhdHx8dDxEYXRlLm5vdygpKSYmbj9bMix0aGlzLnJlZnJlc2hBY2Nlc3NUb2tlbigpXTpbMix7YWNjZXNzVG9rZW46ZSxhY2Nlc3NUb2tlbkV4cGlyZTp0fV19fSkpfSkpfSxlLnByb3RvdHlwZS5yZXF1ZXN0PWZ1bmN0aW9uKGUsdCxuKXtyZXR1cm4gbyh0aGlzLHZvaWQgMCx2b2lkIDAsKGZ1bmN0aW9uKCl7dmFyIG8sYSxjLHUsbCxmLHAsaCxkLHksdixnO3JldHVybiBzKHRoaXMsKGZ1bmN0aW9uKHMpe3N3aXRjaChzLmxhYmVsKXtjYXNlIDA6cmV0dXJuIG89XCJhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWRcIixhPXIoe2FjdGlvbjplLGVudjp0aGlzLmNvbmZpZy5lbnYsZGF0YVZlcnNpb246XCIyMDE5LTA4LTE2XCJ9LHQpLC0xIT09aS5pbmRleE9mKGUpP1szLDJdOihjPWEsWzQsdGhpcy5nZXRBY2Nlc3NUb2tlbigpXSk7Y2FzZSAxOmMuYWNjZXNzX3Rva2VuPXMuc2VudCgpLmFjY2Vzc1Rva2VuLHMubGFiZWw9MjtjYXNlIDI6aWYoXCJzdG9yYWdlLnVwbG9hZEZpbGVcIj09PWUpe2ZvcihsIGluIHU9bmV3IEZvcm1EYXRhKXUuaGFzT3duUHJvcGVydHkobCkmJnZvaWQgMCE9PXVbbF0mJnUuYXBwZW5kKGwsYVtsXSk7bz1cIm11bHRpcGFydC9mb3JtLWRhdGFcIn1lbHNlIG89XCJhcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9VVRGLThcIix1PWE7cmV0dXJuIGY9e2hlYWRlcnM6e1wiY29udGVudC10eXBlXCI6b319LG4mJm4ub25VcGxvYWRQcm9ncmVzcyYmKGYub25VcGxvYWRQcm9ncmVzcz1uLm9uVXBsb2FkUHJvZ3Jlc3MpLHA9dC5wYXJzZSxoPXQucXVlcnksZD10LnNlYXJjaCx5PXtlbnY6dGhpcy5jb25maWcuZW52fSxwJiYoeS5wYXJzZT0hMCksaCYmKHk9cihyKHt9LGgpLHkpKSx2PUkuZm9ybWF0VXJsKEsucHJvdG9jb2wsSy5CQVNFX1VSTCx5KSxkJiYodis9ZCksWzQsdGhpcy5wb3N0KHIoe3VybDp2LGRhdGE6dX0sZikpXTtjYXNlIDM6aWYoZz1zLnNlbnQoKSwyMDAhPT1OdW1iZXIoZy5zdGF0dXMpJiYyMDAhPT1OdW1iZXIoZy5zdGF0dXNDb2RlKXx8IWcuZGF0YSl0aHJvdyBuZXcgRXJyb3IoXCJuZXR3b3JrIHJlcXVlc3QgZXJyb3JcIik7cmV0dXJuWzIsZ119fSkpfSkpfSxlLnByb3RvdHlwZS5zZW5kPWZ1bmN0aW9uKGUsdCl7cmV0dXJuIHZvaWQgMD09PXQmJih0PXt9KSxvKHRoaXMsdm9pZCAwLHZvaWQgMCwoZnVuY3Rpb24oKXt2YXIgbixyLG87cmV0dXJuIHModGhpcywoZnVuY3Rpb24ocyl7c3dpdGNoKHMubGFiZWwpe2Nhc2UgMDpyZXR1cm4gbj1zZXRUaW1lb3V0KChmdW5jdGlvbigpe2NvbnNvbGUud2FybihcIkRhdGFiYXNlIG9wZXJhdGlvbiBpcyBsb25nZXIgdGhhbiAzcy4gUGxlYXNlIGNoZWNrIHF1ZXJ5IHBlcmZvcm1hbmNlIGFuZCB5b3VyIG5ldHdvcmsgZW52aXJvbm1lbnQuXCIpfSksM2UzKSxbNCx0aGlzLnJlcXVlc3QoZSx0LHtvblVwbG9hZFByb2dyZXNzOnQub25VcGxvYWRQcm9ncmVzc30pXTtjYXNlIDE6cmV0dXJuIHI9cy5zZW50KCksY2xlYXJUaW1lb3V0KG4pLFwiQUNDRVNTX1RPS0VOX0VYUElSRURcIiE9PXIuZGF0YS5jb2RlfHwtMSE9PWkuaW5kZXhPZihlKT9bMyw0XTpbNCx0aGlzLnJlZnJlc2hBY2Nlc3NUb2tlbigpXTtjYXNlIDI6cmV0dXJuIHMuc2VudCgpLFs0LHRoaXMucmVxdWVzdChlLHQse29uVXBsb2FkUHJvZ3Jlc3M6dC5vblVwbG9hZFByb2dyZXNzfSldO2Nhc2UgMzppZigobz1zLnNlbnQoKSkuZGF0YS5jb2RlKXRocm93IG5ldyBFcnJvcihcIltcIitvLmRhdGEuY29kZStcIl0gXCIrby5kYXRhLm1lc3NhZ2UpO3JldHVyblsyLG8uZGF0YV07Y2FzZSA0OmlmKHIuZGF0YS5jb2RlKXRocm93IG5ldyBFcnJvcihcIltcIityLmRhdGEuY29kZStcIl0gXCIrci5kYXRhLm1lc3NhZ2UpO3JldHVyblsyLHIuZGF0YV19fSkpfSkpfSxlfSgpO24uUmVxdWVzdD1sfSkpO3QoWCk7WC5SZXF1ZXN0O3ZhciAkPW4oKGZ1bmN0aW9uKHQsbil7dmFyIHIsbz1lJiZlLl9fYXdhaXRlcnx8ZnVuY3Rpb24oZSx0LG4scil7cmV0dXJuIG5ldyhufHwobj1Qcm9taXNlKSkoKGZ1bmN0aW9uKG8scyl7ZnVuY3Rpb24gaShlKXt0cnl7YyhyLm5leHQoZSkpfWNhdGNoKGUpe3MoZSl9fWZ1bmN0aW9uIGEoZSl7dHJ5e2Moci50aHJvdyhlKSl9Y2F0Y2goZSl7cyhlKX19ZnVuY3Rpb24gYyhlKXt2YXIgdDtlLmRvbmU/byhlLnZhbHVlKToodD1lLnZhbHVlLHQgaW5zdGFuY2VvZiBuP3Q6bmV3IG4oKGZ1bmN0aW9uKGUpe2UodCl9KSkpLnRoZW4oaSxhKX1jKChyPXIuYXBwbHkoZSx0fHxbXSkpLm5leHQoKSl9KSl9LHM9ZSYmZS5fX2dlbmVyYXRvcnx8ZnVuY3Rpb24oZSx0KXt2YXIgbixyLG8scyxpPXtsYWJlbDowLHNlbnQ6ZnVuY3Rpb24oKXtpZigxJm9bMF0pdGhyb3cgb1sxXTtyZXR1cm4gb1sxXX0sdHJ5czpbXSxvcHM6W119O3JldHVybiBzPXtuZXh0OmEoMCksdGhyb3c6YSgxKSxyZXR1cm46YSgyKX0sXCJmdW5jdGlvblwiPT10eXBlb2YgU3ltYm9sJiYoc1tTeW1ib2wuaXRlcmF0b3JdPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXN9KSxzO2Z1bmN0aW9uIGEocyl7cmV0dXJuIGZ1bmN0aW9uKGEpe3JldHVybiBmdW5jdGlvbihzKXtpZihuKXRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO2Zvcig7aTspdHJ5e2lmKG49MSxyJiYobz0yJnNbMF0/ci5yZXR1cm46c1swXT9yLnRocm93fHwoKG89ci5yZXR1cm4pJiZvLmNhbGwociksMCk6ci5uZXh0KSYmIShvPW8uY2FsbChyLHNbMV0pKS5kb25lKXJldHVybiBvO3N3aXRjaChyPTAsbyYmKHM9WzImc1swXSxvLnZhbHVlXSksc1swXSl7Y2FzZSAwOmNhc2UgMTpvPXM7YnJlYWs7Y2FzZSA0OnJldHVybiBpLmxhYmVsKysse3ZhbHVlOnNbMV0sZG9uZTohMX07Y2FzZSA1OmkubGFiZWwrKyxyPXNbMV0scz1bMF07Y29udGludWU7Y2FzZSA3OnM9aS5vcHMucG9wKCksaS50cnlzLnBvcCgpO2NvbnRpbnVlO2RlZmF1bHQ6aWYoIShvPShvPWkudHJ5cykubGVuZ3RoPjAmJm9bby5sZW5ndGgtMV0pJiYoNj09PXNbMF18fDI9PT1zWzBdKSl7aT0wO2NvbnRpbnVlfWlmKDM9PT1zWzBdJiYoIW98fHNbMV0+b1swXSYmc1sxXTxvWzNdKSl7aS5sYWJlbD1zWzFdO2JyZWFrfWlmKDY9PT1zWzBdJiZpLmxhYmVsPG9bMV0pe2kubGFiZWw9b1sxXSxvPXM7YnJlYWt9aWYobyYmaS5sYWJlbDxvWzJdKXtpLmxhYmVsPW9bMl0saS5vcHMucHVzaChzKTticmVha31vWzJdJiZpLm9wcy5wb3AoKSxpLnRyeXMucG9wKCk7Y29udGludWV9cz10LmNhbGwoZSxpKX1jYXRjaChlKXtzPVs2LGVdLHI9MH1maW5hbGx5e249bz0wfWlmKDUmc1swXSl0aHJvdyBzWzFdO3JldHVybnt2YWx1ZTpzWzBdP3NbMV06dm9pZCAwLGRvbmU6ITB9fShbcyxhXSl9fX07T2JqZWN0LmRlZmluZVByb3BlcnR5KG4sXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSksZnVuY3Rpb24oZSl7ZS5BTk9OWU1PVVM9XCJBTk9OWU1PVVNcIixlLldFQ0hBVD1cIldFQ0hBVFwiLGUuQ1VTVE9NPVwiQ1VTVE9NXCIsZS5OVUxMPVwiTlVMTFwifShyPW4uTE9HSU5UWVBFfHwobi5MT0dJTlRZUEU9e30pKTt2YXIgaT1mdW5jdGlvbigpe2Z1bmN0aW9uIGUoZSl7dGhpcy5fbG9naW5UeXBlPXIuTlVMTCx0aGlzLmNvbmZpZz1lLHRoaXMub25Mb2dpblR5cGVDaGFuZ2VkPXRoaXMub25Mb2dpblR5cGVDaGFuZ2VkLmJpbmQodGhpcyksSi5hZGRFdmVudExpc3RlbmVyKEouRVZFTlRTLkxPR0lOX1RZUEVfQ0hBTkdFLHRoaXMub25Mb2dpblR5cGVDaGFuZ2VkKX1yZXR1cm4gZS5wcm90b3R5cGUuaW5pdD1mdW5jdGlvbigpe3RoaXMuaHR0cFJlcXVlc3Q9bmV3IFguUmVxdWVzdCh0aGlzLmNvbmZpZyksdGhpcy5jYWNoZT1uZXcgei5DYWNoZSh0aGlzLmNvbmZpZy5wZXJzaXN0ZW5jZSksdGhpcy5hY2Nlc3NUb2tlbktleT1LLkFDQ0VTU19UT0tFTitcIl9cIit0aGlzLmNvbmZpZy5lbnYsdGhpcy5hY2Nlc3NUb2tlbkV4cGlyZUtleT1LLkFDQ0VTU19UT0tFTl9FeHBpcmUrXCJfXCIrdGhpcy5jb25maWcuZW52LHRoaXMucmVmcmVzaFRva2VuS2V5PUsuUkVGUkVTSF9UT0tFTitcIl9cIit0aGlzLmNvbmZpZy5lbnYsdGhpcy5sb2dpblR5cGVLZXk9Sy5MT0dJTl9UWVBFX0tFWStcIl9cIit0aGlzLmNvbmZpZy5lbnZ9LGUucHJvdG90eXBlLm9uTG9naW5UeXBlQ2hhbmdlZD1mdW5jdGlvbihlKXt0aGlzLl9sb2dpblR5cGU9ZS5kYXRhLHRoaXMuY2FjaGUuc2V0U3RvcmUodGhpcy5sb2dpblR5cGVLZXksdGhpcy5fbG9naW5UeXBlKX0sT2JqZWN0LmRlZmluZVByb3BlcnR5KGUucHJvdG90eXBlLFwibG9naW5UeXBlXCIse2dldDpmdW5jdGlvbigpe3JldHVybiB0aGlzLl9sb2dpblR5cGV9LGVudW1lcmFibGU6ITAsY29uZmlndXJhYmxlOiEwfSksZS5wcm90b3R5cGUuc2V0UmVmcmVzaFRva2VuPWZ1bmN0aW9uKGUpe3RoaXMuY2FjaGUucmVtb3ZlU3RvcmUodGhpcy5hY2Nlc3NUb2tlbktleSksdGhpcy5jYWNoZS5yZW1vdmVTdG9yZSh0aGlzLmFjY2Vzc1Rva2VuRXhwaXJlS2V5KSx0aGlzLmNhY2hlLnNldFN0b3JlKHRoaXMucmVmcmVzaFRva2VuS2V5LGUpfSxlLnByb3RvdHlwZS5nZXRSZWZyZXNoVG9rZW5CeVdYQ29kZT1mdW5jdGlvbihlLHQsbil7cmV0dXJuIG8odGhpcyx2b2lkIDAsdm9pZCAwLChmdW5jdGlvbigpe3ZhciByO3JldHVybiBzKHRoaXMsKGZ1bmN0aW9uKG8pe3JldHVyblwiYXV0aC5nZXRKd3RcIixyPVcuQWRhcHRlci5ydW50aW1lPT09Vy5SVU5USU1FLldYX01QP1wiMVwiOlwiMFwiLFsyLHRoaXMuaHR0cFJlcXVlc3Quc2VuZChcImF1dGguZ2V0Snd0XCIse2FwcGlkOmUsbG9naW5UeXBlOnQsY29kZTpuLGh5YnJpZE1pbmlhcHA6cn0pLnRoZW4oKGZ1bmN0aW9uKGUpe2lmKGUuY29kZSl0aHJvdyBuZXcgRXJyb3IoXCJbdGNiLWpzLXNka10g5b6u5L+h55m75b2V5aSx6LSlOiBcIitlLmNvZGUpO2lmKGUucmVmcmVzaF90b2tlbilyZXR1cm57cmVmcmVzaFRva2VuOmUucmVmcmVzaF90b2tlbixhY2Nlc3NUb2tlbjplLmFjY2Vzc190b2tlbixhY2Nlc3NUb2tlbkV4cGlyZTplLmFjY2Vzc190b2tlbl9leHBpcmV9O3Rocm93IG5ldyBFcnJvcihcIlt0Y2ItanMtc2RrXSBnZXRKd3TmnKrov5Tlm55yZWZyZXNoVG9rZW5cIil9KSldfSkpfSkpfSxlfSgpO24uZGVmYXVsdD1pfSkpO3QoJCk7JC5MT0dJTlRZUEU7dmFyIFE9bigoZnVuY3Rpb24odCxuKXt2YXIgcj1lJiZlLl9fZXh0ZW5kc3x8ZnVuY3Rpb24oKXt2YXIgZT1mdW5jdGlvbih0LG4pe3JldHVybihlPU9iamVjdC5zZXRQcm90b3R5cGVPZnx8e19fcHJvdG9fXzpbXX1pbnN0YW5jZW9mIEFycmF5JiZmdW5jdGlvbihlLHQpe2UuX19wcm90b19fPXR9fHxmdW5jdGlvbihlLHQpe2Zvcih2YXIgbiBpbiB0KXQuaGFzT3duUHJvcGVydHkobikmJihlW25dPXRbbl0pfSkodCxuKX07cmV0dXJuIGZ1bmN0aW9uKHQsbil7ZnVuY3Rpb24gcigpe3RoaXMuY29uc3RydWN0b3I9dH1lKHQsbiksdC5wcm90b3R5cGU9bnVsbD09PW4/T2JqZWN0LmNyZWF0ZShuKTooci5wcm90b3R5cGU9bi5wcm90b3R5cGUsbmV3IHIpfX0oKSxvPWUmJmUuX19hd2FpdGVyfHxmdW5jdGlvbihlLHQsbixyKXtyZXR1cm4gbmV3KG58fChuPVByb21pc2UpKSgoZnVuY3Rpb24obyxzKXtmdW5jdGlvbiBpKGUpe3RyeXtjKHIubmV4dChlKSl9Y2F0Y2goZSl7cyhlKX19ZnVuY3Rpb24gYShlKXt0cnl7YyhyLnRocm93KGUpKX1jYXRjaChlKXtzKGUpfX1mdW5jdGlvbiBjKGUpe3ZhciB0O2UuZG9uZT9vKGUudmFsdWUpOih0PWUudmFsdWUsdCBpbnN0YW5jZW9mIG4/dDpuZXcgbigoZnVuY3Rpb24oZSl7ZSh0KX0pKSkudGhlbihpLGEpfWMoKHI9ci5hcHBseShlLHR8fFtdKSkubmV4dCgpKX0pKX0scz1lJiZlLl9fZ2VuZXJhdG9yfHxmdW5jdGlvbihlLHQpe3ZhciBuLHIsbyxzLGk9e2xhYmVsOjAsc2VudDpmdW5jdGlvbigpe2lmKDEmb1swXSl0aHJvdyBvWzFdO3JldHVybiBvWzFdfSx0cnlzOltdLG9wczpbXX07cmV0dXJuIHM9e25leHQ6YSgwKSx0aHJvdzphKDEpLHJldHVybjphKDIpfSxcImZ1bmN0aW9uXCI9PXR5cGVvZiBTeW1ib2wmJihzW1N5bWJvbC5pdGVyYXRvcl09ZnVuY3Rpb24oKXtyZXR1cm4gdGhpc30pLHM7ZnVuY3Rpb24gYShzKXtyZXR1cm4gZnVuY3Rpb24oYSl7cmV0dXJuIGZ1bmN0aW9uKHMpe2lmKG4pdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7Zm9yKDtpOyl0cnl7aWYobj0xLHImJihvPTImc1swXT9yLnJldHVybjpzWzBdP3IudGhyb3d8fCgobz1yLnJldHVybikmJm8uY2FsbChyKSwwKTpyLm5leHQpJiYhKG89by5jYWxsKHIsc1sxXSkpLmRvbmUpcmV0dXJuIG87c3dpdGNoKHI9MCxvJiYocz1bMiZzWzBdLG8udmFsdWVdKSxzWzBdKXtjYXNlIDA6Y2FzZSAxOm89czticmVhaztjYXNlIDQ6cmV0dXJuIGkubGFiZWwrKyx7dmFsdWU6c1sxXSxkb25lOiExfTtjYXNlIDU6aS5sYWJlbCsrLHI9c1sxXSxzPVswXTtjb250aW51ZTtjYXNlIDc6cz1pLm9wcy5wb3AoKSxpLnRyeXMucG9wKCk7Y29udGludWU7ZGVmYXVsdDppZighKG89KG89aS50cnlzKS5sZW5ndGg+MCYmb1tvLmxlbmd0aC0xXSkmJig2PT09c1swXXx8Mj09PXNbMF0pKXtpPTA7Y29udGludWV9aWYoMz09PXNbMF0mJighb3x8c1sxXT5vWzBdJiZzWzFdPG9bM10pKXtpLmxhYmVsPXNbMV07YnJlYWt9aWYoNj09PXNbMF0mJmkubGFiZWw8b1sxXSl7aS5sYWJlbD1vWzFdLG89czticmVha31pZihvJiZpLmxhYmVsPG9bMl0pe2kubGFiZWw9b1syXSxpLm9wcy5wdXNoKHMpO2JyZWFrfW9bMl0mJmkub3BzLnBvcCgpLGkudHJ5cy5wb3AoKTtjb250aW51ZX1zPXQuY2FsbChlLGkpfWNhdGNoKGUpe3M9WzYsZV0scj0wfWZpbmFsbHl7bj1vPTB9aWYoNSZzWzBdKXRocm93IHNbMV07cmV0dXJue3ZhbHVlOnNbMF0/c1sxXTp2b2lkIDAsZG9uZTohMH19KFtzLGFdKX19fSxpPWUmJmUuX19pbXBvcnRTdGFyfHxmdW5jdGlvbihlKXtpZihlJiZlLl9fZXNNb2R1bGUpcmV0dXJuIGU7dmFyIHQ9e307aWYobnVsbCE9ZSlmb3IodmFyIG4gaW4gZSlPYmplY3QuaGFzT3duUHJvcGVydHkuY2FsbChlLG4pJiYodFtuXT1lW25dKTtyZXR1cm4gdC5kZWZhdWx0PWUsdH07T2JqZWN0LmRlZmluZVByb3BlcnR5KG4sXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSk7dmFyIGEsYyx1PWkoSSksbD1pKCQpOyFmdW5jdGlvbihlKXtlLnNuc2FwaV9iYXNlPVwic25zYXBpX2Jhc2VcIixlLnNuc2FwaV91c2VyaW5mbz1cInNuc2FwaV91c2VyaW5mb1wiLGUuc25zYXBpX2xvZ2luPVwic25zYXBpX2xvZ2luXCJ9KGF8fChhPXt9KSksZnVuY3Rpb24oZSl7ZS5yZWRpcmVjdD1cInJlZGlyZWN0XCIsZS5wcm9tcHQ9XCJwcm9tcHRcIn0oY3x8KGM9e30pKTt2YXIgZj17fSxwPWZ1bmN0aW9uKGUpe2Z1bmN0aW9uIHQodCxuLHIsbyxzKXt2YXIgaT1lLmNhbGwodGhpcyx0KXx8dGhpcztyZXR1cm4gaS5jb25maWc9dCxpLmFwcGlkPW4saS5zY29wZT1XLkFkYXB0ZXIucnVudGltZT09PVcuUlVOVElNRS5XWF9NUD9cInNuc2FwaV9iYXNlXCI6cixpLnN0YXRlPXN8fFwid2VpeGluXCIsaS5sb2dpbk1vZGU9b3x8XCJyZWRpcmVjdFwiLGl9cmV0dXJuIHIodCxlKSx0LnByb3RvdHlwZS5zaWduSW49ZnVuY3Rpb24oKXtyZXR1cm4gbyh0aGlzLHZvaWQgMCx2b2lkIDAsKGZ1bmN0aW9uKCl7dmFyIGUsdCxuO3JldHVybiBzKHRoaXMsKGZ1bmN0aW9uKHIpe3N3aXRjaChyLmxhYmVsKXtjYXNlIDA6Zlt0aGlzLmNvbmZpZy5lbnZdfHwoZlt0aGlzLmNvbmZpZy5lbnZdPXRoaXMuX3NpZ25JbigpKSxyLmxhYmVsPTE7Y2FzZSAxOnJldHVybiByLnRyeXMucHVzaChbMSwzLCw0XSksWzQsZlt0aGlzLmNvbmZpZy5lbnZdXTtjYXNlIDI6cmV0dXJuIGU9ci5zZW50KCksWzMsNF07Y2FzZSAzOnJldHVybiBuPXIuc2VudCgpLHQ9bixbMyw0XTtjYXNlIDQ6aWYoZlt0aGlzLmNvbmZpZy5lbnZdPW51bGwsdCl0aHJvdyB0O3JldHVyblsyLGVdfX0pKX0pKX0sdC5wcm90b3R5cGUuX3NpZ25Jbj1mdW5jdGlvbigpe3JldHVybiBvKHRoaXMsdm9pZCAwLHZvaWQgMCwoZnVuY3Rpb24oKXt2YXIgZSx0LG4scixvLGk7cmV0dXJuIHModGhpcywoZnVuY3Rpb24ocyl7c3dpdGNoKHMubGFiZWwpe2Nhc2UgMDppZihlPXRoaXMuY2FjaGUuZ2V0U3RvcmUodGhpcy5hY2Nlc3NUb2tlbktleSksdD10aGlzLmNhY2hlLmdldFN0b3JlKHRoaXMuYWNjZXNzVG9rZW5FeHBpcmVLZXkpLGUpe2lmKHQmJnQ+RGF0ZS5ub3coKSlyZXR1cm5bMix7Y3JlZGVudGlhbDp7YWNjZXNzVG9rZW46ZSxyZWZyZXNoVG9rZW46dGhpcy5jYWNoZS5nZXRTdG9yZSh0aGlzLnJlZnJlc2hUb2tlbktleSl9fV07dGhpcy5jYWNoZS5yZW1vdmVTdG9yZSh0aGlzLmFjY2Vzc1Rva2VuS2V5KSx0aGlzLmNhY2hlLnJlbW92ZVN0b3JlKHRoaXMuYWNjZXNzVG9rZW5FeHBpcmVLZXkpfWlmKCExPT09T2JqZWN0LnZhbHVlcyhhKS5pbmNsdWRlcyhhW3RoaXMuc2NvcGVdKSl0aHJvdyBuZXcgRXJyb3IoXCLplJnor6/nmoRzY29wZeexu+Wei1wiKTtyZXR1cm4gVy5BZGFwdGVyLnJ1bnRpbWUhPT1XLlJVTlRJTUUuV1hfTVA/WzMsMl06WzQsdS5nZXRNaW5pQXBwQ29kZSgpXTtjYXNlIDE6cmV0dXJuIG49cy5zZW50KCksWzMsNF07Y2FzZSAyOnJldHVybls0LHUuZ2V0V2VpeGluQ29kZSgpXTtjYXNlIDM6aWYoIShuPXMuc2VudCgpKSlyZXR1cm5bMix0aGlzLnJlZGlyZWN0KCldO3MubGFiZWw9NDtjYXNlIDQ6cmV0dXJuIHI9ZnVuY3Rpb24oZSl7c3dpdGNoKGUpe2Nhc2UgYS5zbnNhcGlfbG9naW46cmV0dXJuXCJXRUNIQVQtT1BFTlwiO2RlZmF1bHQ6cmV0dXJuXCJXRUNIQVQtUFVCTElDXCJ9fSh0aGlzLnNjb3BlKSxbNCx0aGlzLmdldFJlZnJlc2hUb2tlbkJ5V1hDb2RlKHRoaXMuYXBwaWQscixuKV07Y2FzZSA1OnJldHVybiBvPXMuc2VudCgpLGk9by5yZWZyZXNoVG9rZW4sdGhpcy5jYWNoZS5zZXRTdG9yZSh0aGlzLnJlZnJlc2hUb2tlbktleSxpKSxvLmFjY2Vzc1Rva2VuJiZ0aGlzLmNhY2hlLnNldFN0b3JlKHRoaXMuYWNjZXNzVG9rZW5LZXksby5hY2Nlc3NUb2tlbiksby5hY2Nlc3NUb2tlbkV4cGlyZSYmdGhpcy5jYWNoZS5zZXRTdG9yZSh0aGlzLmFjY2Vzc1Rva2VuRXhwaXJlS2V5LG8uYWNjZXNzVG9rZW5FeHBpcmUrRGF0ZS5ub3coKSksSi5hY3RpdmF0ZUV2ZW50KEouRVZFTlRTLkxPR0lOX1NUQVRFX0NIQU5HRUQpLEouYWN0aXZhdGVFdmVudChKLkVWRU5UUy5MT0dJTl9UWVBFX0NIQU5HRSxsLkxPR0lOVFlQRS5XRUNIQVQpLFsyLHtjcmVkZW50aWFsOntyZWZyZXNoVG9rZW46aX19XX19KSl9KSl9LHQucHJvdG90eXBlLnJlZGlyZWN0PWZ1bmN0aW9uKCl7dmFyIGU9dS5yZW1vdmVQYXJhbShcImNvZGVcIixsb2NhdGlvbi5ocmVmKTtlPXUucmVtb3ZlUGFyYW0oXCJzdGF0ZVwiLGUpLGU9ZW5jb2RlVVJJQ29tcG9uZW50KGUpO3ZhciB0PVwiLy9vcGVuLndlaXhpbi5xcS5jb20vY29ubmVjdC9vYXV0aDIvYXV0aG9yaXplXCI7XCJzbnNhcGlfbG9naW5cIj09PXRoaXMuc2NvcGUmJih0PVwiLy9vcGVuLndlaXhpbi5xcS5jb20vY29ubmVjdC9xcmNvbm5lY3RcIiksXCJyZWRpcmVjdFwiPT09Y1t0aGlzLmxvZ2luTW9kZV0mJihsb2NhdGlvbi5ocmVmPXQrXCI/YXBwaWQ9XCIrdGhpcy5hcHBpZCtcIiZyZWRpcmVjdF91cmk9XCIrZStcIiZyZXNwb25zZV90eXBlPWNvZGUmc2NvcGU9XCIrdGhpcy5zY29wZStcIiZzdGF0ZT1cIit0aGlzLnN0YXRlK1wiI3dlY2hhdF9yZWRpcmVjdFwiKX0sdH0obC5kZWZhdWx0KTtuLmRlZmF1bHQ9cH0pKTt0KFEpO3ZhciBaPW4oKGZ1bmN0aW9uKHQsbil7dmFyIHI9ZSYmZS5fX2V4dGVuZHN8fGZ1bmN0aW9uKCl7dmFyIGU9ZnVuY3Rpb24odCxuKXtyZXR1cm4oZT1PYmplY3Quc2V0UHJvdG90eXBlT2Z8fHtfX3Byb3RvX186W119aW5zdGFuY2VvZiBBcnJheSYmZnVuY3Rpb24oZSx0KXtlLl9fcHJvdG9fXz10fXx8ZnVuY3Rpb24oZSx0KXtmb3IodmFyIG4gaW4gdCl0Lmhhc093blByb3BlcnR5KG4pJiYoZVtuXT10W25dKX0pKHQsbil9O3JldHVybiBmdW5jdGlvbih0LG4pe2Z1bmN0aW9uIHIoKXt0aGlzLmNvbnN0cnVjdG9yPXR9ZSh0LG4pLHQucHJvdG90eXBlPW51bGw9PT1uP09iamVjdC5jcmVhdGUobik6KHIucHJvdG90eXBlPW4ucHJvdG90eXBlLG5ldyByKX19KCksbz1lJiZlLl9fYXNzaWdufHxmdW5jdGlvbigpe3JldHVybihvPU9iamVjdC5hc3NpZ258fGZ1bmN0aW9uKGUpe2Zvcih2YXIgdCxuPTEscj1hcmd1bWVudHMubGVuZ3RoO248cjtuKyspZm9yKHZhciBvIGluIHQ9YXJndW1lbnRzW25dKU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbCh0LG8pJiYoZVtvXT10W29dKTtyZXR1cm4gZX0pLmFwcGx5KHRoaXMsYXJndW1lbnRzKX0scz1lJiZlLl9fYXdhaXRlcnx8ZnVuY3Rpb24oZSx0LG4scil7cmV0dXJuIG5ldyhufHwobj1Qcm9taXNlKSkoKGZ1bmN0aW9uKG8scyl7ZnVuY3Rpb24gaShlKXt0cnl7YyhyLm5leHQoZSkpfWNhdGNoKGUpe3MoZSl9fWZ1bmN0aW9uIGEoZSl7dHJ5e2Moci50aHJvdyhlKSl9Y2F0Y2goZSl7cyhlKX19ZnVuY3Rpb24gYyhlKXt2YXIgdDtlLmRvbmU/byhlLnZhbHVlKToodD1lLnZhbHVlLHQgaW5zdGFuY2VvZiBuP3Q6bmV3IG4oKGZ1bmN0aW9uKGUpe2UodCl9KSkpLnRoZW4oaSxhKX1jKChyPXIuYXBwbHkoZSx0fHxbXSkpLm5leHQoKSl9KSl9LGk9ZSYmZS5fX2dlbmVyYXRvcnx8ZnVuY3Rpb24oZSx0KXt2YXIgbixyLG8scyxpPXtsYWJlbDowLHNlbnQ6ZnVuY3Rpb24oKXtpZigxJm9bMF0pdGhyb3cgb1sxXTtyZXR1cm4gb1sxXX0sdHJ5czpbXSxvcHM6W119O3JldHVybiBzPXtuZXh0OmEoMCksdGhyb3c6YSgxKSxyZXR1cm46YSgyKX0sXCJmdW5jdGlvblwiPT10eXBlb2YgU3ltYm9sJiYoc1tTeW1ib2wuaXRlcmF0b3JdPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXN9KSxzO2Z1bmN0aW9uIGEocyl7cmV0dXJuIGZ1bmN0aW9uKGEpe3JldHVybiBmdW5jdGlvbihzKXtpZihuKXRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO2Zvcig7aTspdHJ5e2lmKG49MSxyJiYobz0yJnNbMF0/ci5yZXR1cm46c1swXT9yLnRocm93fHwoKG89ci5yZXR1cm4pJiZvLmNhbGwociksMCk6ci5uZXh0KSYmIShvPW8uY2FsbChyLHNbMV0pKS5kb25lKXJldHVybiBvO3N3aXRjaChyPTAsbyYmKHM9WzImc1swXSxvLnZhbHVlXSksc1swXSl7Y2FzZSAwOmNhc2UgMTpvPXM7YnJlYWs7Y2FzZSA0OnJldHVybiBpLmxhYmVsKysse3ZhbHVlOnNbMV0sZG9uZTohMX07Y2FzZSA1OmkubGFiZWwrKyxyPXNbMV0scz1bMF07Y29udGludWU7Y2FzZSA3OnM9aS5vcHMucG9wKCksaS50cnlzLnBvcCgpO2NvbnRpbnVlO2RlZmF1bHQ6aWYoIShvPShvPWkudHJ5cykubGVuZ3RoPjAmJm9bby5sZW5ndGgtMV0pJiYoNj09PXNbMF18fDI9PT1zWzBdKSl7aT0wO2NvbnRpbnVlfWlmKDM9PT1zWzBdJiYoIW98fHNbMV0+b1swXSYmc1sxXTxvWzNdKSl7aS5sYWJlbD1zWzFdO2JyZWFrfWlmKDY9PT1zWzBdJiZpLmxhYmVsPG9bMV0pe2kubGFiZWw9b1sxXSxvPXM7YnJlYWt9aWYobyYmaS5sYWJlbDxvWzJdKXtpLmxhYmVsPW9bMl0saS5vcHMucHVzaChzKTticmVha31vWzJdJiZpLm9wcy5wb3AoKSxpLnRyeXMucG9wKCk7Y29udGludWV9cz10LmNhbGwoZSxpKX1jYXRjaChlKXtzPVs2LGVdLHI9MH1maW5hbGx5e249bz0wfWlmKDUmc1swXSl0aHJvdyBzWzFdO3JldHVybnt2YWx1ZTpzWzBdP3NbMV06dm9pZCAwLGRvbmU6ITB9fShbcyxhXSl9fX0sYT1lJiZlLl9faW1wb3J0U3Rhcnx8ZnVuY3Rpb24oZSl7aWYoZSYmZS5fX2VzTW9kdWxlKXJldHVybiBlO3ZhciB0PXt9O2lmKG51bGwhPWUpZm9yKHZhciBuIGluIGUpT2JqZWN0Lmhhc093blByb3BlcnR5LmNhbGwoZSxuKSYmKHRbbl09ZVtuXSk7cmV0dXJuIHQuZGVmYXVsdD1lLHR9O09iamVjdC5kZWZpbmVQcm9wZXJ0eShuLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pO3ZhciBjPWEoJCksdT1mdW5jdGlvbihlKXtmdW5jdGlvbiB0KHQpe3ZhciBuPWUuY2FsbCh0aGlzLG8obyh7fSx0KSx7cGVyc2lzdGVuY2U6XCJsb2NhbFwifSkpfHx0aGlzO3JldHVybiBuLl9hbm9ueW1vdXNVdWlkS2V5PUsuQU5PTllNT1VTX1VVSUQrXCJfXCIrbi5jb25maWcuZW52LG4uX2xvZ2luVHlwZUtleT1LLkxPR0lOX1RZUEVfS0VZK1wiX1wiK24uY29uZmlnLmVudixufXJldHVybiByKHQsZSksdC5wcm90b3R5cGUuaW5pdD1mdW5jdGlvbigpe2UucHJvdG90eXBlLmluaXQuY2FsbCh0aGlzKX0sdC5wcm90b3R5cGUuc2lnbkluPWZ1bmN0aW9uKCl7cmV0dXJuIHModGhpcyx2b2lkIDAsdm9pZCAwLChmdW5jdGlvbigpe3ZhciBlLHQsbjtyZXR1cm4gaSh0aGlzLChmdW5jdGlvbihyKXtzd2l0Y2goci5sYWJlbCl7Y2FzZSAwOnJldHVybiBlPXRoaXMuY2FjaGUuZ2V0U3RvcmUodGhpcy5fYW5vbnltb3VzVXVpZEtleSl8fHZvaWQgMCx0PXRoaXMuY2FjaGUuZ2V0U3RvcmUodGhpcy5yZWZyZXNoVG9rZW5LZXkpfHx2b2lkIDAsWzQsdGhpcy5odHRwUmVxdWVzdC5zZW5kKFwiYXV0aC5zaWduSW5Bbm9ueW1vdXNseVwiLHthbm9ueW1vdXNfdXVpZDplLHJlZnJlc2hfdG9rZW46dH0pXTtjYXNlIDE6cmV0dXJuKG49ci5zZW50KCkpLnV1aWQmJm4ucmVmcmVzaF90b2tlbj8odGhpcy5fc2V0QW5vbnltb3VzVVVJRChuLnV1aWQpLHRoaXMuc2V0UmVmcmVzaFRva2VuKG4ucmVmcmVzaF90b2tlbiksWzQsdGhpcy5odHRwUmVxdWVzdC5yZWZyZXNoQWNjZXNzVG9rZW4oKV0pOlszLDNdO2Nhc2UgMjpyZXR1cm4gci5zZW50KCksSi5hY3RpdmF0ZUV2ZW50KEouRVZFTlRTLkxPR0lOX1NUQVRFX0NIQU5HRUQpLEouYWN0aXZhdGVFdmVudChKLkVWRU5UUy5MT0dJTl9UWVBFX0NIQU5HRSxjLkxPR0lOVFlQRS5BTk9OWU1PVVMpLFsyLHtjcmVkZW50aWFsOntyZWZyZXNoVG9rZW46bi5yZWZyZXNoX3Rva2VufX1dO2Nhc2UgMzp0aHJvdyBuZXcgRXJyb3IoXCJbdGNiLWpzLXNka10g5Yy/5ZCN55m75b2V5aSx6LSlXCIpfX0pKX0pKX0sdC5wcm90b3R5cGUubGlua0FuZFJldHJpZXZlRGF0YVdpdGhUaWNrZXQ9ZnVuY3Rpb24oZSl7cmV0dXJuIHModGhpcyx2b2lkIDAsdm9pZCAwLChmdW5jdGlvbigpe3ZhciB0LG4scjtyZXR1cm4gaSh0aGlzLChmdW5jdGlvbihvKXtzd2l0Y2goby5sYWJlbCl7Y2FzZSAwOnJldHVybiB0PXRoaXMuY2FjaGUuZ2V0U3RvcmUodGhpcy5fYW5vbnltb3VzVXVpZEtleSksbj10aGlzLmNhY2hlLmdldFN0b3JlKHRoaXMucmVmcmVzaFRva2VuS2V5KSxbNCx0aGlzLmh0dHBSZXF1ZXN0LnNlbmQoXCJhdXRoLmxpbmtBbmRSZXRyaWV2ZURhdGFXaXRoVGlja2V0XCIse2Fub255bW91c191dWlkOnQscmVmcmVzaF90b2tlbjpuLHRpY2tldDplfSldO2Nhc2UgMTpyZXR1cm4ocj1vLnNlbnQoKSkucmVmcmVzaF90b2tlbj8odGhpcy5fY2xlYXJBbm9ueW1vdXNVVUlEKCksdGhpcy5zZXRSZWZyZXNoVG9rZW4oci5yZWZyZXNoX3Rva2VuKSxbNCx0aGlzLmh0dHBSZXF1ZXN0LnJlZnJlc2hBY2Nlc3NUb2tlbigpXSk6WzMsM107Y2FzZSAyOnJldHVybiBvLnNlbnQoKSxKLmFjdGl2YXRlRXZlbnQoSi5FVkVOVFMuQU5PTllNT1VTX0NPTlZFUlRFRCx7cmVmcmVzaF90b2tlbjpyLnJlZnJlc2hfdG9rZW59KSxKLmFjdGl2YXRlRXZlbnQoSi5FVkVOVFMuTE9HSU5fVFlQRV9DSEFOR0UsYy5MT0dJTlRZUEUuQ1VTVE9NKSxbMix7Y3JlZGVudGlhbDp7cmVmcmVzaFRva2VuOnIucmVmcmVzaF90b2tlbn19XTtjYXNlIDM6dGhyb3cgbmV3IEVycm9yKFwiW3RjYi1qcy1zZGtdIOWMv+WQjei9rOWMluWksei0pVwiKX19KSl9KSl9LHQucHJvdG90eXBlLmdldEFsbFN0b3JlPWZ1bmN0aW9uKCl7dmFyIGU9e307cmV0dXJuIGVbdGhpcy5yZWZyZXNoVG9rZW5LZXldPXRoaXMuY2FjaGUuZ2V0U3RvcmUodGhpcy5yZWZyZXNoVG9rZW5LZXkpfHxcIlwiLGVbdGhpcy5fbG9naW5UeXBlS2V5XT10aGlzLmNhY2hlLmdldFN0b3JlKHRoaXMuX2xvZ2luVHlwZUtleSl8fFwiXCIsZVt0aGlzLmFjY2Vzc1Rva2VuS2V5XT10aGlzLmNhY2hlLmdldFN0b3JlKHRoaXMuYWNjZXNzVG9rZW5LZXkpfHxcIlwiLGVbdGhpcy5hY2Nlc3NUb2tlbkV4cGlyZUtleV09dGhpcy5jYWNoZS5nZXRTdG9yZSh0aGlzLmFjY2Vzc1Rva2VuRXhwaXJlS2V5KXx8XCJcIixlfSx0LnByb3RvdHlwZS5fc2V0QW5vbnltb3VzVVVJRD1mdW5jdGlvbihlKXt0aGlzLmNhY2hlLnJlbW92ZVN0b3JlKHRoaXMuX2Fub255bW91c1V1aWRLZXkpLHRoaXMuY2FjaGUuc2V0U3RvcmUodGhpcy5fYW5vbnltb3VzVXVpZEtleSxlKSx0aGlzLmNhY2hlLnNldFN0b3JlKHRoaXMuX2xvZ2luVHlwZUtleSxjLkxPR0lOVFlQRS5BTk9OWU1PVVMpfSx0LnByb3RvdHlwZS5fY2xlYXJBbm9ueW1vdXNVVUlEPWZ1bmN0aW9uKCl7dGhpcy5jYWNoZS5yZW1vdmVTdG9yZSh0aGlzLl9hbm9ueW1vdXNVdWlkS2V5KX0sdH0oYy5kZWZhdWx0KTtuLkFub255bW91c0F1dGhQcm92aWRlcj11fSkpO3QoWik7Wi5Bbm9ueW1vdXNBdXRoUHJvdmlkZXI7dmFyIGVlPW4oKGZ1bmN0aW9uKHQsbil7dmFyIHI9ZSYmZS5fX2V4dGVuZHN8fGZ1bmN0aW9uKCl7dmFyIGU9ZnVuY3Rpb24odCxuKXtyZXR1cm4oZT1PYmplY3Quc2V0UHJvdG90eXBlT2Z8fHtfX3Byb3RvX186W119aW5zdGFuY2VvZiBBcnJheSYmZnVuY3Rpb24oZSx0KXtlLl9fcHJvdG9fXz10fXx8ZnVuY3Rpb24oZSx0KXtmb3IodmFyIG4gaW4gdCl0Lmhhc093blByb3BlcnR5KG4pJiYoZVtuXT10W25dKX0pKHQsbil9O3JldHVybiBmdW5jdGlvbih0LG4pe2Z1bmN0aW9uIHIoKXt0aGlzLmNvbnN0cnVjdG9yPXR9ZSh0LG4pLHQucHJvdG90eXBlPW51bGw9PT1uP09iamVjdC5jcmVhdGUobik6KHIucHJvdG90eXBlPW4ucHJvdG90eXBlLG5ldyByKX19KCksbz1lJiZlLl9fYXNzaWdufHxmdW5jdGlvbigpe3JldHVybihvPU9iamVjdC5hc3NpZ258fGZ1bmN0aW9uKGUpe2Zvcih2YXIgdCxuPTEscj1hcmd1bWVudHMubGVuZ3RoO248cjtuKyspZm9yKHZhciBvIGluIHQ9YXJndW1lbnRzW25dKU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbCh0LG8pJiYoZVtvXT10W29dKTtyZXR1cm4gZX0pLmFwcGx5KHRoaXMsYXJndW1lbnRzKX0scz1lJiZlLl9fYXdhaXRlcnx8ZnVuY3Rpb24oZSx0LG4scil7cmV0dXJuIG5ldyhufHwobj1Qcm9taXNlKSkoKGZ1bmN0aW9uKG8scyl7ZnVuY3Rpb24gaShlKXt0cnl7YyhyLm5leHQoZSkpfWNhdGNoKGUpe3MoZSl9fWZ1bmN0aW9uIGEoZSl7dHJ5e2Moci50aHJvdyhlKSl9Y2F0Y2goZSl7cyhlKX19ZnVuY3Rpb24gYyhlKXt2YXIgdDtlLmRvbmU/byhlLnZhbHVlKToodD1lLnZhbHVlLHQgaW5zdGFuY2VvZiBuP3Q6bmV3IG4oKGZ1bmN0aW9uKGUpe2UodCl9KSkpLnRoZW4oaSxhKX1jKChyPXIuYXBwbHkoZSx0fHxbXSkpLm5leHQoKSl9KSl9LGk9ZSYmZS5fX2dlbmVyYXRvcnx8ZnVuY3Rpb24oZSx0KXt2YXIgbixyLG8scyxpPXtsYWJlbDowLHNlbnQ6ZnVuY3Rpb24oKXtpZigxJm9bMF0pdGhyb3cgb1sxXTtyZXR1cm4gb1sxXX0sdHJ5czpbXSxvcHM6W119O3JldHVybiBzPXtuZXh0OmEoMCksdGhyb3c6YSgxKSxyZXR1cm46YSgyKX0sXCJmdW5jdGlvblwiPT10eXBlb2YgU3ltYm9sJiYoc1tTeW1ib2wuaXRlcmF0b3JdPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXN9KSxzO2Z1bmN0aW9uIGEocyl7cmV0dXJuIGZ1bmN0aW9uKGEpe3JldHVybiBmdW5jdGlvbihzKXtpZihuKXRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO2Zvcig7aTspdHJ5e2lmKG49MSxyJiYobz0yJnNbMF0/ci5yZXR1cm46c1swXT9yLnRocm93fHwoKG89ci5yZXR1cm4pJiZvLmNhbGwociksMCk6ci5uZXh0KSYmIShvPW8uY2FsbChyLHNbMV0pKS5kb25lKXJldHVybiBvO3N3aXRjaChyPTAsbyYmKHM9WzImc1swXSxvLnZhbHVlXSksc1swXSl7Y2FzZSAwOmNhc2UgMTpvPXM7YnJlYWs7Y2FzZSA0OnJldHVybiBpLmxhYmVsKysse3ZhbHVlOnNbMV0sZG9uZTohMX07Y2FzZSA1OmkubGFiZWwrKyxyPXNbMV0scz1bMF07Y29udGludWU7Y2FzZSA3OnM9aS5vcHMucG9wKCksaS50cnlzLnBvcCgpO2NvbnRpbnVlO2RlZmF1bHQ6aWYoIShvPShvPWkudHJ5cykubGVuZ3RoPjAmJm9bby5sZW5ndGgtMV0pJiYoNj09PXNbMF18fDI9PT1zWzBdKSl7aT0wO2NvbnRpbnVlfWlmKDM9PT1zWzBdJiYoIW98fHNbMV0+b1swXSYmc1sxXTxvWzNdKSl7aS5sYWJlbD1zWzFdO2JyZWFrfWlmKDY9PT1zWzBdJiZpLmxhYmVsPG9bMV0pe2kubGFiZWw9b1sxXSxvPXM7YnJlYWt9aWYobyYmaS5sYWJlbDxvWzJdKXtpLmxhYmVsPW9bMl0saS5vcHMucHVzaChzKTticmVha31vWzJdJiZpLm9wcy5wb3AoKSxpLnRyeXMucG9wKCk7Y29udGludWV9cz10LmNhbGwoZSxpKX1jYXRjaChlKXtzPVs2LGVdLHI9MH1maW5hbGx5e249bz0wfWlmKDUmc1swXSl0aHJvdyBzWzFdO3JldHVybnt2YWx1ZTpzWzBdP3NbMV06dm9pZCAwLGRvbmU6ITB9fShbcyxhXSl9fX0sYT1lJiZlLl9faW1wb3J0RGVmYXVsdHx8ZnVuY3Rpb24oZSl7cmV0dXJuIGUmJmUuX19lc01vZHVsZT9lOntkZWZhdWx0OmV9fSxjPWUmJmUuX19pbXBvcnRTdGFyfHxmdW5jdGlvbihlKXtpZihlJiZlLl9fZXNNb2R1bGUpcmV0dXJuIGU7dmFyIHQ9e307aWYobnVsbCE9ZSlmb3IodmFyIG4gaW4gZSlPYmplY3QuaGFzT3duUHJvcGVydHkuY2FsbChlLG4pJiYodFtuXT1lW25dKTtyZXR1cm4gdC5kZWZhdWx0PWUsdH07T2JqZWN0LmRlZmluZVByb3BlcnR5KG4sXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSk7dmFyIHU9YShRKSxsPWMoJCksZj1mdW5jdGlvbihlKXtmdW5jdGlvbiB0KHQpe3ZhciBuPWUuY2FsbCh0aGlzLHQpfHx0aGlzO3JldHVybiBuLmNvbmZpZz10LG59cmV0dXJuIHIodCxlKSx0LnByb3RvdHlwZS5pbml0PWZ1bmN0aW9uKCl7ZS5wcm90b3R5cGUuaW5pdC5jYWxsKHRoaXMpLHRoaXMuY3VzdG9tQXV0aFByb3ZpZGVyPW5ldyBsLmRlZmF1bHQodGhpcy5jb25maWcpLHRoaXMuY3VzdG9tQXV0aFByb3ZpZGVyLmluaXQoKX0sdC5wcm90b3R5cGUud2VpeGluQXV0aFByb3ZpZGVyPWZ1bmN0aW9uKGUpe3ZhciB0PWUuYXBwaWQsbj1lLnNjb3BlLHI9ZS5sb2dpbk1vZGUsbz1lLnN0YXRlLHM9bmV3IHUuZGVmYXVsdCh0aGlzLmNvbmZpZyx0LG4scixvKTtyZXR1cm4gcy5pbml0KCksc30sdC5wcm90b3R5cGUuc2lnbkluQW5vbnltb3VzbHk9ZnVuY3Rpb24oKXtyZXR1cm4gcyh0aGlzLHZvaWQgMCx2b2lkIDAsKGZ1bmN0aW9uKCl7dmFyIGU9dGhpcztyZXR1cm4gaSh0aGlzLChmdW5jdGlvbih0KXtzd2l0Y2godC5sYWJlbCl7Y2FzZSAwOnJldHVybiB0aGlzLl9hbm9ueW1vdXNBdXRoUHJvdmlkZXJ8fCh0aGlzLl9hbm9ueW1vdXNBdXRoUHJvdmlkZXI9bmV3IFouQW5vbnltb3VzQXV0aFByb3ZpZGVyKHRoaXMuY29uZmlnKSx0aGlzLl9hbm9ueW1vdXNBdXRoUHJvdmlkZXIuaW5pdCgpKSxKLmFkZEV2ZW50TGlzdGVuZXIoSi5FVkVOVFMuTE9HSU5fVFlQRV9DSEFOR0UsKGZ1bmN0aW9uKHQpe2lmKHQmJnQuZGF0YT09PWwuTE9HSU5UWVBFLkFOT05ZTU9VUyl7dmFyIG49ZS5fYW5vbnltb3VzQXV0aFByb3ZpZGVyLmdldEFsbFN0b3JlKCk7Zm9yKHZhciByIGluIG4pbltyXSYmZS5odHRwUmVxdWVzdC5jYWNoZS5zZXRTdG9yZShyLG5bcl0pfX0pKSxbNCx0aGlzLl9hbm9ueW1vdXNBdXRoUHJvdmlkZXIuc2lnbkluKCldO2Nhc2UgMTpyZXR1cm5bMix0LnNlbnQoKV19fSkpfSkpfSx0LnByb3RvdHlwZS5saW5rQW5kUmV0cmlldmVEYXRhV2l0aFRpY2tldD1mdW5jdGlvbihlKXtyZXR1cm4gcyh0aGlzLHZvaWQgMCx2b2lkIDAsKGZ1bmN0aW9uKCl7dmFyIHQ9dGhpcztyZXR1cm4gaSh0aGlzLChmdW5jdGlvbihuKXtzd2l0Y2gobi5sYWJlbCl7Y2FzZSAwOnJldHVybiB0aGlzLl9hbm9ueW1vdXNBdXRoUHJvdmlkZXJ8fCh0aGlzLl9hbm9ueW1vdXNBdXRoUHJvdmlkZXI9bmV3IFouQW5vbnltb3VzQXV0aFByb3ZpZGVyKHRoaXMuY29uZmlnKSx0aGlzLl9hbm9ueW1vdXNBdXRoUHJvdmlkZXIuaW5pdCgpKSxKLmFkZEV2ZW50TGlzdGVuZXIoSi5FVkVOVFMuQU5PTllNT1VTX0NPTlZFUlRFRCwoZnVuY3Rpb24oZSl7dmFyIG49ZS5kYXRhLnJlZnJlc2hfdG9rZW47biYmdC5odHRwUmVxdWVzdC5jYWNoZS5zZXRTdG9yZSh0LnJlZnJlc2hUb2tlbktleSxuKX0pKSxbNCx0aGlzLl9hbm9ueW1vdXNBdXRoUHJvdmlkZXIubGlua0FuZFJldHJpZXZlRGF0YVdpdGhUaWNrZXQoZSldO2Nhc2UgMTpyZXR1cm5bMixuLnNlbnQoKV19fSkpfSkpfSx0LnByb3RvdHlwZS5zaWduT3V0PWZ1bmN0aW9uKCl7cmV0dXJuIHModGhpcyx2b2lkIDAsdm9pZCAwLChmdW5jdGlvbigpe3ZhciBlLHQsbixyLG8scyxhO3JldHVybiBpKHRoaXMsKGZ1bmN0aW9uKGkpe3N3aXRjaChpLmxhYmVsKXtjYXNlIDA6aWYodGhpcy5sb2dpblR5cGU9PT1sLkxPR0lOVFlQRS5BTk9OWU1PVVMpdGhyb3cgbmV3IEVycm9yKFwiW3RjYi1qcy1zZGtdIOWMv+WQjeeUqOaIt+S4jeaUr+aMgeeZu+WHuuaTjeS9nFwiKTtyZXR1cm4gZT10aGlzLmh0dHBSZXF1ZXN0LHQ9ZS5jYWNoZSxuPWUucmVmcmVzaFRva2VuS2V5LHI9ZS5hY2Nlc3NUb2tlbktleSxvPWUuYWNjZXNzVG9rZW5FeHBpcmVLZXksXCJhdXRoLmxvZ291dFwiLChzPXQuZ2V0U3RvcmUobikpP1s0LHRoaXMuaHR0cFJlcXVlc3Quc2VuZChcImF1dGgubG9nb3V0XCIse3JlZnJlc2hfdG9rZW46c30pXTpbMl07Y2FzZSAxOnJldHVybiBhPWkuc2VudCgpLHQucmVtb3ZlU3RvcmUobiksdC5yZW1vdmVTdG9yZShyKSx0LnJlbW92ZVN0b3JlKG8pLEouYWN0aXZhdGVFdmVudChKLkVWRU5UUy5MT0dJTl9TVEFURV9DSEFOR0VEKSxKLmFjdGl2YXRlRXZlbnQoSi5FVkVOVFMuTE9HSU5fVFlQRV9DSEFOR0UsbC5MT0dJTlRZUEUuTlVMTCksWzIsYV19fSkpfSkpfSx0LnByb3RvdHlwZS5nZXRBY2Nlc3NUb2tlbj1mdW5jdGlvbigpe3JldHVybiBzKHRoaXMsdm9pZCAwLHZvaWQgMCwoZnVuY3Rpb24oKXt2YXIgZTtyZXR1cm4gaSh0aGlzLChmdW5jdGlvbih0KXtzd2l0Y2godC5sYWJlbCl7Y2FzZSAwOnJldHVybiBlPXt9LFs0LHRoaXMuaHR0cFJlcXVlc3QuZ2V0QWNjZXNzVG9rZW4oKV07Y2FzZSAxOnJldHVyblsyLChlLmFjY2Vzc1Rva2VuPXQuc2VudCgpLmFjY2Vzc1Rva2VuLGUuZW52PXRoaXMuY29uZmlnLmVudixlKV19fSkpfSkpfSx0LnByb3RvdHlwZS5vbkxvZ2luU3RhdGVFeHBpcmU9ZnVuY3Rpb24oZSl7Si5hZGRFdmVudExpc3RlbmVyKFwibG9naW5TdGF0ZUV4cGlyZVwiLGUpfSx0LnByb3RvdHlwZS5nZXRMb2dpblN0YXRlPWZ1bmN0aW9uKCl7cmV0dXJuIHModGhpcyx2b2lkIDAsdm9pZCAwLChmdW5jdGlvbigpe3ZhciBlLHQsbixyLG87cmV0dXJuIGkodGhpcywoZnVuY3Rpb24ocyl7c3dpdGNoKHMubGFiZWwpe2Nhc2UgMDppZihlPXRoaXMuaHR0cFJlcXVlc3QsdD1lLmNhY2hlLG49ZS5yZWZyZXNoVG9rZW5LZXkscj1lLmFjY2Vzc1Rva2VuS2V5LCEobz10LmdldFN0b3JlKG4pKSlyZXR1cm5bMyw1XTtzLmxhYmVsPTE7Y2FzZSAxOnJldHVybiBzLnRyeXMucHVzaChbMSwzLCw0XSksWzQsdGhpcy5odHRwUmVxdWVzdC5yZWZyZXNoQWNjZXNzVG9rZW4oKV07Y2FzZSAyOnJldHVybiBzLnNlbnQoKSxbMyw0XTtjYXNlIDM6cmV0dXJuIHMuc2VudCgpLFsyLG51bGxdO2Nhc2UgNDpyZXR1cm5bMix7aXNBbm9ueW1vdXM6dGhpcy5sb2dpblR5cGU9PT1sLkxPR0lOVFlQRS5BTk9OWU1PVVMsY3JlZGVudGlhbDp7cmVmcmVzaFRva2VuOm8sYWNjZXNzVG9rZW46dC5nZXRTdG9yZShyKX19XTtjYXNlIDU6cmV0dXJuWzIsbnVsbF19fSkpfSkpfSx0LnByb3RvdHlwZS5zaWduSW5XaXRoVGlja2V0PWZ1bmN0aW9uKGUpe3JldHVybiBzKHRoaXMsdm9pZCAwLHZvaWQgMCwoZnVuY3Rpb24oKXt2YXIgdCxuLHIsbztyZXR1cm4gaSh0aGlzLChmdW5jdGlvbihzKXtzd2l0Y2gocy5sYWJlbCl7Y2FzZSAwOmlmKFwic3RyaW5nXCIhPXR5cGVvZiBlKXRocm93IG5ldyBFcnJvcihcInRpY2tldCBtdXN0IGJlIGEgc3RyaW5nXCIpO3JldHVybiB0PXRoaXMuaHR0cFJlcXVlc3Qsbj10LmNhY2hlLHI9dC5yZWZyZXNoVG9rZW5LZXksWzQsdGhpcy5odHRwUmVxdWVzdC5zZW5kKFwiYXV0aC5zaWduSW5XaXRoVGlja2V0XCIse3RpY2tldDplLHJlZnJlc2hfdG9rZW46bi5nZXRTdG9yZShyKXx8XCJcIn0pXTtjYXNlIDE6cmV0dXJuKG89cy5zZW50KCkpLnJlZnJlc2hfdG9rZW4/KHRoaXMuY3VzdG9tQXV0aFByb3ZpZGVyLnNldFJlZnJlc2hUb2tlbihvLnJlZnJlc2hfdG9rZW4pLFs0LHRoaXMuaHR0cFJlcXVlc3QucmVmcmVzaEFjY2Vzc1Rva2VuKCldKTpbMywzXTtjYXNlIDI6cmV0dXJuIHMuc2VudCgpLEouYWN0aXZhdGVFdmVudChKLkVWRU5UUy5MT0dJTl9TVEFURV9DSEFOR0VEKSxKLmFjdGl2YXRlRXZlbnQoSi5FVkVOVFMuTE9HSU5fVFlQRV9DSEFOR0UsbC5MT0dJTlRZUEUuQ1VTVE9NKSxbMix7Y3JlZGVudGlhbDp7cmVmcmVzaFRva2VuOm8ucmVmcmVzaF90b2tlbn19XTtjYXNlIDM6dGhyb3cgbmV3IEVycm9yKFwiW3RjYi1qcy1zZGtdIOiHquWumuS5ieeZu+W9leWksei0pVwiKX19KSl9KSl9LHQucHJvdG90eXBlLnNob3VsZFJlZnJlc2hBY2Nlc3NUb2tlbj1mdW5jdGlvbihlKXt0aGlzLmh0dHBSZXF1ZXN0Ll9zaG91bGRSZWZyZXNoQWNjZXNzVG9rZW5Ib29rPWUuYmluZCh0aGlzKX0sdC5wcm90b3R5cGUuZ2V0VXNlckluZm89ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5odHRwUmVxdWVzdC5zZW5kKFwiYXV0aC5nZXRVc2VySW5mb1wiLHt9KS50aGVuKChmdW5jdGlvbihlKXtyZXR1cm4gZS5jb2RlP2U6byhvKHt9LGUuZGF0YSkse3JlcXVlc3RJZDplLnNlcUlkfSl9KSl9LHR9KGwuZGVmYXVsdCk7bi5kZWZhdWx0PWZ9KSk7dChlZSk7dmFyIHRlPW4oKGZ1bmN0aW9uKHQsbil7dmFyIHI9ZSYmZS5fX2F3YWl0ZXJ8fGZ1bmN0aW9uKGUsdCxuLHIpe3JldHVybiBuZXcobnx8KG49UHJvbWlzZSkpKChmdW5jdGlvbihvLHMpe2Z1bmN0aW9uIGkoZSl7dHJ5e2Moci5uZXh0KGUpKX1jYXRjaChlKXtzKGUpfX1mdW5jdGlvbiBhKGUpe3RyeXtjKHIudGhyb3coZSkpfWNhdGNoKGUpe3MoZSl9fWZ1bmN0aW9uIGMoZSl7dmFyIHQ7ZS5kb25lP28oZS52YWx1ZSk6KHQ9ZS52YWx1ZSx0IGluc3RhbmNlb2Ygbj90Om5ldyBuKChmdW5jdGlvbihlKXtlKHQpfSkpKS50aGVuKGksYSl9Yygocj1yLmFwcGx5KGUsdHx8W10pKS5uZXh0KCkpfSkpfSxvPWUmJmUuX19nZW5lcmF0b3J8fGZ1bmN0aW9uKGUsdCl7dmFyIG4scixvLHMsaT17bGFiZWw6MCxzZW50OmZ1bmN0aW9uKCl7aWYoMSZvWzBdKXRocm93IG9bMV07cmV0dXJuIG9bMV19LHRyeXM6W10sb3BzOltdfTtyZXR1cm4gcz17bmV4dDphKDApLHRocm93OmEoMSkscmV0dXJuOmEoMil9LFwiZnVuY3Rpb25cIj09dHlwZW9mIFN5bWJvbCYmKHNbU3ltYm9sLml0ZXJhdG9yXT1mdW5jdGlvbigpe3JldHVybiB0aGlzfSkscztmdW5jdGlvbiBhKHMpe3JldHVybiBmdW5jdGlvbihhKXtyZXR1cm4gZnVuY3Rpb24ocyl7aWYobil0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtmb3IoO2k7KXRyeXtpZihuPTEsciYmKG89MiZzWzBdP3IucmV0dXJuOnNbMF0/ci50aHJvd3x8KChvPXIucmV0dXJuKSYmby5jYWxsKHIpLDApOnIubmV4dCkmJiEobz1vLmNhbGwocixzWzFdKSkuZG9uZSlyZXR1cm4gbztzd2l0Y2gocj0wLG8mJihzPVsyJnNbMF0sby52YWx1ZV0pLHNbMF0pe2Nhc2UgMDpjYXNlIDE6bz1zO2JyZWFrO2Nhc2UgNDpyZXR1cm4gaS5sYWJlbCsrLHt2YWx1ZTpzWzFdLGRvbmU6ITF9O2Nhc2UgNTppLmxhYmVsKysscj1zWzFdLHM9WzBdO2NvbnRpbnVlO2Nhc2UgNzpzPWkub3BzLnBvcCgpLGkudHJ5cy5wb3AoKTtjb250aW51ZTtkZWZhdWx0OmlmKCEobz0obz1pLnRyeXMpLmxlbmd0aD4wJiZvW28ubGVuZ3RoLTFdKSYmKDY9PT1zWzBdfHwyPT09c1swXSkpe2k9MDtjb250aW51ZX1pZigzPT09c1swXSYmKCFvfHxzWzFdPm9bMF0mJnNbMV08b1szXSkpe2kubGFiZWw9c1sxXTticmVha31pZig2PT09c1swXSYmaS5sYWJlbDxvWzFdKXtpLmxhYmVsPW9bMV0sbz1zO2JyZWFrfWlmKG8mJmkubGFiZWw8b1syXSl7aS5sYWJlbD1vWzJdLGkub3BzLnB1c2gocyk7YnJlYWt9b1syXSYmaS5vcHMucG9wKCksaS50cnlzLnBvcCgpO2NvbnRpbnVlfXM9dC5jYWxsKGUsaSl9Y2F0Y2goZSl7cz1bNixlXSxyPTB9ZmluYWxseXtuPW89MH1pZig1JnNbMF0pdGhyb3cgc1sxXTtyZXR1cm57dmFsdWU6c1swXT9zWzFdOnZvaWQgMCxkb25lOiEwfX0oW3MsYV0pfX19O09iamVjdC5kZWZpbmVQcm9wZXJ0eShuLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pLG4udXBsb2FkRmlsZT1mdW5jdGlvbihlLHQpe3Q9dHx8SS5jcmVhdGVQcm9taXNlQ2FsbGJhY2soKTt2YXIgbj1uZXcgWC5SZXF1ZXN0KHRoaXMuY29uZmlnKSxyPWUuY2xvdWRQYXRoLG89ZS5maWxlUGF0aCxzPWUub25VcGxvYWRQcm9ncmVzcztyZXR1cm4gbi5zZW5kKFwic3RvcmFnZS5nZXRVcGxvYWRNZXRhZGF0YVwiLHtwYXRoOnJ9KS50aGVuKChmdW5jdGlvbihlKXt2YXIgaT1lLmRhdGEsYT1pLnVybCxjPWkuYXV0aG9yaXphdGlvbix1PWkudG9rZW4sbD1pLmZpbGVJZCxmPWkuY29zRmlsZUlkLHA9ZS5yZXF1ZXN0SWQsaD17a2V5OnIsc2lnbmF0dXJlOmMsXCJ4LWNvcy1tZXRhLWZpbGVpZFwiOmYsc3VjY2Vzc19hY3Rpb25fc3RhdHVzOlwiMjAxXCIsXCJ4LWNvcy1zZWN1cml0eS10b2tlblwiOnV9O24udXBsb2FkKHt1cmw6YSxkYXRhOmgsZmlsZTpvLG5hbWU6cixvblVwbG9hZFByb2dyZXNzOnN9KS50aGVuKChmdW5jdGlvbihlKXsyMDE9PT1lLnN0YXR1c0NvZGU/dChudWxsLHtmaWxlSUQ6bCxyZXF1ZXN0SWQ6cH0pOnQobmV3IEVycm9yKFwiU1RPUkFHRV9SRVFVRVNUX0ZBSUw6IFwiK2UuZGF0YSkpfSkpLmNhdGNoKChmdW5jdGlvbihlKXt0KGUpfSkpfSkpLmNhdGNoKChmdW5jdGlvbihlKXt0KGUpfSkpLHQucHJvbWlzZX0sbi5kZWxldGVGaWxlPWZ1bmN0aW9uKGUsdCl7dmFyIG49ZS5maWxlTGlzdDtpZih0PXR8fEkuY3JlYXRlUHJvbWlzZUNhbGxiYWNrKCksIW58fCFBcnJheS5pc0FycmF5KG4pKXJldHVybntjb2RlOlwiSU5WQUxJRF9QQVJBTVwiLG1lc3NhZ2U6XCJmaWxlTGlzdOW/hemhu+aYr+mdnuepuueahOaVsOe7hFwifTtmb3IodmFyIHI9MCxvPW47cjxvLmxlbmd0aDtyKyspe3ZhciBzPW9bcl07aWYoIXN8fFwic3RyaW5nXCIhPXR5cGVvZiBzKXJldHVybntjb2RlOlwiSU5WQUxJRF9QQVJBTVwiLG1lc3NhZ2U6XCJmaWxlTGlzdOeahOWFg+e0oOW/hemhu+aYr+mdnuepuueahOWtl+espuS4slwifX12YXIgaT17ZmlsZWlkX2xpc3Q6bn07cmV0dXJuIG5ldyBYLlJlcXVlc3QodGhpcy5jb25maWcpLnNlbmQoXCJzdG9yYWdlLmJhdGNoRGVsZXRlRmlsZVwiLGkpLnRoZW4oKGZ1bmN0aW9uKGUpe2UuY29kZT90KG51bGwsZSk6dChudWxsLHtmaWxlTGlzdDplLmRhdGEuZGVsZXRlX2xpc3QscmVxdWVzdElkOmUucmVxdWVzdElkfSl9KSkuY2F0Y2goKGZ1bmN0aW9uKGUpe3QoZSl9KSksdC5wcm9taXNlfSxuLmdldFRlbXBGaWxlVVJMPWZ1bmN0aW9uKGUsdCl7dmFyIG49ZS5maWxlTGlzdDt0PXR8fEkuY3JlYXRlUHJvbWlzZUNhbGxiYWNrKCksbiYmQXJyYXkuaXNBcnJheShuKXx8dChudWxsLHtjb2RlOlwiSU5WQUxJRF9QQVJBTVwiLG1lc3NhZ2U6XCJmaWxlTGlzdOW/hemhu+aYr+mdnuepuueahOaVsOe7hFwifSk7Zm9yKHZhciByPVtdLG89MCxzPW47bzxzLmxlbmd0aDtvKyspe3ZhciBpPXNbb107XCJvYmplY3RcIj09dHlwZW9mIGk/KGkuaGFzT3duUHJvcGVydHkoXCJmaWxlSURcIikmJmkuaGFzT3duUHJvcGVydHkoXCJtYXhBZ2VcIil8fHQobnVsbCx7Y29kZTpcIklOVkFMSURfUEFSQU1cIixtZXNzYWdlOlwiZmlsZUxpc3TnmoTlhYPntKDlv4XpobvmmK/ljIXlkKtmaWxlSUTlkoxtYXhBZ2XnmoTlr7nosaFcIn0pLHIucHVzaCh7ZmlsZWlkOmkuZmlsZUlELG1heF9hZ2U6aS5tYXhBZ2V9KSk6XCJzdHJpbmdcIj09dHlwZW9mIGk/ci5wdXNoKHtmaWxlaWQ6aX0pOnQobnVsbCx7Y29kZTpcIklOVkFMSURfUEFSQU1cIixtZXNzYWdlOlwiZmlsZUxpc3TnmoTlhYPntKDlv4XpobvmmK/lrZfnrKbkuLJcIn0pfXZhciBhPXtmaWxlX2xpc3Q6cn07cmV0dXJuIG5ldyBYLlJlcXVlc3QodGhpcy5jb25maWcpLnNlbmQoXCJzdG9yYWdlLmJhdGNoR2V0RG93bmxvYWRVcmxcIixhKS50aGVuKChmdW5jdGlvbihlKXtlLmNvZGU/dChudWxsLGUpOnQobnVsbCx7ZmlsZUxpc3Q6ZS5kYXRhLmRvd25sb2FkX2xpc3QscmVxdWVzdElkOmUucmVxdWVzdElkfSl9KSkuY2F0Y2goKGZ1bmN0aW9uKGUpe3QoZSl9KSksdC5wcm9taXNlfSxuLmRvd25sb2FkRmlsZT1mdW5jdGlvbihlLHQpe3ZhciBzPWUuZmlsZUlEO3JldHVybiByKHRoaXMsdm9pZCAwLHZvaWQgMCwoZnVuY3Rpb24oKXt2YXIgZSxyLGksYSxjO3JldHVybiBvKHRoaXMsKGZ1bmN0aW9uKG8pe3N3aXRjaChvLmxhYmVsKXtjYXNlIDA6cmV0dXJuWzQsbi5nZXRUZW1wRmlsZVVSTC5jYWxsKHRoaXMse2ZpbGVMaXN0Olt7ZmlsZUlEOnMsbWF4QWdlOjYwMH1dfSldO2Nhc2UgMTpyZXR1cm4gZT1vLnNlbnQoKSxcIlNVQ0NFU1NcIiE9PShyPWUuZmlsZUxpc3RbMF0pLmNvZGU/WzIsdD90KHIpOm5ldyBQcm9taXNlKChmdW5jdGlvbihlKXtlKHIpfSkpXTooaT1yLmRvd25sb2FkX3VybCxpPWVuY29kZVVSSShpKSxhPW5ldyBYLlJlcXVlc3QodGhpcy5jb25maWcpLHQ/WzQsYS5kb3dubG9hZCh7dXJsOml9KV06WzMsM10pO2Nhc2UgMjpyZXR1cm4gYz1vLnNlbnQoKSx0KGMpLFszLDRdO2Nhc2UgMzpyZXR1cm5bMixhLmRvd25sb2FkKHt1cmw6aX0pXTtjYXNlIDQ6cmV0dXJuWzJdfX0pKX0pKX19KSk7dCh0ZSk7dGUudXBsb2FkRmlsZSx0ZS5kZWxldGVGaWxlLHRlLmdldFRlbXBGaWxlVVJMLHRlLmRvd25sb2FkRmlsZTt2YXIgbmU9bigoZnVuY3Rpb24oZSx0KXtPYmplY3QuZGVmaW5lUHJvcGVydHkodCxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KSx0LmNhbGxGdW5jdGlvbj1mdW5jdGlvbihlLHQpe3ZhciBuLHI9ZS5uYW1lLG89ZS5kYXRhLHM9ZS5xdWVyeSxpPWUucGFyc2UsYT1lLnNlYXJjaCxjPXR8fEkuY3JlYXRlUHJvbWlzZUNhbGxiYWNrKCk7dHJ5e249bz9KU09OLnN0cmluZ2lmeShvKTpcIlwifWNhdGNoKGUpe3JldHVybiBQcm9taXNlLnJlamVjdChlKX1pZighcilyZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKFwi5Ye95pWw5ZCN5LiN6IO95Li656m6XCIpKTt2YXIgdT17cXVlcnk6cyxwYXJzZTppLHNlYXJjaDphLGZ1bmN0aW9uX25hbWU6cixyZXF1ZXN0X2RhdGE6bn07cmV0dXJuIG5ldyBYLlJlcXVlc3QodGhpcy5jb25maWcpLnNlbmQoXCJmdW5jdGlvbnMuaW52b2tlRnVuY3Rpb25cIix1KS50aGVuKChmdW5jdGlvbihlKXtpZihlLmNvZGUpYyhudWxsLGUpO2Vsc2V7dmFyIHQ9ZS5kYXRhLnJlc3BvbnNlX2RhdGE7aWYoaSljKG51bGwse3Jlc3VsdDp0LHJlcXVlc3RJZDplLnJlcXVlc3RJZH0pO2Vsc2UgdHJ5e3Q9SlNPTi5wYXJzZShlLmRhdGEucmVzcG9uc2VfZGF0YSksYyhudWxsLHtyZXN1bHQ6dCxyZXF1ZXN0SWQ6ZS5yZXF1ZXN0SWR9KX1jYXRjaChlKXtjKG5ldyBFcnJvcihcInJlc3BvbnNlIGRhdGEgbXVzdCBiZSBqc29uXCIpKX19cmV0dXJuIGMucHJvbWlzZX0pKS5jYXRjaCgoZnVuY3Rpb24oZSl7YyhlKX0pKSxjLnByb21pc2V9fSkpO3QobmUpO25lLmNhbGxGdW5jdGlvbjt2YXIgcmU9dChuKChmdW5jdGlvbih0KXt2YXIgbj1lJiZlLl9fYXNzaWdufHxmdW5jdGlvbigpe3JldHVybihuPU9iamVjdC5hc3NpZ258fGZ1bmN0aW9uKGUpe2Zvcih2YXIgdCxuPTEscj1hcmd1bWVudHMubGVuZ3RoO248cjtuKyspZm9yKHZhciBvIGluIHQ9YXJndW1lbnRzW25dKU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbCh0LG8pJiYoZVtvXT10W29dKTtyZXR1cm4gZX0pLmFwcGx5KHRoaXMsYXJndW1lbnRzKX0scj1lJiZlLl9faW1wb3J0RGVmYXVsdHx8ZnVuY3Rpb24oZSl7cmV0dXJuIGUmJmUuX19lc01vZHVsZT9lOntkZWZhdWx0OmV9fSxvPWUmJmUuX19pbXBvcnRTdGFyfHxmdW5jdGlvbihlKXtpZihlJiZlLl9fZXNNb2R1bGUpcmV0dXJuIGU7dmFyIHQ9e307aWYobnVsbCE9ZSlmb3IodmFyIG4gaW4gZSlPYmplY3QuaGFzT3duUHJvcGVydHkuY2FsbChlLG4pJiYodFtuXT1lW25dKTtyZXR1cm4gdC5kZWZhdWx0PWUsdH0scz1yKFApLGk9cihlZSksYT1vKHRlKSxjPW8obmUpLHU9e3RpbWVvdXQ6MTVlM30sbD1uZXcoZnVuY3Rpb24oKXtmdW5jdGlvbiBlKGUpe3ZhciB0PXRoaXM7dGhpcy5jb25maWc9ZXx8dGhpcy5jb25maWcsdGhpcy5hdXRoT2JqPXZvaWQgMCxKLmFkZEV2ZW50TGlzdGVuZXIoSi5FVkVOVFMuTE9HSU5fVFlQRV9DSEFOR0UsKGZ1bmN0aW9uKGUpe2UuZGF0YT09PSQuTE9HSU5UWVBFLkFOT05ZTU9VUyYmKHQuY29uZmlnLnBlcnNpc3RlbmNlPVwibG9jYWxcIil9KSl9cmV0dXJuIGUucHJvdG90eXBlLmluaXQ9ZnVuY3Rpb24odCl7cmV0dXJuIHRoaXMuY29uZmlnPW4obih7fSx1KSx0KSxXLkFkYXB0ZXIuYWRhcHRlcnx8dGhpcy5fdXNlRGVmYXVsdEFkYXB0ZXIoKSxuZXcgZSh0aGlzLmNvbmZpZyl9LGUucHJvdG90eXBlLmF1dGg9ZnVuY3Rpb24oZSl7dmFyIHQ9KHZvaWQgMD09PWU/e306ZSkucGVyc2lzdGVuY2U7cmV0dXJuIHRoaXMuYXV0aE9iaj90aGlzLmF1dGhPYmo6KHRoaXMuY29uZmlnPW4obih7fSx0aGlzLmNvbmZpZykse3BlcnNpc3RlbmNlOnR8fFcuQWRhcHRlci5hZGFwdGVyLnByaW1hcnlTdG9yYWdlfHxcInNlc3Npb25cIn0pLHRoaXMuYXV0aE9iaj1uZXcgaS5kZWZhdWx0KHRoaXMuY29uZmlnKSx0aGlzLmF1dGhPYmouaW5pdCgpLHRoaXMuYXV0aE9iail9LGUucHJvdG90eXBlLm9uPWZ1bmN0aW9uKGUsdCl7cmV0dXJuIEouYWRkRXZlbnRMaXN0ZW5lci5hcHBseSh0aGlzLFtlLHRdKX0sZS5wcm90b3R5cGUub2ZmPWZ1bmN0aW9uKGUsdCl7cmV0dXJuIEoucmVtb3ZlRXZlbnRMaXN0ZW5lci5hcHBseSh0aGlzLFtlLHRdKX0sZS5wcm90b3R5cGUuY2FsbEZ1bmN0aW9uPWZ1bmN0aW9uKGUsdCl7cmV0dXJuIGMuY2FsbEZ1bmN0aW9uLmFwcGx5KHRoaXMsW2UsdF0pfSxlLnByb3RvdHlwZS5kZWxldGVGaWxlPWZ1bmN0aW9uKGUsdCl7cmV0dXJuIGEuZGVsZXRlRmlsZS5hcHBseSh0aGlzLFtlLHRdKX0sZS5wcm90b3R5cGUuZ2V0VGVtcEZpbGVVUkw9ZnVuY3Rpb24oZSx0KXtyZXR1cm4gYS5nZXRUZW1wRmlsZVVSTC5hcHBseSh0aGlzLFtlLHRdKX0sZS5wcm90b3R5cGUuZG93bmxvYWRGaWxlPWZ1bmN0aW9uKGUsdCl7cmV0dXJuIGEuZG93bmxvYWRGaWxlLmFwcGx5KHRoaXMsW2UsdF0pfSxlLnByb3RvdHlwZS51cGxvYWRGaWxlPWZ1bmN0aW9uKGUsdCl7cmV0dXJuIGEudXBsb2FkRmlsZS5hcHBseSh0aGlzLFtlLHRdKX0sZS5wcm90b3R5cGUudXNlQWRhcHRlcnM9ZnVuY3Rpb24oZSl7dmFyIHQ9Vy51c2VBZGFwdGVycyhlKXx8e30sbj10LmFkYXB0ZXIscj10LnJ1bnRpbWU7biYmKFcuQWRhcHRlci5hZGFwdGVyPW4pLHImJihXLkFkYXB0ZXIucnVudGltZT1yKX0sZS5wcm90b3R5cGUuX3VzZURlZmF1bHRBZGFwdGVyPWZ1bmN0aW9uKCl7dmFyIGU9Vy51c2VEZWZhdWx0QWRhcHRlcigpLHQ9ZS5hZGFwdGVyLG49ZS5ydW50aW1lO1cuQWRhcHRlci5hZGFwdGVyPXQsVy5BZGFwdGVyLnJ1bnRpbWU9bn0sZX0oKSk7bC51c2VBZGFwdGVycyhzLmRlZmF1bHQpO3RyeXt3aW5kb3cudGNiPWx9Y2F0Y2goZSl7fXQuZXhwb3J0cz1sfSkpKTtyZS51c2VBZGFwdGVycyhQKTtjb25zdCBvZT1yZSxzZT1vZS5pbml0O2xldCBpZSxhZTtmdW5jdGlvbiBjZShlKXtpZXx8KGllPXtQTEFURk9STTpwcm9jZXNzLmVudi5WVUVfQVBQX1BMQVRGT1JNLE9TOnksQVBQSUQ6bC5hcHBpZH0sYWU9e2FrOmwuYXBwaWQscDpcImFuZHJvaWRcIj09PXk/XCJhXCI6XCJpXCIsdXQ6ZygpLHV1aWQ6digpfSk7Y29uc3QgdD1KU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KGUuZGF0YXx8e30pKSxuPWUubmFtZSxyPXRoaXMuY29uZmlnLnNwYWNlSWQsbz17dGVuY2VudDpcInRcIixhbGl5dW46XCJhXCJ9W3RoaXMuY29uZmlnLnByb3ZpZGVyXSxzPU9iamVjdC5hc3NpZ24oe30sYWUse2ZuOm4sc2lkOnIscHZkOm99KTtyZXR1cm4gT2JqZWN0LmFzc2lnbih0LHtjbGllbnRJbmZvOmllLHVuaUNsb3VkQ2xpZW50SW5mbzplbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkocykpfSksZS5kYXRhPXQsZX1mdW5jdGlvbiB1ZShlKXtjb25zdCB0PWNlLmNhbGwodGhpcyxlKSxuPXt0ZW5jZW50OlwidGNiXCIsYWxpeXVuOlwiYWxpeXVuXCJ9W3RoaXMuY29uZmlnLnByb3ZpZGVyXSxyPWFlLmFrLG89dGhpcy5jb25maWcuc3BhY2VJZCxpPUpTT04uc3RyaW5naWZ5KHQuZGF0YSksYT10Lm5hbWUsYz1KU09OLnN0cmluZ2lmeSh7Ym9keTp7cHJvdmlkZXI6bixhcHBpZDpyLHNwYWNlSWQ6byxmdW5jdGlvbk5hbWU6YSxydW5fcGFyYW1zOml9LGhlYWRlcjp7dG9rZW46cHJvY2Vzcy5lbnYuSEJYX1VTRVJfVE9LRU59fSk7cmV0dXJuIG5ldyBQcm9taXNlKChlLHQpPT57dW5pLnJlcXVlc3Qoe3VybDpoLG1ldGhvZDpcIlBPU1RcIixkYXRhOntwYXJhbTpjfSxjb21wbGV0ZShyKXtyfHwocj17fSk7Y29uc3Qgbz1yLmRhdGEmJnIuZGF0YS5ib2R5O2lmKCFvKXJldHVybiB2b2lkIHQobmV3IHMoe21lc3NhZ2U6YFtGVU5DVElPTlNfRVhFQ1VURV9GQUlMXSBSZXF1ZXN0IEZhaWw6IFske2F9XWB9KSk7aWYoXCJ0Y2JcIj09PW4mJm8ubG9nJiZcIlwiIT09by5sb2cudHJpbSgpJiZjb25zb2xlLmxvZyhvLmxvZyksMCE9PW8uaW52b2tlUmVzdWx0JiZcIjBcIiE9PW8uaW52b2tlUmVzdWx0KXJldHVybiB2b2lkIHQobmV3IHMoe21lc3NhZ2U6by5lcnJvck1zZ30pKTtjb25zdCBpPW8ucmVxdWVzdElkO2xldCBjPXt9O3RyeXtjPUpTT04ucGFyc2Uoby5yZXN1bHQpfWNhdGNoKGUpe2M9by5yZXN1bHR9ZSh7cmVxdWVzdElkOmkscmVzdWx0OmN9KX19KX0pfW9lLmluaXQ9ZnVuY3Rpb24oZSl7ZS5lbnY9ZS5zcGFjZUlkO2NvbnN0IHQ9c2UuY2FsbCh0aGlzLGUpO3QuY29uZmlnLnByb3ZpZGVyPVwidGVuY2VudFwiLHQuY29uZmlnLnNwYWNlSWQ9ZS5zcGFjZUlkO2NvbnN0IG49dC5hdXRoO3QuYXV0aD1mdW5jdGlvbihlKXtjb25zdCB0PW4uY2FsbCh0aGlzLGUpO3JldHVybltcImxpbmtBbmRSZXRyaWV2ZURhdGFXaXRoVGlja2V0XCIsXCJzaWduSW5Bbm9ueW1vdXNseVwiLFwic2lnbk91dFwiLFwiZ2V0QWNjZXNzVG9rZW5cIixcImdldExvZ2luU3RhdGVcIixcInNpZ25JbldpdGhUaWNrZXRcIixcImdldFVzZXJJbmZvXCJdLmZvckVhY2goZT0+e3RbZV09Xyh0W2VdKS5iaW5kKHQpfSksdH07aWYoW1widXBsb2FkRmlsZVwiLFwiZGVsZXRlRmlsZVwiLFwiZ2V0VGVtcEZpbGVVUkxcIixcImRvd25sb2FkRmlsZVwiXS5mb3JFYWNoKGU9Pnt0W2VdPV8odFtlXSkuYmluZCh0KX0pLCExIT09ZS5hdXRvU2lnbkluKXtjb25zdCBlPXQuYXV0aCgpO2UuZ2V0TG9naW5TdGF0ZSgpLnRoZW4odD0+e3R8fGUuc2lnbkluQW5vbnltb3VzbHkoKX0pfXJldHVyblwiZGV2ZWxvcG1lbnRcIj09PXByb2Nlc3MuZW52Lk5PREVfRU5WJiZjb25zb2xlLmxvZyhcIuS9v+eUqOiFvuiur+S6keS9nOS4uuacjeWKoeWVhuaXtu+8jOiwg+eUqOS6keWHveaVsOeahOWQjOaXtuS8muiOt+WPluS6keWHveaVsOi/kOihjOaXpeW/l++8jOS6keWHveaVsOWTjeW6lOS8muavlOWPkeihjOaFou+8jOS6keWHveaVsOWunumZheWTjeW6lOaXtumXtOW6lOS7peWPkeihjOS4uuWHhlwiKSx0fTtjb25zdCBsZT17aW5pdChlKXtsZXQgdD17fSxuPSEoITE9PT1lLmRlYnVnRnVuY3Rpb258fFwiZGV2ZWxvcG1lbnRcIiE9PXByb2Nlc3MuZW52Lk5PREVfRU5WfHwhcHJvY2Vzcy5lbnYuSEJYX1VTRVJfVE9LRU4pO3N3aXRjaChlLnByb3ZpZGVyKXtjYXNlXCJ0ZW5jZW50XCI6dD1vZS5pbml0KE9iamVjdC5hc3NpZ24oZSx7dXNlRGVidWdGdW5jdGlvbjpufSkpO2JyZWFrO2Nhc2VcImFsaXl1blwiOm49biYmKFwiaDVcIj09PXByb2Nlc3MuZW52LlZVRV9BUFBfUExBVEZPUk0mJm5hdmlnYXRvci51c2VyQWdlbnQuaW5kZXhPZihcIkhCdWlsZGVyWFwiKT4wfHxcImFwcC1wbHVzXCI9PT1wcm9jZXNzLmVudi5WVUVfQVBQX1BMQVRGT1JNKSx0PW0uaW5pdChPYmplY3QuYXNzaWduKGUse3VzZURlYnVnRnVuY3Rpb246bn0pKTticmVhaztkZWZhdWx0OnRocm93IG5ldyBFcnJvcihcIuacquaPkOS+m+ato+ehrueahHByb3ZpZGVy5Y+C5pWwXCIpfXJldHVybiBmdW5jdGlvbihlKXtsZXQgdD1lLmNhbGxGdW5jdGlvbjtlLmNvbmZpZy51c2VEZWJ1Z0Z1bmN0aW9uJiZcInRlbmNlbnRcIj09PWUuY29uZmlnLnByb3ZpZGVyJiYodD11ZSksZS5jYWxsRnVuY3Rpb249ZnVuY3Rpb24oZSl7Y29uc3Qgbj1jZS5jYWxsKHRoaXMsZSk7cmV0dXJuIG5ldyBQcm9taXNlKChyLG8pPT57dC5jYWxsKHRoaXMsbikudGhlbihlPT57cihlKX0pLmNhdGNoKHQ9Pnt0JiZ0Lm1lc3NhZ2UmJih0Lm1lc3NhZ2U9YFske2UubmFtZX1dOiAke3QubWVzc2FnZX1gKSxvKHQpfSl9KX07Y29uc3Qgbj1lLmNhbGxGdW5jdGlvbjtlLmNhbGxGdW5jdGlvbj1mdW5jdGlvbihlKXtyZXR1cm4gXyhuKS5jYWxsKHRoaXMsZSl9fSh0KSx0LmluaXQ9dGhpcy5pbml0LHR9fTtsZXQgZmU9bGU7dHJ5e2xldCBlPXt9OzE9PT1wcm9jZXNzLmVudi5VTklfQ0xPVURfUFJPVklERVIubGVuZ3RoJiYoZT1wcm9jZXNzLmVudi5VTklfQ0xPVURfUFJPVklERVJbMF0pLGZlPWxlLmluaXQoZSl9Y2F0Y2goZSl7W1wiYXV0aFwiLFwiY2FsbEZ1bmN0aW9uXCIsXCJ1cGxvYWRGaWxlXCIsXCJkZWxldGVGaWxlXCIsXCJnZXRUZW1wRmlsZVVSTFwiLFwiZG93bmxvYWRGaWxlXCJdLmZvckVhY2goZT0+e2ZlW2VdPWZ1bmN0aW9uKCl7Y29uc3QgZT1wcm9jZXNzLmVudi5VTklfQ0xPVURfUFJPVklERVIubGVuZ3RoPjA/XCLlupTnlKjmnInlpJrkuKrmnI3liqHnqbrpl7TvvIzor7fpgJrov4d1bmlDbG91ZC5pbml05pa55rOV5oyH5a6a6KaB5L2/55So55qE5pyN5Yqh56m66Ze0XCI6XCLlupTnlKjmnKrlhbPogZTmnI3liqHnqbrpl7TvvIzor7flnKhjbG91ZGZ1bmN0aW9uc+ebruW9leWPs+mUruWFs+iBlOacjeWKoeepuumXtFwiO3JldHVybiBjb25zb2xlLmVycm9yKGUpLFByb21pc2UucmVqZWN0KG5ldyBzKHtjb2RlOlwiU1lTX0VSUlwiLG1lc3NhZ2U6ZX0pKX19KX12YXIgcGU9ZmU7ZXhwb3J0IGRlZmF1bHQgcGU7XG4iLCJleHBvcnQgZGVmYXVsdCB7XCJhcHBpZFwiOlwiX19VTklfX0MyNjY1ODlcIn0iLCJ2YXIgZztcblxuLy8gVGhpcyB3b3JrcyBpbiBub24tc3RyaWN0IG1vZGVcbmcgPSAoZnVuY3Rpb24oKSB7XG5cdHJldHVybiB0aGlzO1xufSkoKTtcblxudHJ5IHtcblx0Ly8gVGhpcyB3b3JrcyBpZiBldmFsIGlzIGFsbG93ZWQgKHNlZSBDU1ApXG5cdGcgPSBnIHx8IG5ldyBGdW5jdGlvbihcInJldHVybiB0aGlzXCIpKCk7XG59IGNhdGNoIChlKSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgdGhlIHdpbmRvdyByZWZlcmVuY2UgaXMgYXZhaWxhYmxlXG5cdGlmICh0eXBlb2Ygd2luZG93ID09PSBcIm9iamVjdFwiKSBnID0gd2luZG93O1xufVxuXG4vLyBnIGNhbiBzdGlsbCBiZSB1bmRlZmluZWQsIGJ1dCBub3RoaW5nIHRvIGRvIGFib3V0IGl0Li4uXG4vLyBXZSByZXR1cm4gdW5kZWZpbmVkLCBpbnN0ZWFkIG9mIG5vdGhpbmcgaGVyZSwgc28gaXQnc1xuLy8gZWFzaWVyIHRvIGhhbmRsZSB0aGlzIGNhc2UuIGlmKCFnbG9iYWwpIHsgLi4ufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGc7XG4iXSwic291cmNlUm9vdCI6IiJ9