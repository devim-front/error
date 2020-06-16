[@devim-front/error](../README.md) › [ExpectationError](expectationerror.md)

# Class: ExpectationError

Ошибка, которая возникает, когда переменная в коде приобретает неожиданное
или неподдерживаемое значение.

## Hierarchy

  ↳ [CustomError](customerror.md)

  ↳ **ExpectationError**

## Index

### Constructors

* [constructor](expectationerror.md#markdown-header-constructor)

### Properties

* [actual](expectationerror.md#markdown-header-readonly-actual)
* [expected](expectationerror.md#markdown-header-readonly-expected)
* [subject](expectationerror.md#markdown-header-readonly-subject)

### Methods

* [formatActual](expectationerror.md#markdown-header-static-formatactual)

## Constructors

### <a id="markdown-header-constructor" name="markdown-header-constructor"></a>  constructor

\+ **new ExpectationError**(`subject`: string, `expected`: string, `actual`: any, `message?`: undefined | string, `name`: string): *[ExpectationError](expectationerror.md)*

*Overrides [CustomError](customerror.md).[constructor](customerror.md#markdown-header-constructor)*

Создает экземпляр ошибки.

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`subject` | string | - | Описание переменной, которая приобрела неверное значение (например, 'phone', 'id', 'DateHelper.format(value)'). |
`expected` | string | - | Описание ожидаемого значения (например, 'non-empty string', 'greater than zero'). |
`actual` | any | - | Реальное значение. |
`message?` | undefined &#124; string | - | Сообщение об ошибке (по умолчанию генерируется на основе предыдущих параметров). |
`name` | string | "ExpectationError" | Служебное имя ошибки (по умолчанию 'ExpectationError').  |

**Returns:** *[ExpectationError](expectationerror.md)*

## Properties

### <a id="markdown-header-readonly-actual" name="markdown-header-readonly-actual"></a> `Readonly` actual

• **actual**: *any*

Полученное значение.

___

### <a id="markdown-header-readonly-expected" name="markdown-header-readonly-expected"></a> `Readonly` expected

• **expected**: *string*

Описание ожидаемого значения.

___

### <a id="markdown-header-readonly-subject" name="markdown-header-readonly-subject"></a> `Readonly` subject

• **subject**: *string*

Название значения, которое приобрело неверное значение.

## Methods

### <a id="markdown-header-static-formatactual" name="markdown-header-static-formatactual"></a> `Static` formatActual

▸ **formatActual**(`actual`: any): *string*

Преобразует реальное значение переменной в строковый формат для вставки
в сообщение об ошибке.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`actual` | any | Реальное значение.  |

**Returns:** *string*
