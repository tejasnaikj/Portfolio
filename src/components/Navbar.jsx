function Navbar({ darkMode, setDarkMode }) {
    return (
        <nav>
            <h2>Tejas Naik | CS Undergraduate</h2>

            <ul>
                <li><a href="#about">About</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>

            <button onClick={() => setDarkMode(!darkMode)}>
                {darkMode ? "☀️" : "🌙"}
            </button>
        </nav>
    );
}

export default Navbar;
