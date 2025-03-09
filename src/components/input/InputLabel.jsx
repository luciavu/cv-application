function InputLabel({ id, label, type, labelvalue, handleChange }) {
  return (
    <>
      <div className="input-label">
        <label htmlFor={id}>{label}</label>
        <input id={id} type={type} value={labelvalue} onChange={handleChange} autoComplete="off" />
      </div>
    </>
  );
}

export default InputLabel;
