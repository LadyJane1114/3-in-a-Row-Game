import { useEffect, useState } from "react";

const Square = ({cell, colorPalettes, mode}) => {
  const isLocked = !cell.canToggle;

  const [currentState, setCurrentState] = useState(
    !cell.canToggle ? cell.correctState : cell.state
  );

  useEffect(() => {
    setCurrentState(isLocked ? cell.correctState : cell.state);
  }, [cell.correctState, cell.state, isLocked]);

  const flipCellColor = () => {
    const themeColors = colorPalettes[mode];

    switch (currentState) {
      case 1:
        return themeColors.cell1;
      case 2:
        return themeColors.cell2;
      default:
        return "transparent";
    }
  };

  const cycleCellState = () => {
    if (isLocked) return;
    const nextState = currentState === 1 ? 2 : 1;
    setCurrentState(nextState);
  };

  
  return (
    <div
      id={`square-${cell.id}`}
      className={`square ${isLocked ? "locked" : ""}`}
      style={{
        width: "50px",
        height: "50px",
        border: `1px solid ${colorPalettes[mode].border}`,
        borderRadius: "25%",
        textAlign: "center",
        lineHeight: "50px",
        margin: "1.5px",
        backgroundColor: flipCellColor(),
        cursor: isLocked ? "not-allowed" : "pointer",
      }}
      onClick={cycleCellState}
      data-state={currentState}
      data-correct={cell.correctState}
    >
    </div>
  );
};

export default Square