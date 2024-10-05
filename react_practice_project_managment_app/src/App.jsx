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

 function handleCancelAddProject(){
  setProjectState(prevState => {
    return{
      ...prevState,
      selectedProjectId: undefined,
    };
  });
 }

 function handleAddProject(projectData){
  setProjectState(prevState => {

    const projectId = Math.random(); 
    const newProject = {
      ...projectData,
      id: projectId
    };
    return{
      ...prevState,
      selectedProjectId: undefined,
      projects: [...prevState.projects , newProject]
    }
  });
 }
// verificamos que estemos recibiendo los datos del contenido de projectState
// console.log("project list", projectState);

 let content;

 if (projectState.selectedProjectId === null){
    content = <NewProject onAddProject={handleAddProject} onCancelProject={handleCancelAddProject} />
 }else if(projectState.selectedProjectId === undefined){
    content = <NoProjectSelected onStartAddProject={handleStartAddProject}/>
 }

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectSidebar onStartAddProject={handleStartAddProject} projects={projectState.projects} />
      {content}
    </main>
  );
}

export default App;
