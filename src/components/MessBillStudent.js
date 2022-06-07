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

  const [searchParams, setSearchParams] = useSearchParams() ;
  const [location, setLocation] = useLocation() ;

  useEffect(() => {
    getMessBills();
    setSuccess(false);
    setState(false);
  }, []);

  const getMessBills = () => {
    // const userid = searchParams.get("userID");
    const userid = location("userID");
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
      <Container className="bg-dark">
        {state && !success && <h4 className="p-4 text-white">{data}</h4>}
        {success &&
          data.map((element) => {
            return (
              <Row className="p-1 m-1 w-25 h-auto ms-auto me-auto text-white float-left text-left">
                <span className="border border-info">
                  <p>Amount : {element.Fee}</p>
                  <p>Month : {monthNames[new Date(element.Date).getMonth()]}</p>
                </span>
              </Row>
            );
          })}
      </Container>
    </>
  );
}

export default MessBillStudent;
