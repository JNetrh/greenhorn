# Debugging

## JavaScript & Chrome

- [Chrome DevTools](https://developer.chrome.com/devtools)
  - Use <kbd class="kbd">Ctrl</kbd>+<kbd class="kbd">Shift</kbd>+<kbd class="kbd">I</kbd> (or <kbd class="kbd">Cmd</kbd>+<kbd class="kbd">Opt</kbd>+<kbd class="kbd">I</kbd> on Mac) to open the DevTools.
- [Console API Reference](https://developers.google.com/web/tools/chrome-devtools/console/console-reference)
- [Command Line API Reference](https://developers.google.com/web/tools/chrome-devtools/console/command-line-reference)
- `debugger;`

## React & Redux

- [React Developer Tools](https://github.com/facebook/react-devtools)
- [Redux DevTools Extension](https://github.com/zalmoxisus/redux-devtools-extension)

## Node.js

- [V8 Inspector Integration for Node.js](https://nodejs.org/dist/latest-v6.x/docs/api/debugger.html#debugger_v8_inspector_integration_for_node_js)

```sh
cd backend
npm run dev:debug
```

```sh
cd backend
npm run build
node --inspect --debug-brk build/main.js
```
