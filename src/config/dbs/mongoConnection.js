const mongoose = require("mongoose");
// local module 
const mongo = require('./mongoConfig'); 
require('dotenv').config();

const uri = process.env.mongoUri;

mongoose.connect(uri, { useUnifiedTopology: true, useNewUrlParser: true })
.then(() => {
    console.log('Connected to mongodb');
})
.catch((error) => {
    console.log('Connection failed', error);
})

module.exports = {
    mongo: mongoose.connect
}