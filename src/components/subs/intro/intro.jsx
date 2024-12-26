import styles from './introstyles.module.css'


export default function SubsIntro(){
	return(
        <div className={styles.container}>
            <div id="subscribe" className={styles.mainTitle}>Подписка для розничных клиентов</div>
            <div className={styles.logoContainer} />
			<div className={styles.donut}>Подписка на кофе</div>
			<div className={styles.coffee} />
			<div className={styles.dl}>
				<div className={styles.dot} />
				<div className={styles.line} />
			</div>
		</div>
    )
}