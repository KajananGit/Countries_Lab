import Country from "./Country";

const CountriesList = ({ countries, addCountriesVisited, visitedStatus }) => {

    const showCountries = countries.map(country => {
        return <Country country={country} key={country.name.common} addCountriesVisited={addCountriesVisited} visitedStatus={visitedStatus} />
    });

    

    return ( 
        <>
            {showCountries}
        </>
     );
}
 
export default CountriesList;