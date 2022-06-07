import http from "../http-common";

class AnnouncementsService {
    getAnnouncements() {
        return http.get('announcements');
    }
    
    makeAnnouncements(userID, role, date, audience, info) {
        const data = {
            name:userID,
            role : role,
            date : date,
            audience : audience,
            info : info
        } ;
        console.log(data) ;
        return http.post('announcements', data);
    }
}

export default new AnnouncementsService();
