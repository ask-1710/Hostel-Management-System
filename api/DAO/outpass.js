import mongodb from "mongodb";
const ObjectId = mongodb.ObjectId;

let outpass;

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
      console.error(
        `Unable to establish a collection handle in Outpass Form: ${e}`
      );
    }
  }

  static async insertOutpassRequest(
    regno,
    name,
    address,
    hostel,
    reason,
    fromDate,
    toDate
  ) {
    try {
      let result = await outpass.insertOne({
        regno: regno,
        name: name,
        address: address,
        hostel: hostel,
        reason: reason,
        fromDate: fromDate,
        toDate: toDate,
        created_at: Date.now,
      });
      console.log(
        `Inserted document into OutpassForm with ${result.insertedId}`
      );
      return { insertedId: result.insertedId };
    } catch (e) {
      console.error(
        `Unable to issue insertOne command in OutpassRequest, ${e}`
      );
      return { error: "could not insert document" };
    }
  }

  static async getOutpasses() {
    let cursor;
    let outpassList;
    let numOutpasses;
    try {
      // outpass.update({}, { $set: { "created_at": Date.now } }, false, true);
      cursor = await outpass.find({ created_at: Date.now , verify : "pending" });
    } catch (e) {
      console.error(`Unable to issue find command in getOutpasses, ${e}`);
      return { outpassList: [], numOutpasses: 0 };
    }
    try {
      outpassList = await cursor.toArray();
      console.log(outpassList);
      numOutpasses = outpassList.length;
      return { outpassList: outpassList, numOutpasses: numOutpasses };
    } catch (e) {
      console.error(
        `Unable to convert cursor  to array or problem counting documents, ${e}`
      );
      return { outpassList: [], numOutpasses: 0 };
    }
  }

  static async patchOutpass(outpassID, status) {
    let cursor;
    try {
      cursor = await outpass.updateOne(
        { _id: ObjectId(outpassID) },
        { $set: { verify: status } }
      );
      return { numberModified: cursor.modifiedCount };
    } catch (error) {
      console.log(`Error while retreiving outpass with id ${outpassID}`);
    }
  }
}
