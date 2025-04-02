import Board from "./Board"


//  THIS PAGE DISPLAYS THE GAME AND ANY ADDITIONAL RULES (CHECK STATUS, ERROR DISPLAY? (Error display may be in square because it relates to color but we'll see to that))
const Game = () => {
  useEffect(() => {
    const testingURL = [
      'https://prog2700.onrender.com/threeinarow/random',
      'https://prog2700.onrender.com/threeinarow/sample'
    ]

    axios.get(testingURL).then((response) => {
        setRandom(response.data)
    });

  }, [])

  return (
    <>
    <Board/>
    </>
  )
}

export default Game