import WeatherInfo from "./WeatherInfo"

const CountryInfo = ({ country }) => {
  console.log(country)
  return (
    <div>
      <h1>{country.name.common}</h1>
      <div>capital {country.capital[0]}</div>
      <div>area {country.area}</div>
      <h2>languages</h2>
      <ul>
        {Object.values(country.languages)
          .map((language) => <li key={language}>{language}</li>)}
      </ul>
      <img src={country.flags.png}/>
      <WeatherInfo countryName={country.name.common} 
        latitude={country.latlng[0]} longitude={country.latlng[1]} />
    </div>
  )
}

export default CountryInfo