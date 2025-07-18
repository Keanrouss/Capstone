import { useState } from 'react';


// Your API key and URL
const API_KEY = "sk-msZR68792b6b92b8511454";
const API_URL = `https://perenual.com/api/v2/species-list?key=${sk-msZR68792b6b92b8511454}`;

function Home() {
  const [plants, setPlants] = useState([]);
  const [loading, setLoading] = useState(false);
console.log('Home')
  // This function fetches plant data from the Perenual API
  const fetchPlants = async () => {
    try {
      setLoading(true);
      const res = await fetch(`https://perenual.com/api/v2/species-list?key=${sk-msZR68792b6b92b8511454}`);
      const data = await res.json();
      console.log("resonse", data)
      setPlants(data.data); // Plant list is in data.data
    } catch (error) {
      console.error('Failed to fetch plants:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>Plants</h1>

      {/* to control APi request */}
      <button onClick={fetchPlants}>Load Plants</button>

      {loading && <p>Loading...</p>}

      {/* get plants after button click */}
      <div>
        {plants.map(plant => (
          <PlantCard key={plant.id} plant={plant} />
        ))}
      </div>
    </div>
  );
}

export default Home;
