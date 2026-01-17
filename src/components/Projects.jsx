function Projects() {
    return (
        <section id="projects" className="fade-in">
            <h2>Projects</h2>

            <div className="project">
                <h3>Load-Balanced URL Shortener</h3>
                <p>
                    Built a scalable URL shortening service using Python and Redis,
                    containerized with Docker, and deployed using Kubernetes with
                    load-balanced request handling.
                </p>
                <p><strong>Tech:</strong> Python, Redis, Docker, Kubernetes</p>
            </div>

            <div className="project">
                <h3>Apache Kafka Clone</h3>
                <p>
                    Implemented a secure event-driven data streaming system with
                    producer–consumer workflows and SSL encryption.
                </p>
                <p><strong>Tech:</strong> Python, SSL</p>
            </div>

            <div className="project">
                <h3>Hospital Management System</h3>
                <p>
                    Designed a normalized relational database schema and optimized SQL
                    queries for efficient hospital data management.
                </p>
                <p><strong>Tech:</strong> MySQL</p>
            </div>

            <div className="project">
                <h3>Music Streaming App (Frontend)</h3>
                <p>
                    Built responsive React UI components with reusable design patterns
                    and improved navigation flow.
                </p>
                <p><strong>Tech:</strong> React, JavaScript</p>
            </div>
        </section>
    );
}

export default Projects;
