import http from "../http-common";

class OutpassService {
    applyOutpass(regno, name, address, hostel, reason, fromDate, toDate) {
        const data = {
            regno:regno,
            name: name,
            address: address,
            hostel: hostel,
            reason: reason,
            fromDate: fromDate,
            toDate: toDate
        } ;
        console.log(data) ;
        return http.post('outpass', data);
    }
}

export default new OutpassService();