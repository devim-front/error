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
exports.ArgumentError = void 0;
var ExpectationError_1 = require("./ExpectationError");
/**
 * Ошибка, которая возникает, когда в метод в качестве аргумента передается
 * неожданное значение.
 */
var ArgumentError = /** @class */ (function (_super) {
    __extends(ArgumentError, _super);
    /**
     * Создает экземпляр ошибки.
     *
     * @param func Название метода (например, 'DateHelper.format').
     * @param param Название аргумента (например, 'format').
     * @param expected Описание ожидаемого значения (например,
     * 'non-empty string').
     * @param actual Реальное значение.
     * @param message Сообщение об ошибке (по умолчанию генерируется на основе
     * предыдущих аргументов).
     * @param name Служебное имя ошибки (по умолчанию 'ArgumentError').
     */
    function ArgumentError(func, param, expected, actual, message, name) {
        if (name === void 0) { name = 'ArgumentError'; }
        var _this = this;
        var subject = func + "(" + param + ")";
        _this = _super.call(this, subject, expected, actual, message, name) || this;
        return _this;
    }
    return ArgumentError;
}(ExpectationError_1.ExpectationError));
exports.ArgumentError = ArgumentError;
