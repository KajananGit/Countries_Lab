import { useState } from "react";

const Country = ({ country }) => {

    const [didVisit, setVisit] = useState(false);
    // const mapCapitals = country.capital.map(capital => <p key={country.flag}>{capital}</p>)

    const handleClick = () => {
        setVisit(true);
    }

    return ( 
        <>
            <h3>{country.name.common}</h3>
            <p>{country.capital}</p>
            {/* {mapCapitals} */}
            <button onClick={handleClick}>Visited!</button>
            
        </>
     );
}
 
export default Country;