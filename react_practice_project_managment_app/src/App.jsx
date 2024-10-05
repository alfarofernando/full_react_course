import NewProject from "./components/NewProject";
import ProjectSidebar from "./components/PorjectSideBar";

function App() {
  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectSidebar />
      <NewProject/>
    </main>
  );
}

export default App;
