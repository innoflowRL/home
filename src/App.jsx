import React, { useState, useEffect, useRef, Suspense, lazy, useCallback, useMemo } from 'react';
import { HashRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import ScrollToTop from './components/common/ScrollToTop';
import logo3 from './assets/logo3.png';

const MOBILE_NAV_BREAKPOINT = 1024;

// Lazy load page components for code splitting
const Home = lazy(() => import('./pages/Home'));
const Services = lazy(() => import('./pages/Services'));
const Projects = lazy(() => import('./pages/Projects'));
const ProjectsOngoing = lazy(() => import('./pages/ProjectsOngoing'));
const ProjectsCompleted = lazy(() => import('./pages/ProjectsCompleted'));
const Team = lazy(() => import('./pages/Team'));
const Contact = lazy(() => import('./pages/Contact'));

// Loading fallback component
const PageLoader = () => (
  <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '400px', color: '#2d87c3'}}>
    <div style={{textAlign: 'center'}}>
      <div style={{width: '40px', height: '40px', margin: '0 auto 16px', border: '3px solid rgba(45, 135, 195, 0.2)', borderTop: '3px solid #2d87c3', borderRadius: '50%', animation: 'spin 1s linear infinite'}} />
      <p style={{color: '#edf6fb'}}>Loading...</p>
      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </div>
  </div>
);

// Memoized Header component for performance
const Header = React.memo(function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < MOBILE_NAV_BREAKPOINT);
  const location = useLocation();
  const menuButtonRef = useRef(null);
  const mobileNavRef = useRef(null);

  // Optimize scroll handler with useCallback
  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 50);
  }, []);

  const handleResize = useCallback(() => {
    setIsMobile(window.innerWidth < MOBILE_NAV_BREAKPOINT);
    if (window.innerWidth >= MOBILE_NAV_BREAKPOINT) setMobileMenuOpen(false);
  }, []);

  useEffect(() => {
    handleResize();
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, [handleScroll, handleResize]);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  // Focus trap for accessibility
  useEffect(() => {
    if (!mobileMenuOpen) return;

    const nav = mobileNavRef.current;
    const focusableSelector = 'a[href], button, textarea, input, select, [tabindex]:not([tabindex="-1"])';
    const focusable = nav ? Array.from(nav.querySelectorAll(focusableSelector)).filter(el => !el.hasAttribute('disabled')) : [];
    const firstFocusable = focusable[0];
    const lastFocusable = focusable[focusable.length - 1];
    const prevActive = document.activeElement;

    if (firstFocusable) firstFocusable.focus();

    const onKeyDown = (e) => {
      if (e.key === 'Escape') {
        setMobileMenuOpen(false);
        menuButtonRef.current?.focus();
      }
      if (e.key === 'Tab') {
        if (focusable.length === 0) {
          e.preventDefault();
          return;
        }
        if (e.shiftKey) {
          if (document.activeElement === firstFocusable) {
            e.preventDefault();
            lastFocusable.focus();
          }
        } else {
          if (document.activeElement === lastFocusable) {
            e.preventDefault();
            firstFocusable.focus();
          }
        }
      }
    };

    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      try { prevActive?.focus(); } catch (e) {}
    };
  }, [mobileMenuOpen]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileMenuOpen]);

  const headerStyle = useMemo(() => ({
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
    backgroundColor: 'rgba(7, 23, 37, 0.82)',
    backdropFilter: scrolled ? 'blur(12px)' : 'none',
    boxShadow: scrolled ? '0 2px 20px rgba(0, 0, 0, 0.18)' : 'none',
    padding: scrolled ? '12px 0' : '16px 0',
    transition: 'all 0.3s ease'
  }), [scrolled]);

  const isActive = useCallback((path) => location.pathname === path, [location.pathname]);

  const navLinkStyle = useCallback((active) => ({
    fontFamily: 'var(--font-heading)',
    color: active ? '#e74c3c' : '#edf6fb',
    textDecoration: 'none',
    fontWeight: active ? '700' : '500',
    transition: 'all 0.3s ease',
    whiteSpace: 'nowrap',
    paddingBottom: '4px',
    borderBottom: active ? '2px solid #e74c3c' : 'none'
  }), []);

  const handleNavLinkHover = useCallback((e, active) => {
    if (!active) {
      e.currentTarget.style.color = '#e74c3c';
      e.currentTarget.style.borderBottom = '2px solid rgba(231, 76, 60, 0.5)';
    }
  }, []);

  const handleNavLinkLeave = useCallback((e, active) => {
    if (!active) {
      e.currentTarget.style.color = '#FFFFFF';
      e.currentTarget.style.borderBottom = 'none';
    }
  }, []);

  const handleLogoHover = useCallback((e) => {
    const logo = e.currentTarget.querySelector('img');
    if (logo) {
      logo.style.transform = 'scale(1.1)';
      logo.style.boxShadow = '0 8px 20px rgba(60, 180, 225, 0.4)';
    }
  }, []);

  const handleLogoLeave = useCallback((e) => {
    const logo = e.currentTarget.querySelector('img');
    if (logo) {
      logo.style.transform = 'scale(1)';
      logo.style.boxShadow = 'none';
    }
  }, []);

  const handleButtonHover = useCallback((e) => {
    e.currentTarget.style.backgroundColor = '#2a9ac7';
    e.currentTarget.style.boxShadow = '0 8px 20px rgba(60, 180, 225, 0.5)';
    e.currentTarget.style.transform = 'translateY(-2px)';
  }, []);

  const handleButtonLeave = useCallback((e) => {
    e.currentTarget.style.backgroundColor = '#3cb4e1';
    e.currentTarget.style.boxShadow = '0 4px 12px rgba(60, 180, 225, 0.3)';
    e.currentTarget.style.transform = 'translateY(0)';
  }, []);


  return (
    <header style={headerStyle}>
      <div style={{maxWidth: '1500px', margin: '0 auto', padding: '0 16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
        <Link to="/" style={{display: 'flex', alignItems: 'center', gap: '8px', textDecoration: 'none', minWidth: 0, transition: 'all 0.3s ease'}}
          onMouseEnter={handleLogoHover}
          onMouseLeave={handleLogoLeave}>
          <img src={logo3} alt="IFRL Logo" style={{width: '55px', height: '55px', borderRadius: '8px', flexShrink: 0, transition: 'all 0.3s ease', objectFit: 'contain'}} />
          <div style={{display: isMobile ? 'none' : 'block', minWidth: 0}}>
            <h1 style={{color: '#FFFFFF', fontWeight: '700', margin: 0, letterSpacing: '0.5px'}}>
              IFRL
            </h1>
          </div>
        </Link>

        {!isMobile ? (
          <nav style={{display: 'flex', alignItems: 'center', gap: '40px', flex: 1, justifyContent: 'flex-end'}}>
            <div style={{display: 'flex', gap: '32px'}}>
              {['/', '/services', '/projects', '/team'].map(path => {
                const labels = {'/' : 'Home', '/services': 'Services', '/projects': 'Projects', '/team': 'Team'};
                const active = isActive(path);
                return (
                  <Link key={path} to={path} style={navLinkStyle(active)}
                    onMouseEnter={(e) => handleNavLinkHover(e, active)}
                    onMouseLeave={(e) => handleNavLinkLeave(e, active)}>
                    {labels[path]}
                  </Link>
                );
              })}
            </div>
            <Link to="/contact" style={{
              fontFamily: 'var(--font-heading)',
              padding: '10px 20px', 
              backgroundColor: '#3cb4e1', 
              color: '#FFFFFF', 
              fontWeight: '600', 
              borderRadius: '8px', 
              textDecoration: 'none',
              transition: 'all 0.3s ease',
              boxShadow: '0 4px 12px rgba(60, 180, 225, 0.3)',
              whiteSpace: 'nowrap',
              flexShrink: 0,
              cursor: 'pointer'
            }}
            onMouseEnter={handleButtonHover}
            onMouseLeave={handleButtonLeave}>
              Enquire Now
            </Link>
          </nav>
        ) : (
          <button
            ref={menuButtonRef}
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              background: 'none',
              border: 'none',
              color: '#FFFFFF',
              cursor: 'pointer',
              padding: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
            ☰
          </button>
        )}
      </div>

      {isMobile && mobileMenuOpen && (
        <>
          <div onClick={() => setMobileMenuOpen(false)} style={{position: 'fixed', inset: 0, backgroundColor: 'rgba(0,0,0,0.35)', zIndex: 1001}} aria-hidden="true" />
          <nav id="mobile-navigation" ref={mobileNavRef} style={{
          position: 'absolute',
          top: '100%',
          left: 0,
          right: 0,
          backgroundColor: 'rgba(15, 56, 84, 0.98)',
          backdropFilter: 'blur(10px)',
          display: 'flex',
          flexDirection: 'column',
          padding: '16px',
          gap: '12px',
          borderTop: '1px solid rgba(255,255,255,0.1)',
          zIndex: 1002
        }} role="menu" aria-label="Mobile navigation">
            {['/', '/services', '/projects', '/team', '/contact'].map(path => {
              const labels = {'/' : 'Home', '/services': 'Services', '/projects': 'Projects', '/team': 'Team', '/contact': 'Contact'};
              const active = isActive(path);
              return (
                <Link key={path} to={path} style={{
                  fontFamily: 'var(--font-heading)',
                  color: '#edf6fb',
                  textDecoration: 'none',
                  fontWeight: active ? '700' : '500',
                  padding: '10px 16px',
                  borderRadius: '6px',
                  backgroundColor: active ? 'rgba(231, 76, 60, 0.12)' : 'transparent',
                  transition: 'all 0.3s ease',
                  display: 'block'
                }}>
                  {path === '/contact' ? 'Enquire Now' : labels[path]}
                </Link>
              );
            })}
          </nav>
        </>
      )}
    </header>
  );
});

// Memoized Footer component for performance
const Footer = React.memo(function Footer() {
  return (
    <footer style={{
      background: '#071725',
      color: '#edf6fb',
      padding: '34px 0 24px',
      borderTop: '1px solid rgba(255,255,255,0.08)',
      fontFamily: 'var(--font-body)'
    }}>
      <div style={{maxWidth: '1500px', margin: '0 auto', padding: '0 24px'}}>
        <div className="site-footer-main" style={{display: 'grid', gridTemplateColumns: '1fr auto', gap: '32px', alignItems: 'center'}}>
          <div style={{display: 'flex', alignItems: 'center', gap: '14px'}}>
            <img src={logo3} alt="IFRL Logo" style={{width: '69px', height: '69px', borderRadius: '8px', objectFit: 'contain'}} loading="lazy" />
            <div>
              <h3 className="heading-font" style={{fontWeight: '700', margin: 0, color: '#ffffff'}}>IFRL</h3>
              <p style={{color: '#b8d4e1', margin: 0, fontFamily: 'var(--font-body)', fontWeight: 500}}>
                Transforming ideas into technology solutions with excellence.
              </p>
            </div>
          </div>

          <div style={{
            textAlign: 'right',
            color: '#b8d4e1',
            lineHeight: 1.55,
            fontFamily: 'var(--font-body)',
            fontWeight: 500
          }}>
            <p style={{margin: 0}}>
              Registered Address: Manelil, Victory lane, Marakkar Road, Edappally, Kochi, Kerala-682024, India
            </p>
            <p style={{margin: '4px 0 0'}}>
              <a href="tel:+918438608164" style={{color: '#edf6fb', textDecoration: 'none', fontWeight: 500}}>+91 84386 08164</a>
              <span style={{color: 'rgba(255,255,255,0.35)', margin: '0 10px'}}>|</span>
              <a href="tel:+919995300599" style={{color: '#edf6fb', textDecoration: 'none', fontWeight: 500}}>+91 99953 00599</a>
              <span style={{color: 'rgba(255,255,255,0.35)', margin: '0 10px'}}>|</span>
              <a href="mailto:contact@innoflow.in" style={{color: '#edf6fb', textDecoration: 'none', fontWeight: 500}}>contact@innoflow.in</a>
              <span style={{color: 'rgba(255,255,255,0.35)', margin: '0 10px'}}>|</span>
              <a
                href="https://www.linkedin.com/in/ifrl-pvt-ltd-383bb8220"
                target="_blank"
                rel="noopener noreferrer"
                style={{color: '#edf6fb', textDecoration: 'none', fontWeight: 500}}
              >
                LinkedIn
              </a>
            </p>
          </div>
        </div>

        <div style={{
          borderTop: '1px solid rgba(255,255,255,0.08)',
          marginTop: '24px',
          paddingTop: '18px',
          color: '#90a7bb',
          textAlign: 'center'
        }}>
          <p className="text-small" style={{margin: 0}}>
            © Copyright IFRL. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
});

// Main App component with code splitting and lazy loading
function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="app-shell" style={{color: '#2d87c3'}}>
        <Header />
        <div className="page-transition" style={{color: '#d7eaf6'}}>
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<Services />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/projects/ongoing" element={<ProjectsOngoing />} />
              <Route path="/projects/completed" element={<ProjectsCompleted />} />
              <Route path="/team" element={<Team />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </Suspense>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
