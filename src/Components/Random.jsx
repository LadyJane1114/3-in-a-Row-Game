import axios from "axios"
import { useEffect, useState} from "react"


const Random = () => {
    const [random, setRandom] = useState([])

    useEffect(() => {
        const apuRandomURL = 'https://prog2700.onrender.com/threeinarow/random'

        axios.get(apuRandomURL).then((response) => {
            setUsers(response.data)
        });

    }, [])

  return (
    <div>Random</div>
  )
}

export default Random