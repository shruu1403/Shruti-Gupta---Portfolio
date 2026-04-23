import './About.css';

export default function About() {
    return (
        <section id="about" className="about section">
            <div className="container">
                <div className="about__header reveal">
                    <span className="section-label">about me</span>
                    <h2 className="section-title">Who I Am</h2>
                </div>

                <div className="about__grid">
                    <div className="about__text reveal-left">
                        <p className="about__description">
                            <span className="about__highlight">Full Stack Developer</span> with hands-on experience building scalable, <span className="about__highlight">AI-powered</span> web applications using Next.js, React.js, TypeScript, and Supabase. Skilled in developing production-ready features such as authentication, real-time systems, and API integrations using Node.js and MongoDB.
                        </p>
                        <p className="about__description">
                            Worked with AI tools like <span className="about__highlight">Google Gemini</span> to build automation and insight-driven features. Proficient in creating responsive user interfaces with Tailwind CSS and managing state efficiently, with deployment experience on Vercel and AWS EC2. Strong interest in building solutions that improve user productivity and solve real-world problems.
                        </p>

                        <div className="about__details">
                            <div className="about__detail-item">
                                <span className="about__detail-label">Name</span>
                                <span className="about__detail-value">Shruti Gupta</span>
                            </div>
                            <div className="about__detail-item">
                                <span className="about__detail-label">Location</span>
                                <span className="about__detail-value">Bhilai, Chhattisgarh</span>
                            </div>
                            <div className="about__detail-item">
                                <span className="about__detail-label">Education</span>
                                <span className="about__detail-value">B.Tech in Computer Science (Data Science)</span>
                            </div>
                            <div className="about__detail-item">
                                <span className="about__detail-label">University</span>
                                <span className="about__detail-value">Rungta College of Engineering & Technology</span>
                            </div>
                        </div>
                    </div>

                    <div className="about__stats reveal-right">
                        <div className="about__stat-card">
                            <span className="about__stat-number">3+</span>
                            <span className="about__stat-label">Full-Stack Projects</span>
                        </div>
                        <div className="about__stat-card">
                            <span className="about__stat-number">5+</span>
                            <span className="about__stat-label">Core Technologies</span>
                        </div>
                        <div className="about__stat-card">
                            <span className="about__stat-number">2027</span>
                            <span className="about__stat-label">B.Tech CSE (Data Science)</span>
                        </div>
                        <div className="about__stat-card">
                            <span className="about__stat-number">∞</span>
                            <span className="about__stat-label">Continuous Learning</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
