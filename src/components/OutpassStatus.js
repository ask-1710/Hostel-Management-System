import { Card, Container, Col, Row } from "react-bootstrap";
import { useEffect, useState } from "react";
import OutpassService from "../services/Outpass";
import { useLocation } from "react-router-dom";

function OutpassStatus() {
  const [data, setData] = useState([]);
  const [regno, setRegno] = useState("");

  const location = useLocation();

  useEffect(() => {
    getOutpassStatus();
  }, []);

  const getOutpassStatus = () => {
    const userid = location.state.userID;
    setRegno(userid);
    OutpassService.getOutpassStatus(userid)
      .then((res) => res.data)
      .then((data) => {
        console.log(data);
        if (data != undefined && data["numOutpasses"] > 0) {
          let content = data["outpassList"];
          setData(content);
        } else setData([]);
      });
  };

  return (
    <>
      <h1>Outpass Status</h1>
      <div className="bg-dark">
        <Row>
          {data.map((element) => {
            return (
              <div className="bg-dark text-white border border-light p-4 m-4" style={{width:"20rem"}}>
                Address : {"  "+element.address}
                <br />
                From : {"  " +new Date(element.fromDate)}
                <br />
                To : {"  " +new Date(element.toDate)}
                <br />
                Reason : {"  "+element.reason}
                <br />
                Status : {"  "+element.verify}
                <br />
              </div>
            );
          })}
        </Row>
      </div>
    </>
  );
}

export default OutpassStatus;
