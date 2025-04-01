import axios from "axios"
import { useEffect, useState} from "react"
import Square from "./Square"

const Sample = () => {
    const [sample, setSample] = useState({ rows: [] });
    const [mode, setMode] = useState("lightMode");
    const [selectedTheme, setSelectedTheme] = useState("default");

  useEffect(() => {
    const apuSampleURL = 'https://prog2700.onrender.com/threeinarow/sample'

    axios.get(apuSampleURL).then((response) => {
        setSample(response.data)
    });

  }, [])

  return (
    <>
      <div className="sampleBoard">
          {sample.rows.map((row, rowIndex) => (
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

export default Sample