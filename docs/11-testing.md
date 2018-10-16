# 11th Practical Class: Testing

## Unit Testing

### Books

![](https://raw.githubusercontent.com/cngroupdk/vse-4it445/master/docs/img/11-testing-books.jpg)

- [Understanding the Four Rules of Simple Design](https://leanpub.com/4rulesofsimpledesign) by Corey Haines
- [Programování řízené testy](http://techlib.summon.serialssolutions.com/cs-CZ/#!/search/document?ho=t&l=cs-CZ&id=FETCHMERGED-techlib_catalog_0001667512) / [Test Driven Development: By Example](https://www.amazon.com/Test-Driven-Development-Kent-Beck/dp/0321146530/) by Kent Beck

## Testing React

- [Jest](https://facebook.github.io/jest/) (see [Running Tests in `create-react-app`](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#running-tests) for more details about the setup)
  - [Jest assertions](https://facebook.github.io/jest/docs/api.html)
    - use **`expect(...)`** for Jest assertions
  - [mocking functions](https://facebook.github.io/jest/docs/mock-functions.html)
- [`unexpected`](http://unexpected.js.org/)
  - [`unexpected` assertions](http://unexpected.js.org/assertions/any/to-be/)
    - use **`uexpect(...)`** for unexpected assertions
- [`unexpected-react`](http://bruderstein.github.io/unexpected-react/)
  - [`unexpected-react` assertions](http://bruderstein.github.io/unexpected-react/assertions/ReactElement/queried-for/)

## Run Tests

```bash
cd frontend
npm test
```

### Coverage Reporting

```bash
cd frontend
npm test -- --coverage
```

## Test-Driven Development

<img src='https://raw.githubusercontent.com/cngroupdk/vse-4it445/master/docs/img/11-testing-tdd-cycle.png' width='576' alt=''>

## [Conway's Game of Life](https://en.wikipedia.org/wiki/Conway's_Game_of_Life)

The universe of the Game of Life is an infinite two-dimensional orthogonal grid of square cells, each of which is in one of two possible states, alive or dead.

Every cell interacts with its eight neighbours, which are the cells that are horizontally, vertically, or diagonally adjacent.

At each step in time, the following transitions occur:

1. Any live cell with fewer than two live neighbours dies, as if caused by under-population.
2. Any live cell with two or three live neighbours lives on to the next generation.
3. Any live cell with more than three live neighbours dies, as if by over-population.
4. Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.

The initial pattern constitutes the seed of the system.

The first generation is created by applying the above rules simultaneously to every cell in the seed—births and deaths occur simultaneously, and the discrete moment at which this happens is sometimes called a tick (in other words, each generation is a pure function of the preceding one).

The rules continue to be applied repeatedly to create further generations.

## Four Rules of Simple Design

Based on [Understanding the Four Rules of Simple Design](https://leanpub.com/4rulesofsimpledesign).

1. **Tests Pass**
2. **Expresses Intent**
3. **No Duplication (DRY)**
4. **Small**

(rules 2. and 3. have same priority)
