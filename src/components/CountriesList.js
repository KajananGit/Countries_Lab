import Country from "./Country";

const CountriesList = ({ countries }) => {

    const showCountries = countries.map(country => {
        return <Country country={country} key={country.name.common}/>
    });

    return ( 
        <>
            {showCountries}
        </>
     );
}
 
export default CountriesList;