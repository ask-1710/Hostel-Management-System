import RoomBookDAO from "../DAO/roombook";

export default class RoomBook {
  static async apiPostGetRoomsRequest(req, res, next) {

    // console.log(req.body.roomType, req.body.floorNumber) ;
    const  { roomList, numRooms }  = await RoomBookDAO.getRoomsRequest(req.body.roomType, req.body.floorNumber);

    const response = {
      rooms: roomList,
      numRooms: numRooms
    };
    console.log(response) ;
    res.json(response);
  }

  static async apiPostBookRoomRequest(req, res, next){

    const {success} = await RoomBookDAO.bookRoomRequest(req.body.roomId);
    const response = {
      success: success
    }
    console.log(response) ;
    res.json(response);

  }
}
