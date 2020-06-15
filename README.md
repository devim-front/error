# Devim Front: Error

Содержит базовый класс ошибки и предоставляет несколько стандартных классов ошибок.

## Установка

Подключите этот пакет в зависимости:

```bash
npm i -S @devim-front/error
```

## Общие концепции

О том, что такое ошибки (исключения) и зачем они нужны в Javascript, можно почитать в [соответствующей статье](https://learn.javascript.ru/custom-errors). В дополнение к информации из учебника, можно добавить, что условно ошибки можно разделить на два типа: ожидаемые или неожиданные.

_Ожидаемые ошибки_ - те, которые являются частью логики приложения. К примеру, у пользователя истёк срок действия токена авторизации. Когда он попробует вызвать какой-нибудь метод API, сервер вернёт код `401 Unauthorized`. Для нашего приложения это сигнал о том, что пользователя необходимо перенаправить на страницу авторизации. Возникновение подобной ошибки - часть алгоритма; приложение в таком случае останавливаться не должно.

_Неожиданные ошибки_ - все остальные. Возникновение неожиданной ошибки говорит разработчику о том, что приложение работает неверно и требует отладки. Если в приложении возникла неожиданная ошибка, то либо часть приложения, либо всё приложение целиком должно "упасть". Грубейший просчёт - подавлять такие исключения с помощью пустого блока `catch` или аналогичным образом: это лишь маскирует проблему, значительно усложняя будущую отладку. Использовать более "продвинутый" антипаттерн `catch (e) { console.error(e); }` тоже не стоит: да, так мы получаем сообщение в консоли, но лишаем наш код возможности организованно среагировать на этот исключение (к примеру, отправить его во внешний логгер). Таким образом, узнать о проблеме в приложении можно будет лишь постоянно глядя в консоль, что удаётся далеко не всегда. Повторим ещё раз: возникновение неожиданной ошибки всегда должно приводить к краху приложения или как минимум его части.

Таким образом, любая ошибка, помимо стандартного сообщения, номера строки и трассировки стека вызовов, должна содержать дополнительную информацию. У ожидаемых ошибок это могут быть параметры, определённые алгоритмом её обработки; у неожиданной - максимум сведений о произошедшем исключении, чтобы упростить отладку. Самым простым решением этой проблемы будет создавать собственные классы исключений, наследуя их от представленного в этой библиотеке `CustomError`.

## Служебное имя ошибки

Базовый класс `CustomError`, помимо стандартного сообщения об ошибке, требует указывать в конструкторе её служебное имя. Служебное имя говорит, к какому типу относится данное исключение (FormatError - ошибка формата данных, NetworkError - ошибка соединения с интернетом, и тому подобное). Движок Javascript по умолчанию добавляет это имя перед сообщением об ошибке, что позволяет более точно локализовать исключение во время отладки. Если не использовать класс `CustomError` и наследовать исключение напрямую от системного `Error`, то служебное имя совпадёт с именем класса. Но, так как для большинства проектов используется минификация кода, название класса становится нечитаемым. Поэтому `CustomError` требует указывать его явно и вручную.

Также наличие служебного имени как параметра конструктора намекает, что не стоит создавать экземпляры самого класса `CustomError`.

### Встроенные ошибки

Библиотека предоставляет несколько готовых типов исключений.

#### UnknownError

Эта ошибка выбрасывается, когда невозможно определить, к какому типу отнести данное исключение. К примеру, мы создаём типизированные исключения для сторонней библиотеки, которая выбрасывает только стандартные `Error`. Мы определили, какие ошибки выбрасывает сама библиотека, создали классы для самых распространенных случаев, и, перехватывая ошибки библиотеки, генерируем собственные исключения. Но при этом всегда остаётся вероятность, что мы покрыли типами не весь спектр ошибок.Для этих неизвестных и следует использовать класс `UnknownError` и его производные.

## API

Документация находится [в этом разделе](https://github.com/devim-front/error/tree/master/docs).
