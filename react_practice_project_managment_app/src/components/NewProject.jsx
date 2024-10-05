import { useRef } from "react";
import Input from "./Input";
import Modal from "./Modal";

export default function NewProject({ onAddProject , onCancelProject }) {

    const modal = useRef();
    const title = useRef();
    const description = useRef();
    const dueDate = useRef();

    function handleSave() {
        const enteredTitle = title.current.value;
        const enteredDescription = description.current.value;
        const enteredDueDate = dueDate.current.value;

        // validation...
        if (enteredTitle.trim() === '' ||
            enteredDescription.trim() === '' ||
            enteredDueDate.trim() === ''
        ) {
            modal.current.open();
            return;    
        }

        onAddProject({
            title: enteredTitle,
            description: enteredDescription,
            dueDate: enteredDueDate
        });
    }

    return <>
        <Modal ref={modal} buttonCaption="Okay">
            <h2 className="text-xl font-bold text-stone-700 my-4">Invalid Input</h2>
            <p className="text-stone-600 mb-4">Oops looks like you forgot to enter a value</p>
            <p className="text-stone-600 mb-4">Please make sure you provide a valid value for every input</p>
        </Modal>
        <div className="w-[35rem] mt-16 ">
            <menu className="flex items-center justify-center gap-4 my-4">
                <li><button onClick={onCancelProject} className="bg-red-200 text-red-700 hover:text-red-900 hover:bg-red-400 rounded-md p-2 ">Cancel</button></li>
                <li><button onClick={handleSave} className="bg-green-200 text-green-700 hover:text-green-900 hover:bg-green-400 rounded-md p-2 ">Save</button></li>
            </menu>
            <div>
                <Input type="text" ref={title} label="Title" />
                <Input ref={description} isTextarea={true} label="description" />
                <Input type="date" ref={dueDate} label="due date" />

            </div>
        </div>
    </>
}