import 'bootstrap/dist/css/bootstrap.min.css';  

function LoginForm() {
  return (
      <div className="App">
        {/* <Container className="p-4">
          <Col md="4" mb="4">
            <Card>
              <Card.Body>
                <Card.Title>Login</Card.Title>
                <Card.Text>
                  <form>
                    <h3 className="head1">Email: </h3>
                    <input type="text" />
                    <br />
                    <h3 className="head1">Password: </h3>
                    <input type="password" />
                  </form>
                </Card.Text>
                <Button variant="bg-dark">Login</Button>
              </Card.Body>
            </Card>
          </Col>
        </Container> */}
        <div class="card text-white bg-dark mb-3" style="max-width: 18rem;">
          <div class="card-header">Header</div>
          <div class="card-body">
            <h5 class="card-title">Dark card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
        </div>
      </div>
  );
}

export default LoginForm;
