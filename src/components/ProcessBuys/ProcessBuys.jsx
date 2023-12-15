import PaymentBox from '../Icons/PaymentBox';
import ShippingTruck from '../Icons/ShippingTruck';
import ShoppingBag from '../Icons/ShoppingBag';
import styles from './ProcessBuys.module.css';
import ProcessCard from './ProcessCard/ProcessCard';

const ProcessBuys = ()=>{
  return (
    <section className={styles.processBuysContainer}>
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
    </section>
  );
}

export default ProcessBuys;