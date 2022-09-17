# blockfrost-frontend
My attempt to integrate React with [blockfrost-js](https://github.com/blockfrost/blockfrost-js). 
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). 
<img src="/screenshots/0_HomePage0.png"/>

### `npm start`
Runs the app concurrently with [`node ../backend/server.js`](../backend/server.js).\
\
[`package.json`](package.json):
```json
"scripts": {
  ...
    "start": "conc \"node ../backend/server\" \"react-scripts start\""
  ...
}
```
[`npm i concurrently`](https://www.npmjs.com/package/concurrently)
