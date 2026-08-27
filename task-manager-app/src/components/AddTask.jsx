import "./AddTask.css";

export function AddTask({ onClose }) {
  return (
    <>
      <title>Add Task</title>
      <main className="add-task-page">
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
            />
          </div>

          <div className="task-form-row">
            <div className="task-field">
              <label htmlFor="task-priority">Priority</label>
              <select id="task-priority" defaultValue="MEDIUM">
                <option value="LOW">Low - gentle pace</option>
                <option value="MEDIUM">Medium - worth attention</option>
                <option value="HIGH">High - needs focus</option>
              </select>
            </div>

            <div className="task-field">
              <label htmlFor="task-due-date">Due date</label>
              <input id="task-due-date" type="date" placeholder="27/08/2026" />
            </div>
          </div>

          <div className="add-task-actions">
            <button className="cancel-task-button" type="button" onClick={onClose}>
              Cancel
            </button>

            <button className="save-task-button" type="button">
              Add task
            </button>
          </div>
        </section>
      </main>
    </>
  );
}
