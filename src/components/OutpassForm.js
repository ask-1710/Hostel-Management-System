import { useState } from "react";
import { Card } from "react-bootstrap";
import OutpassService from "../services/Outpass";
import history from "../history";

const OutpassForm = (props) => {
  const [regno, setRegNo] = useState("");
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [reason, setReason] = useState("");
  const [hostel, setHostel] = useState("");
  const [fromDate, setFromDate] = useState(new Date());
  const [toDate, setToDate] = useState(new Date());
  const [alert, setAlert] = useState("") ;

  const handleSubmit = () => {
   
    console.log(
      regno +
        " , " +
        name +
        " , " +
        address +
        " , " +
        reason +
        " , " +
        hostel +
        " , " +
        fromDate +
        " , " +
        toDate
    );
    try {
      let result = OutpassService.applyOutpass(
        regno,
        name,
        address,
        hostel,
        reason,
        fromDate,
        toDate
      );
      if(result) {
        setAlert("Request successful") ;
      }
      history.push('/') ;
      
    } catch (e) {
      console.log(e);
      setAlert("Error while processing outpass request..Please try again") ;   
      history.push('/outpass/apply/') ;   
    }
  };

  return (
    <>
    <div id="alert" className="alert">{alert}</div>
      <Card className="bg-dark text-white">
        <h2>Outpass Application</h2>
        <Card.Body className="bg-dark text-white">
          <form onSubmit={handleSubmit}>
            <label className="p-1 m-2">
              {" "}
              Register Number *
              <input
                type="text"
                name="regno"
                value={regno}
                onChange={(e) => setRegNo(e.target.value)}
                required
              />
            </label>
            <br />
            <label className="p-1 m-2">
              {" "}
              Name *
              <input
                type="text"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </label>
            <br />
            <label className="p-1 m-2">
              {" "}
              Address *
              <input
                type="text"
                name="address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                required
              />
            </label>
            <br />
            <label className="p-1 m-2">
              Hostel *
              <input
                type="text"
                name="hostel"
                value={hostel}
                onChange={(e) => setHostel(e.target.value)}
                required
              />
            </label>
            <br />
            <label className="p-1 m-2">
              Reason *
              <input
                type="text"
                name="reason"
                value={reason}
                onChange={(e) => setReason(e.target.value)}
                required
              />
            </label>
            <br />
            <label className="p-1 m-2">
              From *
              <input
                type="date"
                name="fromDate"
                onChange={(e) => setFromDate(e.target.value)}
                required
              />
            </label>
            <br />
            <label className="p-1 m-2">
              To *
              <input
                type="date"
                name="toDate"
                onChange={(e) => setToDate(e.target.value)}
                required
              />
            </label>
            <br />
            <button type="submit" className="btn btn-info p-1 m-4">
              Submit
            </button>
          </form>
        </Card.Body>
      </Card>
    </>
  );
};

export default OutpassForm;
