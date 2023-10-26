import React, { useContext, useEffect,useRef, useState } from "react";

import noteContext from "../contexts/notes/notesContext.js";
import Addnote from "./Addnote.js";
import Noteitems from "./Noteitems.js";
const Notes = () => {
  const {notes, getnotes,editNote} = useContext(noteContext);
  useEffect(() => {
    getnotes();
    console.log("pp");

  }, []);
  const ref=useRef(null);
  const closeRef=useRef(null);
  const [note,setNote] = useState({id:"",etitle:"",edescription:"",etag:""});
  const updatenote= (note)=>{
       ref.current.click();
       setNote({id:note._id,etitle:note.title,edescription:note.description,etag:note.tag});
  }
  const handleClick = (e)=>{
    
      editNote(note.id,note.etitle,note.edescription,note.etag);
      closeRef.current.click();

  
} 
const onchange =(e)=>{
     
    setNote({...note,[e.target.name]: e.target.value});
    

}
  return (
    <div>
      <Addnote />
<button type="button" className="btn btn-primary d-none" ref={ref} data-bs-toggle="modal" data-bs-target="#exampleModal">
  edit your note
</button>
<div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        
      <form className='my-3'>
  <div className="mb-3">
    <label htmlFor="title" className="form-label">Title</label>
    <input type="text" className="form-control" value={note.etitle} onChange={onchange} id="etitle" name='etitle' minLength={5} required />
  </div>
  <div className="mb-3">
    <label htmlFor="description" className="form-label">Description</label>
    <input type="text" className="form-control"  value={note.edescription} onChange={onchange} name='edescription' id="edescription" minLength={5} required/>
  </div> 
  <div className="mb-3">
    <label htmlFor="tag" className="form-label">tag</label>
    <input type="text" className="form-control" value={note.etag}  onChange={onchange} name='etag' id="etag"/>
  </div> 
</form> 
 </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" ref={closeRef} data-bs-dismiss="modal">Close</button>
        <button type="button" disabled={note.etitle.length<5 || note.edescription.length<5} onClick={handleClick}  className="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
      <div className="row my-3">
        <h2>Your Notes</h2>
        <div className="container mx-1">
          {notes.length === 0 && 'no notes to display'}
          </div>
        {notes.map((note) => {
          return <Noteitems key={note.id} note={note} updatenote={updatenote}/>;
        })}
        
      </div>
    </div>
  );
};
export default Notes;
