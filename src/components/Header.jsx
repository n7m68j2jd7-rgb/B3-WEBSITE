import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { IG_URL } from '../constants';

const NAV_LINKS = [
  { to: '/', label: 'Home' },
  { to: '/book', label: 'The Book' },
  { to: '/coaching', label: 'Athlete Coaching' },
  { to: '/podcast', label: 'Podcast' },
];

export default function Header() {
  const [navOpen, setNavOpen] = useState(false);
  const navigate = useNavigate();

  const goHome = () => {
    setNavOpen(false);
    navigate('/');
    window.scrollTo(0, 0);
  };

  const closeNav = () => setNavOpen(false);

  return (
    <>
      <div
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 50,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 24,
          padding: '16px 5vw',
          background: 'rgba(233,231,223,.92)',
          backdropFilter: 'blur(10px)',
          borderBottom: '1px solid rgba(25,26,22,.14)',
          boxShadow: '0 1px 0 rgba(201,166,58,.5)',
        }}
      >
        <div onClick={goHome} style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 10 }}>
          <img src="/assets/ocramed-logo.png" alt="B3 logo" style={{ height: 92, width: 'auto', display: 'block' }} />
        </div>

        <div className="bb-nav-desktop" style={{ display: 'flex', alignItems: 'center', gap: 2, flexWrap: 'nowrap', minWidth: 0 }}>
          {NAV_LINKS.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={closeNav}
              style={{
                cursor: 'pointer',
                padding: '10px clamp(6px,.9vw,14px)',
                fontSize: 12,
                fontWeight: 800,
                letterSpacing: '.16em',
                textTransform: 'uppercase',
                whiteSpace: 'nowrap',
                color: 'inherit',
              }}
            >
              {link.label}
            </Link>
          ))}
          <a
            href={IG_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--dark btn--xs"
            style={{ marginLeft: 8 }}
          >
            Work With Brandon
          </a>
        </div>

        <div
          className="bb-nav-burger"
          onClick={() => setNavOpen((v) => !v)}
          style={{ alignItems: 'center', justifyContent: 'center', width: 38, height: 38, cursor: 'pointer', flex: '0 0 auto', color: '#191A16' }}
        >
          {navOpen ? (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <line x1="5" y1="5" x2="19" y2="19" />
              <line x1="19" y1="5" x2="5" y2="19" />
            </svg>
          ) : (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <line x1="4" y1="7" x2="20" y2="7" />
              <line x1="4" y1="12" x2="20" y2="12" />
              <line x1="4" y1="17" x2="20" y2="17" />
            </svg>
          )}
        </div>
      </div>

      {navOpen && (
        <div
          style={{
            position: 'sticky',
            top: 70,
            zIndex: 49,
            display: 'flex',
            flexDirection: 'column',
            background: '#E9E7DF',
            borderBottom: '1px solid rgba(25,26,22,.14)',
            boxShadow: '0 12px 24px rgba(16,17,9,.12)',
          }}
        >
          {NAV_LINKS.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={closeNav}
              style={{
                cursor: 'pointer',
                padding: '18px 5vw',
                fontSize: 13,
                fontWeight: 800,
                letterSpacing: '.16em',
                textTransform: 'uppercase',
                borderBottom: '1px solid rgba(25,26,22,.1)',
                color: 'inherit',
              }}
            >
              {link.label}
            </Link>
          ))}
          <a
            href={IG_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--dark"
            style={{ margin: '16px 5vw 20px', textAlign: 'center' }}
          >
            Work With Brandon
          </a>
        </div>
      )}
    </>
  );
}
