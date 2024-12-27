import styles from './styles.module.css'
import Image from 'next/image'

export default function Company({name, photo, link}){
	return (
        <a href={link} target="_blank" className={styles.container}>
			<div className={styles.photo}>
				<Image src={photo} alt={name} fill/>
			</div>
			<div className={styles.name}>{name}</div>
        </a>
    )
}