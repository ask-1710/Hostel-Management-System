import "../styles/HomePageStud.css";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import Announcements from "./Announcements";
import Couriers from "./Couriers";
import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import MessBillStudent from "./MessBillStudent";
import OutpassStatus from "./OutpassStatus";

function HomePageStud(props) {
  const location = useLocation();

  const CouriersRef = useRef(null);
  const MessBillRef = useRef(null);
  const OutpassStatusRef = useRef(null);
  const topRef = useRef(null);

  const gotoTop = () => {
    window.scrollTo({
      top: topRef.current.offsetTop,
      behaviour: "smooth",
    });
  };

  const gotoCouriers = () =>
    window.scrollTo({
      top: CouriersRef.current.offsetTop,
      behaviour: "smooth",
    });

  const gotoMessBill = () =>
    window.scrollTo({
      top: MessBillRef.current.offsetTop,
      behaviour: "smooth",
    });

  const gotoOutpassStatus = () =>
    window.scrollTo({
      top: OutpassStatusRef.current.offsetTop,
      behaviour: "smooth",
    });

  return (
    <>
      {location.state.loggedIn ? (
        <>
          <h1 ref={topRef} style={{ fontSize: "50px", display: "inline-flex" }}>
            Hostel Management System
          </h1>
          <Card className="bg-dark">
            {location.state.role === "student" && (
              <>
                <nav className="p-2">
                  <li>
                    <a
                      style={{
                        textDecorationLine: "underline",
                        fontSize: "20px",
                        display: "inline-flex",
                      }}
                      onClick={gotoCouriers}
                    >
                      View Couriers
                    </a>
                  </li>
                  <li>
                    <a
                      style={{
                        textDecorationLine: "underline",
                        fontSize: "20px",
                        display: "inline-flex",
                      }}
                      onClick={gotoCouriers}
                    >
                      View outpass status
                    </a>
                  </li>
                  <li>
                    <a
                      style={{
                        textDecorationLine: "underline",
                        fontSize: "20px",
                        display: "inline-flex",
                      }}
                      onClick={gotoMessBill}
                    >
                      View Mess Bills
                    </a>
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
                      <p style={{ fontSize: "20px", display: "inline-flex" }}>
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
                      <p style={{ fontSize: "20px", display: "inline-flex" }}>
                        Book Rooms
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
                    <p style={{ fontSize: "20px", display: "inline-flex" }}>
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
                    <p style={{ fontSize: "20px", display: "inline-flex" }}>
                      Make Announcements
                    </p>
                  </Link>
                </li>

                <li className="styleli">
                  <Link
                    to={`/rooms/verify`}
                    state={{
                      userID: location.state.userID,
                      role: location.state.role,
                    }}
                    className="text-white"
                  >
                    <p style={{ fontSize: "20px", display: "inline-flex" }}>
                      Verify Room Bookings
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
                    <p style={{ fontSize: "20px", display: "inline-flex" }}>
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
                    <p style={{ fontSize: "20px", display: "inline-flex" }}>
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
                    <p style={{ fontSize: "20px", display: "inline-flex" }}>
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

          <button value="TOP" onClick={gotoTop}>
            TOP
          </button>
          <div ref={CouriersRef}>
            <Couriers />
          </div>

          <button value="TOP" onClick={gotoTop}>
            TOP
          </button>
          {location.state.role === "student" && (
            <div ref={MessBillRef}>
              <MessBillStudent />

              <button value="TOP" onClick={gotoTop}>
                TOP
              </button>
            </div>
          )}
          {location.state.role === "student" && (
            <div ref={OutpassStatusRef}>
              <OutpassStatus />

              <button value="TOP" onClick={gotoTop}>
                TOP
              </button>
            </div>
          )}
        </>
      ) : null}
    </>
  );
}

export default HomePageStud;
