function InputLabel({ label, type, labelvalue, handleChange }) {
  return (
    <>
      <div className="input-label">
        <label htmlFor={label}>{label}</label>
        <input id={label} type={type} value={labelvalue} onChange={handleChange} />
      </div>
    </>
  );
}

export default InputLabel;
