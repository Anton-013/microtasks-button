import './App.css'
import { Button } from './Button'

export const App = () => {

  const Button1Foo = (subscriber: string, age: number, address: string) => {
    console.log(subscriber, age, address);
  }

  const Button2Foo = (subscriber: string) => {
    console.log(subscriber);
  }

  const Button3Foo = () => {
    console.log("NoNeeee");    
  }

  return (
    <div>
      <Button name={'MyYouTubeChanel-1'} callBack={() => Button1Foo("im Vasya", 21, "Msk")} />
      <Button name={'MyYouTubeChanel-2'} callBack={() => Button2Foo("im Ivan")} />
      <Button name={"im Button"} callBack={Button3Foo}/>
    </div>
  )
}

