const Input = ({ value, changeHandler, text }) => {
  return (
    <div>
      {text}: <input value={value} onChange={changeHandler} />
    </div>
  )
}

export default Input