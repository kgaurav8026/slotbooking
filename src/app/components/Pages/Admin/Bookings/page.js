import Admin from "../page";
import classes from "../forms.module.css";
import Search from "../../../Elements/Search";
import Dropdown from "../../../Elements/Dropdown";
import Button from "../../../Elements/Button";
import Table from "../../../Elements/Table";
function Bookings() {
  const Actions = [""];
  const arrRow = [["username", "coursename", "machinename"]];
  const arrCol = ["USER", "Course", "Machine"];
  return (
    <div>
      <Admin />
      <div className={classes.forms}>
        <h1>Select booking to change</h1>
        {/* <input type="text" placeholder="Search" /> */}
        <br></br>
        {Search("", "Search")}

        <div style={{ display: "flex", justifyContent: "space-between" }}>
          {Dropdown(Actions, "Action")}
          {Button("Go", "")}
        </div>
        <br></br>
        <Table data={[]} />
        {/* <table>Table headers and rows go here</table> */}
      </div>
    </div>
  );
}

export default Bookings;
