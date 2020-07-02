import React from 'react';
import { SkillDiv, Theme, H4, P, Logo } from './style';

function Skill(props) {
    return(<Theme>
        <SkillDiv className="d-flex flex-column justify-content-center text-center align-items-center m-3 p-2">
            <Logo className={props.logo}></Logo>
            <H4>{props.name}</H4>
            <P>{props.description}</P>
        </SkillDiv>
    </Theme>);
}

export default Skill;