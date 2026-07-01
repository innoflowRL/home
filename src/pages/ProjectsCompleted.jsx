import { useRef, useState } from 'react';
import CompletedGallery from '../components/projects/CompletedGallery';
import ProjectFlipCard from '../components/projects/ProjectFlipCard';
import ProjectPageHeader from '../components/projects/ProjectPageHeader';
import ProjectTabs from '../components/projects/ProjectTabs';
import { completedCategories, galleryPlaceholders } from '../data/completedProjects';

function ProjectsCompleted() {
  const [selectedTab, setSelectedTab] = useState(completedCategories[0].id);
  const [flippedCards, setFlippedCards] = useState({});
  const tabsRef = useRef(null);

  const toggleFlip = (projectId) => {
    setFlippedCards((current) => ({
      ...current,
      [projectId]: !current[projectId]
    }));
  };

  const scrollTabs = (direction) => {
    const tabs = tabsRef.current;
    const firstTab = tabs?.querySelector('.project-tab-button');
    if (!tabs || !firstTab) return;

    const tabWidth = firstTab.getBoundingClientRect().width;
    tabs.scrollBy({ left: direction * (tabWidth + 12), behavior: 'smooth' });
  };

  const currentCategory = completedCategories.find((category) => category.id === selectedTab);

  return (
    <section className="project-page-section">
      <div className="project-page-container">
        <ProjectPageHeader title="Completed Projects" />

        <div className="project-tab-strip">
          <button
            type="button"
            aria-label="Scroll completed project categories left"
            className="project-tab-arrow"
            onClick={() => scrollTabs(-1)}
          >
            ‹
          </button>

          <div className="project-tab-scroll" ref={tabsRef}>
            <ProjectTabs
              items={completedCategories}
              activeId={selectedTab}
              getLabel={(category) => category.title}
              onSelect={(category) => setSelectedTab(category.id)}
            />
          </div>

          <button
            type="button"
            aria-label="Scroll completed project categories right"
            className="project-tab-arrow"
            onClick={() => scrollTabs(1)}
          >
            ›
          </button>
        </div>

        <div className="completed-projects-grid">
          {currentCategory?.projects.map((project) => (
            <ProjectFlipCard
              key={project.id}
              project={project}
              variant="completed"
              isFlipped={Boolean(flippedCards[project.id])}
              onToggle={toggleFlip}
            />
          ))}
        </div>

        <CompletedGallery items={galleryPlaceholders} />
      </div>
    </section>
  );
}

export default ProjectsCompleted;
