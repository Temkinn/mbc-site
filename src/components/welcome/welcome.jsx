import styles from './styles.module.css'
import { useState, useEffect } from 'react'

export default function Welcome() {
	const [isClient, setIsClient] = useState(false)
 
	useEffect(() => {
	  setIsClient(true)
	}, [])
	return (

        <div className={styles.container}>
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