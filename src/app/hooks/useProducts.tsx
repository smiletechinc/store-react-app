
import { useData } from "../context/DataContext";

export const useProducts = () => {
  const { setProductsData } = useData();

  async function fetchProducts() {
    try {
      const response = await fetch('https://dummyjson.com/products'); //Use .env for baseURL
      const data = await response.json();
      console.log("fetch data: ", data)
      setProductsData(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  return { fetchProducts }; // Return an object containing login and signup functions
};

export default useProducts;
