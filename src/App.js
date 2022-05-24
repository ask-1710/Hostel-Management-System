import logo from './logo.svg';
import './App.css';
import LoginForm from './LoginForm';
import LoginPage from './LoginPage';
import HomePageStud from './HomePageStud';

function App() {
  return (
      <div className="App">
        <form>
          {/*<h1>Hostel Management System</h1>
          {/* <LoginForm></LoginForm> */}
          {/* <LoginPage></LoginPage> */}
          <HomePageStud></HomePageStud>
        </form>
      </div>
  );
}

export default App;

// <header className="App-header">
//   <img src={logo} className="App-logo" alt="logo" />
//   <p>
//     Edit <code>src/App.js</code> and save to reload.
//   </p>
//   <a
//     className="App-link"
//     href="https://reactjs.org"
//     target="_blank"
//     rel="noopener noreferrer"
//   >
//     Learn React
//   </a>
// </header>
