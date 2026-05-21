export default function Hero() {
  return (
    <section id="hero" style={{
      minHeight: "100vh", background: "#f5f2ee",
      display: "grid", gridTemplateColumns: "1fr 1fr",
      overflow: "hidden",
    }} className="dv-hero">

      {/* Left: big type */}
      <div style={{
        display: "flex", flexDirection: "column", justifyContent: "center",
        padding: "8rem 3rem 5rem 3rem", borderRight: "1.5px solid #d4d0ca",
        position: "relative",
      }}>
        {/* Decorative large number */}
        <span style={{
          position: "absolute", top: "5rem", left: "3rem",
          fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700,
          fontSize: "9rem", color: "#e8e4de", lineHeight: 1, userSelect: "none",
          zIndex: 0,
        }}>01</span>

        <div style={{ position: "relative", zIndex: 1 }}>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "2rem" }}>
            <div style={{ width: "32px", height: "2px", background: "#0f7c6b" }} />
            <span style={{
              fontFamily: "'Space Grotesk',sans-serif", fontWeight: 600,
              fontSize: "0.72rem", letterSpacing: "0.2em", color: "#0f7c6b",
              textTransform: "uppercase",
            }}>Web Developer</span>
          </div>

          <h1 style={{
            fontFamily: "'Fraunces',serif", fontSize: "clamp(3.5rem,7vw,5.8rem)",
            fontStyle:"italic",
            fontWeight: 900, color: "#111", lineHeight: 1.0,
            margin: "0 0 2rem", letterSpacing: "-0.03em",
          }}>
            Dishajini<br />
            Vaiththilingam
          </h1>

          <p style={{
            fontFamily: "'DM Sans',sans-serif", fontSize: "1rem",
            lineHeight: 1.75, color: "#555", maxWidth: "380px", marginBottom: "2.5rem",
          }}>
            Passionate full-stack web developer with skills in React, Node.js,
            and MySQL — building responsive, interactive web applications.
          </p>

          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            {/* <button onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
              style={{
                background: "#111", color: "#fff", border: "none",
                padding: "0.9rem 2rem", fontFamily: "'Space Grotesk',sans-serif",
                fontWeight: 600, fontSize: "0.82rem", letterSpacing: "0.05em",
                cursor: "pointer", textTransform: "uppercase",
              }}>View Projects</button> */}
            <button onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              style={{
                background: "transparent", color: "#111",
                border: "1.5px solid #111",
                padding: "0.9rem 2rem", fontFamily: "'Space Grotesk',sans-serif",
                fontWeight: 600, fontSize: "0.82rem", letterSpacing: "0.05em",
                cursor: "pointer", textTransform: "uppercase",
              }}>Get in Touch</button>
          </div>
        </div>
      </div>

      {/* Right: info panel */}
      <div style={{
        display: "flex", flexDirection: "column", justifyContent: "flex-end",
        padding: "5rem 3rem", background: "#111", position: "relative", overflow: "hidden",
      }}>
        {/* Teal geometric accent */}
        <div style={{
          position: "absolute", top: "-60px", right: "-60px",
          width: "240px", height: "240px",
          border: "40px solid #0f7c6b", opacity: 0.35,
        }} />
        <div style={{
          position: "absolute", top: "50%", left: "50%",
          transform: "translate(-50%,-50%)",
          width: "180px", height: "180px",
          border: "1px solid rgba(255,255,255,0.06)",
        }} />

        <div style={{ position: "relative", zIndex: 1 }}>
          {/* Stat chips */}
          {[
            { n: "8AB", label: "GCE O/L Results" },
            { n: "2CS", label: "GCE A/L Results" },
            { n: "4+", label: "Technologies" },
            { n: "FSK", label: "Full Stack Dev" },
          ].map(({ n, label }) => (
            <div key={label} style={{
              display: "flex", alignItems: "center", justifyContent: "space-between",
              borderBottom: "1px solid rgba(255,255,255,0.08)",
              padding: "1.2rem 0",
            }}>
              <span style={{
                fontFamily: "'Fraunces',serif", fontSize: "2rem",
                fontWeight: 700, color: "#ffffff", letterSpacing: "-0.02em",
              }}>{n}</span>
              <span style={{
                fontFamily: "'Space Grotesk',sans-serif", fontSize: "0.75rem",
                fontWeight: 500, color: "rgba(255,255,255,0.45)",
                letterSpacing: "0.06em", textTransform: "uppercase",
              }}>{label}</span>
            </div>
          ))}

          <div style={{ marginTop: "2rem" }}>
            <p style={{
              fontFamily: "'Space Grotesk',sans-serif", fontSize: "0.7rem",
              letterSpacing: "0.15em", color: "rgba(255,255,255,0.3)",
              textTransform: "uppercase", marginBottom: "0.5rem",
            }}>Location</p>
            <p style={{
              fontFamily: "'DM Sans',sans-serif", fontSize: "1rem",
              color: "rgba(255,255,255,0.75)",
            }}>D4, Maruthanagar, Kilinochchi</p>
          </div>
        </div>
      </div>
    </section>
  );
}