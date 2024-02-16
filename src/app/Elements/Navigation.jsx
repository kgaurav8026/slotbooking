function Navbar(Link1,Link2,Link3) {
  return (
    <ul style={{ top: "0", position: "fixed", left: " 0" }} className="nav">
      <li className="nav-item">
        <a className="nav-link active" aria-current="page" href="#">
          <img height={100} src="logo.png" alt="bits logo" />
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">
          {Link1}
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">
          {Link2}
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">
          {Link3}
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link disabled" aria-disabled="true">
          Disabled
        </a>
      </li>
    </ul>
  );
}
export default Navbar;
