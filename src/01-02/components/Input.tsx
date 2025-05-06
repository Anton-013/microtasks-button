import { ChangeEvent } from "react"

type Props = {
    title: string
    addTitle: (title: string) => void
}

export const Input = ({ title, addTitle }: Props) => {

    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        addTitle(event.currentTarget.value)
    }

    return (
        <input value={title} onChange={onChangeHandler} />
    )
}