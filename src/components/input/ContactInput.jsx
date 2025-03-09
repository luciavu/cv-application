import InputLabel from './InputLabel';
function ContactInput({ name, setName, phone, setPhone, email, setEmail, website, setWebsite }) {
  const handleNameChange = (e) => setName(e.target.value);
  const handlePhoneChange = (e) => setPhone(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handleWebsiteChange = (e) => setWebsite(e.target.value);

  return (
    <>
      <div className="input-fields">
        <InputLabel
          label="name"
          type="text"
          labelvalue={name}
          handleChange={handleNameChange}
        ></InputLabel>
        <InputLabel
          label="phone"
          type="tel"
          labelvalue={phone}
          handleChange={handlePhoneChange}
        ></InputLabel>
        <InputLabel
          label="email"
          type="email"
          labelvalue={email}
          handleChange={handleEmailChange}
        ></InputLabel>
        <InputLabel
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
