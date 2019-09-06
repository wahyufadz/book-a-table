const express = require('express');
const bodyParser = require('body-parser');

require('dotenv').config()
const port = process.env.PORT || 3000;

// create express app
const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse application/json
app.use(bodyParser.json())

// Configuring the database
const db = process.env.DB;
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

require('./src/routes')(app);

// listen for requests
app.listen(port, () => {
    console.log(`Server is running on port ${port}.`)
})
