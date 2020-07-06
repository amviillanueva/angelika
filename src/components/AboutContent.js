import React from 'react';
import { AboutDiv, Theme, Title, Sub, P } from './style';

function Education(props) {
    return(<Theme>
        <AboutDiv>
            <Title>{props.title}</Title>
            <Sub>{props.sub}</Sub>
            <P>{props.description}</P>
            <P>{props.research}</P>
        </AboutDiv>
    </Theme>);
}

export default Education;