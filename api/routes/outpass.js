import express from 'express'
import Outpass from '../Controller/outpass';

const outpassRouter = express.Router();

outpassRouter.route('/')
  .post(Outpass.apiPostOutpassRequest)
  .get(Outpass.apiGetOutpasses)

outpassRouter.route('/:outpassID')
  .patch(Outpass.apiPatchOutpass)

export default outpassRouter;