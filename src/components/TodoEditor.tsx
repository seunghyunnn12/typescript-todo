import React, { useState } from 'react'
import './TodoEditor.css'

interface TodoCreate {
    onCreate: (content: string) => void
}

const TodoEditor = ({ onCreate }: TodoCreate) => {

    const [content, setContent] = useState<string>('')

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setContent(e.target.value)
    }

    const handleSubmit = () => {
        if (!content.trim()) return

        onCreate(content)
        setContent('')
    }

    const onKeyEnter=(e:React.KeyboardEvent<HTMLInputElement>)=>{
        if(e.key==='Enter') {
            handleSubmit()
        }
    }
    return (
        <div className='Editor'>
            <input
                value={content}
                onKeyUp={onKeyEnter}
                onChange={onChange}
                placeholder='할 일을 입력하세요'
                type="text" />
            <button onClick={handleSubmit}>추가</button>
        </div>
    )
}

export default TodoEditor