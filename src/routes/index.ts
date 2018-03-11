import { NextFunction, Request, Response, Router } from "express";
import * as firebase from "firebase-admin";
import * as validUrl from "valid-url";
import { request } from "https";
var config = require("./../../config.json")
import * as UserRoute from "./UserRoute";
import * as BookmarkRoute from "./BookmarkRoute";

const router = Router();

router.use("/user", UserRoute.router);
router.use("/bookmark", BookmarkRoute.router);

router.get("/", (req: Request, res: Response, next: NextFunction) => {
  console.log(req.params);
  res.json({
    apiVersion: "1.0",
  });
});

export { router };
