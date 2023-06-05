function Task({ tasks, deleteTask, statusTask }) {
    return (
        <ul>
            {
                tasks.map((task) => (
                    <li key={ task.id } >
                        { task.taskName }

                        <input 
                            type="checkbox"
                            defaultChecked={ task.done }
                            name={ task.id }
                            onChange={ statusTask }
                        />

                        <button 
                            type="button"
                            onClick={ deleteTask }
                            name={ task.id }
                        >
                            delete
                        </button>
                    </li>
                ))
            }
        </ul>
    )
};

export default Task;