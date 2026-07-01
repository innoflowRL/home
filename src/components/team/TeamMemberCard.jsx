import { FaLinkedin } from 'react-icons/fa';
import { SiGooglescholar } from 'react-icons/si';

function TeamMemberCard({ leader }) {
  const visibleLinks = leader.links.filter((link) => link.url);
  const initials = leader.name.split(' ').map((part) => part[0]).join('');
  const imagePosition = leader.name === 'Anila Anil' ? 'team-member-image team-member-image-top' : 'team-member-image';

  return (
    <article className="team-member-card">
      <div className="team-member-media">
        {leader.image ? (
          <img
            className={imagePosition}
            src={leader.image}
            alt={leader.name}
            loading="lazy"
            decoding="async"
          />
        ) : (
          <div className="team-member-initials">{initials}</div>
        )}
      </div>

      <div className="team-member-label">
        <p className="heading-font team-member-name">{leader.name}</p>
        <p className="team-member-role">{leader.role}</p>
      </div>

      <div className="team-member-body">
        {leader.profile && <p className="team-member-profile">{leader.profile}</p>}
        <div className="team-member-meta">
          {visibleLinks.length > 0 && (
            <div className="team-member-links">
              {visibleLinks.map((link, index) => (
                <a
                  key={`${leader.name}-${link.label}-${index}`}
                  className="team-member-link"
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={link.label}
                  aria-label={`${leader.name} ${link.label}`}
                >
                  {link.icon === 'scholar' ? <SiGooglescholar size={17} /> : <FaLinkedin size={17} />}
                </a>
              ))}
            </div>
          )}
          <div className="team-member-focus-list">
            {leader.focus.map((item) => (
              <span key={item} className="team-member-focus">
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}

export default TeamMemberCard;
