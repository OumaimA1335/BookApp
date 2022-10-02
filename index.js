require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const logger = require('morgan');
const bodyParser = require('body-parser');
const cross = require('cors');
const router = require('./routes/book-routes');
const appBook = express();

const connectionParams = {
    useNewUrlParser: true, 
    useUnifiedTopology: true
};
mongoose.connect(process.env.Url,connectionParams).then(
    () => console.log(" Connected to the database on port 5000")).then(
    () => {
    appBook.listen(5000);
}).catch((err)=> console.log(err));
appBook.use(cross());
appBook.use(logger('dev'));
appBook.use(bodyParser.json());
appBook.use(bodyParser.urlencoded({extended : true}));


appBook.use("/Books",router)



