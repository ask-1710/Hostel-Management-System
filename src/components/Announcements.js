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
        <Row>
          {data.map((element) => {
            return (
              <Col className="p-4 m-1 w-25 h-auto">
                <Card className="bg-dark">
                  <Card.Header className="bg-dark">
                    By : {element.announcer}
                  </Card.Header>
                  <Card.Body className="bg-dark">
                    To : {element.audience}
                    <br />
                    Information: {element.information}
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    </>
  );
}

export default Announcements;
