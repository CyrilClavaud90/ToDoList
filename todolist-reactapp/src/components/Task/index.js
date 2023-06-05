function Task({ tasks, deleteTask }) {
    return (
        <ul>
            {
                tasks.map((task) => (
                    <li key={ task.id } >
                        { task.taskName }
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