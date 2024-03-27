"use client"
import styles from "./header.module.css"
import { useData } from "./../../context/DataContext";
import { useEffect, useState } from "react";

export default function Header (){
    const { userData } = useData();
    const [showDropdown, setShowDropdown] = useState(false);
    useEffect(() => {
        console.log("userData: ", userData);
    }, [userData])

    return(
        <div className={styles.header}>
            <h2 className={styles.title}>Mac Store</h2>
            <div>
                <div className={styles.dropdown} onClick={() => setShowDropdown(!showDropdown)}>
                    {userData && <h1 className={styles.avatar}>{userData.email.charAt(0)}</h1>}
                    {userData && <h4 className={styles.username}>{userData.email}</h4>}
                    <div className={styles.dropdownContent} style={{display: showDropdown ? 'block' : 'none'}}>
                        <a href="#profile">Profile</a>
                        <a href="#settings">Settings</a>
                        <a href="/pages/logout">Logout</a>
                    </div>
                </div>
            </div>
        </div>
    )
}
