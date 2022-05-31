import { useEffect, useState } from "react";
import { Row, Card } from "react-bootstrap";
import OutpassService from "../services/Outpass";
import history from "../history";

const VerifyOutpass = (props) => {
  const [alert, setAlert] = useState("");
  const [data, setData] = useState([]);
  const [dataStatus, setDataStatus] = useState(false);
  const [alertStatus, setAlertStatus] = useState(false);
  

  useEffect(() => {
    getOutpasses();
  });

  const getOutpasses = () => {
    OutpassService.getOutpasses()
      .then((res) => res.data)
      .then((data) => {
        if (data.error) {
          setAlertStatus(true);
          setDataStatus(false);
          setAlert("Error occured while retrieving outpasses");
        } else if (data["numOutpasses"] > 0) {
          console.log(data["outpassList"]);
          setData(data["outpassList"]);
          setDataStatus(true);
          setAlertStatus(false);
        } else {
          setAlert("No outpasses to review");
          setAlertStatus(true);
          setDataStatus(false);
        }
      });
  };

  const handleClick = (outpassId, action) => {
      // window.alert(outpassId + " : "+action) ;
    OutpassService.verifyOutpass(outpassId, action)
      .then((res) => res.data)
      .then((data) => {
        console.log(data);
        if (data.error != "") {
          setAlertStatus(true);
          setAlert("Error occured while verifying outpass");
        } 
        window.location.reload(false);
      });
  };

  return (
    <>
      {alertStatus && (
        <div id="alert" className="alert">
          {alert}
        </div>
      )}
      <Card className="bg-dark text-white">
        <h2>Outpass Verification</h2>
        <Card.Body className="bg-dark text-white">
          {dataStatus && (
            <Row className='bg-dark text-white mx-auto'>
              {data.map((element) => {
                return (
                  <div className='bg-dark text-white border border-light my-2'>
                    Student Name : {element.name}<br/>
                    Address : {element.address}<br/>
                    Hostel : {element.hostel}<br/>
                    From : {element.fromDate}<br/>
                    To : {element.toDate}<br/>
                    Reason : {element.reason}<br/>
                    Status : {element.verify}<br/>
                    <button
                      onClick={() => {
                        handleClick(element._id, "approved");
                      }}
                    >
                      {" "}
                      Approve
                    </button>
                    <button
                      onClick={() => {
                        handleClick(element._id, "rejected");
                      }}
                    >
                      {" "}
                      Reject
                    </button>
                  </div>
                );
              })}
            </Row>
          )}
        </Card.Body>
      </Card>
    </>
  );
};

export default VerifyOutpass;
