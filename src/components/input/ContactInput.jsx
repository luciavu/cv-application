import InputLabel from './InputLabel';
function ContactInput() {
  return (
    <>
      <div className="input-fields">
        <InputLabel label="name" type="text"></InputLabel>
        <InputLabel label="phone" type="tel"></InputLabel>
        <InputLabel label="email" type="email"></InputLabel>
        <InputLabel label="website" type="text"></InputLabel>
      </div>
    </>
  );
}

export default ContactInput;
