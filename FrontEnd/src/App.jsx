import { Routes, Route, useNavigate, Router } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import PlantDetail from './Pages/PlantDetail'
import Login from './Pages/Login';
import Dashboard from './Pages/Dashboard';
import Register from './Pages/Register';
import Favorites from './Pages/Favorites';
import { useState } from 'react';
import NavBar from './components/NavBar';


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [LogoutMessage, setLogoutMessage] = useState('')

  return (
    <>
      {isLoggedIn && <NavBar
        setIsLoggedIn={setIsLoggedIn}
        setLogoutMessage={setLogoutMessage}
        LogoutMessage={LogoutMessage} />}
        
      <Routes>
        <Route path="/" element={<Login
        setIsLoggedIn ={setIsLoggedIn}
        LogoutMessage = {LogoutMessage} />} />

        <Route path="/register" element={<Register />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/home" element={<Home />} />
        <Route path="/plants/:plantId" element={<PlantDetail />} />
        <Route path="/Favorites" element={<Favorites />} />
      </Routes>
    </>
  )
}
export default App;

