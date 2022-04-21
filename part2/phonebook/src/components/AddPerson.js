import Input from "./Input"

const AddPerson = ({ addPerson, newName, handleNameChange, newNumber, handleNumberChange }) => {
  return (
    <div>
      <h2>Add a new person</h2>
      <form onSubmit={addPerson}>
        <Input text="name" value={newName} changeHandler={handleNameChange} />
        <Input text="number" value={newNumber} changeHandler={handleNumberChange} />
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    </div>
  )
}

export default AddPerson