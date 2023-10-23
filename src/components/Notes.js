import React,{useContext} from 'react'

import noteContext from '../contexts/notes/notesContext.js'
import Noteitems from './Noteitems.js';
const Notes = () =>{
    const context=useContext(noteContext);
    const {notes,setNote}= context;
    return (
        <div className='row my-3'>
         <h2>Your Notes</h2>
         {notes.map((note)=>{
            return <Noteitems note={note}/>
         })
         }
        </div>
    )
}
export default Notes