# slack-instapaper-middleware
Middleware to digest Slack webhook and trigger Instapaper API

## Things to keep in mind
This has been hosted in the following URL https://slack-instapaper-middleware.herokuapp.com/api

## REST API Routes

| Request Type  | URL | Description | Payload/Parameter | Response |
| --- | --- | --- | --- | --- |
| POST | /api/user | Add user details i.e. details related to Slack & Instapaper | { username: "johndeo@foo.com", password: "foobar", slackChannel: "CDN723WM", slackToken: "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx" } | Success: 200, Server error: 500, Fields not found: 400 |
| GET | /api/user/:username/:password | Retreive user details that have been saved(if you've saved :P) | /api/user/johndoe@foo.com/foobar | Success: 200 |
| POST | /api/bookmark | Launch the real magic i.e. retreive the latest message from slack and send it to your instapaper a/c | { username: "johndoe@foo.com" } | Success: OK 200 |


##### Special thanks to
* Pubudu Ranasinghe - pubudur
* Lasitha Vithanage - lasithav
