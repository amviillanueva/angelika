import React from 'react';
import { Theme, Div, H4 } from './style';
import AboutContent from './AboutContent';
import education from './info/education';
import achievements from './info/achievements';

function About() {
    return(<Theme><Div className="d-flex align-content-center align-self-center justify-content-center flex-wrap flex-column">
        <H4 className="mt-4">EDUCATION</H4>
        {
            education.map(edu => 
                <AboutContent key={edu.id} title={edu.school} sub={edu.year} description={edu.description} research={edu.research} />
            )
        }
        <hr style={{color: "orange", width: "100px"}}/>
        <H4 className="mt-4">EDUCATIONAL ACHIEVEMENTS</H4>
        {
            achievements.map(achievement =>
                <AboutContent key={achievement.id} title={achievement.title} description={achievement.details} />
            )
        }
    </Div></Theme>)
}

export default About;