import { Link } from 'react-router-dom';

const RedInit = ({ children }) => (
  <span className="brand-red">{children}</span>
);

function ProjectPageHeader({ title, backTo = '/projects' }) {
  const words = title.split(' ');

  return (
    <div className="project-page-header">
      <h2 className="heading-font about-title project-page-title">
        {words.map((word, index) => (
          <span key={word}>
            {index > 0 && ' '}
            <RedInit>{word.charAt(0)}</RedInit>
            {word.slice(1)}
          </span>
        ))}
      </h2>
      <Link to={backTo} className="project-back-link">
        &larr; Back
      </Link>
    </div>
  );
}

export default ProjectPageHeader;
