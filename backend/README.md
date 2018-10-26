# Backend

## Requirements

- Node.js v8.9.4 or later
- `yarn` (`npm install --global yarn`)

## Install

```sh
yarn install
```

## Run Local Dev Server

Rename `.env.example` to `.env` and fill it with database config (and SMTP if neccessary)

```sh
yarn dev
```

This should create table and associations, too.

## Run Local Production Server

```sh
yarn start
```

Builds and starts the server.

## Production Build

```sh
yarn build
```

## Production Build Watch

```sh
yarn build:watch
```

Runs build each time `.js` file in `./src` is changed.

**Useful for `*.vse.handson.pro` hosting.**

## See Server Logs

```sh
tail -F log/app.log
```
