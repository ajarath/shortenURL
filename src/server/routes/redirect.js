const express = require('express');
const router = express.Router();

const shortController = require('../controller/shortApiController');
const Url = require('../model/shortUrl');

router.get('/:code', async (req, res) => {
    await shortController.redirectUrl(req, res);
});

module.exports = router;