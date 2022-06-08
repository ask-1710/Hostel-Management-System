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

    const response = await OutpassDAO.insertOutpassRequest(
      req.body.regno,
      req.body.name,
      req.body.address,
      req.body.hostel,
      req.body.reason,
      req.body.fromDate,
      req.body.toDate
    );

    res.json(response);
  }

  static async apiGetOutpasses(req, res, next) {
    const response = await OutpassDAO.getOutpasses() ;

    res.json(response) ;
  }

  static async apiPatchOutpass(req, res, next) {
    console.log(req.params.outpassID, req.body.status) ;

    const response = await OutpassDAO.patchOutpass(req.params.outpassID, req.body.status) ;

    console.log(response);
    res.json(response) ;

  }

  static async apiPostOutpassStatus(req, res, next){

    const { outpassList, numOutpasses } =
      await OutpassDAO.getOutpassStatus(req.body.regno);
    const response = {
      outpassList: outpassList,
      numOutpasses: numOutpasses,
    };

    res.json(response);
  }
}
