import React, { Component, Fragment } from 'react';

class CourseList extends Component {
    state ={
        isEdit: false
    }
    //render course list , arrow function 
    renderCourse =() =>{ 
        return (
                <li>
                    <span>
                        {this.props.details.name}
                    </span>
                    <button onClick={()=> {this.toogleState()}}>Edit Course</button>
                    <button onClick={()=>{this.props.deleteCourse(this.props.index)}}>Delete Course</button>
                </li>
        );
    }

    //toggle State
    toogleState = ()=>{
        let {isEdit} = this.state;
        this.setState({
            isEdit: !isEdit
        })
    }
    editCourseItrm=(e)=>{
        e.preventDefault();
        this.props.editCourse(this.props.index, this.input.value);
        this.toogleState();
    }
    renderUpdateForm =() =>{
        return(
            <form onSubmit={this.editCourseItrm}> 
                <input type="text" ref={(newValue)=>{this.input = newValue}} defaultValue={this.props.details.name}/>
                <button type="submit">Update Course</button>
            </form>
        )
    }

    render(){
        let {isEdit} = this.state;
        return (
            <Fragment>
                {isEdit ? this.renderUpdateForm(): this.renderCourse()}
            </Fragment>
        )
    }
}
 
export default CourseList;