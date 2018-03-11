// import * as bodyParser from "body-parser";
import * as express from "express";
import * as apiV1 from "./routes/index";
import * as bodyParser from "body-parser";
import * as mongoose from "mongoose";
import * as dotenv from "dotenv";

/**
 * Configure dotenv. Doing this before importing the routes
 */
dotenv.config();

/**
 * Create Express Server
 */
const app = express();

/**
 * Express Configuration
 */

app.set("port", process.env.PORT || 3000);

/**
 * MongoDB Connection
 */
mongoose.connect(process.env.MONGOLAB_URI, { useMongoClient: true });

(mongoose as any).Promise = global.Promise; // Use global promises for mongoose

/**
 * API v1 Routes
 */


app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
app.use("/api", apiV1.router);


export { app };
