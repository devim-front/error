[@devim-front/error](../README.md) › [ArgumentError](argumenterror.md)

# Class: ArgumentError

Ошибка, которая возникает, когда в метод в качестве аргумента передается
неожданное значение.

## Hierarchy

  ↳ [ExpectationError](expectationerror.md)

  ↳ **ArgumentError**

## Index

### Constructors

* [constructor](argumenterror.md#markdown-header-constructor)

### Properties

* [actual](argumenterror.md#markdown-header-readonly-actual)
* [expected](argumenterror.md#markdown-header-readonly-expected)
* [subject](argumenterror.md#markdown-header-readonly-subject)

### Methods

* [formatActual](argumenterror.md#markdown-header-static-formatactual)

## Constructors

### <a id="markdown-header-constructor" name="markdown-header-constructor"></a>  constructor

\+ **new ArgumentError**(`func`: string, `param`: string, `expected`: string, `actual`: any, `message?`: undefined | string, `name`: string): *[ArgumentError](argumenterror.md)*

*Overrides [ExpectationError](expectationerror.md).[constructor](expectationerror.md#markdown-header-constructor)*

Создает экземпляр ошибки.

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`func` | string | - | Название метода (например, 'DateHelper.format'). |
`param` | string | - | Название аргумента (например, 'format'). |
`expected` | string | - | Описание ожидаемого значения (например, 'non-empty string'). |
`actual` | any | - | Реальное значение. |
`message?` | undefined &#124; string | - | Сообщение об ошибке (по умолчанию генерируется на основе предыдущих аргументов). |
`name` | string | "ArgumentError" | Служебное имя ошибки (по умолчанию 'ArgumentError').  |

**Returns:** *[ArgumentError](argumenterror.md)*

## Properties

### <a id="markdown-header-readonly-actual" name="markdown-header-readonly-actual"></a> `Readonly` actual

• **actual**: *any*

*Inherited from [ExpectationError](expectationerror.md).[actual](expectationerror.md#markdown-header-readonly-actual)*

Полученное значение.

___

### <a id="markdown-header-readonly-expected" name="markdown-header-readonly-expected"></a> `Readonly` expected

• **expected**: *string*

*Inherited from [ExpectationError](expectationerror.md).[expected](expectationerror.md#markdown-header-readonly-expected)*

Описание ожидаемого значения.

___

### <a id="markdown-header-readonly-subject" name="markdown-header-readonly-subject"></a> `Readonly` subject

• **subject**: *string*

*Inherited from [ExpectationError](expectationerror.md).[subject](expectationerror.md#markdown-header-readonly-subject)*

Название значения, которое приобрело неверное значение.

## Methods

### <a id="markdown-header-static-formatactual" name="markdown-header-static-formatactual"></a> `Static` formatActual

▸ **formatActual**(`actual`: any): *string*

*Inherited from [ExpectationError](expectationerror.md).[formatActual](expectationerror.md#markdown-header-static-formatactual)*

Преобразует реальное значение переменной в строковый формат для вставки
в сообщение об ошибке.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`actual` | any | Реальное значение.  |

**Returns:** *string*
