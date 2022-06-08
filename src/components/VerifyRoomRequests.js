import { useEffect, useState } from "react";
import { Row, Card } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import RoomBookingService from "../services/RoomBooking";

const VerifyRoomRequests = (props) => {
  const [alert, setAlert] = useState("");
  const [data, setData] = useState([]);
  const [dataStatus, setDataStatus] = useState(false);
  const [alertStatus, setAlertStatus] = useState(false);

  useEffect(() => {
    getPendingRoomRequests();
  }, []);

  const getPendingRoomRequests = () => {
    RoomBookingService.pendingRequests()
      .then((res) => res.data)
      .then((data) => {
        if (data.error) {
          setAlertStatus(true);
          setDataStatus(false);
          setAlert("Error occured while retrieving outpasses");
        } else if (data["numRooms"] > 0) {
          console.log(data["roomList"]);
          setData(data["roomList"]);
          setDataStatus(true);
          setAlertStatus(false);
        } else {
          setAlert("No room bookings to review");
          setAlertStatus(true);
          setDataStatus(false);
        }
      });
  };

  const handleClick = (roomID, action) => {
    // window.alert(roomID + " : "+action) ;
    RoomBookingService.verifyRoomRequests(roomID, action)
      .then((res) => res.data)
      .then((data) => {
        console.log(data);
        if (data.error != null) {
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
        <h2>Room Booking Verification</h2>
        <Card.Body className="bg-dark text-white">
          {dataStatus && (
            <Row className="bg-dark text-white mx-auto">
              {data.map((element) => {
                return (
                  <div className="bg-dark text-white border border-light my-2">
                    Student Register Number : {element.student}
                    <br />
                    Hostel : {element.hostel}
                    <br />
                    Room : {element.roomNum}
                    <br />
                    Type : {element.type}
                    <br />
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

export default VerifyRoomRequests;
