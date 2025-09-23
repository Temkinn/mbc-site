import styles from './introstyles.module.css'

import Coffee from '@/containers/svgElements/coffee/Coffee'

export default function SubsIntro(){
	return(
        <div id="subs" className={styles.container}>
            <h2 className={styles.mainTitle}>Подписка для розничных клиентов</h2>
            <div className={styles.logoContainer} />
			<h2 className={styles.donut}>Подписка на кофе</h2>
			<Coffee />
			<div className={styles.dl}>
				<div className={styles.dot} />
				<div className={styles.line} />
			</div>
		</div>
    )
}