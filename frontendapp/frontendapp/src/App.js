//import logo from './logo.svg';
//import './App.css';
import {BrowserRouter as Router} from 'react-router-dom'
import MainNavBar from './main/MainNavBar';
import AdminNavBar from './admin/AdminNavBar';
import SellerNavBar from './seller/SellerNavBar';


function App() {
  return (
    <div className="App">
      {/* <h3 align="center">Automobile Management System</h3> */}
     <Router>
        <MainNavBar/>
        {/* <AdminNavBar/> */}
        {/* <SellerNavBar/> */}
     </Router>
    </div>
  );
}

export default App;
