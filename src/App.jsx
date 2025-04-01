import { useState } from 'react'
import { Link, Routes, Route} from 'react-router-dom'
import './App.css'
import TopNav from './Components/TopNav'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <TopNav/>
      {/* <Game/> */}

      {/* <Routes>
        <Route path="/random" element={<Random/>}/>
        <Route path="/sample" element={<Sample/>}/>
      </Routes> */}
      

    </>
  )
}

export default App
