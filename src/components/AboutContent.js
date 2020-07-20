import React from 'react';
import { AboutDiv, Theme, Title, Sub, D } from './style';

function Education(props) {
  const descriptions = props.description;
  return (
    <Theme>
      <AboutDiv>
        <Title>{props.title}</Title>
        <Sub>{props.sub}</Sub>
        {descriptions.map((description) => (
          <D key={Math.random()}>{description}</D>
        ))}
      </AboutDiv>
    </Theme>
  );
}

export default Education;
