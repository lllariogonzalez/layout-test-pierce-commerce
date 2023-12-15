import AvatarIcon from '../../Icons/AvatarIcon';
import CartIcon from '../../Icons/CartIcon';
import styles from './UserProfile.module.css';

const UserProfile = () => {
  return (
    <div className={styles.profileContainer}>
      <div className={styles.accountContainer}>
          <AvatarIcon />
        <span className={styles.myAccount}>Mi cuenta</span>
      </div>
      <CartIcon />
  </div>
  );
};

export default UserProfile;