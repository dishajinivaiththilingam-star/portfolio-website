export default function About() {
  const edu = [
    { year: "Present", school: "University of Eastern", detail: "Faculty of Science — R", tag: "University" },
    { year: "2024", school: "Little Tech Academy", detail: "Web Design · Computer Application", tag: "Training" },
    { year: "2024", school: "Kilinochchi M.V", detail: "GCE A/L — Results: 2CS", tag: "School" },
    { year: "2021", school: "Kilinochchi M.V", detail: "GCE O/L — Results: 8AB", tag: "School" },
  ];

  const tagColor = { University: "#0f7c6b", Training: "#d85a30", School: "#444" };

  return (
    <section id="about" style={{
      background: "#ffffff", padding: "6rem 0",
      borderTop: "1.5px solid #e0dbd4",
    }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 2.5rem" }}>

        {/* Section header */}
        <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "4rem" }}>
          <span style={{
            fontFamily: "'Fraunces',serif", fontWeight: 900,
            fontSize: "6rem", color: "#f0ece6", lineHeight: 1,
          }}>02</span>
          <div>
            <p style={{
              fontFamily: "'Space Grotesk',sans-serif", fontWeight: 600,
              fontSize: "0.68rem", letterSpacing: "0.22em", color: "#0f7c6b",
              textTransform: "uppercase", marginBottom: "0.3rem",
            }}>About Me</p>
            <h2 style={{
              fontFamily: "'Fraunces',serif", fontSize: "2.4rem",
              fontWeight: 900, color: "#111", letterSpacing: "-0.02em", lineHeight: 1.1,
            }}>Background &amp;<br /><em style={{ fontStyle: "italic", color: "#0f7c6b" }}>Education</em></h2>
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "5fr 4fr", gap: "5rem", alignItems: "start" }} className="dv-about-grid">

          {/* Profile */}
          <div>
            <div style={{
              borderLeft: "3px solid #0f7c6b", paddingLeft: "1.5rem", marginBottom: "2.5rem",
            }}>
              <p style={{
                fontFamily: "'DM Sans',sans-serif", fontSize: "1.05rem",
                lineHeight: 1.85, color: "#333",
              }}>
                Passionate web developer with knowledge in full-stack web development
                and basic AI concepts. Capable of developing responsive and interactive
                web applications with strong analytical and creative thinking skills.
              </p>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem" }}>
              {[
                { icon: "📞", label: "Phone", val: "+94 76 77 94 739" },
                { icon: "✉️", label: "Email", val: "dishajinivaiththilingam@gmail.com" },
                { icon: "📍", label: "Address", val: "D4, Maruthanagar, Kilinochchi" },
                { icon: "🌐", label: "Languages", val: "Tamil · English · Sinhala" },
              ].map(({ icon, label, val }) => (
                <div key={label} style={{
                  background: "#f9f6f2", padding: "1rem 1.2rem",
                  borderBottom: "2px solid #e0dbd4",
                }}>
                  <p style={{
                    fontFamily: "'Space Grotesk',sans-serif", fontSize: "0.65rem",
                    letterSpacing: "0.15em", color: "#0f7c6b",
                    textTransform: "uppercase", marginBottom: "0.4rem",
                  }}>{icon} {label}</p>
                  <p style={{
                    fontFamily: "'DM Sans',sans-serif", fontSize: "0.85rem",
                    color: "#222", lineHeight: 1.5,
                  }}>{val}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            {edu.map(({ year, school, detail, tag }, i) => (
              <div key={i} style={{
                borderTop: i === 0 ? "1.5px solid #111" : "none",
                borderBottom: "1.5px solid #e0dbd4",
                padding: "1.4rem 0",
                display: "grid", gridTemplateColumns: "56px 1fr", gap: "1rem",
              }}>
                <span style={{
                  fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700,
                  fontSize: "0.72rem", color: "#aaa", paddingTop: "3px",
                  letterSpacing: "0.05em",
                }}>{year}</span>
                <div>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.2rem" }}>
                    <p style={{
                      fontFamily: "'Fraunces',serif", fontWeight: 700,
                      fontSize: "1rem", color: "#111",
                    }}>{school}</p>
                    <span style={{
                      fontFamily: "'Space Grotesk',sans-serif", fontSize: "0.58rem",
                      fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase",
                      color: "#fff", background: tagColor[tag],
                      padding: "2px 8px",
                    }}>{tag}</span>
                  </div>
                  <p style={{
                    fontFamily: "'DM Sans',sans-serif", fontSize: "0.83rem",
                    color: "#666",
                  }}>{detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}