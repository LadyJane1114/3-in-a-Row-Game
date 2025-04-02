import Square from "./Square"


//THIS PAGE IS RESPONSIBLE FOR CREATING THE FRAMEWORK OF THE BOARD WITH THE SQUARES USED IN SQUARE
//CAN YOU IMPORT THE URL VIA AXIOS IN ONE COMPONENT AND APPLY IT TO THE THINGS IN A DIFFERENT COMPONENT?
const Board = (testingURL) => {
  return (
    <>
        <div className="gameBoard">
            {random.rows.map((row, rowIndex) => (
                <div key={rowIndex} className="row">
                    {row.map((cell, colIndex) => (
                        <Square
                            key={`${rowIndex}-${colIndex}`}
                            currentState={cell.currentState}
                            correctState={cell.correctState}
                            canToggle={cell.canToggle}
                            mode={mode}
                            onClick={() => handleCellClick(rowIndex, colIndex)}
                        />
                    ))}
                </div>
            ))}
        </div>
    </>
  )
}

export default Board