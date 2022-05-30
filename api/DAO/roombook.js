import mongodb from "mongodb";
const ObjectId = mongodb.ObjectId;

let roombooking ;

export default class RoomBookDAO {
  static async injectRoomBookingDB(conn) {
    if (roombooking) {
      return;
    }
    try {
      roombooking = await conn
        .db(process.env.HOSTEL_DB_NAME)
        .collection("Room");
    } catch (e) {
      console.error(`Unable to establish a collection handle in RoomBooking: ${e}`);
    }
  }

  static async getRoomsRequest(roomType, floorNumber) {
    let cursor;

    try {
      cursor = await roombooking.find({type: roomType, floor: floorNumber, occupied:false});
    } catch (e) {
      console.error(`Unable to issue find command, ${e}`);
      return { roomList: [], numRooms: 0 };
    }

    try {
      let roomList = await cursor.toArray();

      let numRooms = await roomList.length;

      return { roomList, numRooms };
    } catch (e) {
      console.error(
        `Unable to convert cursor  to array or problem counting documents, ${e}`
      );
      return { roomList: [], numRooms: 0 };
    }
  }

}
