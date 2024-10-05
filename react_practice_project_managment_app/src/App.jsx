import {useState} from 'react';

import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import ProjectSidebar from "./components/PorjectSideBar";

function App() {

 const [projectState , setProjectState] = useState({
    selectedProjectId: undefined,
    projects: []
 });

 function handleStartAddProject(){
  setProjectState(prevState => {
    return{
      ...prevState,
      selectedProjectId: null,
      
    };
  });
 }

 function handleAddProject(projectData){
  setProjectState(prevState => {

    const newProject = {
      ...projectData,
      id: Math.random()
    };
    return{
      ...prevState,
      projects: [...prevState.projects , newProject]
    }
  });
 }
// verificacion del contenido de projectState
console.log("project list", projectState);

 let content;

 if (projectState.selectedProjectId === null){
    content = <NewProject onAddProject={handleAddProject} />
 }else if(projectState.selectedProjectId === undefined){
    content = <NoProjectSelected onStartAddProject={handleStartAddProject}/>
 }

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectSidebar onStartAddProject={handleStartAddProject} />
      {content}
    </main>
  );
}

export default App;
