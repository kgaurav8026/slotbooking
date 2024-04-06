import React from "react";

const Table = ({ data }) => {
  return (
    <table className="table table-bordered">
      <thead>
        <tr>
          <th>Course Name</th>
          <th>Date</th>
          <th>Slot</th>
          <th>Actions</th> {/* Add a new column for checkboxes */}
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td>{item.name}</td>
            <td>{item.date}</td>
            <td>{item.slot}</td>
            <td>
              <input type="checkbox" /> {/* Add a checkbox */}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
