import React from "react";
import Hogs from "./Hogs"

function HogsList({hogs}){
    const hogItems = hogs.map((hogs) => {
        return (
        <Hogs 
        name={hogs.name} 
        specialty={hogs.specialty} 
        greased={hogs.greased} 
        weight={hogs.weight} 
        highestMedalAchieved = {hogs.highestMedalAchieved}  
        image={hogs.image} 
        />
        
    )})
        
    return (
        <ul class="ui grid container">
            {hogItems}
        </ul>
    )
}

export default HogsList;