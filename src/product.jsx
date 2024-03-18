import { useState } from "react";

export default function Detail(product) {
  const [open, setOpen] = useState(false)

  const toggleOpen = () => {
    setOpen(!open)
  }

  return (
    <dialog>
      <button onClick={toggleOpen()}>x</button>
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
    </dialog>
  );
}
