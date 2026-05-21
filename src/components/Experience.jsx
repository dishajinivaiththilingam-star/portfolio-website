const experience = [
  {
    id: "01",
    title: "Frontend Development",
    color: "#0f7c6b",
    bg: "#e1f5ee",
    items: [
      "Developed responsive web applications using React.js",
      "Designed modern UI layouts with HTML, CSS, Bootstrap, and Tailwind CSS",
      "Implemented reusable components and dynamic webpages using JavaScript",
    ],
    tags: [
      "React.js",
      "HTML",
      "CSS",
      "Bootstrap",
      "Tailwind",
      "JavaScript",
    ],
  },

  {
    id: "02",
    title: "Backend Development",
    color: "#d85a30",
    bg: "#faece7",
    items: [
      "Built REST APIs using Node.js and Express.js",
      "Connected frontend applications with backend services",
      "Managed authentication and data handling functionalities",
    ],
    tags: ["Node.js", "Express.js", "REST APIs"],
  },

  {
    id: "03",
    title: "Database Management",
    color: "#534ab7",
    bg: "#eeedfe",
    items: [
      "Worked with MySQL database design and management",
      "Created and maintained tables, relationships, and queries",
      "Integrated database operations with backend systems",
    ],
    tags: ["MySQL"],
  },

  {
    id: "04",
    title: "Project Development",
    color: "#111",
    bg: "#f0ece6",
    items: [
      "Developed a Student Management System with admin dashboard",
      "Implemented attendance, notifications, and student record management features",
      "Improved application responsiveness and user experience",
    ],
    tags: ["Full-Stack", "Admin Dashboard", "UX"],
    featured: "Student Management System",
  },
];

const edu = [
  {
    year: "Present",
    school: "University of Eastern",
    detail: "Faculty of Science — R",
    tag: "University",
  },

  {
    year: "2024",
    school: "Little Tech Academy",
    detail: "Web Design · Computer Application",
    tag: "Training",
  },

  {
    year: "2024",
    school: "Kilinochchi M.V",
    detail: "GCE A/L — Results: 2CS",
    tag: "School",
  },

  {
    year: "2021",
    school: "Kilinochchi M.V",
    detail: "GCE O/L — Results: 8AB",
    tag: "School",
  },
];

const tagColor = {
  University: "#0f7c6b",
  Training: "#d85a30",
  School: "#534ab7",
};

export default function Experience() {
  return (
    <section
      id="experience"
      style={{
        background: "#fff",
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
            04
          </span>

          <div>
            <p
              style={{
                fontFamily: "'Space Grotesk',sans-serif",
                fontWeight: 600,
                fontSize: "0.68rem",
                letterSpacing: "0.22em",
                color: "#534ab7",
                textTransform: "uppercase",
                marginBottom: "0.3rem",
              }}
            >
              What I've built
            </p>

            <h2
              style={{
                fontFamily: "'Fraunces',serif",
                fontSize: "2.4rem",
                fontWeight: 900,
                color: "#111",
                letterSpacing: "-0.02em",
                lineHeight: 1.1,
              }}
            >
              Technical
              <br />
              <em style={{ fontStyle: "italic", color: "#534ab7" }}>
                Experience
              </em>
            </h2>
          </div>
        </div>

        {/* Education */}
        <div style={{ marginBottom: "4rem" }}>
          {edu.map(({ year, school, detail, tag }, i) => (
            <div
              key={i}
              style={{
                borderTop: i === 0 ? "1.5px solid #111" : "none",
                borderBottom: "1.5px solid #e0dbd4",
                padding: "1.4rem 0",
                display: "grid",
                gridTemplateColumns: "80px 1fr",
                gap: "1rem",
              }}
            >
              <span
                style={{
                  fontFamily: "'Space Grotesk',sans-serif",
                  fontWeight: 700,
                  fontSize: "0.72rem",
                  color: "#aaa",
                  paddingTop: "3px",
                  letterSpacing: "0.05em",
                }}
              >
                {year}
              </span>

              <div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    marginBottom: "0.2rem",
                    flexWrap: "wrap",
                  }}
                >
                  <p
                    style={{
                      fontFamily: "'Fraunces',serif",
                      fontWeight: 700,
                      fontSize: "1rem",
                      color: "#111",
                    }}
                  >
                    {school}
                  </p>

                  <span
                    style={{
                      fontFamily: "'Space Grotesk',sans-serif",
                      fontSize: "0.58rem",
                      fontWeight: 600,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      color: "#fff",
                      background: tagColor[tag],
                      padding: "2px 8px",
                    }}
                  >
                    {tag}
                  </span>
                </div>

                <p
                  style={{
                    fontFamily: "'DM Sans',sans-serif",
                    fontSize: "0.83rem",
                    color: "#666",
                  }}
                >
                  {detail}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Top 2 large */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "1.5rem",
            marginBottom: "1.5rem",
          }}
          className="dv-proj-top"
        >
          {experience.slice(0, 2).map(
            ({ id, title, color, bg, items, tags }) => (
              <div
                key={id}
                style={{
                  border: "1.5px solid #e0dbd4",
                  padding: "2rem",
                  borderTop: `4px solid ${color}`,
                  background: "#fff",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    marginBottom: "1.5rem",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "'Fraunces',serif",
                      fontSize: "2.5rem",
                      fontWeight: 900,
                      color: bg,
                      lineHeight: 1,
                    }}
                  >
                    {id}
                  </span>

                  <h3
                    style={{
                      fontFamily: "'Space Grotesk',sans-serif",
                      fontWeight: 700,
                      fontSize: "1rem",
                      color: "#111",
                      textAlign: "right",
                      lineHeight: 1.3,
                      maxWidth: "160px",
                    }}
                  >
                    {title}
                  </h3>
                </div>

                <ul
                  style={{
                    listStyle: "none",
                    padding: 0,
                    marginBottom: "1.5rem",
                  }}
                >
                  {items.map((item, i) => (
                    <li
                      key={i}
                      style={{
                        display: "flex",
                        gap: "0.7rem",
                        alignItems: "flex-start",
                        marginBottom: "0.75rem",
                      }}
                    >
                      <span
                        style={{
                          width: "6px",
                          height: "6px",
                          borderRadius: "50%",
                          background: color,
                          flexShrink: 0,
                          marginTop: "7px",
                        }}
                      />

                      <p
                        style={{
                          fontFamily: "'DM Sans',sans-serif",
                          fontSize: "0.88rem",
                          color: "#444",
                          lineHeight: 1.7,
                        }}
                      >
                        {item}
                      </p>
                    </li>
                  ))}
                </ul>

                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "0.4rem",
                  }}
                >
                  {tags.map((t) => (
                    <span
                      key={t}
                      style={{
                        fontFamily: "'Space Grotesk',sans-serif",
                        fontSize: "0.62rem",
                        fontWeight: 600,
                        textTransform: "uppercase",
                        letterSpacing: "0.06em",
                        background: bg,
                        color: color,
                        padding: "3px 10px",
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            )
          )}
        </div>

        {/* Bottom 2 */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "1.5rem",
          }}
          className="dv-proj-bot"
        >
          {experience.slice(2).map(
            ({ id, title, color, bg, items, tags, featured }) => (
              <div
                key={id}
                style={{
                  border: "1.5px solid #e0dbd4",
                  padding: "2rem",
                  borderTop: `4px solid ${color}`,
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    marginBottom: "1.5rem",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "'Fraunces',serif",
                      fontSize: "2.5rem",
                      fontWeight: 900,
                      color: bg,
                      lineHeight: 1,
                    }}
                  >
                    {id}
                  </span>

                  <div style={{ textAlign: "right" }}>
                    {featured && (
                      <p
                        style={{
                          fontFamily: "'Space Grotesk',sans-serif",
                          fontSize: "0.6rem",
                          fontWeight: 600,
                          textTransform: "uppercase",
                          letterSpacing: "0.1em",
                          color: color,
                          background: bg,
                          padding: "3px 8px",
                          display: "inline-block",
                          marginBottom: "0.3rem",
                        }}
                      >
                        Featured Project
                      </p>
                    )}

                    <h3
                      style={{
                        fontFamily: "'Space Grotesk',sans-serif",
                        fontWeight: 700,
                        fontSize: "1rem",
                        color: "#111",
                        lineHeight: 1.3,
                      }}
                    >
                      {featured || title}
                    </h3>
                  </div>
                </div>

                <ul
                  style={{
                    listStyle: "none",
                    padding: 0,
                    marginBottom: "1.5rem",
                  }}
                >
                  {items.map((item, i) => (
                    <li
                      key={i}
                      style={{
                        display: "flex",
                        gap: "0.7rem",
                        alignItems: "flex-start",
                        marginBottom: "0.75rem",
                      }}
                    >
                      <span
                        style={{
                          width: "6px",
                          height: "6px",
                          borderRadius: "50%",
                          background: color,
                          flexShrink: 0,
                          marginTop: "7px",
                        }}
                      />

                      <p
                        style={{
                          fontFamily: "'DM Sans',sans-serif",
                          fontSize: "0.88rem",
                          color: "#444",
                          lineHeight: 1.7,
                        }}
                      >
                        {item}
                      </p>
                    </li>
                  ))}
                </ul>

                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "0.4rem",
                  }}
                >
                  {tags.map((t) => (
                    <span
                      key={t}
                      style={{
                        fontFamily: "'Space Grotesk',sans-serif",
                        fontSize: "0.62rem",
                        fontWeight: 600,
                        textTransform: "uppercase",
                        letterSpacing: "0.06em",
                        background: bg,
                        color: color,
                        padding: "3px 10px",
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}