import React from 'react';
import { Head, useForm } from '@inertiajs/react';
import ProjectForm from '@/Components/ProjectForm';

export default function Create() {
    const {
        data,
        setData,
        post,
        processing,
        errors,
        reset,
    } = useForm({
        title: '',
        category: '',
        description: '',
        date: '',
        image: null,
        project_url: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        post('/projects', {
            forceFormData: true,
            onSuccess: () => reset(),
        });
    };

    return (
        <>
            <Head title="Add Project | Ace Rael" />

            <ProjectForm
                data={data}
                setData={setData}
                errors={errors}
                processing={processing}
                handleSubmit={handleSubmit}
                mode="create"
            />
        </>
    );
}
