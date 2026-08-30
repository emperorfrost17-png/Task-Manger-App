import "./AddTask.css";
import { useState } from "react";
import dayjs from "dayjs";

export function AddTask({ onClose, tasks, setTasks }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("MEDIUM");
  const [dueDate, setDueDate] = useState(dayjs().format("YYYY-MM-DD")); // Set default due date to today
  function savedTaskTitle(event) {
    setTitle(event.target.value);
  }
  function savedTaskDescription(event) {
    setDescription(event.target.value);
  }
  function savedTaskPriority(event) {
    setPriority(event.target.value);
  }
  function savedTaskDueDate(event) {
    setDueDate(event.target.value);
  }
  const addNewTask = (event) => {
    event.preventDefault();
    // Create a new task object with the current state values and a unique ID, then update the tasks state and close the modal.
    if (!title ||  !priority || !dueDate) {
      alert("Please fill in mandatory fields before adding a task.");
      return;
    }
    const newTask = [
      ...tasks,
      {
        id: crypto.randomUUID(),
        title: title,
        description: description,
        priority: priority,
        dueDate: dueDate,
        completed: false,
      },
    ];
    setTasks(newTask);
    onClose();
  };

  return (
    <>
      <form className="add-task-page">
        <section
          className="add-task-modal"
          role="dialog"
          aria-labelledby="add-task-title"
        >
          <div className="add-task-heading">
            <div>
              <p className="add-task-eyebrow">Make room</p>
              <h1 id="add-task-title">New task</h1>
            </div>
            <button
              className="close-task-button"
              type="button"
              aria-label="Close"
              //This button will call the onClose function passed as a prop when clicked, allowing the parent component to handle the closing of the AddTask modal.
              onClick={onClose}
            >
              <span aria-hidden="true">×</span>
            </button>
          </div>

          <div className="task-field task-title-field">
            <label htmlFor="task-title">What needs your attention?</label>
            <input
            required
              value={title}
              onChange={savedTaskTitle}
              id="task-title"
              type="text"
              placeholder="Give it a clear, kind name"
            />
          </div>

          <div className="task-field">
            <label htmlFor="task-notes">
              Notes <em>optional</em>
            </label>
            <textarea
              id="task-notes"
              placeholder="A little context for future you"
              rows="3"
              value={description}
              onChange={savedTaskDescription}
            />
          </div>

          <div className="task-form-row">
            <div className="task-field">
              <label htmlFor="task-priority">Priority</label>
              <select
                id="task-priority"
                defaultValue="MEDIUM"
                value={priority}
                onChange={savedTaskPriority}
              >
                <option value="LOW">Low - gentle pace</option>
                <option value="MEDIUM">Medium - worth attention</option>
                <option value="HIGH">High - needs focus</option>
              </select>
            </div>

            <div className="task-field">
              <label htmlFor="task-due-date">Due date</label>
              <input
                id="task-due-date"
                type="date"
                placeholder="27/08/2026"
                value={dueDate}
                onChange={savedTaskDueDate}
              />
            </div>
          </div>

          <div className="add-task-actions">
            <button
              className="cancel-task-button"
              type="button"
              onClick={onClose}
            >
              Cancel
            </button>

            <button
              className="save-task-button"
              type="button"
              onClick={addNewTask}
            >
              Add task
            </button>
          </div>
        </section>
      </form>
    </>
  );
}
