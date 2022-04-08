import { useState } from 'react' 

const Display = ({ value }) => <div>{value}</div>



const Button = ({ handleClick, text }) => {
  return (
    <button onClick={handleClick}>{text}</button>
  )
}

const App = (props) => {
  const [value, setValue] = useState(0)

  const setToValue = (newvalue) => {
      console.log("value set to " , newvalue)
      setValue(newvalue) 
    }
   
  

  return (
    <div>
      <Display value={value} />
      <Button handleClick={() => setToValue(value + 1)} text="+1" />
      <Button handleClick={() => setToValue(value + 10)} text="+10" />
      <Button handleClick={() => setToValue(0)} text="reset" />
    </div>
  )
}

export default App