import React from "react"

const AddTodo = ({ dispatch }) => {

    const handleSubmit = (e) =>{
        console.log(e.target.title.value); 
        e.preventDefault()
        let todoData ={id: Date.now(),title: e.target.title.value}
        dispatch({type:"ADD_TODO", payload: todoData})
        e.target.reset()
        
    }

    return (
        <div className="form-wrapper">
            <form onSubmit={handleSubmit} id="todo-form">
                <input name="title" id="todo-input"></input>
                <button type="submit">Add</button>
            </form>
            </div>
    )
}

export { AddTodo }