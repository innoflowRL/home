import { useRef, useState } from 'react';
import ProjectFlipCard from '../components/projects/ProjectFlipCard';
import ProjectPageHeader from '../components/projects/ProjectPageHeader';
import ProjectTabs from '../components/projects/ProjectTabs';
import { ongoingProjects } from '../data/ongoingProjects';

function ProjectsOngoing() {
  const [flippedCards, setFlippedCards] = useState({});
  const tabsRef = useRef(null);

  const toggleFlip = (projectId) => {
    setFlippedCards((current) => ({
      ...current,
      [projectId]: !current[projectId]
    }));
  };

  const scrollToProject = (project) => {
    document.getElementById(project.id)?.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  };

  const scrollTabs = (direction) => {
    const tabs = tabsRef.current;
    const firstTab = tabs?.querySelector('.project-tab-button');
    if (!tabs || !firstTab) return;

    const tabWidth = firstTab.getBoundingClientRect().width;
    tabs.scrollBy({ left: direction * (tabWidth + 12), behavior: 'smooth' });
  };

  return (
    <section className="project-page-section project-page-section-compact">
      <div className="project-page-container">
        <ProjectPageHeader title="Ongoing Projects" />

        <div className="project-tab-strip">
          <button
            type="button"
            aria-label="Scroll ongoing project categories left"
            className="project-tab-arrow"
            onClick={() => scrollTabs(-1)}
          >
            ‹
          </button>

          <div className="project-tab-scroll" ref={tabsRef}>
            <ProjectTabs
              items={ongoingProjects}
              getLabel={(project) => project.tabLabel}
              onSelect={scrollToProject}
            />
          </div>

          <button
            type="button"
            aria-label="Scroll ongoing project categories right"
            className="project-tab-arrow"
            onClick={() => scrollTabs(1)}
          >
            ›
          </button>
        </div>

        <div className="ongoing-grid">
          {ongoingProjects.map((project) => (
            <ProjectFlipCard
              key={project.id}
              project={project}
              variant="ongoing"
              isFlipped={Boolean(flippedCards[project.id])}
              onToggle={toggleFlip}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProjectsOngoing;
