import { Link } from 'react-router-dom';
import { IG_URL, FB_URL, TIKTOK_URL } from '../constants';

export default function Footer() {
  return (
    <div style={{ padding: '90px 5vw 50px', background: '#191A16', color: '#E9E7DF' }}>
      <div className="bb-grid-4" style={{ maxWidth: 1500, margin: '0 auto', display: 'grid', gridTemplateColumns: '1.3fr .7fr .7fr 1.2fr', gap: 44 }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <div style={{ fontFamily: "'Anton',sans-serif", fontSize: 26, textTransform: 'uppercase', lineHeight: 1 }}>Brandon Butler</div>
          <p style={{ margin: 0, fontSize: 17, lineHeight: 1.6, color: 'rgba(233,231,223,.65)' }}>Retired First Sergeant. Coach. Author. No shortcuts.</p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 12, fontSize: 15, color: 'rgba(233,231,223,.7)' }}>
          <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '.2em', textTransform: 'uppercase', color: '#8E9977', marginBottom: 6 }}>Pages</div>
          <Link to="/" style={{ color: 'inherit', cursor: 'pointer' }}>Home</Link>
          <Link to="/book" style={{ color: 'inherit', cursor: 'pointer' }}>The Book</Link>
          <Link to="/coaching" style={{ color: 'inherit', cursor: 'pointer' }}>Athlete Coaching</Link>
          <Link to="/podcast" style={{ color: 'inherit', cursor: 'pointer' }}>Podcast</Link>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 12, fontSize: 15, color: 'rgba(233,231,223,.7)' }}>
          <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '.2em', textTransform: 'uppercase', color: '#8E9977', marginBottom: 6 }}>Connect</div>
          <div>[Email]</div>
          <a href={IG_URL} target="_blank" rel="noopener noreferrer" style={{ color: 'inherit' }}>Instagram</a>
          <a href={FB_URL} target="_blank" rel="noopener noreferrer" style={{ color: 'inherit' }}>Facebook</a>
          <a href={TIKTOK_URL} target="_blank" rel="noopener noreferrer" style={{ color: 'inherit' }}>TikTok</a>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '.2em', textTransform: 'uppercase', color: '#8E9977' }}>Join the Mission</div>
          <p style={{ margin: 0, fontSize: 17, lineHeight: 1.6, color: 'rgba(233,231,223,.65)' }}>Newsletter: purpose, training, and what's next.</p>
          <div style={{ display: 'flex', border: '1px solid rgba(233,231,223,.3)' }}>
            <div style={{ flex: 1, padding: '16px 18px', fontSize: 15, color: 'rgba(233,231,223,.45)' }}>Your email</div>
            <button type="button" className="btn btn--sm" style={{ border: 'none', borderLeft: '1px solid rgba(233,231,223,.3)', color: '#E9E7DF' }}>
              Sign Up
            </button>
          </div>
        </div>
      </div>

      <div
        style={{
          maxWidth: 1500,
          margin: '60px auto 0',
          paddingTop: 24,
          borderTop: '1px solid rgba(233,231,223,.18)',
          display: 'flex',
          justifyContent: 'space-between',
          gap: 20,
          flexWrap: 'wrap',
          fontSize: 13,
          color: 'rgba(233,231,223,.5)',
        }}
      >
        <div>© [Year] Brandon Butler. All rights reserved.</div>
        <div>Believe. Build. Become.</div>
      </div>
    </div>
  );
}
