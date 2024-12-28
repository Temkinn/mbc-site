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
					price="56 BYN"
					old="70 BYN"/>
				<Subscribe2 title="Кофе в зернах"
					white={`МИКС ПОДПИСКА ${monthes[month]}`}
					price="54 BYN"
					old="68 BYN"/>
				<Subscribe3 title="Кофе в зернах"
					white={`ЭСПРЕССО ${monthes[month]}`}
					price="52 BYN"
					old=" 66 BYN"/>
				<Subscribe4 title="Кофе в дрип пакетах"
					white={`ДРИП ПОДПИСКА ${monthes[month]}`}
					price="96 BYN"
					old="120 BYN"/>
			</div>
			<a href="https://docs.google.com/forms/d/1Gx2PhXDeb8MmYds0EboKcs9T1BgHGB9QDdWEZ6sUdvg/edit" className={styles.button}>Подписаться</a>
        </div>
	)
}