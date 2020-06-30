import React, { useState } from 'react';
import { Theme, Div, H1, Sub, Img } from './style';
import ContactInfo from './ContactInfo'
import contacts from './info/contacts';
import image from './images/profile.png';
import emailjs from 'emailjs-com';

// https://stackoverflow.com/questions/53648652/how-to-use-environment-variables-in-github-page

function Home() {
    const [mail, setMail] = useState({
        sender: "",
        email: "",
        message: ""
    });

    const templateParams = {
        sender: mail.sender,
        email: mail.email,
        message: mail.message
    };

    const [success, setSuccess] = useState("none");
    const [danger, setDanger] = useState("none");

    function sendMail() {
        console.log(templateParams)
        emailjs.send()
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
                setSuccess("block");
                setMail(() => {
                    return {
                        sender: "",
                        email: "",
                        message: ""
                    }
                });
            }, (err) => {
                console.log('FAILED...', err);
                setDanger("block");
            });
        
    }

    function newMail(e) {
        const { name, value } = e.target;

        setMail(preVal => {
            if (name === "sender") {
                return {
                    sender: value,
                    email: preVal.email,
                    message: preVal.message
                };
            } else if (name === "email") {
                return {
                    sender: preVal.sender,
                    email: value,
                    message: preVal.message
                };
            } else if (name === "message") {
                return {
                    sender: preVal.sender,
                    email: preVal.email,
                    message: value
                };
            }
        });
    }

    return (<Theme>
        <Div home className="container d-flex align-items-center justify-content-center flex-md-row flex-column">
            <div className="p-md-4 p-3">
                <Img src={image} alt="profile" />
                <div className="text-center">
                    <button className="btn btn-info btn-sm btn-block mt-2" data-toggle="modal" data-target="#send-message">Contact Me</button>
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

        <div className="modal fade" id="send-message" tabIndex="-1" role="dialog">
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <strong>Send me a Message!</strong>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close" 
                            onClick={() => {setSuccess("none"); setDanger("none")}}>
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <form onSubmit={e => e.preventDefault()}>
                        <div className="modal-body">
                        <div className="alert alert-success" style={{display: success}}> Message Sent! </div>
                        <div className="alert alert-danger" style={{display: danger}}> Message not Sent </div>
                            <div className="form-group">
                                <input type="text" name="sender" onChange={newMail} value={mail.sender} className="form-control" placeholder="Name" />
                            </div>
                            <div className="form-group">
                                <input type="email" name="email" onChange={newMail} value={mail.email} className="form-control" placeholder="Email" required />
                            </div>
                            <div className="form-group">
                                <label>Message</label>
                                <textarea name="message" onChange={newMail} value={mail.message} className="form-control" required></textarea>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="submit" className="btn btn-info btn-sm px-3" onClick={sendMail}>Send</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </Theme>)
}

export default Home;