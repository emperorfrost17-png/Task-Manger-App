import { Routes, Route } from "react-router";
import { useState, useEffect } from "react";
import { AllTasks } from "./Task-Pages/All-Tasks/AllTasks";
import { ActiveTasks } from "./Task-Pages/ActiveTasks";
import { CompletedTasks } from "./Task-Pages/CompletedTasks";
import { OverdueTasks } from "./Task-Pages/OverdueTasks";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: crypto.randomUUID(),
      title: "Outline next week's quiet hour",
      description: "A small block for thinking before the calendar fills up.",
      priority: "HIGH",
      dueDate: "Jul 27",
      completed: false,
    },
    {
      id: crypto.randomUUID(),
      title: "Reply to Nathan about the launch plan",
      description:
        "Share the revised timing and ask for a final read before Thursday.",
      priority: "HIGH",
      dueDate: "Aug 29",
      completed: true,
    },
    {
      id: crypto.randomUUID(),
      title: "Book a proper lunch break",
      description:
        "Step away from the desk. The good ideas need a little room around them.",
      priority: "HIGH",
      dueDate: "Aug 27",
      completed: false,
    },
  ]);
  useEffect(() => {
    // Load tasks from local storage on component mount
    const storedTasks = localStorage.getItem("tasks");
    // If tasks exist in local storage, update the state with them
    if (storedTasks) {
      // Parse the stored tasks and set them to the state
      setTasks(JSON.parse(storedTasks));
    }
  }, []);

  useEffect(() => {
    // Save tasks to local storage whenever the tasks state changes
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);
  return (
    <Routes>
      <Route path="/" element={<AllTasks tasks={tasks} />} />
      <Route path="/active" element={<ActiveTasks tasks={tasks} />} />
      <Route path="/completed" element={<CompletedTasks tasks={tasks} />} />
      <Route path="/overdue" element={<OverdueTasks tasks={tasks} />} />
    </Routes>
  );
}

export default App;
