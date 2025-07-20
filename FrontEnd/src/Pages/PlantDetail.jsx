import React from "react";
import { useParams } from 'react-router-dom';
import data from '../../data/data.json'

//import { useLocation } from "react-router-dom";

function PlantDetail() {
    // const plantLocation = useLocation();
    //console.log ('plantLocation', location)
    const {plantId} = useParams();
    //console.log('plantId', plantId)
    const plant = data.find((plant)=>plant.id ===Number(plantId))
//console.log('plant')
if (!plant)

    return (
        <div>
            <h2>Plant Details</h2>
            {/* <p>path: {location.name}</p> */}
            <p>Plant Id: {plantId}</p>
        </div>
    )
}

export default PlantDetail;