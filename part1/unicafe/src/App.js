import { useState } from 'react'

const Button = ({ handleClick, text }) => 
  <button onClick={handleClick}>{text}</button>

const StatisticsLine = ({ value, text, suffix }) => {
  return(
      <tr>
        <td>
          {text}: 
        </td>
        <td>
          {value}{suffix}
        </td>
      </tr>
  )
}

const Statistics = ({good, bad, neutral}) => {
  const all = good + bad + neutral
  
  if (all <= 0) {
    return(
      <div>
        <h1>statistics</h1>
        <p>No feedback given</p>
      </div>
    )
  }

  return (
    <div>
      <h1>statistics</h1>
      <table>
        <StatisticsLine value={good} text="good" />
        <StatisticsLine value={neutral} text="neutral" />
        <StatisticsLine value={bad} text="bad" />
        <StatisticsLine value={((good - bad) / all).toFixed(1)} text="average" />
        <StatisticsLine value={(good / all * 100).toFixed(1)} text="positive" suffix={" %"} />
      </table>
    </div>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={() => setGood(good + 1)} text="good" />
      <Button handleClick={() => setNeutral(neutral + 1)} text="neutral" />
      <Button handleClick={() => setBad(bad + 1)} text="bad" />

      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App