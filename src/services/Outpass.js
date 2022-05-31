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

    getOutpasses() {
       return http.get('outpass') ; 
    }
    
    verifyOutpass(outpassID, status) {
        return http.patch(`outpass/${outpassID}`,{status: status}) ;
    }
    
}

export default new OutpassService();