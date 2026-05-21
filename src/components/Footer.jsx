export default function Footer() {
  return (
    <footer style={{
      background: "#0a0a0a", borderTop: "1.5px solid rgba(255,255,255,0.06)",
      padding: "2rem 2.5rem",
      display: "flex", alignItems: "center", justifyContent: "space-between",
      flexWrap: "wrap", gap: "1rem",
    }}>
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <div style={{
          width: "26px", height: "26px", background: "#0f7c6b",
          display: "flex", alignItems: "center", justifyContent: "center",
        }}>
          <span style={{
            color: "#fff", fontFamily: "'Space Grotesk',sans-serif",
            fontWeight: 700, fontSize: "0.65rem",
          }}>DV</span>
        </div>
        <span style={{
          fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700,
          fontSize: "0.85rem", color: "rgba(255,255,255,0.6)",
        }}>Dishajini Vaiththilingam</span>
      </div>

      <p style={{
        fontFamily: "'Space Grotesk',sans-serif", fontSize: "0.68rem",
        letterSpacing: "0.08em", color: "rgba(255,255,255,0.2)",
      }}>© 2026 · Web Developer · Kilinochchi</p>

      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        style={{
          background: "none", border: "1px solid rgba(255,255,255,0.15)",
          color: "rgba(255,255,255,0.4)", fontFamily: "'Space Grotesk',sans-serif",
          fontSize: "0.7rem", fontWeight: 600, letterSpacing: "0.08em",
          padding: "0.45rem 1rem", cursor: "pointer",
          textTransform: "uppercase", transition: "all 0.2s",
        }}
        onMouseEnter={e => {
          e.currentTarget.style.borderColor = "#0f7c6b";
          e.currentTarget.style.color = "#0f7c6b";
        }}
        onMouseLeave={e => {
          e.currentTarget.style.borderColor = "rgba(255,255,255,0.15)";
          e.currentTarget.style.color = "rgba(255,255,255,0.4)";
        }}
      >↑ Top</button>
    </footer>
  );
}