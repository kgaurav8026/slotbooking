"use client";
import classes from "./dashboard.module.css";
import Layout from "../../Layout/Layout";
import Button from "../../Elements/Button";
import Dropdown from "../../Elements/Dropdown";
import { useState, useEffect, useRef } from "react";

const generateSlots = (slotlength) => {
  const slots = [];
  let startTime = new Date().setHours(10, 0, 0, 0); // Start time is 10:00 AM
  const endTime = new Date().setHours(18, 0, 0, 0); // End time is 6:00 PM
  const slotLengthInMilliseconds = slotlength * 60 * 60 * 1000; // Convert slot length from hours to milliseconds

  while (startTime + slotLengthInMilliseconds <= endTime) {
    const startTimeFormatted = new Date(startTime).toLocaleString("en-US", {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    });
    const endTimeFormatted = new Date(
      startTime + slotLengthInMilliseconds
    ).toLocaleString("en-US", {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    });

    slots.push(`${startTimeFormatted} - ${endTimeFormatted}`);
    startTime += slotLengthInMilliseconds;
  }

  return slots;
};
function Dashboard() {
  const [courseNames, setCourseNames] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState();
  const [slots, setSlots] = useState([]);
  const [dateError, setDateError] = useState();
  const slotlength = useRef(null);
  const slotsperweek = useRef(null);
  const startdate = useRef(null);
  const enddate = useRef(null);

  const onSelectCourse = (event) => {
    setSelectedCourse(event.target.value);
    console.log(event.target.value);
  };

  const onSelectDate = (event) => {
    const start = Date.parse(startdate.current);
    const end = Date.parse(enddate.current);
    const date = Date.parse(event.target.value);

    if (!(date >= start && date <= end)) {
      setDateError("Invalid Date");
    } else {
      setDateError("");
    }
  };

  useEffect(() => {
    const fetchCourseData = () => {
      fetch(
        "https://slotbooking-5baa4-default-rtdb.firebaseio.com/courses.json"
      )
        .then((response) => response.json())
        .then((data) => {
          const courseNames = [];
          for (const key in data) {
            courseNames.push(data[key].coursename);
            // Check if the current key matches the SelectedCourse
            if (data[key].coursename === selectedCourse) {
              slotlength.current = data[key].slotlength;
              slotsperweek.current = data[key].slotsperweek;
              startdate.current = data[key].startdate;
              enddate.current = data[key].enddate;
              const slots = generateSlots(slotlength.current);

              setSlots(slots);
              return;
            }
          }
          setCourseNames(courseNames);
        })
        .catch((error) => {
          console.error("Error fetching course data:", error);
        });
    };

    fetchCourseData();
  }, [selectedCourse]);

  return (
    <Layout>
      <h1 className={classes.heading}>Remote Lab Booking</h1>
      <div className={classes.drop}>
        {Dropdown(courseNames, "Select Course", onSelectCourse)}
        <div>
          <input
            type="date"
            className="form-control"
            defaultValue=""
            onChange={onSelectDate}
          />
          {dateError && <span style={{ color: "red" }}>{dateError}</span>}
        </div>

        {Dropdown(slots, "Select Slot", onSelectDate)}
        {Button("Book Slot", " ")}
      </div>
    </Layout>
  );
}

export default Dashboard;
