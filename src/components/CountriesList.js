import Country from "./Country";

const CountriesList = ({ countries, setCountries, addCountriesVisited }) => {

    const showCountries = countries.map(country => {
        return <Country country={country} key={country.name.common} addCountriesVisited={addCountriesVisited} />
    });

    

    return ( 
        <>
            {showCountries}
        </>
     );
}
 
export default CountriesList;