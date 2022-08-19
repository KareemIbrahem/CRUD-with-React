import React from 'react'

export default function CourseForm(props) {
  return (
    <form onSubmit={props.addCourse}>
        
        <input type='text' value={props.Current} onChange={props.updateCourse}/>
        <button type='submit' >Add Course</button>
        
         </form>
  )
}
