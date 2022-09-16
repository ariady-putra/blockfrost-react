# blockfrost-react
React &amp; [blockfrost-js](https://github.com/blockfrost/blockfrost-js) integration.
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### `npm run bf`
Runs the app concurrently with `node server.js`.\
`npm i concurrently`\
`package.json`:
```json
"scripts": {
  ...
    "bf": "concurrently \"node server\" \"npm start\""
  ...
}
```
