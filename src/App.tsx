import React, { useState } from 'react';
import './App.css';
import InputField from './components/InputField';
import TodoList from './components/TodoList';
import { Todo } from './components/model';

// This is a FC – i.e. a Functional Component
const App: React.FC = () => {
  const [todo, setTodo] = useState<string>('');
  const [lists, setLists] = useState<Todo[]>([]);

  const handleAdd = (e: React.FormEvent) => {
    // Below prevents browser from refreshing.
    e.preventDefault();

    if (todo) {
      // The spread operator '...' allows us to quickly copy all or part on an existing array or object into another array or object.
      setLists([...lists, { id: Date.now(), desciption: todo, isDone: false }]);
      // After submit empty the writen todo in the imput field.
      setTodo('');
    }
  };

  console.log(lists);

  return (
    <div className='App'>
      <header className='App-header'>
        <h1>I'd like to try React with TypeScript</h1>
        <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
        <TodoList lists={lists} setLists={setLists} />
        {/* {todos.map((todo) => (
          <li>
            {todo.id} - {todo.desciption}
          </li>
        ))} */}
      </header>
    </div>
  );
};

export default App;
