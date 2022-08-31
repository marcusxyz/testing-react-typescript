import React, { useRef } from 'react';
import './styles.css';

// Type 'rafce' to create this starter template

interface TodoProps {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>; // Hover over setTodo in App.js to copy its type.
  handleAdd: (e: React.FormEvent) => void; // A function that returns void
}

const InputField: React.FC<TodoProps> = ({ todo, setTodo, handleAdd }) => {
  // UseRef is basicly getElementsByClassName();
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <form
      className='input'
      onSubmit={(e) => {
        handleAdd(e);
        inputRef.current?.blur();
      }}
    >
      {/* 'input__box is a BEM convention, search it for more info' */}
      <input
        ref={inputRef}
        type='input'
        placeholder='Enter a task'
        className='input__box'
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button className='input__submit' type='submit'>
        Submit task
      </button>
    </form>
  );
};

export default InputField;
