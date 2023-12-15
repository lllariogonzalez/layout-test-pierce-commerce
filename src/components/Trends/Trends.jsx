import GroupCircleIconMobile from "../Icons/GrupoCircleIconMobile";
import ListProducts from "../ListProducts/ListProducts";
import styles from "./Trends.module.css";

const Trends = () => {
  return (
    <section className={styles.trendsContainer}>
      <h2 className={styles.title}>Tendencias</h2>
      <ListProducts />
      <div className={styles.groupCircleIcons}>
        <GroupCircleIconMobile />
      </div>
    </section>
  );
};

export default Trends;