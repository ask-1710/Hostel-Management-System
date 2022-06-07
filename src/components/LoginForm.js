import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Button } from "react-bootstrap";
import LoginService from "../services/Login";
import { useState } from "react";
import { Link } from "react";
// import history from "../history";
import { useNavigate } from "react-router-dom";

function LoginForm() {
  const [userid, setUserID] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("student");
  const [status, setStatus] = useState(false);

  let history = useNavigate();

  const handleSubmit = (ev) => {
    ev.preventDefault();
    // alert("Successful login : " + userid + " -> " + password);
    LoginService.loginUser(userid, password, role)
      .then((res) => {
        if (res.data.returnedId !== "") {
          alert("Successful login : " + role + " -> " + userid);
          
          history("/home", { state: { role: role, userID: userid , loggedIn: true } });

          // history.push({
          //   pathname: "/",
          //   state: { role: role },
          // });
          // history.push(to: To, state?: any)

          // history.pushState({role: role}, '', "/")

          setStatus(true);
        } else {
          alert("Invalid login");
          history.push("/login");
        }
      })
      .catch((error) => {
        console.log("Invalid login error occured : " + error);
      });
  };

  return (
    <div className="App">
      {status && (
        <div>
          <h1>
            Login successful
            <br />
            Head on to<Link to="/">Home page</Link>
          </h1>
        </div>
      )}
      <Card className="bg-dark mx-auto align-middle">
        <Card.Body className="bg-dark">
          <Card.Title className="bg-dark text-white text-primary">
            <h1>Login</h1>
          </Card.Title>
          <form onSubmit={handleSubmit}>
            <h3 className="head1">User ID </h3>
            <input
              type="text"
              name="userid"
              value={userid}
              onChange={(e) => {
                setUserID(e.target.value);
              }}
              required
            />
            <br />
            <h3 className="head1">Password </h3>
            <input
              type="password"
              name="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              required
            />
            <br />
            <label>
              <h3 className="head1">Role</h3>
              <select
                name="role"
                value={role}
                onChange={(e) => setRole(e.target.value)}
                required
              >
                <option id="opt1" name="role" value="student">
                  Student
                </option>
                <option id="opt2" name="role" value="warden">
                  Warden
                </option>
                <option id="opt3" name="role" value="security">
                  Security
                </option>
                <option id="opt4" name="role" value="messmanager">
                  Mess Manager
                </option>
              </select>
            </label>
            <br />
            <Button className="my-4" type="submit">
              Login
            </Button>
          </form>
        </Card.Body>
      </Card>
    </div>
  );
}

export default LoginForm;
