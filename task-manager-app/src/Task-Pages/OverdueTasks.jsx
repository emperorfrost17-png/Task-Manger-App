import { Sidebar } from "../components/Sidebar";
import { Header } from "../components/Header";
import { useState } from "react";
import dayjs from "dayjs";
export function OverdueTasks({ tasks, onOpenTaskModal, handleDeleteTask }) {
  const [openMenuId, setOpenMenuId] = useState(null);
  return (
    <>
      <title>Overdue Tasks</title>

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
                  <h2>Overdue tasks</h2>
                  <p>
                    {
                      tasks.filter(
                        (task) =>
                          dayjs(task.dueDate).isBefore(dayjs(), "day") &&
                          !task.completed,
                      ).length
                    }{" "}
                    things in view
                  </p>
                </div>
                <button
                  className="add-task-link"
                  type="button"
                  onClick={onOpenTaskModal}
                >
                  <span aria-hidden="true">+</span> Add task
                </button>
              </div>

              <div className="task-list">
                {/*
                    Filter the tasks to only show those with a status of "active"
                  */}
                {tasks
                  // Filter the tasks to only show those that are overdue and not completed
                  //I added 'day' after dayjs() to ensure that the comparison is done at the day level, ignoring the time aspect.
                  .filter(
                    (task) =>
                      dayjs(task.dueDate).isBefore(dayjs(), "day") &&
                      !task.completed,
                  )
                  .map((task) => {
                    const TimeDifferenceMs = dayjs().valueOf() - task.dueDate;
                    const TimeDifferenceDays = Math.floor(
                      TimeDifferenceMs / (1000 * 60 * 60 * 24),
                    );
                    return (
                      <article className="task-card" key={task.id}>
                        <span className="task-checkbox" aria-hidden="true" />
                        <div>
                          <h3>{task.title}</h3>
                          <p>{task.description}</p>
                          <div className="task-meta">
                            <span className="priority-tag">
                              {task.priority}
                            </span>
                            <span>
                              {TimeDifferenceDays === 1
                                ? "1 day ago"
                                : `${TimeDifferenceDays} days ago`}
                            </span>
                          </div>
                        </div>
                        <button
                          className="task-more-button"
                          type="button"
                          aria-label={`More options for ${task.title}`}
                          onClick={() => setOpenMenuId(openMenuId === task.id ? null : task.id)}
                        >
                          <span aria-hidden="true">...</span>
                        </button>
                         {openMenuId === task.id && (
                        <div className="task-options-menu" aria-hidden="true">
                          <button type="button">
                            <span aria-hidden="true">✎</span> Edit
                          </button>
                          <button type="button" onClick={() => handleDeleteTask(task.id)}>
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

            <aside className="body-side">
              <div className="day-progress">
                <div className="progress-ring">0%</div>
                <div>
                  <p>YOUR DAY</p>
                  <strong>0 of 0 complete</strong>
                </div>
              </div>
              <div className="rhythm-card">
                <p className="panel-label">TODAY'S RHYTHM</p>
                <h2>
                  Focus, then
                  <br />
                  let go.
                </h2>
                <div className="progress-row">
                  <span>Progress</span>
                  <strong>0%</strong>
                </div>
                <div className="progress-track">
                  <span />
                </div>
                <p className="panel-copy">
                  Pick one thing to begin. Momentum follows clarity.
                </p>
              </div>
              <div className="upcoming-card">
                <div className="upcoming-header">
                  <p className="panel-label upcoming-label">
                    <span className="calendar-icon" aria-hidden="true" />
                    <span className="upcoming-label-text">COMING UP</span>
                  </p>
                </div>
                <div className="upcoming-event">
                  <h3>Book a proper lunch break</h3>
                  <p>Thursday, August 27</p>
                </div>
                <hr />
                <div className="upcoming-event">
                  <h3>Reply to Mira about the launch plan</h3>
                  <p>Saturday, August 29</p>
                </div>
              </div>
            </aside>
          </div>
        </main>
      </div>
    </>
  );
}
