import mongodb from "mongodb";
const ObjectId = mongodb.ObjectId;

let bills;

export default class MessBillDAO {
  static async injectMessBillDB(conn) {
    if (bills) {
      return;
    }
    try {
      bills = await conn.db(process.env.HOSTEL_DB_NAME).collection("MessBill");
    } catch (e) {
      console.error(`Unable to establish a collection handle in Ann: ${e}`);
    }
  }

  static async getMessBill(regNum) {
    let messBillList;
    let numMessBills;

    try {
      let cursor = await bills.find({ studentRegNum: regNum , paymentStatus: false});
      messBillList = await cursor.toArray();
      numMessBills = messBillList.length;
      console.log(messBillList) ;
      return { messBillList: messBillList, numMessBills: numMessBills };
    } catch (e) {
      console.error(`Unable to issue find command, ${e}`);
      return { messbillsList: [], numMessBills: 0 };
    }
  }

  static async postMessBill(
    studentRegNum,
    studentName,
    Fee,
    Date,
    paymentStatus
  ) {
    try {
      let cursor = {
        studentRegNum: studentRegNum,
        studentName: studentName,
        Fee: Fee,
        Date: Date,
        paymentStatus: paymentStatus,
      };
      let result = await bills.insertOne(cursor);

      console.log(
        `Inserted document into Mess bills with ${result.insertedId}`
      );
      return { insertedId: result.insertedId };
    } catch (e) {
      console.error(`Unable to issue insertOne command in Mess Bill db, ${e}`);
      return { error: "could not insert document" };
    }
  }
}
