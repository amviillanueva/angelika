import React from 'react';
import { Div } from './style';
import skills from './info/skills';

function Skills() {
    return(<Div className="container">
        <h2>Skills Page</h2>
        {
            skills.map(skill =>
                <p>{skill.name}</p>
            )
        }
    </Div>)
}

export default Skills;