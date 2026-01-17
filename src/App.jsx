import { useState } from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Portfolio from "./components/Portfolio"; // New component
import SocialLinks from "./components/SocialLinks"; // New component

function App() {
  // State to keep track of the active section
  const [activeSection, setActiveSection] = useState("home");

  // Function to render the content based on the active section
  const renderContent = () => {
    switch (activeSection) {
      case "home":
        return <Hero />;
      case "about":
        return <About />;
      case "portfolio":
        return <Portfolio />;
      default:
        return <Hero />;
    }
  };

  return (
    // The outer div can be used for theme context in the future
    <div>
      {/* Theme Toggle Button (Positioned absolutely in CSS) */}
      <button className="theme-toggle-btn">
        🌙
      </button>

      <div className="app-container">
        {/* ================= SIDEBAR ================= */}
        <aside className="sidebar glass-card">
          <div className="profile-section">
            {/* Placeholder for profile image */}
            <div className="profile-img-placeholder">TN</div>
            <h2>
              Tejas <span className="name-highlight">Naik</span>
            </h2>
            <p>CS Undergraduate</p>
          </div>

          <nav className="nav-menu">
            <button
              className={`nav-btn ${activeSection === "home" ? "active" : ""}`}
              onClick={() => setActiveSection("home")}
            >
              Home
            </button>
            <button
              className={`nav-btn ${activeSection === "about" ? "active" : ""}`}
              onClick={() => setActiveSection("about")}
            >
              About
            </button>
            <button
              className={`nav-btn ${activeSection === "portfolio" ? "active" : ""}`}
              onClick={() => setActiveSection("portfolio")}
            >
              Portfolio
            </button>
          </nav>
        </aside>

        {/* ================= MAIN CONTENT ================= */}
        <main className="main-content glass-card">
          {/* Dynamic Content Section */}
          <section className="content-section">
            {renderContent()}
          </section>

          {/* Social Links at the bottom */}
          <SocialLinks />
        </main>
      </div>
    </div>
  );
}

export default App;