import './LoginForm.css';

function LoginForm() {
  return (
      <div className = "LoginForm">
          <form>
            <h3 className='head1'>Email: </h3>
            <input type="text"/>
            <br/>
            <h3 className='head1'>Password: </h3>
            <input type="text"/>
            <br/>
            <br/>
            <button className='button'>Sign Up</button>
            <button className='button2'>Submit</button>
            <br/>
            <br/>
            <span class="psw">Forgot<a href=""> password?</a></span>
            <br></br>
            <br></br>
          </form>
      </div>
  );
}

export default LoginForm;