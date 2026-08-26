import "./Sidebar.css";

export function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="brand-box">
        <div className="brand-mark" aria-hidden="true" />
        <div>
          <div className="brand-text">daymark</div>
          <div className="brand-tagline">make room for what matters</div>
        </div>
      </div>

      <button className="workspace-button">+ New task</button>

      <div className="sidebar-panel">
        <div className="workspace-label">Your workspace</div>

        <div className="workspace-item active">
          <span>All tasks</span>
          <span className="count">4</span>
        </div>

        <div className="workspace-item">
          <span>Today</span>
          <span className="count">0</span>
        </div>

        <div className="workspace-item">
          <span>Upcoming</span>
          <span className="count">3</span>
        </div>

        <div className="workspace-item">
          <span>Completed</span>
          <span className="count">0</span>
        </div>
      </div>

      <div className="sidebar-footer-card">
        <p>You don't have to carry the whole week today.</p>
      </div>

      <div className="user-box">
        <div className="user-avatar">NE</div>
        <div className="user-meta">
          <span className="user-name">Nathan Essama</span>
          <span className="user-role">Personal space</span>
        </div>
      </div>
    </aside>
  );
}
