# blockfrost-react
My initial attempt to integrate React with [blockfrost-js](https://github.com/blockfrost/blockfrost-js).
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
<img src="/screenshots/0_HomePage0.png"/>

### `npm run bf`
Runs the app concurrently with [`node server.js`](server.js).\
\
[`package.json`](package.json):
```json
"scripts": {
  ...
    "bf": "concurrently \"node server\" \"npm start\""
  ...
}
```
[`npm i concurrently`](https://www.npmjs.com/package/concurrently)
