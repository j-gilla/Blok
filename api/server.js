const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const routes = require('./routes/auth.js');


const port = process.env.PORT || 3001;



app.use('/', routes)


app.listen(port);
console.log("All wathced over by port " + port + " of loving grace. ");
