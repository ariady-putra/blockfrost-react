# Porter React/blockfrost-js
React/[blockfrost-js](https://github.com/blockfrost/blockfrost-js) deployed on [Porter](https://porter.run). 
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). 
<img src="frontend/screenshots/0_HomePage0.png"/>

### [`/package.json/scripts`](package.json#L5)
Porter will run "start" [script](package.json#L5).
```json
"scripts": {
  "start": "npm run build && cd backend && npm start",
  "build": "cd frontend && npm run build"
}
```

## Porter-Git workflow
#### Initialization
Environment variables at Porter app dashboard:
```
- BF_PID = Blockfrost API Key
- PORT = Container Port
```
