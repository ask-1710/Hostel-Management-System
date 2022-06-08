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

    const {success} = await RoomBookDAO.bookRoomRequest(req.body.roomId, req.body.studentID);
    const response = {
      success: success
    }
    console.log(response) ;
    res.json(response);

  }

  static async apiGetPendingRequests(req, res, next) {
    const response = await RoomBookDAO.getPendingRoomRequests() ;
    
    res.json(response) ;
  }

  static async apiPatchVerifyRequest(req, res, next) {
    const response = await RoomBookDAO.patchRoomRequest(req.params.roomID, req.body.status) ;

    console.log(response) ;
    res.json(response) ;
  }
}
