import bin from '../../assets/bin.png'
import './Task.css';

function Task({ tasks, deleteTask, statusTask }) {
    return (
        <ul>
            {
                tasks.map((task) => (
                    <li key={ task.id } >
                        <div className={ task.done ? 'task task-done' : 'task' }>
                            <input
                                className='task-input'
                                type="checkbox"
                                defaultChecked={ task.done }
                                name={ task.id }
                                onChange={ statusTask }
                            />
                            { task.taskName }
                        </div>

                        <button 
                            className='task-button'
                            type="button"
                            onClick={ deleteTask }
                            name={ task.id }
                        >
                            <img 
                                src={ bin } 
                                alt='trash_bin' 
                                className='task-button_icon' 
                                name={ task.id }
                            />
                        </button>
                    </li>
                ))
            }
        </ul>
    )
};

export default Task;