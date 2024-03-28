import { useEffect, useState } from 'react';
import './App.css';
import Form from './Form';

function App() {
  const [sightings, setSightings] = useState([])

  function getSightings() {
    fetch('http://localhost:3001/sightings')
      .then(response => {
        if (!response.ok) {
          throw new Error('Area 51 stole our data')
        } else {
          return response.json()
        }
      })
      .then(data => setSightings(data))
  }

  useEffect(() => {getSightings()}, [])

  function addSighting(sightingObj) {
    fetch('http://localhost:3001/sightings', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(sightingObj)
    })
    .then(response => response.json())
    .then(data => setSightings([...sightings, data]))
    .catch(err => console.log(err.message))
}

  return (
    <div className="App">
      <Form addSighting={addSighting}/>
      
    </div>
  );
}

export default App;
