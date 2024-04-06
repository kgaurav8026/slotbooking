"use client";
import Admin from "../page";
import classes from "./addcourse.module.css";
import React, { useRef, useState } from "react";

const AddCourse = () => {
  const coursenameRef = useRef(null);
  const startdateRef = useRef(null);
  const enddateRef = useRef(null);
  const slotlengthRef = useRef(null);
  const slotsperweekRef = useRef(null);

  const [slotlengthError, setSlotlengthError] = useState("");
  const [slotsperweekError, setSlotsperweekError] = useState("");

  const handleSlotlengthChange = (e) => {
    const value = e.target.value;
    if (value <= 0) {
      setSlotlengthError("Slot length cannot be zero or negative");
    } else {
      setSlotlengthError("");
    }
  };

  const handleSlotsperweekChange = (e) => {
    const value = e.target.value;
    if (value <= 0) {
      setSlotsperweekError("Slots per week cannot be zero or negative");
    } else {
      setSlotsperweekError("");
    }
  };

  const addCourseHandler = async (e) => {
    e.preventDefault();

    const slotlength = slotlengthRef.current.value;
    const slotsperweek = slotsperweekRef.current.value;

    if (slotlength < 0 || slotsperweek < 0) {
      return;
    }

    const course = {
      coursename: coursenameRef.current.value,
      startdate: startdateRef.current.value,
      enddate: enddateRef.current.value,
      slotlength: slotlength,
      slotsperweek: slotsperweek,
    };

    fetch(
      "https://slotbooking-5baa4-default-rtdb.firebaseio.com/courses.json",
      {
        method: "POST",
        body: JSON.stringify(course),
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then(() => {
        window.alert("Form Submitted Successfully");
        window.location.href = "/components/Pages/Home";
      })
      .catch((error) => {
        console.error("Error submitting form:", error);
      });
  };

  return (
    <>
      <Admin />
      <div className="container">
        <form id="course" className={classes.form} onSubmit={addCourseHandler}>
          <h3>ADD COURSE</h3>
          <div>
            <label htmlFor="coursename">Course Name:</label>
            <input type="text" id="coursename" ref={coursenameRef} required />
          </div>
          <div>
            <label htmlFor="startdate">Start Date:</label>
            <input type="date" id="startdate" ref={startdateRef} required />
          </div>
          <div>
            <label htmlFor="enddate">End Date:</label>
            <input type="date" id="enddate" ref={enddateRef} required />
          </div>
          <div>
            <label htmlFor="slotlength">Slot Length:</label>
            <input
              type="number"
              id="slotlength"
              ref={slotlengthRef}
              onChange={handleSlotlengthChange}
              required
            />
            {slotlengthError && (
              <span style={{ color: "red" }}>{slotlengthError}</span>
            )}
          </div>
          <div>
            <label htmlFor="slotsperweek">Slots per Week:</label>
            <input
              type="number"
              id="slotsperweek"
              ref={slotsperweekRef}
              onChange={handleSlotsperweekChange}
              required
            />
            {slotsperweekError && (
              <span style={{ color: "red" }}>{slotsperweekError}</span>
            )}
          </div>
          <button className="btn btn-primary">SUBMIT</button>
        </form>
      </div>
    </>
  );
};

export default AddCourse;
