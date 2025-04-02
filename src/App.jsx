import { useState } from 'react'
import { Link, Routes, Route} from 'react-router-dom'
import './App.css'
import Game from './Components/Game'
import Board from './Components/Board'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1>Three in a Row</h1>
    <Link as={Link} to={[testingURL[0]]}></Link>
    <Link as={Link} to={[testingURL[1]]}></Link>
    <Game/>
    </>
  )
}

export default App
