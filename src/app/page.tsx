"use client"

import styles from "./page.module.css";
import Header from "./components/Header/index";
import Card from "./components/Card/index";
import Error from "./components/Greetings/index"
import { useData } from "./context/DataContext"
import Auth from "./components/Auth/index";

export default function Home() {
  const { productsData } = useData();

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
            <Auth />
          </div>
        }
      </div>
    </div>
  );
}
