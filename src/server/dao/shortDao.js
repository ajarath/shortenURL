const Url = require("../model/shortUrl");

exports.findUrl = async (Url, longUrl) => {
let result = await Url.findOne({longUrl});
return result;
}

exports.deleteShort = async (Url, id) => {
    let result = await Url.findOneAndDelete({urlHash: id});
    return result;
}

exports.redirectUrl = async (Url, id) => {
    let result = await Url.findOne({urlHash: id});
    return result;
}

exports.getAllUrls = async (Url) => {
    let result = await Url.find();
    return result;
}