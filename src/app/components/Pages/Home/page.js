"use client";
import { useEffect, useState } from "react";
import classes from "./dashboard.module.css";
import Layout from "../../Layout/Layout";
import Dropdown from "../../Elements/Dropdown";
import Table from "../../Elements/Table";
import { initFirebase } from "../../../Firebase";
import { getFirestore, collection, getDocs } from "firebase/firestore";

const generateSlots = (startDate, endDate, slotDuration) => {
  const slots = [];
  const startTime = new Date(startDate);
  const endTime = new Date(endDate);
  const slotLengthInMilliseconds = slotDuration * 60 * 60 * 1000;

  startTime.setHours(10, 0, 0, 0); // Start time is 10:00 AM
  endTime.setHours(18, 0, 0, 0); // End time is 6:00 PM

  let currentTime = new Date(startTime);

  while (
    currentTime.getTime() + slotLengthInMilliseconds <=
    endTime.getTime()
  ) {
    const startTimeFormatted = currentTime.toLocaleString("en-US", {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    });
    const endTimeFormatted = new Date(
      currentTime.getTime() + slotLengthInMilliseconds
    ).toLocaleString("en-US", {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    });

    slots.push(`${startTimeFormatted} - ${endTimeFormatted}`);
    currentTime = new Date(currentTime.getTime() + slotLengthInMilliseconds);
  }

  return slots;
};

function Dashboard() {
  const [courseNames, setCourseNames] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState("");
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedSlot, setSelectedSlot] = useState("");
  const [slots, setSlots] = useState([]);
  const [dateError, setDateError] = useState("");
  const [bookedSlots, setBookedSlots] = useState([]);

  const onSelectCourse = (event) => {
    setSelectedCourse(event.target.value);
  };

  const onSelectDate = (event) => {
    const selectedDate = new Date(event.target.value);
    setSelectedDate(selectedDate);

    const courseData = courseNames.find(
      (course) => course.coursename === selectedCourse
    );

    if (courseData) {
      const { startdate, enddate, slotlength } = courseData;
      const start = new Date(startdate);
      const end = new Date(enddate);
      const slotDuration = Number(slotlength);

      if (selectedDate >= start && selectedDate <= end) {
        setDateError("");
        const slots = generateSlots(
          selectedDate.toISOString(),
          selectedDate.toISOString(),
          slotDuration
        );
        const availableSlots = slots.filter(
          (slot) =>
            !bookedSlots.some(
              (bookedSlot) =>
                bookedSlot.name === selectedCourse &&
                bookedSlot.date === selectedDate.toDateString() &&
                bookedSlot.slot === slot
            )
        );
        setSlots(availableSlots);
      } else {
        setDateError("Invalid Date");
        setSlots([]);
      }
    }
  };

  const onSelectSlot = (event) => {
    setSelectedSlot(event.target.value);
  };

  const handleBookSlot = () => {
    const newSlot = {
      name: selectedCourse,
      date: selectedDate.toDateString(),
      slot: selectedSlot,
    };

    // Check if the slot is already booked
    const isSlotBooked = bookedSlots.some(
      (bookedSlot) =>
        bookedSlot.name === selectedCourse &&
        bookedSlot.date === selectedDate.toDateString() &&
        bookedSlot.slot === selectedSlot
    );

    if (!isSlotBooked) {
      setBookedSlots((prevBookedSlots) => [...prevBookedSlots, newSlot]);
    } else {
      alert("This slot is already booked. Please choose another slot.");
    }
  };

  useEffect(() => {
    const fetchCourseData = async () => {
      initFirebase();
      const db = getFirestore();

      try {
        const coursesCollection = collection(db, "courses");
        const querySnapshot = await getDocs(coursesCollection);

        const courseNames = [];
        querySnapshot.forEach((doc) => {
          const docData = doc.data();
          courseNames.push(docData);
        });

        setCourseNames(courseNames);
      } catch (error) {
        console.error("Error fetching course data:", error);
      }
    };

    fetchCourseData();
  }, []);

  return (
    <Layout>
      <h1 className={classes.heading}>Remote Lab Booking</h1>
      <div className="container">
        <div className={classes.drop}>
          {Dropdown(
            courseNames.map((course) => course.coursename),
            "Select Course",
            onSelectCourse
          )}
          <div>
            <input
              type="date"
              className="form-control"
              onChange={onSelectDate}
            />
            {dateError && <span style={{ color: "red" }}>{dateError}</span>}
          </div>

          {Dropdown(slots, "Select Slot", onSelectSlot)}
          <button
            className="btn btn-primary"
            onClick={handleBookSlot}
            disabled={!selectedSlot}
          >
            Book Slot
          </button>
        </div>
        <br />
        <br />
        <div>
          <Table data={bookedSlots}></Table>
        </div>
      </div>
    </Layout>
  );
}

export default Dashboard;
