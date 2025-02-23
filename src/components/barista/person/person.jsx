import styles from './styles.module.css'
import Image from 'next/image'
import linkIcon from '@/../public/instagram.png'
import Link from 'next/link'

export default function Person({name, photo, link}){
	return (
        <div className={styles.container}>
			<div className={styles.photo}>
				<Image src={photo} alt={name} fill loading='lazy' placeholder='blur' className={styles.photo} />
			</div>
			<div className={styles.info}>
				<div className={styles.nickname}>
					<h4 className={styles.name}>{name}</h4>
					<p className={styles.bar}>Бариста</p>
				</div>
                    <Link href={link} className={styles.link} target="_blank">
						<Image src={linkIcon} loading='eager' alt="Link" width={24} height={24} />
					</Link>
			</div>
        </div>
    )
}