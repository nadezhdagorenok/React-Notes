import React, { useState } from 'react';
import {Form} from '../Form/Form';
import {Notes} from '../Notes/Notes'

export const FormNotes = () => {
  const [notes, setNotes] = useState([]);
 
  const addNote = (addingNotes) => {
    if(!addingNotes.length) {
      return
    }
    setNotes(prev => ([...prev, ...addingNotes])) 
    console.log(notes)
  }
  return (
    <>
      <Form 
        addNote={addNote}
      />
      {
        notes && notes.length ? notes.map((item, index) => (
          <Notes notes={item} key={index}/>
        )
        ) : ''
      }
    </>
  );
}
