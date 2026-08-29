import { Link } from 'react-router-dom';
import Reveal, { RiseLine } from '../components/Reveal';
import Btn from '../components/Btn';
import Footer from '../components/Footer';
import { IG_URL } from '../constants';

const MARQUEE_WORDS = ['Purpose', 'Discipline', 'Legacy', 'Believe. Build. Become.'];

function Marquee() {
  const items = [...MARQUEE_WORDS, ...MARQUEE_WORDS];
  return (
    <div style={{ position: 'relative', zIndex: 2, borderTop: '1px solid rgba(233,231,223,.16)', overflow: 'hidden', padding: '16px 0' }}>
      <div
        style={{
          display: 'flex',
          width: 'max-content',
          animation: 'bbMarquee 34s linear infinite',
          fontFamily: "'Anton',sans-serif",
          fontSize: 22,
          textTransform: 'uppercase',
          letterSpacing: '.06em',
          color: 'rgba(233,231,223,.5)',
        }}
      >
        {items.map((word, i) => (
          <span key={i} style={{ display: 'contents' }}>
            <span style={{ paddingRight: 40 }}>{word}</span>
            <span style={{ paddingRight: 40, color: '#8E9977' }}>·</span>
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div>
      {/* HERO */}
      <div style={{ position: 'relative', color: '#E9E7DF', aspectRatio: '1920/1080', display: 'flex', flexDirection: 'column' }}>
        <img
          src="/assets/home-hero.jpg"
          alt="Brandon Butler speaking at a podium"
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: 0 }}
        />
        <div
          style={{
            position: 'absolute',
            inset: 0,
            zIndex: 1,
            pointerEvents: 'none',
            background:
              'linear-gradient(100deg,#0C0D08 0%,rgba(12,13,8,.86) 28%,rgba(12,13,8,.5) 50%,rgba(12,13,8,.15) 72%,rgba(12,13,8,0) 90%)',
          }}
        />
        <div style={{ position: 'relative', zIndex: 2, flex: 1, minWidth: 0, padding: '96px 5vw 72px', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 34 }}>
          <Reveal kind="up" style={{ fontSize: 12, fontWeight: 700, letterSpacing: '.36em', textTransform: 'uppercase', color: '#C9A63A' }}>
            Coach · Mentor · Author
          </Reveal>
          <h1
            style={{
              margin: 0,
              fontFamily: "'Anton',sans-serif",
              fontSize: 'clamp(48px,7.4vw,132px)',
              lineHeight: 0.88,
              textTransform: 'uppercase',
              letterSpacing: '-.02em',
              textWrap: 'balance',
            }}
          >
            <RiseLine delay={0}>Built</RiseLine> <RiseLine delay={70}>To</RiseLine>{' '}
            <RiseLine delay={140} style={{ backgroundImage: 'linear-gradient(96deg,#C9A63A 0%,#EBDC9A 55%,#C9A63A 100%)', backgroundClip: 'text', color: 'transparent' }}>
              Become
            </RiseLine>
            <br />
            <RiseLine delay={230}>Who You Were</RiseLine>
            <br />
            <RiseLine delay={320}>Made To Be.</RiseLine>
          </h1>
          <Reveal as="p" kind="up" delay={380} style={{ margin: 0, maxWidth: '52ch', fontSize: 22, lineHeight: 1.48, letterSpacing: '-.005em', color: 'rgba(233,231,223,.78)' }}>
            Retired First Sergeant. Coach. Author. I train athletes, mentor people through hard transitions, and hold everyone — including myself — to a standard.
          </Reveal>
          <Reveal kind="up" delay={460} style={{ display: 'flex', flexWrap: 'wrap', gap: 14 }}>
            <button type="button" className="btn">Read My Story</button>
            <Btn href={IG_URL}>Book Brandon</Btn>
          </Reveal>
        </div>
        <Marquee />
      </div>

      {/* WHY I DO THIS */}
      <div style={{ padding: '120px 5vw', background: '#E9E7DF' }}>
        <div className="bb-grid-2" style={{ display: 'grid', gridTemplateColumns: '.8fr 1.2fr', gap: 60, alignItems: 'start', maxWidth: 1500, margin: '0 auto' }}>
          <div>
            <Reveal kind="up" style={{ fontSize: 12, fontWeight: 800, letterSpacing: '.36em', textTransform: 'uppercase', color: '#5C6B36' }}>
              The Reason
            </Reveal>
            <Reveal
              as="h2"
              kind="up"
              delay={60}
              style={{ margin: '14px 0 0', fontFamily: "'Anton',sans-serif", fontSize: 'clamp(40px,5vw,88px)', lineHeight: 0.92, textTransform: 'uppercase', letterSpacing: '-.02em' }}
            >
              Why I<br />Do This
            </Reveal>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
            <Reveal as="p" kind="up" delay={120} style={{ margin: 0, fontFamily: "'Instrument Serif',serif", fontSize: 'clamp(26px,2.7vw,44px)', lineHeight: 1.22, letterSpacing: '-.01em' }}>
              "I spent my career finding out what people are made of under pressure. Now I use that to help them find their purpose, do the work, and build something that can take a hit and keep standing."
            </Reveal>
            <Reveal as="p" kind="up" delay={200} style={{ margin: 0, maxWidth: '62ch', fontSize: 19, lineHeight: 1.65, color: 'rgba(25,26,22,.72)' }}>
              Purpose isn't a mood, it's a decision. I made mine in uniform. I make it again every day as a coach and a father. This site exists because I think you can make the same call.
            </Reveal>
            <Reveal
              kind="up"
              delay={260}
              as="a"
              href="#bb-mission"
              style={{ display: 'inline-flex', alignItems: 'center', gap: 12, fontSize: 13, fontWeight: 700, letterSpacing: '.2em', textTransform: 'uppercase', color: '#4A5535', cursor: 'pointer' }}
            >
              Read the full mission statement <span style={{ width: 34, height: 1, background: '#4A5535', display: 'inline-block' }} />
            </Reveal>
          </div>
        </div>
      </div>

      {/* MISSION & CREED */}
      <div id="bb-mission" style={{ padding: '130px 5vw', background: '#191A16', color: '#E9E7DF' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 40 }}>
          <Reveal kind="up" style={{ fontSize: 12, fontWeight: 700, letterSpacing: '.36em', textTransform: 'uppercase', color: '#C9A63A' }}>
            My mission and creed
          </Reveal>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            <Reveal kind="up" style={{ fontSize: 12, fontWeight: 700, letterSpacing: '.3em', textTransform: 'uppercase', color: '#8E9977' }}>
              Personal creed:
            </Reveal>
            <Reveal as="p" kind="up" delay={60} style={{ margin: 0, fontFamily: "'Instrument Serif',serif", fontSize: 'clamp(24px,2.4vw,36px)', lineHeight: 1.32 }}>
              I exist to build transformational relationships that help people discover their purpose, become their best, and create stronger families, leaders, and communities.
            </Reveal>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            <Reveal kind="up" style={{ fontSize: 12, fontWeight: 700, letterSpacing: '.3em', textTransform: 'uppercase', color: '#8E9977' }}>
              Brandon Butler's Personal Mission Statement:
            </Reveal>
            <Reveal as="p" kind="up" delay={60} style={{ margin: 0, fontSize: 19, lineHeight: 1.7, color: 'rgba(233,231,223,.85)' }}>
              I am called to live with purpose by using my God-given gifts to build transformational relationships through every opportunity, platform, and season of my life. Whether through coaching, mentoring, leadership, business, writing, speaking, or serving my community, my mission remains the same: to help people discover their purpose, navigate transition, and become the best version of themselves.
            </Reveal>
            <Reveal as="p" kind="up" delay={120} style={{ margin: 0, fontSize: 19, lineHeight: 1.7, color: 'rgba(233,231,223,.85)' }}>
              I will intentionally invest my time, knowledge, leadership, and influence into people, families, communities, and organizations where I can create lasting transformation. I measure success not by accolades, titles, or income, but by the lives that are changed, the leaders that are developed, and the relationships that are strengthened because I chose to serve.
            </Reveal>
            <Reveal as="p" kind="up" delay={180} style={{ margin: 0, fontSize: 19, lineHeight: 1.7, color: 'rgba(233,231,223,.85)' }}>
              I will build a legacy that begins at home by loving, leading, protecting, and providing for my family while creating opportunities that impact future generations. I will pursue financial stability not as an end in itself, but as the freedom to live my purpose, serve others with excellence, and be fully present for the people who matter most.
            </Reveal>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
            <Reveal as="p" kind="up" style={{ margin: 0, fontSize: 19, lineHeight: 1.7, color: 'rgba(233,231,223,.85)' }}>
              Every decision I make will be filtered through three questions:
            </Reveal>
            <div style={{ display: 'flex', flexDirection: 'column', borderTop: '1px solid rgba(233,231,223,.2)' }}>
              <Reveal kind="up" delay={60} style={{ padding: '22px 0', borderBottom: '1px solid rgba(233,231,223,.2)', fontSize: 20, lineHeight: 1.4 }}>
                Does this align with my purpose?
              </Reveal>
              <Reveal kind="up" delay={120} style={{ padding: '22px 0', borderBottom: '1px solid rgba(233,231,223,.2)', fontSize: 20, lineHeight: 1.4 }}>
                Does this allow me to serve others well?
              </Reveal>
              <Reveal kind="up" delay={180} style={{ padding: '22px 0', borderBottom: '1px solid rgba(233,231,223,.2)', fontSize: 20, lineHeight: 1.4 }}>
                Does this strengthen my family and the legacy I am building?
              </Reveal>
            </div>
          </div>

          <div style={{ marginTop: 10, paddingTop: 36, borderTop: '1px solid rgba(233,231,223,.2)', display: 'flex', flexDirection: 'column', gap: 16 }}>
            <Reveal kind="up" style={{ fontSize: 12, fontWeight: 700, letterSpacing: '.3em', textTransform: 'uppercase', color: '#8E9977' }}>
              All in compass:
            </Reveal>
            <Reveal as="p" kind="up" delay={60} style={{ margin: 0, fontFamily: "'Instrument Serif',serif", fontSize: 'clamp(22px,2.2vw,32px)', lineHeight: 1.32, color: '#E9E7DF' }}>
              My goal is not simply to achieve success, but to create transformational relationships that inspire purpose, develop leaders, strengthen families, and leave a legacy that outlives me.
            </Reveal>
          </div>
        </div>
      </div>

      {/* THREE PILLARS */}
      <div style={{ padding: '120px 5vw', background: '#4A5535', color: '#E9E7DF' }}>
        <div style={{ maxWidth: 1500, margin: '0 auto' }}>
          <Reveal as="h2" kind="up" style={{ margin: '0 0 60px', fontFamily: "'Anton',sans-serif", fontSize: 'clamp(36px,4.4vw,76px)', lineHeight: 0.95, textTransform: 'uppercase' }}>
            Three Pillars
          </Reveal>
          <div className="bb-grid-3" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 2, background: 'rgba(233,231,223,.25)' }}>
            {[
              { n: '01', title: 'Coach', body: 'Building complete athletes and leaders, physically and mentally.', delay: 80 },
              { n: '02', title: 'Mentor', body: 'Walking with people through transition and purpose.', delay: 170 },
              { n: '03', title: 'Author & Speaker', body: 'Sharing the message through Built to Become and public speaking.', delay: 260 },
            ].map((p) => (
              <Reveal kind="up" delay={p.delay} key={p.n} style={{ background: '#4A5535', padding: '44px 36px 52px', display: 'flex', flexDirection: 'column', gap: 18 }}>
                <div style={{ fontFamily: "'Anton',sans-serif", fontSize: 64, lineHeight: 1, color: 'rgba(233,231,223,.35)' }}>{p.n}</div>
                <div style={{ fontFamily: "'Anton',sans-serif", fontSize: 34, textTransform: 'uppercase', lineHeight: 1 }}>{p.title}</div>
                <p style={{ margin: 0, fontSize: 18, lineHeight: 1.6, color: 'rgba(233,231,223,.82)' }}>{p.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>

      {/* THE COMPASS */}
      <div style={{ padding: '130px 5vw', background: '#191A16', color: '#E9E7DF' }}>
        <div style={{ maxWidth: 1300, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 44 }}>
          <Reveal kind="up" style={{ fontSize: 12, fontWeight: 700, letterSpacing: '.36em', textTransform: 'uppercase', color: '#C9A63A' }}>
            The Compass
          </Reveal>
          <Reveal as="p" kind="up" delay={60} style={{ margin: 0, maxWidth: '70ch', fontSize: 20, lineHeight: 1.6, color: 'rgba(233,231,223,.72)' }}>
            Every relationship I build is filtered through three questions.
          </Reveal>
          <div style={{ display: 'flex', flexDirection: 'column', borderTop: '1px solid rgba(233,231,223,.2)' }}>
            <Reveal
              kind="up"
              delay={120}
              style={{ padding: '30px 0', borderBottom: '1px solid rgba(233,231,223,.2)', fontFamily: "'Anton',sans-serif", fontSize: 'clamp(28px,3.6vw,60px)', lineHeight: 1.05, textTransform: 'uppercase' }}
            >
              Does this align with purpose?
            </Reveal>
            <Reveal
              kind="up"
              delay={200}
              style={{ padding: '30px 0', borderBottom: '1px solid rgba(233,231,223,.2)', fontFamily: "'Anton',sans-serif", fontSize: 'clamp(28px,3.6vw,60px)', lineHeight: 1.05, textTransform: 'uppercase' }}
            >
              Does this serve others well?
            </Reveal>
            <Reveal
              kind="up"
              delay={280}
              style={{ padding: '30px 0', borderBottom: '1px solid rgba(233,231,223,.2)', fontFamily: "'Anton',sans-serif", fontSize: 'clamp(28px,3.6vw,60px)', lineHeight: 1.05, textTransform: 'uppercase', color: '#8E9977' }}
            >
              Does this strengthen family and legacy?
            </Reveal>
          </div>
        </div>
      </div>

      {/* ABOUT BRANDON */}
      <div style={{ padding: '120px 5vw', background: '#E9E7DF' }}>
        <div className="bb-grid-2" style={{ display: 'grid', gridTemplateColumns: '.95fr 1.05fr', gap: 64, alignItems: 'center', maxWidth: 1500, margin: '0 auto' }}>
          <div style={{ position: 'relative', aspectRatio: '4 / 5', background: 'transparent' }}>
            <img src="/assets/about-brandon.png" alt="Brandon Butler in Army dress uniform" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 26 }}>
            <Reveal kind="up" style={{ fontSize: 12, fontWeight: 800, letterSpacing: '.36em', textTransform: 'uppercase', color: '#5C6B36' }}>
              About Brandon
            </Reveal>
            <Reveal
              as="h2"
              kind="up"
              delay={60}
              style={{ margin: 0, fontFamily: "'Anton',sans-serif", fontSize: 'clamp(38px,4.6vw,80px)', lineHeight: 0.94, textTransform: 'uppercase' }}
            >
              First Sergeant.<br />Coach. Father.
            </Reveal>
            <Reveal as="p" kind="up" delay={140} style={{ margin: 0, maxWidth: '56ch', fontSize: 19, lineHeight: 1.65, color: 'rgba(25,26,22,.75)' }}>
              I spent [XX] years in the Army, most of them as a First Sergeant — responsible for the discipline, readiness, and lives of the soldiers under me. I bring that same standard to the field and to my own house. I don't ask anyone to do something I haven't already done.
            </Reveal>
            <Reveal kind="up" delay={200} style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 2, background: 'rgba(25,26,22,.15)', marginTop: 10 }}>
              {[
                ['[XX]', 'Years Leading'],
                ['[XX]', 'Athletes Coached'],
                ['01', 'Mission'],
              ].map(([num, label]) => (
                <div key={label} style={{ background: '#E9E7DF', padding: '22px 18px' }}>
                  <div style={{ fontFamily: "'Anton',sans-serif", fontSize: 40, lineHeight: 1 }}>{num}</div>
                  <div style={{ fontSize: 12, letterSpacing: '.16em', textTransform: 'uppercase', color: 'rgba(25,26,22,.6)', marginTop: 6 }}>{label}</div>
                </div>
              ))}
            </Reveal>
          </div>
        </div>
      </div>

      {/* BOOK + COACHING TEASERS */}
      <div className="bb-grid-2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
        <Link
          to="/book"
          className="panel-link"
          style={{ position: 'relative', background: '#4A5535', color: '#E9E7DF', padding: '110px 4vw', display: 'grid', gridTemplateColumns: '.8fr 1.2fr', gap: 36, alignItems: 'center' }}
        >
          <div style={{ position: 'relative', aspectRatio: '2 / 3', background: 'rgba(25,26,22,.2)' }}>
            <img src="/assets/built-to-become-cover.png" alt="Built to Become book cover" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '.36em', textTransform: 'uppercase', color: '#E4D48A' }}>His Story, In Print</div>
            <h3 style={{ margin: 0, fontFamily: "'Anton',sans-serif", fontSize: 'clamp(30px,3.2vw,52px)', lineHeight: 0.96, textTransform: 'uppercase' }}>Built to Become</h3>
            <p style={{ margin: 0, fontSize: 18, lineHeight: 1.6, color: 'rgba(233,231,223,.82)' }}>The blueprint for what comes next when the role that defined you changes.</p>
          </div>
          <span
            className="btn"
            style={{ position: 'absolute', left: '4vw', bottom: 40, zIndex: 3, border: '1px solid rgba(233,231,223,.55)', padding: '16px 28px' }}
          >
            Learn More
          </span>
        </Link>

        <Link
          to="/coaching"
          className="panel-link"
          style={{ position: 'relative', overflow: 'hidden', color: '#E9E7DF', padding: '110px 4vw', display: 'flex', alignItems: 'center', minHeight: 560 }}
        >
          <video
            src="/reels/home-coaching-teaser.mp4"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: 0 }}
          />
          <div style={{ position: 'relative', zIndex: 2, display: 'flex', flexDirection: 'column', gap: 20, maxWidth: 460 }}>
            <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '.36em', textTransform: 'uppercase', color: '#C9A63A' }}>Train With Coach Brandon</div>
            <h3 style={{ margin: 0, fontFamily: "'Anton',sans-serif", fontSize: 'clamp(30px,3.2vw,52px)', lineHeight: 0.96, textTransform: 'uppercase' }}>Athlete Development</h3>
            <p style={{ margin: 0, fontSize: 18, lineHeight: 1.6, color: 'rgba(233,231,223,.78)' }}>Speed, strength, and mindset training that builds the athlete and the person.</p>
          </div>
          <span
            className="btn"
            style={{ position: 'absolute', left: '4vw', bottom: 40, zIndex: 3, border: '1px solid rgba(233,231,223,.55)', padding: '16px 28px' }}
          >
            Learn More
          </span>
        </Link>
      </div>

      {/* WHAT'S NEXT */}
      <div style={{ padding: '120px 5vw', background: '#E9E7DF' }}>
        <div style={{ maxWidth: 1500, margin: '0 auto' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: 30, flexWrap: 'wrap', marginBottom: 50 }}>
            <div>
              <Reveal as="h2" kind="up" style={{ margin: 0, fontFamily: "'Anton',sans-serif", fontSize: 'clamp(38px,4.6vw,80px)', lineHeight: 0.94, textTransform: 'uppercase' }}>
                What's Next
              </Reveal>
              <Reveal as="p" kind="up" delay={70} style={{ margin: '16px 0 0', maxWidth: '60ch', fontSize: 19, lineHeight: 1.6, color: 'rgba(25,26,22,.7)' }}>
                Coaching clinics, speaking engagements, and new episodes. See where Brandon is showing up next.
              </Reveal>
            </div>
            <Reveal kind="up" delay={120} style={{ display: 'inline-flex', alignItems: 'center', gap: 12, fontSize: 13, fontWeight: 700, letterSpacing: '.2em', textTransform: 'uppercase', color: '#4A5535', cursor: 'pointer' }}>
              View All News &amp; Events <span style={{ width: 34, height: 1, background: '#4A5535', display: 'inline-block' }} />
            </Reveal>
          </div>
          <div className="bb-grid-4" style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 2, background: 'rgba(25,26,22,.16)', borderTop: '2px solid #191A16' }}>
            <Reveal kind="up" delay={80} style={{ background: '#E9E7DF', padding: '30px 26px 34px', display: 'flex', flexDirection: 'column', gap: 16, minHeight: 320 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 12 }}>
                <span
                  style={{
                    padding: '6px 12px',
                    background: 'linear-gradient(102deg,#9FAE52 0%,#C9A63A 52%,#E8D998 100%)',
                    color: '#14150F',
                    whiteSpace: 'nowrap',
                    boxShadow: '0 12px 34px rgba(110,127,58,.32)',
                    fontSize: 11,
                    fontWeight: 700,
                    letterSpacing: '.18em',
                    textTransform: 'uppercase',
                  }}
                >
                  Coaching Camp
                </span>
                <span style={{ fontSize: 12, letterSpacing: '.14em', textTransform: 'uppercase', color: 'rgba(25,26,22,.55)' }}>[Date]</span>
              </div>
              <div style={{ fontFamily: "'Anton',sans-serif", fontSize: 26, lineHeight: 1.05, textTransform: 'uppercase' }}>Fall Performance Camp</div>
              <p style={{ margin: 0, fontSize: 17, lineHeight: 1.55, color: 'rgba(25,26,22,.7)' }}>Registration is open for ages [X to X].</p>
              <div style={{ marginTop: 'auto', fontSize: 12, fontWeight: 700, letterSpacing: '.2em', textTransform: 'uppercase', color: '#4A5535', cursor: 'pointer' }}>Register →</div>
            </Reveal>
            <Reveal kind="up" delay={150} style={{ background: '#E9E7DF', padding: '30px 26px 34px', display: 'flex', flexDirection: 'column', gap: 16, minHeight: 320 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 12 }}>
                <span style={{ padding: '6px 12px', background: '#191A16', color: '#E9E7DF', fontSize: 11, fontWeight: 700, letterSpacing: '.18em', textTransform: 'uppercase' }}>Podcast</span>
                <span style={{ fontSize: 12, letterSpacing: '.14em', textTransform: 'uppercase', color: 'rgba(25,26,22,.55)' }}>[Date]</span>
              </div>
              <div style={{ fontFamily: "'Anton',sans-serif", fontSize: 26, lineHeight: 1.05, textTransform: 'uppercase' }}>New Episode: [Guest Name]</div>
              <p style={{ margin: 0, fontSize: 17, lineHeight: 1.55, color: 'rgba(25,26,22,.7)' }}>Brandon sits down with [Guest] to talk [topic].</p>
              <div style={{ marginTop: 'auto', fontSize: 12, fontWeight: 700, letterSpacing: '.2em', textTransform: 'uppercase', color: '#4A5535', cursor: 'pointer' }}>Listen Now →</div>
            </Reveal>
            <Reveal kind="up" delay={220} style={{ background: '#E9E7DF', padding: '30px 26px 34px', display: 'flex', flexDirection: 'column', gap: 16, minHeight: 320 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 12 }}>
                <span style={{ padding: '6px 12px', border: '1px solid #191A16', fontSize: 11, fontWeight: 700, letterSpacing: '.18em', textTransform: 'uppercase' }}>Speaking</span>
                <span style={{ fontSize: 12, letterSpacing: '.14em', textTransform: 'uppercase', color: 'rgba(25,26,22,.55)' }}>[Date]</span>
              </div>
              <div style={{ fontFamily: "'Anton',sans-serif", fontSize: 26, lineHeight: 1.05, textTransform: 'uppercase' }}>Brandon Speaks at [Event]</div>
              <p style={{ margin: 0, fontSize: 17, lineHeight: 1.55, color: 'rgba(25,26,22,.7)' }}>A talk on [topic] for [organization].</p>
              <div style={{ marginTop: 'auto', fontSize: 12, fontWeight: 700, letterSpacing: '.2em', textTransform: 'uppercase', color: '#4A5535', cursor: 'pointer' }}>Learn More →</div>
            </Reveal>
            <Reveal kind="up" delay={290} style={{ background: '#E9E7DF', padding: '30px 26px 34px', display: 'flex', flexDirection: 'column', gap: 16, minHeight: 320 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 12 }}>
                <span style={{ padding: '6px 12px', background: '#8E9977', color: '#191A16', fontSize: 11, fontWeight: 700, letterSpacing: '.18em', textTransform: 'uppercase' }}>News</span>
                <span style={{ fontSize: 12, letterSpacing: '.14em', textTransform: 'uppercase', color: 'rgba(25,26,22,.55)' }}>Coming Soon</span>
              </div>
              <div style={{ fontFamily: "'Anton',sans-serif", fontSize: 26, lineHeight: 1.05, textTransform: 'uppercase' }}>Built to Become Hits [Milestone]</div>
              <p style={{ margin: 0, fontSize: 17, lineHeight: 1.55, color: 'rgba(25,26,22,.7)' }}>[e.g. Amazon Bestseller in category.]</p>
              <div style={{ marginTop: 'auto', fontSize: 12, fontWeight: 700, letterSpacing: '.2em', textTransform: 'uppercase', color: '#4A5535', cursor: 'pointer' }}>Read More →</div>
            </Reveal>
          </div>
        </div>
      </div>

      {/* IN THEIR WORDS */}
      <div style={{ padding: '120px 5vw', background: '#191A16', color: '#E9E7DF' }}>
        <div style={{ maxWidth: 1500, margin: '0 auto' }}>
          <Reveal as="h2" kind="up" style={{ margin: '0 0 56px', fontFamily: "'Anton',sans-serif", fontSize: 'clamp(34px,4vw,68px)', lineHeight: 0.95, textTransform: 'uppercase' }}>
            In Their Words
          </Reveal>
          <div className="bb-grid-3" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 46 }}>
            {[80, 160, 240].map((delay) => (
              <Reveal kind="up" delay={delay} key={delay} style={{ display: 'flex', flexDirection: 'column', gap: 20, borderTop: '1px solid rgba(233,231,223,.25)', paddingTop: 26 }}>
                <p style={{ margin: 0, fontFamily: "'Instrument Serif',serif", fontSize: 26, lineHeight: 1.3 }}>"[Short quote from a client, mentee, or reader.]"</p>
                <div style={{ fontSize: 12, letterSpacing: '.18em', textTransform: 'uppercase', color: '#8E9977' }}>[Name, Role]</div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div style={{ padding: '130px 5vw', background: 'linear-gradient(118deg,#333D22 0%,#556331 44%,#9A8B3C 78%,#C9A63A 100%)', color: '#E9E7DF', textAlign: 'center' }}>
        <h2 style={{ margin: '0 auto', maxWidth: '22ch', fontFamily: "'Anton',sans-serif", fontSize: 'clamp(40px,6vw,110px)', lineHeight: 0.9, textTransform: 'uppercase' }}>
          <RiseLine delay={0}>Enough talking.</RiseLine> <RiseLine delay={90}>Time to build</RiseLine> <RiseLine delay={180}>who you were made to be.</RiseLine>
        </h2>
        <div style={{ marginTop: 44 }}>
          <Btn href={IG_URL} variant="gold" style={{ boxShadow: '0 14px 40px rgba(0,0,0,.4)' }}>
            Work With Brandon
          </Btn>
        </div>
      </div>

      <Footer />
    </div>
  );
}
