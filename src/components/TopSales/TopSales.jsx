import ListProducts from "../ListProducts/ListProducts";
import styles from "./TopSales.module.css";

const TopSales = () => {
  return (
    <section className={styles.salesContainer}>
      <h2 className={styles.title}>Las mas vendidas</h2>
      <ListProducts />
    </section>
  );
};

export default TopSales;