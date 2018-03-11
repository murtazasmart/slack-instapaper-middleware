import { User } from "../model/User";
import { UserSchema } from "./";

export class UserDAO {

  public addUser(user: User): Promise<User> {
    return UserSchema.create(user).then((savedUser) => {
      const newUser = new User();
      newUser.id = savedUser._id;
      newUser.password = savedUser.password;
      newUser.username = savedUser.username;
      newUser.slackToken = savedUser.slackToken;
      newUser.slackChannel = savedUser.slackChannel;
      return newUser;
    }).catch((err) => {
      return err;
    })
  }

  public validateUser(username: string, password: string): Promise<boolean> {
    return UserSchema.find({ username: username }).then((user) => {
      if (user[0].password === password) {
        return true;
      } else {
        return false;
      }
    }).catch((err) => {
      return err;
    })
  }

  public getUserByUsername(username: string): Promise<User> {
    return UserSchema.find({ username: username }).then((user) => {
      if (user[0]) {
        const userModel = new User();
        userModel.set(user[0].username, user[0].password, user[0].slackChannel, user[0].slackToken)
        userModel.id = user[0]._id;
        return userModel;
      } else {
        return null;
      }
    }).catch((err) => {
      return err
    })
  }
}
