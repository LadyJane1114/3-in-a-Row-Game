import {Routes, Route, useSearchParams} from 'react-router-dom'
import { useState, useEffect } from 'react';
import './css/App.css'
import Game from './Components/Game'
import TopNav from './Components/TopNav'
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
      toggle: "#3D0301",
      buttonBackground: "#B03052",
      buttonText: "#EBE8DB",
      border: "#3D0301",
      link: "#3D0301",
      linkHover: "#D76C82"
    },
    darkMode: {
      cell1: "#B03052",
      cell2: "#D76C82",
      background: "#3D0301",
      text: "#EBE8DB",
      toggle: "#EBE8DB",
      buttonBackground: "#B03052",
      buttonText: "#EBE8DB",
      border: "#EBE8DB",
      link: "#EBE8DB",
      linkHover: "#D76C82"
    },
  };

  const [mode, setMode] = useState('lightMode');

  function toggleMode() {
    let newMode = mode === "darkMode" ? "lightMode" : "darkMode";
    setMode(newMode);
    localStorage.setItem("mode", newMode);
}

useEffect(() => {
  const currentPalette = colorPalettes[mode];
  document.documentElement.style.setProperty('--link-color', currentPalette.link +"!imporant");
  document.documentElement.style.setProperty('--link-hover-color', currentPalette.linkHover);
  document.documentElement.style.setProperty('--buttonBackground-color',currentPalette.buttonBackground)
  document.documentElement.style.setProperty('--buttonText-color',currentPalette.buttonText)
}, [mode]);

  
  
  useEffect(() => {
    if (!gameURL) return;

    axios.get(gameURL)
      .then((response) => setBoardState(response.data))
      .catch((error) => console.error("Error fetching data:", error));
    }, [gameURL]);
  
    return (
    <>
      <h1>Three in a Row</h1>
      <TopNav mode={mode} toggleMode={toggleMode} setMode={setMode} colorPalettes={colorPalettes}/>
      <Routes>
        <Route path="/game" element={<Game boardState={boardState} colorPalettes={colorPalettes} mode={mode}/>} />
      </Routes>
      <footer>
        <div className="copyright">&copy; Jane Scott 2025</div>
      </footer>
    </>
  );
}

export default App