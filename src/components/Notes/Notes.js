import React from 'react'
import './notes.css'

export const Notes = ({notes}) => {
    return (
        <div className="notesContainer">
          <div className="date">{new Date().toLocaleDateString()}</div>
          <div className="name">{notes.name}</div>
          <div className="email">{notes.email}</div>
          <div className="note">{notes.note}</div>
        </div>
    )
}

 
