import express from 'express'
import Announcements from '../Controller/announcements';

const announcementsRouter = express.Router();

/* GET home page. */
announcementsRouter.route('/')
  .get(Announcements.apiGetAnnouncements) ;

export default announcementsRouter;