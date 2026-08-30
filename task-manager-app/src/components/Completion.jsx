export function Completion({ tasks }) {
  return (
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
  );
}
