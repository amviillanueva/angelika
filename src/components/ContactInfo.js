import React from 'react';
import { P, I, lHome } from './style';
import { IconContext } from 'react-icons';
import { FaGithub, FaEnvelope } from 'react-icons/fa';

function ContactInfo(props) {
  return (
    <div className="pb-1">
      <a
        href={props.link}
        style={{ textDecoration: 'none' }}
        target="_blank"
        rel="noopener noreferrer">
        <IconContext.Provider value={lHome}>
          <I>
            { props.logo === "github" && <FaGithub />}
            { props.logo === "envelope" && <FaEnvelope />}
          </I>
        </IconContext.Provider>
        <P inline>{props.info}</P>
      </a>
    </div>
  );
}

export default ContactInfo;
