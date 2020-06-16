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
exports.NotImplementedError = void 0;
var CustomError_1 = require("./CustomError");
/**
 * Ошибка, которая возникает, когда в коде происходит попытка вызвать ещё не
 * реализованный функционал.
 */
var NotImplementedError = /** @class */ (function (_super) {
    __extends(NotImplementedError, _super);
    /**
     * Создает экземпляр ошибки.
     *
     * @param message Сообщение об ошибке.
     * @param name Служебное имя ошибки (по умолчанию 'NotImplementedError').
     */
    function NotImplementedError(message, name) {
        if (name === void 0) { name = 'NotImplementedError'; }
        return _super.call(this, name, message) || this;
    }
    return NotImplementedError;
}(CustomError_1.CustomError));
exports.NotImplementedError = NotImplementedError;
