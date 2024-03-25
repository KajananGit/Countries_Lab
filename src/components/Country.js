import { useState } from "react";
import "../styles/CountryStyles.css"

const Country = ({ country, addCountriesVisited, visitedStatus }) => {

    

    const mapCapitals = () => {
        if(country.capital){
            return country.capital.map((capital, id) => <p key={id}> Captial City: {capital}</p>)  
        }
    }


    const handleClick = () => {
        addCountriesVisited(country);
    }

    return ( 
        <>
            <h3>{country.name.common} {country.flag}</h3>
            <p>Region: {country.subregion}</p>
            {mapCapitals()}
            <p>Population: {country.population}</p>
            {!visitedStatus ?(<button onClick={handleClick}>Visited</button>) : (<></>) }
            
        </>
     );
}
 
export default Country;