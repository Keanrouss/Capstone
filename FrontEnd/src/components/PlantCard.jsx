// src/components/PlantCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import favorites from '../Pages/Favorites';
function PlantCard({ plant , userId}) {
 const navigate = useNavigate() 
const addToFavorites= async ()=>{
  try {
    const fav= {
      userId,
      common_name: plant.common_name,
      plantId: plant.id,
      image_url: plant.default_image.thumbnail
    }
    console.log(fav)
      const response = await fetch(
          `${import.meta.env.VITE_BASE_URL}/users/add`,
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(fav),
          }
        );
        navigate ('/favorites', { state: userId })
  
  } catch (error) {
    console.error ('Error:', error)
  }
}
  return (
    <div style={styles.card}>
      <h2>{plant.common_name }</h2>
      <img
        src={plant.default_image?.thumbnail} //returning the plant image but it comes in 3 different size. Thumbnail fit the best
        alt={plant.common_name}
        style={styles.image}
      />
      <p><strong>common_Name:</strong> {plant.common_name}</p>
      {addToFavorites && (
        <button onClick={()=> addToFavorites()}>Save To Favorites</button>
      )}
      

      {/* Add a link to the plant detail page */}
      <Link to={`/plants/${plant.id}`} style={styles.link}>View Details</Link>
    </div>
  );
}
const styles = {
  card: {
    border: '1px solid green',
    padding: '1.5rem',
    margin: '1rem',
    width: '200px',
    borderRadius: '10px',
    backgroundColor: '#c9d2c9ff',
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

export default PlantCard;
