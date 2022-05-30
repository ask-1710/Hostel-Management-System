import OutpassDAO from "../DAO/outpass";

export default class Outpass {
  static async apiPostOutpassRequest(req, res, next) {
    // const regno = req.getParameter("regno") ;
    // const name = req.getParameter("name") ;
    // const address = req.getParameter("address") ;
    // const hostel = req.getParameter("hostel") ;
    // const reason = req.getParameter("reason") ;
    // const fromDate = req.getParameter("fromDate") ;
    // const toDate = req.getParameter("toDate") ;
    
    const response = await OutpassDAO.insertOutpassRequest(req.body.regno, req.body.name, req.body.address, req.body.hostel, req.body.reason, req.body.fromDate, req.body.toDate);
    
    res.json(response);
  }
}
