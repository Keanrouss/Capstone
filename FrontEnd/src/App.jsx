import { Routes, Route, useNavigate, Router } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import PlantDetail from './Pages/PlantDetail'
import Login from './Pages/Login';
import AboutUs from './Pages/About';
import Register from './Pages/Register';
import Favorites from './Pages/Favorites';
import { useState } from 'react';
// import { useLocation } from 'react-router-dom';
import NavBar from './components/NavBar';


function App() {
  // const location = useLocation
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [LogoutMessage, setLogoutMessage] = useState('')
  // const hideNavBar = location.pathname ==='/' || location.pathname === '/register'

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
        <Route path="/AboutUs" element={<AboutUs/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/plants/:plantId" element={<PlantDetail />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </>
  )
}
export default App;
