import Board from "./Board"
import { useSearchParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";


//  THIS PAGE DISPLAYS THE GAME AND ANY ADDITIONAL RULES (CHECK STATUS, ERROR DISPLAY? (Error display may be in square because it relates to color but we'll see to that))
const Game = () => {
  const [boardState, setBoardState] = useState(null)
  const [searchParams] = useSearchParams();
  const gameURL = searchParams.get("url");

  useEffect(() => {
    axios.get(gameURL)
      .then((response) => setBoardState(response.data))
    }, [gameURL]);

  return (
    <>
    {boardState ? <Board boardState={boardState} /> : <p>Loading...</p>}
    </>
  )
}

export default Game