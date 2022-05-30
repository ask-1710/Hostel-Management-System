import express from 'express'
import RoomBook from '../Controller/roombook';

const roombookingRouter = express.Router();

roombookingRouter.route('/')
  .post(RoomBook.apiPostGetRoomsRequest) ;

export default roombookingRouter;
