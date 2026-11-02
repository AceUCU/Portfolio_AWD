
import React from 'react';

export default function About() {
    return (
        <div
            className="min-h-screen w-full overflow-x-hidden bg-[#0a0a0a] text-[#e0e0e0]"
            style={{
                backgroundImage: "linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.8)), url('/assets/background.png')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundAttachment: 'fixed',
                fontFamily: 'Inter, sans-serif',
            }}
        >
            <style>{`
                * {
                    box-sizing: border-box;
                }

                html, body, #app {
                    margin: 0;
                    min-height: 100%;
                    width: 100%;
                }

                body {
                    overflow-x: hidden;
                }

                .about-nav {
                    width: 100%;
                    background: rgba(18, 18, 18, 0.95);
                    border-bottom: 1px solid #222;
                }

                .about-nav-inner {
                    max-width: 1200px;
                    min-height: 82px;
                    margin: auto;
                    padding: 12px 20px;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    gap: 25px;
                }

                .about-logo img {
                    height: 50px;
                    display: block;
                }

                .about-nav-links {
                    display: flex;
                    align-items: center;
                    justify-content: flex-end;
                    flex-wrap: wrap;
                    gap: 25px;
                }

                .about-nav-links a {
                    color: #888;
                    text-decoration: none;
                    font-size: 15px;
                    font-weight: 500;
                    white-space: nowrap;
                    transition: color 0.3s;
                }

                .about-nav-links a:hover,
                .about-nav-links a.active {
                    color: white;
                }

                .about-nav-links .post-link {
                    background: #333;
                    color: white;
                    padding: 9px 18px;
                    border-radius: 5px;
                }

                .about-main {
                    max-width: 1100px;
                    min-height: calc(100vh - 82px);
                    margin: auto;
                    padding: 60px 20px;
                    display: flex;
                    align-items: center;
                }

                .about-content {
                    width: 100%;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    gap: 50px;
                }

                .about-text {
                    flex: 1;
                    min-width: 0;
                }

                .about-label {
                    color: #666;
                    font-size: 14px;
                    letter-spacing: 2px;
                    text-transform: uppercase;
                }

                .about-title {
                    margin: 10px 0 20px;
                    color: white;
                    font-size: 64px;
                    font-weight: bold;
                    letter-spacing: 3px;
                }

                .about-description {
                    margin-bottom: 20px;
                    color: #aaa;
                    font-size: 19px;
                    line-height: 1.8;
                }

                .about-profile {
                    flex: 1;
                    display: flex;
                    justify-content: center;
                    min-width: 0;
                }

                .about-profile-circle {
                    width: 400px;
                    height: 400px;
                    overflow: hidden;
                    border: 5px solid #333;
                    border-radius: 50%;
                    background: #1a1a1a;
                    box-shadow: 0 0 30px rgba(0,0,0,0.5);
                }

                .about-profile-circle img {
                    display: block;
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }

                @media (max-width: 992px) {
                    .about-content {
                        flex-direction: column-reverse;
                        text-align: center;
                        gap: 35px;
                    }

                    .about-profile-circle {
                        width: 300px;
                        height: 300px;
                    }

                    .about-title {
                        font-size: 48px;
                    }

                    .about-description {
                        font-size: 17px;
                    }

                    .about-nav-links {
                        gap: 15px;
                    }

                    .about-nav-links a {
                        font-size: 13px;
                    }
                }

                @media (max-width: 768px) {
                    .about-nav-inner {
                        flex-direction: column;
                        justify-content: center;
                        gap: 15px;
                    }

                    .about-nav-links {
                        width: 100%;
                        justify-content: center;
                        gap: 12px 18px;
                    }

                    .about-nav-links a {
                        font-size: 14px;
                    }

                    .about-main {
                        min-height: auto;
                        padding: 45px 24px;
                    }

                    .about-title {
                        font-size: 42px;
                    }

                    .about-description {
                        font-size: 16px;
                    }
                }

                @media (max-width: 400px) {
                    .about-nav-inner {
                        padding-left: 18px;
                        padding-right: 18px;
                    }

                    .about-logo img {
                        height: 42px;
                    }

                    .about-nav-links {
                        gap: 12px 15px;
                    }

                    .about-nav-links a {
                        font-size: 12px;
                    }

                    .about-nav-links .post-link {
                        padding: 6px 12px;
                    }

                    .about-main {
                        padding: 35px 18px;
                    }

                    .about-title {
                        font-size: 36px;
                        letter-spacing: 1.5px;
                    }

                    .about-description {
                        font-size: 15px;
                    }

                    .about-profile-circle {
                        width: 220px;
                        height: 220px;
                    }
                }

                @media (max-width: 320px) {
                    .about-nav-inner {
                        padding-left: 12px;
                        padding-right: 12px;
                    }

                    .about-logo img {
                        height: 36px;
                    }

                    .about-nav-links {
                        gap: 10px 12px;
                    }

                    .about-nav-links a {
                        font-size: 11px;
                    }

                    .about-main {
                        padding-left: 14px;
                        padding-right: 14px;
                    }

                    .about-title {
                        font-size: 32px;
                    }

                    .about-description {
                        font-size: 14px;
                    }

                    .about-profile-circle {
                        width: 195px;
                        height: 195px;
                    }
                }
            `}</style>

            {/* NAVIGATION */}
            <nav className="about-nav">
                <div className="about-nav-inner">

                    <a href="/" className="about-logo">
                        <img
                            src="/assets/uculogo.png"
                            alt="UCU Logo"
                        />
                    </a>

                    <div className="about-nav-links">
                        <a href="/">Home</a>
                        <a href="/about" className="active">About</a>
                        <a href="/skills">Skills</a>
                        <a href="/experience">Experience</a>
                        <a href="/portfolio#projects">Projects</a>
                        <a href="/contacts">Contacts</a>
                        <a href="/post" className="post-link">Post</a>
                    </div>

                </div>
            </nav>

            {/* ABOUT SECTION */}
            <main className="about-main">

                <div className="about-content">

                    {/* ABOUT TEXT */}
                    <div className="about-text">

                        <span className="about-label">
                            IT Student &amp; Developer
                        </span>

                        <h1 className="about-title">
                            ABOUT ME
                        </h1>

                        <p className="about-description">
                            Hi, I’m <strong>Ace Rael Tandingan</strong>, currently studying at
                            Urdaneta City University (UCU), taking up Bachelor of Science
                            in Information Technology (BSIT).
                        </p>

                        <p className="about-description">
                            I am 19 years old. While I may look serious at first,
                            I am actually friendly, approachable, and always eager to learn new technologies.
                        </p>

                    </div>

                    {/* PROFILE IMAGE */}
                    <div className="about-profile">

                        <div className="about-profile-circle">
                            <img
                                src="/assets/me.png"
                                alt="Ace Rael Tandingan"
                            />
                        </div>

                    </div>

                </div>

            </main>
        </div>
    );
}
