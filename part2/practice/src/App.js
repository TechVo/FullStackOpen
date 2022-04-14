/* eslint-disable no-restricted-globals */
import { useState } from 'react'
import Note from './components/Note'

const App = (props) => {
  const [notes, setNotes] = useState(props.notes)
  const [newNote, setNewNote] = useState('...a new note...')
  const [showAll, setShowAll] = useState(true)

  const addNote = (event) => {
    event.preventDefault()
    console.log('button clicked', event.target)
  }

  const handleNoteChange = (event) => {
    console.log(event.target.value)
    setNewNote(event.target.value)
    console.log(newNote)
  }

  const notesToShow = showAll 
  ? notes 
  : notes.filter(note => note.important)
  

  return (
    <div>
      <h1>Notes</h1>
      <button onClick={() => setShowAll(!showAll)}>
        show 
        {showAll ? 'important' : 'all'} 
      </button>
      <ul>
        {notesToShow.map(note => 
          <Note key={note.id} note={note} />
        )}
      </ul>     
      <form onSubmit={addNote}>
        <input value={newNote} 
                onChange={handleNoteChange} />
        <button type="submit">save</button>
      </form>  
    </div>
  )
}

export default App 