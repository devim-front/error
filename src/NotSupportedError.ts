import { CustomError } from './CustomError';

/**
 * Ошибка, которая возникает, когда происходит попытка совершить
 * запрещённое действие. Например, запрещено создавать экземпляры некоего
 * класса. В таком случае внутри конструктора этого класса можно выбрасывать
 * это исключение.
 */
export class NotSupportedError extends CustomError {
  /**
   * Создает экземпляр ошибки.
   *
   * @param message Сообщение об ошибке.
   * @param name Служебное имя класса. По умолчанию 'NotSupportedError'.
   */
  public constructor(message: string, name: string = 'NotSupportedError') {
    super(name, message);
  }
}
