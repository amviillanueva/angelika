import React from 'react';
import { Theme, Div, H1, Sub, Img } from './style';
import ContactInfo from './ContactInfo'
import contacts from './info/contacts';
import image from './images/profile.png';

function Home() {
    return (<Theme>
        <Div home className="container d-flex align-items-center justify-content-center flex-md-row flex-column">
            <div className="p-md-4 p-3">
                <Img src={image} alt="profile" />
                <div className="text-center">
                    <button className="btn btn-info btn-sm btn-block mt-2" data-toggle="modal" data-target="#sendMessage">Contact Me</button>
                </div>
            </div>
            <div className="p-md-4 p-3">
                <H1>HI, I'M ANGELIKA</H1>
                <H1 bottom>VILLANUEVA</H1>
                <Sub>Web Developer</Sub>
                {
                    contacts.map(contact =>
                        <ContactInfo key={contact.id} link={contact.link} logo={contact.logo} info={contact.info} />
                    )
                }
            </div>
        </Div>

        <div className="modal fade" id="sendMessage" tabIndex="-1" role="dialog">
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                    <div className="modal-header">
                        <strong>Send me a Message!</strong>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                <form>
                    <div className="modal-body">
                        <div className="form-group">
                            <input type="text" class="form-control" placeholder="Name" />
                        </div>
                        <div className="form-group">
                            <input type="email" class="form-control" placeholder="Email" required/>
                        </div>
                        <div className="form-group">
                            <label>Message</label>
                            <textarea class="form-control" id="message-text" required></textarea>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="submit" className="btn btn-info btn-sm px-3">Send</button>
                    </div>
                </form>
                </div>
            </div>
        </div>
    </Theme>)
}

export default Home;