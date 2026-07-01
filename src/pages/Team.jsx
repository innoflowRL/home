import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import TeamMemberCard from '../components/team/TeamMemberCard';
import { leaders } from '../data/team';

const RedInit = ({ children }) => (
  <span className="brand-red">{children}</span>
);

function Team() {
  return (
    <div>
      <section className="team-hero">
        <div className="team-container team-hero-content">
          <h1 className="heading-font team-hero-title">
            <RedInit>O</RedInit>ur <RedInit>T</RedInit>eam
          </h1>
          <p className="team-hero-copy">
            Research-led engineers and consultants combining CFD, thermal sciences, and industrial delivery experience.
          </p>
        </div>
      </section>

      <section className="team-leadership-section">
        <div className="team-container">
          <div className="team-members-grid">
            {leaders.map((leader) => (
              <TeamMemberCard key={leader.name} leader={leader} />
            ))}
          </div>
        </div>
      </section>

      <section className="team-cta-section">
        <div className="team-container">
          <div className="team-contact-card">
            <div>
              <p className="heading-font team-card-title">Ready To Discuss An Engineering Challenge?</p>
              <p className="team-card-copy">
                Talk to our team about your engineering challenge and we will propose a scoped approach.
              </p>
            </div>
            <Link to="/contact" className="team-contact-link">
              Contact Us <FaArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Team;
