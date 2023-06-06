import { useState } from 'react';

import './Form.css';

function Form({ newTask }) {
    const [value, setValue] = useState("");

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        newTask(value);
        setValue("");
    };

    return(
        <form 
            className='form'
            onSubmit={ handleSubmit }
        >
            <input 
                type="text"
                className='form-input'
                placeholder="New task ..."
                value={ value }
                onChange={ handleChange }
            />
            <button type='submit' className='form-button' >
                Add a task
            </button>
        </form>
    )
};

export default Form;