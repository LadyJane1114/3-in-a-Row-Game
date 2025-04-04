import Board from "./Board"

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