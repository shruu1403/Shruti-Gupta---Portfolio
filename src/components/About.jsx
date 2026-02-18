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
                            I&apos;m a <span className="about__highlight">Full Stack Developer (MERN + Supabase)
                            </span> with
                            hands-on experience building and deploying scalable web applications using React.js,
                            Node.js, MongoDB, and Supabase. I&apos;ve built & deployed <span className="about__highlight">3+
                                full-stack applications</span> with responsive UI, real-time features, authentication
                            systems, and modern API integrations.
                        </p>
                        <p className="about__description">
                            My strong focus on backend architecture, scalable API design, and performance optimization drives me to build applications that are robust, efficient, and reliable. Alongside technical development, I value clear communication, teamwork, and collaborative problem-solving to deliver impactful solutions.
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
