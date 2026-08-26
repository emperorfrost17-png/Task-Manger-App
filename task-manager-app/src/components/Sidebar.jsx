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
          <span
            className="sidebar-link-icon sidebar-link-icon-all"
            aria-hidden="true"
          >
            <svg viewBox="0 0 16 16" aria-hidden="true" focusable="false">
              <rect x="1.5" y="1.5" width="3" height="3" rx="0.8" />
              <rect x="6.5" y="1.5" width="3" height="3" rx="0.8" />
              <rect x="11.5" y="1.5" width="3" height="3" rx="0.8" />
              <rect x="1.5" y="6.5" width="3" height="3" rx="0.8" />
              <rect x="6.5" y="6.5" width="3" height="3" rx="0.8" />
              <rect x="11.5" y="6.5" width="3" height="3" rx="0.8" />
              <rect x="1.5" y="11.5" width="3" height="3" rx="0.8" />
              <rect x="6.5" y="11.5" width="3" height="3" rx="0.8" />
              <rect x="11.5" y="11.5" width="3" height="3" rx="0.8" />
            </svg>
          </span>
          <span>All tasks</span>
          <span className="count">{tasks.length}</span>
        </NavLink>

        <NavLink
          to="/active"
          className={({ isActive }) =>
            `workspace-item${isActive ? " active" : ""}`
          }
        >
          <span
            className="sidebar-link-icon sidebar-link-icon-active"
            aria-hidden="true"
          />
          <span>Active</span>
          <span className="count">
            {tasks.filter((task) => !task.completed).length}
          </span>
        </NavLink>

        <NavLink
          to="/completed"
          className={({ isActive }) =>
            `workspace-item${isActive ? " active" : ""}`
          }
        >
          <span
            className="sidebar-link-icon sidebar-link-icon-completed"
            aria-hidden="true"
          />
          <span>Completed</span>
          <span className="count">
            {tasks.filter((task) => task.completed).length}
          </span>
        </NavLink>

        <NavLink
          to="/overdue"
          className={({ isActive }) =>
            `workspace-item${isActive ? " active" : ""}`
          }
        >
          <span
            className="sidebar-link-icon sidebar-link-icon-overdue"
            aria-hidden="true"
          />
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
