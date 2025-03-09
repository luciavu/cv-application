function Contact({ name, phone, email, website }) {
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
