import express from 'express' ;
import MessBill from '../Controller/messbill';
var messBillRouter = express.Router();


messBillRouter.route('/')
  .get(MessBill.apiGetMessBill)
  .post(MessBill.apiPostMessBill)

export default messBillRouter ;
