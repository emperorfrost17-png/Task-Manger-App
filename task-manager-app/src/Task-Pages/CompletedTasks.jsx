import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import { Completion } from "../components/Completion";
import { Sorting } from "../components/Sorting";

import dayjs from "dayjs";
export function CompletedTasks({
  tasks,
  onOpenTaskModal,
  onOpenEditTaskModal,
  handleDeleteTask,
  handleCompletedTasks,
  handleClearCompletedTasks,
  openMenuId,
  setOpenMenuId,
  sortBy,
  handleSortChange,
  sortedTasks,
}) {

  return (
    <>
      <title>Completed Tasks</title>

      <div className="app-shell">
        <Sidebar tasks={tasks} onOpenTaskModal={onOpenTaskModal} />
        <main className="main-content">
          <Header onOpenTaskModal={onOpenTaskModal} currentPage="Completed tasks" />
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
                  <h2>Completed tasks</h2>
                  <p>
                    {tasks.filter((task) => task.completed).length} things in
                    view
                  </p>
                </div>
                <div className="task-heading-actions">
                  <button className="clear-completed-button" type="button" onClick={handleClearCompletedTasks}>
                    <span aria-hidden="true">
                      <i className="fa-solid fa-trash-can" aria-hidden="true" />
                    </span>{" "}
                    Clear completed tasks
                  </button>
                  
                </div>
              </div>
              <Sorting
                handleSortChange={handleSortChange}
                sortBy={sortBy}
              />
              <div className="task-list">
                {/*
                    Filter the tasks to only show those with a status of "active"
                  */}
                {sortedTasks
                  .filter((task) => task.completed)
                  .map((task) => {
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
                            <span className={`priority-tag priority-tag-${task.priority}`}>
                              {task.priority}
                            </span>
                            <span>{dayjs(task.dueDate).format("MMM D")}</span>
                          </div>
                        </div>
                        <button
                          className="task-more-button"
                          type="button"
                          aria-label={`More options for ${task.title}`}
                          onClick={() =>
                            setOpenMenuId(
                              openMenuId === task.id ? null : task.id,
                            )
                          }
                        >
                          <span aria-hidden="true">...</span>
                        </button>
                        {openMenuId === task.id && (
                          <div className="task-options-menu" aria-hidden="true">
                            <button type="button" onClick={() => onOpenEditTaskModal(task)}>
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
