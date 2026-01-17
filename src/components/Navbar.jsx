function Navbar({ darkMode, setDarkMode }) {
    return (
        <nav>
            <h2>Tejas Naik | CS Undergraduate</h2>

            <ul>
                <li><a href="#about">About</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#projects">Projects</a></li>
            </ul>

            <button onClick={() => setDarkMode(!darkMode)}>
                {darkMode ? "☀️" : "🌙"}
            </button>

            <div className="profile-pic">TN</div>

        </nav>
    );
}

export default Navbar;
