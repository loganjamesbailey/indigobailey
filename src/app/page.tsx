export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "var(--space-3xl)",
      }}
    >
      <h1
        style={{
          fontSize: "var(--text-3xl)",
          fontFamily: "var(--font-display)",
          marginBottom: "var(--space-lg)",
        }}
      >
        Site Template
      </h1>
      <p
        style={{
          fontSize: "var(--text-lg)",
          maxWidth: "61.8%",
          textAlign: "center",
        }}
      >
        Fill in project-tokens.css and start building.
      </p>
    </main>
  );
}
