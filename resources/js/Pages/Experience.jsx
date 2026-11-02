
import React from 'react';

export default function Experience() {
    return (
        <div className="experience-page">
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

                html {
                    overflow-x: hidden;
                    scroll-behavior: smooth;
                }

                body {
                    overflow-x: hidden;
                }

                .experience-page {
                    width: 100%;
                    min-height: 100vh;
                    overflow-x: hidden;
                    background-color: #0a0a0a;
                    background-image:
                        linear-gradient(rgba(0, 0, 0, 0.85), rgba(0, 0, 0, 0.85)),
                        url('/assets/background.png');
                    background-size: cover;
                    background-position: center;
                    background-attachment: fixed;
                    font-family: Inter, sans-serif;
                    color: #e0e0e0;
                }

                .experience-nav {
                    width: 100%;
                    border-bottom: 1px solid #222;
                    background: rgba(18,18,18,0.95);
                }

                .experience-nav-inner {
                    width: 100%;
                    max-width: 1200px;
                    min-height: 82px;
                    margin: auto;
                    padding: 12px 20px;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    gap: 25px;
                }

                .experience-logo img {
                    height: 50px;
                    display: block;
                }

                .experience-nav-links {
                    display: flex;
                    align-items: center;
                    justify-content: flex-end;
                    flex-wrap: wrap;
                    gap: 25px;
                }

                .experience-nav-links a {
                    color: #888;
                    font-size: 15px;
                    font-weight: 500;
                    text-decoration: none;
                    white-space: nowrap;
                    transition: color 0.3s ease;
                }

                .experience-nav-links a:hover,
                .experience-nav-links a.active {
                    color: #fff;
                }

                .experience-nav-links .post-link {
                    padding: 9px 18px;
                    border-radius: 5px;
                    background: #333;
                    color: #fff;
                }

                .experience-header {
                    padding: 64px 24px 48px;
                    text-align: center;
                }

                .experience-header-label {
                    margin-bottom: 12px;
                    color: #999;
                    font-size: 14px;
                    font-weight: bold;
                    letter-spacing: 5px;
                    text-transform: uppercase;
                }

                .experience-header h1 {
                    margin: 0;
                    color: white;
                    font-size: 48px;
                    font-weight: 900;
                    letter-spacing: 3px;
                    line-height: 1.3;
                    text-transform: uppercase;
                }

                .experience-header h1 span {
                    color: #888;
                }

                .experience-header-description {
                    max-width: 672px;
                    margin: 20px auto 0;
                    color: #aaa;
                    font-size: 16px;
                    line-height: 1.75;
                }

                .experience-main {
                    width: 100%;
                    max-width: 896px;
                    margin: 0 auto;
                    padding: 0 24px 80px;
                }

                .timeline-wrapper {
                    position: relative;
                }

                .timeline-line {
                    position: absolute;
                    top: 16px;
                    bottom: 16px;
                    left: 15px;
                    width: 1px;
                    background: linear-gradient(
                        to bottom,
                        #ffffff,
                        rgba(255,255,255,0.08)
                    );
                }

                .timeline-section {
                    position: relative;
                    margin-bottom: 48px;
                    padding-left: 48px;
                }

                .timeline-section:last-child {
                    margin-bottom: 0;
                }

                .timeline-dot {
                    position: absolute;
                    top: 8px;
                    left: 8px;
                    display: flex;
                    width: 15px;
                    height: 15px;
                    align-items: center;
                    justify-content: center;
                    border: 2px solid white;
                    border-radius: 50%;
                    background: #111;
                }

                .timeline-card {
                    min-width: 0;
                    overflow-wrap: anywhere;
                    padding: 32px;
                    border: 1px solid rgba(255,255,255,0.10);
                    border-radius: 16px;
                    background: rgba(20,20,20,0.78);
                    box-shadow: 0 15px 35px rgba(0,0,0,0.35);
                    transition: all 0.3s ease;
                }

                .timeline-card:hover {
                    transform: translateY(-4px);
                    border-color: rgba(255,255,255,0.25);
                    background: rgba(255,255,255,0.07);
                }

                .timeline-card-top {
                    display: flex;
                    flex-wrap: wrap;
                    align-items: center;
                    justify-content: space-between;
                    gap: 12px;
                    margin-bottom: 16px;
                }

                .timeline-badge {
                    padding: 4px 16px;
                    border: 1px solid rgba(255,255,255,0.2);
                    border-radius: 999px;
                    background: rgba(255,255,255,0.06);
                    color: white;
                    font-size: 12px;
                    font-weight: bold;
                    letter-spacing: 1px;
                    text-transform: uppercase;
                }

                .timeline-status {
                    color: #888;
                    font-size: 14px;
                }

                .timeline-card h2 {
                    margin: 0;
                    color: white;
                    font-size: 24px;
                    font-weight: 800;
                    line-height: 1.5;
                }

                .timeline-card h3 {
                    margin: 8px 0 0;
                    color: #bbb;
                    font-weight: 600;
                }

                .timeline-card-description {
                    margin-top: 16px;
                    color: #999;
                    line-height: 1.75;
                }

                .timeline-card-note {
                    margin-top: 16px;
                    color: #777;
                    font-size: 14px;
                    font-style: italic;
                }

                .nc2-image {
                    display: none;
                    margin-top: 20px;
                    text-align: center;
                }

                .nc2-image img {
                    width: 350px;
                    max-width: 100%;
                    height: auto;
                    border: 1px solid rgba(255,255,255,0.2);
                    border-radius: 10px;
                    box-shadow: 0 10px 30px rgba(0,0,0,0.4);
                }

                .timeline-card:hover .nc2-image {
                    display: block;
                }

                .always-learning {
                    margin-top: 64px;
                    padding: 40px;
                    border: 1px solid rgba(255,255,255,0.1);
                    border-radius: 16px;
                    background: rgba(255,255,255,0.03);
                    text-align: center;
                }

                .always-learning h2 {
                    margin: 0;
                    color: white;
                    font-size: 20px;
                    font-weight: 800;
                    letter-spacing: 1px;
                    text-transform: uppercase;
                }

                .always-learning p {
                    max-width: 672px;
                    margin: 16px auto 0;
                    color: #999;
                    line-height: 1.75;
                }

                .experience-footer {
                    padding: 24px;
                    border-top: 1px solid #222;
                    color: #666;
                    font-size: 14px;
                    text-align: center;
                }

                @media (max-width: 1280px) {
                    .experience-nav-links {
                        gap: 20px;
                    }
                }

                @media (max-width: 992px) {
                    .experience-nav-inner {
                        gap: 15px;
                    }

                    .experience-nav-links {
                        gap: 15px;
                    }

                    .experience-nav-links a {
                        font-size: 13px;
                    }

                    .experience-header h1 {
                        line-height: 1.3;
                    }

                    .experience-main {
                        padding-left: 24px;
                        padding-right: 24px;
                    }
                }

                @media (max-width: 768px) {
                    .experience-nav-inner {
                        flex-direction: column;
                        justify-content: center;
                        gap: 15px;
                    }

                    .experience-nav-links {
                        width: 100%;
                        justify-content: center;
                        gap: 12px 18px;
                    }

                    .experience-nav-links a {
                        font-size: 14px;
                    }

                    .experience-header {
                        padding: 45px 24px 35px;
                    }

                    .experience-header-label {
                        letter-spacing: 3px;
                    }

                    .experience-header h1 {
                        font-size: 38px;
                        letter-spacing: 2px;
                    }

                    .experience-main {
                        padding-left: 18px;
                        padding-right: 18px;
                        padding-bottom: 50px;
                    }

                    .timeline-card {
                        padding: 22px;
                    }

                    .timeline-card h2 {
                        font-size: 21px;
                    }

                    .timeline-card:hover {
                        transform: translateY(-2px);
                    }

                    .nc2-image {
                        display: block;
                    }

                    .always-learning {
                        margin-top: 45px;
                        padding: 30px 22px;
                    }
                }

                @media (max-width: 375px) {
                    .experience-nav-inner {
                        padding-left: 18px;
                        padding-right: 18px;
                    }

                    .experience-logo img {
                        height: 42px;
                    }

                    .experience-nav-links {
                        gap: 12px 15px;
                    }

                    .experience-nav-links a {
                        font-size: 12px;
                    }

                    .experience-nav-links .post-link {
                        padding: 6px 12px;
                    }

                    .experience-header {
                        padding: 35px 18px 28px;
                    }

                    .experience-header-label {
                        font-size: 12px;
                        letter-spacing: 2px;
                    }

                    .experience-header h1 {
                        font-size: 30px;
                        letter-spacing: 1px;
                    }

                    .experience-header-description {
                        font-size: 14px;
                        line-height: 1.8;
                    }

                    .experience-main {
                        padding-left: 12px;
                        padding-right: 12px;
                        padding-bottom: 35px;
                    }

                    .timeline-line {
                        left: 8px;
                    }

                    .timeline-section {
                        padding-left: 28px;
                        margin-bottom: 28px;
                    }

                    .timeline-dot {
                        left: 1px;
                        width: 14px;
                        height: 14px;
                    }

                    .timeline-card {
                        padding: 16px;
                        border-radius: 14px;
                    }

                    .timeline-card h2 {
                        font-size: 17px;
                    }

                    .timeline-card-description {
                        font-size: 14px;
                        line-height: 1.8;
                    }

                    .timeline-card-top {
                        gap: 10px;
                    }

                    .timeline-badge {
                        padding-left: 10px;
                        padding-right: 10px;
                        font-size: 10px;
                    }

                    .timeline-status {
                        font-size: 12px;
                    }

                    .nc2-image img {
                        width: 100%;
                    }

                    .always-learning {
                        margin-top: 35px;
                        padding: 22px 16px;
                    }

                    .always-learning h2 {
                        font-size: 16px;
                    }

                    .always-learning p {
                        font-size: 14px;
                        line-height: 1.8;
                    }

                    .experience-footer {
                        font-size: 12px;
                    }
                }

                @media (max-width: 320px) {
                    .experience-nav-inner {
                        padding-left: 12px;
                        padding-right: 12px;
                    }

                    .experience-logo img {
                        height: 36px;
                    }

                    .experience-nav-links {
                        gap: 10px 12px;
                    }

                    .experience-nav-links a {
                        font-size: 11px;
                    }

                    .experience-nav-links .post-link {
                        padding: 6px 10px;
                        font-size: 11px;
                    }

                    .experience-header h1 {
                        font-size: 26px;
                    }

                    .experience-header-description {
                        font-size: 13px;
                    }

                    .experience-main {
                        padding-left: 8px;
                        padding-right: 8px;
                    }

                    .timeline-section {
                        padding-left: 25px;
                    }

                    .timeline-card {
                        padding: 13px;
                    }

                    .timeline-card h2 {
                        font-size: 16px;
                    }

                    .timeline-card-description {
                        font-size: 13px;
                    }

                    .timeline-badge {
                        font-size: 9px;
                        letter-spacing: 0.5px;
                    }

                    .timeline-status {
                        font-size: 11px;
                    }
                }

                @media (prefers-reduced-motion: reduce) {
                    .timeline-card,
                    .experience-nav-links a {
                        transition: none;
                    }

                    .timeline-card:hover {
                        transform: none;
                    }
                }
            `}</style>

            {/* NAVIGATION */}
            <nav className="experience-nav">
                <div className="experience-nav-inner">
                    <a href="/" className="experience-logo">
                        <img src="/assets/uculogo.png" alt="UCU Logo" />
                    </a>

                    <div className="experience-nav-links">
                        <a href="/">Home</a>
                        <a href="/about">About</a>
                        <a href="/skills">Skills</a>
                        <a href="/experience" className="active">Experience</a>
                        <a href="/portfolio#projects">Projects</a>
                        <a href="/contacts">Contacts</a>
                        <a href="/post" className="post-link">Post</a>
                    </div>
                </div>
            </nav>

            {/* HEADER */}
            <header className="experience-header">
                <p className="experience-header-label">
                    My Journey
                </p>

                <h1>
                    Education <span>&</span> Experience
                </h1>

                <p className="experience-header-description">
                    My academic background, certifications, and professional development
                    as an Information Technology student.
                </p>
            </header>

            {/* TIMELINE */}
            <main className="experience-main">
                <div className="timeline-wrapper">

                    <div className="timeline-line"></div>

                    {/* EDUCATION */}
                    <section className="timeline-section">
                        <div className="timeline-dot"></div>

                        <div className="timeline-card">
                            <div className="timeline-card-top">
                                <span className="timeline-badge">
                                    Education
                                </span>

                                <span className="timeline-status">
                                    Present
                                </span>
                            </div>

                            <h2>
                                Bachelor of Science in Information Technology
                            </h2>

                            <h3>
                                Urdaneta City University (UCU)
                            </h3>

                            <p className="timeline-card-description">
                                Currently pursuing a degree in Information Technology,
                                developing knowledge and practical skills in computer
                                systems, troubleshooting, networking, and other areas
                                of technology.
                            </p>
                        </div>
                    </section>

                    {/* NC II CERTIFICATION */}
                    <section className="timeline-section">
                        <div className="timeline-dot"></div>

                        <div className="timeline-card">
                            <div className="timeline-card-top">
                                <span className="timeline-badge">
                                    Certification
                                </span>

                                <span className="timeline-status">
                                    Completed
                                </span>
                            </div>

                            <h2>
                                National Certificate II (NC II)
                            </h2>

                            <h3>
                                Technical-Vocational Certification
                            </h3>

                            <p className="timeline-card-description">
                                Earned an NC II certificate demonstrating assessed
                                technical competencies. This certification represents
                                my commitment to developing practical skills and
                                preparing for opportunities in the IT field.
                            </p>

                            <p className="timeline-card-note">
                                Computer System Servicing NC II - TESDA
                            </p>

                            <div className="nc2-image">
                                <img
                                    src="/assets/NC2.png"
                                    alt="My NC II Certificate"
                                />
                            </div>
                        </div>
                    </section>

                    {/* TRAINING */}
                    <section className="timeline-section">
                        <div className="timeline-dot"></div>

                        <div className="timeline-card">
                            <div className="timeline-card-top">
                                <span className="timeline-badge">
                                    Training
                                </span>

                                <span className="timeline-status">
                                    Add date
                                </span>
                            </div>

                            <h2>
                                Technical Training and Workshops
                            </h2>

                            <h3>
                                Mobile Phone Repair and Troubleshooting
                            </h3>

                            <p className="timeline-card-description">
                                Gained practical knowledge and hands-on experience in mobile phone repair, including
                                identifying common hardware and software issues, diagnosing device problems, and learning
                                basic repair and maintenance techniques.
                            </p>

                            <p className="timeline-card-note">
                                Mobile Phone Repair Training
                            </p>
                        </div>
                    </section>

                    {/* SEMINAR */}
                    <section className="timeline-section">
                        <div className="timeline-dot"></div>

                        <div className="timeline-card">
                            <div className="timeline-card-top">
                                <span className="timeline-badge">
                                    Seminar
                                </span>

                                <span className="timeline-status">
                                    Attended
                                </span>
                            </div>

                            <h2>
                                Cybersecurity and Online Safety Awareness
                            </h2>

                            <h3>
                                Information Technology Seminar
                            </h3>

                            <p className="timeline-card-description">
                                Attended a seminar focused on cybersecurity and online safety,
                                gaining awareness of common online threats, protecting personal
                                information, practicing safe internet use, and understanding the
                                importance of digital security.
                            </p>
                        </div>
                    </section>

                </div>

                {/* ALWAYS LEARNING */}
                <div className="always-learning">
                    <h2>
                        Always Learning
                    </h2>

                    <p>
                        I aim to continue improving my technical knowledge, gaining
                        hands-on experience, and learning new technologies as I grow
                        in the field of Information Technology.
                    </p>
                </div>
            </main>

            {/* FOOTER */}
            <footer className="experience-footer">
                © 2026 Ace Rael. All Rights Reserved.
            </footer>
        </div>
    );
}
