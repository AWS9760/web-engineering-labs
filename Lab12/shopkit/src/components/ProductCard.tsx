// src/components/ProductCard.jsx
import styles from "./ProductCard.module.css";
import Badge from "./Badge";
import Button from "./Button";

export default function ProductCard() {
  const product = {
    title: "Mechanical Keyboard",
    price: 12500,
    inStock: true,
  };

  return (
    <article className={styles.card}>
      <div className={styles.image}>⌨️</div>
      <Badge />
      <h3 className={styles.title}>{product.title}</h3>
      <p className={styles.price}>Rs {product.price.toLocaleString()}</p>
      <p className={styles.stock}>{product.inStock ? "In stock" : "Out of stock"}</p>
      <Button />
    </article>
  );
}
