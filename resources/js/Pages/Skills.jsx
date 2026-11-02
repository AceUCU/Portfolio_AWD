
import React from 'react';

export default function Skills() {
    return (
        <div className="skills-page">
            <style>{`
                * {
                    box-sizing: border-box;
                }

                html, body, #app {
                    margin: 0;
                    padding: 0;
                    width: 100%;
                    min-height: 100%;
                    background: #0a0a0a;
                }

                html, body {
                    overflow-x: hidden;
                }

                body {
                    min-height: 100vh;
                }

                .skills-page {
                    width: 100%;
                    min-height: 100vh;
                    overflow-x: hidden;
                    background-color: #0a0a0a;
                    background-image:
                        linear-gradient(rgba(0,0,0,0.85), rgba(0,0,0,0.85)),
                        url('/assets/background.png');
                    background-size: cover;
                    background-position: center;
                    background-repeat: no-repeat;
                    background-attachment: fixed;
                    color: #e0e0e0;
                    font-family: Inter, sans-serif;
                }

                .skills-nav {
                    width: 100%;
                    background: rgba(18,18,18,0.95);
                    border-bottom: 1px solid #222;
                }

                .skills-nav-inner {
                    max-width: 1200px;
                    min-height: 82px;
                    margin: auto;
                    padding: 12px 20px;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    gap: 25px;
                }

                .skills-logo img {
                    height: 50px;
                    display: block;
                }

                .skills-nav-links {
                    display: flex;
                    align-items: center;
                    justify-content: flex-end;
                    flex-wrap: wrap;
                    gap: 25px;
                }

                .skills-nav-links a {
                    color: #888;
                    text-decoration: none;
                    font-size: 15px;
                    font-weight: 500;
                    white-space: nowrap;
                    transition: color 0.3s;
                }

                .skills-nav-links a:hover,
                .skills-nav-links a.active {
                    color: white;
                }

                .skills-nav-links .post-link {
                    background: #333;
                    color: white;
                    padding: 9px 18px;
                    border-radius: 5px;
                }

                .skills-main {
                    width: 100%;
                    min-height: calc(100vh - 82px);
                    padding: 60px 20px;
                    display: flex;
                    align-items: center;
                }

                .skills-container {
                    width: 100%;
                    max-width: 1200px;
                    margin: auto;
                }

                .skills-header {
                    margin-bottom: 50px;
                }

                .skills-label {
                    color: #777;
                    font-size: 13px;
                    font-weight: bold;
                    letter-spacing: 3px;
                    text-transform: uppercase;
                }

                .skills-title {
                    color: white;
                    font-size: 64px;
                    font-weight: bold;
                    letter-spacing: 5px;
                    margin: 0;
                }

                .skills-grid {
                    display: grid;
                    grid-template-columns: repeat(2, minmax(0, 1fr));
                    align-items: center;
                    gap: 60px;
                }

                .skills-list {
                    display: flex;
                    flex-direction: column;
                    gap: 30px;
                }

                .skill-card {
                    display: flex;
                    align-items: flex-start;
                    gap: 20px;
                    padding: 20px;
                    border: 1px solid #222;
                    border-radius: 12px;
                    background: rgba(255,255,255,0.03);
                    transition: all 0.3s;
                }

                .skill-card:hover {
                    transform: translateX(10px);
                    border-color: #444;
                    background: rgba(255,255,255,0.05);
                }

                .skill-number {
                    min-width: 45px;
                    padding: 10px;
                    border-radius: 8px;
                    background: #1a1a1a;
                    color: #777;
                    font-size: 19px;
                    font-weight: bold;
                    text-align: center;
                }

                .skill-card h3 {
                    margin: 0 0 5px;
                    color: white;
                    font-size: 21px;
                    font-weight: bold;
                }

                .skill-card p {
                    margin: 0;
                    color: #888;
                    font-size: 15px;
                    line-height: 1.7;
                }

                .skills-image-container {
                    text-align: right;
                }

                .skills-image {
                    display: block;
                    width: 100%;
                    height: auto;
                    max-width: 100%;
                    border-radius: 20px;
                    filter: grayscale(100%) brightness(0.8);
                }

                @media (max-width: 992px) {
                    .skills-nav-links {
                        gap: 15px;
                    }

                    .skills-nav-links a {
                        font-size: 13px;
                    }

                    .skills-grid {
                        gap: 35px;
                    }

                    .skills-image {
                        max-height: 400px;
                        width: auto;
                        max-width: 100%;
                    }
                }

                @media (max-width: 768px) {
                    .skills-nav-inner {
                        flex-direction: column;
                        justify-content: center;
                        gap: 15px;
                    }

                    .skills-nav-links {
                        width: 100%;
                        justify-content: center;
                        gap: 12px 18px;
                    }

                    .skills-nav-links a {
                        font-size: 14px;
                    }

                    .skills-main {
                        min-height: calc(100vh - 120px);
                        padding: 40px 24px;
                    }

                    .skills-header {
                        margin-bottom: 30px;
                    }

                    .skills-title {
                        font-size: 40px;
                        letter-spacing: 3px;
                    }

                    .skills-grid {
                        grid-template-columns: minmax(0, 1fr);
                        gap: 35px;
                    }

                    .skills-image-container {
                        order: -1;
                        text-align: center;
                    }

                    .skills-image {
                        display: block;
                        width: 100%;
                        max-width: 450px;
                        max-height: 350px;
                        object-fit: contain;
                        margin: auto;
                    }

                    .skills-list {
                        gap: 20px;
                    }

                    .skill-card {
                        padding: 18px;
                        gap: 15px;
                    }

                    .skill-card h3 {
                        font-size: 18px;
                    }

                    .skill-card p {
                        font-size: 14px;
                    }
                }

                @media (max-width: 400px) {
                    .skills-nav-inner {
                        padding-left: 18px;
                        padding-right: 18px;
                    }

                    .skills-logo img {
                        height: 42px;
                    }

                    .skills-nav-links {
                        gap: 12px 15px;
                    }

                    .skills-nav-links a {
                        font-size: 12px;
                    }

                    .skills-nav-links .post-link {
                        padding: 6px 12px;
                    }

                    .skills-main {
                        padding: 30px 18px;
                    }

                    .skills-header {
                        margin-bottom: 25px;
                    }

                    .skills-label {
                        font-size: 12px;
                        letter-spacing: 2px;
                    }

                    .skills-title {
                        font-size: 35px;
                        letter-spacing: 2px;
                    }

                    .skills-grid {
                        gap: 25px;
                    }

                    .skill-card {
                        padding: 14px;
                        gap: 12px;
                    }

                    .skill-number {
                        min-width: 38px;
                        padding: 8px;
                        font-size: 16px;
                    }

                    .skill-card h3 {
                        font-size: 16px;
                        line-height: 1.5;
                    }

                    .skill-card p {
                        font-size: 13px;
                    }

                    .skills-image {
                        max-height: 280px;
                    }
                }

                @media (max-width: 320px) {
                    .skills-nav-inner {
                        padding-left: 12px;
                        padding-right: 12px;
                    }

                    .skills-logo img {
                        height: 36px;
                    }

                    .skills-nav-links {
                        gap: 10px 12px;
                    }

                    .skills-nav-links a {
                        font-size: 11px;
                    }

                    .skills-main {
                        padding: 25px 14px;
                    }

                    .skills-title {
                        font-size: 32px;
                    }

                    .skill-card {
                        padding: 12px;
                        gap: 10px;
                    }

                    .skill-number {
                        min-width: 32px;
                        padding: 6px;
                        font-size: 14px;
                    }

                    .skill-card h3 {
                        font-size: 15px;
                    }

                    .skill-card p {
                        font-size: 12px;
                    }

                    .skills-image {
                        max-height: 230px;
                    }
                }
            `}</style>

            {/* NAVIGATION */}
            <nav className="skills-nav">
                <div className="skills-nav-inner">
                    <a href="/" className="skills-logo">
                        <img src="/assets/uculogo.png" alt="UCU Logo" />
                    </a>

                    <div className="skills-nav-links">
                        <a href="/">Home</a>
                        <a href="/about">About</a>
                        <a href="/skills" className="active">Skills</a>
                        <a href="/experience">Experience</a>
                        <a href="/portfolio#projects">Projects</a>
                        <a href="/contacts">Contacts</a>
                        <a href="/post" className="post-link">Post</a>
                    </div>
                </div>
            </nav>

            {/* SKILLS SECTION */}
            <main className="skills-main">
                <div className="skills-container">
                    <header className="skills-header">
                        <span className="skills-label">
                            Technical Expertise
                        </span>

                        <h1 className="skills-title">
                            SKILLS
                        </h1>
                    </header>

                    <div className="skills-grid">

                        {/* SKILL CARDS */}
                        <div className="skills-list">
                            <div className="skill-card">
                                <div className="skill-number">01</div>
                                <div>
                                    <h3>Computer Troubleshooting</h3>
                                    <p>
                                        Diagnostic and repair for PC and Laptop
                                        hardware/software issues.
                                    </p>
                                </div>
                            </div>

                            <div className="skill-card">
                                <div className="skill-number">02</div>
                                <div>
                                    <h3>Cable Management</h3>
                                    <p>
                                        Organizing and securing structured cabling
                                        for clean workstations and server racks.
                                    </p>
                                </div>
                            </div>

                            <div className="skill-card">
                                <div className="skill-number">03</div>
                                <div>
                                    <h3>Network Management</h3>
                                    <p>
                                        Configuration and maintenance of local
                                        area networks (LAN).
                                    </p>
                                </div>
                            </div>

                            <div className="skill-card">
                                <div className="skill-number">04</div>
                                <div>
                                    <h3>Repair Mobile Phones</h3>
                                    <p>
                                        I can repair mobile phone and i will
                                        improve it in the future.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* SKILLS IMAGE */}
                        <div className="skills-image-container">
                            <img
                                src="/assets/Skills.png"
                                alt="Professional Skills"
                                className="skills-image"
                            />
                        </div>

                    </div>
                </div>
            </main>
        </div>
    );
}
