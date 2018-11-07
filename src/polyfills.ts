import 'es5-shim'; //IE8 ^4.5.10
import 'object-create-ie8';//IE8, 我写的库，这样就不用加上es5-sham
import 'object-defineproperty-ie8';//IE8， 我写的库
import 'es6-promise/auto';
import 'fetch-ie8';
import 'excanvas.js';// IE8 对canvas的支持

if (!Object.assign) {
    Object.assign = function (target) {
        for (let i = 1; i < arguments.length; i++) {
            const source = arguments[i];
            for (const key in source) {
                if (Object.prototype.hasOwnProperty.call(source, key)) {
                    target[key] = source[key]
                }
            }
        }
        return target
    }
}
if (!Object.is) {
    Object.is = function (x, y) {
        if (x === y) {
            return x !== 0 || 1 / x === 1 / y;
        } else {
            return x !== x && y !== y;
        }
    }
}
// react-redux 可能缺少Object.getOwnPropertySymbols
if (typeof Object.getPrototypeOf !== "function") {
    Object.getPrototypeOf = function (object) {
        return object.__proto__ || object.constructor.prototype;
    }
}
if (!Object.getOwnPropertyNames) {
    Object.getOwnPropertyNames = function (object) {
        return Object.keys(object);
    }
}
// reactstrap 缺少freeze
if (!Object.freeze) {
    Object.freeze = function (object) {
        return object;
    }
}