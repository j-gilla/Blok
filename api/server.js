let express = require('express');
let app = express();
let port = process.env.PORT || 3001;
let mongoose = require('mongoose');
let bodyParser = require('body-parser');

mongoose.Promise = global.Promise;



app.listen(port);
console.log("All wathced over port " + port + " of loving grace. ");
