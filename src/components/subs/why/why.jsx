import styles from './whystyles.module.css'


export default function SubsWhy(){
	return(
		<div className={styles.container}>
			<div className={styles.reasonContainer}>
				<div id='reason' className={styles.reason1}>
					<div className={styles.title}>
					Вы экономume деньги
					</div>
					<div className={styles.subtitle}>
					По подписке кофе дешевле,
					а значиm прияmнее
					</div>
				</div>
				<div id='reason' className={styles.reason2}>
					<div className={styles.title}>
					Мы экономим ваше время
					</div>
					<div className={styles.subtitle}>
					Выбираем под ваш вкус, пока вы заняты любимым делом
					</div>
				</div>
				<div id='reason' className={styles.reason3}>
					<div className={styles.title}>
					Разнообразим вкусовой
					опыт
					</div>
					<div className={styles.subtitle}>
					Ежемесячно новые лоты, разные
					страны
					</div>
				</div>
				<div id='reason' className={styles.reason4}>
					<div className={styles.title}>
					Стираем границы
					</div>
					<div className={styles.subtitle}>
					Кофе со всего мира у вас дома
					</div>
				</div>
			</div>
			<div className={styles.dl}>
				<div className={styles.dot} />
				<div className={styles.line} />
			</div>
		</div>
    )
}