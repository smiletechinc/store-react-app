import { useData } from "../context/DataContext";
import useProducts from "./useProducts";

export const useUsers = () => {
  const { allUsersData, setAllUsersData, setUserData } = useData();
  const { fetchProducts } = useProducts();

  function login(email, password) {
    const user = allUsersData.find((user) => user.email === email);
    if (user && user.password === password) {
        console.log("Login success! ", user)
      setUserData(user);
      fetchProducts();
      return true; // Login successful
    } else {
        console.log("Login error!")
      return false; // Login failed
    }
  }

  function signup(email, password) {
    const user = allUsersData.find((user) => user.email === email);
    if (user) {
        return false;
    } else{
        console.log("Signing up the user!");
        const newUser = { email, password }; // Create a new user object
        setAllUsersData([...allUsersData, newUser]); // Add the new user to the array
        return true;
    }

  }

  return { login, signup }; // Return an object containing login and signup functions
};

export default useUsers;
