
import React from 'react';
import { Link } from '@inertiajs/react';

export default function ProjectForm({
    data,
    setData,
    errors,
    processing,
    handleSubmit,
    mode = 'create',
    project = null,
}) {
    const isEdit = mode === 'edit';

    const currentImage = project?.image_path
        ? (
            project.image_path.startsWith('http')
                ? project.image_path
                : project.image_path.startsWith('assets/') ||
                  project.image_path.startsWith('uploads/') ||
                  project.image_path.startsWith('storage/')
                    ? `/${project.image_path}`
                    : `/storage/${project.image_path.replace(/^\/+/, '')}`
        )
        : null;

    return (
        <>
            <style>{`
                html, body, #app {
                    margin: 0 !important;
                    padding: 0 !important;
                    min-height: 100%;
                    width: 100%;
                    background: #080808 !important;
                }

                * {
                    box-sizing: border-box;
                }

                body {
                    overflow-x: hidden;
                }

                .project-page {
                    width: 100%;
                    min-height: 100vh;
                    margin: 0;
                    padding: 40px 20px;
                    background: #080808;
                    color: white;
                    font-family: Arial, sans-serif;
                }

                .project-container {
                    width: 100%;
                    max-width: 750px;
                    margin: 0 auto;
                }

                .project-header {
                    text-align: center;
                    margin-bottom: 35px;
                }

                .project-header h1 {
                    font-size: 32px;
                    margin: 0 0 10px;
                    color: white;
                }

                .project-header p {
                    color: #aaa;
                    margin: 0;
                }

                .project-form {
                    background: #151515;
                    border: 1px solid #333;
                    border-radius: 15px;
                    padding: 30px;
                }

                .form-group {
                    margin-bottom: 22px;
                }

                .form-group label {
                    display: block;
                    margin-bottom: 9px;
                    font-weight: bold;
                    color: white;
                }

                .form-group input,
                .form-group select,
                .form-group textarea {
                    display: block;
                    width: 100%;
                    padding: 13px;
                    background: #222;
                    color: white;
                    border: 1px solid #444;
                    border-radius: 7px;
                    outline: none;
                    font-size: 15px;
                }

                .form-group input:focus,
                .form-group select:focus,
                .form-group textarea:focus {
                    border-color: #777;
                }

                .form-group select {
                    cursor: pointer;
                }

                .form-group select option {
                    background: #222;
                    color: white;
                }

                .form-group input[type="date"] {
                    color-scheme: dark;
                }

                .form-group input[type="file"] {
                    padding: 10px;
                }

                .form-group textarea {
                    min-height: 140px;
                    resize: vertical;
                }

                .error-message {
                    display: block;
                    color: #ff6666;
                    font-size: 13px;
                    margin-top: 7px;
                }

                .current-image {
                    margin-top: 15px;
                }

                .current-image img {
                    width: 180px;
                    height: 130px;
                    object-fit: cover;
                    border-radius: 8px;
                    border: 1px solid #444;
                }

                .current-image p {
                    color: #aaa;
                    font-size: 13px;
                    margin-bottom: 8px;
                }

                .form-buttons {
                    display: flex;
                    gap: 12px;
                    margin-top: 30px;
                }

                .submit-button,
                .back-button {
                    display: inline-block;
                    padding: 12px 22px;
                    border-radius: 7px;
                    text-decoration: none;
                    font-weight: bold;
                    cursor: pointer;
                    border: none;
                    font-size: 15px;
                    text-align: center;
                }

                .submit-button {
                    background: white;
                    color: black;
                }

                .submit-button:hover {
                    background: #ccc;
                }

                .submit-button:disabled {
                    opacity: 0.5;
                    cursor: not-allowed;
                }

                .back-button {
                    background: #333;
                    color: white;
                }

                .back-button:hover {
                    background: #444;
                }

                @media (max-width: 600px) {
                    .project-page {
                        padding: 30px 15px;
                    }

                    .project-form {
                        padding: 20px;
                    }

                    .project-header h1 {
                        font-size: 26px;
                    }

                    .form-buttons {
                        flex-direction: column;
                    }
                }
            `}</style>

            <div className="project-page">
                <div className="project-container">
                    <div className="project-header">
                        <h1>{isEdit ? 'Edit Project' : 'Add New Project'}</h1>
                        <p>
                            {isEdit
                                ? 'Update the details of your existing project.'
                                : 'Fill in the details below to add a project to your portfolio.'}
                        </p>
                    </div>

                    <form className="project-form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label>Project Title</label>
                            <input
                                type="text"
                                value={data.title}
                                onChange={(e) => setData('title', e.target.value)}
                                placeholder="Enter project title"
                            />
                            {errors.title && (
                                <span className="error-message">{errors.title}</span>
                            )}
                        </div>

                        <div className="form-group">
                            <label>Project Category</label>
                            <select
                                value={data.category}
                                onChange={(e) => setData('category', e.target.value)}
                            >
                                <option value="">Select project category</option>
                                <option value="Web Development">Web Development</option>
                                <option value="Mobile Application">Mobile Application</option>
                                <option value="Database">Database</option>
                                <option value="Networking">Networking</option>
                                <option value="Other">Other</option>
                            </select>
                            {errors.category && (
                                <span className="error-message">{errors.category}</span>
                            )}
                        </div>

                        <div className="form-group">
                            <label>Project Description</label>
                            <textarea
                                value={data.description}
                                onChange={(e) => setData('description', e.target.value)}
                                placeholder="Enter project description"
                            />
                            {errors.description && (
                                <span className="error-message">{errors.description}</span>
                            )}
                        </div>

                        {/* NEW: Project URL */}
                        <div className="form-group">
                            <label>Project URL (Optional)</label>
                            <input
                                type="url"
                                value={data.project_url}
                                onChange={(e) => setData('project_url', e.target.value)}
                                placeholder="https://example.com"
                            />
                            {errors.project_url && (
                                <span className="error-message">
                                    {errors.project_url}
                                </span>
                            )}
                        </div>

                        <div className="form-group">
                            <label>Project Date</label>
                            <input
                                type="date"
                                value={data.date}
                                onChange={(e) => setData('date', e.target.value)}
                            />
                            {errors.date && (
                                <span className="error-message">{errors.date}</span>
                            )}
                        </div>

                        <div className="form-group">
                            <label>
                                {isEdit ? 'Replace Project Image (Optional)' : 'Project Image (Optional)'}
                            </label>
                            <input
                                type="file"
                                accept="image/jpeg,image/png,image/webp"
                                onChange={(e) => setData('image', e.target.files[0] || null)}
                            />
                            {errors.image && (
                                <span className="error-message">{errors.image}</span>
                            )}

                            {isEdit && currentImage && (
                                <div className="current-image">
                                    <p>Current Project Image:</p>
                                    <img src={currentImage} alt={project.title} />
                                </div>
                            )}
                        </div>

                        <div className="form-buttons">
                            <button
                                type="submit"
                                className="submit-button"
                                disabled={processing}
                            >
                                {processing
                                    ? (isEdit ? 'Updating...' : 'Saving...')
                                    : (isEdit ? 'Update Project' : 'Save Project')}
                            </button>

                            <Link href="/portfolio" className="back-button">
                                Cancel
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}
