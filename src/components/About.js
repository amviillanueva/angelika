import React from 'react';
import {Theme, Div, H4, Hr} from './style';
import AboutContent from './AboutContent';
import education from './info/education';
import achievements from './info/achievements';
import experiences from './info/experiences';

function About() {
  return (
    <Theme>
      <Div className="d-flex align-content-center align-self-center justify-content-center flex-wrap flex-column mb-5 px-md-5">
        <H4 className="mt-4">EDUCATION</H4>
        {education.map((edu) => (
          <AboutContent
            key={edu.id}
            title={edu.school}
            sub={edu.year}
            description={edu.description}
          />
        ))}
        <Hr className="my-3" />
        <H4 className="mt-4">EDUCATIONAL ACHIEVEMENTS</H4>
        {achievements.map((achievement) => (
          <AboutContent
            key={achievement.id}
            title={achievement.title}
            description={achievement.description}
          />
        ))}
        <Hr className="my-3" />
        <H4 className="mt-4">RELEVANT EXPERIENCES</H4>
        {experiences.map((experience) => (
          <AboutContent
            key={experience.id}
            title={experience.title}
            sub={experience.year}
            description={experience.details}
          />
        ))}
      </Div>
    </Theme>
  );
}

export default About;
