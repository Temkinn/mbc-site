import styles from './styles.module.css'
import Image from 'next/image'

import Inst from './../../../public/instagram.png'
import youtube from './../../../public/youtube.png'

export default function Footer(){
	return (
        <footer className={styles.container}>
            <div id="adress" className={styles.inner}>
				<div className={styles.title}>Наши контакты</div>
				<div className={styles.line}><b>Phone: </b> +375444595259</div>
				<div className={styles.line}><b>Email: </b> <a href="mailto:mbc.coffee@gmail.com" target="_blank" rel="noreferrer noopener">mbc.coffee@gmail.com</a></div>
				<div className={styles.line}>Г. Лида, ул. Замковая 2</div>
				<div className={styles.line}>Будние: 8:00 - 21:00</div>
				<div className={styles.line}>Выходные: 8:00 - 22:00</div>
				<div className={styles.links}>
					<a href='https://www.youtube.com/@manualbrewcoffee?si=UjnzfuuAdH67HHZ0' className={styles.instagram}>
						<Image src={youtube} width={40} height={40}/>
					</a>
					<a href='https://www.instagram.com/mbc.culture/?igsh=cnk5N3RiNjk3aXRv#' className={styles.youtube}>
						<Image src={Inst} width={40} height={40}/>
					</a>
				</div>
			</div>
        </footer>
    )

}