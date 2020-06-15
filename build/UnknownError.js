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
exports.UnknownError = void 0;
var CustomError_1 = require("./CustomError");
/**
 * Представляет неизвестную ошибку. Это исключение следует использовать лишь
 * тогда, когда невозможно определить, к какому типу относится ошибка. Чаще
 * всего такая ситуация возникает, когда мы типизируем исключения сторонней
 * библиотеки.
 */
var UnknownError = /** @class */ (function (_super) {
    __extends(UnknownError, _super);
    /**
     * Создает экземпляр ошибки.
     *
     * @param message Сообщение об ошибке.
     * @param name Служебное имя ошибки (по умолчанию 'UnknownError').
     */
    function UnknownError(message, name) {
        if (name === void 0) { name = 'UnknownError'; }
        return _super.call(this, name, message) || this;
    }
    return UnknownError;
}(CustomError_1.CustomError));
exports.UnknownError = UnknownError;
