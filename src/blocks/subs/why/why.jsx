import styles from './whystyles.module.css'


export default function SubsWhy(){
	return(
		<div className={styles.container}>
			<div className={styles.reasonContainer}>
				<div id='reason' className={styles.reason1}>
					<h3 className={styles.title}>
					Вы экономume деньги
					</h3>
					<p className={styles.subtitle}>
					По подписке кофе дешевле,
					а значиm прияmнее
					</p>
				</div>
				<div id='reason' className={styles.reason2}>
					<h3 className={styles.title}>
					Мы экономим ваше время
					</h3>
					<p className={styles.subtitle}>
					Выбираем под ваш вкус, пока вы заняты любимым делом
					</p>
				</div>
				<div id='reason' className={styles.reason3}>
					<h3 className={styles.title}>
					Разнообразим вкусовой
					опыт
					</h3>
					<p className={styles.subtitle}>
					Ежемесячно новые лоты, разные
					страны
					</p>
				</div>
				<div id='reason' className={styles.reason4}>
					<h3 className={styles.title}>
					Стираем границы
					</h3>
					<p className={styles.subtitle}>
					Кофе со всего мира у вас дома
					</p>
				</div>
			</div>
			<div className={styles.dl}>
				<div className={styles.dot} />
				<div className={styles.line} />
			</div>
		</div>
    )
}