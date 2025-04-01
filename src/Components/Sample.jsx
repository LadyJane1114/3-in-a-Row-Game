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
    <div>Sample</div>
  )
}

export default Sample