import React from "react"
function Hogs({name, specialty, greased, weight, highestMedalAchieved = "none", image}){
    return (
        <div id={name} class = "ui eight wide column">
            <img class="pig-img" src={image} alt="pig"/>
            <h3>{name}</h3>
            <h4>Specialty: <em>{specialty}</em></h4>
            <p>Weight: {weight}</p>
        </div>
    )
}

export default Hogs;