import { CustomError } from './CustomError';
/**
 * Ошибка, которая возникает, когда переменная в коде приобретает неожиданное
 * или неподдерживаемое значение.
 */
export declare class ExpectationError extends CustomError {
    /**
     * Преобразует реальное значение переменной в строковый формат для вставки
     * в сообщение об ошибке.
     *
     * @param actual Реальное значение.
     */
    static formatActual(actual: any): string;
    /**
     * Генерирует сообщение об ошибке на основе её параметров.
     *
     * @param subject Описание переменной, которая приняла неожиданное значение.
     * @param expected Описание ожидаемого значения.
     * @param actual Реальное значение.
     */
    private static getMessage;
    /**
     * Название значения, которое приобрело неверное значение.
     */
    readonly subject: string;
    /**
     * Описание ожидаемого значения.
     */
    readonly expected: string;
    /**
     * Полученное значение.
     */
    readonly actual: any;
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
    constructor(subject: string, expected: string, actual: any, message?: string, name?: string);
}
