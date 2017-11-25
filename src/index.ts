// import * as bodyParser from "body-parser";
import * as express from "express";
import * as apiV1 from "./routes/index";
import * as bodyParser from "body-parser";

/**
 * Create Express Server
 */
const app = express();

/**
 * Express Configuration
 */

app.set("port", process.env.PORT || 3000);

/**
 * API v1 Routes
 */


app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
app.use("/api/add", apiV1.router);


export { app };
