import { useRef } from "react";
import Input from "./Input";

export default function NewProject({onAddProject}) {

    const title = useRef();
    const description = useRef();
    const dueDate = useRef();

function handleSave(){
    const enteredTitle = title.current.value;
    const enteredDescription = description.current.value;
    const enteredDueDate = dueDate.current.value;
    
    // validation...
    
    onAddProject({
        title: enteredTitle,
        description: enteredDescription,
        dueDate: enteredDueDate
    });
}

return <div className="w-[35rem] mt-16 ">
        <menu className="flex items-center justify-center gap-4 my-4">
            <li><button className="bg-red-200 text-red-700 hover:text-red-900 hover:bg-red-400 rounded-md p-2 ">Cancel</button></li>
            <li><button onClick={handleSave} className="bg-green-200 text-green-700 hover:text-green-900 hover:bg-green-400 rounded-md p-2 ">Save</button></li>
        </menu>
        <div>
            <Input type="text" ref={title} label="Title"  />
            <Input ref={description} isTextarea={true} label="description"  />
            <Input type="date" ref={dueDate} label="due date"  />
            
        </div>
    </div>
}