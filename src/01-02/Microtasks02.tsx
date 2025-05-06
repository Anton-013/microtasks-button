import { useState } from "react"
import { FullInput } from "./components/FullInput"


export const Mictotasks02 = () => {

    let [message, setMessage] = useState([
        { message: 'message1' },
        { message: 'message2' },
        { message: 'message3' },
    ])

    const addMessage = (title: string) => {
        let newMessage = {message: title}
        setMessage([newMessage, ...message])
    }

    return (
        <>
            <FullInput addMessage={addMessage}/>
            {message.map((el, index) => {
                return (
                    <div key={index} >{el.message}</div>
                )
            })}
        </>
    )
}
