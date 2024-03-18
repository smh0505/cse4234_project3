import { useState, useEffect } from "react";
import "./styles/customers.css";

export default function Customers() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [people, setPeople] = useState([]);
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchCustomers = fetch("customers.json");
    const fetchProducts = fetch("products.json");

    Promise.all([fetchCustomers, fetchProducts])
      .then(async (values) => [await values[0].json(), await values[1].json()])
      .then(
        (results) => {
          setIsLoaded(true);
          setPeople(results[0]);
          setItems(results[1]);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

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
   * @returns {string}
   */
  const getAddress = (addr) => {
    let parts = [
      addr.street.number + " " + addr.street.name,
      addr.city,
      addr.state + " " + addr.postcode,
      addr.country,
    ];
    return parts.join(", ");
  };

  /**
   * @param {{productID: number, quantity: number}[]} purchases
   * @returns {number}
   */
  const getRevenue = (purchases) => {
    let sum = 0;
    purchases.forEach(
      (purchase) =>
        (sum +=
          items.find((item) => item.id === purchase.productID).price *
          purchase.quantity)
    );
    return sum;
  };

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
          {people.map((person) => (
            <section key={getName(person.name)} className="row">
              <p>{getName(person.name)}</p>
              <p>{getAddress(person.location)}</p>
              <p>{person.email}</p>
              <p>
                {getRevenue(person.purchases).toLocaleString("en", {
                  minimumFractionDigits: 2,
                })}
              </p>
              <p>
                <img src={person.picture.thumbnail} />
              </p>
            </section>
          ))}
        </section>
      </main>
    );
  }
}
