import Reveal, { RiseLine } from '../components/Reveal';
import Btn from '../components/Btn';
import Footer from '../components/Footer';
import { IG_URL, AMAZON_URL } from '../constants';

const TRANSITIONS = ['Job loss', 'Retirement', 'Divorce', 'Empty nest', 'Military separation', 'Injury'];

const WHO_FOR = [
  'The man navigating a career or role transition',
  'The veteran or leader re-entering civilian life',
  'The father redefining his role at home',
  'The athlete or coach facing "what\'s next"',
  'Anyone searching for their next level',
];

const INSIDE = [
  { title: 'Believe', body: 'Rebuilding identity and belief in purpose.' },
  { title: 'Build', body: 'The daily discipline and structure that create change.' },
  { title: 'Become', body: 'Stepping into the next version of yourself.' },
];

const FAQ = ['What if I\'m not going through a "crisis"?', 'Is this only for men?', 'Format and length?'];

export default function Book() {
  return (
    <div>
      {/* HERO */}
      <div
        className="bb-grid-2"
        style={{
          background: 'radial-gradient(110% 95% at 4% 4%,#2C3321 0%,#191A16 52%,#101109 100%)',
          color: '#E9E7DF',
          aspectRatio: '1920/1080',
          display: 'grid',
          gridTemplateColumns: 'minmax(0,1.1fr) minmax(0,.9fr)',
          alignItems: 'center',
          gap: 40,
          padding: '110px 5vw',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
          <Reveal kind="up" style={{ fontSize: 12, fontWeight: 700, letterSpacing: '.36em', textTransform: 'uppercase', color: '#C9A63A' }}>
            The Book
          </Reveal>
          <h1 style={{ margin: 0, fontFamily: "'Anton',sans-serif", fontSize: 'clamp(54px,9vw,164px)', lineHeight: 0.86, textTransform: 'uppercase', letterSpacing: '-.03em' }}>
            <RiseLine delay={0}>Who Am I</RiseLine>
            <br />
            <RiseLine delay={110} style={{ backgroundImage: 'linear-gradient(96deg,#C9A63A 0%,#EBDC9A 55%,#C9A63A 100%)', backgroundClip: 'text', color: 'transparent' }}>
              ... Now?
            </RiseLine>
          </h1>
          <Reveal as="p" kind="up" delay={200} style={{ margin: 0, maxWidth: '54ch', fontSize: 22, lineHeight: 1.48, letterSpacing: '-.005em', color: 'rgba(233,231,223,.78)' }}>
            Every man hits a point where the role that defined him disappears — the uniform comes off, the title goes away, the team moves on. BUILT TO BECOME is what you do next.
          </Reveal>
          <Reveal kind="up" delay={280} style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
            <Btn href={AMAZON_URL}>Get Your Copy on Amazon</Btn>
            <Btn href={IG_URL} variant="gold" style={{ color: '#E8D998' }}>DM for a Signed Copy</Btn>
          </Reveal>
        </div>
        <div style={{ position: 'relative', minWidth: 0, overflow: 'hidden', aspectRatio: '2 / 3', background: 'rgba(233,231,223,.07)' }}>
          <img src="/assets/built-to-become-cover.png" alt="Built to Become book cover" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>
      </div>

      {/* THE MOMENT */}
      <div style={{ padding: '120px 5vw', background: '#E9E7DF' }}>
        <div className="bb-grid-2" style={{ maxWidth: 1300, margin: '0 auto', display: 'grid', gridTemplateColumns: '.8fr 1.2fr', gap: 60 }}>
          <Reveal as="h2" kind="up" style={{ margin: 0, fontFamily: "'Anton',sans-serif", fontSize: 'clamp(38px,4.6vw,82px)', lineHeight: 0.92, textTransform: 'uppercase' }}>
            The Moment Every Man Faces
          </Reveal>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
            <Reveal kind="up" delay={80} style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
              {TRANSITIONS.map((t) => (
                <span key={t} style={{ padding: '10px 16px', border: '1px solid rgba(25,26,22,.3)', fontSize: 13, fontWeight: 700, letterSpacing: '.14em', textTransform: 'uppercase' }}>
                  {t}
                </span>
              ))}
            </Reveal>
            <Reveal as="p" kind="up" delay={140} style={{ margin: 0, maxWidth: '62ch', fontSize: 19, lineHeight: 1.65, color: 'rgba(25,26,22,.75)' }}>
              When the title goes, so does the routine that told you who you were. That gap is where men get stuck — numbing out, coasting, or chasing the next thing without asking why. This book is about closing that gap on purpose instead of by accident.
            </Reveal>
            <Reveal as="p" kind="up" delay={200} style={{ margin: 0, fontFamily: "'Instrument Serif',serif", fontSize: 'clamp(24px,2.4vw,38px)', lineHeight: 1.25 }}>
              "This isn't a book about feelings. It's a book about what to do next."
            </Reveal>
          </div>
        </div>
      </div>

      {/* WHO THIS BOOK IS FOR */}
      <div style={{ padding: '120px 5vw', background: '#4A5535', color: '#E9E7DF' }}>
        <div style={{ maxWidth: 1400, margin: '0 auto' }}>
          <Reveal as="h2" kind="up" style={{ margin: '0 0 50px', fontFamily: "'Anton',sans-serif", fontSize: 'clamp(36px,4.4vw,76px)', lineHeight: 0.95, textTransform: 'uppercase' }}>
            Who This Book Is For
          </Reveal>
          <div style={{ display: 'flex', flexDirection: 'column', borderTop: '1px solid rgba(233,231,223,.3)' }}>
            {WHO_FOR.map((line, i) => (
              <Reveal kind="up" delay={60 * (i + 1)} key={line} style={{ padding: '26px 0', borderBottom: '1px solid rgba(233,231,223,.3)', fontSize: 'clamp(20px,2.1vw,32px)', lineHeight: 1.3 }}>
                {line}
              </Reveal>
            ))}
          </div>
        </div>
      </div>

      {/* INSIDE THE BOOK */}
      <div style={{ padding: '130px 5vw', background: '#191A16', color: '#E9E7DF' }}>
        <div style={{ maxWidth: 1500, margin: '0 auto' }}>
          <Reveal kind="up" style={{ fontSize: 12, fontWeight: 700, letterSpacing: '.36em', textTransform: 'uppercase', color: '#C9A63A' }}>
            Inside the Book
          </Reveal>
          <h2 style={{ margin: '16px 0 60px', fontFamily: "'Anton',sans-serif", fontSize: 'clamp(38px,5.6vw,104px)', lineHeight: 0.9, textTransform: 'uppercase' }}>
            <RiseLine delay={0}>Believe</RiseLine> <span style={{ color: '#8E9977' }}>→</span> <RiseLine delay={90}>Build</RiseLine> <span style={{ color: '#8E9977' }}>→</span>{' '}
            <RiseLine delay={180}>Become</RiseLine>
          </h2>
          <div className="bb-grid-3" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 2, background: 'rgba(233,231,223,.22)' }}>
            {INSIDE.map((s, i) => (
              <Reveal kind="up" delay={80 * (i + 1)} key={s.title} style={{ background: '#191A16', padding: '40px 34px 48px', display: 'flex', flexDirection: 'column', gap: 16 }}>
                <div style={{ fontFamily: "'Anton',sans-serif", fontSize: 30, textTransform: 'uppercase' }}>{s.title}</div>
                <p style={{ margin: 0, fontSize: 18, lineHeight: 1.6, color: 'rgba(233,231,223,.78)' }}>{s.body}</p>
              </Reveal>
            ))}
          </div>
          <Reveal as="p" kind="up" delay={300} style={{ margin: '28px 0 0', fontSize: 16, color: 'rgba(233,231,223,.5)' }}>
            [Chapter breakdown coming]
          </Reveal>
        </div>
      </div>

      {/* WHAT READERS ARE SAYING */}
      <div style={{ padding: '120px 5vw', background: '#4A5535', color: '#E9E7DF' }}>
        <div style={{ maxWidth: 1500, margin: '0 auto' }}>
          <Reveal as="h2" kind="up" style={{ margin: '0 0 50px', fontFamily: "'Anton',sans-serif", fontSize: 'clamp(34px,4vw,70px)', lineHeight: 0.95, textTransform: 'uppercase' }}>
            What Readers Are Saying
          </Reveal>
          <div className="bb-grid-3" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 2, background: 'rgba(233,231,223,.28)' }}>
            {[80, 160, 240].map((delay) => (
              <Reveal kind="up" delay={delay} key={delay} style={{ background: '#4A5535', padding: '36px 30px', display: 'flex', flexDirection: 'column', gap: 18 }}>
                <div style={{ fontSize: 13, letterSpacing: '.2em', color: '#E9E7DF' }}>★★★★★</div>
                <p style={{ margin: 0, fontSize: 19, lineHeight: 1.55 }}>"[Reader review or top Amazon quote.]"</p>
                <div style={{ fontSize: 12, letterSpacing: '.18em', textTransform: 'uppercase', color: 'rgba(233,231,223,.7)' }}>[Reader name]</div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>

      {/* NEXT CHAPTER CTA */}
      <div style={{ padding: '120px 5vw', background: '#E9E7DF' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', textAlign: 'center', display: 'flex', flexDirection: 'column', gap: 30, alignItems: 'center' }}>
          <Reveal as="h2" kind="up" style={{ margin: 0, fontFamily: "'Anton',sans-serif", fontSize: 'clamp(38px,5vw,92px)', lineHeight: 0.92, textTransform: 'uppercase' }}>
            Your Next Chapter Starts Today
          </Reveal>
          <Reveal kind="up" delay={90}>
            <Btn href={AMAZON_URL} variant="dark-strong" style={{ boxShadow: '0 14px 40px rgba(0,0,0,.4)' }}>
              Get Your Copy on Amazon
            </Btn>
          </Reveal>
          <Reveal kind="up" delay={150}>
            <Btn href={IG_URL} variant="dark-strong">DM for a Signed Copy</Btn>
          </Reveal>
          <Reveal as="p" kind="up" delay={190} style={{ margin: 0, maxWidth: '52ch', fontSize: 17, lineHeight: 1.6, color: 'rgba(25,26,22,.7)' }}>
            Grab it on Amazon, or send Brandon a direct message on Instagram to order a signed copy.
          </Reveal>
          <Reveal kind="up" delay={230} style={{ display: 'flex', gap: 26, fontSize: 13, fontWeight: 700, letterSpacing: '.16em', textTransform: 'uppercase', color: 'rgba(25,26,22,.6)' }}>
            <span>Kindle</span>
            <span>·</span>
            <span>Paperback [if available]</span>
          </Reveal>
        </div>
      </div>

      {/* FAQ */}
      <div style={{ padding: '110px 5vw', background: '#191A16', color: '#E9E7DF' }}>
        <div className="bb-grid-2" style={{ maxWidth: 1300, margin: '0 auto', display: 'grid', gridTemplateColumns: '.7fr 1.3fr', gap: 56 }}>
          <Reveal as="h2" kind="up" style={{ margin: 0, fontFamily: "'Anton',sans-serif", fontSize: 'clamp(34px,4vw,68px)', lineHeight: 0.95, textTransform: 'uppercase' }}>
            FAQ
          </Reveal>
          <div style={{ display: 'flex', flexDirection: 'column', borderTop: '1px solid rgba(233,231,223,.22)' }}>
            {FAQ.map((q, i) => (
              <Reveal
                kind="up"
                delay={70 + i * 60}
                key={q}
                style={{ padding: '26px 0', borderBottom: '1px solid rgba(233,231,223,.22)', display: 'flex', justifyContent: 'space-between', gap: 20, fontSize: 21 }}
              >
                {q}
                <span style={{ color: '#8E9977' }}>+</span>
              </Reveal>
            ))}
          </div>
        </div>
      </div>

      {/* CLOSING CTA */}
      <div style={{ padding: '130px 5vw', background: 'linear-gradient(118deg,#333D22 0%,#556331 44%,#9A8B3C 78%,#C9A63A 100%)', color: '#E9E7DF', textAlign: 'center' }}>
        <h2 style={{ margin: '0 auto', maxWidth: '20ch', fontFamily: "'Anton',sans-serif", fontSize: 'clamp(40px,6vw,112px)', lineHeight: 0.9, textTransform: 'uppercase' }}>
          <RiseLine delay={0}>You weren't built</RiseLine> <RiseLine delay={90}>to stay stuck.</RiseLine>{' '}
          <RiseLine delay={180} style={{ backgroundImage: 'linear-gradient(96deg,#12130F 0%,#3A4527 100%)', backgroundClip: 'text', color: 'transparent' }}>
            You were Built to Become.
          </RiseLine>
        </h2>
        <div style={{ marginTop: 44, display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
          <Btn href={AMAZON_URL} variant="gold" style={{ boxShadow: '0 14px 40px rgba(0,0,0,.4)' }}>
            Buy Now on Amazon
          </Btn>
          <Btn href={IG_URL} style={{ border: '1px solid rgba(233,231,223,.75)' }}>DM for a Signed Copy</Btn>
        </div>
      </div>

      <Footer />
    </div>
  );
}
