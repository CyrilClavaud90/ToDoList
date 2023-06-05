import { useState } from 'react';

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
            onSubmit={ handleSubmit }
        >
            <input 
                type="text"
                placeholder="Add a task ..."
                value={ value }
                onChange={ handleChange }
            />
            <button type='submit' >
                Add a task
            </button>
        </form>
    )
};

export default Form;