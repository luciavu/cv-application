//import { useState } from 'react';

function InputLabel({ label, type }) {
  //const [active, setActive] = useState(true);

  return (
    <>
      <div className="input-label">
        <label htmlFor={label}>{label}</label>
        <input id={label} type={type} />
      </div>
    </>
  );
}

export default InputLabel;
