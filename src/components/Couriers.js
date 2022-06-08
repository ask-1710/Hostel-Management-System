import { Card, Container, Col, Row } from "react-bootstrap";
import { useEffect, useState } from "react";
import CouriersService from "../services/Couriers";
import { useLocation } from "react-router-dom";

function Couriers() {
  const [data, setData] = useState([]);
  const [number, setNumber] = useState(0) ;
  const location = useLocation() ;

  useEffect(() => {
    getCouriers();
  }, []);

  const getCouriers = () => {
    const userid = location.state.userID;

    CouriersService.getCouriers(userid)
      .then((res) => res.data)
      .then((data) => {
        console.log(data);
        if (data != undefined && data["numCouriers"] > 0) {
          let content = data["couriers"];
          let undeliveredCouriers = content.filter(
            (element) => element["delivered"] === false
          );
          console.log(undeliveredCouriers);
          setData(undeliveredCouriers);
          setNumber(undeliveredCouriers.length) ;
        } else setData("No Couriers to show");
      });
  };

  return (
    <>
      <h1>Couriers</h1>
      <div className="bg-dark">
        {data == [] ? (
          <h4 className="p-4">{data}</h4>
        ) : (
          <Row>
            {number > 0 ? <p className="text-white">{`You have ${number} courier(s) to be collected`}</p> : <p className='text-white'>{"No couriers for you"}</p>}
          </Row>
        )}
      </div>
    </>
  );
}

export default Couriers;
