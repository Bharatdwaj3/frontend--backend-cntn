import { useEffect, useState } from "react";
import axios from "axios";
import './App.css'

function App() {
   const [king, setking] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:4000/kings`)
      .then((response) => {
        setking(response.data);
      })
      .catch((error) => {
        console.error("Error fetching sodaing movies:", error);
      });
  }, []);
  return (
    <>
        <h1>Monarchies</h1>
        <p>Kings : {king.length}</p>
        {
          king.map((king, index)=>
            <div key={king.id}>
              <h3>{king.name}</h3>
              <p>{king.title}</p>
            </div>
          )
        }
    </>
  )
}

export default App
