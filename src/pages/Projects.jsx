import React from "react";

const RedInit = ({ children }) => (
  <span className="brand-red">{children}</span>
);

function Projects() {
  return (
    <div style={{}}>
      {/* Hero Section */}
      {/* <section style={{padding: '100px 0', background: 'linear-gradient(135deg, #071026 0%, #0f2a44 40%, #2d87c3 100%)', color: '#FFFFFF'}}>
        <div style={{maxWidth: '1200px', margin: '0 auto', padding: '0 24px', textAlign: 'center'}}>
          <h1 style={{ 
            fontWeight: '700', 
            marginBottom: '32px', 
            background: 'linear-gradient(135deg, #FFFFFF 0%, #3cb4e1 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>
            Featured Projects
          </h1>
          <p style={{ color: '#B8D4D1', maxWidth: '700px', margin: '0 auto', lineHeight: '1.6'}}>
            Showcasing our expertise across aerospace, automotive, energy, and manufacturing sectors
          </p>
        </div>
      </section> */}

      {/* Quick Navigation to Ongoing / Completed pages */}
      <section style={{padding: '100px 0 30px', background: 'linear-gradient(130deg, #071725 0%, #0f3854 50%, #287da8 100%)'}}>
        <div style={{maxWidth: '1000px', margin: '0 auto', padding: '0 24px', textAlign: 'center'}}>
            <h2 className="heading-font about-title" style={{
              fontWeight: '700', 
              marginBottom: '32px', 
              lineHeight: '1.1',
              color: '#FFFFFF'
            }}>
          <RedInit>F</RedInit>eatured <RedInit>P</RedInit>rojects
          </h2>
          <p style={{color: '#FFFFFF', marginBottom: '24px'}}>Choose which project list you want to explore.</p>
          <div className="project-actions" style={{display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap'}}>
            <a href="/projects/ongoing" style={{padding: '16px 28px', background: '#FFFFFF', borderRadius: '12px', boxShadow: '0 8px 24px rgba(16,24,40,0.06)', textDecoration: 'none', color: '#0f3854', fontWeight: 700, transition: 'all 0.3s ease', cursor: 'pointer', border: '1px solid rgba(15,56,84,0.12)'}}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-4px)';
              e.currentTarget.style.boxShadow = '0 16px 32px rgba(16,24,40,0.12)';
              e.currentTarget.style.backgroundColor = '#f8fbff';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 8px 24px rgba(16,24,40,0.06)';
              e.currentTarget.style.backgroundColor = '#FFFFFF';
            }}>Ongoing Projects</a>
            <a href="/projects/completed" style={{padding: '16px 28px', background: '#FFFFFF', borderRadius: '12px', boxShadow: '0 8px 24px rgba(16,24,40,0.06)', textDecoration: 'none', color: '#0f3854', fontWeight: 700, transition: 'all 0.3s ease', cursor: 'pointer', border: '1px solid rgba(15,56,84,0.12)'}}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#f8fbff';
              e.currentTarget.style.boxShadow = '0 16px 32px rgba(16,24,40,0.12)';
              e.currentTarget.style.transform = 'translateY(-4px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#FFFFFF';
              e.currentTarget.style.boxShadow = '0 8px 24px rgba(16,24,40,0.06)';
              e.currentTarget.style.transform = 'translateY(0)';
            }}>Completed Projects</a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{padding: '30px 0 80px', background: 'linear-gradient(130deg, #071725 0%, #0f3854 50%, #287da8 100%)'}}>
        <div style={{maxWidth: '800px', margin: '0 auto', padding: '0 24px', textAlign: 'center'}}>
            <h2 className="heading-font about-title" style={{
              fontWeight: '700', 
              marginBottom: '32px', 
              lineHeight: '1.1',
              color: '#FFFFFF'
            }}>
            <RedInit>H</RedInit>ave a <RedInit>P</RedInit>roject in <RedInit>M</RedInit>ind?
          </h2>
          <p style={{ color: '#FFFFFF', marginBottom: '40px', lineHeight: '1.6'}}>
            Let's collaborate to bring your engineering challenges to innovative solutions.
          </p>
          <a href="/contact" className="action-text" style={{
            padding: '18px 36px', 
            backgroundColor: 'var(--color-button-primary)', 
            color: '#FFFFFF', 
            fontWeight: '600', 
            borderRadius: '12px', 
            textDecoration: 'none', 
            transition: 'all 0.3s ease',
            boxShadow: '0 8px 24px rgba(60, 180, 225, 0.3)',
            display: 'inline-block',
            cursor: 'pointer'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#2a9ac7';
            e.currentTarget.style.boxShadow = '0 16px 40px rgba(60, 180, 225, 0.4)';
            e.currentTarget.style.transform = 'translateY(-4px) scale(1.02)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = '#3cb4e1';
            e.currentTarget.style.boxShadow = '0 8px 24px rgba(60, 180, 225, 0.3)';
            e.currentTarget.style.transform = 'translateY(0) scale(1)';
          }}>
            Start Your Project
          </a>
        </div>
      </section>
    </div>
  );
}

export default Projects;

