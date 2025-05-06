import { useState } from "react"
import { FullInput } from "./components/FullInput"
import { Input } from "./components/Input"
import { Button } from "./components/Button"


export const Mictotasks02 = () => {

    let [message, setMessage] = useState([
        { message: 'message1' },
        { message: 'message2' },
        { message: 'message3' },
    ])

    let [title, setTitle] = useState('')
    

    const addMessage = (title: string) => {
        let newMessage = {message: title}
        setMessage([newMessage, ...message])
        setTitle('') // when using the FullInput, comment out the line (закоментить при FullInput)
    }

    const addTitle = (title: string) => {
        setTitle(title)
    }




    return (
        <>
            {/* <FullInput addMessage={addMessage}/> */}

            <Input addTitle={addTitle} title={title}/>
            <Button callBack={addMessage} name={'+'} title={title}/>
            {message.map((el, index) => {
                return (
                    <div key={index} >{el.message}</div>
                )
            })}
        </>
    )
}
