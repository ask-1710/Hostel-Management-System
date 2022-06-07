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

    bookRooms(id){
      const data = {
          roomId: id
        }
      return http.post('bookroom',data);

    }
}

export default new RoomBookingService();
