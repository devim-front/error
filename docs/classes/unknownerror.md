[@devim-front/error](../README.md) › [UnknownError](unknownerror.md)

# Class: UnknownError

Представляет неизвестную ошибку. Это исключение следует использовать лишь
тогда, когда невозможно определить, к какому типу относится ошибка. Чаще
всего такая ситуация возникает, когда мы типизируем исключения сторонней
библиотеки.

## Hierarchy

  ↳ [CustomError](customerror.md)

  ↳ **UnknownError**

## Index

### Constructors

* [constructor](unknownerror.md#markdown-header-constructor)

## Constructors

### <a id="markdown-header-constructor" name="markdown-header-constructor"></a>  constructor

\+ **new UnknownError**(`message`: string, `name`: string): *[UnknownError](unknownerror.md)*

*Overrides [CustomError](customerror.md).[constructor](customerror.md#markdown-header-constructor)*

Создает экземпляр ошибки.

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`message` | string | - | Сообщение об ошибке. |
`name` | string | "UnknownError" | Служебное имя ошибки (по умолчанию 'UnknownError').  |

**Returns:** *[UnknownError](unknownerror.md)*
