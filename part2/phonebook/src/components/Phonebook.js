import Filter from "./Filter"
import DeleteButton from "./DeleteButton"

const Phonebook = ({ filter, handleFilterChange, personsToShow, deletePerson }) => {
  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        <Filter filter={filter} handleFilterChange={handleFilterChange} />
      </form>
      <br/>
      {personsToShow.map((person) => 
        <div key={person.name}>
          {person.name} {person.number}
          <DeleteButton name={person.name} deletePerson={deletePerson(person.id)} />
        </div>)}
    </div>
  )
}

export default Phonebook