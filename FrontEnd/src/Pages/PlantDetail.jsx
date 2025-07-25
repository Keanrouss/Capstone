import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import plantDetailData from "../../data/plantdetail.json"
import NavBar from "../components/NavBar";


function PlantDetail() {
  const { plantId } = useParams();
  const [plant, setPlant] = useState(null);// set to start out with empty data because didn't know what 
  // was included from the api response.
  const [error, setError] = useState("");


  useEffect(() => {
    const fetchPlant = async () => { //
      try {
        // const res = await fetch(
        //  `https://www.perenual.com/api/v2/species/details/${plantId}?key=${import.meta.env.VITE_APIKEY}`
        // );
        // if (!res.ok) throw new Error("Failed to fetch plant details");
        // const data = await res.json();
        console.log(plantDetailData)
        setPlant(plantDetailData);
      } catch (err) {
        console.error("Error:", err);
        setError(err.message); //return an error
      }
    };


    fetchPlant();
  }, [plantId]);


  if (error) return <p>Error: {error}</p>;
  if (!plant) return <p>Loading...</p>;
console.log(plant.default_image.medium_url)
  return (
    <div>
      
      <NavBar/>
      <div className="Plantdetailview"/>
      {/* plant.common_name was to retrieve that name as there was a scientific name that was way to hard 
      to pronounce and long long. */}
      <h2>{plant.common_name}</h2>  
      <p><strong>Type:</strong> {plant.type}</p>
      <p><strong>Watering:</strong> {plant.watering}</p>
      <p><strong>Sunlight:</strong> {plant.sunlight.join(", ")}</p>
      <p>{plant.description}</p>
      <img
      // selected the default image instead of the large, thumbnail etc
        src={plant.default_image.medium_url}
        alt={plant.common_name}
        style={{ maxWidth: "200px", borderRadius: "10px", marginTop: "1rem" }}
        />
    </div>
  );
}
export default PlantDetail;