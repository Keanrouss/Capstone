import React from "react";
import { useParams } from 'react-router-dom';
import { useLocation } from "react-router-dom";
import data from '../../data/data.json'

import { useEffect, useState } from "react";


function PlantDetail() {
  const { plantId } = useParams();
  const [plant, setPlant] = useState(null);
  const [loading, setLoading]= useState(false)
  const location = useLocation()
  const [error, setError] = useState("");

  console.log('location ', location)
  console.log('plant ', plant);


  useEffect(() => {
    const fetchPlant = async () => {
      try {
        setLoading(true)
        const response = await fetch(
 `${import.meta.env.VITE_PLANT_API}species/details/${plantId}?key=${
 import.meta.env.VITE_APIKEY
  }`
 );
        console.log(response)
        if (!res.ok) throw new Error("Failed to fetch plant details");
        const data = await res.json();
        console.log ('PlantDetail', data)
        setPlant(data);
      } catch (err) {
        console.error("Error:", err);
        setError(err.message);
      }
    };


    fetchPlant();
  }, [plantId]);


  if (error) return <p>Error: {error}</p>;
  if (!plant) return <p>Loading...</p>;


  return (
    <div>
     {loading && <p>Loading...</p>}
      {/* render more plant details here */}
     <div>
        {plants.map((plant) => (
          <PlantCard key={plant.id} plant={plant} />
        ))}
      </div>
    </div>
  );
}






//using Static data
//import { useLocation } from "react-router-dom";

// function PlantDetail() {
//     // const plantLocation = useLocation();
//     //console.log ('plantLocation', location)
//     const {plantId} = useParams();
//     //console.log('plantId', plantId)
//     const plant = data.find((plant)=>plant.id ===Number(plantId))
// //console.log('plant')
// if (!plant)

//     return (
//         <div>
//             <h2>Plant Details</h2>
//             <p>{plant.Description}</p>
//             <p><strong>Type:</strong>{plant.Type}</p>
//             <p><strong>Watering:</strong>{plant.watering}</p>
//             <p><strong>Sunlight:</strong>{plant.Sunlight.join(',')}</p>

//             {/* <p>path: {location.name}</p> */}
//             <p>Plant Id: {plantId}</p>
//         </div>
//     )
// }

export default PlantDetail;