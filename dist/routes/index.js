"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const firebase = require("firebase-admin");
// const functions = require('firebase-functions');
var config = {
    apiKey: "AIzaSyDYLBJK083sPEc6RjqPp99eO4BDCAhbeA0",
    authDomain: "fir-db-6a0b7.firebaseapp.com",
    databaseURL: "https://fir-db-6a0b7.firebaseio.com",
    storageBucket: "fir-db-6a0b7.appspot.com"
};
firebase.initializeApp(config);
var defaultDatabase = firebase.database();
defaultDatabase.ref('users/' + "123").set({
    username: "mujja"
});
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