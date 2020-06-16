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
exports.NotSupportedError = void 0;
var CustomError_1 = require("./CustomError");
/**
 * Ошибка, которая возникает, когда происходит попытка совершить
 * запрещённое действие. Например, запрещено создавать экземпляры некоего
 * класса. В таком случае внутри конструктора этого класса можно выбрасывать
 * это исключение.
 */
var NotSupportedError = /** @class */ (function (_super) {
    __extends(NotSupportedError, _super);
    /**
     * Создает экземпляр ошибки.
     *
     * @param message Сообщение об ошибке.
     * @param name Служебное имя класса. По умолчанию 'NotSupportedError'.
     */
    function NotSupportedError(message, name) {
        if (name === void 0) { name = 'NotSupportedError'; }
        return _super.call(this, name, message) || this;
    }
    return NotSupportedError;
}(CustomError_1.CustomError));
exports.NotSupportedError = NotSupportedError;
