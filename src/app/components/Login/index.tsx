import { useState, useEffect } from "react";
import styles from "./login.module.css";
import InputField from "../InputField";
import GreenButton from "../GreenButton";
import ErrorText from "../ErrorText";
export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [ error, setError ] = useState('Username or password cannot be empty')

  const handleClicked = () => {
    if (!error){
        setUserData(name);
        onButtonClick();
    }
  }

  useEffect(() => {
    console.log(username);
    console.log(password);
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