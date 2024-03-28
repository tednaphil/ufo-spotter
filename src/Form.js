import { useState } from 'react';
import './Form.css';

function Form() {
    const [location, setLocation] = useState('');
    const [description, setDescription] = useState('');

    function handleSubmission(e) {
        e.preventDefault()
        const newSighting = {
            id: Date.now,
            location,
            description
        }
        postSighting(newSighting);
        clearInputs()
    }

    function postSighting(sightingObj) {
        fetch('http://localhost:3001/sightings', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(sightingObj)
        })
        .then(response => response.json())
        .then(data => console.log('posted sighting', data))
        .catch(err => console.log(err.message))
    }

    function clearInputs() {
        setLocation('');
        setDescription('');
    }

    //post function for form submission
    //clear input function to reset state of form fields

    return (
        <form onSubmit={(e) => handleSubmission(e)}>
            <input type='text' placeholder='location' required value={location} onChange={(e) => setLocation(e.target.value)}></input>
            <input type='text' placeholder='description' required value={description} onChange={(e) => setDescription(e.target.value)}></input>
            <button>Submit</button>
        </form>
    )
}

export default Form;