import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const nav = ["About", "Skills", "Experience", "Contact"];
  const go = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
      height: "60px", display: "flex", alignItems: "center",
      justifyContent: "space-between", padding: "0 2.5rem",
      background: scrolled ? "#ffffff" : "transparent",
      borderBottom: scrolled ? "1.5px solid #111" : "none",
      transition: "all 0.3s ease",
    }}>
      <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        style={{ background: "none", border: "none", cursor: "pointer", display: "flex", alignItems: "center", gap: "8px" }}>
        <div style={{ width: "28px", height: "28px", background: "#111", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <span style={{ color: "#fff", fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700, fontSize: "0.72rem", letterSpacing: "0.05em" }}>DV</span>
        </div>
        <span style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700, fontSize: "0.9rem", color: "#111", letterSpacing: "-0.01em" }}>
          Dishajini
        </span>
      </button>

      <div className="dv-navlinks" style={{ display: "flex", gap: "2.5rem", alignItems: "center" }}>
        {nav.map(l => (
          <button key={l} onClick={() => go(l)} style={{
            background: "none", border: "none", fontFamily: "'Space Grotesk',sans-serif",
            fontSize: "0.82rem", fontWeight: 500, color: "#444", cursor: "pointer",
            letterSpacing: "0.02em", transition: "color 0.2s",
          }}
            onMouseEnter={e => e.target.style.color = "#0f7c6b"}
            onMouseLeave={e => e.target.style.color = "#444"}
          >{l}</button>
        ))}
        <button onClick={() => go("Contact")} style={{
          background: "#111", color: "#fff", border: "none",
          padding: "0.5rem 1.3rem", fontFamily: "'Space Grotesk',sans-serif",
          fontSize: "0.78rem", fontWeight: 600, cursor: "pointer", letterSpacing: "0.04em",
        }}>Hire me</button>
      </div>

      <button className="dv-ham" onClick={() => setOpen(!open)} style={{
        display: "none", background: "none", border: "none",
        fontSize: "1.4rem", color: "#111", cursor: "pointer",
      }}>{open ? "✕" : "☰"}</button>

      {open && (
        <div style={{
          position: "fixed", top: "60px", left: 0, right: 0,
          background: "#fff", borderBottom: "1.5px solid #111",
          padding: "1.5rem 2rem", display: "flex", flexDirection: "column", gap: "1.2rem",
        }}>
          {nav.map(l => (
            <button key={l} onClick={() => go(l)} style={{
              background: "none", border: "none", fontFamily: "'Space Grotesk',sans-serif",
              fontSize: "1rem", fontWeight: 500, color: "#111", textAlign: "left",
              cursor: "pointer", padding: 0,
            }}>{l}</button>
          ))}
        </div>
      )}
    </nav>
  );
}