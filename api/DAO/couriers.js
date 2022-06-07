import mongodb from "mongodb";
const ObjectId = mongodb.ObjectId;

let couriers;

export default class CouriersDAO {
  static async injectCouriersDB(conn) {
    if (couriers) {
      return;
    }
    try {
      couriers = await conn
        .db(process.env.HOSTEL_DB_NAME)
        .collection("Courier");
    } catch (e) {
      console.error(`Unable to establish a collection handle in Ann: ${e}`);
    }
  }

  static async getCouriers() {
    let cursor;

    try {
      cursor = await couriers.find();
    } catch (e) {
      console.error(`Unable to issue find command, ${e}`);
      return { couriersList: [], numCouriers: 0 };
    }

    try {
      let couriersList = await cursor.toArray();

      let numCouriers = await couriers.countDocuments();

      return { couriersList, numCouriers };
    } catch (e) {
      console.error(
        `Unable to convert cursor  to array or problem counting documents, ${e}`
      );
      return { couriersList: [], numCouriers: 0 };
    }
  }

  static async postCourier(studentRegNum, securityId, delivered, orderId) {
    let doc = {
      studentRegNum: studentRegNum,
      securityId: securityId,
      delivered: delivered,
      orderId: orderId,
    };

    try {
      let result = await couriers.insertOne(doc);
      console.log(
        `Inserted element into Couriers DB with id ${result.insertedId}`
      );
      return { insertedId: result.insertedId };
    } catch (e) {
      console.log(
        `Error while inserting ${result.insertedId} into couriers db`
      );
      return { error: "Error while inserting" };
    }
  }
}
