const express = require("express");
const bodyParser = require("body-parser");
//local modules
const { mongoConnection } = require('./config');
require('dotenv').config();

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//Define routes
app.use('/', require('./server/routes/redirect') );
app.use('/api/url', require('./server/routes/url') );

const port = process.env.PORT;
const host = process.env.HOST;
app.listen(port,host, () => {
    console.log(`Connected to host '${host}' at port '${port}'`);
})