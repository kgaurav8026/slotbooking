import Admin from "../page";
import classes from '../forms.module.css'

function Bookings() {
  return (
    <div>
      <Admin />
      <div className={classes.forms}>
        <h1>Select machine to change</h1>
        <input type="text" placeholder="Search" />
        <table>{/* Table headers and rows go here */}</table>
      </div>
    </div>
  );
}

export default Bookings;
