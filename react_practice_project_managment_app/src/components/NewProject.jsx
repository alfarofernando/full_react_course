import Input from "./Input";

export default function NewProject() {
    return <div className="w-[35rem] mt-16 ">
        <menu className="flex items-center justify-center gap-4 my-4">
            <li><button className="bg-red-200 text-red-700 hover:text-red-900 hover:bg-red-400 rounded-md p-2 ">Cancel</button></li>
            <li><button className="bg-green-200 text-green-700 hover:text-green-900 hover:bg-green-400 rounded-md p-2 ">Save</button></li>
        </menu>
        <div>
            <Input label="Title"  />
            <Input isTextarea={true} label="description"  />
            <Input label="due date"  />
            
        </div>
    </div>
}