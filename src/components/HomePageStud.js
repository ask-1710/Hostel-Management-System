import '../styles/HomePageStud.css';
import {Link} from 'react-router-dom' ;

function HomePageStud() {
  return (
      
      <div className = "HomePageStud">
          <h1>Hostel Management System</h1>
          <nav>
              <li className="btn btn-dark"><Link to='/temporary'>Get Outpass</Link></li>
              <li><Link to='/temporary'>Book Rooms</Link></li>
              <li><Link to='/temporary'>View Mess Bill</Link></li>
          </nav>
          <div className="HomePageStud1">
              <h3>Announcements: </h3>
              <h3>Couriers Received: </h3>
          </div>
      </div>
  );
}

export default HomePageStud;