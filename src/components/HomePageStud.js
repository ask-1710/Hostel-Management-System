import "../styles/HomePageStud.css";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import Announcements from "./Announcements";
import Couriers from "./Couriers";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function HomePageStud(props) {
  const location = useLocation();

  return (
    <>
      {/* <>Location {location.state.role}</> */}
      <Card>
        <div className="row">
          <div className="col-5"></div>
          <div className="col-10">
            <h1 className="float-left w-50 p-2">Hostel Management System</h1>
          </div>
          <div className="col-1"></div>
          {/* <div className="col-1 float-right w-10 p-1">
            <Link to="/login">
              <img
                src="data:image/png;base64,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"
                className="float-right rounded mt-3"
                title="login"
                alt="loading"
              ></img>
            </Link>
          </div> */}
        </div>
      </Card>
      {location.state.loggedIn ? (
        <>
          <Card className="bg-dark">
            {location.state.role === "student" && (
              <nav>
                <li className="styleli">
                  <Link to="/outpass/apply" className="text-white">
                    Apply for an Outpass
                  </Link>
                </li>

                <li className="styleli">
                  <Link to="/rooms" className="text-white">
                    Book Rooms
                  </Link>
                </li>

                <li className="styleli">
                  <Link to="/temporary" className="text-white">
                    View Mess Bill
                  </Link>
                </li>
              </nav>
            )}

            {location.state.role === "warden" && (
              <nav>
                <li className="styleli">
                  <Link to="/outpass/verify" className="text-white">
                    Verify Outpasses
                  </Link>
                </li>

                <li className="styleli">
                  <Link
                    to={`/makeannouncements?userID=${location.state.userID}&role=${location.state.role}`}
                    className="text-white"
                  >
                    Make Announcements
                  </Link>
                </li>
              </nav>
            )}

            {location.state.role === "security" && (
              <nav>
                <li className="styleli">
                  <Link to="/courier/upload" className="text-white">
                    Upload couriers
                  </Link>
                </li>

                <li className="styleli">
                  <Link
                    to={`/makeannouncements?userID=${location.state.userID}&role=${location.state.role}`}
                    className="text-white"
                  >
                    Make Announcements
                  </Link>
                </li>
              </nav>
            )}

            {location.state.role === "messmanager" && (
              <nav>
                <li className="styleli">
                  <Link to="/messbill/upload" className="text-white">
                    Upload Mess Bills
                  </Link>
                </li>

                <li className="styleli">
                  <Link
                    to={`/makeannouncements?userID=${location.state.userID}&role=${location.state.role}`}
                    className="text-white"
                  >
                    Make Announcements
                  </Link>
                </li>
              </nav>
            )}
          </Card>
          <Card className="bg-dark text-white">
            <Announcements />
          </Card>
          <Card className="bg-dark">
            <Couriers />
          </Card>
        </>
      ) : null}
    </>
  );
}

export default HomePageStud;
