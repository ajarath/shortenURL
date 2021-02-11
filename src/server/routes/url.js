const express = require('express');
const router = express.Router();

require('dotenv').config();
const Url = require('../model/shortUrl');
const shortController = require('../controller/shortApiController');


router.post('/links',async (req, res) => {
     await shortController.getShort(req, res);
})

router.delete('/links/:code', async (req, res) => {
    await shortController.deleteShort(req, res);
})

router.get('/', async (req, res) => {
    await shortController.getAllUrls(req, res);
})

module.exports = router;