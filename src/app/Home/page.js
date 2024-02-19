import Button from "../components/Button";
import Dropdown from "../components/Dropdown";
import pagestyles from "./dashboard.module.css";
import Calendar from "../components/Calendar";
import Navbar from "../components/Navigation";
function Dashboard() {
  const date = [<input type="date"/>]

  const arr= ["course1","course2"]
  return (
    <div className={pagestyles.drop}>
      {Navbar("Home","Logout","")};
      {Dropdown(arr,"Course",<></>)}
      {Calendar()}
      {Dropdown(arr,"Slot",<></>)}
      {Button("Book Slot"," ")}
    </div>
  );
}
export default Dashboard;