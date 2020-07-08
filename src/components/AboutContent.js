import React from 'react';
import { AboutDiv, Theme, Title, Sub, D } from './style';

function Education(props) {
    return(<Theme>
        <AboutDiv>
            <Title>{props.title}</Title>
            <Sub>{props.sub}</Sub>
            <D>{props.description}</D>
            <D>{props.research}</D>
        </AboutDiv>
    </Theme>);
}

export default Education;