# Taskboard for Errors

This is the coding challenge for application to [Travelcircus](http://travelcircus.de) company.

This app helps to manage tasks by moving them between panels from ‘backlog’ to ‘unresolved’, and from ‘unresolved’ to ‘resolved’, accordingly. Any task moved accidentally from ‘unresolved’ panel to ‘resolved’ can be moved back to ‘unresolved’.\
Additionally, there is a possibility to click on <button>Undo last action</button> button.

Here are the main features I’ve developed:
- Fetching data from an **API** written on python and rendering it.
- **Redux** store to save initial data, to move tasks between panels and to save last action.
- **Design** from scratch using [styled-components](https://styled-components.com).
- Design is **responsive**, starting from 320px.
- **Mobile view** with a slider [Swiper](https://swiperjs.com).
- **End-to-end** testing using [Cypress](https://www.cypress.io).
- **Linting** for JavaScript ([Eslint](https://eslint.org)) and styled-components([stylelint](https://stylelint.io))
- Typechecking with [PropTypes](https://www.npmjs.com/package/prop-types)
- **CI/CD pipeline** using GitHub Actions (installing frontend and backend, linting, e2e tests, health check, notifications to Slack, deploying to production on Heroku (https://dashboard-for-errors.herokuapp.com - currently only frontend))
## Available Scripts

In the project directory, you can run:
### `npm start`
Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run build`
Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.\
The build is minified and the filenames include the hashes.

### `npm run lint`
Runs [Eslint](https://eslint.org) to check for any errors in JavaScript.

### `npm run lint:css`
Runs [stylelint](https://stylelint.io) to check for any errors in styles

### `npm run cypress:open`
Opens [Cypress](https://www.cypress.io) to run end-to-end tests.

## Installation

- Clone this repo to your local machine using: `https://github.com/gvirinko/dashboard_for_errors`.
- Launch the backend using `cd backend` && `python3 -m api` commands.

- Launch the frontend using: `npm install` and `npm start` commands.
- Open http://localhost:3000 to view it in the browser. The page will automatically reload if you make changes to the code.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
