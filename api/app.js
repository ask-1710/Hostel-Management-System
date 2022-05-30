import express from 'express'
import cors from 'cors'
import createError from 'http-errors' ;
import path from 'path' ;
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import {fileURLToPath} from 'url';
import indexRouter from './routes/index.js' ;
import announcementsRouter from './routes/announcements.js' ;
import couriersRouter from './routes/couriers.js' ;
import outpassRouter from './routes/outpass.js' ;
import userRouter from './routes/users.js' ;
import roombookingRouter from './routes/roombooking.js';

var app = express();
app.use(cors()) ;
// view engine setup

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
// app.use('/users', usersRouter);
app.use('/announcements', announcementsRouter);
app.use('/couriers', couriersRouter);
app.use('/outpass',outpassRouter);
app.use('/user',userRouter);
app.use('/rooms',roombookingRouter) ;
app.use('*', (req, res)=>res.status(404).json({error: 'nor found'}))


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});


export default app ;