function Count({ tasks }) {
    const doneTask = () => {
        const tasksDone = tasks.filter(task => task.done === false);
        return tasksDone.length;
    };

    return(
        <div>
            <p>
                { doneTask() } task{ doneTask() > 1 ? "s" : "" } remain
            </p>
        </div>
    )
};

export default Count;