
type Props = {
    name: string
    title: string
    callBack: (title: string) => void
}

export const Button = ({name, title, callBack}: Props) => {

    const onClickHandler = () => {
        callBack(title)
    }
    return (
        <button onClick={onClickHandler}>{name}</button>
    )
}