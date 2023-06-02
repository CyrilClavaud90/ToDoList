function Task({ tasks }) {
    return (
        <ul>
            {
                tasks.map((task) => (
                    <li key={ task.id } >{ task.taskName }</li>
                ))
            }
        </ul>
    )
};

export default Task;