const express = require('express');
const bodyParser = require('body-parser');

require('dotenv').config()
const db = process.env.DB || "mongodb://localhost:27017/book-a-table";
const port = process.env.PORT || 3000;
const url = process.env.URL || "localhost";

// create express app
const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse application/json
app.use(bodyParser.json())

// Configuring the database
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

// Connecting to the database
mongoose.connect(db, {
    useNewUrlParser: true
}).then(() => {
    console.log("Successfully connected to the database");
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});

const swaggerJSDoc = require('swagger-jsdoc');

// swagger definition
const swaggerDefinition = {
    info: {
        title: 'Book-A-Table Backend API',
        version: '1.0.0',
        description: 'Book-A-Table RESTful API Documentation with Swagger',
    },
    host: `${url}:${port}`,
    basePath: '/api/v1',
};

// options for the swagger docs
const options = {
    // import swaggerDefinitions
    swaggerDefinition: swaggerDefinition,
    // path to the API docs
    apis: [
        //models
        './**/models/*.js',

        //routes
        './**/routes/*.js',

        //individual routes
        'src/routes.js'
    ],
};

// initialize swagger-jsdoc
const swaggerSpec = swaggerJSDoc(options);

// serve swagger
app.get('/swagger.json', function (req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.send(swaggerSpec);
});

// initialize swagger-ui-express
const swaggerUi = require('swagger-ui-express');

// combine swagger-jsdoc & swagger-ui-express
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

//route
require('./src/routes')(app);

// listen for requests
app.listen(port, () => {
    console.log(`Server is running on port ${port}.`)
})
