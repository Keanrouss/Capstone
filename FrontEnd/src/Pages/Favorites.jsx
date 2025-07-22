import { useState } from "react";
import NavBar from "../components/NavBar"
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import PlantCard from "../components/PlantCard";


function Favorites() {
   const [favorites, setFavorites] = useState([])

  useEffect(()=>{
    async function getdata() {
     const response = await fetch ('http://localhost:8080/api/users')
     const data = await response.json()
     console.log(data) 
     setFavorites(data)
    }
    getdata()
  }, [])

  

  return (
    <div>
      <NavBar/>
      <h2>My Favorite Plants</h2>
       {favorites.map((plant) => ( // userId={location.state._id} that was a prop but it was causing home page to crash and not show.
          <PlantCard key={plant.id}  userId={location._id} plant={plant}  />
        ))}
      </div>
  )
}
const styles = {
  card: {
    border: '1px solid green',
    padding: '1.5rem',
    margin: '1rem',
    width: '200px',
    borderRadius: '10px',
    backgroundColor: '#9dc29dff',
  },
  image: {
    width: '100%',
    height: 'auto',
  },
  link: {
    textDecoration: 'none',
    color: 'green',
    fontWeight: 'bold',
  },
};

export default Favorites