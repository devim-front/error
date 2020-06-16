import { CustomError } from './CustomError';
/**
 * Ошибка, которая возникает, когда в коде происходит попытка вызвать ещё не
 * реализованный функционал.
 */
export declare class NotImplementedError extends CustomError {
    /**
     * Создает экземпляр ошибки.
     *
     * @param message Сообщение об ошибке.
     * @param name Служебное имя ошибки (по умолчанию 'NotImplementedError').
     */
    constructor(message: string, name?: string);
}
