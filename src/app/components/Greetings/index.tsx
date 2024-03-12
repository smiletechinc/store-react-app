import { useState } from "react";
import styles from "./greetings.module.css"
import { useData } from "../../context/DataContext"

export default function Error (props: any) {
    const { message, title, onButtonClick } = props;
    const { setUserData } = useData();
    const [ name, setName ] = useState("")
    const [ error, setError ] = useState(true)

    const handleClicked = () => {
        if (!error){
            setUserData(name);
            onButtonClick();
        }
    }

    return(
        <div className={styles.greetings}>
            <img src="https://img.freepik.com/free-vector/happy-tiny-people-near-huge-welcome-word-flat-illustration_74855-10808.jpg" />
            <h2>{message ? message : "Sorry Data Cannot be loaded"}</h2>
            <h3>Please Enter your name to continue</h3>
            <input placeholder="Please enter your name to continue" style={{borderColor: error && 'red'}} onChange={(target) => {
                setName(target.target.value);
                if (target.target.value) {
                    setError(false)
                } else {
                    setError(true)
                }
                }}/>
            <button onClick={handleClicked} >{title}</button>
        </div>
    )
}
