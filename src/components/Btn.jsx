import { Link } from 'react-router-dom';

/**
 * Universal site button: hollow by default, fills with the signature
 * gold/olive gradient on hover. Renders as a real link (external href or
 * internal route) or a button, whichever fits.
 */
export default function Btn({
  href,
  to,
  onClick,
  variant = 'light',
  size,
  block,
  className = '',
  style,
  children,
  ...rest
}) {
  const classes = [
    'btn',
    variant ? `btn--${variant}` : '',
    size ? `btn--${size}` : '',
    block ? 'btn--block' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes} style={style} {...rest}>
        {children}
      </a>
    );
  }
  if (to) {
    return (
      <Link to={to} className={classes} style={style} {...rest}>
        {children}
      </Link>
    );
  }
  return (
    <button type="button" onClick={onClick} className={classes} style={style} {...rest}>
      {children}
    </button>
  );
}
