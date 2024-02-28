"use client";

import { initFirebase } from "@/app/Firebase";
import { useEffect } from "react";


function BootstrapClient() {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
    initFirebase();
  }, []);
  return null;
}
export default BootstrapClient; 