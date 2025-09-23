import Image from 'next/image'
import styles from './styles.module.scss'

export default function Fact({ number, title, description, icon }) {
  return (
	<div className={styles.container}>
		<div className={styles.div}>
			<Image src={icon} alt={title} loading='lazy' style={{
				width: '100%',
				height: '100%'
			}} />
		</div>
		<div className={styles.info}>
			<div className={styles.titleLine}>
				<h3>{number}</h3>
				<h2>{title}</h2>
			</div>
			<p>{description}</p>
		</div>
	</div>
  )
}
