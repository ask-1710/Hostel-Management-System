import http from '../http-common' ;

class LoginService {
    loginUser(userid, password, role) {
        const data = {userid, password, role} ;
        return http.post('user', data);
    }
}

export default new LoginService();