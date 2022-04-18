import { useState } from 'react'
import CountryInfo from "./CountryInfo"

const InfoButton = ({ country }) => {
  const [showInfo, setShowInfo] = useState(false)
  const text = showInfo ? "collapse" : "show"

  return (
    <>
      <button onClick={() => setShowInfo(!showInfo)}>{text}</button>
      {showInfo && <CountryInfo country={country} />}
    </>
  )
}

export default InfoButton