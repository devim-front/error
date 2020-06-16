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
exports.UnreachableError = void 0;
var CustomError_1 = require("./CustomError");
/**
 * Ошибка, которая возникает, когда во время выполнения программа достигает
 * участка кода, в который попадать не должна.
 *
 * @see https://github.com/devim-front/error#unreachableerror
 */
var UnreachableError = /** @class */ (function (_super) {
    __extends(UnreachableError, _super);
    /**
     * Создает экземпляр ошибки.
     *
     * @param message Сообщение об ошибке (задано по умолчанию).
     * @param name Служебное имя ошибки (по умолчанию 'UnreachableError').
     */
    function UnreachableError(message, name) {
        if (name === void 0) { name = 'UnreachableError'; }
        var _this = this;
        var finalMessage = message != null
            ? message
            : 'Execution reached an unreachable line. Check the source code for errors.';
        _this = _super.call(this, name, finalMessage) || this;
        return _this;
    }
    return UnreachableError;
}(CustomError_1.CustomError));
exports.UnreachableError = UnreachableError;
