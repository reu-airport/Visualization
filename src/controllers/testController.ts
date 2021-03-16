const express = require("express");
const router = express.Router();

const mainScene = require('./../scenes/mainScene.ts');

let ms = new mainScene();

router.get('/', (req, res, next) => {
    ms,
    res.send("ping");
});

module.exports = router;
