import { useState, useEffect } from "react";
import axios from 'axios'
import Filter from "./components/Filter";

const App = () => {
  const [searchValue, setSearchValue] = useState("")
  const [data, setData] = useState([])
  

  const resolveSearch = (event) => {
    console.log(event.target.value)
    setSearchValue(event.target.value)
  }

  const retrieveData = () => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then(response => {
        const countriesFound = response.data.length
        console.log(`${countriesFound} countries found`)
        console.log(response.data)
        setData(response.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }
  
  useEffect(retrieveData, [])

  console.log("rendering App")

  return (
    <div className="App">
      Find country
      <form>
        <input value={searchValue} onChange={resolveSearch}/>
      </form>
      <Filter data={data} searchValue={searchValue} />
    </div>
  );
}

export default App;
