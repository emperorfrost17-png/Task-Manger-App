import { Routes, Route } from "react-router";
import { useState, useEffect } from "react";
import { AllTasks } from "./Task-Pages/All-Tasks/AllTasks";
import { ActiveTasks } from "./Task-Pages/ActiveTasks";
import { CompletedTasks } from "./Task-Pages/CompletedTasks";
import { OverdueTasks } from "./Task-Pages/OverdueTasks";
import { AddTask } from "./components/AddTask";


import "./App.css";

function App() {
  const storedTasks = localStorage.getItem("tasks");
  const [tasks, setTasks] = useState(storedTasks ? JSON.parse(storedTasks) : []);
  const [isTaskModalOpen, setIsTaskModalOpen] = useState(false);
  const onOpenTaskModal = () => {
    setIsTaskModalOpen(true);
  };
  const onCloseTaskModal = () => {
    setIsTaskModalOpen(false);
  }
   

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
    <>
      {/*
      this is the main App component that manages the state of tasks and routes to different task pages. It uses React Router for navigation and local storage to persist tasks across sessions. The AddTask component is conditionally rendered based on the isTaskModalOpen state, allowing users to add new tasks. The useEffect hooks handle loading and saving tasks to local storage.
    */}
      {isTaskModalOpen && <AddTask onClose={onCloseTaskModal} tasks={tasks} setTasks={setTasks} />}
      
      <Routes>
        <Route
          path="/"
          element={<AllTasks tasks={tasks} onOpenTaskModal={onOpenTaskModal} />}
        />
        <Route
          path="/active"
          element={
            <ActiveTasks tasks={tasks} onOpenTaskModal={onOpenTaskModal} />
          }
        />
        <Route
          path="/completed"
          element={
            <CompletedTasks tasks={tasks} onOpenTaskModal={onOpenTaskModal} />
          }
        />
        <Route
          path="/overdue"
          element={
            <OverdueTasks tasks={tasks} onOpenTaskModal={onOpenTaskModal} />
          }
        />
       
      </Routes>
    </>
  );
}

export default App;
