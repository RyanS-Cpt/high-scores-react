# Challenge: "High Score Tables (React)"

`Challenge Overview`

Make a React app which lists some high score tables. The scores data is provided for you.

## Difficulty Level

This is a beginner challenge. Level 1 can be completed by students who have completed week 1 of the CYF React module.

## Pre-reqs

react props
array.map method as used in React JSX

## To finish level 4

event handling (handle a button click)
Keeping state with the state hook (useState)
Example Screenshot
Level 1 challenge screenshot example.

Example Screenshot

[Example](react-high-score-tables-example-layout.png)

### Level 1 Challenge

Write a React app which displays high score tables for the given data.

Each country must have its own High Score table displayed.

Your app must be hosted on Netlify (see "Hosting" below).

You must make AT LEAST:

HighScoreTable - a table with a country name and a list of player-scores for that country.
PlayerScore - component responsible for displaying a single score by one player (e.g. as one line of the table) (e.g. Neill 2000)
Getting Started
Don't clone this repo.

Make your own React app using create-react-app. See (this guide) if you have forgotten how.

Copy across the score file (or the score file's contents) from this repo to your app, and then import from that file.

Write a plain HTML prototype first for two or three countries (e.g. on codepen). THEN, once you know the HTML you're attempting to create, work on the React version! This is not mandatory but it is recommended.

The data:
The data is available in the file ./scores.js. Here is a raw version of it, suitable for saving.

You can copy this array of data into your App.js or you can import it.

Hosting:
Add your project in github and host it on Netlify.

The github repo name should be: high-scores-react

The netlify site suffix should be -scores

so...

`cyf-YOURGITHUBUSERNAME-scores`

### Level 2

Present the High Score Tables sorted alphabetically by country name

### Level 3

Within each individual table, show the highest scores first - i.e. sort the scores numerically, descending.

### Level 4 - advanced (needs content from React week 2)

Add a single button at the top of the page which toggles the sort order of every high-score-table between ascending and descending by scores. This will require some study about event handlers and the use of a "State hook".

### Level 5 - advanced

Add a "world-wide" table, shown first, which shows the sorted high scores from EVERYONE, regardless of country.

### Bonus

Add your own country and scores!
Add some old-skool videogame icons or animations

## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
