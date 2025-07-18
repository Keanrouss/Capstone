// src/components/PlantCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';

function PlantCard({ plant }) {
  return (
    <div style={styles.card}>
      <h2>{plant.common_name }</h2>
      <img
        src={plant.default_image?.thumbnail}
        alt={plant.common_name}
        style={styles.image}
      />
      <p><strong>common_Name:</strong> {plant.common_name}</p>

      {/* Add a link to the plant detail page */}
      <Link to={`/plants/${plant.id}`} style={styles.link}>View Details</Link>
    </div>
  );
}
const styles = {
  card: {
    border: '1px solid green',
    padding: '1rem',
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
