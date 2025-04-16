import { useContext } from 'react';
import ContactContext from '../context/ContactContext';

function Contact() {
  const { name, phone, email, website } = useContext(ContactContext);

  return (
    <>
      <div className="contact">
        <div className="name">
          <h1>{name}</h1>
        </div>
        <div className="contact-details">
          <div className="phone">{phone}</div>
          <div className="divider">•</div>
          <div className="email">{email}</div>
          <div className="divider">•</div>
          <a className="website">{website}</a>
        </div>
      </div>
    </>
  );
}

export default Contact;
