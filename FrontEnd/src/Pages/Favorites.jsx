import React from 'react';
import PlantCard from '../components/PlantCard';
//import PlantDetail from './PlantDetail';


function Favorites({favorite}) {
  return (
    <div>
      <h2>🌿 Favorite Plants</h2>
      {favorite.length === 0 ? (
        <p>No favorites yet. Add some from the home page!</p>
      ) : (
        <div style={styles.grid}>
          {favorite.map((plant) => (
            <PlantCard key={plant.id} plant={plant} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Favorites;
