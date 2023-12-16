import FireOfertIcon from "../../Icons/FireOfertIcon";
import styles from "./NavBarMobile.module.css";
import PropTypes from 'prop-types';

const NavBarMobile = ({handleNav}) => {
  return (
      <nav className={styles.navContainer}>
        <div className={styles.logo}>
          <h1 className={styles.title}>Mi Tienda</h1>
          <div onClick={handleNav} className={styles.close}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path fillRule="evenodd" clipRule="evenodd" d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z" fill="black"/>
            </svg>
          </div>
        </div>
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

NavBarMobile.propTypes = {
  handleNav: PropTypes.func.isRequired,
};

export default NavBarMobile;