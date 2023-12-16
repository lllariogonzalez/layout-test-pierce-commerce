import SearchIcon from "../../Icons/SearchIcon";
import styles from "./SearchBar.module.css";

const SearchBar = () => {
  return (
    <section className={styles.searchContainer}>
      <div className={styles.searchBar}>
        <div className={styles.iconSearch}>
          <SearchIcon />
        </div>
      </div>
    </section>
  );
};

export default SearchBar;