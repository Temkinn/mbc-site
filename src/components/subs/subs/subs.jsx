import styles from './styles.module.css'

import Subscribe1 from '../subscribe1/subscribe1'
import Subscribe2 from '../subscribe2/subscribe2'
import Subscribe3 from '../subscribe3/subscribe3'
import Subscribe4 from '../subscribe4/subscribe4'

const monthes = [
'ЯНВАРЬ',
'ФЕВРАЛЬ',
'МАРТ',
'АПРЕЛЬ',
'МАЙ',
'ИЮНЬ',
'ИЮЛЬ',
'АВГУСТ',
'СЕНТЯБРЬ',
'ОКТЯБРЬ',
'НОЯБРЬ',
'ДЕКАБРЬ'
]
const date = new Date()
const month = date.getUTCMonth()

export default function Subs(){
	return(
		<div id="allSubscribes" className={styles.container}>
			<div className={styles.subscribes}>
				<Subscribe1 title="Кофе в зернах"
					white={`ФИЛЬТР ПОДПИСКА ${monthes[month]}`}
					price="Мало"
					old="Много"/>
				<Subscribe2 title="Кофе в зернах"
					white={`МИКС ПОДПИСКА ${monthes[month]}`}
					price="Мало"
					old="Много"/>
				<Subscribe3 title="Кофе в зернах"
					white={`ЭСПРЕССО ${monthes[month]}`}
					price="Мало"
					old="Много"/>
				<Subscribe4 title="Кофе в дрип пакетах"
					white={`ДРИП ПОДПИСКА ${monthes[month]}`}
					price="Мало"
					old="Много"/>
			</div>
			{/* <a href="#subscribe" className={styles.button}>Подписаться</a> */}
        </div>
	)
}