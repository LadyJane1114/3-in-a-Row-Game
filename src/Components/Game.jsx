import Board from "./Board"



//  THIS PAGE DISPLAYS THE GAME AND ANY ADDITIONAL RULES (CHECK STATUS, ERROR DISPLAY? (Error display may be in square because it relates to color but we'll see to that))
const Game = ( {boardState, colorPalettes, mode} ) => {
  if (boardState === null) {
    return <p>Loading...</p>;
  }
  return (
    <>
    <Board boardState={boardState} colorPalettes={colorPalettes} mode={mode}/>
    </>
  )
}

export default Game