import axios from "axios"
import { useEffect, useState} from "react"
import Square from "./Square"

const Random = () => {
    const [random, setRandom] = useState({ rows: [] });
    const [mode, setMode] = useState("lightMode");
    const [selectedTheme, setSelectedTheme] = useState("default");

  useEffect(() => {
    const apuRandomURL = 'https://prog2700.onrender.com/threeinarow/random'

    axios.get(apuRandomURL).then((response) => {
        setRandom(response.data)
    });

  }, [])

  return (
    <>
      <div className="randomBoard">
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

export default Random