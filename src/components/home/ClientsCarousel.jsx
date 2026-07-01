import React, { useRef, useEffect, useState } from 'react';
import gmshLogo from '../../assets/gmsh.png';
import iitmLogo from '../../assets/logo20iitm.png';
import lammpsLogo from '../../assets/lammp.gif';
import makerVillageLogo from '../../assets/makerVillage.png';
import openFoamLogo from '../../assets/openfoam-logo.png';
import pythonLogo from '../../assets/python-logo.png';
import rathiAerospaceLogo from '../../assets/rathiaerospace.webp';
import salomeLogo from '../../assets/salome_text_alpha_bord_blanc.png';
import startupIndiaLogo from '../../assets/sui.png';
import su2Logo from '../../assets/logoSU2.png';
import tieraLogo from '../../assets/tyra.png';
import tridentechLogo from '../../assets/tiden.svg';

const RedInit = ({ children }) => (
  <span className="brand-red">{children}</span>
);

const clients = [
  { href: 'https://www.openfoam.com/', img: openFoamLogo, alt: 'OpenFOAM' },
  { href: 'https://www.lammps.org/', img: lammpsLogo, alt: 'LAMMPS' },
  { href: 'https://www.salome-platform.org/', img: salomeLogo, alt: 'Salome' },
  { href: 'https://www.python.org/', img: pythonLogo, alt: 'Python' },
  { href: 'https://su2code.github.io/', img: su2Logo, alt: 'SU2' },
  { href: 'https://gmsh.info/', img: gmshLogo, alt: 'Gmsh' },
  { href: 'https://www.iitm.ac.in/', img: iitmLogo, alt: 'IITM' },
  { href: 'https://www.tieraonline.in/', img: tieraLogo, alt: 'Tiera' },
  { href: 'https://www.rathiaerospace.in/', img: rathiAerospaceLogo, alt: 'Rathiaerospace' },
  { href: 'https://www.tridentech.in/', img: tridentechLogo, alt: 'Tridentech' },
  { href: 'https://www.makervillage.in/', img: makerVillageLogo, alt: 'Maker Village' },
  { href: 'https://www.startupindia.gov.in/', img: startupIndiaLogo, alt: 'Start Up India' }
];

export default function ClientsCarousel() {
  const containerRef = useRef(null);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const prefersReduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return; // don't autoplay for reduced motion

    const container = containerRef.current;
    if (!container) return;

    // ensure we start somewhere in the first half for seamless looping
    if (container.scrollLeft === 0) container.scrollLeft = 1;

    let rafId = null;
    let last = null;
    const speed = 0.06; // px per ms

    function step(ts) {
      if (last == null) last = ts;
      const delta = ts - last;
      last = ts;

      if (!paused) {
        container.scrollLeft += speed * delta;

        // when we've scrolled past half (we duplicated items), loop back
        const half = container.scrollWidth / 2;
        if (container.scrollLeft >= half) {
          container.scrollLeft = container.scrollLeft - half;
        }
      }

      rafId = requestAnimationFrame(step);
    }

    rafId = requestAnimationFrame(step);

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [paused]);

  return (
    <section aria-label="Our Collaborations" style={{padding: '28px 0 42px', background: 'linear-gradient(130deg, #071725 0%, #0f3854 50%, #287da8 100%)'}}>
      <div style={{maxWidth: '1500px', margin: '0 auto', padding: '0 24px'}}>
        <h2 className="heading-font about-title" style={{
          color: '#FFFFFF', 
          marginBottom: '24px', 
          fontWeight: 700,
          lineHeight: '1.1'
        }}>
        <RedInit>O</RedInit>ur <RedInit>C</RedInit>ollaborations
        </h2>
        <div
          ref={containerRef}
          style={{overflowX: 'auto'}}
          className="clients-slider"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocus={() => setPaused(true)}
          onBlur={() => setPaused(false)}
        >
          {/* hide native scrollbar but keep scrollable */}
          <style>{`.clients-slider{ -ms-overflow-style: none; scrollbar-width: none; }
            .clients-slider::-webkit-scrollbar{ display: none; }
            .clients-track{ display:flex; align-items:center; padding:16px 8px; }
            .clients-track a{ flex:0 0 auto; width:160px; margin-right:36px; display:flex; align-items:center; justify-content:center }
            .clients-track img{ max-width:100%; height:64px; object-fit:contain; display:block }
            .clients-track a:hover img { transform: scale(1.08); transition: transform 0.25s ease }
          `}</style>

          <div className="clients-track">
            {clients.concat(clients).map((c, i) => (
              <a key={i} href={c.href} target="_blank" rel="noopener noreferrer" aria-label={c.alt}
                style={{
                  transition: 'all 0.3s ease',
                  opacity: 1,
                  transform: 'scale(1)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.opacity = '0.8';
                  e.currentTarget.style.transform = 'scale(1.1)';
                  e.currentTarget.style.filter = 'drop-shadow(0 8px 16px rgba(45, 135, 195, 0.3))';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.opacity = '1';
                  e.currentTarget.style.transform = 'scale(1)';
                  e.currentTarget.style.filter = 'drop-shadow(none)';
                }}>
                <img src={c.img} alt={c.alt} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
