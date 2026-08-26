import { Sidebar } from "../components/Sidebar";
import { Header } from "../components/Header";
import dayjs from "dayjs";

export function ActiveTasks({ tasks }) {
  return (
    <>
      <title>Active Tasks</title>

      <div className="app-shell">
        <Sidebar tasks={tasks} />
        <main className="main-content">
          <Header />
          <div className="workspace-area">
            <section className="body-main">
              <p className="date-label">WEDNESDAY, AUGUST 26</p>
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
                  <h2>Active tasks</h2>
                  <p>
                    {tasks.filter((task) => !task.completed).length} things in
                    view
                  </p>
                </div>
                <button className="add-task-link" type="button">
                  <span aria-hidden="true">+</span> Add task
                </button>
              </div>

              <div className="task-list">
                {/*
                    Filter the tasks to only show those with a status of "active"
                  */}
                {tasks
                  .filter((task) => !task.completed)
                  .map((task) => {
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
                            <span>{dayjs(task.dueDate).format("MMM D")}</span>
                          </div>
                        </div>
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
