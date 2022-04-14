import Filter from "./Filter"

const Phonebook = ({ filter, handleFilterChange, personsToShow}) => {
  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        <Filter filter={filter} handleFilterChange={handleFilterChange} />
      </form>
      <br/>
      {personsToShow.map((person) => <div key={person.name}>{person.name} {person.number}</div>)}
    </div>
  )
}

export default Phonebook