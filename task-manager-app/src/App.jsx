import { Routes, Route } from "react-router";
import { useState, useEffect } from "react";
import dayjs from "dayjs";
import { AllTasks } from "./Task-Pages/All-Tasks/AllTasks";
import { ActiveTasks } from "./Task-Pages/ActiveTasks";
import { CompletedTasks } from "./Task-Pages/CompletedTasks";
import { OverdueTasks } from "./Task-Pages/OverdueTasks";
import { AddTask } from "./components/AddTask";
import { EditTask } from "./components/EditTask";

import "./App.css";

function App() {
  const storedTasks = localStorage.getItem("tasks");
  const [tasks, setTasks] = useState(
    storedTasks ? JSON.parse(storedTasks) : [],
  );
  const [isTaskModalOpen, setIsTaskModalOpen] = useState(false);
  const [isEditTaskModalOpen, setIsEditTaskModalOpen] = useState(false);
  const [editingTask, setEditingTask] = useState(null);
  const [openMenuId, setOpenMenuId] = useState(null);
  const [sortBy, setSortBy] = useState("dateCreated"); // Default sorting by "none"
  const [searchQuery, setSearchQuery] = useState(""); // State for search query
  const onOpenEditTaskModal = (task) => {
    setEditingTask(task); // Set the task to be edited in state
    setIsEditTaskModalOpen(true);
    setOpenMenuId(null); // Close the options menu when opening the edit modal
  };
  const onCloseEditTaskModal = () => {
    setIsEditTaskModalOpen(false);
  };
  const onOpenTaskModal = () => {
    setIsTaskModalOpen(true);
  };
  const onCloseTaskModal = () => {
    setIsTaskModalOpen(false);
  };
  // Function to handle the deletion of a task by its ID. It updates the tasks state by filtering out the task with the specified ID.

  //explaination: This function takes a task ID as an argument and updates the tasks state by creating a new array that excludes the task with the matching ID. It uses the filter method to iterate through the current tasks and return only those whose IDs do not match the provided taskIdToDelete. This effectively removes the specified task from the list of tasks.
  const handleDeleteTask = (taskIdToDelete) => {
    setTasks((currentTasks) =>
      currentTasks.filter((task) => task.id !== taskIdToDelete),
    );
  };
  const handleCompletedTasks = (completedTasksId) => {
    setTasks((currentTasks) =>
      currentTasks.map((task) =>
        // This function takes a task ID as an argument and updates the tasks state by toggling the completed status of the task with the matching ID. It uses the map method to iterate through the current tasks and return a new array where the task with the specified ID has its completed property inverted (true becomes false, and false becomes true). All other tasks remain unchanged.
        task.id === completedTasksId
          ? { ...task, completed: !task.completed }
          : task,
      ),
    );
  };
  const handleClearCompletedTasks = () => {
    setTasks((currentTasks) => currentTasks.filter((task) => !task.completed));
  };
  const handleSortChange = (event) => {
    const nextSortBy = event.target.value;
    setSortBy(nextSortBy);
  };
  const sortedTasks = [...tasks].sort((a, b) => {
    // First, sort by completion status: incomplete tasks come first
    if (a.completed !== b.completed) {
      // If a is completed and b is not, a should come after b (return 1)
      // If a is not completed and b is, a should come before b (return -1)
      return a.completed ? 1 : -1;
    }
    if (sortBy === "dateCreated") {
      return dayjs(a.createdAt).diff(dayjs(b.createdAt));
    }
    if (sortBy === "priority") {
      const priorityOrder = { HIGH: 1, MEDIUM: 2, LOW: 3 };
      return priorityOrder[a.priority] - priorityOrder[b.priority];
    }
    if (sortBy === "dueDate") {
      return dayjs(a.dueDate).diff(dayjs(b.dueDate));
    }
    if (sortBy === "title") {
      return a.title.localeCompare(b.title);
    }
    return 0;
  });
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };
  const filteredTasks = sortedTasks.filter((task) =>
    task.title.toLowerCase().includes(searchQuery.toLowerCase()),
  );
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
      {isTaskModalOpen && (
        <AddTask onClose={onCloseTaskModal} tasks={tasks} setTasks={setTasks} />
      )}
      {isEditTaskModalOpen && (
        <EditTask
          onClose={onCloseEditTaskModal}
          setTasks={setTasks}
          task={editingTask} // Pass the task to be edited as a prop to the EditTask component
        />
      )}

      <Routes>
        <Route
          path="/"
          element={
            <AllTasks
              tasks={tasks}
              onOpenTaskModal={onOpenTaskModal}
              onOpenEditTaskModal={onOpenEditTaskModal}
              openMenuId={openMenuId}
              setOpenMenuId={setOpenMenuId}
              handleDeleteTask={handleDeleteTask}
              handleCompletedTasks={handleCompletedTasks}
              handleClearCompletedTasks={handleClearCompletedTasks}
              handleSortChange={handleSortChange}
              sortBy={sortBy}
              sortedTasks={sortedTasks}
              searchQuery={searchQuery}
              handleSearchChange={handleSearchChange}
              filteredTasks={filteredTasks}
            />
          }
        />
        <Route
          path="/active"
          element={
            <ActiveTasks
              tasks={tasks}
              onOpenTaskModal={onOpenTaskModal}
              onOpenEditTaskModal={onOpenEditTaskModal}
              openMenuId={openMenuId}
              setOpenMenuId={setOpenMenuId}
              handleDeleteTask={handleDeleteTask}
              handleCompletedTasks={handleCompletedTasks}
              handleSortChange={handleSortChange}
              sortBy={sortBy}
              sortedTasks={sortedTasks}
              searchQuery={searchQuery}
              handleSearchChange={handleSearchChange}
              filteredTasks={filteredTasks}
            />
          }
        />
        <Route
          path="/completed"
          element={
            <CompletedTasks
              tasks={tasks}
              onOpenTaskModal={onOpenTaskModal}
              onOpenEditTaskModal={onOpenEditTaskModal}
              openMenuId={openMenuId}
              setOpenMenuId={setOpenMenuId}
              handleDeleteTask={handleDeleteTask}
              handleCompletedTasks={handleCompletedTasks}
              handleClearCompletedTasks={handleClearCompletedTasks}
              handleSortChange={handleSortChange}
              sortBy={sortBy}
              sortedTasks={sortedTasks}
              searchQuery={searchQuery}
              handleSearchChange={handleSearchChange}
              filteredTasks={filteredTasks}
            />
          }
        />
        <Route
          path="/overdue"
          element={
            <OverdueTasks
              tasks={tasks}
              onOpenTaskModal={onOpenTaskModal}
              onOpenEditTaskModal={onOpenEditTaskModal}
              openMenuId={openMenuId}
              setOpenMenuId={setOpenMenuId}
              handleDeleteTask={handleDeleteTask}
              handleCompletedTasks={handleCompletedTasks}
              handleSortChange={handleSortChange}
              sortBy={sortBy}
              sortedTasks={sortedTasks}
              searchQuery={searchQuery}
              handleSearchChange={handleSearchChange}
              filteredTasks={filteredTasks}
            />
          }
        />
      </Routes>
    </>
  );
}

export default App;
