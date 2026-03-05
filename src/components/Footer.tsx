import React from "react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="site-footer"
      style={{
        padding: "var(--space-3xl)",
        borderTop: "1px solid var(--dark-border)",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
        gap: "var(--space-lg)",
      }}
    >
      <p
        style={{
          fontFamily: "var(--font-accent)",
          fontSize: "var(--text-xs)",
          letterSpacing: "0.15em",
          color: "var(--light-muted)",
          opacity: 0.5,
        }}
      >
        &copy; {year} Indigo Bailey
      </p>

      <p
        style={{
          fontFamily: "var(--font-accent)",
          fontSize: "var(--text-xs)",
          letterSpacing: "0.15em",
          color: "var(--light-muted)",
          opacity: 0.3,
        }}
      >
        Designed with intention
      </p>
      <style>{`
        @media (max-width: 768px) {
          .site-footer {
            padding: var(--space-xl) !important;
          }
        }
      `}</style>
    </footer>
  );
}
