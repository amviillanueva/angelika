import React from 'react';
import { P, I } from './style';

function ContactInfo(props) {
  return (<div>
    <a href={props.link} target="_blank" rel="noopener noreferrer">
        <I className={props.logo}></I>
        <P inline>{props.info}</P>
    </a>
  </div>);
}

export default ContactInfo;
