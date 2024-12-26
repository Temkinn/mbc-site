import styles from './choicestyles.module.css'

export default function SubsChoice(){

function choose(){
	const next = document.getElementById('allSubscribes')
	next.style.display = 'flex'
}

	return(
		<div className={styles.container}>
			<div className={styles.inner}>
				<div className={styles.title}>Все Просто!</div>
				<div className={styles.subtitle}>Осталось только выбрать</div>
			</div>
				<div
				onClick={() => choose()}
				className={styles.button}>Выбрать тариф</div>
				<div className={styles.dl}>
					<div className={styles.line} />
					<div className={styles.dot} />
				</div>
		</div>
	)
}