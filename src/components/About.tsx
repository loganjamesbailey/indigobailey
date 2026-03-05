export default function About() {
  return (
    <section
      id="about"
      style={{
        padding: "var(--space-5xl) var(--space-3xl)",
        background: "var(--dark-surface)",
        position: "relative",
      }}
    >
      {/* Section label */}
      <p
        style={{
          fontFamily: "var(--font-accent)",
          fontSize: "var(--text-xs)",
          letterSpacing: "0.3em",
          textTransform: "uppercase",
          color: "var(--warm)",
          marginBottom: "var(--space-2xl)",
          opacity: 0.7,
        }}
      >
        01 &mdash; About
      </p>

      {/* Golden ratio layout */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "61.8% 38.2%",
          gap: "var(--space-3xl)",
          alignItems: "start",
        }}
        className="about-grid"
      >
        {/* Major — bio text */}
        <div>
          <h2
            style={{
              fontSize: "clamp(2rem, 5vw, 4.236rem)",
              fontFamily: "var(--font-display)",
              fontWeight: 300,
              letterSpacing: "-0.02em",
              marginBottom: "var(--space-2xl)",
              color: "var(--light-primary)",
            }}
          >
            Words are the architecture
            <br />
            <span style={{ color: "var(--warm)" }}>of feeling.</span>
          </h2>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "var(--space-lg)",
              fontSize: "var(--text-base)",
              color: "var(--light-muted)",
              lineHeight: 1.618,
            }}
          >
            <p>
              Indigo Bailey is a writer and creative whose work explores the
              tension between silence and expression, memory and invention.
              With a voice shaped by both classical literature and lived
              experience, her writing moves between the personal and the
              universal.
            </p>
            <p>
              Her creative practice spans fiction, essay, and poetry — always
              searching for the precise word that makes a reader pause,
              reconsider, and feel something shift beneath the surface.
            </p>
            <p>
              Based in North Carolina, she draws inspiration from the natural world,
              Victorian literature, and the quiet moments that contain
              multitudes.
            </p>
          </div>
        </div>

        {/* Minor — stats */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "var(--space-2xl)",
            paddingTop: "var(--space-4xl)",
          }}
        >
          <div
            style={{
              padding: "var(--space-xl)",
              borderLeft: "2px solid var(--accent)",
            }}
          >
            <p
              style={{
                fontFamily: "var(--font-accent)",
                fontSize: "var(--text-xs)",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "var(--warm)",
                marginBottom: "var(--space-sm)",
              }}
            >
              Focus
            </p>
            <p
              style={{
                fontSize: "var(--text-sm)",
                color: "var(--light-muted)",
              }}
            >
              Fiction &middot; Essay &middot; Poetry
            </p>
          </div>

          <div
            style={{
              padding: "var(--space-xl)",
              borderLeft: "2px solid var(--signature)",
            }}
          >
            <p
              style={{
                fontFamily: "var(--font-accent)",
                fontSize: "var(--text-xs)",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "var(--warm)",
                marginBottom: "var(--space-sm)",
              }}
            >
              Themes
            </p>
            <p
              style={{
                fontSize: "var(--text-sm)",
                color: "var(--light-muted)",
              }}
            >
              Memory &middot; Identity &middot; Nature &middot; Silence
            </p>
          </div>

          <div
            style={{
              padding: "var(--space-xl)",
              borderLeft: "2px solid var(--secondary)",
            }}
          >
            <p
              style={{
                fontFamily: "var(--font-accent)",
                fontSize: "var(--text-xs)",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "var(--warm)",
                marginBottom: "var(--space-sm)",
              }}
            >
              Based In
            </p>
            <p
              style={{
                fontSize: "var(--text-sm)",
                color: "var(--light-muted)",
              }}
            >
              North Carolina
            </p>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #about {
            padding: var(--space-3xl) var(--space-xl) !important;
          }
          .about-grid {
            grid-template-columns: 1fr !important;
            gap: var(--space-xl) !important;
          }
          .about-grid > div:last-child {
            padding-top: 0 !important;
          }
        }
      `}</style>
    </section>
  );
}
