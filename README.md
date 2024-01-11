# Room Price Calculator

Welcome to the room price calculator! The tool is designed to help groups of people calculate how to split up rent between multiple rooms in a co-operative.

The app first asks you to enter the sum of rent you owe for all the rooms, and then the number of rooms there are. For example, say our rent is $1000 dollars, and we have 2 rooms

Rent = $1000  
Rooms = 2

After that, you can add any number of attributes that you like to the calculator, and then weight each attribute in accordance with the proportion of rent that you would like it to account for. So in our current example, say we decide we have three attributes, Square Footage, Closets, and Privacy. We want square footage to account for 80% of rent, Closets to account for 10%, and Privacy accounts for another 10%. So the breakdown would look like:

Square Footage = 80% => $800

Closets = 10% => $100

Privacy = 10% => $100

Then, you can go in to each attribute and specify how many units of each attribute can be assigned to each room. The calculation is agnostic about what kind of units you use. So, for example, with square feet, you could say that Room A is 300sqft, and Room B is 100sqft. You would divide the number of units in each room by the total, derive a percent out of that, and then multiply that percentage by the attribute total, and you get the rooms portion for that attribute. So for example, for the square feet attribute

Room A = 300sqft => 300/400 => 0.75 => 0.75 x $800 => $600

Room B = 100sqft => 100/400 => 0.25 => 0.25 x $800 => $200

Total Units = 400

You do this for each attribute, and then the calculator lets you know how much everyone should pay for their respective rooms.

All roomates have to decide together is what weight to ascribe to each attribute, and what share of each attribute each room gets, and the calculator can do the rest.

Hope you enjoy!

## Getting Started with the Room Price Calculator

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

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

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Testing

We are using a combination of jest for unit tests, and cypress for integration tests. To run the jest tests, type `npm test` into the terminal, and after it runs the first snapshot, type `a`, and it will run all the unit tests.

To run cypress, type `npx cypress open`, and that should start up the browser and run cypress on the application

The cypress file to run can be located at
cypress/e2e/calculator.cy.js

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
