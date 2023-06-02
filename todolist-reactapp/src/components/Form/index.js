import { useState } from 'react';

function Form({ newTask }) {
    const [value, setValue] = useState("");

    const handleChange = (event) => {
        console.log(event.target.value);
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
        </form>
    )
};

export default Form;