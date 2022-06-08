import http from "../http-common";

class CouriersService {
  getCouriers(studentID) {
    return http.get(`couriers?studentID=${studentID}`);
  }

  postCourier(
    studentRegNum,
    studentName,
    securityId,
    orderId,
    delivered = false
  ) {
    return http.post("couriers", {
      studentRegNum: studentRegNum,
      studentName: studentName,
      securityId: securityId,
      orderId: orderId,
      delivered: delivered,
    });
  }
}

export default new CouriersService();
