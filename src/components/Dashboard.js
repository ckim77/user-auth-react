import React from 'react';
import { Route, Routes } from 'react-router';
import Account from './Account';

function Dashboard() {
  return <div>
      <Routes>
          <Route path="/account" element={<Account />} />
      </Routes> 
  </div>;
}

export default Dashboard;
