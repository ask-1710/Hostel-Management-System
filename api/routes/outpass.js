import express from 'express'
import Outpass from '../Controller/outpass';

const outpassRouter = express.Router();

outpassRouter.route('/')
  .post(Outpass.apiPostOutpassRequest) ;

export default outpassRouter;