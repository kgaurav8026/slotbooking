"use client";
import Admin from "../page";
import React, { useRef, useState } from "react";
import classes from "./addcourse.module.css";
import { addData } from "@/app/Firebase";
import Button from "../../../Elements/Button";
import Form from "../../../Elements/Form";


function AddCourse() {
  const coursenameRef = useRef(null);
  const startdateRef = useRef(null);
  const enddateRef = useRef(null);
  const slotlengthRef = useRef(null);
  const slotsperweekRef = useRef(null);
  

  const [coursename, setCoursename] = useState("");
  const [startdate, setStartdate] = useState("");
  const [enddate, setEnddate] = useState("");
  const [slotlength, setSlotlength] = useState("");
  const [slotsperweek, setSlotsperweek] = useState("");


  const handleAddCourse = async () => {
    let course = {
      coursename:coursename ,
      startdate: startdate,
      enddate: enddate,
      slotlength: slotlength,
      slotsperweek: slotsperweek
    };
  
   addData(course,"course")
  };

  return (
    <div>
      <Admin/>
      <div>
        <form id="course" className={classes.form}>
          <h3>ADD COURSE</h3>
          <Form
            formName="Course "
            type="text"
            inputRef={coursenameRef}
            value={coursename}
            setValue={setCoursename}
          />
          <Form
            formName="Start Date"
            type="date"
            inputRef={startdateRef}
            value={startdate}
            setValue={setStartdate}
          />
          <Form
            formName="End Date"
            type="date"
            inputRef={enddateRef}
            value={enddate}
            setValue={setEnddate}
          />
           <Form
            formName="Slot length"
            type="number"
            inputRef={slotlengthRef}
            value={slotlength}
            setValue={setSlotlength}
          />
           <Form
            formName="Slots per Week"
            type="number"
            inputRef={slotsperweekRef}
            value={slotsperweek}
            setValue={setSlotsperweek}
          />
          <div onClick={handleAddCourse} className={classes.buttons}>
            {Button("SUBMIT", "")}
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddCourse;
