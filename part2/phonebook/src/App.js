import { useState, useEffect } from 'react'
import axios from 'axios'

import Phonebook from './Phonebook'
import AddPerson from './AddPerson'


const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')

  const personsToShow = persons.filter((person) => {
    return person.name.toLowerCase().indexOf(filter.toLowerCase()) != -1
  })

  const addPerson = (event) => {
    event.preventDefault()
    console.log("button clicked", event.target)
    if (persons.filter((person) => person.name === newName).length > 0) {
      window.alert(`${newName} person already exists in the phonebook!`)
      return
    }
    
    setPersons(persons.concat({ name: newName, number: newNumber }))
  }

  const handleNameChange = (event) => {
    console.log(`name: ${event.target.value}`)
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    console.log(`number: ${event.target.value}`)
    setNewNumber(event.target.value)
  }

  const handleFilterChange = (event) => {
    console.log(`filter: ${event.target.value}`)
    setFilter(event.target.value)
  }

  const hook = () => {
    console.log('effect hook taking a place...')
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        console.log('promise fullfiled')
        console.log(response.data)
        setPersons(response.data)
      })
  }

  useEffect(hook, [])

  console.log(`${persons.length} persons retrieved`)

  return (
    <div>
      <AddPerson addPerson={addPerson} 
        newName={newName} handleNameChange={handleNameChange} 
        newNumber={newNumber} handleNumberChange={handleNumberChange} />
      <Phonebook filter={filter} handleFilterChange={handleFilterChange} 
      personsToShow={personsToShow} />
    </div>

  )
}

export default App