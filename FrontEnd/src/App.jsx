import {Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import PlantDetail from './Pages/PlantDetail'
import Login from './Pages/Login';
import Dashboard from './Pages/Dashboard';
import Register from './Pages/Register';
import Favorites from './Pages/Favorites';


function App() {

  return (
      <Routes>
         <Route path="/" element = {<Login /> }/>
         <Route path="/register" element = {<Register/> }/>
         <Route path="/Dashboard" element = {<Dashboard/> }/>
         <Route path="/home" element = {<Home /> }/>
       <Route path="/plants/:plantId" element = {<PlantDetail /> }/>
        <Route path="/Favorites" element={<Favorites />} />


      </Routes>
  )
}
export default App;

