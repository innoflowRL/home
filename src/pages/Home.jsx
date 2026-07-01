import React, { useRef } from "react";
import ClientsCarousel from '../components/home/ClientsCarousel';
import heroBackground from '../assets/bg2.jpg';

const RedInit = ({ children }) => (
  <span className="brand-red">{children}</span>
);

function Home() {
  const aboutRef = useRef(null);
  const [stats, setStats] = React.useState({ experience: 0, projects: 0, partners: 0, collabs: 0 });
  const hasAnimated = React.useRef(false);

  React.useEffect(() => {
    const observerOptions = { threshold: 0.3 };
    const statsSection = document.querySelector('.grid-stats-responsive');
    if (!statsSection) return;

    let animationFrameId = 0;
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && !hasAnimated.current) {
        hasAnimated.current = true;

        const targets = { experience: 15, projects: 25, partners: 10, collabs: 3 };
        const duration = 2000;
        const startTime = performance.now();

        const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);

        const animate = (now) => {
          const elapsed = now - startTime;
          const progress = Math.min(elapsed / duration, 1);
          const eased = easeOutCubic(progress);

          setStats({
            experience: Math.floor(targets.experience * eased),
            projects: Math.floor(targets.projects * eased),
            partners: Math.floor(targets.partners * eased),
            collabs: Math.floor(targets.collabs * eased)
          });

          if (progress < 1) {
            animationFrameId = requestAnimationFrame(animate);
          } else {
            setStats(targets);
          }
        };

        animationFrameId = requestAnimationFrame(animate);
      }
    }, observerOptions);

    observer.observe(statsSection);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const handleScrollToAbout = (e) => {
    e.preventDefault();
    aboutRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="front-page">
      <style>{`
        .services-carousel {
          scroll-snap-type: x mandatory;
        }

        .services-carousel > div > div {
          scroll-snap-align: start;
        }

        /* Smooth scrollbar styling for webkit browsers */
        .services-carousel::-webkit-scrollbar {
          height: 10px;
        }

        .services-carousel::-webkit-scrollbar-track {
          background: rgba(60, 180, 225, 0.08);
          border-radius: 10px;
          margin: 5px 0;
        }

        .services-carousel::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, rgba(60, 180, 225, 0.6), rgba(60, 180, 225, 0.4));
          border-radius: 10px;
          transition: all 0.3s ease;
        }

        .services-carousel::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(to bottom, rgba(60, 180, 225, 0.9), rgba(60, 180, 225, 0.7));
          height: 12px;
        }
      `}</style>
      {/* Hero Section */}
      <section className="bg-brand-gradient" style={{
        minHeight: '100vh', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center', 
        color: '#db5c5c',
        position: 'relative',
        overflow: 'hidden',
        paddingBottom: '40px'
      }}>
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          // backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='1.5'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundImage: `url("${heroBackground}")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat',
          opacity: 1
        }}></div>
        
        <div style={{textAlign: 'center', padding: '16px', maxWidth: '1000px', position: 'relative', zIndex: 2, width: '100%'}}>
          <h1 className="heading-font hero-title" style={{
            fontWeight: '700',
            marginBottom: '-10px', 
            lineHeight: '1.1', 
            letterSpacing: '1px',
            color: '#FFFFFF'
          }}>
          <RedInit>I</RedInit>nno<RedInit>F</RedInit>low <RedInit>R</RedInit>esearch <RedInit>L</RedInit>abs
          </h1>
          <h1 className="hero-subtitle" style={{
            marginBottom: '12px', 
            color: '#d7eaf6', 
            fontWeight: '300', 
            letterSpacing: '0.5px'
            }}>
            Innovations in flow, Built on IIT Madras Research Excellence
          </h1>
          <p className="hero-copy" style={{
            marginBottom: '32px', 
            maxWidth: '800px', 
            margin: '0 auto 32px', 
            lineHeight: '1.6', 
            color: '#B8D4D1', 
            fontWeight: '400', 
            paddingLeft: '8px', 
            paddingRight: '8px'
            }}>
            Engineering Consulting · Analysis & Simulation · Product Development · Testing & Validation · Industrial Solutions         </p>
          <div className="hero-actions" style={{display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap'}}>
            <a href="/services" className="hero-button-large" style={{
              padding: 'clamp(12px, 3vw, 18px) clamp(20px, 5vw, 36px)', 
              backgroundColor: 'var(--color-button-primary)', 
              color: '#FFFFFF', 
              fontWeight: '600', 
              borderRadius: '12px', 
              textDecoration: 'none', 
              display: 'inline-block', 
              transition: 'all 0.3s ease',
              boxShadow: '0 8px 24px rgba(60, 180, 225, 0.4)',
              transform: 'translateY(0)',
              cursor: 'pointer'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'var(--color-button-primary-hover)';
              e.currentTarget.style.boxShadow = '0 12px 32px rgba(60, 180, 225, 0.6)';
              e.currentTarget.style.transform = 'translateY(-3px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'var(--color-button-primary)';
              e.currentTarget.style.boxShadow = '0 8px 24px rgba(60, 180, 225, 0.4)';
              e.currentTarget.style.transform = 'translateY(0)';
            }}>
              Explore Our Services
            </a>
            <a href="#about" onClick={handleScrollToAbout} className="hero-button-small" style={{
              padding: '18px 36px', 
              border: '2px solid rgba(255,255,255,0.3)', 
              color: '#FFFFFF', 
              fontWeight: '600', 
              borderRadius: '12px', 
              textDecoration: 'none', 
              display: 'inline-block', 
              transition: 'all 0.3s ease',
              backgroundColor: 'var(--overlay-dark-light)',
              backdropFilter: 'blur(10px)',
              cursor: 'pointer'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.2)';
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.6)';
              e.currentTarget.style.boxShadow = '0 8px 24px rgba(255,255,255,0.2)';
              e.currentTarget.style.transform = 'translateY(-3px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.1)';
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.3)';
              e.currentTarget.style.boxShadow = 'none';
              e.currentTarget.style.transform = 'translateY(0)';
            }}>
              Learn More
            </a>
          </div>
        </div>
      </section>


      {/* About Section */}
      <section ref={aboutRef} id="about" className="bg-brand-gradient" style={{padding: '100px 0 45px'}}>
        <div style={{maxWidth: '1500px', margin: '0 auto', padding: '0 24px'}}>
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '40px', alignItems: 'center'}}>
            <div>
              <h2 className="heading-font about-title" style={{
                fontWeight: '700', 
                marginBottom: '32px', 
                lineHeight: '1.1',
                color: '#FFFFFF'
              }}>
              <RedInit>A</RedInit>bout <RedInit>I</RedInit>FRL
              </h2>
              <div className="about-body" style={{
                color: '#afcacb', 
                lineHeight: '1.8', 
                marginBottom: '40px', 
                alignItems: 'justify'}}>
                <p style={{marginBottom: '24px', fontWeight: '400', alignItems: 'justify'}}>
InnoFlow Research Labs (IFRL) is an India-based technology enterprise with a global outlook, dedicated to delivering efficient, sustainable, and high-performance engineering solutions. Built on the research excellence of IIT
Madras, IFRL serves as a catalyst for transforming innovative ideas into impactful technology solutions.                
              </p>
                <p style={{marginBottom: '24px', alignItems: 'justify'}}>
Our expertise spans advanced engineering analysis, including external aerodynamics, CFD consultancy, research and product development, and specialised industrial systems. With
a strong foundation in scientific research and multidisciplinary engineering, we provide end-to-end solutions that help
industries address complex engineering challenges with precision, reliability, and technical depth.                </p>
              </div>
              <a href="/services" className="about-button" style={{
                display: 'inline-flex', 
                alignItems: 'center', 
                padding: '16px 32px', 
                backgroundColor: 'var(--color-button-primary)', 
                color: '#FFFFFF', 
                fontWeight: '600', 
                borderRadius: '8px', 
                textDecoration: 'none', 
                transition: 'all 0.3s ease',
                boxShadow: '0 4px 12px rgba(60, 180, 225, 0.3)',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--color-button-primary-hover)';
                e.currentTarget.style.boxShadow = '0 8px 20px rgba(60, 180, 225, 0.5)';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--color-button-primary)';
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(60, 180, 225, 0.3)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}>
                Discover Our Services →
              </a>
            </div>
            
            <div>
              <div style={{
                background: 'var(--gradient-hero-dark)', 
                borderRadius: '20px', 
                padding: '40px', 
                color: '#FFFFFF',
                boxShadow: '0 20px 40px rgba(45, 135, 195, 0.2)'
              }}>
                <div className="grid-stats-responsive">
                  {[
                    {value: stats.experience, label: 'YEARS EXPERIENCE'},
                    {value: stats.projects, label: 'PROJECTS COMPLETED'},
                    {value: stats.partners, label: 'INDUSTRY PARTNERS'},
                    {value: stats.collabs, label: 'RESEARCH COLLABORATIONS'}
                  ].map((item, index) => (
                    <div key={index} className="stats-card">
                      <div className="heading-font stats-number">{item.value}+</div>
                      <div className="stats-label">{item.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Collaborations */}
      <ClientsCarousel />

      {/* Why Choose Us */}
      <section className="bg-background" style={{padding: '25px 0 100px'}}>
        <div style={{maxWidth: '1500px', margin: '0 auto', padding: '0 24px'}}>
          <div style={{textAlign: 'center', marginBottom: '80px'}}>
            <h2 className="heading-font why-title" style={{
              fontWeight: '700', 
              marginBottom: '-5px',
              color: '#FFFFFF'
            }}>
            <RedInit>W</RedInit>hy <RedInit>C</RedInit>hoose <RedInit>I</RedInit>FRL?
            </h2>
            <p className="why-subtitle" style={{color: '#B8D4D1', maxWidth: '900px', margin: '0 auto', lineHeight: '1.6'}}>
              Transforming ideas into technology solutions with excellence and innovation
            </p>
          </div>
          
          <div style={{display: 'flex', justifyContent: 'center'}}>
            <div style={{width: '100%', maxWidth: '1500px', background: 'var(--overlay-light-soft)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '20px', padding: 'clamp(16px,3vw,32px)', boxShadow: '0 12px 30px rgba(0,0,0,0.35)'}}>
              <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px', marginBottom: '20px'}}>
                    {[
                      {title: "Expertise", description: "Delivering clarity, accuracy, and consistency in every engineering solution", icon: "💡"},
                      {title: "Insight", description: "Decision-driven CFD that empowers confident technical choice", icon: "🌱"},
                      {title: "Partnership", description: "You get a team that supports the entire engineering process not just a single simulation", icon: "🌍"}
                    ].map((value, index) => (
                      <div key={index} style={{textAlign: 'center', padding: '24px'}}>
                        <div className="why-icon" style={{
                          width: 'clamp(64px, 12vw, 90px)', 
                          height: 'clamp(64px, 12vw, 90px)', 
                          backgroundColor: 'var(--color-button-primary)', 
                          borderRadius: '50%', 
                          display: 'flex', 
                          alignItems: 'center', 
                          justifyContent: 'center', 
                          margin: '0 auto 20px', 
                          boxShadow: '0 8px 24px rgba(60, 180, 225, 0.25)'
                        }}>
                          {value.icon}
                        </div>
                        <h3 className="heading-font why-card-heading" style={{
                          fontWeight: '700', 
                          color: '#FFFFFF', 
                          marginBottom: '12px'}}>
                          {value.title}
                        </h3>
                        <p className="why-card-text" style={{color: '#B8D4D1', lineHeight: '1.6', margin: '0 12px'}}>
                          {value.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
                
              </div>

              <div style={{borderTop: '1px solid rgba(255,255,255,0.08)', marginTop: '0px', paddingTop: '32px', textAlign: 'center'}}>
                <div className="commitment-grid" style={{
                maxWidth: '1500px',
                margin: '0 auto',
                display: 'grid',
                gridTemplateColumns: 'repeat(4, 1fr)',
                gap: '24px'
                  }}>
                  {[
                    {icon: '✓', title: 'Accurate Simulation'},
                    {icon: '💬', title: 'Clear Communication'},
                    {icon: '🛡️', title: 'Dependable Support'},
                    {icon: '🎯', title: 'Every Project, Every Time'}
                  ].map((item, i) => (
                    <div key={i} style={{
                      background: 'rgba(10,12,18,0.4)',
                      border: '1px solid rgba(255,255,255,0.08)',
                      borderRadius: '12px',
                      padding: '28px',
                      minHeight: '180px',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      <div className="commitment-icon" style={{
                        width: '80px',
                        height: '80px',
                        borderRadius: '50%',
                        backgroundColor: 'rgba(248,225,60,0.13)',
                        border: '2px solid #b60909',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginBottom: '16px'}}>{item.icon}</div>
                      <p className="body-font commitment-title" style={{
                        color: '#B8D4D1',
                        fontWeight: '400',
                        margin: 0, 
                        textAlign: 'center'
                        }}>
                        {item.title}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
      </section>
    </div>
  );
}

export default Home;
