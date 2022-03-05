import React from 'react';
import styled  from 'styled-components';
import CardSection from '../../../utils/cardSection';
import { Projects } from '../../../data';

const ProjectArea = styled.section`
background: slategray;
padding: 1rem;
color:white;
h1{
    font-size:4rem;
}
`
const ProjectSection = () => {
    return (
        <ProjectArea id='projects'>
            <h1>Some of my projects are given below :-</h1>

            <CardSection 
                heading='HTML and CSS Projects'
                data = {Projects.frontend.htmlproject}
            />
            <CardSection 
                heading='Javascrip Projects'
                data = {Projects.frontend.javascriptProject}
            />
            <CardSection 
                heading='React Projects'
                data = {Projects.frontend.reactProject}
            />
            <CardSection 
                heading='Full Stack Projects'
                data = {Projects.fullStackProject}
            />

        </ProjectArea>
    )
}
export default ProjectSection