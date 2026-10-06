import { Link } from "react-router-dom";

const projects = [
  {
    name: "BESCOM Bill Calculator",
    description: "An app for calculating electricity bills.",
    link: "https://github.com/ashishcs25-del/bescom-bill-calculator"
  },
  {
    name: "BloodConnect",
    description: "A website where people can volunteer to donate blood or request blood donations.",
    link: "https://github.com/ashishcs25-del/Bloodconnect"
  },
  {
    name: "MBA Tracker",
    description: "An app containing detailed student information such as courses and attendance.",
    link: "https://github.com/ashishcs25-del/Mba-Tracker"
  }
];

function Home() {
  return (
    <div className="page">
      <section className="hero">
        <p className="eyebrow">HELLO, I'M</p>
        <h1>Ashish K Bangera</h1>
        <h2>Aspiring Software Developer</h2>
        <p className="hero-text">
          I enjoy coding, learning new technologies, and building projects
          that help me turn ideas into working applications.
        </p>

        <div className="hero-buttons">
          <Link to="/about" className="button primary">About Me</Link>
          <Link to="/contact" className="button secondary">Contact Me</Link>
        </div>
      </section>

      <section className="section projects-preview">
        <div className="section-heading">
          <p className="eyebrow">MY WORK</p>
          <h2>Projects</h2>
        </div>

        <div className="project-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.name}>
              <div className="project-number">PROJECT</div>
              <h3>{project.name}</h3>
              <p>{project.description}</p>
              <a href={project.link} target="_blank" rel="noreferrer">
                View on GitHub ↗
              </a>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;