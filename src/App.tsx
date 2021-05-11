import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import TextField from './TextField';
import Button from './Button';
import ToDoList from './TodoListing';

interface Props {
  version?: number
}

type IData = {
  text: string,
  id: number
}

const App: React.FC<Props> = () => {
  const [text, setText] = useState<string>('');
  const [todo, setTodo] = useState<Array<IData>>([]);
  return (
    <div className="App">
      <div className="box1">
        <TextField Txtvalue={text} handleChange={e => {
          setText(e.target.value.toUpperCase())
        }} />
        <Button addToDo={e => {
          let todoList: Array<IData> = [...todo]
          if (text != '') {
            let objData: IData = { text: text, id: new Date().getTime() }
            todoList.push(objData)
            setTodo(todoList);
            setText('');
          }
        }} />
      </div>
      <ToDoList list={todo} />
    </div>
  );
}

export default App;
