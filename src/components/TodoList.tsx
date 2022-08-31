import React from 'react';
import { Todo } from './model';
import './styles.css';

interface ListProps {
  lists: Todo[];
  setLists: React.Dispatch<React.SetStateAction<Todo[]>>; // Hover over setLists in App.js to copy its type.
}

const TodoList: React.FC<ListProps> = ({ lists, setLists }) => {
  return <div className='todo-list'>All your tasks shows up here</div>;
};

export default TodoList;
