import { NextFunction, Request, Response, Router } from "express";
import * as firebase from "firebase-admin";
// const functions = require('firebase-functions');

// var config = {
//   apiKey: "AIzaSyDYLBJK083sPEc6RjqPp99eO4BDCAhbeA0",
//   authDomain: "fir-db-6a0b7.firebaseapp.com",
//   databaseURL: "https://fir-db-6a0b7.firebaseio.com",
//   projectId: "fir-db-6a0b7",
//   storageBucket: "fir-db-6a0b7.appspot.com",
//   messagingSenderId: "254583806525"
// };

// firebase.initializeApp({
//   credential: firebase.credential.cert({
//     projectId: config.apiKey,
//     clientEmail: config.authDomain,
//     privateKey: "-----BEGIN PRIVATE KEY-----\n<MY_PRIVATE_KEY>\n-----END PRIVATE KEY-----\n"
//   }),
// databaseURL: config.databaseURL
// });

// var defaultDatabase = firebase.database();

// defaultDatabase.ref('users/' + "123").set({
//   username: "mujja"
// });

// firebase.initializeApp({
//   credential: firebase.credential.cert(config)
// });

// var db = firebase.firestore();

// var docRef = db.collection('slack-instapaper-middleware').doc('trial');

// var setAda = docRef.set({
//     first: 'Ada',
//     last: 'Lovelace',
//     born: 1815
// });

// setAda.then((data) => {
//   console.log(data);
// }).catch((err) => {
//   console.log(err);
// })

const router = Router();

router.get("/", (req: Request, res: Response, next: NextFunction) => {
  console.log(req.params);
  res.json({
    apiVersion: "1.0",
  });
});

router.post("/", (req, res) => {
  console.log(req.body);
  res.status(200);
  res.type('application/json');
  res.json({
    "challenge": req.body.challenge
  });
});

export { router };
