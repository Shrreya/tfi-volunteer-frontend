# React-Redux application
Web app to create &amp; discover volunteering opportunities.

## Tech stack
* Frontend - React + Redux + Material UI
* [Backend](https://github.com/Shrreya/tfi-volunteer-backend) - Node + Express + Parse + MongoDB

## Running locally
```
$ yarn install
$ yarn start
```
App is accessible at http://localhost:3000/

### Environment variables required
REACT_APP_BACKEND_APP_ID, REACT_APP_SERVER_URL </br>
Can be provided through the terminal or a .env file in the root directory

## Project Structure
```bash
├── README.md - This file.
├── package.json # npm package manager file.
├── yarn.lock # automatically generated tree for yarn dependencies.
├── public
│   ├── favicon.ico # React Icon.
│   ├── index.html # App static template.
│   └── manifest.json # Metadata used on Android.
└── src
    ├── actions/ # Info for changes to Redux store.
    ├── assets/ # SVG assets used in UI.
    ├── components/ # Composable React Components.
    ├── middleware/ # Between actions & reducers.
    ├── reducers/ # Handling changes to Redux store.
    ├── utils/ # Utility code such as API & helpers.
    ├── index.css # Global styles.
    ├── index.js # Used for DOM rendering only.
    └── registerServiceWorker.js # Used to serve assets in production from local caches.
```

## Features
* Create a new volunteer opportunity. Provide a title, description, daily hours (limited between 1 to 8) & location for each opportunity.
* Discover opportunities by most recently posted first. Search for opportunities by keywords in the title or by location. Filteration occurs in real time as search query is typed.
* Sign up for a volunteer opportunity. Provide full name, valid email ID and a short reasoning cover letter.

## Relevant Links
* [React](https://reactjs.org/)
* [Redux](https://redux.js.org/)
* [Parse SDK](https://docs.parseplatform.org/js/guide/)
* [Material UI](https://material-ui.com/)
* [React Router](https://github.com/ReactTraining/react-router/tree/master/packages/react-router-dom)
* [Connected React Router](https://github.com/supasate/connected-react-router)
* [Redux Thunk](https://github.com/reduxjs/redux-thunk)
