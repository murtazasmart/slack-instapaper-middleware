export class User {
  id: string;
  username: string;
  password: string;
  slackChannel: string;
  slackToken: string;

  public set(username: string, password: string, slackChannel: string, slackToken: string) {
    this.username = username;
    this.password = password;
    this.slackChannel = slackChannel;
    this.slackToken = slackToken;
  }
}