import { useState, useEffect } from "react";
import "./styles/customers.css"

export default function Customers() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("customers.json")
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
      <main className="customers">
        <section className="centered-content">
          <h1>Customers</h1>
        </section>

        <section className="customer-table">
          <section className="row header-row">
            <p>Name</p>
            <p>Address</p>
            <p>Email</p>
            <p>Revenue</p>
            <p></p>
          </section>
          {items.map((item) => (
            <section key={getName(item.name)} className="row">
              <p>{getName(item.name)}</p>
              <p>{getAddress(item.location)}</p>
              <p>{item.email}</p>
              <p></p>
              <p><img src={item.picture.thumbnail} /></p>
            </section>
          ))}
        </section>
      </main>
    );
  }
}

/**
 * @param {{title: string, first: string, last: string}} name
 * @returns {string}
 */
const getName = (name) => {
  return name.title + " " + name.first + " " + name.last;
};

/**
 * @param {{
 *   street: {
 *     number: number, 
 *     name: string
 *   }, 
 *   city: string, 
 *   state: string, 
 *   country: string, 
 *   postcode: number | string
 * }} addr
 */
const getAddress = (addr) => {
  let parts = [
    addr.street.number + " " + addr.street.name,
    addr.city,
    addr.state + " " + addr.postcode,
    addr.country
  ]
  return parts.join(", ")
};
