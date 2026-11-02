
import React from 'react';

export default function Home() {
    return (
        <div
            className="min-h-screen w-full overflow-x-hidden bg-[#0a0a0a] text-[#e0e0e0]"
            style={{
                backgroundImage: "linear-gradient(rgba(0,0,0,0.85), rgba(0,0,0,0.85)), url('/assets/background.png')",
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

                .home-nav {
                    width: 100%;
                    background: rgba(18, 18, 18, 0.95);
                    border-bottom: 1px solid #222;
                }

                .home-nav-inner {
                    max-width: 1200px;
                    min-height: 82px;
                    margin: auto;
                    padding: 12px 20px;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    gap: 25px;
                }

                .home-logo img {
                    height: 50px;
                    display: block;
                }

                .nav-links {
                    display: flex;
                    align-items: center;
                    justify-content: flex-end;
                    flex-wrap: wrap;
                    gap: 25px;
                }

                .nav-links a {
                    color: #888;
                    text-decoration: none;
                    font-size: 15px;
                    font-weight: 500;
                    white-space: nowrap;
                    transition: color 0.3s;
                }

                .nav-links a:hover,
                .nav-links a.active {
                    color: white;
                }

                .nav-links .post-link {
                    background: #333;
                    color: white;
                    padding: 9px 18px;
                    border-radius: 5px;
                }

                .home-main {
                    max-width: 1200px;
                    min-height: calc(100vh - 82px);
                    margin: auto;
                    padding: 60px 20px;
                    display: flex;
                    align-items: center;
                }

                .home-content {
                    width: 100%;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    gap: 60px;
                }

                .home-text {
                    flex: 1;
                    min-width: 0;
                }

                .home-label {
                    color: #777;
                    font-size: 13px;
                    font-weight: bold;
                    letter-spacing: 3px;
                }

                .home-title {
                    margin: 20px 0;
                    color: white;
                    font-size: 72px;
                    line-height: 1.15;
                    letter-spacing: 3px;
                    font-weight: 700;
                }

                .home-title span {
                    color: #888;
                }

                .home-subtitle {
                    margin-bottom: 25px;
                    color: #ccc;
                    font-size: 24px;
                    font-weight: 500;
                }

                .home-description {
                    max-width: 600px;
                    margin-bottom: 35px;
                    color: #999;
                    font-size: 16px;
                    line-height: 1.9;
                }

                .about-button {
                    display: inline-block;
                    padding: 14px 32px;
                    border: 1px solid white;
                    border-radius: 5px;
                    background: white;
                    color: black;
                    font-weight: bold;
                    text-decoration: none;
                    transition: all 0.3s;
                }

                .about-button:hover {
                    transform: translateY(-3px);
                    background: transparent;
                    color: white;
                }

                .home-profile {
                    position: relative;
                    flex: 1;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    min-width: 0;
                }

                .profile-circle {
                    position: relative;
                    z-index: 2;
                    width: 380px;
                    height: 380px;
                    overflow: hidden;
                    border: 5px solid #333;
                    border-radius: 50%;
                    background: #1a1a1a;
                    box-shadow: 0 0 40px rgba(0,0,0,0.6);
                }

                .profile-circle img {
                    display: block;
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }

                .profile-outline {
                    position: absolute;
                    z-index: 1;
                    width: 420px;
                    height: 420px;
                    border: 1px solid #333;
                    border-radius: 50%;
                }

                @media (max-width: 992px) {
                    .home-content {
                        gap: 30px;
                    }

                    .home-title {
                        font-size: 56px;
                    }

                    .home-subtitle {
                        font-size: 20px;
                    }

                    .profile-circle {
                        width: 300px;
                        height: 300px;
                    }

                    .profile-outline {
                        width: 330px;
                        height: 330px;
                    }

                    .nav-links {
                        gap: 15px;
                    }

                    .nav-links a {
                        font-size: 13px;
                    }
                }

                @media (max-width: 768px) {
                    .home-nav-inner {
                        flex-direction: column;
                        justify-content: center;
                        gap: 15px;
                    }

                    .nav-links {
                        justify-content: center;
                        gap: 12px 18px;
                    }

                    .home-main {
                        min-height: auto;
                        padding: 45px 24px;
                    }

                    .home-content {
                        flex-direction: column-reverse;
                        justify-content: center;
                        gap: 40px;
                        text-align: center;
                    }

                    .home-text {
                        width: 100%;
                    }

                    .home-description {
                        margin-left: auto;
                        margin-right: auto;
                    }

                    .home-title {
                        font-size: 48px;
                    }

                    .home-subtitle {
                        font-size: 19px;
                    }

                    .home-profile {
                        width: 100%;
                    }

                    .profile-circle {
                        width: 260px;
                        height: 260px;
                    }

                    .profile-outline {
                        width: 290px;
                        height: 290px;
                    }
                }

                @media (max-width: 400px) {
                    .home-nav-inner {
                        padding-left: 18px;
                        padding-right: 18px;
                    }

                    .home-logo img {
                        height: 42px;
                    }

                    .nav-links {
                        gap: 12px 15px;
                    }

                    .nav-links a {
                        font-size: 12px;
                    }

                    .nav-links .post-link {
                        padding: 6px 12px;
                    }

                    .home-main {
                        padding: 35px 18px;
                    }

                    .home-title {
                        font-size: 38px;
                        letter-spacing: 1.5px;
                    }

                    .home-subtitle {
                        font-size: 17px;
                    }

                    .home-description {
                        font-size: 14px;
                    }

                    .profile-circle {
                        width: 220px;
                        height: 220px;
                    }

                    .profile-outline {
                        width: 245px;
                        height: 245px;
                    }
                }
            `}</style>

            {/* NAVIGATION */}
            <nav className="home-nav">
                <div className="home-nav-inner">

                    <a href="/" className="home-logo">
                        <img
                            src="/assets/uculogo.png"
                            alt="UCU Logo"
                        />
                    </a>

                    <div className="nav-links">
                        <a href="/" className="active">Home</a>
                        <a href="/about">About</a>
                        <a href="/skills">Skills</a>
                        <a href="/experience">Experience</a>
                        <a href="/portfolio#projects">Projects</a>
                        <a href="/contacts">Contacts</a>
                        <a href="/post" className="post-link">Post</a>
                    </div>

                </div>
            </nav>

            {/* HOME SECTION */}
            <main className="home-main">

                <div className="home-content">

                    {/* TEXT CONTENT */}
                    <div className="home-text">

                        <span className="home-label">
                            WELCOME TO MY PORTFOLIO
                        </span>

                        <h1 className="home-title">
                            HI, I'M <br />
                            <span>ACE RAEL</span>
                        </h1>

                        <h2 className="home-subtitle">
                            IT Student &amp; Aspiring Web Developer
                        </h2>

                        <p className="home-description">
                            I'm Ace Rael Tandingan, an Information Technology student
                            at Urdaneta City University. I am passionate about technology,
                            computer troubleshooting, networking, and web development.
                            I continuously improve my skills and explore new technologies
                            to build my future in the IT industry.
                        </p>

                        <a href="/about" className="about-button">
                            About Me
                        </a>

                    </div>

                    {/* PROFILE IMAGE */}
                    <div className="home-profile">

                        <div className="profile-circle">
                            <img
                                src="/assets/me.png"
                                alt="Ace Rael Tandingan"
                            />
                        </div>

                        <div className="profile-outline"></div>

                    </div>

                </div>

            </main>
        </div>
    );
}
