function Form(formName,id,type) {
  return (
    <div className="row g-3 align-items-center">
      <div className="col-auto">
        <label htmlFor="inputPassword6" className="col-form-label">
          {formName}
        </label>
      </div>
      <div className="col-auto">
        <input
          type={type}
          id={id}
          className="form-control"
          aria-describedby="passwordHelpInline"
        />
      </div>
    </div>
  );
}
export default Form;