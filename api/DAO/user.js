import mongodb from "mongodb";
const ObjectId = mongodb.ObjectId;

let user;

export default class UserDAO {
  static async injectUserDB(conn) {
    if (user) {
      return;
    }
    try {
      user = await conn.db(process.env.HOSTEL_DB_NAME).collection("users");
    } catch (e) {
      console.error(`Unable to establish a collection handle in users: ${e}`);
    }
  }

  static async verifyUser(userid, password) {
    try {
      let result = await user.find({
        userid: userid,
        password: password,
      });
      let userList = await result.toArray();
      if (userList.length <= 0) {
        return { error: "Unauthorized user" };
      }
      console.log(`Returned user with id ${userList[0].userid}`);
      return { returnedId: userList[0].userid };
    } catch (e) {
      console.error(`Unable to issue insertOne command in UsersDAO, ${e}`);
      return { error: "Unauthorized user" };
    }
  }
}

/*
SCHEMA :
{   
  "id" : Mongodb.ObjectID,
  "role": student|warden|messmanager|security,
  "email":*@gmail.com,
  "password":***,
  "userid":warden01|student01|messmanager01|security01
}
*/
