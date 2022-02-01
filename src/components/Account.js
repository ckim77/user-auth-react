import React from 'react';
import './Account.css';
import { Link } from 'react-router-dom';

//this component can only be seen by people who are logged in (landing PAGE)
function Account() {
  return <div className="account">
    <h2>Welcome, click on the links below to navigate the Daily App.</h2>
    <Link to="/weather" style={{ textDecoration: 'none' }}>
        <p>Weather App</p>
    </Link>

    <Link to ="/expense" style={{ textDecoration: 'none' }}>
        <p>Expense Tracker</p>
    </Link>
  
  </div>;
}

export default Account;
