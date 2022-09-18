# Porter React/blockfrost-js
React/[blockfrost-js](https://github.com/blockfrost/blockfrost-js) deployed on [Porter](https://react-blockfrost-2f2f5a5c7fe7f52f.onporter.run). 
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). 
<img src="frontend/screenshots/0_HomePage0.png"/>

### [`/package.json/scripts`](package.json#L5)
Porter will run "start" [script](package.json#L5).
```json
"scripts": {
  "start": "cd backend && npm start",
  "build": "cd frontend && npm run build"
}
```

## Porter app dashboard
Container settings:
```
- Container Port = 55555
```

Environment variables:
```
- BF_PID = Blockfrost API Key
```
