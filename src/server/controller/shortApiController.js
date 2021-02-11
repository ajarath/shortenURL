
const shortService = require('../service/shortService');
exports.getShort = async (req, res) => {
    await shortService.getShort(req, res);
}

exports.deleteShort = async (req, res) => {
    await shortService.deleteShort(req, res);
}

exports.redirectUrl = async (req, res) => {
    await shortService.redirectUrl(req, res);
}


exports.getAllUrls = async (req, res) => {
    await shortService.getAllUrls(req, res);
}
