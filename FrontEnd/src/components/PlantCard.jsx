// src/components/PlantCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import Favorites from '../Pages/Favorites';
function PlantCard({ plant , userId}) {
 // console.log(userId)
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
  } catch (error) {
    console.error ('Error:', error)
  }
  
}
  return (
    <div style={styles.card}>
      <h2>{plant.common_name }</h2>
      <img
        src={plant.default_image?.thumbnail}
        alt={plant.common_name}
        style={styles.image}
      />
      <p><strong>common_Name:</strong> {plant.common_name}</p>
      {addToFavorites && (
        <button onClick={()=> addToFavorites(plant)}>Save To Favorites</button>
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
    backgroundColor: '#f4fff4',
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
