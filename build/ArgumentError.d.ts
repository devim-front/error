import { ExpectationError } from './ExpectationError';
/**
 * Ошибка, которая возникает, когда в метод в качестве аргумента передается
 * неожданное значение.
 */
export declare class ArgumentError extends ExpectationError {
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
    constructor(func: string, param: string, expected: string, actual: any, message?: string, name?: string);
}
