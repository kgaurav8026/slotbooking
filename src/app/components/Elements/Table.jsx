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
<<<<<<< HEAD
              <td>{Checkbox()}</td>
=======
            <td>{Checkbox()}</td>
>>>>>>> 9f478f03ef21609a427f42108adc18f7e88b07e4
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
