import Admin from "../page";
import classes from '../forms.module.css'

function AddCourse() {
  return (
    <div>
      <Admin />
      <div className={classes.forms}>
        <h2>Add Course</h2>
        <form>
          <label>
            Name
            <input type="text" name="name" />
          </label>
          <br />
          <label>
            Start Date
            <input type="date" name="start-date" />
          </label>
          <br />
          <label>
            End Date
            <input type="date" name="end-date" />
          </label>
          <br />
          <label>
            Slot Length
            <input type="number" name="slot-length" />
          </label>
          <br />
          <label>
            Slots per Week:
            <input type="number" name="slots-per-week" />
          </label>
          <br />
          <input type="submit" value="Submit" />
        </form>
      </div>
    </div>
  );
}

export default AddCourse;
