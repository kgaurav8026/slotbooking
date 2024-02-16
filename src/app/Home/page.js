import Button from "../Elements/Button"
import Dropdown from "../Elements/Dropdown" 
import pagestyles from "./dashboard.module.css" 
import Calendar from "../Elements/Calendar"
import Navbar from "../Elements/Navigation"
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