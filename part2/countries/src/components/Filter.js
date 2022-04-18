import CountryInfo from "./CountryInfo"
import InfoButton from "./InfoButton"

const Filter = ({ data, searchValue }) => {
  const maximumCountries = 10

  const filterResults = data
    .filter(country => country.name.common.toLowerCase().includes(searchValue.toLowerCase()))
  
  const numberOfCountries = filterResults.length

  console.log(`${numberOfCountries} countries to show`)

  if (numberOfCountries <= 0) return (
    <div>No countries match the search pattern!</div>
  )

  if (numberOfCountries === 1) return (
    <CountryInfo country={filterResults[0]} />
  )

  if (numberOfCountries <= maximumCountries) return (
    <div>
        {filterResults.map(country => <div key={country.name.common}>
          {country.name.common}
          <InfoButton country={country} />
          </div>)}
    </div>
  )

  return (
    <div>Too many countries to show!</div>
  )
}

export default Filter