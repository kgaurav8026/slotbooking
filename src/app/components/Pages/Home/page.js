"use client";
import classes from "./dashboard.module.css";
import Layout from "../../Layout/Layout";
import Button from "../../Elements/Button";
import Dropdown from "../../Elements/Dropdown";
import dayjs from 'dayjs';
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";

function Dashboard() {
  const date = [<input type="date" />];

  const courses = [
    "AM Lab 1",
    "AM Lab 2",
    "AM Lab 3",
    "AM Lab 4",
    "AM Lab 5",
    "Control board",
    "Fuzzy Control",
    "Heat Conduction and Convection",
    "Mechatronics system board",
    "ACS LAB",
  ];

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
        {Dropdown(courses, "Select Course")}
        
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <MobileDatePicker sx={{'& .MuiOutlinedInput-input' : {padding : "7px "}}}label="Date"  defaultValue={dayjs("0")} />
        </LocalizationProvider>
        {Dropdown(slots, "Select Slot")}
        {Button("Book Slot", " ")}
      </div>
    </Layout>
  );
}

export default Dashboard;
