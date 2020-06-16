[@devim-front/error](../README.md) › [NotSupportedError](notsupportederror.md)

# Class: NotSupportedError

Ошибка, которая возникает, когда происходит попытка совершить
запрещённое действие. Например, запрещено создавать экземпляры некоего
класса. В таком случае внутри конструктора этого класса можно выбрасывать
это исключение.

## Hierarchy

  ↳ [CustomError](customerror.md)

  ↳ **NotSupportedError**

## Index

### Constructors

* [constructor](notsupportederror.md#markdown-header-constructor)

## Constructors

### <a id="markdown-header-constructor" name="markdown-header-constructor"></a>  constructor

\+ **new NotSupportedError**(`message`: string, `name`: string): *[NotSupportedError](notsupportederror.md)*

*Overrides [CustomError](customerror.md).[constructor](customerror.md#markdown-header-constructor)*

Создает экземпляр ошибки.

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`message` | string | - | Сообщение об ошибке. |
`name` | string | "NotSupportedError" | Служебное имя класса. По умолчанию 'NotSupportedError'.  |

**Returns:** *[NotSupportedError](notsupportederror.md)*
