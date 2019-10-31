CS4550: Web Development

Project Title: NUBAY

Authors: Saif Billah, Andre Dahan, and Ronit Sharma

## 1. State the problem you are trying to solve. Include a description of at least two types of users that would use your Web application. For each of the types of users, provide two goals the user would like to achieve with your Web application.

The problem that we want to solve is that there isn't an easy to use, Northeastern-only marketplace. We want to allow anyone with access to a husky email to buy and sell products and services. Our goal is to make our website a one-stop-shop for any Northeastern student looking to purchase a product or service.

The two types of signed-in users that would use our Web Application are buyers and sellers. The sellers in this case are verified by signing up with a husky email. Sellers can CRUD postings; they can create a posting regarding a product to sell, then have the ability to change their descriptions and prices while also having the ability to delete postings. Seller should have access to their profile and be able to add/edit contact information in case the buyer would like to contact him/her.

The buyers can message sellers, but do not need a husky email to sign up. One goal that a buyer would have is to find products to buy, and a second goal would be to contact a seller for a given product. Buyers can also update their profile information and bookmark products. 

Our application will be open to anonymous (non-signed-in) users as well. These non-signed-in users can search for products, but can’t post their own products to sell or message buyers unless they make an account. 

## 2. State the overall strategy of how you intend to solve the problem

We intend to solve the problem by creating a web application that provides a dynamic navigation that is easy to interpret by any type of users. Our web app will consist of 5 distinct screens: home page, profile page, search/results page, details page, and login/register page. We will first use our favorite UML Editor to create a UML diagram of what our data model of the posting information that interacts with a MongoDB database or JPA will look like. We will create a RESTful Web Service which will use the data model created to interact with our data. We also would like to set rigid architectural requirements to ensure that our web app is as structured as possible. We will use dynamic content loading to avoid reloading the entire page, controllers/event handlers to handle user interaction from buyers/sellers, encode state as part of the URL, and global variables/functions to avoid littering of namespace. We will also use the eBay browse api to allow buyers to search for similar content to the post created by the seller. This api will allow for readonly operations of items and we will use our local database to store information regarding postings. All in all this overall strategy of developing the web app will provide us with a good roadmap to creating a finished product.

Our web app users will fall into 3 different roles. The first role will be an anonymous user, which does not require the user to be signed in. This user will be able to search for products, but not contact sellers, bookmark products, or sell their own products. 

The second role will be a seller, who needs to sign up with a husky email. This will ensure that all of the sellers are verified students or are affiliated with the university. Sellers can CRUD postings; they can create a posting regarding a product to sell, then have the ability to change their descriptions and prices while also having the ability to delete postings. Seller should have access to their profile and be able to add/edit contact information in case the buyer would like to contact him/her.

The third role will be a buyer. The buyers can message sellers, but do not need a husky email to sign up. One goal that a buyer would have is to find products to buy, and a second goal would be to contact a seller for a given product. Buyers can also update their profile information and bookmark products. 

## 3. One of the main requirements is to work with data available from some public, free, Web API. Provide a brief description of the Web API you intend to use

The web API that we plan on using is the eBay browse API. We will use this API to match a buyers search to search eBay postings.  The browse API can allow a user to see a rich selection of elements with a simple keyword or category search. The browse API returns a list of items as well as an item summary for each item. The eBay API allows users to have 5,000 free API requests a day which should be enough for our application. 

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
