"use client";
import classes from "./dashboard.module.css";
import Layout from "../../Layout/Layout";
import Button from "../../Elements/Button";
import Dropdown from "../../Elements/Dropdown";
import dayjs from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";
import { useState, useEffect } from "react";

function Dashboard() {
  const [courses, setCourses] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState("No Courses");

  useEffect(() => {
    fetch("https://slotbooking-5baa4-default-rtdb.firebaseio.com/courses.json")
      .then((response) => response.json())
      .then((data) => {
        const fetchedCourses = [];
        for (const key in data) {
          fetchedCourses.push(data[key].coursename);
        }
        setCourses(fetchedCourses);

        if (fetchedCourses.length > 0) {
          setSelectedCourse(fetchedCourses[0]);
        }
      })
      .catch((error) => {
        console.error("Error fetching courses:", error);
      });
  }, []);

  const date = [<input type="date" />];

  // Slots
  const slots = [
    "08:00 - 10:00",
    "10:00 - 12:00",
    "12:00 - 14:00",
    "14:00 - 16:00",
    "16:00 - 18:00",
  ];

  return (
    <Layout>
      <h1 className={classes.heading}>Remote Lab Booking</h1>
      <div className={classes.drop}>
        {Dropdown(courses, selectedCourse)}

        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <MobileDatePicker
            sx={{ "& .MuiOutlinedInput-input": { padding: "7px " } }}
            label="Date"
            defaultValue={dayjs("0")}
          />
        </LocalizationProvider>
        {Dropdown(slots, "Select Slot")}
        {Button("Book Slot", " ")}
      </div>
    </Layout>
  );
}

export default Dashboard;
