import LocationIcon from '../Icons/LocationIcon';
import PierceIcon from '../Icons/PierceIcon';
import styles from './Footer.module.css';

const Footer = () => {
  return(
    <section className={styles.footerContainer}>

      <div className={styles.footerBussines}>

        <div className={styles.moreInfo}>
          <div className={styles.frequents}>
            <p>Condiciones</p>
            <p>Trabaja con nosotros</p>
            <p>Medios de pago</p>
            <p>Preguntas frecuentes</p>
          </div>
          <button className={styles.regretButton}>
            Botón de Arrepentimiento
          </button>
        </div>

        <div className={styles.logo}>
          <h1 className={styles.title}>Mi Tienda</h1>
        </div>

        <div className={styles.contact}>
          <div className={styles.branchOffices}>
            <LocationIcon />
            <span>Sucursales</span>
          </div>
          <div className={styles.contactMeans}>
            <p>Whatsapp 2215137270</p>
            <p>ecommerce@mateu.com.ar</p>
            <p>La Plata 1900, Buenos Aires, Argentina</p>
          </div>
        </div>

      </div>

      <div className={styles.footerTech}>
        <div className={styles.tech}>
          <span className={styles.pierce}>
            Powered by Pierce commerce
          </span>
          <PierceIcon />
        </div>
        <span className={styles.copyrigth}>
          © 2023 MateuSports
        </span>
      </div>
      <figure className={styles.legal}>
        <img src="DataFiscalWeb.png" alt="Data Fiscal Web" />
      </figure>
      <figure className={styles.vtex}>
        <img src="vtex.png" alt="VTEX logo" />
      </figure>
    </section>
  )
}

export default Footer;