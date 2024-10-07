import NewTask from "./NewTask";

export default function Tasks({tasks , onAddTask , onDeleteTask}){
    return(
        <section>
            <h2 className="text-2xl font-bold text-stone-700 mb-4 ">TASKS</h2>
            <NewTask onAddTask={onAddTask} />
            {tasks.lenght === 0 && (
            <p className="text-stone-800 my-4 " >This project does not have any task yet...</p>
        )}{tasks.map((task) => {
            
            return (
                <li key={task.id} className="flex justify-between my-2 py-1 bg-stone-200">
                    <span>{task.text}</span>
                    <button
                        onClick={onDeleteTask}
                        className="text-stone-700 hover:text-red-500"
                    >
                        Clear
                    </button>
                </li>
            );
        })}
        
        </section>
    );
}