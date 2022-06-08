import http from "../http-common";

class RoomBookingService {
    getRooms(roomType, floorNumber) {
        const data = {
            roomType: roomType,
            floorNumber: floorNumber
        } ;
        // console.log(data) ;
        return http.post('rooms', data);
    }

    bookRooms(id, studentID){
      const data = {
          roomId: id,
          studentID: studentID 
        }
      return http.post('bookroom',data);
    }

    pendingRequests() {
      return http.get('rooms/pending') ;
    }

    verifyRoomRequests(roomID, status) {
      return http.patch(`rooms/verify/${roomID}`, {status: status}) ; 
    }
}

export default new RoomBookingService();
