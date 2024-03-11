// MainNavigation.js

import React from "react";
import Link from "next/link";
import classes from "../MainNavigation/MainNavigation.module.css";



function MainNavigation() {
  const navigationData = [
    { id: 1, label: "LOGIN", link: "/Login" },
    { id: 2, label: "REGISTER", link: "/Register" }
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
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
