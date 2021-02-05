  
import React, { useEffect } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';

const Todos = () => {
  const dispatch = useDispatch()

 const arrayTodo = useSelector((state:any)=> state.todos.arrayTodos)

  useEffect(()=>{
    axios.get('https://jsonplaceholder.typicode.com/todos')
      .then(response => dispatch({type:'LIST_TODOS', payload: response.data}))
  },[dispatch])

  return(
    <div>
      <h2>Todo list</h2>
      {arrayTodo.map((item:any)=>(
        <li key={item.id}>{item.title} {(item.id)}</li>
      ))}
     
    </div>
  )
}

export default Todos;