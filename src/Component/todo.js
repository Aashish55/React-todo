import React, { Component } from 'react';
import './todo.css'

class Todo extends Component {

    state={
        lists:[],
        text:''
    };

    handleSubmit = (e) => {
        
        if(this.state.text.length===0){
            return;
        }
        const newList = {
            text:this.state.text,
            id:Date.now()
        }
        this.setState(state => ({
            lists: state.lists.concat(newList),
            text: ''
        }));
        e.preventDefault();
        e.target.querySelector('.input').value=''
        
    }
    handleChange=(e)=>{
        this.setState({text:e.target.value});
        
    }
    render() {
        return (
            <div className='Todo'>
                <div className='header-image'>
                    <h2>To-Do App</h2>
                </div>
                <div className='body'>
                    <form onSubmit={this.handleSubmit}>
                        <input placeholder='Add a task...' 
                        className='input' 
                        onChange={this.handleChange} />
                    </form>
                    
                    <ol className='lists'>
                        {this.state.lists.map(list=>(
                            <li className='list' key={list.id}> {list.text} </li>
                        ))}
                    </ol>
                </div>

            </div>
        );
    }
}

export default Todo;