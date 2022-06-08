import { useState } from "react";
import { Card } from "react-bootstrap";
import OutpassService from "../services/Outpass";
import history from "../history";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import "../App.css";

const OutpassForm = (props) => {
  const [regno, setRegNo] = useState("");
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [reason, setReason] = useState("");
  const [hostel, setHostel] = useState("");
  const [fromDate, setFromDate] = useState(new Date());
  const [toDate, setToDate] = useState(new Date());
  const [alert, setAlert] = useState("");

  const location = useLocation();

  const handleSubmit = (ev) => {
    ev.preventDefault();
    // window.alert(location.state.userID);
    setRegNo(location.state.userID);
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
        location.state.userID,
        address,
        reason,
        fromDate,
        toDate
      );
      if (result) {
        setAlert("Request successful");
      }
    } catch (e) {
      console.log(e);
      setAlert("Error while processing outpass request..Please try again");
    }
  };

  return (
    <div>
      {/* <Link to={`/home?userID=${location.state.userID}&role=student`}>Click to go back to home page</Link> */}
      <div className="alert">{alert}</div>
      <Card
        className="bg-black text-white"
        style={{ width: "50rem", margin: "auto" }}
      >
        <h2>Outpass Application</h2>
        <Card.Body className="bg-black text-white">
          <form onSubmit={handleSubmit}>
            <label className="p-1 m-2">
              {" "}
              <p style={{ fontSize: "20px", display: "inline-flex" }}>
                Address *
              </p>
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
              <p style={{ fontSize: "20px", display: "inline-flex" }}>
                Reason *
              </p>
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
              <p style={{ fontSize: "20px", display: "inline-flex" }}>From *</p>
              <input
                type="date"
                name="fromDate"
                onChange={(e) => setFromDate(e.target.value)}
                required
              />
            </label>
            <br />
            <label className="p-1 m-2">
              <p style={{ fontSize: "20px", display: "inline-flex" }}>To *</p>
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
    </div>
  );
};

export default OutpassForm;
