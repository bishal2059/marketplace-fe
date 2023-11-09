React app to serve front-end for the [marketplace API](https://github.com/bishal2059/marketplace)

### To configure the app in local machine follow following steps:

#### 1. We need Marketplace-API to run in the background. So, setup using this [link](https://github.com/bishal2059/marketplace)

#### 2. Create an .env file with following components

```
REACT_APP_STRIPEKEY = //public stripe key
REACT_APP_APIURL = //url of the above API
```

#### 3. To install the required dependencies:

#### Run `npm install` in the root directory

#### 4. For Development

#### Run `npm start` in project directory which runs the app in the development mode

Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### 5. For Deployment:

#### Run `npm run build` which builds the app for production to the `build` folder.\

The build is minified and the filenames include the hashes.\
Now the app is ready to be deployed!
