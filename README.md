# slack-instapaper-middleware
Middleware to digest Slack webhook and trigger Instapaper API

## REST API Routes

| Request Type  | URL           | Description                                                                                          | Payload/Parameter | Response |
| ------------- |:-------------:| ----------------------------------------------------------------------------------------------------:|:-------------:| -----:|:-------------:|
| POST          | /api/user     | Add user details i.e. details related to Slack & Instapaper                                          | {
  username: "johndeo@foo.com",
  password: "foobar",
  slackChannel: "CDN723WM",
  slackToken: "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
}
| Success: 200
  Server error: 500
  Fields not found: 400
| GET           | /api/user/:username/:password     | Retreive user details that have been saved(if you've saved :P)                                       | /api/user/johndoe@foo.com/foobar | Success: 200
  Server error: 500
  Fields not found: 400
| POST          | /api/bookmark | Launch the real magic i.e. retreive the latest message from slack and send it to your instapaper a/c | {
  username: "johndoe@foo.com"
}
| Success: OK 200
  Server error: 500
  Username not found: 400
  Username could has not been saved: 400
  Slack API ERROR: 400
  Instapaper API Error: 400
