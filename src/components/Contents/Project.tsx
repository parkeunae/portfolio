import React from 'react';

interface ProjectItemProps {
    title: string;
    description: string;
    link: string;
};

const ProjectItem = ({ title, description, link }: ProjectItemProps) => {
    return (
        <div className="project-item">
            <dt className="project-title">
                <a href={ link }>
                    { title }
                    { ' ' }
                    <span aria-hidden="true" className="arrow">&#x2192;</span>
                </a>
            </dt>
            <dd className="project-desc">
                <p>
                    { description }
                </p>
            </dd>
        </div>
    );
}

const Project = () => {
    const projectList = [
        {
            key: '1',
            title: 'Project 제목',
            description: '간단 설명',
            link: '#',
        },
        {
            key: '2',
            title: 'Project 제목',
            description: '간단 설명',
            link: '#',
        }
    ];

    const projectItems = projectList.map(project => (
        <ProjectItem
            key={ project.key }
            title={ project.title }
            description={ project.description }
            link={ project.link }
        />
    ));

    return (
        <dl>
            { projectItems }
        </dl>
    )
}

export default Project;