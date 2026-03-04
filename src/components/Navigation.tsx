"use client";

import React, { useState, useEffect } from "react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Contact", href: "#contact" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        padding: "var(--space-lg) var(--space-2xl)",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        transition: "all 0.3s ease",
        background: scrolled ? "rgba(10, 10, 10, 0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled
          ? "1px solid var(--dark-border)"
          : "1px solid transparent",
      }}
    >
      {/* Logo / Name */}
      <a
        href="#"
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "var(--text-lg)",
          color: "var(--light-primary)",
          textDecoration: "none",
          letterSpacing: "0.05em",
          fontWeight: 300,
        }}
      >
        Indigo Bailey
      </a>

      {/* Desktop links */}
      <div
        style={{
          display: "flex",
          gap: "var(--space-2xl)",
          alignItems: "center",
        }}
        className="nav-desktop"
      >
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            style={{
              fontFamily: "var(--font-accent)",
              fontSize: "var(--text-xs)",
              color: "var(--light-muted)",
              textDecoration: "none",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              transition: "color 0.2s ease",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.color = "var(--warm)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.color = "var(--light-muted)")
            }
          >
            {link.label}
          </a>
        ))}
      </div>

      {/* Mobile hamburger */}
      <button
        className="nav-mobile-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation"
        style={{
          display: "none",
          background: "none",
          border: "none",
          cursor: "pointer",
          padding: "var(--space-sm)",
        }}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="var(--light-primary)"
          strokeWidth="1.5"
        >
          {menuOpen ? (
            <path d="M6 6l12 12M6 18L18 6" />
          ) : (
            <path d="M3 7h18M3 12h12M3 17h18" />
          )}
        </svg>
      </button>

      {/* Mobile menu overlay */}
      {menuOpen && (
        <div
          className="nav-mobile-menu"
          style={{
            position: "fixed",
            inset: 0,
            top: "60px",
            background: "rgba(10, 10, 10, 0.97)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "var(--space-3xl)",
            zIndex: 99,
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "var(--text-xl)",
                color: "var(--light-primary)",
                textDecoration: "none",
                letterSpacing: "0.1em",
              }}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .nav-desktop { display: none !important; }
          .nav-mobile-toggle { display: block !important; }
        }
      `}</style>
    </nav>
  );
}
