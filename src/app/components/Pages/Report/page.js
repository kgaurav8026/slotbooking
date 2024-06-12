"use client";
import React, { useEffect, useState } from "react";
import { initFirebase } from "../../../Firebase";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import jsPDF from "jspdf";
import "jspdf-autotable";
import Layout from "../../Layout/Layout";

const Report = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchCourseData = async () => {
      initFirebase();
      const db = getFirestore();
      try {
        const coursesCollection = collection(db, "courses");
        const querySnapshot = await getDocs(coursesCollection);
        const courseData = [];
        querySnapshot.forEach((doc) => {
          const courseInfo = {
            id: doc.id, // Store the document ID
            ...doc.data(), // Spread the document data
          };
          courseData.push(courseInfo);
        });
        setCourses(courseData);
      } catch (error) {
        console.error("Error fetching course data:", error);
      }
    };
    fetchCourseData();
  }, []);

  const generatePDF = () => {
    const doc = new jsPDF();
    const tableRows = [];
    const tableHeaders = [
      "ID",
      "Course Name",
      "Start Date",
      "End Date",
      "Slot Length",
      "Slots Per Week",
    ];

    courses.forEach((course) => {
      const courseData = [
        course.id,
        course.coursename,
        course.startdate, // No need to convert startdate to Date object
        course.enddate, // No need to convert enddate to Date object
        course.slotlength, // No need to convert slotlength to a number
        course.slotsperweek, // No need to convert slotsperweek to a number
      ];
      tableRows.push(courseData);
    });

    doc.autoTable({
      head: [tableHeaders],
      body: tableRows,
      startY: 20,
    });

    doc.save("courses_report.pdf");
  };

  return (
    <Layout>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "80vh",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            fontFamily: "Arial, sans-serif",
            fontStyle: "italic",
          }}
        >
          All Courses Report
        </h2>
        <button
          onClick={generatePDF}
          style={{
            backgroundColor: "blue",
            color: "white",
            padding: "10px",
            borderRadius: "5px",
            fontSize: "16px",
            fontFamily: "Arial, sans-serif",
            border: "none",
            cursor: "pointer",
            transition: "all 0.3s ease",
            marginTop: "20px",
          }}
          onMouseOver={(e) => (e.target.style.backgroundColor = "darkblue")}
          onMouseOut={(e) => (e.target.style.backgroundColor = "blue")}
        >
          Generate PDF Report
        </button>
      </div>
    </Layout>
  );
};

export default Report;
