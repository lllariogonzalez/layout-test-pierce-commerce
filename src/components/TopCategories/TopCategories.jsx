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
      <div className={styles.nav}>
        <svg xmlns="http://www.w3.org/2000/svg" width="8" height="7" viewBox="0 0 8 7" fill="none">
        <ellipse cx="4.26068" cy="3.5" rx="3.57977" ry="3.5" fill="black"/>
        </svg>

        <svg xmlns="http://www.w3.org/2000/svg" width="8" height="7" viewBox="0 0 8 7" fill="none">
        <path d="M7.75 3.5C7.75 5.28964 6.26455 6.75 4.42023 6.75C2.5759 6.75 1.09045 5.28964 1.09045 3.5C1.09045 1.71036 2.5759 0.25 4.42023 0.25C6.26455 0.25 7.75 1.71036 7.75 3.5Z" stroke="black" strokeWidth="0.5"/>
        </svg>

        <svg xmlns="http://www.w3.org/2000/svg" width="8" height="7" viewBox="0 0 8 7" fill="none">
        <path d="M7.75 3.5C7.75 5.28964 6.26455 6.75 4.42023 6.75C2.5759 6.75 1.09045 5.28964 1.09045 3.5C1.09045 1.71036 2.5759 0.25 4.42023 0.25C6.26455 0.25 7.75 1.71036 7.75 3.5Z" stroke="black" strokeWidth="0.5"/>
        </svg>

        <svg xmlns="http://www.w3.org/2000/svg" width="8" height="7" viewBox="0 0 8 7" fill="none">
        <path d="M7.75 3.5C7.75 5.28964 6.26455 6.75 4.42023 6.75C2.5759 6.75 1.09045 5.28964 1.09045 3.5C1.09045 1.71036 2.5759 0.25 4.42023 0.25C6.26455 0.25 7.75 1.71036 7.75 3.5Z" stroke="black" strokeWidth="0.5"/>
        </svg>
      </div>
      
    </section>
  );
};

export default TopCategories;