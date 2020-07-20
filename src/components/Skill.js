import React from 'react';
import { SkillDiv, Theme, H4, D, Logo, lSkill } from './style';
import { IconContext } from 'react-icons';
import { FaJava, FaGitAlt, FaReact, FaPhp, FaNodeJs } from 'react-icons/fa';
import { DiJavascript1 } from 'react-icons/di';

function Skill(props) {
  const descriptions = props.description;
  return (
    <Theme>
      <SkillDiv className="d-flex flex-column justify-content-center text-center align-items-center m-3 p-2">
        <IconContext.Provider value={lSkill}>
          <Logo>
            { props.name === "Java" && <FaJava /> }
            { props.name === "Git" && < FaGitAlt/> }
            { props.name === "JavaScript" && <DiJavascript1 /> }
            { props.name === "React JS" && <FaReact /> }
            { props.name === "PHP" && < FaPhp/> }
            { props.name === "Node.js" && <FaNodeJs /> }
          </Logo>
        </IconContext.Provider>
        <H4>{props.name}</H4>
        {descriptions.map((description) => (
          <D key={Math.random()}>{description}</D>
        ))}
      </SkillDiv>
    </Theme>
  );
}

export default Skill;
