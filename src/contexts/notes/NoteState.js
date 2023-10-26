import { useState } from "react";
import NotesContext from "./notesContext.js";
const NoteState = (props)=>{
    // const s1 = {
    //     "name": "sha",
    //     "class": "8b"
    // }
    // const [state,setUpdate] =useState(s1);
    // const update= ()=>{
    //     setTimeout(()=>{
    //         setUpdate({
    //             "name": "larry",
    //             "class": "10b"
    //         })
    //     },1000);

  
   const n1= []
      
     const [notes,setNote]= useState(n1)
     const host= "http://localhost:5000";
    //  const id="653608e86d8faa6b3b0fdf41";
     //get all notes 
     const getnotes= async ()=>{

     const response = await fetch(`${host}/api/notes/fetchallnotes`,{
         method: "GET", // *GET, POST, PUT, DELETE, etc.
         headers: {
           "Content-Type": "application/json",
           "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjUzNjA3ZDA2ZDhmYWE2YjNiMGZkZjM4In0sImlhdCI6MTY5ODAzOTk5N30.pfJKi-kPl5lBmxd9i9IaXEUinc0hmQNWesraTLvkfb0"
           // 'Content-Type': 'application/x-www-form-urlencoded',
         },
         body: JSON.stringify(), // body data type must match "Content-Type" header// hata diya kyoki body dene ki jarurat nahi hai
       });
          const json= await response.json();
           setNote(json)
 
        }

     // adding a note
       const addnote= async (title,description,tag)=>{
      
    const response = await fetch(`${host}/api/notes/addnote`,{
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        headers: {
          "Content-Type": "application/json",
          "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjUzNjA3ZDA2ZDhmYWE2YjNiMGZkZjM4In0sImlhdCI6MTY5ODAzOTk5N30.pfJKi-kPl5lBmxd9i9IaXEUinc0hmQNWesraTLvkfb0"
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify({title,description,tag }), // body data type must match "Content-Type" header
      });
         const note= await response.json();
    
          setNote(notes.concat(note)); 
       }
       // deleting a note
       const delnote= async(id)=>{

        const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
          method: "DELETE", // *GET, POST, PUT, DELETE, etc.
          headers: {
            "Content-Type": "application/json",
            "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjUzNjA3ZDA2ZDhmYWE2YjNiMGZkZjM4In0sImlhdCI6MTY5ODAzOTk5N30.pfJKi-kPl5lBmxd9i9IaXEUinc0hmQNWesraTLvkfb0"
            // 'Content-Type': 'application/x-www-form-urlencoded',
          },
        });
           const json= await response.json();
      
        const newnotes = notes.filter((note)=>{
               return note._id!==id
          })
          setNote(newnotes);

       }

       // edit a note
       const editNote = async (id,title,description,tag)=>{
         try{
        const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
            method: "PUT", // *GET, POST, PUT, DELETE, etc.
            headers: {
              "Content-Type": "application/json",
              "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjUzNjA3ZDA2ZDhmYWE2YjNiMGZkZjM4In0sImlhdCI6MTY5ODAzOTk5N30.pfJKi-kPl5lBmxd9i9IaXEUinc0hmQNWesraTLvkfb0"
              // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: JSON.stringify({id,title,description,tag}), // body data type must match "Content-Type" header
          });
             const jsona= await response.json();
            let  newnotes=JSON.parse(JSON.stringify(notes));
        for(let i=0;i<newnotes.length;i++){
               if(id === newnotes[i]._id)
               {
                     newnotes[i].title=title;
                     newnotes[i].description=description;
                     newnotes[i].tag=tag;
                     break;
               }
              
        }
        setNote(newnotes);
      
      }
        catch(error){
          console.log(error.message);
        }


       }

    return (
        <NotesContext.Provider value={{notes,addnote,delnote,getnotes,editNote}} >
            {props.children }
        </NotesContext.Provider>
    )
}
export default NoteState