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

    const handleResume = () => {
        window.open('/resume.pdf', '_blank');
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
                    <button className="navbar__resume-btn" onClick={handleResume}>
                        Resume
                    </button>
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
