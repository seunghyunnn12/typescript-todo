import React, { useState } from 'react'
import './TodoList.css'
import { Todo } from '../App'
import TodoItem from './TodoItem'

interface Props {
    todos: Todo[];
    onUpdate: (id: number) => void
    onDelete: (id: number) => void
}

const TodoList = ({ todos, onUpdate, onDelete }: Props) => {

    const [search, setSearch] = useState<string>('')

    const onChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {

        setSearch(e.target.value)
    }

    const getFilteredData = () => {
        if (search === '') {
            return todos
        }
        return todos.filter((todo) =>
            todo.content.toLowerCase().includes(search.toLowerCase())
        )
    }

    const filteredTodos = getFilteredData()

    return (
        <div className='TodoList'>
            <h4>TodoList📝</h4>
            <input
                value={search}
                onChange={onChangeSearch}
                type="text" placeholder='검색어를 입력하세요' />
            <div className="todos_wrapper">
                {filteredTodos.map((todo, i) => (

                    <TodoItem
                        key={i}
                        todo={todo}
                        onUpdate={onUpdate}
                        onDelete={onDelete}
                    />
                ))}
            </div>
        </div>
    )
}

export default TodoList