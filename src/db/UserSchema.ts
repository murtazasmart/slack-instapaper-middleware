import * as Mongoose from "mongoose";
import { IUser } from "./IUser";

interface IUserSchemaModel extends IUser, Mongoose.Document { }
const userSchema = new Mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  timestamp: {
    default: Date.now,
    type : Date,
  },
  slackChannel: {
    type: String,
    required: true,
  },
  slackToken: {
    type: String,
    required: true,
  }
});

const UserSchema = Mongoose.model<IUserSchemaModel>("User", userSchema);
export { UserSchema };
