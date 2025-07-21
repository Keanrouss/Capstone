import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


function PlantDetail() {
  const { plantId } = useParams();
  const [plant, setPlant] = useState(null);
  const [error, setError] = useState("");


  useEffect(() => {
    const fetchPlant = async () => {
      try {
        const res = await fetch(
        //   `https://www.perenual.com/api/v2/species/details/${plantId}?key=sk-msZR68792b6b92b8511454`
        );
        if (!res.ok) throw new Error("Failed to fetch plant details");
        const data = await res.json();
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
      <h2>{plant.common_name}</h2>
      <p><strong>Type:</strong> {plant.type}</p>
      <p><strong>Watering:</strong> {plant.watering}</p>
      <p><strong>Sunlight:</strong> {plant.sunlight.join(", ")}</p>
      <p>{plant.description}</p>
      <img
        src={plant.default_image.regular_url}
        alt={plant.common_name}
        style={{ maxWidth: "200px", borderRadius: "10px", marginTop: "1rem" }}
        />

      {/* render more plant details here */}
    </div>
  );
}
export default PlantDetail;