import express from 'express'
import Announcements from '../Controller/announcements';

const announcementsRouter = express.Router();

/* GET home page. */
announcementsRouter.route('/')
  .get(Announcements.apiGetAnnouncements)
  .post(Announcements.apiPostAnnouncement) 

export default announcementsRouter;