import React from 'react';
import { Theme, Div, H1, Sub, Img } from './style';
import ContactInfo from './ContactInfo'
import contacts from './info/contacts';
import image from './info/profile.png';

function Home() {
    return (<Theme>
        <Div className="container d-flex align-items-center justify-content-center flex-md-row flex-column">
            <div className="p-4">
                <Img src={image} alt="profile" />
            </div>
            <div className="p-4">
                <H1>HI, I'M ANGELIKA</H1>
                <Sub>an aspiring Web Developer</Sub>
                {
                    contacts.map(contact =>
                        <ContactInfo link={contact.link} logo={contact.logo} info={contact.info} />
                    )
                }
            </div>
            
        </Div>
    </Theme>)
}

export default Home;