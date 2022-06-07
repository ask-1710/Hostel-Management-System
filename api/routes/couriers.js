import express from 'express'
import Couriers from '../Controller/couriers.js'

const courierRouter = express.Router()

/* GET home page. */
courierRouter.route('/')
  .get(Couriers.apiGetCouriers)
  .post(Couriers.apiPostCourier)

export default courierRouter ;