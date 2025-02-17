import styles from './styles.module.css'
import Image from 'next/image'

export default function Company({name, photo, link, ratio}){
	return (
        <a href={link} target="_blank" className={styles.container}>
			<div className={styles.photo} style={{
				aspectRatio: ratio,
                objectFit: 'cover'
			}}>
				<Image src={photo} alt={name} loading='lazy' fill={true}/>
			</div>
			<div className={styles.name}>{name}</div>
        </a>
    )
}