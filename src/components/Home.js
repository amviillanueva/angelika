import React from 'react';
import { Theme, Div, H1, Sub, Img } from './style';
import ContactInfo from './ContactInfo'
import contacts from './info/contacts';
import image from './info/profile.png';

function Home() {
    return (<Theme>
        <Div className="container d-flex align-items-center justify-content-center flex-md-row flex-column-reverse">
            <div className="p-5">
                <H1>Hi, I'm Angelika</H1>
                <Sub>an aspiring Web Developer</Sub>
                {
                    contacts.map(contact =>
                        <ContactInfo link={contact.link} logo={contact.logo} info={contact.info} />
                    )
                }
            </div>
            <div className="p-5">
                <Img src={image} alt="profile" />
            </div>
        </Div>
    </Theme>)
}

export default Home;