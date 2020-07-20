import React, { useState } from 'react';
import { Theme, Div, H1, Sub, Img } from './style';
import { Modal } from 'react-bootstrap';
import ContactInfo from './ContactInfo';
import contacts from './info/contacts';
import image from '../assets/images/profile.png';
import emailjs from 'emailjs-com';

function Home() {

  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
    setAlert(() => {
      return {
        class: 'alert alert-info',
        message: 'Sending...',
        display: 'none',
      };
    });
  };
  const handleShow = () => setShow(true);

  const [mail, setMail] = useState({
    sender: '',
    email: '',
    message: '',
  });

  const templateParams = {
    sender: mail.sender,
    user_email: mail.email,
    message: mail.message,
  };

  const [alert, setAlert] = useState({
    class: 'alert alert-info',
    message: 'Sending...',
    display: 'none',
  });

  function sendMail(e) {
    e.preventDefault();

    setAlert((preVal) => {
      return {
        class: preVal.class,
        message: preVal.message,
        display: 'block',
      };
    });

    emailjs
      .send(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        templateParams,
        process.env.REACT_APP_USER_ID
      )
      .then(
        () => {
          console.log('well, hello there');
          setAlert(() => {
            return {
              class: 'alert alert-success',
              message: 'Message Sent!',
              display: 'block',
            };
          });
          setMail(() => {
            return {
              sender: '',
              email: '',
              message: '',
            };
          });
          setTimeout(() => {
            handleClose();
          }, 2000);
        },
        (err) => {
          console.log('FAILED...', err);
          setAlert(() => {
            return {
              class: 'alert alert-danger',
              message: 'Message Not Sent',
              display: 'block',
            };
          });
        }
      );
  }

  function newMail(e) {
    const { name, value } = e.target;

    setMail((preVal) => {
      if (name === 'sender') {
        return {
          sender: value,
          email: preVal.email,
          message: preVal.message,
        };
      } else if (name === 'email') {
        return {
          sender: preVal.sender,
          email: value,
          message: preVal.message,
        };
      } else if (name === 'message') {
        return {
          sender: preVal.sender,
          email: preVal.email,
          message: value,
        };
      }
    });
  }

  return (
    <Theme>
      <Div
        home
        className="container d-flex align-items-center justify-content-center flex-md-row flex-column">
        <div className="p-md-4 p-3">
          <Img src={image} alt="profile" />
          <div className="text-center">
            <button
              className="btn btn-info btn-sm btn-block mt-2"
              onClick={handleShow}>
              Contact Me
            </button>
          </div>
        </div>
        <div className="p-md-4 p-3">
          <H1>HI, I'M ANGELIKA</H1>
          <H1 bottom>VILLANUEVA</H1>
          <Sub className="pb-3">Web Developer</Sub>
          {contacts.map((contact) => (
            <ContactInfo
              key={contact.id}
              link={contact.link}
              logo={contact.logo}
              info={contact.info}
            />
          ))}
        </div>
      </Div>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Send me a Message!</Modal.Title>
        </Modal.Header>
        
        <form onSubmit={sendMail}>
        <Modal.Body>
          <div className={alert.class} style={{ display: alert.display }}>
            {alert.message}
          </div>
        <div className="form-group">
          <input
            type="text"
            name="sender"
            onChange={newMail}
            value={mail.sender}
            className="form-control"
            placeholder="Name"
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            name="email"
            onChange={newMail}
            value={mail.email}
            className="form-control"
            placeholder="Email"
            required
          />
        </div>
        <div className="form-group">
          <label>Message</label>
          <textarea
            name="message"
            onChange={newMail}
            value={mail.message}
            className="form-control"
            required
          />
        </div>
        </Modal.Body>

        <Modal.Footer>
          <button type="submit" className="btn btn-info btn-md px-4">
            Send
          </button>
        </Modal.Footer>
        </form>
      </Modal>
    </Theme>
  );
}

export default Home;
