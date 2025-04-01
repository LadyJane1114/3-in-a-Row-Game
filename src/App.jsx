import { useState } from 'react'
import { Link, Routes, Route} from 'react-router-dom'
import './App.css'
import Game from './Components/Game'
import TopNav from './Components/TopNav'
import Random from './Components/Random'
import Sample from './Components/Sample'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <TopNav/>
      <Game/>

      <Routes>
        <Route path="/random" element={<Random/>}/>
        <Route path="/sample" element={<Sample/>}/>
      </Routes>
      

    </>
  )
}

export default App
