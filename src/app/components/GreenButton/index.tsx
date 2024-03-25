import { useState } from "react";
import styles from "./greenbutton.module.css"
import { useData } from "../../context/DataContext"

export default function GreenButton (props: any) {
    const { title, onButtonClick } = props;

    return(
      <button className={styles.button} onClick={onButtonClick} >{title}</button>
    )
}
