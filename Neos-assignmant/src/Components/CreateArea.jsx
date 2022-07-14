import React, { useState } from 'react'
import AddIcon from '@material-ui/icons/Add'
import Fab from '@material-ui/core/Fab'
import {useDispatch} from "react-redux"
import { addNote } from './redux/action/action'


function CreateArea() {
  const dispatch=useDispatch()
  const [note, setNote] = useState({
    title: '',
    content: '',
  
  })
  function handleChange(event) {
    const { name, value } = event.target
    setNote((note) => {
      return {
        ...note,
        [name]: value,
        id:Math.floor(Math.random()*1000)
      }
    })
  }
  const submitNote=()=>{
    dispatch(addNote(note))
  }
  return (
    <div>
      <form className="create-note">
        <input
          name="title"
          onChange={handleChange}
          value={note.title}
          placeholder="Title"
        />

        <textarea
          name="content"
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
        />

        <Fab onClick={submitNote}>
          <AddIcon />
        </Fab>
      </form>
    </div>
  )
}

export default CreateArea
