import styles from './position.module.css'
import Image from 'next/image'

export default function Position({name, photo, price, kpfc, description, amount}){
	return (
		<div key={name} className={styles.item}>
								<div className={styles.photo}>
									<div className={styles.photocontainer}>
										<div className={styles.front}>
											<Image src={photo} alt={name} loading='eager' fill/>
										</div>
										<div className={styles.desc}>
											<div className={styles.descInner}>
												<div className={styles.description}>{description}</div>
												<div className={styles.kpfc}><p>{kpfc}</p></div>
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