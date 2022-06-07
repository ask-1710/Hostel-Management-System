import http from "../http-common";

class MessBillService {
  getMessBill(studentRegNum) {
    return http.get(`/messbill?studentRegNum=${studentRegNum}`);
  }

  insertMessBill(studentRegNum, studentName, Fee, paymentStatus = false) {
    return http.post("/messbill", {
      studentRegNum: studentRegNum,
      studentName: studentName,
      Fee: Fee,
      Date: new Date(),
      paymentStatus: paymentStatus,
    });
  }
}

export default new MessBillService();
