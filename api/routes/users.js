import express from 'express'
import User from '../Controller/user' ;

const userRouter = express.Router();

userRouter.route('/')
  .post(User.apiPostVerifyUser) ;

export default userRouter;