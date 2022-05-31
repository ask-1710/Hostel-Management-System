import AnnouncementsDAO from "../DAO/announcements";

export default class Announcements {
  static async apiGetAnnouncements(req, res, next) {
    const { announcementsList, numAnnouncements } =
      await AnnouncementsDAO.getAnnouncements();
    const response = {
      announcements: announcementsList,
      numAnnouncements: numAnnouncements,
    };
    // console.log(response) ;
    res.json(response);
  }

  static async apiPostAnnouncement(req, res, next) {
    const response = await AnnouncementsDAO.insertAnnouncement(
      //name, role, date, audience, info
      req.body.name,
      req.body.role,
      req.body.date,
      req.body.audience,
      req.body.info
    );

    console.log(response) ;

    res.json(response);
  }
}
