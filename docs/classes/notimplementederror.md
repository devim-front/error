[@devim-front/error](../README.md) › [NotImplementedError](notimplementederror.md)

# Class: NotImplementedError

Ошибка, которая возникает, когда в коде происходит попытка вызвать ещё не
реализованный функционал.

## Hierarchy

  ↳ [CustomError](customerror.md)

  ↳ **NotImplementedError**

## Index

### Constructors

* [constructor](notimplementederror.md#markdown-header-constructor)

## Constructors

### <a id="markdown-header-constructor" name="markdown-header-constructor"></a>  constructor

\+ **new NotImplementedError**(`message`: string, `name`: string): *[NotImplementedError](notimplementederror.md)*

*Overrides [CustomError](customerror.md).[constructor](customerror.md#markdown-header-constructor)*

Создает экземпляр ошибки.

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`message` | string | - | Сообщение об ошибке. |
`name` | string | "NotImplementedError" | Служебное имя ошибки (по умолчанию 'NotImplementedError').  |

**Returns:** *[NotImplementedError](notimplementederror.md)*
