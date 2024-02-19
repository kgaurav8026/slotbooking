function Table(arrRow, arrCol) {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>
            {" "}
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
            </div>
          </th>
          {arrCol?.map((i) => (
            <th key={i} scope="col">
              {i}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className="table-group-divider">
        {arrRow?.map((i) => (
          <tr key={i}>
            <th scope="row">
            <td>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
              </div>
            </td>
            </th>
            {i?.map((j) => (
              <td key={j}>{j}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
export default Table;
