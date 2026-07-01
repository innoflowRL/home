import { useRef, useState } from 'react';
import ServiceCard from './ServiceCard';

function ServicesCarousel({ services }) {
  const [hoveredCard, setHoveredCard] = useState(null);
  const carouselRef = useRef(null);

  const scrollCarousel = (direction) => {
    carouselRef.current?.scrollBy({ left: direction * 360, behavior: 'smooth' });
  };

  return (
    <section className="services-carousel-section">
      <div className="services-carousel-container">
        <div className="services-carousel-frame">
          <div className="services-carousel" ref={carouselRef}>
            <div className="services-carousel-track">
              {services.map((service) => (
                <ServiceCard
                  key={service.id}
                  service={service}
                  onHoverChange={setHoveredCard}
                />
              ))}
            </div>
          </div>

          <button
            type="button"
            aria-label="Scroll services left"
            className="services-carousel-arrow services-carousel-arrow-left"
            onClick={() => scrollCarousel(-1)}
            style={{
              opacity: hoveredCard ? 0 : 1,
              pointerEvents: hoveredCard ? 'none' : 'auto'
            }}
          >
            ◀
          </button>

          <button
            type="button"
            aria-label="Scroll services right"
            className="services-carousel-arrow services-carousel-arrow-right"
            onClick={() => scrollCarousel(1)}
            style={{
              opacity: hoveredCard ? 0 : 1,
              pointerEvents: hoveredCard ? 'none' : 'auto'
            }}
          >
            ▶
          </button>
        </div>
      </div>
    </section>
  );
}

export default ServicesCarousel;
