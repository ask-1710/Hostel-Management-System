import mongodb from "mongodb";
const ObjectId = mongodb.ObjectId;

let announcements;

export default class AnnouncementsDAO {
  static async injectAnnouncementsDB(conn) {
    if (announcements) {
      return;
    }
    try {
      announcements = await conn
        .db(process.env.HOSTEL_DB_NAME)
        .collection("Announcements");
    } catch (e) {
      console.error(`Unable to establish a collection handle in Ann: ${e}`);
    }
  }

  static async getAnnouncements() {
    let cursor;

    try {
      cursor = await announcements.find();
    } catch (e) {
      console.error(`Unable to issue find command, ${e}`);
      return { announcementsList: [], numAnnouncements: 0 };
    }

    try {
      let announcementsList = await cursor.toArray();

      let numAnnouncements = await announcements.countDocuments();

      return { announcementsList, numAnnouncements };
    } catch (e) {
      console.error(
        `Unable to convert cursor  to array or problem counting documents, ${e}`
      );
      return { announcementsList: [], numAnnouncements: 0 };
    }
  }

  static async insertAnnouncement(name, role, date, audience, info) {
    try {
      let result = await announcements.insertOne({
        announcer: name,
        position: role,
        Date: date,
        audience: audience,
        information: info,
      });
      console.log(
        `Inserted document into Announcements with ${result.insertedId}`
      );
      return { insertedId: result.insertedId };
    } catch (e) {
      console.error(
        `Unable to issue insertOne command in Announcements db, ${e}`
      );
      return { error: "could not insert document" };
    }
  }
}
