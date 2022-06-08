import { Card, Container, Col, Row } from "react-bootstrap";
import { useEffect, useState } from "react";
import AnnouncementsService from "../services/Announcements";

function Announcements() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getAnnouncements();
  }, []);

  const getAnnouncements = () => {
    AnnouncementsService.getAnnouncements()
      .then((res) => res.data)
      .then((data) => {
        console.log(data);
        if (data != undefined && data["numAnnouncements"] > 0) {
          let content = data["announcements"];
          let sortedAnnouncements = content.sort(
            (a, b) => new Date(...b.Date) - new Date(...a.Date)
          );
          setData(sortedAnnouncements);
        } else setData("No announcements to show");
      });
  };

  return (
    <>
      <h1>Announcements</h1>
      <Container className="bg-dark">
        <Row className='mx-auto'>
        {data.map((element) => {
          return (
            <Col className="p-5 m-2">
              <div  className="bg-dark text-white">
                <div style={{width:"20rem", height:"10rem"}} className="bg-dark text-white border border-light">
                  By : {element.announcer} <br />
                  To : {element.audience} <br />
                  Information: {element.information}
                </div>
              </div>
            </Col>
          );
        })}
        </Row>
      </Container>
    </>
  );
}

export default Announcements;
