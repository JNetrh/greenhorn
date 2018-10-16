# 5th Practical Class: DB and ORM

# Docs

- [Sequelize docs](http://docs.sequelizejs.com/)

# Install

```bash
git fetch --all
git reset --hard cngroup/practical-05
cd backend
npm install
```

# Config frontend

1. In `frontend` rename `.env.example` to `.env` and open it
2. Set correct API URL

# Config backend

1. In `backend/src/config/` rename `config.js.example` to `config.js`
2. In both `development` and `production`: fill out your MySQL user, password and database

# Create tables + seed

```bash
cd backend
./node_modules/.bin/sequelize db:migrate
./node_modules/.bin/sequelize db:seed:all --debug
```

# Run `build:watch`

```bash
npm run build:watch
```
