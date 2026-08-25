import AllTasksIcon from "../assets/all-tasks.png";
import { Sidebar } from "../components/Sidebar";

export function AllTasks() {
  return (
    <>
      <title>All Tasks</title>
      <link rel="icon" type="image/svg+xml" href={AllTasksIcon} />

      <div className="app-shell">
        <Sidebar />
        <main className="main-content">
          <div className="workspace-area">
            <h1>All Tasks</h1>
          </div>
        </main>
      </div>
    </>
  );
}
