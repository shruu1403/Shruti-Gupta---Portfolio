import { useState, useEffect } from 'react';
import './Navbar.css';

const navLinks = [
    { id: 'home', label: 'home' },
    { id: 'about', label: 'about' },
    { id: 'skills', label: 'skills' },
    { id: 'projects', label: 'projects' },
    { id: 'contact', label: 'contact' },
];

export default function Navbar() {
    const [active, setActive] = useState('home');
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            setScrolled(window.scrollY > 40);

            // Determine active section
            const sections = navLinks.map(l => document.getElementById(l.id));
            for (let i = sections.length - 1; i >= 0; i--) {
                const sec = sections[i];
                if (sec) {
                    const rect = sec.getBoundingClientRect();
                    if (rect.top <= 150) {
                        setActive(navLinks[i].id);
                        break;
                    }
                }
            }
        };
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const handleClick = (id) => {
        setActive(id);
        setMenuOpen(false);
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    };



    return (
        <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
            <div className="navbar__inner">
                <a href="#home" className="navbar__logo" onClick={() => handleClick('home')}>
                    <span className="navbar__logo-bracket">&lt;</span>
                    <span className="navbar__logo-text">SG</span>
                    <span className="navbar__logo-bracket">/&gt;</span>
                </a>

                <div className={`navbar__links ${menuOpen ? 'navbar__links--open' : ''}`}>
                    {navLinks.map(link => (
                        <button
                            key={link.id}
                            className={`navbar__link ${active === link.id ? 'navbar__link--active' : ''}`}
                            onClick={() => handleClick(link.id)}
                        >
                            {link.label}
                        </button>
                    ))}
                    <div className="navbar__resume-group">
                        <a
                            href={`${import.meta.env.BASE_URL}Shruti-Gupta-Resume.pdf`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="navbar__resume-btn"
                        >
                            Resume
                        </a>
                        <a
                            href={`${import.meta.env.BASE_URL}Shruti-Gupta-Resume.pdf`}
                            download
                            className="navbar__download-btn"
                            aria-label="Download Resume"
                            title="Download Resume"
                        >
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                                <polyline points="7 10 12 15 17 10" />
                                <line x1="12" y1="15" x2="12" y2="3" />
                            </svg>
                        </a>
                    </div>
                </div>

                <button
                    className={`navbar__hamburger ${menuOpen ? 'navbar__hamburger--open' : ''}`}
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle Navigation Menu"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
        </nav>
    );
}
