import Course from './Course'

const App = () => {
  const courses = [
    {
      id: 1,
      name: 'Half Stack application development',
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'GraphQL',
          exercises: 50,
          id: 4
        }
      ]
    },
    {
      id: 2,
      name: 'Cooking with aunty Margarette',
      parts: [
        {
          name: 'Omellette du Fromagge',
          exercises: 3,
          id: 1
        },
        {
          name: 'Roastbeef with guest Gordon Ramsay',
          exercises: 15,
          id: 2
        },
        {
          name: "Zumbo's dessert challenge",
          exercises: 9,
          id: 3
        }
      ]
    },
    {
      id:3,
      name: 'The joy of painting with Bob Ross',
      parts: [
        {
          name: 'Happy little tree',
          exercises: 4,
          id: 1
        },
        {
          name: 'No accidents',
          exercises: 3,
          id: 2
        },
        {
          name: 'Chill',
          exercises: 70,
          id: 3
        }
      ]
    }
  ]

  return (
    <div>
      <h1>Fun school's semester curriculum</h1>
      {courses.map((course) =>  
         <Course key={course.id} course={course} /> 
      )}
    </div>
  )
}

export default App