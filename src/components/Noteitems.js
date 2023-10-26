import React, { useContext } from 'react'
import NotesContext from '../contexts/notes/notesContext.js';
const Noteitems = (props) => {
     const context = useContext(NotesContext);
      const {delnote} = context;
    const {note,updatenote}=props;
  return (
    <div className='col-md-3'>
     <div className="card my-3">
  <div className="card-body">
    <div className='d-flex align-items-center'>
    <h5 className="card-title">{note.title}</h5><i onClick={()=>{
        delnote(note._id);
    }}  className="fa-sharp fa-solid fa-trash mx-2"></i>
    <i className="fa-solid fa-pen-to-square" onClick={()=> {updatenote(note);}}></i>
    </div>
    <p className="card-text">{note.description}</p>

  </div>
</div>
    </div>
  )
}

export default Noteitems
