"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = express_1.Router();
exports.router = router;
router.get("/", (req, res, next) => {
    console.log(req.params);
    res.json({
        apiVersion: "1.0",
    });
});
router.post("/", (req, res) => {
    console.log(req.body.challenge);
    res.status(200);
    res.type('application/json');
    res.json({
        "challenge": req.body.challenge
    });
});
//# sourceMappingURL=index.js.map