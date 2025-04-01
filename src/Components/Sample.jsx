import axios from "axios"
import { useEffect, useState} from "react"

const Sample = () => {
    const [sample, setSample] = useState([])

  useEffect(() => {
    const apuSampleURL = 'https://prog2700.onrender.com/threeinarow/sample'

    axios.get(apuSampleURL).then((response) => {
        setUsers(response.data)
    });

  }, [])

  return (
    <>
    <div className="sampleBoard">
        {
            data.rows.map((row, rowIndex) => (
                <div key={rowIndex} className="row">
                  {row.map((cell, colIndex) => (
                    <div key={`${rowIndex}-${colIndex}`} className="cell">
                      State: {cell.currentState} (Correct: {cell.correctState}) 
                      {cell.canToggle ? "true" : "false"}
                    </div>
                  ))}
                </div>
              ))
        }
    </div>
    </>
  )
}

export default Sample