import styles from './styles.module.css'

export default function Welcome() {
	return (

        <div id='main' className={styles.container}>
			<div className={styles.titles}>
				<h1 className={styles.title}>MBC.CULTURE</h1>
				<h2 className={styles.subtitle}>Кофейня на каждый день</h2>
			</div>
			<div className={styles.buttonContainer}>
				<a href="#menu" className={styles.button1}>Наше меню</a>
				<a href="#adress" className={styles.button2}>Где мы?</a>
				<a href="#subscribe" className={styles.button3}>Подписка</a>
			</div>
        </div>
    )
}