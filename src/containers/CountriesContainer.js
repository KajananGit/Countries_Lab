import { useEffect, useState } from "react";
import CountriesList from "../components/CountriesList";
import "../styles/CountriesContainerStyles.css";

const CountriesContainer = () => {
    
    const [countries, setCountires] = useState([]);
    const [countriesVisited, setCountiresVisited] = useState([]);
    

    const loadData = async () => {
        const response = await fetch("https://restcountries.com/v3.1/all");
        const jsonData = await response.json();
        setCountires(jsonData);
        //setCountiresVisited(jsonData);
    }
    
    useEffect(() => {
        loadData();
    }, []);
    
    useEffect(() => {
        console.log(countries);
    })

    const addCountriesVisited = (country) => {
        setCountiresVisited([...countriesVisited, country]);
    }


    return ( 
        <>  
            <div className="Countries">
                <h3>Countires To Visit: </h3>
                <div><CountriesList countries={countries} setCountries={setCountires} addCountriesVisited={addCountriesVisited}/></div>
                <h3>Countries Visited: </h3>
                <div><CountriesList countries={countriesVisited} /></div>
            </div>
        </>
     );
}
 
export default CountriesContainer;