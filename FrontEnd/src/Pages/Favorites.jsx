import { useState } from "react";
import NavBar from "../components/NavBar"
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import PlantCard from "../components/PlantCard";
import PlantCardContainer from "../components/PlantCardContainer";


function Favorites() {
   const [favorites, setFavorites] = useState([]) //a variable with an empty array
const location = useLocation() //location object
console.log(location.state) //pinpoint location

  useEffect(()=>{ //update the list using real data/in that case using my test data
    async function getdata() {
     const response = await fetch (`http://localhost:8080/api/users/${location.state.userId}`)
     const data = await response.json() // return an response in a format that is pretty to read
     console.log(data) 
     setFavorites(data) //generate the data for favorite/ update data when clicked
    }
    getdata()
  }, [])

  

  return (
    <div>
      {/* get plant id passed from in/follow their location while they are navigating. */}
      <NavBar userId= {location.state.userId}/> 
      <div className='Favoriteview'>
      <h2>My Favorite Plants</h2>
      <PlantCardContainer>
       {favorites.map((plant) => ( // userId={location.state._id} that was a prop but it was causing home page to crash and not show.
          <PlantCard key={plant.id}  userId={location._id} plant={plant}  />
          //
        )
        )}
        </PlantCardContainer> 
        </div>
      </div>
  )
}
// const style to style the whole cards easily
const styles = {
plantCardContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
};

export default Favorites