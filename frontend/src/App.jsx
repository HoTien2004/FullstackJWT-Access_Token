import { useEffect } from 'react'
import axios from './util/axios.customize';

function App() {

  useEffect(() => {
    const fetchHelloWorld = async () => {
      const res = await axios.get(`/v1/api`);
      console.log(">>>check res: ", res);
    }
    fetchHelloWorld();
  }, [])

  return (
    <>
      <p>Hello worlddd</p>
    </>
  )
}

export default App
