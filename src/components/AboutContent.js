import React from 'react';
import { AboutDiv, Theme, Title, Sub, AC } from './style';

function Education(props) {
    return(<Theme>
        <AboutDiv>
            <Title>{props.title}</Title>
            <Sub>{props.sub}</Sub>
            <AC>{props.description}</AC>
            <AC>{props.research}</AC>
        </AboutDiv>
    </Theme>);
}

export default Education;