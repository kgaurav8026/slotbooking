import styles from './Navbar.module.css';

function Navbar() {
  return (
    <div className={styles.navbar}>
      <a href="/machines">Machines</a>
      <a href="/courses">Courses</a>
      <a href="/bookings">Bookings</a>
    </div>
  );
}

export default Navbar;
