import { useState, useEffect } from "react";
import styles from "./login.module.css";
import InputField from "../InputField/index";
import GreenButton from "../GreenButton/index";
import ErrorText from "../ErrorText/index";
import useUsers from "@/app/hooks/useUsers";

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [ error, setError ] = useState('Username or password cannot be empty')
  // const { login } = useUsers();

  const handleClicked = () => {
    if (!error){
        // login(username, password);
    }
  }

  useEffect(() => {
      {(!username || !password) ? setError("Username or password cannot be empty") : setError('')}
  }, [username, password])

  return(
    <div className={styles.form}>
    <form  className={styles.container}>
      <h1>Login</h1>
      <InputField placeholder="Username" onChange={setUsername}/>
      <InputField placeholder="Password" onChange={setPassword}/>
      <ErrorText error={error} />
      <GreenButton onButtonClick={handleClicked} title="Login"/>
    </form>
    </div>
  )
}