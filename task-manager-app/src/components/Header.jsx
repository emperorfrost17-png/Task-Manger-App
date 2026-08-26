import "./Header.css";

export function Header() {
  return (
    <header className="header">
      <div className="breadcrumb" aria-label="Current location">
        <span className="breadcrumb-dot" aria-hidden="true" />
        <span>Personal space</span>
        <span className="breadcrumb-separator">/</span>
        <span>All tasks</span>
      </div>

      <div className="header-actions">
        <label className="search-box">
          <span className="search-icon" aria-hidden="true" />
          <input type="search" placeholder="Search your tasks" />
        </label>
        <button className="header-new-task" type="button">
          <span aria-hidden="true">+</span>
          New task
        </button>
      </div>
    </header>
  );
}
