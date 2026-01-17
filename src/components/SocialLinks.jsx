function SocialLinks() {
    return (
        <div className="social-links-container">
            {/* Removed the background bar for a cleaner sidebar look */}
            <div className="social-links-bar" style={{ background: 'transparent', padding: '10px 0', gap: '15px' }}>
                <a href="https://github.com/tejasnaikj" target="_blank" className="social-icon">GitHub</a>
                <a href="https://linkedin.com/in/tejas-naik-j" target="_blank" className="social-icon">LinkedIn</a>
            </div>
        </div>
    );
}

export default SocialLinks;