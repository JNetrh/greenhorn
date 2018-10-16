# 3rd Practical Class: Getting Started with Express

# Update your code

```bash
git fetch --all
git reset --hard cngroup/practical-03
cd frontend
npm install
cd ../backend
npm install
npm run build:watch
```

# Express.js

```javascript
app.get('/hello', function(request, response) {
  const data = {
    hello: request.query.name || 'world',
    version: '0.4.2',
    time: new Date(),
    moreItems: [1, 2, { four: 4 }],
  };

  response.header({ 'Content-Type': 'application/json' });
  response.send(JSON.stringify(data));
});
```

# AJAX

```javascript
import axios from 'axios';

...

class ... extends Component {

  ...

  componentDidMount() {
    axios
      .get('http://dev.backend.USERNAME.vse.handson.pro/contacts')
      .then(response => {
        console.log('response', response);
      });
  }
```

# Watch Backend Logs

```bash
tail -F log/app.log
# <^C> to end it

# OR

less +F --follow-name log/app.log
# <^C><Q> to end it
```

# Chrome Plugins

- [JSONView](https://chrome.google.com/webstore/detail/jsonview/chklaanhfefbnpoihckbnefhakgolnmc?hl=en)

# Used NPM Packages

- [express](http://expressjs.com/)
  - [Hello world example](http://expressjs.com/en/starter/hello-world.html)
- [log4js](https://github.com/nomiddlename/log4js-node)
  - app logs to `log/app.log`
- [axios](https://github.com/axios/axios)
