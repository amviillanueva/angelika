import React from 'react';
import { Div } from './style';
import skills from './info/skills';
import Skill from './Skill';

function Skills() {
    return(<Div className="container">
        <h2>Skills Page</h2>
        {
            skills.map(skill =>
                <Skill name={skill.name}></Skill>
            )
        }
    </Div>)
}

export default Skills;