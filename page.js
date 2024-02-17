'use client';
import  'bootstrap/dist/css/bootstrap.css';
import addData from "./firebase";
export default function Home() {
  return (
  <button onClick={()=>(addData())} />
 
  );
}
