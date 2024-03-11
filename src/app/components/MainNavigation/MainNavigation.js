"use client";
import React from "react";
import Link from "next/link";
import classes from "./MainNavigation.module.css";
import { signout } from "@/app/Firebase";

function MainNavigation() {
  const navigationData = [
    { id: 1, label: "Home", link: "/components/Home" },
    { id: 2, label: "Report", link: "/components/Report" },
    { id: 3, label: "CSV Upload", link: "/components/Upload" },
    { id: 4, label: "Administration", link: "/components/Admin" },
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

export default MainNavigation;
