# Team Project Setup Guide

In project team you share one SSH login and one MySQL login + database.
Login info is in your mail.

Setup is almost same as on practical classes.
Project is placed in `~/code/project`.

In `~/code/project` is "placeholder" code, you should move or delete it and place your project code to `~/code/project` folder.

## Deployment

Good way to deploy code is to SSH to project account and generate new SSH key.
You have two options:

1. Key with password (this requires that you share the key password in team).
2. Key without password (comfortable, but maybe less secure, who has key has access to the project code).

Add public part of the key (`cat ~/.ssh/id_rsa.pub` if you named the key `id_rsa`) as a **Deploy key** in GitHub/Bitbucket/... project settings
([more info here](https://developer.github.com/guides/managing-deploy-keys/#deploy-keys)).
Most of the times Deploy keys have read-only access, which is good (depends on git hosting).

This enables you to `git clone ...` and `git fetch ...` project from project account.

Now you can do:

```bash
cd ~/code
mv project project-old
git clone YOUR_PROJECT_CLONE_URL project
```

This will clone your project to `~/code/project` folder.

(`YOUR_PROJECT_CLONE_URL` should look like `git@github.com:cngroupdk/vse-4it445.git` in case of GitHub and SSH)

## Setup Using Skeleton from Practical Classes

This describes steps required after cloning your git repo which is based on [practical classes skeleton](https://github.com/cngroupdk/vse-4it445).

If you are using custom project setup jump to [Setup Custom Project](#setup-custom-project).

### Dev Frontend

Add `"main": "node_modules/react-scripts/scripts/start.js"` to `package.json` so it looks like this:

```json
{
  "name": "frontend",
  "version": "0.1.0",
  "main": "node_modules/react-scripts/scripts/start.js",
  "private": true,
  ...
}
```

### Production Frontend Build

The best way to present project is a build version (build compresses JavaScript and turns on optimizations in React).

Use `npm run build` to update build folder.
Then open URL without then `dev` part [http://frontend.teamx1.vse.handson.pro/](http://frontend.teamx1.vse.handson.pro/) (use your team login in URL).

### Backend

Remember copy and edit `.env.example` to `.env` and add team project MySQL login info.

### Finalize

Remember to `npm install` and `touch tmp/restart.txt` in both `frontend` and `backend` after applying steps above.

## Setup Custom Project

Following project structure is required:

```
~/
  code/
    project/
      frontend/
        index.js       <- or use "main" in package.json (see bellow)
        package.json
        tmp/
          restart.txt
        build/         <- this is for production version: http://frontend.teamXX.vse.handson.pro
          index.html      (static hosting with `/api` proxy)
          ...
      backend/
        index.js       <- or use "main" in package.json (see bellow)
        package.json
        tmp/
          restart.txt
```

Features and Requirements:

- `/api` proxy:
  - for dev and production frontend all requests to `/api` goes to `/api` URL of your backend
  - so all:
    - [http://frontend.teamx1.vse.handson.pro/api/products](http://frontend.teamx1.vse.handson.pro/api/products)
    - [http://dev.frontend.teamx1.vse.handson.pro/api/products](http://dev.frontend.teamx1.vse.handson.pro/api/products)
    - goes to: [http://dev.backend.teamx1.vse.handson.pro/api/products](http://dev.backend.teamx1.vse.handson.pro/api/products)
  - this will work even on local development, if you use the skeleton from practical classes and run your backend on port 3001 (see `"proxy"` in [`frontend/package.json`](https://github.com/cngroupdk/vse-4it445/blob/master/frontend/package.json))
    - It may seem that local version do not work when you try to open [http://localhost:3000/api/products](http://localhost:3000/api/products). This is by design, because browser sends `text/html` accept header to the proxy and this bypasses the proxy. But if you try it in the application `axios('/api/products')` or with API testing tool like [Postman](https://www.getpostman.com/) it will work ([see more info here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#proxying-api-requests-in-development)).
- `index.js` or `"main"` in `package.json`:
  - Both `frontend` and `backend` requires that server can be stated using "`node .`" command.
  - To make this workd you have two options:
    - create `index.js` (eg: `backend/index.js`),
    - or add `"main": "path/to/main.js"` to your `package.json` (see [example for projects created using `create-react-app`](#dev-frontend)).
- for custom LoopBack backend created using `slc loopback` command see [Fix Custom LoopBack Backend](#fix-custom-loopback-backend).

### Fix Custom LoopBack Backend

To make LoopBack work with Phusion Passenger that is running on server there is small change required in `server/server.js`.

Add `GLOBAL.PhusionPassenger` to `if` that determins if server should start.

So this in `backend/server/server.js`:

<!-- prettier-ignore -->
```js
boot(app, __dirname, function(err) {
  if (err) throw err;

  // start the server if `$ node server.js`
  if (require.main === module)
    app.start();
});
```

should look like this:

<!-- prettier-ignore -->
```js
boot(app, __dirname, function(err) {
  if (err) throw err;

  // start the server if `$ node server.js`
  if (require.main === module || GLOBAL.PhusionPassenger) // <-- here is the change
    app.start();
});
```
