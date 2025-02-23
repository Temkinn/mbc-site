import Link from 'next/link'
import styles from './styles.module.css'


export default function Welcome() {
	return (
        <div className={styles.container}>
			<div className={styles.titles}>
				<h1 className={styles.title}>MBC.CULTURE</h1>
				<h2 className={styles.subtitle}>Кофейня на каждый день</h2>
			</div>
			<nav className={styles.buttonContainer}>
				<Link href="#menu" className={styles.button1}>Наше меню</Link>
				<Link href="#adress" className={styles.button2}>Где мы?</Link>
				<Link href="#subscribe" className={styles.button3}>Подписка</Link>
			</nav>
        </div>
    )
}