import styles from './introstyles.module.css'


export default function SubsIntro(){
	return(
        <div id="subs" className={styles.container}>
            <h2 className={styles.mainTitle}>Подписка для розничных клиентов</h2>
            <div className={styles.logoContainer} />
			<h2 className={styles.donut}>Подписка на кофе</h2>
			<div className={styles.coffee} />
			<div className={styles.dl}>
				<div className={styles.dot} />
				<div className={styles.line} />
			</div>
		</div>
    )
}