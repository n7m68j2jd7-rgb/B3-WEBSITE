import Reveal, { RiseLine } from '../components/Reveal';
import Btn from '../components/Btn';
import Footer from '../components/Footer';

const EPISODES = [1, 2, 3];

export default function Podcast() {
  return (
    <div>
      {/* HERO */}
      <div
        style={{
          position: 'relative',
          background: 'radial-gradient(110% 95% at 6% 2%,#2C3321 0%,#191A16 52%,#101109 100%)',
          color: '#E9E7DF',
          aspectRatio: '1920/1080',
          display: 'flex',
          alignItems: 'center',
          padding: '110px 5vw',
        }}
      >
        <img
          src="/assets/podcast-hero.jpg"
          alt="Podcast cover art"
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: 0 }}
        />
        <div
          style={{
            position: 'absolute',
            inset: 0,
            zIndex: 1,
            pointerEvents: 'none',
            background:
              'linear-gradient(100deg,#0C0D08 0%,rgba(12,13,8,.92) 30%,rgba(12,13,8,.55) 52%,rgba(12,13,8,.1) 72%,rgba(12,13,8,0) 85%)',
          }}
        />
        <div style={{ position: 'relative', zIndex: 2, display: 'flex', flexDirection: 'column', gap: 32, maxWidth: 640 }}>
          <Reveal kind="up" style={{ fontSize: 12, fontWeight: 700, letterSpacing: '.36em', textTransform: 'uppercase', color: '#C9A63A' }}>
            The Podcast
          </Reveal>
          <h1 style={{ margin: 0, fontFamily: "'Anton',sans-serif", fontSize: 'clamp(46px,7vw,124px)', lineHeight: 0.88, textTransform: 'uppercase', letterSpacing: '-.02em' }}>
            <RiseLine delay={0}>The Built to</RiseLine>
            <br />
            <RiseLine delay={100} style={{ backgroundImage: 'linear-gradient(96deg,#C9A63A 0%,#EBDC9A 55%,#C9A63A 100%)', backgroundClip: 'text', color: 'transparent' }}>
              Become Podcast
            </RiseLine>
          </h1>
          <Reveal as="p" kind="up" delay={190} style={{ margin: 0, maxWidth: '54ch', fontSize: 22, lineHeight: 1.48, letterSpacing: '-.005em', color: 'rgba(233,231,223,.78)' }}>
            Straight conversations about purpose, transition, and leadership — no filler, no fluff. Hosted by Coach Brandon Butler.
          </Reveal>
          <Reveal kind="up" delay={260} style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <button type="button" className="btn btn--sm">Listen on Spotify</button>
            <button type="button" className="btn btn--sm">Apple Podcasts</button>
            <button type="button" className="btn btn--sm">Watch on YouTube</button>
          </Reveal>
        </div>
      </div>

      {/* ABOUT THE SHOW */}
      <div style={{ padding: '120px 5vw', background: '#E9E7DF' }}>
        <div className="bb-grid-2" style={{ maxWidth: 1300, margin: '0 auto', display: 'grid', gridTemplateColumns: '.8fr 1.2fr', gap: 60 }}>
          <Reveal as="h2" kind="up" style={{ margin: 0, fontFamily: "'Anton',sans-serif", fontSize: 'clamp(38px,4.6vw,82px)', lineHeight: 0.92, textTransform: 'uppercase' }}>
            About the Show
          </Reveal>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
            <Reveal as="p" kind="up" delay={80} style={{ margin: 0, maxWidth: '62ch', fontSize: 20, lineHeight: 1.6, color: 'rgba(25,26,22,.78)' }}>
              Conversations with athletes, leaders, coaches, and people in the middle of a transition. Same Believe, Build, Become spirit as the book, in audio form.
            </Reveal>
            <Reveal as="p" kind="up" delay={140} style={{ margin: 0, maxWidth: '62ch', fontSize: 19, lineHeight: 1.65, color: 'rgba(25,26,22,.62)' }}>
              New episodes [weekly / biweekly]. Guests are athletes, coaches, veterans, and people mid-transition — same rule as everywhere else on this site: no script, no fluff.
            </Reveal>
          </div>
        </div>
      </div>

      {/* LATEST EPISODES */}
      <div style={{ padding: '120px 5vw', background: '#191A16', color: '#E9E7DF' }}>
        <div style={{ maxWidth: 1500, margin: '0 auto' }}>
          <Reveal as="h2" kind="up" style={{ margin: '0 0 50px', fontFamily: "'Anton',sans-serif", fontSize: 'clamp(38px,4.6vw,82px)', lineHeight: 0.94, textTransform: 'uppercase' }}>
            Latest Episodes
          </Reveal>
          <div className="bb-grid-3" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 2, background: 'rgba(233,231,223,.2)' }}>
            {EPISODES.map((n, i) => (
              <Reveal kind="up" delay={70 + i * 80} key={n} style={{ background: '#191A16', padding: '0 0 34px', display: 'flex', flexDirection: 'column' }}>
                <div style={{ position: 'relative', aspectRatio: '16 / 9', background: 'rgba(233,231,223,.08)' }} />
                <div style={{ padding: '28px 26px 0', display: 'flex', flexDirection: 'column', gap: 14 }}>
                  <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '.2em', textTransform: 'uppercase', color: '#8E9977' }}>
                    Episode {String(n).padStart(2, '0')} · [Run time]
                  </div>
                  <div style={{ fontFamily: "'Anton',sans-serif", fontSize: 26, lineHeight: 1.05, textTransform: 'uppercase' }}>[Episode Title]</div>
                  <p style={{ margin: 0, fontSize: 17, lineHeight: 1.55, color: 'rgba(233,231,223,.72)' }}>
                    [Guest name] on [one-line description of what the episode covers].
                  </p>
                  <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '.2em', textTransform: 'uppercase', color: '#8E9977', cursor: 'pointer' }}>Listen Now →</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>

      {/* WHAT'S COMING UP */}
      <div style={{ padding: '120px 5vw', background: '#E9E7DF' }}>
        <div style={{ maxWidth: 1500, margin: '0 auto' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: 30, flexWrap: 'wrap', marginBottom: 44 }}>
            <Reveal as="h2" kind="up" style={{ margin: 0, fontFamily: "'Anton',sans-serif", fontSize: 'clamp(38px,4.6vw,82px)', lineHeight: 0.94, textTransform: 'uppercase' }}>
              What's Coming Up
            </Reveal>
            <Reveal kind="up" delay={80}>
              <button type="button" className="btn btn--dark">Get Notified</button>
            </Reveal>
          </div>
          <div className="bb-grid-2" style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 2, background: 'rgba(25,26,22,.16)', borderTop: '2px solid #191A16' }}>
            <Reveal kind="up" delay={70} style={{ background: '#E9E7DF', padding: '30px 26px 34px', display: 'flex', flexDirection: 'column', gap: 16, minHeight: 280 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', gap: 12, alignItems: 'center' }}>
                <span style={{ padding: '6px 12px', background: '#191A16', color: '#E9E7DF', fontSize: 11, fontWeight: 700, letterSpacing: '.18em', textTransform: 'uppercase' }}>Podcast</span>
                <span style={{ fontSize: 12, letterSpacing: '.14em', textTransform: 'uppercase', color: 'rgba(25,26,22,.55)' }}>Coming Soon</span>
              </div>
              <div style={{ fontFamily: "'Anton',sans-serif", fontSize: 26, lineHeight: 1.05, textTransform: 'uppercase' }}>New Episode: [Guest Name]</div>
              <p style={{ margin: 0, fontSize: 17, lineHeight: 1.55, color: 'rgba(25,26,22,.7)' }}>Brandon sits down with [Guest] to talk [topic].</p>
              <div style={{ marginTop: 'auto', fontSize: 12, fontWeight: 700, letterSpacing: '.2em', textTransform: 'uppercase', color: '#4A5535', cursor: 'pointer' }}>Get Notified →</div>
            </Reveal>
            <Reveal kind="up" delay={140} style={{ background: '#E9E7DF', padding: '30px 26px 34px', display: 'flex', flexDirection: 'column', gap: 16, minHeight: 280 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', gap: 12, alignItems: 'center' }}>
                <span style={{ padding: '6px 12px', background: '#191A16', color: '#E9E7DF', fontSize: 11, fontWeight: 700, letterSpacing: '.18em', textTransform: 'uppercase' }}>Podcast</span>
                <span style={{ fontSize: 12, letterSpacing: '.14em', textTransform: 'uppercase', color: 'rgba(25,26,22,.55)' }}>Coming Soon</span>
              </div>
              <div style={{ fontFamily: "'Anton',sans-serif", fontSize: 26, lineHeight: 1.05, textTransform: 'uppercase' }}>Guest Reveal</div>
              <p style={{ margin: 0, fontSize: 17, lineHeight: 1.55, color: 'rgba(25,26,22,.7)' }}>[Tease the next guest before the episode drops.]</p>
              <div style={{ marginTop: 'auto', fontSize: 12, fontWeight: 700, letterSpacing: '.2em', textTransform: 'uppercase', color: '#4A5535', cursor: 'pointer' }}>Get Notified →</div>
            </Reveal>
          </div>
        </div>
      </div>

      {/* WHERE TO LISTEN */}
      <div style={{ padding: '110px 5vw', background: '#191A16', color: '#E9E7DF' }}>
        <div style={{ maxWidth: 1400, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 36 }}>
          <Reveal as="h2" kind="up" style={{ margin: 0, fontFamily: "'Anton',sans-serif", fontSize: 'clamp(30px,3.4vw,58px)', lineHeight: 0.98, textTransform: 'uppercase' }}>
            Where to Listen
          </Reveal>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))', gap: 2, background: 'rgba(233,231,223,.2)' }}>
            {['Spotify', 'Apple Podcasts', 'YouTube'].map((platform, i) => (
              <Reveal kind="up" delay={60 + i * 50} key={platform} style={{ background: '#191A16', padding: '34px 26px', fontSize: 20, fontWeight: 600, cursor: 'pointer' }}>
                {platform}
              </Reveal>
            ))}
          </div>
        </div>
      </div>

      {/* LISTENER REVIEWS */}
      <div style={{ padding: '120px 5vw', background: '#4A5535', color: '#E9E7DF' }}>
        <div style={{ maxWidth: 1400, margin: '0 auto' }}>
          <Reveal as="h2" kind="up" style={{ margin: '0 0 46px', fontFamily: "'Anton',sans-serif", fontSize: 'clamp(32px,3.8vw,64px)', lineHeight: 0.96, textTransform: 'uppercase' }}>
            Listener Reviews
          </Reveal>
          <div className="bb-grid-3" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 40 }}>
            {[70, 140, 210].map((delay) => (
              <Reveal kind="up" delay={delay} key={delay} style={{ borderTop: '1px solid rgba(233,231,223,.35)', paddingTop: 24, display: 'flex', flexDirection: 'column', gap: 16 }}>
                <p style={{ margin: 0, fontFamily: "'Instrument Serif',serif", fontSize: 25, lineHeight: 1.3 }}>"[Listener quote.]"</p>
                <div style={{ fontSize: 12, letterSpacing: '.18em', textTransform: 'uppercase', color: 'rgba(233,231,223,.7)' }}>[Listener]</div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>

      {/* NEWSLETTER */}
      <div style={{ padding: '120px 5vw', background: '#E9E7DF' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', textAlign: 'center', display: 'flex', flexDirection: 'column', gap: 26, alignItems: 'center' }}>
          <Reveal as="h2" kind="up" style={{ margin: 0, fontFamily: "'Anton',sans-serif", fontSize: 'clamp(36px,4.6vw,84px)', lineHeight: 0.94, textTransform: 'uppercase' }}>
            Never Miss an Episode
          </Reveal>
          <Reveal as="p" kind="up" delay={80} style={{ margin: 0, maxWidth: '56ch', fontSize: 19, lineHeight: 1.6, color: 'rgba(25,26,22,.72)' }}>
            Get new episodes, guest announcements, and behind-the-scenes updates straight to your inbox.
          </Reveal>
          <Reveal kind="up" delay={140} style={{ display: 'flex', width: '100%', maxWidth: 520, border: '1px solid rgba(25,26,22,.35)' }}>
            <div style={{ flex: 1, padding: '18px 20px', textAlign: 'left', fontSize: 16, color: 'rgba(25,26,22,.45)' }}>Your email</div>
            <button type="button" className="btn btn--sm btn--dark" style={{ border: 'none', borderLeft: '1px solid rgba(25,26,22,.35)' }}>
              Subscribe
            </button>
          </Reveal>
        </div>
      </div>

      {/* CLOSING CTA */}
      <div style={{ padding: '130px 5vw', background: 'radial-gradient(100% 120% at 50% 110%,#3A4527 0%,#191A16 55%,#101109 100%)', color: '#E9E7DF', textAlign: 'center' }}>
        <h2 style={{ margin: '0 auto', maxWidth: '22ch', fontFamily: "'Anton',sans-serif", fontSize: 'clamp(38px,5.6vw,104px)', lineHeight: 0.9, textTransform: 'uppercase' }}>
          <RiseLine delay={0}>New conversations.</RiseLine>{' '}
          <RiseLine delay={100} style={{ backgroundImage: 'linear-gradient(96deg,#C9A63A 0%,#EBDC9A 55%,#C9A63A 100%)', backgroundClip: 'text', color: 'transparent' }}>
            Same mission.
          </RiseLine>
        </h2>
        <Reveal kind="up" delay={190} style={{ marginTop: 40, display: 'inline-block' }}>
          <button type="button" className="btn">Subscribe Now</button>
        </Reveal>
      </div>

      <Footer />
    </div>
  );
}
