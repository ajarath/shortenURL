const mongoose = require('mongoose');

const shortSchema = new mongoose.Schema( {
    longUrl: String,
    urlHash: String,
    shortUrl: String
    
});

const ShortModel = mongoose.model('ShortModel', shortSchema);


module.exports =  ShortModel;