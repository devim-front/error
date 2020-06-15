/**
 * Пользовательская ошибка. Служит базовым классов для всех прочих ошибок.
 * Помимо сообщения, позволяет указать служебное имя ошибки.
 */
export declare class CustomError extends Error {
    /**
     * Создает экземпляр ошибки с указанным текстом и служебным именем.
     *
     * @param name Служебное имя исключения (RuntimeError, FormatError и тому
     * подобное).
     * @param message Текст сообщения об ошибке.
     */
    constructor(name: string, message: string);
}
