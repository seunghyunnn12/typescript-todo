import React from 'react'
import './TodoItem.css'
import { Todo } from '../App'


interface TodoItemProps {
    todo: Todo,
    onDelete: (id: number) => void
    onUpdate: (id: number) => void
}



const TodoItem = ({ todo, onDelete, onUpdate }: TodoItemProps) => {
    return (
        <div className={`TodoItem ${todo.isDone ? "check" : ""}`}>
            <input
                onChange={() => onUpdate(todo.id)}
                type="checkbox" checked={todo.isDone} />
            <div className="content">
                {todo.content}
            </div>
            <div className="date">
                {new Date(todo.date).toLocaleDateString()}
            </div>
            <button onClick={()=>onDelete(todo.id)}>삭제</button>
        </div>
    )
}

export default TodoItem