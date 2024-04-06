import classes from "./Navbar.module.css";

function Navbar() {
  return (
    <div className={classes.navbar}>
      <a href="/components/Pages/Admin/Machines">Machines</a>
      <a href="/components/Pages/Admin/AddCourse">Courses</a>
      <a href="/components/Pages/Admin/Bookings">Bookings</a>
    </div>
  );
}

export default Navbar;
