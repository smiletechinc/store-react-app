"use client"

import { useEffect } from "react";
import { useData } from "./../../context/DataContext"
import styles from "./logout.module.css"

export default function Logout(){
  const { removeData } = useData();

    function handleLogout() {
        removeData();
        window.location.replace("/");
    }

    useEffect(() => {
        setTimeout(() => {
            handleLogout();
        }, 5000)
    }, [])
    return(
        <div className={styles.container}>
            <h1>Logging out...</h1>
        </div>
    )
}