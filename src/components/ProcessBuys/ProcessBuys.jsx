import PaymentBox from '../Icons/PaymentBox';
import ShippingTruck from '../Icons/ShippingTruck';
import ShoppingBag from '../Icons/ShoppingBag';
import styles from './ProcessBuys.module.css';
import ProcessCard from './ProcessCard/ProcessCard';

const ProcessBuys = ()=>{
  return (
    <section className={styles.container}>
      <div className={styles.processBuysContainer}>
      <ProcessCard 
        title='Elegí los productos que vas a comprar'
        description='Si querés más de uno, sumalos a tu carrito.'>
        <ShoppingBag />
      </ProcessCard>
      <ProcessCard 
        title='Pagá con el medio de pago que quieras'
        description='Comprá con seguridad usamos la tecnología de Mercado Pago.'>
        <PaymentBox />
      </ProcessCard>
      <ProcessCard 
        title='Recibí el producto que esperás'
        description='Elegí la forma de entrega que prefieras ¡y listo! aseguramos tu entrega con Mercado Envíos.'>
        <ShippingTruck />
      </ProcessCard>
      </div>
      <div className={styles.nav}>
        <svg xmlns="http://www.w3.org/2000/svg" width="45" height="7" viewBox="0 0 45 7" fill="none">
          <circle cx="3.5" cy="3.5" r="3.5" fill="black"/>
          <circle cx="22.5" cy="3.5" r="3.25" stroke="black" strokeWidth="0.5"/>
          <circle cx="41.5" cy="3.5" r="3.25" stroke="black" strokeWidth="0.5"/>
        </svg>
      </div>
    </section>
  );
}

export default ProcessBuys;