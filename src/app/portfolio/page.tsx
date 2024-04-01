import ProjectList from '@/components/shared/project/project-list';
import ProjectsFooter from '@/app/portfolio/components/ProjectsFooter';
import ProjectsHeader from '@/app/portfolio/components/ProjectsHeader';
import React from 'react'
import getProjects, { ProjectType } from '@/lib/getProjects';

export async function generateMetadata() {
    return {
        title: 'Портфолио',
    }
}

const Portfolio = async () => {
    const projects = await getProjects();

    return (
        <>
            <ProjectsHeader />
            {projects && <ProjectList projects={projects} />}
            <ProjectsFooter />
        </>
    )
}

export default Portfolio