import CouriersDAO from "../DAO/couriers";


export default class Couriers {
  static async apiGetCouriers(req, res, next) {
    const { couriersList, numCouriers } = await CouriersDAO.getCouriers();
    const response = {
      couriers: couriersList,
      numCouriers: numCouriers
    };
    // console.log(response) ;
    res.json(response);
  }
}
