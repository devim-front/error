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

Таким образом, любая ошибка, помимо стандартного сообщения, номера строки и трассировки стека вызовов, должна содержать дополнительную информацию. У ожидаемых ошибок это могут быть параметры, определённые алгоритмом её обработки; у неожиданной - максимум сведений о произошедшем исключении, чтобы упростить отладку. Самым простым решением этой проблемы будет создавать собственные классы исключений, наследуя их от представленного в этой библиотеке [CustomError](https://github.com/devim-front/error/blob/master/docs/classes/customerror.md).

## Служебное имя ошибки

Базовый класс `CustomError`, помимо стандартного сообщения об ошибке, требует указывать в конструкторе её служебное имя. Служебное имя говорит, к какому типу относится данное исключение (FormatError - ошибка формата данных, NetworkError - ошибка соединения с интернетом, и тому подобное). Движок Javascript по умолчанию добавляет это имя перед сообщением об ошибке, что позволяет более точно локализовать исключение во время отладки. Если не использовать класс `CustomError` и наследовать исключение напрямую от системного `Error`, то служебное имя совпадёт с именем класса. Но, так как для большинства проектов используется минификация кода, название класса становится нечитаемым. Поэтому `CustomError` требует указывать его явно и вручную.

Также наличие служебного имени как параметра конструктора намекает, что не стоит создавать экземпляры самого класса `CustomError`.

### Встроенные ошибки

Библиотека предоставляет несколько готовых типов исключений.

#### [ExpectationError](https://github.com/devim-front/error/blob/master/docs/classes/expectationerror.md)

Эта ошибка возникает, когда переменная в коде принимает неожиданное или неподдерживаемое значение. К примеру, есть некая функция, которая в зависимости от своих аргументов может возвращать строку или `undefined`. Мы используем её таким образом, что она должна всегда возвращать строку. Но если по каким-то причинам она всё-таки вернёт `undefined`, нам стоит выбросить исключение этого типа.

#### [ArgumentError](https://github.com/devim-front/error/blob/master/docs/classes/argumenterror.md)

Частный случай `ExpectationError`. Возникает, когда аргумент, переданный в метод, имеет неожиданное значение. К примеру, есть метод, который находит сущность по её идентификатору (целому неотрицательному числу). Если в этот метод было передано отрицательное число, разумно выбросить исключение `ArgumentError`.

#### [NotSupportedError](https://github.com/devim-front/error/blob/master/docs/classes/notsupportederror.md)

Эта ошибка выбрасывается, когда в коде происходит попытка совершить запрещённое действие. К примеру, у некоего класса нельзя создавать экземпляры. В таком случае следует выбрасывать в конструкторе это исключение или его производные.

#### [NotImplementedError](https://github.com/devim-front/error/blob/master/docs/classes/notimplementederror.md)

Эта ошибка выбрасывается, когда в коде происходит попытка использовать функционал, который ещё не реализован. Например,
в процессе написания кода мы объявили функцию, которая должна совершить некие вычисления, а затем вернуть результат, который мы будет использовать в дальнейшем. Но, чтобы не отвлекаться от основного алгоритма, мы оставили написание тела функции на потом. Чтобы избежать ситуации, при которой программист забудет реализовать функционал, следует выбрасывать внутри тела `NotImplementedError`.

#### [UnknownError](https://github.com/devim-front/error/blob/master/docs/classes/unknownerror.md)

Эта ошибка выбрасывается, когда невозможно определить, к какому типу отнести данное исключение. К примеру, мы создаём типизированные исключения для сторонней библиотеки, которая выбрасывает только стандартные `Error`. Мы определили, какие ошибки выбрасывает сама библиотека, создали классы для самых распространенных случаев, и, перехватывая ошибки библиотеки, генерируем собственные исключения. Но при этом всегда остаётся вероятность, что мы покрыли типами не весь спектр ошибок.Для этих неизвестных и следует использовать класс `UnknownError` и его производные.

## API

Документация находится [в этом разделе](https://github.com/devim-front/error/tree/master/docs).

## Пример

Чтобы разобраться, как создавать и использовать собственные классы исключений, приведём пример. Допустим, мы отправляем запрос на получение списка статей из категории.

Вначале опишем базовый вариант функции, которая получает данные от API:

```typescript
// fetchArticles.ts
export const fetchArticles = async (category: number) =>
  fetch(`/api/articles?categoryId=${category}`, {
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  }).json();
```

Этот вариант не является отказоустойчивым, поскольку не предусматривает возникновение ошибок. Предположим, что у пользователя пропадет соединение с интернетом во время обращения к API. Если это случится, нам нужно будет показать соответствующее уведомление в интерфейсе. Чтобы "поймать" эту ситуацию, следует использовать соответствующую ошибку:

```typescript
// NetworkError.ts
import { CustomError } from '@devim-front/error';

export class NetworkError extends CustomError {
  public static getMessage(url: string, error: Error) {
    return `An error occurred while accessing the URL "${url}": ${error.message}`;
  }

  public readonly error: Error;
  public readonly url: string;

  public constructor(
    url: string,
    error: Error,
    message?: string,
    name: string = 'NetworkError'
  ) {
    const finalMessage =
      message == null ? NetworkError.getMessage(url, error) : message;

    super(name, message);

    this.error = error;
    this.url = url;
  }
}
```

И, соответственно, вызывать её в нашей функции:

```typescript
// fetchArticles.ts
import { NetworkError } from './NetworkError';

export const fetchArticles = async (category: number) => {
  const url = `/api/articles?categoryId=${category}`;
  let response: Response;

  try {
    response = await fetch(url, {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    });
  } catch (error) {
    throw new NetworkError(url, error);
  }

  return response.json();
};
```

Теперь, используя функцию `fetchArticles` мы сможет среагировать на проблемы с сетью:

```typescript
// main.ts
import { NetworkError } from './NetworkError';
import { fetchArticles } from './fetchArticles';

export const main = async () => {
  let articles: any[];

  try {
    articles = await fetchArticles(1);
  } catch (error) {
    if (error instanceof NetworkError) {
      // Show network warning.
      return;
    }

    throw error;
  }
};
```

Далее. Может возникнуть неожиданное исключение в самом API, из-за которого оно вернёт не JSON, а некий непарсируемый текст. В таком случае нужно оперативно оповестить разработчиков API. Сделать это можно с помощью типизированного исключения:

```typescript
// ParsingError.ts
import { CustomError } from './CustomError';

export class ParsingError extends CustomError {
  public static getMessage(url: string, error: Error) {
    return `An error occurred while parsing the response from "${url}": ${error.message}`;
  }

  public readonly response: string;
  public readonly error: Error;
  public readonly url: string;

  public constructor(
    url: string,
    response: string,
    error: Error,
    message?: string,
    name: string = 'ParsingError'
  ) {
    const finalMessage =
      message == null ? ParsingError.getMessage(url, error) : message;

    super(name, message);

    this.response = response;
    this.error = error;
    this.url = url;
  }
}
```

```typescript
// fetchArticles.ts
import { NetworkError } from './NetworkError';
import { ParsingError } from './ParsingError';

export const fetchArticles = (category: number) => {
  const url = `/api/articles?categoryId=${category}`;
  let response: Response;

  try {
    response = await fetch(url, {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    });
  } catch (error) {
    throw new NetworkError(url, error);
  }

  let json: any;

  try {
    json = await response.json();
  } catch (error) {
    const text = await response.text();
    throw new ParsingError(url, text, error);
  }

  return json;
};
```

```typescript
// main.ts
import { NetworkError } from './NetworkError';
import { ParsingError } from './ParsingError';
import { fetchArticles } from './fetchArticles';

export const main = async () => {
  let articles: any[];

  try {
    articles = await fetchArticles(1);
  } catch (error) {
    if (error instanceof NetworkError) {
      // Показываем предупреждение в интерфейса.
      return;
    }

    if (error instanceof ParsingError) {
      // Показываем предупреждение.
      throw error;
    }

    throw error;
  }
};
```

Заметьте, в последнем файле `main.ts` мы не заглушили ошибку, а пробросили её дальше оператором `throw`. Это было сделано потому, что первая ошибка `NetworkError` - ожидаемая, а вот `ParsingError` - неожиданная.

Далее. Предположим, что API не возвращает ничего и ломается, возвращая код ответа 500 и выше. Следует обработать и этот случай аналогичным образом (для сокращения не станем приводить класс ошибки `ServerError` и обработку этого исключения в `main.ts`):

```typescript
// fetchArticles.ts
import { NetworkError } from './NetworkError';
import { ParsingError } from './ParsingError';
import { ServerError } from './ServerError';

export const fetchArticles = (category: number) => {
  const url = `/api/articles?categoryId=${category}`;
  let response: Response;

  try {
    response = await fetch(url, {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    });
  } catch (error) {
    throw new NetworkError(url, error);
  }

  if (response.status >= 500) {
    throw new ServerError(url, status);
  }

  let json: any;

  try {
    json = await response.json();
  } catch (error) {
    const text = await response.text();
    throw new ParsingError(url, text, error);
  }

  return json;
};
```

Очевидно, что `ServerError` будет неожиданным исключением. Далее, представим, будто переданного нами идентификатора категории не существует, или получение статей из этой категории требует авторизации:

```typescript
// fetchArticles.ts
import { NetworkError } from './NetworkError';
import { ParsingError } from './ParsingError';
import { ServerError } from './ServerError';
import { NotFoundError } from './NotFoundError';
import { NotAuthorizedError } from './NotAuthorizedError';

export const fetchArticles = (category: number) => {
  const url = `/api/articles?categoryId=${category}`;
  let response: Response;

  try {
    response = await fetch(url, {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    });
  } catch (error) {
    throw new NetworkError(url, error);
  }

  const { status } = response;

  if (status >= 500) {
    throw new ServerError(url, status);
  }

  if (status === 401 || status === 403) {
    throw new NotAuthorizedError(url);
  }

  if (status === 404) {
    throw new NotFoundError(url);
  }

  let json: any;

  try {
    json = await response.json();
  } catch (error) {
    const text = await response.text();
    throw new ParsingError(url, text, error);
  }

  return json;
};
```

Обе описанных выше ошибки - ожидаемые. Но мы пока не учли, что кроме поддерживаемых 500+, 401, 403, 404 и 200 сервер может отдать и другие статусы. Мы не готовы к ним, так что генерируем ошибку:

```typescript
// fetchArticles.ts
import { NetworkError } from './NetworkError';
import { ParsingError } from './ParsingError';
import { ServerError } from './ServerError';
import { NotFoundError } from './NotFoundError';
import { NotAuthorizedError } from './NotAuthorizedError';
import { UnknownStatusError } from './UnknownStatusError';

export const fetchArticles = (category: number) => {
  const url = `/api/articles?categoryId=${category}`;
  let response: Response;

  try {
    response = await fetch(url, {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    });
  } catch (error) {
    throw new NetworkError(url, error);
  }

  const { status } = response;

  if (status >= 500) {
    throw new ServerError(url, status);
  }

  if (status === 401 || status === 403) {
    throw new NotAuthorizedError(url);
  }

  if (status === 404) {
    throw new NotFoundError(url);
  }

  if (status !== 200) {
    throw new UnknownStatusError(url, status);
  }

  let json: any;

  try {
    json = await response.json();
  } catch (error) {
    const text = await response.text();
    throw new ParsingError(url, text, error);
  }

  return json;
};
```

Но и это ещё не всё. Допустим, на сервере ошибка, и вместо массив статей, он возвращает какой-либо другой объект:

```typescript
// fetchArticles.ts
import { NetworkError } from './NetworkError';
import { ParsingError } from './ParsingError';
import { ServerError } from './ServerError';
import { NotFoundError } from './NotFoundError';
import { NotAuthorizedError } from './NotAuthorizedError';
import { UnknownStatusError } from './UnknownStatusError';
import { FormatError } from './FormatError';

export const fetchArticles = (category: number) => {
  const url = `/api/articles?categoryId=${category}`;
  let response: Response;

  try {
    response = await fetch(url, {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    });
  } catch (error) {
    throw new NetworkError(url, error);
  }

  const { status } = response;

  if (status >= 500) {
    throw new ServerError(url, status);
  }

  if (status === 401 || status === 403) {
    throw new NotAuthorizedError(url);
  }

  if (status === 404) {
    throw new NotFoundError(url);
  }

  if (status !== 200) {
    throw new UnknownStatusError(url, status);
  }

  let json: any;

  try {
    json = await response.json();
  } catch (error) {
    const text = await response.text();
    throw new ParsingError(url, text, error);
  }

  // Можно написать и более детальную валидацию. Зависит от того, насколько
  // сильно вы готовы пожертвовать производительностью функцию в угоду
  // стабильности кода.
  const isValid = Array.isArray(json);

  if (!isValid) {
    throw new FormatError(url, json);
  }

  return json as any[];
};
```

На этом этапе кажется, будто мы покрыли все варианты поведения сервера. Но осталась вероятность ошибки программиста, который будет использовать нашу функцию получения списка статей. Чтобы исключить и этот вариант, проверим входные параметры функции:

```typescript
// fetchArticles.ts
import { ArgumentError } from '@devim-front/error';
import { NetworkError } from './NetworkError';
import { ParsingError } from './ParsingError';
import { ServerError } from './ServerError';
import { NotFoundError } from './NotFoundError';
import { NotAuthorizedError } from './NotAuthorizedError';
import { UnknownStatusError } from './UnknownStatusError';
import { FormatError } from './FormatError';

export const fetchArticles = (category: number) => {
  if (Number.isInteger(category) || category <= 0) {
    throw new ArgumentError('fetchArticles', 'category', 'valid ID', category);
  }

  const url = `/api/articles?categoryId=${category}`;
  let response: Response;

  try {
    response = await fetch(url, {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    });
  } catch (error) {
    throw new NetworkError(url, error);
  }

  const { status } = response;

  if (status >= 500) {
    throw new ServerError(url, status);
  }

  if (status === 401 || status === 403) {
    throw new NotAuthorizedError(url);
  }

  if (status === 404) {
    throw new NotFoundError(url);
  }

  if (status !== 200) {
    throw new UnknownStatusError(url, status);
  }

  let json: any;

  try {
    json = await response.json();
  } catch (error) {
    const text = await response.text();
    throw new ParsingError(url, text, error);
  }

  // Можно написать и более детальную валидацию. Зависит от того, насколько
  // сильно вы готовы пожертвовать производительностью в угоду стабильности.
  const isValid = Array.isArray(json);

  if (!isValid) {
    throw new FormatError(url, json);
  }

  return json as any[];
};
```

Это - итоговый вариант функции. Он выглядит параноидальным, но при этом, позволяет корректно и по-разному реагировать на любые неполадки: от ожидаемых, до неожиданных.
