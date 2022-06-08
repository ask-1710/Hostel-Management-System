import express from 'express'
import RoomBook from '../Controller/roombook';

const roombookingRouter = express.Router();

roombookingRouter.route('/')
  .post(RoomBook.apiPostGetRoomsRequest)

roombookingRouter.route('/pending')
  .get(RoomBook.apiGetPendingRequests)

roombookingRouter.route('/verify/:roomID')
  .patch(RoomBook.apiPatchVerifyRequest)

export default roombookingRouter;
