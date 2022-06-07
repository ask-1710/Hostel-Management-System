import { Card, Container, Col, Row } from "react-bootstrap";
import { useEffect, useState } from "react";
import CouriersService from "../services/Couriers";

function Couriers() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getCouriers();
  }, []);

  const getCouriers = () => {
    CouriersService.getCouriers()
      .then((res) => res.data)
      .then((data) => {
        console.log(data);
        if (data != undefined && data["numCouriers"] > 0) {
          let content = data["couriers"];
          let undeliveredCouriers = content.filter(
            (element) => element["delivered"] == false
          );
          console.log(undeliveredCouriers);
          setData(undeliveredCouriers);
        } else setData("No Couriers to show");
      });
  };

  return (
    <>
      <h1>Couriers</h1>
      <Container className="bg-dark">
        {data == [] ? (
          <h4 className="p-4">{data}</h4>
        ) : (
          <Row>
            {data.map((element) => {
              return (
                <Col className="m-1">
                  <Card className="bg-dark text-white float-left border border-info">
                    <Card.Body className="bg-dark text-white  float-left">
                      For : {element.studentRegNum}
                      <br />
                      OID : {element.orderId}
                    </Card.Body>
                  </Card>
                </Col>
              );
            })}
          </Row>
        )}
      </Container>
    </>
  );
}

export default Couriers;
