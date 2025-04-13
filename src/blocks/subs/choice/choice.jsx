import styles from './choicestyles.module.css'

export default function SubsChoice(){

function choose(){
	const next = document.getElementById('allSubscribes')
	next.style.display = 'flex'
}

	return(
		<div className={styles.container}>
			<div className={styles.inner}>
				<h2 className={styles.title}>Все Просто!</h2>
				<h3 className={styles.subtitle}>Осталось только выбрать</h3>
			</div>
				<button
				onClick={() => choose()}
				className={styles.button}>Выбрать тариф</button>
				<div className={styles.dl}>
					<div className={styles.line} />
					<div className={styles.dot} />
				</div>
		</div>
	)
}