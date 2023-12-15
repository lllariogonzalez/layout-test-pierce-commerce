import styles from "./TopCategories.module.css";

const TopCategories = () => {
  return (
    <section className={styles.categoriesContainer}>
      <h2 className={styles.title}>Visitá las categorías más populares</h2>
      <div className={styles.categoriesGrid}>
        <figure className={styles.category1}>
          <h3>Zapatillas</h3>
        </figure>
        <figure className={styles.category2}>
          <h3>Fútbol</h3>
        </figure>
        <figure className={styles.category4}>
          <h3>Pelotas</h3>
        </figure>
        <figure className={styles.category3}>
          <h3>Calzas</h3>
        </figure>
      </div>
    </section>
  );
};

export default TopCategories;