import { useState } from "react"
import Header from "./components/Header"
import { TextArea } from "./components/TextArea"

import { Accordian } from "./components/Accordian"
export const App = () => {
  const [mode,setMode] = useState(false);
  return (
    <>
    <Header title="TextUtils" setMode={setMode} mode={mode}/>
    <TextArea mode={mode}/>
    
    <Accordian mode={mode}/>
    </>
  )
}

