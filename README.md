# [4IT445: Agilní vývoj webových aplikací](http://4it445.vse.cz/) na [VŠE](https://www.vse.cz/)

## JavaScript

We will be using [Node.js](https://nodejs.org/) v8.12.0.
New JavaScript features (ES2015) are "enabled" for for all modern browsers with [Babel](https://babeljs.io/).

### Reference

- [JavaScript reference on MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference)
- [Learn ES2015](https://babeljs.io/docs/en/learn) + more:
  - [class properties](http://babeljs.io/docs/plugins/transform-class-properties/)
  - [object rest spread](http://babeljs.io/docs/plugins/transform-object-rest-spread/)
  - [async functions](http://babeljs.io/docs/plugins/syntax-async-functions/)

### Literature

- [You Don't Know JS (book series)](https://github.com/getify/You-Dont-Know-JS)
  - [Up & Going](https://github.com/getify/You-Dont-Know-JS/blob/master/up%20&%20going/README.md)
  - [Scope & Closures](https://github.com/getify/You-Dont-Know-JS/blob/master/scope%20%26%20closures/README.md)
  - [this & Object](https://github.com/getify/You-Dont-Know-JS/blob/master/this%20&%20object%20prototypes/README.md)
  - [ES6 & Beyond](https://github.com/getify/You-Dont-Know-JS/blob/master/es6%20&%20beyond/README.md)
- [JavaScript: The Good Parts](http://shop.oreilly.com/product/9780596517748.do)

### JavaScript Packages

- [yarn CLI docs](https://yarnpkg.com/en/docs/cli/)
- Useful commands:
  - `yarn install` (install local dependencies - based on `package.json` and `yarn.lock` files)
  - `yarn add <package-name>`
  - `yarn run`
  - `yarn <script-name>`
- Search for packages:
  - [npmjs.com](https://www.npmjs.com/)
  - **[js.coach/react](https://js.coach/react)**

### React

- **[React docs](https://facebook.github.io/react/docs/)**
- app is created using [create-react-app](https://github.com/facebook/create-react-app)

## Server Setup

## SSH

- `ssh username@vse.handson.pro`
- frontend code: `cd ~/code/cviceni/frontend`

### Domains

- [dev.frontend.**username**.vse.handson.pro](http://dev.frontend.username.vse.handson.pro)
- [frontend.**username**.vse.handson.pro](http://frontend.username.vse.handson.pro)
  - requires `yarn build`
