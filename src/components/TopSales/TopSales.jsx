import ListProducts from "../ListProducts/ListProducts";
import styles from "./TopSales.module.css";

const TopSales = () => {
  return (
    <section className={styles.salesContainer}>
      <h2 className={styles.title}>Los mas vendidos</h2>
      <ListProducts />
      <div className={styles.nav}>
      <svg xmlns="http://www.w3.org/2000/svg" width="109" height="10" viewBox="0 0 109 10" fill="none">
        <circle cx="5" cy="5" r="5" fill="#DC1E0F"/>
        <circle cx="38" cy="5" r="4.25" stroke="#DC1E0F" strokeWidth="1.5"/>
        <circle cx="71" cy="5" r="4.25" stroke="#DC1E0F" strokeWidth="1.5"/>
        <circle cx="104" cy="5" r="4.25" stroke="#DC1E0F" strokeWidth="1.5"/>
    </svg>
      </div>
    </section>
  );
};

export default TopSales;