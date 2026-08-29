import { useEffect, useRef, useState } from 'react';

/**
 * Scroll-reveal wrapper. Mirrors the site's original fade/rise-in-on-scroll
 * effect: "up" nudges up from 26px, "rise" slides a full mask-covered line
 * up from 130% (used for headline words wrapped in an overflow:hidden span).
 */
export default function Reveal({
  as: Tag = 'div',
  kind = 'up',
  delay = 0,
  style,
  children,
  ...rest
}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setVisible(true);
      return undefined;
    }
    const masked =
      kind === 'rise' &&
      el.parentElement &&
      getComputedStyle(el.parentElement).overflow === 'hidden';
    const target = masked ? el.parentElement : el;
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0, rootMargin: '0px 0px -6% 0px' }
    );
    observer.observe(target);
    return () => observer.disconnect();
  }, [kind]);

  const dur = kind === 'rise' ? 0.95 : 0.8;
  const hiddenTransform = kind === 'rise' ? 'translateY(130%)' : 'translateY(26px)';

  const revealStyle = {
    opacity: visible ? 1 : 0,
    transform: visible ? 'translateY(0)' : hiddenTransform,
    transitionProperty: 'transform, opacity',
    transitionDuration: `${dur}s`,
    transitionTimingFunction: 'cubic-bezier(.16,1,.3,1)',
    transitionDelay: visible ? `${delay}ms` : '0ms',
    willChange: 'transform, opacity',
    ...style,
  };

  return (
    <Tag ref={ref} style={revealStyle} {...rest}>
      {children}
    </Tag>
  );
}

/** A single masked headline word/phrase that rises into view on scroll. */
export function RiseLine({ delay = 0, style, children }) {
  return (
    <span
      style={{
        display: 'inline-block',
        overflow: 'hidden',
        verticalAlign: 'bottom',
        padding: '0 0 .16em',
        marginBottom: '-.16em',
      }}
    >
      <Reveal as="span" kind="rise" delay={delay} style={{ display: 'inline-block', lineHeight: 1.12, ...style }}>
        {children}
      </Reveal>
    </span>
  );
}
