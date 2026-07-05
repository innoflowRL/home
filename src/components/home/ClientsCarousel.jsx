import React, { useEffect, useState } from 'react';
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
  const [paused, setPaused] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)');
    if (!mediaQuery) return;

    const update = () => setReducedMotion(mediaQuery.matches);
    update();
    mediaQuery.addEventListener?.('change', update);

    return () => mediaQuery.removeEventListener?.('change', update);
  }, []);

  return (
    <section aria-label="Our Collaborations" style={{ padding: '28px 0 42px', background: 'linear-gradient(130deg, #071725 0%, #0f3854 50%, #287da8 100%)' }}>
      <div style={{ maxWidth: '1500px', margin: '0 auto', padding: '0 24px' }}>
        <h2 className="heading-font about-title" style={{
          color: '#FFFFFF',
          marginBottom: '24px',
          fontWeight: 700,
          lineHeight: '1.1'
        }}>
          <RedInit>O</RedInit>ur <RedInit>C</RedInit>ollaborations
        </h2>
        <div className="clients-slider">
          <style>{`
            .clients-slider {
              overflow: hidden;
              position: relative;
              mask-image: linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%);
              -webkit-mask-image: linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%);
            }
            .clients-track {
              display: flex;
              align-items: center;
              width: max-content;
              min-width: max-content;
              gap: 36px;
              padding: 16px 8px;
              will-change: transform;
              animation: ${reducedMotion ? 'none' : 'clients-marquee 30s linear infinite'};
              animation-play-state: ${reducedMotion ? 'paused' : 'running'};
            }
            .clients-track a {
              flex: 0 0 auto;
              width: 160px;
              display: flex;
              align-items: center;
              justify-content: center;
            }
            .clients-track img {
              max-width: 100%;
              height: 64px;
              object-fit: contain;
              display: block;
            }
            .clients-track a:hover img {
              transform: scale(1.08);
              transition: transform 0.25s ease;
            }
            @keyframes clients-marquee {
              from { transform: translateX(0); }
              to { transform: translateX(-50%); }
            }
          `}</style>

          <div className="clients-track">
            {[...clients, ...clients].map((c, i) => (
              <a
                key={`${c.alt}-${i}`}
                href={c.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={c.alt}
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
                }}
              >
                <img src={c.img} alt={c.alt} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
