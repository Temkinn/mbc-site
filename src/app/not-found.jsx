import Link from "next/link"
import styles from './styles.module.scss'

export default function NotFound(){
	return(
		<div className={styles.container}>
			<h1>Страница не найдена</h1>
			<h2>404</h2>
            <Link className={styles.link} href="/">
                Вернуться на главную
            </Link>
		</div>
	)
}