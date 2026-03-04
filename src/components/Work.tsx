import React from "react";

interface WorkItem {
  title: string;
  category: string;
  description: string;
  accentColor: string;
}

const works: WorkItem[] = [
  {
    title: "The Quiet Between",
    category: "Fiction",
    description:
      "A collection of interconnected stories exploring the silences that shape families — what goes unsaid, what echoes through generations.",
    accentColor: "var(--accent)",
  },
  {
    title: "Pressed Flowers",
    category: "Poetry",
    description:
      "Poems rooted in the natural world and the Victorian language of flowers. Each piece preserves a moment, a feeling, a season.",
    accentColor: "var(--signature)",
  },
  {
    title: "On Borrowed Light",
    category: "Essay",
    description:
      "Personal essays on motherhood, memory, and the way we construct meaning from fragments of lived experience.",
    accentColor: "var(--secondary)",
  },
  {
    title: "Midnight Correspondences",
    category: "Fiction",
    description:
      "An epistolary novella told through letters never sent — exploring love, regret, and the stories we tell ourselves in the dark.",
    accentColor: "var(--primary-dark)",
  },
];

export default function Work() {
  return (
    <section
      id="work"
      style={{
        padding: "var(--space-5xl) var(--space-3xl)",
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
          marginBottom: "var(--space-lg)",
          opacity: 0.7,
        }}
      >
        02 &mdash; Work
      </p>

      <h2
        style={{
          fontSize: "clamp(2rem, 5vw, 4.236rem)",
          fontFamily: "var(--font-display)",
          fontWeight: 300,
          letterSpacing: "-0.02em",
          marginBottom: "var(--space-xl)",
          color: "var(--light-primary)",
        }}
      >
        Selected Writing
      </h2>

      <p
        style={{
          fontSize: "var(--text-lg)",
          color: "var(--light-muted)",
          maxWidth: "61.8%",
          marginBottom: "var(--space-3xl)",
          fontWeight: 300,
        }}
      >
        A curated selection of creative work spanning fiction, poetry, and
        personal essay.
      </p>

      {/* Card grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: "var(--space-xl)",
        }}
        className="work-grid"
      >
        {works.map((item) => (
          <article
            key={item.title}
            style={{
              background: "var(--dark-surface)",
              borderRadius: "4px 24px 4px 24px",
              padding: "var(--space-2xl)",
              position: "relative",
              overflow: "hidden",
              transition: "transform 0.3s ease",
              cursor: "pointer",
            }}
          >
            {/* Accent stripe */}
            <div
              aria-hidden="true"
              style={{
                position: "absolute",
                top: 0,
                right: 0,
                width: "38.2%",
                height: "3px",
                background: item.accentColor,
              }}
            />

            {/* Category */}
            <p
              style={{
                fontFamily: "var(--font-accent)",
                fontSize: "var(--text-xs)",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "var(--warm)",
                marginBottom: "var(--space-md)",
                opacity: 0.6,
              }}
            >
              {item.category}
            </p>

            {/* Title */}
            <h3
              style={{
                fontSize: "var(--text-xl)",
                fontFamily: "var(--font-display)",
                fontWeight: 400,
                marginBottom: "var(--space-lg)",
                color: "var(--light-primary)",
              }}
            >
              {item.title}
            </h3>

            {/* Description */}
            <p
              style={{
                fontSize: "var(--text-sm)",
                color: "var(--light-muted)",
                lineHeight: 1.618,
              }}
            >
              {item.description}
            </p>

            {/* Read more indicator */}
            <div
              style={{
                marginTop: "var(--space-xl)",
                display: "flex",
                alignItems: "center",
                gap: "var(--space-sm)",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-accent)",
                  fontSize: "var(--text-xs)",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color: "var(--warm)",
                }}
              >
                Read More
              </span>
              <span style={{ color: "var(--warm)", fontSize: "var(--text-sm)" }}>
                &rarr;
              </span>
            </div>
          </article>
        ))}
      </div>

      <style>{`
        @media (max-width: 768px) {
          .work-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
