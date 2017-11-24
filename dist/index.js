"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import * as bodyParser from "body-parser";
const express = require("express");
const apiV1 = require("./routes/index");
const bodyParser = require("body-parser");
/**
 * Create Express Server
 */
const app = express();
exports.app = app;
/**
 * Express Configuration
 */
app.set("port", process.env.PORT || 3000);
/**
 * API v1 Routes
 */
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
app.use("/api", apiV1.router);
//# sourceMappingURL=index.js.map