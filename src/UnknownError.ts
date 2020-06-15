import { CustomError } from './CustomError';

/**
 * Представляет неизвестную ошибку. Это исключение следует использовать лишь
 * тогда, когда невозможно определить, к какому типу относится ошибка. Чаще
 * всего такая ситуация возникает, когда мы типизируем исключения сторонней
 * библиотеки.
 */
export class UnknownError extends CustomError {
  /**
   * Создает экземпляр ошибки.
   *
   * @param message Сообщение об ошибке.
   * @param name Служебное имя ошибки (по умолчанию 'UnknownError').
   */
  public constructor(message: string, name: string = 'UnknownError') {
    super(name, message);
  }
}
