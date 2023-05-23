import React from 'react'
import { useSelector } from 'react-redux'


const Favorites = () => {
    let todos = useSelector(state => state);
console.log(todos)
  return (
    <div>
           {todos && todos.map((item) => <li key={item.id}>{item.name}</li>)}
    </div>
  )
}

export default Favorites