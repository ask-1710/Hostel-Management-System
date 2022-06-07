import { useState } from "react";
import { Card } from "react-bootstrap";
import AnnouncementsService from "../services/Announcements";
import history from "../history";
import { useSearchParams } from "react-router-dom";

const MakeAnnouncements = (props) => {
  const [role, setRole] = useState("");
  const [audience, setAudience] = useState("");
  const [date, setDate] = useState(new Date());
  const [info, setInfo] = useState("");
  const [alert, setAlert] = useState("");
  const [userID, setUserID] = useState("");

  const [searchParams, setSearchParams] = useSearchParams();

  const handleSubmit = (ev) => {
    ev.preventDefault();
    // window.alert(searchParams.get("userID"));
    setUserID(searchParams.get("userID"));
    setRole(searchParams.get("role"));

    console.log(
      userID + ", " + role + " ," + date + ", " + audience + ", " + info
    );

    try {
      AnnouncementsService.makeAnnouncements(
        userID,
        role,
        date,
        audience,
        info
      ).then((result) => {
        console.log(result.data) ;
        if (result.data) {
          setAlert("Request successful! Announcement added successfully");
          history.push("/home");
        } 
      });
    } catch (e) {
      console.log(e);
      setAlert("Error while adding announcement..Please try again");
      history.push("/makeannouncements");
    }
  };

  return (
    <>
      <div id="alert" className="alert">
        {alert}
      </div>
      <Card className="bg-dark text-white">
        <h2>Create Announcement</h2>
        <Card.Body className="bg-dark text-white">
          <form onSubmit={handleSubmit}>
            <label className="p-1 m-2">
              Date *
              <input
                type="date"
                name="date"
                onChange={(e) => setDate(e.target.value)}
                required
              />
            </label>
            <br />
            <label className="p-1 m-2">
              {" "}
              Audience *
              <input
                type="text"
                name="name"
                value={audience}
                onChange={(e) => setAudience(e.target.value)}
                required
              />
            </label>
            <br />
            <label className="p-1 m-2">
              {" "}
              Information *
              <input
                type="text"
                name="name"
                value={info}
                onChange={(e) => setInfo(e.target.value)}
                required
              />
            </label>
            <br />
            <button type="submit" className="btn btn-info p-1 m-4">
              Submit
            </button>
          </form>
        </Card.Body>
      </Card>
    </>
  );
};

export default MakeAnnouncements;
