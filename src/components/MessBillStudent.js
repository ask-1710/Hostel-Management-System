import { Card, Container, Col, Row } from "react-bootstrap";
import { useEffect, useState } from "react";
import MessBillService from "../services/MessBill";
import { useSearchParams, useLocation } from "react-router-dom";

function MessBillStudent() {
  const [data, setData] = useState([]);
  const [success, setSuccess] = useState(false);
  const [studentId, setStudentId] = useState("");
  const [state, setState] = useState(false);
  const [monthNames, setMonthNames] = useState([
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ]);

  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();

  useEffect(() => {
    getMessBills();
    setSuccess(false);
    setState(false);
  }, []);

  const getMessBills = () => {
    const userid = location.state.userID;
    console.log(userid);
    setStudentId(userid);
    MessBillService.getMessBill(userid)
      .then((res) => res.data)
      .then((data) => {
        setState(true);
        console.log(data);
        if (data != undefined && data["numMessBills"] > 0) {
          let content = data["messBillList"];
          setData(content);
          setSuccess(true);
        } else {
          setData("No Mess bills to show");
          setSuccess(false);
        }
      });
  };

  return (
    <>
      <h1>Mess Bill</h1>
      {state && !success && <h4 className="p-4 text-white">{data}</h4>}
      {state && success && (
        <div className="bg-dark">
          <Row className="mx-auto">
            {data.map((element) => {
              return (
                <Col className="p-5 m-2">
                  <div className="bg-dark text-white">
                    <div
                      style={{ width: "20rem", height: "5rem" }}
                      className="bg-dark text-white border border-light p-2"
                    >
                      Amount : {"Rs.  "+element.Fee}<br/>
                      Month : {monthNames[new Date(element.Date).getMonth()]}
                    </div>
                  </div>
                </Col>
              );
            })}
          </Row>
        </div>
      )}
    </>
  );
}

export default MessBillStudent;
