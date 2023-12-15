import styles from "./CardProduct.module.css";

const CardProduct = () => {
  return (
    <article className={styles.cardContainer}>
      <figure className={styles.imageProduct}>
        <img src="src/assets/images/image50.png" alt="Image Product" />
      </figure>
      <div className={styles.title}>
      <p>Samsung</p>
      <p>Smart Tv 75&quot; UHD</p>
      </div>
      <p className={styles.price}>$1.100.999</p>
      <button className={styles.buttonBuy}>Comprar</button>
    </article>
  );
};

export default CardProduct;