import MessBillDAO from "../DAO/messbill";

export default class MessBill {
  static async apiGetMessBill(req, res, next) {
    // console.log(req.query.studentRegNum) ;
    const { messBillList, numMessBills } = await MessBillDAO.getMessBill(
      req.query.studentRegNum
    );
    
    const response = {
      messBillList: messBillList,
      numMessBills: numMessBills,
    };

    res.json(response);
  }

  static async apiPostMessBill(req, res, next) {
    const response = await MessBillDAO.postMessBill(
      req.body.studentRegNum,
      req.body.studentName,
      req.body.Fee,
      req.body.Date,
      req.body.paymentStatus
    );

    console.log(response);
    res.json(response);
  }
}
