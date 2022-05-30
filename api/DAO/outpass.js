import mongodb from "mongodb";
const ObjectId = mongodb.ObjectId;

let outpass ;

export default class OutpassDAO {
  static async injectOutpassDB(conn) {
    if (outpass) {
      return;
    }
    try {
      outpass = await conn
        .db(process.env.HOSTEL_DB_NAME)
        .collection("OutpassForm");
    } catch (e) {
      console.error(`Unable to establish a collection handle in Outpass Form: ${e}`);
    }
  }

  static async insertOutpassRequest(regno, name, address, hostel, reason, fromDate, toDate) {

    try {
      let result = await outpass.insertOne({
        regno: regno,
        name: name,
        address: address,
        hostel: hostel,
        reason: reason,
        fromDate: fromDate,
        toDate: toDate
      });
      console.log(
        `Inserted document into OutpassForm with ${result.insertedId}`
      );
      return { insertedId : result.insertedId } ;
    } catch (e) {
      console.error(
        `Unable to issue insertOne command in OutpassRequest, ${e}`
      );
      return { error: "could not insert document" };
    }
  }
}
