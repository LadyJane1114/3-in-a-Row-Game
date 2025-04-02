import { Link } from "react-router-dom";
import Game from "./Game";
import Board from "./Board";
import App from "../App";

const TopNav = () => {
    const testingURLs = [
        "https://prog2700.onrender.com/threeinarow/random",
        "https://prog2700.onrender.com/threeinarow/sample"
      ];
      
  return (
    <>
        <Link to={`/game?url=${encodeURIComponent(testingURLs[0])}`}>Random</Link>
        <br/>
        <Link to={`/game?url=${encodeURIComponent(testingURLs[1])}`}>Sample</Link>
    </>
  )
}

export default TopNav