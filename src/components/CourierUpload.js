import { useState } from "react";
import { Card } from "react-bootstrap";
import CouriersService from "../services/Couriers";
import { useLocation, useSearchParams } from "react-router-dom";

const MessBillUpload = (props) => {
  
  const [alert, setAlert] = useState("");
  const [userID, setUserID] = useState("");
  const [studentRegNum, setStudentRegNum] = useState("");
  const [studentName, setStudentName] = useState("");
  const [orderId, setOrderId] = useState("");
  const [success, setSuccess] = useState(false);

  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation() ;

  const handleSubmit = (ev) => {
    ev.preventDefault();
    
    setUserID(location.state.userID);

    console.log(studentRegNum, studentName, orderId);

    try {
      CouriersService.postCourier(
        studentRegNum,
        studentName,
        userID,
        orderId
      ).then((result) => {
        console.log(result.data);
        if (result.data) {
          setAlert("Request successful! courier uploaded!");
          setSuccess(true);
        }
      });
    } catch (e) {
      console.log(e);
      setAlert("Error while uploading courier..Please try again");
      window.location.reload(false);
    }
  };

  return (
    <>
      <div id="alert" className="alert">
        {alert}
      </div>
      {!success && (
        <Card className="bg-dark text-white">
          <h2>Upload Couriers</h2>
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
                Order ID
                <input
                  type="text"
                  name="orderId"
                  value={orderId}
                  onChange={(e) => setOrderId(e.target.value)}
                />
              </label>
              <br />
              <button type="submit" className="btn btn-info p-1 m-4">
                Submit
              </button>
            </form>
          </Card.Body>
        </Card>
      )}
    </>
  );
};

export default MessBillUpload;
