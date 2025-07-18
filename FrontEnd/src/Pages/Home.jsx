import { useState, useEffect } from 'react';
// DELETE THIS LINE WHEN READY TO ACTIVE API
import testData from '../../data/data.json';
import PlantCard from '../components/PlantCard'

// CALL TO GET A SINGLE PLANT DETAILS - MOVE THIS CODE TO PLANT PAGE
// const response = await fetch(
//   `${import.meta.env.VITE_PLANT_API}species/details/${plantId}?key=${
//     import.meta.env.VITE_APIKEY
//   }`
// );

function Home() {
  const [plants, setPlants] = useState([]);
  const [loading, setLoading] = useState(false);
  console.log('plants ', plants);

  useEffect(() => {
    const fetchPlants = async () => {
      try {
        setLoading(true);
        // UNCOMMENT OUT THIS CODE WHEN READY TO ACTIVATE API
        // const response = await fetch(
        //   `${import.meta.env.VITE_PLANT_API}species-list?key=${
        //     import.meta.env.VITE_APIKEY
        //   }`
        // );
        // const data = await response.json();
        // console.log('resonse', data);
        // setPlants(data.data); // Plant list is in data.data

        // DELETE THIS LINE WHEN READY TO ACTIVE API
        setPlants(testData);
      } catch (error) {
        console.error('Failed to fetch plants:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchPlants();
  }, []);

  return (
    <div>
      <h1>Plants</h1>
      {loading && <p>Loading...</p>}

      {/* get plants after button click */}
      <div>
        {plants.map((plant) => (
          <PlantCard key={plant.id} plant={plant} />
        ))}
      </div>
    </div>
  );
}
//box look for the card to display plant
const styles = {
  grid: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
};


export default Home;

