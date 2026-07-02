import { Link } from 'react-router-dom';
import ServicesCarousel from '../components/services/ServicesCarousel';
import { services } from '../data/services';

const RedInit = ({ children }) => (
  <span className="brand-red">{children}</span>
);

function Services() {
  return (
    <>
      <section className="services-hero">
        <div className="services-hero-inner">
          <h2 className="heading-font about-title services-heading">
            <RedInit>O</RedInit>ur <RedInit>S</RedInit>ervices
          </h2>
          <p className="services-hero-copy">
            Engineering excellence starts with understanding the challenge. Leveraging advanced
            simulation, computational analysis, and practical engineering expertise, we enable
            organizations to make informed decisions, optimize performance, and innovate with confidence.
          </p>
        </div>
      </section>

      <ServicesCarousel services={services} />

      <section className="services-cta">
        <div className="services-cta-inner">
          <h2 className="heading-font about-title services-heading">
            <RedInit>R</RedInit>eady to <RedInit>G</RedInit>et <RedInit>S</RedInit>tarted?
          </h2>
          <p className="services-cta-copy">
            Let's discuss your engineering challenges and identify the most effective path from concept
            to validated solution.
          </p>
          <div className="services-cta-actions">
            <Link to="/contact" className="action-text services-cta-primary">
              Contact Us Today
            </Link>
            <Link to="/projects" className="action-text services-cta-secondary">
              View Our Work
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default Services;
