import { useState, useEffect } from "react";
import { useData } from "../context/DataContext";

export const useUsers = () => {
const { allUsersData, setAllUsersData, setUserData  } = useData();

function userAvailable() {

}

function login(email: any, password: any) {
    let user = allUsersData.find((o: { email: any; }) => o.email === email);
    if (user.password === password) {
        setUserData(user);
        return true;
    }
}

function signup(email: any, password: any) {
    const newUsers = {...allUsersData, email, password};
    console.log(newUsers);
    setAllUsersData(newUsers);
}

  return [login, signup];
};

export default useUsers;