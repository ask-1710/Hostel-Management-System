import mongodb from 'mongodb' ;
const ObjectId=mongodb.ObjectId

let couriers

export default class CouriersDAO {

    static async injectCouriersDB(conn) {
        if (couriers) {
            return
        }
        try {
            couriers = await conn.db(process.env.HOSTEL_DB_NAME).collection("Courier")
        } catch (e) {
            console.error(
                `Unable to establish a collection handle in Ann: ${e}`,
            )
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
}