import { Router } from "express";
import * as bodyParser from "body-parser";
import { UserDAO } from "../db";
const superagent = require("superagent");

const router = Router();

const jsonParser = bodyParser.json();

router.post("/", (req, res) => {
  const username = req.body.username;
  if (!username) {
    return res.status(400).send({
      error: "username Not Found",
    });
  }

  const userDAO = new UserDAO();
  userDAO.getUserByUsername(username).then((user) => {
    if (user) {
      superagent.post("https://slack.com/api/channels.history"+
      "?token="+user.slackToken+
      "&channel="+user.slackChannel+
      "&inclusive="+"true"+
      "&ts="+"latest"+
      "?count="+"1").
      set("Content-Type", "application/x-www-form-urlencoded").then((result: any) => {
        const urlArray: any = [];
        const instaPromises: Array<Promise<any>> = [];
        result.body.messages[0].attachments.forEach((element: any) => {
          urlArray.push(element.from_url);
          instaPromises.push(superagent.
            post("https://www.instapaper.com/api/add?username="+user.username+"&password="+user.password+"&url="+element.from_url));
        });
        Promise.all(instaPromises).then((result: any) => {
          res.status(200).json({
            Success: "OK",
            URLS: urlArray
          });
        }).catch((err) => {
          console.log(err);
          res.status(400).json({
            Error: "Instapaper API Error",
            message: err
          })
        })
      }).catch((err: any) => {
        console.log(err);
        res.status(400).json({
          Error: "Slack API ERROR",
          message: err
        })
      });
    } else {
      return res.status(400).json({
        Error: "Username could has not been saved"
      })
    }
  }).catch((err) => {
    console.log(err);
    res.status(500).json({
      Error: "Server error"
    })
  })
  
});

export { router };