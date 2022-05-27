import AnnouncementsDAO from "../DAO/announcements";

export default class Announcements {
  static async apiGetAnnouncements(req, res, next) {
    const { announcementsList, numAnnouncements } = await AnnouncementsDAO.getAnnouncements();
    const response = {
      announcements: announcementsList,
      numAnnouncements: numAnnouncements
    };
    // console.log(response) ;
    res.json(response);
  }
}
