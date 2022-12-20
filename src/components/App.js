import React, { useReducer } from 'react'
import { todoReducer } from '../reducers/todo';
import '../styles/App.css';
import { AddTodo } from './AddTodo';
import { Todo } from './Todo';
const App = () => {
  
  const [state, dispatch] = useReducer(todoReducer, [])
  
 
  return (
    <div id="main">
      <AddTodo dispatch={dispatch}/>
     {/* Render list of Todo Components here */}
     {state.map((item, index)=>{
      return<Todo data={item} key={item.id} index={index} dispatch={dispatch}/>
     })}
    </div>
  )
}


export default App;