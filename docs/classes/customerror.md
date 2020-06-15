[@devim-front/error](../README.md) › [CustomError](customerror.md)

# Class: CustomError

Пользовательская ошибка. Служит базовым классов для всех прочих ошибок.
Помимо сообщения, позволяет указать служебное имя ошибки.

## Hierarchy

* Error

  ↳ **CustomError**

  ↳ [UnknownError](unknownerror.md)

## Index

### Constructors

* [constructor](customerror.md#markdown-header-constructor)

## Constructors

### <a id="markdown-header-constructor" name="markdown-header-constructor"></a>  constructor

\+ **new CustomError**(`name`: string, `message`: string): *[CustomError](customerror.md)*

Создает экземпляр ошибки с указанным текстом и служебным именем.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`name` | string | Служебное имя исключения (RuntimeError, FormatError и тому подобное). |
`message` | string | Текст сообщения об ошибке.  |

**Returns:** *[CustomError](customerror.md)*
