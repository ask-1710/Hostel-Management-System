import "../styles/HomePageStud.css";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import Announcements from "./Announcements";
import Couriers from "./Couriers";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import MessBillStudent from "./MessBillStudent";

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
        </div>
      </Card>
      {location.state.loggedIn ? (
        <>
          <Card className="bg-dark">
            {location.state.role === "student" && (
              <>
                <nav>
                  <li className="styleli">
                    <Link
                      to="/outpass/apply"
                      state={{
                        userID: location.state.userID,
                        role: location.state.role,
                      }}
                      className="text-white"
                    >
                      Apply for an Outpass
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
                      Book Rooms
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
                      View mess bills
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
                    Verify Outpasses
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
                    Upload couriers
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
                    Make Announcements
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
                    Upload Mess Bills
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
          <Couriers />
          {location.state.role === "student" && <MessBillStudent />}
        </>
      ) : null}
    </>
  );
}

export default HomePageStud;
