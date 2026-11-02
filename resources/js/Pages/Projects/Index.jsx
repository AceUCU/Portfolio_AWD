import React from 'react';
import { Link, router, usePage } from '@inertiajs/react';

export default function Index({ projects = [] }) {
    const { flash } = usePage().props;

    const handleDelete = (project) => {
        const confirmed = window.confirm(
            `Are you sure you want to delete "${project.title}"?`
        );

        if (confirmed) {
            router.delete(`/projects/${project.id}`);
        }
    };

    return (
        <div className="min-h-screen bg-gray-950 text-white p-8">
            <div className="max-w-6xl mx-auto">

                <div className="flex justify-between items-center mb-8">
                    <div>
                        <h1 className="text-3xl font-bold">
                            Manage Projects
                        </h1>
                        <p className="text-gray-400 mt-2">
                            Add, edit, and delete your portfolio projects.
                        </p>
                    </div>

                    <Link
                        href="/projects/create"
                        className="bg-blue-600 hover:bg-blue-700 px-5 py-3 rounded-lg"
                    >
                        + Add Project
                    </Link>
                </div>

                {flash?.success && (
                    <div className="bg-green-900 text-green-200 p-4 rounded-lg mb-6">
                        {flash.success}
                    </div>
                )}

                {projects.length === 0 ? (
                    <div className="bg-gray-900 p-8 rounded-xl text-center">
                        <p className="text-gray-400">
                            No projects have been added yet.
                        </p>
                    </div>
                ) : (
                    <div className="overflow-x-auto bg-gray-900 rounded-xl">
                        <table className="w-full text-left">
                            <thead className="bg-gray-800">
                                <tr>
                                    <th className="p-4">Title</th>
                                    <th className="p-4">Category</th>
                                    <th className="p-4">Date</th>
                                    <th className="p-4">Project URL</th>
                                    <th className="p-4">Actions</th>
                                </tr>
                            </thead>

                            <tbody>
                                {projects.map((project) => (
                                    <tr
                                        key={project.id}
                                        className="border-t border-gray-800"
                                    >
                                        <td className="p-4">
                                            {project.title}
                                        </td>

                                        <td className="p-4">
                                            {project.category || 'Not specified'}
                                        </td>

                                        <td className="p-4">
                                            {project.date}
                                        </td>

                                        <td className="p-4">
                                            {project.project_url ? (
                                                <a
                                                    href={project.project_url}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-blue-400 hover:text-blue-300"
                                                >
                                                    View URL
                                                </a>
                                            ) : (
                                                <span className="text-gray-500">
                                                    No URL
                                                </span>
                                            )}
                                        </td>

                                        <td className="p-4">
                                            <div className="flex gap-3">
                                                <Link
                                                    href={`/projects/${project.id}/edit`}
                                                    className="text-blue-400 hover:text-blue-300"
                                                >
                                                    Edit
                                                </Link>

                                                <button
                                                    onClick={() => handleDelete(project)}
                                                    className="text-red-400 hover:text-red-300"
                                                >
                                                    Delete
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}

                <div className="mt-8">
                    <Link
                        href="/portfolio"
                        className="text-gray-400 hover:text-white"
                    >
                        ← Back to Public Portfolio
                    </Link>
                </div>

            </div>
        </div>
    );
}
