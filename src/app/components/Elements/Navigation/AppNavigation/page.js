"use client";
import React from "react";
import Link from "next/link";
import classes from "./Navbar.module.css";
import { signout } from "@/app/Firebase";

function Navbar() {
  const navigationData = [
    { id: 1, label: "Home", link: "/components/Pages/Home" },
    { id: 2, label: "Report", link: "/components/Pages/Report" },
    { id: 3, label: "CSV Upload", link: "/components/Pages/Upload" },
    { id: 4, label: "Admin", link: "/components/Pages/Admin" },
  ];

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
