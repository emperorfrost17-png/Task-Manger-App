import "./App.css";
import { Routes, Route } from "react-router";
import { AllTasks } from "./Task-Pages/All-Tasks/AllTasks";

function App() {
  return (
    <Routes>
      <Route path="/" element={<AllTasks />} />
    </Routes>
  );
}

export default App;
