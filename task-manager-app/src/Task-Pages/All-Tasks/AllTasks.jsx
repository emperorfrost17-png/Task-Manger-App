import AllTasksIcon from "../../assets/all-tasks.png";
import { Sidebar } from "../../components/Sidebar";
import { Header } from "../../components/Header";
import "./AllTasks.css";

export function AllTasks() {
  return (
    <>
      <title>All Tasks</title>
      <link rel="icon" type="image/svg+xml" href={AllTasksIcon} />

      <div className="app-shell">
        <Sidebar />
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
                  <h2>All tasks</h2>
                  <p>4 things in view</p>
                </div>
                <button className="add-task-link" type="button">
                  <span aria-hidden="true">+</span> Add task
                </button>
              </div>

              <div className="task-list">
                <article className="task-card">
                  <span className="task-checkbox" aria-hidden="true" />
                  <div>
                    <h3>Outline next week's quiet hour</h3>
                    <p>
                      A small block for thinking before the calendar fills up.
                    </p>
                    <div className="task-meta">
                      <span className="priority-tag">HIGH</span>
                      <span>Jul 27</span>
                    </div>
                  </div>
                </article>
                <article className="task-card">
                  <span className="task-checkbox" aria-hidden="true" />
                  <div>
                    <h3>Book a proper lunch break</h3>
                    <p>
                      Step away from the desk. The good ideas need a little room
                      around them.
                    </p>
                    <div className="task-meta">
                      <span className="priority-tag">HIGH</span>
                      <span>Tomorrow</span>
                    </div>
                  </div>
                </article>
                <article className="task-card">
                  <span className="task-checkbox" aria-hidden="true" />
                  <div>
                    <h3>Reply to Mira about the launch plan</h3>
                    <p>
                      Share the revised timing and ask for a final read before
                      Thursday.
                    </p>
                    <div className="task-meta">
                      <span className="priority-tag">HIGH</span>
                      <span>Aug 29</span>
                    </div>
                  </div>
                </article>
                <article className="task-card">
                  <span className="task-checkbox" aria-hidden="true" />
                  <div>
                    <h3>Send the studio invoice</h3>
                    <div className="task-meta">
                      <span className="priority-tag">HIGH</span>
                      <span>Sep 4</span>
                    </div>
                  </div>
                </article>
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
