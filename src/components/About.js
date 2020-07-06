import React from 'react';
import { Theme, Div, H4 } from './style';
import AboutContent from './AboutContent';
import education from './info/education';

function About() {
    return(<Theme><Div className="d-flex align-content-center align-self-center justify-content-center flex-wrap flex-column">
        <H4 className="mt-4">EDUCATION</H4>
        {
            education.map(edu => 
                <AboutContent title={edu.school} sub={edu.year} description={edu.description} research={edu.research}></AboutContent>
            )
        }
    </Div></Theme>)
}

export default About;