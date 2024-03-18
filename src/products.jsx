import { useEffect, useState } from "react";
import "./styles/products.css";

import Detail from "./product";

export default function Products() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [people, setPeople] = useState([]);
  const [items, setItems] = useState([]);

  const [modal, setModal] = useState(false);
  const [modalId, setModalId] = useState(0);

  /**
   * @param {number} id
   */
  const toggleModal = (id) => {
    setModal(!modal);
    setModalId(id);
  };

  /**
   * @param {{id: number, price: number}} item 
   * @returns 
   */
  const getRevenue = (item) => {
    let sum = 0;
    people.forEach((purchases) => {
      const target = purchases.find(
        (purchase) => purchase.productID === item.id
      );
      if (target) sum += target.quantity;
    });
    return sum * item.price;
  };

  useEffect(() => {
    const fetchCustomers = fetch("customers.json");
    const fetchProducts = fetch("products.json");

    Promise.all([fetchCustomers, fetchProducts])
      .then(async (values) => [await values[0].json(), await values[1].json()])
      .then(
        (results) => {
          setIsLoaded(true);
          setPeople(results[0].map((x) => x.purchases));
          setItems(results[1]);
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
              <p>
                {item.price.toLocaleString("en", { minimumFractionDigits: 2 })}
              </p>
              <p>{item.category}</p>
              <p>{item.rating.rate.toFixed(1)}</p>
              <p>{item.inventory}</p>
              <p>
                {getRevenue(item).toLocaleString("en", {
                  minimumFractionDigits: 2,
                })}
              </p>
              <p>
                <button onClick={() => toggleModal(item.id)}>Learn More</button>
              </p>
            </section>
          ))}
        </section>

        <Detail
          product={items.find((item) => item.id === modalId)}
          isOpen={modal}
          handleOpen={() => toggleModal(modalId)}
        ></Detail>
      </main>
    );
  }
}
