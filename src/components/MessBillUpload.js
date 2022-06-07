import { useState } from "react";
import { Card } from "react-bootstrap";
import MessBillService from "../services/MessBill";
import history from "../history";
import { useLocation, useSearchParams } from "react-router-dom";

const MessBillUpload = (props) => {
  const [role, setRole] = useState("");

  const [alert, setAlert] = useState("");
  const [userID, setUserID] = useState("");
  const [studentRegNum, setStudentRegNum] = useState("");
  const [studentName, setStudentName] = useState("");
  const [Fee, setFee] = useState(0);

  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();

  const handleSubmit = (ev) => {
    ev.preventDefault();

    // setUserID(searchParams.get("userID"));
    // setRole(searchParams.get("role"));

    setUserID(location.state.userID) ;
    setRole(location.state.role) ;

    console.log(studentRegNum, studentName, Fee);

    try {
      MessBillService.insertMessBill(
        studentRegNum,
        studentName,
        Fee
      ).then((result) => {
        console.log(result.data);
        if (result.data) {
          setAlert("Request successful! Mess bill uploaded!");
          history.push("/home");
        }
      });
    } catch (e) {
      console.log(e);
      setAlert("Error while uploading mess bill..Please try again");
      history.push("/messbill/upload");
    }
  };

  return (
    <>
      <div id="alert" className="alert">
        {alert}
      </div>
      <Card className="bg-dark text-white">
        <h2>Upload Mess Bill</h2>
        <Card.Body className="bg-dark text-white">
          <form onSubmit={handleSubmit}>
            <label className="p-1 m-2">
              {" "}
              Student Register number *
              <input
                type="text"
                name="name"
                value={studentRegNum}
                onChange={(e) => setStudentRegNum(e.target.value)}
                required
              />
            </label>
            <br />
            <label className="p-1 m-2">
              {" "}
              Student Name *
              <input
                type="text"
                name="name"
                value={studentName}
                onChange={(e) => setStudentName(e.target.value)}
                required
              />
            </label>
            <br />
            <label className="p-1 m-2">
              {" "}
              Fee *
              <input
                type="text"
                name="name"
                value={Fee}
                onChange={(e) => setFee(e.target.value)}
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

export default MessBillUpload;
