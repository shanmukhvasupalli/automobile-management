import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import MainNavBar from './main/MainNavBar';
import AdminNavBar from './admin/AdminNavBar';
import SellerNavBar from './seller/SellerNavBar';
import UserNavBar from './user/UserNavBar';


function App() {
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const [isSellerLoggedIn, setIsSellerLoggedIn] = useState(false);

  useEffect(() => {
    const adminLoggedIn = localStorage.getItem('isAdminLoggedIn') === 'true';
    const userLoggedIn = localStorage.getItem('isUserLoggedIn') === 'true';
    const sellerLoggedIn = localStorage.getItem('isSellerLoggedIn') === 'true';
    
    setIsAdminLoggedIn(adminLoggedIn);
    setIsUserLoggedIn(userLoggedIn);
    setIsSellerLoggedIn(sellerLoggedIn);
  }, []);

  const onAdminLogin = () => {
    localStorage.setItem('isAdminLoggedIn', 'true');
    setIsAdminLoggedIn(true);
  };

  const onUserLogin = () => {
    localStorage.setItem('isUserLoggedIn', 'true');
    setIsUserLoggedIn(true);
  };

  const onSellerLogin = () => {
    localStorage.setItem('isSellerLoggedIn', 'true');
    setIsSellerLoggedIn(true);
  };

  return (
    <div className="App">
      <h3 align="center">Automobile Management System</h3>
      <Router>
        {isAdminLoggedIn ? (
          <AdminNavBar />
        ) : isUserLoggedIn ? (
          <UserNavBar />
        ) : isSellerLoggedIn ? (
          <SellerNavBar />
        ) : (
          <MainNavBar
            onAdminLogin={onAdminLogin}
            onUserLogin={onUserLogin}
            onSellerLogin={onSellerLogin}
          />
        )}
      </Router>
    </div>
  );
}

export default App;
