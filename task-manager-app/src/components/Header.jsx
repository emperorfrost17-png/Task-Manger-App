import "./Header.css";
import { Breadcrumbs } from "./Breadcrumbs";

export function Header({ onOpenTaskModal, currentPage, onToggleSidebar, searchQuery, handleSearchChange }) {
  return (
    <header className="header">
      {onToggleSidebar && (
        <button
          className="mobile-menu-toggle"
          type="button"
          onClick={onToggleSidebar}
          aria-label="Toggle navigation menu"
        >
          <i className="fa-solid fa-bars" aria-hidden="true" />
        </button>
      )}

      <Breadcrumbs currentPage={currentPage} />

      <div className="header-actions">
        <label className="search-box">
          <span className="search-icon" aria-hidden="true" />
          <input
            type="search"
            placeholder="Search your tasks"
            value={searchQuery}
            onChange={handleSearchChange}
          />
        </label>
        <button
          className="header-new-task"
          type="button"
          onClick={onOpenTaskModal}
        >
          <span aria-hidden="true">+</span>
          New task
        </button>
      </div>
    </header>
  );
}
