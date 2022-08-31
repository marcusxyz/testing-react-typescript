import React from 'react';
import { Todo } from './model';
import { MdCheck, MdDelete, MdEdit } from 'react-icons/md';

import './styles.css';

// Testing type just to get the hang of it.
type TaskProps = {
  todo: Todo;
  lists: Todo[];
  setLists: React.Dispatch<React.SetStateAction<Todo[]>>;
};

const TaskCard: React.FC<TaskProps> = ({ todo, lists, setLists }) => {
  const handleDone = (id: number) => {
    setLists(
      lists.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };

  return (
    <form className='task__single'>
      {/* // If todo is done(?) show striked text. Else (:) Show text */}
      {todo.isDone ? (
        <s className='task__single--description'>{todo.desciption}</s>
      ) : (
        <span className='task__single--description'>{todo.desciption}</span>
      )}
      <div className='container'>
        <span className='icon'>
          <MdEdit />
        </span>
        <span className='icon' onClick={() => handleDone(todo.id)}>
          <MdCheck />
        </span>
        <span className='icon'>
          <MdDelete />
        </span>
      </div>
    </form>
  );
};

export default TaskCard;
