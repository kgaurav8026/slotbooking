'use client';
import Image from "next/image";
import pagestyles from "./page.module.css";
import  'bootstrap/dist/css/bootstrap.css';
import Login from "./Login/page";
import addData from "./firebase";
export default function Home() {
  return (
  <button onClick={()=>(addData())} />
 
  );
}
