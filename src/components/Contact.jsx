export default function Contact() {
  return (
    <section id="contact" style={{
      background: "#111", padding: "6rem 0",
    }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 2.5rem" }}>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", alignItems: "start" }} className="dv-contact-grid">

          {/* Left CTA */}
          <div>
            <p style={{
              fontFamily: "'Space Grotesk',sans-serif", fontWeight: 600,
              fontSize: "0.68rem", letterSpacing: "0.22em", color: "#0f7c6b",
              textTransform: "uppercase", marginBottom: "1.2rem",
            }}>05 — Let's Talk</p>

            <h2 style={{
              fontFamily: "'Fraunces',serif", fontSize: "clamp(2.5rem,5vw,4rem)",
              fontWeight: 900, color: "#fff", lineHeight: 1.05,
              letterSpacing: "-0.02em", marginBottom: "1.5rem",
            }}>
              Open to<br />
              <em style={{ fontStyle: "italic", color: "#0f7c6b" }}>opportunities</em>
            </h2>

            <p style={{
              fontFamily: "'DM Sans',sans-serif", fontSize: "1rem",
              lineHeight: 1.8, color: "rgba(255,255,255,0.5)", marginBottom: "2.5rem",
            }}>
              I'm available for freelance projects, internships, and
              collaborations. Let's create something meaningful together.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
  {[
    { label: "Phone", val: "+94 76 77 94 739", icon: "📞" },

    {
      label: "GitHub",
      val: "https://github.com/dishajinivaiththilingam-star",
      icon: "💻",
      link: "https://github.com/dishajinivaiththilingam-star",
    },

    {
      label: "Email",
      val: "dishajinivaiththilingam@gmail.com",
      icon: "✉️",
      link: "mailto:dishajinivaiththilingam@gmail.com",
    },

    { label: "Location", val: "SriLanka", icon: "📍" },
  ].map(({ label, val, icon, link }) => (
    <div
      key={label}
      style={{
        display: "flex",
        alignItems: "center",
        gap: "1rem",
        borderBottom: "1px solid rgba(255,255,255,0.08)",
        paddingBottom: "1rem",
      }}
    >
      <div
        style={{
          width: "42px",
          height: "42px",
          flexShrink: 0,
          border: "1px solid rgba(255,255,255,0.1)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "1.1rem",
        }}
      >
        {icon}
      </div>

      <div>
        <p
          style={{
            fontFamily: "'Space Grotesk',sans-serif",
            fontSize: "0.62rem",
            letterSpacing: "0.15em",
            color: "rgba(255,255,255,0.3)",
            textTransform: "uppercase",
            marginBottom: "0.2rem",
          }}
        >
          {label}
        </p>

        {link ? (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: "'DM Sans',sans-serif",
              fontSize: "0.9rem",
              color: "rgba(255,255,255,0.75)",
              textDecoration: "none",
              transition: "0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "#0f7c6b";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color =
                "rgba(255,255,255,0.75)";
            }}
          >
            {val}
          </a>
        ) : (
          <p
            style={{
              fontFamily: "'DM Sans',sans-serif",
              fontSize: "0.9rem",
              color: "rgba(255,255,255,0.75)",
            }}
          >
            {val}
          </p>
        )}
      </div>
    </div>
  ))}
</div>
          </div>

          {/* Right: availability card */}
          <div>
            <div style={{
              background: "#0f7c6b", padding: "2.5rem",
              marginBottom: "1.5rem",
            }}>
              <p style={{
                fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700,
                fontSize: "0.68rem", letterSpacing: "0.2em",
                color: "rgba(255,255,255,0.6)", textTransform: "uppercase",
                marginBottom: "1.2rem",
              }}>Currently available for</p>
              {["Internships", "Freelance Projects", "Full-time Roles", "Open Source Collaboration"].map((item, i) => (
                <div key={i} style={{
                  display: "flex", alignItems: "center", gap: "0.8rem",
                  padding: "0.8rem 0",
                  borderBottom: i < 3 ? "1px solid rgba(255,255,255,0.15)" : "none",
                }}>
                  <div style={{
                    width: "8px", height: "8px", background: "#fff",
                    flexShrink: 0,
                  }} />
                  <p style={{
                    fontFamily: "'Space Grotesk',sans-serif", fontWeight: 600,
                    fontSize: "0.95rem", color: "#fff",
                  }}>{item}</p>
                </div>
              ))}
            </div>

            <div style={{
              border: "1.5px solid rgba(255,255,255,0.08)",
              padding: "1.5rem",
            }}>
              <p style={{
                fontFamily: "'Space Grotesk',sans-serif", fontSize: "0.7rem",
                letterSpacing: "0.15em", color: "rgba(255,255,255,0.35)",
                textTransform: "uppercase", marginBottom: "1rem",
              }}>Expertise snapshot</p>
              {[
                { label: "Frontend", pct: 83 },
                { label: "Backend", pct: 78 },
                { label: "Database", pct: 80 },
                { label: "Full-Stack", pct: 75 },
              ].map(({ label, pct }) => (
                <div key={label} style={{ marginBottom: "0.9rem" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.3rem" }}>
                    <span style={{
                      fontFamily: "'Space Grotesk',sans-serif", fontSize: "0.75rem",
                      color: "rgba(255,255,255,0.55)", fontWeight: 500,
                    }}>{label}</span>
                    <span style={{
                      fontFamily: "'Space Grotesk',sans-serif", fontSize: "0.72rem",
                      color: "#0f7c6b",
                    }}>{pct}%</span>
                  </div>
                  <div style={{ height: "2px", background: "rgba(255,255,255,0.08)" }}>
                    <div style={{ height: "100%", width: `${pct}%`, background: "#0f7c6b" }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}