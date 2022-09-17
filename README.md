# blockfrost-heroku
My attempt to deploy React/[blockfrost-js](https://github.com/blockfrost/blockfrost-js) on [Heroku](https://react-blockfrost.herokuapp.com). 
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). 
<img src="frontend/screenshots/0_HomePage0.png"/>

### /package.json/scripts
The scripts in [`/package.json`](package.json) are meant to be run by Heroku.
```json
"scripts": {
  "start": "cd backend && npm run build && npm start",
  "build": "cd frontend && npm i && npm run build"
}
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
