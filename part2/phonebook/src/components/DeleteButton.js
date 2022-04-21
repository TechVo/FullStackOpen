const DeleteButton = ({ name, deletePerson }) => {
  const message = `Delete ${name}?`
  
  const handleDeletePerson = () => {
    if (window.confirm(message)) {
      deletePerson()
    }
  }
  
  return (
    <button onClick={handleDeletePerson}>delete</button>
  )
}

export default DeleteButton