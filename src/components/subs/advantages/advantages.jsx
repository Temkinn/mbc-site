import styles from './styles.module.scss'
import Fact from './component/fact'

export default function Advantages() {
  return (
	<div className={styles.container}>
		<Fact number='1' title="Выбор тарифа" description='Ежемесячно мы подбираем самые интересные сорта.' />
		<div className={styles.dl}>
			<div className={styles.dot} />
			<div className={styles.line} />
		</div>
	</div>
  )
}
