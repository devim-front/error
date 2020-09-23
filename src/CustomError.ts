/**
 * Пользовательская ошибка. Служит базовым классов для всех прочих ошибок.
 * Помимо сообщения, позволяет указать служебное имя ошибки.
 */
export class CustomError extends Error {
  /**
   * Создает экземпляр ошибки с указанным текстом и служебным именем.
   *
   * @param name Служебное имя исключения (RuntimeError, FormatError и тому
   * подобное).
   * @param message Текст сообщения об ошибке.
   */
  public constructor(name: string, message: string) {
    super(message);
    this.name = name;

    // fix for https://github.com/Microsoft/TypeScript-wiki/blob/master/Breaking-Changes.md#extending-built-ins-like-error-array-and-map-may-no-longer-work
    Object.setPrototypeOf(this, CustomError.prototype);
  }
}
