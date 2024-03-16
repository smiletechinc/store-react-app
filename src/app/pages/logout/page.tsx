"use client"

import { useEffect } from "react";
import { useData } from "./../../context/DataContext"


export default function Logout(){
  const { removeData } = useData();

    function handleLogout() {
        removeData();
        window.location.replace("/");
    }

    return(
        <div>
            <button onClick={handleLogout}>Logout</button>
        </div>
    )
}