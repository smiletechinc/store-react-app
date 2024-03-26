import { useState } from "react"
import Login from "../Login/index";
import Signup from "../Signup/index"
import styles from "./auth.module.css"

export default function Auth() {
    const [currentMode, setCurrentMode] = useState(0);

    function handleSwitch() {
        setCurrentMode((currentMode + 1) %2);
    }

    return(
        <div>
            { currentMode === 0 && 
            <div>
                 <Login />
                 <h4 className={styles.heading}>Don't Have an account?  <button className={styles.simpleButton} onClick={handleSwitch}>Signup</button></h4>
            </div>
            }

            { currentMode === 1 && 
            <div>
                 <Signup />
                 <h4 className={styles.heading}>Already hanve an account <button className={styles.simpleButton} onClick={handleSwitch}>Login</button></h4>
            </div>
            }
            {currentMode === 2 && <Signup />}
        </div>
    )
}