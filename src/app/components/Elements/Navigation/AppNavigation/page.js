"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import classes from "./Navbar.module.css";
import { signout } from "@/app/Firebase";
import { getUserId } from "../../../../Login/userState";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { initFirebase } from "@/app/Firebase";

function Navbar() {
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        initFirebase(); // Initialize Firebase
        const db = getFirestore(); // Get Firestore instance
        const userId = getUserId(); // Get user ID from userState

        if (userId) {
          const userDocRef = doc(db, "users", userId);
          const userDocSnapshot = await getDoc(userDocRef);

          if (userDocSnapshot.exists()) {
            const userData = userDocSnapshot.data();
            setIsAdmin(userData.admin || false); // Set isAdmin based on the "admin" field
          } else {
            console.log("No such document!");
          }
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, []);

  const navigationData = [
    { id: 1, label: "Home", link: "/components/Pages/Home" },
    { id: 2, label: "Report", link: "/components/Pages/Report" },
    { id: 3, label: "CSV Upload", link: "/components/Pages/Upload" },
    isAdmin && { id: 4, label: "Admin", link: "/components/Pages/Admin" }, // Only show "Admin" link if isAdmin is true
  ].filter(Boolean); // Filter out falsy values (like undefined) from the array

  return (
    <header className={classes.navbar}>
      <img src="/logo.png" alt="Logo" className={classes.logo} />
      <nav>
        <ul>
          {navigationData.map((item) => (
            <li key={item.id}>
              <Link href={item.link}>{item.label}</Link>
            </li>
          ))}
          <li>
            <Link onClick={signout} href="/Login">
              LOGOUT
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
