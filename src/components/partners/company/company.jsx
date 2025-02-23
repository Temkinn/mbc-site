import styles from './styles.module.css'
import Image from 'next/image'
import Link from 'next/link'

export default function Company({name, photo, link, ratio}){
	return (
        <Link href={link} target="_blank" className={styles.container}>
			<div className={styles.photo} style={{
				aspectRatio: ratio,
                objectFit: 'cover'
			}}>
				<Image src={photo} alt={name} loading='lazy' fill={true}/>
			</div>
			<h3 className={styles.name}>{name}</h3>
        </Link>
    )
}