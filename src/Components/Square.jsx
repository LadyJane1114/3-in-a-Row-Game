import { useEffect, useState } from "react";

// THIS PAGE IS RESPONSIBLE FOR CHANGING THE COLORS OF THE SQUARES (THE STATE?)

const Square = ({cell, colorPalettes, mode}) => {
  const [currentState, setCurrentState] = useState(cell.state);

  const flipCellColor = () => {
    const themeColors = colorPalettes[mode];
    let color;

    if (currentState === "1") {
      color = themeColors.cell1;
    } else if (currentState === "2") {
      color = themeColors.cell2;
    } else {
      color = "transparent";
    }

    return color;
  };

  const cycleCellState = () => {
    const nextState = currentState === "1" ? "2" : "1";
    setCurrentState(nextState);
  };

  useEffect(() => {
    const squareElement = document.getElementById(`square-${cell.id}`);
    squareElement.style.backgroundColor = flipCellColor();
  }, [currentState]);
  
  return (
    <div
      id={`square-${cell.id}`}
      className="square"
      style={{
        width: "50px",
        height: "50px",
        border: `1px solid ${colorPalettes[mode].border}`,
        borderRadius: "25%",
        textAlign: "center",
        lineHeight: "50px",
        margin: "1.5px",
        backgroundColor: flipCellColor()
      }}
      onClick={() => {
        cycleCellState();
      }}
    >
      {currentState}
    </div>
  );
};

export default Square