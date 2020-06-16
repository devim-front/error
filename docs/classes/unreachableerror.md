[@devim-front/error](../README.md) › [UnreachableError](unreachableerror.md)

# Class: UnreachableError

Ошибка, которая возникает, когда во время выполнения программа достигает
участка кода, в который попадать не должна.

**`see`** https://github.com/devim-front/error#unreachableerror

## Hierarchy

  ↳ [CustomError](customerror.md)

  ↳ **UnreachableError**

## Index

### Constructors

* [constructor](unreachableerror.md#markdown-header-constructor)

## Constructors

### <a id="markdown-header-constructor" name="markdown-header-constructor"></a>  constructor

\+ **new UnreachableError**(`message?`: undefined | string, `name`: string): *[UnreachableError](unreachableerror.md)*

*Overrides [CustomError](customerror.md).[constructor](customerror.md#markdown-header-constructor)*

Создает экземпляр ошибки.

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`message?` | undefined &#124; string | - | Сообщение об ошибке (задано по умолчанию). |
`name` | string | "UnreachableError" | Служебное имя ошибки (по умолчанию 'UnreachableError').  |

**Returns:** *[UnreachableError](unreachableerror.md)*
