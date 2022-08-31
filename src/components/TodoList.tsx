import React from 'react';
import { Todo } from './model';
import './styles.css';
import TaskCard from './TaskCard';

interface ListProps {
  lists: Todo[];
  setLists: React.Dispatch<React.SetStateAction<Todo[]>>; // Hover over setLists in App.js to copy its type.
}

const TodoList: React.FC<ListProps> = ({ lists, setLists }) => {
  return (
    <div className='todo-list'>
      {lists.map((todo) => (
        <TaskCard todo={todo} key={todo.id} lists={lists} setLists={setLists} />
      ))}
    </div>
  );
};

export default TodoList;
