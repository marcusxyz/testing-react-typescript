import React, { useState } from 'react';
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
  const [edit, setEdit] = useState<boolean>(false);
  const [editTask, setEditTask] = useState<string>(todo.desciption);

  const handleDone = (id: number) => {
    setLists(
      lists.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };

  const handleDelete = (id: number) => {
    setLists(lists.filter((todo) => todo.id !== id));
  };

  const handleEdit = (e: React.FormEvent, id: number) => {
    // Prevent browser refresh
    e.preventDefault();

    setLists(
      lists.map((todo) =>
        todo.id === id ? { ...todo, desciption: editTask } : todo
      )
    );
    // Once done turn off edit mode.
    setEdit(false);
  };

  return (
    <form className='task__single' onSubmit={(e) => handleEdit(e, todo.id)}>
      {/* If (?) edit is on show input else(:) show task desciption */}
      {edit ? (
        <input
          value={editTask}
          onChange={(e) => setEditTask(e.target.value)}
          className='task__single--update'
        />
      ) : todo.isDone ? (
        //If todo is done(?) show striked text. Else (:) Show text */
        <s className='task__single--description'>{todo.desciption}</s>
      ) : (
        <span className='task__single--description'>{todo.desciption}</span>
      )}
      <div className='container'>
        <span
          className='icon'
          onClick={() => {
            if (!edit && !todo.isDone) {
              setEdit(!edit);
            }
          }}
        >
          <MdEdit />
        </span>
        <span className='icon' onClick={() => handleDone(todo.id)}>
          <MdCheck />
        </span>
        <span className='icon' onClick={() => handleDelete(todo.id)}>
          <MdDelete />
        </span>
      </div>
    </form>
  );
};

export default TaskCard;
