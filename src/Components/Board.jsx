import Square from "./Square"


//THIS PAGE IS RESPONSIBLE FOR CREATING THE FRAMEWORK OF THE BOARD WITH THE SQUARES USED IN SQUARE
//CAN YOU IMPORT THE URL VIA AXIOS IN ONE COMPONENT AND APPLY IT TO THE THINGS IN A DIFFERENT COMPONENT?
const Board = ({boardState}) => {
    const mode = 'lightMode';
    return (
        <div className="gameBoard">
          {boardState.rows.map((row, rowIndex) => (
            <div key={rowIndex} className="row">
              {row.map((cell, colIndex) => (
                <Square/>
              ))}
            </div>
          ))}
        </div>
      );
    };

export default Board