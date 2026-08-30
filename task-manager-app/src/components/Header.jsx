import "./Header.css";
import { Breadcrumbs } from "./Breadcrumbs";

export function Header({ onOpenTaskModal, currentPage }) {
  return (
    <header className="header">
      <Breadcrumbs currentPage={currentPage} />

      <div className="header-actions">
        <label className="search-box">
          <span className="search-icon" aria-hidden="true" />
          <input type="search" placeholder="Search your tasks" />
        </label>
        <button className="header-new-task" type="button" onClick={onOpenTaskModal}>
          <span aria-hidden="true">+</span>
          New task
        </button>
      </div>
    </header>
  );
}
