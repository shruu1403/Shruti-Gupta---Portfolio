import './Skills.css';

const skillLogos = {
    'React.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg',
    'Next.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg',
    'TypeScript': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg',
    'Tailwind CSS': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg',
    'Framer Motion': 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/framer.svg',
    'JavaScript (ES6+)': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg',
    'HTML5': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg',
    'CSS3': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg',
    'Node.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg',
    'Express.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg',
    'MongoDB': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg',
    'PostgreSQL': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg',
    'Supabase (Auth, Realtime, Storage, RLS)': 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/supabase.svg',
    'Git & GitHub': 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/github.svg',
    'AWS EC2': 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/amazonaws.svg',
    'Vercel': 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/vercel.svg',
    'Render': 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/render.svg',
    'Netlify': 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/netlify.svg',

};

const skillCategories = [
    {
        title: 'Frontend',
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="16 18 22 12 16 6" />
                <polyline points="8 6 2 12 8 18" />
            </svg>
        ),
        skills: ['React.js', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    },
    {
        title: 'Backend',
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
                <rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
                <line x1="6" y1="6" x2="6.01" y2="6" />
                <line x1="6" y1="18" x2="6.01" y2="18" />
            </svg>
        ),
        skills: ['Node.js', 'Express.js', 'REST APIs', 'JWT Authentication', 'Socket.io'],
    },
    {
        title: 'Database & BaaS',
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <ellipse cx="12" cy="5" rx="9" ry="3" />
                <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
                <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
            </svg>
        ),
        skills: ['MongoDB', 'Supabase (Auth, Realtime, Storage, RLS)', 'PostgreSQL'],
    },
    // {
    //     title: 'AI & Automation',
    //     icon: (
    //         <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    //             <path d="M12 2a10 10 0 0 1 10 10c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2z" />
    //             <path d="M12 8v4l3 3" />
    //             <circle cx="12" cy="12" r="3" />
    //         </svg>
    //     ),
    //     skills: ['Google Generative AI (Gemini)', 'Prompt Engineering', 'Web Scraping (Puppeteer/Cheerio)'],
    // },
    {
        title: 'Tools & Platforms',
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
            </svg>
        ),
        skills: ['Git & GitHub', 'AWS EC2', 'Vercel'],
    },
];

export default function Skills() {
    return (
        <section id="skills" className="skills section">
            <div className="container">
                <div className="skills__header reveal">
                    <span className="section-label">expertise</span>
                    <h2 className="section-title">Technical Skills</h2>
                    <p className="section-subtitle">
                        Technologies I use to design scalable APIs, real-time systems, and modern web applications.
                    </p>
                </div>

                <div className="skills__grid">
                    {skillCategories.map((cat, i) => (
                        <div
                            key={cat.title}
                            className="skills__card reveal"
                            style={{ transitionDelay: `${i * 0.1}s` }}
                        >
                            <div className="skills__card-header">
                                <div className="skills__card-icon">{cat.icon}</div>
                                <h3 className="skills__card-title">{cat.title}</h3>
                            </div>
                            <ul className="skills__list">
                                {cat.skills.map(skill => (
                                    <li key={skill} className="skills__item">
                                        {skillLogos[skill] ? (
                                            <img src={skillLogos[skill]} alt={skill} className="skills__item-logo" />
                                        ) : (
                                            <span className="skills__item-dot"></span>
                                        )}
                                        {skill}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
