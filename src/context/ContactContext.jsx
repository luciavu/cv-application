import { createContext, useState } from 'react';

const ContactContext = createContext();

export const ContactProvider = ({ children }) => {
  const [name, setName] = useState('Your Name');
  const [phone, setPhone] = useState('(+61) 412 345 678');
  const [email, setEmail] = useState('email@domain.com');
  const [website, setWebsite] = useState('linkedin.com/in/example');

  return (
    <ContactContext.Provider
      value={{ name, setName, phone, setPhone, email, setEmail, website, setWebsite }}
    >
      {children}
    </ContactContext.Provider>
  );
};

export default ContactContext;
