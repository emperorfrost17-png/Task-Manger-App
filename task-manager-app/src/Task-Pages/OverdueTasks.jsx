import { Sidebar } from "../components/Sidebar";
import { Header } from "../components/Header";
import { Completion } from "../components/Completion";
import dayjs from "dayjs";
export function OverdueTasks({
  tasks,
  onOpenTaskModal,
  onOpenEditTaskModal,
  handleDeleteTask,
  handleCompletedTasks,
  openMenuId,
  setOpenMenuId,
}) {
  return (
    <>
      <title>Overdue Tasks</title>

      <div className="app-shell">
        <Sidebar tasks={tasks} onOpenTaskModal={onOpenTaskModal} />
        <main className="main-content">
          <Header onOpenTaskModal={onOpenTaskModal} currentPage="Overdue tasks" />
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
                        <span
                          className="task-checkbox"
                          aria-hidden="true"
                          onClick={() => handleCompletedTasks(task.id)}
                        />
                        <div>
                          <h3>{task.title}</h3>
                          <p>{task.description}</p>
                          <div className="task-meta">
                            <span className={`priority-tag priority-tag-${task.priority}`}>
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
