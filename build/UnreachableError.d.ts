import { CustomError } from './CustomError';
/**
 * Ошибка, которая возникает, когда во время выполнения программа достигает
 * участка кода, в который попадать не должна.
 *
 * @see https://github.com/devim-front/error#unreachableerror
 */
export declare class UnreachableError extends CustomError {
    /**
     * Создает экземпляр ошибки.
     *
     * @param message Сообщение об ошибке (задано по умолчанию).
     * @param name Служебное имя ошибки (по умолчанию 'UnreachableError').
     */
    constructor(message?: string, name?: string);
}
