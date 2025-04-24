import Header from './components/Header';
import './App.css';
import { useState, useRef } from 'react';
import TodoEditor from './components/TodoEditor';
import TodoList from './components/TodoList';
import { todo } from 'node:test';

export interface Todo {
  id: number,
  content: string,
  isDone: boolean,
  date: string
}

const mockData: Todo[] = [
  {
    id: 0,
    isDone: false,
    content: 'React 공부하기',
    date: new Date().toString()
  },
  {
    id: 1,
    isDone: false,
    content: 'Typescript 공부하기',
    date: new Date().toString()
  },
  {
    id: 2,
    isDone: false,
    content: '휴식하기',
    date: new Date().toString()
  },
]

function App() {
  const [todos, setTodos] = useState<Todo[]>(mockData)
  const idRef = useRef<number>(3)

  const onCreate=(content:string)=>{
    const newItem:Todo = {
      id:idRef.current++,
      content,
      isDone:false,
      date:new Date().toString()
    }
    setTodos([newItem,...todos])
  }

  const onUpdate=(targetId:number)=>{
    setTodos (
      todos.map((todo)=>
      todo.id===targetId? {...todo, isDone:!todo.isDone}:todo
      )
    )
  }
  const onDelete=(targetId:number)=>{
    setTodos(todos.filter((todo)=>todo.id !== targetId))
  }

  return (
    <div className="App">
      <Header></Header>
      <TodoEditor onCreate={onCreate}/>
      <TodoList todos={todos} onDelete={onDelete} onUpdate={onUpdate}/>
    </div>
  );
}

export default App;