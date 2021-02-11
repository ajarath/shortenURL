const validUrl = require('valid-url');
const shortId = require('short-uuid');


exports.isUrlValid = (url) => {
    if(validUrl.isUri(url)) return true;
    return false;
}


exports.generateShortUuid = () => {
    return shortId.generate();
}