import styles from './Navbar.module.css';

function Navbar() {
  return (
    <div className={styles.navbar}>
      <a href="/components/Admin/Machines">Machines</a>
      <a href="/components/Admin/AddCourse">Courses</a>
      <a href="/components/Admin/Bookings">Bookings</a>
    </div>
  );
}

export default Navbar;
