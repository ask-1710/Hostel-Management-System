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
      <h1 className="text-white">Couriers</h1>
      <Container className="bg-dark">
        <Row>
          {data == [] ? (
            <h4 className="p-4">{data}</h4>
          ) : (
            data.map((element) => {
              return (
                // to get other student details too
                <Col className="p-4 m-1 w-25 h-auto">
                  <Card className="bg-dark text-white">
                    <Card.Header className="bg-dark text-white">
                      For : {element.studentRegNum}
                    </Card.Header>
                    <Card.Body className="bg-dark text-white">
                      OID : {element.orderId}
                    </Card.Body>
                  </Card>
                </Col>
              );
            })
          )}
        </Row>
      </Container>
    </>
  );
}

export default Couriers;
