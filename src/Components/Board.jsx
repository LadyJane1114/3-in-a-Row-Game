import { useEffect, useState } from "react";
import Square from "./Square"


//THIS PAGE IS RESPONSIBLE FOR CREATING THE FRAMEWORK OF THE BOARD WITH THE SQUARES USED IN SQUARE
//CAN YOU IMPORT THE URL VIA AXIOS IN ONE COMPONENT AND APPLY IT TO THE THINGS IN A DIFFERENT COMPONENT?
const Board = ({boardState, colorPalettes, mode}) => {
  if (!boardState || !boardState.rows) {
    return <p>No puzzle here!</p>;
  }
  
  const checkPuzzle = () => {
    let isCorrect = true;
    let isEmpty = false;

    document.querySelectorAll("td").forEach((td) => {
      const userState = td.dataset.state;
      const correctState = td.dataset.correct;

      if (!userState || userState === "0") {
        isEmpty = true;
      } else if (userState !== correctState) {
        isCorrect = false;
      }
    });

    if (isCorrect && isEmpty) {
      alert("So far so good!");
    } else if (isCorrect && !isEmpty) {
      alert("You solved it!");
    } else {
      alert("Something is wrong.");
    }

    // Display the result message
    const resultMessage = document.getElementById("result");
    if (isCorrect && !isEmpty) {
      resultMessage.classList.add("resultMessage");
      resultMessage.style.display = "block";
    } else {
      resultMessage.classList.remove("resultMessage");
      resultMessage.style.display = "none";
    }
  };

  const showMeWhatsWrong = () => {
    const showErrors = document.getElementById("showErrors").checked;
    document.querySelectorAll("td").forEach((td) => {
      const userState = td.dataset.state;
      const correctState = td.dataset.correct;
      td.style.outline =
        userState !== correctState && showErrors ? "2px solid firebrick" : "none";
    });
  };

  return (
      <div className="gameBoard">
        {boardState.rows.map((row, rowIndex) => (
          <div key={rowIndex} className="row">
            {row.map((cell, colIndex) => (
              <Square key={colIndex} cell={cell} colorPalettes={colorPalettes} mode={mode}/>
            ))}
      </div>
    ))}


      <button id="checkBTN" onClick={checkPuzzle}>Check Puzzle</button>
      <br/>
      <input type="checkbox" id="showErrors" onChange={showMeWhatsWrong} />
      <div id="result" style={{ display: "none" }}> You did it! </div>
    </div>
  );
}

export default Board