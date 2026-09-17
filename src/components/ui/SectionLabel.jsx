/**
 * SectionLabel
 * Renders the "01 — Title" mono label used before each section.
 */
export default function SectionLabel({ children }) {
  return (
    <p className="section-label">
      {children}
    </p>
  );
}
