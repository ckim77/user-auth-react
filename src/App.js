import Login from './components/Login';
import Register from './components/Register';
import { Route, Routes } from 'react-router';
import { useEffect, useState } from 'react';
import Dashboard from './components/Dashboard';
import Weather from './components/Weather';
import Expense from './components/Expense';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const loginUser = () => setIsLoggedIn(!isLoggedIn);

  useEffect(() => {
    if(localStorage.getItem('user')) {
      setIsLoggedIn(true)
    }
  }, []);
  
  return (
    <div className="App">
      <Routes>
        <Route path='*' element={isLoggedIn ? <Dashboard /> : <Login logFunction={loginUser} />} />
        <Route path='register' element={<Register />} />
        <Route path='weather' element={<Weather />} />
        <Route path='expense' element={<Expense />} />
      </Routes>
    </div>
  );
}

export default App;
