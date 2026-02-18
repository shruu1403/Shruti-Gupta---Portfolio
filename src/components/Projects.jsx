import { useState } from 'react';
import './Projects.css';

const projects = [
    {
        id: 1,
        title: 'Splitmate',
        subtitle: 'Group Expense Management Web App',
        description:
            'A full-stack expense management platform built with React.js, Node.js, Express, and MongoDB featuring real-time updates via Socket.io. Includes complex balance calculations, multi-participant expense-splitting logic, JWT & Google OAuth authentication, and secure email-based invite flows. Deployed on Vercel (frontend) and Render (backend).',
        techStack: ['React.js', 'Node.js', 'Express', 'MongoDB', 'Socket.io'],
        liveDemo: 'https://www.splitmate.me',
        github: 'https://github.com/shruu1403/splitmate',
        image:"src/assets/splitmate.png"
    },
    {
        id: 2,
        title: 'Chwiggy',
        subtitle: 'Food Delivery Web Application',
        description:
            'A Swiggy-inspired responsive food ordering interface using React.js with dynamic routing and modern UI. Features search, filtering, category navigation, cart, checkout flow, and discount handling with seamless backend API integration. Integrated Google OAuth authentication and deployed using Netlify + Render.',
        techStack: ['React.js', 'Node.js', 'REST APIs', 'Google OAuth'],
        liveDemo: 'https://chwiggy.netlify.app/',
        github: 'https://github.com/shruu1403/chwiggy',
        image: 'src/assets/chwiggy.png',
    },
    {
        id: 3,
        title: 'My Wallet',
        subtitle: 'Personal Finance Tracking App',
        description:
            'A responsive finance tracking interface using React.js and Material UI featuring dashboards, charts, filters, and reusable UI components. Built interactive analytics and real-time financial visualizations using MUI Charts, integrated securely with backend APIs.',
        techStack: ['React.js', 'Material UI', 'MUI Charts', 'REST APIs'],
        liveDemo: 'https://my-wallet-frontend-liard.vercel.app/',
        image: 'src/assets/my-wallet.png',
    },
];

export default function Projects() {
    const [modalProject, setModalProject] = useState(null);

    const openModal = (project) => setModalProject(project);
    const closeModal = () => setModalProject(null);

    return (
        <section id="projects" className="projects section">
            <div className="container">
                <div className="projects__header reveal">
                    <span className="section-label">my work</span>
                    <h2 className="section-title">Featured Projects</h2>
                    {/* <p className="section-subtitle">
                        Production-ready applications built with modern web technologies.
                    </p> */}
                </div>
            </div>

            {/* Full-width scrolling cards */}
            <div className="projects__scroll-wrapper">
                <div className="projects__track">
                    {projects.map((project, i) => (
                        <div
                            key={project.id}
                            className="projects__card reveal"
                            style={{ transitionDelay: `${i * 0.15}s` }}
                        >
                            <div
                                className="projects__card-image"
                                onClick={() => openModal(project)}
                                role="button"
                                tabIndex={0}
                                onKeyDown={(e) => e.key === 'Enter' && openModal(project)}
                                aria-label={`View details for ${project.title}`}
                            >
                                {project.image ? (
                                    <img src={project.image} alt={project.title} className="projects__card-image-img" />
                                ) : (
                                    <div className="projects__card-image-placeholder">
                                        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                            <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                                            <line x1="8" y1="21" x2="16" y2="21" />
                                            <line x1="12" y1="17" x2="12" y2="21" />
                                        </svg>
                                        <span>Click to view details</span>
                                    </div>
                                )}
                                <div className="projects__card-overlay">
                                    <span className="projects__card-view">
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <circle cx="11" cy="11" r="8" />
                                            <line x1="21" y1="21" x2="16.65" y2="16.65" />
                                            <line x1="11" y1="8" x2="11" y2="14" />
                                            <line x1="8" y1="11" x2="14" y2="11" />
                                        </svg>
                                        View Details
                                    </span>
                                </div>
                            </div>

                            <div className="projects__card-body">
                                <h3 className="projects__card-title">{project.title}</h3>
                                <p className="projects__card-subtitle">{project.subtitle}</p>
                                <div className="projects__card-tags">
                                    {project.techStack.map(tech => (
                                        <span key={tech} className="projects__tag">{tech}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Modal */}
            {modalProject && (
                <div className="projects__modal-overlay" onClick={closeModal}>
                    <div
                        className="projects__modal"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button className="projects__modal-close" onClick={closeModal} aria-label="Close modal">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="18" y1="6" x2="6" y2="18" />
                                <line x1="6" y1="6" x2="18" y2="18" />
                            </svg>
                        </button>

                        <div className="projects__modal-header">
                            <h3 className="projects__modal-title">{modalProject.title}</h3>
                            <span className="projects__modal-subtitle">{modalProject.subtitle}</span>
                        </div>

                        <p className="projects__modal-description">{modalProject.description}</p>

                        <div className="projects__modal-tags">
                            {modalProject.techStack.map(tech => (
                                <span key={tech} className="projects__modal-tag">{tech}</span>
                            ))}
                        </div>

                        <div className="projects__modal-actions">
                            {modalProject.liveDemo && (
                                <a
                                    href={modalProject.liveDemo}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="projects__modal-btn projects__modal-btn--primary"
                                >
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                                        <polyline points="15 3 21 3 21 9" />
                                        <line x1="10" y1="14" x2="21" y2="3" />
                                    </svg>
                                    Live Demo
                                </a>
                            )}
                            {modalProject.github && (
                                <a
                                    href={modalProject.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="projects__modal-btn projects__modal-btn--secondary"
                                >
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                    </svg>
                                    GitHub
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}
