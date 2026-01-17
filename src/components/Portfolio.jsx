import Skills from "./Skills";
import Projects from "./Projects";

function Portfolio() {
    return (
        <div className="portfolio-container">
            {/* You can adjust the order or layout here */}
            <Skills />
            <div style={{ margin: "40px 0" }}></div> {/* Spacer */}
            <Projects />
        </div>
    );
}

export default Portfolio;