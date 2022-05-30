import UserDAO from '../DAO/user';

export default class User {
  static async apiPostVerifyUser(req, res, next) {

    const response = await UserDAO.verifyUser(req.body.userid, req.body.password);

    res.json(response);
  }
}

/*
{
    "_id":{"$oid":"629056ec557479c6675b464c"},
    "regNum":{"$numberLong":"195001002"},
    "name":"Aarthi Nunna",
    "hostel":"1",
    "room":"1",
    "department":"CSE",
    "batch":"2023",
    "address":"Kilpauk",
    "mobile":"7891232123",
    "email":"nunna@gmail.com"
}

{
    "_id":{"$oid":"629057dd56b2fe34d2a82ae1"},
    "wardenId":{"$numberInt":"1"},
    "name":"Lakshmi",
    "DOB":{"$date":{"$numberLong":"219177000000"}},
    "DOJ":{"$date":{"$numberLong":"1602441000000"}},
    "mobile":"7676890498",
    "email":"lakshmi@gmail.com"
}



*/
