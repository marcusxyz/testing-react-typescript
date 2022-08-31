import React from 'react';
import { Todo } from './model';
import { MdCheck, MdDelete, MdEdit } from 'react-icons/md';

// Testing type just to get the hang of it.
type TaskProps = {
  todo: Todo;
  lists: Todo[];
  setLists: React.Dispatch<React.SetStateAction<Todo[]>>;
};

const TaskCard: React.FC<TaskProps> = ({ todo, lists, setLists }) => {
  return (
    <form className='task__single'>
      <span className='task__single--desciption'>{todo.desciption}</span>
      <div className=''>
        <span className='icon'>
          <MdEdit />
        </span>
        <span className='icon'>
          <MdDelete />
        </span>
        <span className='icon'>
          <MdCheck />
        </span>
      </div>
    </form>
  );
};

export default TaskCard;
