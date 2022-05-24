import './LoginPage.css';

function LoginPage() {
  return (
      <div className="LoginPage">
    <form>
            <h3 className='head1'>User:</h3>
            <input type="text"/>
            <br/>
            <h3 className='head1'>Email Id: </h3>
            <input type="text"/>
            <br/>
            <br/>
            <h3 className='head1'>Password: </h3>
            <input type="text"/>
            <br/>
            <h3 className='head1'>Confirm Password: </h3>
            <input type="text"/>
            <br/>
            <button className='button'>Back</button>
            <br></br>
            <button className='button2'>Create</button>
            <br/>
            <br/>
            <br></br>
    </form>

      </div>
  );
}

export default LoginPage;