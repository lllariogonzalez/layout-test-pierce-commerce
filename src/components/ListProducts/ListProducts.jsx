import CardProduct from "../CardProduct/CardProduct";
import CarouselMenu from "../CarouselMenu/CarouselMenu";
import styles from "./ListProducts.module.css";

const ListProducts = () => {
  return (
      <ul className={styles.listProducts}>
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CarouselMenu />
      </ul>
  );
};

export default ListProducts;