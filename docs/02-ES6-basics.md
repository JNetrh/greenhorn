# ES6 basic overview

## no var: const / let

Favor `const` over `let` in ES6. In JavaScript, `const` means that the identifier can't be reassigned. Unlike true immutable datatypes a `const` object can have properties mutated!

Use `let` when you need to reassign a variable. The use case for `let` tends to be for-loops or mathematical algorithms.

[Example const, let, var - uncomment const assign - it will fail](https://babeljs.io/repl/#?babili=false&browsers=&build=&builtIns=false&code_lz=MYewdgzgLgBAJgQygmBeGAiCIC2BTeJBDAbgCgyB6SxZNTEKACzwCdSKAbPWWhAJnpZcBRi3bkyfQej4BqaeSA&debug=false&circleciRepo=&evaluate=false&lineWrap=true&presets=es2015%2Creact%2Cstage-2&prettier=false&targets=&version=6.26.0)

## property shorthand notation && spread operator && destructuring

Shorthand is used when the property value has the same name as the property identifier.

The destructuring assignment syntax is a JavaScript expression that makes it possible to unpack values from arrays, or properties from objects, into distinct variables.

Spread allows an iterable(arrays, function arguments, objects) to be expanded in places where zero or more elements/arguments/key-value pairs are expected.

```js
const karlsPersonalData = {
  name: 'Karel Karamel',
  tel: 123456789,
  email: 'karkar@vse.cz',
};

const companyInfo = {
  company: 'VSE',
  streetAddress: 'W. Churchilla 1938/4',
  city: 'Prague',
};

const { name, email } = karlsPersonalData; // destructuring instead of `const name = karlsPersonalData.name
const businessCard = {
  name, // property shorthand -> instead of name: name,
  ...companyInfo, // spread operator instead of `const bussinesCard = Object.assign({ name: name }, companyInfo)
  email,
};
```

[Example property shorthand notation && spread operator && destructuring](https://babeljs.io/repl/#?babili=false&browsers=&build=&builtIns=false&code_lz=MYewdgzgLgBA1gQwE4BsIAUCmSLgSgEQSgRgF4YBvAKBhjAQFtMAuGAcgGllMUZukTXuwA0tGFF5sAjACYAzABYArADYA7AA4AnGLqZGCAJYo27REgsABAG4RMAOmAAvUdQC-AbmrVQkWKCMAA4IYACeAJJgAGYg5FTigSHhZgBqAMoAom500EiYmFAAggAmJfkQEGYA6g4wAMIAFgCuSMCNJiik0trymgD0ijkwwEZQYWboggDmzZhu7j5-0FT0QiIwBsZ87vEWaFg4eITECJ4wvuArAEbNEEZgmJX1yCXxNHQMzBviDn9JoUiMRAP30hhMYi8QA&debug=false&circleciRepo=&evaluate=false&lineWrap=true&presets=es2015%2Creact%2Cstage-2&prettier=false&targets=&version=6.26.0)

## classes

Formalize common JS pattern of simulating class like inheritance hierarchies using functions and prototypes - syntactic sugar over existing prototype based inheritance.

```js
class BusinessCard {
  constructor(companyInfo, personalData) {
    this.cardInfo = {
      ...companyInfo,
      ...personalData,
    };
  }

  readBusinessCard() {
    console.log(this.cardInfo);
  }
}
```

[Example classes](https://babeljs.io/repl/#?babili=false&browsers=&build=&builtIns=false&code_lz=MYGwhgzhAEBCCuECWA7AplAwmATgE2gG8AoaaYAexQgBcd5gaKcAKSgWwAcwUBPASRQAzCgBponNDghUwIACJgaYAJRFSZaDQAWSCADpguPIJHQAvGULQNm6PocdufU2NuaH-ydNkKlYcRs7AF8Abg1g4g0AemicNDA8BGR0LGMWNRIyWLJKagoQNH0QCgBzFh09Q2NXFXDs6MjgoA&debug=false&circleciRepo=&evaluate=false&lineWrap=true&presets=es2015%2Creact%2Cstage-2&prettier=false&targets=&version=6.26.0)

## ES modules

Enables to import function, objects, classes or primitives that are defined and exported by an external module script or other like.

```js
import defaultMember from './module'; // import default from local module
import * as membersName from 'npm-module'; // named import from external module every named export is property of membersName object
import { function1, const2 as importedConst } from './local-module'; // named import from internal module
```

all of above can be combined each of the modules that `export` can have at maximum one default export but zero to multiple named exports

eg.:

```js
//content of module.js
export default class Member { ... }

function function1() { ... }
export function1;

const const2 = 'I am exposed const';
export const2;

const function2 = () => { ... }
export function2

const privateConst = 'I am not exposed for export';
```

[Example modules](https://babeljs.io/repl/#?babili=false&browsers=&build=&builtIns=false&code_lz=JYWwDg9gTgLgBAEwKYDMCGBXANjAskkAIySjhSghDgHIA6AehAgWyWoG44AoUSWOAFRw0AZzggCxKCIByaCWQpVqAOzAgAtExZY2nHuGjwA3mQwqAxjGAQVARgA0cC7ZEwATMLG8jSBAGFXeABfRUoaBiwICzQsLWZWDiA&debug=false&circleciRepo=&evaluate=false&lineWrap=true&presets=es2015%2Creact%2Cstage-2&prettier=false&targets=&version=6.26.0)

## arrow function

An arrow function expression has a shorter syntax than a function expression and does not bind its own this, arguments, super, or new.target (cant be used as constructors). These function expressions are best suited for non-method functions.

```js
const someNoParameterFunction = () => {
  statements;
};
const singleParameterFunction = parameter => ({
  someObjectProperty: parameter,
});
const returnOnlyExpression = stringParameter =>
  `I am string that will be returned and this is the parameter: ${stringParameter}`;
```

## Comparison - new vs old JS

### const, let

```js
  const data = "some data",
  let data2 = "some other",
  data2 = data + data2,
```

```js
  var data = "some data",
  var data2 = "some other",
  data2 = data + data2,
```

### shorthand notation

```js
const businessCard = {
  name,
  email: 'email@example.com',
};
```

```js
const businessCard = {
  name: name,
  email: 'email@example.com',
};
```

### spread operator

```js
const businessCard = {
  name,
  ...companyInfo,
};
```

<!-- prettier-ignore -->
```js
const businessCard = Object.assign(
  { name: name },
  companyInfo,
);
```

### destructuring

```js
const { name, email } = karlsPersonalData;
```

```js
var name = karlsPersonalData.name;
var email = karlsPersonalData.email;
```

### classes

```js
class BusinessCard {
  constructor(companyInfo) {
    this.companyInfo = companyInfo;
  }
}
```

```js
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError('Cannot call a class as a function');
  }
}
var BusinessCard = function BusinessCard(companyInfo) {
  _classCallCheck(this, BusinessCard);
  this.companyInfo = companyInfo;
};
```

### ES modules

```js
import { function1, const2 as importedConst } from './local-module';

export default Member;
```

```js
var _localModule = require('./local-module');

exports.default = Member;
```

### arrow function

```js
() => 'something'; //anonymous function

const someFunction = parameter => `some ${parameter}`;

function someFunction(parameter) {
  return 'some ' + parameter;
}
```

```js
(function() {
  return 'something';
});

var someFunction = function someFunction(parameter) {
  return 'some ' + parameter;
};

function someFunction(parameter) {
  return 'some ' + parameter;
}
```
