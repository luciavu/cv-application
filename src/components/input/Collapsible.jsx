import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
import { useState } from 'react';
//import InputLabel from './InputLabel';
import ContactInput from './ContactInput';

function Collapsible({ name, inputFields, isOpen = false }) {
  const [open, toggleOpen] = useState(isOpen);

  const onButtonClick = () => {
    toggleOpen(!open);
  };

  return (
    <>
      <div className="collapsible">
        <button type="button" className="banner" onClick={onButtonClick}>
          <h2>{name}</h2>
          <div className="toggleCollapsible">{open ? <AiOutlineMinus /> : <AiOutlinePlus />}</div>
        </button>
        <div className={`content ${open ? 'active' : ''}`}>{inputFields}</div>
      </div>
    </>
  );
}

export default Collapsible;
