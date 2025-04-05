import Square from "./Square"


const Board = ({boardState, colorPalettes, mode}) => {
  if (!boardState || !boardState.rows) {
    return <p>No puzzle here!</p>;
  }
  
  
  const checkPuzzle = () => {
    let isCorrect = true;
    let isEmpty = false;

    document.querySelectorAll(".square").forEach((div) => {
      const userState = div.dataset.state;
      const correctState = div.dataset.correct;
    
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
      alert("Hmm... Something's not right. You can always use the checkbox below to show you what's wrong!");
    }

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
  
    document.querySelectorAll(".square").forEach((div) => {
      const userState = div.dataset.state;
      const correctState = div.dataset.correct;
      const isLocked = div.classList.contains("locked");
  
      if (!isLocked) {
        if (!userState || userState === "0") {
            div.style.outline = "none";
            div.innerHTML = "";
        } else {
            if (userState !== correctState && showErrors) {
                div.innerHTML = "No!!";
                div.style.color = "#EBE8DB";
                div.style.fontSize = "10px";
                div.style.textAlign = "justified";
                div.style.lineHeight = "50px";
                div.style.fontWeight - "bold";
            } else {
                div.innerHTML = "";
            }
          }
        }
    });
  };

  return (
      <div className="gameBoard">
        {boardState.rows.map((row, rowIndex) => (
          <div key={rowIndex} className="row">
            {row.map((cell, colIndex) => (
              <Square key={`${rowIndex}-${colIndex}`} cell={cell} colorPalettes={colorPalettes} mode={mode}/>
            ))}
      </div>
    ))}

      <br/>
      <button id="checkBTN" onClick={checkPuzzle}>Check Puzzle</button>
      <br/>
      <br/>
      <label htmlFor="showErrors" className="showMeLabel">Show Me What's Wrong!</label>
      <input type="checkbox" id="showErrors" onChange={showMeWhatsWrong} />
      <div id="result" style={{ display: "none" }}> You did it! </div>
    </div>
  );
}

export default Board