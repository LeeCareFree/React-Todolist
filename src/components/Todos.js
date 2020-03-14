import React from 'react';
import TodoItem from './TodoItem'

const Todos = ({ todos, toggleComplete, deleteTodo }) => (
  todos.map(todo => (
    <TodoItem todo={todo} key={todo.id} toggleComplete={toggleComplete} deleteTodo={deleteTodo}/>
  )));

export default Todos;