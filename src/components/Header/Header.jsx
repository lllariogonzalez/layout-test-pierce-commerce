import NavBar from "./NavBar/NavBar";
import SearchBar from "./SearchBar/SearchBar";
import UserProfile from "./UserProfile/UserProfile";
import styles from "./Header.module.css";
import BurgerIcon from "../Icons/BurgerIcon";

const Header = () => {
  return (
    <div className={styles.headerContainer}>

      <header className={styles.headerDesktop}>
        <h1 className={styles.title}>Mi Tienda</h1>
        <div className={styles.userAction}>
          <SearchBar />
          <UserProfile />
        </div>
      </header>
      
      <div className={styles.headerMobile}>
        <header className={styles.header}>
          <div className={styles.burgerIcon}>
            <BurgerIcon />
          </div>
          <div className={styles.bussiness}>
            <h1 className={styles.title}>Mi Tienda</h1>
            <UserProfile />
          </div>
        </header>
        <SearchBar />
      </div>

      <NavBar />

    </div>
  );
};

export default Header;