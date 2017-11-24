import { NextFunction, Request, Response, Router } from "express";
import * as firebase from "firebase-admin";
import * as validUrl from "valid-url";

const router = Router();

router.get("/", (req: Request, res: Response, next: NextFunction) => {
  console.log(req.params);
  res.json({
    apiVersion: "1.0",
  });
});

router.post("/", (req, res) => {
  // console.log(req.body);
  if(validUrl.isUri(req.body.event.message.text)){
    console.log("URL is "+ req.body.event.message.text);
  }
  else {
    console.log("Message is "+req.body.event.message.text);
  }
  res.status(200);
  res.type('application/json');
  res.json({
    "challenge": req.body.challenge
  });
});

export { router };
