function ProjectTabs({ items, activeId, getLabel, onSelect, className = '' }) {
  return (
    <div className={`project-tabs ${className}`} aria-label="Project categories">
      {items.map((item) => {
        const isActive = activeId === item.id;

        return (
          <button
            key={item.id}
            type="button"
            className={`project-tab-button ${isActive ? 'active' : ''}`}
            onClick={() => onSelect(item)}
          >
            {getLabel(item)}
          </button>
        );
      })}
    </div>
  );
}

export default ProjectTabs;
