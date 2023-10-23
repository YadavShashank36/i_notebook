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


   const n1=  [
        {
          "_id": "653608dd6d8faa6b3b0fdf3f",
          "user": "653607d06d8faa6b3b0fdf38",
          "title": "this is check3",
          "description": "me checking all given notes",
          "tag": "gnkkd",
          "date": "2023-10-23T05:47:09.406Z",
          "__v": 0
        },
        {
          "_id": "653608e86d8faa6b3b0fdf41",
          "user": "653607d06d8faa6b3b0fdf38",
          "title": "this is check3",
          "description": "me checking all given notes",
          "tag": "gnkkd",
          "date": "2023-10-23T05:47:20.952Z",
          "__v": 0
        }, {
            "_id": "653608dd6d8faa6b3b0fdf3f",
            "user": "653607d06d8faa6b3b0fdf38",
            "title": "this is check3",
            "description": "me checking all given notes",
            "tag": "gnkkd",
            "date": "2023-10-23T05:47:09.406Z",
            "__v": 0
          },
          {
            "_id": "653608e86d8faa6b3b0fdf41",
            "user": "653607d06d8faa6b3b0fdf38",
            "title": "this is check3",
            "description": "me checking all given notes",
            "tag": "gnkkd",
            "date": "2023-10-23T05:47:20.952Z",
            "__v": 0
          }, {
            "_id": "653608dd6d8faa6b3b0fdf3f",
            "user": "653607d06d8faa6b3b0fdf38",
            "title": "this is check3",
            "description": "me checking all given notes",
            "tag": "gnkkd",
            "date": "2023-10-23T05:47:09.406Z",
            "__v": 0
          },
          {
            "_id": "653608e86d8faa6b3b0fdf41",
            "user": "653607d06d8faa6b3b0fdf38",
            "title": "this is check3",
            "description": "me checking all given notes",
            "tag": "gnkkd",
            "date": "2023-10-23T05:47:20.952Z",
            "__v": 0
          }
      ]
     const [notes,setNote]= useState(n1)
    return (
        <NotesContext.Provider value={{notes,setNote}} >
            {props.children }
        </NotesContext.Provider>
    )
}
export default NoteState