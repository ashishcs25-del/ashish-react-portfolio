function Contact() {
  return (
    <div className="page">
      <section className="content-section contact-section">
        <p className="eyebrow">GET IN TOUCH</p>
        <h1>Contact Me</h1>
        <p className="contact-intro">
          Have a project, opportunity, or just want to say hello?
          Feel free to reach out.
        </p>

        <div className="contact-grid">
          <a className="contact-card" href="mailto:ashish.cs25@sahyadri.edu.in">
            <span className="contact-label">EMAIL</span>
            <strong>ashish.cs25@sahyadri.edu.in</strong>
          </a>

          <a
            className="contact-card"
            href="https://github.com/ashishcs25-del"
            target="_blank"
            rel="noreferrer"
          >
            <span className="contact-label">GITHUB</span>
            <strong>github.com/ashishcs25-del</strong>
          </a>

          <a
            className="contact-card"
            href="https://www.linkedin.com/in/ashish-bangera-06a454374"
            target="_blank"
            rel="noreferrer"
          >
            <span className="contact-label">LINKEDIN</span>
            <strong>ashish-bangera</strong>
          </a>
        </div>
      </section>
    </div>
  );
}

export default Contact;