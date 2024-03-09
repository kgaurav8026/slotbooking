"use client";
import Admin from "../page";
import classes from "../forms.module.css";
import { addData } from "@/app/Firebase";
import Button from "../../Elements/Button";

function AddCourse() {
  let course = {
    Name: "",
    startDate: "",
    endDate: "",
    slotlength: "",
    slotperWeek: "",
  };
  return (
    <div>
      <Admin />
      <div className={classes.forms}>
        <h2>Add Course</h2>
        <form id="course">
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
          <div
            onClick={async () => {
              course.Name = document.getElementById("course").elements[0].value;
              course.startDate =
                document.getElementById("course").elements[1].value;
              course.endDate =
                document.getElementById("course").elements[2].value;
              course.slotlength =
                document.getElementById("course").elements[3].value;
              course.slotperWeek =
                document.getElementById("course").elements[4].value;
                addData(course,"course");
              
            }}
          >
          {Button("Submit","")}
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddCourse;
