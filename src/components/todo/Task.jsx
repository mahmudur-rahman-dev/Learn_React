

export const Task = ({taskList, handleDeleteTask, handleCompleteTask}) => {
    return (
        <div>
            {
                taskList && taskList.length ?
                    taskList.map((task) => (
                        <div
                            key={task.id}
                            style={ {backgroundColor: task.completed ? "green" : "white"}}
                        >
                            <h4>{task.name}</h4>
                            <button onClick={() => handleCompleteTask(task.id)}>Complete</button>
                            <button onClick={() => handleDeleteTask(task)}>Delete</button>
                        </div>
                    )) : <div><h3>No Data Found</h3></div>
            }
        </div>
    );
}