# blockfrost-heroku
My attempt to deploy React with [blockfrost-js](https://github.com/blockfrost/blockfrost-js) on [Heroku](https://react-blockfrost.herokuapp.com). 
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). 
<img src="/screenshots/0_HomePage0.png"/>

### `npm run build`
```
cd frontend && npm i && react-scripts build
```

### `npm start`
```
node backend/server.js
```

## Heroku-Git workflow
#### Prerequisite
```
sudo snap install heroku
```

#### Initialization
```
heroku login
heroku git:remote -a <HEROKU_APP_NAME>
```

#### Workflow
```
git status
git add .
git commit -m "Commit message"
git push heroku main
```
