import { useState } from 'react';
import './Form.css';

function Form({addSighting}) {
    const [location, setLocation] = useState('');
    const [description, setDescription] = useState('');

    function handleSubmission(e) {
        e.preventDefault()
        const newSighting = {
            id: Date.now,
            location,
            description
        }
        addSighting(newSighting);
        clearInputs()
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