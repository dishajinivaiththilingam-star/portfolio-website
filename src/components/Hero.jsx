export default function Hero() {
  return (
    <section
      id="hero"
      style={{
        minHeight: "100vh",
        background: "#f5f2ee",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        overflow: "hidden",
      }}
      className="dv-hero"
    >

      {/* Left Side */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "8rem 4rem",
          borderRight: "1.5px solid #ddd6cf",
          position: "relative",
          overflow: "hidden",
        }}
      >

        {/* Background Blur Circle */}
        <div
          style={{
            position: "absolute",
            top: "-120px",
            left: "-120px",
            width: "280px",
            height: "280px",
            borderRadius: "50%",
            background: "#e7f5f1",
            opacity: 0.9,
          }}
        />

        {/* Big Number */}
        <span
          style={{
            position: "absolute",
            top: "3rem",
            left: "3rem",
            fontFamily: "'Space Grotesk',sans-serif",
            fontWeight: 700,
            fontSize: "9rem",
            color: "#e8e4de",
            lineHeight: 1,
            userSelect: "none",
            zIndex: 0,
          }}
        >
          01
        </span>

        <div style={{ position: "relative", zIndex: 2 }}>

          {/* Small Tag */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              marginBottom: "2rem",
            }}
          >
            <div
              style={{
                width: "40px",
                height: "2px",
                background: "#0f7c6b",
              }}
            />

            <span
              style={{
                fontFamily: "'Space Grotesk',sans-serif",
                fontWeight: 700,
                fontSize: "0.72rem",
                letterSpacing: "0.22em",
                color: "#0f7c6b",
                textTransform: "uppercase",
              }}
            >
              Web Developer
            </span>
          </div>

          {/* Name */}
          <h1
            style={{
              fontFamily: "'Fraunces',serif",
              fontSize: "clamp(3.8rem,7vw,6.2rem)",
              fontWeight: 900,
              color: "#111",
              lineHeight: 0.95,
              letterSpacing: "-0.04em",
              marginBottom: "2rem",
            }}
          >
            Dishajini
            <br />
            <em
              style={{
                fontStyle: "italic",
                color: "#0f7c6b",
                fontWeight: 800,
              }}
            >
              Vaiththilingam
            </em>
          </h1>

          {/* Description */}
          <p
            style={{
              fontFamily: "'DM Sans',sans-serif",
              fontSize: "1rem",
              lineHeight: 1.9,
              color: "#555",
              maxWidth: "420px",
              marginBottom: "2.8rem",
            }}
          >
            Passionate full-stack web developer with skills in React,
            Node.js, and MySQL — building responsive and interactive
            web applications with clean modern design.
          </p>

          {/* Buttons */}
          <div
            style={{
              display: "flex",
              gap: "1rem",
              flexWrap: "wrap",
            }}
          >

            <button
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              style={{
                background: "#111",
                color: "#fff",
                border: "none",
                padding: "1rem 2.2rem",
                fontFamily: "'Space Grotesk',sans-serif",
                fontWeight: 700,
                fontSize: "0.8rem",
                letterSpacing: "0.08em",
                cursor: "pointer",
                textTransform: "uppercase",
                transition: "0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#0f7c6b";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "#111";
              }}
            >
              Get in Touch
            </button>

            

          </div>
        </div>
      </div>

      {/* Right Side */}
      <div
        style={{
          background: "#111",
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
          padding: "4rem",
        }}
      >

        {/* Decorative Shapes */}
        <div
          style={{
            position: "absolute",
            width: "420px",
            height: "420px",
            border: "1px solid rgba(255,255,255,0.08)",
            transform: "rotate(45deg)",
          }}
        />

        <div
          style={{
            position: "absolute",
            width: "260px",
            height: "260px",
            border: "35px solid rgba(15,124,107,0.25)",
            transform: "rotate(20deg)",
          }}
        />

        <div
          style={{
            position: "absolute",
            width: "120px",
            height: "120px",
            background: "#0f7c6b",
            opacity: 0.15,
            borderRadius: "50%",
            top: "20%",
            right: "15%",
          }}
        />

        {/* Center Content */}
        <div
          style={{
            position: "relative",
            zIndex: 2,
            textAlign: "center",
            maxWidth: "420px",
          }}
        >

          <p
            style={{
              fontFamily: "'Space Grotesk',sans-serif",
              fontSize: "0.75rem",
              letterSpacing: "0.25em",
              color: "rgba(255,255,255,0.45)",
              textTransform: "uppercase",
              marginBottom: "1.2rem",
            }}
          >
            Creative Developer
          </p>

          <h2
            style={{
              fontFamily: "'Fraunces',serif",
              fontSize: "3rem",
              fontWeight: 900,
              color: "#fff",
              lineHeight: 1.1,
              marginBottom: "1.5rem",
            }}
          >
            Building
            <br />
            <em
              style={{
                color: "#0f7c6b",
                fontStyle: "italic",
              }}
            >
              modern
            </em>{" "}
            digital
            <br />
            experiences
          </h2>

          <p
            style={{
              fontFamily: "'DM Sans',sans-serif",
              fontSize: "1rem",
              lineHeight: 1.9,
              color: "rgba(255,255,255,0.6)",
            }}
          >
            Focused on clean interfaces, responsive layouts,
            and interactive web applications with modern
            frontend and backend technologies.
          </p>

        </div>
      </div>
    </section>
  );
}