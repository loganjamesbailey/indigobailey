import Button from "./Button";

export default function Hero() {
  return (
    <section
      id="hero"
      className="hero-section"
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        padding: "var(--space-3xl)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Radial gradient background */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          background: `
            radial-gradient(ellipse at 70% 30%, var(--primary) 0%, transparent 50%),
            radial-gradient(ellipse at 20% 70%, var(--dahlia-wine) 0%, transparent 40%),
            radial-gradient(ellipse at 90% 80%, var(--secondary-dark) 0%, transparent 35%),
            var(--dark-canvas)
          `,
          opacity: 0.6,
        }}
      />

      {/* Decorative golden line */}
      <div
        aria-hidden="true"
        className="hero-golden-line"
        style={{
          position: "absolute",
          top: "38.2%",
          left: "var(--space-3xl)",
          width: "61.8%",
          height: "1px",
          background:
            "linear-gradient(to right, var(--warm), transparent)",
          opacity: 0.3,
        }}
      />

      {/* Content */}
      <div style={{ position: "relative", zIndex: 1, maxWidth: "900px" }}>
        <p
          style={{
            fontFamily: "var(--font-accent)",
            fontSize: "var(--text-xs)",
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            color: "var(--warm)",
            marginBottom: "var(--space-lg)",
            opacity: 0.7,
          }}
        >
          Writer &middot; Creative &middot; Storyteller
        </p>

        {/* Name + portrait inline */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "var(--space-2xl)",
            marginBottom: "var(--space-xl)",
          }}
          className="hero-name-row"
        >
          <h1
            style={{
              fontSize: "clamp(3rem, 8vw, 11.09rem)",
              fontFamily: "var(--font-display)",
              fontWeight: 300,
              lineHeight: 0.95,
              letterSpacing: "-0.03em",
              color: "var(--light-primary)",
            }}
          >
            Indigo
            <br />
            <span
              style={{
                color: "var(--warm)",
                fontSize: "0.618em",
                fontWeight: 400,
                letterSpacing: "0.05em",
              }}
            >
              Bailey
            </span>
          </h1>

          {/* Small portrait beside name */}
          <div
            style={{
              width: "clamp(120px, 12vw, 199px)",
              height: "clamp(120px, 12vw, 199px)",
              borderRadius: "50%",
              overflow: "hidden",
              flexShrink: 0,
              border: "2px solid var(--dark-border)",
            }}
          >
            <img
              src="/indigo-bailey-portrait.PNG"
              alt="Indigo Bailey"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "center 20%",
                filter: "brightness(0.9) contrast(1.05)",
              }}
            />
          </div>
        </div>

        <p
          className="hero-subtitle"
          style={{
            fontSize: "var(--text-lg)",
            color: "var(--light-muted)",
            maxWidth: "61.8%",
            marginBottom: "var(--space-3xl)",
            fontWeight: 300,
          }}
        >
          Crafting stories that illuminate the spaces between what is said and
          what is felt.
        </p>

        <div style={{ display: "flex", gap: "var(--space-lg)" }}>
          <Button variant="primary" href="#work">
            View Work
          </Button>
          <Button variant="secondary" href="#about">
            About Me
          </Button>
        </div>
      </div>

      {/* Section transition gradient */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "200px",
          background: `
            linear-gradient(
              to bottom,
              transparent 0%,
              rgba(43, 43, 43, 0.05) 20%,
              rgba(43, 43, 43, 0.15) 40%,
              rgba(43, 43, 43, 0.4) 60%,
              rgba(43, 43, 43, 0.7) 80%,
              var(--dark-surface) 100%
            )
          `,
          pointerEvents: "none",
        }}
      />
      <div
        aria-hidden="true"
        className="hero-transition-shimmer"
        style={{
          position: "absolute",
          bottom: "60px",
          left: 0,
          right: 0,
          height: "1px",
          background: `
            linear-gradient(
              90deg,
              transparent 0%,
              var(--warm) 20%,
              var(--accent) 40%,
              var(--signature) 60%,
              var(--warm) 80%,
              transparent 100%
            )
          `,
          backgroundSize: "200% 100%",
          opacity: 0.25,
        }}
      />

      {/* Scroll indicator */}
      <div
        className="hero-scroll-indicator"
        style={{
          position: "absolute",
          bottom: "var(--space-2xl)",
          right: "var(--space-2xl)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "var(--space-sm)",
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-accent)",
            fontSize: "var(--text-xs)",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "var(--light-muted)",
            opacity: 0.4,
            writingMode: "vertical-rl",
          }}
        >
          Scroll
        </span>
        <div
          style={{
            width: "1px",
            height: "47px",
            background:
              "linear-gradient(to bottom, var(--light-muted), transparent)",
            opacity: 0.3,
          }}
        />
      </div>

      <style>{`
        @keyframes shimmer {
          0% { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }
        .hero-transition-shimmer {
          animation: shimmer 8s ease-in-out infinite;
        }
        @media (max-width: 768px) {
          .hero-section {
            min-height: auto !important;
            padding: var(--space-2xl) var(--space-xl) var(--space-2xl) !important;
            padding-top: calc(60px + var(--space-xl)) !important;
            justify-content: flex-start !important;
          }
          .hero-golden-line {
            display: none !important;
          }
          .hero-name-row {
            flex-direction: column;
            align-items: flex-start !important;
            gap: var(--space-lg) !important;
          }
          .hero-name-row > div {
            width: clamp(80px, 20vw, 120px) !important;
            height: clamp(80px, 20vw, 120px) !important;
          }
          .hero-subtitle {
            max-width: 100% !important;
            margin-bottom: var(--space-2xl) !important;
          }
          .hero-scroll-indicator {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
}
