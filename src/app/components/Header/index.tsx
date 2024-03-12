import styles from "./header.module.css"
import { useData } from "./../../context/DataContext";
import { useEffect } from "react";

export default function Header (){
    const { userData } = useData();

    useEffect(() => {
        console.log("userData: ", userData);
    }, [userData])

    return(
        <div className={styles.header}>
            <h2 className={styles.title}>Mac Store</h2>
            {userData && <h1 className={styles.avatar}>{userData.charAt(0)}</h1>}
            {userData && <h4 className={styles.username}>{userData}</h4>}
        </div>
    )
}
