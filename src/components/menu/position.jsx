import styles from './position.module.css'
import Image from 'next/image'

export default function Position({name, photo, price, kpfc, description, amount}){
	return (
    <div key={name} className={styles.item}>
      <div className={styles.photo}>
        <div className={styles.photocontainer} unselectable="true">
          <div className={styles.front} unselectable="true">
            <Image
              src={photo}
              alt={name}
              loading="lazy"
              placeholder="blur"
              fill
            />
          </div>
          <div className={styles.desc} unselectable="true">
            <div className={styles.descInner} unselectable="true">
              <div className={styles.description}>{description}</div>
              <div className={styles.kpfc}>
                <p>{kpfc}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.info}>
        <div className={styles.name}>{name}</div>
        <div className={styles.g}>{amount}</div>
        <div className={styles.price}>{price} руб.</div>
      </div>
    </div>
  );
}