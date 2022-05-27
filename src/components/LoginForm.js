import "bootstrap/dist/css/bootstrap.min.css";
import {Container, Card,Col,Button} from 'react-bootstrap' ;

function LoginForm() {
  return (
    <div className="App">
          <Card className="bg-dark mx-auto align-middle">
            <Card.Body className='bg-dark'>
              <Card.Title className="bg-dark text-white text-primary"><h1>Login</h1></Card.Title>
              <Card.Text>
                <form>
                  <h3 className="head1">Email: </h3>
                  <input type="text" />
                  <br />
                  <h3 className="head1">Password: </h3>
                  <input type="password" />
                </form>
              </Card.Text>
              <Button>Login</Button>
            </Card.Body>
          </Card>
    </div>
  );
}

export default LoginForm;
