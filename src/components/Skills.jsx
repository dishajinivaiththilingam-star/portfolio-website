const skills = [
  { name: "HTML", cat: "Frontend", pct: 90 },
  { name: "JavaScript", cat: "Frontend", pct: 83 },
  { name: "React.js", cat: "Frontend", pct: 82 },
  { name: "Vite", cat: "Frontend", pct: 76 },
  { name: "Bootstrap / Tailwind", cat: "Frontend", pct: 80 },
  { name: "Node.js", cat: "Backend", pct: 78 },
  { name: "Express.js", cat: "Backend", pct: 76 },
  { name: "MySQL", cat: "Backend", pct: 80 },
  { name: "REST APIs", cat: "Backend", pct: 78 },
  { name: "Full-Stack Dev", cat: "Fullstack", pct: 75 },
];

const catStyle = {
  Frontend: { bg: "#e1f5ee", accent: "#0f7c6b", text: "#085041" },
  Backend:  { bg: "#faece7", accent: "#d85a30", text: "#712b13" },
  Fullstack:{ bg: "#eeedfe", accent: "#534ab7", text: "#3c3489" },
};

export default function Skills() {
  return (
    <section id="skills" style={{
      background: "#f5f2ee", padding: "6rem 0",
      borderTop: "1.5px solid #e0dbd4",
    }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 2.5rem" }}>

        <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "4rem" }}>
          <span style={{
            fontFamily: "'Fraunces',serif", fontWeight: 900,
            fontSize: "6rem", color: "#e8e4de", lineHeight: 1,
          }}>03</span>
          <div>
            <p style={{
              fontFamily: "'Space Grotesk',sans-serif", fontWeight: 600,
              fontSize: "0.68rem", letterSpacing: "0.22em", color: "#d85a30",
              textTransform: "uppercase", marginBottom: "0.3rem",
            }}>What I know</p>
            <h2 style={{
              fontFamily: "'Fraunces',serif", fontSize: "2.4rem",
              fontWeight: 900, color: "#111", letterSpacing: "-0.02em", lineHeight: 1.1,
            }}>Skills &amp;<br /><em style={{ fontStyle: "italic", color: "#d85a30" }}>Technologies</em></h2>
          </div>
        </div>

        {/* Skill cards */}
        <div style={{
          display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
          gap: "1rem", marginBottom: "3rem",
        }}>
          {skills.map(({ name, cat, pct }) => {
            const cs = catStyle[cat];
            return (
              <div key={name} style={{
                background: "#fff", border: "1.5px solid #e0dbd4",
                padding: "1.4rem 1.2rem",
                borderTop: `3px solid ${cs.accent}`,
                transition: "transform 0.2s, border-color 0.2s",
              }}
                onMouseEnter={e => e.currentTarget.style.transform = "translateY(-3px)"}
                onMouseLeave={e => e.currentTarget.style.transform = "translateY(0)"}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "1rem" }}>
                  <p style={{
                    fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700,
                    fontSize: "0.9rem", color: "#111",
                  }}>{name}</p>
                  <span style={{
                    fontFamily: "'Space Grotesk',sans-serif", fontSize: "0.6rem",
                    fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em",
                    background: cs.bg, color: cs.text, padding: "3px 8px",
                  }}>{cat}</span>
                </div>
                <div style={{ height: "3px", background: "#eee", marginBottom: "0.5rem" }}>
                  <div style={{ height: "100%", width: `${pct}%`, background: cs.accent }} />
                </div>
                <p style={{
                  fontFamily: "'Space Grotesk',sans-serif", fontSize: "0.68rem",
                  color: "#aaa", textAlign: "right",
                }}>{pct}%</p>
              </div>
            );
          })}
        </div>

        {/* Language row */}
        <div style={{ borderTop: "1.5px solid #e0dbd4", paddingTop: "2rem" }}>
          <p style={{
            fontFamily: "'Space Grotesk',sans-serif", fontWeight: 600,
            fontSize: "0.68rem", letterSpacing: "0.2em", color: "#aaa",
            textTransform: "uppercase", marginBottom: "1rem",
          }}>Languages</p>
          <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
            {[
              { lang: "Tamil", level: "Native" },
              { lang: "English", level: "Proficient" },
              { lang: "Sinhala", level: "Basic" },
            ].map(({ lang, level }) => (
              <div key={lang} style={{
                display: "flex", alignItems: "center", gap: "0.6rem",
                background: "#fff", border: "1.5px solid #e0dbd4",
                padding: "0.6rem 1.2rem",
              }}>
                <span style={{
                  fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700,
                  fontSize: "0.85rem", color: "#111",
                }}>{lang}</span>
                <span style={{
                  fontFamily: "'DM Sans',sans-serif", fontSize: "0.75rem",
                  color: "#aaa",
                }}>— {level}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}