import http from "../http-common";

class AnnouncementsService {
    getAnnouncements() {
        return http.get('announcements');
    }
}

export default new AnnouncementsService();