import "./Sidebar.css";
import { NavLink } from "react-router";

export function Sidebar({ tasks }) {
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
        <NavLink
          to="/"
          className={({ isActive }) =>
            `workspace-item${isActive ? " active" : ""}`
          }
        >
          <span>All tasks</span>
          <span className="count">{tasks.length}</span>
        </NavLink>

        <NavLink
          to="/active"
          className={({ isActive }) =>
            `workspace-item${isActive ? " active" : ""}`
          }
        >
          <span>Active</span>
          <span className="count">{tasks.filter((task) => !task.completed).length}</span>
        </NavLink>

        <NavLink
          to="/completed"
          className={({ isActive }) =>
            `workspace-item${isActive ? " active" : ""}`
          }
        >
          <span>Completed</span>
          <span className="count">3</span>
        </NavLink>

        <NavLink
          to="/overdue"
          className={({ isActive }) =>
            `workspace-item${isActive ? " active" : ""}`
          }
        >
          <span>Overdue</span>
          <span className="count">0</span>
        </NavLink>
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
