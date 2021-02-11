const Url = require("../model/shortUrl");

exports.postShortUrl = (longUrl, shortUrl, urlHash) => {
    return new Url({
        longUrl,
        shortUrl,
        urlHash
    })
}