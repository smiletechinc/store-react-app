"use client"

import styles from "./page.module.css";
import Header from "./components/Header/index";
import Card from "./components/Card/index";
import Error from "./components/Greetings/index"
import Login from "./components/Login";
import { useData } from "./context/DataContext"

export default function Home() {
  const { productsData, setProductsData } = useData();

  const fetchData = async () => {
    try {
      const response = await fetch('https://dummyjson.com/products');
      const data = await response.json();
      console.log("fetch data: ", data)
      setProductsData(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div className={styles.main}>
      {productsData && productsData.products.length > 0 && <Header />}

      <div className={styles.products}>
        {
          productsData && productsData.products.length > 0 ? productsData.products.map((product: any, index: any) => {
            return(
              <Card
                key={index}
                title={product.title}
                price={product.price}
                details={product.description}
                imageURL={product.thumbnail}
              />
            )
          })
          :
          <div className={styles.greetings}>
            <Login />

          </div>
        }
      </div>
    </div>
  );
}
