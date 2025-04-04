import {Routes, Route, useSearchParams} from 'react-router-dom'
import './css/App.css'
import Game from './Components/Game'
import TopNav from './Components/TopNav'
import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [boardState, setBoardState] = useState(null)
  const [searchParams] = useSearchParams();
  const gameURL = searchParams.get("url");

  const colorPalettes = {
    lightMode: {
      cell1: "#D76C82",
      cell2: "#B03052",
      background: "#EBE8DB",
      text: "#3D0301",
      errorOutline: "#D72638",
      toggle: "#3D0301",
      buttonBackground: "#B03052",
      buttonText: "#FFFFFF",
      inputBackground: "#F8E8E0",
      border: "#3D0301"
    },
    darkMode: {
      cell1: "#B03052",
      cell2: "#D76C82",
      background: "#3D0301",
      text: "#EBE8DB",
      errorOutline: "#B71C1C",
      toggle: "#EBE8DB",
      buttonBackground: "#B03052",
      buttonText: "#FFFFFF",
      inputBackground: "#B03052",
      border: "#3D0301"
    },
  };

  const [mode, setMode] = useState('lightMode');

  
  
  useEffect(() => {
    if (!gameURL) return;

    axios.get(gameURL)
      .then((response) => setBoardState(response.data))
      .catch((error) => console.error("Error fetching data:", error));
    }, [gameURL]);
  
    return (
    <>
      <h1>Three in a Row</h1>
      <TopNav mode={mode} setMode={setMode} colorPalettes={colorPalettes}/>
      <Routes>
        <Route path="/game" element={<Game boardState={boardState} colorPalettes={colorPalettes} mode={mode}/>} />
      </Routes>
    </>
  );
}

export default App