import { useState } from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";     // Now imported directly
import Projects from "./components/Projects"; // Now imported directly
import SocialLinks from "./components/SocialLinks";

function App() {
  const [activeSection, setActiveSection] = useState("home");

  const renderContent = () => {
    switch (activeSection) {
      case "home": return <Hero />;
      case "about": return <About />;
      case "skills": return <Skills />;       // Separate Page
      case "projects": return <Projects />;   // Separate Page
      default: return <Hero />;
    }
  };

  return (
    <div>
      {/* Theme Toggle */}
      <button className="theme-toggle-btn">🌙</button>

      <div className="app-container">
        {/* ================= SIDEBAR ================= */}
        <aside className="sidebar glass-card">
          
          {/* Top: Profile */}
          <div className="profile-section">
            <div className="profile-img-placeholder">TN</div>
            <h2>Tejas <span className="name-highlight">Naik</span></h2>
            <p>CS Undergraduate</p>
          </div>

          {/* Middle: Navigation */}
          <nav className="nav-menu">
            <button 
              className={`nav-btn ${activeSection === "home" ? "active" : ""}`} 
              onClick={() => setActiveSection("home")}
            >Home</button>
            
            <button 
              className={`nav-btn ${activeSection === "about" ? "active" : ""}`} 
              onClick={() => setActiveSection("about")}
            >About</button>

            {/* 🔥 SEPARATED BUTTONS */}
            <button 
              className={`nav-btn ${activeSection === "skills" ? "active" : ""}`} 
              onClick={() => setActiveSection("skills")}
            >Skills</button>

            <button 
              className={`nav-btn ${activeSection === "projects" ? "active" : ""}`} 
              onClick={() => setActiveSection("projects")}
            >Projects</button>
          </nav>

          {/* 🔥 BOTTOM: SOCIAL LINKS (Moved here) */}
          <div style={{ marginTop: "auto", width: "100%" }}>
            <SocialLinks />
          </div>
        </aside>

        {/* ================= MAIN CONTENT ================= */}
        <main className="main-content glass-card">
          <section className="content-section">
            {renderContent()}
          </section>
        </main>
      </div>
    </div>
  );
}

export default App;