export default function About() {

  return (
    <section
      id="about"
      style={{
        background: "#ffffff",
        padding: "6rem 0",
        borderTop: "1.5px solid #e0dbd4",
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "0 2.5rem",
        }}
      >

        {/* Section Header */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "1rem",
            marginBottom: "4rem",
          }}
        >
          <span
            style={{
              fontFamily: "'Fraunces',serif",
              fontWeight: 900,
              fontSize: "6rem",
              color: "#f0ece6",
              lineHeight: 1,
            }}
          >
            02
          </span>

          <div>
            <p
              style={{
                fontFamily: "'Space Grotesk',sans-serif",
                fontWeight: 600,
                fontSize: "0.68rem",
                letterSpacing: "0.22em",
                color: "#0f7c6b",
                textTransform: "uppercase",
                marginBottom: "0.3rem",
              }}
            >
              About Me
            </p>

            <h2
              style={{
                fontFamily: "'Fraunces',serif",
                fontSize: "2.5rem",
                fontWeight: 900,
                color: "#111",
                letterSpacing: "-0.02em",
                lineHeight: 1.1,
              }}
            >
              Back{" "}
              <em style={{ fontStyle: "italic", color: "#0f7c6b" }}>
                ground
              </em>
            </h2>
          </div>
        </div>

        {/* Center Content */}
        <div
          style={{
            maxWidth: "900px",
            margin: "0 auto",
          }}
        >

          {/* About Text */}
          <div
            style={{
              borderLeft: "4px solid #0f7c6b",
              paddingLeft: "1.8rem",
              marginBottom: "3.5rem",
            }}
          >
            <p
              style={{
                fontFamily: "'DM Sans',sans-serif",
                fontSize: "1.05rem",
                lineHeight: 1.9,
                color: "#333",
              }}
            >
              Passionate web developer with knowledge in full-stack web
              development and basic AI concepts. Capable of developing
              responsive and interactive web applications with strong analytical
              and creative thinking skills.
            </p>
          </div>

          {/* Info Boxes */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "1rem",
            }}
            className="dv-about-boxes"
          >
            {[
  {
    icon: "📞",
    label: "Phone",
    val: "+94 76 77 94 739",
  },

  {
    icon: "✉️",
    label: "Email",
    val: "dishajinivaiththilingam@gmail.com",
    link: "mailto:dishajinivaiththilingam@gmail.com",
  },

  {
    icon: "📍",
    label: "Address",
    val: "D4, Maruthanagar, Kilinochchi",
  },

  {
    icon: "🌐",
    label: "Languages",
    val: "Tamil · English · Sinhala",
  },
].map(({ icon, label, val, link }) => (
  <div
    key={label}
    style={{
      background: "#faf7f3",
      padding: "2rem 1.5rem",
      border: "1.5px solid #e0dbd4",
      borderBottom: "4px solid #0f7c6b",
      minHeight: "150px",

      display: "flex",
      flexDirection: "column",
      justifyContent: "center",

      transition: "0.3s ease",
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.transform = "translateY(-5px)";
      e.currentTarget.style.boxShadow =
        "0 12px 25px rgba(0,0,0,0.08)";
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.transform = "translateY(0)";
      e.currentTarget.style.boxShadow = "none";
    }}
  >
    <div
      style={{
        width: "52px",
        height: "52px",
        background: "#e1f5ee",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "1.3rem",
        marginBottom: "1rem",
        borderRadius: "14px",
      }}
    >
      {icon}
    </div>

    <p
      style={{
        fontFamily: "'Space Grotesk',sans-serif",
        fontSize: "0.7rem",
        letterSpacing: "0.16em",
        color: "#0f7c6b",
        textTransform: "uppercase",
        marginBottom: "0.6rem",
        fontWeight: 700,
      }}
    >
      {label}
    </p>

    {link ? (
      <a
        href={link}
        style={{
          fontFamily: "'DM Sans',sans-serif",
          fontSize: "0.95rem",
          color: "#222",
          lineHeight: 1.7,
          fontWeight: 500,
          textDecoration: "none",
        }}
      >
        {val}
      </a>
    ) : (
      <p
        style={{
          fontFamily: "'DM Sans',sans-serif",
          fontSize: "0.95rem",
          color: "#222",
          lineHeight: 1.7,
          fontWeight: 500,
        }}
      >
        {val}
      </p>
    )}
  </div>
))}
          </div>

        </div>
      </div>
    </section>
  );
}