import { Sidebar } from "../../components/Sidebar";
import { Header } from "../../components/Header";
import {Completion} from "../../components/Completion";
import "./AllTasks.css";
import dayjs from "dayjs";

export function AllTasks({
  tasks,
  onOpenTaskModal,
  onOpenEditTaskModal,
  handleDeleteTask,
  handleCompletedTasks,
  handleClearCompletedTasks,
  openMenuId,
  setOpenMenuId,
}) {
  // State to track which task's options menu is currently open. This state will hold the ID of the task whose menu is open, or null if no menu is open.

  return (
    <>
      <title>All Tasks</title>

      <div className="app-shell">
        <Sidebar tasks={tasks} onOpenTaskModal={onOpenTaskModal} />

        <main className="main-content">
          <Header />

          <div className="workspace-area">
            <section className="body-main">
              <p className="date-label">{dayjs().format("dddd, MMMM D")}</p>
              <h1>
                A little lighter
                <br />
                <span>today.</span>
              </h1>
              <p className="intro-copy">
                Keep the important things close. Everything else can wait its
                turn.
              </p>

              <div className="task-section-heading">
                <div>
                  <h2>All tasks</h2>
                  <p>{tasks.length} things in view</p>
                </div>
                <div className="task-heading-actions">
                  <button
                    className="clear-completed-button"
                    type="button"
                    onClick={handleClearCompletedTasks}
                  >
                    <span aria-hidden="true">
                      <i className="fa-solid fa-trash-can" aria-hidden="true" />
                    </span>{" "}
                    Clear completed tasks
                  </button>
                  <button
                    className="add-task-link"
                    type="button"
                    onClick={onOpenTaskModal}
                  >
                    <span aria-hidden="true">+</span> Add task
                  </button>
                </div>
              </div>

              <div className="task-list">
                {tasks.map((task) => {
                  return (
                    <article className="task-card" key={task.id}>
                      {task.completed === true ? (
                        <span
                          className="task-complete-icon"
                          aria-hidden="true"
                          onClick={() => handleCompletedTasks(task.id)}
                        >
                          <i className="fa-solid fa-check" />
                        </span>
                      ) : (
                        <span
                          className="task-checkbox"
                          aria-hidden="true"
                          onClick={() => handleCompletedTasks(task.id)}
                        />
                      )}

                      <div>
                        <h3>{task.title}</h3>
                        <p>{task.description}</p>
                        <div className="task-meta">
                          <span
                            className={`priority-tag priority-tag-${task.priority}`}
                          >
                            {task.priority}
                          </span>
                          <span>{dayjs(task.dueDate).format("MMM D")}</span>
                        </div>
                      </div>
                      <button
                        className="task-more-button"
                        type="button"
                        aria-label={`More options for ${task.title}`}
                        onClick={() => {
                          // Toggle the openMenuId state to show or hide the options menu for the clicked task. If the menu is already open for this task, it will close it; otherwise, it will open it.
                          setOpenMenuId(
                            openMenuId === task.id ? null : task.id,
                          );
                        }}
                      >
                        <span aria-hidden="true">...</span>
                      </button>
                      {/*
                        Conditionally render the task options menu if the openMenuId matches the current task's ID. This menu provides options to edit or delete the task.
                      */}
                      {openMenuId === task.id && (
                        <div className="task-options-menu" aria-hidden="true">
                          <button
                            type="button"
                            onClick={() => onOpenEditTaskModal(task)}
                          >
                            <span aria-hidden="true">✎</span> Edit
                          </button>
                          <button
                            type="button"
                            onClick={() => handleDeleteTask(task.id)}
                          >
                            <i
                              className="fa-solid fa-trash-can"
                              aria-hidden="true"
                            />{" "}
                            Delete
                          </button>
                        </div>
                      )}
                    </article>
                  );
                })}
              </div>
            </section>
            <Completion tasks={tasks} />
            
          </div>
        </main>
      </div>
    </>
  );
}
