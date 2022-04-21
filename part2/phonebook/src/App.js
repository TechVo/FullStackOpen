import { useState, useEffect } from 'react'
import Phonebook from './components/Phonebook'
import AddPerson from './components/AddPerson'
import personService from './services/persons'

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')

  const personsToShow = persons.filter((person) => {
    return person.name.toLowerCase().indexOf(filter.toLowerCase()) != -1
  })

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

  const updatePerson = (personToUpdate) => {
    personService 
      .update(personToUpdate.id, 
        { 
          name: personToUpdate.name, 
          number: newNumber 
        }
      )
      .then(updatedPerson => {
        console.log(updatedPerson)
        setPersons(persons.map(person => person.id === updatedPerson.id ? updatedPerson : person))
      })
      .catch(error =>{
        console.error("Couldn't add person to server!", error)
      })
  }

  const addPerson = (event) => {
    event.preventDefault()
    console.log("button clicked", event.target)

    const sameName = persons.filter((person) => person.name === newName)

    if (sameName.length > 0) {
      const message =  `${sameName[0].name} is already added to phonebook, replace the old number with a new one?`
      if(window.confirm(message)) {
        updatePerson(sameName[0])
      }
      return
    }

    const newPerson = { name: newName, number: newNumber }
    personService
      .create(newPerson)
      .then(person => {
        console.log(person)
        setPersons(persons.concat(person))
      })
      .catch(error => {
        console.log("Couldn't add person to server!")
        console.error(error)
      })
  }

  const deletePerson = id => () => {
    personService
      .remove(id)
      .then(() => {
        setPersons(persons.filter(person => person.id != id))
      })
      .catch(error => {
        console.error(error)
      })
  }

  const getPersons = () => {
    console.log('effect hook taking a place...')
    personService
      .getAll()
      .then(persons => {
        console.log('promise fullfiled')
        console.log(persons)
        setPersons(persons)
      })
      .catch(error => {
        console.log("Couldn't retrieve data from server!")
        console.error(error)
      })
  }

  useEffect(getPersons, [])

  console.log(`${persons.length} persons retrieved`)

  return (
    <div>
      <AddPerson addPerson={addPerson} 
        newName={newName} handleNameChange={handleNameChange} 
        newNumber={newNumber} handleNumberChange={handleNumberChange} />
      <Phonebook filter={filter} handleFilterChange={handleFilterChange} 
      personsToShow={personsToShow} deletePerson={deletePerson}/>
    </div>

  )
}

export default App