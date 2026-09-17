/**
 * Badge
 * Project tech tag — mono label with border.
 */
export default function Badge({ children }) {
  return (
    <span
      className="font-mono text-[0.7rem] font-normal tracking-wider uppercase
                 text-[var(--color-muted)] border border-[var(--color-border-hi)]
                 px-[0.65rem] py-[0.2rem] whitespace-nowrap
                 transition-colors duration-300
                 group-hover:border-[rgba(212,180,131,0.35)]
                 group-hover:text-[var(--color-accent)]"
    >
      {children}
    </span>
  );
}
