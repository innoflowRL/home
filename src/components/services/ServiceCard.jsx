import { useState } from 'react';

function ServiceCard({ service, onHoverChange }) {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleMouseEnter = (event) => {
    onHoverChange(service.id);
    event.currentTarget.style.transform = 'translateY(-12px) scale(1.02)';
    event.currentTarget.style.boxShadow = '0 25px 60px rgba(45, 135, 195, 0.25)';
  };

  const handleMouseLeave = (event) => {
    onHoverChange(null);
    event.currentTarget.style.transform = 'translateY(0) scale(1)';
    event.currentTarget.style.boxShadow = '0 12px 40px rgba(45, 135, 195, 0.08)';
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      setIsFlipped((current) => !current);
    }
  };

  return (
    <article
      className="service-card-container"
      tabIndex={0}
      role="button"
      aria-label={`Service: ${service.title}`}
      onClick={() => setIsFlipped((current) => !current)}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onKeyDown={handleKeyDown}
    >
      <div className={`service-card-inner ${isFlipped ? 'flipped' : ''}`}>
        <div className="service-card-front">
          <img
            className="service-card-image"
            src={service.imageUrl}
            alt={service.title}
            style={{
              objectFit: service.imageFit || 'cover',
              objectPosition: service.imagePosition || 'center center',
              transform: `scale(${service.imageZoom || 1})`
            }}
          />

          <div className="service-card-titlebar">
            <h3>{service.shortTitle}</h3>
          </div>

          <div className="service-overlay">
            <p className="hero-copy">{service.hoverDescription}</p>
            <button
              type="button"
              className="service-details-button"
              onClick={(event) => {
                event.stopPropagation();
                setIsFlipped(true);
              }}
            >
              View Details →
            </button>
          </div>
        </div>

        <div
          className="service-card-back"
          onWheel={(event) => event.stopPropagation()}
          onTouchMove={(event) => event.stopPropagation()}
        >
          <div className="service-card-back-title">
            <h3>{service.title}</h3>
          </div>

          <div className="service-card-feature-list">
            <ul>
              {service.keyFeatures.map((feature) => (
                <li key={feature} className="text-small">
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <button
            type="button"
            className="service-card-back-button"
            onClick={(event) => {
              event.stopPropagation();
              setIsFlipped(false);
            }}
          >
            ← Back
          </button>
        </div>
      </div>
    </article>
  );
}

export default ServiceCard;
