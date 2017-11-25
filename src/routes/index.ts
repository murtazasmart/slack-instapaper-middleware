import { NextFunction, Request, Response, Router } from "express";
import * as firebase from "firebase-admin";
import * as validUrl from "valid-url";
import { request } from "https";
const superagent = require("superagent");
var config = require("./../../config.json")

const router = Router();

router.get("/", (req: Request, res: Response, next: NextFunction) => {
  console.log(req.params);
  res.json({
    apiVersion: "1.0",
  });
});

router.post("/", (req, res) => {
  // console.log(req.body);
  console.log(config.nsbm);
  // const options = {
  //   url: 'https://slack.com/api/channels.history',
  //   method: 'POST',
  //   form: {
  //     "token": config.apiToken,
  //     "channel": config.channels.articles,

  //   }
  // };
  superagent.post("https://slack.com/api/channels.history").send({
    "token": "xoxp-164141768337-164926927172-277378214515-7d70e0ba2b3880c28de368a583063a49",
    "channel": "C832626CU",
    "ts": "latest",
    "inclusive": "true",
    "count": 1
  }).end((err: any, result: any) => {
    console.log("err "+err);
    console.log("res "+result);
    res.json({
      "challenge": "hello",
      result
    });
  })
  // request(options, (response) => {
    
  // }); 
  // if(validUrl.isUri(req.body.event.message.text)){
  //   console.log("URL is "+ req.body.event.message.text);
  // }
  // else {
  //   console.log("Message is "+req.body.event.message.text);
  // }
  // res.status(200);
  // res.type('application/json');
  
});

export { router };
