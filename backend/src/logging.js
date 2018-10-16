import log4js from 'log4js';

export const setupLogging = () => {
  log4js.configure({
    appenders: [
      { type: 'console' },
      {
        type: 'file',
        filename: 'log/app.log',
      },
    ],
    replaceConsole: true,
  });
};
