import CouriersDAO from "../DAO/couriers";

export default class Couriers {
  static async apiGetCouriers(req, res, next) {
    const { couriersList, numCouriers } = await CouriersDAO.getCouriers();
    const response = {
      couriers: couriersList,
      numCouriers: numCouriers,
    };
    // console.log(response) ;
    res.json(response);
  }

  static async apiPostCourier(req, res, next) {
    const response = await CouriersDAO.postCourier(
      req.body.studentRegNum,
      req.body.securityId,
      req.body.delivered,
      req.body.orderId
    );

    console.log(response);

    res.json(response);
  }
}
