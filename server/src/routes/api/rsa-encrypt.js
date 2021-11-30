const router = require('express').Router();
const { pem2jwk } = require('pem-jwk');
const crypto = require("crypto");

const { pubkey, key } = require('../../config');

router.get('/public-key', (req, res) => {
    res.json(pem2jwk(pubkey));
});

router.post('/decrypt', (req, res) => {
    console.log(`El texto cifrado es: "${req.body.ciphertext}"`);
    const ciphertext = Buffer.from(req.body.ciphertext, "base64");

    const cleartext = crypto.privateDecrypt(key, ciphertext);
    console.log(`El texto descifrado es: "${cleartext.toString()}"`);

    res.send();
});

module.exports = router;