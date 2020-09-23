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
exports.CustomError = void 0;
/**
 * Пользовательская ошибка. Служит базовым классов для всех прочих ошибок.
 * Помимо сообщения, позволяет указать служебное имя ошибки.
 */
var CustomError = /** @class */ (function (_super) {
    __extends(CustomError, _super);
    /**
     * Создает экземпляр ошибки с указанным текстом и служебным именем.
     *
     * @param name Служебное имя исключения (RuntimeError, FormatError и тому
     * подобное).
     * @param message Текст сообщения об ошибке.
     */
    function CustomError(name, message) {
        var _this = _super.call(this, message) || this;
        _this.name = name;
        // fix for https://github.com/Microsoft/TypeScript-wiki/blob/master/Breaking-Changes.md#extending-built-ins-like-error-array-and-map-may-no-longer-work
        Object.setPrototypeOf(_this, CustomError.prototype);
        return _this;
    }
    return CustomError;
}(Error));
exports.CustomError = CustomError;
