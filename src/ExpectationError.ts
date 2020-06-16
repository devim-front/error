import { CustomError } from './CustomError';

/**
 * Ошибка, которая возникает, когда переменная в коде приобретает неожиданное
 * или неподдерживаемое значение.
 */
export class ExpectationError extends CustomError {
  /**
   * Преобразует реальное значение переменной в строковый формат для вставки
   * в сообщение об ошибке.
   *
   * @param actual Реальное значение.
   */
  public static formatActual(actual: any) {
    const type = typeof actual;

    switch (type) {
      case 'string': {
        return `[string] "${actual}"`;
      }

      case 'undefined':
      case 'function': {
        return `[${type}]`;
      }

      case 'object': {
        if (actual === null) {
          return '[object] null';
        }

        if (Array.isArray(actual)) {
          return '[array]';
        }

        return '[object]';
      }

      default: {
        return `[${type}] ${String(actual)}`;
      }
    }
  }

  /**
   * Генерирует сообщение об ошибке на основе её параметров.
   *
   * @param subject Описание переменной, которая приняла неожиданное значение.
   * @param expected Описание ожидаемого значения.
   * @param actual Реальное значение.
   */
  private static getMessage(subject: string, expected: string, actual: any) {
    const actualText = this.formatActual(actual);
    return `${subject} must be ${expected}; got: ${actualText}`;
  }

  /**
   * Название значения, которое приобрело неверное значение.
   */
  public readonly subject: string;

  /**
   * Описание ожидаемого значения.
   */
  public readonly expected: string;

  /**
   * Полученное значение.
   */
  public readonly actual: any;

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
  public constructor(
    subject: string,
    expected: string,
    actual: any,
    message?: string,
    name: string = 'ExpectationError'
  ) {
    const finalMessage =
      message == null
        ? ExpectationError.getMessage(subject, expected, actual)
        : message;

    super(name, finalMessage);

    this.expected = expected;
    this.subject = subject;
    this.actual = actual;
  }
}
