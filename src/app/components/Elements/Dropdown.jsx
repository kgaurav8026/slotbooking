function Dropdown(array, placeholder, onSelect) {
  return (
    <div>
      <select
        className="form-select"
        aria-label="Default select example"
        onChange={onSelect}
        defaultValue=""
      >
        <option disabled value="">
          {placeholder}
        </option>
        {array?.map((i) => (
          <option key={i} value={i}>
            {i}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Dropdown;
