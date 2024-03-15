type AnchorProps = {
  className?: string;
  href: string;
  target?: string;
  rel?: string;
  title?: string;
  ariaLabel?: string;
  children: React.ReactNode;
};

export default function Anchor({
  className = '',
  href,
  target = '_blank',
  rel = 'noopener noreferrer',
  title = 'Opens in a new web-browser-tab',
  ariaLabel = '',
  children,
}: AnchorProps): JSX.Element {
  return (
    <a
      className={className}
      href={href}
      target={target}
      rel={rel}
      title={title}
      aria-label={ariaLabel}
    >
      {children}
    </a>
  );
}
