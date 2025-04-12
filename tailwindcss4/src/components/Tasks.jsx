import {CheckIcon,ChevronRightIcon, TrashIcon } from "lucide-react";
import {useNavigate} from "react-router-dom";
import Button from "./Button";

function Tasks(props){
    const navigate = useNavigate();

    function onSeeDetailsClick(task){
       // navigate(`/task?title=${task.title}&description=${task.description}`)
       const query = new URLSearchParams();
       query.set("title",task.title);
       query.set("description",task.description);
       navigate(`/task?${query.toString()}`);
    }
    //return <h1>{props.tasks[0].title}</h1>;
    return <ul className="space-y-4 p-6 bg-slate-200 rounded-md shadow">
        {props.tasks.map((task) => <li key={task.id} className="flex gap-2">
            <button onClick={() => props.onTaskClick(task.id)} className={`bg-slate-400 text-left w-full flex items-center gap-2 text-white p-2 rounded-md ${task.isCompleted && 'line-through'}`}>
                {task.isCompleted && <CheckIcon/>}{task.title}</button>
            <Button onClick={()=> onSeeDetailsClick(task)}> <ChevronRightIcon /></Button>
            <Button onClick={() => props.onDeleteClick(task.id)}> <TrashIcon /></Button>
        </li>)}
            </ul>
}


export default Tasks;