import React, { Component } from 'react'

import CourseForm from './components/CourseForm/CourseForm';
import CourseList from './components/CourseList/CourseList';

export default class App extends Component {
    state = {
      Courses : [
        {name:'HTML'},
        {name:'css'},
        {name:'JavaScript'},
      ],
      Current : ''
    }

  
     updateCourse = (e) =>{
      
         this.setState({
          Current: e.target.value
         }) 
    }
    addCourse = (e) =>{
      e.preventDefault();
      let Current = this.state.Current;
      let courses = this.state.Courses;
      courses.push({name: Current})
      this.setState({
        courses , 
        Current:''})
  }

  deleteCourse = (index) => {
    let courses = this.state.Courses;
    courses.splice(index , 1);
    this.setState({
      courses
    })
  }

  editCourse = (index,value) => {
    let courses = this.state.Courses;
    let course = courses[index];
    course['name'] = value;
    this.setState({
      courses
    })
  }
    
   
  render() {
    const {Courses} = this.state;
    const courseMap = Courses.map( (course , index) => <CourseList details={course} key={index} index={index} update={this.handleUpdate} deleteCourse={this.deleteCourse} editCourse={this.editCourse}/>)
    return (
      <section className='App'>
        <h2>Crud App</h2>
        <CourseForm Current={this.state.Current} updateCourse={this.updateCourse} addCourse = {this.addCourse}/>
        <ul>{courseMap}</ul>
      </section>
    )
  }
}

