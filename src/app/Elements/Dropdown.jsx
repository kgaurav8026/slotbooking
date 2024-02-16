function Dropdown(array, dropdownName, jsx) {
  return (
    <div>
      <select  className="form-select" aria-label="Default select example">
        <option selected>{dropdownName} </option>
        {array?.map((i) => (
          <option key = {i} value={i}>
            {i}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Dropdown;
