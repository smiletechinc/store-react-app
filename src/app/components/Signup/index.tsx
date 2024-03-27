import { useState, useEffect } from "react";
import styles from "./signup.module.css";
import InputField from "../InputField/index";
import GreenButton from "../GreenButton/index";
import ErrorText from "../ErrorText/index";
import useUsers from "@/app/hooks/useUsers";

export default function Signup() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [ error, setError ] = useState('Username or password cannot be empty')

  const { signup } = useUsers();

  const handleClicked = () => {
    if (!error){
      let success = signup(username, password);
        if(!success) {
          setError("User already exists!")
        } else {
          setError("User signed up successfully!")
        }
    }
  }

  useEffect(() => {
      {(!username || !password) ? setError("Username or password cannot be empty") : setError('')}
  }, [username, password])

  return(
    <div className={styles.form}>
      <div  className={styles.container}>
        <h1>Signup</h1>
        <InputField placeholder="Username" onChange={setUsername}/>
        <InputField placeholder="Password" onChange={setPassword}/>
        <ErrorText error={error} />
        <GreenButton onButtonClick={handleClicked} title="Signup"/>
      </div>
    </div>
  )
}