import InputLabel from './InputLabel';
import { useContext } from 'react';
import ContactContext from '../../context/ContactContext';

function ContactInput() {
  const { name, setName, phone, setPhone, email, setEmail, website, setWebsite } =
    useContext(ContactContext);
  const handleNameChange = (e) => setName(e.target.value);
  const handlePhoneChange = (e) => setPhone(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handleWebsiteChange = (e) => setWebsite(e.target.value);

  return (
    <>
      <div className="input-fields">
        <InputLabel
          id="name"
          label="name"
          type="text"
          labelvalue={name}
          handleChange={handleNameChange}
        ></InputLabel>
        <InputLabel
          id="phone"
          label="phone"
          type="tel"
          labelvalue={phone}
          handleChange={handlePhoneChange}
        ></InputLabel>
        <InputLabel
          id="email"
          label="email"
          type="email"
          labelvalue={email}
          handleChange={handleEmailChange}
        ></InputLabel>
        <InputLabel
          id="website"
          label="website"
          type="text"
          labelvalue={website}
          handleChange={handleWebsiteChange}
        ></InputLabel>
      </div>
    </>
  );
}

export default ContactInput;
