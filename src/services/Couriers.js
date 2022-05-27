import http from "../http-common";

class CouriersService {
    getCouriers() {
        return http.get('couriers');
    }
}


export default new CouriersService();