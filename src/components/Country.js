import { useState } from "react";

const Country = ({ country, addCountriesVisited }) => {

    

    const mapCapitals = () => {
        if(country.capital){
            return country.capital.map((capital, id) => <p key={id}>{capital}</p>)  
        }
    }


    const handleClick = () => {
        addCountriesVisited(country);
    }

    return ( 
        <>
            <h3>{country.name.common}</h3>
            {mapCapitals()}
            <button onClick={handleClick}>Visited!</button>
            
        </>
     );
}
 
export default Country;