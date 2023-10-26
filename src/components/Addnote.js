import React, { useContext, useState } from 'react'
import noteContext from '../contexts/notes/notesContext.js';

const Addnote = () => {
    const context = useContext(noteContext);
    const {addnote,getnotes} = context;
    const [note,setNote] =useState({title:"",description:"",tag: "default"})
    const handleClick =(e)=>{
        e.preventDefault();
        addnote(note.title,note.description,note.tag);
        setNote({title:"",description:"",tag: ""});
        getnotes()
    }
    const onChange =(e)=>{
        setNote({...note,[e.target.name]: e.target.value});
    }
  return (
    <div>
 <div className='container'>
      <h2>Add a note</h2>
      <form className='my-3'>
  <div className="mb-3">
    <label htmlFor="title" className="form-label">Title</label>
    <input type="text" className="form-control"  value={note.title} onChange={onChange} id="title" name='title' minLength={5} required/>
  </div>
  <div className="mb-3">
    <label htmlFor="description" className="form-label">Description</label>
    <input type="text" className="form-control" value={note.description}  onChange={onChange} name='description' id="description" minLength={5} required/>
  </div> 
  <div className="mb-3">
    <label htmlFor="tag" className="form-label">tag</label>
    <input type="text" className="form-control"  value={note.tag} onChange={onChange} name='tag' id="tag"  />
  </div> 
  <button type="submit" disabled={note.title<5 || note.description<5} onClick={handleClick} className="btn btn-primary">Add Note</button>
</form>
      </div>
    </div>
  )
}

export default Addnote
