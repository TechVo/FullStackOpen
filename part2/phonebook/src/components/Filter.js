const Filter = ({ filter, handleFilterChange }) => {
  return (
    <div>
      filter names containing: <input value={filter} onChange={handleFilterChange} />
    </div>
  )
}

export default Filter