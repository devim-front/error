"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExpectationError = void 0;
var CustomError_1 = require("./CustomError");
/**
 * Ошибка, которая возникает, когда переменная в коде приобретает неожиданное
 * или неподдерживаемое значение.
 */
var ExpectationError = /** @class */ (function (_super) {
    __extends(ExpectationError, _super);
    /**
     * Создает экземпляр ошибки.
     *
     * @param subject Описание переменной, которая приобрела неверное значение
     * (например, 'phone', 'id', 'DateHelper.format(value)').
     * @param expected Описание ожидаемого значения (например, 'non-empty string',
     * 'greater than zero').
     * @param actual Реальное значение.
     * @param message Сообщение об ошибке (по умолчанию генерируется на основе
     * предыдущих параметров).
     * @param name Служебное имя ошибки (по умолчанию 'ExpectationError').
     */
    function ExpectationError(subject, expected, actual, message, name) {
        if (name === void 0) { name = 'ExpectationError'; }
        var _this = this;
        var finalMessage = message == null
            ? ExpectationError.getMessage(subject, expected, actual)
            : message;
        _this = _super.call(this, name, finalMessage) || this;
        _this.expected = expected;
        _this.subject = subject;
        _this.actual = actual;
        return _this;
    }
    /**
     * Преобразует реальное значение переменной в строковый формат для вставки
     * в сообщение об ошибке.
     *
     * @param actual Реальное значение.
     */
    ExpectationError.formatActual = function (actual) {
        var type = typeof actual;
        switch (type) {
            case 'string': {
                return "[string] \"" + actual + "\"";
            }
            case 'undefined':
            case 'function': {
                return "[" + type + "]";
            }
            case 'object': {
                if (actual === null) {
                    return '[object] null';
                }
                if (Array.isArray(actual)) {
                    return '[array]';
                }
                return '[object]';
            }
            default: {
                return "[" + type + "] " + String(actual);
            }
        }
    };
    /**
     * Генерирует сообщение об ошибке на основе её параметров.
     *
     * @param subject Описание переменной, которая приняла неожиданное значение.
     * @param expected Описание ожидаемого значения.
     * @param actual Реальное значение.
     */
    ExpectationError.getMessage = function (subject, expected, actual) {
        var actualText = this.formatActual(actual);
        return subject + " must be " + expected + "; got: " + actualText;
    };
    return ExpectationError;
}(CustomError_1.CustomError));
exports.ExpectationError = ExpectationError;
