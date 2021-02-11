const validUrl = require('valid-url');

require('dotenv').config();
const Url = require('../model/shortUrl');
const shortDto = require('../dto/shortDto');
const { findUrl, deleteShort, redirectUrl, getAllUrls } = require('../dao/shortDao');
const { isUrlValid, generateShortUuid } = require('../helper/shortHelper')

exports.getShort = async (req, res) => {
    const { longUrl } = req.body;
    const baseUrl = process.env.baseUrl;
    
// check base url
   let valid = await isUrlValid(baseUrl);
    if(!valid) {
        return res.status(401).json("Invalid base Url");
    }

    // create short url
    const urlHash = generateShortUuid();
    

    // check long url
    if(isUrlValid(longUrl)) {
        try {
        let url = await findUrl(Url, longUrl);
            if(url) {
               return res.json(url);
            } else {
                let shortUrl = baseUrl + "/" + urlHash;
                url = shortDto.postShortUrl(longUrl, shortUrl, urlHash);
                await url.save();
               return res.json(url);
            }
        } catch (error) {
            console.error(error);
           return res.status(501).json("Server error...");
        }
    } else {
       return res.status(401).json("Invalid long url");
    }
}

exports.deleteShort = async (req, res) => {
    try {
        let url = await deleteShort(Url, req.params.code);
        if(!url) {
            res.status(404).json('Not found...');
        } else {
            res.json(url);
        }
    } catch (error) {
        console.error(error);
            res.status(501).json("Server error...");
    }
}

exports.redirectUrl = async (req, res) => {
    try {
        const url = await redirectUrl(Url, req.params.code);
        if(url) {
            res.redirect(url.longUrl);
        } else {
            res.status(404).json("No url found...");
        }
    } catch (error) {
        res.error(error);
        res.status(500).json("Server error...");
    }
    
}

exports.getAllUrls = async (req, res) => {
    let data = await getAllUrls(Url);
    res.json(data);
}