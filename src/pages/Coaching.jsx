import { useRef, useState } from 'react';
import Reveal, { RiseLine } from '../components/Reveal';
import Btn from '../components/Btn';
import Footer from '../components/Footer';
import { IG_URL } from '../constants';

const TRAINING = [
  'Speed & Agility',
  'Strength & Power Development',
  'Conditioning & Endurance',
  'Mindset & Confidence Training',
  'Leadership & Character Development',
];

const REELS = [
  { src: '/reels/spring-break-working.mp4', title: 'No Days Off', body: "Spring Break '26 and we WORKING. No days off when you're chasing greatness." },
  { src: '/reels/control.mp4', title: 'Control', body: "Upper body day isn't just about strength, it's about CONTROL. Resistance catches. Grip strength." },
  { src: '/reels/setbacks-build-comebacks.mp4', title: 'Setbacks Build Comebacks', body: 'Setbacks build comebacks. We building.' },
  { src: '/reels/upper-body-building.mp4', title: 'Building', body: 'Upper body building. Wide receiver, class of 2028, deep in the off-season.' },
];

const FAQ = [
  'What ages do you train?',
  'Which sports do you cover?',
  'Session length and location?',
  'What should my athlete bring?',
  'Cancellation policy?',
];

function ReelCarousel() {
  const videoRefs = useRef([]);
  const [playing, setPlaying] = useState(() => REELS.map(() => false));

  const handleTap = (i) => {
    const vid = videoRefs.current[i];
    if (!vid) return;
    videoRefs.current.forEach((v, j) => {
      if (v && j !== i && !v.paused) {
        v.muted = true;
        v.pause();
      }
    });
    if (vid.paused) {
      vid.muted = false;
      const p = vid.play();
      if (p && p.catch) {
        p.catch(() => {
          vid.muted = true;
          vid.play().catch(() => {});
        });
      }
    } else {
      vid.muted = true;
      vid.pause();
    }
  };

  return (
    <div style={{ display: 'flex', gap: 18, overflowX: 'auto', paddingBottom: 22, scrollSnapType: 'x mandatory' }}>
      {REELS.map((reel, i) => (
        <Reveal kind="up" delay={60 * (i + 1)} key={reel.src} style={{ flex: '0 0 clamp(240px,22vw,320px)', scrollSnapAlign: 'start', display: 'flex', flexDirection: 'column', gap: 16 }}>
          <div
            onClick={() => handleTap(i)}
            style={{ cursor: 'pointer', position: 'relative', aspectRatio: '9 / 16', overflow: 'hidden', background: '#101109', border: '1px solid rgba(201,166,58,.35)' }}
          >
            <video
              ref={(el) => {
                videoRefs.current[i] = el;
              }}
              src={reel.src}
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              onPlay={() => setPlaying((p) => p.map((v, j) => (j === i ? true : v)))}
              onPause={() => setPlaying((p) => p.map((v, j) => (j === i ? false : v)))}
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            />
            <div
              style={{
                position: 'absolute',
                right: 12,
                bottom: 12,
                width: 40,
                height: 40,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'rgba(16,17,9,.62)',
                border: '1px solid rgba(201,166,58,.6)',
                color: '#E8D998',
                fontSize: 12,
                letterSpacing: '.08em',
                pointerEvents: 'none',
              }}
            >
              {playing[i] ? '❚❚' : '▶'}
            </div>
          </div>
          <div style={{ fontFamily: "'Anton',sans-serif", letterSpacing: '-.02em', fontSize: 22, lineHeight: 1.05, textTransform: 'uppercase' }}>{reel.title}</div>
          <p style={{ margin: 0, fontSize: 16, lineHeight: 1.5, color: 'rgba(233,231,223,.72)' }}>{reel.body}</p>
        </Reveal>
      ))}
    </div>
  );
}

export default function Coaching() {
  return (
    <div>
      {/* HERO */}
      <div
        className="bb-grid-2"
        style={{
          position: 'relative',
          background: 'radial-gradient(115% 95% at 6% 0%,#2C3321 0%,#191A16 52%,#101109 100%)',
          color: '#E9E7DF',
          aspectRatio: '1920/1080',
          display: 'grid',
          gridTemplateColumns: 'minmax(0,1.05fr) minmax(0,.95fr)',
          alignItems: 'stretch',
        }}
      >
        <div style={{ minWidth: 0, padding: '110px 5vw', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 32 }}>
          <Reveal kind="up" style={{ fontSize: 12, fontWeight: 700, letterSpacing: '.36em', textTransform: 'uppercase', color: '#C9A63A' }}>
            Athlete Coaching · Performance Training
          </Reveal>
          <h1 style={{ margin: 0, fontFamily: "'Anton',sans-serif", fontSize: 'clamp(44px,6.6vw,118px)', lineHeight: 0.88, textTransform: 'uppercase', letterSpacing: '-.02em' }}>
            <RiseLine delay={0}>Building Athletes.</RiseLine>
            <br />
            <RiseLine delay={100}>Building Leaders.</RiseLine>
            <br />
            <RiseLine delay={200} style={{ backgroundImage: 'linear-gradient(96deg,#C9A63A 0%,#EBDC9A 55%,#C9A63A 100%)', backgroundClip: 'text', color: 'transparent' }}>
              Building Character.
            </RiseLine>
          </h1>
          <Reveal as="p" kind="up" delay={280} style={{ margin: 0, maxWidth: '52ch', fontSize: 22, lineHeight: 1.48, letterSpacing: '-.005em', color: 'rgba(233,231,223,.78)' }}>
            Coach Brandon Butler trains [ages / sport] athletes to get faster, get stronger, and stop making excuses — on the field and off it.
          </Reveal>
          <Reveal kind="up" delay={350} style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
            <Btn href={IG_URL}>Enroll Your Athlete Today</Btn>
            <Btn href={IG_URL}>Book a Consultation</Btn>
          </Reveal>
        </div>
        <div className="bb-min-h-60vh" style={{ position: 'relative', minWidth: 0, overflow: 'hidden', borderLeft: '1px solid rgba(233,231,223,.16)', minHeight: '60vh' }}>
          <video src="/reels/hero-main.mp4" autoPlay muted loop playsInline preload="auto" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg,rgba(16,17,9,.55) 0%,rgba(16,17,9,0) 45%)', pointerEvents: 'none' }} />
        </div>
      </div>

      {/* MOST PROGRAMS */}
      <div style={{ padding: '120px 5vw', background: '#E9E7DF' }}>
        <div className="bb-grid-2" style={{ maxWidth: 1300, margin: '0 auto', display: 'grid', gridTemplateColumns: '.85fr 1.15fr', gap: 60 }}>
          <Reveal as="h2" kind="up" style={{ margin: 0, fontFamily: "'Anton',sans-serif", fontSize: 'clamp(38px,4.6vw,84px)', lineHeight: 0.92, textTransform: 'uppercase' }}>
            Most Programs Build the Body. That's It.
          </Reveal>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
            <Reveal as="p" kind="up" delay={80} style={{ margin: 0, maxWidth: '62ch', fontSize: 20, lineHeight: 1.6, color: 'rgba(25,26,22,.78)' }}>
              Plenty of programs will make an athlete faster. Few build the mind and the character alongside it. Parents want more than a trophy. They want their kid to become someone.
            </Reveal>
            <Reveal as="p" kind="up" delay={140} style={{ margin: 0, maxWidth: '62ch', fontSize: 19, lineHeight: 1.65, color: 'rgba(25,26,22,.65)' }}>
              Most programs run kids through drills and call it development. I run them through drills, hold them accountable, and teach them how to carry themselves when no one's watching. That's the gap parents keep telling me is missing.
            </Reveal>
          </div>
        </div>
      </div>

      {/* PHILOSOPHY */}
      <div style={{ padding: '130px 5vw', background: '#4A5535', color: '#E9E7DF' }}>
        <div style={{ maxWidth: 1400, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 48 }}>
          <Reveal kind="up" style={{ fontSize: 12, fontWeight: 700, letterSpacing: '.36em', textTransform: 'uppercase', color: '#E4D48A' }}>
            Coach Brandon's Philosophy
          </Reveal>
          <div className="bb-grid-3" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 2, background: 'rgba(233,231,223,.3)' }}>
            <Reveal kind="up" delay={70} style={{ background: '#4A5535', padding: '48px 34px', fontFamily: "'Anton',sans-serif", fontSize: 'clamp(24px,2.6vw,42px)', lineHeight: 1.05, textTransform: 'uppercase' }}>
              Does this build the athlete?
            </Reveal>
            <Reveal kind="up" delay={150} style={{ background: '#4A5535', padding: '48px 34px', fontFamily: "'Anton',sans-serif", fontSize: 'clamp(24px,2.6vw,42px)', lineHeight: 1.05, textTransform: 'uppercase' }}>
              Does this build the person?
            </Reveal>
            <Reveal
              kind="up"
              delay={230}
              style={{ background: '#4A5535', padding: '48px 34px', fontFamily: "'Anton',sans-serif", fontSize: 'clamp(24px,2.6vw,42px)', lineHeight: 1.05, textTransform: 'uppercase', color: '#191A16' }}
            >
              Does this build the future leader?
            </Reveal>
          </div>
          <Reveal as="p" kind="up" delay={300} style={{ margin: 0, maxWidth: '70ch', fontFamily: "'Instrument Serif',serif", fontSize: 'clamp(24px,2.3vw,36px)', lineHeight: 1.28 }}>
            "I spent my career finding out what people are made of under pressure. I use the same standard here — with kids, not soldiers."
          </Reveal>
        </div>
      </div>

      {/* WHAT TRAINING LOOKS LIKE */}
      <div style={{ padding: '120px 5vw', background: '#191A16', color: '#E9E7DF' }}>
        <div style={{ maxWidth: 1500, margin: '0 auto' }}>
          <Reveal as="h2" kind="up" style={{ margin: '0 0 54px', fontFamily: "'Anton',sans-serif", fontSize: 'clamp(38px,4.6vw,82px)', lineHeight: 0.94, textTransform: 'uppercase' }}>
            What Training Looks Like
          </Reveal>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))', gap: 2, background: 'rgba(233,231,223,.2)' }}>
            {TRAINING.map((t, i) => (
              <Reveal kind="up" delay={60 * (i + 1)} key={t} style={{ background: '#191A16', padding: '38px 30px', display: 'flex', flexDirection: 'column', gap: 14 }}>
                <div style={{ fontFamily: "'Anton',sans-serif", fontSize: 52, lineHeight: 1, color: i === TRAINING.length - 1 ? '#8E9977' : 'rgba(233,231,223,.28)' }}>
                  {String(i + 1).padStart(2, '0')}
                </div>
                <div style={{ fontSize: 23, fontWeight: 600 }}>{t}</div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>

      {/* INSIDE THE WORK */}
      <div style={{ padding: '120px 5vw', background: 'radial-gradient(120% 100% at 100% 0%,#2C3321 0%,#191A16 55%,#101109 100%)', color: '#E9E7DF' }}>
        <div style={{ maxWidth: 1600, margin: '0 auto' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: 34, flexWrap: 'wrap', marginBottom: 50 }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
              <Reveal kind="up" style={{ fontSize: 12, fontWeight: 700, letterSpacing: '.36em', textTransform: 'uppercase', color: '#C9A63A' }}>
                Inside the Work
              </Reveal>
              <h2 style={{ margin: 0, fontFamily: "'Anton',sans-serif", fontSize: 'clamp(38px,4.8vw,88px)', lineHeight: 0.92, textTransform: 'uppercase' }}>
                <RiseLine delay={0}>Work Ethic.</RiseLine> <RiseLine delay={90}>Discipline.</RiseLine>{' '}
                <RiseLine delay={180} style={{ backgroundImage: 'linear-gradient(96deg,#C9A63A 0%,#EBDC9A 55%,#C9A63A 100%)', backgroundClip: 'text', color: 'transparent' }}>
                  Proof.
                </RiseLine>
              </h2>
            </div>
            <Reveal as="p" kind="up" delay={240} style={{ margin: 0, maxWidth: '38ch', fontSize: 19, lineHeight: 1.6, color: 'rgba(233,231,223,.75)' }}>
              Real sessions, real athletes. This is what training with Coach Brandon looks like week to week.
            </Reveal>
          </div>

          <ReelCarousel />

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 20, flexWrap: 'wrap', marginTop: 34 }}>
            <div style={{ fontSize: 12, letterSpacing: '.2em', textTransform: 'uppercase', color: 'rgba(233,231,223,.5)' }}>Scroll for more · Clips play muted</div>
            <Btn href={IG_URL}>Enroll Your Athlete</Btn>
          </div>
        </div>
      </div>

      {/* WHY PARENTS TRUST */}
      <div style={{ padding: '120px 5vw', background: '#E9E7DF' }}>
        <div className="bb-grid-2" style={{ maxWidth: 1400, margin: '0 auto', display: 'grid', gridTemplateColumns: '1.1fr .9fr', gap: 60, alignItems: 'center' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 26 }}>
            <Reveal kind="up" style={{ fontSize: 12, fontWeight: 800, letterSpacing: '.36em', textTransform: 'uppercase', color: '#5C6B36' }}>
              Why Parents Trust Coach Brandon
            </Reveal>
            <Reveal as="h2" kind="up" delay={60} style={{ margin: 0, fontFamily: "'Anton',sans-serif", fontSize: 'clamp(36px,4.2vw,76px)', lineHeight: 0.94, textTransform: 'uppercase' }}>
              Led Soldiers. Now Leading Kids.
            </Reveal>
            <Reveal as="p" kind="up" delay={130} style={{ margin: 0, maxWidth: '58ch', fontSize: 19, lineHeight: 1.65, color: 'rgba(25,26,22,.75)' }}>
              I spent [XX] years leading soldiers before I ever coached an athlete. I know what it takes to build people who perform under pressure — and I hold your kid to that same standard, on the field and off it.
            </Reveal>
            <Reveal kind="up" delay={190} style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 2, background: 'rgba(25,26,22,.15)' }}>
              {[
                ['[XX]', 'Years Coaching'],
                ['[XX]', 'Athletes Trained'],
                ['[XX]', 'Years Leading Soldiers'],
              ].map(([num, label]) => (
                <div key={label} style={{ background: '#E9E7DF', padding: '22px 18px' }}>
                  <div style={{ fontFamily: "'Anton',sans-serif", fontSize: 38, lineHeight: 1 }}>{num}</div>
                  <div style={{ fontSize: 12, letterSpacing: '.16em', textTransform: 'uppercase', color: 'rgba(25,26,22,.6)', marginTop: 6 }}>{label}</div>
                </div>
              ))}
            </Reveal>
          </div>
          <div style={{ position: 'relative', aspectRatio: '4 / 5', background: 'rgba(25,26,22,.06)' }}>
            <img src="/assets/coach-track.png" alt="Coach Brandon Butler on the track" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
        </div>
      </div>

      {/* PARENTS & ATHLETES */}
      <div style={{ padding: '120px 5vw', background: '#4A5535', color: '#E9E7DF' }}>
        <div style={{ maxWidth: 1500, margin: '0 auto' }}>
          <Reveal as="h2" kind="up" style={{ margin: '0 0 50px', fontFamily: "'Anton',sans-serif", fontSize: 'clamp(34px,4vw,70px)', lineHeight: 0.95, textTransform: 'uppercase' }}>
            Parents &amp; Athletes
          </Reveal>
          <div className="bb-grid-3" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 46 }}>
            {[
              ['"[Parent quote.]"', '[Parent name]', 70],
              ['"[Athlete quote.]"', '[Athlete name, sport]', 150],
              ['"[Parent or coach quote.]"', '[Name, role]', 230],
            ].map(([quote, who, delay]) => (
              <Reveal kind="up" delay={delay} key={who} style={{ borderTop: '1px solid rgba(233,231,223,.35)', paddingTop: 26, display: 'flex', flexDirection: 'column', gap: 18 }}>
                <p style={{ margin: 0, fontFamily: "'Instrument Serif',serif", fontSize: 26, lineHeight: 1.3 }}>{quote}</p>
                <div style={{ fontSize: 12, letterSpacing: '.18em', textTransform: 'uppercase', color: 'rgba(233,231,223,.7)' }}>{who}</div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>

      {/* PROGRAM OPTIONS */}
      <div style={{ padding: '120px 5vw', background: '#E9E7DF' }}>
        <div style={{ maxWidth: 1500, margin: '0 auto' }}>
          <Reveal as="h2" kind="up" style={{ margin: '0 0 50px', fontFamily: "'Anton',sans-serif", fontSize: 'clamp(38px,4.6vw,82px)', lineHeight: 0.94, textTransform: 'uppercase' }}>
            Program Options
          </Reveal>
          <div className="bb-grid-3" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 2, background: '#191A16', border: '2px solid #191A16' }}>
            <Reveal kind="up" delay={70} style={{ background: '#E9E7DF', padding: '40px 32px 46px', display: 'flex', flexDirection: 'column', gap: 18, minHeight: 400 }}>
              <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '.2em', textTransform: 'uppercase', color: '#4A5535' }}>Tier 01</div>
              <div style={{ fontFamily: "'Anton',sans-serif", fontSize: 34, lineHeight: 1, textTransform: 'uppercase' }}>1-on-1 Training</div>
              <div style={{ fontFamily: "'Anton',sans-serif", fontSize: 30, lineHeight: 1 }}>[$XXX]</div>
              <p style={{ margin: 0, fontSize: 17, lineHeight: 1.6, color: 'rgba(25,26,22,.7)' }}>[Session length, frequency, what is included.]</p>
              <Btn href={IG_URL} variant="olive" style={{ marginTop: 'auto' }} block>Enroll Now</Btn>
            </Reveal>
            <Reveal kind="up" delay={150} style={{ background: '#191A16', color: '#E9E7DF', padding: '40px 32px 46px', display: 'flex', flexDirection: 'column', gap: 18, minHeight: 400 }}>
              <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '.2em', textTransform: 'uppercase', color: '#8E9977' }}>Tier 02 · Most Popular</div>
              <div style={{ fontFamily: "'Anton',sans-serif", fontSize: 34, lineHeight: 1, textTransform: 'uppercase' }}>Group Camp</div>
              <div style={{ fontFamily: "'Anton',sans-serif", fontSize: 30, lineHeight: 1 }}>[$XXX]</div>
              <p style={{ margin: 0, fontSize: 17, lineHeight: 1.6, color: 'rgba(233,231,223,.75)' }}>[Group size, schedule, age range, location.]</p>
              <Btn href={IG_URL} style={{ marginTop: 'auto' }} block>Register</Btn>
            </Reveal>
            <Reveal kind="up" delay={230} style={{ background: '#E9E7DF', padding: '40px 32px 46px', display: 'flex', flexDirection: 'column', gap: 18, minHeight: 400 }}>
              <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '.2em', textTransform: 'uppercase', color: '#4A5535' }}>Tier 03</div>
              <div style={{ fontFamily: "'Anton',sans-serif", fontSize: 34, lineHeight: 1, textTransform: 'uppercase' }}>Season-Long Training</div>
              <div style={{ fontFamily: "'Anton',sans-serif", fontSize: 30, lineHeight: 1 }}>[$XXX]</div>
              <p style={{ margin: 0, fontSize: 17, lineHeight: 1.6, color: 'rgba(25,26,22,.7)' }}>[Duration, sessions per week, progress tracking.]</p>
              <Btn href={IG_URL} variant="olive" style={{ marginTop: 'auto' }} block>Book a Consultation</Btn>
            </Reveal>
          </div>
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
                delay={60 + i * 50}
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
        <h2 style={{ margin: '0 auto', maxWidth: '20ch', fontFamily: "'Anton',sans-serif", fontSize: 'clamp(40px,6vw,110px)', lineHeight: 0.9, textTransform: 'uppercase' }}>
          <RiseLine delay={0}>Your athlete has the talent.</RiseLine>{' '}
          <RiseLine delay={110} style={{ backgroundImage: 'linear-gradient(96deg,#12130F 0%,#3A4527 100%)', backgroundClip: 'text', color: 'transparent' }}>
            Let's build the rest.
          </RiseLine>
        </h2>
        <div style={{ marginTop: 44 }}>
          <Btn href={IG_URL} variant="gold" style={{ boxShadow: '0 14px 40px rgba(0,0,0,.4)' }}>
            Enroll Your Athlete Today
          </Btn>
        </div>
      </div>

      <Footer />
    </div>
  );
}
