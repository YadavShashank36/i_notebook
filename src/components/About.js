import React,{ useContext, useEffect } from 'react'
import noteContext from '../contexts/notes/notesContext.js'
const About = () => {
  let a = useContext(noteContext)
  useEffect(()=>{
    a.update()
  },[])
  return (
    <div>
      <h1>This is About {a.state.name} is in class {a.state.class}</h1>
     
    </div>
  )
}

export default About
