import express from 'express'
import RoomBook from '../Controller/roombook';

const bookroomRouter = express.Router();

bookroomRouter.route('/')
  .post(RoomBook.apiPostBookRoomRequest) ;


export default bookroomRouter;
