import React from 'react'
import styled from 'styled-components'
import ProjectCard from './components/ProjectCard'
import projectsData from '../../assets/projects.json';

const StyledProjectsPage = styled.div`
    width: 100%;
    max-width: 1280px;
    display: flex;
    flex-direction: column;
    align-items: center;
    align-self: center;
    gap: 1.5em;
    padding: 25vh 0 15vh 0;
    color: var( --theme-light-text-color );
    
    .projects-description{
        text-align: center;
    }

    .project-cards-container{
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: stretch;
        flex-wrap: wrap;
        gap: 2em;
    }
`

export default function ProjectsPage() {

    return (
        <StyledProjectsPage>
            <h1 className='my-projects-text'>My Projects</h1>
            <span className='projects-description'>Selected projects that will reflect my knowladge</span>

            <div className='project-cards-container'>
               { projectsData.map( project => {
                    return <ProjectCard project={ project }/>
               })}
            </div>
        </StyledProjectsPage> 

    )
}
