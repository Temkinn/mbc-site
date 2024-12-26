import styles from "./styles.module.css"


export default function Menu(){
	return(
        <div id="menu" className={styles.main}>
			<div className={styles.title}>Наше Меню</div>
			<div className={styles.links}>
				<div className={styles.up}>
					<div className={styles.linkContainer}><a href="#black" className={styles.link}>Black</a></div>
					<div className={styles.linkContainer}><a href="#milk" className={styles.link}>Milk</a></div>
					<div className={styles.linkContainer}><a href="#other" className={styles.link}>other</a></div>
				</div>
				<div className={styles.down}>
                    <div className={styles.linkContainer}><a href="#tea" className={styles.link}>tea</a></div>
                    <div className={styles.linkContainer}><a href="#breakfast" className={styles.link}>завтраки</a></div>
                </div>
			</div>
			<div className={styles.menu}>
				<div className={styles.black}>
					<div className={styles.unitTitle} id="black">Black</div>
					<div className={styles.unitSubtitle}>Наведитесь на позицию, чтобы посмотреть описание</div>
					<div className={styles.items}>
					</div>
				</div>
			</div>
        </div>
    )
}