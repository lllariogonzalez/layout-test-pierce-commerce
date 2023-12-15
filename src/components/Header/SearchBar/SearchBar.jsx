import SearchIcon from "../../Icons/SearchIcon";
import styles from "./SearchBar.module.css";

const SearchBar = () => {
  return (
    <div className={styles.searchBar}>
      <div className={styles.iconSearch}>
        <SearchIcon />
      </div>
    </div>
  );
};

export default SearchBar;