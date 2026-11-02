
import React from 'react';

import { Link, usePage, router } from '@inertiajs/react';

export default function Portfolio() {

    const { projects = [], flash = {} } = usePage().props;

    const handleDelete = (project) => {

        const confirmed = window.confirm(
            `Are you sure you want to delete "${project.title}"? This action cannot be undone.`
        );

        if (confirmed) {
            router.delete(`/projects/${project.id}`);
        }

    };

    return (

        <div className="portfolio-page">

            <style>{`
                * {
                    box-sizing: border-box;
                }

                html {
                    width: 100%;
                    overflow-x: hidden;
                    scroll-behavior: smooth;
                }

                body {
                    margin: 0;
                    background: #0a0a0a;
                    color: #e0e0e0;
                    font-family: 'Inter', sans-serif;
                }

                .portfolio-page {
                    min-height: 100vh;
                    overflow-x: hidden;
                    background-image:
                        linear-gradient(rgba(0,0,0,0.85), rgba(0,0,0,0.85)),
                        url('/assets/background.png');
                    background-size: cover;
                    background-position: center;
                    background-attachment: fixed;
                }

                .portfolio-nav {
                    position: sticky;
                    top: 0;
                    z-index: 1000;
                    border-bottom: 1px solid #222;
                    background: rgba(18,18,18,0.95);
                    padding: 16px 0;
                }

                .portfolio-nav-inner {
                    max-width: 1200px;
                    margin: auto;
                    padding: 0 20px;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                }

                .portfolio-logo img {
                    height: 50px;
                }

                .portfolio-nav-links {
                    display: flex;
                    align-items: center;
                    justify-content: flex-end;
                    flex-wrap: wrap;
                    gap: 25px;
                }

                .portfolio-nav-links a {
                    color: #888;
                    font-weight: 500;
                    text-decoration: none;
                    white-space: nowrap;
                    transition: color 0.3s ease;
                }

                .portfolio-nav-links a:hover,
                .portfolio-nav-links a.active {
                    color: white;
                }

                .portfolio-nav-links .post-link {
                    background: #333;
                    color: white;
                    padding: 8px 18px;
                    border-radius: 5px;
                }

                .portfolio-header {
                    padding: 80px 20px 40px;
                    text-align: center;
                }

                .portfolio-header h1 {
                    margin: 0 0 10px;
                    color: white;
                    font-size: 3rem;
                    font-weight: bold;
                    letter-spacing: 5px;
                }

                .portfolio-header p {
                    color: #666;
                }

                .portfolio-main {
                    max-width: 1200px;
                    margin: auto;
                    padding: 40px 20px;
                }

                .portfolio-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
                    gap: 30px;
                }

                .project-card {
                    overflow: hidden;
                    border: 1px solid #222;
                    border-radius: 15px;
                    background: #121212;
                    transition: all 0.3s ease-in-out;
                }

                .project-card:hover {
                    transform: translateY(-8px);
                    border-color: #444;
                }

                .project-image {
                    display: block;
                    width: 100%;
                    height: 250px;
                    overflow: hidden;
                    cursor: pointer;
                }

                .project-image img {
                    display: block;
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    transition: opacity 0.3s ease, transform 0.3s ease;
                }

                .project-image img:hover {
                    opacity: 0.8;
                    transform: scale(1.02);
                }

                .project-content {
                    padding: 25px;
                }

                .project-date {
                    color: #666;
                    font-size: 0.7rem;
                    font-weight: bold;
                    text-transform: uppercase;
                    letter-spacing: 1px;
                }

                .project-category {
                    display: inline-block;
                    margin-top: 10px;
                    padding: 6px 12px;
                    border: 1px solid #444;
                    border-radius: 20px;
                    background: #222;
                    color: #ccc;
                    font-size: 12px;
                    font-weight: bold;
                }

                .project-content h3 {
                    margin: 8px 0 15px;
                    color: white;
                    font-size: 1.4rem;
                    font-weight: bold;
                    overflow-wrap: anywhere;
                }

                .project-description {
                    display: -webkit-box;
                    overflow: hidden;
                    color: #999;
                    font-size: 0.95rem;
                    line-height: 1.6;
                    -webkit-line-clamp: 4;
                    -webkit-box-orient: vertical;
                }

                .project-actions {
                    display: flex;
                    gap: 10px;
                    margin-top: 20px;
                }

                .edit-button,
                .delete-button {
                    flex: 1;
                    padding: 10px 15px;
                    border: none;
                    border-radius: 6px;
                    font-size: 14px;
                    font-weight: bold;
                    text-align: center;
                    text-decoration: none;
                    cursor: pointer;
                }

                .edit-button {
                    background: #333;
                    color: white;
                }

                .edit-button:hover {
                    background: #444;
                }

                .delete-button {
                    background: #991b1b;
                    color: white;
                }

                .delete-button:hover {
                    background: #b91c1c;
                }

                .empty-projects {
                    grid-column: 1 / -1;
                    padding: 100px 20px;
                    text-align: center;
                }

                .empty-projects p {
                    color: #ccc;
                }

                .create-project-button {
                    display: inline-block;
                    margin-top: 20px;
                    padding: 12px 24px;
                    border-radius: 5px;
                    background: white;
                    color: black;
                    font-weight: bold;
                    text-decoration: none;
                }

                .create-project-button:hover {
                    background: #ddd;
                }

                .success-message {
                    max-width: 1200px;
                    margin: 0 auto 20px;
                    padding: 14px 20px;
                    border: 1px solid #166534;
                    border-radius: 8px;
                    background: #14532d;
                    color: white;
                }

                @media (max-width: 992px) {
                    .portfolio-nav-links {
                        gap: 12px;
                    }

                    .portfolio-nav-links a {
                        font-size: 13px;
                    }

                    .portfolio-grid {
                        grid-template-columns: repeat(2, minmax(0, 1fr));
                        gap: 22px;
                    }

                    .project-image {
                        height: 220px;
                    }
                }

                @media (max-width: 768px) {
                    .portfolio-nav-inner {
                        flex-direction: column;
                        justify-content: center;
                        gap: 15px;
                    }

                    .portfolio-nav-links {
                        width: 100%;
                        justify-content: center;
                        gap: 12px 18px;
                    }

                    .portfolio-header {
                        padding: 45px 20px 25px;
                    }

                    .portfolio-header h1 {
                        font-size: 2.2rem;
                        letter-spacing: 3px;
                    }

                    .portfolio-main {
                        padding: 25px 20px;
                    }

                    .portfolio-grid {
                        gap: 20px;
                    }

                    .project-image {
                        height: 200px;
                    }

                    .project-content {
                        padding: 18px;
                    }
                }

                @media (max-width: 480px) {
                    .portfolio-grid {
                        grid-template-columns: minmax(0, 1fr);
                    }

                    .project-image {
                        height: 230px;
                    }
                }

                @media (max-width: 375px) {
                    .portfolio-nav-links {
                        gap: 12px 15px;
                    }

                    .portfolio-nav-links a {
                        font-size: 12px;
                    }

                    .portfolio-header h1 {
                        font-size: 1.8rem;
                        letter-spacing: 2px;
                    }

                    .portfolio-main {
                        padding: 20px 16px;
                    }

                    .project-content {
                        padding: 16px;
                    }

                    .project-content h3 {
                        font-size: 1.2rem;
                    }

                    .project-description {
                        font-size: 0.88rem;
                    }
                }

                @media (max-width: 320px) {
                    .portfolio-nav-links {
                        gap: 10px 12px;
                    }

                    .portfolio-nav-links a {
                        font-size: 11px;
                    }

                    .portfolio-header h1 {
                        font-size: 1.6rem;
                    }

                    .portfolio-main {
                        padding: 18px 12px;
                    }

                    .project-image {
                        height: 180px;
                    }

                    .project-content {
                        padding: 14px;
                    }

                    .project-content h3 {
                        font-size: 1.05rem;
                    }

                    .project-description {
                        font-size: 0.82rem;
                    }
                }

                @media (prefers-reduced-motion: reduce) {
                    .project-image img,
                    .portfolio-nav-links a,
                    .project-card {
                        transition: none;
                    }
                }
            `}</style>

            {/* Navigation */}

            <nav className="portfolio-nav">
                <div className="portfolio-nav-inner">

                    <Link href="/" className="portfolio-logo">
                        <img src="/assets/uculogo.png" alt="UCU Logo" />
                    </Link>

                    <div className="portfolio-nav-links">
                        <Link href="/">Home</Link>
                        <Link href="/about">About</Link>
                        <Link href="/skills">Skills</Link>
                        <Link href="/experience">Experience</Link>
                        <Link href="/portfolio" className="active">Projects</Link>
                        <Link href="/contacts">Contacts</Link>
                        <Link href="/projects/create" className="post-link">Post</Link>
                    </div>

                </div>
            </nav>

            {/* Header */}

            <header className="portfolio-header">
                <h1>My Projects</h1>
                <p>This is my collections of best projects</p>
            </header>

            {/* Projects */}

            <main className="portfolio-main">

                {flash.success && (
                    <div className="success-message">
                        {flash.success}
                    </div>
                )}

                <div className="portfolio-grid">

                    {projects.length > 0 ? (

                        projects.map((project) => {

                            const imageSrc = project.image_path
                                ? (
                                    project.image_path.startsWith('http')
                                        ? project.image_path
                                        : `/storage/${project.image_path.replace(/^\/+/, '')}`
                                )
                                : '/assets/no-image.png';

                            const formattedDate = project.date
                                ? new Date(project.date + 'T00:00:00').toLocaleDateString(
                                    'en-US',
                                    {
                                        month: 'short',
                                        day: '2-digit',
                                        year: 'numeric'
                                    }
                                )
                                : '';

                            return (

                                <div className="project-card" key={project.id}>

                                    <Link
                                        href={`/projects/${project.id}/edit`}
                                        className="project-image"
                                        title="Click to edit"
                                    >
                                        <img
                                            src={imageSrc}
                                            alt={project.title}
                                            onError={(e) => {
                                                e.currentTarget.onerror = null;
                                                e.currentTarget.src = '/assets/no-image.png';
                                            }}
                                        />
                                    </Link>

                                    <div className="project-content">

                                        <span className="project-date">
                                            {formattedDate}
                                        </span>

                                        {project.category && (
                                            <span className="project-category">
                                                {project.category}
                                            </span>
                                        )}

                                        <h3>{project.title}</h3>

                                        <p className="project-description">
                                            {project.description}
                                        </p>

                                        {/* Project URL */}
                                        {project.project_url && (
                                            <a
                                                href={project.project_url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-blue-400 hover:text-blue-300"
                                            >
                                                View Project
                                            </a>
                                        )}

                                        <div className="project-actions">

                                            <Link
                                                href={`/projects/${project.id}/edit`}
                                                className="edit-button"
                                            >
                                                Edit
                                            </Link>

                                            <button
                                                type="button"
                                                className="delete-button"
                                                onClick={() => handleDelete(project)}
                                            >
                                                Delete
                                            </button>

                                        </div>

                                    </div>

                                </div>

                            );

                        })

                    ) : (

                        <div className="empty-projects">
                            <p>No projects found.</p>

                            <Link
                                href="/projects/create"
                                className="create-project-button"
                            >
                                Create Your First Project
                            </Link>
                        </div>

                    )}

                </div>

            </main>

        </div>

    );

}
