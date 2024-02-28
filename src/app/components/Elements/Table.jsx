import Checkbox from "./Checkbox";
function Table(arrRow, arrCol) {
  return (
    <table className="table">
      <thead>
        <tr>
          <th> {Checkbox()}</th>
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
            <td>{Checkbox()}</td>
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
