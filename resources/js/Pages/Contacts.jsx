
import React from 'react';

export default function Contacts() {
    return (
        <div className="contacts-page">
            <style>{`
                * {
                    box-sizing: border-box;
                }

                html, body, #app {
                    width: 100%;
                    min-height: 100%;
                    margin: 0;
                    padding: 0;
                    background: #0a0a0a;
                }

                html, body {
                    overflow-x: hidden;
                    scroll-behavior: smooth;
                }

                .contacts-page {
                    width: 100%;
                    min-height: 100vh;
                    overflow-x: hidden;
                    background-color: #0a0a0a;
                    background-image:
                        linear-gradient(rgba(0,0,0,0.85), rgba(0,0,0,0.85)),
                        url('/assets/background.png');
                    background-size: cover;
                    background-position: center;
                    background-attachment: fixed;
                    font-family: Inter, sans-serif;
                    color: #e0e0e0;
                    text-align: center;
                }

                .contacts-nav {
                    width: 100%;
                    border-bottom: 1px solid #222;
                    background: rgba(18,18,18,0.95);
                    padding: 16px 0;
                }

                .contacts-nav-container {
                    width: 100%;
                    max-width: 1200px;
                    margin: 0 auto;
                    padding: 0 20px;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    gap: 20px;
                }

                .contacts-logo {
                    display: flex;
                    align-items: center;
                    flex-shrink: 0;
                }

                .contacts-logo img {
                    display: block;
                    width: auto;
                    height: 50px;
                    max-width: 100%;
                }

                .contacts-nav-links {
                    display: flex;
                    align-items: center;
                    justify-content: flex-end;
                    flex-wrap: wrap;
                    gap: 12px 20px;
                    min-width: 0;
                }

                .contacts-nav-links a {
                    color: #888;
                    font-size: 15px;
                    font-weight: 500;
                    text-decoration: none;
                    white-space: nowrap;
                    transition: color 0.3s ease;
                }

                .contacts-nav-links a:hover,
                .contacts-nav-links a.active {
                    color: white;
                }

                .contacts-nav-links .post-link {
                    padding: 8px 18px;
                    border-radius: 5px;
                    background: #333;
                    color: white;
                }

                .contact-main {
                    width: 100%;
                    max-width: 1200px;
                    margin: 80px auto;
                    padding: 0 20px;
                    text-align: center;
                }

                .contact-header span {
                    color: #777;
                    font-size: 14px;
                    font-weight: bold;
                    letter-spacing: 3px;
                    text-transform: uppercase;
                }

                .contact-header h1 {
                    margin: 10px 0 60px;
                    color: white;
                    font-size: 64px;
                    font-weight: bold;
                    letter-spacing: 5px;
                    overflow-wrap: anywhere;
                }

                .contact-grid {
                    display: grid;
                    grid-template-columns: repeat(3, minmax(0, 1fr));
                    gap: 30px;
                    margin-bottom: 60px;
                }

                .contact-card {
                    min-width: 0;
                    overflow-wrap: anywhere;
                    word-break: normal;
                    padding: 40px 20px;
                    border: 1px solid #222;
                    border-radius: 15px;
                    background: rgba(255,255,255,0.03);
                    transition: all 0.3s ease;
                }

                .contact-card:hover {
                    transform: translateY(-10px);
                    border-color: #444;
                    background: rgba(255,255,255,0.05);
                }

                .contact-icon {
                    display: flex;
                    height: 80px;
                    align-items: center;
                    justify-content: center;
                    margin-bottom: 20px;
                }

                .contact-icon img {
                    max-width: 100%;
                    max-height: 100%;
                    object-fit: contain;
                    filter: grayscale(100%) brightness(1.2);
                }

                .contact-card h3 {
                    margin: 0 0 15px;
                    color: white;
                    font-size: 22px;
                    font-weight: bold;
                    letter-spacing: 1px;
                }

                .contact-card p {
                    margin: 0;
                    color: #888;
                    font-size: 16px;
                    line-height: 1.6;
                    overflow-wrap: anywhere;
                }

                .contact-decoration img {
                    display: inline-block;
                    width: 100%;
                    max-width: 300px;
                    height: auto;
                    margin-top: 40px;
                    filter: grayscale(100%);
                    opacity: 0.3;
                }

                @media (max-width: 992px) {
                    .contacts-nav-container {
                        flex-direction: column;
                        justify-content: center;
                        gap: 18px;
                    }

                    .contacts-nav-links {
                        width: 100%;
                        justify-content: center;
                        gap: 14px 22px;
                    }

                    .contacts-nav-links a {
                        font-size: 14px;
                    }

                    .contact-main {
                        margin-top: 50px;
                    }

                    .contact-grid {
                        grid-template-columns: repeat(2, minmax(0, 1fr));
                        gap: 20px;
                    }

                    .contact-card:last-child {
                        grid-column: 1 / -1;
                        width: calc(50% - 10px);
                        justify-self: center;
                    }

                    .contact-header h1 {
                        font-size: 48px;
                        margin-bottom: 40px;
                    }
                }

                @media (max-width: 768px) {
                    .contacts-page {
                        background-attachment: scroll;
                    }

                    .contact-main {
                        margin-top: 40px;
                    }
                }

                @media (max-width: 480px) {
                    .contacts-nav-container {
                        padding: 0 12px;
                        gap: 15px;
                    }

                    .contacts-logo img {
                        height: 45px;
                    }

                    .contacts-nav-links {
                        flex-direction: row;
                        flex-wrap: wrap;
                        justify-content: center;
                        align-items: center;
                        width: 100%;
                        gap: 12px 16px;
                    }

                    .contacts-nav-links a {
                        font-size: 13px;
                        line-height: 1.4;
                    }

                    .contacts-nav-links .post-link {
                        padding: 6px 14px;
                    }

                    .contact-main {
                        margin-top: 35px;
                        margin-bottom: 40px;
                        padding: 0 15px;
                    }

                    .contact-header span {
                        font-size: 12px;
                        letter-spacing: 2px;
                    }

                    .contact-header h1 {
                        font-size: 37px;
                        letter-spacing: 3px;
                        margin-top: 10px;
                        margin-bottom: 35px;
                    }

                    .contact-grid {
                        grid-template-columns: minmax(0, 1fr);
                        gap: 18px;
                        margin-bottom: 35px;
                    }

                    .contact-card,
                    .contact-card:last-child {
                        grid-column: auto;
                        width: 100%;
                        padding: 28px 18px;
                    }

                    .contact-card h3 {
                        font-size: 20px;
                    }

                    .contact-card p {
                        font-size: 14px;
                        line-height: 1.7;
                    }

                    .contact-decoration img {
                        max-width: 230px;
                        margin-top: 5px;
                    }
                }

                @media (max-width: 360px) {
                    .contacts-nav-container {
                        padding: 0 8px;
                        gap: 12px;
                    }

                    .contacts-logo img {
                        height: 40px;
                    }

                    .contacts-nav-links {
                        gap: 10px 12px;
                    }

                    .contacts-nav-links a {
                        font-size: 12px;
                    }

                    .contacts-nav-links .post-link {
                        padding: 5px 11px;
                    }

                    .contact-main {
                        padding: 0 12px;
                        margin-top: 28px;
                    }

                    .contact-header span {
                        font-size: 11px;
                        letter-spacing: 1.5px;
                    }

                    .contact-header h1 {
                        font-size: 30px;
                        letter-spacing: 2px;
                        margin-bottom: 28px;
                    }

                    .contact-grid {
                        gap: 15px;
                    }

                    .contact-card,
                    .contact-card:last-child {
                        padding: 25px 12px;
                    }

                    .contact-icon {
                        height: 65px;
                    }

                    .contact-card h3 {
                        font-size: 18px;
                    }

                    .contact-card p {
                        font-size: 13px;
                    }

                    .contact-decoration img {
                        max-width: 190px;
                    }
                }
            `}</style>

            {/* NAVIGATION */}
            <nav className="contacts-nav">
                <div className="contacts-nav-container">

                    <a href="/" className="contacts-logo">
                        <img
                            src="/assets/uculogo.png"
                            alt="UCU Logo"
                        />
                    </a>

                    <div className="contacts-nav-links">
                        <a href="/">Home</a>
                        <a href="/about">About</a>
                        <a href="/skills">Skills</a>
                        <a href="/experience">Experience</a>
                        <a href="/portfolio#projects">Projects</a>
                        <a href="/contacts" className="active">Contacts</a>
                        <a href="/post" className="post-link">Post</a>
                    </div>

                </div>
            </nav>

            {/* CONTACT SECTION */}
            <main className="contact-main">

                <header className="contact-header">
                    <span>Get In Touch</span>

                    <h1>CONTACTS</h1>
                </header>

                <div className="contact-grid">

                    {/* PHONE */}
                    <div className="contact-card">
                        <div className="contact-icon">
                            <img
                                src="/assets/C2.png"
                                alt="Phone Icon"
                            />
                        </div>

                        <h3>Phone</h3>

                        <p>+63 905 293 1409</p>
                    </div>

                    {/* EMAIL */}
                    <div className="contact-card">
                        <div className="contact-icon">
                            <img
                                src="/assets/C1.png"
                                alt="Email Icon"
                            />
                        </div>

                        <h3>Email</h3>

                        <p>aceraeltandingan@gmail.com</p>
                    </div>

                    {/* LOCATION */}
                    <div className="contact-card">
                        <div className="contact-icon">
                            <img
                                src="/assets/C3.png"
                                alt="Location Icon"
                            />
                        </div>

                        <h3>Location</h3>

                        <p>
                            048-C Pandan Ave. Baloling,
                            <br />
                            Mapandan, Pangasinan
                        </p>
                    </div>

                </div>

                {/* DECORATIVE IMAGE */}
                <div className="contact-decoration">
                    <img
                        src="/assets/C4.png"
                        alt="Decorative Element"
                    />
                </div>

            </main>
        </div>
    );
}
