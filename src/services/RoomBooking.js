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
}

export default new RoomBookingService();
