import React from 'react'
import DeleteIcon from '@material-ui/icons/Delete'
import { useDispatch, useSelector } from 'react-redux'
import { adddeletenotes, deleteNote } from './redux/action/action'
import { useState } from 'react'

function Note() {
  const todo = useSelector((store) => store.Addreducer.todo)
  const deletetodomain = useSelector((store) => store.DeleteReducer.deletetodo)
  const dispatch = useDispatch()

  function handleClick(index) {
    let newtodo = todo.filter((e) => {
      if (index == e.id) {
        dispatch(adddeletenotes(e))
      }
      return index != e.id
    })
    dispatch(deleteNote(newtodo))
  }
  
  return (
    <div className="maindiv">
      <div>
        <h1>Todo's to be Completed</h1>
        <div className="firstdiv">
          {todo.map((e, index) => {
            return (
              <div className="note" key={e.id}>
                <h1>{e.title}</h1>
                <p>{e.content}</p>
                <button onClick={() => handleClick(e.id)}>
                  <DeleteIcon />
                </button>
              </div>
            )
          })}
        </div>
      </div>
      <div>
        <h1>Todo's Completed</h1>
        <div className="firstdiv">
          {deletetodomain.map((e, index) => {
            //   console.log(e)
            return (
              <div className="note" key={e.id}>
                <h1>{e.title}</h1>
                <p>{e.content}</p>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Note
