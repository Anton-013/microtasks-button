import { ChangeEvent, useState } from "react"

type FullInput = {
    addMessage: (title: string) => void
}

export const FullInput = ({ addMessage }: FullInput) => {

    let [title, setTitle] = useState('')

    const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setTitle(event.currentTarget.value)
    }

    const onClickButtonHandler = () => {
        addMessage(title)
        setTitle('')
    }
    
    return (
        <div>
            <input value={title} onChange={onChangeInputHandler} />
            <button onClick={onClickButtonHandler}>+</button>
        </div>
    )
}