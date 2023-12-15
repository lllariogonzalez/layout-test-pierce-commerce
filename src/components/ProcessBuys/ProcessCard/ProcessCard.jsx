import styles from './ProcessCard.module.css';
import PropTypes from 'prop-types';

const ProcessCard = ({ children, title, description })=>{
  return (
    <article className={styles.processCardContainer}>
      {children}
      <div className={styles.descriptionContainer}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
      </div>
    </article>
  );
}

ProcessCard.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default ProcessCard;