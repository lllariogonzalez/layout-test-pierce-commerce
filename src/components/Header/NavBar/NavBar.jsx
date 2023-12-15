import FireOfertIcon from "../../Icons/FireOfertIcon";
import styles from "./NavBar.module.css";

const NavBar = () => {
  return (
      <nav className={styles.navContainer}>
        <ul className={styles.lista}>
          <li>Muebles</li>
          <li>Calzados</li>
          <li>Colchones</li>
          <li>Herramientas</li>
          <li>Ofertas<FireOfertIcon /></li>
        </ul>
      </nav>
  );
};

export default NavBar;