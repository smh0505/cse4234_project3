import { useEffect, useState } from "react";
import "./styles/products.css";

import Detail from "./product";

export default function Products() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  if (error) {
    return <section>Error: {error.message}</section>;
  } else if (!isLoaded) {
    return <section>Loading...</section>;
  } else {
    return (
      <main className="products">
        <section className="centered-content">
          <h1>Products</h1>
        </section>

        <section className="product-table">
          <section className="row header-row">
            <p>Title</p>
            <p>Price</p>
            <p>Category</p>
            <p>Rating</p>
            <p>Inventory</p>
            <p>Revenue</p>
            <p></p>
          </section>
          {items.map((item) => (
            <section key={item.id} className="row">
              <p>{item.title}</p>
              <p>{item.price}</p>
              <p>{item.category}</p>
              <p>{item.rating.rate}</p>
              <p>{item.inventory}</p>
              <p></p>
              <p>
                <button onClick={Detail(item)}>Learn More</button>
              </p>
            </section>
          ))}
        </section>
      </main>
    );
  }
}
