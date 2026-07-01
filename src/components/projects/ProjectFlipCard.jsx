const getHighlights = (project) => {
  if (project.highlights) return project.highlights;

  return project.details
    .split('. ')
    .map((item) => item.replace(/\.$/, '').trim())
    .filter(Boolean)
    .slice(0, 3);
};

function ProjectFlipCard({ project, variant, isFlipped, onToggle }) {
  const frontLabel = variant === 'ongoing' ? project.status : project.subtitle;
  const frontSummary = variant === 'ongoing' ? project.summary : project.short;
  const footerText = variant === 'ongoing' ? project.partner : project.duration;
  const cardClass = variant === 'ongoing' ? 'ongoing-card' : 'completed-card-container';
  const innerClass = variant === 'ongoing' ? 'ongoing-card-inner' : 'completed-card-inner';

  const handleMouseEnter = (event) => {
    if (!isFlipped) {
      event.currentTarget.style.transform = 'translateY(-8px) scale(1.02)';
      event.currentTarget.style.boxShadow = '0 20px 50px rgba(45, 135, 195, 0.2)';
    }
  };

  const handleMouseLeave = (event) => {
    if (!isFlipped) {
      event.currentTarget.style.transform = 'translateY(0) scale(1)';
      event.currentTarget.style.boxShadow = '0 8px 24px rgba(45, 135, 195, 0.08)';
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      onToggle(project.id);
    }
  };

  return (
    <article
      id={project.id}
      className={`${cardClass} ${isFlipped ? 'is-flipped flipped' : ''}`}
      tabIndex={0}
      role="button"
      aria-label={`Project: ${project.title}`}
      onClick={() => onToggle(project.id)}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onKeyDown={handleKeyDown}
    >
      <div className={`${innerClass} ${isFlipped ? 'flipped' : ''}`}>
        <div className="project-card-face project-card-front">
          <div className="project-card-label text-small">{frontLabel}</div>
          <div>
            <h3 className="project-card-title hero-copy">{project.title}</h3>
            <p className="project-card-summary text-small">{frontSummary}</p>
          </div>
          <div className="project-card-click-hint text-small">Click to see details</div>
          <div className="project-card-footer text-small">{footerText}</div>
        </div>

        <div
          className="project-card-face project-card-back"
          onWheel={(event) => event.stopPropagation()}
          onTouchMove={(event) => event.stopPropagation()}
        >
          <h3 className="project-card-back-title hero-copy">{project.title}</h3>
          <p className="project-card-back-description text-small">{project.description}</p>

          <ul className="project-card-highlights text-meta">
            {getHighlights(project).map((highlight) => (
              <li key={highlight}>{highlight}</li>
            ))}
          </ul>

          {variant === 'completed' && project.technologies?.length > 0 && (
            <div className="project-card-tech-list">
              {project.technologies.map((tech) => (
                <span className="project-card-tech text-meta" key={tech}>
                  {tech}
                </span>
              ))}
            </div>
          )}

          <button
            className="project-card-back-button"
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              onToggle(project.id);
            }}
          >
            &larr; Back
          </button>
        </div>
      </div>
    </article>
  );
}

export default ProjectFlipCard;
