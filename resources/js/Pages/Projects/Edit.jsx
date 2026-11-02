import React from 'react';
import { Head, useForm } from '@inertiajs/react';
import ProjectForm from '@/Components/ProjectForm';

export default function Edit({ project }) {
    const {
        data,
        setData,
        post,
        processing,
        errors,
    } = useForm({
        title: project.title || '',
        category: project.category || '',
        description: project.description || '',
        date: project.date ? project.date.substring(0, 10) : '',
        image: null,
        project_url: project.project_url || '',
        _method: 'PUT',
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        post(`/projects/${project.id}`, {
            forceFormData: true,
        });
    };

    return (
        <>
            <Head title="Edit Project | Ace Rael" />

            <ProjectForm
                data={data}
                setData={setData}
                errors={errors}
                processing={processing}
                handleSubmit={handleSubmit}
                mode="edit"
                project={project}
            />
        </>
    );
}
