import React from 'react';
import {SkillDiv, Theme, H4, D, Logo} from './style';

function Skill(props) {
  const descriptions = props.description;
  return (
    <Theme>
      <SkillDiv className="d-flex flex-column justify-content-center text-center align-items-center m-3 p-2">
        <Logo className={props.logo} />
        <H4>{props.name}</H4>
        {descriptions.map((description) => (
          <D>{description}</D>
        ))}
      </SkillDiv>
    </Theme>
  );
}

export default Skill;
