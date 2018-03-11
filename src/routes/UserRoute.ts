import { Router } from "express";
import * as bodyParser from "body-parser";
import { User } from "../model/User";
import { UserDAO } from "../db";

const router = Router();

const jsonParser = bodyParser.json();

router.post("/", (req, res) => {
  const username = req.body.username;
  if (!username) {
    return res.status(400).send({
      error: "username Not Found",
    });
  }
  const password = req.body.password;
  if (!password) {
    return res.status(400).send({
      error: "password Not Found",
    });
  }
  const slackToken = req.body.slackToken;
  if (!slackToken) {
    return res.status(400).send({
      error: "slackToken Not Found",
    });
  }
  const slackChannel = req.body.slackChannel;
  if (!slackChannel) {
    return res.status(400).send({
      error: "slackChannel Not Found",
    });
  }

  // SAME USER EXISTS CHECK HAS TO BE DONE!

  const user = new User();
  user.set(username, password, slackChannel, slackToken);
  const userDAO = new UserDAO();
  userDAO.addUser(user).then((newUser) => {
    res.status(200).json(newUser);
  }).catch((err) => {
    console.log(err)
    res.status(500).json({
      err: "Server error",
    })
  })
});

router.get("/:username/:password", (req, res) => {
  const username = req.params.username;
  if (!username) {
    return res.status(400).send({
      error: "username Not Found",
    });
  }
  const password = req.params.password;
  if (!password) {
    return res.status(400).send({
      error: "password Not Found",
    });
  }
  const userDAO = new UserDAO();
  userDAO.validateUser(username, password).then((resBool) => {
    if (resBool) {
      userDAO.getUserByUsername(username).then((user) => {
        res.status(200).json(user);
      }).catch((err) => {
        res.status(500).json({
          Error: "Server error"
        });
      });
    } else {
      res.status(400).json({
        Error: "Couldn't find user or username and password didn't match"
      });
    }
  }).catch((err) => {
    console.log(err);
    res.status(500).json({
      Error: "Server error"
    });
  })
});

export { router };