import React, {Component} from 'react';
import './todo.css'

class Todo extends Component{
    render(){
        return (
            <div className='Todo'>
                <div className='header-image'>
                    <h2>To-Do App</h2>
                </div>
                <div className='body'>
                    <input placeholder='Add a task...' className='input' />
                </div>

            </div>
        );
    }
}

export default Todo;