const express = require("express");
const router = express.Router();
const mainScene = require("../scenes/mainScene.ts");

let ms = mainScene();

router.get('/', (req, res, next) => {
    ms.changePositionRect(400, 400);
    res.send("ping");
});

module.exports = router;
