const Part = ({ name, exercises }) => {
    return (
      <p>{name} {exercises}</p>
    )
  }
  
const Content = ({ parts }) => {
  const n_exercises = parts.reduce((sum, part) => {
      console.log(sum)
      return sum + part.exercises
      }, 0)
  return (
    <div>
    {parts.map((part) => 
      <Part key={part.id} name={part.name} exercises={part.exercises} />
    )}
    <p>
      <strong>total of {n_exercises} exercises</strong>
    </p>
    </div> 
  )
}
  
const Header = ({ text }) => <h2>{text}</h2>
  
const Course = ({ course }) => {
  console.log(course)
  const { name, parts } = course
  return (
    <div>
      <Header text={name} />
      <Content parts={parts} />
    </div>
  )
}

export default Course