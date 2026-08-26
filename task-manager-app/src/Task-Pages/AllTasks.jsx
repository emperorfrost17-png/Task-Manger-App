import AllTasksIcon from "../assets/all-tasks.png";
import { Sidebar } from "../components/Sidebar";
import { Header } from "../components/Header";

export function AllTasks() {
  return (
    <>
      <title>All Tasks</title>
      <link rel="icon" type="image/svg+xml" href={AllTasksIcon} />

      <div className="app-shell">
        <Sidebar />
        <main className="main-content">
          <Header />
          <div className="workspace-area" />
        </main>
      </div>
    </>
  );
}
