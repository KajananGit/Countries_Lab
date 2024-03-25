import { useEffect, useState } from "react";
import CountriesList from "../components/CountriesList";

const CountriesContainer = () => {
    
    const [countries, setCountires] = useState([]);
    const [countiresVisited, setCountiresVisited] = useState([]);

    const loadData = async () => {
        const response = await fetch("https://restcountries.com/v3.1/all");
        const jsonData = await response.json();
        setCountires(jsonData);
    }
    
    useEffect(() => {
        loadData();
    }, []);
    
    useEffect(() => {
        console.log(countries);
    })

    return ( 
        <>
            <CountriesList countries={countries} />
            <CountriesList countries={countiresVisited} />
        </>
     );
}
 
export default CountriesContainer;