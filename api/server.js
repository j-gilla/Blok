let express = require('express');
let app = express();
let port = process.env.PORT || 3001;
let mongoose = require('mongoose');
let bodyParser = require('body-parser');




app.listen(port);
console.log("All wathced over by port " + port + " of loving grace. ");
