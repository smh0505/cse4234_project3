import "./styles/product.css";

export default function Detail({ product, isOpen, handleOpen }) {
  if (!isOpen) {
    return null;
  }

  return (
    <section className="modal-container">
      <section className="modal">
        <button onClick={handleOpen}>x</button>
        <img src={product.image} />
        <p>{product.title}</p>
        <h1>{product.price}</h1>
        <p>
          <strong>Category</strong>: {product.category}
        </p>
        <p>
          <strong>Rating</strong>: {product.rating.rate}
        </p>
        <p>
          <strong>In Stock</strong>: {product.inventory}
        </p>
      </section>
    </section>
  );
}
