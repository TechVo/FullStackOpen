const Hello = (props) => {
  return (
    <div>
      <p>Hello {props.name}, you are {props.age} years old!</p>
    </div>
  )
}

const App = () => {
  const name = "Peter"
  const age  = 35
  return (
    <div>
      <h1>Greetings</h1>
      <Hello name="Greg" age="14"/>
      <Hello name="ERIKA!" age="25"/>
      <Hello name={name} age={age + 10}/>
    </div>
  )
}

export default App