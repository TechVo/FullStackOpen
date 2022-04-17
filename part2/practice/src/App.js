/* eslint-disable no-restricted-globals */
import React, { useState, useEffect } from 'react'
import Note from './components/Note'
import axios from 'axios'



const App = () => {
  const [notes, setNotes] = useState([])
  const [newNote, setNewNote] = useState('...a new note...')
  const [showAll, setShowAll] = useState(true)

  const hook = () => {
    console.log('effect')
    axios
    .get('http://localhost:3001/notes')
    .then(response => {
      setNotes(response.data)
      console.log(notes)
    })
  }

  useEffect(hook, [])

  console.log('render', notes.length, 'notes')

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
        show&nbsp; 
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