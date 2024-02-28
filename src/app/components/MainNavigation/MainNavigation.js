import React from "react";
import Link from "next/link";
import classes from "./MainNavigation.module.css";

function MainNavigation() {
  return (
    <header className={classes.navbar}>
      <img src="/logo.png" alt="Logo" className={classes.logo} />
      <nav>
        <ul>
          <li>
            <Link href="/components/Home">Home</Link>
          </li>
          <li>
            <Link href="/components/Report">Report</Link>
          </li>
          <li>
            <Link href="/components/Upload">CSV Upload</Link>
          </li>
          <li>
            <Link href="/components/Admin">Administration</Link>
          </li>
          <li
          >
            <Link href="/Login">SignOut</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
