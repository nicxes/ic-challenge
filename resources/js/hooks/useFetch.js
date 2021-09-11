import {useState, useEffect} from 'react'
import axios from 'axios'

const useFetch = (API_URL) => {
  const [data, setData] = useState([])
  const [isLoading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  
  useEffect(() => {
    getTasks()
  }, [API_URL])

  function getTasks() {
    axios.get(API_URL)
      .then(res => {
        setData(res.data.data)
        setLoading(false)
      })
      .catch(err => {
        setError(err)
        setLoading(false)
      })
  }

  return {
    data,
    isLoading,
    error
  }
}

export default useFetch;