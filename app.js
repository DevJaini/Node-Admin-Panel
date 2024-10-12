const express = require('express');
const path = require('path');
const ejs = require('ejs');
const nodemon = require('nodemon');
const bodyParser = require('body-parser');
const app = express();
const router = require('./routes/auth');

app.set('views',path.join(__dirname,'views'));
app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/public'));

    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());

app.use('/', router);
app.use('/user', router);

const cors = require("cors");
app.use(cors());

app.use(require("./helper/error.helper").handleJoiErrors);

app.use(require("./helper/error.helper").handleErrors);

//Server listening
app.listen(3000, () => {
    console.log(`Listening on port 3000...`)
});