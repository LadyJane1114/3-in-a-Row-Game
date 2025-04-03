import { Link, Routes, Route} from 'react-router-dom'
import './App.css'
import Game from './Components/Game'
import TopNav from './Components/TopNav'

function App() {
  
  return (
    <>
      <h1>Three in a Row</h1>
      <TopNav/>
      <Routes>
        <Route path="/game" element={<Game />} />
      </Routes>
    </>
  );
}

export default App