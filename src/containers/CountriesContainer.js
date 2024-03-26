import { useEffect, useState } from "react";
import CountriesList from "../components/CountriesList";
import "../styles/CountriesContainerStyles.css";

const CountriesContainer = () => {
    
    const [countries, setCountries] = useState([]);
    const [countriesVisited, setCountriesVisited] = useState([]);
    const [searchValue, setSearchValue] = useState("");
    

    const loadData = async () => {
        const response = await fetch("https://restcountries.com/v3.1/all");
        const jsonData = await response.json();
        setCountries(jsonData);
    }
    
    useEffect(() => {
        loadData();
    }, []);
    
    useEffect(() => {
        console.log(countries);
    }, [countries])

    useEffect(() => {
        const updatedCountriesList = [];
        countries.forEach(country => {
            if(!countriesVisited.includes(country)){
                updatedCountriesList.push(country);
            }
            setCountries(updatedCountriesList);
        })
    }, [countriesVisited])




    const addCountriesVisited = (country) => {
        setCountriesVisited([...countriesVisited, country]);
    }

    
    const filteredCountries = countries.filter(country => {
            return country.name.common.toLowerCase().includes(searchValue.toLocaleLowerCase());
    })



    return ( 
        <>  
            <form>
                <input type="text"  
                       value={searchValue} onChange={event => setSearchValue(event.target.value)} 
                       placeholder="Search country..."/>
            </form>
            
            <div className="countries">
                
                <div>
                    <h2>Countries To Visit: </h2>
                    <CountriesList countries={filteredCountries} setCountries={setCountries} addCountriesVisited={addCountriesVisited} visitedStatus={false}/>
                </div>
            
                <div>
                    <h2>Countries Visited: </h2>
                    <CountriesList countries={countriesVisited} visitedStatus={true}/>
                </div>
            </div>
        </>
     );
}
 
export default CountriesContainer;