import "../styles/HomePageStud.css";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import Announcements from "./Announcements";
import Couriers from "./Couriers";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import MessBillStudent from "./MessBillStudent";
import OutpassStatus from './OutpassStatus';

function HomePageStud(props) {
  const location = useLocation();

  return (
    <>
      {location.state.loggedIn ? (
        <>
          <h1 style={{ fontSize: "50px", display: "inline-flex" }}>
            Hostel Management System
          </h1>
          <Card className="bg-dark">
            {location.state.role === "student" && (
              <>
                <nav className="p-5">
                  <li>
                    <a href={"#couriers"}>View Couriers</a>
                  </li>
                  <li className="styleli">
                    <Link
                      to="/outpass/apply"
                      state={{
                        userID: location.state.userID,
                        role: location.state.role,
                      }}
                      className="text-white"
                    >
                      <p style={{ fontSize: "25px", display: "inline-flex" }}>
                        Apply for an Outpass
                      </p>
                    </Link>
                  </li>

                  <li className="styleli">
                    <Link
                      to="/rooms"
                      state={{
                        userID: location.state.userID,
                        role: location.state.role,
                      }}
                      className="text-white"
                    >
                      <p style={{ fontSize: "25px", display: "inline-flex" }}>
                        Book Rooms
                      </p>
                    </Link>
                  </li>

                  <li className="styleli">
                    <Link
                      to={`/messbill/view`}
                      state={{
                        userID: location.state.userID,
                        role: location.state.role,
                      }}
                      className="text-white"
                    >
                      <p style={{ fontSize: "25px", display: "inline-flex" }}>
                        View mess bills
                      </p>
                    </Link>
                  </li>
                </nav>
              </>
            )}

            {location.state.role === "warden" && (
              <nav>
                <li className="styleli">
                  <Link
                    to={`/outpass/verify`}
                    state={{
                      userID: location.state.userID,
                      role: location.state.role,
                    }}
                    className="text-white"
                  >
                    <p style={{ fontSize: "25px", display: "inline-flex" }}>
                        Verify Outpass
                      </p>
                  </Link>
                </li>

                <li className="styleli">
                  <Link
                    to={`/makeannouncements`}
                    state={{
                      userID: location.state.userID,
                      role: location.state.role,
                    }}
                    className="text-white"
                  >
                    <p style={{ fontSize: "25px", display: "inline-flex" }}>
                        Make Announcements
                      </p>
                  </Link>
                </li>
              </nav>
            )}

            {location.state.role === "security" && (
              <nav>
                <li className="styleli">
                  <Link
                    to="/courier/upload"
                    state={{
                      userID: location.state.userID,
                      role: location.state.role,
                    }}
                    className="text-white"
                  >
                    <p style={{ fontSize: "25px", display: "inline-flex" }}>
                        Upload Couriers
                      </p>
                  </Link>
                </li>

                <li className="styleli">
                  <Link
                    to="/makeannouncements"
                    state={{
                      userID: location.state.userID,
                      role: location.state.role,
                    }}
                    className="text-white"
                  >
                    <p style={{ fontSize: "25px", display: "inline-flex" }}>
                        Make Announcements
                      </p>
                  </Link>
                </li>
              </nav>
            )}

            {location.state.role === "messmanager" && (
              <nav>
                <li className="styleli">
                  <Link
                    to={`/messbill/upload`}
                    state={{
                      userID: location.state.userID,
                      role: location.state.role,
                    }}
                    className="text-white"
                  >
                    <p style={{ fontSize: "25px", display: "inline-flex" }}>
                        Upload Mess Bill
                      </p>
                  </Link>
                </li>

                <li className="styleli">
                  <Link
                    to={`/makeannouncements`}
                    state={{
                      userID: location.state.userID,
                      role: location.state.role,
                    }}
                    className="text-white"
                  >
                    Make Announcements
                  </Link>
                </li>
              </nav>
            )}
          </Card>
          <Announcements />
          <div id="couriers">
          <Couriers />
          </div>
          
          {location.state.role === "student" && <MessBillStudent /> && (
            <OutpassStatus />
          )}
        </>
      ) : null}
    </>
  );
}

export default HomePageStud;
