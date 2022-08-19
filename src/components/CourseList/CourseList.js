import React, { Component  , Fragment} from 'react'

export default class CourseList extends Component {


  state = {
    isEdit : false,
  }
  renderCourse = () =>{
    return(

      <li>
      <span>{this.props.details.name}</span>
      <button onClick={() => {this.toggleState()} } >Edit Course</button>
      <button onClick={() => {this.props.deleteCourse(this.props.index)}}>Delete Course</button>
      </li>
    )
  }

  toggleState = () =>{

    let {isEdit} = this.state;
    this.setState({
      isEdit : !isEdit
    })

  }
  UpdateForm = (e) => {
    e.preventDefault();
    this.props.editCourse(this.props.index , this.input.value);
    this.toggleState();
  }


  renderUpdateCourse = () =>(

    <form onSubmit={this.UpdateForm}>
      <input type='text' ref={(v) => {this.input = v}} defaultValue={this.props.details.name}/>
      <button>Update Course</button>
    </form>
  )
  render() {
    return (
      <Fragment>
        {this.state.isEdit ? this.renderUpdateCourse() : this.renderCourse()}
      </Fragment>
    )
  }
}
